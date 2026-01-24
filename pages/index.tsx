import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"; // It will use my updated glass card
import { ArrowRight, Check, Zap, Mic, BarChart3, Layers, Target } from "lucide-react";
import AnimatedFunnel from "@/components/AnimatedFunnel";
import EnquiryForm from "@/components/EnquiryForm";
import ReviewsSlider from "@/components/ReviewsSlider";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>EcoInk | AI-Powered Growth Engine for Service Businesses</title>
        <meta name="description" content="Turn demand into booked jobs automatically with EcoInk's AI-powered Ads and Voice systems." />
      </Head>

      {/* SECTION 1: HERO - INTEGRATED */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/50 z-10" /> {/* Re-added dark overlay */}
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center pt-20">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
            Turn demand into <span className="text-gradient">booked jobs</span> — automatically.
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            EcoInk is an AI-powered growth engine combining Ads + Voice into one seamless system.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#enquiry">
              <Button variant="glow" size="lg" className="h-14 px-10 text-lg">
                Get Started
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="outline" size="lg" className="h-14 px-10 text-lg border-white/30 hover:bg-white/10 text-white">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE TWO SYSTEMS */}
      <section id="how-it-works" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Two AI systems. <span className="text-white">One growth engine.</span></h2>
            <p className="text-gray-400 text-lg">Use them independently — or combine them for maximum leverage.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* EcoInk Ads Card */}
            <Link href="/ecoink-ads" className="block group">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:border-primary/50 transition-colors relative overflow-hidden bg-white/5 border-white/10 p-8">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 relative mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src="/images/ads-icon.png"
                        alt="EcoInk Ads"
                        fill
                        className="object-contain drop-shadow-[0_0_15px_rgba(127,255,0,0.3)]"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">EcoInk Ads</h3>
                    <p className="text-primary font-medium mb-6">High-intent demand, engineered for ROI.</p>
                  </div>

                  <ul className="space-y-3 mb-8 text-gray-400">
                    {[
                      "Google Ads built for service businesses",
                      "Conversion-first tracking",
                      "Optimised for high-value jobs",
                      "Designed to plug into EcoInk Voice"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="text-primary flex items-center justify-center gap-2 font-semibold group-hover:gap-4 transition-all mt-auto">
                    Explore EcoInk Ads <ArrowRight size={18} />
                  </div>
                </Card>
              </motion.div>
            </Link>

            {/* EcoInk Voice Card */}
            <Link href="/ecoink-voice" className="block group">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:border-accent/50 transition-colors relative overflow-hidden bg-white/5 border-white/10 p-8">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 relative mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src="/images/voice-icon.png"
                        alt="EcoInk Voice"
                        fill
                        className="object-contain drop-shadow-[0_0_15px_rgba(0,255,204,0.3)]"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">EcoInk Voice</h3>
                    <p className="text-accent font-medium mb-6">AI pre-qualification & job handling — 24/7.</p>
                  </div>

                  <ul className="space-y-3 mb-8 text-gray-400">
                    {[
                      "Answers calls instantly",
                      "Pre-qualifies leads",
                      "Books jobs or routes intelligently",
                      "Handles follow-ups automatically"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="text-accent flex items-center justify-center gap-2 font-semibold group-hover:gap-4 transition-all mt-auto">
                    Explore EcoInk Voice <ArrowRight size={18} />
                  </div>
                </Card>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE BUNDLE */}
      <section className="py-24 bg-white/5 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Better together. <br /><span className="text-gradient">Much better.</span>
            </motion.h2>
            <p className="text-xl text-gray-300 mb-8">
              When demand and conversion run on the same system, nothing leaks.
            </p>

            <div className="space-y-6">
              {[
                { icon: BarChart3, title: "Ads create demand", desc: "Precision targeting brings high-intent traffic to your doorstep.", color: "text-primary", bg: "bg-primary/10" },
                { icon: Zap, title: "Voice captures every opportunity", desc: "24/7 instant response ensures no lead goes cold.", color: "text-accent", bg: "bg-accent/10" },
                { icon: Layers, title: "One system. Zero handoffs.", desc: "Predictable growth with consolidated reporting.", color: "text-white", bg: "bg-white/10" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex gap-4"
                >
                  <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center ${item.color} shrink-0`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="#enquiry">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="glow">Book a strategy call</Button>
                </motion.div>
              </Link>
            </div>
          </div>

          {/* Visual: Bundle System */}
          <div className="relative h-[400px] w-full flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-md aspect-square"
            >
              <Image
                src="/images/bundle-system.png"
                alt="EcoInk Bundle System"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(127,255,0,0.2)]"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 4: WHO THIS IS FOR */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for service businesses that want scale — <span className="text-red-400">without chaos</span></h2>
          <p className="text-gray-400 text-lg mb-12">
            EcoInk delivers consistent inbound demand while ensuring every call, click, and enquiry is handled properly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              "Businesses ready to increase lead volume without lowering quality",
              "Owners who want predictable growth, not feast-or-famine months",
              "Teams that need systems to handle demand at scale"
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * i, duration: 0.5 }}
                className="glass-card p-6 rounded-xl border-white/5 bg-white/[0.02]"
              >
                <span className="text-4xl text-white/10 font-bold mb-4 block">0{i + 1}</span>
                <p className="text-gray-300 font-medium">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: REVIEWS */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">What businesses say about working with EcoInk</h2>
          <p className="text-gray-400">Real feedback from businesses using EcoInk systems.</p>
        </div>
        <ReviewsSlider />
      </section>

      {/* SECTION 5: ENQUIRY FORM */}
      <section id="enquiry" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <EnquiryForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
