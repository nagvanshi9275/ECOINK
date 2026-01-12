import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface UseCase {
    title: string;
    description: string;
    link: string;
}

interface IndustryUseCasesProps {
    backgroundImage: string;
    title: string;
    subtitle?: string;
    items: UseCase[];
}

export default function IndustryUseCases({ backgroundImage, title, subtitle, items }: IndustryUseCasesProps) {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Industry Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gray-900/90" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 underline-offset-8 decoration-orange-500">{title}</h2>
                    {subtitle && <p className="text-gray-300 text-lg max-w-2xl mx-auto">{subtitle}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 group hover:-translate-y-1">
                            <span className="text-orange-500 font-mono text-xl font-bold mb-4 block opacity-80">0{idx + 1}.</span>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">{item.description}</p>
                            <Link href={item.link} className="inline-flex items-center text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">
                                Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
