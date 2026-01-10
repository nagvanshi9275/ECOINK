/**
 * Fetches the specific page data from the CMS by slug.
 * This should be used in getStaticProps or getServerSideProps.
 */
export async function getPageBySlug(slug: string, preview: boolean = false) {
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();

    try {
        const page = await prisma.page.findUnique({
            where: { slug: slug },
            include: {
                sections: {
                    include: { section: true },
                    orderBy: { order: 'asc' }
                }
            }
        });

        if (!page || (!page.isPublished && !preview)) {
            await prisma.$disconnect();
            return null;
        }

        const formattedPage = {
            ...page,
            content: page.sections.map((ps: any) => ({
                type: ps.section.type,
                data: ps.section.content
            }))
        };

        await prisma.$disconnect();
        return formattedPage;
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
