if (window.MSInputMethodContext && document.documentMode) {
    console.log('IE11 detected')
    window.location.pathname = '/ie11/index.html'
}
