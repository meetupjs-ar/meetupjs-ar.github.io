const swPrecache = require('sw-precache')

module.exports = function(config) {
    const pkg = require(`../../../${config.src.pkg}`)

    return function(done) {
        var swconfig = {
            cacheId: pkg.name,
            handleFetch: true,
            runtimeCaching: config.sw.runtimeCaching.map(url => {
                return {
                    urlPattern: new RegExp(url),
                    handler: 'fastest',
                    options: {
                        name: pkg.name,
                        maxAgeSeconds: 60 * 60
                    }
                }
            }),
            staticFileGlobs: [config.dest.html + '**/*.*'],
            stripPrefix: config.dest.html,
            verbose: true
        }

        swPrecache.write(config.sw.file, swconfig, done)
    }
}
