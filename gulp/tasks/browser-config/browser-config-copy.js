const gulp = require('gulp')

module.exports = function(config) {
    return function() {
        return gulp.src(config.src.browserConfig).pipe(gulp.dest(config.dest.browserConfig))
    }
}
