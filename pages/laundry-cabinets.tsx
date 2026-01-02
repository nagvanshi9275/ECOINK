import Head from "next/head";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ServiceCTA from "@/components/ServiceCTA";
import { laundryFeatures } from "@/data";

export default function LaundryCabinets() {
    return (
        <>
            <Head>
                <title>Custom Laundry Cabinets Melbourne | Magri Cabinets</title>
                <meta
                    name="description"
                    content="Transform your laundry with custom cabinets from Melbourne's trusted cabinet makers. Smart storage, quality materials. Free consultation. 10-year warranty."
                />
                <meta name="keywords" content="laundry cabinets melbourne, custom laundry, laundry renovation, laundry storage solutions" />
                <link rel="canonical" href="https://magricabinets.com.au/laundry-cabinets" />
            </Head>

            {/* Hero Section */}
            <Hero
                title="Custom Laundry Cabinets Melbourne"
                subtitle="Make laundry day a breeze with smart, stylish storage solutions designed for efficiency and built to last."
                ctaText="Get FREE Quote"
                ctaLink="/contact"
            />

            {/* Service Description */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-6">
                                Laundry Cabinets
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Efficient & Stylish Laundries
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                The laundry is one of the hardest-working rooms in your home. That's why
                                it deserves cabinetry that's both highly functional and beautifully designed.
                                At Magri Cabinets, we specialize in creating laundry spaces that work smarter.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                From overhead storage to pull-out hampers and dedicated folding stations,
                                we design custom solutions that maximize every inch of space while keeping
                                your laundry looking clean and organized.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Our laundry cabinetry is built using moisture-resistant materials that
                                withstand the demands of a working laundry, with durable finishes that
                                are easy to clean and maintain.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {["Overhead Storage", "Pull-Out Hampers", "Folding Stations", "Ironing Boards", "Utility Sinks", "Drying Rails"].map((style) => (
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
                                    Laundry Solutions
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Maximum Storage</p>
                                            <p className="text-gray-400 text-sm">Every inch utilized</p>
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
                                            <p className="text-gray-400 text-sm">Built for wet areas</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Easy Access</p>
                                            <p className="text-gray-400 text-sm">Smart pull-out systems</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Durable Finishes</p>
                                            <p className="text-gray-400 text-sm">Easy to clean</p>
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
                features={laundryFeatures}
                title="Laundry Features"
                subtitle="Smart features that make your laundry work harder for you"
            />

            {/* CTA Section */}
            <ServiceCTA
                title="Upgrade Your Laundry"
                description="From cramped to organized, we'll help you create a laundry that makes life easier."
            />
        </>
    );
}
