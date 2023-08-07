let bil1 = 1_000_000_000;
let bil2 = 1e9;

alert(`bil1 == bil2:  ${bil1 == bil2}`);

// The method num.toString(base) returns a string 
// representation of num in the numeral system with the given base.

let num = 255;

alert(num.toString(16));
alert(num.toString(2));

//Rounding

// Math.floor
//     Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
// Math.ceil
//     Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
// Math.round
//     Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
// Math.trunc (not supported by Internet Explorer)
//     Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1. 

let num2 = 1.23456;

alert(Math.round(num2 * 100) / 100);

//toFixed();

let number1 = 14.35;

alert(number1.toFixed(1));

let number2 = 14.36;

alert(number2.toFixed(1));

let number3 = 14.4;

alert(number3.toFixed(5));  


// toFixed always returns a string.
