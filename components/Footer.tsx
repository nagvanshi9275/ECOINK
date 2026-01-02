import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight } from "lucide-react";

const installationLinks = [
    { label: "TV Cabinets", href: "/tv-cabinets" },
    { label: "Wardrobes", href: "/wardrobes" },
    { label: "Furniture", href: "/furniture" },
    { label: "Kitchen Cabinets", href: "/kitchen-cabinets" },
    { label: "Laundry Cabinets", href: "/laundry-cabinets" },
    { label: "Bathroom Vanities", href: "/bathroom-vanities" },
];

const resourceLinks = [
    { label: "Blogs", href: "/blogs" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="bg-gray-700 text-white">
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                Ready to Transform Your Space?
                            </h3>
                            <p className="text-white/90 mt-2">
                                Get a free, no-obligation quote from Melbourne&apos;s trusted cabinet makers.
                            </p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center bg-white hover:bg-gray-100 text-orange-600 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            Get FREE Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info & Social */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="relative w-12 h-12 flex items-center justify-center">
                                <Image
                                    src="/Magri-Cabinets-removebg-preview.png"
                                    alt="Magri Cabinets Logo"
                                    width={48}
                                    height={48}
                                    className="object-contain" // Use object-contain to ensure logo fits well
                                />
                            </div>
                            <div>
                                <span className="text-white font-bold text-xl">Magri Cabinets</span>
                                <p className="text-gray-300 text-sm">Melbourne Cabinet Makers</p>
                            </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Premium custom cabinetry crafted in Melbourne for over 30 years. Quality materials,
                            expert craftsmanship, and exceptional service.
                        </p>
                        {/* Social Links */}
                        <div>
                            <h4 className="text-sm font-semibold text-orange-500 mb-4 uppercase tracking-wider">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 bg-gray-600 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 bg-gray-600 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Our Installations */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Our Installations</h4>
                        <ul className="space-y-3">
                            {installationLinks.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-300 hover:text-orange-500 transition-colors inline-flex items-center group"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 text-orange-500 transition-opacity" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
                        <ul className="space-y-3">
                            {resourceLinks.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-300 hover:text-orange-500 transition-colors inline-flex items-center group"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 text-orange-500 transition-opacity" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                                <span className="text-gray-300">
                                    10 Dakota Court<br />
                                    Tullamarine 3064<br />
                                    Melbourne
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <a href="tel:0481132920" className="text-gray-300 hover:text-orange-500 transition-colors font-medium">
                                    0481 132 920
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <a href="mailto:markmagricabs@gmail.com" className="text-gray-300 hover:text-orange-500 transition-colors break-all">
                                    markmagricabs@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                        <p className="text-gray-300 text-sm">
                            Copyright © Magri Cabinets 2025 | Designed & Optimised by{" "}
                            <a
                                href="https://doublebricksdigital.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-500 hover:text-orange-400 transition-colors"
                            >
                                Double Bricks Digital
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Local Business Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Magri Cabinets",
                        "description": "Premium custom cabinet makers in Melbourne offering kitchen cabinets, bathroom vanities, wardrobes, and custom furniture.",
                        "url": "https://magricabinets.com.au",
                        "telephone": "0481132920",
                        "email": "markmagricabs@gmail.com",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "10 Dakota Court",
                            "addressLocality": "Tullamarine",
                            "addressRegion": "VIC",
                            "postalCode": "3064",
                            "addressCountry": "AU"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": -37.7049,
                            "longitude": 144.8810
                        },
                        "sameAs": [],
                        "priceRange": "$$"
                    })
                }}
            />
        </footer>
    );
}
