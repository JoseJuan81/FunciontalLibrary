/**
 * 
 * @param { function | Boolean } c - Condicional. Decide cuál función ejecutar
 * @param { function } f - Función a ejecutar si "c" es verdadero
 * @param { function } g - Función a ejecutar si "c" es falso
 * @param { object } i - Objeto que es argumento de todas las funciones anteriores
 */
const decide = (c, f, g, i) => {
    const conditional = typeof c === 'function' ? c(i) : c;
    return conditional ? f(i) : g(i);
};

module.exports.decide = decide;