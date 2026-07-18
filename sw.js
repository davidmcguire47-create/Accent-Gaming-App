const CACHE_NAME = 'accent-gaming-v1';
const ASSETS = [
  '/Accent-Gaming-App/',
  '/Accent-Gaming-App/index.html',
  '/Accent-Gaming-App/manifest.json',
  '/Accent-Gaming-App/image_3fb224.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
