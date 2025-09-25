export default function SchemaJsonLd() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: typeof window !== "undefined" ? window.location.origin : "" },
      { "@type": "ListItem", position: 2, name: "光回線比較", item: typeof window !== "undefined" ? window.location.href : "" }
    ]
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", name: "実質月額って何？", acceptedAnswer: { "@type": "Answer", text: "基本料金から割引・キャッシュバック・工事費を反映した指標です。" } },
      { "@type": "Question", name: "提供エリアはどう確認する？", acceptedAnswer: { "@type": "Answer", text: "各公式のエリア検索ページで住所・郵便番号を入力して確認します。" } },
      { "@type": "Question", name: "光回線の速度はどのくらい？", acceptedAnswer: { "@type": "Answer", text: "一般的に最大1Gbps、高速プランでは10Gbpsの通信速度を提供しています。" } },
      { "@type": "Question", name: "工事費用はいくらかかる？", acceptedAnswer: { "@type": "Answer", text: "多くのプロバイダーで工事費無料キャンペーンを実施しており、実質負担0円になることが多いです。" } }
    ]
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "光回線比較HIKARI",
    "url": typeof window !== "undefined" ? window.location.origin : "",
    "logo": typeof window !== "undefined" ? `${window.location.origin}/og-image.svg` : "",
    "description": "光回線プロバイダーを料金・速度・エリア別に徹底比較するサイト",
    "foundingDate": "2025",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "JP",
      "availableLanguage": "Japanese"
    }
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "光回線比較HIKARI",
    "url": typeof window !== "undefined" ? window.location.origin : "",
    "description": "2025年最新の光回線プロバイダー比較サイト。料金・速度・エリア別におすすめの光回線をご紹介。",
    "publisher": {
      "@type": "Organization",
      "name": "光回線比較HIKARI"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": typeof window !== "undefined" ? `${window.location.origin}/?q={search_term_string}` : ""
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
