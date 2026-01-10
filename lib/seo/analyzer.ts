/**
 * SEO Analysis & Scoring Engine
 */

export interface SeoAnalysisResult {
    score: number;
    readabilityScore: number;
    checks: {
        id: string;
        title: string;
        description: string;
        status: 'good' | 'warning' | 'error';
        priority: 'high' | 'medium' | 'low';
        value?: string | number;
    }[];
}

export function analyzeSEO(data: any, content: string = ''): SeoAnalysisResult {
    let score = 0;
    const checks: any[] = [];

    // Clean content for analysis
    const plainText = (content || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const words = plainText.split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;

    // 1. Title Optimization (25 points)
    const title = data.seoTitle || '';
    if (!title) {
        checks.push({
            id: 'title_missing',
            title: 'SEO Title is missing',
            description: 'A custom SEO title is critical for search rankings.',
            status: 'error',
            priority: 'high'
        });
    } else {
        score += 5;
        const len = title.length;
        if (len >= 50 && len <= 60) {
            score += 10;
            checks.push({
                id: 'title_length',
                title: 'Title length is perfect',
                description: 'The title length is within the optimal range (50-60 characters).',
                status: 'good',
                priority: 'low',
                value: len
            });
        } else if (len >= 40 && len <= 70) {
            score += 7;
            checks.push({
                id: 'title_length_ok',
                title: 'Title length is acceptable',
                description: 'Try to get closer to 50-60 characters for best results.',
                status: 'warning',
                priority: 'medium',
                value: len
            });
        } else {
            score += 2;
            checks.push({
                id: 'title_length_bad',
                title: 'Title is too ' + (len < 40 ? 'short' : 'long'),
                description: 'Target between 50-60 characters.',
                status: 'error',
                priority: 'high',
                value: len
            });
        }

        const focus = data.focusKeyphrase?.toLowerCase();
        if (focus && title.toLowerCase().includes(focus)) {
            score += 10;
            const pos = title.toLowerCase().indexOf(focus);
            if (pos === 0) {
                score += 5;
                checks.push({
                    id: 'title_focus',
                    title: 'Focus keyphrase in title',
                    description: 'Excellent! Your focus keyphrase is at the very beginning of the title.',
                    status: 'good',
                    priority: 'low'
                });
            } else {
                checks.push({
                    id: 'title_focus_present',
                    title: 'Focus keyphrase found in title',
                    description: 'Try moving it closer to the start for better visibility.',
                    status: 'good',
                    priority: 'low'
                });
            }
        } else if (focus) {
            checks.push({
                id: 'title_focus_missing',
                title: 'Keyphrase not in title',
                description: 'Your focus keyphrase should appear in the SEO title.',
                status: 'error',
                priority: 'high'
            });
        }
    }

    // 2. Description Quality (20 points)
    const desc = data.seoDescription || '';
    if (!desc) {
        checks.push({
            id: 'desc_missing',
            title: 'Meta description is missing',
            description: 'Search engines use this to describe your page in search results.',
            status: 'error',
            priority: 'high'
        });
    } else {
        score += 5;
        const len = desc.length;
        if (len >= 120 && len <= 160) {
            score += 10;
            checks.push({
                id: 'desc_length',
                title: 'Description length is perfect',
                description: 'Great! Your description fits perfectly in the SERP snippet.',
                status: 'good',
                priority: 'low',
                value: len
            });
        } else if (len >= 100 && len <= 180) {
            score += 7;
            checks.push({
                id: 'desc_length_ok',
                title: 'Description length is okay',
                description: 'Try targeting 120-160 characters.',
                status: 'warning',
                priority: 'medium',
                value: len
            });
        } else {
            score += 2;
            checks.push({
                id: 'desc_length_bad',
                title: 'Description is too ' + (len < 100 ? 'short' : 'long'),
                description: 'Target between 120-160 characters.',
                status: 'error',
                priority: 'medium',
                value: len
            });
        }

        const focus = data.focusKeyphrase?.toLowerCase();
        if (focus && desc.toLowerCase().includes(focus)) {
            score += 5;
            checks.push({
                id: 'desc_focus',
                title: 'Keyphrase in description',
                description: 'Search engines will bold your keyphrase in the results snippet.',
                status: 'good',
                priority: 'low'
            });
        } else if (focus) {
            checks.push({
                id: 'desc_focus_missing',
                title: 'Keyphrase not in description',
                description: 'Including your keyphrase can improve the click-through rate.',
                status: 'warning',
                priority: 'medium'
            });
        }
    }

    // 3. Keyword Usage (20 points)
    const focus = data.focusKeyphrase?.toLowerCase();
    if (focus && content) {
        const matches = (plainText.toLowerCase().match(new RegExp(escapeRegex(focus), 'g')) || []).length;
        if (matches > 0) {
            score += 5;
            const density = (matches / wordCount) * 100;
            if (density >= 0.5 && density <= 2.5) {
                score += 10;
                checks.push({
                    id: 'kw_density',
                    title: 'Keyword density is good',
                    description: `Your focus keyphrase appears ${matches} times (${density.toFixed(2)}%).`,
                    status: 'good',
                    priority: 'low',
                    value: density.toFixed(2) + '%'
                });
            } else {
                score += 7;
                checks.push({
                    id: 'kw_density_alt',
                    title: 'Keyword density is ' + (density < 0.5 ? 'low' : 'too high'),
                    description: `Appears ${matches} times (${density.toFixed(2)}%). Aim for 0.5-2.5%.`,
                    status: 'warning',
                    priority: 'medium'
                });
            }

            const firstPara = plainText.substring(0, 500).toLowerCase();
            if (firstPara.includes(focus)) {
                score += 5;
                checks.push({
                    id: 'kw_first_para',
                    title: 'Keyphrase in first paragraph',
                    description: 'Your focus keyphrase is established early in the content.',
                    status: 'good',
                    priority: 'low'
                });
            } else {
                checks.push({
                    id: 'kw_first_para_missing',
                    title: 'Keyphrase missing from intro',
                    description: 'Try to include your focus keyphrase in the first paragraph.',
                    status: 'warning',
                    priority: 'medium'
                });
            }
        } else {
            checks.push({
                id: 'kw_missing_content',
                title: 'Keyphrase not found in content',
                description: 'Your content does not include the focus keyphrase.',
                status: 'error',
                priority: 'high'
            });
        }
    }

    // 4. Readability (15 points) - Simplified Flesch-Kincaid
    const readability = calculateReadability(plainText);
    if (readability >= 60) {
        score += 15;
    } else if (readability >= 50) {
        score += 10;
    } else {
        score += 5;
    }

    if (readability < 60) {
        checks.push({
            id: 'readability_issue',
            title: 'Content might be hard to read',
            description: 'Try using shorter sentences and simpler vocabulary.',
            status: 'warning',
            priority: 'medium',
            value: readability
        });
    }

    // 5. Link Structure (10 points)
    const links = (content.match(/<a\s/g) || []).length;
    if (links >= 2) {
        score += 10;
        checks.push({
            id: 'link_structure',
            title: 'Link structure is good',
            description: 'You have plenty of links to other pages or resources.',
            status: 'good',
            priority: 'low'
        });
    } else {
        score += 5;
        checks.push({
            id: 'link_structure_low',
            title: 'Few links found',
            description: 'Consider adding more internal and external links.',
            status: 'warning',
            priority: 'low'
        });
    }

    return {
        score: Math.min(score, 100),
        readabilityScore: readability,
        checks: checks.sort((a, b) => {
            const map: Record<string, number> = { error: 0, warning: 1, good: 2 };
            return map[a.status] - map[b.status];
        })
    };
}

function escapeRegex(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function calculateReadability(text: string): number {
    if (!text) return 0;
    const sentences = text.split(/[.!?]+/).length;
    const words = text.split(/\s+/).length;
    const syllables = countSyllables(text);

    if (words === 0 || sentences === 0) return 100;

    // Flesch Reading Ease formula
    const score = 206.835 - (1.015 * (words / sentences)) - (84.6 * (syllables / words));
    return Math.max(0, Math.min(100, Math.round(score)));
}

function countSyllables(text: string): number {
    text = text.toLowerCase();
    if (text.length <= 3) return 1;
    text = text.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    text = text.replace(/^y/, '');
    const res = text.match(/[aeiouy]{1,2}/g);
    return res ? res.length : 1;
}
