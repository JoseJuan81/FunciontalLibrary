const { allAreTrue } = require("./functions/allAreTrue");
const { find, findIndex, forEach, map, reduce } = require("./functions/arrayPrototypes");
const { atLeastOneTrue } = require("./functions/atLeastOneTrue");
const { commonsItemsBetweenArrays } = require("./functions/commonsItemsBetweenArrays");
const { compose } = require("./functions/compose");
const { createPropertyByOtherOne } = require("./functions/createPropertyByOtherOne");
const { debounce } = require("./functions/debounce");
const { equality } = require("./functions/equality");
const { getPropertysValue } = require("./functions/getPropertysValue");
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
	createPropertyByOtherOne,
	debounce,
	equality,
	find,
	findIndex,
	forEach,
	getPropertysValue,
	isEmpty,
	isNotEmpty,
	map,
	mergeObjects,
	reduce,
	removeItemFromArrayByIndex,
	removeItemFromArrayByProp,
	returnUniqueArraysItems,
	round,
	setNewProperty,
};
