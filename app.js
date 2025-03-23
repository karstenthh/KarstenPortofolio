document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.3 }
    );

    hiddenElements.forEach((el) => observer.observe(el));

    // Navbar background change on scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
document.addEventListener("scroll", function () {
    document.querySelectorAll(".hidden").forEach((element) => {
        element.style.animation = "none";
        void element.offsetWidth; // Forces reflow to restart animation
        element.style.animation = "";
    });
});
