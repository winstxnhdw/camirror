const cacheName = 'camirror'

self.addEventListener('install', (event) =>
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(['/', '/index.js', '/index.html', '/index.css'])),
  ),
)

self.addEventListener('activate', (_) => console.log('Service Worker is ready'))

self.addEventListener('fetch', (event) =>
  event.respondWith(caches.match(event.request).then((response) => response ?? fetch(event.request))),
)
