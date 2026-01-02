import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ServiceCTA from "@/components/ServiceCTA";

// Projects Data
const projects = [
    {
        id: "project-1",
        title: "Modern Kitchen Renovation",
        location: "Melbourne CBD",
        category: "Kitchen",
        description: "Complete kitchen transformation with custom cabinetry, stone benchtops, and modern fixtures.",
        image: "/kitchen2.jpg",
    },
    {
        id: "project-2",
        title: "Luxury Master Wardrobe",
        location: "Toorak",
        category: "Wardrobe",
        description: "Walk-in wardrobe with custom shelving, LED lighting, and velvet-lined drawers.",
        image: "/bedroom.jpg",
    },
    {
        id: "project-3",
        title: "Contemporary Bathroom",
        location: "South Yarra",
        category: "Bathroom",
        description: "Modern bathroom vanity with floating design and premium stone benchtop.",
        image: "/toliet.jpg",
    },
    {
        id: "project-4",
        title: "Custom Library & Study",
        location: "Brighton",
        category: "Furniture",
        description: "Floor-to-ceiling bookshelves with integrated desk and hidden storage.",
        image: "/library.jpg",
    },
    {
        id: "project-5",
        title: "Family Living Space",
        location: "Hawthorn",
        category: "TV Cabinet",
        description: "Custom entertainment unit with cable management and display shelving.",
        image: "/room.jpg",
    },
    {
        id: "project-6",
        title: "Bespoke Joinery",
        location: "Richmond",
        category: "Kitchen",
        description: "Hamptons-style kitchen with shaker doors and brass hardware.",
        image: "/kitchen1.jpg",
    },
    {
        id: "project-7",
        title: "Elegant Master Bedroom",
        location: "Camberwell",
        category: "Wardrobe",
        description: "Built-in robes with mirror sliding doors and optimized storage.",
        image: "/bedroom1.jpg",
    },
    {
        id: "project-8",
        title: "Spa-Inspired Bathroom",
        location: "Kew",
        category: "Bathroom",
        description: "Double vanity with integrated lighting and rainfall shower custom enclosure.",
        image: "/bathromr.jpg",
    },
    {
        id: "project-9",
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

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-600 to-gray-700 pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
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
            <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${category === "All"
                                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                                    : "bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold rounded-full">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                                    <span className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-2">
                                        {project.location}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <Button
                                        size="sm"
                                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold border-none shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 w-fit"
                                    >
                                        View Project
                                    </Button>
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
