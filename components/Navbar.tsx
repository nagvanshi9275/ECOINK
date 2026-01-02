import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const installationDropdownItems = [
    { label: "Bathroom Cabinets", href: "/our-installations/bathroom-cabinets" },
    { label: "Kitchen Cabinets", href: "/our-installations/kitchen-cabinets" },
    { label: "Laundry Cabinets", href: "/our-installations/laundry-cabinets" },
    { label: "TV Cabinets", href: "/our-installations/tv-cabinets" },
    { label: "Wardrobe", href: "/our-installations/wardrobe" },
    { label: "Furniture", href: "/our-installations/furniture" },
];

const navItems = [
    { label: "WHY MAGRI CABINETS?", href: "/why-magri-cabinets" },
    { label: "OUR INSTALLATIONS", href: "/our-installations", hasDropdown: true },
    { label: "PROJECTS", href: "/projects" },
    { label: "BLOGS", href: "/blogs" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="relative w-16 h-16 flex items-center justify-center">
                            <Image
                                src="/Magri-Cabinets-removebg-preview.png"
                                alt="Magri Cabinets Logo"
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-gray-900 font-bold text-xl tracking-tight">Magri Cabinets</span>
                            <p className="text-gray-500 text-xs">Melbourne Cabinet Makers</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            item.hasDropdown ? (
                                <div
                                    key={item.href}
                                    className="relative"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    <Link
                                        href={item.href}
                                        className="flex items-center px-3 py-2 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
                                    >
                                        {item.label}
                                        <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </Link>

                                    {/* Dropdown Menu */}
                                    <div
                                        className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${isDropdownOpen
                                            ? 'opacity-100 visible translate-y-0'
                                            : 'opacity-0 invisible -translate-y-2'
                                            }`}
                                    >
                                        <div className="py-2">
                                            {installationDropdownItems.map((dropdownItem, index) => (
                                                <Link
                                                    key={dropdownItem.href}
                                                    href={dropdownItem.href}
                                                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200"
                                                    style={{ animationDelay: `${index * 50}ms` }}
                                                >
                                                    {dropdownItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                        {/* Dropdown accent bar */}
                                        <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
                                >
                                    {item.label}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Desktop CTA & Phone */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="tel:0481132920"
                            className="flex items-center text-gray-700 hover:text-orange-500 transition-colors group"
                        >
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-2 group-hover:bg-orange-500 transition-colors">
                                <Phone className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-sm font-semibold">0481 132 920</span>
                        </a>
                        <Link href="/get-a-custom-quote">
                            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:shadow-orange-500/25 hover:shadow-xl transition-all duration-300">
                                GET A CUSTOM QUOTE
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Phone Icon & Menu Button */}
                    <div className="flex items-center gap-3 lg:hidden">
                        {/* Mobile Phone Icon - Only shows on mobile */}
                        <a
                            href="tel:0481132920"
                            className="md:hidden w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300"
                            aria-label="Call us"
                        >
                            <Phone className="w-5 h-5 text-white" />
                        </a>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
                    {navItems.map((item) => (
                        item.hasDropdown ? (
                            <div key={item.href}>
                                <button
                                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                                    className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
                                >
                                    {item.label}
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Mobile Dropdown */}
                                <div className={`overflow-hidden transition-all duration-300 ${isMobileDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pl-4 py-2 space-y-1">
                                        {installationDropdownItems.map((dropdownItem) => (
                                            <Link
                                                key={dropdownItem.href}
                                                href={dropdownItem.href}
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    setIsMobileDropdownOpen(false);
                                                }}
                                                className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
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
                                className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
                            >
                                {item.label}
                            </Link>
                        )
                    ))}
                    <div className="pt-4 border-t border-gray-100 space-y-3">
                        {/* Mobile Phone Display - Hidden on smallest screens where circle shows */}
                        <a
                            href="tel:0481132920"
                            className="hidden sm:flex md:hidden items-center justify-center text-gray-700 py-3"
                        >
                            <Phone className="w-5 h-5 text-orange-500 mr-2" />
                            <span className="font-semibold">0481 132 920</span>
                        </a>
                        <Link href="/get-a-custom-quote" onClick={() => setIsMenuOpen(false)}>
                            <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 rounded-lg shadow-lg">
                                GET A CUSTOM QUOTE
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
