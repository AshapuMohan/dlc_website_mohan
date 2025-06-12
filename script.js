// Accessibility Features
document.getElementById('increaseFont').addEventListener('click', function() {
    changeFontSize(1);
});

document.getElementById('decreaseFont').addEventListener('click', function() {
    changeFontSize(-1);
});

document.getElementById('highContrast').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
    localStorage.setItem('highContrast', document.body.classList.contains('high-contrast'));
});

document.getElementById('languageSelect').addEventListener('change', function() {
    // In a real implementation, this would change the language
    alert('Language changed to: ' + this.options[this.selectedIndex].text);
});

// Check for saved preferences
if (localStorage.getItem('highContrast') === 'true') {
    document.body.classList.add('high-contrast');
}

function changeFontSize(direction) {
    const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
    const newSize = currentSize + (direction * 2);
    document.body.style.fontSize = newSize + 'px';
    localStorage.setItem('fontSize', newSize);
}

// Set initial font size if saved
const savedFontSize = localStorage.getItem('fontSize');
if (savedFontSize) {
    document.body.style.fontSize = savedFontSize + 'px';
}

// Voice Command Simulation
document.querySelector('.voice-command-btn').addEventListener('click', function() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.start();
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            document.getElementById('user-input').value = transcript;
        };
        
        recognition.onerror = function(event) {
            console.error('Speech recognition error', event.error);
        };
    } else {
        alert('Voice commands are not supported in your browser. Try Chrome or Edge.');
    }
});

// Form Submission Handling
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real implementation, this would send data to a server
        alert('Thank you for your submission!');
        this.reset();
    });
});