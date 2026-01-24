import type { Metadata } from 'next';
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: {
        default: 'EcoInk | AI-Powered Growth Engine',
        template: '%s | EcoInk',
    },
    description: "The AI-powered growth engine for service businesses. Combine Ads + Voice for predictable, automated growth.",
    icons: {
        icon: 'https://i.ibb.co/nqhJFpjw/Whats-App-Image-2026-01-24-at-5-03-49-AM-removebg-preview.png',
        apple: 'https://i.ibb.co/nqhJFpjw/Whats-App-Image-2026-01-24-at-5-03-49-AM-removebg-preview.png',
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
                    <main className="flex-1 pt-20 lg:pt-28">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
