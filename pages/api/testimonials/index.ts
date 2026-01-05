import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const data = await prisma.testimonial.findMany({ orderBy: { createdAt: 'desc' } });
        return res.status(200).json(data);
    }

    if (req.method === 'POST') {
        const data = await prisma.testimonial.create({ data: req.body });
        return res.status(201).json(data);
    }

    return res.status(405).end();
}
