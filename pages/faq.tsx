import Head from "next/head";
import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";

export default function FAQ() {
    return (
        <>
            <Head>
                <title>FAQ | Frequently Asked Questions | Magri Cabinets Melbourne</title>
                <meta
                    name="description"
                    content="Find answers to common questions about custom cabinetry, timelines, materials, warranties, and our process. Melbourne's trusted cabinet makers since 1993."
                />
                <meta name="keywords" content="cabinet maker faq, custom cabinets questions, kitchen renovation faq, melbourne joinery faq" />
                <link rel="canonical" href="https://magricabinets.com.au/faq" />
            </Head>

            {/* Hero Section */}
            <Hero
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about working with Melbourne's trusted cabinet makers. Can't find what you're looking for? Contact us directly."
                ctaText="Contact Us"
                ctaLink="/contact"
            />

            {/* FAQ Content */}
            <FAQAccordion />
        </>
    );
}
