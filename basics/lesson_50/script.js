
let animal = {
    eats: true,
};

let rabbit = Object.create(animal);// same as {__proto__: animal}


alert(rabbit.eats);//true

alert(Object.getPrototypeOf(rabbit) === animal); // true

let rabbit2 = Object.create(animal,{
    jumps:{
        value: true
    }
});

alert(rabbit2.jumps);//true