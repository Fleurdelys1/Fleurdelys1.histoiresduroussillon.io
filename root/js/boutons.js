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
    header[0].addEventListener("click", () => {window.scrollTo(0,0)});
    header[1].addEventListener("click", () => {window.open("histoiresduroussillon/root/html/Categories.html")})
    
})

const fadeIn = (element, opacity) => {
    element.style.backgroundColor= "rgba(255,255,255,0.3)"
}

const fadeOut = (element, opacity) => {
    element.style.backgroundColor= couleurOriginale;
}

const openArticle = (num) =>{
    window.open("histoiresduroussillon/root/html/art_"+num+".html",'_blank');
}