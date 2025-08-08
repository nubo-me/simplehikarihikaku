/**
 * パフォーマンス最適化のための設定ファイル
 * 光回線比較サイト向けの画像遅延読み込み、リソースプリロード、SEO最適化を管理
 */

/**
 * 画像の遅延読み込みを実装するためのIntersection Observer
 * プロバイダーロゴとキャンペーン画像の最適化
 */
export const setupLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px', // 50px手前で読み込み開始
      threshold: 0.1
    });

    // lazy クラスを持つ画像要素を監視
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

/**
 * Core Web Vitals測定
 * SEO対策とUX向上のためのパフォーマンス指標測定
 */
export const measureWebVitals = (): Promise<WebVitalsMetrics> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve({});
      return;
    }

    const metrics: WebVitalsMetrics = {};

    // LCP (Largest Contentful Paint) - 2.5秒以下が良好
    const measureLCP = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            const lastEntry = entries[entries.length - 1];
            metrics.lcp = lastEntry.startTime;
            
            if (process.env.NODE_ENV === 'development') {
              console.log(`📊 LCP: ${lastEntry.startTime.toFixed(2)}ms`);
            }
          }
        });
        
        try {
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          // ブラウザがサポートしていない場合は無視
        }
      }
    };

    // FID (First Input Delay) - 100ms以下が良好
    const measureFID = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fid = (entry as PerformanceEventTiming).processingStart - entry.startTime;
            metrics.fid = fid;
            
            if (process.env.NODE_ENV === 'development') {
              console.log(`📊 FID: ${fid.toFixed(2)}ms`);
            }
          });
        });
        
        try {
          observer.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          // ブラウザがサポートしていない場合は無視
        }
      }
    };

    // CLS (Cumulative Layout Shift) - 0.1以下が良好
    const measureCLS = () => {
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          
          metrics.cls = clsValue;
          
          if (process.env.NODE_ENV === 'development') {
            console.log(`📊 CLS: ${clsValue.toFixed(4)}`);
          }
        });
        
        try {
          observer.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          // ブラウザがサポートしていない場合は無視
        }
      }
    };

    // 測定開始
    measureLCP();
    measureFID();
    measureCLS();

    // 5秒後にPromiseを解決
    setTimeout(() => resolve(metrics), 5000);
  });
};

/**
 * ページロード時間測定（修正版）
 * 負の値問題を解決し、より正確な測定を実現
 */
export const measurePageLoadTime = (): Promise<number> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(0);
      return;
    }

    const measureOnLoad = () => {
      if ('performance' in window) {
        // Navigation Timing API v2を使用
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation && navigation.loadEventEnd > 0 && navigation.fetchStart > 0) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          const domReady = navigation.domContentLoadedEventEnd - navigation.fetchStart;
          const firstByte = navigation.responseStart - navigation.fetchStart;
          
          if (loadTime > 0) {
            if (process.env.NODE_ENV === 'development') {
              console.log(`📊 Page load time: ${loadTime.toFixed(2)}ms`);
              console.log(`📊 DOM ready: ${domReady.toFixed(2)}ms`);
              console.log(`📊 First byte: ${firstByte.toFixed(2)}ms`);
            }
            resolve(loadTime);
            return;
          }
        }
        
        // フォールバック: performance.timing（旧API）を使用
        if (performance.timing) {
          const timing = performance.timing;
          const loadTime = timing.loadEventEnd - timing.navigationStart;
          
          if (loadTime > 0) {
            if (process.env.NODE_ENV === 'development') {
              console.log(`📊 Page load time (fallback): ${loadTime.toFixed(2)}ms`);
            }
            resolve(loadTime);
            return;
          }
        }
      }
      
      resolve(0);
    };

    // ページロード完了後に測定
    if (document.readyState === 'complete') {
      setTimeout(measureOnLoad, 100);
    } else {
      window.addEventListener('load', () => {
        setTimeout(measureOnLoad, 100);
      }, { once: true });
    }
  });
};

/**
 * Critical Resource Hints を設定
 * 光回線比較サイト向けのアフィリエイトドメインも含む
 */
export const setupResourceHints = () => {
  // DNS prefetch for affiliate and analytics domains
  const dnsPrefetchDomains = [
    'www.google-analytics.com',
    'www.googletagmanager.com',
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'px.a8.net',
    'ck.jp.ap.valuecommerce.com',
    'www.tcs-asp.net',
    'tr.webantenna.info',
    'h.accesstrade.net',
    'www.rentracks.jp'
  ];

  dnsPrefetchDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = `//${domain}`;
    document.head.appendChild(link);
  });

  // Preconnect to critical origins only
  const preconnectOrigins = [
    'https://fonts.googleapis.com',
    'https://www.google-analytics.com'
  ];

  preconnectOrigins.forEach(origin => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = origin;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

/**
 * 重要なリソースのプリロード（条件付き）
 * フォントプリロード警告を回避するため、実際に使用されるリソースのみプリロード
 */
export const preloadCriticalResources = () => {
  // 開発環境ではプリロードを無効化（警告回避）
  if (process.env.NODE_ENV === 'development') {
    return;
  }

  // フォントの使用を確認してからプリロード
  const checkAndPreloadFont = () => {
    // CSSでInter フォントが実際に使用されているかチェック
    const computedStyle = window.getComputedStyle(document.body);
    const fontFamily = computedStyle.fontFamily;
    
    if (fontFamily.includes('Inter') || fontFamily.includes('system-ui')) {
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    }
  };

  // DOMContentLoaded後にフォントをチェック
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAndPreloadFont);
  } else {
    checkAndPreloadFont();
  }
};

/**
 * アフィリエイトリンククリック追跡
 * シンプル光回線比較サイト向けのコンバージョン測定
 */
export const trackAffiliateClick = (providerName: string, linkType: 'official' | 'campaign', position: number): void => {
  // Google Analytics 4でカスタムイベント送信
  if (typeof gtag !== 'undefined') {
    gtag('event', 'affiliate_click', {
      provider_name: providerName,
      link_type: linkType,
      position: position,
      page_location: window.location.href,
      event_category: 'affiliate',
      event_label: `${providerName}_${linkType}`
    });
  }

  // Firebase Analyticsへの送信（利用可能な場合）
  if (typeof window !== 'undefined' && 'dataLayer' in window) {
    (window as any).dataLayer.push({
      event: 'affiliate_click',
      provider_name: providerName,
      link_type: linkType,
      position: position
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log(`🔗 [シンプル光回線比較] Affiliate click tracked: ${providerName} (${linkType}) at position ${position}`);
  }
};

/**
 * ユーザーエンゲージメント測定
 * 光回線比較サイトのユーザー行動分析
 */
export const trackUserEngagement = (): void => {
  let scrollDepth = 0;
  let timeOnPage = Date.now();
  let isEngaged = false;

  // スクロール深度の測定（パフォーマンス最適化）
  const trackScrollDepth = (() => {
    let ticking = false;
    
    return () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScroll = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
          
          if (currentScroll > scrollDepth && currentScroll % 25 === 0) {
            scrollDepth = currentScroll;
            
            if (typeof gtag !== 'undefined') {
              gtag('event', 'scroll_depth', {
                scroll_depth: scrollDepth,
                page_location: window.location.href,
                event_category: 'engagement'
              });
            }
          }
          
          // エンゲージメント判定（50%以上スクロールまたは30秒以上滞在）
          if (!isEngaged && (currentScroll >= 50 || (Date.now() - timeOnPage) >= 30000)) {
            isEngaged = true;
            if (typeof gtag !== 'undefined') {
              gtag('event', 'user_engaged', {
                engagement_time: Math.round((Date.now() - timeOnPage) / 1000),
                scroll_depth: currentScroll,
                page_location: window.location.href
              });
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };
  })();

  // ページ離脱時の滞在時間測定
  const trackTimeOnPage = () => {
    const timeSpent = Math.round((Date.now() - timeOnPage) / 1000);
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_engagement', {
        time_on_page: timeSpent,
        scroll_depth: scrollDepth,
        page_location: window.location.href,
        event_category: 'engagement'
      });
    }
  };

  // イベントリスナーの設定
  window.addEventListener('scroll', trackScrollDepth, { passive: true });
  window.addEventListener('beforeunload', trackTimeOnPage);
  
  // フォーカス離脱時の追跡
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      trackTimeOnPage();
    }
  });
};

/**
 * パフォーマンス最適化の初期化
 * 光回線比較サイト向けの包括的な最適化設定
 */
export const initPerformanceOptimizations = async (): Promise<void> => {
  // Resource Hintsを設定
  setupResourceHints();
  
  // 重要リソースをプリロード（本番環境のみ）
  preloadCriticalResources();
  
  // Web Vitals測定開始
  const vitalsPromise = measureWebVitals();
  
  // ページロード時間測定
  const loadTimePromise = measurePageLoadTime();
  
  // ユーザーエンゲージメント追跡
  trackUserEngagement();
  
  // DOMContentLoaded後に遅延読み込み設定
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupLazyLoading);
  } else {
    setupLazyLoading();
  }

  // 測定結果の取得（非同期）
  try {
    const [vitals, loadTime] = await Promise.all([vitalsPromise, loadTimePromise]);
    
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Performance metrics:', { vitals, loadTime });
    }
    
    // パフォーマンス指標をAnalyticsに送信
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vitals', {
        lcp: vitals.lcp,
        fid: vitals.fid,
        cls: vitals.cls,
        load_time: loadTime,
        event_category: 'performance'
      });
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Performance measurement failed:', error);
    }
  }
};

// TypeScript型定義の強化
declare global {
  function gtag(...args: any[]): void;
  interface Window {
    dataLayer: any[];
  }
}

// パフォーマンス指標の型定義
export interface WebVitalsMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  pageLoadTime?: number;
}

// アフィリエイト追跡の型定義
export interface AffiliateTrackingData {
  providerName: string;
  linkType: 'official' | 'campaign';
  position: number;
  timestamp: number;
  userId?: string;
}

// Performance Observer用の型定義
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  cancelable?: boolean;
}
