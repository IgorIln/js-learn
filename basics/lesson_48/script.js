
let animal = {
    eats: true
};
function Rabbit(name){
    this.name = name;
};

Rabbit.prototype = animal;

let rabbit = new Rabbit("White rabbit");

alert(rabbit.name);
alert(rabbit.eats);


function Rabbit2(name){
    this.name = name,
    alert(name);
}

let rabbit2 = new Rabbit2("White rabbit2");

let rabbit3 = rabbit2.constructor("Black rabbit3");

alert(rabbit2.name);
alert(rabbit3.name);