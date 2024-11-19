document.addEventListener("DOMContentLoaded", () => {
    // Dynamic year and last modified date
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("last-modified");

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;

    // Hamburger menu toggle
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show");
        hamburger.textContent = menu.classList.contains("show") ? "✖" : "☰";
    });
});
