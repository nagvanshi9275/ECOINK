const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding PRODUCTION-LIKE data from frontend files...');

    const modelsToClear = [
        'heroBanner', 'testimonial', 'contactMessage', 'partner', 'fAQ',
        'menuItem', 'pageSection', 'page', 'project', 'blogPost',
        'mediaAsset', 'category', 'tag', 'service', 'contentSection'
    ];

    for (const model of modelsToClear) {
        try {
            if (prisma[model]) {
                await prisma[model].deleteMany();
                console.log(`Cleared ${model}`);
            }
        } catch (e) { console.warn(`Could not clear ${model}`); }
    }

    // 1. Admin
    await prisma.adminUser.upsert({
        where: { email: 'admin@magricabinets.com.au' },
        update: {},
        create: {
            email: 'admin@magricabinets.com.au',
            password: 'secure_admin_password',
            role: 'ADMIN',
        },
    });

    // 2. Hero Banners
    const heroBannersData = [
        {
            heading: 'Custom Kitchen Cabinets',
            subheading: 'Premium joinery for your dream kitchen in Melbourne.',
            image: '/kitchen1.jpg',
            ctaText: 'View Kitchens',
            ctaLink: '/kitchen-cabinets',
            order: 0
        },
        {
            heading: 'Modern Wardrobes',
            subheading: 'Smart storage solutions for every bedroom.',
            image: '/bedroom1.jpg',
            ctaText: 'Explore Storage',
            ctaLink: '/wardrobes',
            order: 1
        },
        {
            heading: 'Luxury Bathroom Vanities',
            subheading: 'Elegant designs to transform your bathroom.',
            image: '/bathromr.jpg',
            ctaText: 'See Vanities',
            ctaLink: '/bathroom-vanities',
            order: 2
        },
    ];

    for (const h of heroBannersData) {
        await prisma.heroBanner.create({ data: h });
    }

    // 3. Services (Installations)
    const servicesData = [
        { name: 'Bathroom Vanities', slug: 'bathroom-vanities', description: 'Transform your bathroom into a luxurious retreat', image: '/bathromr.jpg', order: 0 },
        { name: 'Furniture', slug: 'furniture', description: 'Unique handcrafted furniture for every room', image: '/room.jpg', order: 1 },
        { name: 'Kitchen Cabinets', slug: 'kitchen-cabinets', description: 'Bespoke kitchen cabinetry tailored to your lifestyle', image: '/kitchen1.jpg', order: 2 },
        { name: 'Laundry Cabinets', slug: 'laundry-cabinets', description: 'Efficient and stylish laundry storage solutions', image: '/room copy.jpg', order: 3 },
        { name: 'TV Cabinets', slug: 'tv-cabinets', description: 'Custom entertainment units designed for modern living', image: '/library.jpg', order: 4 },
        { name: 'Wardrobes', slug: 'wardrobes', description: 'Walk-in and built-in wardrobes with smart storage', image: '/bedroom1.jpg', order: 5 },
    ];

    for (const s of servicesData) {
        await prisma.service.create({ data: s });
    }

    // 3. Testimonials
    const testimonialsData = [
        { clientName: 'Sarah Mitchell', role: 'Kitchen Renovation', content: 'Mark was very accommodating and professional throughout the entire process. The quality of the kitchen cabinets exceeded our expectations.', rating: 5 },
        { clientName: "Joe D'Agostino", role: 'Laundry Upgrade', content: 'Excellent workmanship and attention to detail on our laundry cabinets. They maximized our small space perfectly.', rating: 5 },
        { clientName: 'Michael Thompson', role: 'Bathroom Vanity', content: 'Highly recommend Magri Cabinets for custom cabinetry in Melbourne. Their team is professional, clean, and the final finish is absolutely flawless.', rating: 5 },
    ];

    for (const t of testimonialsData) {
        await prisma.testimonial.create({ data: t });
    }

    // 4. FAQs
    const faqData = [
        { question: 'How long does it take to complete a custom cabinet project?', answer: 'Project timelines vary depending on complexity and scope. Typically, a kitchen renovation takes 4-6 weeks from design approval to installation.', order: 0 },
        { question: 'What materials do you use for your cabinets?', answer: 'We use only premium materials including moisture-resistant MDF, solid timber, high-quality laminates, and soft-close hardware.', order: 1 },
        { question: 'Do you offer free consultations and quotes?', answer: 'Yes! We offer completely free, no-obligation consultations and quotes.', order: 2 },
    ];

    for (const f of faqData) {
        await prisma.fAQ.create({ data: f });
    }

    // 5. Projects
    const projectData = [
        { title: 'Modern Kitchen Renovation', slug: 'modern-kitchen-renovation', description: 'Complete kitchen transformation with custom cabinetry, stone benchtops, and modern fixtures.', location: 'Melbourne CBD', images: ['/kitchen2.jpg'] },
        { title: 'Luxury Master Wardrobe', slug: 'luxury-master-wardrobe', description: 'Walk-in wardrobe with custom shelving, LED lighting, and velvet-lined drawers.', location: 'Toorak', images: ['/bedroom.jpg'] },
        { title: 'Contemporary Bathroom', slug: 'contemporary-bathroom', description: 'Modern bathroom vanity with floating design and premium stone benchtop.', location: 'South Yarra', images: ['/toliet.jpg'] },
    ];

    for (const p of projectData) {
        await prisma.project.create({ data: p });
    }

    // 6. Blogs
    const blogData = [
        { title: 'Top Kitchen Cabinet Trends for 2025', slug: 'top-kitchen-cabinet-trends-for-2025', excerpt: 'Discover the latest kitchen cabinet trends that are transforming Melbourne homes.', content: 'Full content content...', coverImage: '/kitchen2.jpg', isPublished: true },
        { title: 'How to Choose the Perfect Bathroom Vanity', slug: 'how-to-choose-the-perfect-bathroom-vanity', excerpt: 'A comprehensive guide to selecting the right bathroom vanity for your space.', content: 'Full content here...', coverImage: '/bathromr.jpg', isPublished: true },
    ];

    for (const b of blogData) {
        await prisma.blogPost.create({ data: b });
    }

    // 7. Navbar Items
    const menuData = [
        { label: 'Home', link: '/', order: 0 },
        { label: 'Why Magri', link: '/why-magri-cabinets', order: 1 },
        { label: 'Bathroom', link: '/bathroom-vanities', order: 2 },
        { label: 'Kitchen', link: '/kitchen-cabinets', order: 3 },
        { label: 'Laundry', link: '/laundry-cabinets', order: 4 },
        { label: 'FAQ', link: '/faq', order: 5 },
        { label: 'Contact', link: '/contact', order: 6 },
    ];

    for (const m of menuData) {
        await prisma.menuItem.create({ data: m });
    }

    // 8. Pages (Routes Configuration)
    const pageData = [
        { title: 'Home', slug: 'index', isPublished: true, metaTitle: 'Home | Magri Cabinets', metaDescription: 'Melbourne\'s trusted custom cabinet makers.' },
        { title: 'Why Magri', slug: 'why-magri-cabinets', isPublished: true, metaTitle: 'Why Choose Us | Magri Cabinets', metaDescription: 'Over 10 years of experience in joinery.' },
        { title: 'Bathroom Vanities', slug: 'bathroom-vanities', isPublished: true, metaTitle: 'Custom Bathroom Vanities Melbourne', metaDescription: 'Transform your bathroom into a luxury retreat.' },
        { title: 'Kitchen Cabinets', slug: 'kitchen-cabinets', isPublished: true, metaTitle: 'Bespoke Kitchen Cabinetry Melbourne', metaDescription: 'Tailored kitchen solutions for your home.' },
        { title: 'Laundry Cabinets', slug: 'laundry-cabinets', isPublished: true, metaTitle: 'Custom Laundry Storage Melbourne', metaDescription: 'Maximize your laundry space efficiency.' },
        { title: 'TV Cabinets', slug: 'tv-cabinets', isPublished: true, metaTitle: 'Custom TV & Entertainment Units', metaDescription: 'Modern entertainment units for your living room.' },
        { title: 'Wardrobes', slug: 'wardrobes', isPublished: true, metaTitle: 'Custom Wardrobes Melbourne', metaDescription: 'Walk-in and built-in wardrobes.' },
        { title: 'Furniture', slug: 'furniture', isPublished: true, metaTitle: 'Handcrafted Custom Furniture', metaDescription: 'Unique furniture pieces for every room.' },
        { title: 'FAQ', slug: 'faq', isPublished: true, metaTitle: 'Frequently Asked Questions', metaDescription: 'Common questions about our cabinet services.' },
        { title: 'Contact Us', slug: 'contact', isPublished: true, metaTitle: 'Contact Magri Cabinets', metaDescription: 'Get a free consultation today.' },
    ];

    for (const pg of pageData) {
        await prisma.page.create({ data: pg });
    }

    // 9. Global Settings
    await prisma.globalSettings.upsert({
        where: { id: 1 },
        update: {
            siteName: 'Magri Cabinets',
            footerContent: 'Melbourne\'s trusted custom cabinet makers. Family owned and operated since 2018.',
            copyrightText: '© 2026 Magri Cabinets. All rights reserved.',
            contactEmail: 'info@magricabinets.com.au',
            contactPhone: '0432 123 456',
            address: 'Melbourne, VIC, Australia',
            socialLinks: { facebook: '#', instagram: '#', linkedin: '#' }
        },
        create: {
            id: 1,
            siteName: 'Magri Cabinets',
            footerContent: 'Melbourne\'s trusted custom cabinet makers. Family owned and operated since 2018.',
            copyrightText: '© 2026 Magri Cabinets. All rights reserved.',
            contactEmail: 'info@magricabinets.com.au',
            contactPhone: '0432 123 456',
            address: 'Melbourne, VIC, Australia',
            socialLinks: { facebook: '#', instagram: '#', linkedin: '#' }
        }
    });

    // 9. Media Assets
    const mediaData = [
        { filename: 'kitchen1.jpg', url: '/kitchen1.jpg', type: 'image' },
        { filename: 'kitchen2.jpg', url: '/kitchen2.jpg', type: 'image' },
        { filename: 'bedroom.jpg', url: '/bedroom.jpg', type: 'image' },
        { filename: 'bathromr.jpg', url: '/bathromr.jpg', type: 'image' },
    ];

    for (const media of mediaData) {
        await prisma.mediaAsset.create({ data: media });
    }

    // 10. Content Sections (Reusable)
    const contentSectionData = [
        {
            internalName: 'Main Hero Banner',
            type: 'HERO',
            content: { heading: 'Premium Custom Cabinets in Melbourne', subheading: 'Handcrafted quality for your dream home.', buttonText: 'Get a Quote', image: '/kitchen1.jpg' }
        },
        {
            internalName: 'Why Magri Features',
            type: 'FEATURES',
            content: { heading: 'Why Choose Magri Cabinets?', items: ['10+ Years Experience', 'Local Melbourne Business', 'Premium Hardware', 'Custom Design'] }
        },
        {
            internalName: 'Installation Showcase',
            type: 'GRID',
            content: { heading: 'Our Recent Installations', description: 'Bespoke solutions for every room in the house.' }
        },
        {
            internalName: 'Contact CTA Bar',
            type: 'CTA',
            content: { heading: 'Ready to start your project?', buttonText: 'Contact Us Now', link: '/contact' }
        },
    ];

    for (const cs of contentSectionData) {
        await prisma.contentSection.create({ data: cs });
    }

    console.log('Seeding COMPLETE! Site is now fully data-driven.');
}

main().catch(console.error).finally(() => prisma.$disconnect());
