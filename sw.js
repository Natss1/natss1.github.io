const cacheName = 'FoodUpdate-v1';
const filesToCache = [
  './',
  './index.html',
  './staff1.html',
  './โรง1staff.html',
  './โรง2staff.html',
  './user1.html',
  './ดูเมนูโรง1.html',
  './ดูเมนูโรง2.html',
  './manifest.json',
  './logo.png'
];

// Install service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

// Activate service worker
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Fetch requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
