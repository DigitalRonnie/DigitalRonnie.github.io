function applyCSS() {
    var cssCode = document.getElementById('css-code').value;
    var images = document.getElementsByClassName('image');
    
    for (var i = 0; i < images.length; i++) {
        images[i].style.cssText = cssCode;
    }
}
