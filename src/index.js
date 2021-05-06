//Barra de navegación - efecto en el scroll

window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('pegado', window.scrollY > 0);
});



//Navegación responsive en dispositivos pequeños - menú sidebar

let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});