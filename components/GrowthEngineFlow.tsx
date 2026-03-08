"use client";

import { motion } from "framer-motion";
import { Search, Smartphone, CheckCircle2 } from "lucide-react";

/**
 * GrowthEngineFlow Component
 * 
 * Recreated to match the EXACT arc design requested by the user.
 * Features:
 * - Two top cards (Ads & Voice)
 * - A central U-shaped glowing arc
 * - Converging particles at the center
 * - A bottom "Booked Jobs" card
 */
const GrowthEngineFlow = () => {
    return (
        <div className="relative w-full max-w-5xl mx-auto py-20 px-4 flex flex-col items-center select-none overflow-hidden">
            {/* Top Cards Section */}
            <div className="flex justify-between w-full mb-32 relative z-20 px-10">
                {/* EcoInk Ads Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-10 rounded-3xl border border-white/5 bg-[#0a0a0a]/90 backdrop-blur-xl w-[280px] flex flex-col items-center text-center shadow-2xl relative group"
                >
                    <div className="w-16 h-16 bg-[#7fff00]/10 rounded-2xl flex items-center justify-center text-[#7fff00] mb-6 shadow-[inset_0_0_15px_rgba(127,255,0,0.1)] group-hover:shadow-[inset_0_0_25px_rgba(127,255,0,0.2)] transition-shadow">
                        <Search size={32} />
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-2">EcoInk Ads</h3>
                    <p className="text-gray-400 text-sm">High-Intent Traffic</p>
                    <div className="absolute inset-0 border border-[#7fff00]/0 group-hover:border-[#7fff00]/20 rounded-3xl transition-all duration-500" />
                </motion.div>

                {/* EcoInk Voice Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-10 rounded-3xl border border-white/5 bg-[#0a0a0a]/90 backdrop-blur-xl w-[280px] flex flex-col items-center text-center shadow-2xl relative group"
                >
                    <div className="w-16 h-16 bg-[#00ffcc]/10 rounded-2xl flex items-center justify-center text-[#00ffcc] mb-6 shadow-[inset_0_0_15px_rgba(0,255,204,0.1)] group-hover:shadow-[inset_0_0_25px_rgba(0,255,204,0.2)] transition-shadow">
                        <Smartphone size={32} />
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-2">EcoInk Voice</h3>
                    <p className="text-gray-400 text-sm">AI Job Handling</p>
                    <div className="absolute inset-0 border border-[#00ffcc]/0 group-hover:border-[#00ffcc]/20 rounded-3xl transition-all duration-500" />
                </motion.div>
            </div>

            {/* SVG Arc Layer */}
            <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
                <svg className="w-full h-full max-h-[600px]" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="arc-gradient-left" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7fff00" stopOpacity="0" />
                            <stop offset="100%" stopColor="#7fff00" stopOpacity="0.4" />
                        </linearGradient>
                        <linearGradient id="arc-gradient-right" x1="100%" y1="0%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="#00ffcc" stopOpacity="0" />
                            <stop offset="100%" stopColor="#00ffcc" stopOpacity="0.4" />
                        </linearGradient>
                        <filter id="arc-glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="10" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Main U-Arc Path */}
                    <path
                        d="M 180 200 C 180 450, 820 450, 820 200"
                        stroke="rgba(255, 255, 255, 0.05)"
                        strokeWidth="2"
                    />

                    {/* Left Side Glow Arc */}
                    <path
                        d="M 180 200 C 180 450, 500 450, 500 450"
                        stroke="url(#arc-gradient-left)"
                        strokeWidth="3"
                        filter="url(#arc-glow)"
                    />

                    {/* Right Side Glow Arc */}
                    <path
                        d="M 820 200 C 820 450, 500 450, 500 450"
                        stroke="url(#arc-gradient-right)"
                        strokeWidth="3"
                        filter="url(#arc-glow)"
                    />

                    {/* FLOW PARTICLES */}
                    <FlowParticle path="M 180 200 C 180 450, 500 450, 500 450" color="#7fff00" delay={0} />
                    <FlowParticle path="M 180 200 C 180 450, 500 450, 500 450" color="#7fff00" delay={1.5} />

                    <FlowParticle path="M 820 200 C 820 450, 500 450, 500 450" color="#00ffcc" delay={0.75} />
                    <FlowParticle path="M 820 200 C 820 450, 500 450, 500 450" color="#00ffcc" delay={2.25} />

                    {/* Center Convergence Line */}
                    <path
                        d="M 500 450 V 550"
                        stroke="rgba(127, 255, 0, 0.4)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                    />
                </svg>
            </div>

            {/* Convergence Point Glow */}
            <div className="absolute top-[450px] left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-12 h-12 bg-[#7fff00]/20 rounded-full blur-xl"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_#fff]" />
            </div>

            {/* Bottom Card: Booked Jobs */}
            <div className="relative mt-20 z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 rounded-[2rem] border border-white/5 bg-[#0a0a0a]/95 backdrop-blur-2xl w-[360px] flex flex-col items-center text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
                >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#7fff00]/10 blur-[80px] rounded-full" />

                    <div className="w-20 h-20 bg-[#7fff00]/10 border border-[#7fff00]/30 rounded-full flex items-center justify-center text-[#7fff00] mb-8 relative z-10 shadow-[0_0_20px_rgba(127,255,0,0.2)]">
                        <CheckCircle2 size={40} />
                    </div>

                    <h3 className="text-4xl font-black text-white mb-3 tracking-tight relative z-10">Booked Jobs</h3>
                    <p className="text-[#7fff00] font-bold tracking-[0.3em] text-xs uppercase opacity-90 relative z-10">Revenue Generated</p>

                    {/* Animated bottom line */}
                    <motion.div
                        animate={{ scaleX: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="h-[2px] w-1/2 bg-gradient-to-r from-transparent via-[#7fff00] to-transparent mt-10"
                    />
                </motion.div>
            </div>
        </div>
    );
};

/**
 * FlowParticle Subcomponent
 * Animates a glowing dot along a specified path.
 */
const FlowParticle = ({ path, color, delay, duration = 3 }: { path: string; color: string; delay: number; duration?: number }) => {
    return (
        <motion.circle r="4" fill={color} style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
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

export default GrowthEngineFlow;
