import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const data = await prisma.project.findMany({ orderBy: { createdAt: 'desc' } });
        return res.json(data);
    }
    if (req.method === 'POST') {
        const data = await prisma.project.create({ data: req.body });
        return res.status(201).json(data);
    }
}
