let displayLabel = document.getElementById('displayLabel');

function addChar(char) {
    displayLabel.innerText += char;
}

function confirmText() {
    const enteredText = displayLabel.innerText;
    const correctPassword = 'BRUXO';
    
    if (enteredText === correctPassword) {
        alert('Senha correta! Sua letra é O');
    } else {
        alert('Senha incorreta! Tente novamente.');
    }
}

function clearLastChar() {
    displayLabel.innerText = displayLabel.innerText.slice(0, -1);
}

function clearText() {
    displayLabel.innerText = '';
}
