const toastContainer = document.querySelector('#js-toast')

module.exports = function toast(message) {
    const toastMsgEl = document.createElement('div')
    toastMsgEl.addEventListener('transitionend', function(event) {
        event.target.parentNode.removeChild(event.target)
    })
    toastMsgEl.className = 'toast__msg'
    toastMsgEl.textContent = message

    toastContainer.appendChild(toastMsgEl)

    setTimeout(function() {
        toastMsgEl.classList.add('toast__msg--hide')
    }, 3000)
}
