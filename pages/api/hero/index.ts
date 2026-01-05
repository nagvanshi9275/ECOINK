import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const heroes = await prisma.heroBanner.findMany({
                orderBy: { order: 'asc' },
            });
            return res.status(200).json(heroes);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to fetch heroes' });
        }
    }

    if (req.method === 'POST') {
        try {
            const { heading, subheading, image, ctaText, ctaLink, isVisible } = req.body;
            const hero = await prisma.heroBanner.create({
                data: {
                    heading,
                    subheading,
                    image,
                    ctaText,
                    ctaLink,
                    isVisible: isVisible ?? true,
                },
            });
            return res.status(201).json(hero);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to create hero' });
        }
    }
}
