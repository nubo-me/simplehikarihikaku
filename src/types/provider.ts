// 光回線プロバイダーの型定義
export interface Provider {
  id: string;
  name: string;
  logoUrl: string;
  apartmentPrice: string; // マンション料金
  housePrice: string; // 戸建て料金
  initialCost: number;
  maxCashback: string; // 最大還元額
  availableAreas: string[];
  features: string[];
  affiliateUrl?: string;
  rating: number;
  description: string;
  effectiveMonthly: string; // 実質月額料金
  recommendedFor: string; // ターゲットユーザー
  ctaLabel?: string;
}

// 比較フィルター用の型
export interface ComparisonFilter {
  maxPrice?: number;
  minSpeed?: number;
  area?: string;
  sortBy: 'price' | 'speed' | 'rating';
}
