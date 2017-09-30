const util = require('gulp-util')
const CALENDAR_API = util.env.production ? 'https://calendar-api.now.sh/' : 'http://localhost:4000/'

module.exports = {
    browserify: {
        isDebug: !util.env.production === false
    },
    clean: {
        assets: 'dist/assets/*',
        cname: 'dist/browserconfig.xml',
        cname: 'dist/CNAME',
        css: 'dist/css/*',
        html: 'dist/*.html',
        manifest: 'dist/manifest.json',
        js: 'dist/js/*'
    },
    dest: {
        assets: 'dist/assets',
        browserConfig: 'dist/',
        cname: 'dist/',
        css: 'dist/css',
        html: 'dist/',
        manifest: 'dist/',
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
        browserConfig: 'src/browserconfig.xml',
        cname: 'src/CNAME',
        css: 'src/css/*.css',
        js: 'src/js/*.js',
        manifest: 'src/manifest.json',
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
        file: 'dist/sw.js',
        runtimeCaching: [CALENDAR_API]
    },
    watch: {
        css: 'src/css/*.css',
        html: 'src/*.html',
        js: 'src/js/**/*.js'
    }
}
