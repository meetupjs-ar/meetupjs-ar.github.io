const Mousetrap = require('mousetrap')

let isna
const audio = new Audio(`${process.env.ASSETS_BASE_URL}/assets/sounds/isnardi.mp3`)

function activateEasterEgg() {
    if (!isna.classList.contains('activate')) {
        isna.classList.add('activate')
        audio.play()

        setTimeout(() => {
            isna.classList.remove('activate')
        }, 2900)
    }
}

module.exports = function easterEgg() {
    isna = document.querySelector('#isna')

    Mousetrap.bind('up up down down left right left right', activateEasterEgg)
}
