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
            expiration: new Date(2018, 7, 7, 23, 59, 59),
            hideAfter: 10000,
            key: 'hello',
            message: '¡Hola!'
        }
    ])
    menu()
    offline()
    safariLinks()
    serviceWorker()
})
