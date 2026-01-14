import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TrustBadge {
    text: string;
}

interface ServiceCTAProps {
    title?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    badge?: string;
    phone?: string;
    trustBadges?: TrustBadge[];
}

const defaultTrustBadges: TrustBadge[] = [
    { text: "Free Quotes" },
    { text: "10-Year Warranty" },
    { text: "Melbourne Made" },
    { text: "Expert Craftsmanship" }
];

export default function ServiceCTA({
    title = "Ready to Start Your Project?",
    description = "Get in touch with our team for a free consultation and quote. We'll help bring your vision to life.",
    ctaText = "FREE Consultation",
    ctaLink = "/contact",
    badge = "Free Quote Available",
    phone = "0412 345 678",
    trustBadges,
}: ServiceCTAProps) {
    const validPhone = phone || "0412 345 678";
    const displayBadges = trustBadges && trustBadges.length > 0 ? trustBadges : defaultTrustBadges;
    const phoneHref = `tel:${validPhone.replace(/\s/g, '')}`;

    return (
        <section className="py-24 bg-gradient-to-br from-gray-600 via-gray-500 to-gray-600 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-400/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse" />
                    <span className="text-white/90 text-sm font-medium">{badge}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                    {title}
                </h2>
                <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
                    {description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href={ctaLink}>
                        <Button
                            size="lg"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-orange-500/25 hover:shadow-2xl transition-all duration-300 group"
                        >
                            {ctaText}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href={phoneHref}>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300"
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            {validPhone}
                        </Button>
                    </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-10 border-t border-white/10">
                    {displayBadges.map((badge, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-200">
                            <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm">{badge.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
