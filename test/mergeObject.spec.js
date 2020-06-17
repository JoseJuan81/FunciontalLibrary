const assert = require('assert').strict;
const { mergeObjects } = require('./../wrapper');

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

const props1 = {
	name: 'jose',
}
const props2 = {
	name: 'juan',
	age: 28,
}
const props3 = {
	name: 'Andres',
	age: 40,
	children: true,
}
assert.deepEqual(
	{ name: 'Andres', age: 40, children: true },
	mergeObjects(props1, props2, props3),
	'Mezclando personas #1',
);
assert.deepEqual(
	{ name: 'jose', age: 28, children: true },
	mergeObjects(props3, props2, props1),
	'Mezclando personas #2',
);
console.log('==> mergeObjects function Ok!!')