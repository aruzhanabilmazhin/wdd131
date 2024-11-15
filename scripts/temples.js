// Select hamburger button and navigation menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Add event listener for the hamburger button
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active'); // Toggle menu visibility
  hamburger.textContent = navMenu.classList.contains('active') ? 'X' : '☰'; // Toggle button text
});

// Footer dynamic updates
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
