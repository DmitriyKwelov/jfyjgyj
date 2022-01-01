const burger = document.querySelector('#burger');
const mobMenu = document.querySelector('.mob-nav');
burger.onclick = function(){
    mobMenu.classList.toggle("active");
}