let obj = {};

alert(obj)// "[object Object]" 

//So then when obj.toString() 
// is called the method is taken from Object.prototype.

alert(obj.__proto__ === Object.prototype);// true

let arr = [1, 2, 3];

alert(arr);

alert(arr.__proto__ === Array.prototype);

//func proto

function f() { };

alert(f.__proto__ === Function.prototype);

// Changing native prototypes

String.prototype.show = function () {
    alert(this);
};

"Boom".show();//Boom

// Borrowing from prototypes

let words = {
    0: "Hello",
    1: " World!",
    length: 2,
};

words.join = Array.prototype.join;

alert(words.join(`,`));