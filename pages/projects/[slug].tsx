import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { GetServerSideProps } from "next";
import { Button } from "@/components/ui/button";
import ServiceCTA from "@/components/ServiceCTA";
import FAQAccordion from "@/components/FAQAccordion";
import Testimonials from "@/components/Testimonials";
import {
    ChevronLeft,
    Calendar,
    MapPin,
    Tag,
    MoveHorizontal,
    Quote,
    ChevronRight
} from "lucide-react";
import prisma from "@/lib/prisma";
import MetaHead from "@/components/seo/MetaHead";
import StructuredData from "@/components/seo/StructuredData";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

// --- Types ---
type FAQ = {
    question: string;
    answer: string;
};

type Project = {
    id: string;
    title: string;
    description: string;
    content: string | null;
    location: string;
    category: string;
    completionDate: string; // ISO or formatted string
    heroImage: string;
    beforeImage: string | null;
    afterImage: string | null;
    images: string[];
    testimonialText: string | null;
    testimonialClient: string | null;
    faqs: FAQ[] | null;
    metaTitle: string | null;
    metaDescription: string | null;
    slug: string;
};

interface Props {
    project: any | null;
    seoSettings?: any;
    globalFaqs?: any[];
    testimonials?: any[];
}

// --- Components ---

// 1. Before/After Slider Component
const BeforeAfterSlider = ({ before, after, beforeAlt, afterAlt }: { before: string, after: string, beforeAlt?: string, afterAlt?: string }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        let clientX;

        if ('touches' in event) {
            clientX = event.touches[0].clientX;
        } else {
            clientX = (event as MouseEvent).clientX;
        }

        const position = ((clientX - containerRect.left) / containerRect.width) * 100;
        setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        const handleGlobalMove = (e: MouseEvent | TouchEvent) => {
            if (isDragging) handleMove(e);
        };
        const handleGlobalUp = () => setIsDragging(false);

        window.addEventListener('mousemove', handleGlobalMove);
        window.addEventListener('touchmove', handleGlobalMove);
        window.addEventListener('mouseup', handleGlobalUp);
        window.addEventListener('touchend', handleGlobalUp);

        return () => {
            window.removeEventListener('mousemove', handleGlobalMove);
            window.removeEventListener('touchmove', handleGlobalMove);
            window.removeEventListener('mouseup', handleGlobalUp);
            window.removeEventListener('touchend', handleGlobalUp);
        };
    }, [isDragging]);

    return (
        <div ref={containerRef} className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl">
            {/* After Image (Base) */}
            <Image src={after} alt={afterAlt || "After Renovation"} fill className="object-cover" quality={100} />
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm z-10">AFTER</div>

            {/* Before Image (Overlay) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <div className="relative w-full h-full">
                    <Image src={before} alt={beforeAlt || "Before Renovation"} fill className="object-cover" quality={100} />
                </div>
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm z-10">BEFORE</div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-orange-500">
                    <MoveHorizontal size={20} />
                </div>
            </div>
        </div>
    );
};

// 2. Project Gallery Slider Component (Service Gallery Style)
const ProjectGallerySlider = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 25}%)`,
                    display: 'flex',
                    width: '100%'
                }}
            >
                {[...images, ...images, ...images].map((imgSrc, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 aspect-[12/9] relative"
                    >
                        <Image
                            src={imgSrc}
                            alt="Project Detail Gallery"
                            fill
                            priority={index < 4}
                            className="object-cover border-r border-white/5"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            quality={90}
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
                <button
                    onClick={prevSlide}
                    className="p-3 bg-white/90 backdrop-blur shadow-xl rounded-full text-gray-900 transition-all hover:bg-orange-500 hover:text-white group"
                >
                    <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" />
                </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
                <button
                    onClick={nextSlide}
                    className="p-3 bg-white/90 backdrop-blur shadow-xl rounded-full text-gray-900 transition-all hover:bg-orange-500 hover:text-white group"
                >
                    <ChevronRight className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" />
                </button>
            </div>
        </div>
    );
};

// --- Page Component ---

export default function ProjectDetail({ project, seoSettings, globalFaqs, testimonials }: Props) {
    if (!project) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
                <Link href="/projects"><Button>Back to Projects</Button></Link>
            </div>
        </div>
    );

    const breadcrumbItems = [
        { name: 'Projects', url: '/projects' },
        { name: project.title, url: `/projects/${project.slug}` }
    ];

    // Determine FAQs to display: Project specific + Global
    const projectFaqs = (project.faqs && Array.isArray(project.faqs))
        ? project.faqs.map((f: any, i: number) => ({ id: `project-faq-${i}`, question: f.question, answer: f.answer }))
        : [];

    const displayFaqs = [...projectFaqs, ...(globalFaqs || [])];

    // Prepare testimonials: Project specific (if valid) + Global
    let displayTestimonials = testimonials || [];
    if (project.testimonialText && project.testimonialClient) {
        const projectTestimonial = {
            id: 'project-specific',
            author: project.testimonialClient,
            role: 'Happy Client',
            quote: project.testimonialText,
            rating: 5,
            image: null, // Ensure image property exists
            date: new Date().getFullYear().toString() // Or project completion date year
        };
        displayTestimonials = [projectTestimonial, ...displayTestimonials];
    }

    return (
        <>
            <MetaHead data={project} settings={seoSettings} />
            <StructuredData data={project} type="WebPage" />

            <main className="bg-white pb-24">

                {/* 1️⃣ Hero Section */}
                <section className="relative pt-12 lg:pt-24 pb-20 bg-gray-900 overflow-hidden">
                    <div className="absolute inset-0 opacity-40">
                        <Image
                            src={project.heroImage}
                            alt={project.heroImageAlt || project.title}
                            fill
                            className="object-cover"
                            priority
                            quality={100}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <div className="inline-block px-4 py-1.5 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                            Project Showcase
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
                            {project.description}
                        </p>
                        <Link href="/get-a-custom-quote">
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-xl text-lg font-bold shadow-lg shadow-orange-500/20 transition-all hover:scale-105">
                                Get a Free Quote
                            </Button>
                        </Link>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24">

                        {/* 2️⃣ Main Content Section (Left) */}
                        <div className="lg:col-span-7 xl:col-span-8 space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="w-12 h-1 bg-orange-500 rounded-full" />
                                    Project Description
                                </h2>
                                <div
                                    className="prose prose-lg max-w-none text-gray-600 prose-headings:text-gray-900 prose-p:leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: project.content || "" }}
                                />
                            </div>
                        </div>

                        {/* 3️⃣ Project Information (Right) */}
                        <div className="lg:col-span-5 xl:col-span-4">
                            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 sticky top-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Project Details</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white rounded-xl shadow-sm text-orange-500">
                                            <Tag size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Category</p>
                                            <p className="font-bold text-gray-900">{project.category}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white rounded-xl shadow-sm text-orange-500">
                                            <Calendar size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Date</p>
                                            <p className="font-bold text-gray-900">
                                                {project.completionDate ? new Date(project.completionDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).replace(' ', ', ') : 'N/A'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white rounded-xl shadow-sm text-orange-500">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Location</p>
                                            <p className="font-bold text-gray-900">{project.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4️⃣ Before & After Section */}
                {project.beforeImage && project.afterImage && (
                    <section className="bg-white py-16 lg:py-24 text-center">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Before and After Renovation</h2>
                            <BeforeAfterSlider
                                before={project.beforeImage}
                                after={project.afterImage}
                                beforeAlt={project.beforeImageAlt}
                                afterAlt={project.afterImageAlt}
                            />
                        </div>
                    </section>
                )}

                {/* 5️⃣ Project Gallery Section (Slider) */}
                {project.images && project.images.length > 0 && (
                    <section className="py-16 lg:py-24 bg-white overflow-hidden relative group">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-gray-900 italic">Project <span className="text-orange-500">Gallery</span></h2>
                            </div>
                        </div>

                        <div className="relative">
                            <ProjectGallerySlider images={project.images} />
                        </div>
                    </section>
                )}

                {/* 7️⃣ FAQ Section (Using Shared Component) */}
                {displayFaqs && displayFaqs.length > 0 && (
                    <FAQAccordion items={displayFaqs} />
                )}

                {/* 6️⃣ Testimonials Section (Slider) */}
                {displayTestimonials.length > 0 && (
                    <Testimonials items={displayTestimonials} />
                )}


            </main>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const slug = params?.slug as string;

    try {
        let project = await prisma.project.findUnique({
            where: { slug }
        });

        // If not found in DB, try to fallback or just return 404. 
        // Given constraints, we want to show the 'Ballan' project as the main demo if no specific/valid project is found, 
        // OR if the found project lacks the specific new fields, we fill them for the demo.

        let serializedProject: any = null;

        if (project) {
            serializedProject = JSON.parse(JSON.stringify(project));
        } else {
            // Fallback for "Only One Project" scenario if DB is empty or slug mismatches
            serializedProject = {
                id: 'ballan-kitchen',
                title: 'Ballan – Kitchen Makeover', // Specific Title
                description: 'This kitchen makeover, finished in late 2024, was designed together with our client to bring their dream space to life. Using a mix of high-quality materials, we created a timeless look that combines elegance, durability, and everyday functionality.',
                content: `<p>At Magri Cabinets, we love turning kitchen ideas into reality. For the Ballan Kitchen Makeover, we worked side by side with the homeowner to design a kitchen that’s stylish, practical, and tailored to their needs.</p><p>This project features Polytec thermolaminated doors in the classic Ballarat profile, finished in Porcelain Smooth for a sleek, modern feel. To elevate the design, we installed a 40mm YDL Mahal Ivory stone benchtop, adding strength, brightness, and a stunning focal point.</p><p>The transformation has completely refreshed the home—what was once a darker, dated space is now light, spacious, and welcoming. Every choice was carefully made to balance beauty with functionality, resulting in a kitchen that’s both practical and personal.</p><p>This project is a true example of the craftsmanship and attention to detail that Magri Cabinets brings to every kitchen we create.</p>`,
                location: 'Ballan',
                category: 'Kitchen Renovation',
                completionDate: new Date('2024-11-01').toISOString(),
                heroImage: '/placeholder.jpg', // Will be replaced by actual logic handling
                images: [],
                isVisible: true
            };
        }

        // No longer injecting hardcoded defaults. We use what's in the DB.
        // We'll just provide empty arrays/nulls if missing to prevent crashes.
        if (!serializedProject.images) serializedProject.images = [];
        if (!serializedProject.faqs) serializedProject.faqs = [];
        if (!serializedProject.tags) serializedProject.tags = [];


        const seoSettings = await (prisma as any).seoSettings.findFirst({ where: { id: 1 } });

        const globalFaqs = await prisma.fAQ.findMany({
            where: { isVisible: true },
            orderBy: { order: 'asc' }
        });

        const testimonialsRaw = await prisma.testimonial.findMany({
            where: { isVisible: true },
            orderBy: { createdAt: 'desc' },
            take: 10
        });

        const testimonials = testimonialsRaw.map((t: any) => ({
            id: t.id,
            author: t.clientName,
            quote: t.content,
            role: t.role,
            rating: t.rating,
            image: t.avatarUrl,
            date: new Date(t.createdAt).toLocaleDateString()
        }));

        return {
            props: {
                project: serializedProject,
                seoSettings: JSON.parse(JSON.stringify(seoSettings)),
                globalFaqs: JSON.parse(JSON.stringify(globalFaqs)),
                testimonials: JSON.parse(JSON.stringify(testimonials)),
            }
        };

    } catch (e) {
        console.error("Error fetching project:", e);
        return { notFound: true };
    }
};
