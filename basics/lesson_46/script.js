
let user = {
    name: "John",
    surname: "Smith",
    get fullName() {
        return `${this.name} ${this.surname}`
    }
};

alert(user.fullName);

let user2 = {
    name: "John2",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }

};

alert(user2.fullName);//John2 Smith

user2.fullName = "Black Jack";
alert(user2.fullName);

function User3(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });

};

let sam = new User3("Sam",new Date(1962,6,1));

alert(sam.birthday);
alert(sam.age);