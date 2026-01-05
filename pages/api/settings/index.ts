import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const data = await prisma.globalSettings.findFirst({ where: { id: 1 } });
        return res.status(200).json(data);
    }

    if (req.method === 'PUT') {
        const data = await prisma.globalSettings.upsert({
            where: { id: 1 },
            update: req.body,
            create: { ...req.body, id: 1 },
        });
        return res.status(200).json(data);
    }

    return res.status(405).end();
}
