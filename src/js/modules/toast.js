const toastContainer = document.querySelector('#js-toast')

function defaultHandler(event) {
    event.target.classList.add('toast__msg--hide')
}

module.exports = function toast(message, theme = 'info', time = 5000, tapHandler = defaultHandler) {
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
    }, time)
}
