import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Theme Color */}
        <meta name="theme-color" content="#0f172a" />

        {/* Open Graph defaults */}
        <meta property="og:site_name" content="Magri Cabinets" />
        <meta property="og:locale" content="en_AU" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Magri Cabinets | Custom Cabinet Maker Melbourne" />
        <meta name="twitter:description" content="Melbourne's trusted custom cabinet makers. Premium kitchen cabinets, bathroom vanities, wardrobes & custom furniture." />

        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="AU-VIC" />
        <meta name="geo.placename" content="Melbourne" />
        <meta name="geo.position" content="-37.8136;144.9631" />
        <meta name="ICBM" content="-37.8136, 144.9631" />

        {/* Author */}
        <meta name="author" content="Magri Cabinets" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
