# CMS Architecture & Implementation Plan

## 1. CMS Architecture Explanation
The CMS is designed as a **Headless CMS** integrated directly into the existing Next.js application.

-   **Backend**: Leverages Next.js API Routes (`pages/api`). These run as serverless functions (or standard Node.js endpoints) and communicate securely with the database.
-   **Database**: A dedicated PostgreSQL container. This ensures data isolation and easy backup.
-   **ORM**: Prisma is used for type-safe database access, schema migration, and management.
-   **Authentication**: Admin-only access protected by secure sessions (e.g., JWT in HttpOnly cookies).
-   **Frontend Integration**: The frontend (existing Next.js) fetches content via these internal APIs during build time (`getStaticProps`) for maximum SEO, or runtime (`getServerSideProps`) for dynamic constraints.

## 2. Docker Setup (CMS Database)
Since you asked to keep existing services untouched, we create a standalone `docker-compose.cms.yml` for the CMS database.

**File:** `docker-compose.cms.yml`
```yaml
version: '3.8'
services:
  cms-db:
    image: postgres:15-alpine
    container_name: magri_cms_db
    restart: always
    environment:
      POSTGRES_USER: cms_admin
      POSTGRES_PASSWORD: secure_cms_password
      POSTGRES_DB: magri_cms
    ports:
      - "5433:5432" # Mapped to 5433 to avoid conflict with default 5432
    volumes:
      - cms_pgdata:/var/lib/postgresql/data

volumes:
  cms_pgdata:
```

**Commands to Run:**
```bash
docker-compose -f docker-compose.cms.yml up -d
```

## 3. SEO Strategy
We adopt an **"SEO-First"** database design.
-   **Slugs**: Every content entity (Page, Blog, Project) has a unique `slug` field index.
-   **Meta Fields**: `metaTitle`, `metaDescription`, `canonicalUrl` are first-class citizens in the schema.
-   **Open Graph**: Dedicated JSON fields or specific columns for OG tags.
-   **Sitemap**: API endpoints will generate an XML sitemap dynamically based on published records.
-   **Indexing**: A boolean `noIndex` flag allows admins to hide specific pages from search engines without deleting them.

## 4. API Route Structure (`pages/api/`)
Adhering to REST principles:

-   `POST /api/auth/login` - Admin login
-   `GET /api/pages` - List all pages
-   `GET /api/pages/:slug` - Get single page details
-   `POST /api/pages` - Create page
-   `PUT /api/pages/:id` - Update page
-   `DELETE /api/pages/:id` - Delete page
-   (Similar patterns for `/api/blogs`, `/api/projects`, `/api/settings`)

## 5. Frontend Integration Suggestions
-   **Dynamic Pages**: Create `pages/[slug].tsx` that calls user-facing APIs to fetch content by slug.
-   **Revalidation**: Use ISR (Incremental Static Regeneration) with `revalidate: 60` to allow CMS updates to reflect on the live site without full rebuilds.
-   **Preview Mode**: Use Next.js Preview Mode to allow admins to see drafts.

