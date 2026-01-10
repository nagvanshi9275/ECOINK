import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import StructuredData from './StructuredData';

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    const allItems = [
        { name: 'Home', url: '/' },
        ...items
    ];

    return (
        <nav className="flex items-center space-x-2 text-xs md:text-sm font-medium text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
            <StructuredData data={allItems} type="BreadcrumbList" />

            {allItems.map((item, index) => (
                <div key={item.url} className="flex items-center">
                    {index > 0 && <ChevronRight size={14} className="mx-2 text-gray-300 shrink-0" />}
                    {index === 0 ? (
                        <Link href="/" className="hover:text-orange-500 transition-colors flex items-center gap-1">
                            <Home size={14} />
                            <span className="hidden sm:inline">Home</span>
                        </Link>
                    ) : (
                        index === allItems.length - 1 ? (
                            <span className="text-gray-900 font-bold truncate max-w-[200px]">{item.name}</span>
                        ) : (
                            <Link href={item.url} className="hover:text-orange-500 transition-colors truncate max-w-[150px]">
                                {item.name}
                            </Link>
                        )
                    )}
                </div>
            ))}
        </nav>
    );
}
