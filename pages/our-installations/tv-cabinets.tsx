import Head from "next/head";
import FeatureGrid from "@/components/FeatureGrid";
import ServiceCTA from "@/components/ServiceCTA";
import { tvFeatures } from "@/data";
import prisma from "@/lib/prisma";
import { GetServerSideProps } from "next";

interface Props {
    service: any;
}

export default function TVCabinets({ service }: Props) {
    return (
        <>
            <Head>
                <title>{service?.name || "TV Cabinets & Entertainment Units Melbourne"} | Magri Cabinets</title>
                <meta
                    name="description"
                    content={service?.description || "Custom TV cabinets and entertainment units by Melbourne's expert cabinet makers. Wall-mounted, floating & traditional designs. Free consultation."}
                />
                <meta name="keywords" content="tv cabinets melbourne, entertainment unit, custom tv unit, media cabinet, floating tv unit melbourne" />
                <link rel="canonical" href="https://magricabinets.com.au/our-installations/tv-cabinets" />
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
                        {service?.name || "TV Cabinets"}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {service?.description || "Showcase your entertainment system in style with our custom-designed cabinets and entertainment units."}
                    </p>
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
                features={tvFeatures}
                title="TV Cabinet Features"
                subtitle="Smart features that make your entertainment setup work harder for you"
            />

            {/* CTA Section */}
            <ServiceCTA
                title="Design Your Entertainment Space"
                description="From concept to installation, we'll design a TV cabinet that becomes the centerpiece of your living room."
            />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const slug = 'tv-cabinets';
    let service = null;

    try {
        service = await prisma.service.findUnique({
            where: { slug },
        });
    } catch (error) {
        console.error("Error fetching service from DB:", error);
    }

    if (!service) {
        // Find in static installations from the index data or direct match
        service = {
            name: "TV Cabinets",
            description: "Showcase your entertainment system in style with our custom-designed cabinets and entertainment units.",
            content: null
        };
    }

    return {
        props: {
            service: JSON.parse(JSON.stringify(service)) || null,
        },
    };
};
