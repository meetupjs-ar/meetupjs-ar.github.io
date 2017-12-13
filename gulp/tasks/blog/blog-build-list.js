const fs = require('fs')
const concat = require('gulp-concat')
const gulp = require('gulp')
const gulpif = require('gulp-if')
const htmlmin = require('gulp-htmlmin')
const injectSvg = require('gulp-inject-svg')
const pkg = require('../../../package.json')
const tap = require('gulp-tap')

module.exports = function(config) {
    return function() {
        const listTemplate = fs.readFileSync(config.blog.listTemplate)

        return gulp
            .src(config.blog.tempHTMLArticles)
            .pipe(concat('blog.html'))
            .pipe(
                tap(function(file) {
                    file.contents = Buffer.from(
                        listTemplate
                            .toString()
                            .replace(/@articles/g, file.contents)
                            .replace(/@isnardi/g, config.isnardi)
                            .replace(/@version/g, pkg.version)
                    )
                })
            )
            .pipe(injectSvg({ base: 'src/' }))
            .pipe(gulpif(config.isProduction, htmlmin(config.htmlminOptions)))
            .pipe(gulp.dest(config.dest.html))
    }
}
