const assert = require('assert').strict;
const { compose, map, setNewProperty } = require('./../wrapper');

console.log('Prueba en examples');
const customer = {
	name: 'jhon Doe',
	id: '00001',
};

const documents = [
	{
		id: 1,
		num: '1234',
		description: 'new shoes',
		type: 'sale',
	},
	{
		id: 2,
		num: '2345',
		description: 'new t-shirt',
		type: 'sale',
	},
];

const updateDocuments = documents => {
	return map(
		compose(
			setNewProperty('createdAt', 'fecha de hoy'),
			setNewProperty('customer', customer),
		),
		documents,
	)
}

const documentsUpdated = updateDocuments(documents);

assert.deepEqual(
	documentsUpdated,
	[
		{
			id: 1,
			num: '1234',
			description: 'new shoes',
			type: 'sale',
			createdAt: 'fecha de hoy',
			customer: {
				name: 'jhon Doe',
				id: '00001',
			},
		},
		{
			id: 2,
			num: '2345',
			description: 'new t-shirt',
			type: 'sale',
			createdAt: 'fecha de hoy',
			customer: {
				name: 'jhon Doe',
				id: '00001',
			},
		},
	],
	'Los documentos no son iguales',
);
console.log('==> examples Ok!')