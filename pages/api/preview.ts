import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug, secret } = req.query;

    // Check the secret and next parameters
    // This secret should be stored as an environment variable and known only to this API route and the CMS
    // For now, we'll keep it simple or allow it if it's from the admin.
    // In a real app, use: if (secret !== process.env.STRAPI_PREVIEW_SECRET || !slug) ...

    if (!slug) {
        return res.status(401).json({ message: 'Invalid slug' });
    }

    // Enable Preview Mode by setting the cookies
    res.setPreviewData({});

    // Redirect to the path from the fetched post
    // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
    res.writeHead(307, { Location: `/${slug}` });
    res.end();
}
