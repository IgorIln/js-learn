//String

let value = true;
alert(typeof value);

value = String(value);
alert(typeof value);


// Numeric conversion

alert("6"/"2");


let str = "123"; //String

str = Number(str); //Becomes number

alert(typeof str);

let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed


alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

// Boolean conversion

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false