export const setNewProperty = (property, v, item) => {
	const a = { ...item };
	a[property] = typeof v === 'function' ? v(item) : v;
	return a;
}
