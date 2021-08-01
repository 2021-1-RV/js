alert("Hello, JS");

let x;
let b = "b";

let name = "Ivan";
let age = 20;
console.log(name, age);

const COLOR_CAR = "Red";
console.log(COLOR_CAR);

x = 100;
console.log(x);
x = 200;
console.log(x);

x = b;
console.log(x);

let x2 = 1000;
x = x2;
console.log('x=', x, 'x2=', x2 );

let a1, a2, result;
a1 = 100;
a2 = 200;
result = a1 + a2;
console.log(result);

let result3;
result3 = x;
console.log(result3);
x++;
result3 = x;
console.log(result3);

let valueKg, valueGr;
const DEFAULT_VALUE_KG = 50;
valueKg = prompt("Введи значение в кг", DEFAULT_VALUE_KG);
valueGr = 1000 * valueKg;
console.log("Result is ", valueGr, " gr"); 