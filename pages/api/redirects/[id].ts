import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === 'PUT') {
        try {
            const { source, destination, active, type, fromPath, toPath, statusCode, isActive } = req.body;
            const redirect = await (prisma as any).redirect.update({
                where: { id: id as string },
                data: {
                    fromPath: fromPath || source,
                    toPath: toPath || destination,
                    statusCode: statusCode || (parseInt(type as string) || 301),
                    isActive: isActive !== undefined ? isActive : active
                }
            });
            return res.status(200).json(redirect);
        } catch (error) {
            console.error('Redirect update error:', error);
            return res.status(500).json({ error: 'Failed to update redirect' });
        }
    }

    if (req.method === 'DELETE') {
        try {
            await (prisma as any).redirect.delete({
                where: { id: id as string }
            });
            return res.status(200).json({ success: true });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to delete redirect' });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
