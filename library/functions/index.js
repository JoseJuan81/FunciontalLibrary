export const debounce = (fn, wait = 200) => { // retarda la ejecucion de una funcion
	let timeOut = null;
	return function inner(...args) {
		clearTimeout(timeOut);
		timeOut = setTimeout(fn.bind(this, args), wait);
	};
}

export const isNotEmpty = arg => !isEmpty(arg)

export const setNewProperty = (property, v) => (item, index) => {
		const a = { ...item };
		a[property] = typeof v === 'function' ? v(item, index) : v;
		return a;
}

export const getPropertysValue = prop => obj => (obj || {})[prop];

export const updateItemInCollection = (matchProp, el, collection) => collection.reduce((list, item) => {
	if (el[matchProp] === item[matchProp]) {
		return list.concat(el);
	}
	return list.concat(item);
}, []);

export const removeItemFromArrayByIndex = (index, arr) => {
	arr.splice(index, 1);
	return arr;
};

export const getItemByIndex = index => arr => {
	return arr[index] || null;
}

/* eslint-disable prefer-const */

function createPropertyByOtherOne(...args) {
	const [prop1, prop2] = args;
	return function inner(item) {
		let newItem = null;
		if (item.length) {
			[newItem] = item;
		} else {
			newItem = { ...item };
		}
		newItem[prop1] = getPropertysValue(prop2)(newItem);
		return newItem;
	};
}
// const product = { id: 23, color: 'red', size: 'M' }
// const newProduct = createPropertyByOtherOne('num', 'id')(product); --> newProduct = { id: 23, color: 'red', size: 'M', num: 23 }
	
export const getDeeper = (...args) => {
	const propFlow = args.split('.');
	return function inner(item) {
		let newItem = { ...item };
		propFlow.forEach((el) => {
			newItem = (newItem || {})[el];
		});
		return newItem;
	};
}
// const product = { id: 2, features: { size: 'L', color: 'Azul', tax: { pe: 18, ecu: 12 } }, name: 'Polo' }
// const peTaxes = getDeeper('features', 'tax', 'pe')(product); --> peTaxes = 18


function validateObject(obj) {
	return obj || {};
}

export const reduce = (fn, col, acc = []) => col.reduce(fn, acc);

export const map = (fn, col) => col.map(fn);

export const find = (fn, col) => col.find(fn);

export const findIndex = (fn, col) => col.findIndex(fn);

export const forEach = (fn, col) => col.forEach(fn);

export const commonsItemsBetweenArrays = (collection1, collection2) => {
	var [arr1, prop1] = collection1;
	var [arr2, prop2] = collection2;
	var list = [];
	if (prop2) {
		arr1.forEach((a) => {
			var val = prop1 ? a[prop1] : a;
			var match = find(equality(prop2, val), arr2);
			list = list.concat(match);
		});
	}
  if(
      arr1.every(a => typeof a === 'string' || typeof a === 'number') &&
      arr2.every(a => typeof a === 'string' || typeof a === 'number')
    ) {
      arr1.forEach((a) => {
       var match = arr2.find(b => a === b);
        list = match ? list.concat(match) : list;
   });
  }
	return list;
}
// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var b = [5, 6, 7, 8, 9, 10];
// matchBetweenArrays([a], [b]); --> [5, 6, 7, 8, 9]
export const identity = item => item;

export const allAreTrue = (...arg) => arg.every(a => a);