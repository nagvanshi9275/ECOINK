"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface AnimatedBackgroundProps {
    color?: string;
    particleCount?: number;
    speed?: number;
    lineOpacity?: number;
    particleSize?: number;
    backgroundColor?: string;
}

const AnimatedBackground = ({
    color = "#00ff00", // Neon Gre
    particleCount = 80,
    speed = 1.2,
    lineOpacity = 0.5,
    particleSize = 2,
    backgroundColor = "#000000",
}: AnimatedBackgroundProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || prefersReducedMotion) return;

        const ctx = canvas.getContext("2d", { alpha: false }); // Optimization: no alpha channel for background
        if (!ctx) return;

        let width: number;
        let height: number;
        let animationFrameId: number;
        let particles: Particle[] = [];

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * speed;
                this.vy = (Math.random() - 0.5) * speed;
                this.size = Math.random() * particleSize + 1.5;
                this.opacity = Math.random() * 0.5 + 0.5;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Wrap around edges dynamically
                if (this.x < -10) this.x = width + 10;
                if (this.x > width + 10) this.x = -10;
                if (this.y < -10) this.y = height + 10;
                if (this.y > height + 10) this.y = -10;

                // Subtle mouse interaction (paralax/repulsion)
                const dx = mouseRef.current.x - this.x;
                const dy = mouseRef.current.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150) {
                    const force = (150 - distance) / 3000;
                    this.vx -= dx * force;
                    this.vy -= dy * force;
                }

                // Keep velocity within reasonable bounds for smooth motion
                const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                const maxSpeed = speed * 1.5;
                if (currentSpeed > maxSpeed) {
                    this.vx = (this.vx / currentSpeed) * maxSpeed;
                    this.vy = (this.vy / currentSpeed) * maxSpeed;
                }
            }

            draw() {
                if (!ctx) return;

                // Draw main particle
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.globalAlpha = this.opacity;
                ctx.fill();

                // Particle Glow
                ctx.shadowBlur = 8;
                ctx.shadowColor = color;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

            // Responsive particle count
            const count = width < 768 ? Math.floor(particleCount * 0.4) : particleCount;

            particles = [];
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const drawLines = () => {
            if (!ctx) return;
            const connectionDistance = 160;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        // Calculate opacity based on distance
                        const alpha = (1 - dist / connectionDistance) * lineOpacity;

                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);

                        // Draw glowing line
                        ctx.strokeStyle = color;
                        ctx.globalAlpha = alpha;
                        ctx.lineWidth = 1.2;
                        ctx.stroke();

                        // Optional additional glow pass for lines if performance allows
                        // Removed for maximum 60fps stability on all devices
                    }
                }
            }
        };

        const animate = () => {
            if (document.visibilityState !== "visible") {
                animationFrameId = requestAnimationFrame(animate);
                return;
            }

            // Draw background
            ctx.globalAlpha = 1.0;
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, width, height);

            // Add a very subtle gradient for center focus
            const grad = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
            grad.addColorStop(0, "rgba(0, 255, 0, 0.03)");
            grad.addColorStop(1, "transparent");
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, width, height);

            particles.forEach((p) => {
                p.update();
                p.draw();
            });

            drawLines();

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleResize = () => {
            init();
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        init();
        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [color, particleCount, speed, lineOpacity, particleSize, backgroundColor, prefersReducedMotion]);

    if (prefersReducedMotion) {
        return <div className="absolute inset-0 z-0 bg-black" />;
    }

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none w-full h-full"
            style={{ filter: "brightness(1.2) contrast(1.1)" }}
        />
    );
};

export default AnimatedBackground;
