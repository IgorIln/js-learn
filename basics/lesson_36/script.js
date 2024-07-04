"use strict"

//Code blocks

{
    let message = "Hello";

    alert(message);
}

{
    let message = "Hello 2";

    alert(message);
}

// alert(message); Error =) 

/*

For if, for, while and so on, 
variables declared in {...} are also only visible inside:

*/

if (true) {
    let text = "Some text";

    alert(text);
}

// alert(text); Not visible

// Nested functions

function sayHiBye(firstName, lastName) {
    function getFullName() {
        return firstName + ` ` + lastName;
    }
    alert(`Hello, ` + getFullName());
    alert(`Bye, ` + getFullName());
}
sayHiBye("Jack", "Daniels")

//Tastks

//1

/* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
};

function inArray(array) {
    return function (x) {
        return array.includes(x);
    };
};

alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

alert(arr.filter(inArray([1, 2, 10]))); // 1,2

//2

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

//sort by name:
users.sort((a, b) => a.name > b.name ? 1 : -1);
//sort by age:
users.sort((a, b) => a.age > b.age ? 1 : -1);
//sort by surname:
users.sort((a, b) => a.surname > b.surname ? 1 : -1);

//sort by field:

function byField(someField) {
    return (a, b) => a[someField] > b[someField] ? 1 : -1;
}

users.sort(byField('name'));

users.sort(byField('age'));