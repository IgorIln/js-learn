let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
};

alert(rabbit.jumps);
alert(rabbit.eats);

rabbit.walk();//Rabbit walks

longEar.walk();//Ear
alert(longEar.jumps);

let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `Name: ${this.name}, surname: ${this.surname}`;
    }

}

let admin = {
    __proto__: user,
    isAdmin: true
};

alert(admin.isAdmin);

admin.fullName = "Henry Ford";

alert(admin.fullName);
