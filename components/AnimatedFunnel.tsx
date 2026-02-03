"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AdsIcon } from "./Icons";
import { Zap, Target, CheckCircle2, Search, Smartphone } from "lucide-react";

/**
 * AnimatedFunnel Component
 * 
 * Visualizes the synergy between EcoInk Ads and EcoInk Voice.
 * Features:
 * - Centered icons in top cards
 * - Precise SVG paths for particle flow
 * - Converging particles at a central node
 * - Pulsing CTA "Booked Jobs" card
 */
const AnimatedFunnel = () => {
    return (
        <div className="relative w-full max-w-4xl mx-auto pt-10 pb-20 px-4 mt-8">
            {/* Top Cards Section */}
            <div className="flex justify-between items-start mb-32 relative z-20">
                {/* EcoInk Ads Card */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 rounded-2xl border-primary/20 bg-[#0a0a0a]/80 backdrop-blur-md w-[45%] md:w-[260px] shadow-xl relative group flex flex-col items-center"
                >
                    <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-5 shadow-[inset_0_0_15px_rgba(127,255,0,0.1)]">
                        <Search size={28} />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-1 text-center">EcoInk Ads</h3>
                    <p className="text-gray-400 text-sm text-center">High-Intent Traffic</p>
                </motion.div>

                {/* EcoInk Voice Card */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 rounded-2xl border-accent/20 bg-[#0a0a0a]/80 backdrop-blur-md w-[45%] md:w-[260px] shadow-xl relative group flex flex-col items-center"
                >
                    <div className="absolute inset-0 bg-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-5 shadow-[inset_0_0_15px_rgba(0,255,204,0.1)]">
                        <Smartphone size={28} />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-1 text-center">EcoInk Voice</h3>
                    <p className="text-gray-400 text-sm text-center">AI Job Handling</p>
                </motion.div>
            </div>

            {/* SVG CONNECTION LAYER - PARTICLES & LINES */}
            <div className="absolute inset-0 pointer-events-none z-10">
                <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="8" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="8" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* PATHS - COORDINATES ADJUSTED FOR CENTERED CARDS */}
                    {/* Left Path: Ads to Center */}
                    <path
                        id="path-ads"
                        d="M 130 200 C 130 380, 400 380, 400 380"
                        stroke="rgba(127, 255, 0, 0.3)"
                        strokeWidth="2"
                        filter="url(#glow-green)"
                        className="opacity-40"
                    />

                    {/* Right Path: Voice to Center */}
                    <path
                        id="path-voice"
                        d="M 670 200 C 670 380, 400 380, 400 380"
                        stroke="rgba(0, 255, 204, 0.3)"
                        strokeWidth="2"
                        filter="url(#glow-cyan)"
                        className="opacity-40"
                    />

                    {/* Final Path: Center to Result */}
                    <path
                        id="path-result"
                        d="M 400 380 L 400 500"
                        stroke="rgba(255, 255, 255, 0.15)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                    />

                    {/* GLOWING PARTICLES - LEFT (GREEN) */}
                    <Particle pathId="path-ads" color="#7fff00" delay={0}
                        path="M 130 200 C 130 380, 400 380, 400 380" />
                    <Particle pathId="path-ads" color="#7fff00" delay={1.2}
                        path="M 130 200 C 130 380, 400 380, 400 380" />
                    <Particle pathId="path-ads" color="#7fff00" delay={2.4}
                        path="M 130 200 C 130 380, 400 380, 400 380" />

                    {/* GLOWING PARTICLES - RIGHT (CYAN) */}
                    <Particle pathId="path-voice" color="#00ffcc" delay={0.6}
                        path="M 670 200 C 670 380, 400 380, 400 380" />
                    <Particle pathId="path-voice" color="#00ffcc" delay={1.8}
                        path="M 670 200 C 670 380, 400 380, 400 380" />
                    <Particle pathId="path-voice" color="#00ffcc" delay={3.0}
                        path="M 670 200 C 670 380, 400 380, 400 380" />

                    {/* PARTICLES DOWN TO RESULT (WHITE/MIX) */}
                    <Particle pathId="path-result" color="#7fff00" delay={2.1} duration={1.5}
                        path="M 400 380 L 400 500" />
                    <Particle pathId="path-result" color="#00ffcc" delay={2.7} duration={1.5}
                        path="M 400 380 L 400 500" />
                </svg>
            </div>

            {/* CONVERGENCE POINT */}
            <div className="absolute" style={{ left: '50%', top: '380px', transform: 'translate(-50%, -50%)', zIndex: 20 }}>
                <motion.div
                    animate={{
                        boxShadow: [
                            '0 0 15px rgba(127, 255, 0, 0.4)',
                            '0 0 30px rgba(0, 255, 204, 0.4)',
                            '0 0 15px rgba(127, 255, 0, 0.4)'
                        ],
                        scale: [1, 1.15, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-12 h-12 bg-black/80 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md"
                >
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_10px_#fff]" />
                </motion.div>
            </div>

            {/* Bottom CTA Card Section */}
            <div className="relative mt-28 flex justify-center z-20">
                <div className="relative group cursor-pointer">
                    {/* Pulsing glow effect behind button */}
                    <motion.div
                        className="absolute -inset-6 rounded-[32px] bg-primary/20 blur-3xl z-0"
                        animate={{
                            scale: [1, 1.25, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* The "Booked Job" Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 glass-card p-10 rounded-2xl border-primary/30 bg-[#0a0a0a] min-w-[320px] text-center shadow-[0_0_30px_rgba(127,255,0,0.1)] border-t border-t-white/10"
                    >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-5 shadow-[inset_0_0_20px_rgba(127,255,0,0.15)]">
                            <CheckCircle2 size={36} />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">Booked Jobs</h3>
                        <p className="text-primary font-bold tracking-[0.2em] text-xs uppercase opacity-80">Revenue Generated</p>

                        {/* Animated Underline */}
                        <motion.div
                            className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-6 w-full"
                            animate={{ opacity: [0.2, 0.8, 0.2], scaleX: [0.6, 1, 0.6] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// Particle Component for SVG paths
const Particle = ({ pathId, color, delay, path, duration = 3 }: { pathId: string, color: string, delay: number, path: string, duration?: number }) => {
    return (
        <motion.circle r="3" fill={color} style={{ filter: "drop-shadow(0 0 8px " + color + ")" }}>
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
