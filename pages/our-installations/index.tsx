import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ServiceCTA from "@/components/ServiceCTA";

// Installation Types Data
const installations = [
    {
        id: "bathroom-cabinets",
        title: "Bathroom Cabinets",
        description: "Custom-designed bathroom vanities and cabinets that combine functionality with stunning aesthetics. Transform your bathroom into a luxurious retreat.",
        href: "/our-installations/bathroom-cabinets",
        image: "/bathromr.jpg",
    },
    {
        id: "kitchen-cabinets",
        title: "Kitchen Cabinets",
        description: "Bespoke kitchen cabinetry tailored to your space and lifestyle. Experience the heart of your home with premium craftsmanship.",
        href: "/our-installations/kitchen-cabinets",
        image: "/kitchen1.jpg",
    },
    {
        id: "laundry-cabinets",
        title: "Laundry Cabinets",
        description: "Efficient and stylish laundry solutions that maximize storage and functionality. Make laundry day a breeze.",
        href: "/our-installations/laundry-cabinets",
        image: "/room copy.jpg",
    },
    {
        id: "tv-cabinets",
        title: "TV Cabinets",
        description: "Custom entertainment units designed to showcase your technology while keeping cables organized and hidden.",
        href: "/our-installations/tv-cabinets",
        image: "/library.jpg",
    },
    {
        id: "wardrobe",
        title: "Wardrobe",
        description: "Walk-in and built-in wardrobes with smart storage solutions. Organize your wardrobe with custom-fitted interiors.",
        href: "/our-installations/wardrobe",
        image: "/bedroom1.jpg",
    },
    {
        id: "furniture",
        title: "Furniture",
        description: "Unique, handcrafted furniture pieces designed to your exact specifications. From dining tables to office desks.",
        href: "/our-installations/furniture",
        image: "/room.jpg",
    },
];

export default function OurInstallations() {
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
                        {installations.map((item) => (
                            <Link key={item.id} href={item.href} className="group">
                                <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                                    {/* Background Image */}
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                        <div className="w-12 h-1 bg-orange-500 mb-4 rounded-full" />
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-300 mb-4 line-clamp-2">
                                            {item.description}
                                        </p>
                                        <div className="inline-flex items-center text-orange-400 font-bold uppercase tracking-wider text-sm group-hover:text-orange-300 transition-colors">
                                            View Details
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 lg:py-28 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Quality <span className="text-orange-500">Craftsmanship</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Every installation is backed by our 30+ years of experience and commitment to excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Premium Materials", description: "We use only the finest materials sourced from reputable Australian suppliers." },
                            { title: "Expert Installation", description: "Our experienced craftsmen ensure perfect fitting and finishing every time." },
                            { title: "10-Year Warranty", description: "All our installations come with a comprehensive 10-year structural warranty." },
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                                    <span className="text-white font-bold text-xl">{index + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <ServiceCTA
                title="Ready to Transform Your Space?"
                description="Contact us today for a free consultation and let us help you create the perfect custom cabinets for your home."
            />
        </>
    );
}
