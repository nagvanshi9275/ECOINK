import { NavItem, ServiceCard, Testimonial, FAQItem, FeatureCard } from "@/types";

export const navigationItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Why Magri", href: "/why-magri-cabinets" },
    { label: "Bathroom", href: "/bathroom-vanities" },
    { label: "Kitchen", href: "/kitchen-cabinets" },
    { label: "Laundry", href: "/laundry-cabinets" },
    { label: "TV", href: "/tv-cabinets" },
    { label: "Wardrobes", href: "/wardrobes" },
    { label: "Furniture", href: "/furniture" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
];

export const services: ServiceCard[] = [
    {
        id: "bathroom-vanities",
        title: "Bathroom Vanities",
        description: "Custom-designed bathroom vanities that combine functionality with stunning aesthetics. Transform your bathroom into a luxurious retreat.",
        href: "/bathroom-vanities",
        iconName: "Bath",
    },
    {
        id: "kitchen-cabinets",
        title: "Kitchen Cabinets",
        description: "Bespoke kitchen cabinetry tailored to your space and lifestyle. Experience the heart of your home with premium craftsmanship.",
        href: "/kitchen-cabinets",
        iconName: "ChefHat",
    },
    {
        id: "laundry-cabinets",
        title: "Laundry Cabinets",
        description: "Efficient and stylish laundry solutions that maximize storage and functionality. Make laundry day a breeze.",
        href: "/laundry-cabinets",
        iconName: "Shirt",
    },
    {
        id: "tv-cabinets",
        title: "TV Cabinets",
        description: "Custom entertainment units designed to showcase your technology while keeping cables organized and hidden.",
        href: "/tv-cabinets",
        iconName: "Tv",
    },
    {
        id: "wardrobes",
        title: "Wardrobes",
        description: "Walk-in and built-in wardrobes with smart storage solutions. Organize your wardrobe with custom-fitted interiors.",
        href: "/wardrobes",
        iconName: "Shirt",
    },
    {
        id: "furniture",
        title: "Custom Furniture",
        description: "Unique, handcrafted furniture pieces designed to your exact specifications. From dining tables to office desks.",
        href: "/furniture",
        iconName: "Armchair",
    },
];

export const testimonials: Testimonial[] = [
    {
        id: "testimonial-1",
        quote: "Mark was very accommodating and professional throughout the entire process. The quality of the kitchen cabinets exceeded our expectations. Truly a premium experience!",
        author: "Sarah Mitchell",
        role: "Kitchen Renovation",
        rating: 5,
        date: "2 weeks ago",
        image: "/sarah.png",
    },
    {
        id: "testimonial-2",
        quote: "Excellent workmanship and attention to detail on our laundry cabinets. They maximized our small space perfectly. Highly recommended for any custom joinery!",
        author: "Joe D'Agostino",
        role: "Laundry Upgrade",
        rating: 5,
        date: "1 month ago",
        image: "/joe.png",
    },
    {
        id: "testimonial-3",
        quote: "Highly recommend Magri Cabinets for custom cabinetry in Melbourne. Their team is professional, clean, and the final finish is absolutely flawless.",
        author: "Michael Thompson",
        role: "Bathroom Vanity",
        rating: 5,
        date: "3 weeks ago",
        image: "/michael.png",
    },
    {
        id: "testimonial-4",
        quote: "The built-in wardrobes they created are stunning. The storage solutions are so smart, and the soft-close feature is a game changer. Very happy!",
        author: "Emma Wilson",
        role: "Wardrobes",
        rating: 5,
        date: "2 months ago",
        image: "/emma.png",
    },
    {
        id: "testimonial-5",
        quote: "Professional from start to finish. The TV unit they designed fits our living room perfectly and handles all the messy cables beautifully.",
        author: "David Chen",
        role: "TV Cabinet",
        rating: 5,
        date: "5 days ago",
        image: "/david.png",
    },
    {
        id: "testimonial-6",
        quote: "We love our new custom dining table and kitchen island. The timber work is artistry. Magri Cabinets are definitely the best in Melbourne.",
        author: "Lisa Anderson",
        role: "Custom Furniture",
        rating: 5,
        date: "3 months ago",
        image: "/lisa.png",
    },
];

export const faqItems: FAQItem[] = [
    {
        id: "faq-1",
        question: "How long does it take to complete a custom cabinet project?",
        answer: "Project timelines vary depending on complexity and scope. Typically, a kitchen renovation takes 4-6 weeks from design approval to installation. Smaller projects like bathroom vanities or TV units may take 2-3 weeks. We'll provide a detailed timeline during your free consultation.",
    },
    {
        id: "faq-2",
        question: "What materials do you use for your cabinets?",
        answer: "We use only premium materials including moisture-resistant MDF, solid timber, high-quality laminates, and soft-close hardware. All materials are sourced from reputable Australian suppliers and come with manufacturer warranties.",
    },
    {
        id: "faq-3",
        question: "Do you offer free consultations and quotes?",
        answer: "Yes! We offer completely free, no-obligation consultations and quotes. Our experienced team will visit your home, discuss your requirements, take measurements, and provide a detailed quote within 48 hours.",
    },
    {
        id: "faq-4",
        question: "What areas in Melbourne do you service?",
        answer: "We service all of Melbourne and surrounding suburbs including the Eastern, Western, Northern, and South-Eastern suburbs. Contact us to confirm if we cover your area.",
    },
    {
        id: "faq-5",
        question: "Do you provide a warranty on your work?",
        answer: "Absolutely. All our cabinetry comes with a comprehensive 10-year structural warranty. Hardware and finishes are covered under their respective manufacturer warranties. We stand behind every project we complete.",
    },
    {
        id: "faq-6",
        question: "Can you match existing cabinetry in my home?",
        answer: "Yes, we specialize in matching existing cabinetry styles, colors, and finishes. Our craftsmen have decades of experience in color matching and can seamlessly integrate new pieces with your existing décor.",
    },
];

export const bathroomFeatures: FeatureCard[] = [
    {
        id: "bf-1",
        title: "Wall-Hung Vanities",
        description: "Modern floating vanities that create a spacious, contemporary look while making cleaning easier.",
        iconName: "Droplets",
        image: "/bathromr.jpg",
    },
    {
        id: "bf-2",
        title: "Stone Benchtops",
        description: "Premium stone and engineered stone benchtops that are durable, easy to clean, and stunning.",
        iconName: "Gem",
        image: "/toliet.jpg",
    },
    {
        id: "bf-3",
        title: "Soft-Close Drawers",
        description: "Quality soft-close mechanisms on all drawers and doors for a premium, quiet experience.",
        iconName: "Volume2",
        image: "/bathromr.jpg",
    },
    {
        id: "bf-4",
        title: "Custom Sizing",
        description: "Every vanity is made to fit your exact space, maximizing storage and functionality.",
        iconName: "Ruler",
        image: "/toliet.jpg",
    },
];

export const kitchenFeatures: FeatureCard[] = [
    {
        id: "kf-1",
        title: "Premium Materials",
        description: "High-quality timber, laminates, and hardware that stand the test of time.",
        iconName: "Shield",
        image: "/kitchen1.jpg",
    },
    {
        id: "kf-2",
        title: "Smart Storage",
        description: "Innovative storage solutions including pull-out pantries, corner carousels, and drawer organizers.",
        iconName: "Package",
        image: "/kitchen2.jpg",
    },
    {
        id: "kf-3",
        title: "Custom Design",
        description: "Kitchen layouts tailored to your cooking style and family needs.",
        iconName: "Pencil",
        image: "/kitchen1.jpg",
    },
    {
        id: "kf-4",
        title: "Quality Hardware",
        description: "Blum and Hettich soft-close hinges and drawer runners for durability.",
        iconName: "Cog",
        image: "/kitchen2.jpg",
    },
    {
        id: "kf-5",
        title: "Stone Benchtops",
        description: "Wide selection of natural stone and engineered stone benchtop options.",
        iconName: "Gem",
        image: "/kitchen1.jpg",
    },
    {
        id: "kf-6",
        title: "Island Benches",
        description: "Statement kitchen islands with integrated storage and seating options.",
        iconName: "LayoutGrid",
        image: "/kitchen2.jpg",
    },
];

export const laundryFeatures: FeatureCard[] = [
    {
        id: "lf-1",
        title: "Overhead Storage",
        description: "Maximize vertical space with custom overhead cabinets for laundry essentials.",
        iconName: "ArrowUp",
        image: "/room copy.jpg",
    },
    {
        id: "lf-2",
        title: "Pull-Out Hampers",
        description: "Built-in hamper systems that keep dirty laundry organized and out of sight.",
        iconName: "Inbox",
        image: "/kitchen2.jpg",
    },
    {
        id: "lf-3",
        title: "Folding Stations",
        description: "Dedicated folding areas with integrated ironing board storage.",
        iconName: "Shirt",
        image: "/room copy.jpg",
    },
    {
        id: "lf-4",
        title: "Durable Finishes",
        description: "Moisture-resistant materials designed to withstand the laundry environment.",
        iconName: "Shield",
        image: "/kitchen2.jpg",
    },
];

export const tvFeatures: FeatureCard[] = [
    {
        id: "tf-1",
        title: "Cable Management",
        description: "Hidden cable systems for a clean, clutter-free entertainment setup.",
        iconName: "Cable",
        image: "/library.jpg",
    },
    {
        id: "tf-2",
        title: "Floating Designs",
        description: "Wall-mounted units that create a modern, spacious look.",
        iconName: "Layers",
        image: "/room.jpg",
    },
    {
        id: "tf-3",
        title: "Component Storage",
        description: "Dedicated spaces for gaming consoles, streaming devices, and sound systems.",
        iconName: "HardDrive",
        image: "/library.jpg",
    },
    {
        id: "tf-4",
        title: "Display Shelving",
        description: "Open and closed storage options for books, décor, and collectibles.",
        iconName: "BookOpen",
        image: "/room.jpg",
    },
];

export const wardrobeFeatures: FeatureCard[] = [
    {
        id: "wf-1",
        title: "Walk-In Wardrobes",
        description: "Luxury walk-in designs with dedicated zones for every clothing category.",
        iconName: "DoorOpen",
        image: "/bedroom1.jpg",
    },
    {
        id: "wf-2",
        title: "Built-In Robes",
        description: "Space-saving built-in solutions that maximize your bedroom storage.",
        iconName: "Home",
        image: "/bedroom.jpg",
    },
    {
        id: "wf-3",
        title: "Sliding Doors",
        description: "Mirror and panel sliding door options for a seamless, modern look.",
        iconName: "PanelLeft",
        image: "/bedroom1.jpg",
    },
    {
        id: "wf-4",
        title: "Accessory Drawers",
        description: "Velvet-lined jewelry drawers and accessory organizers for the details.",
        iconName: "Star",
        image: "/bedroom.jpg",
    },
    {
        id: "wf-5",
        title: "LED Lighting",
        description: "Integrated lighting solutions that illuminate your wardrobe beautifully.",
        iconName: "Lightbulb",
        image: "/bedroom1.jpg",
    },
];

export const furnitureFeatures: FeatureCard[] = [
    {
        id: "ff-1",
        title: "Dining Tables",
        description: "Custom dining tables in timber, glass, or stone to suit your style.",
        iconName: "Utensils",
        image: "/kitchen2.jpg",
    },
    {
        id: "ff-2",
        title: "Office Desks",
        description: "Home office solutions designed for productivity and comfort.",
        iconName: "Monitor",
        image: "/library.jpg",
    },
    {
        id: "ff-3",
        title: "Bookcases",
        description: "Floor-to-ceiling bookshelves and display units for libraries and living spaces.",
        iconName: "BookOpen",
        image: "/library.jpg",
    },
    {
        id: "ff-4",
        title: "Console Tables",
        description: "Entry and hallway consoles that make a stunning first impression.",
        iconName: "Maximize",
        image: "/room.jpg",
    },
];

// This variable `projects` was referenced in the detail page but was missing in the data file.
export const projects = [
    {
        id: "project-1",
        title: "Modern Kitchen Renovation",
        location: "Melbourne CBD",
        image: "/kitchen2.jpg",
        description: "Complete kitchen transformation with custom cabinetry, stone benchtops, and modern fixtures.",
    },
    {
        id: "project-2",
        title: "Luxury Master Wardrobe",
        location: "Toorak",
        image: "/bedroom.jpg",
        description: "Walk-in wardrobe with custom shelving, LED lighting, and velvet-lined drawers.",
    },
    {
        id: "project-3",
        title: "Contemporary Bathroom",
        location: "South Yarra",
        image: "/toliet.jpg",
        description: "Modern bathroom vanity with floating design and premium stone benchtop.",
    },
    {
        id: "project-4",
        title: "Custom Library & Study",
        location: "Brighton",
        image: "/library.jpg",
        description: "Floor-to-ceiling bookshelves with integrated ladder and custom timber desk.",
    },
    {
        id: "project-5",
        title: "Family Living Space",
        location: "Hawthorn",
        image: "/room.jpg",
        description: "Bespoke entertainment unit and storage solutions for a busy family home.",
    },
    {
        id: "project-6",
        title: "Bespoke Joinery",
        location: "Richmond",
        image: "/kitchen1.jpg",
        description: "Custom architectural joinery including timber wall paneling and hidden storage.",
    },
    {
        id: "project-7",
        title: "Elegant Master Bedroom",
        location: "Camberwell",
        image: "/bedroom1.jpg",
        description: "Built-in robes with mirror sliding doors and optimized storage.",
    },
    {
        id: "project-8",
        title: "Spa-Inspired Bathroom",
        location: "Kew",
        image: "/bathromr.jpg",
        description: "Double vanity with integrated lighting and rainfall shower custom enclosure.",
    },
    {
        id: "project-9",
        title: "Home Office Setup",
        location: "Malvern",
        image: "/room copy.jpg",
        description: "Custom desk with built-in shelving and cable management solutions.",
    },
];

export const blogPosts = [
    {
        id: "top-kitchen-cabinet-trends-for-2025",
        title: "Top Kitchen Cabinet Trends for 2025",
        excerpt: "Discover the latest kitchen cabinet trends that are transforming Melbourne homes. From handleless designs to bold color choices.",
        image: "/kitchen2.jpg",
        category: "Kitchen",
        author: "Mark Magri",
        date: "December 28, 2024",
        readTime: "5 min read",
    },
    {
        id: "how-to-choose-the-perfect-bathroom-vanity",
        title: "How to Choose the Perfect Bathroom Vanity",
        excerpt: "A comprehensive guide to selecting the right bathroom vanity for your space, style, and storage needs.",
        image: "/bathromr.jpg",
        category: "Bathroom",
        author: "Mark Magri",
        date: "December 20, 2024",
        readTime: "4 min read",
    },
    {
        id: "maximizing-wardrobe-storage-solutions",
        title: "Maximizing Wardrobe Storage Solutions",
        excerpt: "Learn expert tips on organizing your wardrobe with smart storage solutions that make the most of every inch.",
        image: "/bedroom1.jpg",
        category: "Wardrobe",
        author: "Mark Magri",
        date: "December 15, 2024",
        readTime: "6 min read",
    },
    {
        id: "the-benefits-of-custom-furniture",
        title: "The Benefits of Custom Furniture",
        excerpt: "Why investing in custom-made furniture is worth it. Discover the advantages of bespoke pieces for your home.",
        image: "/room.jpg",
        category: "Furniture",
        author: "Mark Magri",
        date: "December 10, 2024",
        readTime: "4 min read",
    },
    {
        id: "tv-cabinet-design-ideas-for-modern-living",
        title: "TV Cabinet Design Ideas for Modern Living",
        excerpt: "Explore innovative TV cabinet designs that combine style with functionality for your entertainment space.",
        image: "/library.jpg",
        category: "TV Cabinet",
        author: "Mark Magri",
        date: "December 5, 2024",
        readTime: "5 min read",
    },
    {
        id: "laundry-room-organization-tips",
        title: "Laundry Room Organization Tips",
        excerpt: "Transform your laundry room into an efficient and stylish space with these organization tips and cabinet ideas.",
        image: "/room copy.jpg",
        category: "Laundry",
        author: "Mark Magri",
        date: "November 28, 2024",
        readTime: "4 min read",
    },
];
