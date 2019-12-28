const assert = require('assert').strict;
const { find, findIndex, map, reduce } = require('./../functions/arrayPrototypes');

console.log('test on "arrayPrototypes function: "')
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
const reducePersons = reduce((acc, p) => acc + p.age, persons, 0);
assert.deepEqual(
	totalAge,
	reducePersons,
	'Debe ser el mismo numero de edad',
);
console.log('==> reduce function ok!')
