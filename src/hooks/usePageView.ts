import { useEffect, useRef } from 'react';
import { analytics } from '../firebase/config';
import { logEvent } from 'firebase/analytics';

/**
 * ページビューを追跡するためのカスタムhook
 * SEO対策とパフォーマンス最適化を考慮したGoogle Analytics連携
 * 重複実行防止、SSR対応、エラーハンドリングを含む
 */
export const usePageView = (pageTitle: string) => {
  const hasTracked = useRef(false);
  const isInitialized = useRef(false);

  useEffect(() => {
    // SSR環境では実行しない
    if (typeof window === 'undefined') return;
    
    // 重複実行を防ぐ
    if (hasTracked.current) return;
    
    const trackPageView = async () => {
      try {
        // Firebase Analyticsの初期化確認
        if (analytics && !isInitialized.current) {
          // SEO用のページタイトル設定
          document.title = pageTitle;
          
          // Google Analyticsにページビューを送信
          logEvent(analytics, 'page_view', {
            page_title: pageTitle,
            page_location: window.location.href,
            page_path: window.location.pathname,
            page_referrer: document.referrer || 'direct'
          });
          
          // パフォーマンス測定データも送信
          if ('performance' in window) {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            if (navigation) {
              logEvent(analytics, 'page_load_performance', {
                load_time: Math.round(navigation.loadEventEnd - navigation.fetchStart),
                dom_content_loaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart)
              });
            }
          }
          
          if (process.env.NODE_ENV === 'development') {
            console.log(`📊 Page view tracked: ${pageTitle} - ${window.location.pathname}`);
          }
          
          hasTracked.current = true;
          isInitialized.current = true;
        }
      } catch (error) {
        // エラーハンドリング（本番環境では静かに失敗）
        if (process.env.NODE_ENV === 'development') {
          console.warn('Analytics tracking failed:', error);
        }
      }
    };

    // DOMが完全に読み込まれてから実行
    if (document.readyState === 'complete') {
      trackPageView();
    } else {
      window.addEventListener('load', trackPageView, { once: true });
    }

    return () => {
      window.removeEventListener('load', trackPageView);
    };
  }, [pageTitle]);
};
