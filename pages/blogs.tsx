import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import ServiceCTA from "@/components/ServiceCTA";

export const getServerSideProps = async () => {
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    try {
        const posts = await prisma.blogPost.findMany({
            where: { isPublished: true },
            orderBy: { publishedAt: 'desc' },
            include: { category: true }
        });

        // Transform for frontend matches
        const serializedPosts = posts.map((post: any) => ({
            id: post.slug, // Use slug for ID logic
            title: post.title,
            excerpt: post.excerpt,
            image: post.coverImage || '/kitchen1.jpg', // Fallback
            category: post.category?.name || 'Uncategorized',
            date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }) : '',
            readTime: (post.readingTime || 5) + ' min read'
        }));

        await prisma.$disconnect();
        return { props: { blogPosts: serializedPosts } };
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        return { props: { blogPosts: [] } };
    }
};

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
}

interface BlogsProps {
    blogPosts: BlogPost[];
}

export default function Blogs({ blogPosts }: BlogsProps) {
    const [activeCategory, setActiveCategory] = useState("All");

    // Dynamic categories from actual posts
    const uniqueCategories = Array.from(new Set(blogPosts.map(p => p.category))).filter((c): c is string => !!c).sort();
    const categories = ["All", ...uniqueCategories];

    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <>
            <Head>
                <title>Blog | Cabinet Making Tips & Inspiration | Magri Cabinets Melbourne</title>
                <meta
                    name="description"
                    content="Read our latest blog posts about cabinet making, kitchen design trends, bathroom renovation tips, and more. Expert advice from Melbourne's trusted cabinet makers."
                />
                <meta name="keywords" content="cabinet making blog, kitchen design tips, bathroom renovation ideas, melbourne joinery blog" />
                <link rel="canonical" href="https://magricabinets.com.au/blogs" />
            </Head>

            {/* Hero Section - Hidden on Mobile */}
            <section className="hidden lg:block relative bg-gradient-to-br from-gray-600 to-gray-700 pt-8 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
                {/* Ambient Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-500/20 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-sm">
                        Our Blog
                    </div>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Tips & <span className="text-orange-500">Inspiration</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Expert advice, design trends, and inspiration for your home renovation projects
                        from Melbourne&apos;s trusted cabinet makers.
                    </p>
                </div>
            </section>



            {/* Blog Posts Grid */}
            <section className="py-16 lg:py-24 bg-white min-h-[400px]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
                            {filteredPosts.map((post) => (
                                <Link key={post.id} href={`/blogs/${post.id}`} className="block group">
                                    <article
                                        className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100"
                                    >
                                        {/* Image Container */}
                                        <div className="relative h-40 sm:h-56 lg:h-64 overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Content Container */}
                                        <div className="p-3 sm:p-5 lg:p-6 flex flex-col flex-1">
                                            {/* Visible Meta/Title */}
                                            <h2 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-orange-500 transition-colors">
                                                {post.title}
                                            </h2>

                                            {/* Progressive Disclosure (Hover Details) */}
                                            <div className="mt-auto">
                                                <div className="lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:group-hover:max-h-24 lg:group-hover:opacity-100 transition-all duration-500">
                                                    <p className="text-gray-600 text-[10px] sm:text-xs lg:text-sm mb-3 line-clamp-2">
                                                        {post.excerpt}
                                                    </p>

                                                    <div className="hidden sm:flex items-center gap-3 text-[10px] mb-4">
                                                        <div className="flex items-center gap-1 text-orange-500 font-bold">
                                                            <Calendar className="w-2.5 h-2.5" />
                                                            <span>{post.date}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <span className="inline-flex items-center text-orange-500 font-bold text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                                                    Read Article
                                                    <ArrowRight className="w-3 h-3 ml-1 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found in this category</h3>
                            <p className="text-gray-600">Try selecting another category or check back later.</p>
                            <button
                                onClick={() => setActiveCategory("All")}
                                className="mt-6 px-6 py-2 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors"
                            >
                                View All Articles
                            </button>
                        </div>
                    )}

                    {/* Load More Button - Only show if there are many posts */}
                    {filteredPosts.length >= 6 && (
                        <div className="text-center mt-12">
                            <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-xl">
                                Load More Articles
                            </button>
                        </div>
                    )}
                </div>
            </section>


            {/* CTA Section */}
            <ServiceCTA
                title="Need Expert Advice for Your Project?"
                description="Contact us today for a free consultation. Our team is ready to help you bring your vision to life."
            />
        </>
    );
}
