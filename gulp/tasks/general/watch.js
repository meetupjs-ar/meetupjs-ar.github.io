const gulp = require('gulp')

module.exports = function (config) {
    return function () {
        gulp.watch(config.watch.css, ['css-build'])
        gulp.watch(config.watch.html, ['html-build'])
        gulp.watch(config.watch.js, ['js-build'])
    }
}
