"use client";

import { motion } from "framer-motion";

const AnimatedOrb = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Massive Ambient Background Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px]"
            />

            {/* Concentric Pulsing Rings (Atmospheric) */}
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0.1, 0.2, 0.1],
                        scale: [1 + i * 0.2, 1.2 + i * 0.2, 1 + i * 0.2]
                    }}
                    transition={{
                        duration: 3,
                        delay: i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute rounded-full border border-white/5"
                    style={{ width: `${180 + i * 80}px`, height: `${180 + i * 80}px` }}
                />
            ))}

            {/* The Glass Orb Container */}
            <div className="relative w-48 h-48 rounded-full flex items-center justify-center overflow-hidden">
                {/* Radial Surface Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-[2px] rounded-full border border-white/10 z-10" />

                {/* Core Plasma Glow (The energy center) */}
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        filter: ["hue-rotate(0deg)", "hue-rotate(30deg)", "hue-rotate(0deg)"],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute w-32 h-32 bg-gradient-to-tr from-accent via-primary to-blue-400 rounded-full blur-2xl opacity-80"
                />

                {/* Central Inner Orb (Solid-ish) */}
                <div className="relative w-24 h-24 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center z-20 shadow-inner">
                    {/* Animated Waveform Bars */}
                    <div className="flex gap-1.5 items-center justify-center h-8">
                        {[1, 2.5, 4, 3, 2, 3.5, 2, 1].map((h, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    height: [8, h * 10, 8],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 0.6 + Math.random() * 0.4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.05
                                }}
                                className="w-1.5 bg-white rounded-full shadow-[0_0_10px_white]"
                            />
                        ))}
                    </div>
                </div>

                {/* Micro-Glow spots */}
                <motion.div
                    animate={{
                        rotate: 360,
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 z-10"
                >
                    <div className="absolute top-4 left-1/2 w-4 h-4 bg-white rounded-full blur-md" />
                </motion.div>
            </div>

            {/* Floating Energy Flares */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-1/4 w-8 h-8 bg-accent rounded-full blur-2xl"
            />
        </div>
    );
};

export default AnimatedOrb;
