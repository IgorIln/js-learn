// The “try…catch” syntax

/*
try {
    
} catch (error) {
    
}
*/

try {
    alert(`Start of try runs`);
    // .. no errors here
    alert(`End ot try run`);

} catch (err) {
    alert(`Catch is ignored`);
}

try {
    alert(`Try run`);
    some_error;
    alert(`End try run`);

} catch (error) {
    alert(`We have an error`);
}

// Error object

/*
When an error occurs, JavaScript generates an object containing 
the details about it. The object is then passed as an argument 
to catch.
*/

try {
    my_error;
} catch (err) {
    alert(err.name);
    alert(err.message);
    alert(err.stack);
    alert(err);
}

// Using “try…catch”:

let json = "{ bad json }";

try {
    let user = JSON.parse(json);
    alert(user.name);// no name;
} catch (error) {
    alert("Doesnt execute");
}

// “Throw” operator

let custom_err = new Error("My Error");

alert(custom_err.name);
alert(custom_err.message);

let json2 = `{"age": 30}`; //incomplete data

try {
    let user = JSON.parse(json2);

    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name");
    }
    blablabla(); //unexpected error
    alert(user.name);

} catch (err) {
    if (err instanceof SyntaxError) {
        alert("JSON error: " + err.message);
    } else {
        throw err;//rethrow
    }
}

// try…catch…finally

/*
    Syntax:

try {
    ... try to execute the code ...
} catch (err) {
    ... handle errors ...
} finally {
    ... execute always ...
}

*/

