# SEO STRATEGY & CMS ARCHITECTURE GAP REPORT

**Project:** Magri Cabinets Melbourne  
**Report Type:** Senior SEO Audit & CMS Capability Analysis  
**Status:** CRITICAL GAPS IDENTIFIED  

---

## 1. EXECUTIVE SUMMARY

The current digital infrastructure of Magri Cabinets presents high-quality visual design but suffers from **significant technical SEO limitations**. While the database (Prisma) possesses some fields for SEO management, the **Admin Interface (CMS) fails to expose these controls**, making it impossible for non-technical users to optimize the site for search engines.

The site currently lacks standard modern SEO requirements such as **Structured Data (Schema.org)**, **Dynamic Sitemaps**, and **Canonical handling**, putting it at a severe disadvantage against competitors using platforms like WordPress with Yoast or RankMath.

---

## 2. META SEO ANALYSIS (CURRENT STATE)

| Page Type | Meta Title Status | Meta Description Status | Admin Control | Risk Level |
| :--- | :--- | :--- | :--- | :--- |
| **Home Page** | Hardcoded in Code | Hardcoded in Code | **NONE** | **HIGH** |
| **Service Pages** | Pattern-based | Auto-generated/Fallback | **NONE** | **HIGH** |
| **Project Details** | Partial (Title only) | Partial (Description only) | **NONE** | **MEDIUM** |
| **Blog Articles** | Supported in Code | Supported in Code | **NONE** | **HIGH** |
| **Custom Pages** | Supported in Code | Supported in Code | **NONE** | **HIGH** |

### Critical Findings:
*   **Blind CMS Editor:** Even for pages like Blogs where the database *could* store a custom Meta Title, the Admin Panel provides no input field for it.
*   **Duplicate Title Risk:** Most service pages default to `{Service Name} | Magri Cabinets`, missing out on high-intent keywords like "Custom TV Cabinets Melbourne".
*   **Generic Descriptions:** Many pages lack unique descriptions, leading Google to "guess-generate" snippets which often result in lower Click-Through Rates (CTR).

---

## 3. CMS CAPABILITY GAP ANALYSIS
*Comparison vs. WordPress + Yoast/RankMath Standards*

| Feature | WordPress Standard | Magri CMS Current | Gap Impact |
| :--- | :--- | :--- | :--- |
| **Custom Meta Titles** | Standard | **Missing** | Cannot target specific high-value keywords. |
| **Custom Meta Desc.** | Standard | **Missing** | Poor CTR in search results. |
| **SERP Preview** | Real-time visual | **Missing** | Admin cannot see how results look on Google. |
| **Focus Keyword** | Advanced Analysis | **Missing in UI** | Content is not optimized for specific intents. |
| **Canonical URLs** | Automatic/Editable | **Missing in UI** | High risk of duplicate content penalties. |
| **Social OG Tags** | Full Control | **Missing in UI** | Poor appearance when shared on FB/Instagram. |
| **Index / NoIndex** | Per Page Toggle | **Missing in UI** | Draft/Test pages may leak into Google. |

---

## 4. PAGE-WISE SEO WEAKNESS REPORT

### **Home Page (`/`)**
*   **Strength:** Clean structure and fast loading.
*   **Weakness:** Meta tags are hardcoded. Changing the site’s primary description requires a developer to edit the code.
*   **Risk:** Low flexibility for seasonal SEO adjustments.

### **Service Pages (e.g., `/tv-cabinets`)**
*   **Strength:** Strong localized content (mentions Melbourne) and high-quality images.
*   **Weakness:** The CMS only allows editing "Meta Keywords" (a legacy tag Google ignores). It lacks fields for the actual SEO Title and Description.
*   **Risk:** **HIGH.** These are your primary money pages; their inability to be precisely optimized is a major revenue leak.

### **Blog Detail Pages (`/blogs/[id]`)**
*   **Strength:** Good semantic HTML structure (`prose` class, correct heading hierarchy).
*   **Weakness:** The code is ready for advanced SEO (OpenGraph, Canonicals), but the Admin Panel is "locked"—there are no fields to input this data.
*   **Risk:** Medium. Blogs draw top-of-funnel traffic, but without SEO control, they won't outrank competitors.

---

## 5. STRUCTURED DATA (SCHEMA.ORG) ANALYSIS

**Status:** **NOT IMPLEMENTED (0% Coverage)**

Structured Data tells Google exactly what it’s looking at. The following schemas are **missing**:
*   **LocalBusiness:** Crucial for appearing in the "Google Maps Pack" for Melbourne cabinetry.
*   **Organization:** Establishes brand identity and social links in search.
*   **Service:** Tells Google about your specific offerings (Kitchens, Wardrobes).
*   **Article:** Essential for Blog visibility and "Top Stories" placement.
*   **FAQ Schema:** Currently, FAQs are just text; adding Schema would allow them to take up more space on the Google results page.
*   **Project (Showcase):** Missing for Portfolio items.

**Business Impact:** Without Schema, Magri Cabinets looks like "just another website" to Google's bots, rather than a verified service provider.

---

## 6. IMAGE SEO ANALYSIS

*   **Alt Text Control:** The CMS currently lacks an "Alt Text" field for uploaded images. While the code uses the title as a fallback, this is not an SEO best practice.
*   **Naming Conventions:** Images uploaded are often renamed to generic IDs, losing the SEO value of descriptive filenames (e.g., `modern-kitchen-cabinets-melbourne.jpg`).
*   **OpenGraph Image:** There is no way to set a specific "preview image" for social media platforms.

---

## 7. INDEXING & CRAWL CONTROL

*   **Sitemap Readiness:** There is currently **no `sitemap.xml`**. Google has to crawl the site "blindly," which is slow and inefficient for a site with many dynamic pages.
*   **Robots.txt:** The site lacks a `robots.txt` file to guide search engine bots.
*   **Draft Protection:** While "Draft" status exists, there is no global mechanism to ensure `noindex` tags are strictly applied to all non-published content, which can lead to "broken" or empty pages appearing in search results.

---

## 8. OVERALL ASSESSMENT & IMPACT

| Component | Assessment | Priority |
| :--- | :--- | :--- |
| **Technical SEO** | Poor | High |
| **Content Optimization** | Moderate | Medium |
| **Trust/Authority** | Missing (Schema) | High |
| **Admin Control** | Non-existent | Critical |

**Conclusion:** The website is visually "Front-End Ready" but technically **"SEO Handicapped."** The most critical issue is the complete disconnect between the database (which can support SEO) and the Admin Sidebar (which lacks the fields). Until the CMS allows the user to actually type in SEO data, the site will remain invisible for many high-competition Melbourne cabinetry keywords.
