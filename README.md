# Functional Library
Librería de funciones usadas para programación funcional.

## setNewProperty
***Basic***
```js
const person = {
	id: 1, 
	name: 'Andres',
};
setNewProperty('age', 69)(person)
result: person = { id: 1, name: 'Andres', age: 69 }
```
***in Arrays***
```js
const persons = [
	{ id: 1, name: 'Andres' },
	{ id: 2, name: 'Ada' },
];
const personsUpdates = persons.map(setNewProperty('age', 69))
result:
persons = [
	{ id: 1, name: 'Andres', age: 69 },
	{ id: 2, name: 'Ada', age: 69 },
];
```
