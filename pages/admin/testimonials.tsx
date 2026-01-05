import { useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Star, Quote, User } from 'lucide-react';
import Image from 'next/image';

interface TestimonialsProps {
    initialTestimonials: any[];
}

export default function TestimonialsAdmin({ initialTestimonials }: TestimonialsProps) {
    const [testimonials, setTestimonials] = useState(initialTestimonials);
    const [isEditing, setIsEditing] = useState(false);
    const [current, setCurrent] = useState<any>({});

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        const method = current.id ? 'PUT' : 'POST';
        const url = current.id ? `/api/testimonials/${current.id}` : '/api/testimonials';

        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(current),
        });

        if (res.ok) window.location.reload();
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure?')) return;
        await fetch(`/api/testimonials/${id}`, { method: 'DELETE' });
        setTestimonials(testimonials.filter(t => t.id !== id));
    };

    return (
        <AdminLayout>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Client Testimonials</h1>
                    <p className="text-gray-500">Manage social proof and customer feedback.</p>
                </div>
                <Button onClick={() => { setCurrent({ rating: 5, isVisible: true }); setIsEditing(true); }} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold h-12 rounded-xl">
                    <Plus size={18} className="mr-2" /> Add Testimonial
                </Button>
            </div>

            {isEditing && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-8 rounded-2xl w-full max-w-lg shadow-2xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">{current.id ? 'Edit' : 'New'} Testimonial</h2>
                        <form onSubmit={handleSave} className="space-y-5">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Client Name</label>
                                <input className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all font-medium" placeholder="e.g. Sarah J." value={current.clientName || ''} onChange={e => setCurrent({ ...current, clientName: e.target.value })} required />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Role/Location</label>
                                <input className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all" placeholder="e.g. Interior Designer / Melbourne" value={current.role || ''} onChange={e => setCurrent({ ...current, role: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Review Content</label>
                                <textarea className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all h-32 resize-none" value={current.content || ''} onChange={e => setCurrent({ ...current, content: e.target.value })} required />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Rating (1-5)</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map(nu => (
                                        <button key={nu} type="button" onClick={() => setCurrent({ ...current, rating: nu })} className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all ${current.rating >= nu ? 'bg-yellow-500 border-yellow-500 text-black' : 'bg-gray-50 text-gray-300'}`}>
                                            <Star size={16} fill={current.rating >= nu ? "currentColor" : "none"} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                                <Button type="button" variant="ghost" className="rounded-xl px-6" onClick={() => setIsEditing(false)}>Cancel</Button>
                                <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-xl px-8 shadow-lg shadow-yellow-500/20">Save Review</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((t) => (
                    <div key={t.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col relative group hover:shadow-xl transition-all duration-300">
                        <Quote className="absolute top-6 right-8 text-yellow-500/10 group-hover:text-yellow-500/20 transition-all" size={64} />

                        <div className="flex gap-1 mb-6 text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} fill={i < t.rating ? "currentColor" : "none"} className={i >= t.rating ? "text-gray-200" : ""} />
                            ))}
                        </div>

                        <p className="text-gray-700 text-sm italic mb-8 flex-1 leading-relaxed">
                            "{t.content}"
                        </p>

                        <div className="flex justify-between items-end border-t border-gray-50 pt-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                    {t.avatarUrl ? <Image src={t.avatarUrl} alt={t.clientName} width={40} height={40} className="rounded-full" /> : <User className="text-gray-400" size={20} />}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{t.clientName}</h4>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{t.role || 'Client'}</p>
                                </div>
                            </div>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => { setCurrent(t); setIsEditing(true); }} className="p-2 text-gray-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg"><Edit size={16} /></button>
                                <button onClick={() => handleDelete(t.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                            </div>
                        </div>
                    </div>
                ))}

                {testimonials.length === 0 && (
                    <div className="col-span-full py-20 bg-white rounded-3xl border-2 border-dashed border-gray-50 flex flex-col items-center justify-center text-gray-400">
                        <Star size={48} className="mb-4 opacity-10" />
                        <p>No testimonials found.</p>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}

export const getServerSideProps = async () => {
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    try {
        const data = await prisma.testimonial.findMany({ orderBy: { createdAt: 'desc' } });
        await prisma.$disconnect();
        return { props: { initialTestimonials: JSON.parse(JSON.stringify(data)) } };
    } catch (e) {
        await prisma.$disconnect();
        return { props: { initialTestimonials: [] } };
    }
};
