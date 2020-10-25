import { isEmpty } from "./isEmpty";

/**
 *	isNotEmpty
 *	@param { string | object | array | number} arg - variable a evaluar
 *	@return { boolean }
 */
export const isNotEmpty = arg => !isEmpty(arg);
