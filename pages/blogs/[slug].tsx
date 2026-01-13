import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeft } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import ServiceCTA from "@/components/ServiceCTA";
import { Button } from "@/components/ui/button";
import MetaHead from "@/components/seo/MetaHead";
import StructuredData from "@/components/seo/StructuredData";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export default function BlogDetail({ blog, relatedBlogs, seoSettings }: { blog: any, relatedBlogs: any[], seoSettings: any }) {
    const router = useRouter();

    if (router.isFallback) return <div className="min-h-screen bg-white" />;

    if (!blog) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center p-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
                    <p className="text-gray-600 mb-8">The article you are looking for might have been moved or doesn&apos;t exist.</p>
                    <Link href="/blogs">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                            Back to Blogs
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    const formatDate = (dateString: string) => {
        if (!dateString) return '';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const breadcrumbItems = [
        { name: 'Blogs', url: '/blogs' },
        { name: blog.title, url: `/blogs/${blog.slug}` }
    ];

    return (
        <>
            <MetaHead data={blog} settings={seoSettings} />
            <StructuredData data={blog} type="Article" />

            <div className="min-h-screen bg-white pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 lg:pt-4">

                    {/* Hero Section */}
                    <div className="bg-[#545B63] rounded-[2.5rem] p-6 sm:p-8 lg:p-12 text-white flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 relative overflow-hidden mb-12 sm:mb-16">
                        <div className="w-full lg:w-1/2 h-[250px] sm:h-[350px] lg:h-[400px] relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={blog.coverImage || '/kitchen1.jpg'}
                                alt={blog.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="w-full lg:w-1/2 z-10">
                            <Link href="/blogs" className="inline-flex items-center text-gray-400 hover:text-white mb-6 sm:mb-8 transition-colors text-xs sm:text-sm font-medium">
                                <ChevronLeft className="w-4 h-4 mr-1" />
                                Back
                            </Link>

                            <div className="text-gray-400 font-medium mb-3 sm:mb-4 flex items-center gap-2 text-xs sm:text-base">
                                {formatDate(blog.publishedAt)}
                                {blog.readingTime > 0 && <span>• {blog.readingTime} min read</span>}
                            </div>

                            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 tracking-tight">
                                {blog.title}
                            </h1>


                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Social Sidebar (Hidden on mobile) */}
                        <div className="hidden lg:block lg:col-span-1">
                            <div className="sticky top-24 flex flex-col gap-4 text-center">
                                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-2">Share</span>
                                <ShareButton platform="facebook" url={`https://magricabinets.com/blogs/${blog.slug}`} icon={<FacebookIcon className="w-5 h-5" />} />
                                <ShareButton platform="twitter" url={`https://magricabinets.com/blogs/${blog.slug}`} title={blog.title} icon={<TwitterIcon className="w-5 h-5" />} />
                                <ShareButton platform="pinterest" url={`https://magricabinets.com/blogs/${blog.slug}`} media={blog.coverImage} title={blog.title} icon={<PinterestIcon className="w-5 h-5" />} />
                                <ShareButton platform="linkedin" url={`https://magricabinets.com/blogs/${blog.slug}`} icon={<LinkedinIcon className="w-5 h-5" />} />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-7 break-words">
                            {/* Mobile Share */}
                            <div className="lg:hidden mb-10 pb-8 border-b border-gray-100">
                                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-4 block">Share Article</span>
                                <div className="flex items-center gap-4">
                                    <ShareButton platform="facebook" url={`https://magricabinets.com/blogs/${blog.slug}`} icon={<FacebookIcon className="w-5 h-5" />} className="w-12 h-12" />
                                    <ShareButton platform="twitter" url={`https://magricabinets.com/blogs/${blog.slug}`} title={blog.title} icon={<TwitterIcon className="w-5 h-5" />} className="w-12 h-12" />
                                    <ShareButton platform="pinterest" url={`https://magricabinets.com/blogs/${blog.slug}`} media={blog.coverImage} title={blog.title} icon={<PinterestIcon className="w-5 h-5" />} className="w-12 h-12" />
                                    <ShareButton platform="linkedin" url={`https://magricabinets.com/blogs/${blog.slug}`} icon={<LinkedinIcon className="w-5 h-5" />} className="w-12 h-12" />
                                </div>
                            </div>

                            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-[#0F172A] prose-p:text-gray-600 prose-img:rounded-3xl prose-a:text-orange-500 hover:prose-a:text-orange-600 font-sans">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw]}
                                    components={{
                                        img: ({ node, ...props }) => (
                                            <img
                                                {...props}
                                                className="rounded-3xl w-full h-auto my-8 shadow-lg"
                                                loading="lazy"
                                                alt={props.alt || ''}
                                            />
                                        ),
                                    }}
                                >
                                    {blog.content}
                                </ReactMarkdown>
                            </div>
                        </div>

                        {/* Recent Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-24">
                                <div className="flex items-center justify-between mb-8 gap-4">
                                    <h3 className="text-xl font-bold text-[#0F172A]">Recent</h3>
                                    <Link href="/blogs">
                                        <Button size="sm" className="bg-[#334155] hover:bg-[#475569] text-white rounded-full px-6">
                                            See All
                                        </Button>
                                    </Link>
                                </div>

                                <div className="space-y-6">
                                    {relatedBlogs.map((post) => (
                                        <Link key={post.id} href={`/blogs/${post.slug}`} className="group block">
                                            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                                                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                                                    <Image
                                                        src={post.coverImage || '/kitchen1.jpg'}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-xs font-semibold text-orange-500 mb-1 block">
                                                        {formatDate(post.publishedAt)}
                                                    </span>
                                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-2 leading-snug">
                                                        {post.title}
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <ServiceCTA
                title="Inspired to start your project?"
                description="Our team at Magri Cabinets is ready to help you bring these ideas to life in your own home."
            />
        </>
    );
}

// Share Button Helper
const ShareButton = ({ platform, url, title, media, icon, className = "w-10 h-10" }: any) => {
    let link = '';
    switch (platform) {
        case 'facebook': link = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`; break;
        case 'twitter': link = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`; break;
        case 'pinterest': link = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(media || '')}&description=${encodeURIComponent(title || '')}`; break;
        case 'linkedin': link = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`; break;
    }

    return (
        <button
            onClick={() => window.open(link, '_blank')}
            className={`${className} rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300`}
        >
            {icon}
        </button>
    );
};

// Icons
const FacebookIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
);
const TwitterIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
);
const PinterestIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 4.99 3.257 9.23 7.857 11.08-.109-.943-.2-2.396.042-3.428.218-.934 1.408-5.968 1.408-5.968s-.36-.72-.36-1.782c0-1.668.968-2.914 2.172-2.914 1.024 0 1.518.77 1.518 1.69 0 1.03-.655 2.57-1.015 4.03-.301 1.222.613 2.218 1.82 2.218 2.184 0 3.864-2.3 3.864-5.618 0-2.94-2.112-4.99-5.126-4.99-3.733 0-5.926 2.793-5.926 5.68 0 1.124.433 2.33 1.002 2.986.11.127.126.239.093.366-.1.417-.323 1.306-.367 1.488-.06.242-.26.294-.476.213-3.13-.91-4.58-3.766-4.58-6.048 0-4.475 3.252-8.58 9.38-8.58 4.923 0 8.75 3.51 8.75 8.2 0 4.896-3.085 8.528-7.368 8.528-1.44 0-2.793-.75-3.256-1.63L9.63 19.95c-.476 1.823-1.42 4.103-2.112 5.344C8.5 25.753 9.712 26 12 26c6.627 0 12-5.373 12-12S16.627 0 12 0z" clipRule="evenodd" transform="translate(0 -2)" /></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
);

export const getServerSideProps = async (context: any) => {
    const { slug } = context.params;
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    try {
        const [blog, relatedBlogs, seoSettings] = await Promise.all([
            prisma.blogPost.findUnique({
                where: { slug },
                include: { category: true, tags: true }
            }),
            prisma.blogPost.findMany({
                where: { isPublished: true, slug: { not: slug } },
                take: 3,
                orderBy: { createdAt: 'desc' },
                include: { category: true }
            }),
            prisma.seoSettings.findFirst({ where: { id: 1 } })
        ]);

        if (!blog || !blog.isPublished) {
            await prisma.$disconnect();
            return { notFound: true };
        }

        await prisma.$disconnect();
        return {
            props: {
                blog: JSON.parse(JSON.stringify(blog)),
                relatedBlogs: JSON.parse(JSON.stringify(relatedBlogs)),
                seoSettings: JSON.parse(JSON.stringify(seoSettings))
            }
        };
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        return { notFound: true };
    }
};
