const { allAreTrue } = require("./functions/allAreTrue");
const { atLeastOneTrue } = require("./functions/atLeastOneTrue");
const { commonsItemsBetweenArrays } = require("./functions/commonsItemsBetweenArrays");
const { compose } = require("./functions/compose");
const { createPropertyByOtherOne } = require("./functions/createPropertyByOtherOne");
const { debounce } = require("./functions/debounce");
const { equality } = require("./functions/equality");
const { getDeeper } = require("./functions/getDeeper");
const { getPropertysValue } = require("./functions/getPropertysValue");
const { isEmpty } = require("./functions/isEmpty");
const { isNotEmpty } = require("./functions/isNotEmpty");
const { mergeObjects } = require("./functions/mergeObjects");
const { removeItemFromArrayByIndex } = require("./functions/removeItemFromArrayByIndex");
const { returnUniqueArraysItems } = require("./functions/returnUniqueArraysItems");
const { round } = require("./functions/round");
const { setNewProperty } = require("./functions/setNewProperty");
const { find, findIndex, forEach, map, reduce } = require("./functions/arrayPrototypes");

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
	getDeeper,
	getPropertysValue,
	isEmpty,
	isNotEmpty,
	map,
	mergeObjects,
	reduce,
	removeItemFromArrayByIndex,
	returnUniqueArraysItems,
	round,
	setNewProperty,
};
