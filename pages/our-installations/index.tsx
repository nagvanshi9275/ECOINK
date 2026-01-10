import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ServiceCTA from "@/components/ServiceCTA";
import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";

interface Props {
    services: any[];
}

export default function OurInstallations({ services }: Props) {
    return (
        <>
            <Head>
                <title>Our Installations | Custom Cabinets Melbourne | Magri Cabinets</title>
                <meta
                    name="description"
                    content="Explore our range of custom cabinet installations including kitchen cabinets, bathroom vanities, wardrobes, TV cabinets, laundry cabinets and custom furniture. Melbourne's trusted cabinet makers."
                />
                <meta name="keywords" content="custom cabinets melbourne, kitchen cabinets, bathroom vanities, wardrobes, tv cabinets, laundry cabinets, custom furniture" />
                <link rel="canonical" href="https://magricabinets.com.au/our-installations" />
            </Head>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-600 to-gray-700 pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
                {/* Ambient Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-500/20 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-sm">
                        Our Services
                    </div>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Our <span className="text-orange-500">Installations</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        From kitchen renovations to bespoke furniture, we craft beautiful,
                        functional pieces that transform your home. Explore our range of custom cabinet solutions.
                    </p>
                </div>
            </section>

            {/* Installation Cards Grid */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((item) => (
                            <Link key={item.id} href={item.href} className="group">
                                <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                                    {/* Background Image */}
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                    {/* Content (Title & Arrow) */}
                                    <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                                        <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                        <p className="text-gray-300 text-sm mb-6 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center text-orange-500 font-bold group-hover:gap-3 transition-all duration-300">
                                            Explore Service <ArrowRight className="w-5 h-5 ml-2" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote CTA */}
            <ServiceCTA
                title="Ready for Your Installation?"
                description="Our expert team is ready to bring your vision to life with custom-designed cabinetry that meets your exact needs."
            />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    // Installation Types Data (Static Fallback)
    const staticInstallations = [
        {
            id: "bathroom-cabinets",
            title: "Bathroom Cabinets",
            description: "Custom-designed bathroom vanities and cabinets that combine functionality with stunning aesthetics. Transform your bathroom into a luxurious retreat.",
            href: "/our-installations/bathroom-cabinets",
            image: "/bathromr.jpg",
            order: 1
        },
        {
            id: "kitchen-cabinets",
            title: "Kitchen Cabinets",
            description: "Bespoke kitchen cabinetry tailored to your space and lifestyle. Experience the heart of your home with premium craftsmanship.",
            href: "/our-installations/kitchen-cabinets",
            image: "/kitchen1.jpg",
            order: 2
        },
        {
            id: "laundry-cabinets",
            title: "Laundry Cabinets",
            description: "Efficient and stylish laundry solutions that maximize storage and functionality. Make laundry day a breeze.",
            href: "/our-installations/laundry-cabinets",
            image: "/room copy.jpg",
            order: 3
        },
        {
            id: "tv-cabinets",
            title: "TV Cabinets",
            description: "Custom entertainment units designed to showcase your technology while keeping cables organized and hidden.",
            href: "/our-installations/tv-cabinets",
            image: "/library.jpg",
            order: 4
        },
        {
            id: "wardrobe",
            title: "Wardrobe",
            description: "Walk-in and built-in wardrobes with smart storage solutions. Organize your wardrobe with custom-fitted interiors.",
            href: "/our-installations/wardrobe",
            image: "/bedroom1.jpg",
            order: 5
        },
        {
            id: "furniture",
            title: "Furniture",
            description: "Unique, handcrafted furniture pieces designed to your exact specifications. From dining tables to office desks.",
            href: "/our-installations/furniture",
            image: "/room.jpg",
            order: 6
        },
    ];

    try {
        const dbServices = await prisma.service.findMany({
            where: { isVisible: true },
            orderBy: { order: 'asc' }
        });

        // Merge DB services with static data or use DB services if available
        let finalServices = dbServices.map(s => ({
            id: s.id,
            title: s.name,
            description: s.description,
            // Check if it matches a static one's slug
            href: staticInstallations.find(si => si.id === s.slug) ? staticInstallations.find(si => si.id === s.slug)!.href : `/${s.slug}`,
            image: s.image || "/placeholder.jpg"
        }));

        // If DB is empty, use static
        if (finalServices.length === 0) {
            finalServices = staticInstallations;
        }

        return {
            props: {
                services: JSON.parse(JSON.stringify(finalServices))
            }
        };
    } catch (error) {
        console.error("Error in OurInstallations getServerSideProps:", error);
        return {
            props: {
                services: staticInstallations
            }
        };
    }
};
