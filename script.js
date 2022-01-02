const burger = document.querySelector('#burger');
const mobMenu = document.querySelector('.mob-nav');
const body = document.querySelector('body')
const bg = document.querySelector('.back-for-burger-menu')
burger.onclick = function(){
    mobMenu.classList.toggle("active");
    body.classList.toggle("scroll-block");
    bg.classList.toggle("activ-bg");
}
bg.onclick = function(){
    mobMenu.classList.remove("active");
    body.classList.remove("scroll-block");
    bg.classList.remove("activ-bg");
}