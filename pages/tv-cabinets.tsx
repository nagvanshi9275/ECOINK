import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";
import ServicePageLayout from "@/components/ServicePageLayout";

interface Props {
    service: any;
    testimonials: any[];
    faqs: any[];
    seoSettings: any;
}

export default function TVCabinets({ service, testimonials, faqs, seoSettings }: Props) {
    // If no service data, we could show 404 or a skeletal loading state, 
    // but getServerSideProps usually handles redirects if critical data is missing.
    // Here we assume service is populated (even if with fallbacks).
    if (!service) return null;

    return (
        <ServicePageLayout
            service={service}
            testimonials={testimonials}
            faqs={faqs}
            seoSettings={seoSettings}
        />
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const slug = 'tv-cabinets';

    try {
        // Fetch Service Data
        let service = await prisma.service.findUnique({
            where: { slug },
        });

        // Fetch Global Testimonials (or filter if we had a relation)
        const testimonialsRaw = await prisma.testimonial.findMany({
            where: { isVisible: true },
            orderBy: { createdAt: 'desc' },
            take: 10 // Limit content
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

        // Fetch Global FAQs (Fallback if service doesn't have specific FAQs)
        const globalFaqs = await prisma.fAQ.findMany({
            where: { isVisible: true },
            orderBy: { order: 'asc' }
        });

        const seoSettings = await (prisma as any).seoSettings.findFirst({ where: { id: 1 } });

        // Handle static fallback if DB service is missing (Optional, but good for stability during dev)
        if (!service) {
            const { services } = require('@/data');
            const staticService = services.find((s: any) => s.id === slug);
            if (staticService) {
                service = {
                    name: staticService.title,
                    description: staticService.description,
                    content: null, // Static content usually not in this HTML format
                    heroImage: "/room.jpg", // Default
                    // Populate other fields with safe defaults
                } as any;
            }
        }

        return {
            props: {
                service: JSON.parse(JSON.stringify(service)) || null,
                testimonials: JSON.parse(JSON.stringify(testimonials)),
                faqs: JSON.parse(JSON.stringify(globalFaqs)),
                seoSettings: JSON.parse(JSON.stringify(seoSettings)),
            },
        };
    } catch (error) {
        console.error("Error fetching page data:", error);
        return {
            props: {
                service: null,
                testimonials: [],
                faqs: [],
                seoSettings: null
            }
        };
    }
};



