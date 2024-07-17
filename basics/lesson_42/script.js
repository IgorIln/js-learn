"use strict"

//Using “func.call” for the context

function sayHi(){
    alert(this.name);
};

let user = { name: "John"};
let admin = { name: "Admin"};

sayHi.call(user);
sayHi.call(admin);


function saySomething(phrase){
    alert(this.name + ": "+ phrase);
};

let user2 = {name: "Joe"};

saySomething.call(user2,"Hello");

// let worker = {
//     someMethod() {
//       return 1;
//     },
  
//     slow(x) {
//       alert("Called with " + x);
//       return x * this.someMethod(); // (*)
//     }
//   };
  
//   function cachingDecorator(func) {
//     let cache = new Map();
//     return function(x) {
//       if (cache.has(x)) {
//         return cache.get(x);
//       }
//       let result = func.call(this, x); // "this" is passed correctly now
//       cache.set(x, result);
//       return result;
//     };
//   }
  
//   worker.slow = cachingDecorator(worker.slow); // now make it caching
  
//   alert( worker.slow(2) ); // works
//   alert( worker.slow(2) ); // works, doesn't call the original (cached)

//    Going multi-argument


let worker = {
    slow(min, max) {
      alert(`Called with ${min},${max}`);
      return min + max;
    }
  };
  
  function cachingDecorator(func, hash) {
    let cache = new Map();
    return function() {
      let key = hash(arguments); // (*)
      if (cache.has(key)) {
        return cache.get(key);
      }
  
      let result = func.call(this, ...arguments); // (**)
  
      cache.set(key, result);
      return result;
    };
  }
  
  function hash(args) {
    return args[0] + ',' + args[1];
  }
  
  worker.slow = cachingDecorator(worker.slow, hash);
  
  alert( worker.slow(3, 5) ); // works
  alert( "Again " + worker.slow(3, 5) ); // same (cached)

  //func.apply

  function hash() {
    alert( [].join.call(arguments) ); // 1,2
  }
  
  hash(1, 2);