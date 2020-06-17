const getPropertysValue = (nestedProp, obj) => {
	const propFlow = nestedProp.split('.');
	let newItem = { ...obj };
	propFlow.forEach((el) => {
		newItem = (newItem || {})[el];
	});
	return newItem;
}
module.exports.getPropertysValue = getPropertysValue;