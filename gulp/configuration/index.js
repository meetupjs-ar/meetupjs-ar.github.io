const util = require('gulp-util')

const ASSETS_BASE_URL = util.env.production
    ? 'https://cdn.rawgit.com/meetupjs-ar/meetupjs-ar.github.io/master'
    : ''
const CALENDAR_API = 'https://calendar-api.now.sh/'
const GITHUB_IMAGES = 'https://user-images.githubusercontent.com/'

module.exports = {
    blog: {
        listTemplate: 'src/blog.html',
        srcRepo: 'git@github.com:meetupjs-ar/blog-articles.git',
        postTemplate: 'src/posts/template.html',
        tempDir: '.tmp/repo',
        tempHTML: '.tmp/html/**/*.html',
        tempHTMLArticles: '.tmp/articles/**/*.html',
        tempHTMLArticlesDir: '.tmp/articles',
        tempHTMLDir: '.tmp/html',
        tempJSON: '.tmp/repo/**/*.json',
        tempMd: '.tmp/repo/**/!(README).md'
    },
    browserify: {
        isDebug: !util.env.production === false
    },
    clean: {
        assets: 'dist/assets/*',
        blog: ['.tmp/*', 'dist/articulos/*', 'dist/blog.html'],
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
        blog: 'dist/articulos',
        browserConfig: 'dist/',
        cname: 'dist/',
        css: 'dist/css',
        html: 'dist/',
        js: 'dist/js',
        manifest: 'dist/',
        pkg: './'
    },
    envify: {
        ASSETS_BASE_URL,
        CALENDAR_API
    },
    eslint: {
        files: 'src/js/**/*.js'
    },
    isnardi: `    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmdhhyyyhyhydmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMMMMNmddhhhhhhddhhhhhhyyyhdMMMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMMMmhyhdddddmmmmmmmmdhdhhhhhhydMMMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMNdhhddmmdddddddhhhhhhhhhhhhhhhysNMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMNhhddmmmhyysooo++///:::///+oyhhhddydMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMmydmmNmhoo++++/////::---------:/+hmdhhNMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMmhdmNNmy+///////////::-------...--:hmdhyMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMNodmmmmhs+///////////::::----......-/dmhhyMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMyydmmmdhs+///////////::::::--.......-odhhsMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMmsmmmmdhs////////////::::::--........+hhddyMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMsdmmmds+///++++++++//:::::----......:yhmdoMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMydmmmy+//+oossyyyyso++//++/+oo+/::-.-sdddsMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMhodmmo//++osyhddhhyso+/:/oosyyso/:--./dhhdMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMM++ymh//++osssyhdyddyo+:--ohyddy/o+:-.-yh/oMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMM//+do///++++oosyyysso+/--:osso+:::--..+y::MMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMM/osy///////+++ooooo+++/----:///:--....:o.:MMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMM:oys+/////++++oooo++++/-.--:://:-.....-+-/MMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMM+/+o+/////++oossys+o+++:::-+o+/:-.....-/-sMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMmo+oo+///++oossssssysss//+::+so/:---..-:-NMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMmoo++++++oossysssso+o+/:::/oso/:----::hMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMyoo+o++++oyhyssssooo+////+sys+::-::/hMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMdooooo++oossssssso+++//:::/++///:::/MMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMN/sooooooooo++++osss+/:----///////+yMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMysssssoooo++++oo+++/:-----::/+++++NMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMosyssssssoooooo+///-:-::://+++++hMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMhsssssyyyysysyssoso++//+o+++++//MMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMN/oosssssyhhhhhhhhhhysso++++//:sMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMMMM/+oossssssyyyyyyyysoo++/////:-dMMMMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMMNmds/++osossssyyyyyyysoo+///:::-./yhNMMMMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMMMMmhNmo///++oooossyyyyyyso++/::---..//dhhdmMMMMMMMMMMMMMMMM
    MMMMMMMMMMMMMMMNhddmms//////++++oossyyso++//::--.....+yddmdhhddddNMMMMMMMMM
    MMMMMMMMMMMMNdddmNNmmy////////++++++++///::---.......odmmmdmmmmmmhyhhddmNNM
    MMMMMMMNdddhmNNNNNNNNNh+////////+++++/::::----.....-smmmmmmmmmmmmmmmmmmddhh
    MMMmddddNNNNNNNNNNNNNNNmho///////+++++/:---------:smmmmmmmmmmmmmmmmmmmmmmmm`,
    isProduction: util.env.production,
    htmlminOptions: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
    },
    src: {
        assets: 'src/assets/**/*.*',
        browserConfig: 'src/browserconfig.xml',
        cname: 'src/CNAME',
        css: 'src/css/main.css',
        html: ['src/*.html', '!src/blog.html'],
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
        runtimeCaching: [CALENDAR_API, GITHUB_IMAGES]
    },
    watch: {
        css: 'src/css/*.css',
        html: 'src/**/*.html',
        js: 'src/js/**/*.js'
    }
}
