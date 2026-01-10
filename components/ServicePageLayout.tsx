import Hero from "@/components/Hero";
import ServiceContactForm from "@/components/ServiceContactForm";
import ServiceGallery from "@/components/ServiceGallery";
import FAQAccordion from "@/components/FAQAccordion";
import Testimonials from "@/components/Testimonials";
import ServiceAdditionalContent from "@/components/ServiceAdditionalContent";
import MetaHead from "@/components/seo/MetaHead";
import StructuredData from "@/components/seo/StructuredData";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

interface ServicePageLayoutProps {
    service: any;
    testimonials?: any[];
    faqs?: any[];
    seoSettings?: any;
}

export default function ServicePageLayout({ service, testimonials, faqs, seoSettings }: ServicePageLayoutProps) {
    // Prepare FAQ items: specific service FAQs > passed FAQs > fallback (handled by component if null)
    let displayFaqs = faqs;
    if (service.faqs && Array.isArray(service.faqs) && service.faqs.length > 0) {
        displayFaqs = service.faqs.map((f: any, i: number) => ({
            id: `faq-${i}`,
            question: f.question,
            answer: f.answer
        }));
    }

    const breadcrumbItems = [
        { name: 'Services', url: '/services' },
        { name: service.name, url: `/${service.slug}` }
    ];

    return (
        <>
            <MetaHead data={service} settings={seoSettings} />
            <StructuredData data={service} type="Service" />

            <div className="bg-white pt-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
            </div>

            {/* 1. Hero Section */}
            <Hero
                title={service.name}
                subtitle={service.heroSubtitle || service.description || "Premium Custom Cabinetry"}
                ctaText={service.ctaText || "Get FREE Quote"}
                ctaLink={service.ctaLink || "/contact"}
                backgroundImage={service.heroImage || "/kitchen2.jpg"}
                imageAlt={service.heroImageAlt}
                badge={service.heroBadge}
            />

            {/* 2. Content + Form Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Left: Content (7/12) */}
                        <div className="lg:col-span-7 min-w-0">
                            {service.content ? (
                                <div className="prose prose-lg prose-orange max-w-none text-gray-600 font-sans leading-relaxed break-words">
                                    <style jsx global>{`
                                        .prose h1, .prose h2, .prose h3 { color: #111827; font-weight: 800; margin-top: 1.5em; margin-bottom: 0.5em; line-height: 1.2; }
                                        .prose p { margin-bottom: 1.5em; line-height: 1.8; }
                                        .prose ul, .prose ol { margin-bottom: 1.5em; padding-left: 1.5em; }
                                        .prose li { margin-bottom: 0.5em; }
                                        .prose strong { color: #f97316; font-weight: 700; }
                                        .prose img { border-radius: 1rem; margin: 2em 0; width: 100%; height: auto; object-fit: cover; }
                                    `}</style>
                                    <div dangerouslySetInnerHTML={{ __html: service.content }} />
                                </div>
                            ) : (
                                <p className="text-gray-500 italic">No description available.</p>
                            )}
                        </div>

                        {/* Right: Form (5/12) */}
                        <div className="lg:col-span-5 relative">
                            <ServiceContactForm defaultService={service.name} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Image Gallery Section */}
            {service.galleryImages && service.galleryImages.length > 0 && (
                <ServiceGallery images={service.galleryImages} />
            )}

            {/* 4. FAQ Section */}
            {displayFaqs && displayFaqs.length > 0 && (
                <FAQAccordion items={displayFaqs} />
            )}

            {/* 5. Testimonial Section */}
            {testimonials && testimonials.length > 0 && (
                <Testimonials items={testimonials} />
            )}

            {/* 6. Additional Content Section */}
            {service.additionalContent && (
                <ServiceAdditionalContent content={service.additionalContent} />
            )}
        </>
    );
}
