const assert = require('assert').strict;
const { getPropertysValue } = require('../functions/getPropertysValue');

console.log('test on "getPropertysValue function: "')
const mother = {
	name: 'ada',
	age: 69,
	child: {
		name: 'jose',
		age: 38,
		child: {
			name: 'juan',
			age: 11,
		}
	}
}

const grandChild = getPropertysValue('child.child.name')(mother);
assert.deepEqual(
	grandChild,
	'juan',
	'No es el mismo nombre',
);
const grandMothersName = getPropertysValue('name')(mother);
assert.deepEqual(
	grandMothersName,
	'ada',
	'No es el mismo nombre',
);
console.log('==> getPropertyValue function Ok!')