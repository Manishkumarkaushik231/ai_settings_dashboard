// File: script.js

// 1. Saare Zaroori HTML Elements ko pakadna (Grab all necessary HTML Elements)
const toneSelect = document.getElementById('tone');
const languageInput = document.getElementById('language');
const personaInput = document.getElementById('persona');
const saveButton = document.getElementById('save-btn');
const saveMessage = document.getElementById('save-message');
const STORAGE_KEY = 'manish_kaushik_ai_settings'; // Data save karne ke liye ek unique key

// 2. Settings ko Load karne ka Function
function loadSettings() {
    // Check karte hain ki browser mein koi data hai kya?
    const savedSettings = localStorage.getItem(STORAGE_KEY);
    
    if (savedSettings) {
        // Agar data hai, toh use JSON se JavaScript Object mein badalte hain
        const settings = JSON.parse(savedSettings);
        
        // Settings ko form mein fill (bhar) karte hain
        toneSelect.value = settings.tone || 'friendly'; // Default value agar missing ho
        languageInput.value = settings.language || 'Hinglish';
        personaInput.value = settings.persona || 'A professional web developer and coding teacher';

        console.log("Settings successfully loaded from browser storage.");
    } else {
        console.log("No saved settings found. Loading defaults.");
    }
}

// 3. Settings ko Save karne ka Function
function saveSettings() {
    // Form se naya data collect karte hain
    const currentSettings = {
        tone: toneSelect.value,
        language: languageInput.value,
        persona: personaInput.value,
        // Yahan future mein aur bhi settings add ki ja sakti hain
    };

    // JavaScript Object ko JSON string mein badalte hain, taki localStorage mein save ho sake
    const settingsJSON = JSON.stringify(currentSettings);
    
    // Data ko browser ke Local Storage mein save karte hain
    localStorage.setItem(STORAGE_KEY, settingsJSON);

    // User ko batate hain ki save ho gaya
    saveMessage.textContent = "✅ Settings Save Ho Chuki Hain!";
    saveMessage.style.color = '#4CAF50';
    
    // 3 second baad message ko gayab kar dete hain
    setTimeout(() => {
        saveMessage.textContent = '';
    }, 3000);

    console.log("Settings saved:", currentSettings);
}

// 4. Events ko Set karna (Jab page load ho aur jab button click ho)

// Jab page load ho, toh settings ko load karo
window.onload = loadSettings; 

// Jab Save Button click ho, toh settings ko save karo
saveButton.addEventListener('click', saveSettings);
