const accordionTitles = document.querySelectorAll('.accordion-title');

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');

accordionTitles.forEach(title => {
    title.addEventListener('click', () => {
        const expanded = title.getAttribute('aria-expanded') === 'true';

        accordionTitles.forEach(t => t.setAttribute('aria-expanded', 'false'));

        title.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    });
});

toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
    menu.setAttribute('aria-hidden', !isOpen);
    toggle.textContent = isOpen ? '×' : '☰';
});