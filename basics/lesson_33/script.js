
// JSON.stringify(); This method takes object
// and converts it into a string.

let student = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: [`html`, `css`, `js`],
    spouse: null
};


// let json = JSON.stringify(student);

// alert(json);

/*
    JSON-encoded object has several important differences from the object literal:

    Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John".
    Object property names are double-quoted also. That’s obligatory. So age:30 becomes "age":30.

*/

let someMeetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["John", "Ann"]
    }
};

// alert(JSON.stringify(someMeetup));


// Excluding and transforming: replacer

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup
// alert(JSON.stringify(meetup, function replacer(key, value) {
//     alert(`${key}: ${value}`);
//     return (key == `occupiedBy`) ? undefined : value;
// }));

// Formatting: space

let user = {
    name: "Jack",
    age: 25,
    roles:{
        isAdmin: false,
        isEditor: true
    }

};

alert(JSON.stringify(user,null,5));