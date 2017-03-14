const browserSync = require('browser-sync')
const gulp = require('gulp')
const path = require('path')

const configPath = path.join(__dirname, 'gulp', 'configuration')
const config = require(configPath)

function getTask (taskName) {
    const taskPath = path.join(__dirname, 'gulp/tasks', taskName)
    return require(taskPath)(config)
}

browserSync.create(config.staticServer.name)

gulp.task('build', ['assets-build', 'html-build', 'css-build', 'js-build'])

gulp.task('assets-build', ['assets-clean', 'assets-copy'])
gulp.task('assets-clean', getTask('assets/assets-clean'))
gulp.task('assets-copy', ['assets-clean'], getTask('assets/assets-copy'))

gulp.task('css-build', ['css-clean', 'css-lint'], getTask('css/css-build'))
gulp.task('css-clean', getTask('css/css-clean'))
gulp.task('css-lint', getTask('css/css-lint'))

gulp.task('html-build', ['html-clean'], getTask('html/html-build'))
gulp.task('html-clean', getTask('html/html-clean'))

gulp.task('js-build', ['js-clean', 'js-lint'], getTask('js/js-build'))
gulp.task('js-clean', getTask('js/js-clean'))
gulp.task('js-lint', getTask('js/js-lint'))

gulp.task('watch', getTask('general/watch'))

gulp.task('default', ['build', 'watch'], getTask('general/browser-sync'))
