"use strict"

// Object.keys, values, entries

// For plain objects, the following methods are available:

//     Object.keys(obj) – returns an array of keys.
//     Object.values(obj) – returns an array of values.
//     Object.entries(obj) – returns an array of [key, value] pairs.

let user = {
    name: "John",
    age: 30
}

//Object.values();

for (let val of Object.values(user)) {
    alert(val);
};

//Object.entries();

for (let val of Object.entries(user)) {
    alert(val);
}

//Transformin objects.

/*
If we’d like to apply them, then we can use Object.entries followed by Object.fromEntries:

    Use Object.entries(obj) to get an array of key/value pairs from obj.
    Use array methods on that array, e.g. map, to transform these key/value pairs.
    Use Object.fromEntries(array) on the resulting array to turn it back into an object.

*/

let prices = {
    banana: 10,
    orange: 25,
    meat: 40
}

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);

alert(doublePrices.meat);

//task

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries) {
    let sum = 0;

    for (let salarie of Object.values(salaries)) {
        sum += salarie;
    }
    return sum;

}

alert(sumSalaries(salaries));
