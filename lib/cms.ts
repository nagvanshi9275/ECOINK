/**
 * Fetches the specific page data from the CMS by slug.
 * This should be used in getStaticProps or getServerSideProps.
 */
export async function getPageBySlug(slug: string) {
    // We cannot use fetch() with relative URLs on the server side easily during build time
    // unless we know the absolute URL. 
    // However, since we are on the server (Next.js), we can use Prisma DIRECTLY
    // instead of calling our own API routes, which is more efficient and avoids build errors.

    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();

    try {
        const page = await prisma.page.findUnique({
            where: {
                slug: slug,
                isPublished: true, // Only fetch published pages for frontend
            },
        });

        await prisma.$disconnect();
        return page;
    } catch (error) {
        console.error(`Error fetching page with slug ${slug}:`, error);
        await prisma.$disconnect();
        return null;
    }
}

/**
 * Fetches all published page slugs for getStaticPaths
 */
export async function getAllPageSlugs() {
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();

    try {
        const pages = await prisma.page.findMany({
            where: { isPublished: true },
            select: { slug: true },
        });

        await prisma.$disconnect();
        return pages;
    } catch (error) {
        console.error('Error fetching page slugs:', error);
        await prisma.$disconnect();
        return [];
    }
}
