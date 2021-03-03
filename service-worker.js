let cacheName = "lessonsApp-v9";

let cacheFiles = [
  "index.html",
  "js/Lessons.js",
  "lessonApp.webmanifest",
  "css/styles.css",
  "img/Logo.png",
  "img/icon.png",
  "img/cs.jpg",
  "img/maths.svg",
  "img/english.png",
  "img/science.png",
  "img/history.png",
  "img/business.png",
  "img/geography.png",
  "img/IT.png",
  "img/PhyicalEducation.png",
  "img/Re.png",
];

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install Learning App");
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("[Service Worker] Caching all the files");
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (r) {
      // Download the file if it is not in the cache,
      return (
        r ||
        fetch(e.request).then(function (response) {
          // add the new file to cache
          return caches.open(cacheName).then(function (cache) {
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});
