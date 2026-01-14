import Head from "next/head";
import Link from "next/link";
import FeatureGrid from "@/components/FeatureGrid";
import ServiceCTA from "@/components/ServiceCTA";
import ServiceContactForm from "@/components/ServiceContactForm";
import { Button } from "@/components/ui/button";
import { bathroomFeatures } from "@/data";
import prisma from "@/lib/prisma";
import { GetServerSideProps } from "next";

interface Props {
    service: any;
}

export default function BathroomCabinets({ service }: Props) {
    return (
        <>
            <Head>
                <title>{service?.name || "Bathroom Cabinets & Vanities Melbourne"} | Magri Cabinets</title>
                <meta
                    name="description"
                    content={service?.description || "Custom bathroom cabinets and vanities by Melbourne's trusted cabinet makers. Modern wall-hung vanities, stone benchtops, and soft-close drawers. Free consultation."}
                />
                <meta name="keywords" content="bathroom cabinets melbourne, bathroom vanity, custom vanity, bathroom renovation melbourne" />
                <link rel="canonical" href="https://magricabinets.com.au/our-installations/bathroom-cabinets" />
            </Head>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-600 to-gray-700 pt-8 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-500/20 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-sm">
                        Our Installations
                    </div>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        {service?.name || "Bathroom Cabinets"}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        {service?.description || "Transform your bathroom into a luxurious retreat with our custom-designed vanities and storage solutions."}
                    </p>
                    <Link href="#contact-form">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                            Get Free Quote
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Service Description */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {service?.content ? (
                        <div className="dynamic-content font-sans">
                            <div dangerouslySetInnerHTML={{ __html: service.content }} />
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-500 italic">No content available for this installation.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Features Grid */}
            <FeatureGrid
                features={bathroomFeatures}
                title="Bathroom Features"
                subtitle="Premium features that transform your bathroom into a luxurious retreat"
            />

            {/* Contact Form Section */}
            <section id="contact-form" className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Request a Quote</h2>
                        <p className="text-gray-600">Fill out the form below and we'll get back to you with a competitive price.</p>
                    </div>
                    <ServiceContactForm defaultService="Bathroom Vanities" />
                </div>
            </section>

            {/* CTA Section */}
            <ServiceCTA
                title="Start Your Bathroom Transformation"
                description="From initial design to final installation, we make creating your dream bathroom simple and stress-free."
                ctaLink="#contact-form"
            />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const slug = 'bathroom-vanities';
    let service = null;

    try {
        service = await prisma.service.findUnique({
            where: { slug },
        });
    } catch (error) {
        console.error("Error fetching service from DB:", error);
    }

    if (!service) {
        service = {
            name: "Bathroom Cabinets",
            description: "Transform your bathroom into a luxurious retreat with our custom-designed vanities and storage solutions.",
            content: null
        };
    }

    return {
        props: {
            service: JSON.parse(JSON.stringify(service)) || null,
        },
    };
};
