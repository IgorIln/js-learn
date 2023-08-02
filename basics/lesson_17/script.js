function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name);
alert(user.isAdmin);


function User2(name, age) {
    this.name = name,
        this.age = age
}

let boss = new User2("Kate", 27);

alert(boss.name + " " + boss.age);


function Calculator() {

    this.read = function () {
        this.a = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    }

    this.sum = function () {
        return this.a + this.b;
    }

    this.mul = function () {
        return this.a * this.b;
    }
}

let cal = new Calculator;

cal.read();
alert(cal.sum());
alert(cal.mul());