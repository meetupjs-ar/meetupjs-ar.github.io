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
                    const metaTagsFileName = replaceExt(file.path, '.json')
                    const metaTagsFilePath = path.join(
                        process.cwd(),
                        config.blog.tempDir,
                        path.basename(metaTagsFileName)
                    )
                    const metaTags = require(metaTagsFilePath)

                    file.contents = Buffer.from(
                        file.contents
                            .toString()
                            .replace(/@title/g, metaTags.title)
                            .replace(/@version/g, pkg.version)
                    )
                })
            )
            .pipe(gulp.dest(config.blog.tempHTMLDir))
    }
}
