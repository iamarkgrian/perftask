const hero = document.querySelector('.hero');
const menuToggle = document.querySelector('.toggle');
const closeToggle = document.querySelector('.toggle-close');

menuToggle.addEventListener('click', () => {
    hero.classList.add('active');
});

closeToggle.addEventListener('click', () => {
    hero.classList.remove('active');
});