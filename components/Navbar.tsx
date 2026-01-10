import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const [navItems, setNavItems] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNav = async () => {
            try {
                const res = await fetch('/api/navbar/items');
                if (res.ok) {
                    const data = await res.json();
                    setNavItems(data);
                }
            } catch (error) {
                console.error('Failed to fetch navbar:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchNav();
    }, []);

    // Fallback if API fails or is loading
    const displayItems = navItems.length > 0 ? navItems : [
        { label: "WHY MAGRI CABINETS?", href: "/why-magri-cabinets" },
        { label: "OUR INSTALLATIONS", href: "/our-installations", hasDropdown: true, dropdownItems: [] },
        { label: "PROJECTS", href: "/projects" },
        { label: "BLOGS", href: "/blogs" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative w-14 h-14 flex items-center justify-center bg-gray-50 rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-inner">
                            <Image
                                src="/Magri-Cabinets-removebg-preview.png"
                                alt="Magri Cabinets Logo"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-gray-900 font-extrabold text-xl tracking-tight font-outfit uppercase">Magri Cabinets</span>
                            <p className="text-orange-500 text-[10px] font-black uppercase tracking-[0.2em]">Melbourne Cabinet Makers</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {displayItems.map((item) => (
                            item.hasDropdown ? (
                                <div
                                    key={item.href}
                                    className="relative h-20 flex items-center"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    <button
                                        className={`flex items-center px-4 py-2 text-xs font-black tracking-widest transition-all duration-300 rounded-xl ${isDropdownOpen ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'}`}
                                    >
                                        {item.label}
                                        <ChevronDown className={`ml-1.5 w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {/* Dropdown Menu */}
                                    <div
                                        className={`absolute top-[80%] left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 z-50 ${isDropdownOpen
                                            ? 'opacity-100 visible translate-y-0'
                                            : 'opacity-0 invisible -translate-y-4 shadow-none'
                                            }`}
                                    >
                                        <div className="p-3 grid gap-1">
                                            {(item.dropdownItems || []).map((dropdownItem: any, index: number) => (
                                                <Link
                                                    key={dropdownItem.href}
                                                    href={dropdownItem.href}
                                                    className="flex items-center px-4 py-3 text-[11px] font-bold text-gray-500 hover:text-orange-600 hover:bg-orange-50/50 rounded-xl transition-all duration-200 group"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-200 mr-3 group-hover:bg-orange-500 transition-colors" />
                                                    {dropdownItem.label}
                                                </Link>
                                            ))}
                                            {item.dropdownItems?.length === 0 && (
                                                <p className="px-4 py-3 text-[10px] text-gray-400 italic">No services listed</p>
                                            )}
                                        </div>
                                        <div className="h-1.5 bg-gradient-to-r from-orange-400 to-orange-600" />
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-4 py-2 text-xs font-black tracking-widest text-gray-600 hover:text-orange-500 hover:bg-gray-50 rounded-xl transition-all duration-300"
                                >
                                    {item.label}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Desktop CTA & Phone */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a
                            href="tel:0481132920"
                            className="flex flex-col items-end group"
                        >
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-orange-500 transition-colors">Call Experts</span>
                            <span className="text-sm font-black text-gray-900 group-hover:text-orange-600 transition-colors">0481 132 920</span>
                        </a>
                        <Link href="/get-a-custom-quote">
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 h-12 rounded-2xl shadow-xl shadow-orange-500/20 active:scale-95 transition-all duration-300 tracking-[0.1em] text-[10px] uppercase">
                                Get Free Quote
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Actions */}
                    <div className="flex items-center gap-3 lg:hidden">
                        <a
                            href="tel:0481132920"
                            className="w-11 h-11 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all shadow-sm"
                            aria-label="Call us"
                        >
                            <Phone className="w-5 h-5" />
                        </a>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`w-11 h-11 flex items-center justify-center rounded-xl transition-all ${isMenuOpen ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-600'}`}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-500 ease-in-out border-t border-gray-100 ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-8"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-8 space-y-4">
                    {displayItems.map((item) => (
                        item.hasDropdown ? (
                            <div key={item.href} className="space-y-2">
                                <button
                                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                                    className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all font-black text-xs uppercase tracking-widest ${isMobileDropdownOpen ? 'bg-orange-50 text-orange-600' : 'bg-gray-50 text-gray-700'}`}
                                >
                                    {item.label}
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <div className={`overflow-hidden transition-all duration-500 ${isMobileDropdownOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="grid gap-2 pl-4 pt-2">
                                        {(item.dropdownItems || []).map((dropdownItem: any) => (
                                            <Link
                                                key={dropdownItem.href}
                                                href={dropdownItem.href}
                                                onClick={() => { setIsMenuOpen(false); setIsMobileDropdownOpen(false); }}
                                                className="block px-5 py-3.5 text-[11px] font-bold text-gray-500 hover:text-orange-600 hover:bg-orange-50 border-l-2 border-transparent hover:border-orange-500 transition-all"
                                            >
                                                {dropdownItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-5 py-4 bg-gray-50 hover:bg-orange-50 text-gray-700 hover:text-orange-600 rounded-2xl transition-all font-black text-xs uppercase tracking-widest"
                            >
                                {item.label}
                            </Link>
                        )
                    ))}

                    <div className="pt-6 mt-6 border-t border-gray-100 space-y-4">
                        <Link href="/get-a-custom-quote" onClick={() => setIsMenuOpen(false)}>
                            <Button className="w-full bg-orange-500 h-14 rounded-2xl text-white font-black uppercase tracking-widest text-[11px] shadow-xl shadow-orange-500/20">
                                Get Free Quote
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

