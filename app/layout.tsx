import type { Metadata } from 'next';
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: {
        default: 'Magri Cabinets | Custom Cabinet Maker Melbourne',
        template: '%s | Magri Cabinets',
    },
    description: "Melbourne's trusted custom cabinet makers. Premium kitchen cabinets, bathroom vanities, wardrobes & custom furniture.",
    icons: {
        icon: '/Magri-Cabinets-removebg-preview.png',
        apple: '/Magri-Cabinets-removebg-preview.png',
    },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <main className="flex-1 pt-20">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
