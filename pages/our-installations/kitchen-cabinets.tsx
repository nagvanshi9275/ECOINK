import Head from "next/head";
import FeatureGrid from "@/components/FeatureGrid";
import ServiceCTA from "@/components/ServiceCTA";
import { kitchenFeatures } from "@/data";

export default function KitchenCabinets() {
    return (
        <>
            <Head>
                <title>Kitchen Cabinets Melbourne | Custom Kitchen Design | Magri Cabinets</title>
                <meta
                    name="description"
                    content="Custom kitchen cabinets by Melbourne's trusted cabinet makers. Modern, traditional & shaker styles. Premium materials, smart storage solutions. Free design consultation."
                />
                <meta name="keywords" content="kitchen cabinets melbourne, custom kitchen design, kitchen renovation, cabinet maker melbourne" />
                <link rel="canonical" href="https://magricabinets.com.au/our-installations/kitchen-cabinets" />
            </Head>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-600 to-gray-700 pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-500/20 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-sm">
                        Our Installations
                    </div>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Kitchen <span className="text-orange-500">Cabinets</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Create the heart of your home with stunning custom kitchen cabinetry,
                        designed for your lifestyle and built to last a lifetime.
                    </p>
                </div>
            </section>

            {/* Service Description */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-6">
                                Kitchen Solutions
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Your Dream Kitchen Awaits
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                The kitchen is where memories are made — from family dinners to morning
                                coffees. At Magri Cabinets, we design and build custom kitchens that are
                                as functional as they are beautiful.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Our experienced designers work closely with you to understand how you
                                use your kitchen, then create a layout that maximizes space, improves
                                workflow, and reflects your personal style.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                From sleek modern designs to timeless shaker-style cabinetry, we craft
                                every element with precision using premium materials and hardware that
                                will serve you beautifully for decades.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {["Modern", "Shaker", "Hamptons", "Traditional", "Minimalist", "Industrial"].map((style) => (
                                    <span
                                        key={style}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                    >
                                        {style}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Stats Card */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-3xl p-10 shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                                    Kitchen Excellence
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { title: "Custom Design", desc: "Tailored to your lifestyle" },
                                        { title: "Premium Hardware", desc: "Blum & Hettich fittings" },
                                        { title: "Smart Storage", desc: "Innovative solutions" },
                                        { title: "Stone Benchtops", desc: "Wide selection available" },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                            <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-white font-semibold">{item.title}</p>
                                                <p className="text-gray-400 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-2xl -z-10" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-200 rounded-2xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <FeatureGrid
                features={kitchenFeatures}
                title="Kitchen Features"
                subtitle="Premium features that make your kitchen work beautifully for your family"
            />

            {/* CTA Section */}
            <ServiceCTA
                title="Start Your Kitchen Transformation"
                description="From initial design to final installation, we make creating your dream kitchen simple and stress-free."
            />
        </>
    );
}
