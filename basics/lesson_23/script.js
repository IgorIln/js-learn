//Declaration 

let arr1 = new Array();
let arr2 = [];

let fruits = ["Apple", "Orange", "Plum"];

for (let element in fruits) {
    alert(fruits[element]);
};

alert(fruits);

alert(`Number of elements in array: ${fruits.length}`);

alert(`Last element of array: ${fruits.length - 1}`);
alert(`Last element of array with method -at- : ${fruits.at(-1)}`);
