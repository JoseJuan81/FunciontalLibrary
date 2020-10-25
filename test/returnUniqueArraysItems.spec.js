const assert = require('assert').strict;
const { returnUniqueArraysItems } = require('./../lib/functionallibrary.umd');

console.log('Pruebas en "returnUniqueArraysItems function: "');
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
assert.deepEqual(
	returnUniqueArraysItems(arr1, arr2),
	[1, 2, 3, 4, 5, 6, 7],
	'Los arreglos numericos no son iguales',
);
console.log('==> returnUniqueArraysItems function Ok!')
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
var c = [
	{ id: 2, name: 'are' },
	{ id: 6, name: 'nene'},
	{ id: 7, name: 'jaime' },
]
assert.deepEqual(
	returnUniqueArraysItems(a, b, c),
	[
		{id: 1, name: 'wen'},
		{id: 2, name: 'are'},
		{id: 3, name: 'Tony'},
		{id: 4, name: 'Ada'},
		{id: 5, name: 'JJ'},
		{id: 6, name: 'nene'},
		{id: 7, name: 'jaime'},
	],
	'Los arreglos de objetos no son iguales',
);

var h = "necesitounacadenadetextolargaparaestaprueba".split('');
var g = "necesitootracadenadetextolargaparaconstrastarlaanterior".split('');

assert.deepEqual(
	[
		'n',
		'e',
		'c',
		's',
		'i',
		't',
		'o',
		'u',
		'a',
		'd',
		'x',
		'l',
		'r',
		'g',
		'p',
		'b',
	],
	returnUniqueArraysItems(h, g),
	'No son únicos los elementos',
);
console.log('==> returnUniqueArraysItems function Ok!')
