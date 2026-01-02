import Head from "next/head";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ServiceCTA from "@/components/ServiceCTA";
import { furnitureFeatures } from "@/data";

export default function Furniture() {
    return (
        <>
            <Head>
                <title>Custom Furniture Melbourne | Tables, Desks & Bookcases | Magri Cabinets</title>
                <meta
                    name="description"
                    content="Bespoke custom furniture by Melbourne's expert craftsmen. Dining tables, office desks, bookcases & more. Handcrafted to your specifications. Free consultation."
                />
                <meta name="keywords" content="custom furniture melbourne, bespoke furniture, dining table, office desk, bookcase, custom made furniture" />
                <link rel="canonical" href="https://magricabinets.com.au/furniture" />
            </Head>

            {/* Hero Section */}
            <Hero
                title="Bespoke Custom Furniture Melbourne"
                subtitle="From statement dining tables to functional office desks, we craft unique furniture pieces designed to your exact specifications."
                ctaText="Get FREE Quote"
                ctaLink="/contact"
            />

            {/* Service Description */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-6">
                                Custom Furniture
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                                Furniture Made For You
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                When off-the-shelf furniture just won't do, Magri Cabinets is here to
                                create something truly special. Our custom furniture service brings your
                                vision to life — whether it's a dining table to seat 12 or a home office
                                designed for productivity.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Working closely with you, we design and build furniture that fits your
                                space perfectly, matches your existing décor, and stands the test of time.
                                Every piece is handcrafted in our Melbourne workshop using premium materials
                                and traditional joinery techniques.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                From timber selection to final finish, we guide you through every step
                                of the process to ensure the finished piece exceeds your expectations.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {["Dining Tables", "Office Desks", "Bookcases", "Console Tables", "Coffee Tables", "Study Nooks"].map((style) => (
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
                                    Craftsmanship Matters
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Handcrafted</p>
                                            <p className="text-slate-400 text-sm">Made with care</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Premium Timber</p>
                                            <p className="text-slate-400 text-sm">Australian hardwoods</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Traditional Joinery</p>
                                            <p className="text-slate-400 text-sm">Built to last forever</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">Custom Finishes</p>
                                            <p className="text-slate-400 text-sm">Match your décor</p>
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
                features={furnitureFeatures}
                title="Furniture We Create"
                subtitle="Handcrafted pieces for every room in your home"
            />

            {/* CTA Section */}
            <ServiceCTA
                title="Commission Your Piece"
                description="From concept to creation, we'll bring your custom furniture vision to life."
            />
        </>
    );
}
