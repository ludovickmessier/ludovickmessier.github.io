const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');

toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
    menu.setAttribute('aria-hidden', !isOpen);
    toggle.textContent = isOpen ? '×' : '☰';
});