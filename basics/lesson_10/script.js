//While:
let i = 0;

while (i < 3) {
    alert(`i: ${i}`);
    i++;
}

let b = 0;

//Do while:
do {
    alert(`b = ${b}`);
    b++;
} while (b < 4);

//For:
let c = 5;

for (let index = 0; index < c; index++) {

    alert(`index is: ${index}`);

}

let sum = 0;

//Break in loop
while (true) {
    let value = Number(prompt("Enter value to sum: ", ``));

    if (!value) break;

    sum += value;
}
alert(`Sum of values: ` + sum);

//Labels for break and continue;

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at cords: ${i},${j}`, ``);
        //if input is empty or canceled we exit from loop;
        if(!input) break outer;
    }
}
alert(`Done`);
