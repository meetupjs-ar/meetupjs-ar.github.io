const toastContainer = document.querySelector('#js-toast')

module.exports = function toast(message, tapHandler = function() {}, time = 5000) {
    const toastMsgEl = document.createElement('div')
    toastMsgEl.className = 'toast__msg'
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
