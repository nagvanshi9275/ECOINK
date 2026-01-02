import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import {
  ArrowRight,
  Shield,
  Award,
  Users,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data";
import Testimonials from "@/components/Testimonials";

// Installation Types Data - Mapped to available public images
const installations = [
  {
    id: "tv-cabinets",
    title: "TV Cabinets",
    description: "Custom entertainment units designed for modern living",
    href: "/tv-cabinets",
    image: "/library.jpg", // Using library image for cabinetry look
  },
  {
    id: "wardrobes",
    title: "Wardrobes",
    description: "Walk-in and built-in wardrobes with smart storage",
    href: "/wardrobes",
    image: "/bedroom1.jpg",
  },
  {
    id: "furniture",
    title: "Furniture",
    description: "Unique handcrafted furniture for every room",
    href: "/furniture",
    image: "/room.jpg",
  },
  {
    id: "kitchen-cabinets",
    title: "Kitchen Cabinets",
    description: "Bespoke kitchen cabinetry tailored to your lifestyle",
    href: "/kitchen-cabinets",
    image: "/kitchen1.jpg",
  },
  {
    id: "laundry-cabinets",
    title: "Laundry Cabinets",
    description: "Efficient and stylish laundry storage solutions",
    href: "/laundry-cabinets",
    image: "/room copy.jpg", // Using alternative room image
  },
  {
    id: "bathroom-vanities",
    title: "Bathroom Vanities",
    description: "Transform your bathroom into a luxurious retreat",
    href: "/bathroom-vanities",
    image: "/bathromr.jpg", // Note: keeping typo from filename
  },
];



// Why Choose Us Features
const features = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Premium materials and expert craftsmanship with 10-year warranty on all installations.",
  },
  {
    icon: Award,
    title: "30+ Years Experience",
    description: "Three decades of transforming Melbourne homes with custom cabinetry solutions.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Personalized service from design to installation, ensuring your complete satisfaction.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time with reliable scheduling and punctual project completion.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Magri Cabinets | Custom Cabinet Maker Melbourne | Kitchen, Bathroom & Wardrobes</title>
        <meta
          name="description"
          content="Melbourne's trusted custom cabinet makers. Premium kitchen cabinets, bathroom vanities, wardrobes & custom furniture. 30+ years experience. Free consultation. 10-year warranty."
        />
        <meta
          name="keywords"
          content="cabinet maker melbourne, custom cabinets, kitchen cabinets, bathroom vanities, wardrobes, custom furniture, melbourne joinery"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://magricabinets.com.au" />
        <meta property="og:title" content="Magri Cabinets | Custom Cabinet Maker Melbourne" />
        <meta property="og:description" content="Melbourne's trusted custom cabinet makers. Premium kitchen cabinets, bathroom vanities, wardrobes & custom furniture." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://magricabinets.com.au" />
      </Head>

      {/* 1️⃣ Hero Section */}
      <Hero />

      {/* 2️⃣ Why Magri Cabinets Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why <span className="text-orange-500">Magri Cabinets?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trust, quality, and craftsmanship that stands the test of time.
              We deliver exceptional results that transform your living spaces.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-orange-50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto bg-white border-2 border-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <IconComponent className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/why-magri-cabinets">
              <Button variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-xl transition-all duration-300">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3️⃣ Our Installations Section */}
      <section id="installations" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Installations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From kitchen renovations to bespoke furniture, we craft beautiful,
              functional pieces that transform your home.
            </p>
          </div>

          {/* Installation Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installations.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Background Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay - Hidden initially, shown on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content - Hidden initially, shown on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="w-12 h-1 bg-orange-500 mb-4 rounded-full" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center text-orange-400 font-bold uppercase tracking-wider text-sm group-hover:text-orange-300 transition-colors">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Maximise Your Living Space (CTA Section) */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/kitchen2.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Maximise Your <span className="text-orange-500">Living Space</span>
          </h2>
          <p className="text-xl sm:text-2xl text-orange-400 font-semibold mb-6">
            Magri Cabinets Custom Solutions for Every Room.
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Transform your living space with expert design & craftsmanship.
          </p>
          <Link href="/contact">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xl px-10 py-6 sm:px-12 sm:py-6 rounded-xl shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 transform hover:-translate-y-1 w-auto mx-auto">
              <span className="sm:hidden">Get a FREE Consultation!</span>
              <span className="hidden sm:inline">Click below for a FREE consultation!</span>
            </Button>
          </Link>
        </div>
      </section>

      {/* 5️⃣ Latest Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Latest <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our recent work and see how we&apos;ve transformed Melbourne homes
              with our premium custom cabinetry.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="block group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay - Hidden until hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Overlay Content - Hidden until hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-orange-400 text-sm font-bold uppercase tracking-wider mb-2">
                      {project.location}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md">
                      {project.title}
                    </h3>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white font-bold border-none shadow-lg">
                      View Project
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-16">
            <Link href="/#projects">
              <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-bold px-10 py-6 rounded-xl transition-all duration-300">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6️⃣ Reviews / Testimonials Section */}
      <Testimonials />
    </>
  );
}
