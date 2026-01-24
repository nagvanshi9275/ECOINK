import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Head from "next/head";

interface LayoutProps {
    children: ReactNode;
    pageProps?: any;
}

export default function Layout({ children, pageProps }: LayoutProps) {
    const router = useRouter();
    // Assuming no admin panel or keep it if needed, but safe to ignore for now.

    const isHome = router.pathname === "/";

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
            <Head>
                <title>EcoInk | AI-Powered Growth Engine</title>
                <meta name="description" content="Turn demand into booked jobs automatically." />
            </Head>
            <Navbar />
            {/* Remove top padding for home if we want hero to be behind nav, otherwise keep it. 
                For glassmorphism headers, usually we want content to go behind. 
                I will remove pt-20 and let specific pages handle top spacing or use a layout wrapper.
            */}
            <main className="flex-1 w-full max-w-[100vw] overflow-x-hidden">
                {children}
            </main>
            <Footer />
        </div>
    );
}
