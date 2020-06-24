const { allAreTrue } = require("./functions/allAreTrue");
const { every, filter, find, findIndex, forEach, map, reduce, some } = require("./functions/arrayPrototypes");
const { atLeastOneTrue } = require("./functions/atLeastOneTrue");
const { commonsItemsBetweenArrays } = require("./functions/commonsItemsBetweenArrays");
const { compose } = require("./functions/compose");
const { createPropertyByOtherOne } = require("./functions/createPropertyByOtherOne");
const { curry } = require("./functions/curry");
const { debounce } = require("./functions/debounce");
const { equality } = require("./functions/equality");
const { getPropertysValue } = require("./functions/getPropertysValue");
const { identity } = require('./functions/identity');
const { isEmpty } = require("./functions/isEmpty");
const { isNotEmpty } = require("./functions/isNotEmpty");
const { mergeObjects } = require("./functions/mergeObjects");
const { removeItemFromArrayByIndex } = require("./functions/removeItemFromArrayByIndex");
const { removeItemFromArrayByProp } = require("./functions/removeItemFromArrayByProp");
const { returnUniqueArraysItems } = require("./functions/returnUniqueArraysItems");
const { round } = require("./functions/round");
const { setNewProperty } = require("./functions/setNewProperty");

module.exports = {
	allAreTrue,
	atLeastOneTrue,
	commonsItemsBetweenArrays,
	compose,
	createPropertyByOtherOne: curry(createPropertyByOtherOne),
	curry,
	debounce,
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
};
