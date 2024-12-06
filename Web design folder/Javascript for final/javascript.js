// Smooth scrolling navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! Your message has been sent.');
});

// Dark/Light mode toggle
const toggleThemeButton = document.createElement('button');
toggleThemeButton.textContent = "Toggle Theme";
document.body.prepend(toggleThemeButton);

toggleThemeButton.addEventListener('click', () => {
    const isDark = document.body.style.backgroundColor === 'var(--dark-bg)';
    document.body.style.backgroundColor = isDark ? 'var(--light-bg)' : 'var(--dark-bg)';
    document.body.style.color = isDark ? 'var(--text-dark)' : 'var(--text-light)';
});
