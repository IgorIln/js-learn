"use strict"

// Arrow functions have no "this"

// let group = {
//     title: "Our group",
//     students: ["John", "Pete", "Alice"],
//     showList() {
//         this.students.forEach(
//             student => alert(this.title + ": " + student)
//         );
//     }
// }

// group.showList();

//If we used a “regular” function, 
//there would be an error:

// let group2 = {
//     title2: "Our group2",
//     students2: ["John2", "Pete2", "Alice2"],

//     showList2() {
//         this.students2.forEach(function (student) {
//             //Error: Cannot read property "title" of undefined
//             alert(this.title2 + `: ` + student);
//         });
//     }
// };
// group2.showList2();
//The error occurs because forEach runs functions with this=undefined by default, 
// so the attempt to access undefined.title is made.

// 2. Arrows have no “arguments”


function defer(f,ms){
    return function(){
        setTimeout(()=>f.apply(this,arguments),ms);
    }
}
function sayHi(who){
    alert(`Hello, `+ who);
}

let sayHiDeferred = defer(sayHi,2000);
sayHiDeferred("John");

/*
 Summmary:

Arrow functions:

    Do not have this.
    Do not have arguments.
    Can’t be called with new.
    They also don’t have super.

*/