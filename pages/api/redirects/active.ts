import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

    try {
        const redirects = await (prisma as any).redirect.findMany({
            where: { isActive: true },
            select: {
                fromPath: true,
                toPath: true,
                statusCode: true
            }
        });

        // Cache for 60 seconds
        res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
        return res.status(200).json(redirects);
    } catch (error) {
        console.error('Failed to fetch active redirects:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
