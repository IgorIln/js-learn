// || (OR) operator

alert(true || true);   // true
alert(false || true);  // true
alert(true || false);  // true
alert(false || false); // false

if (1 || 0) {
    alert(`It is: true`);
}

let time = 6;

let result = (time < 8 || time > 22) ? `The store is closed` : `Store is open`;

alert(`Result: ${result}`);

// &&(AND)
// If first operand is False, second is ignored;

alert(true && true);   // true
alert(false && true);  // false
alert(true && false);  // false
alert(false && false); // false

let hours = 13;

let minutes = 20;

let result2 = (hours == 13 && minutes == 30) ? `Dinner time` : `Learn JS`;

alert(`What time is it? : ${result2}`);

// !(NOT) 

let day = !false;
let result3 = (day == true) ? `Its a good day` : `Bad day`;
alert(`Day: ${result3}`);


//Task

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}