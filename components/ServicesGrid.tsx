import Link from "next/link";
import { ArrowRight, Bath, ChefHat, Shirt, Tv, Armchair } from "lucide-react";
import { services } from "@/data";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    Bath,
    ChefHat,
    Shirt,
    Tv,
    Armchair,
};

export default function ServicesGrid() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-4">
                        Our Services
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Premium Custom Cabinetry
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        From kitchen renovations to bespoke furniture, we craft beautiful, functional pieces
                        that transform your home.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.iconName] || Bath;

                        return (
                            <Link key={service.id} href={service.href} className="group">
                                <Card
                                    className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <CardContent className="p-8">
                                        {/* Icon */}
                                        <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* Link */}
                                        <div className="flex items-center text-gray-900 font-semibold group-hover:text-amber-600 transition-colors">
                                            <span>Learn More</span>
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                        </div>

                                        {/* Decorative Element */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-amber-500/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <Link
                        href="/contact"
                        className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                        Get Your FREE Quote
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
