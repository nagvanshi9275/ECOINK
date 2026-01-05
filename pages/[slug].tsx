import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getPageBySlug, getAllPageSlugs } from '@/lib/cms';
import PageRenderer from '@/components/PageRenderer';

interface PageProps {
    page: {
        title: string;
        content: any;
        metaTitle?: string;
        metaDescription?: string;
        noIndex?: boolean;
        // ... other fields
    } | null;
}

export default function DynamicPage({ page }: PageProps) {
    if (!page) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-gray-800">Page Not Found</h1>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{page.metaTitle || page.title} | Magri Cabinets</title>
                <meta name="description" content={page.metaDescription || ''} />
                {page.noIndex && <meta name="robots" content="noindex" />}
                {/* Open Graph tags can be added here */}
            </Head>

            <main className="min-h-screen bg-white pb-24">
                {/* Render the dynamic sections from the CMS */}
                <PageRenderer content={page.content} />
            </main>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const pages = await getAllPageSlugs();

    // List of slugs that have dedicated static files in the pages directory
    const staticPages = [
        'index', 'contact', 'faq', 'why-magri-cabinets', 'get-a-custom-quote',
        'kitchen-cabinets', 'bathroom-vanities', 'wardrobes',
        'tv-cabinets', 'laundry-cabinets', 'furniture', 'projects', 'blogs'
    ];

    const paths = pages
        .filter((p: any) => !staticPages.includes(p.slug))
        .map((p: any) => ({
            params: { slug: p.slug },
        }));

    // fallback: 'blocking' ensures new pages added to CMS are generated on first request
    return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;
    const page = await getPageBySlug(slug);

    if (!page) {
        return {
            notFound: true,
            revalidate: 10, // Try again quickly if it appears
        };
    }

    return {
        props: {
            page: JSON.parse(JSON.stringify(page)), // Serialize dates
        },
        revalidate: 60, // ISR: Revalidate every 60 seconds
    };
};
