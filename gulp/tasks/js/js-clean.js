const del = require('del')

module.exports = function (config) {
    return function () {
        return del(config.clean.js)
    }
}
