const removeItemFromArrayByIndex = (index, arr) => {
	arr.splice(index, 1);
	return arr;
};
module.exports.removeItemFromArrayByIndex = removeItemFromArrayByIndex;