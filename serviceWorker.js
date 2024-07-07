self.addEventListener('install', ({ waitUntil }) => {
  const precacheResources = [
    '/',
    '/index.html',
    '/index.js',
    '/index.css',
    '/favicon.ico',
    '/favicon-16x16.png',
    '/favicon-32x32.png',
    '/android-chrome-192x192.png',
    '/android-chrome-512x512.png',
    '/apple-touch-icon.png',
  ]

  return waitUntil(caches.open('camirror').then(({ addAll }) => addAll(precacheResources)))
})

self.addEventListener('fetch', (event) =>
  event.respondWith(caches.match(event.request).then((response) => response ?? fetch(event.request))),
)
