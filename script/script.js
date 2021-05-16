const hero = document.querySelector('.hero');
const menuToggle = document.querySelector('.toggle');
const closeToggle = document.querySelector('.toggle-close');
const body = document.querySelector('body');

menuToggle.addEventListener('click', () => {
    hero.classList.add('active');
    body.style.overflow = 'scroll'
});

closeToggle.addEventListener('click', () => {
    hero.classList.remove('active');
    body.style.overflow = 'hidden';
});