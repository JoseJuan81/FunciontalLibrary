const assert = require('assert').strict;
const { isEmpty } = require('./../wrapper');

console.log('test on "isEmpty function: "')

const emptyObject = {};
const fullObject = { age: 24 };
const emptyArray = [];
const fullArray = [5];
const emptyString = '';
const fullString = 'hola mundo';
const emptyNumber = 0;
const fullNumber = 3;

assert.deepEqual(
	isEmpty(emptyArray),
	true,
	'El arreglo no esta vacio',
);
console.log('==> isEmpty function Ok!');
assert.deepEqual(
	isEmpty(fullArray),
	false,
	'El arreglo esta vacio',
);
console.log('==> isEmpty function Ok!');
assert.deepEqual(
	isEmpty(fullObject),
	false,
	'El objeto esta vacio',
);
console.log('==> isEmpty function Ok!');
assert.deepEqual(
	isEmpty(emptyObject),
	true,
	'El objeto no esta vacio',
);
console.log('==> isEmpty function Ok!');
assert.deepEqual(
	isEmpty(emptyString),
	true,
	'El string esta vacio',
);
console.log('==> isEmpty function Ok!');
assert.deepEqual(
	isEmpty(fullString),
	false,
	'El string no esta vacio',
);
console.log('==> isEmpty function Ok!');
assert.deepEqual(
	isEmpty(emptyNumber),
	true,
	'El number esta vacio',
);
console.log('==> isEmpty function Ok!');
assert.deepEqual(
	isEmpty(fullNumber),
	false,
	'El number no esta vacio',
);
console.log('==> isEmpty function Ok!');