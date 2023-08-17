// find and findIndex/findLastIndex

/*
Imagine we have an array of objects. How do we find an object with the specific condition?

Here the arr.find(fn) method comes in handy.

The syntax is:

let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});

The function is called for elements of the array, one after another:

    item is the element.
    index is its index.
    array is the array itself.
*/

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "John" }
];

let user = users.find(item => item.id == 1);

alert(user.id + " " + user.name);

alert(users.findIndex(x => x.name == `John`)); //This method will find first John in array(index).

alert(users.findLastIndex(x => x.name == `John`)); //Last index.

//Filter

/*
The find method looks for a single (first) element that makes the function return true.

If there may be many, we can use arr.filter(fn).

The syntax is similar to find, but filter returns an array of all matching elements:

let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});
*/

let someUsers = [
    { id: 0, name: `John` },
    { id: 1, name: `Pete` },
    { id: 2, name: `Mary` },
    { id: 3, name: `Joe`}
];

let filteredArray = someUsers.filter( x => x.id<2);

alert(filteredArray.length);

// Sort

/*
The call to arr.sort() sorts the array in place, changing its element order.

It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.
*/
