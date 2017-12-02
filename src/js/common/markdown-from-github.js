const highlightjs = require('highlight.js')
const marked = require('marked')

require('isomorphic-fetch')

marked.setOptions({
    highlight: function(code) {
        return highlightjs.highlightAuto(code).value
    }
})

function updateVisibility(el, isVisible) {
    !isVisible && el.classList.remove('db')
    !isVisible && el.classList.add('dn')

    isVisible && el.classList.remove('dn')
    isVisible && el.classList.add('db')
}

module.exports = function markdownFromGitHub(markdownURL, markdownContainerEl, loadingEl, errorEl) {
    updateVisibility(errorEl, false)
    updateVisibility(loadingEl, true)
    updateVisibility(markdownContainerEl, false)

    fetch(markdownURL)
        .then(response => response.json())
        .then(postMetadata => postMetadata.content)
        .then(contentAsBase64 => atob(contentAsBase64))
        .then(contentAsString => marked(contentAsString))
        .then(contentAsHTML => {
            updateVisibility(errorEl, false)
            updateVisibility(loadingEl, false)
            updateVisibility(markdownContainerEl, true)

            markdownContainerEl.insertAdjacentHTML('beforeend', contentAsHTML)
            markdownContainerEl.classList.add('markdown-body')
        })
        .catch(() => {
            updateVisibility(errorEl, true)
            updateVisibility(loadingEl, false)
        })
}
