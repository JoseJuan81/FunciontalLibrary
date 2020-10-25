/**
 *	mergeObject
 *	@param  { object } objs - n cantidad de objetos a fusionar
 *	@return { object } - objeto único resultado de la fución
 */
export const mergeObjects = (...objs) => Object.assign({}, ...objs);
