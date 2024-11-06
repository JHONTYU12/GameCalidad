document.addEventListener('DOMContentLoaded', function () {
    loadHistory(); // Carga inicial de todas las estadísticas
});

function loadHistory() {
    // Esta función simula la carga de todas las estadísticas de los pacientes.
    const historyLog = document.getElementById('history-log');
    historyLog.innerHTML = ''; // Limpia el historial previo

    // Supongamos que las estadísticas de cada paciente están almacenadas en localStorage bajo el nombre "patientsHistory"
    const patientsHistory = JSON.parse(localStorage.getItem('patientsHistory')) || [];

    patientsHistory.forEach(patient => {
        const historyItem = document.createElement('p');
        historyItem.textContent = `Paciente: ${patient.name} - Errores Totales: ${patient.totalErrors}`;
        historyLog.appendChild(historyItem);
    });
}

function searchPatient() {
    const searchName = document.getElementById('search-patient').value.toLowerCase();
    const historyLog = document.getElementById('history-log');
    historyLog.innerHTML = '';

    const patientsHistory = JSON.parse(localStorage.getItem('patientsHistory')) || [];

    const filteredPatients = patientsHistory.filter(patient =>
        patient.name.toLowerCase().includes(searchName)
    );

    filteredPatients.forEach(patient => {
        const historyItem = document.createElement('p');
        historyItem.textContent = `Paciente: ${patient.name} - Errores Totales: ${patient.totalErrors}`;
        historyLog.appendChild(historyItem);
    });

    if (filteredPatients.length === 0) {
        historyLog.innerHTML = '<p>No se encontraron resultados.</p>';
    }
}

function goBack() {
    window.location.href = 'login.html';
}
