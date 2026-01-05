import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    if (!id || typeof id !== 'string') return res.status(400).json({ error: 'Invalid ID' });

    if (req.method === 'PUT') {
        try {
            const hero = await prisma.heroBanner.update({
                where: { id },
                data: req.body,
            });
            return res.status(200).json(hero);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to update hero' });
        }
    }

    if (req.method === 'DELETE') {
        try {
            await prisma.heroBanner.delete({ where: { id } });
            return res.status(204).end();
        } catch (error) {
            return res.status(500).json({ error: 'Failed to delete hero' });
        }
    }
}
