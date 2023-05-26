const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/coffee.jpg",
    "/images/coffee.jpg",
    "/images/coffee.jpg",
    "/images/coffee.jpg",
    "/images/coffee.jpg",
    "/images/coffee.jpg",
    "/images/coffee.jpg",
    "/images/coffee.jpg",
    "/images/coffee.jpg"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets);
        })
    );
    self.skipWaiting(); // Agrega esta línea para activar el Service Worker inmediatamente
});

self.addEventListener("activate", activateEvent => {
    activateEvent.waitUntil(
        // Elimina las caches antiguas si existen
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => cacheName !== staticDevCoffee)
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});
