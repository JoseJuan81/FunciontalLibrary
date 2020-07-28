(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.functionallibrary = {}));
}(this, (function (exports) { 'use strict';

  var allAreTrue = function allAreTrue() {
    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }

    return arg.every(function (a) {
      return a;
    });
  };

  var allAreTrue_2 = allAreTrue;
  var allAreTrue_1 = {
    allAreTrue: allAreTrue_2
  };

  var every = function every(fn, col) {
    return col.every(fn);
  };

  var filter = function filter(fn, col) {
    return col.filter(fn);
  };

  var find = function find(fn, col) {
    return col.find(fn);
  };

  var findIndex = function findIndex(fn, col) {
    return col.findIndex(fn);
  };

  var forEach = function forEach(fn, col) {
    return col.forEach(fn);
  };

  var map = function map(fn, col) {
    return col.map(fn);
  };

  var reduce = function reduce(fn) {
    var acc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var col = arguments.length > 2 ? arguments[2] : undefined;
    return col.reduce(fn, acc);
  };

  var some = function some(fn, col) {
    return col.some(fn);
  };

  var arrayPrototypes = {
    find: find,
    findIndex: findIndex,
    forEach: forEach,
    map: map,
    reduce: reduce,
    filter: filter,
    every: every,
    some: some
  };

  var atLeastOneTrue = function atLeastOneTrue() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.some(function (a) {
      return a;
    });
  };

  var atLeastOneTrue_2 = atLeastOneTrue;
  var atLeastOneTrue_1 = {
    atLeastOneTrue: atLeastOneTrue_2
  };

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var curry = function curry(fn) {
    var arity = fn.length;
    return function $curry() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length < arity) {
        return $curry.bind.apply($curry, [null].concat(args));
      }

      return fn.call.apply(fn, [null].concat(args));
    };
  };

  var curry_2 = curry;
  var curry_1 = {
    curry: curry_2
  };

  var getPropertysValue = function getPropertysValue(nestedProp, obj) {
    var propFlow = nestedProp.split('.');

    var newItem = _objectSpread2({}, obj);

    propFlow.forEach(function (el) {
      newItem = (newItem || {})[el];
    });
    return newItem;
  };

  var getPropertysValue_2 = getPropertysValue;
  var getPropertysValue_1 = {
    getPropertysValue: getPropertysValue_2
  };

  var curry$1 = curry_1.curry;
  var getPropertysValue$1 = getPropertysValue_1.getPropertysValue;
  var getProp = curry$1(getPropertysValue$1);
  /**
   * @param {string, number} prop1 - propiedad a usar para comparar
   * @param {string, number} val2 - valor a comprar cuando se usa un item del tipo objeto
   * @param {object, string, number} item - cuando es un objeto se usa con val2, cuando es string o number se usa solo (val2 === null)
   */

  var equality = function equality(prop1, val2, item) {
    var findPropIn = typeof prop1 === 'string' ? getProp(prop1) : prop1;
    var val = val2 || getProp;

    if (_typeof(item) === 'object' && typeof val !== 'function') {
      return findPropIn(item) === val;
    }

    if (_typeof(item) === 'object' && typeof val === 'function') {
      return findPropIn(item) === val(item);
    }

    return item === prop1;
  };

  var equality_2 = equality; // const equality = (...args) => {
  // 	let [prop1, prop2] = args;
  // 	if (!prop2) {
  // 		prop2 = prop1;
  // 	}
  // 	return function inner(item) {
  // 		return typeof item === 'object' ? item[prop1] === prop2 : item === prop1;
  // 	};
  // }
  // module.exports.equality = equality;

  var equality_1 = {
    equality: equality_2
  };

  var equality$1 = equality_1.equality;
  var find$1 = arrayPrototypes.find,
      every$1 = arrayPrototypes.every;
  var curry$2 = curry_1.curry;
  var everyCurried = curry$2(every$1);
  var equalityCurried = curry$2(equality$1);

  var commonsItemsBetweenArrays = function commonsItemsBetweenArrays(prop, collection1, collection2) {
    var lower = collection1.length <= collection2.length ? collection1 : collection2;
    var bigger = lower.length === collection1.length ? collection2 : collection1;
    var list = [];

    if (prop) {
      lower.forEach(function (a) {
        var val = a[prop];
        var equal = equalityCurried(prop, val);
        console.log('equal', equal);
        var match = find$1(equal, bigger);

        if (match) {
          list = list.concat(match);
        }
      });
    } else {
      // Los elementos son números o strings
      var isString = function isString(s) {
        return typeof s === 'string';
      };

      var isNumber = function isNumber(s) {
        return typeof s === 'number';
      };

      var allStrings = everyCurried(isString);
      var allNumbers = everyCurried(isNumber);
      var allLowersAreString = allStrings(lower);
      var allBiggersAreString = allStrings(bigger);
      var allLowersAreNumber = allNumbers(lower);
      var allBiggersAreNumber = allNumbers(bigger);

      if (allBiggersAreNumber && allLowersAreNumber || allBiggersAreString && allLowersAreString) {
        lower.forEach(function (a) {
          var match = bigger.find(function (b) {
            return a === b;
          });
          list = match ? list.concat(match) : list;
        });
      }
    }

    return list;
  };

  var commonsItemsBetweenArrays_2 = commonsItemsBetweenArrays;
  var commonsItemsBetweenArrays_1 = {
    commonsItemsBetweenArrays: commonsItemsBetweenArrays_2
  };

  var compose = function compose() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return fns.reduceRight(function (res, fn) {
        return [fn.call.apply(fn, [null].concat(_toConsumableArray(res)))];
      }, args)[0];
    };
  };

  var compose_2 = compose;
  var compose_1 = {
    compose: compose_2
  };

  var setNewProperty = function setNewProperty(property, v, item) {
    var a = _objectSpread2({}, item);

    a[property] = typeof v === 'function' ? v(item) : v;
    return a;
  };

  var setNewProperty_2 = setNewProperty;
  var setNewProperty_1 = {
    setNewProperty: setNewProperty_2
  };

  var getPropertysValue$2 = getPropertysValue_1.getPropertysValue;
  var setNewProperty$1 = setNewProperty_1.setNewProperty;
  var curry$3 = curry_1.curry;
  var getProp$1 = curry$3(getPropertysValue$2);
  var setProp = curry$3(setNewProperty$1);

  var createPropertyByOtherOne = function createPropertyByOtherOne(prop1, prop2, obj) {
    var getVal = getProp$1(prop2, obj);
    var setValIn = setProp(prop1, getVal);
    return setValIn(obj);
  };

  var createPropertyByOtherOne_2 = createPropertyByOtherOne;
  var createPropertyByOtherOne_1 = {
    createPropertyByOtherOne: createPropertyByOtherOne_2
  };

  var debounce = function debounce(fn) {
    var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
    // retarda la ejecucion de una funcion
    var timeOut = null;
    return function inner() {
      clearTimeout(timeOut);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      timeOut = setTimeout(fn.bind(this, args), wait);
    };
  };

  var debounce_2 = debounce;
  var debounce_1 = {
    debounce: debounce_2
  };

  /**
   * 
   * @param { function | Boolean } c - Condicional. Decide cuál función ejecutar
   * @param { function } f - Función a ejecutar si "c" es verdadero
   * @param { function, any } g - Función a ejecutar si "c" es falso. Si no es función, es retornado tal cual.
   * @param { object } i - Objeto que es argumento de todas las funciones anteriores
   */
  var decide = function decide(c, f, g, i) {
    var conditional = typeof c === 'function' ? c(i) : c;
    console.log('item', i, conditional);
    return conditional ? f(i) : typeof g === 'function' ? g(i) : g;
  };

  var decide_2 = decide;
  var decide_1 = {
    decide: decide_2
  };

  var identity = function identity(v) {
    return v;
  };

  var identity_2 = identity;
  var identity_1 = {
    identity: identity_2
  };

  var isEmpty = function isEmpty(arg) {
    if (Array.isArray(arg)) {
      return arg.length === 0;
    }

    if (_typeof(arg) === 'object' && arg !== null) {
      return Object.keys(arg).length === 0;
    }

    if (typeof arg === 'string' || typeof arg === 'number') {
      return !arg;
    }

    return !arg;
  };

  var isEmpty_2 = isEmpty;
  var isEmpty_1 = {
    isEmpty: isEmpty_2
  };

  var isEmpty$1 = isEmpty_1.isEmpty;

  var isNotEmpty = function isNotEmpty(arg) {
    return !isEmpty$1(arg);
  };

  var isNotEmpty_2 = isNotEmpty;
  var isNotEmpty_1 = {
    isNotEmpty: isNotEmpty_2
  };

  var mergeObjects = function mergeObjects() {
    for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
      objs[_key] = arguments[_key];
    }

    return Object.assign.apply(Object, [{}].concat(objs));
  };

  var mergeObjects_2 = mergeObjects;
  var mergeObjects_1 = {
    mergeObjects: mergeObjects_2
  };

  var removeItemFromArrayByIndex = function removeItemFromArrayByIndex(index, arr) {
    arr.splice(index, 1);
    return arr;
  };

  var removeItemFromArrayByIndex_2 = removeItemFromArrayByIndex;
  var removeItemFromArrayByIndex_1 = {
    removeItemFromArrayByIndex: removeItemFromArrayByIndex_2
  };

  var findIndex$1 = arrayPrototypes.findIndex;
  var removeItemFromArrayByIndex$1 = removeItemFromArrayByIndex_1.removeItemFromArrayByIndex;

  var removeItemFromArrayByProp = function removeItemFromArrayByProp(prop, val, arr) {
    var index = findIndex$1(function (a) {
      return a[prop] === val;
    }, arr);
    return removeItemFromArrayByIndex$1(index, arr);
  };

  var removeItemFromArrayByProp_2 = removeItemFromArrayByProp;
  var removeItemFromArrayByProp_1 = {
    removeItemFromArrayByProp: removeItemFromArrayByProp_2
  };

  var returnUniqueArraysItems = function returnUniqueArraysItems() {
    var _ref;

    var res = (_ref = []).concat.apply(_ref, arguments);

    var unique = new Set();
    res.forEach(function (item) {
      unique.add(JSON.stringify(item));
    });
    var uniqueParsed = [];
    unique.forEach(function (item) {
      return uniqueParsed.push(JSON.parse(item));
    });
    return [].concat(uniqueParsed);
  };

  var returnUniqueArraysItems_2 = returnUniqueArraysItems;
  var returnUniqueArraysItems_1 = {
    returnUniqueArraysItems: returnUniqueArraysItems_2
  };

  var round = function round(decimal, value) {
    return Number(value.toFixed(decimal));
  };

  var round_2 = round;
  var round_1 = {
    round: round_2
  };

  var allAreTrue$1 = allAreTrue_1.allAreTrue;
  var every$2 = arrayPrototypes.every,
      filter$1 = arrayPrototypes.filter,
      find$2 = arrayPrototypes.find,
      findIndex$2 = arrayPrototypes.findIndex,
      forEach$1 = arrayPrototypes.forEach,
      map$1 = arrayPrototypes.map,
      reduce$1 = arrayPrototypes.reduce,
      some$1 = arrayPrototypes.some;
  var atLeastOneTrue$1 = atLeastOneTrue_1.atLeastOneTrue;
  var commonsItemsBetweenArrays$1 = commonsItemsBetweenArrays_1.commonsItemsBetweenArrays;
  var compose$1 = compose_1.compose;
  var createPropertyByOtherOne$1 = createPropertyByOtherOne_1.createPropertyByOtherOne;
  var curry$4 = curry_1.curry;
  var debounce$1 = debounce_1.debounce;
  var decide$1 = decide_1.decide;
  var equality$2 = equality_1.equality;
  var getPropertysValue$3 = getPropertysValue_1.getPropertysValue;
  var identity$1 = identity_1.identity;
  var isEmpty$2 = isEmpty_1.isEmpty;
  var isNotEmpty$1 = isNotEmpty_1.isNotEmpty;
  var mergeObjects$1 = mergeObjects_1.mergeObjects;
  var removeItemFromArrayByIndex$2 = removeItemFromArrayByIndex_1.removeItemFromArrayByIndex;
  var removeItemFromArrayByProp$1 = removeItemFromArrayByProp_1.removeItemFromArrayByProp;
  var returnUniqueArraysItems$1 = returnUniqueArraysItems_1.returnUniqueArraysItems;
  var round$1 = round_1.round;
  var setNewProperty$2 = setNewProperty_1.setNewProperty;
  var wrapper = {
    allAreTrue: allAreTrue$1,
    atLeastOneTrue: atLeastOneTrue$1,
    commonsItemsBetweenArrays: commonsItemsBetweenArrays$1,
    compose: compose$1,
    createPropertyByOtherOne: curry$4(createPropertyByOtherOne$1),
    curry: curry$4,
    debounce: debounce$1,
    decide: curry$4(decide$1),
    equality: curry$4(equality$2),
    every: curry$4(every$2),
    filter: curry$4(filter$1),
    find: curry$4(find$2),
    findIndex: curry$4(findIndex$2),
    forEach: curry$4(forEach$1),
    getPropertysValue: curry$4(getPropertysValue$3),
    identity: curry$4(identity$1),
    isEmpty: isEmpty$2,
    isNotEmpty: isNotEmpty$1,
    map: curry$4(map$1),
    mergeObjects: mergeObjects$1,
    reduce: curry$4(reduce$1),
    removeItemFromArrayByIndex: curry$4(removeItemFromArrayByIndex$2),
    removeItemFromArrayByProp: curry$4(removeItemFromArrayByProp$1),
    returnUniqueArraysItems: returnUniqueArraysItems$1,
    round: curry$4(round$1),
    setNewProperty: curry$4(setNewProperty$2),
    some: curry$4(some$1)
  };
  var wrapper_1 = wrapper.allAreTrue;
  var wrapper_2 = wrapper.atLeastOneTrue;
  var wrapper_3 = wrapper.commonsItemsBetweenArrays;
  var wrapper_4 = wrapper.compose;
  var wrapper_5 = wrapper.createPropertyByOtherOne;
  var wrapper_6 = wrapper.curry;
  var wrapper_7 = wrapper.debounce;
  var wrapper_8 = wrapper.decide;
  var wrapper_9 = wrapper.equality;
  var wrapper_10 = wrapper.every;
  var wrapper_11 = wrapper.filter;
  var wrapper_12 = wrapper.find;
  var wrapper_13 = wrapper.findIndex;
  var wrapper_14 = wrapper.forEach;
  var wrapper_15 = wrapper.getPropertysValue;
  var wrapper_16 = wrapper.identity;
  var wrapper_17 = wrapper.isEmpty;
  var wrapper_18 = wrapper.isNotEmpty;
  var wrapper_19 = wrapper.map;
  var wrapper_20 = wrapper.mergeObjects;
  var wrapper_21 = wrapper.reduce;
  var wrapper_22 = wrapper.removeItemFromArrayByIndex;
  var wrapper_23 = wrapper.removeItemFromArrayByProp;
  var wrapper_24 = wrapper.returnUniqueArraysItems;
  var wrapper_25 = wrapper.round;
  var wrapper_26 = wrapper.setNewProperty;
  var wrapper_27 = wrapper.some;

  exports.allAreTrue = wrapper_1;
  exports.atLeastOneTrue = wrapper_2;
  exports.commonsItemsBetweenArrays = wrapper_3;
  exports.compose = wrapper_4;
  exports.createPropertyByOtherOne = wrapper_5;
  exports.curry = wrapper_6;
  exports.debounce = wrapper_7;
  exports.decide = wrapper_8;
  exports.default = wrapper;
  exports.equality = wrapper_9;
  exports.every = wrapper_10;
  exports.filter = wrapper_11;
  exports.find = wrapper_12;
  exports.findIndex = wrapper_13;
  exports.forEach = wrapper_14;
  exports.getPropertysValue = wrapper_15;
  exports.identity = wrapper_16;
  exports.isEmpty = wrapper_17;
  exports.isNotEmpty = wrapper_18;
  exports.map = wrapper_19;
  exports.mergeObjects = wrapper_20;
  exports.reduce = wrapper_21;
  exports.removeItemFromArrayByIndex = wrapper_22;
  exports.removeItemFromArrayByProp = wrapper_23;
  exports.returnUniqueArraysItems = wrapper_24;
  exports.round = wrapper_25;
  exports.setNewProperty = wrapper_26;
  exports.some = wrapper_27;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
