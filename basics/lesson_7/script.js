let year = prompt(`Choose year from 2013 - 2015`);

if (year == 2013) { alert(`-2013-`); }
else if (year == 2014) { alert(`-2014-`); }
else if (year == 2015) { alert(`-2015-`); }
else { alert(`Some another year`); }

let luckyNum = 3;

let result = prompt(`Pick a lucky number from 1 - 5`);

if (result == luckyNum) {
    alert(`You are lucky`);
} else alert(`Bad choise`);

//Conditional operatior `?`:
//let result = condition ? value1 : value2;

let age = prompt(`What is your age?`, ``);

let result2 = age > 18 ? `You are older than me` : `You are younger than me`;

alert(result2);


let message;

let login = `22222`;

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}

message = (login == `Employee`) ? `Hello` : (login == `Director`) ? `Greetings` : (login == ``) ? `No login` : ``;

alert(`Message: ${message}`);