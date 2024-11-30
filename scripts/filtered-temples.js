// File: scripts/filtered-temples.js

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    // Add more temples here...
  ];
  
  // DOM Elements
  const templeCards = document.getElementById("temple-cards");
  const filters = document.querySelectorAll("nav ul li a");
  
  // Utility Functions
  function displayTemples(filteredTemples) {
    templeCards.innerHTML = ""; // Clear existing cards
    filteredTemples.forEach(temple => {
      const card = document.createElement("div");
      card.className = "temple-card";
      card.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;
      templeCards.appendChild(card);
    });
  }
  
  // Filters
  function filterTemples(criteria) {
    let filtered;
    switch (criteria) {
      case "old":
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
        break;
      case "new":
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
        break;
      case "large":
        filtered = temples.filter(t => t.area > 90000);
        break;
      case "small":
        filtered = temples.filter(t => t.area < 10000);
        break;
      default:
        filtered = temples;
    }
    displayTemples(filtered);
  }
  
  // Event Listeners
  filters.forEach(filter => {
    filter.addEventListener("click", (e) => {
      e.preventDefault();
      filterTemples(filter.id);
    });
  });
  
  // Initial Display
  displayTemples(temples);
  
  // Footer Info
  document.getElementById("current-year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
  