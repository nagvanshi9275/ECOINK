import Head from "next/head";
import Link from "next/link";
import { ArrowRight, Award, Users, Wrench, Shield, Clock, ThumbsUp } from "lucide-react";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import ServiceCTA from "@/components/ServiceCTA";
import { Card, CardContent } from "@/components/ui/card";
import ProcessSteps from "@/components/ProcessSteps";

const valuePropositions = [
    {
        icon: Award,
        title: "30+ Years of Excellence",
        description: "Three decades of crafting premium cabinetry for Melbourne homes. Our experience means we anticipate challenges and deliver solutions that stand the test of time.",
    },
    {
        icon: Users,
        title: "Family-Owned Business",
        description: "As a family business, we treat every project as if it were our own home. You'll deal directly with the owners, ensuring personalized service from start to finish.",
    },
    {
        icon: Wrench,
        title: "Expert Craftsmanship",
        description: "Our team of skilled craftsmen combines traditional woodworking techniques with modern technology to create cabinets of exceptional quality.",
    },
    {
        icon: Shield,
        title: "10-Year Warranty",
        description: "We stand behind our work with a comprehensive 10-year structural warranty. That's our promise of quality and peace of mind.",
    },
    {
        icon: Clock,
        title: "On-Time Delivery",
        description: "We respect your time. Clear timelines, regular updates, and on-time delivery are standard with every Magri Cabinets project.",
    },
    {
        icon: ThumbsUp,
        title: "100% Custom Made",
        description: "No flat-packs or off-the-shelf solutions. Every cabinet is designed and built specifically for your space and requirements.",
    },
];

export default function WhyMagriCabinets() {
    return (
        <>
            <Head>
                <title>Why Choose Magri Cabinets | Melbourne's Trusted Cabinet Makers</title>
                <meta
                    name="description"
                    content="Discover why Melbourne homeowners trust Magri Cabinets. 30+ years experience, 10-year warranty, 100% custom made cabinetry. Family-owned, expert craftsmanship."
                />
                <meta name="keywords" content="melbourne cabinet makers, custom cabinets melbourne, why choose magri cabinets, trusted joinery melbourne" />
                <link rel="canonical" href="https://magricabinets.com.au/why-magri-cabinets" />
            </Head>

            {/* Hero Section */}
            <Hero
                title="Why Choose Magri Cabinets"
                subtitle="Melbourne's most trusted cabinet makers for over 30 years. Discover the difference that expertise, quality, and genuine care can make for your home."
                ctaText="Get FREE Quote"
                ctaLink="/contact"
            />

            {/* Value Propositions */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-4">
                            Our Values
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            The Magri Cabinets Difference
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            What sets us apart from other cabinet makers in Melbourne? It's our unwavering
                            commitment to quality, service, and your complete satisfaction.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {valuePropositions.map((item, index) => (
                            <Card
                                key={item.title}
                                className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                            >
                                <CardContent className="p-8 relative">
                                    <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                                        <item.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-400/10 to-amber-500/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Stats Card */}
                        <div className="relative order-2 lg:order-1">
                            <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-3xl p-12 shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                                    Our Track Record
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                                        <span className="text-white/80">Years of Experience</span>
                                        <span className="text-3xl font-bold text-amber-400">30+</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                                        <span className="text-white/80">Projects Completed</span>
                                        <span className="text-3xl font-bold text-amber-400">1000+</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                                        <span className="text-white/80">Happy Clients</span>
                                        <span className="text-3xl font-bold text-amber-400">500+</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                                        <span className="text-white/80">Client Satisfaction</span>
                                        <span className="text-3xl font-bold text-amber-400">100%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-400 rounded-2xl -z-10" />
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-200 rounded-2xl -z-10" />
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2">
                            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-6">
                                Our Story
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Crafting Excellence Since 1993
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Magri Cabinets began as a small workshop in Melbourne's eastern suburbs,
                                founded by Mark Magri with a simple mission: to create beautiful, functional
                                cabinetry that transforms homes and exceeds expectations.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Today, while we've grown in size and capability, our core values remain
                                unchanged. We're still a family-run operation, and we still approach every
                                project with the same passion and attention to detail that built our reputation.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                From our Melbourne workshop, we continue to craft custom cabinetry that
                                combines traditional craftsmanship with modern innovation. Every piece
                                that leaves our workshop carries our commitment to excellence.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                Get Your FREE Quote
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-4">
                            Our Process
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            How We Work
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            From initial consultation to final installation, we make the journey to your
                            dream cabinets smooth and enjoyable.
                        </p>
                    </div>

                    <div className="mt-12">
                        <ProcessSteps />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* CTA Section */}
            <ServiceCTA
                title="Experience the Magri Difference"
                description="Join hundreds of satisfied Melbourne homeowners. Contact us today for your free consultation."
            />
        </>
    );
}
