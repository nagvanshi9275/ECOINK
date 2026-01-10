import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetServerSideProps } from "next";
import ServiceCTA from "@/components/ServiceCTA";
import { ArrowRight } from "lucide-react";
import prisma from "@/lib/prisma";
import Testimonials from "@/components/Testimonials";

// Type definition
type Project = {
    id: string;
    title: string;
    location: string;
    category: string;
    description: string;
    image: string;
};

type Props = {
    projects: Project[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    try {
        const projectsRaw = await prisma.project.findMany({
            where: { isVisible: true },
            orderBy: { createdAt: 'desc' },
        });

        const projects = projectsRaw.map((p) => ({
            id: p.slug,
            title: p.title,
            location: p.location || "",
            category: (p as any).category || "Uncategorized",
            description: p.description,
            image: p.images && p.images.length > 0 ? p.images[0] : "/placeholder.jpg",
        }));

        return {
            props: { projects },
        };
    } catch (error) {
        console.error("Error fetching projects:", error);
        return {
            props: { projects: [] },
        };
    }
};

export default function Projects({ projects }: Props) {
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

            {/* Projects Grid (No Filter) */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
                        {projects.map((project) => (
                            <Link key={project.id} href={`/projects/${project.id}`} className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
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
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section (Replaces Stats) */}
            <Testimonials />

            {/* CTA Section */}
            <ServiceCTA
                title="Want to See Your Project Here?"
                description="Contact us today for a free consultation and let us transform your space into something extraordinary."
            />
        </>
    );
}
