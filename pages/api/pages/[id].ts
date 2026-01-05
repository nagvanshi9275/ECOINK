import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query

    if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid ID' })
    }

    if (req.method === 'GET') {
        try {
            const page = await prisma.page.findUnique({
                where: { id },
            })
            if (!page) {
                return res.status(404).json({ error: 'Page not found' })
            }
            return res.status(200).json(page)
        } catch (error) {
            return res.status(500).json({ error: 'Failed to fetch page' })
        }
    }

    if (req.method === 'PUT') {
        try {
            const { sections, id: _, createdAt: __, updatedAt: ___, ...rest } = req.body
            const page = await prisma.page.update({
                where: { id },
                data: {
                    ...rest,
                    sections: {
                        deleteMany: {},
                        create: (sections || []).map((s: any) => ({
                            sectionId: s.sectionId,
                            order: s.order
                        }))
                    }
                },
            })
            return res.status(200).json(page)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'Failed to update page' })
        }
    }

    if (req.method === 'DELETE') {
        try {
            await prisma.page.delete({
                where: { id },
            })
            return res.status(204).end()
        } catch (error) {
            return res.status(500).json({ error: 'Failed to delete page' })
        }
    }

    res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
}
