import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { deleteFromCloudinary } from '../../../lib/cloudinary';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid ID' });
    }

    if (req.method === 'GET') {
        try {
            const data = await prisma.mediaAsset.findUnique({ where: { id } });
            if (!data) {
                return res.status(404).json({ error: 'Media not found' });
            }
            return res.json(data);
        } catch (error) {
            console.error('Error fetching media:', error);
            return res.status(500).json({ error: 'Failed to fetch media' });
        }
    }

    if (req.method === 'DELETE') {
        try {
            // First get the media to get the URL
            const media = await prisma.mediaAsset.findUnique({ where: { id } });

            if (!media) {
                return res.status(404).json({ error: 'Media not found' });
            }

            // Extract public_id from Cloudinary URL if it's a Cloudinary URL
            if (media.url && media.url.includes('res.cloudinary.com')) {
                // Extract public_id from URL: https://res.cloudinary.com/dpbuxfm1f/image/upload/v1234/folder/filename.ext
                const urlParts = media.url.split('/upload/');
                if (urlParts.length > 1) {
                    // Remove version and get the path
                    const pathWithVersion = urlParts[1];
                    const pathParts = pathWithVersion.split('/');
                    // Remove version (starts with 'v')
                    if (pathParts[0].startsWith('v')) {
                        pathParts.shift();
                    }
                    // Join remaining parts and remove extension
                    const publicId = pathParts.join('/').replace(/\.[^/.]+$/, '');

                    // Try to delete from Cloudinary (don't fail if this fails)
                    await deleteFromCloudinary(publicId);
                }
            }

            // Delete from database
            await prisma.mediaAsset.delete({ where: { id } });
            return res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error deleting media:', error);
            return res.status(500).json({ error: 'Failed to delete media' });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}
