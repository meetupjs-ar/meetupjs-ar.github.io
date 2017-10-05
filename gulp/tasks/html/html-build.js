const browserSync = require('browser-sync')
const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const pkg = require('../../../package.json')
const replace = require('gulp-replace')

const htmlminOptions = {
    collapseWhitespace: true
}

module.exports = function(config) {
    const server = browserSync.get(config.staticServer.name)

    return function() {
        return gulp
            .src(config.src.html)
            .pipe(replace('@version', pkg.version))
            .pipe(htmlmin(htmlminOptions))
            .pipe(gulp.dest(config.dest.html))
            .pipe(server.stream())
    }
}
