const { getPropertysValue } = require("./getPropertysValue");
const { setNewProperty } = require("./setNewProperty");
const { curry } = require("./curry");

const getProp = curry(getPropertysValue);
const setProp = curry(setNewProperty);

const createPropertyByOtherOne = (prop1, prop2, obj) => {
	const getVal = getProp(prop2, obj);
	const setValIn = setProp(prop1, getVal);
	return setValIn(obj);
}
module.exports.createPropertyByOtherOne = createPropertyByOtherOne;