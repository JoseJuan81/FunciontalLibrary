export const every = (fn, col) => col.every(fn);
export const filter = (fn, col) => col.filter(fn);
export const find = (fn, col) => col.find(fn);
export const findIndex = (fn, col) => col.findIndex(fn);
export const forEach = (fn, col) => col.forEach(fn);
export const map = (fn, col) => col.map(fn);
export const reduce = (fn, acc = [], col) => col.reduce(fn, acc);
export const some = (fn, col) => col.some(fn);
