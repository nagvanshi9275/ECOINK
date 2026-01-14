"use client";

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

                    // Filter out unwanted items or items we're manually placing
                    const filteredData = data.filter((item: any) =>
                        !["WHY MAGRI CABINETS?", "MAGRI CABINETS", "CONTACT"].includes(item.label)
                    );

                    // Explicitly define the order
                    const installations = filteredData.find((i: any) => i.label === "OUR INSTALLATIONS");
                    const projects = filteredData.find((i: any) => i.label === "PROJECTS");
                    const blogs = filteredData.find((i: any) => i.label === "BLOGS");

                    const finalItems = [
                        ...(installations ? [installations] : [{ label: "OUR INSTALLATIONS", href: "/our-installations", hasDropdown: true, dropdownItems: [] }]),
                        { label: "CUTTING & EDGING", href: "/cutting-edge-services" },
                        ...(projects ? [projects] : [{ label: "PROJECTS", href: "/projects" }]),
                        ...(blogs ? [blogs] : [{ label: "BLOGS", href: "/blogs" }]),
                        { label: "CONTACT", href: "/contact" }
                    ];

                    setNavItems(finalItems);
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
        { label: "OUR INSTALLATIONS", href: "/our-installations", hasDropdown: true, dropdownItems: [] },
        { label: "CUTTING & EDGING", href: "/cutting-edge-services" },
        { label: "PROJECTS", href: "/projects" },
        { label: "BLOGS", href: "/blogs" },
        { label: "CONTACT", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 lg:h-28">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative w-32 h-12 lg:w-48 lg:h-20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/Magri-Cabinets-removebg-preview.png"
                                alt="Magri Cabinets Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <div className="hidden sm:block">
                            {/* Text removed as per user request to show only logo */}
                        </div>
                    </Link>

                    {/* Desktop Navigation & Contact Group */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <div className="flex items-center space-x-1">
                            {displayItems.map((item) => (
                                item.hasDropdown ? (
                                    <div
                                        key={item.href}
                                        className="relative h-20 lg:h-28 flex items-center"
                                        onMouseEnter={() => setIsDropdownOpen(true)}
                                        onMouseLeave={() => setIsDropdownOpen(false)}
                                    >
                                        <button
                                            className={`flex items-center px-4 py-2 text-xs font-black tracking-widest transition-all duration-300 rounded-xl whitespace-nowrap ${isDropdownOpen ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'}`}
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
                                        className="px-4 py-2 text-xs font-black tracking-widest text-gray-600 hover:text-orange-500 hover:bg-gray-50 rounded-xl transition-all duration-300 whitespace-nowrap"
                                    >
                                        {item.label}
                                    </Link>
                                )
                            ))}
                        </div>

                        {/* Contact Number */}
                        <div className="flex items-center border-l border-gray-100 pl-8">
                            <a
                                href="tel:0481132920"
                                className="flex items-center gap-3 group"
                            >
                                <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Call Us</span>
                                    <span className="text-sm font-black text-gray-900 group-hover:text-orange-600 transition-colors leading-none tracking-tight">0481 132 920</span>
                                </div>
                            </a>
                        </div>
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

