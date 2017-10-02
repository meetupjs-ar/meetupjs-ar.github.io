const closeMenu = document.querySelector('#close-menu')
const menu = document.querySelector('#menu')
const openMenu = document.querySelector('#open-menu')

function hightlightCurrentMenuItem() {
    document
        .querySelector(`#menu [href='${window.location.pathname}']`)
        .classList.add('current-page')
}

function toggleMenuHandler() {
    closeMenu.classList.toggle('dn')
    menu.classList.toggle('dn')
    menu.classList.toggle('fadeIn')
    openMenu.classList.toggle('dn')
}

module.exports = function menu() {
    openMenu.addEventListener('click', toggleMenuHandler)
    closeMenu.addEventListener('click', toggleMenuHandler)

    hightlightCurrentMenuItem()
}
