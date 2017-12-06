const gulp = require('gulp')
const path = require('path')
const pkg = require('../../../package.json')
const replaceExt = require('replace-ext')
const tap = require('gulp-tap')

module.exports = function(config) {
    return function() {
        return gulp
            .src(config.blog.tempHTML)
            .pipe(
                tap(function(file) {
                    const articleFileName = replaceExt(file.path, '.json')
                    const articleFilePath = path.join(
                        process.cwd(),
                        config.blog.tempDir,
                        path.basename(articleFileName)
                    )
                    const article = require(articleFilePath)

                    file.contents = Buffer.from(
                        file.contents
                            .toString()
                            .replace(/@title/g, article.title)
                            .replace(/@introduction/g, article.introduction)
                            .replace(/@version/g, pkg.version)
                    )
                })
            )
            .pipe(gulp.dest(config.blog.tempHTMLDir))
    }
}
