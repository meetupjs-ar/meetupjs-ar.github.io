const gulp = require('gulp')

module.exports = function (config) {
    return function () {
        return gulp.src(config.src.cname)
            .pipe(gulp.dest(config.dest.cname))
    }
}
