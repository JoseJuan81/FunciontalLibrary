const assert = require('assert').strict;
const { atLeastOneTrue } = require('./../lib/functionallibrary.umd');

console.log('Pruebas en "atLeastOneTrue function: "')
let flag1 = true;
let a = 'string';
let n = 10;

assert.deepEqual(
	atLeastOneTrue(flag1, a, n),
	true,
	'Almenos uno debe ser true',
);
console.log('==> almenos uno es true');

a = '';
n = 0;
assert.deepEqual(
	atLeastOneTrue(flag1, a, n),
	true,
	'Almenos uno debe ser true',
);
console.log('==> almenos uno es true');

flag1 = false;
assert.deepEqual(
	atLeastOneTrue(flag1, a, n),
	false,
	'Almenos uno es true',
);
console.log('==> todos son false');
