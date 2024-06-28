"use strict"

let arr = ["John", "Smith"];

// 1
// let [firstName,lastName] = arr;

// alert(firstName);
// alert(lastName);

// 2
// let [firstName, surname] = "John Smith".split(' ');
// alert(firstName); // John
// alert(surname);  // Smith


// 3
// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert( title ); // Consul

// 4
// let [a, b, c] = "abc";

// alert(`${a}, ${b}, ${c}`);

// let [one, two, three] = new Set([1, 2, 3]);

// alert(two);

// 5

// let options = {
//     title: "Menu",
//     width: 100,
//     heigth: 200
// }

// let { title, width, heigth } = options;

// alert(title);
// alert(width);

// 6
// function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
//   alert( `${title} ${width} ${height}` );
// }

// showMenu();

//Task 1

let user = { name: "John", years: 30 };

// your code to the left side:
let { name, years: age, isAdmin = false } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false

//Task 2

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}

alert(topSalary(salaries));//Pete