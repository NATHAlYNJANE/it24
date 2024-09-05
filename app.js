console.log("App Started: Data Types, Operators, Conditionals, and Loops");

let num1 = 10;     
let num2 = 5;  
let message = "Done na Sir"; 

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);

function checkOddOrEven(num) {
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
}

checkOddOrEven(7); 

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let number = 11;
if (isPrime(number)) {
    console.log(number + " is a Prime Number");
} else {
    console.log(number + " is not a Prime Number");
}
