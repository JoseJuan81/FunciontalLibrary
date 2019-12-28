const getPropertyValue = (args) => {
	const propFlow = args.split('.');
	return function inner(item) {
		let newItem = { ...item };
		propFlow.forEach((el) => {
			newItem = (newItem || {})[el];
		});
		return newItem;
	};
}
module.exports.getPropertyValue = getPropertyValue;