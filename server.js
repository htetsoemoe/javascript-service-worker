// Import and initialize Express JS, setting it to use port **3000**.
const express = require('express');
const app = express();
const port = 3000;

// Set up variables for the images.
const CACHE_TIMEOUT = 10000;
const MAX_IMAGES = 10;
var imageNumber = 0;
var lastUpdate = 0;

// Serve the static files.
app.use(express.static('public'));

// Serve an image which expires after `CACHE_TIMEOUT`.
app.get('/img', (req, res) => {
    serveImage(res, CACHE_TIMEOUT);
})

function serveImage(res, timeout) {
    var now = Date.now();

    if (now - lastUpdate > timeout) {
        imageNumber = (imageNumber + 1) % MAX_IMAGES;
        lastUpdate = Date.now();
    }

    var imageName = 'cat-' + (imageNumber + 1) + '.jpg';
    res.sendFile(imageName, { root: './imgs/' });
}

// Have Express JS begin listening for requests.
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})
