import { Metadata } from 'next';
import prisma from '@/lib/prisma';
import Hero from '@/components/Hero';
import ServiceContactForm from '@/components/ServiceContactForm';
import FeatureGrid from '@/components/FeatureGrid';
import IndustryUseCases from '@/components/IndustryUseCases';
import Testimonials from '@/components/Testimonials';
import FAQAccordion from '@/components/FAQAccordion';
import Image from 'next/image';
import Link from 'next/link';

// Force dynamic rendering since we are fetching data
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
    const service = await prisma.service.findUnique({
        where: { slug: 'cutting-edge-services' }
    });

    if (service) {
        return {
            title: service.seoTitle || "Cutting & Edge Services | Magri Cabinets Melbourne",
            description: service.seoDescription || "Leading Cutting & Edging Service in Melbourne. Precision panel cutting and edge banding for cabinet makers and DIY.",
            openGraph: {
                title: service.ogTitle || service.seoTitle || "Cutting & Edge Services",
                description: service.ogDescription || service.seoDescription || "Expert panel cutting services.",
                images: service.ogImage ? [service.ogImage] : undefined,
            }
        };
    }

    return {
        title: "Cutting & Edge Services | Magri Cabinets Melbourne",
        description: "Leading Cutting & Edging Service in Melbourne. Precision panel cutting and edge banding for cabinet makers, shopfitters, and DIY renovators.",
    };
}

export default async function CuttingEdgePage() {
    const dbService: any = await prisma.service.findUnique({
        where: { slug: 'cutting-edge-services' },
    });

    // --- FALLBACK DATA (Prompt Requirements) ---
    const serviceName = dbService?.name || "Cutting & Edge Services";
    const heroSubtitle = dbService?.heroSubtitle || "Your Best Local Cut & Edge Service";
    const description = dbService?.description || "Leading Cutting & Edging Service in Melbourne";

    // 1. Hero Data
    const heroData = {
        title: "Leading Cutting & Edging Service in Melbourne",
        subtitle: "At Cut & Edge, we specialise in precision panel cutting and edge banding services for cabinet makers, builders, shopfitters, and DIY renovators across Melbourne. Using advanced CNC machinery and high-quality materials, we deliver clean, accurate cuts and seamless edges — fast, reliable, and ready to assemble. Whether you need a single job or high-volume production, we’re committed to helping you save time, reduce waste, and achieve a flawless finish every time.",
        ctaText: dbService?.ctaText || "Get Free Quote",
        ctaLink: dbService?.ctaLink || "#contact-form",
        image: dbService?.heroImage || "/kitchen2.jpg",
        badge: "Your Best Local Cut & Edge Service",
        backgroundVideo: "/cuttingedge/VID20251121122504 (1).mp4"
    };

    // 2. Intro Text
    const introHeading = "Cutting & Edging Service";
    const introText = `
    <p class="mb-4">At Cut & Edge, we provide professional panel cutting and edge banding services tailored to your exact specifications. Whether you’re working with MDF, particleboard, plywood, or laminate, our advanced equipment ensures precise sizing and smooth, durable edges — every time.</p>
    <p>We work with a wide range of board products and cater to both custom one-off jobs and large-scale production runs. With fast turnaround times and exceptional attention to detail.</p>
  `;

    // 3. Our Services (Features)
    const features = [
        {
            id: 1,
            title: "CNC Panel Cutting",
            description: "Precision cutting to 0.1mm accuracy. Maximum sheet size: 3112mm x 1200mm. Vertical and horizontal drilling. Cutting list optimization available. Completion / turnaround depends on size: 3–5 days.",
            iconName: "Ruler"
        },
        {
            id: 2,
            title: "Edge Banding",
            description: "PVC, ABS, and veneer edging. Edge thickness: 1mm. Hot air edge banding technology. Flush trimming and buffing. Color matching service.",
            iconName: "Layers"
        },
        {
            id: 3,
            title: "Hardware Option",
            description: "We also can offer all the hardware for your flat pack. List includes:. Hinges. Drawers. Screws. Handles etc.",
            iconName: "Cog"
        },
        {
            id: 4,
            title: "Assembly & Pick-Up Option",
            description: "Assembly of your flat pack. All labeled. Can be picked or delivered.",
            iconName: "Package"
        },
        {
            id: 5,
            title: "Full Service Package",
            description: "Complete cut and edge solution. Nested cutting for efficiency. Quality control inspection. Organized and labeled panels. Delivery or pickup options.",
            iconName: "Gem"
        }
    ];

    // 4. Why Choose Us
    const whyChooseUs = dbService?.whyChooseUs ? (dbService.whyChooseUs as any[]) : [
        { title: "Fast Turnaround", description: "Standard jobs completed within 3–5 days. Express service available for urgent projects.", iconName: "Clock" },
        { title: "Precision Guaranteed", description: "State-of-the-art CNC machinery ensures consistent accuracy and quality.", iconName: "CheckCircle" },
        { title: "Competitive Pricing", description: "Volume discounts available. Cost-effective solution vs owning your own equipment.", iconName: "DollarSign" },
        { title: "Trade Expertise", description: "Over 10 years of cabinetry experience ensuring professional results.", iconName: "Award" }
    ];

    // 5. Suppliers (Images)
    // Using placeholders or whatever is in public. Real implementation would fetch from DB/CMS.
    const suppliers = dbService?.suppliers ? (dbService.suppliers as any[]) : [
        "/supplier1.png",
        "/supplier2.png",
        "/supplier3.png"
    ];

    // 6. Industry Use Cases
    const useCases = dbService?.industryUseCases ? (dbService.industryUseCases as any[]) : [
        { title: "Commercial", description: "High-volume panel processing for office fit-outs, retail displays, and commercial joinery projects.", link: "/contact" },
        { title: "Residential", description: "Custom kitchen carcasses, wardrobe internals, and bespoke furniture components for homes.", link: "/contact" },
        { title: "Custom Cabinets", description: "Precision parts for unique cabinet designs, ready for assembly and installation.", link: "/contact" },
        { title: "Flat Packs", description: "Complete flat pack solutions for DIY enthusiasts and trade professionals.", link: "/contact" },
    ];

    // 7. FAQs
    const faqs = dbService?.faqs ? (dbService.faqs as any[]) : [
        { id: 1, question: "What is your standard turnaround time?", answer: "Our standard turnaround is 3-5 working days, depending on the job size. We also offer express options for urgent requirements." },
        { id: 2, question: "Do you supply the board?", answer: "Yes, we can supply a wide range of board products including moisture-resistant MDF, particleboard, and plywood. You can also supply your own material if preferred." },
        { id: 3, question: "What file formats do you accept for cutting lists?", answer: "We accept cutting lists in Excel, PDF, or specialized cabinet software formats. Our team can also help optimize your list to minimize waste." },
        { id: 4, question: "Can you deliver my order?", answer: "Yes, we offer delivery services across Melbourne. Alternatively, you can pick up your order from our Tullamarine factory." },
    ];

    // 8. Testimonials (Using standard component logic)
    const testimonials = dbService?.testimonialIds ? [] : undefined; // Will use default if undefined

    return (
        <main className="min-h-screen bg-white">
            {/* 1. Hero Section */}
            <Hero
                title={heroData.title}
                subtitle={heroData.subtitle}
                ctaText={heroData.ctaText}
                ctaLink={heroData.ctaLink}
                backgroundImage={heroData.image}
                badge={heroData.badge}
                backgroundVideo={heroData.backgroundVideo}
            />

            {/* 2. Intro + Form Section */}
            <section className="py-20 lg:py-24" id="contact-form">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                        {/* Left Column: Content */}
                        <div className="lg:col-span-7">
                            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4 block">Expert Panel Processing</span>
                            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">{introHeading}</h2>
                            <div className="prose prose-lg prose-gray max-w-none text-gray-600 mb-10" dangerouslySetInnerHTML={{ __html: introText }} />

                            <div className="grid grid-cols-2 gap-6 mt-10">
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <div className="text-4xl font-bold text-orange-500 mb-2">3-5</div>
                                    <div className="font-semibold text-gray-900">Days Turnaround</div>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <div className="text-4xl font-bold text-orange-500 mb-2">0.1mm</div>
                                    <div className="font-semibold text-gray-900">Cutting Accuracy</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="lg:col-span-5 relative">
                            <ServiceContactForm defaultService="Cut & Edge Service" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Services List */}
            <FeatureGrid
                title="Our Cutting & Edge Services"
                subtitle="Comprehensive panel processing solutions tailored to your needs."
                badge="Services"
                features={features.map((f: any) => ({ ...f, iconName: f.iconName || 'Settings' }))}
                isChecklist={true}
            />

            {/* 4. Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Magri Cabinets?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">We combine advanced technology with traditional craftsmanship to deliver superior results.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChooseUs.map((item: any, idx: number) => (
                            <div key={idx} className="flex flex-col items-start p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                                    {/* Placeholder for Icon - using text first letter if icon mapping fails, but FeatureGrid handles it better. Here we use a different layout as requested */}
                                    <span className="font-bold text-lg">{idx + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Our Suppliers */}
            <section className="py-16 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Trusted By The Best</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 transition-all duration-500">
                        {suppliers.map((src: string, i: number) => (
                            <div key={i} className="relative w-32 h-16 mobile-app-icon">
                                <Image src={src} alt="Supplier Logo" fill className="object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Industry Use Cases */}
            <IndustryUseCases
                backgroundImage="/library.jpg" // Fallback to library image which looks commercial/high-end
                title="Industry Use Cases"
                subtitle="We serve a diverse range of clients from commercial builders to DIY home renovators."
                items={useCases}
            />

            {/* 7. Testimonials */}
            <Testimonials items={testimonials} />

            {/* 8. FAQ */}
            <FAQAccordion items={faqs.map((f: any) => ({ id: f.id, question: f.question, answer: f.answer }))} />

        </main>
    );
}
