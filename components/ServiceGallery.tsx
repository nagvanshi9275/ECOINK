import Image from "next/image";
import { Card } from "@/components/ui/card";

interface ServiceGalleryProps {
    images: string[];
}

export default function ServiceGallery({ images }: ServiceGalleryProps) {
    if (!images || images.length === 0) return null;

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header if needed, but user said 'No text in this section' */}

                {/* Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {images.map((imgSrc, index) => (
                        <Card
                            key={index}
                            className="group relative border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-100 aspect-[4/3]"
                        >
                            <Image
                                src={imgSrc}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
