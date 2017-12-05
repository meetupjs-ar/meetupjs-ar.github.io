let toastContainer

function init() {
    toastContainer = document.querySelector('#js-toast')
}

function tapHandler() {
    window.location.reload()
}

module.exports = function toast(message, theme = 'info') {
    init()

    const toastMsgEl = document.createElement('div')
    toastMsgEl.className = `toast__msg toast__msg--${theme}`
    toastMsgEl.textContent = message
    toastMsgEl.onclick = tapHandler

    toastContainer.appendChild(toastMsgEl)

    toastMsgEl.addEventListener('transitionend', function(event) {
        event.target.parentNode.removeChild(event.target)
    })

    setTimeout(function() {
        toastMsgEl.classList.add('toast__msg--hide')
    }, 5000)
}
