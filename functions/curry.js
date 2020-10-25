/**
 *	curry
 *	@param { function } fn - función con argumentos agregados parcialmente
 *	@return { function }
 */
export default (fn) => {
    const arity = fn.length;
    return function $curry(...args) {
        if (args.length < arity) {
        return $curry.bind(null, ...args);
        }
        return fn.call(null, ...args);
    };
}
