export const debounce = (fn, wait = 200) => { // retarda la ejecucion de una funcion
	let timeOut = null;
	return function inner(...args) {
		clearTimeout(timeOut);
		timeOut = setTimeout(fn.bind(this, args), wait);
	};
}
