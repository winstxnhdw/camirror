const cacheName = 'camirror'

self.addEventListener('install', (event) =>
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(['/', '/index.js', '/index.html', '/index.css'])),
  ),
)

self.addEventListener('fetch', async (event) => {
  const response = await caches.match(event.request)
  event.respondWith(response || fetch(event.request))
})

self.addEventListener('activate', async (event) => {
  const cacheNames = await caches.keys()
  const promises = await Promise.all(cacheNames.map((name) => (name !== cacheName ? caches.delete(name) : undefined)))
  event.waitUntil(promises)
})
