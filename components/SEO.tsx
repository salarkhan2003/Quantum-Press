// Add missing React import to provide the React namespace
import React, { useEffect } from 'react';
import { Article } from '../types';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  articleData?: Article;
  canonical?: string;
}

const DEFAULT_DESCRIPTION = 'Quantum Press is the premier engineering-led tech media platform. Deciphering the complexities of AI, Space exploration, Robotics, and the Quantum realm with rigorous technical intelligence.';

// Fixed: React namespace is now available after adding the import above
export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image, 
  type = 'website', 
  articleData,
  canonical 
}) => {
  const siteName = 'Quantum Press';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Where Future Tech Speaks`;
  const metaDesc = description || DEFAULT_DESCRIPTION;
  const metaImg = image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200';

  useEffect(() => {
    // Update Document Title
    document.title = fullTitle;
    
    // Helper to sync meta tags
    const updateMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard SEO
    updateMeta('description', metaDesc);
    
    // Open Graph / Social
    updateMeta('og:title', fullTitle, 'property');
    updateMeta('og:description', metaDesc, 'property');
    updateMeta('og:image', metaImg, 'property');
    updateMeta('og:type', type, 'property');
    updateMeta('og:site_name', siteName, 'property');
    
    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', metaDesc);
    updateMeta('twitter:image', metaImg);

    // Schema.org JSON-LD
    let script = document.getElementById('json-ld-schema') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemas: any[] = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Quantum Press",
        "url": window.location.origin,
        "logo": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200",
        "description": DEFAULT_DESCRIPTION,
        "sameAs": [
          "https://twitter.com/quantumpress",
          "https://linkedin.com/company/quantumpress"
        ]
      }
    ];

    if (type === 'article' && articleData) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": articleData.title,
        "description": articleData.summary,
        "image": [articleData.featuredImage],
        "datePublished": articleData.date,
        "dateModified": articleData.date,
        "author": [{
          "@type": "Person",
          "name": articleData.authorId,
          "url": `${window.location.origin}/#/about`
        }]
      });
    }

    script.textContent = JSON.stringify(schemas);

  }, [fullTitle, metaDesc, metaImg, type, articleData]);

  return null;
};