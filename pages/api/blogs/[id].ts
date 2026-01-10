import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { analyzeSEO } from '../../../lib/seo/analyzer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === 'PUT') {
        try {
            // Get the incoming data
            const updateData = { ...req.body };

            // Run SEO analysis if content exists
            if (updateData.content || updateData.seoTitle || updateData.seoDescription) {
                const analysis = analyzeSEO(updateData, updateData.content || '');

                // Add SEO scores to update data
                updateData.seoScore = analysis.score;
                updateData.readabilityScore = analysis.readabilityScore;
                updateData.lastSeoAudit = new Date();
            }

            // Update in database
            const data = await prisma.blogPost.update({
                where: { id: id as string },
                data: updateData
            });

            return res.json(data);
        } catch (error) {
            console.error('Error updating blog post:', error);
            return res.status(500).json({ error: 'Failed to update blog post' });
        }
    }

    if (req.method === 'DELETE') {
        try {
            await prisma.blogPost.delete({ where: { id: id as string } });
            return res.status(204).end();
        } catch (error) {
            console.error('Error deleting blog post:', error);
            return res.status(500).json({ error: 'Failed to delete blog post' });
        }
    }

    res.setHeader('Allow', ['PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}
