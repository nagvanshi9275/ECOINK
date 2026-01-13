// @ts-nocheck
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const blogs = await prisma.blogPost.findMany({
        select: {
            id: true,
            title: true,
            slug: true,
            isPublished: true,
            publishedAt: true,
        },
        orderBy: {
            createdAt: 'asc'
        }
    });

    console.log(`\n✅ Total blogs in database: ${blogs.length}\n`);

    blogs.forEach((blog, index) => {
        console.log(`${index + 1}. ${blog.title}`);
        console.log(`   Slug: ${blog.slug}`);
        console.log(`   Published: ${blog.isPublished}`);
        console.log(`   Date: ${blog.publishedAt}\n`);
    });

    await prisma.$disconnect();
}

main();
