"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/data";

interface TestimonialItem {
    id: string | number;
    author: string;
    role?: string;
    quote: string;
    rating?: number;
    image?: string;
    date?: string;
}

interface TestimonialsProps {
    items?: TestimonialItem[];
}

export default function Testimonials({ items }: TestimonialsProps) {
    const testimonialData = items && items.length > 0 ? items : testimonials;
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8; // Scroll 80% of width
            const target = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({
                left: target,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="py-24 bg-gray-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="text-left">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                                ))}
                            </div>
                            <span className="text-sm font-bold text-gray-900 tracking-wide uppercase">
                                Rated 4.9 on Google
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                            Trusted by <span className="text-orange-500">Melbourne</span> Homeowners
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                            Join hundreds of satisfied customers who have transformed their homes with our
                            premium custom cabinetry and bespoke designs.
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll("left")}
                            className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 shadow-sm"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 shadow-sm"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Testimonials Grid/Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {testimonialData.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="w-[300px] sm:w-[450px] flex-shrink-0 snap-start"
                        >
                            <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                                {/* Star Rating */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                                    ))}
                                </div>

                                {/* Quote Text */}
                                <blockquote className="text-gray-700 sm:text-lg leading-relaxed mb-8 flex-1 italic font-medium">
                                    "{testimonial.quote}"
                                </blockquote>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-orange-100 flex-shrink-0">
                                        {testimonial.image ? (
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.author}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-xl">
                                                {testimonial.author[0]}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <h4 className="font-bold text-gray-900 text-base sm:text-lg truncate">
                                                {testimonial.author}
                                            </h4>
                                            <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-50" />
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm gap-1">
                                            <span className="text-orange-600 font-semibold px-2 py-0.5 bg-orange-50 rounded-full text-[10px] sm:text-xs">
                                                {testimonial.role}
                                            </span>
                                            <span className="text-gray-400 text-[10px] sm:text-xs">
                                                {testimonial.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
}
