const assert = require('assert').strict;
const { getPropertyValue } = require('../functions/getPropertyValue');

console.log('test on "getPropertyValue function: "')
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

const grandChild = getPropertyValue('child.child.name')(mother);
assert.deepEqual(
	grandChild,
	'juan',
	'No es el mismo nombre',
);
const grandMothersName = getPropertyValue('name')(mother);
assert.deepEqual(
	grandMothersName,
	'ada',
	'No es el mismo nombre',
);
console.log('==> getPropertyValue function Ok!')