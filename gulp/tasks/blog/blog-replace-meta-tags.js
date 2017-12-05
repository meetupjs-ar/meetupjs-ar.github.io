const gulp = require('gulp')
const path = require('path')
const replaceExt = require('replace-ext')
const tap = require('gulp-tap')

module.exports = function(config) {
    return function() {
        return gulp
            .src(config.blog.tempHTML)
            .pipe(
                tap(function(file) {
                    const jsonFileName = replaceExt(file.path, '.json')
                    const jsonFilePath = path.join(
                        process.cwd(),
                        config.blog.tempDir,
                        path.basename(jsonFileName)
                    )
                    const json = require(jsonFilePath)

                    file.contents = Buffer.from(
                        file.contents.toString().replace(/@title/g, json.title)
                    )
                })
            )
            .pipe(gulp.dest(config.blog.tempHTMLDir))
    }
}
