const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const blogs = await prisma.blogPost.findMany();
    console.log('--- BLOGS ---');
    blogs.forEach(b => {
        console.log(`Slug: ${b.slug}`);
        console.log(`Content length: ${b.content?.length || 0}`);
        console.log(`Content Preview: ${b.content?.substring(0, 50)}...`);
        console.log('---');
    });

    const services = await prisma.service.findMany();
    console.log('--- SERVICES ---');
    services.forEach(s => {
        console.log(`Slug: ${s.slug}`);
        console.log(`Content length: ${s.content?.length || 0}`);
        console.log(`Additional Content length: ${s.additionalContent?.length || 0}`);
        console.log('---');
    });
}

main().finally(() => prisma.$disconnect());
