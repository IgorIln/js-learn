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
  { id: 3, name: `Joe` }
];

let filteredArray = someUsers.filter(x => x.id < 2);

alert(filteredArray.length);

// Sort

/*
The call to arr.sort() sorts the array in place, changing its element order.

It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.
*/


function compare(a, b) {

  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arrayOfNums = [14, 2, 55, 33];

alert(`Array at start: ${arrayOfNums}`);

let sortedArray = arrayOfNums.sort(compare);

alert(`Sorted: ${sortedArray}`);

/* 
Sample:
let arr = [ 1, 2, 15 ];

arr.sort(function(a, b) { return a - b; });

alert(arr);  // 1, 2, 15;

or with arrow function:

arr.sort( (a, b) => a - b );
*/

/*
  FOR STRINGS USE -localeCompare- :

  let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)
*/

//Split and Join:

let names = `Tom, Sam, Jack, Jenn, Kate, Anna`;

let nameArray = names.split(`, `);

for(x of nameArray){
  alert(`Name in array: ${x}`);
}

// reduce/reduceRight

let reduceArray = [1,2,3,4,5];

let resultOfReduce = reduceArray.reduce((sum,current) => sum+current,0);

alert(resultOfReduce);