import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Hero from "@/components/Hero";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects as staticProjects } from "@/data";
import Testimonials from "@/components/Testimonials";
import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";
import MetaHead from "@/components/seo/MetaHead";
import StructuredData from "@/components/seo/StructuredData";

// Installation Types Data - Mapped to available public images
const staticInstallations = [
  {
    id: "tv-cabinets",
    title: "TV Cabinets",
    description: "Custom entertainment units designed for modern living",
    href: "/tv-cabinets",
    image: "/Tvcabinets/IMG_2482.jpg",
  },
  {
    id: "wardrobes",
    title: "Wardrobes",
    description: "Walk-in and built-in wardrobes with smart storage",
    href: "/wardrobes",
    image: "/wardrobe/wardrobe-2.png",
  },
  {
    id: "furniture",
    title: "Furniture",
    description: "Unique handcrafted furniture for every room",
    href: "/furniture",
    image: "/Furniture/IMG_0384.jpg",
  },
  {
    id: "kitchen-cabinets",
    title: "Kitchen Cabinets",
    description: "Bespoke kitchen cabinetry tailored to your lifestyle",
    href: "/kitchen-cabinets",
    image: "/kitchen/IMG_3227.jpg",
  },
  {
    id: "laundry-cabinets",
    title: "Laundry Cabinets",
    description: "Efficient and stylish laundry storage solutions",
    href: "/laundry-cabinets",
    image: "/Laundry/laundry2.png",
  },
  {
    id: "bathroom-vanities",
    title: "Bathroom Vanities",
    description: "Transform your bathroom into a luxurious retreat",
    href: "/bathroom-vanities",
    image: "/IMG_2263.jpg",
  },
];

// Why Choose Us Features
const features = [
  {
    image: "/Quality_Joinery_Across_Melbourne-removebg-preview.png",
    title: "Quality Joinery",
    description: "Premium materials and expert craftsmanship delivering quality joinery across Melbourne.",
  },
  {
    image: "/Over_10_Years_Experience-removebg-preview.png",
    title: "10+ Years Experience",
    description: "Over a decade of transforming Melbourne homes with custom cabinetry solutions.",
  },
  {
    image: "/Family_Owned___Operated_since_2018-removebg-preview.png",
    title: "Family Owned",
    description: "Family owned and operated since 2018, ensuring personalized customer service.",
  },
];

interface HomeProps {
  heroes: any[];
  services: any[];
  projects: any[];
  seoSettings: any;
  homeSeo: any;
}

export default function Home({ heroes, services, projects, seoSettings, homeSeo }: HomeProps) {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <>
      <MetaHead data={homeSeo} settings={seoSettings} />
      <StructuredData data={seoSettings} type="LocalBusiness" />
      <StructuredData data={seoSettings} type="Organization" />

      <Hero
        services={heroes}
      />

      {/* 2️⃣ What We Do Section (Services) */}
      <section id="services" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 text-sm font-bold rounded-full mb-4 uppercase tracking-widest">
                Expertise & Craftsmanship
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Our Custom <span className="text-orange-500">Service</span> Solutions
              </h2>
            </div>
            <Link href="/our-installations" className="group flex items-center gap-2 text-orange-600 font-bold hover:gap-4 transition-all duration-300">
              View All Installations <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staticInstallations.map((item) => {
              // Extract original images used in Hero and Gallery to ensure this one is DIFFERENT
              const heroImages = ["/kitchen/IMG_3226.jpg", "/bathromr.jpg", "/wardrobe/wardrobe-1.png", "/Tvcabinets/IMG_1347.jpg", "/Laundry/laundry1.png", "/Furniture/IMG_2073.jpg"];
              const galleryImages = ["/Tvcabinets/IMG_2482.jpg", "/wardrobe/wardrobe-2.png", "/Furniture/IMG_0384.jpg", "/kitchen/IMG_3227.jpg", "/Laundry/laundry2.png", "/toliet.jpg"];

              const serviceSpecificImages: Record<string, string> = {
                "tv-cabinets": "/Tvcabinets/IMG_2483.jpg",
                "wardrobes": "/wardrobe/wardrobe-3.png",
                "furniture": "/Furniture/Side Bed Table.jpg",
                "kitchen-cabinets": "/kitchen/IMG_1392.jpg",
                "laundry-cabinets": "/Laundry/laundry3.png",
                "bathroom-vanities": "/toliet.jpg"
              };

              const uniqueImage = serviceSpecificImages[item.id] || item.image;

              return (
                <Link key={item.id} href={item.href} className="group cursor-pointer">
                  <div className="relative h-96 rounded-3xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                    <Image
                      src={uniqueImage}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                    <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                      <h3 className="text-2xl font-bold mb-3 transform group-hover:-translate-y-2 transition-transform duration-500">{item.title}</h3>
                      <p className="text-gray-200 text-sm mb-6 line-clamp-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        {item.description}
                      </p>
                      <div className="flex items-center text-orange-400 font-bold group-hover:gap-3 transition-all duration-300">
                        Learn More <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3️⃣ Why Choose Us Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-50 -ml-32 -mb-32" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-primary">
              Why Magri <span className="text-orange-500 font-bold">Cabinets?</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Beyond craftsmanship, we believe in building relationships through trust,
              quality, and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 sm:p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group"
              >
                <div className="w-24 h-24 mb-8 relative group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-orange-100 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform" />
                  <div className="relative p-4 bg-white rounded-3xl shadow-sm h-full flex items-center justify-center">
                    <img src={feature.image} alt={feature.title} className="w-16 h-16 object-contain" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Latest Projects Section - The SHOWCASE */}
      <section id="projects" className="py-24 bg-white pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 text-sm font-bold rounded-full mb-4 uppercase tracking-widest">
                Portfolio Showcase
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Project <span className="text-orange-500 italic">Gallery</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group aspect-[4/3] relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={service.image}
                  alt={service.title || "Service Image"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-100" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                    {service.title.split(' in ')[0].split(' – ')[0].replace(' Melbourne', '')}
                  </h3>
                  <div className="w-12 h-1 bg-orange-500 rounded-full transform origin-left transition-all duration-300 scale-x-50 group-hover:scale-x-100 group-hover:-translate-y-2" />
                </div>
              </Link>
            ))}
          </div>



        </div>
      </section >

      {/* Project Image Modal */}
      {
        selectedProject && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all duration-300 z-50"
              aria-label="Close modal"
            >
              <X className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            <div
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video sm:aspect-[16/10] max-h-[80vh] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              <div className="mt-6 text-center text-white max-w-2xl">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        )
      }

      {/* 6️⃣ Reviews / Testimonials Section */}
      <Testimonials />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const heroes = await prisma.heroBanner.findMany({
      orderBy: { order: 'asc' },
    });

    const dbServices = await prisma.service.findMany({
      where: { isVisible: true },
      orderBy: { order: 'asc' },
      take: 6
    });

    const dbProjects = await prisma.project.findMany({
      where: { isVisible: true },
      orderBy: { createdAt: 'desc' },
      take: 8
    });

    // Process Services
    let services = dbServices.map(s => ({
      id: s.id,
      title: s.name,
      description: s.description,
      href: staticInstallations.find(si => si.id === s.slug) ? staticInstallations.find(si => si.id === s.slug)!.href : `/${s.slug}`,
      image: s.image || "/placeholder.jpg"
    }));

    if (services.length === 0) {
      services = staticInstallations;
    }

    // Process Projects
    let projects = dbProjects.map(p => ({
      id: p.slug,
      title: p.title,
      description: p.description,
      location: p.location || "Melbourne",
      image: (p as any).thumbnailImage || (p.images && p.images.length > 0 ? p.images[0] : "/placeholder.jpg"),
    }));

    if (projects.length === 0) {
      projects = staticProjects.slice(0, 8);
    }

    // Fetch SEO Settings
    const [seoSettings, homePage] = await Promise.all([
      prisma.seoSettings.findFirst({ where: { id: 1 } }),
      prisma.page.findUnique({ where: { slug: 'home' } })
    ]);

    return {
      props: {
        heroes: JSON.parse(JSON.stringify(heroes)),
        services: JSON.parse(JSON.stringify(services)),
        projects: JSON.parse(JSON.stringify(projects)),
        seoSettings: JSON.parse(JSON.stringify(seoSettings)),
        homeSeo: homePage ? JSON.parse(JSON.stringify(homePage)) : { title: 'Home' }
      }
    };
  } catch (e) {
    console.error("Error in Home getServerSideProps:", e);
    return {
      props: {
        heroes: [],
        services: staticInstallations,
        projects: staticProjects.slice(0, 8),
        seoSettings: null,
        homeSeo: { title: 'Home' }
      }
    };
  }
};
