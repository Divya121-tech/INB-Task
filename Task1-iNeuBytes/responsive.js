$('.s3-slider').slick({
    infinite: true,
    slideToShow: .3,
    slideToScroll: .2,
    speed: 1500
});
const r = rolly({
    view: document.querySelector('.app'),
    native:true,
});
r.init();

AOS.init({
    duration: 1500 
});