// Tip Generator
const tips = [
    "Take 5 deep breaths to center yourself.",
    "Focus on one task at a time today.",
    "Spend 10 minutes in quiet reflection.",
    "Write down 3 things you're grateful for.",
    "Step outside and enjoy the fresh air."
  ];
  
  document.getElementById("tipButton").addEventListener("click", () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("dailyTip").innerText = randomTip;
  });
  
  // Affirmation Generator
  const affirmations = [
    "You are strong and capable.",
    "You deserve peace and happiness.",
    "You are enough, just as you are.",
    "You can handle whatever comes your way.",
    "You are doing your best, and that's okay."
  ];
  
  document.getElementById("affirmationButton").addEventListener("click", () => {
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    document.getElementById("affirmation").innerText = randomAffirmation;
  });
  