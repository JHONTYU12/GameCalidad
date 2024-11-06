let sequence = [];
let missingNumbers = [];
let missingIndices = [];
let currentInputIndex = 0;
let errors = 0;
let errorsPerNumber = [];

function setupGame() {
    const rangeStart = parseInt(localStorage.getItem('rangeStart'));
    const rangeEnd = parseInt(localStorage.getItem('rangeEnd'));
    const totalNumbers = parseInt(localStorage.getItem('totalNumbers'));
    const missingCount = parseInt(localStorage.getItem('missingCount'));

    const startNumber = Math.floor(Math.random() * (rangeEnd - rangeStart - totalNumbers + 1)) + rangeStart;

    sequence = Array.from({ length: totalNumbers }, (_, i) => startNumber + i);

    missingIndices = [];
    while (missingIndices.length < missingCount) {
        const randomIndex = Math.floor(Math.random() * sequence.length);
        if (!missingIndices.includes(randomIndex)) {
            missingIndices.push(randomIndex);
        }
    }

    missingIndices.sort((a, b) => a - b);
    missingNumbers = missingIndices.map(index => sequence[index]);
    errorsPerNumber = new Array(missingNumbers.length).fill(0);

    missingIndices.forEach(index => {
        sequence[index] = '';
    });

    displaySequence();
    displayMissingInputs();
}

function displaySequence() {
    const sequenceGrid = document.getElementById('sequence-grid');
    sequenceGrid.innerHTML = '';

    sequence.forEach(number => {
        const box = document.createElement('div');
        box.classList.add('box');
        if (number === '') {
            box.classList.add('empty-box');
            box.textContent = '';
        } else {
            box.textContent = number;
        }
        sequenceGrid.appendChild(box);
    });
}

function displayMissingInputs() {
    const missingInputsContainer = document.getElementById('missing-inputs');
    missingInputsContainer.innerHTML = '';

    missingNumbers.forEach((_, index) => {
        const inputBox = document.createElement('input');
        inputBox.type = 'text';
        inputBox.classList.add('missing-input');
        inputBox.placeholder = `Número ${index + 1}`;
        inputBox.disabled = index !== currentInputIndex;
        inputBox.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                validateInput();
            }
        });
        missingInputsContainer.appendChild(inputBox);
    });
}

function validateInput() {
    const inputBoxes = document.querySelectorAll('.missing-input');
    const userInput = parseInt(inputBoxes[currentInputIndex].value);
    const feedback = document.getElementById('feedback');

    if (userInput === missingNumbers[currentInputIndex]) {
        feedback.textContent = "¡Correcto!";
        feedback.className = 'feedback success';
        feedback.style.display = 'block';

        inputBoxes[currentInputIndex].style.backgroundColor = '#d4edda';
        inputBoxes[currentInputIndex].style.color = '#155724';
        inputBoxes[currentInputIndex].disabled = true;
        currentInputIndex++;

        if (currentInputIndex < missingNumbers.length) {
            inputBoxes[currentInputIndex].disabled = false;
            inputBoxes[currentInputIndex].focus();
        } else {
            feedback.textContent = "¡Secuencia completa! Bien hecho.";
            feedback.className = 'feedback success';
            feedback.style.display = 'block';
            saveHistoryAndProceed();
        }
    } else {
        errors++;
        errorsPerNumber[currentInputIndex]++;
        feedback.textContent = "¡Incorrecto! Intenta de nuevo.";
        feedback.className = 'feedback error';
        feedback.style.display = 'block';
        inputBoxes[currentInputIndex].style.backgroundColor = '#f8d7da';
        inputBoxes[currentInputIndex].style.color = '#721c24';
    }
}

function saveHistoryAndProceed() {
    localStorage.setItem('errorsPerNumber', JSON.stringify(errorsPerNumber));
    window.location.href = 'result.html';
}

setupGame();
