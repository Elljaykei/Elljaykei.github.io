/*!
* Start Bootstrap - Agency v7.0.5 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/twbs/StartBootstrap-agency/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('#mainNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = [...document.querySelectorAll('#navbarResponsive .nav-link')];
    const navLinks = [...document.querySelectorAll('#mainNav .nav-link')];
    const sectionLinks = navLinks
        .map(link => ({ link, section: document.querySelector(link.getAttribute('href')) }))
        .filter(item => item.section);
    const modals = [...document.querySelectorAll('.portfolio-modal')];
    let backdrop = null;

    const updateActiveSection = () => {
        const activationLine = Math.min(window.innerHeight * 0.32, 260);
        let current = sectionLinks[0];
        sectionLinks.forEach(item => {
            if (item.section.getBoundingClientRect().top <= activationLine) current = item;
        });
        navLinks.forEach(link => link.classList.remove('active'));
        if (current) current.link.classList.add('active');
    };

    const closeModal = modal => {
        if (!modal) return;
        modal.classList.remove('is-open', 'show');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        if (backdrop) {
            backdrop.remove();
            backdrop = null;
        }
    };

    const openModal = modal => {
        if (!modal) return;
        modals.forEach(closeModal);
        backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop fade show portfolio-modal-backdrop';
        document.body.appendChild(backdrop);
        document.body.classList.add('modal-open');
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        modal.querySelector('.close-modal')?.focus();
    };

    const updateNavigation = () => {
        if (navbar) navbar.classList.toggle('navbar-shrink', window.scrollY > 0);
        updateActiveSection();
    };

    updateNavigation();
    document.addEventListener('scroll', updateNavigation, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    responsiveNavItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') navbarToggler.click();
        });
    });

    // Use the same modal classes and markup as My Projects, but control the transition
    // explicitly so static-file and hosted deployments behave identically.
    document.addEventListener('click', event => {
        const trigger = event.target.closest('.portfolio-link, .system-inspect');
        if (trigger) {
            event.preventDefault();
            event.stopImmediatePropagation();
            openModal(document.querySelector(trigger.getAttribute('href') || trigger.getAttribute('data-bs-target')));
            return;
        }
        const close = event.target.closest('.portfolio-modal .close-modal');
        if (close) {
            event.preventDefault();
            closeModal(close.closest('.portfolio-modal'));
        }
    }, true);

    modals.forEach(modal => {
        modal.addEventListener('click', event => {
            if (event.target === modal) closeModal(modal);
        });
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            const open = modals.find(modal => modal.classList.contains('is-open'));
            if (open) closeModal(open);
        }
    });
});
