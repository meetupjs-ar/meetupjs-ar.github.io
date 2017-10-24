const browserSync = require('browser-sync')
const gulp = require('gulp')
const path = require('path')

const configPath = path.join(__dirname, 'gulp', 'configuration')
const config = require(configPath)

function getTask(taskName) {
    const taskPath = path.join(__dirname, 'gulp/tasks', taskName)
    return require(taskPath)(config)
}

browserSync.create(config.staticServer.name)

gulp.task('build', [
    'browser-config-copy',
    'cname-copy',
    'manifest-copy',
    'assets-build',
    'html-build',
    'css-build',
    'js-build',
    'pwa-build'
])

gulp.task('assets-build', ['assets-clean', 'assets-copy'])
gulp.task('assets-clean', getTask('assets/assets-clean'))
gulp.task('assets-copy', ['assets-clean'], getTask('assets/assets-copy'))

gulp.task('bump-minor', ['bump-minor-pkg', 'bump-minor-manifest'])
gulp.task('bump-minor-manifest', getTask('bump/bump-minor-pkg'))
gulp.task('bump-minor-pkg', getTask('bump/bump-minor-manifest'))

gulp.task(
    'browser-config-copy',
    ['browser-config-clean'],
    getTask('browser-config/browser-config-copy')
)
gulp.task('browser-config-clean', getTask('browser-config/browser-config-clean'))

gulp.task('cname-copy', ['cname-clean'], getTask('cname/cname-copy'))
gulp.task('cname-clean', getTask('cname/cname-clean'))

gulp.task('css-build', ['css-clean', 'css-lint'], getTask('css/css-build'))
gulp.task('css-clean', getTask('css/css-clean'))
gulp.task('css-lint', getTask('css/css-lint'))

gulp.task('html-build', ['html-clean'], getTask('html/html-build'))
gulp.task('html-clean', getTask('html/html-clean'))

gulp.task('js-build', ['js-clean', 'js-lint'], getTask('js/js-build'))
gulp.task('js-clean', getTask('js/js-clean'))
gulp.task('js-lint', getTask('js/js-lint'))

gulp.task('manifest-copy', ['manifest-clean'], getTask('manifest/manifest-copy'))
gulp.task('manifest-clean', getTask('manifest/manifest-clean'))

gulp.task(
    'pwa-clean',
    ['js-build', 'css-build', 'html-build', 'assets-build'],
    getTask('pwa/pwa-clean')
)

gulp.task('pwa-build', ['pwa-clean'], getTask('pwa/pwa-build'))

gulp.task('watch', getTask('general/watch'))

gulp.task('default', ['build', 'watch'], getTask('general/browser-sync'))
