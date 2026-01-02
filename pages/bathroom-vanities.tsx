import Head from "next/head";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ServiceCTA from "@/components/ServiceCTA";
import { bathroomFeatures } from "@/data";

export default function BathroomVanities() {
    return (
        <>
            <Head>
                <title>Custom Bathroom Vanities Melbourne | Magri Cabinets</title>
                <meta
                    name="description"
                    content="Transform your bathroom with custom-made vanities from Melbourne's trusted cabinet makers. Wall-hung, freestanding & corner vanities. Free consultation. 10-year warranty."
                />
                <meta name="keywords" content="bathroom vanities melbourne, custom vanity units, bathroom cabinets, bathroom renovation melbourne" />
                <link rel="canonical" href="https://magricabinets.com.au/bathroom-vanities" />
            </Head>

            {/* Hero Section */}
            <Hero
                title="Custom Bathroom Vanities Melbourne"
                subtitle="Transform your bathroom into a luxurious retreat with beautifully crafted, custom-designed vanities built to your exact specifications."
                ctaText="Get FREE Quote"
                ctaLink="/contact"
            />

            {/* Service Description */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-6">
                                Bathroom Vanities
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                                Beautifully Designed Vanities
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Your bathroom vanity is more than just a functional piece — it's the
                                centrepiece of your bathroom. At Magri Cabinets, we craft custom vanities
                                that perfectly balance style and function.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Whether you prefer a sleek wall-hung design, a classic freestanding unit,
                                or something completely unique, we work with you to create a vanity that
                                fits your space, suits your style, and exceeds your expectations.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                From compact powder room vanities to large master bathroom suites, every
                                piece is made-to-measure using premium, moisture-resistant materials that
                                will look stunning for years to come.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {["Wall-Hung", "Freestanding", "Corner Units", "Double Basins", "Compact", "Floating"].map((style) => (
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
                                    Why Choose Our Vanities?
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Made to Measure</p>
                                            <p className="text-slate-400 text-sm">Perfect fit for any space</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Moisture Resistant</p>
                                            <p className="text-slate-400 text-sm">Built to last in wet areas</p>
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
                                            <p className="text-slate-400 text-sm">Premium stone options</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Soft-Close Hardware</p>
                                            <p className="text-slate-400 text-sm">Premium quality fittings</p>
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
                features={bathroomFeatures}
                title="Vanity Features"
                subtitle="Every bathroom vanity we create includes premium features as standard"
            />

            {/* CTA Section */}
            <ServiceCTA
                title="Design Your Dream Bathroom"
                description="From concept to completion, we'll help you create a stunning bathroom vanity that transforms your space."
            />
        </>
    );
}
