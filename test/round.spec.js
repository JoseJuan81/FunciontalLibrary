const assert = require('assert').strict;
const { round } = require('./../lib/functionallibrary.umd');

console.log('Prueba "round function: "');
const num = 34.45678;
const twoDecimals = round(2);
assert.deepEqual(
	twoDecimals(num),
	34.46,
	'Los numeros no son iguales',
);
console.log('==> round function Ok!');
const threeDecimals = round(3);
assert.deepEqual(
	threeDecimals(num),
	34.457,
	'Los numeros no son iguales',
);
console.log('==> round function Ok!');
