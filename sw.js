const CACHE_NAME = 'galeria-v5';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Instala o App no Cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Faz o App carregar mesmo sem internet
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
