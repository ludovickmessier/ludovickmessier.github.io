const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');

toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
    menu.setAttribute('aria-hidden', !isOpen);
    toggle.textContent = isOpen ? '×' : '☰';
});

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== toggle) {
        if (menu.classList.contains('is-open')) {
            menu.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', false);
            menu.setAttribute('aria-hidden', true);
            toggle.textContent = '☰';
        }
    }
});