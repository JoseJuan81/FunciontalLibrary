const { equality } = require('./equality');
const { find, every } = require('./arrayPrototypes');
const { curry } = require('./curry');

const everyCurried = curry(every);

const commonsItemsBetweenArrays = (prop, collection1, collection2) => {
	const lower = collection1.length <= collection2.length ? collection1 : collection2;
    const bigger = lower.length === collection1.length ? collection2 : collection1;
	let list = [];
	if (prop) {
		lower.forEach((a) => {
			const val = a[prop];
			const match = find(equality(prop, val), bigger);
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
				const match = bigger.find(b => a === b);
				list = match ? list.concat(match) : list;
			});
		}
	}
	return list;
}
module.exports.commonsItemsBetweenArrays = commonsItemsBetweenArrays;