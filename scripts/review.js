// Increment and display the review count
window.onload = () => {
    const reviewCount = localStorage.getItem("reviewCount") || 0;
    localStorage.setItem("reviewCount", Number(reviewCount) + 1);
    document.getElementById("reviewCount").textContent = localStorage.getItem("reviewCount");
  };