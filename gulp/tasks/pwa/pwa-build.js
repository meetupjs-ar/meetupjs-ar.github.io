const swPrecache = require('sw-precache');

module.exports = function (config) {
  return function(callback) {
    var swconfig = {
      cacheId: 'meetupjs-ar.github.io',
      handleFetch: config.isProduction,
      runtimeCaching: config.sw.caching.map(function(url){
        return {
          urlPattern: new RegExp(url),
          handler: 'fastest',
          options: {
            name: 'runtime-cache',
            maxAgeSeconds: 60*60
          }
        }
      }),
      // verbose: true,
      staticFileGlobs: [config.dest.html + '**/*.*'],
      stripPrefix: config.dest.html
    };

    swPrecache.write(config.sw.file, swconfig, callback);
  }
}
