navigator.serviceWorker.register('service-worker.js', { scope: "./" });
navigator.serviceWorker.ready.then(console.log('Service Worker is running.'));
