"use strict"

//1

function sumAll(...args) {

    let sum = 0;

    for (let argument of args) {
        sum += argument;
    };
    return sum;
};

let someSum = sumAll(3, 13, 23, 50);


alert(someSum);

//2
/*
The rest parameters must be at the end

The rest parameters gather all remaining arguments, so the following does not make sense and causes an error:

function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
  // error
}

The ...rest must always be last.
*/

function showName(firstName, lastName, ...titles) {
    alert(firstName + ` ` + lastName);
    titles.forEach(alert);//Array of Titles
}

showName("Julius", "Caesar", "Consul", "Imperator", "Title 3", "Title 4");


// Spread syntax

alert(Math.max(3, 2, 1, 5, 9));

let arr = [3, 5, 1];

alert(Math.max(arr));//NaN

alert(Math.max(...arr)); //Now will be 5;

let arr2 = [10, -2, 4];

alert(Math.max(...arr, ...arr2));// 10

// Copy an array/object


let arr3 = [10, 5, 4];

let arrCOpy = [...arr3];
// do the arrays have the same contents?
alert(JSON.stringify(arr3) === JSON.stringify(arrCOpy)); //True;

// are the arrays equal?
alert(arr3 === arrCOpy); //False(Not same reference);

