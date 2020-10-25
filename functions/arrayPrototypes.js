/**
 * everyFn
 * @param { function } fn - función a ejecutar sobre cada elemento del arreglo
 * @param { array } col - arrelo de elementos
 * @return { boolean }
*/
export const everyFn = (fn, col) => col.every(fn);

/**
 * filterFn
 * @param { function } fn - función a ejecutar sobre cada elemento del arreglo
 * @param { array } col - arrelo de elementos
 * @return { array }
*/
export const filterFn = (fn, col) => col.filter(fn);

/**
 * findFn
 * @param { function } fn - función a ejecutar sobre cada elemento del arreglo
 * @param { array } col - arrelo de elementos
 * @return { string | number | object }
*/
export const findFn = (fn, col) => col.find(fn);

/**
 * findIndexFn
 * @param { function } fn - función a ejecutar sobre cada elemento del arreglo
 * @param { array } col - arrelo de elementos
 * @return { number }
*/
export const findIndexFn = (fn, col) => col.findIndex(fn);

/**
 * forEachFn
 * @param { function } fn - función a ejecutar sobre cada elemento del arreglo
 * @param { array } col - arrelo de elementos
 * @return { undefined }
*/
export const forEachFn = (fn, col) => col.forEach(fn);

/**
 * mapFn
 * @param { function } fn - función a ejecutar sobre cada elemento del arreglo
 * @param { array } col - arrelo de elementos
 * @return { array }
*/
export const mapFn = (fn, col) => col.map(fn);

/**
 * reduceFn
 * @param { function } fn - función a ejecutar sobre cada elemento del arreglo
 * @param { array } col - arrelo de elementos
 * @return { number | array | object }
*/
export const reduceFn = (fn, acc = [], col) => col.reduce(fn, acc);

/**
 * someFn
 * @param { function } fn - función a ejecutar sobre cada elemento del arreglo
 * @param { array } col - arrelo de elementos
 * @return { boolean }
*/
export const someFn = (fn, col) => col.some(fn);
