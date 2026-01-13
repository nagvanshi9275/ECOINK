import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceGalleryProps {
    images: string[];
}

export default function ServiceGallery({ images }: ServiceGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) >= images.length ? 0 : prev + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1) < 0 ? images.length - 1 : prev - 1);
    };

    return (
        <section className="relative w-full overflow-hidden bg-white py-6 px-0">
            {/* Image Slider */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 25}%)`,
                    display: 'flex',
                    width: '100%'
                }}
            >
                {/* We repeat the images array to ensure there's always something to show */}
                {[...images, ...images, ...images].map((imgSrc, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 aspect-[12/9] relative"
                    >
                        <Image
                            src={imgSrc}
                            alt="Project Gallery"
                            fill
                            priority={index < 4}
                            className="object-cover border-r border-white/5"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            quality={90}
                        />
                    </div>
                ))}
            </div>

            {/* ERROR-PROOF NAVIGATION AT ABSOLUTE EDGES */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-0 bottom-0 z-50 w-20 md:w-32 bg-transparent text-white flex items-center justify-center transition-all cursor-pointer"
                style={{ pointerEvents: 'auto' }}
            >
                <ChevronLeft size={64} strokeWidth={2.5} className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-0 bottom-0 z-50 w-20 md:w-32 bg-transparent text-white flex items-center justify-center transition-all cursor-pointer"
                style={{ pointerEvents: 'auto' }}
            >
                <ChevronRight size={64} strokeWidth={2.5} className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
            </button>

            <style jsx>{`
                @media (max-width: 639px) {
                    div { transform: translateX(-${currentIndex * 100}%) !important; }
                }
                @media (min-width: 640px) and (max-width: 1023px) {
                    div { transform: translateX(-${currentIndex * 50}%) !important; }
                }
            `}</style>
        </section>
    );
}
