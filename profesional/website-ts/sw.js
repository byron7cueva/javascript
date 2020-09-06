const VERSION = 'v1';

// self es como el this para los service worker
// Evento cuando el navegador instala el service worker
self.addEventListener('install', event => {
  // Indicando que espere a que la cache este lista
  event.waitUntil(precache());
});

// Cada vez que ocurra una peticion
self.addEventListener('fetch', event => {
  const request = event.request;
  // solo queremos utilizar peticiones get
  if (request.method !== 'GET') return;

  //Buscar en cache haber si ya hay el recurso
  // Respondiendo con una respuesta cacheada
  event.respondWith(cachedResponse(request));

  // actualizar cache
  event.waitUntil(updateCache(request));
});

async function precache() {
  // Creando una instancia de cache
  const cache = await caches.open(VERSION);
  // Indicando los recursos que queremos que esten en cache
  // Necesitamos devolver la promesa
  return cache.addAll([
    /*
    '/', // Es importante agregar la ruta
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPlay.js',
    '/assets/plugins/AutoPause.js',
    '/assets/index.css',
    '/assets/BigBuckBunny.mp4',
    */
  ])
}

async function cachedResponse (request) {
  const cache = await caches.open(VERSION);
  //Preguntar al cache si tiene una copia del request
  const response = await cache.match(request);
  // Es posible que el response sea undefined devemos contestar con lo que nos da la red
  return response || fetch(request);
}

async function updateCache (request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  // con la llave request se guarda el response
  return cache.put(request, response);
}