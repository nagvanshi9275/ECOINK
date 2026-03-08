"use client";

import { motion } from "framer-motion";
import { Search, Smartphone, CheckCircle2 } from "lucide-react";

/**
 * SeamlessIntegrationDiagram Component
 * 
 * High-fidelity, perfectly proportioned recreation of the Growth Engine.
 * Balanced sizes for all cards as requested by the user.
 */
const SeamlessIntegrationDiagram = () => {
    return (
        <div className="relative w-full max-w-5xl mx-auto py-12 px-4 flex flex-col items-center select-none overflow-visible">

            {/* Top Cards Section */}
            <div className="flex justify-center items-center w-full mb-32 relative z-20 gap-8 md:gap-24">
                {/* EcoInk Ads Card */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card w-[150px] md:w-[240px] h-[180px] md:h-[280px] rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-[#0d0d0d]/80 backdrop-blur-xl flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(0,0,0,0.4)] relative group flex-shrink-0"
                >
                    <div className="w-12 h-12 md:w-20 md:h-20 bg-[#7fff00]/10 rounded-2xl flex items-center justify-center text-[#7fff00] mb-4 shadow-[inset_0_0_15px_rgba(127,255,0,0.1)] group-hover:shadow-[inset_0_0_30px_rgba(127,255,0,0.3)] transition-all duration-500">
                        <Search className="w-6 h-6 md:w-10 md:h-10" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-white font-black text-base md:text-2xl mb-1 tracking-tight">EcoInk Ads</h3>
                    <p className="text-gray-400 text-[10px] md:text-sm font-bold opacity-50 uppercase tracking-widest">High-Intent Traffic</p>
                    <div className="absolute inset-0 border border-[#7fff00]/0 group-hover:border-[#7fff00]/20 rounded-[2rem] md:rounded-[3rem] transition-all duration-500" />
                </motion.div>

                {/* EcoInk Voice Card */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card w-[150px] md:w-[240px] h-[180px] md:h-[280px] rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-[#0d0d0d]/80 backdrop-blur-xl flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(0,0,0,0.4)] relative group flex-shrink-0"
                >
                    <div className="w-12 h-12 md:w-20 md:h-20 bg-[#00ffcc]/10 rounded-2xl flex items-center justify-center text-[#00ffcc] mb-4 shadow-[inset_0_0_15px_rgba(0,255,204,0.1)] group-hover:shadow-[inset_0_0_30px_rgba(0,255,204,0.3)] transition-all duration-500">
                        <Smartphone className="w-6 h-6 md:w-10 md:h-10" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-white font-black text-base md:text-2xl mb-1 tracking-tight">EcoInk Voice</h3>
                    <p className="text-gray-400 text-[10px] md:text-sm font-bold opacity-50 uppercase tracking-widest">AI Job Handling</p>
                    <div className="absolute inset-0 border border-[#00ffcc]/0 group-hover:border-[#00ffcc]/20 rounded-[2rem] md:rounded-[3rem] transition-all duration-500" />
                </motion.div>
            </div>

            {/* SVG Arc Layer */}
            <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="arc-gradient-left" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="15%" stopColor="#7fff00" stopOpacity="0" />
                            <stop offset="25%" stopColor="#7fff00" stopOpacity="1" />
                            <stop offset="100%" stopColor="#7fff00" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="arc-gradient-right" x1="100%" y1="0%" x2="0%" y2="0%">
                            <stop offset="15%" stopColor="#00ffcc" stopOpacity="0" />
                            <stop offset="25%" stopColor="#00ffcc" stopOpacity="1" />
                            <stop offset="100%" stopColor="#00ffcc" stopOpacity="1" />
                        </linearGradient>
                        <filter id="arc-glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="10" result="blur" />
                        </filter>
                    </defs>

                    {/* Arc Paths calibrated to card centers (approx 280, 720) */}
                    <path d="M 280 250 C 280 500, 500 500, 500 500" stroke="url(#arc-gradient-left)" strokeWidth="4" strokeLinecap="round" />
                    <path d="M 280 250 C 280 500, 500 500, 500 500" stroke="#7fff00" strokeWidth="12" strokeOpacity="0.1" filter="url(#arc-glow)" />

                    <path d="M 720 250 C 720 500, 500 500, 500 500" stroke="url(#arc-gradient-right)" strokeWidth="4" strokeLinecap="round" />
                    <path d="M 720 250 C 720 500, 500 500, 500 500" stroke="#00ffcc" strokeWidth="12" strokeOpacity="0.1" filter="url(#arc-glow)" />

                    <FlowParticle path="M 280 250 C 280 500, 500 500, 500 500" color="#7fff00" delay={0} size={5} />
                    <FlowParticle path="M 720 250 C 720 500, 500 500, 500 500" color="#00ffcc" delay={1.5} size={5} />
                </svg>
            </div>

            {/* Convergence Point */}
            <div className="absolute top-[500px] left-1/2 -translate-x-1/2 z-20">
                <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_#fff,0_0_40px_#7fff00]" />
            </div>

            {/* Bottom Card: Booked Jobs */}
            <div className="relative mt-20 z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-2xl w-[280px] md:w-[400px] flex flex-col items-center text-center shadow-[0_0_60px_rgba(0,0,0,0.6)] relative overflow-hidden"
                >
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#7fff00]/10 blur-[80px] rounded-full pointer-events-none" />

                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#7fff00]/10 border border-[#7fff00]/40 rounded-full flex items-center justify-center text-[#7fff00] mb-6 relative z-10 shadow-[0_0_20px_rgba(127,255,0,0.2)]">
                        <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2.5} />
                    </div>

                    <h3 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tighter relative z-10">Booked Jobs</h3>
                    <p className="text-[#7fff00] font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase opacity-90 relative z-10">Revenue Generated</p>

                    <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[#7fff00] to-transparent mt-8 opacity-30" />
                </motion.div>
            </div>
        </div>
    );
};

/**
 * FlowParticle Subcomponent
 */
const FlowParticle = ({ path, color, delay, duration = 3.5, size = 4 }: { path: string; color: string; delay: number; duration?: number; size?: number }) => {
    return (
        <motion.circle r={size} fill={color} style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
            <animateMotion
                path={path}
                begin={`${delay}s`}
                dur={`${duration}s`}
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.6 1"
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

export default SeamlessIntegrationDiagram;
