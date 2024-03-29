
window.onload = () => {
    // locomotivescroll inisialization

    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        tablet: {smooth: true},
        smartphone: {smooth: true}
    })


    // body color

    const darkColor = "#2d3e4e";
    const mediumColor = "#8cbdb9";
    const lightColor = "#e8eceb";
    const contrastColor = "#e09e50";

    scroll.on("scroll", () => {
        if (document.querySelector("#header-color.is-inview")) {
            document.body.style.background = darkColor;
            document.body.style.color = lightColor;
            //console.log("écran d'accueil");
        } else if (document.querySelector("#skills-color.is-inview")){
            document.body.style.background = mediumColor;
            document.body.style.color = darkColor;
            //console.log("section compétences")
        } else {
            document.body.style.background = lightColor;
            document.body.style.color = darkColor;
        }
    })
}