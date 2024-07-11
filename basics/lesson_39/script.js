"use strict"

function sayHi() {
    alert("Hi");
};

alert(sayHi.name);//Name of function
sayHi();//function

let sayHi2 = function () {
    alert("Hi");
};

alert(sayHi2.name);

//It also works if the assignment is done via a default value;
//In the specification, this feature is called a “contextual name”. 
function f(sayHello = function () { }) {
    alert("Hello");
}

f();

let user = {
    sayHi() {

    },
    sayBye: function () {

    }

}

alert(user.sayHi.name);
alert(user.sayBye.name);

// 2. The “length” property

function f1(a) { };
function f2(a, b) { };
function f3(a, b, ...c) { };

alert(f1.length);//1
alert(f2.length);//2
alert(f3.length);//2

function ask(question, ...handlers) {
    let isYes = confirm(question);

    for (let handler of handlers) {
        if (handler.length == 0) {
            if (isYes) handler();
        } else {
            handler(isYes);
        }
    }

}
ask("Question?", () => alert(`You said yes`), result => alert(result));


//3. Custom properties

function makeCounter() {

    function counter() {
        return counter.count++;
    };
    counter.count = 0;
    return counter;

};

let counter = makeCounter();

alert(counter());
alert(counter());

//4 Named Function Expression

let sayHiTO = function func(who) {
    if (who) {
        alert(`Hello ${who}`)
    }else{
        func("Guest")
    }
};

sayHiTO("User");
sayHiTO();


//Task

function tastCounter(){
    let count = 0;

    function counter(){
        return count++;
    }

    counter.setCounter = val => counter = val;

    counter.decr = () => count--;

    return counter;

}