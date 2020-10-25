/**
 *	debounce
 *	@param { function } fn - Función a retardar
 *	@param { number } wait - tiempo en ms que se retardará fn
 *	@return { function }
 */
export const debounce = (fn, wait = 200) => { // retarda la ejecucion de una funcion
	let timeOut = null;
	return function inner(...args) {
		clearTimeout(timeOut);
		timeOut = setTimeout(fn.bind(this, args), wait);
	};
}
