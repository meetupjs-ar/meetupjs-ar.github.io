const markdownFromGitHub = require('./common/markdown-from-github')

window.addEventListener('load', () => {
    markdownFromGitHub(
        'https://api.github.com/repos/meetupjs-ar/test/contents/file-2.md',
        document.querySelector('#markdown-container'),
        document.querySelector('#loading'),
        document.querySelector('#error')
    )
})
