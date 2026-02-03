"use client";

import { useEffect, useRef } from "react";

const VoiceWave = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width;
        let height = canvas.height;
        let animationId: number;
        let time = 0;

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
                width = canvas.width;
                height = canvas.height;
            }
        };

        const drawWave = (yOffset: number, amplitude: number, frequency: number, phase: number, color: string) => {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = color;

            for (let x = 0; x < width; x++) {
                const y = Math.sin(x * frequency + time + phase) * amplitude * Math.sin(time * 0.5) + yOffset;
                // Add complex modulation
                const modulation = Math.sin(x * 0.01 + time) * 0.5 + 0.5;
                const yFinal = y * modulation;

                if (x === 0) ctx.moveTo(x, yFinal + height / 2);
                else ctx.lineTo(x, yFinal + height / 2);
            }
            ctx.stroke();
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            time += 0.05;

            // Draw multiple waves
            // Teal/Green accents
            drawWave(0, 50, 0.01, 0, "rgba(34, 197, 94, 0.5)"); // Green
            drawWave(0, 40, 0.02, 2, "rgba(0, 255, 204, 0.5)"); // Teal
            drawWave(0, 60, 0.015, 4, "rgba(59, 130, 246, 0.3)"); // Blue

            // Center glow line
            ctx.beginPath();
            ctx.moveTo(0, height / 2);
            ctx.lineTo(width, height / 2);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
            ctx.stroke();

            animationId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-60" />;
};

export default VoiceWave;
