import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const redirects = await prisma.redirect.findMany({
                orderBy: { createdAt: 'desc' }
            });
            return res.status(200).json(redirects);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to fetch redirects' });
        }
    }

    if (req.method === 'POST') {
        try {
            const { source, destination, type } = req.body;
            const redirect = await prisma.redirect.create({
                data: {
                    fromPath: source,
                    toPath: destination,
                    statusCode: parseInt(type as string) || 301,
                    isActive: true
                }
            });
            return res.status(201).json(redirect);
        } catch (error) {
            console.error('Redirect creation error:', error);
            return res.status(500).json({ error: 'Failed to create redirect' });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
