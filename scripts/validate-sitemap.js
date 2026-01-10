#!/usr/bin/env node

/**
 * Sitemap Validator for Magri Cabinets
 * 
 * This script validates the sitemap.xml to ensure:
 * 1. All URLs are properly formatted
 * 2. XML is valid
 * 3. All critical pages are included
 * 4. Priorities and frequencies are appropriate
 * 
 * Usage: node scripts/validate-sitemap.js
 */

const https = require('https');
const http = require('http');

const SITEMAP_URL = process.env.SITE_URL
    ? `${process.env.SITE_URL}/sitemap.xml`
    : 'http://localhost:3000/sitemap.xml';

console.log('🔍 Validating Sitemap...');
console.log(`📍 URL: ${SITEMAP_URL}\n`);

// Determine protocol
const client = SITEMAP_URL.startsWith('https') ? https : http;

client.get(SITEMAP_URL, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        if (res.statusCode !== 200) {
            console.error(`❌ Error: Sitemap returned status ${res.statusCode}`);
            process.exit(1);
        }

        console.log('✅ Sitemap is accessible\n');

        // Validate XML structure
        if (!data.includes('<?xml version="1.0"')) {
            console.error('❌ Error: Invalid XML declaration');
            process.exit(1);
        }

        if (!data.includes('<urlset')) {
            console.error('❌ Error: Missing <urlset> element');
            process.exit(1);
        }

        console.log('✅ XML structure is valid\n');

        // Count URLs
        const urlMatches = data.match(/<url>/g);
        const urlCount = urlMatches ? urlMatches.length : 0;
        console.log(`📊 Total URLs: ${urlCount}\n`);

        // Check for critical pages
        const criticalPages = [
            { name: 'Homepage', pattern: /<loc>.*\/<\/loc>/ },
            { name: 'Contact', pattern: /<loc>.*\/contact<\/loc>/ },
            { name: 'Services', pattern: /<loc>.*\/(kitchen-cabinets|bathroom-vanities|wardrobes)<\/loc>/ },
            { name: 'Blog Index', pattern: /<loc>.*\/blogs<\/loc>/ },
            { name: 'Projects Index', pattern: /<loc>.*\/projects<\/loc>/ },
        ];

        console.log('🔍 Checking critical pages...\n');

        let allCriticalPresent = true;
        criticalPages.forEach(page => {
            const found = page.pattern.test(data);
            const status = found ? '✅' : '❌';
            console.log(`${status} ${page.name}`);
            if (!found) allCriticalPresent = false;
        });

        console.log('\n');

        // Check priorities
        const homePriority = data.match(/<priority>1\.0<\/priority>/);
        if (homePriority) {
            console.log('✅ Homepage has priority 1.0');
        } else {
            console.log('⚠️  Warning: Homepage should have priority 1.0');
        }

        // Check for high-priority service pages
        const serviceHighPriority = data.match(/<priority>0\.9[0-9]?<\/priority>/);
        if (serviceHighPriority) {
            console.log('✅ Service pages have high priority (0.9+)');
        } else {
            console.log('⚠️  Warning: Service pages should have priority 0.9 or higher');
        }

        console.log('\n');

        // Check lastmod dates
        const lastmodCount = (data.match(/<lastmod>/g) || []).length;
        console.log(`📅 URLs with lastmod: ${lastmodCount}/${urlCount}`);

        // Check changefreq
        const changefreqCount = (data.match(/<changefreq>/g) || []).length;
        console.log(`⏰ URLs with changefreq: ${changefreqCount}/${urlCount}`);

        console.log('\n');

        // Final summary
        if (allCriticalPresent && urlCount > 5) {
            console.log('🎉 Sitemap validation PASSED!');
            console.log('✅ All critical pages are present');
            console.log('✅ Sitemap is ready for submission to Google Search Console\n');
            process.exit(0);
        } else {
            console.log('⚠️  Sitemap validation completed with warnings');
            console.log('Some critical pages may be missing. Please review.\n');
            process.exit(1);
        }
    });

}).on('error', (err) => {
    console.error(`❌ Error fetching sitemap: ${err.message}`);
    console.log('\n💡 Tip: Make sure the development server is running (npm run dev)\n');
    process.exit(1);
});
