import Head from 'next/head';

interface StructuredDataProps {
    data: any;
    type?: string;
}

export default function StructuredData({ data, type = 'WebPage' }: StructuredDataProps) {
    if (!data) return null;

    let schema: any = {};

    if (type === 'LocalBusiness') {
        schema = {
            "@context": "https://schema.org",
            "@type": data.businessType || "LocalBusiness",
            "name": data.businessName || "Magri Cabinets",
            "image": data.defaultOgImage || "",
            "telePhone": data.telephone || "",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": data.streetAddress || "",
                "addressLocality": data.addressLocality || "Melbourne",
                "addressRegion": data.addressRegion || "VIC",
                "postalCode": data.postalCode || "",
                "addressCountry": "AU"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": data.latitude || "",
                "longitude": data.longitude || ""
            },
            "url": "https://magricabinets.com.au",
            "priceRange": data.priceRange || "$$",
            "openingHoursSpecification": data.openingHours || []
        };
    } else if (type === 'Article') {
        schema = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": data.seoTitle || data.title,
            "description": data.seoDescription || data.excerpt,
            "image": data.ogImage || data.coverImage,
            "author": {
                "@type": "Organization",
                "name": "Magri Cabinets"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Magri Cabinets",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://magricabinets.com.au/logo.png"
                }
            },
            "datePublished": data.publishedAt || data.createdAt,
            "dateModified": data.updatedAt
        };
    } else if (type === 'Service') {
        schema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": data.name,
            "serviceType": data.name,
            "provider": {
                "@type": "LocalBusiness",
                "name": "Magri Cabinets"
            },
            "areaServed": {
                "@type": "City",
                "name": "Melbourne"
            },
            "description": data.seoDescription || data.description
        };
    } else if (type === 'BreadcrumbList') {
        schema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": data.map((item: any, index: number) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": item.url
            }))
        };
    } else if (data.schemaJson) {
        // Custom Schema from Admin
        try {
            schema = typeof data.schemaJson === 'string' ? JSON.parse(data.schemaJson) : data.schemaJson;
        } catch (e) {
            console.error("Invalid Schema JSON", e);
            return null;
        }
    } else {
        // Generic WebPage
        schema = {
            "@context": "https://schema.org",
            "@type": type,
            "name": data.seoTitle || data.title,
            "description": data.seoDescription || data.description
        };
    }

    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </Head>
    );
}
