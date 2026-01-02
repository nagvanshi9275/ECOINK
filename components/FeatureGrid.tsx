import {
    Droplets,
    Gem,
    Volume2,
    Ruler,
    Shield,
    Package,
    Pencil,
    Cog,
    LayoutGrid,
    ArrowUp,
    Inbox,
    Shirt,
    Cable,
    Layers,
    HardDrive,
    BookOpen,
    DoorOpen,
    Home,
    PanelLeft,
    Star,
    Lightbulb,
    Utensils,
    Monitor,
    Maximize,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FeatureCard } from "@/types";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    Droplets,
    Gem,
    Volume2,
    Ruler,
    Shield,
    Package,
    Pencil,
    Cog,
    LayoutGrid,
    ArrowUp,
    Inbox,
    Shirt,
    Cable,
    Layers,
    HardDrive,
    BookOpen,
    DoorOpen,
    Home,
    PanelLeft,
    Star,
    Lightbulb,
    Utensils,
    Monitor,
    Maximize,
};

interface FeatureGridProps {
    features: FeatureCard[];
    title?: string;
    subtitle?: string;
}

export default function FeatureGrid({ features, title, subtitle }: FeatureGridProps) {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                {(title || subtitle) && (
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full mb-4">
                            Details
                        </span>
                        {title && (
                            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}

                {/* Features Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = iconMap[feature.iconName] || Shield;

                        // If image exists, render image card (Blog Style)
                        if (feature.image) {
                            return (
                                <Card
                                    key={feature.id}
                                    className="group relative h-auto border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl sm:rounded-3xl bg-white flex flex-col"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="relative h-32 sm:h-56 lg:h-64 overflow-hidden">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10">
                                            <div className="px-2 py-0.5 sm:px-3 sm:py-1 bg-orange-500/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg">
                                                {feature.title.split(' ')[0]}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-3 sm:p-6 flex flex-col flex-1">
                                        <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2 group-hover:text-orange-500 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[10px] sm:text-sm text-gray-500 leading-snug lg:leading-relaxed line-clamp-2 sm:line-clamp-none">
                                            {feature.description}
                                        </p>
                                    </div>
                                </Card>
                            );
                        }

                        // Fallback to Icon Card
                        return (
                            <Card
                                key={feature.id}
                                className="group bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full rounded-2xl sm:rounded-3xl"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CardContent className="p-4 sm:p-8 relative h-full flex flex-col">
                                    {/* Icon */}
                                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-orange-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-orange-500 transition-all duration-300">
                                        <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 text-orange-500 group-hover:text-white transition-colors" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-1 sm:mb-3 group-hover:text-orange-500 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[10px] sm:text-base text-gray-600 leading-snug sm:leading-relaxed flex-1">
                                        {feature.description}
                                    </p>

                                    {/* Decorative Element */}
                                    <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
