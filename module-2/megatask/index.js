let a = prompt('vvedite koeficient a');
let b = prompt('vvedite koeficient b');
let c = prompt('vvedite koeficient c');
let ac = 4 * a * c;
const D = Math.round(Math.sqrt(Math.pow(b, 2) - ac));
let firstX = (-b + D) / 2 * a;
let secondX = (-b - D) / 2 * a;
alert(`x1=${ Math.round(firstX)} ,  x2=${ Math.round(secondX)} `);