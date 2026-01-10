import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { analyzeSEO } from '../../../lib/seo/analyzer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const data = await prisma.service.findMany({ orderBy: { order: 'asc' } });
        return res.json(data);
    }

    if (req.method === 'POST') {
        try {
            const createData = { ...req.body };

            // Run SEO analysis if content exists
            if (createData.content || createData.seoTitle || createData.seoDescription) {
                const analysis = analyzeSEO(createData, createData.content || createData.description || '');

                // Add SEO scores to create data
                createData.seoScore = analysis.score;
                createData.readabilityScore = analysis.readabilityScore;
                createData.lastSeoAudit = new Date();
            }

            const data = await prisma.service.create({ data: createData });
            return res.status(201).json(data);
        } catch (error) {
            console.error('Error creating service:', error);
            return res.status(500).json({ error: 'Failed to create service' });
        }
    }

    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}
