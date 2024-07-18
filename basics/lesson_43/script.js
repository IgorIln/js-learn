// Losing "this"

// let user = {
//     firstName: "John",
//     sayHi(){
//         alert(`Hello ${this.firstName}`);
//     }
// };

// setTimeout(user.sayHi,1000);// Hello, undefined
//setTimeout got the function -> user.sayHi, separately from object.

//Solution 1: a wraper

// let user2 = {
//     firstName: "John2",
//     sayHi(){
//         alert(`Hello ${this.firstName}`);
//     }
// };

// setTimeout(function(){
//     user.sayHi();   //Hello John2
// } ,2000);

//Solution 2: bind

// let user3 = {
//     firstName: "John3",
//     sayHi(){
//         alert(`Hello ${this.firstName}`);
//     }  
// };

// let sayHi = user3.sayHi.bind(user3);

// sayHi();//Hello John3

// setTimeout(sayHi,1000);

// Going partial without context

function partial(func,...argsBound){
    return function(...args){
        return func.call(this,...argsBound,...args);
    }
}
//usage:

let user4 = {
    firstName: "John4",
    say(time,phrase){
        alert(`[${time}] ${this.firstName}: ${phrase}`);
    }
};

user4.say = partial(user4.say,new Date().getHours()+`:`+new Date().getMinutes());

user4.say(`Hello`);

/*
    Summary:

    Method func.bind(context, ...args) returns a “bound variant” of function func that fixes the context this and first arguments if given.

Usually we apply bind to fix this for an object method, so that we can pass it somewhere. For example, to setTimeout.

When we fix some arguments of an existing function, the resulting (less universal) function is called partially applied or partial.

Partials are convenient when we don’t want to repeat the same argument over and over again. Like if we have a send(from, to) function, 
and from should always be the same for our task, we can get a partial and go on with it.
*/