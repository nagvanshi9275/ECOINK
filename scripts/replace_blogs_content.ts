// @ts-nocheck
const fs = require('fs/promises');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL
        }
    }
});

async function main() {
    console.log("Starting Blog Content Replacement...");

    try {
        // 1. Remove existing blog content
        console.log("Deleting all existing BlogPosts...");
        await prisma.blogPost.deleteMany({});
        console.log("Existing BlogPosts deleted.");

        // 2. Define Blog Data
        const blogs = [
            {
                file: 'Blog1.md',
                folder: 'Blog1',
                coverImage: '/Blog1/blog1.jpg',
                imageMap: {
                    'blog1/image1.jpg': '/Blog1/blog1.jpg',
                    'blog1/image2.jpg': '/Blog1/home-office-custom-cabinet-melbourne.jpg',
                    'blog1/image3.jpg': '/Blog1/laundry-cabinets.jpg'
                }
            },
            {
                file: 'Blog2.md',
                folder: 'Blog2',
                coverImage: '/Blog2/Blog2.jpg',
                imageMap: {
                    'blog2/image1.jpg': '/Blog2/Blog2.jpg',
                    'blog2/image2.jpg': '/Blog2/blog21.jpg',
                    'blog2/image3.jpg': '/Blog2/Cabinet-Installation.jpg'
                }
            },
            {
                file: 'Blog3.md',
                folder: 'Blog3',
                coverImage: '/Blog3/Custom-Elegant-Bathroom-Vanities.jpg',
                imageMap: {
                    'blog3/image1.jpg': '/Blog3/Custom-Elegant-Bathroom-Vanities.jpg',
                    'blog3/image2.jpg': '/Blog3/Elegant-Bathroom-Vanities.jpg',
                    'blog3/image3.jpg': '/Blog3/Custom-Modern-Bathroom-Vanities.jpg'
                }
            },
            {
                file: 'Blog4.md',
                folder: 'Blog4',
                coverImage: '/Blog4/magri-cabinets-Custom-Laundry-Cabinet.jpg',
                imageMap: {
                    'blog4/image1.jpg': '/Blog4/magri-cabinets-Custom-Laundry-Cabinet.jpg',
                    'blog4/image2.jpg': '/Blog4/magri-cabinets-Custom-white-Laundry-Cabinet.jpg',
                    'blog4/image3.jpg': '/Blog4/magri-cabinets-Laundry-Cabinet.jpg'
                }
            },
            {
                file: 'Blog5.md',
                folder: 'Blog5',
                coverImage: '/Blog5/magri-cabinets-featuring-handleless-cabinetry.jpg',
                imageMap: {
                    'blog5/image1.jpg': '/Blog5/magri-cabinets-handleless-overheads-with-traditional-handles-on-the-base.jpg.jpg',
                    'blog5/image2.jpg': '/Blog5/magri-cabinets-featuring-handleless-cabinetry.jpg',
                    'blog5/image3.jpg': '/Blog5/magri-cabinets-featuring-handleless-cabinetry.jpg'
                }
            },
            {
                file: 'Blog6.md',
                folder: 'Blog6',
                coverImage: '/Blog6/Vinyl-Wrap-Cabinetry.jpg',
                replacements: [
                    { search: '![Vinyl Wrap Cabinetry Finish](IMAGE_URL_HERE)', replace: '![Vinyl Wrap Cabinetry Finish](/Blog6/Vinyl-Wrap-Cabinetry.jpg)' },
                    { search: '![2 Pac Cabinetry Durability](IMAGE_URL_HERE)', replace: '![2 Pac Cabinetry Durability](/Blog6/2-pac-finish.jpg)' },
                    { search: '![Premium 2 Pac Kitchen](IMAGE_URL_HERE)', replace: '![Premium 2 Pac Kitchen](/Blog6/bathroom.jpg)' }
                ]
            }
        ];

        // 3. Process each blog
        for (const blog of blogs) {
            console.log(`Processing ${blog.file}...`);
            const filePath = path.join(process.cwd(), blog.file);
            let content = await fs.readFile(filePath, 'utf-8');

            // helper to extract title
            const lines = content.split('\n');
            const titleLine = lines.find(l => l.startsWith('# '));
            const title = titleLine ? titleLine.replace('# ', '').trim() : 'Untitled Blog';

            // Remove first H1 from content (user requested this)
            content = lines.filter(l => l !== titleLine).join('\n');

            // Replace images
            if (blog.imageMap) {
                for (const [placeholder, realPath] of Object.entries(blog.imageMap)) {
                    // Replace all occurrences
                    content = content.split(placeholder).join(realPath);
                }
            }
            if (blog.replacements) {
                for (const rep of blog.replacements) {
                    content = content.replace(rep.search, rep.replace);
                }
            }

            // Generate slug
            const slug = title.toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');

            // Insert to DB
            await prisma.blogPost.create({
                data: {
                    title: title,
                    slug: slug,
                    content: content,
                    isPublished: true,
                    publishedAt: new Date(),
                    coverImage: blog.coverImage || null
                }
            });
            console.log(`Created blog: ${title} (${slug})`);
        }

        console.log("All blogs processed successfully.");

    } catch (error) {
        console.error("Error processing blogs:", error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
