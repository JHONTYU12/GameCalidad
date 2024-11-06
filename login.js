function goToConfiguration() {
    const therapistId = document.getElementById('therapist-id').value;
    const patientId = document.getElementById('patient-id').value;
    if (therapistId && patientId) {
        localStorage.setItem('therapistId', therapistId);
        localStorage.setItem('patientId', patientId);
        window.location.href = 'config.html';
    } else {
        alert('Por favor, ingrese los IDs');
    }
}

function goToHistory() {
    window.location.href = 'history.html'; // Redirige a la página de historial
}
