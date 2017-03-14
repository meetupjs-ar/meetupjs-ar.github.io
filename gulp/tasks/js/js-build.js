const babelify = require('babelify')
const browserify = require('browserify')
const browserSync = require('browser-sync')
const buffer = require('vinyl-buffer')
const envify = require('envify/custom')
const gulp = require('gulp')
const gulpif = require('gulp-if')
const gutil = require('gulp-util')
const source = require('vinyl-source-stream')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

module.exports = function (config) {
    const bundler = browserify({
        debug: config.browserify.isDebug,
        entries: config.src.js,
        transform: [
            babelify.configure({
                presets: ['latest']
            }),
            envify({
                CALENDAR_API: config.isProduction ? 'https://calendar-api.now.sh/' : 'http://localhost:4000/'
            })
        ]
    })

    const server = browserSync.get(config.staticServer.name)

    return function () {
        return bundler.bundle()
            .pipe(source(config.browserify.bundleName))
            .pipe(buffer())
            .pipe(gulpif(!config.isProduction, sourcemaps.init({ loadMaps: true })))
            .pipe(gulpif(config.isProduction, uglify()))
            .pipe(gulpif(!config.isProduction, sourcemaps.write('./')))
            .pipe(gulp.dest(config.dest.js))
            .pipe(server.stream())
            .on('error', gutil.log)
    }
}
