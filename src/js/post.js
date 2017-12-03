const markdownFromGitHub = require('./common/markdown-from-github')

function getURLFromKey(key) {
    switch (key) {
    case 'HOW_DO_WE_DO_A_MEETUP':
        return process.env.HOW_DO_WE_DO_A_MEETUP
    default:
        return ''
    }
}

window.addEventListener('load', () => {
    const markdownContainerEl = document.querySelector('#markdown-container')

    markdownFromGitHub(
        getURLFromKey(markdownContainerEl.dataset.urlKey),
        markdownContainerEl,
        document.querySelector('#loading'),
        document.querySelector('#error')
    )
})
