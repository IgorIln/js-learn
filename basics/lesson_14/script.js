//Sample:
// let func = (arg1,arg2... argN) => expression;
let sum = (a, b) => a + b;

alert(sum(3, 10));

let doubleVal = (x) => x * 2;

alert(doubleVal(8));

let sayHello = (x) => alert(`Hello ${x}`);

sayHello("Black");

//Task
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Yes or No?",
    () => alert("Yeah, cool"),
    () => alert("Bad idea")
)