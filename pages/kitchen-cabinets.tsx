import Head from "next/head";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ServiceCTA from "@/components/ServiceCTA";
import { kitchenFeatures } from "@/data";

export default function KitchenCabinets() {
    return (
        <>
            <Head>
                <title>Custom Kitchen Cabinets Melbourne | Magri Cabinets</title>
                <meta
                    name="description"
                    content="Premium custom kitchen cabinets by Melbourne's trusted cabinet makers. Modern, traditional & shaker styles. Free design consultation. 10-year warranty."
                />
                <meta name="keywords" content="kitchen cabinets melbourne, custom kitchen, kitchen renovation, cabinet maker melbourne, kitchen design" />
                <link rel="canonical" href="https://magricabinets.com.au/kitchen-cabinets" />
            </Head>

            {/* Hero Section */}
            <Hero
                title="Custom Kitchen Cabinets Melbourne"
                subtitle="Create the heart of your home with stunning custom kitchen cabinetry, designed for your lifestyle and built to last a lifetime."
                ctaText="Get FREE Quote"
                ctaLink="/contact"
            />

            {/* Service Description */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-6">
                                Kitchen Cabinets
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                                Your Dream Kitchen Awaits
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                The kitchen is where memories are made — from family dinners to morning
                                coffees. At Magri Cabinets, we design and build custom kitchens that are
                                as functional as they are beautiful.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Our experienced designers work closely with you to understand how you
                                use your kitchen, then create a layout that maximizes space, improves
                                workflow, and reflects your personal style.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                From sleek modern designs to timeless shaker-style cabinetry, we craft
                                every element with precision using premium materials and hardware that
                                will serve you beautifully for decades.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {["Modern", "Shaker", "Hamptons", "Traditional", "Minimalist", "Industrial"].map((style) => (
                                    <span
                                        key={style}
                                        className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                                    >
                                        {style}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Stats / Trust Indicators */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-3xl p-10 shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                                    Kitchen Excellence
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Custom Design</p>
                                            <p className="text-slate-400 text-sm">Tailored to your lifestyle</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Premium Hardware</p>
                                            <p className="text-slate-400 text-sm">Blum & Hettich fittings</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Smart Storage</p>
                                            <p className="text-slate-400 text-sm">Innovative solutions</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Stone Benchtops</p>
                                            <p className="text-slate-400 text-sm">Wide selection available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-2xl -z-10" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-200 rounded-2xl -z-10" />
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
