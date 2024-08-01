//Extends keyword

class Animal {
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run(speed){
        this.speed = speed;
        alert(`${this.name} runs with speed ${this.speed}`);
    }
    stop(){
        this.speed = 0;
        alert(`${this.name} stands still`);
    }
}

let animal = new Animal(`My animal`);

animal.run(10);

animal.stop();


class Rabbit extends Animal{

    constructor(name,earLength){
        super(name);
        this.earLength = earLength;
    }

    hide(){
        alert(`${this.name} hides!`);
    }
    //Overriding method
    stop(){
        super.stop();
        this.hide();
    }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5);

rabbit.stop();

let rabbit2 = new Rabbit("2nd White rabbit",10);
alert(rabbit2.name);
alert(rabbit2.earLength);