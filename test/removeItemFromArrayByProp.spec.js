const assert = require('assert').strict;
const { removeItemFromArrayByProp } = require('../functions/removeItemFromArrayByProp');

console.log('test on "removeItemFromArrayByProp function: "')

const persons = [
	{ id: 1, name: 'kaki' },
	{ id: 2, name: 'churry' },
	{ id: 3, name: 'ada' },
	{ id: 4, name: 'javier' },
	{ id: 5, name: 'juan' },
];
assert.deepEqual(
	removeItemFromArrayByProp('name', 'ada')(persons),
	[
		{ id: 1, name: 'kaki' },
		{ id: 2, name: 'churry' },
		{ id: 4, name: 'javier' },
		{ id: 5, name: 'juan' },
	],
	'Los arreglos no son iguales',
);
console.log('==> removeItemFromArrayByProp function Ok!')