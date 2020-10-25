const assert = require('assert').strict;
const { commonsItemsBetweenArrays } = require('./../lib/functionallibrary.umd');

console.log('Pruebas en "commonsItemsBetweenArrays function: "')
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
	commonsItemsBetweenArrays('name', a, b),
    'No son iguales los items comunes',
);
var c = "necesitounacadenadetextolargaparaestaprueba".split('');
var d = "necesitootracadenadetextolargaparaconstrastarlaanterior".split('');
assert.deepEqual(
    [
        'n',
        'e',
        'c',
        'e',
        's',
        'i',
        't',
        'o',
        'n',
        'a',
        'c',
        'a',
        'd',
        'e',
        'n',
        'a',
        'd',
        'e',
        't',
        'e',
        'x',
        't',
        'o',
        'l',
        'a',
        'r',
        'g',
        'a',
        'p',
        'a',
        'r',
        'a',
        'e',
        's',
        't',
        'a',
        'p',
        'r',
        'e',
        'a',
    ],
    commonsItemsBetweenArrays(null, c, d),
    'No son iguales los números comunes',
)
console.log('==> commonsItemsBetweenArrays function Ok!');
