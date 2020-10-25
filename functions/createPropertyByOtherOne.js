import getPropertysValue from "./getPropertysValue";
import setNewProperty from "./setNewProperty";
import curry from "./curry";

const getProp = curry(getPropertysValue);
const setProp = curry(setNewProperty);

/**
 *	createPropertyByOtherOne
 *	@param { string } prop1 - propiedad a crear
 *	@param { string } prop2 - propiedad que tiene el valor a usar para la prop1
 *	@param { object } obj - objeto dentro del cual se efectua la operación
 *	@return { string | number }
 */
export default (prop1, prop2, obj) => {
	const getVal = getProp(prop2, obj);
	const setValIn = setProp(prop1, getVal);
	return setValIn(obj);
}
