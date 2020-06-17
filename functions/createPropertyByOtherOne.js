const { getPropertysValue } = require("./getPropertysValue");
const { setNewProperty } = require("./setNewProperty");

const createPropertyByOtherOne = (prop1, prop2, obj) => {
	const getVal = getPropertysValue(prop2, obj);
	const setValIn = setNewProperty(prop1, getVal);
	return setValIn(obj);
}
module.exports.createPropertyByOtherOne = createPropertyByOtherOne;