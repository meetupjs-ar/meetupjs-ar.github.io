const fs = require('fs')
const gulp = require('gulp')
const marked = require('marked')
const path = require('path')
const replaceExt = require('replace-ext')
const tap = require('gulp-tap')

module.exports = function(config) {
    return function() {
        return gulp
            .src(config.blog.tempHTML)
            .pipe(
                tap(function(file) {
                    const mdFileName = replaceExt(file.path, '.md')
                    const mdFilePath = path.join(
                        process.cwd(),
                        config.blog.tempDir,
                        path.basename(mdFileName)
                    )
                    const md = fs.readFileSync(mdFilePath, 'utf8')

                    file.contents = Buffer.from(
                        file.contents.toString().replace(/@markdown/g, marked(md))
                    )
                })
            )
            .pipe(gulp.dest(config.blog.tempHTMLDir))
    }
}
