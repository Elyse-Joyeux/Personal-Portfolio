let menu = document.querySelector('#menu-icon');
let navb = document.querySelector('.navb');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navb.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navb.classList.remove('active');
}

const typed = new Typed('.multiple-context', {
    strings: ['Web developer', 'Junior Cyber Enthusiast'],
    typeSpeed: 10,
    backSpeed: 50,
    backDelay: 1400,
    loop: true,
});

// Change header color when hovering over service boxes
const serviceBoxes = document.querySelectorAll('.services-box');
const header = document.querySelector('.header');

serviceBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        header.style.backgroundColor = '#667eea';
    });
    box.addEventListener('mouseleave', () => {
        header.style.backgroundColor = '#007f73';
    });
});

// Contact Form Handler 
const contactForm = document.querySelector('.contact form');
const submitBtn   = document.querySelector('.contact .btn[type="submit"]');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name    = contactForm.querySelector('input[placeholder="Full Name"]').value.trim();
    const email   = contactForm.querySelector('input[placeholder="Email Address"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields before sending.');
        return;
    }

    submitBtn.value    = 'Sending...';
    submitBtn.disabled = true;

    try {
        const response = await fetch('/.netlify/functions/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();

        if (data.success) {
            alert('✅ Message sent successfully! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('❌ Failed to send message. Please try again.');
        }

    } catch (error) {
        console.error('Contact form error:', error);
        alert('❌ Something went wrong. Please try again later.');
    } finally {
        submitBtn.value    = 'Send Message';
        submitBtn.disabled = false;
    }
});