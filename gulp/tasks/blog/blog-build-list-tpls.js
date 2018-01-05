const gulp = require('gulp')
const path = require('path')
const replaceExt = require('replace-ext')
const tap = require('gulp-tap')
const html = require('yo-yo')

const compileTemplate = function(article, fileName) {
    const realFileName = fileName.substring(fileName.indexOf('-') + 1)

    return html`<section class="mt5">
        <article>
            <h2 class="black-alternative f4 f3-ns mb3 mt0">${article.title}</h2>
            <p class="f6 ma0 silver">
                Por
                <strong>${article.authors.join(', ')}</strong>. Publicado el
                <strong>${article.publishedDay}</strong>.
            </p>
            <p class="lh-copy mv3">${article.introduction}</p>
            <a href="/articulos/${realFileName}" class="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 dib f6 grow link ph3 pv2 ttu">
                Leer
            </a>
        </article>
    </section>`
}

module.exports = function(config) {
    return function() {
        return gulp
            .src(config.blog.tempJSON)
            .pipe(
                tap(function(file) {
                    const fileName = replaceExt(file.path, '.html')

                    file.contents = Buffer.from(
                        compileTemplate(
                            JSON.parse(file.contents.toString()),
                            path.basename(fileName)
                        ).toString()
                    )
                    file.path = fileName
                })
            )
            .pipe(gulp.dest(config.blog.tempHTMLArticlesDir))
    }
}
