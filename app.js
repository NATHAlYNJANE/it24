console.log("App Started: UI Integrated");
 
function displayResult(message) {
    document.getElementById('result').innerText = message;
}

function checkOddOrEven() {
    let num = parseInt(document.getElementById('numberInput').value);
    if (isNaN(num)) {
        displayResult("Please enter a valid number!");
        return;
    }
    if (num % 2 === 0) {
        displayResult(num + " is Even");
    } else {
        displayResult(num + " is Odd");
    }
}
e
function checkPrime() {
    let num = parseInt(document.getElementById('numberInput').value);
    if (isNaN(num)) {
        displayResult("Please enter a valid number!");
        return;
    }
    if (num <= 1) {
        displayResult(num + " is not a Prime Number");
        return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            displayResult(num + " is not a Prime Number");
            return;
        }
    }
    displayResult(num + " is a Prime Number");
}

function checkPalindrome() {
    let str = document.getElementById('stringInput').value;
    if (!str) {
        displayResult("Please enter a valid string!");
        return;
    }
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i].toLowerCase() !== str[len - 1 - i].toLowerCase()) {
            displayResult(str + " is not a Palindrome");
            return;
        }
    }
    displayResult(str + " is a Palindrome");
}