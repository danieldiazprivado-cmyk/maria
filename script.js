document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('#main-nav');
    
    if(mobileBtn) {
        mobileBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = mobileBtn.querySelector('i');
            if(nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(nav.classList.contains('active')) {
                nav.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Scroll Effect for Header
    const header = document.querySelector('#main-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

});
