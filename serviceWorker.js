const cacheName = 'camirror'

self.addEventListener('install', async (event) => {
  const cache = await caches.open(cacheName)
  event.waitUntil(cache.addAll(['/', '/index.js', '/index.html', '/index.css']))
})

self.addEventListener('activate', (_) => console.log('Service Worker is ready'))

self.addEventListener('fetch', async (event) => {
  const response = await caches.match(event.request)
  event.respondWith(response ?? fetch(event.request))
})
