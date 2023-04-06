const inputNumber = document.getElementById('inputNumber');
const submitNumber = document.getElementById('submitNumber');

submitNumber.addEventListener('click', function() {
    const number = inputNumber.value;
    
    if (number % 3 === 0 && number % 5 === 0) {
        document.getElementById('resultNumber').textContent = 'FizzBuzz';

    } else if (number % 3 === 0) {
        document.getElementById('resultNumber').textContent = 'Fizz';

    } else if (number % 5 === 0) {
        document.getElementById('resultNumber').textContent = 'Buzz';

    } else {
        document.getElementById('resultNumber').textContent = number;

    }
});