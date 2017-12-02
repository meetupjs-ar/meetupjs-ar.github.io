const marked = require('marked')

require('isomorphic-fetch')

let postEl

function init() {
    fetch('https://api.github.com/repos/meetupjs-ar/test/contents/file-2.md')
        .then(response => response.json())
        .then(({ content }) => postEl.insertAdjacentHTML('beforeend', marked(atob(content))))
        // eslint-disable-next-line no-console
        .catch(console.error)
}

module.exports = function recetaMeetupApp() {
    postEl = document.querySelector('#post')

    init()
}
