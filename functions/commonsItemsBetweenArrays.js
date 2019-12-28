const { find } = require('./arrayPrototypes');
const { equality } = require('./equality');

const commonsItemsBetweenArrays = (collection1, collection2) => {
	const [arr1, prop1] = collection1;
	const [arr2, prop2] = collection2;
	const lower = arr1.length <= arr2.length ? arr1 : arr2;
    const bigger = lower.length === arr1.length ? arr2 : arr1;
	let list = [];
	if (prop2) {
		lower.forEach((a) => {
			const val = prop1 ? a[prop1] : a;
			const match = find(equality(prop2, val), bigger);
			if (match) {
				list = list.concat(match);
			}
		});
	}
  if(
      lower.every(a => typeof a === 'string' || typeof a === 'number') &&
      bigger.every(a => typeof a === 'string' || typeof a === 'number')
    ) {
      lower.forEach((a) => {
       const match = bigger.find(b => a === b);
        list = match ? list.concat(match) : list;
   });
  }
	return list;
}
module.exports.commonsItemsBetweenArrays = commonsItemsBetweenArrays;