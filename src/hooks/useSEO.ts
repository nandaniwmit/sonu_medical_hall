import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: string;
  ogImage?: string;
}

export function useSEO({
  title,
  description,
  keywords,
  canonicalPath = '',
  ogType = 'website',
  ogImage = 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop'
}: SEOProps) {
  useEffect(() => {
    // Title
    const fullTitle = `${title} | Sonu Medical Hall - Bodhgaya`;
    document.title = fullTitle;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Meta Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('content', `https://sonumedicalhall.com${canonicalPath}`);
    }

    // OpenGraph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    let ogTypeEl = document.querySelector('meta[property="og:type"]');
    if (ogTypeEl) ogTypeEl.setAttribute('content', ogType);

    let ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', ogImage);

    // Scroll to top when page opens
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description, keywords, canonicalPath, ogType, ogImage]);
}
