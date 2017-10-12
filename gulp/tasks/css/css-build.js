const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const postcssImport = require('postcss-import')

module.exports = function(config) {
    return function() {
        return gulp
            .src(config.src.css)
            .pipe(
                postcss([
                    postcssImport,
                    autoprefixer({
                        browsers: ['last 2 versions']
                    }),
                    cssnano({
                        discardComments: {
                            removeAll: true
                        }
                    })
                ])
            )
            .pipe(gulp.dest(config.dest.css))
    }
}
