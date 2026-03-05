"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * AnimatedFunnel Component - "Seamless System Integration" High-Fidelity VERSION
 * 
 * A premium, pure-code recreation of the complex pipe-and-funnel system.
 * Features:
 * - Glassmorphic Ads/Voice input nodes
 * - Glowing twin-path pipes with animated particles
 * - Central translucent glass funnel
 * - Pulsing Results sphere with inner energy flow
 */
const AnimatedFunnel = () => {
    return (
        <div className="relative w-full max-w-5xl mx-auto aspect-square flex items-center justify-center overflow-visible scale-[0.8] md:scale-100">
            {/* --- TECH GRID BACKGROUND --- */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />

            {/* --- SVG LAYER (Pipes, Funnel, Particles) --- */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-visible">
                <svg viewBox="0 0 1000 1000" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="p-glow-green" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="10" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        <filter id="p-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="10" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        <linearGradient id="pipe-grad-green" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7FFF00" stopOpacity="0.1" />
                            <stop offset="50%" stopColor="#7FFF00" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#7FFF00" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>

                    {/* --- OUTER PIPES (Large Loops) --- */}
                    {/* Ads Loop (Green) */}
                    <path
                        d="M 320 300 H 180 V 800 H 450 V 840"
                        stroke="#7FFF00"
                        strokeWidth="4"
                        strokeOpacity="0.2"
                        className="filter drop-shadow-[0_0_8px_#7FFF00]"
                    />
                    <path
                        d="M 320 280 H 160 V 820 H 430 V 840"
                        stroke="#7FFF00"
                        strokeWidth="1"
                        strokeOpacity="0.1"
                    />

                    {/* Voice Loop (Cyan) */}
                    <path
                        d="M 680 300 H 820 V 800 H 550 V 840"
                        stroke="#00ffcc"
                        strokeWidth="4"
                        strokeOpacity="0.2"
                        className="filter drop-shadow-[0_0_8px_#00ffcc]"
                    />
                    <path
                        d="M 680 280 H 840 V 820 H 570 V 840"
                        stroke="#00ffcc"
                        strokeWidth="1"
                        strokeOpacity="0.1"
                    />

                    {/* --- INNER PIPES (Connecting to Funnel) --- */}
                    {/* Ads Inner */}
                    <path
                        d="M 380 300 H 480 V 420"
                        stroke="#7FFF00"
                        strokeWidth="3"
                        strokeOpacity="0.3"
                    />
                    {/* Voice Inner */}
                    <path
                        d="M 620 300 H 520 V 420"
                        stroke="#00ffcc"
                        strokeWidth="3"
                        strokeOpacity="0.3"
                    />

                    {/* --- FUNNEL GEOMETRY --- */}
                    <path
                        d="M 380 400 L 460 620 L 460 680 M 620 400 L 540 620 L 540 680"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="2"
                    />
                    <path
                        d="M 380 400 Q 500 450 620 400"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="2"
                    />
                    <path
                        d="M 380 405 Q 500 455 620 405"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                    />

                    {/* --- MOVING PARTICLES --- */}
                    {/* Ads Outer Particles */}
                    <PipeFlow path="M 320 300 H 180 V 800 H 450" color="#7FFF00" delay={0} />
                    <PipeFlow path="M 320 300 H 180 V 800 H 450" color="#7FFF00" delay={2} />

                    {/* Voice Outer Particles */}
                    <PipeFlow path="M 680 300 H 820 V 800 H 550" color="#00ffcc" delay={1} />
                    <PipeFlow path="M 680 300 H 820 V 800 H 550" color="#00ffcc" delay={3} />

                    {/* Funnel Entry Particles */}
                    <PipeFlow path="M 380 300 H 480 V 440" color="#7FFF00" delay={0.5} duration={2} />
                    <PipeFlow path="M 620 300 H 520 V 440" color="#00ffcc" delay={1.5} duration={2} />

                    {/* Interior Funnel "Rain" */}
                    <PipeFlow path="M 490 450 Q 500 600 500 700" color="#7FFF00" delay={0.8} duration={1.2} />
                    <PipeFlow path="M 510 450 Q 500 600 500 700" color="#00ffcc" delay={1.8} duration={1.2} />
                </svg>
            </div>

            {/* --- HTML/COMPONENT LAYER --- */}
            <div className="relative z-20 w-full h-full">

                {/* Diagrams Labels */}
                <div className="absolute top-[8%] inset-x-0 text-center pointer-events-none select-none">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-white/20 font-bold tracking-[14px] md:tracking-[22px] text-[10px] md:text-xs uppercase mb-1">
                            Seamless System Integration
                        </span>
                        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </motion.div>
                </div>

                {/* ADS Node */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="absolute top-[28%] left-[30%] -translate-x-1/2 -translate-y-1/2"
                >
                    <div className="relative group cursor-pointer">
                        <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl border border-primary/30 bg-[#0a0a0a] backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-primary/5 opacity-40 group-hover:opacity-60 transition-opacity" />
                            <span className="text-white font-black text-xl md:text-2xl tracking-tighter z-10">Ads</span>
                            <div className="absolute bottom-4 h-1 w-12 bg-primary/40 blur-[1px] rounded-full" />
                        </div>
                    </div>
                </motion.div>

                {/* VOICE Node */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-[28%] right-[30%] translate-x-1/2 -translate-y-1/2"
                >
                    <div className="relative group cursor-pointer">
                        <div className="absolute -inset-1 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl border border-accent/30 bg-[#0a0a0a] backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-accent/5 opacity-40 group-hover:opacity-60 transition-opacity" />
                            <span className="text-white font-black text-xl md:text-2xl tracking-tighter z-10">Voice</span>
                            <div className="absolute bottom-4 h-1 w-12 bg-accent/40 blur-[1px] rounded-full" />
                        </div>
                    </div>
                </motion.div>

                {/* RESULTS Node (Bottom Sphere) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-[10%] left-1/2 -translate-x-1/2 translate-y-1/2"
                >
                    <div className="relative w-44 h-44 md:w-56 md:h-56 flex items-center justify-center">
                        {/* Outer Glow */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] pointer-events-none"
                        />

                        {/* The Sphere */}
                        <div className="relative z-10 w-28 h-28 md:w-36 md:h-36 rounded-full border border-white/20 bg-gradient-to-br from-white/10 via-[#0a0a0a]/90 to-transparent backdrop-blur-2xl shadow-[0_0_50px_rgba(255,255,255,0.05)] flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-primary/30 to-transparent opacity-60" />
                            <span className="text-white font-black text-xl md:text-2xl z-20">Results</span>

                            {/* Inner Energy Pulse */}
                            <motion.div
                                animate={{ opacity: [0.1, 0.3, 0.1], y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-white/20 blur-[20px]"
                            />
                        </div>

                        {/* Pipe Base Detail */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm" />
                    </div>
                </motion.div>

                {/* Central Funnel Glow Aura */}
                <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <motion.div
                        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="w-[300px] h-[400px] bg-primary/5 blur-[100px] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

/**
 * PipeFlow Particle Animation
 */
const PipeFlow = ({ path, color, delay, duration = 4 }: { path: string, color: string, delay: number, duration?: number }) => {
    return (
        <motion.circle r="3" fill={color} style={{ filter: `drop-shadow(0 0 8px ${color}) blur(1px)` }}>
            <animateMotion
                path={path}
                begin={`${delay}s`}
                dur={`${duration}s`}
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
            />
            <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.1;0.9;1"
                dur={`${duration}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
            />
        </motion.circle>
    );
};

export default AnimatedFunnel;
