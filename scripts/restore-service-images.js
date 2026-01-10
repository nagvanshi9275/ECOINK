const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const servicesData = [
    {
        slug: 'kitchen-cabinets',
        galleryImages: ['/kitchen1.jpg', '/kitchen2.jpg', '/room.jpg', '/bedroom.jpg', '/kitchen1.jpg'],
        faqs: [
            { question: "How long does a kitchen renovation take?", answer: "Typically 4-6 weeks from design to installation." },
            { question: "What materials do you use?", answer: "We use HMR (High Moisture Resistant) board and premium 2-pack or laminate finishes." }
        ],
        additionalContent: "<h3>Premium Kitchen Solutions</h3><p>We provide end-to-end kitchen cabinetry solutions in Melbourne. Our focus is on quality and functionality.</p>",
        heroImage: '/kitchen1.jpg'
    },
    {
        slug: 'bathroom-vanities',
        galleryImages: ['/bathromr.jpg', '/toliet.jpg', '/bathromr.jpg', '/toliet.jpg', '/kitchen2.jpg'],
        faqs: [
            { question: "Are your vanities moisture resistant?", answer: "Yes, we use specially treated materials for wet areas to ensure longevity." }
        ],
        additionalContent: "<h3>Elegant Bathroom Vanities</h3><p>Transform your bathroom with custom-made vanities that fit your space perfectly.</p>",
        heroImage: '/bathromr.jpg'
    },
    {
        slug: 'laundry-cabinets',
        galleryImages: ['/room copy.jpg', '/kitchen2.jpg', '/room copy.jpg', '/kitchen1.jpg'],
        faqs: [
            { question: "Can you add drying racks?", answer: "Yes, we can integrate custom drying racks and pull-out hampers." }
        ],
        additionalContent: "<h3>Functional Laundry Designs</h3><p>Maximize your laundry efficiency with smart storage and ergonomic layouts.</p>",
        heroImage: '/room copy.jpg'
    },
    {
        slug: 'tv-cabinets',
        galleryImages: ['/library.jpg', '/room.jpg', '/library.jpg', '/room.jpg', '/bedroom1.jpg'],
        faqs: [
            { question: "Do you handle cable management?", answer: "Yes, all our entertainment units include integrated cable management solutions." }
        ],
        additionalContent: "<h3>Custom Entertainment Units</h3><p>Create the perfect viewing experience with a bespoke TV unit designed for your equipment.</p>",
        heroImage: '/library.jpg'
    },
    {
        slug: 'wardrobes',
        galleryImages: ['/bedroom1.jpg', '/bedroom.jpg', '/bedroom1.jpg', '/bedroom.jpg', '/library.jpg'],
        faqs: [
            { question: "Do you offer walk-in wardrobes?", answer: "Yes, we specialize in both walk-in and built-in wardrobe solutions." }
        ],
        additionalContent: "<h3>Smart Wardrobe Storage</h3><p>Organize your life with custom shelving, hanging space, and accessory drawers.</p>",
        heroImage: '/bedroom1.jpg'
    },
    {
        slug: 'furniture',
        galleryImages: ['/room.jpg', '/library.jpg', '/room.jpg', '/kitchen2.jpg'],
        faqs: [
            { question: "Can you create matching pieces?", answer: "Yes, we can design furniture to complement your existing interior design." }
        ],
        additionalContent: "<h3>Bespoke Crafted Furniture</h3><p>From coffee tables to home office desks, we craft high-quality furniture pieces.</p>",
        heroImage: '/room.jpg'
    }
];

async function main() {
    console.log('--- RESTORING SERVICE IMAGES AND DATA ---');

    for (const item of servicesData) {
        const service = await prisma.service.findUnique({
            where: { slug: item.slug }
        });

        if (service) {
            console.log(`Updating ${item.slug}...`);
            await prisma.service.update({
                where: { id: service.id },
                data: {
                    galleryImages: item.galleryImages,
                    faqs: item.faqs,
                    additionalContent: item.additionalContent,
                    heroImage: item.heroImage,
                    isVisible: true
                }
            });
        } else {
            console.warn(`Service ${item.slug} not found in DB. Creating...`);
            await prisma.service.create({
                data: {
                    slug: item.slug,
                    name: item.slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
                    description: `Custom ${item.slug.replace('-', ' ')} solutions.`,
                    galleryImages: item.galleryImages,
                    faqs: item.faqs,
                    additionalContent: item.additionalContent,
                    heroImage: item.heroImage,
                    isVisible: true
                }
            });
        }
    }

    console.log('--- RESTORATION COMPLETE ---');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
