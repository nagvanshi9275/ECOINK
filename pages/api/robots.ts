import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const siteUrl = 'https://magricabinets.com.au';

    const robots = `# Magri Cabinets - Robots.txt
# Generated: ${new Date().toISOString()}

# Allow all bots to access public content
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /preview/
Disallow: /_next/
Disallow: /*?*sort=
Disallow: /*?*filter=
Disallow: /*.json$

# Allow indexing of static assets
Allow: /images/
Allow: /*.jpg$
Allow: /*.png$
Allow: /*.webp$
Allow: /*.svg$

# Sitemap location
Sitemap: ${siteUrl}/sitemap.xml

# Crawl delay (optional - adjust if needed)
# Crawl-delay: 1
`;

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache for 24 hours
    res.write(robots);
    res.end();
}
