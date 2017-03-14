const util = require('gulp-util')

module.exports = {
    browserify: {
        bundleName: 'calendario.js',
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
    eslint: {
        files: 'src/js/**/*.js'
    },
    isProduction: util.env.production,
    src: {
        assets: 'src/assets/**/*.*',
        cname: 'src/CNAME',
        css: 'src/css/main.css',
        js: 'src/js/calendario.js',
        html: 'src/*.html'
    },
    staticServer: {
        dir: './dist',
        name: 'calendario-de-meetups'
    },
    stylelint: {
        css: 'src/css/**/*.css'
    },
    watch: {
        css: 'src/css/*.css',
        html: 'src/*.html',
        js: 'src/js/**/*.js'
    }
}
