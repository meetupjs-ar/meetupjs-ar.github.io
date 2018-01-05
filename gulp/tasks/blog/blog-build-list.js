const fs = require('fs')
const concat = require('gulp-concat')
const gulp = require('gulp')
const gulpif = require('gulp-if')
const htmlmin = require('gulp-htmlmin')
const injectSvg = require('gulp-inject-svg')
const path = require('path')
const pkg = require('../../../package.json')
const sort = require('gulp-sort')
const tap = require('gulp-tap')

module.exports = function(config) {
    return function() {
        const listTemplate = fs.readFileSync(config.blog.listTemplate)

        return gulp
            .src(config.blog.tempHTMLArticles)
            .pipe(
                sort(function(file1, file2) {
                    const basename1 = path.basename(file1.path)
                    const basename2 = path.basename(file2.path)
                    const index1 = Number(basename1.substring(0, basename1.indexOf('-')))
                    const index2 = Number(basename2.substring(0, basename2.indexOf('-')))

                    return index2 - index1
                })
            )
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
