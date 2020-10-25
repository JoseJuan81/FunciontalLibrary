/**
 *	compose
 *	@param  { function } fns - n funciones que serán ejecutadas secuancialmente de derecha a izquierda
 */
export const compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
