const timezoneapp = "timezone"
const assets = [
    "/",
    "/index.html",
    "./css/bootstrap.css",
    "./css/fontawesome-all.css",
    "./css/magnific-popup.css",
    "./css/styles.css",
    "./css/swiper.css",
    "./js/bootstrap.min.js",
    "./js/init-firebase.js",
    "./js/jquery.easing.min.js",
    "./js/jquery.magnific-popup.js",
    "./js/jquery.min.js",
    "./js/morphext.min.js",
    "./js/popper.min.js",
    "./js/scripts.js",
    "./js/swiper.min.js",
    "./js/validate-firebase.js",
    "./js/validator.min.js",
    "./images/*"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(timezoneapp).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})