
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const servicesToUpdate = [
    {
        slugs: ['kitchen-cabinets', 'kitchen'],
        name: "Custom Kitchen Cabinets",
        image: "/kitchen1.jpg",
        data: {
            galleryImages: ['/kitchen1.jpg', '/room.jpg', '/kitchen1.jpg', '/room.jpg'],
            faqs: [
                { question: "What materials do you use?", answer: "We use high-quality moisture-resistant board, 2-pack finishes, and premium hardware." },
                { question: "Do you handle installation?", answer: "Yes, our team handles the entire installation process." }
            ],
            additionalContent: "<h3>Transform Your Kitchen</h3><p>The kitchen is the heart of the home. Our custom designs ensure it beats with style and functionality.</p>"
        }
    },
    {
        slugs: ['laundry-cabinets', 'laundry-cabinet', 'laundry'],
        name: "Custom Laundry Cabinets",
        image: "/laundry.jpg",
        data: {
            galleryImages: ['/laundry.jpg', '/bathromr.jpg', '/laundry.jpg'],
            faqs: [
                { question: "Can you maximize small spaces?", answer: "Absolutely. We specialize in smart storage solutions for compact laundries." }
            ],
            additionalContent: "<h3>Efficient Laundry Design</h3><p>Make laundry day easier with a workspace designed around your needs.</p>"
        }
    },
    {
        slugs: ['wardrobes', 'wardrobe'],
        name: "Custom Wardrobes",
        image: "/bedroom1.jpg",
        data: {
            galleryImages: ['/bedroom1.jpg', '/library.jpg', '/bedroom1.jpg'],
            faqs: [
                { question: "Do you do walk-in wardrobes?", answer: "Yes, we design and build luxurious walk-in wardrobes." },
                { question: "What internal accessories do you offer?", answer: "We offer pull-down hangers, jewelry drawers, shoe racks, and more." }
            ],
            additionalContent: "<h3>Storage with Style</h3><p>A place for everything, and everything in its place. Our wardrobes bring order to your life.</p>"
        }
    },
    {
        slugs: ['furniture', 'custom-furniture'],
        name: "Custom Furniture",
        image: "/library.jpg",
        data: {
            galleryImages: ['/library.jpg', '/room.jpg', '/library.jpg'],
            faqs: [
                { question: "Can you make a matching dining table?", answer: "Yes, we can create custom furniture to match your existing pieces." }
            ],
            additionalContent: "<h3>Bespoke Furniture Pieces</h3><p>From entertainment units to home office desks, we craft unique furniture that lasts.</p>"
        }
    },
    {
        slugs: ['bathroom-vanities', 'bathroom-vanity', 'vanities'],
        name: "Bathroom Vanities",
        image: "/bathroom-vanity.jpg",
        data: {
            galleryImages: ['/bathroom-vanity.jpg', '/bathromr.jpg', '/bathroom-vanity.jpg'],
            faqs: [
                { question: "Are your vanities waterproof?", answer: "We use highly moisture-resistant materials suitable for wet areas." }
            ],
            additionalContent: "<h3>Luxury Bathrooms</h3><p>Elevate your bathroom with a vanity that combines elegance with practical storage.</p>"
        }
    }
];

async function main() {
    console.log("Seeding all service pages...");

    for (const serviceDef of servicesToUpdate) {
        let service = null;

        // Try to find by any of the slugs
        for (const slug of serviceDef.slugs) {
            service = await prisma.service.findUnique({ where: { slug } });
            if (service) break;
        }

        if (service) {
            console.log(`Updating existing service: ${service.name} (${service.slug})`);
            await prisma.service.update({
                where: { id: service.id },
                data: serviceDef.data
            });
        } else {
            // Create if strictly 'kitchen-cabinets' or primary slug doesn't exist? 
            // We'll create using the first slug if none found.
            const primarySlug = serviceDef.slugs[0];
            console.log(`Creating new service: ${serviceDef.name} (${primarySlug})`);
            await prisma.service.create({
                data: {
                    name: serviceDef.name,
                    slug: primarySlug,
                    description: `Custom ${serviceDef.name}`,
                    heroImage: serviceDef.image,
                    ...serviceDef.data,
                    isVisible: true
                }
            });
        }
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
