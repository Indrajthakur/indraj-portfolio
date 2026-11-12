
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// TYPING ANIMATION
const typingText = document.getElementById("typing-text");

const roles = [
    "Web Developer",
    "Frontend Developer",
    "B.Tech CSE Student",
    "Creative Learner"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent = currentRole.substring(0, characterIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && characterIndex === currentRole.length) {
        deleting = true;
        speed = 1300;
    } else if (deleting && characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// AUTOMATIC COPYRIGHT YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// ACTIVE NAVIGATION
const sections = document.querySelectorAll("main section");
const navigationLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navigationLinks.forEach(link => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === "#" + entry.target.id
                );
            });
        }
    });
}, {
    rootMargin: "-30% 0px -60% 0px"
});

sections.forEach(section => observer.observe(section));
