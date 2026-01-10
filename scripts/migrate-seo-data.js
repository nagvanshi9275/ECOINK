const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🚀 Starting SEO Data Migration...');

    // 1. Migrate Pages
    const pages = await prisma.page.findMany();
    for (const page of pages) {
        await prisma.page.update({
            where: { id: page.id },
            data: {
                seoTitle: page.metaTitle || `${page.title} | Magri Cabinets Melbourne`,
                seoDescription: page.metaDescription || (page.title + ' custom cabinetry services in Melbourne.'),
                seoKeywords: page.keywords || '',
                metaRobots: 'index,follow',
                ogType: 'website',
                schemaType: 'WebPage',
                seoScore: 50,
                readabilityScore: 50
            }
        });
    }
    console.log(`✅ Migrated ${pages.length} Pages`);

    // 2. Migrate Services
    const services = await prisma.service.findMany();
    for (const service of services) {
        await prisma.service.update({
            where: { id: service.id },
            data: {
                seoTitle: `${service.name} | Magri Cabinets Melbourne`,
                seoDescription: service.description ? service.description.substring(0, 155) : `Premium custom ${service.name} in Melbourne.`,
                seoKeywords: service.metaKeywords || '',
                metaRobots: 'index,follow',
                ogType: 'website',
                schemaType: 'Service',
                seoScore: 50,
                readabilityScore: 50
            }
        });
    }
    console.log(`✅ Migrated ${services.length} Services`);

    // 3. Migrate Blogs
    const blogs = await prisma.blogPost.findMany();
    for (const blog of blogs) {
        await prisma.blogPost.update({
            where: { id: blog.id },
            data: {
                seoTitle: blog.metaTitle || `${blog.title} | Magri Cabinets`,
                seoDescription: blog.metaDescription || (blog.excerpt ? blog.excerpt.substring(0, 155) : blog.title),
                focusKeyphrase: blog.focusKeyword || '',
                metaRobots: 'index,follow',
                ogType: 'article',
                schemaType: 'Article',
                seoScore: 50,
                readabilityScore: 50
            }
        });
    }
    console.log(`✅ Migrated ${blogs.length} Blogs`);

    // 4. Migrate Projects
    const projects = await prisma.project.findMany();
    for (const project of projects) {
        await prisma.project.update({
            where: { id: project.id },
            data: {
                seoTitle: project.metaTitle || `${project.title} | Magri Cabinets Project`,
                seoDescription: project.metaDescription || (project.description ? project.description.substring(0, 155) : project.title),
                metaRobots: 'index,follow',
                ogType: 'website',
                schemaType: 'WebPage',
                seoScore: 50,
                readabilityScore: 50
            }
        });
    }
    console.log(`✅ Migrated ${projects.length} Projects`);

    // 5. Initialize SeoSettings
    const existingSeo = await prisma.seoSettings.findFirst();
    if (!existingSeo) {
        await prisma.seoSettings.create({
            data: {
                id: 1,
                siteName: 'Magri Cabinets',
                addressLocality: 'Melbourne',
                addressRegion: 'VIC',
                priceRange: '$$',
                sitemapEnabled: true,
                sitemapFrequency: 'weekly'
            }
        });
        console.log('✅ Created Global SEO Settings Defaults');
    }

    console.log('🏁 SEO Data Migration Complete!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
