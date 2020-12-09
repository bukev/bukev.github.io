const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links-celu');
const links = document.querySelectorAll('.nav-links-celu li');
let hambOpen = false

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
    hamburger.classList.toggle('open')
})

navLinks.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
    hamburger.classList.toggle('open');
})
