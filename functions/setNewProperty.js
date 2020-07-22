// const setNewProperty = (property, v) => (item, index) => {
// 	const a = { ...item };
// 	a[property] = typeof v === 'function' ? v(item, index) : v;
// 	return a;
// }
const setNewProperty = (property, v, item) => {
	const a = { ...item };
	a[property] = typeof v === 'function' ? v(item) : v;
	return a;
}
module.exports.setNewProperty = setNewProperty;
