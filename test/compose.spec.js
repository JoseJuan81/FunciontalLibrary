const assert = require('assert').strict;
const { compose, setNewProperty, map } = require('./../lib/functionallibrary.umd');

console.log('Pruebas en "compose function: "')
var persons = [
    {id: 1, name: 'wen'},
    {id: 5, name: 'JJ'},
    {id: 6, name: 'nene'},
];
const setFlagActive = setNewProperty('flagActive', true);
const setCreatedAt = setNewProperty('createdAt', 'fecha de hoy');
const setCode = setNewProperty('code', ({ id, name }) => `${name}-${id}`);
const addProperties = compose(setFlagActive, setCreatedAt, setCode);
const newPersons = map(addProperties, persons);

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
