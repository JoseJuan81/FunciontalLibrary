/**
 *	@description remueve elemento de un arreglo usando el índice
 *	@param { number } index - ubicación de elemento en arreglo
 *	@param { array } arr - arreglo de elementos
 *	@return { array } - array con un elemento menos (el que estaba en posición index)
 */
export default (index, arr) => {
	const localArr = [...arr]
	localArr.splice(index, 1);
	return [...localArr];
};
