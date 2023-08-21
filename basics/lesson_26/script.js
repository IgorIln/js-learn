
for (let char of `test`) {
    alert(char);
}

// Calling an iterator explicitly

let str = "Hello";

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();

    if (result.done) break;

    alert(result.value);

}

// Iterables and array-likes

let arrayLike = {
    0: "Hello",
    1:"Wolrd",
    length: 2
};

let array = Array.from(arrayLike);
alert(array.pop())