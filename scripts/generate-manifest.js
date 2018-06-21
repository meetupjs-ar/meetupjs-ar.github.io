const fs = require('fs');
const path = require('path');

const manifestPublicPath = path.resolve('public', 'manifest.json');
const manifestSrcPath = path.resolve('src', 'manifest.json');
const manifest = require(manifestSrcPath);

const newManifest = Object.assign({}, manifest, {
    version: process.env.REACT_APP_VERSION,
    name: process.env.REACT_APP_TITLE,
    short_name: process.env.REACT_APP_TITLE
});

fs.writeFileSync(manifestPublicPath, JSON.stringify(newManifest, null, 2));
console.log('manifest generated successfully 😎');
console.log(JSON.stringify(newManifest, null, 2));
