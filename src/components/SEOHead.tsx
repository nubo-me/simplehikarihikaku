import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const SEOHead = ({
  title = 'シンプル光回線比較 | 最安値のインターネット回線を比較',
  description = '9社の光回線プロバイダーを料金・還元額・特徴で徹底比較！あなたにぴったりの光回線が見つかるシンプル比較サイト',
  keywords = '光回線,比較,プロバイダー,料金,安い,還元,キャッシュバック,インターネット回線,シンプル',
  ogImage = '/og-image.jpg',
  canonicalUrl = window.location.href
}: SEOHeadProps) => {
  
  useEffect(() => {
    // ページタイトルの設定
    document.title = title;
    
    // メタタグの動的更新
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // 基本メタタグの更新
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph メタタグ
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonicalUrl, true);
    
    // Twitter Card メタタグ
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', ogImage, true);
    
    // カノニカルURLの設定
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // 構造化データの更新
    const updateStructuredData = () => {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script') as HTMLScriptElement;
        structuredDataScript.type = 'application/ld+json';
        document.head.appendChild(structuredDataScript);
      }
      
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "シンプル光回線比較",
        "description": description,
        "url": canonicalUrl,
        "publisher": {
          "@type": "Organization",
          "name": "シンプル光回線比較"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${window.location.origin}/?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      };
      
      structuredDataScript.textContent = JSON.stringify(structuredData);
    };

    updateStructuredData();

  }, [title, description, keywords, ogImage, canonicalUrl]);

  // このコンポーネントは視覚的な要素を持たない
  return null;
};
