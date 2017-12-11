const Mousetrap = require('mousetrap')

let isna
// Workaround para que el audio se escuche hasta que salgamos de GH Pages.
const audio = new Audio(
    'https://cdn.rawgit.com/meetupjs-ar/meetupjs-ar.github.io/master/assets/sounds/Isnardi.mp3'
)

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
