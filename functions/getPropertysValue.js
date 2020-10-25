/**
 *	getPropertysValue
 *	@param { string } nestedProp - anidamiento de propiedades dentro de un objeto. ej 'type.person.name'
 *	@param { object } obj - objeto en le que se buscará el valor de la propiedad nestedProp
 *	@return { string | number | undefined }
 */
export default (nestedProp, obj) => {
	const propFlow = nestedProp.split('.');
	let newItem = { ...obj };
	propFlow.forEach((el) => {
		newItem = (newItem || {})[el];
	});
	return newItem;
}
