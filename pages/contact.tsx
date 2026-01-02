import Head from "next/head";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us | Magri Cabinets Melbourne | Free Consultation</title>
                <meta
                    name="description"
                    content="Contact Melbourne's trusted cabinet makers for a free consultation and quote. Custom kitchens, bathrooms, wardrobes & furniture. Call 0412 345 678 or fill out our form."
                />
                <meta name="keywords" content="contact magri cabinets, free quote melbourne, cabinet maker consultation, custom cabinets quote" />
                <link rel="canonical" href="https://magricabinets.com.au/contact" />
            </Head>

            {/* Hero Section */}
            <Hero
                title="Get In Touch"
                subtitle="Ready to start your project? Contact us for a free, no-obligation consultation and quote."
                ctaText="Call Now"
                ctaLink="tel:0412345678"
            />

            {/* Contact Content */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-6">
                                Send a Message
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Request Your Free Quote
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Fill out the form below and we'll get back to you within 24 hours with
                                a free, no-obligation quote for your project.
                            </p>

                            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                                <ContactForm />
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-6">
                                Contact Details
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Let's Talk
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Prefer to speak directly? Give us a call or visit our showroom to see
                                our craftsmanship in person.
                            </p>

                            {/* Contact Cards */}
                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl p-6 shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-gray-900" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                                            <a href="tel:0412345678" className="text-gray-300 hover:text-amber-400 transition-colors text-lg">
                                                0412 345 678
                                            </a>
                                            <p className="text-gray-400 text-sm mt-1">
                                                Available during business hours
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl p-6 shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-gray-900" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                                            <a href="mailto:info@magricabinets.com.au" className="text-gray-300 hover:text-amber-400 transition-colors">
                                                info@magricabinets.com.au
                                            </a>
                                            <p className="text-gray-400 text-sm mt-1">
                                                We respond within 24 hours
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl p-6 shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-gray-900" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">Showroom</h3>
                                            <p className="text-gray-300">
                                                10 Dakota Ct<br />
                                                Tullamarine VIC 3043
                                            </p>
                                            <p className="text-gray-400 text-sm mt-1">
                                                Visit by appointment
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl p-6 shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6 text-gray-900" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">Business Hours</h3>
                                            <div className="text-gray-300 space-y-1">
                                                <p>Monday - Friday: 7:30am - 4:30pm</p>
                                                <p>Saturday: 9am - 1pm</p>
                                                <p>Sunday: Closed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Live Google Map */}
                            <div className="mt-8 overflow-hidden rounded-2xl shadow-xl h-[400px] border border-gray-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.2258856009794!2d144.8767192!3d-37.6908938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65bd4c14335cd%3A0x6fd4c70c1f398e28!2s10%20Dakota%20Ct%2C%20Tullamarine%20VIC%203043%2C%20Australia!5e0!3m2!1sen!2sin!4v1767349287477!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-4">
                        Service Areas
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Serving All of Melbourne
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                        We provide free in-home consultations throughout Melbourne and surrounding suburbs.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[
                            "CBD",
                            "Eastern Suburbs",
                            "South East",
                            "Northern Suburbs",
                            "Western Suburbs",
                            "Bayside",
                            "Mornington Peninsula",
                            "Yarra Valley",
                            "Dandenong Ranges",
                            "Geelong",
                            "Frankston",
                            "Doncaster",
                        ].map((area) => (
                            <div
                                key={area}
                                className="bg-white px-4 py-3 rounded-xl shadow-sm text-gray-700 font-medium"
                            >
                                {area}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
