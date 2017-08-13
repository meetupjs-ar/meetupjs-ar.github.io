const swPrecache = require('sw-precache')

module.exports = function(config) {
    return function(done) {
        const swconfig = {
            cacheId: 'meetupjs.com.ar',
            handleFetch: config.isProduction,
            runtimeCaching: config.sw.caching.map(function(url) {
                return {
                    urlPattern: new RegExp(url),
                    handler: 'fastest',
                    options: {
                        name: 'runtime-cache',
                        maxAgeSeconds: 60 * 60
                    }
                }
            }),
            verbose: true,
            staticFileGlobs: [config.dest.html + '**/*.*'],
            stripPrefix: config.dest.html
        }

        swPrecache.write(config.sw.file, swconfig, done)
    }
}
