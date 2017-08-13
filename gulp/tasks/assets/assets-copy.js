const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

module.exports = function(config) {
    return function() {
        return gulp.src(config.src.assets).pipe(imagemin()).pipe(gulp.dest(config.dest.assets))
    }
}
