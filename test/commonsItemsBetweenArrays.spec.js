const assert = require('assert').strict;
const { commonsItemsBetweenArrays } = require('./../wrapper');

console.log('test on "commonsItemsBetweenArrays function: "')
var a = [
    {id: 1, name: 'wen'},
    {id: 2, name: 'are'},
    {id: 3, name: 'Tony'},
    {id: 4, name: 'Ada'},
    {id: 5, name: 'JJ'},
];
var b = [
    {id: 1, name: 'wen'},
    {id: 5, name: 'JJ'},
    {id: 6, name: 'nene'},
];
var commons = [
	{id: 1, name: 'wen'},
    {id: 5, name: 'JJ'},
];
assert.deepEqual(
	commons,
	commonsItemsBetweenArrays([a, 'name'], [b, 'name']),
	'No son iguales los items comunes',
);
console.log('==> commonsItemsBetweenArrays functino Ok!');
