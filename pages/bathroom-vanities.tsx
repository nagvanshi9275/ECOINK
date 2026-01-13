import { GetStaticProps } from "next";
import prisma from "@/lib/prisma";
import ServicePageLayout from "@/components/ServicePageLayout";

interface Props {
    service: any;
    testimonials: any[];
    faqs: any[];
    seoSettings: any;
}

export default function BathroomVanities({ service, testimonials, faqs, seoSettings }: Props) {
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

export const getStaticProps: GetStaticProps = async () => {
    // Slug might be 'bathroom-vanities'
    const slug = 'bathroom-vanities';

    try {
        // Parallel queries for better performance using shared prisma instance
        const [testimonialsRaw, globalFaqs, seoSettings, serviceData] = await Promise.all([
            prisma.testimonial.findMany({
                where: { isVisible: true },
                orderBy: { createdAt: 'desc' },
                take: 10
            }),
            prisma.fAQ.findMany({
                where: { isVisible: true },
                orderBy: { order: 'asc' }
            }),
            prisma.seoSettings.findFirst({ where: { id: 1 } }),
            prisma.service.findUnique({ where: { slug } }).then(async (s: any) => {
                if (!s) return prisma.service.findUnique({ where: { slug: 'bathroom-vanity' } });
                return s;
            })
        ]);

        let service = serviceData;

        // Static Fallback
        if (!service) {
            const { services } = require('@/data');
            const staticService = services.find((s: any) => s.id === slug || s.id === 'bathroom-vanity');
            if (staticService) {
                service = {
                    name: staticService.title,
                    description: staticService.description,
                    content: null,
                    heroImage: "/bathromr.jpg",
                } as any;
            }
        }

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
                service: JSON.parse(JSON.stringify(service)) || null,
                testimonials: JSON.parse(JSON.stringify(testimonials)),
                faqs: JSON.parse(JSON.stringify(globalFaqs)),
                seoSettings: JSON.parse(JSON.stringify(seoSettings)),
            },
            revalidate: 60, // Revalidate every 60 seconds
        };
    } catch (error) {
        console.error("Error fetching page data:", error);
        return {
            props: {
                service: null,
                testimonials: [],
                faqs: [],
                seoSettings: null
            },
            revalidate: 60
        };
    }
};
