const critical = require('critical').stream
const gulp = require('gulp')
const gulpif = require('gulp-if')
const htmlmin = require('gulp-htmlmin')
const injectSvg = require('gulp-inject-svg')
const pkg = require('../../../package.json')
const replace = require('gulp-replace')

module.exports = function(config) {
    return function() {
        return gulp
            .src(config.src.html)
            .pipe(
                gulpif(
                    config.isProduction,
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
                        ignore: ['@font-face'],
                        inline: true
                    })
                )
            )
            .pipe(replace('@version', pkg.version))
            .pipe(replace('@isnardi', config.isnardi))
            .pipe(injectSvg({ base: 'src/' }))
            .pipe(gulpif(config.isProduction, htmlmin(config.htmlminOptions)))
            .pipe(gulp.dest(config.dest.html))
    }
}
