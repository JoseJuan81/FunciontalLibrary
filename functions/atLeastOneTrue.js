/**
 *	atLeastOneTrue
 *	@param { boolean | number | string } arg - n cantidad de elementos separador por coma (,)
 *	@return { boolean }
 */
export const atLeastOneTrue = (...args) => args.some(a => a);
