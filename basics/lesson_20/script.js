let user = {
    name: "Ivan",
    money: 1000,
    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name "${this.name}"}` : this.money;

    }
}

alert(user);
alert(+user);
alert(user + 500);


// There are 3 types (hints) of it:

//     "string" (for alert and other operations that need a string)
//     "number" (for maths)
//     "default" (few operators, usually objects implement it the same way as "number")

// The specification describes explicitly which operator uses which hint.

// The conversion algorithm is:

//     Call obj[Symbol.toPrimitive](hint) if the method exists,
//     Otherwise if hint is "string"
//         try calling obj.toString() or obj.valueOf(), whatever exists.
//     Otherwise if hint is "number" or "default"
//         try calling obj.valueOf() or obj.toString(), whatever exists.
