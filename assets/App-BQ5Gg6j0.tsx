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
                おすすめ光回線プロバイダー
                <span className="provider-count">（{providers.length}件）</span>
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
        </div>
      </footer>
      
      {/* モバイル用浮遊CTA */}
      <FloatingCTA />
    </div>
  );
}

export default App
