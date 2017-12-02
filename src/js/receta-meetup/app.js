const marked = require('marked')

require('isomorphic-fetch')

let errorEl
let loadingEl
let postEl

function init() {
    fetch('https://api.github.com/repos/meetupjs-ar/test/contents/file-2.md')
        .then(response => response.json())
        .then(({ content }) => {
            updateVisibility(loadingEl, false)
            updateVisibility(errorEl, false)

            postEl.insertAdjacentHTML('beforeend', marked(atob(content)))
        })
        .catch(() => {
            updateVisibility(loadingEl, false)
            updateVisibility(errorEl, true)
        })
}

function updateVisibility(el, isVisible) {
    !isVisible && el.classList.remove('db')
    !isVisible && el.classList.add('dn')

    isVisible && el.classList.remove('dn')
    isVisible && el.classList.add('db')
}

module.exports = function recetaMeetupApp() {
    errorEl = document.querySelector('#error')
    loadingEl = document.querySelector('#loading')
    postEl = document.querySelector('#post')

    init()
}
