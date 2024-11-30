// Array of Temple Objects
const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: 1893,
        area: 253015,
        image: "https://assets.ldscdn.org/3b/4c/3b4c9db9b64b4d939a24bc7cfb67cf7b1cf89b46/salt_lake_temple.jpg",
    },
    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: 2019,
        area: 40400,
        image: "https://assets.ldscdn.org/88/48/88489689b1475a168dd6b144a54b686f5e86c8d8/rome_italy_temple.jpg",
    },
    {
        name: "St. George Temple",
        location: "St. George, Utah",
        dedicated: 1877,
        area: 110000,
        image: "https://assets.ldscdn.org/11/56/1156f6383bb64e1c82f9a56f8817e49071482b16/st_george_utah_temple.jpg",
    },
    {
        name: "Tokyo Japan Temple",
        location: "Tokyo, Japan",
        dedicated: 1980,
        area: 52000,
        image: "https://assets.ldscdn.org/89/a5/89a52948f7994b558e855ea43235b1f88f59ec01/tokyo_japan_temple.jpg",
    },
    {
        name: "Laie Hawaii Temple",
        location: "Laie, Hawaii",
        dedicated: 1919,
        area: 107000,
        image: "https://assets.ldscdn.org/9a/a4/9aa44246c6da4bc9b177f571da1271be865e3246/laie_hawaii_temple.jpg",
    },
    {
        name: "Manila Philippines Temple",
        location: "Manila, Philippines",
        dedicated: 1984,
        area: 49000,
        image: "https://assets.ldscdn.org/example-temple-image.jpg",
    },
];

// DOM Elements
const templeContainer = document.getElementById("temple-container");
const yearElement = document.getElementById("year");
const lastModifiedElement = document.getElementById("last-modified");

// Display Temples
function displayTemples(filteredTemples) {
    templeContainer.innerHTML = "";
    filteredTemples.forEach((temple) => {
        const card = document.createElement("div");
        card.className = "temple-card";
        card.innerHTML = `
            <img src="${temple.image}" alt="${temple.name}" loading="lazy">
            <h2>${temple.name}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;
        templeContainer.appendChild(card);
    });
}

// Filter Logic
function filterTemples(filter) {
    let filteredTemples = [];
    switch (filter) {
        case "old":
            filteredTemples = temples.filter((temple) => temple.dedicated < 1900);
            break;
        case "new":
            filteredTemples = temples.filter((temple) => temple.dedicated > 2000);
            break;
        case "large":
            filteredTemples = temples.filter((temple) => temple.area > 90000);
            break;
        case "small":
            filteredTemples = temples.filter((temple) => temple.area < 10000);
            break;
        default:
            filteredTemples = temples;
    }
    displayTemples(filteredTemples);
}

// Add Event Listeners
document.getElementById("filter-home").addEventListener("click", () => filterTemples());
document.getElementById("filter-old").addEventListener("click", () => filterTemples("old"));
document.getElementById("filter-new").addEventListener("click", () => filterTemples("new"));
document.getElementById("filter-large").addEventListener("click", () => filterTemples("large"));
document.getElementById("filter-small").addEventListener("click", () => filterTemples("small"));

// Footer Updates
yearElement.textContent = new Date().getFullYear();
lastModifiedElement.textContent = document.lastModified;

// Initial Display
displayTemples(temples);
