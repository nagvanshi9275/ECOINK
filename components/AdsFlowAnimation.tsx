"use client";

import { motion } from "framer-motion";
import { Search, MousePointer2, Smartphone, CheckCircle2 } from "lucide-react";

const AdsFlowAnimation = () => {
    return (
        <div className="w-full relative py-12 flex flex-col items-center overflow-hidden">
            {/* 
                Main Wrapper with horizontal padding
            */}
            <div className="w-full h-full relative max-w-6xl mx-auto lg:px-20 md:px-12 px-6">

                <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">

                    {/* 
                        CONNECTION LINE: PERCENTAGE-BASED POSITIONING
                        For 4 items, the center of the first item is at 12.5% width,
                        and the center of the last item is at 87.5% width.
                        This ensures the line starts and ends EXACTLY at the center of the first/last icon
                        no matter the screen size or how flex-grow is distributed.
                    */}
                    <div className="absolute top-[40px] left-[12.5%] right-[12.5%] hidden md:block z-0 pointer-events-none">
                        {/* Base Dim Line */}
                        <div className="w-full h-[1px] bg-white/5" />

                        {/* 
                            Animated Progress "Fill" Line
                        */}
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
                                style={{
                                    boxShadow: '0 0 15px #7FFF00, 0 0 25px rgba(127,255,0,0.4)',
                                }}
                            />

                            {/* Leading Glow Head */}
                            <motion.div
                                initial={{ left: "0%" }}
                                animate={{
                                    left: ["0%", "100%", "100%"],
                                    opacity: [0, 1, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    times: [0, 0.8, 1]
                                }}
                                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full z-20"
                                style={{
                                    boxShadow: '0 0 20px #7FFF00, 0 0 40px #7FFF00',
                                }}
                            />
                        </div>
                    </div>

                    {/* Step 1: Search */}
                    <StepItem
                        icon={Search}
                        title="High Intent Search"
                        subtitle="Targeting logic"
                        color="white"
                        glow="rgba(255,255,255,0.05)"
                    />

                    {/* Step 2: Ad Display */}
                    <StepItem
                        icon={MousePointer2}
                        title="EcoInk Ad"
                        subtitle="Click captured"
                        color="#7FFF00"
                        glow="rgba(127,255,0,0.1)"
                        hasPulse
                    />

                    {/* Step 3: Conversion */}
                    <StepItem
                        icon={Smartphone}
                        title="Landing & Call"
                        subtitle="Frictionless flow"
                        color="#3b82f6"
                        glow="rgba(59,130,246,0.1)"
                    />

                    {/* Step 4: Booked Job */}
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
            className="relative z-20 flex flex-col items-center flex-1"
        >
            <div
                className="w-20 h-20 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center mb-6 relative overflow-hidden group shadow-xl z-30"
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

            <div className="text-center">
                <h3 className="text-white font-bold mb-1 whitespace-nowrap">{title}</h3>
                <p className={`text-xs ${isFinal ? 'text-primary font-medium' : 'text-gray-500'}`}>{subtitle}</p>
            </div>
        </motion.div>
    );
}

export default AdsFlowAnimation;
