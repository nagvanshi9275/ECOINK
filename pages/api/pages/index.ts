import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const pages = await prisma.page.findMany({
                orderBy: { updatedAt: 'desc' },
                select: {
                    id: true,
                    title: true,
                    slug: true,
                    isPublished: true,
                    showInNavbar: true,
                    navbarLabel: true,
                    navbarOrder: true,
                    createdAt: true,
                    updatedAt: true,
                }
            })
            return res.status(200).json(pages)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'Failed to fetch pages' })
        }
    }

    if (req.method === 'POST') {
        try {
            const { title, slug, isPublished, metaTitle, metaDescription, sections, ...rest } = req.body;

            if (!title || !slug) {
                return res.status(400).json({ error: 'Title and Slug are required' });
            }

            // Run SEO analysis if content exists
            let seoData = {};
            if (rest.content || rest.seoTitle || rest.seoDescription) {
                const { analyzeSEO } = require('../../../lib/seo/analyzer');

                // Extract text content if needed
                let contentText = '';
                if (typeof rest.content === 'string') {
                    contentText = rest.content;
                } else if (rest.content && typeof rest.content === 'object') {
                    contentText = JSON.stringify(rest.content);
                }

                const analysis = analyzeSEO(rest, contentText);

                seoData = {
                    seoScore: analysis.score,
                    readabilityScore: analysis.readabilityScore,
                    lastSeoAudit: new Date()
                };
            }

            const page = await prisma.page.create({
                data: {
                    title,
                    slug,
                    isPublished: isPublished || false,
                    showInNavbar: req.body.showInNavbar || false,
                    navbarLabel: req.body.navbarLabel || null,
                    navbarOrder: req.body.navbarOrder || 0,
                    metaTitle,
                    metaDescription,
                    ...rest,
                    ...seoData,
                    sections: {
                        create: (sections || []).map((s: any) => ({
                            sectionId: s.sectionId,
                            order: s.order
                        }))
                    }
                },
            });
            return res.status(201).json(page);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to create page' });
        }
    }

    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
}
