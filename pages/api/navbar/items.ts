import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(405).end();

    try {
        const pages = await prisma.page.findMany({
            where: {
                isPublished: true,
                showInNavbar: true
            },
            orderBy: {
                navbarOrder: 'asc'
            }
        });

        const servicesSlugs = [
            'bathroom-vanities', 'kitchen-cabinets', 'laundry-cabinets',
            'tv-cabinets', 'wardrobes', 'furniture'
        ];

        const mainItems: any[] = [];
        const serviceItems: any[] = [];

        pages.forEach((p: any) => {
            const item = {
                label: (p.navbarLabel || p.title).toUpperCase(),
                href: p.slug.startsWith('/') ? p.slug : `/${p.slug}`
            };

            if (servicesSlugs.includes(p.slug)) {
                serviceItems.push(item);
            } else {
                mainItems.push(item);
            }
        });

        // Ensure "OUR INSTALLATIONS" is present if there are services
        if (serviceItems.length > 0) {
            // Find if there's an "Our Installations" page already
            const installationsPage = mainItems.find(m => m.href === '/our-installations');
            if (installationsPage) {
                installationsPage.hasDropdown = true;
                installationsPage.dropdownItems = serviceItems;
            } else {
                // Insert it at a reasonable position or based on its own order
                mainItems.push({
                    label: 'OUR INSTALLATIONS',
                    href: '/our-installations',
                    hasDropdown: true,
                    dropdownItems: serviceItems
                });
            }
        }

        return res.status(200).json(mainItems);

    } catch (error) {
        console.error('Navbar Fetch Error:', error);
        return res.status(500).json({ error: 'Failed to fetch navbar items' });
    }
}
