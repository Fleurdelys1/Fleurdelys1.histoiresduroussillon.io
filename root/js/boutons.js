let couleurOriginale;

window.addEventListener("load", () => {
    let Buttons = document.querySelectorAll("#bouton");
    let header = document.querySelectorAll(".header-container");
    
    for (let i = 0; i < Buttons.length; i++){
        Buttons[i].addEventListener("mouseenter", () => {
            couleurOriginale = Buttons[i].style.backgroundColor;
            fadeIn(Buttons[i], Buttons[i].style.opacity);
        })
        Buttons[i].addEventListener("mouseleave", () => {
            fadeOut(Buttons[i], Buttons[i].style.opacity);
        })
    }
    console.log(header)
    header[0].addEventListener("click", () => {window.open("../../index.html", "_self")});
    header[1].addEventListener("click", () => {window.open("../../root/html/indisponible.html", "_self")})
    header[2].addEventListener("click", () => {window.open("../../root/html/indisponible.html", "_self")})
    header[3].addEventListener("click", () => {window.open("../../root/html/indisponible.html", "_self")})
    
})

const fadeIn = (element, opacity) => {
    element.style.backgroundColor= "rgba(255,255,255,0.3)"
}

const fadeOut = (element, opacity) => {
    element.style.backgroundColor= couleurOriginale;
}

const openArticle = (num) =>{
    window.open("../../root/html/art_"+num+".html", "_self");
}