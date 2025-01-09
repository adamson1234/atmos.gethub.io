export function fadeIn(element, duration = 500) {
    element.style.opacity = 0;
    element.style.transition = `opacity ${duration}ms`;
    element.style.display = 'block';

    requestAnimationFrame(() => {
        element.style.opacity = 1;
    });
}

export function fadeOut(element, duration = 500) {
    element.style.opacity = 1;
    element.style.transition = `opacity ${duration}ms`;

    requestAnimationFrame(() => {
        element.style.opacity = 0;

        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    });
}

export function scrollTriggerAnimation(element, animationClass) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(element);
}