javascript
// Reveal sections and cards while scrolling
const revealElements = document.querySelectorAll(
    '.section, .highlight-card, .skill-card, .project-card, .education-card, .cv-card'
);

revealElements.forEach((element) => {
    element.classList.add('reveal');
});

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12,
        rootMargin: '0px 0px -35px 0px'
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

