const toastContainer = document.querySelector('.toast__container')

module.exports = function(msg, options) {
    if (!msg) return
    options = options || {}

    var toastMsg = document.createElement('div')

    toastMsg.className = 'toast__msg'
    toastMsg.textContent = msg
    ;(options.childs || []).forEach(function(x) {
        toastMsg.appendChild(x)
    })

    toastContainer.appendChild(toastMsg)

    setTimeout(function() {
        toastMsg.classList.add('toast__msg--hide')
    }, options.timeout || 2000)

    toastMsg.addEventListener('transitionend', function(event) {
        event.target.parentNode.removeChild(event.target)
    })
}
