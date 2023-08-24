// Map

/*
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:

    new Map() – creates the map.
    map.set(key, value) – stores the value by the key.
    map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    map.has(key) – returns true if the key exists, false otherwise.
    map.delete(key) – removes the element (the key/value pair) by the key.
    map.clear() – removes everything from the map.
    map.size – returns the current element count.
*/

let map = new Map();

map.set(`1`, `Str1`); //String key;
map.set(1, `Num1`); // Numeric key;
map.set(true, `bool1`);// Boolean key;

alert(map.get(1)); //Num1
alert(map.get(`1`)); //Str1
alert(map.size);

let john = { name: "John" };

let visitCountMap = new Map();

visitCountMap.set(john, 123);

alert(visitCountMap.get(john)); //123

//Iteration over Map:

/*
For looping over a map, there are 3 methods:

    map.keys() – returns an iterable for keys,
    map.values() – returns an iterable for values,
    map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
*/

let recipeMap = new Map([
    [`cucumber`, 500],
    [`tomatoes`, 350],
    [`onion`, 50]
]
);
//Iteration over keys:
for (let vegetables of recipeMap.keys()) {
    alert(vegetables);
}
//Iteration over values:
for (vegetables of recipeMap.values()) {
    alert(vegetables);
}

//Map has a built-in forEach method, similar to Array:

recipeMap.forEach((value, key, map) => {
    alert(`${key} : ${value}`)
})

//Object.entries: Map from Object:

let object1 = {
    name: "John",
    age: 32
}

let mapObj = new Map(Object.entries(object1));

alert(mapObj.get(`name`));
alert(mapObj.get(`age`));

//Object.fromEntries: Object from Map:

let someMap = new Map();
someMap.set(`banana`, 1);
someMap.set(`orange`, 2);
someMap.set(`meat`, 4);

let someObject = Object.fromEntries(someMap.entries());

alert(someObject.orange);
alert(someObject.banana);
alert(someObject.meat);