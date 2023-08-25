//Set:

/*
A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

    new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
    set.add(value) – adds a value, returns the set itself.
    set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
    set.has(value) – returns true if the value exists in the set, otherwise false.
    set.clear() – removes everything from the set.
    set.size – is the elements count.
*/

let nameSet = new Set();

let joe = { name: "Joe" };
let sarah = { name: "Sarah" };
let pete = { name: "Pete" };

nameSet.add(joe);
nameSet.add(joe);
nameSet.add(sarah);
nameSet.add(pete);
nameSet.add(pete);
alert(nameSet.size);//Size will be 3