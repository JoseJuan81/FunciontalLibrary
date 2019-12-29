const assert = require('assert').strict;
const { findIndex } = require('./../functions/arrayPrototypes');
const { removeItemFromArrayByIndex } = require('../functions/removeItemFromArrayByIndex');

console.log('test on "removeItemFromArrayByIndex function: "')

const persons = [
	{ id: 1, name: 'kaki' },
	{ id: 2, name: 'churry' },
	{ id: 3, name: 'ada' },
	{ id: 4, name: 'javier' },
	{ id: 5, name: 'juan' },
];
const adaIndex = findIndex(p => p.name === 'ada', persons);
assert.deepEqual(
	removeItemFromArrayByIndex(adaIndex, persons),
	[
		{ id: 1, name: 'kaki' },
		{ id: 2, name: 'churry' },
		{ id: 4, name: 'javier' },
		{ id: 5, name: 'juan' },
	],
	'Los arreglos no son iguales',
);
console.log('==> removeItemFromArrayByIndex function Ok!')