const temples = [
  { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005-08-07", area: 11500, imageUrl: "https://..." },
  { templeName: "Manti Utah", location: "Manti, Utah", dedicated: "1888-05-21", area: 74792, imageUrl: "https://..." },
  { templeName: "Payson Utah", location: "Payson, Utah", dedicated: "2015-06-07", area: 96630, imageUrl: "https://..." },
  { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020-05-02", area: 6861, imageUrl: "https://..." },
  { templeName: "Washington D.C.", location: "Kensington, Maryland", dedicated: "1974-11-19", area: 156558, imageUrl: "https://..." },
  { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986-01-10", area: 9600, imageUrl: "https://..." },
  { templeName: "Mexico City", location: "Mexico City, Mexico", dedicated: "1983-12-02", area: 116642, imageUrl: "https://..." },
  { templeName: "Salt Lake", location: "Salt Lake City, Utah", dedicated: "1893-04-06", area: 253015, imageUrl: "https://..." },
  { templeName: "Provo City", location: "Provo, Utah", dedicated: "1972-02-09", area: 128325, imageUrl: "https://..." },
  { templeName: "Rome Italy", location: "Rome, Italy", dedicated: "2019-03-10", area: 40000, imageUrl: "https://..." }
];

// Generate temple cards
function createTempleCard(temple) {
  return `
    <div class="temple-card">
      <h3>${temple.templeName}</h3>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${new Date(temple.dedicated).toDateString()}</p>
      <p>Area: ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy">
    </div>
  `;
}

// Display temples
function displayTemples(filteredTemples) {
  const templeCards = filteredTemples.map(createTempleCard).join('');
  document.getElementById('temple-cards').innerHTML = templeCards;
}

// Filter temples
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
      filtered = temples; // Show all
  }
  displayTemples(filtered);
}

// Event Listeners for Filters
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    filterTemples(link.id);
  });
});

// Footer Updates
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Initialize
displayTemples(temples);
