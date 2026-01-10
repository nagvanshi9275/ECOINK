const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('--- STARTING CRITICAL DATA RESTORATION ---');

    // 0. Clear existing data to ensure clean restoration
    console.log('Clearing existing data...');
    const models = [
        'pageSection', 'contentSection', 'page', 'project', 'blogPost',
        'testimonial', 'fAQ', 'heroBanner', 'service', 'mediaAsset', 'menuItem'
    ];

    for (const model of models) {
        if (prisma[model]) {
            await prisma[model].deleteMany();
        }
    }

    // 1. Admin User
    console.log('Restoring Admin User...');
    await prisma.adminUser.upsert({
        where: { email: 'admin@magricabinets.com.au' },
        update: {},
        create: {
            email: 'admin@magricabinets.com.au',
            password: 'secure_admin_password',
            role: 'ADMIN',
        },
    });

    // 2. Global Settings
    console.log('Restoring Global Settings...');
    await prisma.globalSettings.upsert({
        where: { id: 1 },
        update: {
            contactPhone: '0481 132 920',
            contactEmail: 'info@magricabinets.com.au',
        },
        create: {
            id: 1,
            siteName: 'Magri Cabinets',
            footerContent: "Melbourne's trusted custom cabinet makers. Family owned and operated since 2018.",
            copyrightText: '© 2026 Magri Cabinets. All rights reserved.',
            contactEmail: 'info@magricabinets.com.au',
            contactPhone: '0481 132 920',
            address: 'Melbourne, VIC, Australia',
            socialLinks: { facebook: '#', instagram: '#', linkedin: '#' }
        }
    });

    // 3. Hero Banners
    console.log('Restoring Hero Banners...');
    const banners = [
        { heading: 'Custom Kitchen Cabinets', subheading: 'Premium joinery for your dream kitchen in Melbourne.', image: '/kitchen1.jpg', ctaText: 'View Kitchens', ctaLink: '/kitchen-cabinets', order: 0 },
        { heading: 'Modern Wardrobes', subheading: 'Smart storage solutions for every bedroom.', image: '/bedroom1.jpg', ctaText: 'Explore Storage', ctaLink: '/wardrobes', order: 1 },
        { heading: 'Luxury Bathroom Vanities', subheading: 'Elegant designs to transform your bathroom.', image: '/bathromr.jpg', ctaText: 'See Vanities', ctaLink: '/bathroom-vanities', order: 2 }
    ];
    for (const b of banners) {
        await prisma.heroBanner.create({ data: b });
    }

    // 4. Testimonials
    console.log('Restoring Testimonials...');
    const testimonials = [
        { clientName: 'Sarah Mitchell', role: 'Kitchen Renovation', content: 'Mark was very accommodating and professional throughout the entire process. The quality of the kitchen cabinets exceeded our expectations. Truly a premium experience!', rating: 5, avatarUrl: '/sarah.png' },
        { clientName: "Joe D'Agostino", role: 'Laundry Upgrade', content: 'Excellent workmanship and attention to detail on our laundry cabinets. They maximized our small space perfectly. Highly recommended for any custom joinery!', rating: 5, avatarUrl: '/joe.png' },
        { clientName: 'Michael Thompson', role: 'Bathroom Vanity', content: 'Highly recommend Magri Cabinets for custom cabinetry in Melbourne. Their team is professional, clean, and the final finish is absolutely flawless.', rating: 5, avatarUrl: '/michael.png' }
    ];
    for (const t of testimonials) {
        await prisma.testimonial.create({ data: t });
    }

    // 5. FAQs
    console.log('Restoring FAQs...');
    const faqs = [
        { question: 'How long does it take to complete a custom cabinet project?', answer: 'Project timelines vary depending on complexity and scope. Typically, a kitchen renovation takes 4-6 weeks from design approval to installation.', order: 0 },
        { question: 'What materials do you use for your cabinets?', answer: 'We use only premium materials including moisture-resistant MDF, solid timber, high-quality laminates, and soft-close hardware.', order: 1 },
        { question: 'Do you offer free consultations and quotes?', answer: 'Yes! We offer completely free, no-obligation consultations and quotes.', order: 2 }
    ];
    for (const f of faqs) {
        await prisma.fAQ.create({ data: f });
    }

    // 6. Projects
    console.log('Restoring Projects...');
    const projects = [
        { title: 'Modern Kitchen Renovation', slug: 'modern-kitchen-renovation', description: 'Complete kitchen transformation with custom cabinetry, stone benchtops, and modern fixtures.', location: 'Melbourne CBD', images: ['/kitchen2.jpg'], category: 'Kitchen' },
        { title: 'Luxury Master Wardrobe', slug: 'luxury-master-wardrobe', description: 'Walk-in wardrobe with custom shelving, LED lighting, and velvet-lined drawers.', location: 'Toorak', images: ['/bedroom.jpg'], category: 'Wardrobe' },
        { title: 'Contemporary Bathroom', slug: 'contemporary-bathroom', description: 'Modern bathroom vanity with floating design and premium stone benchtop.', location: 'South Yarra', images: ['/toliet.jpg'], category: 'Bathroom' },
        { title: 'Home Office Setup', slug: 'home-office-setup', description: 'Custom desk with built-in shelving and cable management solutions.', location: 'Malvern', images: ['/room copy.jpg'], category: 'Furniture' }
    ];
    for (const p of projects) {
        await prisma.project.create({ data: { ...p, isVisible: true } });
    }

    // 7. Blog Posts
    console.log('Restoring Blog Posts...');
    const blogs = [
        { title: 'Top Kitchen Cabinet Trends for 2025', slug: 'top-kitchen-cabinet-trends-for-2025', excerpt: 'Discover the latest kitchen cabinet trends that are transforming Melbourne homes.', content: 'Full content...', coverImage: '/kitchen2.jpg', isPublished: true },
        { title: 'How to Choose the Perfect Bathroom Vanity', slug: 'how-to-choose-the-perfect-bathroom-vanity', excerpt: 'A comprehensive guide to selecting the right bathroom vanity for your space.', content: 'Full content here...', coverImage: '/bathromr.jpg', isPublished: true }
    ];
    for (const b of blogs) {
        await prisma.blogPost.create({ data: b });
    }

    // 8. Service Model (Backward Compatibility)
    console.log('Restoring Service records...');
    const services = [
        { name: 'TV Cabinets', slug: 'tv-cabinets', description: 'Custom entertainment units designed for modern living', image: '/library.jpg', order: 0 },
        { name: 'Wardrobes', slug: 'wardrobes', description: 'Walk-in and built-in wardrobes with smart storage', image: '/bedroom1.jpg', order: 1 },
        { name: 'Furniture', slug: 'furniture', description: 'Unique handcrafted furniture for every room', image: '/room.jpg', order: 2 },
        { name: 'Kitchen Cabinets', slug: 'kitchen-cabinets', description: 'Bespoke kitchen cabinetry tailored to your lifestyle', image: '/kitchen1.jpg', order: 3 },
        { name: 'Laundry Cabinets', slug: 'laundry-cabinets', description: 'Efficient and stylish laundry storage solutions', image: '/room copy.jpg', order: 4 },
        { name: 'Bathroom Vanities', slug: 'bathroom-vanities', description: 'Transform your bathroom into a luxurious retreat', image: '/bathromr.jpg', order: 5 },
    ];
    for (const s of services) {
        await prisma.service.create({ data: { ...s, isVisible: true, heroImage: s.image } });
    }

    // 9. Pages & Content Sections (The Core restoration)
    console.log('Restoring CMS Pages and Sections...');

    const serviceSlugs = [
        { slug: 'kitchen-cabinets', title: 'Kitchen Cabinets', label: 'Kitchen Cabinets', order: 1 },
        { slug: 'bathroom-vanities', title: 'Bathroom Vanities', label: 'Bathroom Cabinets', order: 2 },
        { slug: 'laundry-cabinets', title: 'Laundry Cabinets', label: 'Laundry Cabinets', order: 3 },
        { slug: 'tv-cabinets', title: 'TV Cabinets', label: 'TV Cabinets', order: 4 },
        { slug: 'wardrobes', title: 'Wardrobes', label: 'Wardrobe', order: 5 },
        { slug: 'furniture', title: 'Furniture', label: 'Furniture', order: 6 },
    ];

    for (const sItem of serviceSlugs) {
        console.log(`Creating Page: ${sItem.title}`);

        // 1. Create Page
        const page = await prisma.page.create({
            data: {
                title: sItem.title,
                slug: sItem.slug,
                isPublished: true,
                showInNavbar: true,
                navbarLabel: sItem.label,
                navbarOrder: sItem.order,
                metaTitle: `${sItem.title} Melbourne | Magri Cabinets`,
                metaDescription: `Premium custom ${sItem.title.toLowerCase()} in Melbourne. Expert craftsmanship and bespoke designs.`
            }
        });

        // 2. Create Sections
        const sectionsData = [
            {
                type: 'hero',
                data: {
                    heading: sItem.title,
                    subheading: `Bespoke ${sItem.title.toLowerCase()} tailored to your lifestyle. Premium quality and expert installation.`,
                    image: `/kitchen1.jpg`, // Default, will fix below
                    ctaText: 'Get Free Quote',
                    ctaLink: '/get-a-custom-quote'
                }
            },
            {
                type: 'content-split',
                data: {
                    heading: `Expert ${sItem.title} Designers`,
                    html: `<p>We specialize in creating stunning, functional ${sItem.title.toLowerCase()} that enhance your home's value and your quality of life. Our team works closely with you to understand your needs and deliver a result that exceeds expectations.</p>`,
                    sidebarType: 'form',
                    serviceName: sItem.title
                }
            },
            {
                type: 'gallery',
                data: {
                    images: ['/kitchen1.jpg', '/kitchen2.jpg', '/room.jpg', '/bathromr.jpg']
                }
            },
            {
                type: 'faq',
                data: {
                    items: [
                        { question: 'How long does it take?', answer: 'Most projects are completed within 4-6 weeks from design approval.' },
                        { question: 'Do you provide a warranty?', answer: 'Yes, we provide a 10-year structural warranty on all our cabinetry.' }
                    ]
                }
            },
            {
                type: 'testimonial',
                data: {
                    items: testimonials
                }
            }
        ];

        // Apply specific hero images
        if (sItem.slug === 'kitchen-cabinets') sectionsData[0].data.image = '/kitchen1.jpg';
        if (sItem.slug === 'wardrobes') sectionsData[0].data.image = '/bedroom1.jpg';
        if (sItem.slug === 'bathroom-vanities') sectionsData[0].data.image = '/bathromr.jpg';
        if (sItem.slug === 'laundry-cabinets') sectionsData[0].data.image = '/room copy.jpg';
        if (sItem.slug === 'tv-cabinets') sectionsData[0].data.image = '/library.jpg';
        if (sItem.slug === 'furniture') sectionsData[0].data.image = '/room.jpg';

        for (let i = 0; i < sectionsData.length; i++) {
            const sec = sectionsData[i];
            const contentSection = await prisma.contentSection.create({
                data: {
                    internalName: `${sItem.title} - ${sec.type} - ${i}`,
                    type: sec.type,
                    content: sec.data
                }
            });

            await prisma.pageSection.create({
                data: {
                    pageId: page.id,
                    sectionId: contentSection.id,
                    order: i
                }
            });
        }
    }

    // 10. Main Site Pages
    const mainPages = [
        { title: 'Why Magri Cabinets?', slug: 'why-magri-cabinets', label: 'WHY MAGRI CABINETS?', order: 10 },
        { title: 'Projects', slug: 'projects', label: 'PROJECTS', order: 30 },
        { title: 'Blogs', slug: 'blogs', label: 'BLOGS', order: 40 },
    ];

    for (const p of mainPages) {
        console.log(`Creating Main Page: ${p.title}`);
        const page = await prisma.page.create({
            data: {
                title: p.title,
                slug: p.slug,
                isPublished: true,
                showInNavbar: true,
                navbarLabel: p.label,
                navbarOrder: p.order,
                content: {} // Legacy content JSON
            }
        });

        // Add a simple hero for these pages too
        const heroSection = await prisma.contentSection.create({
            data: {
                internalName: `${p.title} - Hero`,
                type: 'hero',
                content: {
                    heading: p.title,
                    subheading: `Discover the Magri Cabinets difference.`,
                    image: '/kitchen2.jpg'
                }
            }
        });

        await prisma.pageSection.create({
            data: {
                pageId: page.id,
                sectionId: heroSection.id,
                order: 0
            }
        });
    }

    // 11. Media Assets
    console.log('Restoring Media Assets...');
    const mediaAssets = [
        { filename: 'kitchen1.jpg', url: '/kitchen1.jpg', type: 'image', size: 102400 },
        { filename: 'kitchen2.jpg', url: '/kitchen2.jpg', type: 'image', size: 102400 },
        { filename: 'bedroom.jpg', url: '/bedroom.jpg', type: 'image', size: 102400 },
        { filename: 'bedroom1.jpg', url: '/bedroom1.jpg', type: 'image', size: 102400 },
        { filename: 'bathromr.jpg', url: '/bathromr.jpg', type: 'image', size: 102400 },
        { filename: 'room.jpg', url: '/room.jpg', type: 'image', size: 102400 },
        { filename: 'room copy.jpg', url: '/room copy.jpg', type: 'image', size: 102400 },
        { filename: 'library.jpg', url: '/library.jpg', type: 'image', size: 102400 },
        { filename: 'toliet.jpg', url: '/toliet.jpg', type: 'image', size: 102400 }
    ];
    for (const m of mediaAssets) {
        await prisma.mediaAsset.create({ data: m });
    }

    // 12. Menu Items (for Admin Navbar page specifically)
    console.log('Restoring Menu Items...');
    const menuItems = [
        { label: 'HOME', link: '/', order: 0, isVisible: true },
        { label: 'WHY MAGRI', link: '/why-magri-cabinets', order: 1, isVisible: true },
        { label: 'KITCHEN', link: '/kitchen-cabinets', order: 2, isVisible: true },
        { label: 'BATHROOM', link: '/bathroom-vanities', order: 3, isVisible: true },
        { label: 'LAUNDRY', link: '/laundry-cabinets', order: 4, isVisible: true },
        { label: 'PROJECTS', link: '/projects', order: 5, isVisible: true },
        { label: 'BLOGS', link: '/blogs', order: 6, isVisible: true },
        { label: 'CONTACT', link: '/get-a-custom-quote', order: 7, isVisible: true }
    ];
    for (const mi of menuItems) {
        await prisma.menuItem.create({ data: mi });
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
