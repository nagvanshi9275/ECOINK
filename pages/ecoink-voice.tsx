import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Calendar, Clock, RotateCcw, Zap, Database, Globe, ArrowRight } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import { motion } from "framer-motion";

export default function EcoInkVoice() {
    return (
        <>
            <Head>
                <title>EcoInk Voice | Custom AI Voice Agents for Business</title>
                <meta name="description" content="AI call handling, pre-qualification, and job management built specifically for your business. 24/7 intelligent automation." />
            </Head>

            {/* SECTION 1: HEADER - INTEGRATED */}
            <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
                    />
                    <div className="absolute inset-0 bg-black/40 z-10" /> {/* Re-added dark overlay */}
                    <div className="absolute inset-0 bg-accent/5 z-10 mix-blend-overlay" /> {/* Teal Overlay Tint */}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20 max-w-4xl mx-auto px-6 text-center pt-20"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-6xl font-bold mb-6 text-white text-shadow-lg"
                    >
                        AI voice systems, <span className="text-accent">custom-built</span> for your business
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto text-shadow-sm"
                    >
                        EcoInk Voice is a fully custom AI call handling, pre-qualification, and job management system — designed to integrate seamlessly with your existing tools and workflows.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link href="#how-it-works">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="glow" size="lg" className="shadow-[0_0_15px_rgba(0,255,204,0.3)] hover:shadow-[0_0_25px_rgba(0,255,204,0.6)] border-accent bg-accent text-black hover:bg-accent/90">
                                    See how EcoInk Voice works
                                </Button>
                            </motion.div>
                        </Link>
                        <Link href="#contact">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">Request a demo</Button>
                            </motion.div>
                        </Link>
                    </motion.div>
                    <p className="text-xs text-gray-400 mt-6 italic">No templates. Fully custom. Built for any industry.</p>
                </motion.div>
            </section>

            {/* SECTION 2: WHAT ECOINK VOICE HANDLES */}
            <section id="how-it-works" className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">EcoInk Voice handles inbound demand — <span className="text-white">end to end</span></h2>
                        <p className="text-gray-400">Designed to manage real customer interactions, not just answer phones.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Phone, title: "Answers calls instantly — 24/7", desc: "No missed calls, no voicemail reliance, no after-hours drop-off." },
                            { icon: CheckCircle, title: "Pre-qualifies enquiries intelligently", desc: "Asks the right questions, filters low-quality enquiries, and identifies real jobs before they reach your team." },
                            { icon: Calendar, title: "Books jobs or routes leads cleanly", desc: "Schedules appointments, escalates urgent cases, or hands off qualified leads with full context." },
                            { icon: Clock, title: "Handles after-hours demand", desc: "Captures enquiries, provides accurate information, and queues follow-ups for business hours." },
                            { icon: RotateCcw, title: "Manages follow-ups", desc: "Triggers calls, SMS, or internal actions based on what actually happened in the conversation." }
                        ].map((item, i) => (
                            <div key={i} className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12 text-sm text-gray-500 italic">
                        "Built to scale with demand — not break under it."
                    </div>
                </div>
            </section>

            {/* SECTION 3: REAL-TIME LOGIC */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Real-time logic, powered by your systems</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            EcoInk Voice doesn't operate in isolation. It connects directly to your tools and updates live — so every conversation reflects the current state of your business.
                        </p>
                        <div className="space-y-6">
                            {[
                                { title: "Custom tools triggered during calls", desc: "Check availability, create records, send messages instantly." },
                                { title: "Existing client recognition", desc: "Respond differently to existing clients versus new enquiries." },
                                { title: "Live context awareness", desc: "Answers stay accurate, relevant, and current." },
                                { title: "CRM & system sync", desc: "Calls automatically create or update records inside your CRM." },
                                { title: "Continuous updates", desc: "When your data changes, your agent changes with it." }
                            ].map((feat, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 mt-1">
                                        <Zap size={14} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-base">{feat.title}</h4>
                                        <p className="text-gray-400 text-sm">{feat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Abstract Visual */}
                    <div className="relative h-[500px] w-full glass-card rounded-2xl border-accent/10 p-8 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-accent/5" />
                        <div className="grid grid-cols-2 gap-4 w-full h-full opacity-20">
                            {Array.from({ length: 16 }).map((_, i) => (
                                <div key={i} className="border border-accent/30 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                            ))}
                        </div>
                        <div className="absolute bg-black p-6 rounded-xl border border-accent text-center shadow-[0_0_30px_rgba(0,255,204,0.2)] z-10 max-w-xs">
                            <Database className="mx-auto text-accent mb-4" size={32} />
                            <p className="text-white font-bold">Real-time Sync</p>
                            <div className="flex justify-center gap-2 mt-4">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                                <span className="text-xs text-green-500">Live Connection</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: INTEGRATIONS (Marquee) */}
            <section className="py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Deep integrations. Real-time sync.</h2>
                    <p className="text-gray-400">EcoInk Voice connects directly to your existing systems.</p>
                </div>

                {/* Infinite Marquee */}
                <div className="relative w-full overflow-hidden py-8">
                    <motion.div
                        className="flex gap-12 w-max px-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                    >
                        {[...[
                            "ServiceM8", "GoHighLevel", "HubSpot", "Salesforce", "Zoho CRM", "Pipedrive", "Monday CRM",
                            "Freshsales", "Google Workspace", "Google Calendar", "Gmail", "Outlook",
                            "Vonage", "Twilio", "Stripe", "Xero", "Zapier", "OpenAI"
                        ], ...[
                            "ServiceM8", "GoHighLevel", "HubSpot", "Salesforce", "Zoho CRM", "Pipedrive", "Monday CRM",
                            "Freshsales", "Google Workspace", "Google Calendar", "Gmail", "Outlook",
                            "Vonage", "Twilio", "Stripe", "Xero", "Zapier", "OpenAI"
                        ]].map((name, i) => (
                            <span key={i} className="text-xl font-bold text-gray-500 whitespace-nowrap hover:text-white transition-colors cursor-default">
                                {name}
                            </span>
                        ))}
                    </motion.div>
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
                </div>
                <div className="text-center mt-8">
                    <Link href="#contact" className="text-sm text-accent hover:underline">Request custom integration</Link>
                </div>
            </section>

            {/* SECTION 5: FORM */}
            <section id="contact" className="py-24">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Talk to us about a custom EcoInk Voice build</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            We'll review your requirements, systems, and workflows — then map how EcoInk Voice would be built specifically for your business.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {["Fully custom builds", "Integrates with your existing systems", "No templates or off-the-shelf bots"].map((txt, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <CheckCircle className="text-accent w-5 h-5" /> {txt}
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm text-gray-500 italic">"If we're not the right fit, we'll tell you."</p>
                    </div>

                    <div className="glass-card p-8 rounded-2xl border border-accent/20">
                        {/* Simplified form for demo */}
                        <h3 className="text-xl font-bold text-white mb-6">Request a Consultation</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-accent" />
                            <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-accent" />
                            <textarea placeholder="What are you looking to automate?" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-accent h-32" />
                            <Button variant="glow" className="w-full border-accent bg-accent text-black hover:bg-accent/90 shadow-[0_0_15px_rgba(0,255,204,0.3)]">Request Consultation</Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* SECTION 6: BUNDLE MENTION */}
            <section className="py-24 bg-white/5 border-t border-white/5 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">Works on its own. <span className="text-gradient">Even stronger together.</span></h2>

                    <div className="relative w-full max-w-lg aspect-square mx-auto mb-8">
                        <Image
                            src="/images/bundle-system.png"
                            alt="EcoInk Bundle System"
                            fill
                            className="object-contain drop-shadow-[0_0_30px_rgba(127,255,0,0.2)]"
                        />
                    </div>

                    <p className="text-gray-400 text-lg mb-10">
                        EcoInk Voice can operate independently, or act as the conversion layer that captures every opportunity generated through EcoInk Ads.
                    </p>
                    <Link href="/#enquiry">
                        <Button variant="outline" className="border-white/20 hover:bg-white/10">Explore the full system</Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
