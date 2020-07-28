# Functional Library
**functional programming functions.**

(Librería de funciones usadas para programación funcional.)

<p align="center">
	<a href="https://travis-ci.org/JoseJuan81/FunctionalLibrary">
	  <img src="https://travis-ci.org/JoseJuan81/FunctionalLibrary.svg?branch=dev" alt="Version">
	</a>
	<a href="https://www.npmjs.com/package/functionallibrary">
	  <img src="https://img.shields.io/npm/v/functionallibrary.svg" alt="Version">
	</a>
	<img alt="GitHub" src="https://img.shields.io/github/license/josejuan81/FunctionalLibrary">
	<img alt="GitHub" src="https://img.shields.io/npm/dm/functionallibrary">
</p>

## Install
```code
npm i functionallibrary
```

## Summary
	allAreTrue,
	atLeastOneTrue,
	commonsItemsBetweenArrays,
	compose,
	createPropertyByOtherOne: curry(createPropertyByOtherOne),
	curry,
	debounce,
	decide: curry(decide),
	equality,
	every: curry(every),
	filter: curry(filter),
	find: curry(find),
	findIndex: curry(findIndex),
	forEach: curry(forEach),
	getPropertysValue: curry(getPropertysValue),
	identity: curry(identity),
	isEmpty,
	isNotEmpty,
	map: curry(map),
	mergeObjects,
	reduce: curry(reduce),
	removeItemFromArrayByIndex: curry(removeItemFromArrayByIndex),
	removeItemFromArrayByProp: curry(removeItemFromArrayByProp),
	returnUniqueArraysItems,
	round: curry(round),
	setNewProperty,
	some: curry(some),

## Use
import ***functionallibrary*** in your `.js` file
```js
import { map, setNewProperty, compose } from 'functionallibrary';
```

## Vuejs use
in your `.vue` file
```js
<script>
	import { map, setNewProperty, compose } from 'functionallibrary';

	function updateDocuments() {
		const setCreateAt = setNewProperty('createdAt', new Date());
		const setCustomer = setNewProperty('customer', this.customer);
		const updatingPropsInDocuments = compose(setCreateAt, setCustomer);
		const update = map(updatingPropsInDocuments);
		this.documents = update(this.documents);
	}

	function data() {
		return {
			customer: {
				name: 'jhon Doe',
				id: '00001',
			},
			documents: [
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
			],
		},
	}

	export default {
		name: 'vue-component',
		data,
		methods: {
			updateDocuments,
		},
	}
</script>
```
the `updateDocument` function result:
```js
this.documents = [
	{
					id: 1,
					num: '1234',
					description: 'new shoes',
					type: 'sale',
					createdAt: '2019-12-28',
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
					createdAt: '2019-12-28',
					customer: {
						name: 'jhon Doe',
						id: '00001',
					},
				},
];
```
# Functions
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
***every***
```js
	const arr = [true, true, true, true];
	const allTrue = (v) => !!v;
	every(allTrue, arr) // true

	const arr = [1, 3, 5, 'a', 10];
	const isNumber = (n) => typeof n === 'number';
	const allNumbers = every(isNumber, arr) // false
```
***filter***
```js
	const arr = [1, 3, 5, 8, 10, 12];
	const moreThan5 = (v) => v > 5;
	const item = filter(moreThan5, arr) // [8, 10, 12]
```
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
	const totalAmount = reduce(total, 0, arr) // 9
```
***some***
```js
	const arr = [1, 3, 5, 'a', 10];
	const letter = (n) => typeof n === 'string';
	const anyLetter = some(letter, arr) // true
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
commonsItemsBetweenArrays(null, a, b); // [5, 6, 7, 8, 9]
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
commonsItemsBetweenArrays('name', a, b) // [{id: 1, name: 'wen'}, {id: 5, name: 'JJ'}]
```
## compose
```js
	var persons = [
    {id: 1, name: 'wen'},
    {id: 5, name: 'JJ'},
    {id: 6, name: 'nene'},
];
const newPersons = map(
	compose(
		setNewProperty('flagActive', true),
		setNewProperty('createdAt', new Date()),
		setNewProperty('code', { id, name } => `${name-id}`),
	),
	persons,
) // [{id: 1, name: 'wen', flagActive: true, createAt: 'fecha de hoy', code: 'wen-1'},
    // {id: 5, name: 'JJ', flagActive: true, createAt: 'fecha de hoy', code: 'JJ-5'},
    // {id: 6, name: 'nene', flagActive: true, createAt: 'fecha de hoy', code: 'nene-6'}];
```
## createPropertyByOtherOne
> create `code` using `id` value;
```js
	var persons = [
    {id: 1, name: 'wen'},
    {id: 5, name: 'JJ'},
    {id: 6, name: 'nene'},
];
const newPersons = map(
	compose(createPropertyByOtherOne('code', 'id')),
	persons,
) // [
    // { id: 1, name: 'wen', code: 1 },
    // { id: 5, name: 'JJ', code: 5 },
    // { id: 6, name: 'nene', code: 6 },
// ]
```
## equality
```js
const a = 2;
const b = 3;
equality(a)(b) // false

const personA = {id: 1, name: 'wen'};
const personB = {id: 2, name: 'JJ'};
equality('id', 2)(personB) // true
equality('id', 2)(personA) // false
```

## getPropertysValue
```js
const grandMother = {
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
const grandChild = getPropertysValue('child.child.name', grandMother) // 'juan'
const granMothersName = getPropertysValue('name', grandMother) // 'ada'
const grandChildLastname = getPropertysValue('child.child.lastname', grandMother) // 'undefined'

getPropertyValue('child.lastname.name', grandMother) // 'undefined'
getPropertyValue('lastname.child.name', grandMother) // 'undefined'
```

## isEmpty
```js
const emptyObject = {};
const fullObject = { age: 24 };
const emptyArray = [];
const fullArray = [5];
const emptyString = '';
const fullString = 'hola mundo';
const emptyNumber = 0;
const fullNumber = 3;
isEmpty(emptyArray) // true
isEmpty(fullArray) // false
isEmpty(emptyObject) // true
isEmpty(fullObject) // false
isEmpty(emptyString) // true
isEmpty(fullString) // false
isEmpty(emptyNumber) // true
isEmpty(fullNumber) // false
```

## isNotEmpty
```js
const emptyObject = {};
const fullObject = { age: 24 };
const emptyArray = [];
const fullArray = [5];
const emptyString = '';
const fullString = 'hola mundo';
const emptyNumber = 0;
const fullNumber = 3;
isNotEmpty(emptyArray) // false
isNotEmpty(fullArray) // true
isNotEmpty(emptyObject) // false
isNotEmpty(fullObject) // true
isNotEmpty(emptyString) // false
isNotEmpty(fullString) // true
isNotEmpty(emptyNumber) // false
isNotEmpty(fullNumber) // true
```
##  mergeObjects
```js
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
mergerObjects(car, driver, road) // {
	// roadName: 'trolcal 33',
	// long: '433 Km',
	// name: 'kaki',
	// age: 33,
	// brand: 'toyota',
	// model: 'forrunner',
// }

const p1 = {
	name: 'jose',
}
const p2 = {
	name: 'juan',
	age: 28,
}
const p3 = {
	name: 'Andres',
	age: 40,
	children: true,
}
mergeObjects(props1, props2, props3) // { name: 'Andres', age: 40, children: true }
mergeObjects(props3, props2, props1) // { name: 'jose', age: 28, children: true }
```
## removeItemFromArrayByIndex
```js
const persons = [
	{ id: 1, name: 'kaki' },
	{ id: 2, name: 'churry' },
	{ id: 3, name: 'ada' },
	{ id: 4, name: 'javier' },
	{ id: 5, name: 'juan' },
];
const adaIndex = findIndex(p => p.name === 'ada', persons);
removeItemFromArrayByIndex(adaIndex, persons)// [
	// { id: 1, name: 'kaki' },
	// { id: 2, name: 'churry' },
	// { id: 4, name: 'javier' },
	// { id: 5, name: 'juan' },
]
```
## removeItemFromArrayByProp
```js
const persons = [
	{ id: 1, name: 'kaki' },
	{ id: 2, name: 'churry' },
	{ id: 3, name: 'ada' },
	{ id: 4, name: 'javier' },
	{ id: 5, name: 'juan' },
];
removeItemFromArrayByProp('name', 'ada')(persons)// [
	// { id: 1, name: 'kaki' },
	// { id: 2, name: 'churry' },
	// { id: 4, name: 'javier' },
	// { id: 5, name: 'juan' },
]
```
## returnUniqueArraysItems
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
var c = [
	{ id: 2, name: 'are' },
	{ id: 6, name: 'nene'},
	{ id: 7, name: 'jaime' },
]
returnUniqueArraysItems(a, b, c)// [
	// {id: 1, name: 'wen'},
	// {id: 2, name: 'are'},
	// {id: 3, name: 'Tony'},
	// {id: 4, name: 'Ada'},
	// {id: 5, name: 'JJ'},
	// {id: 6, name: 'nene'},
	// {id: 7, name: 'jaime'},
]
```
## round
```js
const num = 34.456789;
const twoDecimals = round(2);
const threeDecimals = round(3)
twoDecimals(num) // 34.46
threeDecimals(num) // 34.457
```
## setNewProperty
***Basic***
```js
const person = {
	id: 1, 
	name: 'Andres',
};
setNewProperty('age', 69, person)
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

## currying
```js
const persons = [
	{ id: 1, name: 'kaki', age: 33 },
	{ id: 2, name: 'jj', age: 38 },
	{ id: 3, name: 'churry', age: 11 },
	{ id: 4, name: 'nene', age: 6 },
];
const students = [
	{ id: 1, name: 'kaki', age: 13 },
	{ id: 2, name: 'jj', age: 18 },
	{ id: 3, name: 'churry', age: 11 },
	{ id: 4, name: 'nene', age: 6 },
];
const biggerThan30 = v => v > 30;
const getAge = getPropertysValue('age');
const existAnyBodyBiggerThan30 = some(compose(biggerThan30, getAge));
const anyBodyBiggerThan30InPersons = existAnyBodyBiggerThan30(persons); // true
const anyBodyBiggerThan30InStudents = existAnyBodyBiggerThan30(students); // false
```
## Identity
```js
const five = 5;
identity(five) // 5

const arr = [1, 2];
identity(arr) // [1, 2]

const obj = { id: 1, code: 'abc' };
identity(obj) // { id: 1, code: 'abc' }
```

## Decide
```js
/**
 * 
 * @param { function | Boolean } c - Condicional. Decide cuál función ejecutar
 * @param { function } f - Función a ejecutar si "c" es verdadero
 * @param { function | any } g - Función a ejecutar si "c" es falso. Si no es función, es retornado tal cual.
 * @param { object } i - Objeto que es argumento de todas las funciones anteriores
 */
decide(c, f, g, i)
```
```js
const list = [
    { id:1, name: 'Pedro' },
    { id:2, name: 'Anyela' },
    { id:3, name: 'Arelis' },
    { id:4, name: 'Tony' },
];
const setAge = setNewProperty('age', 30);
const isTony = equality('id', 4);
const addAgeToTony = decide(isTony, setAge, identity);
const updatedList = map(addAgeToTony, list);
// { id:1, name: 'Pedro' },
// { id:2, name: 'Anyela' },
// { id:3, name: 'Arelis' },
// { id:4, name: 'Tony', age: 30 },
```

```js
const list2 = [
    { id:1, name: 'TOny', age: 2 },
    { id:2, name: 'Tony', age: 12 },
    { id:3, name: 'Tony', age: 20 },
    { id:4, name: 'Tony', age: 30 },
];
const is30 = equality('age', 30);
const findTonyIndex = decide(isTony, is30, false);
const tonyIndex = findIndex(findTonyIndex, list2); // tonyIndex = 3
```