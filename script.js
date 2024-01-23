document.getElementById('check-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');

    if (inputText === '') {
        alert('Please input a value');
    } else {
        const cleanedInput = inputText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const reversedInput = cleanedInput.split('').reverse().join('');

        if (cleanedInput === reversedInput) {
            resultElement.textContent = `${inputText} is a palindrome`;
        } else {
            resultElement.textContent = `${inputText} is not a palindrome`;
        }
    }
});
