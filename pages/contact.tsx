import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, AlertCircle, BarChart2, Settings } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm"; // Reusing form component logic or similar
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact EcoInk | Get Started Today</title>
                <meta name="description" content="Talk to EcoInk about custom AI solutions for your business. No pressure, honest feedback." />
            </Head>

            {/* SECTION 1: HEADER - INTEGRATED */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
                    />
                    <div className="absolute inset-0 bg-black/40 z-10" /> {/* Re-added dark overlay */}
                    <div className="absolute inset-0 bg-blue-500/10 z-10 mix-blend-overlay" /> {/* Blue Overlay Tint */}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20 max-w-4xl mx-auto px-6 text-center"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl font-bold mb-6 text-white text-shadow-lg"
                    >
                        Talk to EcoInk
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-gray-200 max-w-2xl mx-auto text-shadow-sm"
                    >
                        Have a question, want to discuss a custom build, or not sure which EcoInk solution fits? Get in touch.
                    </motion.p>
                </motion.div>
            </section>

            <section className="pb-24">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="glass-card p-8 md:p-12 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Full Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-primary" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Business Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-primary" placeholder="Acme Corp" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Email</label>
                                    <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-primary" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Phone</label>
                                    <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-primary" placeholder="+61..." />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">What are you enquiring about?</label>
                                <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-primary">
                                    <option>EcoInk Voice</option>
                                    <option>EcoInk Ads</option>
                                    <option>Both</option>
                                    <option>General Enquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Message</label>
                                <textarea className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-primary h-32" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <Button variant="glow" size="lg" className="w-full">Submit Enquiry</Button>
                            <p className="text-center text-xs text-gray-500">We'll get back to you as soon as possible. No spam, no pressure.</p>
                        </form>
                    </div>
                </div>
            </section>

            {/* EXISTING CLIENT SUPPORT */}
            <section className="py-24 bg-white/[0.02] border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Existing client support</h2>
                        <p className="text-gray-400">Already working with EcoInk and need help, changes, or support?</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Settings, title: "Ongoing support & changes", desc: "For updates, tweaks, integrations, or questions about your existing EcoInk system.", cta: "Contact support" },
                            { icon: BarChart2, title: "Performance & reporting", desc: "Questions about results, tracking, call logs, or system behaviour.", cta: "Request a review" },
                            { icon: AlertCircle, title: "Urgent issues", desc: "If something isn't working as expected and needs attention during business hours.", cta: "Flag an issue", color: "text-red-400" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.5 }}
                                whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
                                className="glass-card p-8 rounded-xl border-white/5 transition-all flex flex-col items-center text-center group"
                            >
                                <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 ${item.color || 'text-white'}`}>
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 text-sm mb-8">{item.desc}</p>
                                <Button variant="outline" className="mt-auto w-full">{item.cta}</Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
