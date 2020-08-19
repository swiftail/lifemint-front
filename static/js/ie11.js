if (window.MSInputMethodContext && document.documentMode) {
    // css properties polyfill

    console.log('IE11 detected')

//     document.write(''+
// '<script src="https://lidrekon.ru/slep/js/jquery.js"></script>'+
// '<script src="https://lidrekon.ru/slep/js/uhpv-full.min.js"></script>'
// );

    var root = document.getElementsByTagName('html')[0];
    root.setAttribute('class', (root.getAttribute('class') || '') + ' __ie11');

    document.ready = function() {
        // document.body.insertAdjacentHTML('<a id="specialButton" href="#"><img src="https://lidrekon.ru/images/special.png" alt="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ" title="ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ" /></a>')
    }
}