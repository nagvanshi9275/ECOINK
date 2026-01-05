
import React from 'react';
import Hero from './Hero'; // Assuming you have a Hero component, or we can make a generic one
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface SectionProps {
    type: string;
    data: any;
}

const PageRenderer: React.FC<{ content: SectionProps[] }> = ({ content }) => {
    if (!content || !Array.isArray(content)) return null;

    return (
        <div className="flex flex-col gap-12">
            {content.map((section, index) => {
                switch (section.type) {
                    case 'hero':
                        return (
                            <div key={index} className="relative py-24 bg-gray-900 text-white text-center">
                                {section.data.image && (
                                    <Image
                                        src={section.data.image}
                                        alt="Hero"
                                        fill
                                        className="object-cover opacity-30"
                                    />
                                )}
                                <div className="relative z-10 max-w-4xl mx-auto px-4">
                                    <h1 className="text-5xl font-bold mb-6">{section.data.heading}</h1>
                                    <p className="text-xl text-gray-200 mb-8">{section.data.subheading}</p>
                                    {section.data.ctaLabel && (
                                        <Link href={section.data.ctaLink || '#'}>
                                            <Button className="bg-orange-500 hover:bg-orange-600">
                                                {section.data.ctaLabel}
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        );

                    case 'text':
                        return (
                            <div key={index} className="max-w-4xl mx-auto px-4 prose prose-lg">
                                <div dangerouslySetInnerHTML={{ __html: section.data.html }} />
                            </div>
                        );

                    case 'image-text':
                        return (
                            <div key={index} className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div className={`relative h-[400px] ${section.data.imagePosition === 'right' ? 'order-last' : ''}`}>
                                    {section.data.image && (
                                        <Image
                                            src={section.data.image}
                                            alt="Section Image"
                                            fill
                                            className="object-cover rounded-2xl shadow-xl"
                                        />
                                    )}
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">{section.data.heading}</h2>
                                    <div className="prose text-gray-600" dangerouslySetInnerHTML={{ __html: section.data.html }} />
                                </div>
                            </div>
                        );

                    default:
                        return <div key={index} className="text-center text-gray-400">Unsupported Section Type: {section.type}</div>;
                }
            })}
        </div>
    );
};

export default PageRenderer;
