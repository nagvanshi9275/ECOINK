"use client";

import React from "react";

/**
 * EcoInk Ads Icon - Stylized growth arrow + target motif
 * closely matching the reference imagery.
 */
export const AdsIcon = ({ color = "#7FFF00" }: { color?: string }) => (
    <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
    >
        <defs>
            <filter id="glow-ads" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>

        {/* Outer stylized circle/target */}
        <circle cx="50" cy="50" r="35" stroke={color} strokeWidth="1.5" opacity="0.2" />
        <circle cx="50" cy="50" r="20" stroke={color} strokeWidth="1" opacity="0.4" />

        {/* Main Growth Path */}
        <path
            d="M30 70C30 70 35 55 50 55C65 55 70 40 70 40M70 40H55M70 40V55"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow-ads)"
        />

        {/* Secondary Growth Path */}
        <path
            d="M40 70C40 70 45 60 55 60C65 60 75 50 75 50M75 50H65M75 50V60"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.6"
        />

        {/* Magnifying glass/Source element */}
        <circle cx="35" cy="65" r="8" stroke={color} strokeWidth="3" filter="url(#glow-ads)" />
    </svg>
);

/**
 * EcoInk Voice Icon - Handset + digital waveform motif
 */
export const VoiceIcon = ({ color = "#00ffcc" }: { color?: string }) => (
    <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
    >
        <defs>
            <filter id="glow-voice" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>

        {/* Phone Handset */}
        <path
            d="M35 30H42C44 30 45 31 46 33L49 42C50 44 49 46 47 47L42 50C45 56 50 61 56 64L59 59C60 57 62 56 64 57L73 60C75 61 76 62 76 64V71C76 73 74 76 71 76C48 76 30 58 30 35C30 32 32 30 35 30Z"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow-voice)"
        />

        {/* Waveform radiating from handset */}
        <path d="M55 35L55 45M63 30L63 50M71 35L71 45M79 40L79 40" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.4" />
        <path d="M55 40L80 40" stroke={color} strokeWidth="1" opacity="0.2" />

        {/* AI/Digital Dots */}
        <circle cx="63" cy="30" r="1.5" fill={color} filter="url(#glow-voice)" />
        <circle cx="71" cy="45" r="1.5" fill={color} filter="url(#glow-voice)" />
        <circle cx="55" cy="35" r="1" fill={color} />
    </svg>
);
