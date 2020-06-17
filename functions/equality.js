const equality = (...args) => {
	let [prop1, prop2] = args;
	if (!prop2) {
		prop2 = prop1;
	}
	return function inner(item) {
		return typeof item === 'object' ? item[prop1] === prop2 : item === prop1;
	};
}
module.exports.equality = equality;
