"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SeamlessIntegrationDiagram = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        const particles: Particle[] = [];

        /**
         * PRECISE PATH COORDINATES (Normalized 0-1000)
         * Traced to match the geometry of 'bundle-system.png' exactly.
         */
        const paths = {
            // Green Path 1: Outer loop leaving Ads left side, entering Results sphere
            adsOuter: [
                { x: 245, y: 255 }, // Ads Box Left Exit
                { x: 135, y: 255 }, // Outer Left Edge
                { x: 135, y: 780 }, // Bottom Left Corner
                { x: 440, y: 780 }, // Bottom Center-Left
                { x: 440, y: 820 }, // Enters Results Sphere Side
            ],
            // Green Path 2: Inner curve leaving Ads right side, entering Funnel top
            adsInner: [
                { x: 345, y: 255 }, // Ads Box Right Exit
                { x: 450, y: 255 }, // Toward Funnel
                { x: 475, y: 450 }, // Down into Funnel Left Top
            ],
            // Cyan Path 1: Outer loop leaving Voice right side, entering Results sphere
            voiceOuter: [
                { x: 755, y: 255 }, // Voice Box Right Exit
                { x: 865, y: 255 }, // Outer Right Edge
                { x: 865, y: 780 }, // Bottom Right Corner
                { x: 560, y: 780 }, // Bottom Center-Right
                { x: 560, y: 820 }, // Enters Results Sphere Side
            ],
            // Cyan Path 2: Inner curve leaving Voice left side, entering Funnel top
            voiceInner: [
                { x: 655, y: 255 }, // Voice Box Left Exit
                { x: 550, y: 255 }, // Toward Funnel
                { x: 525, y: 450 }, // Down into Funnel Right Top
            ],
            // White Path: Dropping from Funnel neck to Results center
            funnelDrop: [
                { x: 500, y: 550 }, // Funnel Neck
                { x: 500, y: 820 }, // Results Sphere Center
            ]
        };

        class Particle {
            x: number = 0;
            y: number = 0;
            path: { x: number; y: number }[];
            progress: number = 0;
            speed: number;
            color: string;
            size: number;
            opacity: number;
            offset: { x: number; y: number };

            constructor(path: { x: number; y: number }[], color: string, speedMult: number = 1) {
                this.path = path;
                this.color = color;
                this.speed = (Math.random() * 0.001 + 0.002) * speedMult;
                this.size = Math.random() * 1.5 + 1.5;
                this.opacity = 0;
                // Tiny random offset to simulate flow volume while staying INSIDE the tube
                this.offset = {
                    x: (Math.random() - 0.5) * 8,
                    y: (Math.random() - 0.5) * 8
                };
                this.reset();
            }

            reset() {
                this.progress = -Math.random() * 0.8; // Randomize start delay
                this.opacity = 0;
            }

            update() {
                this.progress += this.speed;
                if (this.progress > 1) {
                    this.reset();
                }

                if (this.progress <= 0) return;

                // Simple path segment interpolation
                const segmentCount = this.path.length - 1;
                const segmentProgress = this.progress * segmentCount;
                const segmentIndex = Math.floor(segmentProgress);
                const t = segmentProgress - segmentIndex;

                if (segmentIndex < segmentCount) {
                    const p1 = this.path[segmentIndex];
                    const p2 = this.path[segmentIndex + 1];
                    this.x = p1.x + (p2.x - p1.x) * t + this.offset.x;
                    this.y = p1.y + (p2.y - p1.y) * t + this.offset.y;
                }

                // Smooth fade
                if (this.progress < 0.1) this.opacity = this.progress * 10;
                else if (this.progress > 0.9) this.opacity = (1 - this.progress) * 10;
                else this.opacity = 1;
            }

            draw(context: CanvasRenderingContext2D, width: number, height: number) {
                if (this.opacity <= 0) return;

                const drawX = (this.x / 1000) * width;
                const drawY = (this.y / 1000) * height;

                context.shadowBlur = 10;
                context.shadowColor = this.color;
                context.fillStyle = this.color;
                context.globalAlpha = this.opacity * 0.8;

                context.beginPath();
                context.arc(drawX, drawY, this.size, 0, Math.PI * 2);
                context.fill();

                // Motion trail
                context.shadowBlur = 0;
                context.globalAlpha = this.opacity * 0.2;
                context.beginPath();
                context.arc(drawX, drawY, this.size * 1.8, 0, Math.PI * 2);
                context.fill();
            }
        }

        const initParticles = () => {
            for (let i = 0; i < 4; i++) {
                particles.push(new Particle(paths.adsOuter, "#7FFF00"));
                particles.push(new Particle(paths.adsInner, "#7FFF00", 1.2));
                particles.push(new Particle(paths.voiceOuter, "#00ffcc"));
                particles.push(new Particle(paths.voiceInner, "#00ffcc", 1.2));
                particles.push(new Particle(paths.funnelDrop, "#ffffff", 2.0));
            }
        };

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                const rect = parent.getBoundingClientRect();
                const dpr = window.devicePixelRatio || 1;
                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;
                ctx.scale(dpr, dpr);
                canvas.style.width = `${rect.width}px`;
                canvas.style.height = `${rect.height}px`;
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            const w = canvas.width / (window.devicePixelRatio || 1);
            const h = canvas.height / (window.devicePixelRatio || 1);
            ctx.clearRect(0, 0, w, h);

            // OPTIONAL: Debugging - uncomment to see the paths
            /*
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(255,0,0,0.2)';
            Object.values(paths).forEach(path => {
                ctx.beginPath();
                path.forEach((p, i) => i === 0 ? ctx.moveTo((p.x/1000)*w, (p.y/1000)*h) : ctx.lineTo((p.x/1000)*w, (p.y/1000)*h));
                ctx.stroke();
            });
            */

            particles.forEach(p => {
                p.update();
                p.draw(ctx, w, h);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        resize();
        initParticles();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="relative w-full max-w-5xl mx-auto aspect-square flex items-center justify-center overflow-hidden">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }}
            />

            {/* Premium Illustration Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="relative w-full h-full p-4 md:p-8 flex items-center justify-center"
            >
                <div className="relative w-full aspect-square max-w-[800px]">
                    {/* The Image (Enforced square to match coordinate grid) */}
                    <Image
                        src="/images/bundle-system.png"
                        alt="Seamless Integration Diagram"
                        fill
                        className="object-contain filter contrast-[1.1] brightness-110 drop-shadow-[0_0_50px_rgba(127,255,0,0.05)] mix-blend-lighten pointer-events-none"
                        priority
                    />

                    {/* Animated atmospheric glows */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-[28%] left-[30%] w-24 h-24 bg-primary/15 rounded-full blur-[50px] animate-pulse" />
                        <div className="absolute top-[28%] right-[30%] w-24 h-24 bg-accent/15 rounded-full blur-[50px] animate-pulse" />
                    </div>

                    {/* The Animation Layer */}
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 z-10 pointer-events-none"
                    />
                </div>
            </motion.div>

            {/* Overlay Title */}
            <div className="absolute top-10 inset-x-0 text-center pointer-events-none">
                <span className="text-white/30 font-heading tracking-[15px] text-[10px] md:text-sm uppercase font-bold">
                    Seamless System Integration
                </span>
            </div>
        </div>
    );
};

export default SeamlessIntegrationDiagram;
