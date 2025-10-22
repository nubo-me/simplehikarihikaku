import { providers } from '../data/providers';
import { faqItems } from '../data/faq';

const DEFAULT_ORIGIN = 'https://simple-hikari.web.app';

const normalizePrice = (price: string) => {
  const numeric = price.replace(/[^0-9]/g, '');
  if (!numeric) {
    return undefined;
  }
  return Number(numeric);
};

export default function SchemaJsonLd() {
  const origin = typeof window !== 'undefined' ? window.location.origin : DEFAULT_ORIGIN;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `${DEFAULT_ORIGIN}/`;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: origin },
      { '@type': 'ListItem', position: 2, name: '光回線比較', item: currentUrl }
    ]
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer }
    }))
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '光回線比較HIKARI',
    url: origin,
    logo: `${origin}/og-image.svg`,
    description: '光回線プロバイダーを料金・速度・エリア別に徹底比較するサイト',
    foundingDate: '2025',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      areaServed: 'JP',
      availableLanguage: 'Japanese'
    }
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '光回線比較HIKARI',
    url: origin,
    description: '2025年最新の光回線プロバイダー比較サイト。料金・速度・エリア別におすすめの光回線をご紹介。',
    publisher: {
      '@type': 'Organization',
      name: '光回線比較HIKARI'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${origin}/?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '【2025年版】光回線おすすめ比較 | 光回線選びのプロが解説',
    url: currentUrl,
    description: '光回線の料金・速度・キャンペーンを比較し、目的別に最適なプランを提案する専門サイト。',
    breadcrumb: breadcrumb,
    isPartOf: website
  };

  const providerItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'おすすめ光回線プロバイダー一覧',
    itemListElement: providers.map((provider, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: provider.name,
      url: `${origin}/#${provider.id}`,
      item: {
        '@type': 'Service',
        name: provider.name,
        serviceType: '光回線',
        url: `${origin}/#${provider.id}`
      }
    }))
  };

  const providerServices = providers.map((provider) => {
    const offerUrl = provider.affiliateUrl ?? `${origin}/#${provider.id}`;
    const price = normalizePrice(provider.apartmentPrice);

    const offer: Record<string, unknown> = {
      '@type': 'Offer',
      priceCurrency: 'JPY',
      availability: 'https://schema.org/InStock',
      url: offerUrl
    };

    if (price !== undefined) {
      offer.price = price;
    }

    if (provider.maxCashback) {
      offer.description = `最大還元額: ${provider.maxCashback}`;
    }

    const service: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: provider.name,
      description: provider.description,
      serviceType: '光回線',
  url: `${origin}/#${provider.id}`,
      areaServed: provider.availableAreas,
      provider: {
        '@type': 'Organization',
        name: provider.name
      },
      offers: offer
    };

    if (provider.features?.length) {
      service.additionalProperty = provider.features.map((feature) => ({
        '@type': 'PropertyValue',
        name: '特長',
        value: feature
      }));
    }

    if (provider.effectiveMonthly) {
      service.description = `${provider.description} 実質月額料金: ${provider.effectiveMonthly}`;
    }

    return service;
  });

  const schemas = [
    breadcrumb,
    faq,
    organization,
    website,
    webPage,
    providerItemList,
    ...providerServices
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
