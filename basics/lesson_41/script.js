"use strict"

/*

We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

There are two methods for it:

    1)setTimeout allows us to run a function once after the interval of time.
    2)setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

*/
//setTimeout

//Syntax

// let timerId = setTimeout(func|code,[delay],[arg1],[arg2],...);

// function sayHi() {
//     alert("Hello");
// };
// setTimeout(sayHi, 1000);

// function sayHiTo(phrase, who) {
//     alert(phrase + " " + who);
// }

// setTimeout(sayHiTo, 2000, "Hello to you =>", "John");

// Canceling with clearTimeout

//Syntax:

// let timerId = setTimeout(...);
// clearTimeout(timerId);

// let timerId = setTimeout(() => alert("Never hapends"), 1000);

// alert(timerId);// timer identifier

// clearTimeout(timerId);

// alert(timerId)//same identifier

// setInterval

// Syntax

// let timerId = setInterval(func|code,[delay],[arg1],[arg2]...);

// let timerId2 = setInterval(() => alert(`tick`), 2000);

// setTimeout(() => { clearInterval(timerId2); alert(`stop`), 5000 });

// Nested setTimeout

let i = 1;

setInterval(function () {
    func(i++);
}, 100);
