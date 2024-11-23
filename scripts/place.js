// Current Year and Last Modified
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Calculate Wind Chill
function calculateWindChill(temp, windSpeed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(1);
}

// Static Weather Data
const temperature = 10; // °C
const windSpeed = 15; // km/h

if (temperature <= 10 && windSpeed > 4.8) {
  document.getElementById("wind-chill").textContent = calculateWindChill(
    temperature,
    windSpeed
  ) + "°C";
} else {
  document.getElementById("wind-chill").textContent = "N/A";
}
