let id1 = Symbol("id");

let id2 = Symbol("id");

alert(id1 == id2); //Symbols are unique

// alert(id1); --> TypeError: Cannot convert a Symbol value to a string

alert(id1.toString()); // --> Now it will work 

alert(id1.description); //Check results for each.

// There exist many “system” symbols that JavaScript uses internally, and we can use them to fine-tune various aspects of our objects.

// They are listed in the specification in the Well-known symbols table:

//     Symbol.hasInstance
//     Symbol.isConcatSpreadable
//     Symbol.iterator
//     Symbol.toPrimitive