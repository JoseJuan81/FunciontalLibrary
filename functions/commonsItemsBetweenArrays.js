import equality from './equality';
import { findFn, everyFn } from './arrayPrototypes';
import curry from './curry';

const everyCurried = curry(everyFn);
const equalityCurried = curry(equality);

/**
 *	commonsItemsBetweenArrays
 *	@param { string } prop - propiedad a usar para comparar elementos
 *	@param { array } collection1 - collección 1
 *	@param { array } collection2 - colección 2
 *	@return { array }
 */
export const commonsItemsBetweenArrays = (prop, collection1, collection2) => {
	const lower = collection1.length <= collection2.length ? collection1 : collection2;
		const bigger = lower.length === collection1.length ? collection2 : collection1;
	let list = [];
	if (prop) {
		lower.forEach((a) => {
			const val = a[prop];
			const equal = equalityCurried(prop, val);
			const match = findFn(equal, bigger);
			if (match) {
				list = list.concat(match);
			}
		});
	} else {
		// Los elementos son números o strings
		const isString = s => typeof s === 'string';
		const isNumber = s => typeof s === 'number';
		const allStrings = everyCurried(isString);
		const allNumbers = everyCurried(isNumber);
		const allLowersAreString = allStrings(lower);
		const allBiggersAreString = allStrings(bigger);
		const allLowersAreNumber = allNumbers(lower);
		const allBiggersAreNumber = allNumbers(bigger);
		if(
			(allBiggersAreNumber && allLowersAreNumber) ||
			(allBiggersAreString && allLowersAreString)
		) {
			lower.forEach((a) => {
				const match = findFn(b => a === b, bigger);
				list = match ? list.concat(match) : list;
			});
		}
	}
	return list;
}
