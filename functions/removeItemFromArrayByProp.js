import { findIndex } from './arrayPrototypes';
import { removeItemFromArrayByIndex } from './removeItemFromArrayByIndex';

export const removeItemFromArrayByProp = (prop, val, arr) => {
	const index = findIndex(a => a[prop] === val, arr);
	return removeItemFromArrayByIndex(index, arr);
};
