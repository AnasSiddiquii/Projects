let cacheData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/pwa/",

        "/pwa/users",

        "/pwa/about",

        "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",

        "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",

        "/static/js/bundle.js",

        "/manifest.json",

        "/favicon.ico",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
    
  if (!navigator.onLine) {
        
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          return result;
        }
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      })
    );
  }
});
