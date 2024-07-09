"use strict"

alert("Hello");
//same as:

window.alert("Hello");

// make current user information global, to let all scripts access it

window.currentUser = {
    name: "John"
};

alert(window.currentUser.name);