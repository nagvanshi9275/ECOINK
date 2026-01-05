import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    if (req.method === 'PUT') {
        const data = await prisma.service.update({ where: { id: id as string }, data: req.body });
        return res.json(data);
    }
    if (req.method === 'DELETE') {
        await prisma.service.delete({ where: { id: id as string } });
        return res.status(204).end();
    }
}
