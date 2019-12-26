const equality = (...args) => {
	let [prop1, prop2] = args;
	if (!prop2) {
		prop2 = prop1;
	}
	return function inner(item) {
		return typeof item === 'object' ? item[prop1] === prop2 : item === prop1;
	};
}
// const people = [{ id: 1, name: 'Noah' }, { id: 2, name; 'Pepe' }, { id: 3, name: 'Luciana' }, { id: 4, name: 'Jose Juan' }];
// const noah = people.find(equality('name', 'Noah')); --> noah = { id: 1, name: 'Noah' }
module.export.equality = equality;
