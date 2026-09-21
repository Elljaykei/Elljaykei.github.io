/*!
* Start Bootstrap - Agency v7.0.5 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('#mainNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = [...document.querySelectorAll('#navbarResponsive .nav-link')];
    const navLinks = [...document.querySelectorAll('#mainNav .nav-link')];
    const sectionLinks = navLinks
        .map(link => ({ link, section: document.querySelector(link.getAttribute('href')) }))
        .filter(item => item.section);

    // Navbar shrink function.
    const navbarShrink = () => {
        if (!navbar) return;
        navbar.classList.toggle('navbar-shrink', window.scrollY > 0);
    };

    // Keep exactly one navigation item active based on the section nearest the top offset.
    const updateActiveSection = () => {
        const activationLine = Math.min(window.innerHeight * 0.32, 260);
        let current = sectionLinks[0];
        sectionLinks.forEach(item => {
            if (item.section.getBoundingClientRect().top <= activationLine) current = item;
        });
        navLinks.forEach(link => link.classList.remove('active'));
        if (current) current.link.classList.add('active');
    };

    const updateNavigation = () => {
        navbarShrink();
        updateActiveSection();
    };

    updateNavigation();
    document.addEventListener('scroll', updateNavigation, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    // Collapse responsive navbar when a navigation item is selected.
    responsiveNavItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // The systems use an explicit modal controller so they remain reliable even when
    // opened from a static file, where Bootstrap's delegated transition can be flaky.
    const systemModals = [...document.querySelectorAll('.system-modal')];
    let systemBackdrop = null;

    const closeSystemModal = modal => {
        if (!modal) return;
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        if (systemBackdrop) {
            systemBackdrop.remove();
            systemBackdrop = null;
        }
    };

    const openSystemModal = modal => {
        if (!modal) return;
        systemModals.forEach(closeSystemModal);
        systemBackdrop = document.createElement('div');
        systemBackdrop.className = 'modal-backdrop fade show system-modal-backdrop';
        document.body.appendChild(systemBackdrop);
        document.body.classList.add('modal-open');
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        modal.querySelector('.close-modal')?.focus();
    };

    // Capture phase prevents Bootstrap's delegated handler from creating a half-open backdrop.
    document.addEventListener('click', event => {
        const trigger = event.target.closest('.system-inspect');
        if (trigger) {
            event.preventDefault();
            event.stopImmediatePropagation();
            openSystemModal(document.querySelector(trigger.getAttribute('href')));
            return;
        }
        const close = event.target.closest('.system-modal .close-modal');
        if (close) {
            event.preventDefault();
            closeSystemModal(close.closest('.system-modal'));
        }
    }, true);

    systemModals.forEach(modal => {
        modal.addEventListener('click', event => {
            if (event.target === modal) closeSystemModal(modal);
        });
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            const openModal = systemModals.find(modal => modal.classList.contains('is-open'));
            if (openModal) closeSystemModal(openModal);
        }
    });
});
