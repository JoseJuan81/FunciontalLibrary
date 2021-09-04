(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.functionallibrary = {}));
}(this, (function (exports) { 'use strict';

  /**
   *	allAreTrue
   *	@param { boolean | number | string } arg - n cantidad de elementos separador por coma (,)
   *	@return { boolean }
   */
  var allAreTrue = function allAreTrue() {
    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }

    return arg.every(function (a) {
      return a;
    });
  };

  /**
   *	atLeastOneTrue
   *	@param { boolean | number | string } arg - n cantidad de elementos separador por coma (,)
   *	@return { boolean }
   */
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

  /**
   *	getPropertysValue
   *	@param { string } nestedProp - anidamiento de propiedades dentro de un objeto. ej 'type.person.name'
   *	@param { object } obj - objeto en le que se buscará el valor de la propiedad nestedProp
   *	@return { string | number | undefined }
   */
  var getPropertysValueFn = (function (nestedProp, obj) {
    var propFlow = nestedProp.split('.');

    var newItem = _objectSpread2({}, obj);

    propFlow.forEach(function (el) {
      newItem = (newItem || {})[el];
    });
    return newItem;
  });

  /**
   *	curry
   *	@param { function } fn - función con argumentos agregados parcialmente
   *	@return { function }
   */
  var curry = (function (fn) {
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
  });

  var getProp = curry(getPropertysValueFn);
  /**
   *	equality
   *	@param {string, number} prop1 - propiedad a usar para comparar
   *	@param {string, number} val2 - valor a comprar cuando se usa un item del tipo objeto
   *	@param {object, string, number} item - cuando es un objeto se usa con val2, cuando es string o number se usa solo (val2 === null)
   *	@return { boolean }
   */

  var equalityFn = (function (prop1, val2, item) {
    var findPropIn = typeof prop1 === 'string' ? getProp(prop1) : prop1;
    var val = val2 || getProp;

    if (_typeof(item) === 'object' && typeof val !== 'function') {
      return findPropIn(item) === val;
    }

    if (_typeof(item) === 'object' && typeof val === 'function') {
      return findPropIn(item) === val(item);
    }

    return item === prop1;
  });

  /**
   * everyFn
   * @param { function } fn - función a ejecutar sobre cada elemento del arreglo
   * @param { array } col - arrelo de elementos
   * @return { boolean }
  */
  var everyFn = function everyFn(fn, col) {
    return col.every(fn);
  };
  /**
   * filterFn
   * @param { function } fn - función a ejecutar sobre cada elemento del arreglo
   * @param { array } col - arrelo de elementos
   * @return { array }
  */

  var filterFn = function filterFn(fn, col) {
    return col.filter(fn);
  };
  /**
   * findFn
   * @param { function } fn - función a ejecutar sobre cada elemento del arreglo
   * @param { array } col - arrelo de elementos
   * @return { string | number | object }
  */

  var findFn = function findFn(fn, col) {
    return col.find(fn);
  };
  /**
   * findIndexFn
   * @param { function } fn - función a ejecutar sobre cada elemento del arreglo
   * @param { array } col - arrelo de elementos
   * @return { number }
  */

  var findIndexFn = function findIndexFn(fn, col) {
    return col.findIndex(fn);
  };
  /**
   * forEachFn
   * @param { function } fn - función a ejecutar sobre cada elemento del arreglo
   * @param { array } col - arrelo de elementos
   * @return { undefined }
  */

  var forEachFn = function forEachFn(fn, col) {
    return col.forEach(fn);
  };
  /**
   * mapFn
   * @param { function } fn - función a ejecutar sobre cada elemento del arreglo
   * @param { array } col - arrelo de elementos
   * @return { array }
  */

  var mapFn = function mapFn(fn, col) {
    return col.map(fn);
  };
  /**
   * reduceFn
   * @param { function } fn - función a ejecutar sobre cada elemento del arreglo
   * @param { array } col - arrelo de elementos
   * @return { number | array | object }
  */

  var reduceFn = function reduceFn(fn) {
    var acc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var col = arguments.length > 2 ? arguments[2] : undefined;
    return col.reduce(fn, acc);
  };
  /**
   * someFn
   * @param { function } fn - función a ejecutar sobre cada elemento del arreglo
   * @param { array } col - arrelo de elementos
   * @return { boolean }
  */

  var someFn = function someFn(fn, col) {
    return col.some(fn);
  };

  var everyCurried = curry(everyFn);
  var equalityCurried = curry(equalityFn);
  /**
   *	commonsItemsBetweenArrays
   *	@param { string } prop - propiedad a usar para comparar elementos
   *	@param { array } collection1 - collección 1
   *	@param { array } collection2 - colección 2
   *	@return { array }
   */

  var commonsItemsBetweenArrays = function commonsItemsBetweenArrays(prop, collection1, collection2) {
    var lower = collection1.length <= collection2.length ? collection1 : collection2;
    var bigger = lower.length === collection1.length ? collection2 : collection1;
    var list = [];

    if (prop) {
      lower.forEach(function (a) {
        var val = a[prop];
        var equal = equalityCurried(prop, val);
        var match = findFn(equal, bigger);

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
          var match = findFn(function (b) {
            return a === b;
          }, bigger);
          list = match ? list.concat(match) : list;
        });
      }
    }

    return list;
  };

  /**
   *	compose
   *	@param  { function } fns - n funciones que serán ejecutadas secuancialmente de derecha a izquierda
   */
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

  /**
   *	debounce
   *	@param { function } fn - Función a retardar
   *	@param { number } wait - tiempo en ms que se retardará fn
   *	@return { function }
   */
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
   *	isEmpty
   *	@param { string | object | array | number} arg - variable a evaluar
   *	@return { boolean }
   */
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

  /**
   *	isNotEmpty
   *	@param { string | object | array | number} arg - variable a evaluar
   *	@return { boolean }
   */

  var isNotEmpty = function isNotEmpty(arg) {
    return !isEmpty(arg);
  };

  /**
   *	mergeObject
   *	@param  { object } objs - n cantidad de objetos a fusionar
   *	@return { object } - objeto único resultado de la fución
   */
  var mergeObjects = function mergeObjects() {
    for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
      objs[_key] = arguments[_key];
    }

    return Object.assign.apply(Object, [{}].concat(objs));
  };

  /**
   *	returnUniqueArraysItems
   *	@param  { array } arrs - arreglos con elementos diversos
   *	@return { array } arreglo con elementos únicos
   */
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

  /**
   *	setNewProperty
   *	@param { string } property - propiedad a crear
   *	@param { string | number } v - valor de la propiedad a crear
   *	@param { object } item - objeto en el que se creará la propiedad
   *	@return { object } objeto con nueva propiedad
   */
  var setNewPropertyFn = (function (property, v, item) {
    var a = _objectSpread2({}, item);

    a[property] = typeof v === 'function' ? v(item) : v;
    return a;
  });

  var getProp$1 = curry(getPropertysValueFn);
  var setProp = curry(setNewPropertyFn);
  /**
   *	createPropertyByOtherOne
   *	@param { string } prop1 - propiedad a crear
   *	@param { string } prop2 - propiedad que tiene el valor a usar para la prop1
   *	@param { object } obj - objeto dentro del cual se efectua la operación
   *	@return { string | number }
   */

  var createPropertyByOtherOneFn = (function (prop1, prop2, obj) {
    var getVal = getProp$1(prop2, obj);
    var setValIn = setProp(prop1, getVal);
    return setValIn(obj);
  });

  /**
   *	decide
   *	@param { function | Boolean } c - Condicional. Decide cuál función ejecutar
   *	@param { function } f - Función a ejecutar si "c" es verdadero
   *	@param { function | any } g - Función a ejecutar si "c" es falso. Si no es función, es retornado tal cual.
   *	@param { object } i - Objeto que es argumento de todas las funciones anteriores
   *	@return { string | number }
   */
  var decideFn = (function (c, f, g, i) {
    var conditional = typeof c === 'function' ? c(i) : c;
    return conditional ? f(i) : typeof g === 'function' ? g(i) : g;
  });

  /**
   * identity
   * @param { any } v - cualquier tipo de variable.
   * @return { any } - retorna el argumento pasado
   */
  var identityFn = (function (v) {
    return v;
  });

  /**
   *	@description remueve elemento de un arreglo usando el índice
   *	@param { number } index - ubicación de elemento en arreglo
   *	@param { array } arr - arreglo de elementos
   *	@return { array } - array con un elemento menos (el que estaba en posición index)
   */
  var removeItemFromArrayByIndexFn = (function (index, arr) {
    var localArr = _toConsumableArray(arr);

    localArr.splice(index, 1);
    return _toConsumableArray(localArr);
  });

  /**
   *	removeItemFromArrayByProp
   *	@param { string } prop - propiedad a usar en cada elemento del arreglo
   *	@param { number | string } val - valor a usar para comparar
   *	@param { array } arr - arreglo de elementos
   *	@return { array  } arreglo con un elementos menos
   */

  var removeItemFromArrayByPropFn = (function (prop, val, arr) {
    var index = findIndexFn(function (a) {
      return a[prop] === val;
    }, arr);
    return removeItemFromArrayByIndexFn(index, arr);
  });

  /**
   *	round
   *	@param { number } decimal - cantidad de decimales a mostrar
   *	@param { number } value - cantidad a redondear
   *	@return { number } número redondeado
   */
  var roundFn = (function (decimal, value) {
    return Number(value.toFixed(decimal));
  });

  var createPropertyByOtherOne = curry(createPropertyByOtherOneFn);
  var decide = curry(decideFn);
  var equality = curry(equalityFn);
  var every = curry(everyFn);
  var filter = curry(filterFn);
  var find = curry(findFn);
  var findIndex = curry(findIndexFn);
  var forEach = curry(forEachFn);
  var getPropertysValue = curry(getPropertysValueFn);
  var identity = curry(identityFn);
  var map = curry(mapFn);
  var reduce = curry(reduceFn);
  var removeItemFromArrayByIndex = curry(removeItemFromArrayByIndexFn);
  var removeItemFromArrayByProp = curry(removeItemFromArrayByPropFn);
  var round = curry(roundFn);
  var setNewProperty = curry(setNewPropertyFn);
  var some = curry(someFn);

  exports.allAreTrue = allAreTrue;
  exports.atLeastOneTrue = atLeastOneTrue;
  exports.commonsItemsBetweenArrays = commonsItemsBetweenArrays;
  exports.compose = compose;
  exports.createPropertyByOtherOne = createPropertyByOtherOne;
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
