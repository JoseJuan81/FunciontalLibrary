const assert = require('assert').strict;
const { isNotEmpty } = require('./../lib/functionallibrary.umd');

console.log('Pruebas en "isNotEmpty function: "')

const emptyObject = {};
const fullObject = { age: 24 };
const emptyArray = [];
const fullArray = [5];
const emptyString = '';
const fullString = 'hola mundo';
const emptyNumber = 0;
const fullNumber = 3;

assert.deepEqual(
	isNotEmpty(emptyArray),
	false,
	'El arreglo debe estar vacio',
);
console.log('==> isNotEmpty function Ok!');
assert.deepEqual(
	isNotEmpty(fullArray),
	true,
	'El arreglo no esta vacio',
);
console.log('==> isNotEmpty function Ok!');
assert.deepEqual(
	isNotEmpty(fullObject),
	true,
	'El objeto no esta vacio',
);
console.log('==> isNotEmpty function Ok!');
assert.deepEqual(
	isNotEmpty(emptyObject),
	false,
	'El objeto debe esta vacio',
);
console.log('==> isNotEmpty function Ok!');
assert.deepEqual(
	isNotEmpty(emptyString),
	false,
	'El string esta vacio',
);
console.log('==> isNotEmpty function Ok!');
assert.deepEqual(
	isNotEmpty(fullString),
	true,
	'El string no debe esta vacio',
);
console.log('==> isNotEmpty function Ok!');
assert.deepEqual(
	isNotEmpty(emptyNumber),
	false,
	'El number esta vacio',
);
console.log('==> isNotEmpty function Ok!');
assert.deepEqual(
	isNotEmpty(fullNumber),
	true,
	'El number no debe esta vacio',
);
console.log('==> isNotEmpty function Ok!');
