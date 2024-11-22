document.addEventListener("DOMContentLoaded", () => {
    const temperature = 10; // in °C
    const windSpeed = 15; // in km/h
    const windChillElement = document.getElementById("windChill");

    function calculateWindChill(temp, wind) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(wind, 0.16) +
            0.3965 * temp * Math.pow(wind, 0.16)
        ).toFixed(1);
    }

    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
    } else {
        windChillElement.textContent = "N/A";
    }

    // Footer dynamic updates
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});
