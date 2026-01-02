import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ServiceCTA from "@/components/ServiceCTA";
import { ArrowRight } from "lucide-react";

// Projects Data
const projects = [
    {
        id: "modern-kitchen-renovation",
        title: "Modern Kitchen Renovation",
        location: "Melbourne CBD",
        category: "Kitchen",
        description: "Complete kitchen transformation with custom cabinetry, stone benchtops, and modern fixtures.",
        image: "/kitchen2.jpg",
    },
    {
        id: "luxury-master-wardrobe",
        title: "Luxury Master Wardrobe",
        location: "Toorak",
        category: "Wardrobe",
        description: "Walk-in wardrobe with custom shelving, LED lighting, and velvet-lined drawers.",
        image: "/bedroom.jpg",
    },
    {
        id: "contemporary-bathroom",
        title: "Contemporary Bathroom",
        location: "South Yarra",
        category: "Bathroom",
        description: "Modern bathroom vanity with floating design and premium stone benchtop.",
        image: "/toliet.jpg",
    },
    {
        id: "custom-library-study",
        title: "Custom Library & Study",
        location: "Brighton",
        category: "Furniture",
        description: "Floor-to-ceiling bookshelves with integrated desk and hidden storage.",
        image: "/library.jpg",
    },
    {
        id: "family-living-space",
        title: "Family Living Space",
        location: "Hawthorn",
        category: "TV Cabinet",
        description: "Custom entertainment unit with cable management and display shelving.",
        image: "/room.jpg",
    },
    {
        id: "bespoke-joinery",
        title: "Bespoke Joinery",
        location: "Richmond",
        category: "Kitchen",
        description: "Hamptons-style kitchen with shaker doors and brass hardware.",
        image: "/kitchen1.jpg",
    },
    {
        id: "elegant-master-bedroom",
        title: "Elegant Master Bedroom",
        location: "Camberwell",
        category: "Wardrobe",
        description: "Built-in robes with mirror sliding doors and optimized storage.",
        image: "/bedroom1.jpg",
    },
    {
        id: "spa-inspired-bathroom",
        title: "Spa-Inspired Bathroom",
        location: "Kew",
        category: "Bathroom",
        description: "Double vanity with integrated lighting and rainfall shower custom enclosure.",
        image: "/bathromr.jpg",
    },
    {
        id: "home-office-setup",
        title: "Home Office Setup",
        location: "Malvern",
        category: "Furniture",
        description: "Custom desk with built-in shelving and cable management solutions.",
        image: "/room copy.jpg",
    },
];

const categories = ["All", "Kitchen", "Bathroom", "Wardrobe", "TV Cabinet", "Furniture"];

export default function Projects() {
    return (
        <>
            <Head>
                <title>Our Projects | Custom Cabinet Portfolio | Magri Cabinets Melbourne</title>
                <meta
                    name="description"
                    content="Explore our portfolio of custom cabinet projects in Melbourne. See our kitchen renovations, bathroom vanities, wardrobes, and custom furniture installations."
                />
                <meta name="keywords" content="cabinet projects melbourne, kitchen renovation portfolio, custom cabinets gallery, melbourne joinery work" />
                <link rel="canonical" href="https://magricabinets.com.au/projects" />
            </Head>

            {/* Hero Section - Hidden on Mobile */}
            <section className="hidden lg:block relative bg-gradient-to-br from-gray-600 to-gray-700 pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
                {/* Ambient Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-500/20 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-sm">
                        Portfolio
                    </div>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Our <span className="text-orange-500">Projects</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Explore our recent work and see how we&apos;ve transformed Melbourne homes
                        with our premium custom cabinetry.
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-6 sm:py-8 bg-white border-b border-gray-100 overflow-hidden sticky top-[80px] z-30 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center lg:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`whitespace-nowrap px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex-shrink-0 cursor-pointer ${category === "All"
                                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                                    : "bg-gray-50 text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-transparent hover:border-orange-100"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100"
                            >
                                <div className="relative h-40 sm:h-56 lg:h-64 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10">
                                        <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-orange-500 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-3 sm:p-5 lg:p-6 flex flex-col flex-1">
                                    <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-orange-500 transition-colors">
                                        {project.title}
                                    </h3>

                                    <div className="mt-auto">
                                        <p className="text-gray-600 text-[10px] sm:text-xs lg:text-sm mb-3 line-clamp-2">
                                            {project.description}
                                        </p>
                                        <div className="inline-flex items-center text-orange-500 font-bold text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                                            View Project
                                            <ArrowRight className="w-3 h-3 ml-1 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { number: "1000+", label: "Projects Completed" },
                            { number: "500+", label: "Happy Clients" },
                            { number: "30+", label: "Years Experience" },
                            { number: "100%", label: "Satisfaction Rate" },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <ServiceCTA
                title="Want to See Your Project Here?"
                description="Contact us today for a free consultation and let us transform your space into something extraordinary."
            />
        </>
    );
}
