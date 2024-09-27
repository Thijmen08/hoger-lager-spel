let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('guess').value);
    attempts++;

    let resultText = '';

    if (userGuess === randomNumber) {
        resultText = `Gefeliciteerd! Je hebt het getal ${randomNumber} geraden in ${attempts} pogingen!`;
        document.getElementById('restart').style.display = 'block';
    } else if (userGuess < randomNumber) {
        resultText = 'Te laag! Probeer het opnieuw.';
    } else {
        resultText = 'Te hoog! Probeer het opnieuw.';
    }

    document.getElementById('result').textContent = resultText;
    document.getElementById('guess').value = '';
});

document.getElementById('restart').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('restart').style.display = 'none';
});
