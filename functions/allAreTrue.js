/**
 *	allAreTrue
 *	@param { boolean | number | string } arg - n cantidad de elementos separador por coma (,)
 *	@return { boolean }
 */
export const allAreTrue = (...arg) => arg.every(a => a);
