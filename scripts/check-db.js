const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const pages = await prisma.page.findMany();
    console.log('Pages:', pages.length);
    const projects = await prisma.project.findMany();
    console.log('Projects:', projects.map(p => p.slug));
    const sections = await prisma.contentSection.findMany();
    console.log('ContentSections:', sections.length);
    const pageSections = await prisma.pageSection.findMany();
    console.log('PageSections:', pageSections.length);
    const menuItems = await prisma.menuItem.findMany();
    console.log('MenuItems:', menuItems.length);
    const media = await prisma.mediaAsset.findMany();
    console.log('MediaAssets:', media.length);
    const service = await prisma.service.findUnique({ where: { slug: 'bathroom-vanities' } });
    console.log('Bathroom Vanities Gallery:', service?.galleryImages);
}




main().catch(console.error).finally(() => prisma.$disconnect());
