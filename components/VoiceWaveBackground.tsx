"use client";

import { useEffect, useRef } from "react";

/**
 * VoiceWaveBackground - A high-fidelity, vibrant, colorful voice waveform visualization.
 * Designed to perfectly match the high-end Siri/audio visualization aesthetic.
 * 
 * Features:
 * - Full Rainbow Spectrum: Purple -> Blue -> Cyan -> Green -> Yellow.
 * - Thick, filled waves with semi-transparent layering.
 * - Digital Mesh/Grid Texture overlay.
 * - Dramatic 3D overlapping with variable amplitudes.
 * - Pure Canvas performance with screen-blend mode.
 */
const VoiceWaveBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let animationId: number;
        let time = 0;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
        };

        // Configuration for the vibrant rainbow spectrum waves
        const waves = [
            {
                color: 'rgba(255, 0, 255, 0.4)',    // Magenta/Purple (left focus)
                gradient: ['#ff00ff', '#8b00ff'],
                amplitude: 110,
                frequency: 0.004,
                phase: 0,
                speed: 0.012,
                blur: 35
            },
            {
                color: 'rgba(138, 43, 226, 0.4)',   // Blue-Purple
                gradient: ['#8a2be2', '#0066ff'],
                amplitude: 130,
                frequency: 0.0035,
                phase: Math.PI / 3,
                speed: 0.01,
                blur: 40
            },
            {
                color: 'rgba(0, 163, 255, 0.5)',    // Blue
                gradient: ['#00a3ff', '#00d4ff'],
                amplitude: 100,
                frequency: 0.005,
                phase: Math.PI / 2,
                speed: 0.014,
                blur: 30
            },
            {
                color: 'rgba(0, 255, 255, 0.5)',    // Cyan (middle focus)
                gradient: ['#00ffff', '#00ffaa'],
                amplitude: 140,
                frequency: 0.0045,
                phase: Math.PI,
                speed: 0.015,
                blur: 45
            },
            {
                color: 'rgba(0, 255, 170, 0.4)',    // Aqua-Green
                gradient: ['#00ffaa', '#7fff00'],
                amplitude: 120,
                frequency: 0.0055,
                phase: Math.PI * 1.5,
                speed: 0.013,
                blur: 35
            },
            {
                color: 'rgba(127, 255, 0, 0.4)',    // Yellow-Green (right focus)
                gradient: ['#7fff00', '#ccff00'],
                amplitude: 115,
                frequency: 0.0048,
                phase: Math.PI * 0.5,
                speed: 0.016,
                blur: 30
            }
        ];

        const drawWave = (wave: any, offset: number) => {
            const centerY = height / 1.8;

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(0, centerY);

            // Using smaller step for smoother curves with high amplitude
            for (let x = 0; x <= width; x += 3) {
                // Combine primary wave with high-frequency harmonics for depth
                const waveY = Math.sin(x * wave.frequency + offset + wave.phase) * wave.amplitude;
                const harmonic = Math.sin(x * 0.015 + offset * 1.5) * 15;
                const breathing = Math.sin(offset * 0.4) * 25;

                // Tapering the wave at the edges so it doesn't just cut off
                const taper = Math.sin((x / width) * Math.PI);
                const y = centerY + (waveY + harmonic + breathing) * taper;

                ctx.lineTo(x, y);
            }

            // Define the horizontal gradient for the rainbow flow
            const horizontalGradient = ctx.createLinearGradient(0, 0, width, 0);
            horizontalGradient.addColorStop(0, wave.gradient[0]);
            horizontalGradient.addColorStop(1, wave.gradient[1]);

            // Fill logic (Area under the wave)
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();

            ctx.globalAlpha = 0.4;
            ctx.fillStyle = horizontalGradient;
            ctx.globalCompositeOperation = 'screen';
            ctx.fill();

            // Stroke/Outline logic with Glow
            ctx.beginPath();
            ctx.moveTo(0, centerY);
            for (let x = 0; x <= width; x += 3) {
                const taper = Math.sin((x / width) * Math.PI);
                const y = centerY + (Math.sin(x * wave.frequency + offset + wave.phase) * wave.amplitude + Math.sin(x * 0.015 + offset * 1.5) * 15 + Math.sin(offset * 0.4) * 25) * taper;
                ctx.lineTo(x, y);
            }

            ctx.globalAlpha = 1;
            ctx.strokeStyle = horizontalGradient;
            ctx.lineWidth = 3;

            // Add strong glow effect
            ctx.shadowBlur = wave.blur;
            ctx.shadowColor = wave.gradient[0];
            ctx.stroke();

            // Double stroke for extra density
            ctx.shadowBlur = wave.blur / 2;
            ctx.stroke();

            ctx.restore();
        };

        const animate = () => {
            // Background fill with deep gradient
            const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
            bgGrad.addColorStop(0, "#000000");
            bgGrad.addColorStop(1, "#00150a");
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, width, height);

            time += 0.01;

            waves.forEach((wave) => {
                drawWave(wave, time * 100 * wave.speed);
            });

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

    return (
        <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
            />

            {/* 1. MESH/GRID TEXTURE OVERLAY (Matches reference exactly) */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(
                            0deg,
                            transparent,
                            transparent 14px,
                            rgba(0, 255, 255, 0.2) 14px,
                            rgba(0, 255, 255, 0.2) 15px
                        ),
                        repeating-linear-gradient(
                            90deg,
                            transparent,
                            transparent 14px,
                            rgba(0, 255, 255, 0.2) 14px,
                            rgba(0, 255, 255, 0.2) 15px
                        )
                    `,
                    mixBlendMode: 'screen'
                }}
            />

            {/* 2. TOP/BOTTOM FADE VIGNETTE */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80 pointer-events-none" />

            {/* 3. RADIAL CENTER GLOW */}
            <div className="absolute inset-0 bg-radial-gradient from-accent/10 to-transparent opacity-30 pointer-events-none" />
        </div>
    );
};

export default VoiceWaveBackground;
