const assert = require('assert').strict;
const { allAreTrue } = require('./../wrapper');

console.log('test on "allAreTtrue function: "')
const flag1 = true;
let a = 'string';
let n = 10;
assert.deepEqual(
	allAreTrue(flag1, a, n),
	true,
	'Debe ser True',
)
console.log('==> ok!');

a = 'string';
n = 0;
assert.deepEqual(
	allAreTrue(flag1, a, n),
	false,
	'Debe ser false',
)
console.log('==> ok!')

a = '';
n = 4;
assert.deepEqual(
	allAreTrue(flag1, a, n),
	false,
	'Debe ser false',
)
console.log('==> ok!')
