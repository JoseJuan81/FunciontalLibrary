const assert = require('assert').strict;
const { mergeObjects } = require('../functions/mergeObjects');

console.log('test on "mergeObjects function: "')

const car = {
	brand: 'toyota',
	model: 'forrunner',
}
const driver = {
	name: 'kaki',
	age: 33,
}
const road = {
	roadName: 'trolcal 33',
	long: '433 Km',
}
const expexted = {
	roadName: 'trolcal 33',
	long: '433 Km',
	name: 'kaki',
	age: 33,
	brand: 'toyota',
	model: 'forrunner',
}
assert.deepEqual(
	mergeObjects(car, driver, road),
	expexted,
	'Los Objetos no son iguales',
);
console.log('==> mergeObjects function Ok!!')