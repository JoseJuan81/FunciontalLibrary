import { getPropertysValue } from "./getPropertysValue";
import { setNewProperty } from "./setNewProperty";
import { curry } from "./curry";

const getProp = curry(getPropertysValue);
const setProp = curry(setNewProperty);

export const createPropertyByOtherOne = (prop1, prop2, obj) => {
	const getVal = getProp(prop2, obj);
	const setValIn = setProp(prop1, getVal);
	return setValIn(obj);
}
