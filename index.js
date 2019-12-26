
const { isEmpty } = require("./functions/isEmpty");
const { atLeastOneTrue } = require("./functions/atLeastOneTrue");
const { returnUniqueArraysItems } = require("./functions/returnUniqueArraysItems");
const { mergeObjects } = require("./functions/mergeObjects");
const { round } = require("./functions/round");
const { equality } = require("./functions/equality");
const { compose } = require("./functions/compose");

module.export = {
	atLeastOneTrue,
	compose,
	equality,
	isEmpty,
	mergeObjects,
	returnUniqueArraysItems,
	round,
};
