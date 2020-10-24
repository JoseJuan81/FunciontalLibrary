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

  var atLeastOneTrue = function atLeastOneTrue() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.some(function (a) {
      return a;
    });
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

  var getPropertysValue = function getPropertysValue(nestedProp, obj) {
    var propFlow = nestedProp.split('.');

    var newItem = _objectSpread2({}, obj);

    propFlow.forEach(function (el) {
      newItem = (newItem || {})[el];
    });
    return newItem;
  };

  var getProp = curry(getPropertysValue);
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

  var everyCurried = curry(every);
  var equalityCurried = curry(equality);
  var commonsItemsBetweenArrays = function commonsItemsBetweenArrays(prop, collection1, collection2) {
    var lower = collection1.length <= collection2.length ? collection1 : collection2;
    var bigger = lower.length === collection1.length ? collection2 : collection1;
    var list = [];

    if (prop) {
      lower.forEach(function (a) {
        var val = a[prop];
        var equal = equalityCurried(prop, val);
        console.log('equal', equal);
        var match = find(equal, bigger);

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

  var setNewProperty = function setNewProperty(property, v, item) {
    var a = _objectSpread2({}, item);

    a[property] = typeof v === 'function' ? v(item) : v;
    return a;
  };

  var getProp$1 = curry(getPropertysValue);
  var setProp = curry(setNewProperty);
  var createPropertyByOtherOne = function createPropertyByOtherOne(prop1, prop2, obj) {
    var getVal = getProp$1(prop2, obj);
    var setValIn = setProp(prop1, getVal);
    return setValIn(obj);
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

  /**
   * 
   * @param { function | Boolean } c - Condicional. Decide cuál función ejecutar
   * @param { function } f - Función a ejecutar si "c" es verdadero
   * @param { function | any } g - Función a ejecutar si "c" es falso. Si no es función, es retornado tal cual.
   * @param { object } i - Objeto que es argumento de todas las funciones anteriores
   */
  var decide = function decide(c, f, g, i) {
    var conditional = typeof c === 'function' ? c(i) : c;
    return conditional ? f(i) : typeof g === 'function' ? g(i) : g;
  };

  var identity = function identity(v) {
    return v;
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

  var isNotEmpty = function isNotEmpty(arg) {
    return !isEmpty(arg);
  };

  var mergeObjects = function mergeObjects() {
    for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
      objs[_key] = arguments[_key];
    }

    return Object.assign.apply(Object, [{}].concat(objs));
  };

  var removeItemFromArrayByIndex = function removeItemFromArrayByIndex(index, arr) {
    arr.splice(index, 1);
    return arr;
  };

  var removeItemFromArrayByProp = function removeItemFromArrayByProp(prop, val, arr) {
    var index = findIndex(function (a) {
      return a[prop] === val;
    }, arr);
    return removeItemFromArrayByIndex(index, arr);
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

  var round = function round(decimal, value) {
    return Number(value.toFixed(decimal));
  };

  exports.allAreTrue = allAreTrue;
  exports.atLeastOneTrue = atLeastOneTrue;
  exports.commonsItemsBetweenArrays = commonsItemsBetweenArrays;
  exports.compose = compose;
  exports.createPropertyByOtherOne = createPropertyByOtherOne;
  exports.curry = curry;
  exports.debounce = debounce;
  exports.decide = decide;
  exports.equality = equality;
  exports.every = every;
  exports.filter = filter;
  exports.find = find;
  exports.findIndex = findIndex;
  exports.forEach = forEach;
  exports.getPropertysValue = getPropertysValue;
  exports.identity = identity;
  exports.isEmpty = isEmpty;
  exports.isNotEmpty = isNotEmpty;
  exports.map = map;
  exports.mergeObjects = mergeObjects;
  exports.reduce = reduce;
  exports.removeItemFromArrayByIndex = removeItemFromArrayByIndex;
  exports.removeItemFromArrayByProp = removeItemFromArrayByProp;
  exports.returnUniqueArraysItems = returnUniqueArraysItems;
  exports.round = round;
  exports.setNewProperty = setNewProperty;
  exports.some = some;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
