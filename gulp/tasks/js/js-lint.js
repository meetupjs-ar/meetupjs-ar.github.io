const eslint = require('gulp-eslint')
const gulp = require('gulp')

module.exports = function (config) {
    return function () {
        return gulp.src(config.eslint.files)
            .pipe(eslint())
            .pipe(eslint.format())
    }
}
