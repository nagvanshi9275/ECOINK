import Head from "next/head";
import Link from "next/link";
import FeatureGrid from "@/components/FeatureGrid";
import ServiceCTA from "@/components/ServiceCTA";
import ServiceContactForm from "@/components/ServiceContactForm";
import { Button } from "@/components/ui/button";
import { furnitureFeatures } from "@/data";

interface Props {
    service: any;
}

export default function Furniture({ service }: Props) {
    return (
        <>
            <Head>
                <title>{service?.name || "Custom Furniture Melbourne"} | Magri Cabinets</title>
                <meta
                    name="description"
                    content={service?.description || "Custom furniture by Melbourne's trusted cabinet makers. Dining tables, office desks, bookcases, and console tables. Handcrafted to your specifications."}
                />
                <meta name="keywords" content="custom furniture melbourne, bespoke furniture, handcrafted furniture, dining table, office desk, bookcase" />
                <link rel="canonical" href="https://magricabinets.com.au/our-installations/furniture" />
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
                        {service?.name || "Custom Furniture"}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        {service?.description || "Unique, handcrafted furniture pieces designed to your exact specifications. Add character and quality to every room."}
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
                features={furnitureFeatures}
                title="Furniture Options"
                subtitle="Explore the range of custom furniture we can create for your home"
            />

            {/* Contact Form Section */}
            <section id="contact-form" className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Request a Quote</h2>
                        <p className="text-gray-600">Fill out the form below and we'll get back to you with a competitive price.</p>
                    </div>
                    <ServiceContactForm defaultService="Furniture" />
                </div>
            </section>

            {/* CTA Section */}
            <ServiceCTA
                title="Bring Your Furniture Ideas to Life"
                description="From initial concept to finished piece, we make creating your dream furniture simple and rewarding."
                ctaLink="#contact-form"
            />
        </>
    );
}

export const getServerSideProps: import("next").GetServerSideProps = async () => {
    const { PrismaClient } = require("@prisma/client");
    const prisma = new PrismaClient();
    const slug = 'furniture';
    let service = null;

    try {
        service = await prisma.service.findUnique({
            where: { slug },
        });
    } catch (error) {
        console.error("Error fetching service from DB:", error);
    } finally {
        await prisma.$disconnect();
    }

    if (!service) {
        service = {
            name: "Furniture",
            description: "Unique, handcrafted furniture pieces designed to your exact specifications. Add character and quality to every room.",
            content: null
        };
    }

    return {
        props: {
            service: JSON.parse(JSON.stringify(service)) || null,
        },
    };
};
