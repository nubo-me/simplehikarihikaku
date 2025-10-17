import { useEffect, useState } from 'react';
import { providers } from './data/providers';
import { ProviderCard } from './components/ProviderCard';
import { SEOHead } from './components/SEOHead'; // この行が正しくインポートされているか確認
import { FAQ } from './components/FAQ';
import { usePageView } from './hooks/usePageView';
import { Zap, ArrowUpDown, Gift } from 'lucide-react';
import { analytics } from './firebase/config';
import { logEvent } from 'firebase/analytics';
import './App.css';

// 残す新しいコンポーネントのインポート
import PRBadge from './components/PRBadge';
import FloatingCTA from './components/FloatingCTA';
import SchemaJsonLd from './components/SchemaJsonLd';
import { wireAffiliateLinks } from './lib/tracking';
// Tailwind無いのでCSSを読み込む
import './styles/affiliate.css';

function App() {
  const [sortType, setSortType] = useState<'default' | 'price' | 'cashback'>('default');
  const [sortedProviders, setSortedProviders] = useState(providers);

  const personaRecommendations = [
    {
      id: 'gamer',
      title: 'オンラインゲームを快適にプレイしたい方向け',
      description:
        'ショップでゲーマーのお客さまから相談を受けるときは、まず回線の安定性と上り下りの速度を確認します。auひかりは独自回線で混雑しづらく、体感のラグが少ないのでeスポーツ好きの方にも自信を持って勧めています。',
      tips: [
        '独自回線で夜間帯も安定して高速',
        '返金付きキャンペーンで初期費用を抑えられる',
        'auスマホとのセット割で通信費をトータル最適化'
      ],
      providerId: 'au-hikari'
    },
    {
      id: 'solo',
      title: 'とにかく月額料金を安くしたい一人暮らしの方向け',
      description:
        '新人スタッフにも伝えているのですが、一人暮らしのお客さまには「毎月の支出が無理なく続けられるか」が最重要ポイントです。ビッグローブ光はキャンペーン適用で実質負担が抑えられ、サポートも分かりやすいので初めての光回線でも安心です。',
      tips: [
        '12ヶ月割引とキャッシュバックで実質月額が低い',
        'Wi-Fiルーター無料レンタルで初期投資が不要',
        'サポート窓口が初心者にも丁寧で安心'
      ],
      providerId: 'biglobe-hikari'
    },
    {
      id: 'family',
      title: '家族みんなで使っても速度が落ちないものを選びたい方向け',
      description:
        'ショップでは家族構成やスマホキャリアを伺って提案します。ドコモ光なら家族のスマホ代をまとめて割引でき、Wi-Fiを複数台同時利用しても安定していると評判です。リモートワークやお子さまの動画視聴が重なっても安心ですよ。',
      tips: [
        '家族のドコモスマホとセットでひと月あたり最大1,100円割引',
        '訪問設定サポートで初期設定がスムーズ',
        'dポイント還元で家計管理もしやすい'
      ],
      providerId: 'docomo-hikari'
    }
  ];

  // ページビューの追跡
  usePageView('シンプル光回線比較 - 最安値のインターネット回線を比較');

  // ソート関数
  const sortProviders = (type: 'default' | 'price' | 'cashback') => {
    let sorted = [...providers];
    
    if (type === 'price') {
      // 月額料金の安い順（マンション料金を基準）
      sorted.sort((a, b) => {
        const priceA = parseInt(a.apartmentPrice.replace(/[^\d]/g, ''));
        const priceB = parseInt(b.apartmentPrice.replace(/[^\d]/g, ''));
        return priceA - priceB;
      });
    } else if (type === 'cashback') {
      // 還元額の高い順
      sorted.sort((a, b) => {
        const cashbackA = parseInt(a.maxCashback.replace(/[^\d]/g, ''));
        const cashbackB = parseInt(b.maxCashback.replace(/[^\d]/g, ''));
        return cashbackB - cashbackA;
      });
    }
    
    setSortedProviders(sorted);
    setSortType(type);
    
    // Firebase Analyticsでソート操作を追跡
    if (analytics) {
      logEvent(analytics, 'sort_providers', {
        sort_type: type,
        provider_count: sorted.length
      });
    }
  };

  const handlePersonaAffiliateClick = (providerId: string, personaId: string) => {
    if (analytics) {
      logEvent(analytics, 'persona_affiliate_click', {
        provider_id: providerId,
        persona_id: personaId
      });
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'persona_affiliate_click', {
        event_category: 'engagement',
        event_label: `${providerId}_${personaId}`
      });
    }
  };

  // 初期化処理（1回のみ実行）
  useEffect(() => {
    setSortedProviders(providers);

    // パフォーマンス最適化: 画像の遅延読み込み
    const setupImageOptimization = () => {
      // Intersection Observerによる画像遅延読み込み
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
              }
            }
          });
        }, { rootMargin: '50px 0px', threshold: 0.1 });

        // 遅延読み込み対象の画像を監視
        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    setupImageOptimization();
    // パフォーマンス計測はperformance.tsで実行されるため、ここでは削除

    // アフィリエイトリンクの計測設定
    wireAffiliateLinks(document);
  }, []); // 空の依存配列で1回のみ実行

  return (
    <div className="App">
      <SchemaJsonLd />
      <PRBadge />
      {/* SEOヘッド */}
      <SEOHead />
      
      {/* ヘッダー */}
      <header className="header" role="banner">
        <div className="hero-background">
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="光ファイバーケーブルの美しい光 - 高速インターネット接続" 
              className="hero-bg-image" 
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <div className="hero">
            <div className="hero-badge">
              <Zap className="badge-icon" aria-hidden="true" />
              <span>2025年最新版</span>
            </div>
            <h1 className="hero-title">
              <span className="title-primary">シンプル光回線比較</span>
            </h1>
            <p className="hero-subtitle">
              <strong>9社の光回線プロバイダーを徹底比較</strong><br />
              料金・速度・エリア別にあなたにぴったりの光回線が見つかる
            </p>
            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">💰</span>
                <span>最安値検索</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <span>高速回線</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎁</span>
                <span>キャンペーン情報</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="main" role="main">
        <div className="container">
          {/* プロバイダー一覧 */}
          <section className="providers-section" aria-labelledby="providers-heading">
            <div className="section-header">
              <h2 id="providers-heading">
                【2025年最新】おすすめ光回線プロバイダーランキング
                <span className="provider-count">（{providers.length}社比較）</span>
              </h2>
              
              {/* ソートボタン */}
              <nav className="sort-controls" aria-label="並び替えオプション">
                <h3>並び替え：</h3>
                <div className="sort-buttons" role="group" aria-label="並び替えボタン">
                  <button 
                    className={`sort-button ${sortType === 'default' ? 'active' : ''}`}
                    onClick={() => sortProviders('default')}
                    aria-pressed={sortType === 'default'}
                    aria-label="デフォルト順で並び替え"
                  >
                    <ArrowUpDown size={16} aria-hidden="true" />
                    デフォルト
                  </button>
                  <button 
                    className={`sort-button ${sortType === 'price' ? 'active' : ''}`}
                    onClick={() => sortProviders('price')}
                    aria-pressed={sortType === 'price'}
                    aria-label="料金の安い順で並び替え"
                  >
                    <span className="yen-icon" aria-hidden="true">￥</span>
                    料金安い順
                  </button>
                  <button 
                    className={`sort-button ${sortType === 'cashback' ? 'active' : ''}`}
                    onClick={() => sortProviders('cashback')}
                    aria-pressed={sortType === 'cashback'}
                    aria-label="還元額の高い順で並び替え"
                  >
                    <Gift size={16} aria-hidden="true" />
                    還元額高い順
                  </button>
                </div>
              </nav>
            </div>
            
            <div className="providers-grid" role="list" aria-label="光回線プロバイダー一覧">
              {sortedProviders.map((provider, index) => (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  ranking={sortType !== 'default' ? index + 1 : undefined}
                />
              ))}
            </div>
          </section>

          <section className="persona-section" aria-labelledby="persona-heading">
            <div className="section-header">
              <h2 id="persona-heading">目的別おすすめ光回線</h2>
              <p className="section-subtitle">ショップ店長の視点から、よくあるご相談別に最適なプランを厳選しました。</p>
            </div>
            <div className="persona-grid">
              {personaRecommendations.map((persona) => {
                const recommendedProvider = providers.find((item) => item.id === persona.providerId);
                if (!recommendedProvider) return null;
                const hasAffiliateLink = Boolean(recommendedProvider.affiliateUrl);

                return (
                  <article key={persona.id} className="persona-card">
                    <h3>{persona.title}</h3>
                    <p>{persona.description}</p>
                    <ul>
                      {persona.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                    <div className="persona-actions">
                      <a className="persona-link" href={`#${recommendedProvider.id}`}>
                        {recommendedProvider.name}の詳細を見る
                      </a>
                      {hasAffiliateLink && (
                        <a
                          href={recommendedProvider.affiliateUrl}
                          className="affiliate-button persona-button"
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          data-offer={recommendedProvider.id}
                          data-location={`persona-${persona.id}`}
                          onClick={() => handlePersonaAffiliateClick(recommendedProvider.id, persona.id)}
                        >
                          {recommendedProvider.ctaLabel ?? '限定キャンペーンで申し込む'}
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* 光回線の選び方セクション */}
          <section className="guide-section" aria-labelledby="guide-heading">
            <div className="section-content">
              <h2 id="guide-heading">光回線の選び方ガイド</h2>
              <div className="guide-grid">
                <div className="guide-item">
                  <h3>マンション・アパートにおすすめ</h3>
                  <p>月額料金3,740円〜で利用可能。auひかりやNURO光が人気です。</p>
                </div>
                <div className="guide-item">
                  <h3>戸建て住宅におすすめ</h3>
                  <p>高速通信重視なら独自回線のauひかりやNURO光がおすすめ。</p>
                </div>
                <div className="guide-item">
                  <h3>スマホセット割でお得</h3>
                  <p>ドコモ・au・ソフトバンクユーザーはセット割を活用しましょう。</p>
                </div>
                <div className="guide-item">
                  <h3>キャッシュバック重視</h3>
                  <p>最大13万円のキャッシュバックキャンペーンを実施中。</p>
                </div>
              </div>
            </div>
          </section>

          {/* 料金比較セクション */}
          <section className="price-comparison-section" aria-labelledby="price-heading">
            <div className="section-content">
              <h2 id="price-heading">光回線料金比較表</h2>
              <p className="section-description">
                人気光回線プロバイダーの月額料金を比較。マンション・戸建てタイプ別の実質料金をご確認ください。
              </p>
              <div className="comparison-note">
                <h3>実質月額料金とは？</h3>
                <p>基本料金からキャッシュバック・割引・工事費を考慮した実際の負担額です。</p>
              </div>
            </div>
          </section>

          {/* FAQ セクション */}
          <FAQ />
        </div>
      </main>

      {/* フッター */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <p>&copy; 2025 シンプル光回線比較. All rights reserved.</p>
          <p className="disclaimer">
            ※ 料金・サービス内容は各プロバイダーの公式サイトでご確認ください<br />
            ※ 当サイトはアフィリエイト広告を利用しています
          </p>
          <nav className="footer-links" aria-label="関連比較サイト">
            <a
              href="https://mobilewifihikaku.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              モバイルWi-Fi比較サイト
            </a>
            <a
              href="https://kakuyasusimhikaku-6c501.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              格安SIM比較サイト
            </a>
          </nav>
        </div>
      </footer>
      
      {/* モバイル用浮遊CTA */}
      <FloatingCTA />
    </div>
  );
}

export default App
