const vanillaTilt = require('vanilla-tilt')

module.exports = function(selector) {
    vanillaTilt.init(document.querySelectorAll(selector))
}
