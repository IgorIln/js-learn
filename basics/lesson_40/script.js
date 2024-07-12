"use strict"

//Syntax

// let func = new Function ([arg1, arg2, ...argN], functionBody);

let sum = new Function(`a`, `b`, `return a + b`);

alert(sum(1, 2));

//Function without arguments, only with function body:

let sayHi = new Function(`alert("Hello");`)

sayHi();

/*

All previous declarations required us, programmers, to write the function code in the script.

But new Function allows to turn any string into a function.

*/

//Closure

function getFunc() {
    let value = "test";
 
    // let func = new Function(`alert(value);`); Will not work!
    let func = function() { alert(value); };
  
    return func;
  }
  
  getFunc()(); // "test", from the Lexical Environment of getFunc;
  