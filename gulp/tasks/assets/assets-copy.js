const gulp = require('gulp')
const gulpif = require('gulp-if')
const imagemin = require('gulp-imagemin')

module.exports = function(config) {
    return function() {
        return gulp
            .src(config.src.assets)
            .pipe(gulpif(config.isProduction, imagemin()))
            .pipe(gulp.dest(config.dest.assets))
    }
}
