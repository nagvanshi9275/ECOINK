const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const legacyBlogs = [
    {
        id: "top-kitchen-cabinet-trends-for-2025",
        title: "Top Kitchen Cabinet Trends for 2025",
        excerpt: "Discover the latest kitchen cabinet trends that are transforming Melbourne homes. From handleless designs to bold color choices.",
        image: "/kitchen2.jpg",
        category: "Kitchen",
        date: "December 28, 2024",
        readTime: "5 min read",
    },
    {
        id: "how-to-choose-the-perfect-bathroom-vanity",
        title: "How to Choose the Perfect Bathroom Vanity",
        excerpt: "A comprehensive guide to selecting the right bathroom vanity for your space, style, and storage needs.",
        image: "/bathromr.jpg",
        category: "Bathroom",
        date: "December 20, 2024",
        readTime: "4 min read",
    },
    {
        id: "maximizing-wardrobe-storage-solutions",
        title: "Maximizing Wardrobe Storage Solutions",
        excerpt: "Learn expert tips on organizing your wardrobe with smart storage solutions that make the most of every inch.",
        image: "/bedroom1.jpg",
        category: "Wardrobe",
        date: "December 15, 2024",
        readTime: "6 min read",
    },
    {
        id: "the-benefits-of-custom-furniture",
        title: "The Benefits of Custom Furniture",
        excerpt: "Why investing in custom-made furniture is worth it. Discover the advantages of bespoke pieces for your home.",
        image: "/room.jpg",
        category: "Furniture",
        date: "December 10, 2024",
        readTime: "4 min read",
    },
    {
        id: "tv-cabinet-design-ideas-for-modern-living",
        title: "TV Cabinet Design Ideas for Modern Living",
        excerpt: "Explore innovative TV cabinet designs that combine style with functionality for your entertainment space.",
        image: "/library.jpg",
        category: "TV Cabinet",
        date: "December 5, 2024",
        readTime: "5 min read",
    },
    {
        id: "laundry-room-organization-tips",
        title: "Laundry Room Organization Tips",
        excerpt: "Transform your laundry room into an efficient and stylish space with these organization tips and cabinet ideas.",
        image: "/room copy.jpg",
        category: "Laundry",
        date: "November 28, 2024",
        readTime: "4 min read",
    }
];

async function main() {
    console.log('Syncing blogs to Supabase...');
    for (const blog of legacyBlogs) {
        const exists = await prisma.blogPost.findUnique({ where: { slug: blog.id } });
        if (!exists) {
            const date = new Date(blog.date);
            const readTime = parseInt(blog.readTime) || 5;

            const content = `<h2>${blog.title}</h2><p class="lead" style="font-size: 1.25rem; color: #4b5563; margin-bottom: 2rem;">${blog.excerpt}</p><hr/><p>This content was automatically migrated from the static site. Administrators can now edit this full content in the CMS.</p><h3>Introduction</h3><p>We believe that <strong>${blog.category}</strong> design requires attention to detail. In this article, we explore the key aspects of <strong>${blog.title}</strong> and how Magri Cabinets can help you achieve your dream home.</p><ul><li>Bespoke Design</li><li>Quality Materials</li><li>Expert Craftsmanship</li></ul><p>Contact us today to learn more.</p>`;

            await prisma.blogPost.create({
                data: {
                    title: blog.title,
                    slug: blog.id,
                    excerpt: blog.excerpt,
                    coverImage: blog.image,
                    isPublished: true,
                    publishedAt: date,
                    readingTime: readTime,
                    content: content,
                    category: {
                        connectOrCreate: {
                            where: { name: blog.category },
                            create: { name: blog.category, slug: blog.category.toLowerCase().replace(/\s+/g, '-') }
                        }
                    }
                }
            });
            console.log(`Created: ${blog.title}`);
        } else {
            console.log(`Skipped: ${blog.title}`);
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
