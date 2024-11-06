document.addEventListener('DOMContentLoaded', function () {
    const errorsPerNumber = JSON.parse(localStorage.getItem('errorsPerNumber'));
    const errorCountContainer = document.getElementById('error-count');
    errorCountContainer.innerHTML = '';

    errorsPerNumber.forEach((errors, index) => {
        const errorItem = document.createElement('p');
        errorItem.textContent = `Errores en Número ${index + 1}: ${errors}`;
        errorCountContainer.appendChild(errorItem);
    });

    const totalErrors = errorsPerNumber.reduce((total, numErrors) => total + numErrors, 0);
    const totalErrorItem = document.createElement('p');
    totalErrorItem.classList.add('total-errors');
    totalErrorItem.textContent = `Errores totales: ${totalErrors}`;
    errorCountContainer.appendChild(totalErrorItem);
});

function saveResult() {
    // Lógica de guardado
    alert("Resultado guardado.");
}

function retryGame() {
    window.location.href = 'game.html'; // Vuelve a cargar el juego con la misma configuración
}

function newGame() {
    localStorage.removeItem('rangeStart');
    localStorage.removeItem('rangeEnd');
    localStorage.removeItem('totalNumbers');
    localStorage.removeItem('missingCount');
    window.location.href = 'config.html'; // Redirige a la configuración para una nueva partida
}

function goToMain() {
    window.location.href = 'login.html'; // Redirige a la pantalla de inicio
}
