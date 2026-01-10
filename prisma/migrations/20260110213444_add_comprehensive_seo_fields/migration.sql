/*
  Warnings:

  - You are about to drop the column `schemaData` on the `BlogPost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BlogPost" DROP COLUMN "schemaData",
ADD COLUMN     "breadcrumbTitle" TEXT,
ADD COLUMN     "focusKeyphrase" TEXT,
ADD COLUMN     "lastSeoAudit" TIMESTAMP(3),
ADD COLUMN     "metaRobots" TEXT DEFAULT 'index,follow',
ADD COLUMN     "ogType" TEXT DEFAULT 'article',
ADD COLUMN     "readabilityScore" INTEGER DEFAULT 0,
ADD COLUMN     "schemaJson" JSONB,
ADD COLUMN     "schemaType" TEXT DEFAULT 'Article',
ADD COLUMN     "seoDescription" TEXT,
ADD COLUMN     "seoKeywords" TEXT,
ADD COLUMN     "seoScore" INTEGER DEFAULT 0,
ADD COLUMN     "seoTitle" TEXT,
ADD COLUMN     "twitterCard" TEXT DEFAULT 'summary_large_image',
ADD COLUMN     "twitterDescription" TEXT,
ADD COLUMN     "twitterImage" TEXT,
ADD COLUMN     "twitterTitle" TEXT;

-- AlterTable
ALTER TABLE "MediaAsset" ADD COLUMN     "altText" TEXT,
ADD COLUMN     "caption" TEXT,
ADD COLUMN     "focusArea" JSONB,
ADD COLUMN     "height" INTEGER,
ADD COLUMN     "title" TEXT,
ADD COLUMN     "width" INTEGER;

-- AlterTable
ALTER TABLE "Page" ADD COLUMN     "breadcrumbTitle" TEXT,
ADD COLUMN     "focusKeyphrase" TEXT,
ADD COLUMN     "lastSeoAudit" TIMESTAMP(3),
ADD COLUMN     "metaRobots" TEXT DEFAULT 'index,follow',
ADD COLUMN     "ogType" TEXT DEFAULT 'website',
ADD COLUMN     "readabilityScore" INTEGER DEFAULT 0,
ADD COLUMN     "schemaJson" JSONB,
ADD COLUMN     "schemaType" TEXT DEFAULT 'WebPage',
ADD COLUMN     "seoDescription" TEXT,
ADD COLUMN     "seoKeywords" TEXT,
ADD COLUMN     "seoScore" INTEGER DEFAULT 0,
ADD COLUMN     "seoTitle" TEXT,
ADD COLUMN     "twitterCard" TEXT DEFAULT 'summary_large_image',
ADD COLUMN     "twitterDescription" TEXT,
ADD COLUMN     "twitterImage" TEXT,
ADD COLUMN     "twitterTitle" TEXT;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "breadcrumbTitle" TEXT,
ADD COLUMN     "canonicalUrl" TEXT,
ADD COLUMN     "focusKeyphrase" TEXT,
ADD COLUMN     "lastSeoAudit" TIMESTAMP(3),
ADD COLUMN     "metaRobots" TEXT DEFAULT 'index,follow',
ADD COLUMN     "ogDescription" TEXT,
ADD COLUMN     "ogImage" TEXT,
ADD COLUMN     "ogTitle" TEXT,
ADD COLUMN     "ogType" TEXT DEFAULT 'website',
ADD COLUMN     "readabilityScore" INTEGER DEFAULT 0,
ADD COLUMN     "schemaJson" JSONB,
ADD COLUMN     "schemaType" TEXT DEFAULT 'WebPage',
ADD COLUMN     "seoDescription" TEXT,
ADD COLUMN     "seoKeywords" TEXT,
ADD COLUMN     "seoScore" INTEGER DEFAULT 0,
ADD COLUMN     "seoTitle" TEXT,
ADD COLUMN     "twitterCard" TEXT DEFAULT 'summary_large_image',
ADD COLUMN     "twitterDescription" TEXT,
ADD COLUMN     "twitterImage" TEXT,
ADD COLUMN     "twitterTitle" TEXT;

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "breadcrumbTitle" TEXT,
ADD COLUMN     "canonicalUrl" TEXT,
ADD COLUMN     "focusKeyphrase" TEXT,
ADD COLUMN     "lastSeoAudit" TIMESTAMP(3),
ADD COLUMN     "metaRobots" TEXT DEFAULT 'index,follow',
ADD COLUMN     "ogDescription" TEXT,
ADD COLUMN     "ogImage" TEXT,
ADD COLUMN     "ogTitle" TEXT,
ADD COLUMN     "ogType" TEXT DEFAULT 'website',
ADD COLUMN     "readabilityScore" INTEGER DEFAULT 0,
ADD COLUMN     "schemaJson" JSONB,
ADD COLUMN     "schemaType" TEXT DEFAULT 'Service',
ADD COLUMN     "seoDescription" TEXT,
ADD COLUMN     "seoKeywords" TEXT,
ADD COLUMN     "seoScore" INTEGER DEFAULT 0,
ADD COLUMN     "seoTitle" TEXT,
ADD COLUMN     "twitterCard" TEXT DEFAULT 'summary_large_image',
ADD COLUMN     "twitterDescription" TEXT,
ADD COLUMN     "twitterImage" TEXT,
ADD COLUMN     "twitterTitle" TEXT;

-- CreateTable
CREATE TABLE "SeoSettings" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "siteName" TEXT NOT NULL DEFAULT 'Magri Cabinets',
    "siteTitle" TEXT,
    "siteDescription" TEXT,
    "defaultOgImage" TEXT,
    "businessName" TEXT DEFAULT 'Magri Cabinets',
    "businessType" TEXT DEFAULT 'LocalBusiness',
    "streetAddress" TEXT,
    "addressLocality" TEXT DEFAULT 'Melbourne',
    "addressRegion" TEXT DEFAULT 'VIC',
    "postalCode" TEXT,
    "telephone" TEXT,
    "priceRange" TEXT DEFAULT '$$',
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "openingHours" JSONB,
    "facebookUrl" TEXT,
    "instagramUrl" TEXT,
    "linkedinUrl" TEXT,
    "youtubeUrl" TEXT,
    "googleAnalyticsId" TEXT,
    "googleSearchConsole" TEXT,
    "googleTagManager" TEXT,
    "facebookPixel" TEXT,
    "sitemapEnabled" BOOLEAN NOT NULL DEFAULT true,
    "sitemapFrequency" TEXT DEFAULT 'weekly',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SeoSettings_pkey" PRIMARY KEY ("id")
);
