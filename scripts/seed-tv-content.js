
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const slug = 'tv-cabinets';

    console.log(`Updating service: ${slug}`);

    // dummy images 
    const galleryImages = [
        '/room.jpg',
        '/kitchen1.jpg',
        '/bathromr.jpg',
        '/library.jpg'
    ];

    const additionalContent = `
    <h3>Why Choose Custom TV Cabinets?</h3>
    <p>Our custom TV cabinets are designed to fit your space perfectly, hiding unsightly cables and equipment while showcasing your TV and décor.</p>
    <ul>
        <li>Perfect fit for your room dimensions</li>
        <li>Hidden cable management</li>
        <li>Storage for gaming consoles and media players</li>
        <li>Matching style with your home furniture</li>
    </ul>
    <p>Contact us today to start your design process.</p>
  `;

    const faqs = [
        { question: "Can you match my existing furniture?", answer: "Yes, we can match materials and finishes to your existing décor." },
        { question: "How long does installation take?", answer: "Installation usually takes 1-2 days depending on complexity." },
        { question: "Do you provide 3D designs?", answer: "Yes, we provide fill 3D renders before manufacturing begins." }
    ];

    // We use updateMany in case there are duplicates or to avoid error if unique constraint issues (though slug is unique)
    // Try finding strict match first
    const existing = await prisma.service.findUnique({ where: { slug } });

    if (existing) {
        await prisma.service.update({
            where: { slug },
            data: {
                galleryImages: galleryImages,
                additionalContent: additionalContent,
                faqs: faqs
            }
        });
        console.log("Service updated successfully with new content fields.");
    } else {
        console.log("No service found with slug 'tv-cabinets'. Attempting to create or find alternate...");
        // Try 'tv-cabinet' (singular) just in case
        const singular = await prisma.service.findUnique({ where: { slug: 'tv-cabinet' } });
        if (singular) {
            await prisma.service.update({
                where: { slug: 'tv-cabinet' },
                data: {
                    galleryImages: galleryImages,
                    additionalContent: additionalContent,
                    faqs: faqs
                }
            });
            console.log("Service 'tv-cabinet' (singular) updated.");
        } else {
            console.log("Creating tv-cabinets service...");
            await prisma.service.create({
                data: {
                    name: "TV Cabinets",
                    slug: "tv-cabinets",
                    description: "Custom TV Cabinets",
                    galleryImages: galleryImages,
                    additionalContent: additionalContent,
                    faqs: faqs,
                    heroImage: "/room.jpg",
                    isVisible: true
                }
            });
            console.log("Created 'tv-cabinets' service.");
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
