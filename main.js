// const navIconEl = document.querySelector('.nav__icon');
// const navCloseEl = document.querySelector('nav__close');
// const navList = document.querySelector('.nav__list');


// const navOpen = () => {
//     navList.classList.add('show');
// }

// const navClose =() => {
//     navList.classList.remove('show');

// }
// navIconEl.addEventListener('clik', navOpen);
// navCloseEl.addEventListener('clik', navClose);

AOS.init({
    offset:200,
    delay:100,
    duration: 600,
    easing:'ease',
    once: false,
    mirror: false,
    anchorPlacment:'top-bottom'
});