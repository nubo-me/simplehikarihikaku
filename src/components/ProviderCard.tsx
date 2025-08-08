import React from 'react';
import type { Provider } from '../types/provider';
import { analytics } from '../firebase/config';
import { logEvent } from 'firebase/analytics';
import { providerAds, providerTextAds } from '../types/index';
import './ProviderCard.css';

interface ProviderCardProps {
  provider: Provider;
  ranking?: number;
}

export const ProviderCard: React.FC<ProviderCardProps> = ({ provider, ranking }) => {
  const handleTextAdClick = (providerName: string) => {
    // Firebase Analyticsでテキスト広告のクリック追跡
    if (analytics) {
      logEvent(analytics, 'text_ad_click', {
        provider_name: providerName,
        provider_id: provider.id,
        apartment_price: provider.apartmentPrice,
        house_price: provider.housePrice
      });
    }
    
    // 従来のGoogle Analytics（gtag）への対応も維持
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'text_ad_click', {
        event_category: 'engagement',
        event_label: providerName,
        value: 1
      });
    }
  };

  // 該当するプロバイダーの広告を取得
  const providerAd = providerAds.find(ad => ad.providerId === provider.id);
  const providerTextAd = providerTextAds.find(ad => ad.providerId === provider.id);

  return (
    <article className="provider-card" role="listitem" itemScope itemType="https://schema.org/Service">
      {/* 順位表示 */}
      {ranking && (
        <div className="ranking-badge" aria-label={`${ranking}位`}>
          <span className="ranking-number">{ranking}</span>
          <span className="ranking-label">位</span>
        </div>
      )}
      
      <header className="provider-header">
        <div className="provider-info">
          <h3 itemProp="name">{provider.name}</h3>
        </div>
      </header>

      <div className="provider-details">
        <div className="price-info" itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <div className="price-section">
            <div className="apartment-price">
              <span className="price-label">マンション:</span>
              <span className="price-value" itemProp="price">{provider.apartmentPrice}</span>
            </div>
            <div className="house-price">
              <span className="price-label">戸建て:</span>
              <span className="price-value">{provider.housePrice}</span>
            </div>
            <meta itemProp="priceCurrency" content="JPY" />
          </div>
          <div className="cashback-info">
            <span className="cashback-label">最大還元額:</span>
            <span className="cashback-value">{provider.maxCashback}</span>
          </div>
          <div className="initial-cost">
            <span>初期費用: {provider.initialCost.toLocaleString()}円</span>
          </div>
        </div>

        <div className="description">
          <p itemProp="description">{provider.description}</p>
        </div>

        <div className="features">
          <h4>主な特徴</h4>
          <ul>
            {provider.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* プロバイダー広告 */}
      {providerAd && (
        <div className="provider-ad">
          <div dangerouslySetInnerHTML={{ __html: providerAd.html }} />
        </div>
      )}

      {/* テキストリンク広告 */}
      <div className="provider-text-ad">
        <span className="details-text">詳細はこちら→</span>
        {providerTextAd && (
          <div 
            className="text-ad-link"
            dangerouslySetInnerHTML={{ __html: providerTextAd.html }}
            onClick={() => handleTextAdClick(provider.name)}
          />
        )}
      </div>
    </article>
  );
};
