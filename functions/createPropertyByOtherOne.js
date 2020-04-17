const { getPropertyValue } = require("./getPropertysValue");

const createPropertyByOtherOne = (...args) => {
	const [prop1, prop2] = args;
	return function inner(item) {
		let newItem = null;
		if (item.length) {
			[newItem] = item;
		} else {
			newItem = { ...item };
		}
		newItem[prop1] = getPropertyValue(prop2)(newItem);
		return newItem;
	};
}
module.exports.createPropertyByOtherOne = createPropertyByOtherOne;