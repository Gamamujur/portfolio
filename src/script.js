const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#navmenu');
const navanim = document.querySelector('#navmenu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
})

window.onscroll = function (){
    const navbar = document.querySelector('#nav');
    const fixednav = navbar.offsetTop;

    if (window.pageYOffset > fixednav){
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed');
    }
}