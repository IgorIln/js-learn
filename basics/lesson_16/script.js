// Sample of user 1

// let user = {
//     name : "Ivan",
//     age : 30
// }
// 1st var
// user.sayHi = function(){
//     alert("Hello 1");
// }

//2nd var
// user = {
//     sayHi : function(){
//         alert("Hello 2");
//     }
// };

// 3rd var
// user = {
//     sayHi(){
//         alert("Hello 3");
//     }
// }

// Sample of user 2

let user = {
    name: "Ivan",
    age: 30,
    sayHi() {
        alert(`Hello ${this.name} ! =)`);
    }
};
user.sayHi();

let calculator = {
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },
    
    sum() {
        return this.a + this.b;
    },
    
    mul() {
        return this.a * this.b;
    }


};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());