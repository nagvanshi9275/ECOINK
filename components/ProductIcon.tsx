"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AdsIcon } from "./Icons";
import AnimatedOrb from "./AnimatedOrb";

interface ProductIconProps {
    src?: string;
    iconType?: "ads" | "voice";
    alt: string;
    glowColor?: string;
    className?: string;
    children?: React.ReactNode;
}

const ProductIcon: React.FC<ProductIconProps> = ({
    src,
    iconType,
    alt,
    glowColor = "#00ff88",
    className,
    children,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.1, y: -5 }}
            className={cn(
                "relative w-48 h-48 flex items-center justify-center",
                className
            )}
        >
            {/* Background Radial Glow */}
            <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30 pointer-events-none transition-opacity duration-500 group-hover:opacity-50"
                style={{
                    background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`
                }}
            />

            {/* Main Icon Content */}
            <div className="relative z-10 w-32 h-32 flex items-center justify-center">
                {src ? (
                    <div className="relative w-full h-full filter cursor-pointer"
                        style={{ filter: `drop-shadow(0 0 15px ${glowColor}) drop-shadow(0 0 5px ${glowColor})` }}>
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-contain"
                        />
                    </div>
                ) : iconType === "ads" ? (
                    <div className="relative w-full h-full flex items-center justify-center"
                        style={{ filter: `drop-shadow(0 0 15px ${glowColor}) drop-shadow(0 0 5px ${glowColor})` }}>
                        <AdsIcon color={glowColor} />
                    </div>
                ) : iconType === "voice" ? (
                    /* 
                       PREMIUM UPGRADE: Replaced static VoiceIcon with the high-fidelity AnimatedOrb
                       This aligns with the user's request to use the 'orb' animation instead of a 
                       static representation (the 'girl' or phone icon).
                    */
                    <div className="relative w-full h-full scale-[0.8] drop-shadow-[0_0_20px_rgba(0,255,204,0.4)]">
                        <AnimatedOrb />
                    </div>
                ) : (
                    <div className="relative w-full h-full flex items-center justify-center text-white"
                        style={{ filter: `drop-shadow(0 0 15px ${glowColor})` }}>
                        {children}
                    </div>
                )}
            </div>

            {/* Floating Micro-Glow Spots */}
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 w-8 h-8 rounded-full blur-xl"
                style={{ backgroundColor: glowColor }}
            />
        </motion.div>
    );
};

export default ProductIcon;
