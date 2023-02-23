class Calculator {
    constructor() {
        //properties
        this.PI = 3.141592653589793;
        this.E = 2.718281828459045;
    }
    //getter
    get pi() {
        return `PI (${this.PI})`;
    }
    //methods
    get e() {
        return `Euler's number  (${this.E})`;
    }
    ratio(x, y, width) {
        return `height is ${(width / x) * y} on ratio ${x}:${y}`;
    }
    percentage(x, y) {
        return `${100 / (y / x)}%`;
    }
    add(x, y) {
        return x + y;
    }
    subtract(x, y) {
        return y - x;
    }
    multiply(x, y) {
        return x * y;
    }
    divide(x, y) {
        return x / y;
    }
    modulation(x, y) {
        return x % y;
    }
    elevate(x, y) {
        return x ** y;
    }
    sqrt(x) {
        return Math.sqrt(x);
    }
}
const calculate = new Calculator();


console.log("\x1b[35m\n\n---PI------------------------");

console.log(calculate.pi);

console.log("\x1b[36m\n---E---------------------------");

console.log(calculate.e);

console.log("\x1b[32m\n---ratio-----------------------");

console.log(calculate.ratio(4, 3, 120));

console.log("\x1b[32m\n---percentage------------------");

console.log(calculate.percentage(20, 80));

console.log("\x1b[32m\n---add-------------------------");

console.log(calculate.add(245, 130));

console.log("\x1b[33m\n---subtract--------------------");

console.log(calculate.subtract(45, 130));

console.log("\x1b[33m\n---multiply--------------------");

console.log(calculate.multiply(13, 245));

console.log("\x1b[33m\n---divide----------------------");

console.log(calculate.divide(45, 5));

console.log("\x1b[33m\n---modulation------------------");

console.log(calculate.modulation(45, 5));

console.log("\x1b[33m\n---elevate---------------------");

console.log(calculate.elevate(5, 4));

console.log("\x1b[33m\n---squareroot------------------");

console.log(calculate.sqrt(64));

console.log("\x1b[34m\n-------------------------------");
