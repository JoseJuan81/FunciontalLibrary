/**
 *	setNewProperty
 *	@param { string } property - propiedad a crear
 *	@param { string | number } v - valor de la propiedad a crear
 *	@param { object } item - objeto en el que se creará la propiedad
 *	@return { object } objeto con nueva propiedad
 */
export default (property, v, item) => {
	const a = { ...item };
	a[property] = typeof v === 'function' ? v(item) : v;
	return a;
}
