const swPrecache = require('sw-precache')

module.exports = function(config) {
    return function(callback) {
        var swconfig = {
            cacheId: 'meetupjs',
            handleFetch: config.isProduction,
            runtimeCaching: config.sw.runtimeCaching.map(url => {
                return {
                    urlPattern: new RegExp(url),
                    handler: 'fastest',
                    options: {
                        name: 'runtime-cache',
                        maxAgeSeconds: 60 * 60
                    }
                }
            }),
            staticFileGlobs: [config.dest.html + '**/*.*'],
            stripPrefix: config.dest.html,
            verbose: true
        }

        swPrecache.write(config.sw.file, swconfig, callback)
    }
}
