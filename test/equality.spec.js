const assert = require('assert').strict;
const { equality } = require('./../lib/functionallibrary.umd');

console.log('Pruebas en "equality function: "')
let a = 2;
let b = 3;
assert.deepEqual(
	equality(a, null, b),
	false,
	'No existe igualdad',
);
console.log('==> equality function Ok!');

b = 2
assert.deepEqual(
	equality(a, null, b),
	true,
	'Existe igualdad',
);
console.log('==> equality function Ok!');

let personB = {id: 2, name: 'JJ'};
assert.deepEqual(
	equality('id', 2, personB),
	true,
	'No Existe igualdad',
);
console.log('==> equality function Ok!');

assert.deepEqual(
	equality('id', 1, personB),
	false,
	'Existe igualdad',
);
console.log('==> equality function Ok!');

const Abuelo = {
	name: 'Andres',
	children: {
		name: 'Jose Juan',
		children: {
			name: 'Noah'
		}
	}
}
assert.deepEqual(
	true,
	equality('children.children.name', 'Noah', Abuelo),
	'Error en la igualdad children.children.name con Noah',
);
console.log('==> equality function Ok!');
