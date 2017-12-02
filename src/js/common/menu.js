let closeMenu
let menu
let openMenu

function hightlightCurrentMenuItem() {
    const el = document.querySelector(`#menu [href='${window.location.pathname}']`)
    el && el.classList.add('current-page')
}

function init() {
    closeMenu = document.querySelector('#close-menu')
    menu = document.querySelector('#menu')
    openMenu = document.querySelector('#open-menu')
}

function toggleMenuHandler() {
    closeMenu.classList.toggle('dn')
    menu.classList.toggle('dn')
    menu.classList.toggle('fade-in')
    openMenu.classList.toggle('dn')
}

module.exports = function menu() {
    init()

    openMenu.addEventListener('click', toggleMenuHandler)
    closeMenu.addEventListener('click', toggleMenuHandler)

    hightlightCurrentMenuItem()
}
