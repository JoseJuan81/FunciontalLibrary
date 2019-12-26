const setNewProperty = (property, v) => (item, index) => {
	const a = { ...item };
	a[property] = typeof v === 'function' ? v(item, index) : v;
	return a;
}
module.exports.setNewProperty = setNewProperty;
