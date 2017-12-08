const Mousetrap = require('mousetrap')

let isna

function activateEasterEgg() {
    if (!isna.classList.contains('activate')) {
        isna.classList.add('activate')

        setTimeout(() => {
            isna.classList.remove('activate')
        }, 2900)
    }
}

module.exports = function easterEgg() {
    isna = document.querySelector('#isna')

    Mousetrap.bind('up up down down left right left right', activateEasterEgg)
}
