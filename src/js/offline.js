/* global toast */

(function () {
    'use strict'

    var header = document.querySelector('header')

    document.addEventListener('DOMContentLoaded', function() {
        if (!navigator.onLine) checkOffline()

        window.addEventListener('online', checkOffline, false)
        window.addEventListener('offline', checkOffline, false)
    })

    function checkOffline() {
        header.classList[navigator.onLine ? 'remove' : 'add']('app__offline')

        var icon = document.createElement('i')
        icon.className = 'material-icons'
        icon.textContent = navigator.onLine? 'signal_wifi_4_bar' : 'signal_wifi_off'
        toast(navigator.onLine ? 'online':'offline', {childs: [icon]})
    }

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
           .register('service-worker.js')
           .then(function() {
              // eslint-disable-next-line no-console
              //  console.log('Service Worker Registered')
           })
    }
})()
