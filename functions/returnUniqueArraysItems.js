const returnUniqueArraysItems = (...arrs) => { // retorna los valores unicos entre arreglos.
	const res = [].concat(...arrs)
	return [...new Set(res)];
}
module.export.returnUniqueArraysItems = returnUniqueArraysItems;
