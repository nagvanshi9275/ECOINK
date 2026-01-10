import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const siteUrl = 'https://magricabinets.com.au';

  try {
    const [pages, blogs, projects, services, seoSettings] = await Promise.all([
      prisma.page.findMany({ where: { isPublished: true }, select: { slug: true, updatedAt: true } }),
      prisma.blogPost.findMany({ where: { isPublished: true }, select: { slug: true, updatedAt: true, publishedAt: true } }),
      prisma.project.findMany({ where: { isVisible: true }, select: { slug: true, updatedAt: true } }),
      prisma.service.findMany({ where: { isVisible: true }, select: { slug: true, updatedAt: true } }),
      (prisma as any).seoSettings.findFirst({ where: { id: 1 } })
    ]);

    if (seoSettings?.sitemapEnabled === false) {
      return res.status(200).setHeader('Content-Type', 'text/plain').send('Sitemap is disabled.');
    }

    const defaultFrequency = seoSettings?.sitemapFrequency || 'weekly';

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Homepage -->
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Static Core Pages -->
  <url>
    <loc>${siteUrl}/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${siteUrl}/faq</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${siteUrl}/why-magri-cabinets</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${siteUrl}/get-a-custom-quote</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Service Index Pages -->
  <url>
    <loc>${siteUrl}/our-installations</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Blog Index -->
  <url>
    <loc>${siteUrl}/blogs</loc>
    <lastmod>${blogs.length > 0 ? blogs[0].updatedAt.toISOString() : new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Projects Index -->
  <url>
    <loc>${siteUrl}/projects</loc>
    <lastmod>${projects.length > 0 ? projects[0].updatedAt.toISOString() : new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Service Pages (High Priority - Money Pages) -->
  ${services.map((service: any) => `
  <url>
    <loc>${siteUrl}/${service.slug}</loc>
    <lastmod>${service.updatedAt.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>`).join('')}

  <!-- Dynamic Custom Pages -->
  ${pages
        .filter((p: any) => p.slug !== 'home' && p.slug !== 'index')
        .map((page: any) => `
  <url>
    <loc>${siteUrl}/${page.slug}</loc>
    <lastmod>${page.updatedAt.toISOString()}</lastmod>
    <changefreq>${defaultFrequency}</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}

  <!-- Blog Posts -->
  ${blogs.map((blog: any) => `
  <url>
    <loc>${siteUrl}/blogs/${blog.slug}</loc>
    <lastmod>${blog.updatedAt.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}

  <!-- Projects/Portfolio -->
  ${projects.map((project: any) => `
  <url>
    <loc>${siteUrl}/projects/${project.slug}</loc>
    <lastmod>${project.updatedAt.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}

</urlset>`;

    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate'); // Cache for 1 hour
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.status(500).send('Error generating sitemap');
  }
}
