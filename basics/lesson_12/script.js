function sayHello() {
    alert("Hello, from sayHello function");
}

sayHello();


function helloUSer(userName, greeting) {
    alert(userName + ` , ` + greeting);
}

let name = "Joe";
let hi = "how are you today?";
let name2 = "Sarah";
helloUSer(name, hi);
helloUSer(name2, hi);

//default values

function noText(from, text = "No text in here") {
    alert(from + ` : ` + text);
}
noText(`Anna`);

//Return value

function sum(a,b){
    return a+b;
}
alert(sum(3,3));

function loopFunction(countIterations) {
    for(let i = 1;i<=countIterations;i++){
        alert(i);
    }
}
loopFunction(4);





