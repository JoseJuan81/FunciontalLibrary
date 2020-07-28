/**
 * 
 * @param { function | Boolean } c - Condicional. Decide cuál función ejecutar
 * @param { function } f - Función a ejecutar si "c" es verdadero
 * @param { function | any } g - Función a ejecutar si "c" es falso. Si no es función, es retornado tal cual.
 * @param { object } i - Objeto que es argumento de todas las funciones anteriores
 */
const decide = (c, f, g, i) => {
    const conditional = typeof c === 'function' ? c(i) : c;
    console.log('item', i, conditional);
    return conditional ? f(i) : typeof g === 'function' ? g(i) : g;
};

module.exports.decide = decide;