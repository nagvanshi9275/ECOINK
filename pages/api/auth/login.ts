import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const admin = await prisma.adminUser.findUnique({
            where: { email },
        });

        if (!admin) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // In a real production app, compare hashed password here using bcrypt!
        // For this setup request, we are checking direct string match as per seed.
        // const match = await bcrypt.compare(password, admin.password);

        // TEMPORARY: Direct string comparison for the seeded password
        if (password !== admin.password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Set a simple auth cookie
        res.setHeader('Set-Cookie', `admin_token=${admin.id}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`);

        return res.status(200).json({ success: true, role: admin.role });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
