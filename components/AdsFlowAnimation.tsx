"use client";

import { motion } from "framer-motion";
import { Search, MousePointer2, Smartphone, CheckCircle2 } from "lucide-react";

const AdsFlowAnimation = () => {
    return (
        <div className="w-full relative py-12 flex flex-col items-center overflow-hidden">
            <div className="w-full h-full relative max-w-6xl mx-auto lg:px-20 md:px-12 px-6">
                <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-16 md:gap-0">

                    {/* DESKTOP HORIZONTAL LINE */}
                    <div className="absolute top-[40px] left-[12.5%] right-[12.5%] hidden md:block z-0 pointer-events-none">
                        <div className="w-full h-[1px] bg-white/5" />
                        <div className="absolute top-0 left-0 w-full h-[2px] origin-left">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{
                                    scaleX: [0, 1, 1],
                                    opacity: [1, 1, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    times: [0, 0.8, 1]
                                }}
                                className="w-full h-full bg-primary origin-left"
                                style={{ boxShadow: '0 0 15px #7FFF00, 0 0 25px rgba(127,255,0,0.4)' }}
                            />
                        </div>
                    </div>

                    {/* MOBILE VERTICAL LINE */}
                    <div className="absolute top-[40px] bottom-[100px] left-1/2 -translate-x-1/2 w-[1px] bg-white/5 md:hidden pointer-events-none">
                        <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{
                                scaleY: [0, 1, 1],
                                opacity: [1, 1, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                times: [0, 0.8, 1]
                            }}
                            className="w-full h-full bg-primary origin-top"
                            style={{ boxShadow: '0 0 15px #7FFF00, 0 0 25px rgba(127,255,0,0.4)' }}
                        />
                    </div>

                    <StepItem
                        icon={Search}
                        title="High Intent Search"
                        subtitle="Targeting logic"
                        color="white"
                        glow="rgba(255,255,255,0.05)"
                    />

                    <StepItem
                        icon={MousePointer2}
                        title="EcoInk Ad"
                        subtitle="Click captured"
                        color="#7FFF00"
                        glow="rgba(127,255,0,0.1)"
                        hasPulse
                    />

                    <StepItem
                        icon={Smartphone}
                        title="Landing & Call"
                        subtitle="Frictionless flow"
                        color="#3b82f6"
                        glow="rgba(59,130,246,0.1)"
                    />

                    <StepItem
                        icon={CheckCircle2}
                        title="Booked Job"
                        subtitle="Revenue"
                        color="#7FFF00"
                        glow="rgba(127,255,0,0.2)"
                        isFinal
                    />
                </div>
            </div>
        </div>
    );
};

interface StepItemProps {
    icon: any;
    title: string;
    subtitle: string;
    color: string;
    glow: string;
    hasPulse?: boolean;
    isFinal?: boolean;
}

const StepItem = ({ icon: Icon, title, subtitle, color, glow, hasPulse, isFinal }: StepItemProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-20 flex flex-col items-center w-full md:flex-1"
        >
            <div
                className="w-20 h-20 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center mb-6 relative overflow-hidden group shadow-xl z-30 shrink-0"
                style={{
                    boxShadow: `0 0 20px ${glow}`
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                {isFinal && <div className="absolute inset-0 bg-primary/5 animate-pulse" />}
                <Icon
                    style={{ color: isFinal ? color : (hasPulse ? color : 'white') }}
                    className={`w-8 h-8 transition-transform group-hover:scale-105 ${isFinal ? 'w-10 h-10' : ''}`}
                />
                {hasPulse && <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary rounded-full opacity-60" />}
            </div>

            <div className="text-center px-4">
                <h3 className="text-white font-bold mb-1 text-sm md:text-base leading-tight">{title}</h3>
                <p className={`text-[10px] md:text-xs ${isFinal ? 'text-primary font-medium' : 'text-gray-500'}`}>{subtitle}</p>
            </div>
        </motion.div>
    );
}

export default AdsFlowAnimation;
