import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Save, ArrowLeft, Image as ImageIcon, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ImageUploader from '@/components/admin/ImageUploader';

interface ProjectFormProps {
    project: any;
}

export default function EditProject({ project: initialProject }: ProjectFormProps) {
    const router = useRouter();
    const [project, setProject] = useState(initialProject || { title: '', slug: '', description: '', images: [], location: '', client: '' });
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        const method = project.id ? 'PUT' : 'POST';
        const url = project.id ? `/api/projects/${project.id}` : '/api/projects';

        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project),
        });

        if (res.ok) router.push('/admin/projects');
        setIsSaving(false);
    };

    const addImage = () => {
        const url = prompt('Enter Image URL:');
        if (url) setProject({ ...project, images: [...(project.images || []), url] });
    };

    const removeImage = (index: number) => {
        const newImages = [...project.images];
        newImages.splice(index, 1);
        setProject({ ...project, images: newImages });
    };

    return (
        <AdminLayout>
            <form onSubmit={handleSave} className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/projects">
                            <button type="button" className="p-2 hover:bg-gray-100 rounded-full transition-colors"><ArrowLeft size={20} /></button>
                        </Link>
                        <h1 className="text-3xl font-bold text-gray-900">{project.id ? 'Edit' : 'New'} Project</h1>
                    </div>
                    <Button type="submit" disabled={isSaving} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-12 px-8 rounded-xl ring-offset-2 focus:ring-2 focus:ring-yellow-500">
                        {isSaving ? 'Saving...' : <><Save size={18} className="mr-2" /> Save Project</>}
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Project Title</label>
                                <input className="w-full border-2 border-gray-50 bg-gray-50/50 p-4 rounded-xl outline-none focus:border-yellow-500 transition-all font-bold text-lg" value={project.title} onChange={e => setProject({ ...project, title: e.target.value })} required />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Slug (URL Path)</label>
                                <input className="w-full border-2 border-gray-50 bg-gray-50/50 p-4 rounded-xl outline-none focus:border-yellow-500 transition-all font-mono text-sm" value={project.slug} onChange={e => setProject({ ...project, slug: e.target.value })} required />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Description</label>
                                <textarea className="w-full border-2 border-gray-50 bg-gray-50/50 p-4 rounded-xl outline-none focus:border-yellow-500 transition-all h-64 resize-none" value={project.description} onChange={e => setProject({ ...project, description: e.target.value })} required />
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-4">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Project Gallery</label>
                            </div>

                            {/* New Image Uploader */}
                            <div className="mb-6">
                                <ImageUploader
                                    onImageUploaded={(url) => setProject({ ...project, images: [...(project.images || []), url] })}
                                    folder="projects"
                                    saveToMedia={true}
                                    aspectRatio="video"
                                    className="w-full"
                                    showRemoveButton={false} // This uploader creates new items
                                />
                                <p className="text-[10px] text-gray-400 mt-2 text-center uppercase tracking-widest">Upload to add to gallery</p>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                {(project.images || []).map((img: string, idx: number) => (
                                    <div key={idx} className="relative aspect-square rounded-xl overflow-hidden group border-2 border-gray-50 bg-gray-50">
                                        <Image src={img} alt="Project" fill className="object-cover" />
                                        <button type="button" onClick={() => removeImage(idx)} className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"><Trash2 size={14} /></button>
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                            <h2 className="font-bold text-gray-900 border-b pb-4 mb-4">Project Meta</h2>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Category</label>
                                <select
                                    className="w-full border p-3 rounded-xl bg-gray-50/50 outline-none focus:ring-2 focus:ring-yellow-500/50 mb-4"
                                    value={project.category || ''}
                                    onChange={e => setProject({ ...project, category: e.target.value })}
                                >
                                    <option value="">Select Category</option>
                                    <option value="Kitchen">Kitchen</option>
                                    <option value="Bathroom">Bathroom</option>
                                    <option value="Wardrobe">Wardrobe</option>
                                    <option value="TV Cabinet">TV Cabinet</option>
                                    <option value="Furniture">Furniture</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Location</label>
                                <input className="w-full border p-3 rounded-xl bg-gray-50/50 outline-none focus:ring-2 focus:ring-yellow-500/50" value={project.location || ''} onChange={e => setProject({ ...project, location: e.target.value })} placeholder="e.g. Toorak, VIC" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Client Name</label>
                                <input className="w-full border p-3 rounded-xl bg-gray-50/50 outline-none focus:ring-2 focus:ring-yellow-500/50" value={project.client || ''} onChange={e => setProject({ ...project, client: e.target.value })} placeholder="e.g. Private Residence" />
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                            <h3 className="flex items-center gap-2 font-bold text-yellow-800 mb-2">
                                <ImageIcon size={18} /> Pro Tip
                            </h3>
                            <p className="text-sm text-yellow-700 leading-relaxed">
                                High-quality images significantly improve user trust. Aim for 1200x800px ratios for your gallery.
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
}

export const getServerSideProps = async (context: any) => {
    const { id } = context.params;
    if (id === 'new') return { props: { project: null } };

    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    try {
        const data = await prisma.project.findUnique({ where: { id } });
        await prisma.$disconnect();
        return { props: { project: JSON.parse(JSON.stringify(data)) } };
    } catch (e) {
        await prisma.$disconnect();
        return { props: { project: null } };
    }
};
