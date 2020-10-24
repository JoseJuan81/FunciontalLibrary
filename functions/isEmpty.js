export const isEmpty = (arg) => {
	if (Array.isArray(arg)) {
		return arg.length === 0;
	}
	if (typeof arg === 'object' && arg !== null) {
		return Object.keys(arg).length === 0;
	}
	if (typeof arg === 'string' || typeof arg === 'number') {
		return !arg;
	}
	return !arg;
}
