/**
 *	round
 *	@param { number } decimal - cantidad de decimales a mostrar
 *	@param { number } value - cantidad a redondear
 *	@return { number } número redondeado
 */
export default (decimal, value) => Number(value.toFixed(decimal));
