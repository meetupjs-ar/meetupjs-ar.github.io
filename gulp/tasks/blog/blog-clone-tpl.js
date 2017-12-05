const fs = require('fs')
const gulp = require('gulp')
const replaceExt = require('replace-ext')
const tap = require('gulp-tap')

module.exports = function(config) {
    return function() {
        const postTemplate = fs.readFileSync(config.blog.postTemplate)

        return gulp
            .src(config.blog.tempMd)
            .pipe(
                tap(function(file) {
                    file.contents = postTemplate
                    file.path = replaceExt(file.path, '.html')
                })
            )
            .pipe(gulp.dest(config.blog.tempHTMLDir))
    }
}
