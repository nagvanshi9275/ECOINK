import Head from 'next/head';
import { useRouter } from 'next/router';

interface MetaHeadProps {
    data: any;
    settings?: any;
}

export default function MetaHead({ data, settings }: MetaHeadProps) {
    const router = useRouter();
    const siteUrl = 'https://magricabinets.com.au'; // Recommended to use env var
    const canonical = data.canonicalUrl || `${siteUrl}${router.asPath}`;

    const title = data.seoTitle || (data.title ? `${data.title} | Magri Cabinets Melbourne` : (settings?.siteTitle || 'Magri Cabinets - Premier Cabinet Makers Melbourne'));
    const description = data.seoDescription || data.excerpt || data.description || settings?.siteDescription || 'Expert cabinet makers in Melbourne providing bespoke kitchens, wardrobes, and high-end joinery.';

    const ogImage = data.ogImage || data.coverImage || data.heroImage || settings?.defaultOgImage || '/Magri-Cabinets-removebg-preview.png';
    const robots = data.metaRobots || (data.isPublished === false ? 'noindex,nofollow' : 'index,follow');

    return (
        <Head>
            {/* Core Meta */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {data.seoKeywords && <meta name="keywords" content={data.seoKeywords} />}
            <link rel="canonical" href={canonical} />
            <meta name="robots" content={robots} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={data.ogType || 'website'} />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={data.ogTitle || title} />
            <meta property="og:description" content={data.ogDescription || description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content={settings?.siteName || 'Magri Cabinets'} />

            {/* Twitter */}
            <meta name="twitter:card" content={data.twitterCard || 'summary_large_image'} />
            <meta name="twitter:url" content={canonical} />
            <meta name="twitter:title" content={data.twitterTitle || data.ogTitle || title} />
            <meta name="twitter:description" content={data.twitterDescription || data.ogDescription || description} />
            <meta name="twitter:image" content={data.twitterImage || ogImage} />

            {/* Analytics & Verification */}
            {settings?.googleSearchConsole && (
                <meta name="google-site-verification" content={settings.googleSearchConsole} />
            )}

            {/* Favicon - fallback */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
