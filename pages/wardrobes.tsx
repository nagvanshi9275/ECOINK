import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";
import ServicePageLayout from "@/components/ServicePageLayout";

interface Props {
    service: any;
    testimonials: any[];
    faqs: any[];
    seoSettings: any;
}

export default function Wardrobes({ service, testimonials, faqs, seoSettings }: Props) {
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
    try {
        let service = await prisma.service.findFirst({
            where: {
                OR: [
                    { slug: 'wardrobes' },
                    { slug: 'wardrobe' }
                ]
            },
        });

        // Use global testimonials/faqs just in case
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

        const globalFaqs = await prisma.fAQ.findMany({
            where: { isVisible: true },
            orderBy: { order: 'asc' }
        });

        const seoSettings = await (prisma as any).seoSettings.findFirst({ where: { id: 1 } });

        if (!service) {
            const { services } = require('@/data');
            const slug = 'wardrobes';
            const staticService = services.find((s: any) => s.id === slug || s.id === 'wardrobe');
            if (staticService) {
                service = {
                    name: staticService.title,
                    description: staticService.description,
                    content: null,
                    heroImage: "/bedroom1.jpg",
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
