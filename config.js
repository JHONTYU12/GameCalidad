function startGame() {
    const rangeStart = parseInt(document.getElementById('range-start').value);
    const rangeEnd = parseInt(document.getElementById('range-end').value);
    const totalNumbers = parseInt(document.getElementById('total-numbers').value);
    const missingCount = parseInt(document.getElementById('missing-count').value);

    if (rangeStart < rangeEnd && totalNumbers > 0 && missingCount > 0 && missingCount < totalNumbers && totalNumbers <= (rangeEnd - rangeStart + 1)) {
        // Store config in local storage and go to game screen
        localStorage.setItem('rangeStart', rangeStart);
        localStorage.setItem('rangeEnd', rangeEnd);
        localStorage.setItem('totalNumbers', totalNumbers);
        localStorage.setItem('missingCount', missingCount);
        window.location.href = 'game.html';
    } else {
        alert('Por favor, ingrese valores válidos.');
    }
}
