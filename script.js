// Deep Breathing Timer
const deepBreathStartBtn = document.getElementById('deep-breath-start');
const breathInstructions = document.createElement('p');

deepBreathStartBtn.addEventListener('click', () => {
    breathInstructions.remove();
    breathInstructions.textContent = "Inhale deeply for 5 seconds...";
    document.querySelector('.exercise:first-child').appendChild(breathInstructions);

    setTimeout(() => {
        breathInstructions.textContent = "Hold for 3 seconds...";
    }, 5000);

    setTimeout(() => {
        breathInstructions.textContent = "Exhale slowly for 7 seconds...";
    }, 8000);

    setTimeout(() => {
        breathInstructions.textContent = "Repeat 3-5 times.";
    }, 15000);
});

// Mindfulness Tip Generator
const mindfulnessTips = [
    "Focus on your breath.",
    "Notice the sensations in your body.",
    "Practice gratitude for the present moment.",
    "Listen to the sounds around you.",
    "Take a mindful walk in nature.",
];

const tipDisplay = document.createElement('p');
tipDisplay.id = 'mindfulnessTip'; // Add an ID for styling
document.body.appendChild(tipDisplay);

function generateTip() {
    const randomIndex = Math.floor(Math.random() * mindfulnessTips.length);
    tipDisplay.textContent = `Mindfulness Tip: ${mindfulnessTips[randomIndex]}`; // Use template literal
}

generateTip(); 

// Affirmation Display
const affirmations = [
    "I am calm and peaceful.",
    "I am grateful for this moment.",
    "I am strong and resilient.",
    "I am worthy of love and happiness.",
    "I am capable of achieving my goals."
];

const affirmationDisplay = document.createElement('p');
affirmationDisplay.id = 'affirmation'; // Add an ID for styling
document.body.appendChild(affirmationDisplay);

function displayAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    affirmationDisplay.textContent = affirmations[randomIndex];
}

displayAffirmation();

// Store user's preferred affirmation in localStorage
const userPreferredAffirmation = localStorage.getItem('preferredAffirmation');
if (userPreferredAffirmation) {
    affirmationDisplay.textContent = userPreferredAffirmation;
}

// Allow user to save their preferred affirmation
affirmationDisplay.addEventListener('click', () => {
    localStorage.setItem('preferredAffirmation', affirmationDisplay.textContent);
});