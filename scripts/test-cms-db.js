const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log('1. Connecting to CMS Database...');

    try {
        // Attempt to create a test page
        console.log('2. Creating a test page in the database...');
        const testPage = await prisma.page.create({
            data: {
                title: 'Test Page',
                slug: 'test-page-' + Date.now(),
                content: [{ type: 'text', value: 'This is a test.' }],
                isPublished: true,
                metaTitle: 'Test Meta Title',
            },
        });

        console.log('✅ Success! Created Page:', testPage.id, testPage.title);

        // Attempt to fetch it back
        console.log('3. Fetching the page back...');
        const fetchedPage = await prisma.page.findUnique({
            where: { id: testPage.id },
        });

        if (fetchedPage) {
            console.log('✅ Success! Fetched Page:', fetchedPage.slug);
        } else {
            console.error('❌ Error: Could not fetch the page immediately after creation.');
        }

        // Clean up
        console.log('4. Cleaning up test data...');
        await prisma.page.delete({ where: { id: testPage.id } });
        console.log('✅ Test data deleted.');

    } catch (e) {
        console.error('❌ REST API / Database Error:', e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
