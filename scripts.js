// Responsive navigation menu
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle', 'bg-accent', 'text-primary', 'p-2', 'rounded');
document.querySelector('nav').prepend(navToggle);

navToggle.addEventListener('click', () => {
    const navItems = document.querySelector('nav div');
    navItems.classList.toggle('hidden');
});

// Add CSS for animations and responsive menu
const style = document.createElement('style');
style.innerHTML = `
    .animate-fadeIn {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .animate-fadeIn.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
    @media (max-width: 768px) {
        nav div {
            display: none;
            flex-direction: column;
            align-items: center;
        }
        nav div.hidden {
            display: flex;
        }
    }
`;
document.head.appendChild(style);