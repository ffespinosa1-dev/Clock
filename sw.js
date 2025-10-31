self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('analog-clock-v3').then(cache => {
    return cache.addAll([
      './',
      './index.html',
      './manifest.webmanifest',
      './sw.js',
      './icons/icon-192.png',
      './icons/icon-512.png'
    ]);
  }));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
