// Navigation Types
export interface NavItem {
  label: string;
  href: string;
}

// Service Card Types
export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  href: string;
  iconName: string;
}

// Feature Card Types
export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image?: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  image?: string;
  rating?: number;
  date?: string;
}

// FAQ Types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

// Hero Section Types
export interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

// Page SEO Types
export interface PageSEO {
  title: string;
  description: string;
  keywords?: string;
}
