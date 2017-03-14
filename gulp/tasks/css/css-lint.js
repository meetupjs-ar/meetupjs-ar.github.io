const gulp = require('gulp')
const stylelint = require('gulp-stylelint')

module.exports = function (config) {
    return function () {
        return gulp.src(config.stylelint.css)
            .pipe(stylelint({
                failAfterError: false,
                reporters: [{
                    formatter: 'verbose',
                    console: true
                }]
            }))
    }
}
