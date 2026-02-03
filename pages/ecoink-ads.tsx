import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Search, TrendingUp, ArrowDown } from "lucide-react";
import AdsAuditForm from "@/components/AdsAuditForm";
import AdsFlowAnimation from "@/components/AdsFlowAnimation";
import { motion } from "framer-motion";

export default function EcoInkAds() {
    return (
        <>
            <Head>
                <title>EcoInk Ads | Google Ads Management for Service Businesses</title>
                <meta name="description" content="High-intent Google Ads built to generate booked jobs, not junk leads. Continuous AI monitoring and conversion-first optimization." />
            </Head>

            {/* SECTION 1: HEADER - INTEGRATED */}
            <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/images/ads-hero-background.jpg')" }}
                    />
                    <div className="absolute inset-0 bg-black/50 z-10" /> {/* Re-added dark overlay */}
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
                        className="text-5xl md:text-7xl font-bold mb-8 text-white text-shadow-lg leading-[1.4]"
                    >
                        Google Ads built to generate <span className="bg-gradient-to-r from-[#00bb00] to-[#00cc55] bg-clip-text text-transparent">booked jobs</span> — not junk leads
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto text-shadow-sm"
                    >
                        We run high-intent Google Ads for service businesses and build the systems needed to convert demand into real enquiries.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link href="#audit">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="glow" size="lg">Get a Free Google Ads Audit</Button>
                            </motion.div>
                        </Link>
                        <Link href="#how-it-works">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">See how it works</Button>
                            </motion.div>
                        </Link>
                    </motion.div>

                    {/* SECTION 2: TRUST BULLETS MOVED INTO HERO AREA FOR INTEGRATION */}
                    <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm font-medium text-gray-300">
                        <span className="flex items-center gap-2"><Check className="text-primary w-4 h-4" /> Built for service businesses</span>
                        <span className="flex items-center gap-2"><Check className="text-primary w-4 h-4" /> Conversion-first Google Ads</span>
                        <span className="flex items-center gap-2"><Check className="text-primary w-4 h-4" /> No lock-ins or inflated metrics</span>
                    </div>
                </motion.div>
            </section>

            {/* COMBINED SECTION: PROBLEM + SOLUTION FLOW */}
            <section className="py-24 bg-white/[0.02] relative">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Part 1: Problem Statement */}
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Most Google Ads don't fail — <span className="text-red-400">they quietly leak money.</span></h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Wasted spend on low-intent searches, missed calls, and optimising clicks instead of booked jobs is why many Google Ads campaigns underperform.
                        </p>
                    </div>

                    {/* Animated Arrow Connector */}
                    <div className="flex justify-center mb-12">
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="bg-white/5 p-4 rounded-full border border-white/10 text-primary shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                        >
                            <ArrowDown size={32} />
                        </motion.div>
                    </div>

                    {/* Part 2: Solution Flow */}
                    <div className="text-center mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-300 px-6">How EcoInk Ads turns search demand into booked jobs</h3>
                        <p className="text-gray-400 mb-12 px-6">Every EcoInk Ads campaign is built as a system — not just ads running in isolation.</p>

                        <div className="w-full">
                            <AdsFlowAnimation />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Search,
                                title: "High-intent traffic",
                                subtitle: "Only show up when people are ready to book",
                                bullets: ["Tight keyword and intent filtering", "Service + location precision", "Competitor and research traffic excluded early"],
                                bottom: "Quality demand comes first — volume scales after."
                            },
                            {
                                icon: TrendingUp,
                                title: "Conversion-first setup",
                                subtitle: "Every enquiry is captured and attributed",
                                bullets: ["Call & form tracking configured properly", "Clear visibility into what converts", "No guessing where leads come from"],
                                bottom: "We track booked jobs, not just clicks."
                            },
                            {
                                icon: Shield,
                                title: "Continuous optimisation",
                                subtitle: "Refined based on real outcomes",
                                bullets: ["Ongoing keyword and intent refinement", "Budget shifted toward what actually books", "Decisions based on enquiries — not vanity metrics"],
                                bottom: "Optimisation doesn't stop once campaigns go live."
                            }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className="glass-card p-8 rounded-2xl border-white/5 flex flex-col h-full"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                                    <step.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-primary/80 text-sm mb-6 font-medium">{step.subtitle}</p>

                                <ul className="space-y-3 mb-8 flex-1">
                                    {step.bullets.map((b, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-xs text-gray-500 border-t border-white/5 pt-4">
                                    {step.bottom}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="#audit" className="text-primary hover:text-white transition-colors flex items-center justify-center gap-2 font-medium">
                            See how we protect your ad spend 24/7 <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 4: 24/7 BUDGET PROTECTION */}
            <section className="py-24 bg-black relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">We protect your ad spend — <span className="text-gradient">even while you sleep</span></h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                EcoInk Ads combines continuous AI monitoring with human oversight to catch wasted spend, poor-quality searches, and silent budget leaks before they compound.
                            </p>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-white font-bold mb-1 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> AI monitoring (always on)
                                    </h4>
                                    <p className="text-gray-400 text-sm pl-4 border-l border-white/10 ml-1">
                                        Our in-house AI continuously scans search terms, intent patterns, and spend anomalies in real time.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full" /> Human oversight (always accountable)
                                    </h4>
                                    <p className="text-gray-400 text-sm pl-4 border-l border-white/10 ml-1">
                                        Every optimisation is reviewed and refined by our experienced operators who understand your business.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full" /> Quiet protection
                                    </h4>
                                    <p className="text-gray-400 text-sm pl-4 border-l border-white/10 ml-1">
                                        Low-intent keywords and budget leaks are removed without disruption.
                                    </p>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-8 italic">Speed of AI. Judgment of humans.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[400px] bg-white/5 rounded-2xl glass-card overflow-hidden"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                                alt="Budget Protection"
                                fill
                                className="object-cover opacity-80"
                            />
                            {/* Overlay for text readability if needed, or just style */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <Shield className="text-primary w-8 h-8" />
                                    <span className="text-xl font-bold text-white">Active Protection</span>
                                </div>
                                <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[85%] animate-pulse" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: FORM */}
            <section id="audit" className="py-24">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Get a free Google Ads audit</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            We'll review your current Google Ads setup — or map one from scratch — and show you exactly where budget is being wasted and what to fix.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {["No obligation or pressure", "Honest feedback, even if we're not a fit", "Built specifically for service businesses"].map((txt, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <Check className="text-primary w-5 h-5" /> {txt}
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm text-gray-500 italic">"We'd rather tell you the truth than sell you something that won't work."</p>
                    </div>

                    <AdsAuditForm />
                </div>
            </section>

            {/* SECTION 6: WHY SWITCH */}
            <section className="py-24 bg-white/[0.02]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">Why businesses switch to EcoInk Ads</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        {["Built specifically for service businesses", "Optimised around booked jobs, not clicks", "Continuous AI + human monitoring", "Clear visibility into what's actually working"].map((txt, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 glass-card rounded-xl">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                    <Check size={16} />
                                </div>
                                <span className="font-medium text-white">{txt}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
