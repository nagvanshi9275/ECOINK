import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const data = await prisma.menuItem.findMany({
            where: { parentId: null },
            include: { children: true },
            orderBy: { order: 'asc' }
        });
        return res.status(200).json(data);
    }

    if (req.method === 'POST') {
        const data = await prisma.menuItem.create({ data: req.body });
        return res.status(201).json(data);
    }

    return res.status(405).end();
}
