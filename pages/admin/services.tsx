import { useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, ExternalLink, Wrench, LayoutGrid, List } from 'lucide-react';
import Image from 'next/image';
import ImageUploader from '@/components/admin/ImageUploader';

interface ServicesProps {
    initialServices: any[];
}

export default function ServicesAdmin({ initialServices }: ServicesProps) {
    const [services, setServices] = useState(initialServices);
    const [isEditing, setIsEditing] = useState(false);
    const [current, setCurrent] = useState<any>({});
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        const method = current.id ? 'PUT' : 'POST';
        const url = current.id ? `/api/services/${current.id}` : '/api/services';

        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(current),
        });

        if (res.ok) window.location.reload();
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this service?')) return;
        await fetch(`/api/services/${id}`, { method: 'DELETE' });
        setServices(services.filter((s: any) => s.id !== id));
    };

    return (
        <AdminLayout>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-outfit uppercase tracking-tight">Services Management</h1>
                    <p className="text-gray-500 text-sm md:text-base">Manage the core services offered by Magri Cabinets</p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <div className="flex bg-gray-100 p-1.5 rounded-xl self-start">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-orange-600' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <LayoutGrid size={18} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-orange-600' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <List size={18} />
                        </button>
                    </div>
                    <Button
                        onClick={() => { setCurrent({}); setIsEditing(true); }}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all w-full sm:w-auto"
                    >
                        <Plus size={18} className="mr-2" /> Add Service
                    </Button>
                </div>
            </div>

            {isEditing && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-900">{current.id ? 'Edit' : 'Create New'} Service</h2>
                            <button onClick={() => setIsEditing(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <Plus size={24} className="rotate-45" />
                            </button>
                        </div>
                        <form onSubmit={handleSave} className="p-6 space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Service Name</label>
                                    <input className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-500/50 transition-all font-medium" placeholder="e.g. Kitchen Cabinets" value={current.name || ''} onChange={e => setCurrent({ ...current, name: e.target.value })} required />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Slug (URL)</label>
                                    <input className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-500/50 transition-all font-mono text-sm" placeholder="kitchen-cabinets" value={current.slug || ''} onChange={e => setCurrent({ ...current, slug: e.target.value })} required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Description</label>
                                <textarea className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-500/50 transition-all h-32 resize-none" placeholder="Explain what this service covers..." value={current.description || ''} onChange={e => setCurrent({ ...current, description: e.target.value })} required />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Service Image</label>
                                <ImageUploader
                                    currentImage={current.image}
                                    onImageUploaded={(url) => setCurrent({ ...current, image: url })}
                                    folder="services"
                                    saveToMedia={true}
                                    aspectRatio="video"
                                    onRemove={() => setCurrent({ ...current, image: '' })}
                                />
                            </div>
                            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 text-sm">
                                <Button type="button" variant="ghost" className="rounded-xl px-6" onClick={() => setIsEditing(false)}>Cancel</Button>
                                <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl px-8 shadow-lg shadow-orange-500/20">Save Service</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((item: any) => (
                        <div key={item.id} className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 flex flex-col">
                            <div className="aspect-video bg-gray-50 relative overflow-hidden">
                                {item.image ? (
                                    <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-200">
                                        <Wrench size={48} />
                                    </div>
                                )}
                            </div>
                            <div className="p-6 md:p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-black text-xl text-gray-900 font-outfit uppercase tracking-tight group-hover:text-orange-600 transition-colors leading-tight">{item.name}</h3>
                                    <div className="flex gap-1 lg:opacity-0 lg:group-hover:opacity-100 transition-all">
                                        <button onClick={() => { setCurrent(item); setIsEditing(true); }} className="p-2.5 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"><Edit size={16} /></button>
                                        <button onClick={() => handleDelete(item.id)} className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={16} /></button>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed mb-0">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left min-w-[800px] lg:min-w-0">
                            <thead>
                                <tr className="bg-gray-50 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-100">
                                    <th className="px-6 py-4 font-outfit">Service Name</th>
                                    <th className="px-6 py-4 font-outfit">Slug</th>
                                    <th className="px-6 py-4 font-outfit">Visibility</th>
                                    <th className="px-6 py-4 text-right font-outfit">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {services.map((item: any) => (
                                    <tr key={item.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-6 py-4 font-black text-gray-900 group-hover:text-orange-600 transition-colors">{item.name}</td>
                                        <td className="px-6 py-4 text-xs text-gray-400 font-mono">/{item.slug}</td>
                                        <td className="px-6 py-4">
                                            <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-lg ${item.isVisible ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                                                {item.isVisible ? 'Active' : 'Hidden'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => { setCurrent(item); setIsEditing(true); }} className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"><Edit size={18} /></button>
                                                <button onClick={() => handleDelete(item.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={18} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {services.length === 0 && (
                <div className="py-20 text-center bg-white rounded-3xl border border-gray-100 flex flex-col items-center">
                    <Wrench size={48} className="text-gray-200 mb-4" />
                    <p className="text-gray-400">No services found. Add your first service to get started.</p>
                </div>
            )}
        </AdminLayout>
    );
}

export const getServerSideProps = async () => {
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    try {
        const data = await prisma.service.findMany({ orderBy: { order: 'asc' } });
        await prisma.$disconnect();
        return { props: { initialServices: JSON.parse(JSON.stringify(data)) } };
    } catch (e) {
        await prisma.$disconnect();
        return { props: { initialServices: [] } };
    }
};
