"use strict"
/*

Object properties, besides a value, have three special attributes (so-called “flags”):

    writable – if true, the value can be changed, otherwise it’s read-only.
    enumerable – if true, then listed in loops, otherwise not listed.
    configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.


*/

// The method Object.getOwnPropertyDescriptor allows to 
// query the full information about a property.

// The syntax is:

// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

let user = {

    name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, `name`);

alert(JSON.stringify(descriptor, null, 2));

/*
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/

// To change the flags, we can use Object.defineProperty.

// The syntax is:

// Object.defineProperty(obj, propertyName, descriptor)

let user2 = {};

Object.defineProperty(user2, "name", { value: "John2" });

let descriptor2 = Object.getOwnPropertyDescriptor(user2, `name`);

alert(JSON.stringify(descriptor2, null, 2));
/*
{
  "value": "John2",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

// Non-writable
// Let’s make user.name non-writable (can’t be reassigned) by changing writable flag:

let user3 = {
    name: "John3"
};

Object.defineProperty(user3, `name`, { writable: false });

// user3.name = "Pete";//Error

//Non-configurable

let descriptor3 = Object.getOwnPropertyDescriptor(Math,`PI`);

alert(JSON.stringify(descriptor3,null,2));
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/

//  Object.defineProperties

/*
    Syntax:

    Object.defineProperties(obj, {
        prop1: descriptor1,
        prop2: descriptor2
        // ...
});  
*/