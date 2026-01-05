import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const pages = await prisma.page.findMany({
                orderBy: { updatedAt: 'desc' },
                select: {
                    id: true,
                    title: true,
                    slug: true,
                    isPublished: true,
                    createdAt: true,
                    updatedAt: true,
                }
            })
            return res.status(200).json(pages)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'Failed to fetch pages' })
        }
    }

    if (req.method === 'POST') {
        try {
            const { title, slug, isPublished, metaTitle, metaDescription, sections } = req.body

            if (!title || !slug) {
                return res.status(400).json({ error: 'Title and Slug are required' })
            }

            const page = await prisma.page.create({
                data: {
                    title,
                    slug,
                    isPublished: isPublished || false,
                    metaTitle,
                    metaDescription,
                    sections: {
                        create: (sections || []).map((s: any) => ({
                            sectionId: s.sectionId,
                            order: s.order
                        }))
                    }
                },
            })
            return res.status(201).json(page)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'Failed to create page' })
        }
    }

    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
}
