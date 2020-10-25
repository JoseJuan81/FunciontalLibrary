const assert = require('assert').strict;
const { identity } = require('./../lib/functionallibrary.umd');

console.log('Pruebas en Identity');
assert.deepEqual(
    5,
    identity(5),
    'El resultado no es igual a 5',
);
assert.deepEqual(
    [1, 2],
    identity([1, 2]),
    'El resultado no es igual al arreglo [1, 2]',
);
assert.deepEqual(
    { id: 1, code: 'abc' },
    identity({ id: 1, code: 'abc' }),
    'El resultado no es igual al objeto { id: 1, code: "abc" }',
);
console.log('==> Fin prueba Identity');
