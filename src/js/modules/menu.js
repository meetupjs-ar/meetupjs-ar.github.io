const menu = document.querySelector('#menu')
const toggleMenu = document.querySelector('#toggle-menu')

function toggleMenuHandler () {
    menu.classList.toggle('dn')
    menu.classList.toggle('fadeIn')

    toggleMenu.textContent = menu.classList.contains('dn') ? '☰' : '✕'
}

module.exports = function initMenu () {
    toggleMenu.addEventListener('click', toggleMenuHandler)
}
