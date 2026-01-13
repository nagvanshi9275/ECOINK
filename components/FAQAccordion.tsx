import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data";
import { HelpCircle } from "lucide-react";

interface FAQItem {
    id: string | number;
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items?: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
    const faqData = items && items.length > 0 ? items : faqItems;
    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-4">
                        FAQ
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our custom cabinetry services.
                        Can't find what you're looking for? Contact us directly.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <Accordion type="single" collapsible className="space-y-4">
                    {faqData.map((faq, index) => (
                        <AccordionItem
                            key={faq.id}
                            value={String(faq.id)}
                            className="bg-gray-50 rounded-xl border-0 px-6 data-[state=open]:bg-gradient-to-r data-[state=open]:from-gray-900 data-[state=open]:to-gray-800 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
                        >
                            <AccordionTrigger className="py-6 text-left text-lg font-semibold hover:no-underline group data-[state=open]:text-white">
                                <div className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                                        {index + 1}
                                    </span>
                                    <span className="text-gray-900 group-data-[state=open]:text-white transition-colors">
                                        {faq.question}
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-6 pl-12 text-gray-300 leading-relaxed">
                                <p className="text-base">{faq.answer}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Still Have Questions */}
                <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-center shadow-xl">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <HelpCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Still Have Questions?
                    </h3>
                    <p className="text-gray-300 mb-8 max-w-md mx-auto">
                        We're here to help. Contact our team for personalized answers to your
                        custom cabinetry questions.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
