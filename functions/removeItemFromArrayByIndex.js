/**
 *	removeItemFromArrayByIndex
 *	@param { number } index - ubicación de elemento en arreglo
 *	@param { array } arr - arreglo de elementos
 *	@return { array } - array con un elemento menos (el que estaba en posición index)
 */
export default (index, arr) => {
	arr.splice(index, 1);
	return arr;
};
