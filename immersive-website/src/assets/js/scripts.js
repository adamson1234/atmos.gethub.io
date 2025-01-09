document.addEventListener("DOMContentLoaded", function() {
    // Initialize animations and interactions
    initAnimations();
    setupEventListeners();
});

function initAnimations() {
    // Load 3D model and initialize animations
    const modelUrl = './assets/models/example-model.glb';
    loadModel(modelUrl);
}

function loadModel(url) {
    // Logic to load the 3D model using a library like Three.js
    // Example: const loader = new THREE.GLTFLoader();
    // loader.load(url, function(gltf) { ... });
}

function setupEventListeners() {
    // Add event listeners for user interactions
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId);
        });
    });
}

function scrollToSection(targetId) {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}