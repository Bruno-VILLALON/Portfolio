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
    if (document.querySelector("#header-color-point.is-inview")) {
        document.body.style.background = contrastColor;
        document.body.style.color = darkColor;
    } else if (document.querySelector("#dark-color.is-inview")){
        document.body.style.background = darkColor;
        document.body.style.color = lightColor;
    } else {
        document.body.style.background = lightColor;
        document.body.style.color = darkColor;
    }
})