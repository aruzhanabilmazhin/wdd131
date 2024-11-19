document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  // Toggle menu visibility on hamburger button click
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("visible");

    // Optional: Add a class to the body to adjust layout for mobile view
    document.body.classList.toggle("menu-open");
  });

  // Display current year in footer
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;

  // Display last modified date in footer
  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
});