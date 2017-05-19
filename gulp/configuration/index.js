const util = require('gulp-util')
const CALENDAR_API = util.env.production ? 'https://calendar-api.now.sh/' : 'http://localhost:4000/';

module.exports = {
    browserify: {
        isDebug: !util.env.production === false
    },
    clean: {
        assets: 'dist/assets/*',
        cname: 'dist/CNAME',
        css: 'dist/css/*',
        html: 'dist/*.html',
        js: 'dist/js/*'
    },
    dest: {
        assets: 'dist/assets',
        cname: 'dist/',
        css: 'dist/css',
        html: 'dist/',
        js: 'dist/js'
    },
    envify: {
        CALENDAR_API
    },
    eslint: {
        files: 'src/js/**/*.js'
    },
    isProduction: util.env.production,
    src: {
        assets: 'src/assets/**/*.*',
        cname: 'src/CNAME',
        css: 'src/css/*.css',
        js: 'src/js/*.js',
        html: 'src/*.html'
    },
    staticServer: {
        dir: './dist',
        name: 'calendario-de-meetups'
    },
    stylelint: {
        css: 'src/css/**/*.css'
    },
    sw: {
      file: 'dist/service-worker.js',
      caching: [
        CALENDAR_API, 'https://fonts.gstatic.com', 'https://fonts.googleapis.com'
      ]
    },
    watch: {
        css: 'src/css/*.css',
        html: 'src/*.html',
        js: 'src/js/**/*.js'
    }
}
