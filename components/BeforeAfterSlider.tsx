import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
    before: string;
    after: string;
}

export const BeforeAfterSlider = ({ before, after }: BeforeAfterSliderProps) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        let clientX;

        if ('touches' in event) {
            clientX = event.touches[0].clientX;
        } else {
            clientX = (event as MouseEvent).clientX;
        }

        const position = ((clientX - containerRect.left) / containerRect.width) * 100;
        setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    const handleMouseDown = () => setIsDragging(true);

    useEffect(() => {
        const handleGlobalMove = (e: MouseEvent | TouchEvent) => {
            if (isDragging) handleMove(e);
        };
        const handleGlobalUp = () => setIsDragging(false);

        window.addEventListener('mousemove', handleGlobalMove);
        window.addEventListener('touchmove', handleGlobalMove);
        window.addEventListener('mouseup', handleGlobalUp);
        window.addEventListener('touchend', handleGlobalUp);

        return () => {
            window.removeEventListener('mousemove', handleGlobalMove);
            window.removeEventListener('touchmove', handleGlobalMove);
            window.removeEventListener('mouseup', handleGlobalUp);
            window.removeEventListener('touchend', handleGlobalUp);
        };
    }, [isDragging]);

    return (
        <div ref={containerRef} className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl">
            {/* After Image (Base) */}
            <Image src={after} alt="After Renovation" fill className="object-cover" quality={100} />
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm z-10">AFTER</div>

            {/* Before Image (Overlay) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <div className="relative w-full h-full">
                    <Image src={before} alt="Before Renovation" fill className="object-cover" quality={100} />
                </div>
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm z-10">BEFORE</div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-orange-500">
                    <MoveHorizontal size={20} />
                </div>
            </div>
        </div>
    );
};
