function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

function showOk() {
    alert("You are ok");
}
function showCancel() {
    alert("You canceled");
}

let askQuestion = "Yes or no?";

ask(askQuestion, showOk, showCancel);

