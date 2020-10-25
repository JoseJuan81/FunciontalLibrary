const assert = require('assert').strict;
const { every, filter, find, findIndex, map, reduce, some } = require('./../lib/functionallibrary.umd');

console.log('Pruebas en "arrayPrototypes function: "')
const persons = [
	{ id: 1, name: 'kaki', age: 33 },
	{ id: 2, name: 'jj', age: 38 },
	{ id: 3, name: 'churry', age: 11 },
	{ id: 4, name: 'nene', age: 6 },
];

const personsMap = persons.map(p => {
	const newP = p;
	newP.code = `${p.id - p.age}`;
	return newP;
})

const personsTest = map(p => {
	const newP = p;
	newP.code = `${p.id - p.age}`;
	return newP;
}, persons);

assert.deepEqual(
	personsTest,
	personsMap,
	'Deben ser los mismos arreglos'
);
console.log('==> map function Ok!');

const olderPerson = persons.find(p => p.age === 38);
const findPerson = find(p => p.age === 38, persons);

assert.deepEqual(
	olderPerson,
	findPerson,
	'Debe ser la misma persona',
);
console.log('==> find function Ok!');

const youngerPerson = persons.findIndex(p => p.age === 6)
const findIndexPerson = findIndex(p => p.age === 6, persons)

assert.deepEqual(
	youngerPerson,
	findIndexPerson,
	'Debe ser el mismo indice',
);
console.log('==> findIndex function ok!');

const totalAge = persons.reduce((acc, p) => acc + p.age, 0);
const reducePersons = reduce((acc, p) => acc + p.age, 0, persons);
assert.deepEqual(
	totalAge,
	reducePersons,
	'Debe ser el mismo numero de edad',
);
console.log('==> reduce function ok!')

const everyBodyHasName = persons.every(p => !!p.name);
const everyFunction = every((p) => !!p.name, persons);
assert.deepEqual(
	everyBodyHasName,
	everyFunction,
);
const arrN = [1, 3, 5, 'a', 10];
const number = (n) => typeof n === 'number';
const allNumbers = every(number, arrN)
assert.deepEqual(false, allNumbers);
console.log('==> every function ok!')

const olderThan30 = persons.filter(p => p.age > 30);
const filtering = filter((p) => p.age > 30, persons);
assert.deepEqual(
	olderThan30,
	filtering,
);
const arrF = [1, 3, 5, 8, 10, 12];
const moreThan5 = (v) => v > 5;
const items = filter(moreThan5, arrF)
assert.deepEqual(
	[8, 10, 12],
	items
)
console.log('==> filter function ok!')

const youngerThan10 = persons.some((p) => p.age < 10);
const some10 = some((p) => p.age < 10, persons);
assert.deepEqual(
	youngerThan10,
	some10,
);
const arr = [1, 3, 5, 'a', 10];
const letter = (n) => typeof n === 'string';
const anyLetter = some(letter, arr)
assert.deepEqual(
	true,
	anyLetter,
);
console.log('==> some function ok!')
