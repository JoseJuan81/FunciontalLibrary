const assert = require('assert').strict;
const { map, decide, setNewProperty, equality, identity, findIndex } = require('./../wrapper');

const list = [
    { id:1, name: 'Pedro' },
    { id:2, name: 'Anyela' },
    { id:3, name: 'Arelis' },
    { id:4, name: 'Tony' },
];

const resultingList = [
    { id:1, name: 'Pedro' },
    { id:2, name: 'Anyela' },
    { id:3, name: 'Arelis' },
    { id:4, name: 'Tony', age: 30 },
];

console.log('Pruebas en función "decide": ')
const setAge = setNewProperty('age', 30);
const isTony = equality('id', 4);
const addAgeToTony = decide(isTony, setAge, identity);
const updatedList = map(addAgeToTony, list);
assert.deepEqual(
    updatedList,
    resultingList,
    'Los arreglos no son iguales',
);

const list2 = [
    { id:1, name: 'TOny', age: 2 },
    { id:2, name: 'Tony', age: 12 },
    { id:3, name: 'Tony', age: 20 },
    { id:4, name: 'Tony', age: 30 },
];
const is30 = equality('age', 30);
const findTonyIndex = decide(isTony, is30, false);
const tonyIndex = findIndex(findTonyIndex, list2);
assert.deepEqual(
    3,
    tonyIndex,
    'Lo índices no son iguales',
);
console.log('==> decide function Ok!')