let nav = document.querySelector('.header__gam-menu');
let body = document.querySelector('body');
let burger = document.querySelector('.nav__btn');
let close = document.querySelector('.gam-menu__close');
let links = document.querySelectorAll('.nav__link')

links.forEach( function(element) {
	element.addEventListener('click', toggleMenu);
});

function toggleMenu() {
	nav.classList.toggle('header__gam-menu--opend');
	body.classList.toggle('body--activ');
}

burger.addEventListener('click', toggleMenu);
close.addEventListener('click', toggleMenu);