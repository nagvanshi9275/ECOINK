import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data";
import { ArrowLeft } from "lucide-react";
import ServiceCTA from "@/components/ServiceCTA";
import { Button } from "@/components/ui/button";

export default function ProjectDetail() {
    const router = useRouter();
    const { id } = router.query;

    // Find the project based on the ID
    const project = projects.find((p) => p.id === id);

    if (!project) {
        // Optionally handle loading state or 404 better
        if (!id) return null; // Wait for hydration
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/">
                        <Button>Back to Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{project.title} | Magri Cabinets Portfolio</title>
                <meta name="description" content={project.description} />
            </Head>

            {/* Hero Image Section */}
            <div className="relative w-full h-[60vh] lg:h-[70vh] bg-gray-900">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                <div className="absolute top-8 left-4 sm:left-8 z-20">
                    <Link href="/#projects">
                        <Button variant="outline" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Projects
                        </Button>
                    </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12 lg:p-20 z-10">
                    <div className="max-w-7xl mx-auto">
                        <span className="inline-block px-4 py-1.5 bg-orange-500 text-white text-sm font-bold tracking-wider uppercase rounded-full mb-4">
                            {project.location}
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
                            {project.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Project</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-12">
                        {project.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                            <p className="text-gray-600">{project.location}</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <h3 className="font-bold text-gray-900 mb-2">Service</h3>
                            <p className="text-gray-600">Custom Cabinetry</p>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceCTA
                title="Inspired by this project?"
                description="Let's discuss how we can bring similar quality and style to your home."
            />
        </>
    );
}
