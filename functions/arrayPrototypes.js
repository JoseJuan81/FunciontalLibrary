const find = (fn, col) => col.find(fn);
const findIndex = (fn, col) => col.findIndex(fn);
const forEach = (fn, col) => col.forEach(fn);
const map = (fn, col) => col.map(fn);
const reduce = (fn, col, acc = []) => col.reduce(fn, acc);
module.exports = { find, findIndex, forEach, map, reduce };
