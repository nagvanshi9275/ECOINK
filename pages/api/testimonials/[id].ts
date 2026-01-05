import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === 'PUT') {
        const data = await prisma.testimonial.update({
            where: { id: String(id) },
            data: req.body,
        });
        return res.status(200).json(data);
    }

    if (req.method === 'DELETE') {
        await prisma.testimonial.delete({ where: { id: String(id) } });
        return res.status(204).end();
    }

    return res.status(405).end();
}
