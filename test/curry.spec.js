const assert = require('assert').strict;
const { compose, getPropertysValue, some } = require('./../lib/functionallibrary.umd');

const persons = [
	{ id: 1, name: 'kaki', age: 33 },
	{ id: 2, name: 'jj', age: 38 },
	{ id: 3, name: 'churry', age: 11 },
	{ id: 4, name: 'nene', age: 6 },
];

const students = [
	{ id: 1, name: 'kaki', age: 13 },
	{ id: 2, name: 'jj', age: 18 },
	{ id: 3, name: 'churry', age: 11 },
	{ id: 4, name: 'nene', age: 6 },
];

console.log('Pruebas en curry');
const biggerThan30 = v => v > 30;
const getAge = getPropertysValue('age');
const existAnyBodyBiggerThan30 = some(compose(biggerThan30, getAge));
const anyBodyBiggerThan30InPersons = existAnyBodyBiggerThan30(persons);
const anyBodyBiggerThan30InStudents = existAnyBodyBiggerThan30(students);

assert.deepEqual(true, anyBodyBiggerThan30InPersons);
assert.deepEqual(false, anyBodyBiggerThan30InStudents);
console.log('==> curry función ok');
