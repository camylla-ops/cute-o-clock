function updateClock() {
    const now = new Date();
    updateDigitalDisplay(now);
}

function updateDigitalDisplay(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    document.querySelector('.hours').textContent = hours;
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;
    
    // Update date with cute format
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateText = date.toLocaleDateString('pt-BR', options);
    document.querySelector('.date').textContent = `✧ ${dateText} ✧`;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock(); 