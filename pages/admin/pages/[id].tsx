import { useState } from 'react';
import { useRouter } from 'next/router';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Save, ArrowLeft, Globe, Eye, Settings, Search, FileText, Trash2, Grid, Layout } from 'lucide-react';
import Link from 'next/link';

interface PageFormProps {
    page: any;
    availableSections: any[];
}

export default function EditPage({ page: initialPage, availableSections }: PageFormProps) {
    const router = useRouter();
    const [page, setPage] = useState(initialPage || {
        title: '',
        slug: '',
        isPublished: false,
        metaTitle: '',
        metaDescription: '',
        sections: []
    });
    const [isSaving, setIsSaving] = useState(false);
    const [pageSections, setPageSections] = useState<any[]>(initialPage?.sections || []);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        const method = page.id ? 'PUT' : 'POST';
        const url = page.id ? `/api/pages/${page.id}` : '/api/pages';

        // Include sections in the payload
        const payload = {
            ...page,
            sections: pageSections.map((ps, idx) => ({
                sectionId: ps.sectionId || ps.section?.id,
                order: idx
            }))
        };

        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (res.ok) router.push('/admin/pages');
        setIsSaving(false);
    };

    const addSection = (section: any) => {
        setPageSections([...pageSections, { section, sectionId: section.id }]);
    };

    const removeSection = (index: number) => {
        const newSections = [...pageSections];
        newSections.splice(index, 1);
        setPageSections(newSections);
    };

    return (
        <AdminLayout>
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/pages">
                            <button type="button" className="p-2 md:p-2.5 hover:bg-gray-100 rounded-xl transition-all border border-transparent hover:border-gray-200">
                                <ArrowLeft size={18} className="text-gray-500" />
                            </button>
                        </Link>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-outfit uppercase tracking-tight">
                            {page.id ? 'Edit Page' : 'Create New Page'}
                        </h1>
                    </div>
                    <div className="flex gap-3">
                        <Button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 px-8 rounded-xl shadow-lg shadow-orange-500/20 transition-all active:scale-95 w-full sm:w-auto"
                        >
                            <Save size={18} className="mr-2" /> {page.id ? 'Update Page' : 'Save Draft'}
                        </Button>
                    </div>
                </div>

                {/* Page Settings Section */}
                <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6 md:space-y-8">
                    <h2 className="text-base md:text-lg font-black text-gray-900 uppercase tracking-widest border-b pb-4 font-outfit">Page Settings</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div>
                            <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2">Page Title</label>
                            <input
                                className="w-full border-2 border-gray-50 bg-gray-50/50 p-4 rounded-2xl outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-gray-800"
                                value={page.title}
                                onChange={e => setPage({ ...page, title: e.target.value })}
                                placeholder="e.g. Our Services"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2">URL Slug</label>
                            <div className="flex items-center gap-2 bg-gray-50 border-2 border-gray-50 p-4 rounded-2xl focus-within:bg-white focus-within:border-orange-500 transition-all">
                                <span className="text-gray-400 font-medium hidden sm:inline">magricabinets.com.au /</span>
                                <input
                                    className="flex-1 bg-transparent border-none outline-none font-bold text-gray-700"
                                    value={page.slug}
                                    onChange={e => setPage({ ...page, slug: e.target.value })}
                                    placeholder="our-services"
                                    required
                                />
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-xs font-black text-gray-400 uppercase tracking-wider mb-2">Meta Description (SEO)</label>
                            <textarea
                                className="w-full border-2 border-gray-50 bg-gray-50/50 p-4 rounded-2xl outline-none focus:border-orange-500 focus:bg-white transition-all h-24 resize-none leading-relaxed font-medium"
                                value={page.metaDescription || ''}
                                onChange={e => setPage({ ...page, metaDescription: e.target.value })}
                                placeholder="Brief description for search engines..."
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8 pt-4">
                        <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-2xl self-start">
                            <button
                                type="button"
                                onClick={() => setPage({ ...page, isPublished: false })}
                                className={`px-4 md:px-6 py-2 rounded-xl text-[10px] md:text-xs font-black uppercase transition-all ${!page.isPublished ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                Draft
                            </button>
                            <button
                                type="button"
                                onClick={() => setPage({ ...page, isPublished: true })}
                                className={`px-4 md:px-6 py-2 rounded-xl text-[10px] md:text-xs font-black uppercase transition-all ${page.isPublished ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                Published
                            </button>
                        </div>

                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-gray-200 text-orange-500 focus:ring-orange-500 transition-all" />
                            <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900">Set as Homepage</span>
                        </label>
                    </div>
                </div>

                {/* Page Structure Builder */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Structure Canvas */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="flex justify-between items-center px-4">
                            <h2 className="text-lg font-black text-gray-900 uppercase tracking-widest">Page Structure</h2>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{pageSections.length} Sections</span>
                        </div>

                        <div className="bg-white border-2 border-dashed border-gray-100 rounded-[32px] p-4 md:p-8 min-h-[400px] md:min-h-[500px] flex flex-col gap-4">
                            {pageSections.map((ps, index) => (
                                <div key={index} className="group relative bg-gray-50 border border-gray-100 p-4 md:p-6 rounded-2xl flex items-center justify-between hover:border-orange-200 hover:bg-orange-50/30 transition-all">
                                    <div className="flex items-center gap-3 md:gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-500 shrink-0">
                                            {ps.section?.type === 'HERO' ? <Layout size={20} /> :
                                                ps.section?.type === 'FEATURES' ? <Grid size={20} /> :
                                                    ps.section?.type === 'CTA' ? <ArrowLeft size={20} className="rotate-180" /> :
                                                        <FileText size={20} />}
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="font-extrabold text-gray-900 text-sm md:text-base truncate">{ps.section?.internalName}</p>
                                            <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest">{ps.section?.type}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeSection(index)}
                                        className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}

                            {pageSections.length === 0 && (
                                <div className="flex-1 flex flex-col items-center justify-center text-center p-12">
                                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-200 mb-4">
                                        <Settings size={32} />
                                    </div>
                                    <h3 className="text-gray-400 font-bold mb-1">Canvas is empty</h3>
                                    <p className="text-gray-300 text-sm max-w-[200px]">Drag components here from the sidebar or click to add one</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Component Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-gray-100">
                            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6 border-b pb-4 font-outfit">Add Component</h3>

                            <div className="space-y-3">
                                {availableSections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => addSection(section)}
                                        className="w-full flex items-center gap-4 p-3 md:p-4 rounded-2xl border border-gray-100 hover:border-orange-500 hover:bg-orange-50/50 hover:shadow-md hover:shadow-orange-500/5 transition-all text-left group"
                                    >
                                        <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-orange-500 transition-all shrink-0">
                                            {section.type === 'HERO' ? <Layout size={20} /> :
                                                section.type === 'FEATURES' ? <Grid size={20} /> :
                                                    section.type === 'CTA' ? <ArrowLeft size={20} className="rotate-180" /> :
                                                        <FileText size={20} />}
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="font-bold text-gray-900 text-sm truncate">{section.internalName}</p>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter group-hover:text-orange-400">{section.type.replace('_', ' ')}</p>
                                        </div>
                                    </button>
                                ))}

                                {availableSections.length === 0 && (
                                    <div className="text-center py-8">
                                        <p className="text-xs text-gray-400 italic">No reusable sections found. Create some in 'Sections Management' first.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-gray-900 p-8 rounded-[32px] text-white">
                            <h3 className="font-bold text-orange-500 mb-4 flex items-center gap-2">
                                <Settings size={18} /> Optimization Tip
                            </h3>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Use a single **Hero Section** at the top of your page for better conversion and SEO performance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export const getServerSideProps = async (context: any) => {
    const { id } = context.params;
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();

    try {
        const contentSections = await prisma.contentSection.findMany({
            orderBy: { internalName: 'asc' }
        });

        if (id === 'new') {
            await prisma.$disconnect();
            return {
                props: {
                    page: null,
                    availableSections: JSON.parse(JSON.stringify(contentSections))
                }
            };
        }

        const data = await prisma.page.findUnique({
            where: { id },
            include: {
                sections: {
                    include: {
                        section: true
                    },
                    orderBy: {
                        order: 'asc'
                    }
                }
            }
        });

        await prisma.$disconnect();
        return {
            props: {
                page: JSON.parse(JSON.stringify(data)),
                availableSections: JSON.parse(JSON.stringify(contentSections))
            }
        };
    } catch (e) {
        await prisma.$disconnect();
        return { props: { page: null, availableSections: [] } };
    }
};
