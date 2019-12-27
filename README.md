# Functional Library
Librería de funciones usadas para programación funcional.

## allAreTrue
```js
const flag1 = true;
const a = 'string';
const n = 10;
allAreTrue(flag1, a, n); // true

const flag1 = true;
const a = 'string';
const n = 0;
allAreTrue(flag1, a, n); // false

const flag1 = true;
const a = '';
const n = 4;
allAreTrue(flag1, a, n); // false
```
## arrayPrototypes
***find***
```js
	const arr = [1, 3, 5];
	const findFive = (v) => v === 5;
	const item = find(findFive, arr) // 5
```
***findIndex***
```js
	const arr = [1, 3, 5];
	const findIndex = (v) => v === 5;
	const itemIndex = find(findIndex, arr) // 2
```
***map***
```js
	const arr = [1, 3, 5];
	const duplicate = (v) => v * 2;
	const duplicateValues = map(duplicate, arr) // [2, 6, 10]
```
***reduce***
```js
	const arr = [1, 3, 5];
	const total = (acc, v) => acc + v;
	const totalAmount = reduce(total, arr, 0) // 9
```
## atLeastOneTrue
```js
const flag1 = true;
const a = 'string';
const n = 10;
atLeastOneTrue(flag1, a, n); // true

const flag1 = true;
const a = '';
const n = 0;
atLeastOneTrue(flag1, a, n); // true

const flag1 = false;
const a = '';
const n = 0;
atLeastOneTrue(flag1, a, n); // false
```
## commonsIntemsBetweenArrays
```js
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = [5, 6, 7, 8, 9, 10];
commonsIntemsBetweenArrays([a], [b]); // [5, 6, 7, 8, 9]
```
```js
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
commonsItemsBetweenArrays([a, 'name'], [b, 'name']) // [{id: 1, name: 'wen'}, {id: 5, name: 'JJ'}]
```
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
