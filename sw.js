// Service Worker for performance optimization
const CACHE_NAME = 'hikari-comparison-v1';
const STATIC_CACHE_URLS = [
  '/',
  '/manifest.json',
  '/favicon.svg',
  '/robots.txt',
  '/sitemap.xml'
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
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_CACHE_URLS))
      .then(() => self.skipWaiting())
  );
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

  // 静的ファイルのキャッシュファースト戦略
  if (STATIC_CACHE_URLS.some(pattern => url.pathname.includes(pattern))) {
    event.respondWith(
      caches.match(request).then((response) => {
        return response || fetch(request);
      })
    );
    return;
  }

  // ランタイムキャッシュのStale While Revalidate戦略
  if (RUNTIME_CACHE_URLS.some(pattern => url.href.includes(pattern))) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(request).then((response) => {
          const fetchPromise = fetch(request).then((networkResponse) => {
            // 成功したレスポンスのみキャッシュ
            if (networkResponse.ok) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });

          // キャッシュがあればそれを返し、バックグラウンドで更新
          return response || fetchPromise;
        });
      })
    );
  }
});
