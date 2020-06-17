const { findIndex } = require('./arrayPrototypes');
const { removeItemFromArrayByIndex } = require('./removeItemFromArrayByIndex');

const removeItemFromArrayByProp = (prop, val, arr) => {
	const index = findIndex(a => a[prop] === val, arr);
	return removeItemFromArrayByIndex(index, arr);
};
module.exports.removeItemFromArrayByProp = removeItemFromArrayByProp;