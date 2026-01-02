import Head from "next/head";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ServiceCTA from "@/components/ServiceCTA";
import { tvFeatures } from "@/data";

export default function TVCabinets() {
    return (
        <>
            <Head>
                <title>Custom TV Cabinets & Entertainment Units Melbourne | Magri Cabinets</title>
                <meta
                    name="description"
                    content="Custom TV cabinets and entertainment units by Melbourne's expert cabinet makers. Wall-mounted, floating & traditional designs. Free consultation. 10-year warranty."
                />
                <meta name="keywords" content="tv cabinets melbourne, entertainment unit, custom tv unit, media cabinet, floating tv unit melbourne" />
                <link rel="canonical" href="https://magricabinets.com.au/tv-cabinets" />
            </Head>

            {/* Hero Section */}
            <Hero
                title="Custom TV Cabinets Melbourne"
                subtitle="Showcase your entertainment system in style with custom-designed cabinets that blend function with stunning aesthetics."
                ctaText="Get FREE Quote"
                ctaLink="/contact"
            />

            {/* Service Description */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-6">
                                TV Cabinets
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Entertainment in Style
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Your TV cabinet is often the focal point of your living room. At Magri
                                Cabinets, we create custom entertainment units that not only house your
                                technology but become a stunning design feature in their own right.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                From sleek floating units to full wall feature designs, we work with you
                                to create the perfect solution for your space. Our integrated cable
                                management systems keep cords hidden for a clean, clutter-free look.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                We design with your specific equipment in mind — whether you need space
                                for gaming consoles, sound systems, media players, or vinyl collections,
                                we'll create dedicated storage that keeps everything organized and accessible.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {["Floating Units", "Wall Features", "Traditional", "Modern", "Media Walls", "Corner Units"].map((style) => (
                                    <span
                                        key={style}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
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
                                    Entertainment Excellence
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Cable Management</p>
                                            <p className="text-gray-400 text-sm">Hidden cord systems</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Equipment Space</p>
                                            <p className="text-gray-400 text-sm">For all your devices</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Display Shelving</p>
                                            <p className="text-gray-400 text-sm">Show off collections</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Custom Sizing</p>
                                            <p className="text-gray-400 text-sm">Perfect for any TV</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-2xl -z-10" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-200 rounded-2xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <FeatureGrid
                features={tvFeatures}
                title="TV Cabinet Features"
                subtitle="Smart features for the ultimate entertainment setup"
            />

            {/* CTA Section */}
            <ServiceCTA
                title="Create Your Entertainment Space"
                description="From concept to installation, we'll design a TV cabinet that becomes the centerpiece of your living room."
            />
        </>
    );
}
