"use strict"

if(true){
    var test = true;
}

alert(test);// true, the variable lives after if

/*
if(true){
    let test2 = true;
}

 alert(test2);//ReferenceError test2 is not defind;

*/


// As var ignores code blocks, we’ve got a global variable test.


// 2
// If a code block is inside a function, then var becomes a function-level variable:

function sayHi(){
    if(true){
        var phrase = "Hello";
    }
    alert(phrase); //Works
}
sayHi();
// alert(phrase); ReferenceError 

// “var” tolerates redeclarations

let user;
// let user; Cant declare twice;

var user2 = "Joe";
var user2 = "Pete"; 
alert(user2);//Pete


/*
Summary
There are two main differences of var compared to let/const:

    var variables have no block scope, their visibility is scoped to current function, or global, if declared outside function.
    var declarations are processed at function start (script start for globals).
*/