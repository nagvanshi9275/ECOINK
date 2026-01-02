import Head from "next/head";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ServiceCTA from "@/components/ServiceCTA";
import { wardrobeFeatures } from "@/data";

export default function Wardrobes() {
    return (
        <>
            <Head>
                <title>Custom Wardrobes Melbourne | Walk-In & Built-In Robes | Magri Cabinets</title>
                <meta
                    name="description"
                    content="Custom wardrobes by Melbourne's trusted cabinet makers. Walk-in wardrobes, built-in robes & sliding doors. Smart storage solutions. Free consultation. 10-year warranty."
                />
                <meta name="keywords" content="custom wardrobes melbourne, walk in wardrobe, built in robes, sliding wardrobes, wardrobe storage" />
                <link rel="canonical" href="https://magricabinets.com.au/wardrobes" />
            </Head>

            {/* Hero Section */}
            <Hero
                title="Custom Wardrobes Melbourne"
                subtitle="Transform your bedroom with luxuriously designed wardrobes featuring smart storage solutions for every item in your collection."
                ctaText="Get FREE Quote"
                ctaLink="/contact"
            />

            {/* Service Description */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-6">
                                Wardrobes
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Wardrobes That Inspire
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                A well-designed wardrobe does more than store clothes — it simplifies
                                your mornings and brings a sense of calm to your bedroom. At Magri
                                Cabinets, we create custom wardrobe solutions that are as beautiful as
                                they are practical.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Whether you dream of a luxurious walk-in wardrobe or need to maximize
                                storage in a compact space, we design bespoke solutions with dedicated
                                zones for every category — from hanging space and shelving to shoe racks
                                and accessory drawers.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Choose from hinged or sliding doors in a range of finishes, and let us
                                create a wardrobe that reflects your personal style while keeping
                                everything organized and accessible.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {["Walk-In", "Built-In", "Sliding Doors", "Hinged Doors", "Mirrored", "Corner Robes"].map((style) => (
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
                                    Wardrobe Excellence
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Custom Interiors</p>
                                            <p className="text-gray-400 text-sm">Designed for you</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">LED Lighting</p>
                                            <p className="text-gray-400 text-sm">Illuminate your style</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Soft-Close Doors</p>
                                            <p className="text-gray-400 text-sm">Premium hardware</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Accessory Drawers</p>
                                            <p className="text-gray-400 text-sm">Velvet-lined options</p>
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
                features={wardrobeFeatures}
                title="Wardrobe Features"
                subtitle="Luxurious features that make getting dressed a pleasure"
            />

            {/* CTA Section */}
            <ServiceCTA
                title="Design Your Dream Wardrobe"
                description="From walk-in luxury to space-saving solutions, we'll create the perfect wardrobe for your lifestyle."
            />
        </>
    );
}
