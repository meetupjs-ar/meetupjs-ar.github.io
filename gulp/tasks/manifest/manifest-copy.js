const gulp = require('gulp')

module.exports = function (config) {
    return function () {
        return gulp.src(config.src.manifest)
            .pipe(gulp.dest(config.dest.manifest))
    }
}
