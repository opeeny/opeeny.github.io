importScripts('/cache-polyfill.js');
var cacheName = "opeeny-v1";
var urlsToCache = [
    '/',
    '/index.html?homescreen=1',
    '/?homescreen=1',
    '/home.html',
    '/cover.css',
    '/gop.css',
    '/style.css',
    '/css/bootstrap.min.css',
    '/css/font-awesome.min.css',
    '/css/pe-icon-7-stroke.min.css',
    '/css/slick.min.css',
    '/css/style.css',
    '/js/ajax.js',
    '/js/bootstrap.min.js',
    '/js/isotope.pkgd.min.js',
    '/js/jquery-2.2.4.min.js',
    '/js/jquery.countTo.min.js',
    '/js/jquery.nicescroll.min.js',
    '/js/plugins.js',
    '/js/popper.min.js',
    '/js/progressbar.min.js',
    '/js/script.js',
    '/js/slick.min.js',
    '/js/typed.min.js',
    '/manifest.json',
    '/images/opeeny.jpg',
    '/images/andrew.jpeg',
    '/images/cover.jpg',
    '/images/fahad.jpg',
    '/images/chris.png',
    '/images/master.JPG',
    '/images/pp.jpg',
    '/images/uace_small.jpg',
    '/images/uace.jpg',
    '/images/visa.JPG',
    '/images/vk.jpg',
    '/images/clients/eddy.jpeg',
    '/images/clients/nature.JPG',
    '/images/clients/round.JPG',
    '/images/android-chrome-192x192.png',
    '/images/android-chrome-512x512.png',
    '/images/apple-touch-icon.png',
    '/images/mstile-150x150.png',
    '/images/safari-pinned-tab.svg',
    '/images/favicon-16x16.png',
    'images/favicon-32x32.png'

];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            console.log("Opened cache")
            return cache.addAll(urlsToCache);
        })
    );
});
/*return cached response. This code is fetching from the catch and return requests orelse if not cached, it picks direct from the network */
//If we want to cache new requests cumulatively
self.addEventListener('fetch', function(event) {
    //#console.log("wait..wait..am fetching.."+event.request.url)
    console.log(event.request.url)
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            if(response){
                return response;
            }
            return fetch(event.request)
            .then(function(response){
                //Check if we received a valid response
                if(!response || response.status !== 200 || response.type !== 'basic'){
                    return response;
                }
                //Clone the response
            var responseToCache = response.clone();
            caches.open(cacheName)
                .then(function(cache){
                    cache.put(event.request, responseToCache);
                });
                return response;
            })
           
        })
    );
});