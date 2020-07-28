const assert = require('assert').strict;
const { equality } = require('./../wrapper');

console.log('Pruebas en "equality function: "')
let a = 2;
let b = 3;
assert.deepEqual(
	equality(a, null, b),
	false,
	'No existe igualdad',
);
console.log('==> equality function Ok!');

b = 2
assert.deepEqual(
	equality(a, null, b),
	true,
	'Existe igualdad',
);
console.log('==> equality function Ok!');

let personA = {id: 1, name: 'wen'};
let personB = {id: 2, name: 'JJ'};
assert.deepEqual(
	equality('id', 2, personB),
	true,
	'No Existe igualdad',
);
console.log('==> equality function Ok!');

assert.deepEqual(
	equality('id', 1, personB),
	false,
	'Existe igualdad',
);
console.log('==> equality function Ok!');