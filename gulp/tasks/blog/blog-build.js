const gulp = require('gulp')

module.exports = function(config) {
    return function() {
        return gulp.src(config.blog.tempHTML).pipe(gulp.dest(config.blog.distHTMLDir))
    }
}
