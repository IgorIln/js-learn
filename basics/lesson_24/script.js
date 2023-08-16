// Add/remove items

// We already know methods that add and remove items from the beginning or the end:

//     arr.push(...items) – adds items to the end,
//     arr.pop() – extracts an item from the end,
//     arr.shift() – extracts an item from the beginning,
//     arr.unshift(...items) – adds items to the beginning.


// Splice:

let arr = ["I", "go", "home"];

arr.forEach(alert);

delete arr[1];

arr.forEach(alert);

alert(`Array length: ${arr.length}`);

/*

The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

The syntax is:

arr.splice(start[, deleteCount, elem1, ..., elemN])

It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

*/

let arr2 = ["I", "learn", "JavaScript"];

arr2.forEach(alert);

arr2.splice(1, 1); //From index 1 remove 1 lement.

alert(arr2);

//Removing elemnts and replacing them:

let arr3 = ["I", "study", "JavaScript", "right", "now"];

arr3.forEach(alert);

arr3.splice(0, 3, "Let`s", "dance");

alert(arr3);

/*
The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:
*/

let arr4 = ["I", "study", "JavaScript"];

arr4.splice(3, 0, "its", "cool", "language");

alert(arr4);


//Slice:

/*
Similar to -Splice- 

arr.slice([start],[end]);

It returns a new array copying to it all items from index start to end (NOT INCLUDING END!)

*/

let someArray = ["t", "e", "s", "t"];

alert(someArray.slice(1, 3)); // returns [e,s]

alert(someArray.slice(-2)); //returns [s,t]

//Concat

/*
The method arr.concat creates a new array that includes values from other arrays and additional items.

The syntax is:

arr.concat(arg1, arg2...)

*/

let concated = arr4.concat(someArray);

alert(concated);


// Iterate: forEach

/*
The arr.forEach method allows to run a function for every element of the array.

The syntax:

arr.forEach(function(item, index, array) {
  // ... do something with item
});
*/

["Bilbo", "Gendalf", "Nazgul"].forEach(alert);

["Bilbo", "Gendalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index: ${index}, in array: ${array}`);
});

