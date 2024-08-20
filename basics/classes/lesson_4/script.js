// Extending built-in classes

class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
    static get [Symbol.species]() {
        return Array;
    }
}

let arr = new PowerArray(1, 2, 5, 10, 50);

alert(arr);

alert(arr.isEmpty());

let filteredArr = arr.filter(item => item >= 10);

alert(filteredArr);

alert(filteredArr.isEmpty());// Error: filteredArr.isEmpty is not a function