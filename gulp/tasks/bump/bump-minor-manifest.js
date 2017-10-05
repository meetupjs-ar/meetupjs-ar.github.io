const bump = require('gulp-bump')
const gulp = require('gulp')

module.exports = function(config) {
    return function() {
        gulp
            .src(config.src.manifest)
            .pipe(bump({ type: 'minor' }))
            .pipe(gulp.dest(config.src.root))
    }
}
