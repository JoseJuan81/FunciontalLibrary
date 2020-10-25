import { findIndexFn } from './arrayPrototypes';
import removeItemFromArrayByIndex from './removeItemFromArrayByIndex';

/**
 *	removeItemFromArrayByProp
 *	@param { string } prop - propiedad a usar en cada elemento del arreglo
 *	@param { number | string } val - valor a usar para comparar
 *	@param { array } arr - arreglo de elementos
 *	@return { array  } arreglo con un elementos menos
 */
export default (prop, val, arr) => {
	const index = findIndexFn(a => a[prop] === val, arr);
	return removeItemFromArrayByIndex(index, arr);
};
