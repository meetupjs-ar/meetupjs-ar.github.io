const critical = require('critical').stream
const gulp = require('gulp')
const gutil = require('gulp-util')
const htmlmin = require('gulp-htmlmin')
const pkg = require('../../../package.json')
const replace = require('gulp-replace')

const htmlminOptions = {
    collapseWhitespace: true
}

module.exports = function(config) {
    return function() {
        return gulp
            .src(config.src.html)
            .pipe(replace('@version', pkg.version))
            .pipe(htmlmin(htmlminOptions))
            .pipe(
                critical({
                    base: '/dist/',
                    css: ['dist/css/main.css'],
                    dimensions: [
                        {
                            height: 480,
                            width: 320
                        },
                        {
                            height: 640,
                            width: 360
                        },
                        {
                            height: 768,
                            width: 1024
                        }
                    ],
                    extract: true,
                    ignore: ['@font-face', /url\(/],
                    inline: true,
                    minify: true
                })
            )
            .on('error', err => gutil.log(gutil.colors.red(err.message)))
            .pipe(gulp.dest(config.dest.html))
    }
}
