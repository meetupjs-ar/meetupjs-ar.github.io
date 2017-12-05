const gulp = require('gulp')
const gulpif = require('gulp-if')
const htmlmin = require('gulp-htmlmin')

module.exports = function(config) {
    return function() {
        return gulp
            .src(config.blog.tempHTML)
            .pipe(gulpif(config.isProduction, htmlmin(config.htmlminOptions)))
            .pipe(gulp.dest(config.dest.blog))
    }
}
