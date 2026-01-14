import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

interface LayoutProps {
    children: ReactNode;
    pageProps?: any;
}

export default function Layout({ children, pageProps }: LayoutProps) {
    const router = useRouter();
    const isAdmin = router.pathname.startsWith('/admin');

    if (isAdmin) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-20 lg:pt-28">{children}</main>
            <Footer service={pageProps?.service} />
        </div>
    );
}
