// Service Worker for performance optimization
const CACHE_NAME = 'hikari-comparison-v4';
// GitHub Pages 配下(/simplehikarihikaku/)でも解決できるよう、先頭スラッシュなしの相対パスで指定
const STATIC_CACHE_URLS = [
  './',
  'site.webmanifest',
  'favicon.svg',
  'robots.txt',
  'sitemap.xml'
];

// キャッシュ戦略: Stale While Revalidate
const RUNTIME_CACHE_URLS = [
  '/assets/',
  'https://fonts.googleapis.com/',
  'https://fonts.gstatic.com/',
  'https://images.unsplash.com/'
];

// インストール時のキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(
      STATIC_CACHE_URLS.map(async (url) => {
        try {
          const req = new Request(url, { cache: 'reload' });
          const res = await fetch(req);
          if (res.ok) {
            await cache.put(req, res.clone());
          } else {
            console.warn('[SW] skip caching (non-OK):', url, res.status);
          }
        } catch (e) {
          console.warn('[SW] skip caching (error):', url, e);
        }
      })
    );
    await self.skipWaiting();
  })());
});

// アクティベーション時の古いキャッシュ削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// フェッチ時のキャッシュ戦略
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // HTMLナビゲーションは network-first（古い index.html に固定されるのを防ぐ）
  const isNavigationRequest = request.mode === 'navigate' || (
    request.headers.get('accept')?.includes('text/html')
  );
  if (isNavigationRequest) {
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetch(request);
          const cache = await caches.open(CACHE_NAME);
          // リクエストそのものをキーにキャッシュ
          cache.put(request, networkResponse.clone());
          return networkResponse;
        } catch (err) {
          const cache = await caches.open(CACHE_NAME);
          const cached = await cache.match(request);
          return cached || new Response('Offline', { status: 503 });
        }
      })()
    );
    return;
  }

  // 静的ファイルのキャッシュファースト戦略
  if (STATIC_CACHE_URLS.some(pattern => url.pathname.includes(pattern))) {
    event.respondWith(
      caches.match(request).then((response) => response || fetch(request))
    );
    return;
  }

  // ランタイムキャッシュの Stale-While-Revalidate（JS/CSS/外部リソース等）
  if (RUNTIME_CACHE_URLS.some(pattern => url.href.includes(pattern))) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(request).then((response) => {
          const fetchPromise = fetch(request).then((networkResponse) => {
            if (networkResponse.ok) cache.put(request, networkResponse.clone());
            return networkResponse;
          });
          return response || fetchPromise;
        })
      )
    );
  }
});
