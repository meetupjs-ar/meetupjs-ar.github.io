const gulp = require('gulp')

module.exports = function(config) {
    return function() {
        gulp.watch(config.watch.css, ['pwa-build'])
        gulp.watch(config.watch.html, ['pwa-build'])
        gulp.watch(config.watch.js, ['pwa-build'])
    }
}
