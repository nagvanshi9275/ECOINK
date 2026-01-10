import Link from "next/link";
import Image from "next/image";

interface ServiceAdditionalContentProps {
    content: string; // HTML string or plain text
}

export default function ServiceAdditionalContent({ content }: ServiceAdditionalContentProps) {
    if (!content) return null;

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg prose-orange max-w-4xl mx-auto text-gray-600 font-sans leading-relaxed break-words text-center">
                    <style jsx global>{`
                        .prose h1, .prose h2, .prose h3 { color: #111827; font-weight: 800; margin-top: 1.5em; margin-bottom: 0.5em; line-height: 1.2; }
                        .prose p { margin-bottom: 1.5em; line-height: 1.8; }
                        .prose ul, .prose ol { margin-bottom: 1.5em; padding-left: 1.5em; text-align: left; }
                        .prose li { margin-bottom: 0.5em; }
                        .prose strong { color: #f97316; font-weight: 700; }
                        .prose img { border-radius: 1rem; margin: 2em auto; display:block; max-width: 100%; height: auto; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
                    `}</style>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>
        </section>
    );
}
