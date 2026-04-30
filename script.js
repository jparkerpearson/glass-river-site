document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-toggle');
    const primaryNav = document.querySelector('.primary-nav');
    const header = document.querySelector('.site-header');

    if (menuButton && primaryNav) {
        menuButton.addEventListener('click', function () {
            const isOpen = primaryNav.classList.toggle('open');
            menuButton.setAttribute('aria-expanded', String(isOpen));
            menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        });

        document.addEventListener('click', function (event) {
            const clickedInsideMenu = primaryNav.contains(event.target);
            const clickedToggle = menuButton.contains(event.target);

            if (!clickedInsideMenu && !clickedToggle && primaryNav.classList.contains('open')) {
                primaryNav.classList.remove('open');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.setAttribute('aria-label', 'Open menu');
            }
        });

        primaryNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                primaryNav.classList.remove('open');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.setAttribute('aria-label', 'Open menu');
            });
        });
    }

    function handleHeaderScroll() {
        if (!header) return;

        if (window.scrollY > 8) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    handleHeaderScroll();
    window.addEventListener('scroll', handleHeaderScroll);
});
