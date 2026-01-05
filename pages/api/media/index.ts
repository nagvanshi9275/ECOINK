import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const data = await prisma.mediaAsset.findMany({
                orderBy: { createdAt: 'desc' }
            });
            return res.json(data);
        } catch (error) {
            console.error('Error fetching media:', error);
            return res.status(500).json({ error: 'Failed to fetch media' });
        }
    }

    if (req.method === 'POST') {
        try {
            const { filename, url, type, size } = req.body;
            const data = await prisma.mediaAsset.create({
                data: {
                    filename,
                    url,
                    type: type || 'image',
                    size: size || null
                }
            });
            return res.status(201).json(data);
        } catch (error) {
            console.error('Error creating media:', error);
            return res.status(500).json({ error: 'Failed to create media' });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
