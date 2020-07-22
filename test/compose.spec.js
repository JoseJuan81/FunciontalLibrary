const assert = require('assert').strict;
const { compose, setNewProperty, map } = require('./../wrapper');

console.log('Pruebas en "compose function: "')
var persons = [
    {id: 1, name: 'wen'},
    {id: 5, name: 'JJ'},
    {id: 6, name: 'nene'},
];
const newPersons = map(
	compose(
		setNewProperty('flagActive', true),
		setNewProperty('createdAt', 'fecha de hoy'),
		setNewProperty('code', ({ id, name }) => (`${name}-${id}`)),
	),
	persons,
);

const expected =  [
    { id: 1, name: 'wen', code: 'wen-1', flagActive: true, createdAt: 'fecha de hoy' },
    { id: 5, name: 'JJ', code: 'JJ-5', flagActive: true, createdAt: 'fecha de hoy' },
    { id: 6, name: 'nene', code: 'nene-6', flagActive: true, createdAt: 'fecha de hoy' },
];

assert.deepEqual(
	expected,
	newPersons,
	'Los arreglos no son iguales',
);
console.log('==> compose function Ok!')