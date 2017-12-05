const util = require('gulp-util')

const CALENDAR_API = 'https://calendar-api.now.sh/'
const HOW_DO_WE_DO_A_MEETUP = 'https://api.github.com/repos/meetupjs-ar/test/contents/file-2.md'

module.exports = {
    blog: {
        distHTMLDir: 'dist/posts',
        srcRepo: 'git@github.com:meetupjs-ar/test.git',
        postTemplate: 'src/posts/template.html',
        tempDir: 'tmp/repo',
        tempHTML: 'tmp/html/**/*.html',
        tempHTMLDir: 'tmp/html',
        tempMd: 'tmp/repo/**/*.md'
    },
    browserify: {
        isDebug: !util.env.production === false
    },
    clean: {
        assets: 'dist/assets/*',
        browserConfig: 'dist/browserconfig.xml',
        cname: 'dist/CNAME',
        css: 'dist/css/*',
        html: 'dist/**/*.html',
        js: 'dist/js/*',
        manifest: 'dist/manifest.json',
        sw: 'dist/sw.js'
    },
    dest: {
        assets: 'dist/assets',
        browserConfig: 'dist/',
        cname: 'dist/',
        css: 'dist/css',
        html: 'dist/',
        js: 'dist/js',
        manifest: 'dist/',
        pkg: './'
    },
    envify: {
        CALENDAR_API,
        HOW_DO_WE_DO_A_MEETUP
    },
    eslint: {
        files: 'src/js/**/*.js'
    },
    isProduction: util.env.production,
    src: {
        assets: 'src/assets/**/*.*',
        browserConfig: 'src/browserconfig.xml',
        cname: 'src/CNAME',
        css: 'src/css/main.css',
        html: 'src/**/*.html',
        js: 'src/js/*.js',
        manifest: 'src/manifest.json',
        pkg: 'package.json',
        root: 'src/'
    },
    staticServer: {
        dir: './dist',
        name: 'meetupjs-ar'
    },
    stylelint: {
        css: 'src/css/**/*.css'
    },
    sw: {
        file: 'dist/sw.js',
        runtimeCaching: [CALENDAR_API, HOW_DO_WE_DO_A_MEETUP]
    },
    watch: {
        css: 'src/css/*.css',
        html: 'src/**/*.html',
        js: 'src/js/**/*.js'
    }
}
