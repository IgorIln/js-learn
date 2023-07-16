let x = -1;

x = +x;

alert(x);// is -1;

alert(8 % 5);

alert(2 ** 3); // 2³ = 8

let s = "Some_" + "new " + "String";

alert(s);

// Strings and numbers
alert(`1` + 2);
alert(2 + `1`);

alert(`1` + 2 + 2); //Result 122;

alert(2 + `1` + 2); //Result 212

alert(2 + 2 + `1`); //Result 41;

alert(6 - `3`); //Result 3

alert(`8` / `2`); //Result 4

//Strings

let apples = `10`;
let oranges = `14`;

alert(apples + oranges); //Result 1014

alert(+apples + +oranges); //Result 24. is same as: alert(Number(apples) + Number(oranges));

// Other

let n = 5;
n+=3;
n*=2;
alert(n);

// Incr, decr.

let val = 10;
val++;
++val;
alert(`This is val: ${val}`);

