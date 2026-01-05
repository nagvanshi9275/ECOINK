import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

// Data from pages/projects.tsx (Frontend Source of Truth)
const projects = [
    {
        id: "modern-kitchen-renovation",
        title: "Modern Kitchen Renovation",
        location: "Melbourne CBD",
        category: "Kitchen",
        description: "Complete kitchen transformation with custom cabinetry, stone benchtops, and modern fixtures.",
        image: "/kitchen2.jpg",
    },
    {
        id: "luxury-master-wardrobe",
        title: "Luxury Master Wardrobe",
        location: "Toorak",
        category: "Wardrobe",
        description: "Walk-in wardrobe with custom shelving, LED lighting, and velvet-lined drawers.",
        image: "/bedroom.jpg",
    },
    {
        id: "contemporary-bathroom",
        title: "Contemporary Bathroom",
        location: "South Yarra",
        category: "Bathroom",
        description: "Modern bathroom vanity with floating design and premium stone benchtop.",
        image: "/toliet.jpg",
    },
    {
        id: "custom-library-study",
        title: "Custom Library & Study",
        location: "Brighton",
        category: "Furniture",
        description: "Floor-to-ceiling bookshelves with integrated desk and hidden storage.",
        image: "/library.jpg",
    },
    {
        id: "family-living-space",
        title: "Family Living Space",
        location: "Hawthorn",
        category: "TV Cabinet",
        description: "Custom entertainment unit with cable management and display shelving.",
        image: "/room.jpg",
    },
    {
        id: "bespoke-joinery",
        title: "Bespoke Joinery",
        location: "Richmond",
        category: "Kitchen",
        description: "Hamptons-style kitchen with shaker doors and brass hardware.",
        image: "/kitchen1.jpg",
    },
    {
        id: "elegant-master-bedroom",
        title: "Elegant Master Bedroom",
        location: "Camberwell",
        category: "Wardrobe",
        description: "Built-in robes with mirror sliding doors and optimized storage.",
        image: "/bedroom1.jpg",
    },
    {
        id: "spa-inspired-bathroom",
        title: "Spa-Inspired Bathroom",
        location: "Kew",
        category: "Bathroom",
        description: "Double vanity with integrated lighting and rainfall shower custom enclosure.",
        image: "/bathromr.jpg",
    },
    {
        id: "home-office-setup",
        title: "Home Office Setup",
        location: "Malvern",
        category: "Furniture",
        description: "Custom desk with built-in shelving and cable management solutions.",
        image: "/room copy.jpg",
    },
];

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    try {
        const results = [];
        for (const p of projects) {
            const exists = await prisma.project.findUnique({ where: { slug: p.id } });

            if (!exists) {
                const newProject = await prisma.project.create({
                    data: {
                        title: p.title,
                        slug: p.id,
                        description: p.description,
                        location: p.location,
                        category: p.category,
                        images: [p.image],
                        isVisible: true,
                    }
                });
                results.push({ slug: p.id, status: 'Created' });
            } else {
                // Update to ensure consistency (especially category)
                await prisma.project.update({
                    where: { slug: p.id },
                    data: {
                        category: p.category,
                        description: p.description,
                        title: p.title,
                        location: p.location,
                        images: [p.image]
                    }
                });
                results.push({ slug: p.id, status: 'Updated' });
            }
        }
        res.json({ success: true, results });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e instanceof Error ? e.message : 'Unknown error' });
    } finally {
        await prisma.$disconnect();
    }
}
