//Static properties and methods

class User {
    static staticMethod() {
        alert(this === User);
    }
}

User.staticMethod();

class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }

    static createTodays() {
        return new this("Todays digest", new Date());
    }

}

let articles = [
    new Article("HTML", new Date(2019, 3, 1)),
    new Article("CSS", new Date(2019, 5, 1)),
    new Article("JavaScript", new Date(2019, 1, 1))
];

articles.sort(Article.compare);

alert(articles[0].title);

let article2 = Article.createTodays();

alert(article2.title);
alert(article2.date);

// Inheritance of static properties and methods

class Animal {
    static planet = "Earth";

    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    
    run(speed = 0){
        this.speed+=speed;
        alert(`${this.name} runs with speed = ${this.speed}`);
    }

    static compare(animalA,animalB){
        return animalA.speed - animalB.speed;
    }
}

class Rabbit extends Animal{
    hide(){
        alert(`${this.name} hides!`);
    }
}

let rabbits = [
    new Rabbit("White Rabbit",10),
    new Rabbit("Black Rabbit",5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run();

alert(Rabbit.planet);