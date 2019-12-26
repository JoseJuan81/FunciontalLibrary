const commonsItemsBetweenArrays = (collection1, collection2) => {
	var [arr1, prop1] = collection1;
	var [arr2, prop2] = collection2;
	var list = [];
	if (prop2) {
		arr1.forEach((a) => {
			var val = prop1 ? a[prop1] : a;
			var match = find(equality(prop2, val), arr2);
			list = list.concat(match);
		});
	}
  if(
      arr1.every(a => typeof a === 'string' || typeof a === 'number') &&
      arr2.every(a => typeof a === 'string' || typeof a === 'number')
    ) {
      arr1.forEach((a) => {
       var match = arr2.find(b => a === b);
        list = match ? list.concat(match) : list;
   });
  }
	return list;
}
// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var b = [5, 6, 7, 8, 9, 10];
// matchBetweenArrays([a], [b]); --> [5, 6, 7, 8, 9]
module.exports.commonsItemsBetweenArrays = commonsItemsBetweenArrays;