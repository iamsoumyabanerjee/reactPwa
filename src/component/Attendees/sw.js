self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('precache-v1')
      .then(cache => cache.addAll('/', '/dist/index.html', '/dist/bundle.js'))
  )    
})