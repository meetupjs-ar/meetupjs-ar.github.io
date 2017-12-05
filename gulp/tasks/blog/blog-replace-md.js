const fs = require('fs')
const gulp = require('gulp')
const highlightjs = require('highlight.js')
const marked = require('marked')
const path = require('path')
const replaceExt = require('replace-ext')
const tap = require('gulp-tap')

marked.setOptions({
    highlight: function(code) {
        return highlightjs.highlightAuto(code).value
    }
})

module.exports = function(config) {
    return function() {
        return gulp
            .src(config.blog.tempHTML)
            .pipe(
                tap(function(file) {
                    const markdownFileName = replaceExt(file.path, '.md')
                    const markdownFilePath = path.join(
                        process.cwd(),
                        config.blog.tempDir,
                        path.basename(markdownFileName)
                    )
                    const markdown = fs.readFileSync(markdownFilePath, 'utf8')
                    const html = marked(markdown)

                    file.contents = Buffer.from(
                        file.contents.toString().replace(/@markdown/g, html)
                    )
                })
            )
            .pipe(gulp.dest(config.blog.tempHTMLDir))
    }
}
