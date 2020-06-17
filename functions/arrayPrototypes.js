const every = (fn, col) => col.every(fn);
const filter = (fn, col) => col.filter(fn);
const find = (fn, col) => col.find(fn);
const findIndex = (fn, col) => col.findIndex(fn);
const forEach = (fn, col) => col.forEach(fn);
const map = (fn, col) => col.map(fn);
const reduce = (fn, acc = [], col) => col.reduce(fn, acc);
const some = (fn, col) => col.some(fn);
module.exports = { find, findIndex, forEach, map, reduce, filter, every, some };
