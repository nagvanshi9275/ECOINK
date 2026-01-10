const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // 1. Create default service pages
    const services = [
        { title: 'Bathroom Vanities', slug: 'bathroom-vanities', label: 'Bathroom Cabinets' },
        { title: 'Kitchen Cabinets', slug: 'kitchen-cabinets', label: 'Kitchen Cabinets' },
        { title: 'Laundry Cabinets', slug: 'laundry-cabinets', label: 'Laundry Cabinets' },
        { title: 'TV Cabinets', slug: 'tv-cabinets', label: 'TV Cabinets' },
        { title: 'Wardrobes', slug: 'wardrobes', label: 'Wardrobe' },
        { title: 'Furniture', slug: 'furniture', label: 'Furniture' },
    ];

    for (let i = 0; i < services.length; i++) {
        const s = services[i];
        await prisma.page.upsert({
            where: { slug: s.slug },
            update: {
                isPublished: true,
                showInNavbar: true,
                navbarLabel: s.label,
                navbarOrder: i + 1,
            },
            create: {
                title: s.title,
                slug: s.slug,
                isPublished: true,
                showInNavbar: true,
                navbarLabel: s.label,
                navbarOrder: i + 1,
                content: {}
            }
        });
    }

    // 2. Create other main pages
    const mainPages = [
        { title: 'Why Magri Cabinets?', slug: 'why-magri-cabinets', label: 'WHY MAGRI CABINETS?', order: 10 },
        { title: 'Our Installations', slug: 'our-installations', label: 'OUR INSTALLATIONS', order: 20 },
        { title: 'Projects', slug: 'projects', label: 'PROJECTS', order: 30 },
        { title: 'Blogs', slug: 'blogs', label: 'BLOGS', order: 40 },
    ];

    for (const p of mainPages) {
        await prisma.page.upsert({
            where: { slug: p.slug },
            update: {
                isPublished: true,
                showInNavbar: true,
                navbarLabel: p.label,
                navbarOrder: p.order,
            },
            create: {
                title: p.title,
                slug: p.slug,
                isPublished: true,
                showInNavbar: true,
                navbarLabel: p.label,
                navbarOrder: p.order,
                content: {}
            }
        });
    }

    console.log('Seed completed.');
}

main().catch(console.error).finally(() => prisma.$disconnect());
