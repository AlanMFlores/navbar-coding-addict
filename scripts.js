const hamb = document.getElementById('hamb');
const menu = document.querySelector('#menu');

hamb.addEventListener('click', () => {
    menu.classList.toggle('show-menu')
})
