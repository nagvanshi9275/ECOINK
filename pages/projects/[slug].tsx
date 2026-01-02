import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data";
import { ChevronLeft, ArrowRight } from "lucide-react";
import ServiceCTA from "@/components/ServiceCTA";
import { Button } from "@/components/ui/button";

export default function ProjectDetail() {
    const router = useRouter();
    const { slug } = router.query;

    // Loading state
    if (!router.isReady) {
        return <div className="min-h-screen bg-white" />;
    }

    // Find the project based on the ID (slug)
    const project = projects.find((p) => p.id === slug);

    // 404 / Fallback State
    if (!project) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center p-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
                    <p className="text-gray-600 mb-8">The project you are looking for might have been moved or doesn&apos;t exist.</p>
                    <Link href="/projects">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                            Back to Portfolio
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    // Related Projects (Exclude current, take 3)
    const relatedProjects = projects
        .filter((p) => p.id !== slug)
        .slice(0, 3);

    return (
        <>
            <Head>
                <title>{project.title} | Magri Cabinets Portfolio</title>
                <meta name="description" content={project.description} />
            </Head>

            <div className="min-h-screen bg-white pb-24">
                {/* Container for Layout */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">

                    {/* 1️⃣ New Hero Section (Card Style - Matching Blog) */}
                    <div className="bg-[#545B63] rounded-[2.5rem] p-6 sm:p-8 lg:p-12 text-white flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 relative overflow-hidden mb-12 sm:mb-16">
                        {/* Hero Image */}
                        <div className="w-full lg:w-1/2 h-[250px] sm:h-[350px] lg:h-[400px] relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Text Content */}
                        <div className="w-full lg:w-1/2 z-10">
                            <Link href="/projects" className="inline-flex items-center text-gray-400 hover:text-white mb-6 sm:mb-8 transition-colors text-xs sm:text-sm font-medium">
                                <ChevronLeft className="w-4 h-4 mr-1" />
                                Back to Portfolio
                            </Link>

                            <div className="text-gray-400 font-medium mb-3 sm:mb-4 flex items-center gap-2 text-xs sm:text-base">
                                <span className="uppercase tracking-wider text-orange-400 font-bold">{project.location}</span>
                            </div>

                            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 tracking-tight">
                                {project.title}
                            </h1>

                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1E293B] rounded-full text-[10px] sm:text-sm font-medium hover:bg-[#334155] transition-colors cursor-pointer text-gray-300">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500" />
                                    Custom Design
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1E293B] rounded-full text-[10px] sm:text-sm font-medium hover:bg-[#334155] transition-colors cursor-pointer text-gray-300">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500" />
                                    Premium Materials
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1E293B] rounded-full text-[10px] sm:text-sm font-medium hover:bg-[#334155] transition-colors cursor-pointer text-gray-300">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500" />
                                    Installation
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2️⃣ Main Grid Layout (Content - Sidebar) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Left: Project Details Content */}
                        <div className="lg:col-span-8">
                            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-[#0F172A] prose-p:text-gray-600 prose-img:rounded-3xl prose-a:text-orange-500 hover:prose-a:text-orange-600 font-sans">
                                <h3>Project Overview</h3>
                                <p className="lead text-xl text-gray-600 mb-8 leading-relaxed">
                                    {project.description}
                                </p>
                                <p>
                                    This project exemplifies our commitment to quality craftsmanship and attention to detail.
                                    Working closely with the client, we designed a solution that not only meets their functional needs
                                    but also enhances the aesthetic appeal of their home. From the initial consultation to the final installation,
                                    every step was meticulously planned and executed.
                                </p>

                                <h3>Key Features</h3>
                                <ul>
                                    <li><strong>Custom Configuration:</strong> Tailored specifically to the client&apos;s space dimensions and storage requirements.</li>
                                    <li><strong>Premium Finishes:</strong> High-end materials selected for durability and timeless style.</li>
                                    <li><strong>Smart Storage:</strong> Integrated innovative storage solutions to maximize utility.</li>
                                    <li><strong>Professional Installation:</strong> Installed by our expert team ensuring a perfect fit and finish.</li>
                                </ul>

                                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-xl">
                                    <p className="text-orange-900 font-medium italic">
                                        &quot;We take pride in transforming our clients&apos; visions into reality, creating spaces that are loved for years to come.&quot;
                                    </p>
                                </div>

                                <p>
                                    Whether you are looking to renovate your kitchen, upgrade your bathroom, or add custom storage solutions,
                                    Magri Cabinets has the expertise to deliver exceptional results.
                                </p>
                            </div>
                        </div>

                        {/* Right: Sidebar / More Projects */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-24">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-bold text-[#0F172A]">More Projects</h3>
                                    <Link href="/projects">
                                        <Button size="sm" className="bg-[#334155] hover:bg-[#475569] text-white rounded-full px-6">
                                            See All
                                        </Button>
                                    </Link>
                                </div>

                                <div className="space-y-6">
                                    {relatedProjects.map((p) => (
                                        <Link key={p.id} href={`/projects/${p.id}`} className="group block">
                                            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                                                    <Image
                                                        src={p.image}
                                                        alt={p.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1 block">
                                                        {p.location}
                                                    </span>
                                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-2 leading-snug">
                                                        {p.title}
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-center text-white">
                                    <h4 className="text-xl font-bold mb-4">Start Your Project</h4>
                                    <p className="text-gray-400 mb-6 text-sm">Ready to bring your ideas to life? Get a free quote today.</p>
                                    <Link href="/get-a-custom-quote">
                                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold">
                                            Get Free Quote <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <ServiceCTA
                title="Love this design?"
                description="Our team at Magri Cabinets is ready to help you create a similar look for your home."
            />
        </>
    );
}
