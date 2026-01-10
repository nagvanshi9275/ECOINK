const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const blogContentData = [
    {
        slug: 'top-kitchen-cabinet-trends-for-2025',
        content: `
            <h2>The Future of Kitchen Design</h2>
            <p class="lead">As we move into 2025, kitchen design in Melbourne is shifting towards a blend of organic textures, sustainable materials, and "hidden" technology.</p>
            <p>At Magri Cabinets, we've seen a surge in requests for handless designs and integrated appliances. The goal is to create a seamless, furniture-like look for the kitchen that integrates perfectly with open-plan living spaces.</p>
            <h3>1. Natural Wood Accents</h3>
            <p>Warm timber tones are making a big comeback. Whether it's a full Tasmanian Oak island bench or subtle walnut shelving, natural wood adds warmth to the often cold surfaces of a kitchen.</p>
            <h3>2. Bold Backsplashes</h3>
            <p>Moving away from plain white tiles, homeowners are opting for stone slabs that match their benchtops or vibrant, textured tiles that serve as a focal point.</p>
            <h3>3. Smart Storage Solutions</h3>
            <p>Functionality is key. We're installing more pull-out pantries, corner optimizations, and dedicated charging stations inside drawers to keep counters clutter-free.</p>
            <p>Ready to upgrade? Contact Magri Cabinets today for a custom design consultation.</p>
        `
    },
    {
        slug: 'how-to-choose-the-perfect-bathroom-vanity',
        content: `
            <h2>Finding the Right Balance</h2>
            <p class="lead">Choosing a bathroom vanity isn't just about style; it's about finding the perfect balance between storage, durability, and aesthetics.</p>
            <p>Your vanity is often the centerpiece of your bathroom. In Melbourne's diverse homes, we see everything from ultra-modern floating vanities to classic shaker styles.</p>
            <h3>Consider Your Storage Needs</h3>
            <p>How many people use the bathroom? If it's a family bathroom, deep drawers are essential for towels and toiletries. For a powder room, a minimalist floating unit might be better.</p>
            <h3>Material Matters</h3>
            <p>Since the bathroom is a wet environment, high moisture resistance (HMR) is crucial. We use only the best HMR boards and premium finishes to ensure your vanity lasts for years.</p>
            <h3>Plumbing Layout</h3>
            <p>Before you fall in love with a design, check your plumbing. Wall-mounted vanities require plumbing to be moved into the wall, which can add to your renovation cost but offers a much cleaner look.</p>
        `
    },
    {
        slug: 'maximizing-wardrobe-storage-solutions',
        content: `
            <h2>Organize Your Life</h2>
            <p class="lead">A well-designed wardrobe can save you time every morning. It's not just about more space; it's about smarter space.</p>
            <h3>Double Hanging Space</h3>
            <p>Most wardrobes have too much "dead air." By installing double hanging rails for shirts and pants, you can effectively double your storage capacity.</p>
            <h3>Dedicated Accessory Storage</h3>
            <p>Ties, belts, watches, and jewelry often get lost in big drawers. We design shallow, velvet-lined drawers with compartments to keep your small items organized and easy to find.</p>
            <h3>Adjustable Shelving</h3>
            <p>Your needs change over time. Adjustable shelving allows you to reconfigure your wardrobe as your collection of shoes or folded items grows.</p>
        `
    },
    {
        slug: 'the-benefits-of-custom-furniture',
        content: `
            <h2>Why Go Custom?</h2>
            <p class="lead">In a world of flat-pack furniture, custom-made pieces offer unparalleled quality and a perfect fit for your unique home.</p>
            <p>Custom furniture is an investment in your home's future. Each piece we build at Magri Cabinets is designed to last a lifetime, using traditional joinery techniques and premium materials.</p>
            <h3>Unique Design</h3>
            <p>You don't have to settle for "close enough." With custom furniture, you specify the exact dimensions, timber species, and finish that matches your vision.</p>
            <h3>Maximizing Difficult Spaces</h3>
            <p>Have a weird alcove or an unusually long hallway? Custom-built consoles and bookcases can turn those awkward spots into functional highlights of your home.</p>
        `
    },
    {
        slug: 'tv-cabinet-design-ideas-for-modern-living',
        content: `
            <h2>The Heart of Entertainment</h2>
            <p class="lead">Modern living rooms revolve around the screen, but the screen shouldn't be the only thing you see. Our TV cabinets blend technology with design.</p>
            <h3>Hidden Cable Management</h3>
            <p>Nothing ruins a sleek living room like a mountain of cables. Our custom units feature integrated cable runs and hidden power outlets to keep everything organized.</p>
            <h3>Ventilation for Electronics</h3>
            <p>Gaming consoles and sound systems generate heat. We incorporate subtle ventilation into our designs to prevent your equipment from overheating while keeping it hidden behind beautiful doors.</p>
            <h3>Floating Entertainment Units</h3>
            <p>Floating units are incredibly popular in Melbourne right now. They make the room feel larger by showing more floor space and simplify floor cleaning.</p>
        `
    },
    {
        slug: 'laundry-room-organization-tips',
        content: `
            <h2>Efficiency Meets Style</h2>
            <p class="lead">The laundry is often the most neglected room in the house, but it's also one of the hardest working. Smart cabinetry can transform it.</p>
            <h3>Worktop Space</h3>
            <p>Having a dedicated area to fold clothes is a game changer. We often install seamless benchtops over side-by-side washers and dryers to maximize your workspace.</p>
            <h3>Tall Cabinetry</h3>
            <p>Don't forget about the broom and iron. A tall, narrow cabinet is perfect for these items, keeping them out of sight but easily accessible.</p>
            <h3>Drying Racks</h3>
            <p>Pull-out drying racks are perfect for delicate items that can't go in the dryer, saving you from having bulky clothes airers taking up space in your living room.</p>
        `
    }
];

const serviceContentData = [
    {
        slug: 'kitchen-cabinets',
        name: 'Kitchen Cabinets',
        content: `
            <h2>Custom Kitchen Cabinets Melbourne</h2>
            <p>At Magri Cabinets, we specialize in creating <strong>bespoke kitchen cabinetry</strong> that serves as the heart of your Melbourne home. Our designs balance contemporary aesthetics with practical functionality.</p>
            <p>Whether you're looking for a sleek modern finish with handleless doors or a timeless shaker-style kitchen, our expert craftsmen use only the highest quality materials to bring your vision to life.</p>
            <h3>Why Choose Our Kitchens?</h3>
            <ul>
                <li><strong>Premium Materials:</strong> We use HMR board and top-tier laminates or 2-pack finishes.</li>
                <li><strong>Hardware Excellence:</strong> Soft-close hinges and drawer runners are standard in all our projects.</li>
                <li><strong>Tailored Design:</strong> Every cabinet is built to your exact measurements, ensuring no wasted space.</li>
            </ul>
        `
    },
    {
        slug: 'bathroom-vanities',
        name: 'Bathroom Vanities',
        content: `
            <h2>Luxurious Bathroom Vanities</h2>
            <p>Transform your bathroom into a spa-like retreat with a custom-designed vanity from Magri Cabinets. We understand that bathrooms require a unique blend of style and extreme durability.</p>
            <p>Our vanities are built using highly moisture-resistant materials, ensuring your investment stands up to the demands of a wet environment while maintaining its beautiful finish.</p>
            <h3>Design Options</h3>
            <p>From <strong>wall-hung floating vanities</strong> that create a sense of space to floor-standing units with maximum storage, we offer a range of styles to suit any bathroom renovation.</p>
        `
    },
    {
        slug: 'laundry-cabinets',
        name: 'Laundry Cabinets',
        content: `
            <h2>Functional Laundry Solutions</h2>
            <p>The laundry doesn't have to be a chore. With our custom laundry cabinets, we turn one of the busiest rooms in your house into an organized, efficient workspace.</p>
            <p>We specialize in overhead storage, tall broom cupboards, and integrated appliance housing that maximizes every square inch of your laundry room.</p>
        `
    },
    {
        slug: 'tv-cabinets',
        name: 'TV Cabinets',
        content: `
            <h2>Custom TV & Entertainment Units</h2>
            <p>Your living room deserves a centerpiece that is as functional as it is beautiful. Our custom TV cabinets are designed to house your technology while enhancing your home's décor.</p>
            <p>We focus on <strong>integrated cable management</strong> and proper ventilation for your electronics, ensuring a clean look and long-lasting performance for your equipment.</p>
        `
    },
    {
        slug: 'wardrobes',
        name: 'Wardrobes',
        content: `
            <h2>Bespoke Wardrobes & Storage</h2>
            <p>Experience the luxury of a perfectly organized wardrobe. Whether it's a grand walk-in closet or space-efficient built-in robes, we design storage that fits your lifestyle.</p>
            <p>Our wardrobes feature custom shelving, hanging ratios tailored to your clothing, and premium soft-close components for a silent, high-end experience.</p>
        `
    },
    {
        slug: 'furniture',
        name: 'Custom Furniture',
        content: `
            <h2>Handcrafted Custom Furniture</h2>
            <p>Sometimes the perfect piece of furniture doesn't exist in a store. That's where we come in. From custom dining tables to home office desks, we craft unique pieces to your exact specifications.</p>
            <p>Each piece is a testament to quality joinery and attention to detail, built in our Melbourne workshop to be passed down through generations.</p>
        `
    }
];

async function main() {
    console.log('--- RESTORING TEXT CONTENT FOR BLOGS AND SERVICES ---');

    // 1. Restore Blogs
    for (const blog of blogContentData) {
        console.log(`Updating/Creating Blog: ${blog.slug}...`);
        await prisma.blogPost.upsert({
            where: { slug: blog.slug },
            update: { content: blog.content },
            create: {
                slug: blog.slug,
                title: blog.slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
                content: blog.content,
                excerpt: blog.content.substring(0, 150).replace(/<[^>]*>/g, '') + '...',
                isPublished: true,
                coverImage: '/kitchen2.jpg' // Default
            }
        }).catch(err => {
            console.warn(`Could not upsert blog ${blog.slug}: ${err.message}`);
        });
    }


    // 2. Restore Services
    for (const service of serviceContentData) {
        console.log(`Updating Service: ${service.slug}...`);
        await prisma.service.updateMany({
            where: { slug: service.slug },
            data: { content: service.content }
        }).catch(err => {
            console.warn(`Could not update service ${service.slug}: ${err.message}`);
        });
    }

    console.log('--- RESTORATION COMPLETE ---');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
