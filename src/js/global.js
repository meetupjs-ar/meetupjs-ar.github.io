const aload = require('aload')
const animateOnHover = require('./common/animate-on-hover')
const easterEgg = require('./common/easter-egg')
const greetings = require('./common/greetings')
const menu = require('./common/menu')
const offline = require('./common/offline')
const safariLinks = require('./common/safari-links')
const serviceWorker = require('./common/service-worker')

window.addEventListener('load', () => {
    aload()
    animateOnHover('[data-tilt]')
    easterEgg()
    greetings([
        {
            activateAfter: 5000,
            expiration: new Date(2018, 0, 7, 23, 59, 59),
            hideAfter: 8000,
            key: '2018-happy-new-year',
            message: '¡Feliz año nuevo!'
        }
    ])
    menu()
    offline()
    safariLinks()
    serviceWorker()
})
