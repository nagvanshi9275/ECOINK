import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const data = await prisma.partner.findMany({ orderBy: { order: 'asc' } });
        return res.json(data);
    }
    if (req.method === 'POST') {
        const data = await prisma.partner.create({ data: req.body });
        return res.status(201).json(data);
    }
}
