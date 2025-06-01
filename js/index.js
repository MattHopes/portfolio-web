var r = document.querySelector(':root');

italian = false;
document.getElementById("lang").addEventListener("click", function() {
    italian = !italian;
    toHide = italian ? "english" : "italian"
    for (element of document.getElementsByTagName("*")) {
        element.className = element.className.replace(" vanishLanguage", "")
        if (element.className.includes(toHide)) element.className += " vanishLanguage"
    }
})

window.addEventListener('scroll', function() {
    const image = document.getElementById('matt_scritta');
    const scrollTop = window.scrollY; // La quantità di scroll verticale
    const maxScroll = 300; // Altezza massima di scroll prima che l'immagine diventi invisibile
    let opacity = 1 - (scrollTop / maxScroll);

    // Assicuriamoci che l'opacità sia compresa tra 0 e 1
    opacity = Math.max(opacity, 0);
    opacity = Math.min(opacity, 1);

    // Applica l'opacità all'immagine
    image.style.opacity = opacity;
});