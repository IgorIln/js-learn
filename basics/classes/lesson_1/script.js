
/*
    Base syntax:

    class MyClass {
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
}
*/

class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(`Hello from: ${this.name}`);
    }

};

let user = new User("John");

user.sayHi();

alert(typeof User)//function

alert(User.prototype.sayHi)

class User2 {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(name){
        if(name.length < 4){
            alert("Name is short");
            return;
        }else this._name = name;
    }
}

let user2 = new User2("John2");
alert(user2.name);

let user3 = new User2(" ");

// Class fields


class SomeUser{
    name = "John SomeUser";
    sayHi(){
        alert(`Hello from: ${this.name}`)
    }
}

new SomeUser().sayHi();