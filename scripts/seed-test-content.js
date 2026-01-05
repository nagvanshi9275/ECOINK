const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('SEED: Creating test content...');

    // 1. Create Layout Testing Page
    const slug = 'cms-feature-test';
    await prisma.page.upsert({
        where: { slug },
        update: {
            title: 'CMS Feature Test',
            isPublished: true,
            content: [
                {
                    type: 'hero',
                    data: {
                        heading: 'Dynamic CMS Hero',
                        subheading: 'This content is fully managed via the database.',
                        image: '/library.jpg',
                        ctaLabel: 'Test CTA',
                        ctaLink: '/contact'
                    }
                },
                {
                    type: 'text',
                    data: {
                        html: '<p>This is a <strong>rich text block</strong> rendered from the CMS. It verifies that HTML injection is working safely.</p>'
                    }
                },
                {
                    type: 'image-text',
                    data: {
                        heading: 'Image & Text Combo',
                        html: '<p>Verifying the image-left layout configuration.</p>',
                        image: '/room.jpg',
                        imagePosition: 'left'
                    }
                }
            ],
            metaTitle: 'CMS Test Page | Magri Cabinets',
            metaDescription: 'Automated test page for verifying CMS capabilities.'
        },
        create: {
            title: 'CMS Feature Test',
            slug,
            isPublished: true,
            content: [
                {
                    type: 'hero',
                    data: {
                        heading: 'Dynamic CMS Hero',
                        subheading: 'This content is fully managed via the database.',
                        image: '/library.jpg',
                        ctaLabel: 'Test CTA',
                        ctaLink: '/contact'
                    }
                },
                {
                    type: 'text',
                    data: {
                        html: '<p>This is a <strong>rich text block</strong> rendered from the CMS. It verifies that HTML injection is working safely.</p>'
                    }
                },
                {
                    type: 'image-text',
                    data: {
                        heading: 'Image & Text Combo',
                        html: '<p>Verifying the image-left layout configuration.</p>',
                        image: '/room.jpg',
                        imagePosition: 'left'
                    }
                }
            ],
            metaTitle: 'CMS Test Page | Magri Cabinets',
            metaDescription: 'Automated test page for verifying CMS capabilities.',
            noIndex: true // Should see <meta name="robots" content="noindex" />
        }
    });

    console.log('✅ Created/Updated Page: /cms-feature-test');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
