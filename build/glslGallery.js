(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.glslGallery = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":5}],2:[function(_dereq_,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],3:[function(_dereq_,module,exports){
"use strict";

var _Object$defineProperty = _dereq_("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;

      _Object$defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":1}],4:[function(_dereq_,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],5:[function(_dereq_,module,exports){
var $ = _dereq_('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":6}],6:[function(_dereq_,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],7:[function(_dereq_,module,exports){
var isFunction = _dereq_('is-function')

module.exports = forEach

var toString = Object.prototype.toString
var hasOwnProperty = Object.prototype.hasOwnProperty

function forEach(list, iterator, context) {
    if (!isFunction(iterator)) {
        throw new TypeError('iterator must be a function')
    }

    if (arguments.length < 3) {
        context = this
    }
    
    if (toString.call(list) === '[object Array]')
        forEachArray(list, iterator, context)
    else if (typeof list === 'string')
        forEachString(list, iterator, context)
    else
        forEachObject(list, iterator, context)
}

function forEachArray(array, iterator, context) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            iterator.call(context, array[i], i, array)
        }
    }
}

function forEachString(string, iterator, context) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        iterator.call(context, string.charAt(i), i, string)
    }
}

function forEachObject(object, iterator, context) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            iterator.call(context, object[k], k, object)
        }
    }
}

},{"is-function":10}],8:[function(_dereq_,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],9:[function(_dereq_,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.GlslCanvas = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":12}],2:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":13}],3:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":14}],4:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":15}],5:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":16}],6:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":17}],7:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/set"), __esModule: true };
},{"core-js/library/fn/set":18}],8:[function(_dereq_,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],9:[function(_dereq_,module,exports){
"use strict";

var _Object$defineProperty = _dereq_("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;

      _Object$defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":4}],10:[function(_dereq_,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],11:[function(_dereq_,module,exports){
"use strict";

var _Array$from = _dereq_("babel-runtime/core-js/array/from")["default"];

exports["default"] = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return _Array$from(arr);
  }
};

exports.__esModule = true;
},{"babel-runtime/core-js/array/from":1}],12:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.string.iterator');
_dereq_('../../modules/es6.array.from');
module.exports = _dereq_('../../modules/$.core').Array.from;
},{"../../modules/$.core":27,"../../modules/es6.array.from":74,"../../modules/es6.string.iterator":81}],13:[function(_dereq_,module,exports){
_dereq_('../modules/web.dom.iterable');
_dereq_('../modules/es6.string.iterator');
module.exports = _dereq_('../modules/core.get-iterator');
},{"../modules/core.get-iterator":73,"../modules/es6.string.iterator":81,"../modules/web.dom.iterable":83}],14:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.object.assign');
module.exports = _dereq_('../../modules/$.core').Object.assign;
},{"../../modules/$.core":27,"../../modules/es6.object.assign":76}],15:[function(_dereq_,module,exports){
var $ = _dereq_('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":49}],16:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.object.keys');
module.exports = _dereq_('../../modules/$.core').Object.keys;
},{"../../modules/$.core":27,"../../modules/es6.object.keys":77}],17:[function(_dereq_,module,exports){
_dereq_('../modules/es6.object.to-string');
_dereq_('../modules/es6.string.iterator');
_dereq_('../modules/web.dom.iterable');
_dereq_('../modules/es6.promise');
module.exports = _dereq_('../modules/$.core').Promise;
},{"../modules/$.core":27,"../modules/es6.object.to-string":78,"../modules/es6.promise":79,"../modules/es6.string.iterator":81,"../modules/web.dom.iterable":83}],18:[function(_dereq_,module,exports){
_dereq_('../modules/es6.object.to-string');
_dereq_('../modules/es6.string.iterator');
_dereq_('../modules/web.dom.iterable');
_dereq_('../modules/es6.set');
_dereq_('../modules/es7.set.to-json');
module.exports = _dereq_('../modules/$.core').Set;
},{"../modules/$.core":27,"../modules/es6.object.to-string":78,"../modules/es6.set":80,"../modules/es6.string.iterator":81,"../modules/es7.set.to-json":82,"../modules/web.dom.iterable":83}],19:[function(_dereq_,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],20:[function(_dereq_,module,exports){
module.exports = function(){ /* empty */ };
},{}],21:[function(_dereq_,module,exports){
var isObject = _dereq_('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":42}],22:[function(_dereq_,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = _dereq_('./$.cof')
  , TAG = _dereq_('./$.wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./$.cof":23,"./$.wks":71}],23:[function(_dereq_,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],24:[function(_dereq_,module,exports){
'use strict';
var $            = _dereq_('./$')
  , hide         = _dereq_('./$.hide')
  , redefineAll  = _dereq_('./$.redefine-all')
  , ctx          = _dereq_('./$.ctx')
  , strictNew    = _dereq_('./$.strict-new')
  , defined      = _dereq_('./$.defined')
  , forOf        = _dereq_('./$.for-of')
  , $iterDefine  = _dereq_('./$.iter-define')
  , step         = _dereq_('./$.iter-step')
  , ID           = _dereq_('./$.uid')('id')
  , $has         = _dereq_('./$.has')
  , isObject     = _dereq_('./$.is-object')
  , setSpecies   = _dereq_('./$.set-species')
  , DESCRIPTORS  = _dereq_('./$.descriptors')
  , isExtensible = Object.isExtensible || isObject
  , SIZE         = DESCRIPTORS ? '_s' : 'size'
  , id           = 0;

var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!$has(it, ID)){
    // can't set id to frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add id
    if(!create)return 'E';
    // add missing object id
    hide(it, ID, ++id);
  // return object id with prefix
  } return 'O' + it[ID];
};

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      strictNew(that, C, NAME);
      that._i = $.create(null); // index
      that._f = undefined;      // first entry
      that._l = undefined;      // last entry
      that[SIZE] = 0;           // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./$":49,"./$.ctx":28,"./$.defined":29,"./$.descriptors":30,"./$.for-of":34,"./$.has":36,"./$.hide":37,"./$.is-object":42,"./$.iter-define":45,"./$.iter-step":47,"./$.redefine-all":55,"./$.set-species":59,"./$.strict-new":63,"./$.uid":70}],25:[function(_dereq_,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var forOf   = _dereq_('./$.for-of')
  , classof = _dereq_('./$.classof');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    var arr = [];
    forOf(this, false, arr.push, arr);
    return arr;
  };
};
},{"./$.classof":22,"./$.for-of":34}],26:[function(_dereq_,module,exports){
'use strict';
var $              = _dereq_('./$')
  , global         = _dereq_('./$.global')
  , $export        = _dereq_('./$.export')
  , fails          = _dereq_('./$.fails')
  , hide           = _dereq_('./$.hide')
  , redefineAll    = _dereq_('./$.redefine-all')
  , forOf          = _dereq_('./$.for-of')
  , strictNew      = _dereq_('./$.strict-new')
  , isObject       = _dereq_('./$.is-object')
  , setToStringTag = _dereq_('./$.set-to-string-tag')
  , DESCRIPTORS    = _dereq_('./$.descriptors');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
  } else {
    C = wrapper(function(target, iterable){
      strictNew(target, C, NAME);
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)$.setDesc(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./$":49,"./$.descriptors":30,"./$.export":32,"./$.fails":33,"./$.for-of":34,"./$.global":35,"./$.hide":37,"./$.is-object":42,"./$.redefine-all":55,"./$.set-to-string-tag":60,"./$.strict-new":63}],27:[function(_dereq_,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],28:[function(_dereq_,module,exports){
// optional / simple context binding
var aFunction = _dereq_('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./$.a-function":19}],29:[function(_dereq_,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],30:[function(_dereq_,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !_dereq_('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":33}],31:[function(_dereq_,module,exports){
var isObject = _dereq_('./$.is-object')
  , document = _dereq_('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":35,"./$.is-object":42}],32:[function(_dereq_,module,exports){
var global    = _dereq_('./$.global')
  , core      = _dereq_('./$.core')
  , ctx       = _dereq_('./$.ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;
},{"./$.core":27,"./$.ctx":28,"./$.global":35}],33:[function(_dereq_,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],34:[function(_dereq_,module,exports){
var ctx         = _dereq_('./$.ctx')
  , call        = _dereq_('./$.iter-call')
  , isArrayIter = _dereq_('./$.is-array-iter')
  , anObject    = _dereq_('./$.an-object')
  , toLength    = _dereq_('./$.to-length')
  , getIterFn   = _dereq_('./core.get-iterator-method');
module.exports = function(iterable, entries, fn, that){
  var iterFn = getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};
},{"./$.an-object":21,"./$.ctx":28,"./$.is-array-iter":41,"./$.iter-call":43,"./$.to-length":68,"./core.get-iterator-method":72}],35:[function(_dereq_,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],36:[function(_dereq_,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],37:[function(_dereq_,module,exports){
var $          = _dereq_('./$')
  , createDesc = _dereq_('./$.property-desc');
module.exports = _dereq_('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":49,"./$.descriptors":30,"./$.property-desc":54}],38:[function(_dereq_,module,exports){
module.exports = _dereq_('./$.global').document && document.documentElement;
},{"./$.global":35}],39:[function(_dereq_,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],40:[function(_dereq_,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _dereq_('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":23}],41:[function(_dereq_,module,exports){
// check on default Array iterator
var Iterators  = _dereq_('./$.iterators')
  , ITERATOR   = _dereq_('./$.wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./$.iterators":48,"./$.wks":71}],42:[function(_dereq_,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],43:[function(_dereq_,module,exports){
// call something on iterator step with safe closing on error
var anObject = _dereq_('./$.an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./$.an-object":21}],44:[function(_dereq_,module,exports){
'use strict';
var $              = _dereq_('./$')
  , descriptor     = _dereq_('./$.property-desc')
  , setToStringTag = _dereq_('./$.set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_dereq_('./$.hide')(IteratorPrototype, _dereq_('./$.wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./$":49,"./$.hide":37,"./$.property-desc":54,"./$.set-to-string-tag":60,"./$.wks":71}],45:[function(_dereq_,module,exports){
'use strict';
var LIBRARY        = _dereq_('./$.library')
  , $export        = _dereq_('./$.export')
  , redefine       = _dereq_('./$.redefine')
  , hide           = _dereq_('./$.hide')
  , has            = _dereq_('./$.has')
  , Iterators      = _dereq_('./$.iterators')
  , $iterCreate    = _dereq_('./$.iter-create')
  , setToStringTag = _dereq_('./$.set-to-string-tag')
  , getProto       = _dereq_('./$').getProto
  , ITERATOR       = _dereq_('./$.wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , methods, key;
  // Fix native
  if($native){
    var IteratorPrototype = getProto($default.call(new Base));
    // Set @@toStringTag to native iterators
    setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES  ? $default : getMethod(VALUES),
      keys:    IS_SET      ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./$":49,"./$.export":32,"./$.has":36,"./$.hide":37,"./$.iter-create":44,"./$.iterators":48,"./$.library":50,"./$.redefine":56,"./$.set-to-string-tag":60,"./$.wks":71}],46:[function(_dereq_,module,exports){
var ITERATOR     = _dereq_('./$.wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":71}],47:[function(_dereq_,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],48:[function(_dereq_,module,exports){
module.exports = {};
},{}],49:[function(_dereq_,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],50:[function(_dereq_,module,exports){
module.exports = true;
},{}],51:[function(_dereq_,module,exports){
var global    = _dereq_('./$.global')
  , macrotask = _dereq_('./$.task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = _dereq_('./$.cof')(process) == 'process'
  , head, last, notify;

var flush = function(){
  var parent, domain, fn;
  if(isNode && (parent = process.domain)){
    process.domain = null;
    parent.exit();
  }
  while(head){
    domain = head.domain;
    fn     = head.fn;
    if(domain)domain.enter();
    fn(); // <- currently we use it only for Promise - try / catch not required
    if(domain)domain.exit();
    head = head.next;
  } last = undefined;
  if(parent)parent.enter();
};

// Node.js
if(isNode){
  notify = function(){
    process.nextTick(flush);
  };
// browsers with MutationObserver
} else if(Observer){
  var toggle = 1
    , node   = document.createTextNode('');
  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
  notify = function(){
    node.data = toggle = -toggle;
  };
// environments with maybe non-completely correct, but existent Promise
} else if(Promise && Promise.resolve){
  notify = function(){
    Promise.resolve().then(flush);
  };
// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
} else {
  notify = function(){
    // strange IE + webpack dev server bug - use .call(global)
    macrotask.call(global, flush);
  };
}

module.exports = function asap(fn){
  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
  if(last)last.next = task;
  if(!head){
    head = task;
    notify();
  } last = task;
};
},{"./$.cof":23,"./$.global":35,"./$.task":65}],52:[function(_dereq_,module,exports){
// 19.1.2.1 Object.assign(target, source, ...)
var $        = _dereq_('./$')
  , toObject = _dereq_('./$.to-object')
  , IObject  = _dereq_('./$.iobject');

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = _dereq_('./$.fails')(function(){
  var a = Object.assign
    , A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , $$    = arguments
    , $$len = $$.length
    , index = 1
    , getKeys    = $.getKeys
    , getSymbols = $.getSymbols
    , isEnum     = $.isEnum;
  while($$len > index){
    var S      = IObject($$[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  }
  return T;
} : Object.assign;
},{"./$":49,"./$.fails":33,"./$.iobject":40,"./$.to-object":69}],53:[function(_dereq_,module,exports){
// most Object methods by ES6 should accept primitives
var $export = _dereq_('./$.export')
  , core    = _dereq_('./$.core')
  , fails   = _dereq_('./$.fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":27,"./$.export":32,"./$.fails":33}],54:[function(_dereq_,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],55:[function(_dereq_,module,exports){
var redefine = _dereq_('./$.redefine');
module.exports = function(target, src){
  for(var key in src)redefine(target, key, src[key]);
  return target;
};
},{"./$.redefine":56}],56:[function(_dereq_,module,exports){
module.exports = _dereq_('./$.hide');
},{"./$.hide":37}],57:[function(_dereq_,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],58:[function(_dereq_,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = _dereq_('./$').getDesc
  , isObject = _dereq_('./$.is-object')
  , anObject = _dereq_('./$.an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = _dereq_('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./$":49,"./$.an-object":21,"./$.ctx":28,"./$.is-object":42}],59:[function(_dereq_,module,exports){
'use strict';
var core        = _dereq_('./$.core')
  , $           = _dereq_('./$')
  , DESCRIPTORS = _dereq_('./$.descriptors')
  , SPECIES     = _dereq_('./$.wks')('species');

module.exports = function(KEY){
  var C = core[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./$":49,"./$.core":27,"./$.descriptors":30,"./$.wks":71}],60:[function(_dereq_,module,exports){
var def = _dereq_('./$').setDesc
  , has = _dereq_('./$.has')
  , TAG = _dereq_('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":49,"./$.has":36,"./$.wks":71}],61:[function(_dereq_,module,exports){
var global = _dereq_('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":35}],62:[function(_dereq_,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = _dereq_('./$.an-object')
  , aFunction = _dereq_('./$.a-function')
  , SPECIES   = _dereq_('./$.wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./$.a-function":19,"./$.an-object":21,"./$.wks":71}],63:[function(_dereq_,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],64:[function(_dereq_,module,exports){
var toInteger = _dereq_('./$.to-integer')
  , defined   = _dereq_('./$.defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$.defined":29,"./$.to-integer":66}],65:[function(_dereq_,module,exports){
var ctx                = _dereq_('./$.ctx')
  , invoke             = _dereq_('./$.invoke')
  , html               = _dereq_('./$.html')
  , cel                = _dereq_('./$.dom-create')
  , global             = _dereq_('./$.global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listner = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(_dereq_('./$.cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listner, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./$.cof":23,"./$.ctx":28,"./$.dom-create":31,"./$.global":35,"./$.html":38,"./$.invoke":39}],66:[function(_dereq_,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],67:[function(_dereq_,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = _dereq_('./$.iobject')
  , defined = _dereq_('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":29,"./$.iobject":40}],68:[function(_dereq_,module,exports){
// 7.1.15 ToLength
var toInteger = _dereq_('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":66}],69:[function(_dereq_,module,exports){
// 7.1.13 ToObject(argument)
var defined = _dereq_('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":29}],70:[function(_dereq_,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],71:[function(_dereq_,module,exports){
var store  = _dereq_('./$.shared')('wks')
  , uid    = _dereq_('./$.uid')
  , Symbol = _dereq_('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":35,"./$.shared":61,"./$.uid":70}],72:[function(_dereq_,module,exports){
var classof   = _dereq_('./$.classof')
  , ITERATOR  = _dereq_('./$.wks')('iterator')
  , Iterators = _dereq_('./$.iterators');
module.exports = _dereq_('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./$.classof":22,"./$.core":27,"./$.iterators":48,"./$.wks":71}],73:[function(_dereq_,module,exports){
var anObject = _dereq_('./$.an-object')
  , get      = _dereq_('./core.get-iterator-method');
module.exports = _dereq_('./$.core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./$.an-object":21,"./$.core":27,"./core.get-iterator-method":72}],74:[function(_dereq_,module,exports){
'use strict';
var ctx         = _dereq_('./$.ctx')
  , $export     = _dereq_('./$.export')
  , toObject    = _dereq_('./$.to-object')
  , call        = _dereq_('./$.iter-call')
  , isArrayIter = _dereq_('./$.is-array-iter')
  , toLength    = _dereq_('./$.to-length')
  , getIterFn   = _dereq_('./core.get-iterator-method');
$export($export.S + $export.F * !_dereq_('./$.iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , $$      = arguments
      , $$len   = $$.length
      , mapfn   = $$len > 1 ? $$[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        result[index] = mapping ? mapfn(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});

},{"./$.ctx":28,"./$.export":32,"./$.is-array-iter":41,"./$.iter-call":43,"./$.iter-detect":46,"./$.to-length":68,"./$.to-object":69,"./core.get-iterator-method":72}],75:[function(_dereq_,module,exports){
'use strict';
var addToUnscopables = _dereq_('./$.add-to-unscopables')
  , step             = _dereq_('./$.iter-step')
  , Iterators        = _dereq_('./$.iterators')
  , toIObject        = _dereq_('./$.to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = _dereq_('./$.iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./$.add-to-unscopables":20,"./$.iter-define":45,"./$.iter-step":47,"./$.iterators":48,"./$.to-iobject":67}],76:[function(_dereq_,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = _dereq_('./$.export');

$export($export.S + $export.F, 'Object', {assign: _dereq_('./$.object-assign')});
},{"./$.export":32,"./$.object-assign":52}],77:[function(_dereq_,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = _dereq_('./$.to-object');

_dereq_('./$.object-sap')('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./$.object-sap":53,"./$.to-object":69}],78:[function(_dereq_,module,exports){

},{}],79:[function(_dereq_,module,exports){
'use strict';
var $          = _dereq_('./$')
  , LIBRARY    = _dereq_('./$.library')
  , global     = _dereq_('./$.global')
  , ctx        = _dereq_('./$.ctx')
  , classof    = _dereq_('./$.classof')
  , $export    = _dereq_('./$.export')
  , isObject   = _dereq_('./$.is-object')
  , anObject   = _dereq_('./$.an-object')
  , aFunction  = _dereq_('./$.a-function')
  , strictNew  = _dereq_('./$.strict-new')
  , forOf      = _dereq_('./$.for-of')
  , setProto   = _dereq_('./$.set-proto').set
  , same       = _dereq_('./$.same-value')
  , SPECIES    = _dereq_('./$.wks')('species')
  , speciesConstructor = _dereq_('./$.species-constructor')
  , asap       = _dereq_('./$.microtask')
  , PROMISE    = 'Promise'
  , process    = global.process
  , isNode     = classof(process) == 'process'
  , P          = global[PROMISE]
  , Wrapper;

var testResolve = function(sub){
  var test = new P(function(){});
  if(sub)test.constructor = Object;
  return P.resolve(test) === test;
};

var USE_NATIVE = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && _dereq_('./$.descriptors')){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
var sameConstructor = function(a, b){
  // library wrapper special case
  if(LIBRARY && a === P && b === Wrapper)return true;
  return same(a, b);
};
var getConstructor = function(C){
  var S = anObject(C)[SPECIES];
  return S != undefined ? S : C;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var PromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve),
  this.reject  = aFunction(reject)
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , result, then;
      try {
        if(handler){
          if(!ok)record.h = true;
          result = handler === true ? value : handler(value);
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
    record.n = false;
    if(isReject)setTimeout(function(){
      var promise = record.p
        , handler, console;
      if(isUnhandled(promise)){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      } record.a = undefined;
    }, 1);
  });
};
var isUnhandled = function(promise){
  var record = promise._d
    , chain  = record.a || record.c
    , i      = 0
    , reaction;
  if(record.h)return false;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var $reject = function(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
};
var $resolve = function(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(record.p === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      asap(function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    aFunction(executor);
    var record = this._d = {
      p: strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  _dereq_('./$.redefine-all')(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction = new PromiseCapability(speciesConstructor(this, P))
        , promise  = reaction.promise
        , record   = this._d;
      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      record.c.push(reaction);
      if(record.a)record.a.push(reaction);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
_dereq_('./$.set-to-string-tag')(P, PROMISE);
_dereq_('./$.set-species')(PROMISE);
Wrapper = _dereq_('./$.core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = new PromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof P && sameConstructor(x.constructor, this))return x;
    var capability = new PromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && _dereq_('./$.iter-detect')(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject
      , values     = [];
    var abrupt = perform(function(){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        var alreadyCalled = false;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled = true;
          results[index] = value;
          --remaining || resolve(results);
        }, reject);
      });
      else resolve(results);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./$":49,"./$.a-function":19,"./$.an-object":21,"./$.classof":22,"./$.core":27,"./$.ctx":28,"./$.descriptors":30,"./$.export":32,"./$.for-of":34,"./$.global":35,"./$.is-object":42,"./$.iter-detect":46,"./$.library":50,"./$.microtask":51,"./$.redefine-all":55,"./$.same-value":57,"./$.set-proto":58,"./$.set-species":59,"./$.set-to-string-tag":60,"./$.species-constructor":62,"./$.strict-new":63,"./$.wks":71}],80:[function(_dereq_,module,exports){
'use strict';
var strong = _dereq_('./$.collection-strong');

// 23.2 Set Objects
_dereq_('./$.collection')('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./$.collection":26,"./$.collection-strong":24}],81:[function(_dereq_,module,exports){
'use strict';
var $at  = _dereq_('./$.string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
_dereq_('./$.iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./$.iter-define":45,"./$.string-at":64}],82:[function(_dereq_,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = _dereq_('./$.export');

$export($export.P, 'Set', {toJSON: _dereq_('./$.collection-to-json')('Set')});
},{"./$.collection-to-json":25,"./$.export":32}],83:[function(_dereq_,module,exports){
_dereq_('./es6.array.iterator');
var Iterators = _dereq_('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":48,"./es6.array.iterator":75}],84:[function(_dereq_,module,exports){
var isFunction = _dereq_('is-function')

module.exports = forEach

var toString = Object.prototype.toString
var hasOwnProperty = Object.prototype.hasOwnProperty

function forEach(list, iterator, context) {
    if (!isFunction(iterator)) {
        throw new TypeError('iterator must be a function')
    }

    if (arguments.length < 3) {
        context = this
    }
    
    if (toString.call(list) === '[object Array]')
        forEachArray(list, iterator, context)
    else if (typeof list === 'string')
        forEachString(list, iterator, context)
    else
        forEachObject(list, iterator, context)
}

function forEachArray(array, iterator, context) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            iterator.call(context, array[i], i, array)
        }
    }
}

function forEachString(string, iterator, context) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        iterator.call(context, string.charAt(i), i, string)
    }
}

function forEachObject(object, iterator, context) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            iterator.call(context, object[k], k, object)
        }
    }
}

},{"is-function":86}],85:[function(_dereq_,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],86:[function(_dereq_,module,exports){
module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};

},{}],87:[function(_dereq_,module,exports){
var trim = _dereq_('trim')
  , forEach = _dereq_('for-each')
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  forEach(
      trim(headers).split('\n')
    , function (row) {
        var index = row.indexOf(':')
          , key = trim(row.slice(0, index)).toLowerCase()
          , value = trim(row.slice(index + 1))

        if (typeof(result[key]) === 'undefined') {
          result[key] = value
        } else if (isArray(result[key])) {
          result[key].push(value)
        } else {
          result[key] = [ result[key], value ]
        }
      }
  )

  return result
}
},{"for-each":84,"trim":88}],88:[function(_dereq_,module,exports){

exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};

},{}],89:[function(_dereq_,module,exports){
"use strict";
var window = _dereq_("global/window")
var once = _dereq_("once")
var isFunction = _dereq_("is-function")
var parseHeaders = _dereq_("parse-headers")
var xtend = _dereq_("xtend")

module.exports = createXHR
createXHR.XMLHttpRequest = window.XMLHttpRequest || noop
createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window.XDomainRequest

forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
    createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
        options = initParams(uri, options, callback)
        options.method = method.toUpperCase()
        return _createXHR(options)
    }
})

function forEachArray(array, iterator) {
    for (var i = 0; i < array.length; i++) {
        iterator(array[i])
    }
}

function isEmpty(obj){
    for(var i in obj){
        if(obj.hasOwnProperty(i)) return false
    }
    return true
}

function initParams(uri, options, callback) {
    var params = uri

    if (isFunction(options)) {
        callback = options
        if (typeof uri === "string") {
            params = {uri:uri}
        }
    } else {
        params = xtend(options, {uri: uri})
    }

    params.callback = callback
    return params
}

function createXHR(uri, options, callback) {
    options = initParams(uri, options, callback)
    return _createXHR(options)
}

function _createXHR(options) {
    var callback = options.callback
    if(typeof callback === "undefined"){
        throw new Error("callback argument missing")
    }
    callback = once(callback)

    function readystatechange() {
        if (xhr.readyState === 4) {
            loadFunc()
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = undefined

        if (xhr.response) {
            body = xhr.response
        } else if (xhr.responseType === "text" || !xhr.responseType) {
            body = xhr.responseText || xhr.responseXML
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    var failureResponse = {
                body: undefined,
                headers: {},
                statusCode: 0,
                method: method,
                url: uri,
                rawRequest: xhr
            }

    function errorFunc(evt) {
        clearTimeout(timeoutTimer)
        if(!(evt instanceof Error)){
            evt = new Error("" + (evt || "Unknown XMLHttpRequest Error") )
        }
        evt.statusCode = 0
        callback(evt, failureResponse)
    }

    // will load the data & process the response in a special response object
    function loadFunc() {
        if (aborted) return
        var status
        clearTimeout(timeoutTimer)
        if(options.useXDR && xhr.status===undefined) {
            //IE8 CORS GET successful response doesn't have a status field, but body is fine
            status = 200
        } else {
            status = (xhr.status === 1223 ? 204 : xhr.status)
        }
        var response = failureResponse
        var err = null

        if (status !== 0){
            response = {
                body: getBody(),
                statusCode: status,
                method: method,
                headers: {},
                url: uri,
                rawRequest: xhr
            }
            if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
                response.headers = parseHeaders(xhr.getAllResponseHeaders())
            }
        } else {
            err = new Error("Internal XMLHttpRequest Error")
        }
        callback(err, response, response.body)

    }

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new createXHR.XDomainRequest()
        }else{
            xhr = new createXHR.XMLHttpRequest()
        }
    }

    var key
    var aborted
    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data || null
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var timeoutTimer

    if ("json" in options) {
        isJson = true
        headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json") //Don't override existing accept header declared by user
        if (method !== "GET" && method !== "HEAD") {
            headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json") //Don't override existing accept header declared by user
            body = JSON.stringify(options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = loadFunc
    xhr.onerror = errorFunc
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    xhr.ontimeout = errorFunc
    xhr.open(method, uri, !sync, options.username, options.password)
    //has to be after open
    if(!sync) {
        xhr.withCredentials = !!options.withCredentials
    }
    // Cannot set timeout with sync request
    // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
    // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
    if (!sync && options.timeout > 0 ) {
        timeoutTimer = setTimeout(function(){
            aborted=true//IE9 may still call readystatechange
            xhr.abort("timeout")
            var e = new Error("XMLHttpRequest timeout")
            e.code = "ETIMEDOUT"
            errorFunc(e)
        }, options.timeout )
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers && !isEmpty(options.headers)) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }

    if ("beforeSend" in options &&
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    xhr.send(body)

    return xhr


}

function noop() {}

},{"global/window":85,"is-function":86,"once":90,"parse-headers":87,"xtend":91}],90:[function(_dereq_,module,exports){
module.exports = once

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })
})

function once (fn) {
  var called = false
  return function () {
    if (called) return
    called = true
    return fn.apply(this, arguments)
  }
}

},{}],91:[function(_dereq_,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],92:[function(_dereq_,module,exports){
/*
The MIT License (MIT)

Copyright (c) 2015 Patricio Gonzalez Vivo ( http://www.patriciogonzalezvivo.com )

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _xhr = _dereq_('xhr');

var _xhr2 = _interopRequireDefault(_xhr);

var _glGl = _dereq_('./gl/gl');

var _glTexture = _dereq_('./gl/Texture');

var _glTexture2 = _interopRequireDefault(_glTexture);

var _toolsCommon = _dereq_('./tools/common');

var _toolsMixin = _dereq_('./tools/mixin');

var GlslCanvas = (function () {
    function GlslCanvas(canvas, options) {
        var _this = this;

        _classCallCheck(this, GlslCanvas);

        (0, _toolsMixin.subscribeMixin)(this);

        options = options || {};

        this.width = canvas.clientWidth;
        this.height = canvas.clientHeight;

        this.canvas = canvas;
        this.gl = undefined;
        this.program = undefined;
        this.textures = {};
        this.uniforms = {};
        this.vbo = {};
        this.isValid = false;

        this.vertexString = options.vertexString || '\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nattribute vec2 a_position;\nattribute vec2 a_texcoord;\n\nvarying vec2 v_texcoord;\n\nvoid main() {\n    gl_Position = vec4(a_position, 0.0, 1.0);\n    v_texcoord = a_texcoord;\n}\n';
        this.fragmentString = options.fragmentString || '\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvarying vec2 v_texcoord;\n\nvoid main(){\n    gl_FragColor = vec4(0.0);\n}\n';

        // GL Context
        var gl = (0, _glGl.setupWebGL)(canvas, options);
        if (!gl) {
            return;
        }
        this.gl = gl;
        this.timeLoad = Date.now();
        this.forceRender = true;
        this.paused = false;

        // Allow alpha
        canvas.style.backgroundColor = options.backgroundColor || 'rgba(1,1,1,0)';

        // Load shader
        if (canvas.hasAttribute('data-fragment')) {
            this.fragmentString = canvas.getAttribute('data-fragment');
        } else if (canvas.hasAttribute('data-fragment-url')) {
            var source = canvas.getAttribute('data-fragment-url');
            _xhr2['default'].get(source, function (error, response, body) {
                _this.load(body, _this.vertexString);
            });
        }

        // Load shader
        if (canvas.hasAttribute('data-vertex')) {
            this.vertexString = canvas.getAttribute('data-vertex');
        } else if (canvas.hasAttribute('data-vertex-url')) {
            var source = canvas.getAttribute('data-vertex-url');
            _xhr2['default'].get(source, function (error, response, body) {
                _this.load(_this.fragmentString, body);
            });
        }

        this.load();

        if (!this.program) {
            return;
        }

        // Define Vertex buffer
        var texCoordsLoc = gl.getAttribLocation(this.program, 'a_texcoord');
        this.vbo.texCoords = gl.createBuffer();
        this.gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo.texCoords);
        this.gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]), gl.STATIC_DRAW);
        this.gl.enableVertexAttribArray(texCoordsLoc);
        this.gl.vertexAttribPointer(texCoordsLoc, 2, gl.FLOAT, false, 0, 0);

        var verticesLoc = gl.getAttribLocation(this.program, 'a_position');
        this.vbo.vertices = gl.createBuffer();
        this.gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo.vertices);
        this.gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0]), gl.STATIC_DRAW);
        this.gl.enableVertexAttribArray(verticesLoc);
        this.gl.vertexAttribPointer(verticesLoc, 2, gl.FLOAT, false, 0, 0);

        // load TEXTURES
        if (canvas.hasAttribute('data-textures')) {
            var imgList = canvas.getAttribute('data-textures').split(',');
            for (var nImg in imgList) {
                this.setUniform('u_tex' + nImg, imgList[nImg]);
            }
        }

        // ========================== EVENTS
        var mouse = {
            x: 0,
            y: 0
        };
        document.addEventListener('mousemove', function (e) {
            mouse.x = e.clientX || e.pageX;
            mouse.y = e.clientY || e.pageY;
        }, false);

        var sandbox = this;
        function RenderLoop() {
            sandbox.setMouse(mouse);
            sandbox.render();
            sandbox.forceRender = sandbox.resize();
            window.requestAnimationFrame(RenderLoop);
        }

        // Start
        this.setMouse({ x: 0, y: 0 });
        RenderLoop();
        return this;
    }

    _createClass(GlslCanvas, [{
        key: 'destroy',
        value: function destroy() {
            this.animated = false;
            this.isValid = false;
            for (var tex in this.textures) {
                this.gl.deleteTexture(tex);
            }
            this.textures = {};
            for (var att in this.attribs) {
                this.gl.deleteBuffer(this.attribs[att]);
            }
            this.gl.useProgram(null);
            this.gl.deleteProgram(this.program);
            this.program = null;
            this.gl = null;
        }
    }, {
        key: 'load',
        value: function load(fragString, vertString) {
            // Load vertex shader if there is one
            if (vertString) {
                this.vertexString = vertString;
            }

            // Load fragment shader if there is one
            if (fragString) {
                this.fragmentString = fragString;
            }

            this.animated = false;
            var nTimes = (this.fragmentString.match(/u_time/g) || []).length;
            var nMouse = (this.fragmentString.match(/u_mouse/g) || []).length;
            this.animated = nTimes > 1 || nMouse > 1;

            var nTextures = this.fragmentString.search(/sampler2D/g);
            if (nTextures) {
                console.log('Check for textures');
                var lines = this.fragmentString.split('\n');
                for (var i = 0; i < lines.length; i++) {
                    var match = lines[i].match(/uniform\s*sampler2D\s*([\w]*);\s*\/\/\s*([\w|\:\/\/|.]*)/i);
                    if (match) {
                        var ext = match[2].split('.').pop();
                        if (match[1] && match[2] && (ext === 'jpg' || ext === 'JPG' || ext === 'jpeg' || ext === 'JPEG' || ext === 'png' || ext === 'PNG')) {
                            console.log('Set texture', match[1], match[2]);
                            this.setUniform(match[1], match[2]);
                        }
                    }
                    var main = lines[i].match(/\s*void\s*main\s*/g);
                    if (main) {
                        break;
                    }
                }
            }

            var vertexShader = (0, _glGl.createShader)(this, this.vertexString, this.gl.VERTEX_SHADER);
            var fragmentShader = (0, _glGl.createShader)(this, this.fragmentString, this.gl.FRAGMENT_SHADER);

            // If Fragment shader fails load a empty one to sign the error
            if (!fragmentShader) {
                fragmentShader = (0, _glGl.createShader)(this, 'void main(){\n\tgl_FragColor = vec4(1.0);\n}', this.gl.FRAGMENT_SHADER);
                this.isValid = false;
            } else {
                this.isValid = true;
            }

            // Create and use program
            var program = (0, _glGl.createProgram)(this, [vertexShader, fragmentShader]); //, [0,1],['a_texcoord','a_position']);
            this.gl.useProgram(program);

            // Delete shaders
            // this.gl.detachShader(program, vertexShader);
            // this.gl.detachShader(program, fragmentShader);
            this.gl.deleteShader(vertexShader);
            this.gl.deleteShader(fragmentShader);

            this.program = program;
            this.change = true;

            // Trigger event
            this.trigger('load', {});

            this.forceRender = true;
        }
    }, {
        key: 'loadTexture',
        value: function loadTexture(name, urlElementOrData, options) {
            var _this2 = this;

            if (!options) {
                options = {};
            }

            if (typeof urlElementOrData === 'string') {
                options.url = urlElementOrData;
            } else if (typeof urlElementOrData === 'object' && urlElementOrData.data && urlElementOrData.width && urlElementOrData.height) {
                options.data = urlElementOrData.data;
                options.width = urlElementOrData.width;
                options.height = urlElementOrData.height;
            } else if (typeof urlElementOrData === 'object') {
                options.element = urlElementOrData;
            }

            if (this.textures[name]) {
                if (this.textures[name]) {
                    this.textures[name].load(options);
                    this.textures[name].on('loaded', function (args) {
                        _this2.forceRender = true;
                    });
                }
            } else {
                this.textures[name] = new _glTexture2['default'](this.gl, name, options);
                this.textures[name].on('loaded', function (args) {
                    _this2.forceRender = true;
                });
            }
        }
    }, {
        key: 'refreshUniforms',
        value: function refreshUniforms() {
            this.uniforms = {};
        }
    }, {
        key: 'setUniform',
        value: function setUniform(name) {
            var u = {};

            for (var _len = arguments.length, value = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                value[_key - 1] = arguments[_key];
            }

            u[name] = value;
            this.setUniforms(u);
        }
    }, {
        key: 'setUniforms',
        value: function setUniforms(uniforms) {
            var parsed = (0, _glGl.parseUniforms)(uniforms);
            // Set each uniform
            for (var u in parsed) {
                if (parsed[u].type === 'sampler2D') {
                    // For textures, we need to track texture units, so we have a special setter
                    // this.uniformTexture(parsed[u].name, parsed[u].value[0]);
                    this.loadTexture(parsed[u].name, parsed[u].value[0]);
                } else {
                    this.uniform(parsed[u].method, parsed[u].type, parsed[u].name, parsed[u].value);
                    this.forceRender = true;
                }
            }
        }
    }, {
        key: 'setMouse',
        value: function setMouse(mouse) {
            // set the mouse uniform
            var rect = this.canvas.getBoundingClientRect();
            if (mouse && mouse.x && mouse.x >= rect.left && mouse.x <= rect.right && mouse.y && mouse.y >= rect.top && mouse.y <= rect.bottom) {
                this.uniform('2f', 'vec2', 'u_mouse', mouse.x - rect.left, this.canvas.height - (mouse.y - rect.top));
            }
        }

        // ex: program.uniform('3f', 'position', x, y, z);
    }, {
        key: 'uniform',
        value: function uniform(method, type, name) {
            // 'value' is a method-appropriate arguments list
            this.uniforms[name] = this.uniforms[name] || {};
            var uniform = this.uniforms[name];

            for (var _len2 = arguments.length, value = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
                value[_key2 - 3] = arguments[_key2];
            }

            var change = (0, _toolsCommon.isDiff)(uniform.value, value);
            if (change || this.change || uniform.location === undefined || uniform.value === undefined) {
                uniform.name = name;
                uniform.value = value;
                uniform.type = type;
                uniform.method = 'uniform' + method;
                uniform.location = this.gl.getUniformLocation(this.program, name);

                this.gl[uniform.method].apply(this.gl, [uniform.location].concat(uniform.value));
            }
        }
    }, {
        key: 'uniformTexture',
        value: function uniformTexture(name, texture, options) {
            if (this.textures[name] === undefined) {
                this.loadTexture(name, texture, options);
            } else {
                this.uniform('1i', 'sampler2D', name, this.texureIndex);
                this.textures[name].bind(this.texureIndex);
                this.uniform('2f', 'vec2', name + 'Resolution', this.textures[name].width, this.textures[name].height);
                this.texureIndex++;
            }
        }
    }, {
        key: 'resize',
        value: function resize() {
            if (this.width !== this.canvas.clientWidth || this.height !== this.canvas.clientHeight) {
                var realToCSSPixels = window.devicePixelRatio || 1;

                // Lookup the size the browser is displaying the canvas in CSS pixels
                // and compute a size needed to make our drawingbuffer match it in
                // device pixels.
                var displayWidth = Math.floor(this.gl.canvas.clientWidth * realToCSSPixels);
                var displayHeight = Math.floor(this.gl.canvas.clientHeight * realToCSSPixels);

                // Check if the canvas is not the same size.
                if (this.gl.canvas.width !== displayWidth || this.gl.canvas.height !== displayHeight) {
                    // Make the canvas the same size
                    this.gl.canvas.width = displayWidth;
                    this.gl.canvas.height = displayHeight;
                    // Set the viewport to match
                    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
                    // this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
                }
                this.width = this.canvas.clientWidth;
                this.height = this.canvas.clientHeight;
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            this.visible = (0, _toolsCommon.isCanvasVisible)(this.canvas);
            if (this.forceRender || this.animated && this.visible && !this.paused) {
                // set the time uniform
                var timeFrame = Date.now();
                var time = (timeFrame - this.timeLoad) / 1000.0;
                this.uniform('1f', 'float', 'u_time', time);

                // set the resolution uniform
                this.uniform('2f', 'vec2', 'u_resolution', this.canvas.width, this.canvas.height);

                this.texureIndex = 0;
                for (var tex in this.textures) {
                    this.uniformTexture(tex);
                }

                // Draw the rectangle.
                this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

                // Trigger event
                this.trigger('render', {});

                this.change = false;
                this.forceRender = false;
            }
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.paused = true;
        }
    }, {
        key: 'play',
        value: function play() {
            this.paused = false;
        }
    }, {
        key: 'version',
        value: function version() {
            return '0.0.11';
        }
    }]);

    return GlslCanvas;
})();

exports['default'] = GlslCanvas;

window.GlslCanvas = GlslCanvas;

function loadAllGlslCanvas() {
    var list = document.getElementsByClassName('glslCanvas');
    if (list.length > 0) {
        window.glslCanvases = [];
        for (var i = 0; i < list.length; i++) {
            var sandbox = new GlslCanvas(list[i]);
            if (sandbox.isValid) {
                window.glslCanvases.push(sandbox);
            }
        }
    }
}

window.addEventListener('load', function () {
    loadAllGlslCanvas();
});
module.exports = exports['default'];

},{"./gl/Texture":93,"./gl/gl":94,"./tools/common":95,"./tools/mixin":96,"babel-runtime/helpers/class-call-check":8,"babel-runtime/helpers/create-class":9,"babel-runtime/helpers/interop-require-default":10,"xhr":89}],93:[function(_dereq_,module,exports){
// Texture management
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _Promise = _dereq_('babel-runtime/core-js/promise')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _toolsCommon = _dereq_('../tools/common');

var _toolsMixin = _dereq_('../tools/mixin');

// GL texture wrapper object for keeping track of a global set of textures, keyed by a unique user-defined name

var Texture = (function () {
    function Texture(gl, name) {
        var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

        _classCallCheck(this, Texture);

        (0, _toolsMixin.subscribeMixin)(this);

        this.gl = gl;
        this.texture = gl.createTexture();
        if (this.texture) {
            this.valid = true;
        }
        this.bind();

        this.name = name;
        this.source = null;
        this.sourceType = null;
        this.loading = null; // a Promise object to track the loading state of this texture

        // Default to a 1-pixel black texture so we can safely render while we wait for an image to load
        // See: http://stackoverflow.com/questions/19722247/webgl-wait-for-texture-to-load
        this.setData(1, 1, new Uint8Array([0, 0, 0, 255]), { filtering: 'linear' });
        this.setFiltering(options.filtering);

        this.load(options);
    }

    // Report max texture size for a GL context

    // Destroy a single texture instance

    _createClass(Texture, [{
        key: 'destroy',
        value: function destroy() {
            if (!this.valid) {
                return;
            }
            this.gl.deleteTexture(this.texture);
            this.texture = null;
            delete this.data;
            this.data = null;
            this.valid = false;
        }
    }, {
        key: 'bind',
        value: function bind(unit) {
            if (!this.valid) {
                return;
            }
            if (typeof unit === 'number') {
                if (Texture.activeUnit !== unit) {
                    this.gl.activeTexture(this.gl.TEXTURE0 + unit);
                    Texture.activeUnit = unit;
                }
            }
            if (Texture.activeTexture !== this.texture) {
                this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
                Texture.activeTexture = this.texture;
            }
        }
    }, {
        key: 'load',
        value: function load() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            this.loading = null;

            if (typeof options.url === 'string') {
                if (this.url === undefined || options.url !== this.url) {
                    this.setUrl(options.url, options);
                }
            } else if (options.element) {
                this.setElement(options.element, options);
            } else if (options.data && options.width && options.height) {
                this.setData(options.width, options.height, options.data, options);
            }
        }

        // Sets texture from an url
    }, {
        key: 'setUrl',
        value: function setUrl(url) {
            var _this = this;

            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            if (!this.valid) {
                return;
            }

            this.url = url; // save URL reference (will be overwritten when element is loaded below)
            this.source = this.url;
            this.sourceType = 'url';

            this.loading = new _Promise(function (resolve, reject) {
                var image = new Image();
                image.onload = function () {
                    try {
                        _this.setElement(image, options);
                    } catch (e) {
                        console.log('Texture \'' + _this.name + '\': failed to load url: \'' + _this.source + '\'', e, options);
                    }

                    resolve(_this);
                };
                image.onerror = function (e) {
                    // Warn and resolve on error
                    console.log('Texture \'' + _this.name + '\': failed to load url: \'' + _this.source + '\'', e, options);
                    resolve(_this);
                };
                image.crossOrigin = 'anonymous';
                image.src = _this.source;
            });
            return this.loading;
        }

        // Sets texture to a raw image buffer
    }, {
        key: 'setData',
        value: function setData(width, height, data) {
            var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

            this.width = width;
            this.height = height;

            this.source = data;
            this.sourceType = 'data';

            this.update(options);
            this.setFiltering(options);

            this.loading = _Promise.resolve(this);
            return this.loading;
        }

        // Sets the texture to track a element (canvas/image)
    }, {
        key: 'setElement',
        value: function setElement(element, options) {
            var el = element;

            // a string element is interpeted as a CSS selector
            if (typeof element === 'string') {
                element = document.querySelector(element);
            }

            if (element instanceof HTMLCanvasElement || element instanceof HTMLImageElement || element instanceof HTMLVideoElement) {
                this.source = element;
                this.sourceType = 'element';

                this.update(options);
                this.setFiltering(options);
            } else {
                var msg = 'the \'element\' parameter (`element: ' + JSON.stringify(el) + '`) must be a CSS ';
                msg += 'selector string, or a <canvas>, <image> or <video> object';
                console.log('Texture \'' + this.name + '\': ' + msg, options);
            }

            this.loading = _Promise.resolve(this);
            return this.loading;
        }

        // Uploads current image or buffer to the GPU (can be used to update animated textures on the fly)
    }, {
        key: 'update',
        value: function update() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            if (!this.valid) {
                return;
            }

            this.bind();
            this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, options.UNPACK_FLIP_Y_WEBGL === false ? false : true);
            this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, options.UNPACK_PREMULTIPLY_ALPHA_WEBGL || false);

            // Image or Canvas element
            if (this.sourceType === 'element' && (this.source instanceof HTMLCanvasElement || this.source instanceof HTMLVideoElement || this.source instanceof HTMLImageElement && this.source.complete)) {
                this.width = this.source.width;
                this.height = this.source.height;
                this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.source);
            }
            // Raw image buffer
            else if (this.sourceType === 'data') {
                    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.width, this.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.source);
                }
            this.trigger('loaded', this);
        }

        // Determines appropriate filtering mode
    }, {
        key: 'setFiltering',
        value: function setFiltering() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            if (!this.valid) {
                return;
            }

            this.powerOf2 = (0, _toolsCommon.isPowerOf2)(this.width) && (0, _toolsCommon.isPowerOf2)(this.height);
            var defualtFilter = this.powerOf2 ? 'mipmap' : 'linear';
            this.filtering = options.filtering || defualtFilter;

            var gl = this.gl;
            this.bind();

            // For power-of-2 textures, the following presets are available:
            // mipmap: linear blend from nearest mip
            // linear: linear blend from original image (no mips)
            // nearest: nearest pixel from original image (no mips, 'blocky' look)
            if (this.powerOf2) {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, options.TEXTURE_WRAP_S || options.repeat && gl.REPEAT || gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, options.TEXTURE_WRAP_T || options.repeat && gl.REPEAT || gl.CLAMP_TO_EDGE);

                if (this.filtering === 'mipmap') {
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); // TODO: use trilinear filtering by defualt instead?
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                    gl.generateMipmap(gl.TEXTURE_2D);
                } else if (this.filtering === 'linear') {
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                } else if (this.filtering === 'nearest') {
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                }
            } else {
                // WebGL has strict requirements on non-power-of-2 textures:
                // No mipmaps and must clamp to edge
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

                if (this.filtering === 'mipmap') {
                    this.filtering = 'linear';
                }

                if (this.filtering === 'nearest') {
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                } else {
                    // default to linear for non-power-of-2 textures
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                }
            }
        }
    }]);

    return Texture;
})();

exports['default'] = Texture;
Texture.getMaxTextureSize = function (gl) {
    return gl.getParameter(gl.MAX_TEXTURE_SIZE);
};

// Global set of textures, by name
Texture.activeUnit = -1;
module.exports = exports['default'];

},{"../tools/common":95,"../tools/mixin":96,"babel-runtime/core-js/promise":6,"babel-runtime/helpers/class-call-check":8,"babel-runtime/helpers/create-class":9}],94:[function(_dereq_,module,exports){
'use strict';

var _toConsumableArray = _dereq_('babel-runtime/helpers/to-consumable-array')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.setupWebGL = setupWebGL;
exports.create3DContext = create3DContext;
exports.createShader = createShader;
exports.createProgram = createProgram;
exports.parseUniforms = parseUniforms;
var lastError = '';

/**
 * Creates the HTLM for a failure message
 * @param {string} canvasContainerId id of container of th
 *        canvas.
 * @return {string} The html.
 */
function makeFailHTML(msg) {
    return '\n<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>\n<td align="center">\n<div style="display: table-cell; vertical-align: middle;">\n<div style="">' + msg + '</div>\n</div>\n</td></tr></table>\n';
}

/**
 * Mesasge for getting a webgl browser
 * @type {string}
 */
var GET_A_WEBGL_BROWSER = '\n\tThis page requires a browser that supports WebGL.<br/>\n\t<a href="http://get.webgl.org">Click here to upgrade your browser.</a>\n';

/**
 * Mesasge for need better hardware
 * @type {string}
 */
var OTHER_PROBLEM = '\n\tIt does not appear your computer can support WebGL.<br/>\n\t<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>\n';

/**
 * Creates a webgl context. If creation fails it will
 * change the contents of the container of the <canvas>
 * tag to an error message with the correct links for WebGL.
 * @param {Element} canvas. The canvas element to create a
 *     context from.
 * @param {WebGLContextCreationAttirbutes} optAttribs Any
 *     creation attributes you want to pass in.
 * @return {WebGLRenderingContext} The created context.
 */

function setupWebGL(canvas, optAttribs) {
    function showLink(str) {
        var container = canvas.parentNode;
        if (container) {
            container.innerHTML = makeFailHTML(str);
        }
    }

    if (!window.WebGLRenderingContext) {
        showLink(GET_A_WEBGL_BROWSER);
        return null;
    }

    var context = create3DContext(canvas, optAttribs);
    if (!context) {
        showLink(OTHER_PROBLEM);
    }
    context.getExtension('OES_standard_derivatives');
    return context;
}

/**
 * Creates a webgl context.
 * @param {!Canvas} canvas The canvas tag to get context
 *     from. If one is not passed in one will be created.
 * @return {!WebGLContext} The created context.
 */

function create3DContext(canvas, optAttribs) {
    var names = ['webgl', 'experimental-webgl'];
    var context = null;
    for (var ii = 0; ii < names.length; ++ii) {
        try {
            context = canvas.getContext(names[ii], optAttribs);
        } catch (e) {
            if (context) {
                break;
            }
        }
    }
    return context;
}

/*
 *	Create a Vertex of a specific type (gl.VERTEX_SHADER/)
 */

function createShader(main, source, type) {
    var gl = main.gl;

    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if (!compiled) {
        // Something went wrong during compilation; get the error
        lastError = gl.getShaderInfoLog(shader);
        console.error('*** Error compiling shader ' + shader + ':' + lastError);
        main.trigger('error', { shader: shader, source: source, type: type, error: lastError });
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

/**
 * Loads a shader.
 * @param {!WebGLContext} gl The WebGLContext to use.
 * @param {string} shaderSource The shader source.
 * @param {number} shaderType The type of shader.
 * @param {function(string): void) opt_errorCallback callback for errors.
 * @return {!WebGLShader} The created shader.
 */

function createProgram(main, shaders, optAttribs, optLocations) {
    var gl = main.gl;

    var program = gl.createProgram();
    for (var ii = 0; ii < shaders.length; ++ii) {
        gl.attachShader(program, shaders[ii]);
    }
    if (optAttribs) {
        for (var ii = 0; ii < optAttribs.length; ++ii) {
            gl.bindAttribLocation(program, optLocations ? optLocations[ii] : ii, optAttribs[ii]);
        }
    }
    gl.linkProgram(program);

    // Check the link status
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        // something went wrong with the link
        lastError = gl.getProgramInfoLog(program);
        console.log('Error in program linking:' + lastError);
        gl.deleteProgram(program);
        return null;
    }
    return program;
}

// By Brett Camber on
// https://github.com/tangrams/tangram/blob/master/src/gl/glsl.js

function parseUniforms(uniforms) {
    var prefix = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    var parsed = [];

    for (var _name in uniforms) {
        var uniform = uniforms[_name];
        var u = undefined;

        if (prefix) {
            _name = prefix + '.' + _name;
        }

        // Single float
        if (typeof uniform === 'number') {
            parsed.push({
                type: 'float',
                method: '1f',
                name: _name,
                value: uniform
            });
        }
        // Array: vector, array of floats, array of textures, or array of structs
        else if (Array.isArray(uniform)) {
                // Numeric values
                if (typeof uniform[0] === 'number') {
                    // float vectors (vec2, vec3, vec4)
                    if (uniform.length === 1) {
                        parsed.push({
                            type: 'float',
                            method: '1f',
                            name: _name,
                            value: uniform
                        });
                    }
                    // float vectors (vec2, vec3, vec4)
                    else if (uniform.length >= 2 && uniform.length <= 4) {
                            parsed.push({
                                type: 'vec' + uniform.length,
                                method: uniform.length + 'fv',
                                name: _name,
                                value: uniform
                            });
                        }
                        // float array
                        else if (uniform.length > 4) {
                                parsed.push({
                                    type: 'float[]',
                                    method: '1fv',
                                    name: _name + '[0]',
                                    value: uniform
                                });
                            }
                    // TODO: assume matrix for (typeof == Float32Array && length == 16)?
                }
                // Array of textures
                else if (typeof uniform[0] === 'string') {
                        parsed.push({
                            type: 'sampler2D',
                            method: '1i',
                            name: _name,
                            value: uniform
                        });
                    }
                    // Array of arrays - but only arrays of vectors are allowed in this case
                    else if (Array.isArray(uniform[0]) && typeof uniform[0][0] === 'number') {
                            // float vectors (vec2, vec3, vec4)
                            if (uniform[0].length >= 2 && uniform[0].length <= 4) {
                                // Set each vector in the array
                                for (u = 0; u < uniform.length; u++) {
                                    parsed.push({
                                        type: 'vec' + uniform[0].length,
                                        method: uniform[u].length + 'fv',
                                        name: _name + '[' + u + ']',
                                        value: uniform[u]
                                    });
                                }
                            }
                            // else error?
                        }
                        // Array of structures
                        else if (typeof uniform[0] === 'object') {
                                for (u = 0; u < uniform.length; u++) {
                                    // Set each struct in the array
                                    parsed.push.apply(parsed, _toConsumableArray(parseUniforms(uniform[u], _name + '[' + u + ']')));
                                }
                            }
            }
            // Boolean
            else if (typeof uniform === 'boolean') {
                    parsed.push({
                        type: 'bool',
                        method: '1i',
                        name: _name,
                        value: uniform
                    });
                }
                // Texture
                else if (typeof uniform === 'string') {
                        parsed.push({
                            type: 'sampler2D',
                            method: '1i',
                            name: _name,
                            value: uniform
                        });
                    }
                    // Structure
                    else if (typeof uniform === 'object') {
                            // Set each field in the struct
                            parsed.push.apply(parsed, _toConsumableArray(parseUniforms(uniform, _name)));
                        }
        // TODO: support other non-float types? (int, etc.)
    }
    return parsed;
}

},{"babel-runtime/helpers/to-consumable-array":11}],95:[function(_dereq_,module,exports){
'use strict';

var _Set = _dereq_('babel-runtime/core-js/set')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

var _getIterator = _dereq_('babel-runtime/core-js/get-iterator')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.isCanvasVisible = isCanvasVisible;
exports.isPowerOf2 = isPowerOf2;
exports.nextHighestPowerOfTwo = nextHighestPowerOfTwo;
exports.FormatNumberLength = FormatNumberLength;
exports.getMousePos = getMousePos;
exports.isDiff = isDiff;
exports.subscribeMixin = subscribeMixin;

function isCanvasVisible(canvas) {
    return canvas.getBoundingClientRect().top + canvas.height > 0 && canvas.getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight);
}

function isPowerOf2(value) {
    return (value & value - 1) === 0;
}

function nextHighestPowerOfTwo(x) {
    --x;
    for (var i = 1; i < 32; i <<= 1) {
        x = x | x >> i;
    }
    return x + 1;
}

function FormatNumberLength(num, length) {
    var r = num.toString();
    while (r.length < length) {
        r = '0' + r;
    }
    return r;
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function isDiff(a, b) {
    if (a && b) {
        return a.toString() !== b.toString();
    }
    return false;
}

function subscribeMixin(target) {
    var listeners = new _Set();

    return _Object$assign(target, {

        subscribe: function subscribe(listener) {
            listeners.add(listener);
        },

        on: function on(type, f) {
            var listener = {};
            listener[type] = f;
            listeners.add(listener);
        },

        unsubscribe: function unsubscribe(listener) {
            listeners['delete'](listener);
        },

        unsubscribeAll: function unsubscribeAll() {
            listeners.clear();
        },

        trigger: function trigger(event) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    data[_key - 1] = arguments[_key];
                }

                for (var _iterator = _getIterator(listeners), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var listener = _step.value;

                    if (typeof listener[event] === 'function') {
                        listener[event].apply(listener, data);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    });
}

},{"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/assign":3,"babel-runtime/core-js/set":7}],96:[function(_dereq_,module,exports){
'use strict';

var _Set = _dereq_('babel-runtime/core-js/set')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

var _getIterator = _dereq_('babel-runtime/core-js/get-iterator')['default'];

var _Object$keys = _dereq_('babel-runtime/core-js/object/keys')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.subscribeMixin = subscribeMixin;

function subscribeMixin(target) {
    var listeners = new _Set();

    return _Object$assign(target, {

        on: function on(type, f) {
            var listener = {};
            listener[type] = f;
            listeners.add(listener);
        },

        off: function off(type, f) {
            if (f) {
                var listener = {};
                listener[type] = f;
                listeners['delete'](listener);
            } else {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = _getIterator(listeners), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = _getIterator(_Object$keys(item)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var key = _step2.value;

                                if (key === type) {
                                    listeners['delete'](item);
                                    return;
                                }
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                                    _iterator2['return']();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator['return']) {
                            _iterator['return']();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },

        listSubscriptions: function listSubscriptions() {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = _getIterator(listeners), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var item = _step3.value;

                    console.log(item);
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                        _iterator3['return']();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        },

        subscribe: function subscribe(listener) {
            listeners.add(listener);
        },

        unsubscribe: function unsubscribe(listener) {
            listeners['delete'](listener);
        },

        unsubscribeAll: function unsubscribeAll() {
            listeners.clear();
        },

        trigger: function trigger(event) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    data[_key - 1] = arguments[_key];
                }

                for (var _iterator4 = _getIterator(listeners), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var listener = _step4.value;

                    if (typeof listener[event] === 'function') {
                        listener[event].apply(listener, data);
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                        _iterator4['return']();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    });
}

},{"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/assign":3,"babel-runtime/core-js/object/keys":5,"babel-runtime/core-js/set":7}]},{},[92])(92)
});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],10:[function(_dereq_,module,exports){
module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};

},{}],11:[function(_dereq_,module,exports){
var trim = _dereq_('trim')
  , forEach = _dereq_('for-each')
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  forEach(
      trim(headers).split('\n')
    , function (row) {
        var index = row.indexOf(':')
          , key = trim(row.slice(0, index)).toLowerCase()
          , value = trim(row.slice(index + 1))

        if (typeof(result[key]) === 'undefined') {
          result[key] = value
        } else if (isArray(result[key])) {
          result[key].push(value)
        } else {
          result[key] = [ result[key], value ]
        }
      }
  )

  return result
}
},{"for-each":7,"trim":12}],12:[function(_dereq_,module,exports){

exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};

},{}],13:[function(_dereq_,module,exports){
"use strict";
var window = _dereq_("global/window")
var once = _dereq_("once")
var isFunction = _dereq_("is-function")
var parseHeaders = _dereq_("parse-headers")
var xtend = _dereq_("xtend")

module.exports = createXHR
createXHR.XMLHttpRequest = window.XMLHttpRequest || noop
createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window.XDomainRequest

forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
    createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
        options = initParams(uri, options, callback)
        options.method = method.toUpperCase()
        return _createXHR(options)
    }
})

function forEachArray(array, iterator) {
    for (var i = 0; i < array.length; i++) {
        iterator(array[i])
    }
}

function isEmpty(obj){
    for(var i in obj){
        if(obj.hasOwnProperty(i)) return false
    }
    return true
}

function initParams(uri, options, callback) {
    var params = uri

    if (isFunction(options)) {
        callback = options
        if (typeof uri === "string") {
            params = {uri:uri}
        }
    } else {
        params = xtend(options, {uri: uri})
    }

    params.callback = callback
    return params
}

function createXHR(uri, options, callback) {
    options = initParams(uri, options, callback)
    return _createXHR(options)
}

function _createXHR(options) {
    var callback = options.callback
    if(typeof callback === "undefined"){
        throw new Error("callback argument missing")
    }
    callback = once(callback)

    function readystatechange() {
        if (xhr.readyState === 4) {
            loadFunc()
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = undefined

        if (xhr.response) {
            body = xhr.response
        } else if (xhr.responseType === "text" || !xhr.responseType) {
            body = xhr.responseText || xhr.responseXML
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    var failureResponse = {
                body: undefined,
                headers: {},
                statusCode: 0,
                method: method,
                url: uri,
                rawRequest: xhr
            }

    function errorFunc(evt) {
        clearTimeout(timeoutTimer)
        if(!(evt instanceof Error)){
            evt = new Error("" + (evt || "Unknown XMLHttpRequest Error") )
        }
        evt.statusCode = 0
        callback(evt, failureResponse)
    }

    // will load the data & process the response in a special response object
    function loadFunc() {
        if (aborted) return
        var status
        clearTimeout(timeoutTimer)
        if(options.useXDR && xhr.status===undefined) {
            //IE8 CORS GET successful response doesn't have a status field, but body is fine
            status = 200
        } else {
            status = (xhr.status === 1223 ? 204 : xhr.status)
        }
        var response = failureResponse
        var err = null

        if (status !== 0){
            response = {
                body: getBody(),
                statusCode: status,
                method: method,
                headers: {},
                url: uri,
                rawRequest: xhr
            }
            if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
                response.headers = parseHeaders(xhr.getAllResponseHeaders())
            }
        } else {
            err = new Error("Internal XMLHttpRequest Error")
        }
        callback(err, response, response.body)

    }

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new createXHR.XDomainRequest()
        }else{
            xhr = new createXHR.XMLHttpRequest()
        }
    }

    var key
    var aborted
    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data || null
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var timeoutTimer

    if ("json" in options) {
        isJson = true
        headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json") //Don't override existing accept header declared by user
        if (method !== "GET" && method !== "HEAD") {
            headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json") //Don't override existing accept header declared by user
            body = JSON.stringify(options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = loadFunc
    xhr.onerror = errorFunc
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    xhr.ontimeout = errorFunc
    xhr.open(method, uri, !sync, options.username, options.password)
    //has to be after open
    if(!sync) {
        xhr.withCredentials = !!options.withCredentials
    }
    // Cannot set timeout with sync request
    // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
    // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
    if (!sync && options.timeout > 0 ) {
        timeoutTimer = setTimeout(function(){
            aborted=true//IE9 may still call readystatechange
            xhr.abort("timeout")
            var e = new Error("XMLHttpRequest timeout")
            e.code = "ETIMEDOUT"
            errorFunc(e)
        }, options.timeout )
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers && !isEmpty(options.headers)) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }

    if ("beforeSend" in options &&
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    xhr.send(body)

    return xhr


}

function noop() {}

},{"global/window":8,"is-function":10,"once":14,"parse-headers":11,"xtend":15}],14:[function(_dereq_,module,exports){
module.exports = once

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })
})

function once (fn) {
  var called = false
  return function () {
    if (called) return
    called = true
    return fn.apply(this, arguments)
  }
}

},{}],15:[function(_dereq_,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],16:[function(_dereq_,module,exports){
'use strict';

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.createOpenFrameArtwork = createOpenFrameArtwork;

var OpenFrameIcon = function OpenFrameIcon(parent) {
    var _this = this;

    _classCallCheck(this, OpenFrameIcon);

    this.parent = parent;

    this.el = document.createElement('div');
    this.el.setAttribute('class', 'glslGallery_openFrameIcon');
    this.el.innerHTML = '[o]';
    this.el.addEventListener('click', function () {
        createOpenFrameArtwork(_this.parent, function () {
            console.log(event);
        });
    }, true);

    this.parent.el.appendChild(this.el);
};

exports['default'] = OpenFrameIcon;

function createOpenFrameArtwork(item, callback) {
    var id = item.id;
    var title = item.title || 'unknow';
    var author = item.author || 'unknow';
    var xhr = new XMLHttpRequest();
    callback = callback || function () {};
    // anywhere in the API that user {id} is needed, the alias 'current' can be used for the logged-in user
    xhr.open('POST', 'http://openframe.io/api/users/current/owned_artwork', false);
    // set content type to JSON...
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    // This is essential in order to include auth cookies:
    xhr.withCredentials = true;
    xhr.onload = function (event) {
        if (event.currentTarget.status === 404) {
            (function () {
                window.open('http://openframe.io/login-popup', 'login', 'width=500,height=600');
                var successListener = function successListener(e) {
                    if (e.data === 'success') {
                        createOpenFrameArtwork(item, callback);
                    }
                    window.removeEventListener('message', successListener);
                };
                window.addEventListener('message', successListener, false);
            })();
        } else if (event.currentTarget.status === 200) {
            callback(true);
        } else {
            callback(false);
        }
    };
    xhr.onerror = function (event) {
        console.log(event.currentTarget.status);
    };

    var url = '';
    if (id.match(/\d\d\/.*/)) {
        url = 'https://thebookofshaders.com/' + id;
    } else {
        url = 'https://thebookofshaders.com/log/' + id;
    }

    xhr.send(JSON.stringify({
        title: title,
        author_name: author,
        is_public: false,
        format: 'openframe-glslviewer',
        url: url + '.frag',
        thumb_url: url + '.png'
    }));
}

},{"babel-runtime/helpers/class-call-check":2}],17:[function(_dereq_,module,exports){
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _xhr = _dereq_('xhr');

var _xhr2 = _interopRequireDefault(_xhr);

var _glslCanvas = _dereq_('glslCanvas');

var _glslCanvas2 = _interopRequireDefault(_glslCanvas);

var _addonsOpenFrameIcon = _dereq_('../addons/openFrameIcon');

var _addonsOpenFrameIcon2 = _interopRequireDefault(_addonsOpenFrameIcon);

var GalleryItem = (function () {
    function GalleryItem(id, main, options) {
        var _this = this;

        _classCallCheck(this, GalleryItem);

        this.id = id;
        this.main = main;
        this.options = options;

        // Construct Item
        this.el = document.createElement('div');
        this.el.setAttribute('class', 'glslGallery_item');

        this.link = document.createElement('a');
        this.link.setAttribute('target', '_blank');

        this.img = document.createElement('img');
        this.img.setAttribute('class', 'glslGallery_thumb');

        this.credits = document.createElement('div');
        this.credits.setAttribute('class', 'glslGallery_credits');
        this.credits.style.visibility = 'hidden';

        if (this.id.match(/\d\d\/.*/)) {
            this.link.setAttribute('href', 'https://thebookofshaders.com/edit.php#' + this.id + '.frag');
            this.img.src = 'https://thebookofshaders.com/' + this.id + '.png';
        } else {
            if (this.options.clickRun === "editor") {
                this.link.setAttribute('href', 'https://thebookofshaders.com/edit.php?log=' + this.id);
                this.img.src = 'https://thebookofshaders.com/log/' + this.id + '.png';
            } else {
                this.link.setAttribute('href', 'http://' + this.options.clickRun + '.thebookofshaders.com/?log=' + this.id);
                this.img.src = 'https://thebookofshaders.com/log/' + this.id + '.png';
            }
        }

        this.link.appendChild(this.img);
        this.el.appendChild(this.link);
        this.el.appendChild(this.credits);
        this.main.container.appendChild(this.el);

        // Add events
        if (this.options.hoverPreview) {
            this.el.addEventListener('mouseenter', function () {
                onEnter(_this);
            });
            this.el.addEventListener('mouseleave', function () {
                onLeave(_this);
            });
        }

        if (this.options.openFrameIcon) {
            this.openFrameIcon = new _addonsOpenFrameIcon2['default'](this);
        }

        this.init();
    }

    _createClass(GalleryItem, [{
        key: 'init',
        value: function init() {
            var _this2 = this;

            if (!this.source || this.source === '') {
                var url;

                (function () {
                    url = '';

                    if (_this2.id.match(/\d\d\/.*/)) {
                        url = 'https://thebookofshaders.com/' + _this2.id + '.frag';
                    } else {
                        url = 'https://thebookofshaders.com/log/' + _this2.id + '.frag';
                    }
                    var item = _this2;
                    _xhr2['default'].get(url, function (error, res, body) {
                        if (error) {
                            console.error('Error downloading ', error);
                            return;
                        }
                        item.setCode(body);
                    });
                })();
            }
        }
    }, {
        key: 'load',
        value: function load(code) {
            this.setCode(code);
            window.glslGallery_canvas.load(code);
            window.glslGallery_canvas.canvas.style.height = this.img.offsetHeight + 'px';
            this.link.appendChild(window.glslGallery_canvas.canvas);
        }
    }, {
        key: 'setCode',
        value: function setCode(code) {
            this.source = code;

            if (!this.author && this.options.showAuthor) {
                this.author = this.getAuthor();
                // if (this.author !== 'unknown') {
                var authorEl = document.createElement('p');
                authorEl.setAttribute('class', 'glslGallery_label glslGallery_author');
                authorEl.innerHTML = this.author;
                this.credits.appendChild(authorEl);
                this.credits.style.visibility = 'visible';
                // }
            }

            if (!this.title && this.options.showTitle) {
                this.title = this.getTitle();
                // if (this.title !== 'unknown') {
                var titleEl = document.createElement('p');
                titleEl.setAttribute('class', 'glslGallery_label glslGallery_title');
                titleEl.innerHTML = this.title;
                this.credits.appendChild(titleEl);
                this.credits.style.visibility = 'visible';
                // }
            }
        }
    }, {
        key: 'getCode',
        value: function getCode() {
            return this.source;
        }
    }, {
        key: 'getTitle',
        value: function getTitle() {
            var result = this.source.match(/\/\/\s*[T|t]itle\s*:\s*([\w|\s|\@|\(|\)|\-|\_]*)/i);
            if (result && !(result[1] === ' ' || result[1] === '')) {
                return result[1].replace(/(\r\n|\n|\r)/gm, '');
            } else {
                return 'untitled';
            }
        }
    }, {
        key: 'getAuthor',
        value: function getAuthor() {
            var result = this.source.match(/\/\/\s*[A|a]uthor\s*[\:]?\s*([\w|\s|\@|\(|\)|\-|\_]*)/i);
            if (result && !(result[1] === ' ' || result[1] === '')) {
                return result[1].replace(/(\r\n|\n|\r)/gm, '');
            } else {
                return 'anonymous';
            }
        }
    }]);

    return GalleryItem;
})();

exports['default'] = GalleryItem;

function initCanvas() {
    if (!window.glslGallery_canvas) {
        var canvas = document.createElement('canvas');
        canvas.setAttribute('class', 'glslGallery_canvas');
        canvas.style.width = '250px';
        canvas.style.height = '250px';
        canvas.width = '250px';
        canvas.height = '250px';
        window.glslGallery_canvas = new _glslCanvas2['default'](canvas);
    }
}

function onEnter(item) {
    initCanvas();

    if (item.getCode()) {
        item.load(item.getCode());
    } else {
        var url = '';
        if (item.id.match(/\d\d\/.*/)) {
            url = 'https://thebookofshaders.com/' + item.id + '.frag';
        } else {
            url = 'https://thebookofshaders.com/log/' + item.id + '.frag';
        }

        _xhr2['default'].get(url, function (error, res, body) {
            if (error) {
                console.error('Error downloading ', error);
                return;
            }
            item.load(body);
        });
    }
}

function onLeave(item) {
    initCanvas();

    if (item.el.getElementsByClassName('glslGallery_canvas') > 0) {
        // Remove glslCanvas instance from item
        item.el.removeChild(window.glslGallery_canvas.canvas);
    }
}
module.exports = exports['default'];

},{"../addons/openFrameIcon":16,"babel-runtime/helpers/class-call-check":2,"babel-runtime/helpers/create-class":3,"babel-runtime/helpers/interop-require-default":4,"glslCanvas":9,"xhr":13}],18:[function(_dereq_,module,exports){
/*
The MIT License (MIT)

Copyright (c) 2016 Patricio Gonzalez Vivo ( http://www.patriciogonzalezvivo.com )

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _appCoreGalleryItem = _dereq_('app/core/GalleryItem');

var _appCoreGalleryItem2 = _interopRequireDefault(_appCoreGalleryItem);

var GlslGallery = (function () {
    function GlslGallery(selector, options) {
        _classCallCheck(this, GlslGallery);

        if (typeof selector === 'object' && selector.nodeType && selector.nodeType === 1) {
            this.container = selector;
        } else if (typeof selector === 'string') {
            this.container = document.querySelector(selector);
        } else {
            console.log('Error, type ' + typeof selector + ' of ' + selector + ' is unknown');
            return;
        }

        this.options = options || {};

        if (!this.options.showAuthor) {
            this.options.showAuthor = true;
        }

        if (!this.options.showTitle) {
            this.options.showTitle = true;
        }

        if (!this.options.hoverPreview) {
            this.options.hoverPreview = true;
        }

        if (!this.options.openFrameIcon) {
            this.options.openFrameIcon = true;
        }

        if (!this.options.clickRun) {
            this.options.clickRun = 'player';
        }

        this.items = [];

        if (selector.hasAttribute('data-properties')) {
            var prop = selector.getAttribute('data-properties').split(',');
            for (var i in prop) {
                var values = prop[i].split(':');
                if (values.length === 1) {
                    this.options[values[0]] = true;
                } else if (values.length === 2) {
                    this.options[values[0]] = values[1] === 'true' || values[1] === 'false' ? values[1] === 'true' : values[1];
                }
            }
        }

        if (selector.hasAttribute('data')) {
            this.addItems(selector.getAttribute('data'));
        }

        if (this.options.logs) {
            this.addItems(this.options.logs);
        }

        return this;
    }

    _createClass(GlslGallery, [{
        key: 'addItem',
        value: function addItem(log) {
            if (typeof log === 'number') {
                log = log.toString();
            }
            this.items.push(new _appCoreGalleryItem2['default'](log, this, this.options));
        }
    }, {
        key: 'addItems',
        value: function addItems(logs) {
            if (typeof logs === 'string') {
                logs = logs.split(',');
            }
            for (var i in logs) {
                this.addItem(logs[i]);
            }
        }
    }, {
        key: 'version',
        value: function version() {
            return '0.0.6';
        }
    }]);

    return GlslGallery;
})();

exports['default'] = GlslGallery;

function glslGalleryLoadAll() {
    if (!window.GlslGallery) {
        window.GlslGallery = GlslGallery;
    }

    var list = document.getElementsByClassName('glslGallery');
    if (list.length > 0) {
        window.glslGalleries = [];
        for (var i = 0; i < list.length; i++) {
            var gallery = new GlslGallery(list[i]);
            window.glslGalleries.push(gallery);
        }
    }
}

window.addEventListener('load', function () {
    glslGalleryLoadAll();
});
module.exports = exports['default'];

},{"app/core/GalleryItem":17,"babel-runtime/helpers/class-call-check":2,"babel-runtime/helpers/create-class":3,"babel-runtime/helpers/interop-require-default":4}]},{},[18])(18)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qcyIsIm5vZGVfbW9kdWxlcy9mb3ItZWFjaC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbG9iYWwvd2luZG93LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc2V0LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3MuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90by1jb25zdW1hYmxlLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zZXQuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY2xhc3NvZi5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvZi5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvbGxlY3Rpb24tc3Ryb25nLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29sbGVjdGlvbi10by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29sbGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jdHguanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWZpbmVkLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZmFpbHMuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5mb3Itb2YuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5oYXMuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5oaWRlLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmludm9rZS5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1hcnJheS1pdGVyLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jYWxsLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItZGV0ZWN0LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1zdGVwLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlcmF0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQubWljcm90YXNrLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQub2JqZWN0LWFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC1zYXAuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5wcm9wZXJ0eS1kZXNjLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucmVkZWZpbmUtYWxsLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucmVkZWZpbmUuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zYW1lLXZhbHVlLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXByb3RvLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNwZWNpZXMtY29uc3RydWN0b3IuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpY3QtbmV3LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc3RyaW5nLWF0LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudGFzay5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWludGVnZXIuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8tbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudWlkLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQud2tzLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zZXQuanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc2V0LnRvLWpzb24uanMiLCJub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvZ2xzbENhbnZhcy9idWlsZC9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9mb3ItZWFjaC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbG9iYWwvd2luZG93LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2lzLWZ1bmN0aW9uL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL3BhcnNlLWhlYWRlcnMvcGFyc2UtaGVhZGVycy5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy90cmltL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL2dsc2xDYW52YXMvYnVpbGQvbm9kZV9tb2R1bGVzL3hoci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy94aHIvbm9kZV9tb2R1bGVzL29uY2Uvb25jZS5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy9nbHNsQ2FudmFzL2J1aWxkL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCIvVXNlcnMvcGF0cmljaW8vRGVza3RvcC9nbHNsQ2FudmFzL3NyYy9HbHNsQ2FudmFzLmpzIiwiL1VzZXJzL3BhdHJpY2lvL0Rlc2t0b3AvZ2xzbENhbnZhcy9zcmMvZ2wvVGV4dHVyZS5qcyIsIi9Vc2Vycy9wYXRyaWNpby9EZXNrdG9wL2dsc2xDYW52YXMvc3JjL2dsL2dsLmpzIiwiL1VzZXJzL3BhdHJpY2lvL0Rlc2t0b3AvZ2xzbENhbnZhcy9zcmMvdG9vbHMvY29tbW9uLmpzIiwiL1VzZXJzL3BhdHJpY2lvL0Rlc2t0b3AvZ2xzbENhbnZhcy9zcmMvdG9vbHMvbWl4aW4uanMiLCJub2RlX21vZHVsZXMvaXMtZnVuY3Rpb24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvcGFyc2UtaGVhZGVycy9wYXJzZS1oZWFkZXJzLmpzIiwibm9kZV9tb2R1bGVzL3RyaW0vaW5kZXguanMiLCJub2RlX21vZHVsZXMveGhyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3hoci9ub2RlX21vZHVsZXMvb25jZS9vbmNlLmpzIiwibm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyIsIi9Vc2Vycy9wYXRyaWNpby9EZXNrdG9wL2dsc2xHYWxsZXJ5L3NyYy9qcy9hZGRvbnMvb3BlbkZyYW1lSWNvbi5qcyIsIi9Vc2Vycy9wYXRyaWNpby9EZXNrdG9wL2dsc2xHYWxsZXJ5L3NyYy9qcy9jb3JlL0dhbGxlcnlJdGVtLmpzIiwiL1VzZXJzL3BhdHJpY2lvL0Rlc2t0b3AvZ2xzbEdhbGxlcnkvc3JjL2pzL2dsc2xHYWxsZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNUQTtBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDbEMsZ0JBQUksT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLGtCQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QztLQUNKO0NBQ0o7O0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFZO0FBQ3hDLHNCQUFrQixFQUFFLENBQUM7Q0FDeEIsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcblxuICAgICAgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSkoKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhpdCwga2V5LCBkZXNjKTtcbn07IiwidmFyICRPYmplY3QgPSBPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiAgICAgJE9iamVjdC5jcmVhdGUsXG4gIGdldFByb3RvOiAgICRPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gIGlzRW51bTogICAgIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICBnZXREZXNjOiAgICAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgc2V0RGVzYzogICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRLZXlzOiAgICAkT2JqZWN0LmtleXMsXG4gIGdldE5hbWVzOiAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogJE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGVhY2g6ICAgICAgIFtdLmZvckVhY2hcbn07IiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdpcy1mdW5jdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gZm9yRWFjaFxuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5cbmZ1bmN0aW9uIGZvckVhY2gobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIWlzRnVuY3Rpb24oaXRlcmF0b3IpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2l0ZXJhdG9yIG11c3QgYmUgYSBmdW5jdGlvbicpXG4gICAgfVxuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSB7XG4gICAgICAgIGNvbnRleHQgPSB0aGlzXG4gICAgfVxuICAgIFxuICAgIGlmICh0b1N0cmluZy5jYWxsKGxpc3QpID09PSAnW29iamVjdCBBcnJheV0nKVxuICAgICAgICBmb3JFYWNoQXJyYXkobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpXG4gICAgZWxzZSBpZiAodHlwZW9mIGxpc3QgPT09ICdzdHJpbmcnKVxuICAgICAgICBmb3JFYWNoU3RyaW5nKGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KVxuICAgIGVsc2VcbiAgICAgICAgZm9yRWFjaE9iamVjdChsaXN0LCBpdGVyYXRvciwgY29udGV4dClcbn1cblxuZnVuY3Rpb24gZm9yRWFjaEFycmF5KGFycmF5LCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgaSkpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgYXJyYXlbaV0sIGksIGFycmF5KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoU3RyaW5nKHN0cmluZywgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyaW5nLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIC8vIG5vIHN1Y2ggdGhpbmcgYXMgYSBzcGFyc2Ugc3RyaW5nLlxuICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIHN0cmluZy5jaGFyQXQoaSksIGksIHN0cmluZylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hPYmplY3Qob2JqZWN0LCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgIGZvciAodmFyIGsgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgaykpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqZWN0W2tdLCBrLCBvYmplY3QpXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHNlbGY7XG59IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0ge307XG59XG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zZXRcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuXG4gICAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KSgpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX0FycmF5JGZyb20gPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb21cIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX0FycmF5JGZyb20oYXJyKTtcbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5BcnJheS5mcm9tOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmFzc2lnbjsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhpdCwga2V5LCBkZXNjKTtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3Qua2V5czsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzLyQuY29yZScpLlByb21pc2U7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnNldCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcuc2V0LnRvLWpzb24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy8kLmNvcmUnKS5TZXQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gKE8gPSBPYmplY3QoaXQpKVtUQUddKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBoaWRlICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgcmVkZWZpbmVBbGwgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lLWFsbCcpXG4gICwgY3R4ICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgc3RyaWN0TmV3ICAgID0gcmVxdWlyZSgnLi8kLnN0cmljdC1uZXcnKVxuICAsIGRlZmluZWQgICAgICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJylcbiAgLCBmb3JPZiAgICAgICAgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcbiAgLCAkaXRlckRlZmluZSAgPSByZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKVxuICAsIHN0ZXAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLXN0ZXAnKVxuICAsIElEICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKSgnaWQnKVxuICAsICRoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIGlzT2JqZWN0ICAgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIHNldFNwZWNpZXMgICA9IHJlcXVpcmUoJy4vJC5zZXQtc3BlY2llcycpXG4gICwgREVTQ1JJUFRPUlMgID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGlzT2JqZWN0XG4gICwgU0laRSAgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnXG4gICwgaWQgICAgICAgICAgID0gMDtcblxudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCEkaGFzKGl0LCBJRCkpe1xuICAgIC8vIGNhbid0IHNldCBpZCB0byBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBpZFxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBvYmplY3QgaWRcbiAgICBoaWRlKGl0LCBJRCwgKytpZCk7XG4gIC8vIHJldHVybiBvYmplY3QgaWQgd2l0aCBwcmVmaXhcbiAgfSByZXR1cm4gJ08nICsgaXRbSURdO1xufTtcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBzdHJpY3ROZXcodGhhdCwgQywgTkFNRSk7XG4gICAgICB0aGF0Ll9pID0gJC5jcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpe1xuICAgICAgICBmb3IodmFyIHRoYXQgPSB0aGlzLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihlbnRyeS5wKWVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgICAsIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYoZW50cnkpe1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkublxuICAgICAgICAgICAgLCBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYobmV4dCluZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmKHRoYXQuX2YgPT0gZW50cnkpdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYodGhhdC5fbCA9PSBlbnRyeSl0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKVxuICAgICAgICAgICwgZW50cnk7XG4gICAgICAgIHdoaWxlKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZil7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZihERVNDUklQVE9SUykkLnNldERlc2MoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG4gICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgZm9yT2YgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsIGNsYXNzb2YgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpe1xuICAgIGlmKGNsYXNzb2YodGhpcykgIT0gTkFNRSl0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICBmb3JPZih0aGlzLCBmYWxzZSwgYXJyLnB1c2gsIGFycik7XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgZmFpbHMgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZmFpbHMnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIHJlZGVmaW5lQWxsICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lLWFsbCcpXG4gICwgZm9yT2YgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcbiAgLCBzdHJpY3ROZXcgICAgICA9IHJlcXVpcmUoJy4vJC5zdHJpY3QtbmV3JylcbiAgLCBpc09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKXtcbiAgdmFyIEJhc2UgID0gZ2xvYmFsW05BTUVdXG4gICAgLCBDICAgICA9IEJhc2VcbiAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xuICAgICwgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlXG4gICAgLCBPICAgICA9IHt9O1xuICBpZighREVTQ1JJUFRPUlMgfHwgdHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSl7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgfSBlbHNlIHtcbiAgICBDID0gd3JhcHBlcihmdW5jdGlvbih0YXJnZXQsIGl0ZXJhYmxlKXtcbiAgICAgIHN0cmljdE5ldyh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgdGFyZ2V0Ll9jID0gbmV3IEJhc2U7XG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGFyZ2V0W0FEREVSXSwgdGFyZ2V0KTtcbiAgICB9KTtcbiAgICAkLmVhY2guY2FsbCgnYWRkLGNsZWFyLGRlbGV0ZSxmb3JFYWNoLGdldCxoYXMsc2V0LGtleXMsdmFsdWVzLGVudHJpZXMnLnNwbGl0KCcsJyksZnVuY3Rpb24oS0VZKXtcbiAgICAgIHZhciBJU19BRERFUiA9IEtFWSA9PSAnYWRkJyB8fCBLRVkgPT0gJ3NldCc7XG4gICAgICBpZihLRVkgaW4gcHJvdG8gJiYgIShJU19XRUFLICYmIEtFWSA9PSAnY2xlYXInKSloaWRlKEMucHJvdG90eXBlLCBLRVksIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICBpZighSVNfQURERVIgJiYgSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkpcmV0dXJuIEtFWSA9PSAnZ2V0JyA/IHVuZGVmaW5lZCA6IGZhbHNlO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fY1tLRVldKGEgPT09IDAgPyAwIDogYSwgYik7XG4gICAgICAgIHJldHVybiBJU19BRERFUiA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZignc2l6ZScgaW4gcHJvdG8pJC5zZXREZXNjKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Muc2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiwgTyk7XG5cbiAgaWYoIUlTX1dFQUspY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTsiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcxLjIuNid9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICBpZihJU19QUk9UTykoZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSkpW2tleV0gPSBvdXQ7XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7IC8vIHdyYXBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi8kLmlzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCl7XG4gIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3I7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiAkLnNldERlc2Mob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59OyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLmhpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSAkLmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vJC5saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90byAgICAgICA9IHJlcXVpcmUoJy4vJCcpLmdldFByb3RvXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCBtZXRob2RzLCBrZXk7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJG5hdGl2ZSl7XG4gICAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8oJGRlZmF1bHQuY2FsbChuZXcgQmFzZSkpO1xuICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAvLyBGRiBmaXhcbiAgICBpZighTElCUkFSWSAmJiBoYXMocHJvdG8sIEZGX0lURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICAgIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICAgIH1cbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJylcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07IiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgc2FmZSA9IHRydWU7IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsInZhciAkT2JqZWN0ID0gT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi8kLnRhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuLyQuY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG52YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICB2YXIgcGFyZW50LCBkb21haW4sIGZuO1xuICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSl7XG4gICAgcHJvY2Vzcy5kb21haW4gPSBudWxsO1xuICAgIHBhcmVudC5leGl0KCk7XG4gIH1cbiAgd2hpbGUoaGVhZCl7XG4gICAgZG9tYWluID0gaGVhZC5kb21haW47XG4gICAgZm4gICAgID0gaGVhZC5mbjtcbiAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgZm4oKTsgLy8gPC0gY3VycmVudGx5IHdlIHVzZSBpdCBvbmx5IGZvciBQcm9taXNlIC0gdHJ5IC8gY2F0Y2ggbm90IHJlcXVpcmVkXG4gICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG59O1xuXG4vLyBOb2RlLmpzXG5pZihpc05vZGUpe1xuICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICB9O1xuLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG59IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICB2YXIgdG9nZ2xlID0gMVxuICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAtdG9nZ2xlO1xuICB9O1xuLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2Vcbn0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmbHVzaCk7XG4gIH07XG4vLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuLy8gLSBzZXRJbW1lZGlhdGVcbi8vIC0gTWVzc2FnZUNoYW5uZWxcbi8vIC0gd2luZG93LnBvc3RNZXNzYWdcbi8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4vLyAtIHNldFRpbWVvdXRcbn0gZWxzZSB7XG4gIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFzYXAoZm4pe1xuICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCwgZG9tYWluOiBpc05vZGUgJiYgcHJvY2Vzcy5kb21haW59O1xuICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gIGlmKCFoZWFkKXtcbiAgICBoZWFkID0gdGFzaztcbiAgICBub3RpZnkoKTtcbiAgfSBsYXN0ID0gdGFzaztcbn07IiwiLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKTtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBhID0gT2JqZWN0LmFzc2lnblxuICAgICwgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiBhKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKGEoe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsICQkICAgID0gYXJndW1lbnRzXG4gICAgLCAkJGxlbiA9ICQkLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRLZXlzICAgID0gJC5nZXRLZXlzXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzXG4gICAgLCBpc0VudW0gICAgID0gJC5pc0VudW07XG4gIHdoaWxlKCQkbGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KCQkW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH1cbiAgcmV0dXJuIFQ7XG59IDogT2JqZWN0LmFzc2lnbjsiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi8kLmZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuaGlkZScpOyIsIi8vIDcuMi45IFNhbWVWYWx1ZSh4LCB5KVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSl7XG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTsiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgZ2V0RGVzYyAgPSByZXF1aXJlKCcuLyQnKS5nZXREZXNjXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuLyQuY3R4JykoRnVuY3Rpb24uY2FsbCwgZ2V0RGVzYyhPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCAkICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSBjb3JlW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pJC5zZXREZXNjKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vJCcpLnNldERlc2NcbiAgLCBoYXMgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07IiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpdGhyb3cgVHlwZUVycm9yKG5hbWUgKyBcIjogdXNlIHRoZSAnbmV3JyBvcGVyYXRvciFcIik7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTsiLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmh0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdG5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuLyQuY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0bmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTsiLCJ2YXIgc3RvcmUgID0gcmVxdWlyZSgnLi8kLnNoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vJC51aWQnKVxuICAsIFN5bWJvbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5TeW1ib2w7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBTeW1ib2wgJiYgU3ltYm9sW25hbWVdIHx8IChTeW1ib2wgfHwgdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59OyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTsiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCAkZXhwb3J0ICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vJC5pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCAkJCAgICAgID0gYXJndW1lbnRzXG4gICAgICAsICQkbGVuICAgPSAkJC5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9ICQkbGVuID4gMSA/ICQkWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sICQkbGVuID4gMiA/ICQkWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIHJlc3VsdFtpbmRleF0gPSBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF07XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi8kLmFkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi8kLm9iamVjdC1hc3NpZ24nKX0pOyIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24oJGtleXMpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTsiLG51bGwsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBMSUJSQVJZICAgID0gcmVxdWlyZSgnLi8kLmxpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBjdHggICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgY2xhc3NvZiAgICA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgaXNPYmplY3QgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKVxuICAsIHN0cmljdE5ldyAgPSByZXF1aXJlKCcuLyQuc3RyaWN0LW5ldycpXG4gICwgZm9yT2YgICAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsIHNldFByb3RvICAgPSByZXF1aXJlKCcuLyQuc2V0LXByb3RvJykuc2V0XG4gICwgc2FtZSAgICAgICA9IHJlcXVpcmUoJy4vJC5zYW1lLXZhbHVlJylcbiAgLCBTUEVDSUVTICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLyQuc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgYXNhcCAgICAgICA9IHJlcXVpcmUoJy4vJC5taWNyb3Rhc2snKVxuICAsIFBST01JU0UgICAgPSAnUHJvbWlzZSdcbiAgLCBwcm9jZXNzICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBQICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgV3JhcHBlcjtcblxudmFyIHRlc3RSZXNvbHZlID0gZnVuY3Rpb24oc3ViKXtcbiAgdmFyIHRlc3QgPSBuZXcgUChmdW5jdGlvbigpe30pO1xuICBpZihzdWIpdGVzdC5jb25zdHJ1Y3RvciA9IE9iamVjdDtcbiAgcmV0dXJuIFAucmVzb2x2ZSh0ZXN0KSA9PT0gdGVzdDtcbn07XG5cbnZhciBVU0VfTkFUSVZFID0gZnVuY3Rpb24oKXtcbiAgdmFyIHdvcmtzID0gZmFsc2U7XG4gIGZ1bmN0aW9uIFAyKHgpe1xuICAgIHZhciBzZWxmID0gbmV3IFAoeCk7XG4gICAgc2V0UHJvdG8oc2VsZiwgUDIucHJvdG90eXBlKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuICB0cnkge1xuICAgIHdvcmtzID0gUCAmJiBQLnJlc29sdmUgJiYgdGVzdFJlc29sdmUoKTtcbiAgICBzZXRQcm90byhQMiwgUCk7XG4gICAgUDIucHJvdG90eXBlID0gJC5jcmVhdGUoUC5wcm90b3R5cGUsIHtjb25zdHJ1Y3Rvcjoge3ZhbHVlOiBQMn19KTtcbiAgICAvLyBhY3R1YWwgRmlyZWZveCBoYXMgYnJva2VuIHN1YmNsYXNzIHN1cHBvcnQsIHRlc3QgdGhhdFxuICAgIGlmKCEoUDIucmVzb2x2ZSg1KS50aGVuKGZ1bmN0aW9uKCl7fSkgaW5zdGFuY2VvZiBQMikpe1xuICAgICAgd29ya3MgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gYWN0dWFsIFY4IGJ1ZywgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxNjJcbiAgICBpZih3b3JrcyAmJiByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSl7XG4gICAgICB2YXIgdGhlbmFibGVUaGVuR290dGVuID0gZmFsc2U7XG4gICAgICBQLnJlc29sdmUoJC5zZXREZXNjKHt9LCAndGhlbicsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpeyB0aGVuYWJsZVRoZW5Hb3R0ZW4gPSB0cnVlOyB9XG4gICAgICB9KSk7XG4gICAgICB3b3JrcyA9IHRoZW5hYmxlVGhlbkdvdHRlbjtcbiAgICB9XG4gIH0gY2F0Y2goZSl7IHdvcmtzID0gZmFsc2U7IH1cbiAgcmV0dXJuIHdvcmtzO1xufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgaWYoTElCUkFSWSAmJiBhID09PSBQICYmIGIgPT09IFdyYXBwZXIpcmV0dXJuIHRydWU7XG4gIHJldHVybiBzYW1lKGEsIGIpO1xufTtcbnZhciBnZXRDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdO1xuICByZXR1cm4gUyAhPSB1bmRlZmluZWQgPyBTIDogQztcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKSxcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdClcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihyZWNvcmQsIGlzUmVqZWN0KXtcbiAgaWYocmVjb3JkLm4pcmV0dXJuO1xuICByZWNvcmQubiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHJlY29yZC5jO1xuICBhc2FwKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcmVjb3JkLnZcbiAgICAgICwgb2sgICAgPSByZWNvcmQucyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvaylyZWNvcmQuaCA9IHRydWU7XG4gICAgICAgICAgcmVzdWx0ID0gaGFuZGxlciA9PT0gdHJ1ZSA/IHZhbHVlIDogaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIGNoYWluLmxlbmd0aCA9IDA7XG4gICAgcmVjb3JkLm4gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdClzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgcHJvbWlzZSA9IHJlY29yZC5wXG4gICAgICAgICwgaGFuZGxlciwgY29uc29sZTtcbiAgICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSByZWNvcmQuYSA9IHVuZGVmaW5lZDtcbiAgICB9LCAxKTtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHZhciByZWNvcmQgPSBwcm9taXNlLl9kXG4gICAgLCBjaGFpbiAgPSByZWNvcmQuYSB8fCByZWNvcmQuY1xuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIGlmKHJlY29yZC5oKXJldHVybiBmYWxzZTtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHJlY29yZCA9IHRoaXM7XG4gIGlmKHJlY29yZC5kKXJldHVybjtcbiAgcmVjb3JkLmQgPSB0cnVlO1xuICByZWNvcmQgPSByZWNvcmQuciB8fCByZWNvcmQ7IC8vIHVud3JhcFxuICByZWNvcmQudiA9IHZhbHVlO1xuICByZWNvcmQucyA9IDI7XG4gIHJlY29yZC5hID0gcmVjb3JkLmMuc2xpY2UoKTtcbiAgbm90aWZ5KHJlY29yZCwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcmVjb3JkID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocmVjb3JkLmQpcmV0dXJuO1xuICByZWNvcmQuZCA9IHRydWU7XG4gIHJlY29yZCA9IHJlY29yZC5yIHx8IHJlY29yZDsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocmVjb3JkLnAgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBhc2FwKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge3I6IHJlY29yZCwgZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY29yZC52ID0gdmFsdWU7XG4gICAgICByZWNvcmQucyA9IDE7XG4gICAgICBub3RpZnkocmVjb3JkLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7cjogcmVjb3JkLCBkOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gIFAgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIHZhciByZWNvcmQgPSB0aGlzLl9kID0ge1xuICAgICAgcDogc3RyaWN0TmV3KHRoaXMsIFAsIFBST01JU0UpLCAgICAgICAgIC8vIDwtIHByb21pc2VcbiAgICAgIGM6IFtdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICAgIGE6IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgICAgczogMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgICBkOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gZG9uZVxuICAgICAgdjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICBoOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gaGFuZGxlZCByZWplY3Rpb25cbiAgICAgIG46IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHJlY29yZCwgMSksIGN0eCgkcmVqZWN0LCByZWNvcmQsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwocmVjb3JkLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgcmVxdWlyZSgnLi8kLnJlZGVmaW5lLWFsbCcpKFAucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgUCkpXG4gICAgICAgICwgcHJvbWlzZSAgPSByZWFjdGlvbi5wcm9taXNlXG4gICAgICAgICwgcmVjb3JkICAgPSB0aGlzLl9kO1xuICAgICAgcmVhY3Rpb24ub2sgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlY29yZC5jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYocmVjb3JkLmEpcmVjb3JkLmEucHVzaChyZWFjdGlvbik7XG4gICAgICBpZihyZWNvcmQucylub3RpZnkocmVjb3JkLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6IFB9KTtcbnJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpKFAsIFBST01JU0UpO1xucmVxdWlyZSgnLi8kLnNldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi8kLmNvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCB0ZXN0UmVzb2x2ZSh0cnVlKSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiBQICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vJC5pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICBQLmFsbChpdGVyKVsnY2F0Y2gnXShmdW5jdGlvbigpe30pO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSBnZXRDb25zdHJ1Y3Rvcih0aGlzKVxuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0XG4gICAgICAsIHZhbHVlcyAgICAgPSBbXTtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCB2YWx1ZXMucHVzaCwgdmFsdWVzKTtcbiAgICAgIHZhciByZW1haW5pbmcgPSB2YWx1ZXMubGVuZ3RoXG4gICAgICAgICwgcmVzdWx0cyAgID0gQXJyYXkocmVtYWluaW5nKTtcbiAgICAgIGlmKHJlbWFpbmluZykkLmVhY2guY2FsbCh2YWx1ZXMsIGZ1bmN0aW9uKHByb21pc2UsIGluZGV4KXtcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHJlc3VsdHNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgZWxzZSByZXNvbHZlKHJlc3VsdHMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gZ2V0Q29uc3RydWN0b3IodGhpcylcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIDIzLjIgU2V0IE9iamVjdHNcbnJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uJykoJ1NldCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBTZXQoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjIuMy4xIFNldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxuICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcpOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU2V0Jywge3RvSlNPTjogcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24tdG8tanNvbicpKCdTZXQnKX0pOyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xuSXRlcmF0b3JzLk5vZGVMaXN0ID0gSXRlcmF0b3JzLkhUTUxDb2xsZWN0aW9uID0gSXRlcmF0b3JzLkFycmF5OyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnaXMtZnVuY3Rpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvckVhY2hcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuXG5mdW5jdGlvbiBmb3JFYWNoKGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKGl0ZXJhdG9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpdGVyYXRvciBtdXN0IGJlIGEgZnVuY3Rpb24nKVxuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xuICAgICAgICBjb250ZXh0ID0gdGhpc1xuICAgIH1cbiAgICBcbiAgICBpZiAodG9TdHJpbmcuY2FsbChsaXN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJylcbiAgICAgICAgZm9yRWFjaEFycmF5KGxpc3QsIGl0ZXJhdG9yLCBjb250ZXh0KVxuICAgIGVsc2UgaWYgKHR5cGVvZiBsaXN0ID09PSAnc3RyaW5nJylcbiAgICAgICAgZm9yRWFjaFN0cmluZyhsaXN0LCBpdGVyYXRvciwgY29udGV4dClcbiAgICBlbHNlXG4gICAgICAgIGZvckVhY2hPYmplY3QobGlzdCwgaXRlcmF0b3IsIGNvbnRleHQpXG59XG5cbmZ1bmN0aW9uIGZvckVhY2hBcnJheShhcnJheSwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksIGkpKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIGFycmF5W2ldLCBpLCBhcnJheSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9yRWFjaFN0cmluZyhzdHJpbmcsIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0cmluZy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAvLyBubyBzdWNoIHRoaW5nIGFzIGEgc3BhcnNlIHN0cmluZy5cbiAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBzdHJpbmcuY2hhckF0KGkpLCBpLCBzdHJpbmcpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JFYWNoT2JqZWN0KG9iamVjdCwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBrIGluIG9iamVjdCkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGspKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9iamVjdFtrXSwgaywgb2JqZWN0KVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBzZWxmO1xufSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHt9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxuZnVuY3Rpb24gaXNGdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHN0cmluZyA9IHRvU3RyaW5nLmNhbGwoZm4pXG4gIHJldHVybiBzdHJpbmcgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfHxcbiAgICAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHN0cmluZyAhPT0gJ1tvYmplY3QgUmVnRXhwXScpIHx8XG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgIC8vIElFOCBhbmQgYmVsb3dcbiAgICAgKGZuID09PSB3aW5kb3cuc2V0VGltZW91dCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5hbGVydCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5jb25maXJtIHx8XG4gICAgICBmbiA9PT0gd2luZG93LnByb21wdCkpXG59O1xuIiwidmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbiAgLCBmb3JFYWNoID0gcmVxdWlyZSgnZm9yLWVhY2gnKVxuICAsIGlzQXJyYXkgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGhlYWRlcnMpIHtcbiAgaWYgKCFoZWFkZXJzKVxuICAgIHJldHVybiB7fVxuXG4gIHZhciByZXN1bHQgPSB7fVxuXG4gIGZvckVhY2goXG4gICAgICB0cmltKGhlYWRlcnMpLnNwbGl0KCdcXG4nKVxuICAgICwgZnVuY3Rpb24gKHJvdykge1xuICAgICAgICB2YXIgaW5kZXggPSByb3cuaW5kZXhPZignOicpXG4gICAgICAgICAgLCBrZXkgPSB0cmltKHJvdy5zbGljZSgwLCBpbmRleCkpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAsIHZhbHVlID0gdHJpbShyb3cuc2xpY2UoaW5kZXggKyAxKSlcblxuICAgICAgICBpZiAodHlwZW9mKHJlc3VsdFtrZXldKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlXG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShyZXN1bHRba2V5XSkpIHtcbiAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gWyByZXN1bHRba2V5XSwgdmFsdWUgXVxuICAgICAgICB9XG4gICAgICB9XG4gIClcblxuICByZXR1cm4gcmVzdWx0XG59IiwiXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0cmltO1xuXG5mdW5jdGlvbiB0cmltKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuXG5leHBvcnRzLmxlZnQgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpO1xufTtcblxuZXhwb3J0cy5yaWdodCA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgd2luZG93ID0gcmVxdWlyZShcImdsb2JhbC93aW5kb3dcIilcbnZhciBvbmNlID0gcmVxdWlyZShcIm9uY2VcIilcbnZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZShcImlzLWZ1bmN0aW9uXCIpXG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZShcInBhcnNlLWhlYWRlcnNcIilcbnZhciB4dGVuZCA9IHJlcXVpcmUoXCJ4dGVuZFwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVhIUlxuY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0ID0gd2luZG93LlhNTEh0dHBSZXF1ZXN0IHx8IG5vb3BcbmNyZWF0ZVhIUi5YRG9tYWluUmVxdWVzdCA9IFwid2l0aENyZWRlbnRpYWxzXCIgaW4gKG5ldyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QoKSkgPyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QgOiB3aW5kb3cuWERvbWFpblJlcXVlc3RcblxuZm9yRWFjaEFycmF5KFtcImdldFwiLCBcInB1dFwiLCBcInBvc3RcIiwgXCJwYXRjaFwiLCBcImhlYWRcIiwgXCJkZWxldGVcIl0sIGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIGNyZWF0ZVhIUlttZXRob2QgPT09IFwiZGVsZXRlXCIgPyBcImRlbFwiIDogbWV0aG9kXSA9IGZ1bmN0aW9uKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgb3B0aW9ucyA9IGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjaylcbiAgICAgICAgb3B0aW9ucy5tZXRob2QgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgICAgICByZXR1cm4gX2NyZWF0ZVhIUihvcHRpb25zKVxuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGZvckVhY2hBcnJheShhcnJheSwgaXRlcmF0b3IpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZXJhdG9yKGFycmF5W2ldKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNFbXB0eShvYmope1xuICAgIGZvcih2YXIgaSBpbiBvYmope1xuICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoaSkpIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcGFyYW1zID0gdXJpXG5cbiAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zKSkge1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnNcbiAgICAgICAgaWYgKHR5cGVvZiB1cmkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IHt1cmk6dXJpfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zID0geHRlbmQob3B0aW9ucywge3VyaTogdXJpfSlcbiAgICB9XG5cbiAgICBwYXJhbXMuY2FsbGJhY2sgPSBjYWxsYmFja1xuICAgIHJldHVybiBwYXJhbXNcbn1cblxuZnVuY3Rpb24gY3JlYXRlWEhSKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBvcHRpb25zID0gaW5pdFBhcmFtcyh1cmksIG9wdGlvbnMsIGNhbGxiYWNrKVxuICAgIHJldHVybiBfY3JlYXRlWEhSKG9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVYSFIob3B0aW9ucykge1xuICAgIHZhciBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2tcbiAgICBpZih0eXBlb2YgY2FsbGJhY2sgPT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYWxsYmFjayBhcmd1bWVudCBtaXNzaW5nXCIpXG4gICAgfVxuICAgIGNhbGxiYWNrID0gb25jZShjYWxsYmFjaylcblxuICAgIGZ1bmN0aW9uIHJlYWR5c3RhdGVjaGFuZ2UoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgbG9hZEZ1bmMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgICAgICAgLy8gQ2hyb21lIHdpdGggcmVxdWVzdFR5cGU9YmxvYiB0aHJvd3MgZXJyb3JzIGFycm91bmQgd2hlbiBldmVuIHRlc3RpbmcgYWNjZXNzIHRvIHJlc3BvbnNlVGV4dFxuICAgICAgICB2YXIgYm9keSA9IHVuZGVmaW5lZFxuXG4gICAgICAgIGlmICh4aHIucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VcbiAgICAgICAgfSBlbHNlIGlmICh4aHIucmVzcG9uc2VUeXBlID09PSBcInRleHRcIiB8fCAheGhyLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICAgICAgYm9keSA9IHhoci5yZXNwb25zZVRleHQgfHwgeGhyLnJlc3BvbnNlWE1MXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNKc29uKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKGJvZHkpXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvZHlcbiAgICB9XG5cbiAgICB2YXIgZmFpbHVyZVJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgIGJvZHk6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiAwLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgICAgIHVybDogdXJpLFxuICAgICAgICAgICAgICAgIHJhd1JlcXVlc3Q6IHhoclxuICAgICAgICAgICAgfVxuXG4gICAgZnVuY3Rpb24gZXJyb3JGdW5jKGV2dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFRpbWVyKVxuICAgICAgICBpZighKGV2dCBpbnN0YW5jZW9mIEVycm9yKSl7XG4gICAgICAgICAgICBldnQgPSBuZXcgRXJyb3IoXCJcIiArIChldnQgfHwgXCJVbmtub3duIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpIClcbiAgICAgICAgfVxuICAgICAgICBldnQuc3RhdHVzQ29kZSA9IDBcbiAgICAgICAgY2FsbGJhY2soZXZ0LCBmYWlsdXJlUmVzcG9uc2UpXG4gICAgfVxuXG4gICAgLy8gd2lsbCBsb2FkIHRoZSBkYXRhICYgcHJvY2VzcyB0aGUgcmVzcG9uc2UgaW4gYSBzcGVjaWFsIHJlc3BvbnNlIG9iamVjdFxuICAgIGZ1bmN0aW9uIGxvYWRGdW5jKCkge1xuICAgICAgICBpZiAoYWJvcnRlZCkgcmV0dXJuXG4gICAgICAgIHZhciBzdGF0dXNcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRUaW1lcilcbiAgICAgICAgaWYob3B0aW9ucy51c2VYRFIgJiYgeGhyLnN0YXR1cz09PXVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy9JRTggQ09SUyBHRVQgc3VjY2Vzc2Z1bCByZXNwb25zZSBkb2Vzbid0IGhhdmUgYSBzdGF0dXMgZmllbGQsIGJ1dCBib2R5IGlzIGZpbmVcbiAgICAgICAgICAgIHN0YXR1cyA9IDIwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdHVzID0gKHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzKVxuICAgICAgICB9XG4gICAgICAgIHZhciByZXNwb25zZSA9IGZhaWx1cmVSZXNwb25zZVxuICAgICAgICB2YXIgZXJyID0gbnVsbFxuXG4gICAgICAgIGlmIChzdGF0dXMgIT09IDApe1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgYm9keTogZ2V0Qm9keSgpLFxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHN0YXR1cyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgICAgICAgICByYXdSZXF1ZXN0OiB4aHJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMpeyAvL3JlbWVtYmVyIHhociBjYW4gaW4gZmFjdCBiZSBYRFIgZm9yIENPUlMgaW4gSUVcbiAgICAgICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzID0gcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVyciA9IG5ldyBFcnJvcihcIkludGVybmFsIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpXG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2soZXJyLCByZXNwb25zZSwgcmVzcG9uc2UuYm9keSlcblxuICAgIH1cblxuICAgIHZhciB4aHIgPSBvcHRpb25zLnhociB8fCBudWxsXG5cbiAgICBpZiAoIXhocikge1xuICAgICAgICBpZiAob3B0aW9ucy5jb3JzIHx8IG9wdGlvbnMudXNlWERSKSB7XG4gICAgICAgICAgICB4aHIgPSBuZXcgY3JlYXRlWEhSLlhEb21haW5SZXF1ZXN0KClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB4aHIgPSBuZXcgY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlcbiAgICB2YXIgYWJvcnRlZFxuICAgIHZhciB1cmkgPSB4aHIudXJsID0gb3B0aW9ucy51cmkgfHwgb3B0aW9ucy51cmxcbiAgICB2YXIgbWV0aG9kID0geGhyLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IFwiR0VUXCJcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keSB8fCBvcHRpb25zLmRhdGEgfHwgbnVsbFxuICAgIHZhciBoZWFkZXJzID0geGhyLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge31cbiAgICB2YXIgc3luYyA9ICEhb3B0aW9ucy5zeW5jXG4gICAgdmFyIGlzSnNvbiA9IGZhbHNlXG4gICAgdmFyIHRpbWVvdXRUaW1lclxuXG4gICAgaWYgKFwianNvblwiIGluIG9wdGlvbnMpIHtcbiAgICAgICAgaXNKc29uID0gdHJ1ZVxuICAgICAgICBoZWFkZXJzW1wiYWNjZXB0XCJdIHx8IGhlYWRlcnNbXCJBY2NlcHRcIl0gfHwgKGhlYWRlcnNbXCJBY2NlcHRcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIikgLy9Eb24ndCBvdmVycmlkZSBleGlzdGluZyBhY2NlcHQgaGVhZGVyIGRlY2xhcmVkIGJ5IHVzZXJcbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gXCJHRVRcIiAmJiBtZXRob2QgIT09IFwiSEVBRFwiKSB7XG4gICAgICAgICAgICBoZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gfHwgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIikgLy9Eb24ndCBvdmVycmlkZSBleGlzdGluZyBhY2NlcHQgaGVhZGVyIGRlY2xhcmVkIGJ5IHVzZXJcbiAgICAgICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gcmVhZHlzdGF0ZWNoYW5nZVxuICAgIHhoci5vbmxvYWQgPSBsb2FkRnVuY1xuICAgIHhoci5vbmVycm9yID0gZXJyb3JGdW5jXG4gICAgLy8gSUU5IG11c3QgaGF2ZSBvbnByb2dyZXNzIGJlIHNldCB0byBhIHVuaXF1ZSBmdW5jdGlvbi5cbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSUUgbXVzdCBkaWVcbiAgICB9XG4gICAgeGhyLm9udGltZW91dCA9IGVycm9yRnVuY1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJpLCAhc3luYywgb3B0aW9ucy51c2VybmFtZSwgb3B0aW9ucy5wYXNzd29yZClcbiAgICAvL2hhcyB0byBiZSBhZnRlciBvcGVuXG4gICAgaWYoIXN5bmMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9ICEhb3B0aW9ucy53aXRoQ3JlZGVudGlhbHNcbiAgICB9XG4gICAgLy8gQ2Fubm90IHNldCB0aW1lb3V0IHdpdGggc3luYyByZXF1ZXN0XG4gICAgLy8gbm90IHNldHRpbmcgdGltZW91dCBvbiB0aGUgeGhyIG9iamVjdCwgYmVjYXVzZSBvZiBvbGQgd2Via2l0cyBldGMuIG5vdCBoYW5kbGluZyB0aGF0IGNvcnJlY3RseVxuICAgIC8vIGJvdGggbnBtJ3MgcmVxdWVzdCBhbmQganF1ZXJ5IDEueCB1c2UgdGhpcyBraW5kIG9mIHRpbWVvdXQsIHNvIHRoaXMgaXMgYmVpbmcgY29uc2lzdGVudFxuICAgIGlmICghc3luYyAmJiBvcHRpb25zLnRpbWVvdXQgPiAwICkge1xuICAgICAgICB0aW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhYm9ydGVkPXRydWUvL0lFOSBtYXkgc3RpbGwgY2FsbCByZWFkeXN0YXRlY2hhbmdlXG4gICAgICAgICAgICB4aHIuYWJvcnQoXCJ0aW1lb3V0XCIpXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcihcIlhNTEh0dHBSZXF1ZXN0IHRpbWVvdXRcIilcbiAgICAgICAgICAgIGUuY29kZSA9IFwiRVRJTUVET1VUXCJcbiAgICAgICAgICAgIGVycm9yRnVuYyhlKVxuICAgICAgICB9LCBvcHRpb25zLnRpbWVvdXQgKVxuICAgIH1cblxuICAgIGlmICh4aHIuc2V0UmVxdWVzdEhlYWRlcikge1xuICAgICAgICBmb3Ioa2V5IGluIGhlYWRlcnMpe1xuICAgICAgICAgICAgaWYoaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5oZWFkZXJzICYmICFpc0VtcHR5KG9wdGlvbnMuaGVhZGVycykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGVhZGVycyBjYW5ub3QgYmUgc2V0IG9uIGFuIFhEb21haW5SZXF1ZXN0IG9iamVjdFwiKVxuICAgIH1cblxuICAgIGlmIChcInJlc3BvbnNlVHlwZVwiIGluIG9wdGlvbnMpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlXG4gICAgfVxuXG4gICAgaWYgKFwiYmVmb3JlU2VuZFwiIGluIG9wdGlvbnMgJiZcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMuYmVmb3JlU2VuZCA9PT0gXCJmdW5jdGlvblwiXG4gICAgKSB7XG4gICAgICAgIG9wdGlvbnMuYmVmb3JlU2VuZCh4aHIpXG4gICAgfVxuXG4gICAgeGhyLnNlbmQoYm9keSlcblxuICAgIHJldHVybiB4aHJcblxuXG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuIiwibW9kdWxlLmV4cG9ydHMgPSBvbmNlXG5cbm9uY2UucHJvdG8gPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bmN0aW9uLnByb3RvdHlwZSwgJ29uY2UnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBvbmNlKHRoaXMpXG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIG9uY2UgKGZuKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYWxsZWQpIHJldHVyblxuICAgIGNhbGxlZCA9IHRydWVcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwiLypcblRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG5Db3B5cmlnaHQgKGMpIDIwMTUgUGF0cmljaW8gR29uemFsZXogVml2byAoIGh0dHA6Ly93d3cucGF0cmljaW9nb256YWxlenZpdm8uY29tIClcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZlxudGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgJ1NvZnR3YXJlJyksIHRvIGRlYWwgaW5cbnRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbnVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG50aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG5zdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5jb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgJ0FTIElTJywgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1NcbkZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG5JTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbmltcG9ydCB4aHIgZnJvbSAneGhyJztcblxuaW1wb3J0IHsgc2V0dXBXZWJHTCwgY3JlYXRlU2hhZGVyLCBjcmVhdGVQcm9ncmFtLCBwYXJzZVVuaWZvcm1zLCBsb2FkVGV4dHVyZSB9IGZyb20gJy4vZ2wvZ2wnO1xuaW1wb3J0IFRleHR1cmUgZnJvbSAnLi9nbC9UZXh0dXJlJztcblxuaW1wb3J0IHsgaXNDYW52YXNWaXNpYmxlLCBpc0RpZmYgfSBmcm9tICcuL3Rvb2xzL2NvbW1vbic7XG5pbXBvcnQgeyBzdWJzY3JpYmVNaXhpbiB9IGZyb20gJy4vdG9vbHMvbWl4aW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbHNsQ2FudmFzIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIG9wdGlvbnMpIHtcbiAgICAgICAgc3Vic2NyaWJlTWl4aW4odGhpcyk7XG5cbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmdsID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnByb2dyYW0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudGV4dHVyZXMgPSB7fTtcbiAgICAgICAgdGhpcy51bmlmb3JtcyA9IHt9O1xuICAgICAgICB0aGlzLnZibyA9IHt9O1xuICAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnZlcnRleFN0cmluZyA9IG9wdGlvbnMudmVydGV4U3RyaW5nIHx8IGBcbiNpZmRlZiBHTF9FU1xucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG4jZW5kaWZcblxuYXR0cmlidXRlIHZlYzIgYV9wb3NpdGlvbjtcbmF0dHJpYnV0ZSB2ZWMyIGFfdGV4Y29vcmQ7XG5cbnZhcnlpbmcgdmVjMiB2X3RleGNvb3JkO1xuXG52b2lkIG1haW4oKSB7XG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KGFfcG9zaXRpb24sIDAuMCwgMS4wKTtcbiAgICB2X3RleGNvb3JkID0gYV90ZXhjb29yZDtcbn1cbmA7XG4gICAgICAgIHRoaXMuZnJhZ21lbnRTdHJpbmcgPSBvcHRpb25zLmZyYWdtZW50U3RyaW5nIHx8IGBcbiNpZmRlZiBHTF9FU1xucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG4jZW5kaWZcblxudmFyeWluZyB2ZWMyIHZfdGV4Y29vcmQ7XG5cbnZvaWQgbWFpbigpe1xuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMC4wKTtcbn1cbmA7XG5cbiAgICAgICAgLy8gR0wgQ29udGV4dFxuICAgICAgICBsZXQgZ2wgPSBzZXR1cFdlYkdMKGNhbnZhcywgb3B0aW9ucyk7XG4gICAgICAgIGlmICghZ2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMudGltZUxvYWQgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmZvcmNlUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBBbGxvdyBhbHBoYVxuICAgICAgICBjYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgfHwgJ3JnYmEoMSwxLDEsMCknO1xuXG4gICAgICAgIC8vIExvYWQgc2hhZGVyXG4gICAgICAgIGlmIChjYW52YXMuaGFzQXR0cmlidXRlKCdkYXRhLWZyYWdtZW50JykpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhZ21lbnRTdHJpbmcgPSBjYW52YXMuZ2V0QXR0cmlidXRlKCdkYXRhLWZyYWdtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2FudmFzLmhhc0F0dHJpYnV0ZSgnZGF0YS1mcmFnbWVudC11cmwnKSkge1xuICAgICAgICAgICAgbGV0IHNvdXJjZSA9IGNhbnZhcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZnJhZ21lbnQtdXJsJyk7XG4gICAgICAgICAgICB4aHIuZ2V0KHNvdXJjZSwgKGVycm9yLCByZXNwb25zZSwgYm9keSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZChib2R5LCB0aGlzLnZlcnRleFN0cmluZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExvYWQgc2hhZGVyXG4gICAgICAgIGlmIChjYW52YXMuaGFzQXR0cmlidXRlKCdkYXRhLXZlcnRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLnZlcnRleFN0cmluZyA9IGNhbnZhcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmVydGV4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2FudmFzLmhhc0F0dHJpYnV0ZSgnZGF0YS12ZXJ0ZXgtdXJsJykpIHtcbiAgICAgICAgICAgIGxldCBzb3VyY2UgPSBjYW52YXMuZ2V0QXR0cmlidXRlKCdkYXRhLXZlcnRleC11cmwnKTtcbiAgICAgICAgICAgIHhoci5nZXQoc291cmNlLCAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkKHRoaXMuZnJhZ21lbnRTdHJpbmcsIGJvZHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWQoKTtcblxuICAgICAgICBpZiAoIXRoaXMucHJvZ3JhbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmaW5lIFZlcnRleCBidWZmZXJcbiAgICAgICAgbGV0IHRleENvb3Jkc0xvYyA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgJ2FfdGV4Y29vcmQnKTtcbiAgICAgICAgdGhpcy52Ym8udGV4Q29vcmRzID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmJvLnRleENvb3Jkcyk7XG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWzAuMCwgMC4wLCAxLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCwgMS4wLCAxLjAsIDAuMCwgMS4wLCAxLjBdKSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRleENvb3Jkc0xvYyk7XG4gICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcih0ZXhDb29yZHNMb2MsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG5cbiAgICAgICAgbGV0IHZlcnRpY2VzTG9jID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9ncmFtLCAnYV9wb3NpdGlvbicpO1xuICAgICAgICB0aGlzLnZiby52ZXJ0aWNlcyA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZiby52ZXJ0aWNlcyk7XG4gICAgICAgIHRoaXMuZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWy0xLjAsIC0xLjAsIDEuMCwgLTEuMCwgLTEuMCwgMS4wLCAtMS4wLCAxLjAsIDEuMCwgLTEuMCwgMS4wLCAxLjBdKSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHZlcnRpY2VzTG9jKTtcbiAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHZlcnRpY2VzTG9jLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgICAgIC8vIGxvYWQgVEVYVFVSRVNcbiAgICAgICAgaWYgKGNhbnZhcy5oYXNBdHRyaWJ1dGUoJ2RhdGEtdGV4dHVyZXMnKSkge1xuICAgICAgICAgICAgbGV0IGltZ0xpc3QgPSBjYW52YXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRleHR1cmVzJykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGZvciAobGV0IG5JbWcgaW4gaW1nTGlzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VW5pZm9ybSgndV90ZXgnICsgbkltZywgaW1nTGlzdFtuSW1nXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBFVkVOVFNcbiAgICAgICAgbGV0IG1vdXNlID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICAgICAgICAgIG1vdXNlLnggPSBlLmNsaWVudFggfHwgZS5wYWdlWDtcbiAgICAgICAgICAgIG1vdXNlLnkgPSBlLmNsaWVudFkgfHwgZS5wYWdlWTtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIGxldCBzYW5kYm94ID0gdGhpcztcbiAgICAgICAgZnVuY3Rpb24gUmVuZGVyTG9vcCgpIHtcbiAgICAgICAgICAgIHNhbmRib3guc2V0TW91c2UobW91c2UpO1xuICAgICAgICAgICAgc2FuZGJveC5yZW5kZXIoKTtcbiAgICAgICAgICAgIHNhbmRib3guZm9yY2VSZW5kZXIgPSBzYW5kYm94LnJlc2l6ZSgpO1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShSZW5kZXJMb29wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0YXJ0XG4gICAgICAgIHRoaXMuc2V0TW91c2UoeyB4OiAwLCB5OiAwIH0pO1xuICAgICAgICBSZW5kZXJMb29wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IHRleCBpbiB0aGlzLnRleHR1cmVzKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGV4KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRleHR1cmVzID0ge307XG4gICAgICAgIGZvciAobGV0IGF0dCBpbiB0aGlzLmF0dHJpYnMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlQnVmZmVyKHRoaXMuYXR0cmlic1thdHRdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0obnVsbCk7XG4gICAgICAgIHRoaXMuZ2wuZGVsZXRlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgICAgICB0aGlzLmdsID0gbnVsbDtcbiAgICB9XG5cbiAgICBsb2FkKGZyYWdTdHJpbmcsIHZlcnRTdHJpbmcpIHtcbiAgICAgICAgLy8gTG9hZCB2ZXJ0ZXggc2hhZGVyIGlmIHRoZXJlIGlzIG9uZVxuICAgICAgICBpZiAodmVydFN0cmluZykge1xuICAgICAgICAgICAgdGhpcy52ZXJ0ZXhTdHJpbmcgPSB2ZXJ0U3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTG9hZCBmcmFnbWVudCBzaGFkZXIgaWYgdGhlcmUgaXMgb25lXG4gICAgICAgIGlmIChmcmFnU3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmZyYWdtZW50U3RyaW5nID0gZnJhZ1N0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IG5UaW1lcyA9ICh0aGlzLmZyYWdtZW50U3RyaW5nLm1hdGNoKC91X3RpbWUvZykgfHwgW10pLmxlbmd0aDtcbiAgICAgICAgbGV0IG5Nb3VzZSA9ICh0aGlzLmZyYWdtZW50U3RyaW5nLm1hdGNoKC91X21vdXNlL2cpIHx8IFtdKS5sZW5ndGg7XG4gICAgICAgIHRoaXMuYW5pbWF0ZWQgPSBuVGltZXMgPiAxIHx8IG5Nb3VzZSA+IDE7XG5cbiAgICAgICAgbGV0IG5UZXh0dXJlcyA9IHRoaXMuZnJhZ21lbnRTdHJpbmcuc2VhcmNoKC9zYW1wbGVyMkQvZyk7XG4gICAgICAgIGlmIChuVGV4dHVyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDaGVjayBmb3IgdGV4dHVyZXMnKTtcbiAgICAgICAgICAgIGxldCBsaW5lcyA9IHRoaXMuZnJhZ21lbnRTdHJpbmcuc3BsaXQoJ1xcbicpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGxpbmVzW2ldLm1hdGNoKC91bmlmb3JtXFxzKnNhbXBsZXIyRFxccyooW1xcd10qKTtcXHMqXFwvXFwvXFxzKihbXFx3fFxcOlxcL1xcL3wuXSopL2kpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXh0ID0gbWF0Y2hbMl0uc3BsaXQoJy4nKS5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoWzFdICYmICBtYXRjaFsyXSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIChleHQgPT09ICdqcGcnIHx8IGV4dCA9PT0gJ0pQRycgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICBleHQgPT09ICdqcGVnJyB8fCBleHQgPT09ICdKUEVHJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgIGV4dCA9PT0gJ3BuZycgfHwgZXh0ID09PSAnUE5HJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXQgdGV4dHVyZScsbWF0Y2hbMV0sbWF0Y2hbMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRVbmlmb3JtKG1hdGNoWzFdLCBtYXRjaFsyXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG1haW4gPSBsaW5lc1tpXS5tYXRjaCgvXFxzKnZvaWRcXHMqbWFpblxccyovZyk7XG4gICAgICAgICAgICAgICAgaWYgKG1haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0aGlzLCB0aGlzLnZlcnRleFN0cmluZywgdGhpcy5nbC5WRVJURVhfU0hBREVSKTtcbiAgICAgICAgbGV0IGZyYWdtZW50U2hhZGVyID0gY3JlYXRlU2hhZGVyKHRoaXMsIHRoaXMuZnJhZ21lbnRTdHJpbmcsIHRoaXMuZ2wuRlJBR01FTlRfU0hBREVSKTtcblxuICAgICAgICAvLyBJZiBGcmFnbWVudCBzaGFkZXIgZmFpbHMgbG9hZCBhIGVtcHR5IG9uZSB0byBzaWduIHRoZSBlcnJvclxuICAgICAgICBpZiAoIWZyYWdtZW50U2hhZGVyKSB7XG4gICAgICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNyZWF0ZVNoYWRlcih0aGlzLCAndm9pZCBtYWluKCl7XFxuXFx0Z2xfRnJhZ0NvbG9yID0gdmVjNCgxLjApO1xcbn0nLCB0aGlzLmdsLkZSQUdNRU5UX1NIQURFUik7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgYW5kIHVzZSBwcm9ncmFtXG4gICAgICAgIGxldCBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh0aGlzLCBbdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcl0pOy8vLCBbMCwxXSxbJ2FfdGV4Y29vcmQnLCdhX3Bvc2l0aW9uJ10pO1xuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICAgICAgLy8gRGVsZXRlIHNoYWRlcnNcbiAgICAgICAgLy8gdGhpcy5nbC5kZXRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcbiAgICAgICAgLy8gdGhpcy5nbC5kZXRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xuICAgICAgICB0aGlzLmdsLmRlbGV0ZVNoYWRlcih2ZXJ0ZXhTaGFkZXIpO1xuICAgICAgICB0aGlzLmdsLmRlbGV0ZVNoYWRlcihmcmFnbWVudFNoYWRlcik7XG5cbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgdGhpcy5jaGFuZ2UgPSB0cnVlO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgZXZlbnRcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdsb2FkJywge30pO1xuXG4gICAgICAgIHRoaXMuZm9yY2VSZW5kZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIGxvYWRUZXh0dXJlIChuYW1lLCB1cmxFbGVtZW50T3JEYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB1cmxFbGVtZW50T3JEYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgb3B0aW9ucy51cmwgPSB1cmxFbGVtZW50T3JEYXRhO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB1cmxFbGVtZW50T3JEYXRhID09PSAnb2JqZWN0JyAmJiB1cmxFbGVtZW50T3JEYXRhLmRhdGEgJiYgdXJsRWxlbWVudE9yRGF0YS53aWR0aCAmJiB1cmxFbGVtZW50T3JEYXRhLmhlaWdodCkge1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0gdXJsRWxlbWVudE9yRGF0YS5kYXRhO1xuICAgICAgICAgICAgb3B0aW9ucy53aWR0aCA9IHVybEVsZW1lbnRPckRhdGEud2lkdGg7XG4gICAgICAgICAgICBvcHRpb25zLmhlaWdodCA9IHVybEVsZW1lbnRPckRhdGEuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB1cmxFbGVtZW50T3JEYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgb3B0aW9ucy5lbGVtZW50ID0gdXJsRWxlbWVudE9yRGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRleHR1cmVzW25hbWVdKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0dXJlc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZXNbbmFtZV0ubG9hZChvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVzW25hbWVdLm9uKCdsb2FkZWQnLCAoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcmNlUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZXNbbmFtZV0gPSBuZXcgVGV4dHVyZSh0aGlzLmdsLCBuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZXNbbmFtZV0ub24oJ2xvYWRlZCcsIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZVJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICByZWZyZXNoVW5pZm9ybXMoKSB7XG4gICAgICAgIHRoaXMudW5pZm9ybXMgPSB7fTtcbiAgICB9XG5cbiAgICBzZXRVbmlmb3JtKG5hbWUsIC4uLnZhbHVlKSB7XG4gICAgICAgIGxldCB1ID0ge307XG4gICAgICAgIHVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRVbmlmb3Jtcyh1KTtcbiAgICB9XG5cbiAgICBzZXRVbmlmb3Jtcyh1bmlmb3Jtcykge1xuICAgICAgICBsZXQgcGFyc2VkID0gcGFyc2VVbmlmb3Jtcyh1bmlmb3Jtcyk7XG4gICAgICAgIC8vIFNldCBlYWNoIHVuaWZvcm1cbiAgICAgICAgZm9yIChsZXQgdSBpbiBwYXJzZWQpIHtcbiAgICAgICAgICAgIGlmIChwYXJzZWRbdV0udHlwZSA9PT0gJ3NhbXBsZXIyRCcpIHtcbiAgICAgICAgICAgICAgICAvLyBGb3IgdGV4dHVyZXMsIHdlIG5lZWQgdG8gdHJhY2sgdGV4dHVyZSB1bml0cywgc28gd2UgaGF2ZSBhIHNwZWNpYWwgc2V0dGVyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51bmlmb3JtVGV4dHVyZShwYXJzZWRbdV0ubmFtZSwgcGFyc2VkW3VdLnZhbHVlWzBdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUZXh0dXJlKHBhcnNlZFt1XS5uYW1lLCBwYXJzZWRbdV0udmFsdWVbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bmlmb3JtKHBhcnNlZFt1XS5tZXRob2QsIHBhcnNlZFt1XS50eXBlLCBwYXJzZWRbdV0ubmFtZSwgcGFyc2VkW3VdLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmNlUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE1vdXNlKG1vdXNlKSB7XG4gICAgICAgIC8vIHNldCB0aGUgbW91c2UgdW5pZm9ybVxuICAgICAgICBsZXQgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAobW91c2UgJiZcbiAgICAgICAgICAgIG1vdXNlLnggJiYgbW91c2UueCA+PSByZWN0LmxlZnQgJiYgbW91c2UueCA8PSByZWN0LnJpZ2h0ICYmXG4gICAgICAgICAgICBtb3VzZS55ICYmIG1vdXNlLnkgPj0gcmVjdC50b3AgJiYgbW91c2UueSA8PSByZWN0LmJvdHRvbSkge1xuICAgICAgICAgICAgdGhpcy51bmlmb3JtKCcyZicsICd2ZWMyJywgJ3VfbW91c2UnLCBtb3VzZS54IC0gcmVjdC5sZWZ0LCB0aGlzLmNhbnZhcy5oZWlnaHQgLSAobW91c2UueSAtIHJlY3QudG9wKSk7XG4gICAgICAgIH1cbiAgICB9XG5cblx0Ly8gZXg6IHByb2dyYW0udW5pZm9ybSgnM2YnLCAncG9zaXRpb24nLCB4LCB5LCB6KTtcbiAgICB1bmlmb3JtIChtZXRob2QsIHR5cGUsIG5hbWUsIC4uLnZhbHVlKSB7IC8vICd2YWx1ZScgaXMgYSBtZXRob2QtYXBwcm9wcmlhdGUgYXJndW1lbnRzIGxpc3RcbiAgICAgICAgdGhpcy51bmlmb3Jtc1tuYW1lXSA9IHRoaXMudW5pZm9ybXNbbmFtZV0gfHwge307XG4gICAgICAgIGxldCB1bmlmb3JtID0gdGhpcy51bmlmb3Jtc1tuYW1lXTtcbiAgICAgICAgbGV0IGNoYW5nZSA9IGlzRGlmZih1bmlmb3JtLnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgIGlmIChjaGFuZ2UgfHwgdGhpcy5jaGFuZ2UgfHwgdW5pZm9ybS5sb2NhdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHVuaWZvcm0udmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdW5pZm9ybS5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHVuaWZvcm0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHVuaWZvcm0udHlwZSA9IHR5cGU7XG4gICAgICAgICAgICB1bmlmb3JtLm1ldGhvZCA9ICd1bmlmb3JtJyArIG1ldGhvZDtcbiAgICAgICAgICAgIHVuaWZvcm0ubG9jYXRpb24gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sIG5hbWUpO1xuXG4gICAgICAgICAgICB0aGlzLmdsW3VuaWZvcm0ubWV0aG9kXS5hcHBseSh0aGlzLmdsLCBbdW5pZm9ybS5sb2NhdGlvbl0uY29uY2F0KHVuaWZvcm0udmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuaWZvcm1UZXh0dXJlKG5hbWUsIHRleHR1cmUsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMudGV4dHVyZXNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkVGV4dHVyZShuYW1lLCB0ZXh0dXJlLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudW5pZm9ybSgnMWknLCAnc2FtcGxlcjJEJywgbmFtZSwgdGhpcy50ZXh1cmVJbmRleCk7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmVzW25hbWVdLmJpbmQodGhpcy50ZXh1cmVJbmRleCk7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm0oJzJmJywgJ3ZlYzInLCBuYW1lICsgJ1Jlc29sdXRpb24nLCB0aGlzLnRleHR1cmVzW25hbWVdLndpZHRoLCB0aGlzLnRleHR1cmVzW25hbWVdLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLnRleHVyZUluZGV4Kys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLndpZHRoICE9PSB0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCB8fFxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgIT09IHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgbGV0IHJlYWxUb0NTU1BpeGVscyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG5cbiAgICAgICAgICAgIC8vIExvb2t1cCB0aGUgc2l6ZSB0aGUgYnJvd3NlciBpcyBkaXNwbGF5aW5nIHRoZSBjYW52YXMgaW4gQ1NTIHBpeGVsc1xuICAgICAgICAgICAgLy8gYW5kIGNvbXB1dGUgYSBzaXplIG5lZWRlZCB0byBtYWtlIG91ciBkcmF3aW5nYnVmZmVyIG1hdGNoIGl0IGluXG4gICAgICAgICAgICAvLyBkZXZpY2UgcGl4ZWxzLlxuICAgICAgICAgICAgbGV0IGRpc3BsYXlXaWR0aCA9IE1hdGguZmxvb3IodGhpcy5nbC5jYW52YXMuY2xpZW50V2lkdGggKiByZWFsVG9DU1NQaXhlbHMpO1xuICAgICAgICAgICAgbGV0IGRpc3BsYXlIZWlnaHQgPSBNYXRoLmZsb29yKHRoaXMuZ2wuY2FudmFzLmNsaWVudEhlaWdodCAqIHJlYWxUb0NTU1BpeGVscyk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjYW52YXMgaXMgbm90IHRoZSBzYW1lIHNpemUuXG4gICAgICAgICAgICBpZiAodGhpcy5nbC5jYW52YXMud2lkdGggIT09IGRpc3BsYXlXaWR0aCB8fFxuICAgICAgICAgICAgICAgIHRoaXMuZ2wuY2FudmFzLmhlaWdodCAhPT0gZGlzcGxheUhlaWdodCkge1xuICAgICAgICAgICAgICAgIC8vIE1ha2UgdGhlIGNhbnZhcyB0aGUgc2FtZSBzaXplXG4gICAgICAgICAgICAgICAgdGhpcy5nbC5jYW52YXMud2lkdGggPSBkaXNwbGF5V2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5jYW52YXMuaGVpZ2h0ID0gZGlzcGxheUhlaWdodDtcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIHZpZXdwb3J0IHRvIG1hdGNoXG4gICAgICAgICAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLmdsLmNhbnZhcy53aWR0aCwgdGhpcy5nbC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuZ2wuZHJhd2luZ0J1ZmZlcldpZHRoLCB0aGlzLmdsLmRyYXdpbmdCdWZmZXJIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2FudmFzLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGlzQ2FudmFzVmlzaWJsZSh0aGlzLmNhbnZhcyk7XG4gICAgICAgIGlmICh0aGlzLmZvcmNlUmVuZGVyIHx8XG4gICAgICAgICAgICAodGhpcy5hbmltYXRlZCAmJiB0aGlzLnZpc2libGUgJiYgISB0aGlzLnBhdXNlZCkpIHtcbiAgICAgICAgICAgIC8vIHNldCB0aGUgdGltZSB1bmlmb3JtXG4gICAgICAgICAgICBsZXQgdGltZUZyYW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGxldCB0aW1lID0gKHRpbWVGcmFtZSAtIHRoaXMudGltZUxvYWQpIC8gMTAwMC4wO1xuICAgICAgICAgICAgdGhpcy51bmlmb3JtKCcxZicsICdmbG9hdCcsICd1X3RpbWUnLCB0aW1lKTtcblxuICAgICAgICAgICAgLy8gc2V0IHRoZSByZXNvbHV0aW9uIHVuaWZvcm1cbiAgICAgICAgICAgIHRoaXMudW5pZm9ybSgnMmYnLCAndmVjMicsICd1X3Jlc29sdXRpb24nLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAgICAgdGhpcy50ZXh1cmVJbmRleCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCB0ZXggaW4gdGhpcy50ZXh0dXJlcykge1xuICAgICAgICAgICAgICAgIHRoaXMudW5pZm9ybVRleHR1cmUodGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRHJhdyB0aGUgcmVjdGFuZ2xlLlxuICAgICAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzKHRoaXMuZ2wuVFJJQU5HTEVTLCAwLCA2KTtcblxuICAgICAgICAgICAgLy8gVHJpZ2dlciBldmVudFxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdyZW5kZXInLCB7fSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmZvcmNlUmVuZGVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXVzZSAoKSB7XG4gICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwbGF5ICgpIHtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2ZXJzaW9uKCkge1xuICAgICAgICByZXR1cm4gJzAuMC4xMSc7XG4gICAgfVxufVxuXG53aW5kb3cuR2xzbENhbnZhcyA9IEdsc2xDYW52YXM7XG5cbmZ1bmN0aW9uIGxvYWRBbGxHbHNsQ2FudmFzKCkge1xuICAgIHZhciBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2xzbENhbnZhcycpO1xuICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgd2luZG93Lmdsc2xDYW52YXNlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzYW5kYm94ID0gbmV3IEdsc2xDYW52YXMobGlzdFtpXSk7XG4gICAgICAgICAgICBpZiAoc2FuZGJveC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lmdsc2xDYW52YXNlcy5wdXNoKHNhbmRib3gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBsb2FkQWxsR2xzbENhbnZhcygpO1xufSk7XG4iLCIvLyBUZXh0dXJlIG1hbmFnZW1lbnRcbmltcG9ydCB7IGlzUG93ZXJPZjIgfSBmcm9tICcuLi90b29scy9jb21tb24nO1xuaW1wb3J0IHsgc3Vic2NyaWJlTWl4aW4gfSBmcm9tICcuLi90b29scy9taXhpbic7XG5cbi8vIEdMIHRleHR1cmUgd3JhcHBlciBvYmplY3QgZm9yIGtlZXBpbmcgdHJhY2sgb2YgYSBnbG9iYWwgc2V0IG9mIHRleHR1cmVzLCBrZXllZCBieSBhIHVuaXF1ZSB1c2VyLWRlZmluZWQgbmFtZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZSB7XG4gICAgY29uc3RydWN0b3IoZ2wsIG5hbWUsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdWJzY3JpYmVNaXhpbih0aGlzKTtcblxuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMudGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICAgICAgaWYgKHRoaXMudGV4dHVyZSkge1xuICAgICAgICAgICAgdGhpcy52YWxpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iaW5kKCk7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBudWxsO1xuICAgICAgICB0aGlzLnNvdXJjZVR5cGUgPSBudWxsO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBudWxsOyAvLyBhIFByb21pc2Ugb2JqZWN0IHRvIHRyYWNrIHRoZSBsb2FkaW5nIHN0YXRlIG9mIHRoaXMgdGV4dHVyZVxuXG4gICAgICAgIC8vIERlZmF1bHQgdG8gYSAxLXBpeGVsIGJsYWNrIHRleHR1cmUgc28gd2UgY2FuIHNhZmVseSByZW5kZXIgd2hpbGUgd2Ugd2FpdCBmb3IgYW4gaW1hZ2UgdG8gbG9hZFxuICAgICAgICAvLyBTZWU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3MjIyNDcvd2ViZ2wtd2FpdC1mb3ItdGV4dHVyZS10by1sb2FkXG4gICAgICAgIHRoaXMuc2V0RGF0YSgxLCAxLCBuZXcgVWludDhBcnJheShbMCwgMCwgMCwgMjU1XSksIHsgZmlsdGVyaW5nOiAnbGluZWFyJyB9KTtcbiAgICAgICAgdGhpcy5zZXRGaWx0ZXJpbmcob3B0aW9ucy5maWx0ZXJpbmcpO1xuXG4gICAgICAgIHRoaXMubG9hZChvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBEZXN0cm95IGEgc2luZ2xlIHRleHR1cmUgaW5zdGFuY2VcbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAoIXRoaXMudmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGhpcy50ZXh0dXJlKTtcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YTtcbiAgICAgICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWxpZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGJpbmQodW5pdCkge1xuICAgICAgICBpZiAoIXRoaXMudmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHVuaXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoVGV4dHVyZS5hY3RpdmVVbml0ICE9PSB1bml0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5hY3RpdmVUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRTAgKyB1bml0KTtcbiAgICAgICAgICAgICAgICBUZXh0dXJlLmFjdGl2ZVVuaXQgPSB1bml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChUZXh0dXJlLmFjdGl2ZVRleHR1cmUgIT09IHRoaXMudGV4dHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZSk7XG4gICAgICAgICAgICBUZXh0dXJlLmFjdGl2ZVRleHR1cmUgPSB0aGlzLnRleHR1cmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBudWxsO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy51cmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51cmwgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnVybCAhPT0gdGhpcy51cmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFVybChvcHRpb25zLnVybCwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5lbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnQob3B0aW9ucy5lbGVtZW50LCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy53aWR0aCAmJiBvcHRpb25zLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0LCBvcHRpb25zLmRhdGEsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0ZXh0dXJlIGZyb20gYW4gdXJsXG4gICAgc2V0VXJsKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmICghdGhpcy52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cmwgPSB1cmw7IC8vIHNhdmUgVVJMIHJlZmVyZW5jZSAod2lsbCBiZSBvdmVyd3JpdHRlbiB3aGVuIGVsZW1lbnQgaXMgbG9hZGVkIGJlbG93KVxuICAgICAgICB0aGlzLnNvdXJjZSA9IHRoaXMudXJsO1xuICAgICAgICB0aGlzLnNvdXJjZVR5cGUgPSAndXJsJztcblxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnQoaW1hZ2UsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGV4dHVyZSAnJHt0aGlzLm5hbWV9JzogZmFpbGVkIHRvIGxvYWQgdXJsOiAnJHt0aGlzLnNvdXJjZX0nYCwgZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gV2FybiBhbmQgcmVzb2x2ZSBvbiBlcnJvclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUZXh0dXJlICcke3RoaXMubmFtZX0nOiBmYWlsZWQgdG8gbG9hZCB1cmw6ICcke3RoaXMuc291cmNlfSdgLCBlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB0aGlzLnNvdXJjZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gICAgfVxuXG4gICAgLy8gU2V0cyB0ZXh0dXJlIHRvIGEgcmF3IGltYWdlIGJ1ZmZlclxuICAgIHNldERhdGEod2lkdGgsIGhlaWdodCwgZGF0YSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5zb3VyY2UgPSBkYXRhO1xuICAgICAgICB0aGlzLnNvdXJjZVR5cGUgPSAnZGF0YSc7XG5cbiAgICAgICAgdGhpcy51cGRhdGUob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc2V0RmlsdGVyaW5nKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMubG9hZGluZyA9IFByb21pc2UucmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZGluZztcbiAgICB9XG5cbiAgICAvLyBTZXRzIHRoZSB0ZXh0dXJlIHRvIHRyYWNrIGEgZWxlbWVudCAoY2FudmFzL2ltYWdlKVxuICAgIHNldEVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICBsZXQgZWwgPSBlbGVtZW50O1xuXG4gICAgICAgIC8vIGEgc3RyaW5nIGVsZW1lbnQgaXMgaW50ZXJwZXRlZCBhcyBhIENTUyBzZWxlY3RvclxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQgfHxcbiAgICAgICAgICAgIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50IHx8XG4gICAgICAgICAgICBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBlbGVtZW50O1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VUeXBlID0gJ2VsZW1lbnQnO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RmlsdGVyaW5nKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IG1zZyA9IGB0aGUgJ2VsZW1lbnQnIHBhcmFtZXRlciAoXFxgZWxlbWVudDogJHtKU09OLnN0cmluZ2lmeShlbCl9XFxgKSBtdXN0IGJlIGEgQ1NTIGA7XG4gICAgICAgICAgICBtc2cgKz0gYHNlbGVjdG9yIHN0cmluZywgb3IgYSA8Y2FudmFzPiwgPGltYWdlPiBvciA8dmlkZW8+IG9iamVjdGA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGV4dHVyZSAnJHt0aGlzLm5hbWV9JzogJHttc2d9YCwgb3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBQcm9taXNlLnJlc29sdmUodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRpbmc7XG4gICAgfVxuXG4gICAgLy8gVXBsb2FkcyBjdXJyZW50IGltYWdlIG9yIGJ1ZmZlciB0byB0aGUgR1BVIChjYW4gYmUgdXNlZCB0byB1cGRhdGUgYW5pbWF0ZWQgdGV4dHVyZXMgb24gdGhlIGZseSlcbiAgICB1cGRhdGUob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmICghdGhpcy52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgICAgIHRoaXMuZ2wucGl4ZWxTdG9yZWkodGhpcy5nbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCAob3B0aW9ucy5VTlBBQ0tfRkxJUF9ZX1dFQkdMID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSkpO1xuICAgICAgICB0aGlzLmdsLnBpeGVsU3RvcmVpKHRoaXMuZ2wuVU5QQUNLX1BSRU1VTFRJUExZX0FMUEhBX1dFQkdMLCBvcHRpb25zLlVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCB8fCBmYWxzZSk7XG5cbiAgICAgICAgLy8gSW1hZ2Ugb3IgQ2FudmFzIGVsZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuc291cmNlVHlwZSA9PT0gJ2VsZW1lbnQnICYmXG4gICAgICAgICAgICAodGhpcy5zb3VyY2UgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCB8fCB0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5zb3VyY2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50ICYmIHRoaXMuc291cmNlLmNvbXBsZXRlKSkpIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLnNvdXJjZS53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5zb3VyY2UuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKHRoaXMuZ2wuVEVYVFVSRV8yRCwgMCwgdGhpcy5nbC5SR0JBLCB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuVU5TSUdORURfQllURSwgdGhpcy5zb3VyY2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJhdyBpbWFnZSBidWZmZXJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zb3VyY2VUeXBlID09PSAnZGF0YScpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCh0aGlzLmdsLlRFWFRVUkVfMkQsIDAsIHRoaXMuZ2wuUkdCQSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIHRoaXMuZ2wuUkdCQSwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCB0aGlzLnNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VyKCdsb2FkZWQnLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmVzIGFwcHJvcHJpYXRlIGZpbHRlcmluZyBtb2RlXG4gICAgc2V0RmlsdGVyaW5nIChvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvd2VyT2YyID0gaXNQb3dlck9mMih0aGlzLndpZHRoKSAmJiBpc1Bvd2VyT2YyKHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgbGV0IGRlZnVhbHRGaWx0ZXIgPSAodGhpcy5wb3dlck9mMiA/ICdtaXBtYXAnIDogJ2xpbmVhcicpO1xuICAgICAgICB0aGlzLmZpbHRlcmluZyA9IG9wdGlvbnMuZmlsdGVyaW5nIHx8IGRlZnVhbHRGaWx0ZXI7XG5cbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbDtcbiAgICAgICAgdGhpcy5iaW5kKCk7XG5cbiAgICAgICAgLy8gRm9yIHBvd2VyLW9mLTIgdGV4dHVyZXMsIHRoZSBmb2xsb3dpbmcgcHJlc2V0cyBhcmUgYXZhaWxhYmxlOlxuICAgICAgICAvLyBtaXBtYXA6IGxpbmVhciBibGVuZCBmcm9tIG5lYXJlc3QgbWlwXG4gICAgICAgIC8vIGxpbmVhcjogbGluZWFyIGJsZW5kIGZyb20gb3JpZ2luYWwgaW1hZ2UgKG5vIG1pcHMpXG4gICAgICAgIC8vIG5lYXJlc3Q6IG5lYXJlc3QgcGl4ZWwgZnJvbSBvcmlnaW5hbCBpbWFnZSAobm8gbWlwcywgJ2Jsb2NreScgbG9vaylcbiAgICAgICAgaWYgKHRoaXMucG93ZXJPZjIpIHtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIG9wdGlvbnMuVEVYVFVSRV9XUkFQX1MgfHwgKG9wdGlvbnMucmVwZWF0ICYmIGdsLlJFUEVBVCkgfHwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBvcHRpb25zLlRFWFRVUkVfV1JBUF9UIHx8IChvcHRpb25zLnJlcGVhdCAmJiBnbC5SRVBFQVQpIHx8IGdsLkNMQU1QX1RPX0VER0UpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJpbmcgPT09ICdtaXBtYXAnKSB7XG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUl9NSVBNQVBfTElORUFSKTsgLy8gVE9ETzogdXNlIHRyaWxpbmVhciBmaWx0ZXJpbmcgYnkgZGVmdWFsdCBpbnN0ZWFkP1xuICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgICAgICAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5maWx0ZXJpbmcgPT09ICdsaW5lYXInKSB7XG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmZpbHRlcmluZyA9PT0gJ25lYXJlc3QnKSB7XG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlYkdMIGhhcyBzdHJpY3QgcmVxdWlyZW1lbnRzIG9uIG5vbi1wb3dlci1vZi0yIHRleHR1cmVzOlxuICAgICAgICAgICAgLy8gTm8gbWlwbWFwcyBhbmQgbXVzdCBjbGFtcCB0byBlZGdlXG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJpbmcgPT09ICdtaXBtYXAnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJpbmcgPSAnbGluZWFyJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyaW5nID09PSAnbmVhcmVzdCcpIHtcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7IC8vIGRlZmF1bHQgdG8gbGluZWFyIGZvciBub24tcG93ZXItb2YtMiB0ZXh0dXJlc1xuICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBSZXBvcnQgbWF4IHRleHR1cmUgc2l6ZSBmb3IgYSBHTCBjb250ZXh0XG5UZXh0dXJlLmdldE1heFRleHR1cmVTaXplID0gZnVuY3Rpb24gKGdsKSB7XG4gICAgcmV0dXJuIGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9TSVpFKTtcbn07XG5cbi8vIEdsb2JhbCBzZXQgb2YgdGV4dHVyZXMsIGJ5IG5hbWVcblRleHR1cmUuYWN0aXZlVW5pdCA9IC0xO1xuIiwibGV0IGxhc3RFcnJvciA9ICcnO1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIEhUTE0gZm9yIGEgZmFpbHVyZSBtZXNzYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gY2FudmFzQ29udGFpbmVySWQgaWQgb2YgY29udGFpbmVyIG9mIHRoXG4gKiAgICAgICAgY2FudmFzLlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgaHRtbC5cbiAqL1xuZnVuY3Rpb24gbWFrZUZhaWxIVE1MKG1zZykge1xuICAgIHJldHVybiBgXG48dGFibGUgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjOENFOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1wiPjx0cj5cbjx0ZCBhbGlnbj1cImNlbnRlclwiPlxuPGRpdiBzdHlsZT1cImRpc3BsYXk6IHRhYmxlLWNlbGw7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+XG48ZGl2IHN0eWxlPVwiXCI+YCArIG1zZyArIGA8L2Rpdj5cbjwvZGl2PlxuPC90ZD48L3RyPjwvdGFibGU+XG5gO1xufVxuXG4vKipcbiAqIE1lc2FzZ2UgZm9yIGdldHRpbmcgYSB3ZWJnbCBicm93c2VyXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5sZXQgR0VUX0FfV0VCR0xfQlJPV1NFUiA9IGBcblx0VGhpcyBwYWdlIHJlcXVpcmVzIGEgYnJvd3NlciB0aGF0IHN1cHBvcnRzIFdlYkdMLjxici8+XG5cdDxhIGhyZWY9XCJodHRwOi8vZ2V0LndlYmdsLm9yZ1wiPkNsaWNrIGhlcmUgdG8gdXBncmFkZSB5b3VyIGJyb3dzZXIuPC9hPlxuYDtcblxuLyoqXG4gKiBNZXNhc2dlIGZvciBuZWVkIGJldHRlciBoYXJkd2FyZVxuICogQHR5cGUge3N0cmluZ31cbiAqL1xubGV0IE9USEVSX1BST0JMRU0gPSBgXG5cdEl0IGRvZXMgbm90IGFwcGVhciB5b3VyIGNvbXB1dGVyIGNhbiBzdXBwb3J0IFdlYkdMLjxici8+XG5cdDxhIGhyZWY9XCJodHRwOi8vZ2V0LndlYmdsLm9yZy90cm91Ymxlc2hvb3RpbmcvXCI+Q2xpY2sgaGVyZSBmb3IgbW9yZSBpbmZvcm1hdGlvbi48L2E+XG5gO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB3ZWJnbCBjb250ZXh0LiBJZiBjcmVhdGlvbiBmYWlscyBpdCB3aWxsXG4gKiBjaGFuZ2UgdGhlIGNvbnRlbnRzIG9mIHRoZSBjb250YWluZXIgb2YgdGhlIDxjYW52YXM+XG4gKiB0YWcgdG8gYW4gZXJyb3IgbWVzc2FnZSB3aXRoIHRoZSBjb3JyZWN0IGxpbmtzIGZvciBXZWJHTC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gY2FudmFzLiBUaGUgY2FudmFzIGVsZW1lbnQgdG8gY3JlYXRlIGFcbiAqICAgICBjb250ZXh0IGZyb20uXG4gKiBAcGFyYW0ge1dlYkdMQ29udGV4dENyZWF0aW9uQXR0aXJidXRlc30gb3B0QXR0cmlicyBBbnlcbiAqICAgICBjcmVhdGlvbiBhdHRyaWJ1dGVzIHlvdSB3YW50IHRvIHBhc3MgaW4uXG4gKiBAcmV0dXJuIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IFRoZSBjcmVhdGVkIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFdlYkdMIChjYW52YXMsIG9wdEF0dHJpYnMpIHtcbiAgICBmdW5jdGlvbiBzaG93TGluayhzdHIpIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGNhbnZhcy5wYXJlbnROb2RlO1xuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gbWFrZUZhaWxIVE1MKHN0cik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXdpbmRvdy5XZWJHTFJlbmRlcmluZ0NvbnRleHQpIHtcbiAgICAgICAgc2hvd0xpbmsoR0VUX0FfV0VCR0xfQlJPV1NFUik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBjb250ZXh0ID0gY3JlYXRlM0RDb250ZXh0KGNhbnZhcywgb3B0QXR0cmlicyk7XG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIHNob3dMaW5rKE9USEVSX1BST0JMRU0pO1xuICAgIH1cbiAgICBjb250ZXh0LmdldEV4dGVuc2lvbignT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzJyk7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHdlYmdsIGNvbnRleHQuXG4gKiBAcGFyYW0geyFDYW52YXN9IGNhbnZhcyBUaGUgY2FudmFzIHRhZyB0byBnZXQgY29udGV4dFxuICogICAgIGZyb20uIElmIG9uZSBpcyBub3QgcGFzc2VkIGluIG9uZSB3aWxsIGJlIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHshV2ViR0xDb250ZXh0fSBUaGUgY3JlYXRlZCBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlM0RDb250ZXh0KGNhbnZhcywgb3B0QXR0cmlicykge1xuICAgIGxldCBuYW1lcyA9IFsnd2ViZ2wnLCAnZXhwZXJpbWVudGFsLXdlYmdsJ107XG4gICAgbGV0IGNvbnRleHQgPSBudWxsO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBuYW1lcy5sZW5ndGg7ICsraWkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChuYW1lc1tpaV0sIG9wdEF0dHJpYnMpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbi8qXG4gKlx0Q3JlYXRlIGEgVmVydGV4IG9mIGEgc3BlY2lmaWMgdHlwZSAoZ2wuVkVSVEVYX1NIQURFUi8pXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGFkZXIobWFpbiwgc291cmNlLCB0eXBlKSB7XG4gICAgbGV0IGdsID0gbWFpbi5nbDtcblxuICAgIGxldCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgICBsZXQgY29tcGlsZWQgPSBnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUyk7XG5cbiAgICBpZiAoIWNvbXBpbGVkKSB7XG4gICAgICAgIC8vIFNvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyBjb21waWxhdGlvbjsgZ2V0IHRoZSBlcnJvclxuICAgICAgICBsYXN0RXJyb3IgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyoqKiBFcnJvciBjb21waWxpbmcgc2hhZGVyICcgKyBzaGFkZXIgKyAnOicgKyBsYXN0RXJyb3IpO1xuICAgICAgICBtYWluLnRyaWdnZXIoJ2Vycm9yJywgeyBzaGFkZXI6IHNoYWRlciwgc291cmNlOiBzb3VyY2UsIHR5cGU6IHR5cGUsIGVycm9yOiBsYXN0RXJyb3IgfSk7XG4gICAgICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hhZGVyO1xufVxuXG4vKipcbiAqIExvYWRzIGEgc2hhZGVyLlxuICogQHBhcmFtIHshV2ViR0xDb250ZXh0fSBnbCBUaGUgV2ViR0xDb250ZXh0IHRvIHVzZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzaGFkZXJTb3VyY2UgVGhlIHNoYWRlciBzb3VyY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gc2hhZGVyVHlwZSBUaGUgdHlwZSBvZiBzaGFkZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6IHZvaWQpIG9wdF9lcnJvckNhbGxiYWNrIGNhbGxiYWNrIGZvciBlcnJvcnMuXG4gKiBAcmV0dXJuIHshV2ViR0xTaGFkZXJ9IFRoZSBjcmVhdGVkIHNoYWRlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0obWFpbiwgc2hhZGVycywgb3B0QXR0cmlicywgb3B0TG9jYXRpb25zKSB7XG4gICAgbGV0IGdsID0gbWFpbi5nbDtcblxuICAgIGxldCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgIGZvciAobGV0IGlpID0gMDsgaWkgPCBzaGFkZXJzLmxlbmd0aDsgKytpaSkge1xuICAgICAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgc2hhZGVyc1tpaV0pO1xuICAgIH1cbiAgICBpZiAob3B0QXR0cmlicykge1xuICAgICAgICBmb3IgKGxldCBpaSA9IDA7IGlpIDwgb3B0QXR0cmlicy5sZW5ndGg7ICsraWkpIHtcbiAgICAgICAgICAgIGdsLmJpbmRBdHRyaWJMb2NhdGlvbihcbiAgICAgICAgICAgIHByb2dyYW0sXG4gICAgICAgICAgICBvcHRMb2NhdGlvbnMgPyBvcHRMb2NhdGlvbnNbaWldIDogaWksXG4gICAgICAgICAgICBvcHRBdHRyaWJzW2lpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICAvLyBDaGVjayB0aGUgbGluayBzdGF0dXNcbiAgICBsZXQgbGlua2VkID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUyk7XG4gICAgaWYgKCFsaW5rZWQpIHtcbiAgICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCB0aGUgbGlua1xuICAgICAgICBsYXN0RXJyb3IgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIHByb2dyYW0gbGlua2luZzonICsgbGFzdEVycm9yKTtcbiAgICAgICAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBwcm9ncmFtO1xufVxuXG4vLyBCeSBCcmV0dCBDYW1iZXIgb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YW5ncmFtcy90YW5ncmFtL2Jsb2IvbWFzdGVyL3NyYy9nbC9nbHNsLmpzXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVbmlmb3Jtcyh1bmlmb3JtcywgcHJlZml4ID0gbnVsbCkge1xuICAgIGxldCBwYXJzZWQgPSBbXTtcblxuICAgIGZvciAobGV0IG5hbWUgaW4gdW5pZm9ybXMpIHtcbiAgICAgICAgbGV0IHVuaWZvcm0gPSB1bmlmb3Jtc1tuYW1lXTtcbiAgICAgICAgbGV0IHU7XG5cbiAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgICAgbmFtZSA9IHByZWZpeCArICcuJyArIG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaW5nbGUgZmxvYXRcbiAgICAgICAgaWYgKHR5cGVvZiB1bmlmb3JtID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcGFyc2VkLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdmbG9hdCcsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnMWYnLFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVuaWZvcm1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFycmF5OiB2ZWN0b3IsIGFycmF5IG9mIGZsb2F0cywgYXJyYXkgb2YgdGV4dHVyZXMsIG9yIGFycmF5IG9mIHN0cnVjdHNcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh1bmlmb3JtKSkge1xuICAgICAgICAgICAgLy8gTnVtZXJpYyB2YWx1ZXNcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdW5pZm9ybVswXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAvLyBmbG9hdCB2ZWN0b3JzICh2ZWMyLCB2ZWMzLCB2ZWM0KVxuICAgICAgICAgICAgICAgIGlmICh1bmlmb3JtLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZmxvYXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnMWYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1bmlmb3JtXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmbG9hdCB2ZWN0b3JzICh2ZWMyLCB2ZWMzLCB2ZWM0KVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHVuaWZvcm0ubGVuZ3RoID49IDIgJiYgdW5pZm9ybS5sZW5ndGggPD0gNCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndmVjJyArIHVuaWZvcm0ubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiB1bmlmb3JtLmxlbmd0aCArICdmdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHVuaWZvcm1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZsb2F0IGFycmF5XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodW5pZm9ybS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdmbG9hdFtdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJzFmdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lICsgJ1swXScsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdW5pZm9ybVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogYXNzdW1lIG1hdHJpeCBmb3IgKHR5cGVvZiA9PSBGbG9hdDMyQXJyYXkgJiYgbGVuZ3RoID09IDE2KT9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFycmF5IG9mIHRleHR1cmVzXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdW5pZm9ybVswXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzYW1wbGVyMkQnLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICcxaScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1bmlmb3JtXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcnJheSBvZiBhcnJheXMgLSBidXQgb25seSBhcnJheXMgb2YgdmVjdG9ycyBhcmUgYWxsb3dlZCBpbiB0aGlzIGNhc2VcbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodW5pZm9ybVswXSkgJiYgdHlwZW9mIHVuaWZvcm1bMF1bMF0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgLy8gZmxvYXQgdmVjdG9ycyAodmVjMiwgdmVjMywgdmVjNClcbiAgICAgICAgICAgICAgICBpZiAodW5pZm9ybVswXS5sZW5ndGggPj0gMiAmJiB1bmlmb3JtWzBdLmxlbmd0aCA8PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBlYWNoIHZlY3RvciBpbiB0aGUgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgZm9yICh1ID0gMDsgdSA8IHVuaWZvcm0ubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndmVjJyArIHVuaWZvcm1bMF0ubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogdW5pZm9ybVt1XS5sZW5ndGggKyAnZnYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgKyAnWycgKyB1ICsgJ10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1bmlmb3JtW3VdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBlbHNlIGVycm9yP1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXJyYXkgb2Ygc3RydWN0dXJlc1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHVuaWZvcm1bMF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgZm9yICh1ID0gMDsgdSA8IHVuaWZvcm0ubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGVhY2ggc3RydWN0IGluIHRoZSBhcnJheVxuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucHVzaCguLi5wYXJzZVVuaWZvcm1zKHVuaWZvcm1bdV0sIG5hbWUgKyAnWycgKyB1ICsgJ10nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEJvb2xlYW5cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHVuaWZvcm0gPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgcGFyc2VkLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sJyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICcxaScsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdW5pZm9ybVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGV4dHVyZVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdW5pZm9ybSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHBhcnNlZC5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2FtcGxlcjJEJyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICcxaScsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdW5pZm9ybVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3RydWN0dXJlXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB1bmlmb3JtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gU2V0IGVhY2ggZmllbGQgaW4gdGhlIHN0cnVjdFxuICAgICAgICAgICAgcGFyc2VkLnB1c2goLi4ucGFyc2VVbmlmb3Jtcyh1bmlmb3JtLCBuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVE9ETzogc3VwcG9ydCBvdGhlciBub24tZmxvYXQgdHlwZXM/IChpbnQsIGV0Yy4pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNDYW52YXNWaXNpYmxlKGNhbnZhcykge1xuICAgIHJldHVyblx0KChjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgY2FudmFzLmhlaWdodCkgPiAwKSAmJlxuICAgICAgICAoY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQb3dlck9mMih2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgJiAodmFsdWUgLSAxKSkgPT09IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0SGlnaGVzdFBvd2VyT2ZUd28oeCkge1xuICAgIC0teDtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDMyOyBpIDw8PSAxKSB7XG4gICAgICAgIHggPSB4IHwgeCA+PiBpO1xuICAgIH1cbiAgICByZXR1cm4geCArIDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtYXROdW1iZXJMZW5ndGgobnVtLCBsZW5ndGgpIHtcbiAgICBsZXQgciA9IG51bS50b1N0cmluZygpO1xuICAgIHdoaWxlIChyLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICByID0gJzAnICsgcjtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb3VzZVBvcyhjYW52YXMsIGV2dCkge1xuICAgIGxldCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGV2dC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICB5OiBldnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGlmZihhLCBiKSB7XG4gICAgaWYgKGEgJiYgYikge1xuICAgICAgICByZXR1cm4gYS50b1N0cmluZygpICE9PSBiLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZU1peGluICh0YXJnZXQpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gbmV3IFNldCgpO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG5cbiAgICAgICAgc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvbih0eXBlLCBmKSB7XG4gICAgICAgICAgICBsZXQgbGlzdGVuZXIgPSB7fTtcbiAgICAgICAgICAgIGxpc3RlbmVyW3R5cGVdID0gZjtcbiAgICAgICAgICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgICAgfSxcblxuICAgICAgICB1bnN1YnNjcmliZUFsbCgpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5jbGVhcigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRyaWdnZXIoZXZlbnQsIC4uLmRhdGEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGxpc3RlbmVyIG9mIGxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJbZXZlbnRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyW2V2ZW50XSguLi5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmVNaXhpbiAodGFyZ2V0KSB7XG4gICAgdmFyIGxpc3RlbmVycyA9IG5ldyBTZXQoKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuXG4gICAgICAgIG9uKHR5cGUsIGYpIHtcbiAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IHt9O1xuICAgICAgICAgICAgbGlzdGVuZXJbdHlwZV0gPSBmO1xuICAgICAgICAgICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb2ZmKHR5cGUsIGYpIHtcbiAgICAgICAgICAgIGlmIChmKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3RlbmVyID0ge307XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJbdHlwZV0gPSBmO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbGlzdFN1YnNjcmlwdGlvbnMoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgICAgICAgICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVuc3Vic2NyaWJlQWxsKCkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdHJpZ2dlcihldmVudCwgLi4uZGF0YSkge1xuICAgICAgICAgICAgZm9yICh2YXIgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcltldmVudF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJbZXZlbnRdKC4uLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxuZnVuY3Rpb24gaXNGdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHN0cmluZyA9IHRvU3RyaW5nLmNhbGwoZm4pXG4gIHJldHVybiBzdHJpbmcgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfHxcbiAgICAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIHN0cmluZyAhPT0gJ1tvYmplY3QgUmVnRXhwXScpIHx8XG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgIC8vIElFOCBhbmQgYmVsb3dcbiAgICAgKGZuID09PSB3aW5kb3cuc2V0VGltZW91dCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5hbGVydCB8fFxuICAgICAgZm4gPT09IHdpbmRvdy5jb25maXJtIHx8XG4gICAgICBmbiA9PT0gd2luZG93LnByb21wdCkpXG59O1xuIiwidmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJylcbiAgLCBmb3JFYWNoID0gcmVxdWlyZSgnZm9yLWVhY2gnKVxuICAsIGlzQXJyYXkgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGhlYWRlcnMpIHtcbiAgaWYgKCFoZWFkZXJzKVxuICAgIHJldHVybiB7fVxuXG4gIHZhciByZXN1bHQgPSB7fVxuXG4gIGZvckVhY2goXG4gICAgICB0cmltKGhlYWRlcnMpLnNwbGl0KCdcXG4nKVxuICAgICwgZnVuY3Rpb24gKHJvdykge1xuICAgICAgICB2YXIgaW5kZXggPSByb3cuaW5kZXhPZignOicpXG4gICAgICAgICAgLCBrZXkgPSB0cmltKHJvdy5zbGljZSgwLCBpbmRleCkpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAsIHZhbHVlID0gdHJpbShyb3cuc2xpY2UoaW5kZXggKyAxKSlcblxuICAgICAgICBpZiAodHlwZW9mKHJlc3VsdFtrZXldKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlXG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShyZXN1bHRba2V5XSkpIHtcbiAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gWyByZXN1bHRba2V5XSwgdmFsdWUgXVxuICAgICAgICB9XG4gICAgICB9XG4gIClcblxuICByZXR1cm4gcmVzdWx0XG59IiwiXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0cmltO1xuXG5mdW5jdGlvbiB0cmltKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuXG5leHBvcnRzLmxlZnQgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpO1xufTtcblxuZXhwb3J0cy5yaWdodCA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgd2luZG93ID0gcmVxdWlyZShcImdsb2JhbC93aW5kb3dcIilcbnZhciBvbmNlID0gcmVxdWlyZShcIm9uY2VcIilcbnZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZShcImlzLWZ1bmN0aW9uXCIpXG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZShcInBhcnNlLWhlYWRlcnNcIilcbnZhciB4dGVuZCA9IHJlcXVpcmUoXCJ4dGVuZFwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVhIUlxuY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0ID0gd2luZG93LlhNTEh0dHBSZXF1ZXN0IHx8IG5vb3BcbmNyZWF0ZVhIUi5YRG9tYWluUmVxdWVzdCA9IFwid2l0aENyZWRlbnRpYWxzXCIgaW4gKG5ldyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QoKSkgPyBjcmVhdGVYSFIuWE1MSHR0cFJlcXVlc3QgOiB3aW5kb3cuWERvbWFpblJlcXVlc3RcblxuZm9yRWFjaEFycmF5KFtcImdldFwiLCBcInB1dFwiLCBcInBvc3RcIiwgXCJwYXRjaFwiLCBcImhlYWRcIiwgXCJkZWxldGVcIl0sIGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIGNyZWF0ZVhIUlttZXRob2QgPT09IFwiZGVsZXRlXCIgPyBcImRlbFwiIDogbWV0aG9kXSA9IGZ1bmN0aW9uKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgb3B0aW9ucyA9IGluaXRQYXJhbXModXJpLCBvcHRpb25zLCBjYWxsYmFjaylcbiAgICAgICAgb3B0aW9ucy5tZXRob2QgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgICAgICByZXR1cm4gX2NyZWF0ZVhIUihvcHRpb25zKVxuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGZvckVhY2hBcnJheShhcnJheSwgaXRlcmF0b3IpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZXJhdG9yKGFycmF5W2ldKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNFbXB0eShvYmope1xuICAgIGZvcih2YXIgaSBpbiBvYmope1xuICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoaSkpIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpbml0UGFyYW1zKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcGFyYW1zID0gdXJpXG5cbiAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zKSkge1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnNcbiAgICAgICAgaWYgKHR5cGVvZiB1cmkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IHt1cmk6dXJpfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zID0geHRlbmQob3B0aW9ucywge3VyaTogdXJpfSlcbiAgICB9XG5cbiAgICBwYXJhbXMuY2FsbGJhY2sgPSBjYWxsYmFja1xuICAgIHJldHVybiBwYXJhbXNcbn1cblxuZnVuY3Rpb24gY3JlYXRlWEhSKHVyaSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBvcHRpb25zID0gaW5pdFBhcmFtcyh1cmksIG9wdGlvbnMsIGNhbGxiYWNrKVxuICAgIHJldHVybiBfY3JlYXRlWEhSKG9wdGlvbnMpXG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVYSFIob3B0aW9ucykge1xuICAgIHZhciBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2tcbiAgICBpZih0eXBlb2YgY2FsbGJhY2sgPT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjYWxsYmFjayBhcmd1bWVudCBtaXNzaW5nXCIpXG4gICAgfVxuICAgIGNhbGxiYWNrID0gb25jZShjYWxsYmFjaylcblxuICAgIGZ1bmN0aW9uIHJlYWR5c3RhdGVjaGFuZ2UoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgbG9hZEZ1bmMoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgICAgICAgLy8gQ2hyb21lIHdpdGggcmVxdWVzdFR5cGU9YmxvYiB0aHJvd3MgZXJyb3JzIGFycm91bmQgd2hlbiBldmVuIHRlc3RpbmcgYWNjZXNzIHRvIHJlc3BvbnNlVGV4dFxuICAgICAgICB2YXIgYm9keSA9IHVuZGVmaW5lZFxuXG4gICAgICAgIGlmICh4aHIucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VcbiAgICAgICAgfSBlbHNlIGlmICh4aHIucmVzcG9uc2VUeXBlID09PSBcInRleHRcIiB8fCAheGhyLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICAgICAgYm9keSA9IHhoci5yZXNwb25zZVRleHQgfHwgeGhyLnJlc3BvbnNlWE1MXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNKc29uKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKGJvZHkpXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvZHlcbiAgICB9XG5cbiAgICB2YXIgZmFpbHVyZVJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgIGJvZHk6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiAwLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgICAgIHVybDogdXJpLFxuICAgICAgICAgICAgICAgIHJhd1JlcXVlc3Q6IHhoclxuICAgICAgICAgICAgfVxuXG4gICAgZnVuY3Rpb24gZXJyb3JGdW5jKGV2dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFRpbWVyKVxuICAgICAgICBpZighKGV2dCBpbnN0YW5jZW9mIEVycm9yKSl7XG4gICAgICAgICAgICBldnQgPSBuZXcgRXJyb3IoXCJcIiArIChldnQgfHwgXCJVbmtub3duIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpIClcbiAgICAgICAgfVxuICAgICAgICBldnQuc3RhdHVzQ29kZSA9IDBcbiAgICAgICAgY2FsbGJhY2soZXZ0LCBmYWlsdXJlUmVzcG9uc2UpXG4gICAgfVxuXG4gICAgLy8gd2lsbCBsb2FkIHRoZSBkYXRhICYgcHJvY2VzcyB0aGUgcmVzcG9uc2UgaW4gYSBzcGVjaWFsIHJlc3BvbnNlIG9iamVjdFxuICAgIGZ1bmN0aW9uIGxvYWRGdW5jKCkge1xuICAgICAgICBpZiAoYWJvcnRlZCkgcmV0dXJuXG4gICAgICAgIHZhciBzdGF0dXNcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRUaW1lcilcbiAgICAgICAgaWYob3B0aW9ucy51c2VYRFIgJiYgeGhyLnN0YXR1cz09PXVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy9JRTggQ09SUyBHRVQgc3VjY2Vzc2Z1bCByZXNwb25zZSBkb2Vzbid0IGhhdmUgYSBzdGF0dXMgZmllbGQsIGJ1dCBib2R5IGlzIGZpbmVcbiAgICAgICAgICAgIHN0YXR1cyA9IDIwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdHVzID0gKHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzKVxuICAgICAgICB9XG4gICAgICAgIHZhciByZXNwb25zZSA9IGZhaWx1cmVSZXNwb25zZVxuICAgICAgICB2YXIgZXJyID0gbnVsbFxuXG4gICAgICAgIGlmIChzdGF0dXMgIT09IDApe1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgYm9keTogZ2V0Qm9keSgpLFxuICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHN0YXR1cyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgICAgICAgICByYXdSZXF1ZXN0OiB4aHJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMpeyAvL3JlbWVtYmVyIHhociBjYW4gaW4gZmFjdCBiZSBYRFIgZm9yIENPUlMgaW4gSUVcbiAgICAgICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzID0gcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVyciA9IG5ldyBFcnJvcihcIkludGVybmFsIFhNTEh0dHBSZXF1ZXN0IEVycm9yXCIpXG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2soZXJyLCByZXNwb25zZSwgcmVzcG9uc2UuYm9keSlcblxuICAgIH1cblxuICAgIHZhciB4aHIgPSBvcHRpb25zLnhociB8fCBudWxsXG5cbiAgICBpZiAoIXhocikge1xuICAgICAgICBpZiAob3B0aW9ucy5jb3JzIHx8IG9wdGlvbnMudXNlWERSKSB7XG4gICAgICAgICAgICB4aHIgPSBuZXcgY3JlYXRlWEhSLlhEb21haW5SZXF1ZXN0KClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB4aHIgPSBuZXcgY3JlYXRlWEhSLlhNTEh0dHBSZXF1ZXN0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlcbiAgICB2YXIgYWJvcnRlZFxuICAgIHZhciB1cmkgPSB4aHIudXJsID0gb3B0aW9ucy51cmkgfHwgb3B0aW9ucy51cmxcbiAgICB2YXIgbWV0aG9kID0geGhyLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IFwiR0VUXCJcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keSB8fCBvcHRpb25zLmRhdGEgfHwgbnVsbFxuICAgIHZhciBoZWFkZXJzID0geGhyLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge31cbiAgICB2YXIgc3luYyA9ICEhb3B0aW9ucy5zeW5jXG4gICAgdmFyIGlzSnNvbiA9IGZhbHNlXG4gICAgdmFyIHRpbWVvdXRUaW1lclxuXG4gICAgaWYgKFwianNvblwiIGluIG9wdGlvbnMpIHtcbiAgICAgICAgaXNKc29uID0gdHJ1ZVxuICAgICAgICBoZWFkZXJzW1wiYWNjZXB0XCJdIHx8IGhlYWRlcnNbXCJBY2NlcHRcIl0gfHwgKGhlYWRlcnNbXCJBY2NlcHRcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIikgLy9Eb24ndCBvdmVycmlkZSBleGlzdGluZyBhY2NlcHQgaGVhZGVyIGRlY2xhcmVkIGJ5IHVzZXJcbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gXCJHRVRcIiAmJiBtZXRob2QgIT09IFwiSEVBRFwiKSB7XG4gICAgICAgICAgICBoZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gfHwgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIikgLy9Eb24ndCBvdmVycmlkZSBleGlzdGluZyBhY2NlcHQgaGVhZGVyIGRlY2xhcmVkIGJ5IHVzZXJcbiAgICAgICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gcmVhZHlzdGF0ZWNoYW5nZVxuICAgIHhoci5vbmxvYWQgPSBsb2FkRnVuY1xuICAgIHhoci5vbmVycm9yID0gZXJyb3JGdW5jXG4gICAgLy8gSUU5IG11c3QgaGF2ZSBvbnByb2dyZXNzIGJlIHNldCB0byBhIHVuaXF1ZSBmdW5jdGlvbi5cbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSUUgbXVzdCBkaWVcbiAgICB9XG4gICAgeGhyLm9udGltZW91dCA9IGVycm9yRnVuY1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJpLCAhc3luYywgb3B0aW9ucy51c2VybmFtZSwgb3B0aW9ucy5wYXNzd29yZClcbiAgICAvL2hhcyB0byBiZSBhZnRlciBvcGVuXG4gICAgaWYoIXN5bmMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9ICEhb3B0aW9ucy53aXRoQ3JlZGVudGlhbHNcbiAgICB9XG4gICAgLy8gQ2Fubm90IHNldCB0aW1lb3V0IHdpdGggc3luYyByZXF1ZXN0XG4gICAgLy8gbm90IHNldHRpbmcgdGltZW91dCBvbiB0aGUgeGhyIG9iamVjdCwgYmVjYXVzZSBvZiBvbGQgd2Via2l0cyBldGMuIG5vdCBoYW5kbGluZyB0aGF0IGNvcnJlY3RseVxuICAgIC8vIGJvdGggbnBtJ3MgcmVxdWVzdCBhbmQganF1ZXJ5IDEueCB1c2UgdGhpcyBraW5kIG9mIHRpbWVvdXQsIHNvIHRoaXMgaXMgYmVpbmcgY29uc2lzdGVudFxuICAgIGlmICghc3luYyAmJiBvcHRpb25zLnRpbWVvdXQgPiAwICkge1xuICAgICAgICB0aW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhYm9ydGVkPXRydWUvL0lFOSBtYXkgc3RpbGwgY2FsbCByZWFkeXN0YXRlY2hhbmdlXG4gICAgICAgICAgICB4aHIuYWJvcnQoXCJ0aW1lb3V0XCIpXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcihcIlhNTEh0dHBSZXF1ZXN0IHRpbWVvdXRcIilcbiAgICAgICAgICAgIGUuY29kZSA9IFwiRVRJTUVET1VUXCJcbiAgICAgICAgICAgIGVycm9yRnVuYyhlKVxuICAgICAgICB9LCBvcHRpb25zLnRpbWVvdXQgKVxuICAgIH1cblxuICAgIGlmICh4aHIuc2V0UmVxdWVzdEhlYWRlcikge1xuICAgICAgICBmb3Ioa2V5IGluIGhlYWRlcnMpe1xuICAgICAgICAgICAgaWYoaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5oZWFkZXJzICYmICFpc0VtcHR5KG9wdGlvbnMuaGVhZGVycykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGVhZGVycyBjYW5ub3QgYmUgc2V0IG9uIGFuIFhEb21haW5SZXF1ZXN0IG9iamVjdFwiKVxuICAgIH1cblxuICAgIGlmIChcInJlc3BvbnNlVHlwZVwiIGluIG9wdGlvbnMpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlXG4gICAgfVxuXG4gICAgaWYgKFwiYmVmb3JlU2VuZFwiIGluIG9wdGlvbnMgJiZcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMuYmVmb3JlU2VuZCA9PT0gXCJmdW5jdGlvblwiXG4gICAgKSB7XG4gICAgICAgIG9wdGlvbnMuYmVmb3JlU2VuZCh4aHIpXG4gICAgfVxuXG4gICAgeGhyLnNlbmQoYm9keSlcblxuICAgIHJldHVybiB4aHJcblxuXG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuIiwibW9kdWxlLmV4cG9ydHMgPSBvbmNlXG5cbm9uY2UucHJvdG8gPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bmN0aW9uLnByb3RvdHlwZSwgJ29uY2UnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBvbmNlKHRoaXMpXG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIG9uY2UgKGZuKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYWxsZWQpIHJldHVyblxuICAgIGNhbGxlZCA9IHRydWVcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlbkZyYW1lSWNvbiB7XG4gICAgY29uc3RydWN0b3IgKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnbHNsR2FsbGVyeV9vcGVuRnJhbWVJY29uJyk7XG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJ1tvXSc7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVPcGVuRnJhbWVBcnR3b3JrKHRoaXMucGFyZW50LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHRoaXMucGFyZW50LmVsLmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9wZW5GcmFtZUFydHdvcmsoaXRlbSwgY2FsbGJhY2spIHtcbiAgICBsZXQgaWQgPSBpdGVtLmlkO1xuICAgIGxldCB0aXRsZSA9IGl0ZW0udGl0bGUgfHwgJ3Vua25vdyc7XG4gICAgbGV0IGF1dGhvciA9IGl0ZW0uYXV0aG9yIHx8ICd1bmtub3cnO1xuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8ICgpID0+IHt9O1xuICAgIC8vIGFueXdoZXJlIGluIHRoZSBBUEkgdGhhdCB1c2VyIHtpZH0gaXMgbmVlZGVkLCB0aGUgYWxpYXMgJ2N1cnJlbnQnIGNhbiBiZSB1c2VkIGZvciB0aGUgbG9nZ2VkLWluIHVzZXJcbiAgICB4aHIub3BlbignUE9TVCcsICdodHRwOi8vb3BlbmZyYW1lLmlvL2FwaS91c2Vycy9jdXJyZW50L293bmVkX2FydHdvcmsnLCBmYWxzZSk7XG4gICAgLy8gc2V0IGNvbnRlbnQgdHlwZSB0byBKU09OLi4uXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAvLyBUaGlzIGlzIGVzc2VudGlhbCBpbiBvcmRlciB0byBpbmNsdWRlIGF1dGggY29va2llczpcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB4aHIub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICB3aW5kb3cub3BlbignaHR0cDovL29wZW5mcmFtZS5pby9sb2dpbi1wb3B1cCcsICdsb2dpbicsICd3aWR0aD01MDAsaGVpZ2h0PTYwMCcpO1xuICAgICAgICAgICAgbGV0IHN1Y2Nlc3NMaXN0ZW5lciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlT3BlbkZyYW1lQXJ0d29yayhpdGVtLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgc3VjY2Vzc0xpc3RlbmVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHN1Y2Nlc3NMaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB4aHIub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0LnN0YXR1cyk7XG4gICAgfTtcblxuICAgIGxldCB1cmwgPSAnJztcbiAgICBpZiAoaWQubWF0Y2goL1xcZFxcZFxcLy4qLykpIHtcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vdGhlYm9va29mc2hhZGVycy5jb20vJyArIGlkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vdGhlYm9va29mc2hhZGVycy5jb20vbG9nLycgKyBpZDtcbiAgICB9XG5cbiAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgYXV0aG9yX25hbWU6IGF1dGhvcixcbiAgICAgICAgaXNfcHVibGljOiBmYWxzZSxcbiAgICAgICAgZm9ybWF0OiAnb3BlbmZyYW1lLWdsc2x2aWV3ZXInLFxuICAgICAgICB1cmw6IHVybCArICcuZnJhZycsXG4gICAgICAgIHRodW1iX3VybDogdXJsICsgJy5wbmcnXG4gICAgfSkpO1xufVxuIiwiaW1wb3J0IHhociBmcm9tICd4aHInO1xuaW1wb3J0IEdsc2xDYW52YXMgZnJvbSAnZ2xzbENhbnZhcyc7XG5pbXBvcnQgT3BlbkZyYW1lSWNvbiBmcm9tICcuLi9hZGRvbnMvb3BlbkZyYW1lSWNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnlJdGVtIHtcbiAgICBjb25zdHJ1Y3RvciAoaWQsIG1haW4sIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICAgIC8vIENvbnN0cnVjdCBJdGVtXG4gICAgICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dsc2xHYWxsZXJ5X2l0ZW0nKTtcblxuICAgICAgICB0aGlzLmxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIHRoaXMubGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblxuICAgICAgICB0aGlzLmltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0aGlzLmltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dsc2xHYWxsZXJ5X3RodW1iJyk7XG5cbiAgICAgICAgdGhpcy5jcmVkaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuY3JlZGl0cy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dsc2xHYWxsZXJ5X2NyZWRpdHMnKTtcbiAgICAgICAgdGhpcy5jcmVkaXRzLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgICAgICBpZiAodGhpcy5pZC5tYXRjaCgvXFxkXFxkXFwvLiovKSkge1xuICAgICAgICAgICAgdGhpcy5saW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL3RoZWJvb2tvZnNoYWRlcnMuY29tL2VkaXQucGhwIycgKyB0aGlzLmlkICsgJy5mcmFnJyk7XG4gICAgICAgICAgICB0aGlzLmltZy5zcmMgPSAnaHR0cHM6Ly90aGVib29rb2ZzaGFkZXJzLmNvbS8nICsgdGhpcy5pZCArICcucG5nJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2xpY2tSdW4gPT09IFwiZWRpdG9yXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vdGhlYm9va29mc2hhZGVycy5jb20vZWRpdC5waHA/bG9nPScgKyB0aGlzLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmltZy5zcmMgPSAnaHR0cHM6Ly90aGVib29rb2ZzaGFkZXJzLmNvbS9sb2cvJyArIHRoaXMuaWQgKyAnLnBuZyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cDovLycgKyB0aGlzLm9wdGlvbnMuY2xpY2tSdW4gKyAnLnRoZWJvb2tvZnNoYWRlcnMuY29tLz9sb2c9JyArIHRoaXMuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nLnNyYyA9ICdodHRwczovL3RoZWJvb2tvZnNoYWRlcnMuY29tL2xvZy8nICsgdGhpcy5pZCArICcucG5nJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGluay5hcHBlbmRDaGlsZCh0aGlzLmltZyk7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5saW5rKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmNyZWRpdHMpO1xuICAgICAgICB0aGlzLm1haW4uY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuXG4gICAgICAgIC8vIEFkZCBldmVudHNcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ob3ZlclByZXZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBvbkVudGVyKHRoaXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25MZWF2ZSh0aGlzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vcGVuRnJhbWVJY29uKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5GcmFtZUljb24gPSBuZXcgT3BlbkZyYW1lSWNvbih0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQgKCkge1xuICAgICAgICBpZiAoIXRoaXMuc291cmNlIHx8IHRoaXMuc291cmNlID09PSAnJykge1xuICAgICAgICAgICAgdmFyIHVybCA9ICcnO1xuICAgICAgICAgICAgaWYgKHRoaXMuaWQubWF0Y2goL1xcZFxcZFxcLy4qLykpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSAnaHR0cHM6Ly90aGVib29rb2ZzaGFkZXJzLmNvbS8nICsgdGhpcy5pZCArICcuZnJhZyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmwgPSAnaHR0cHM6Ly90aGVib29rb2ZzaGFkZXJzLmNvbS9sb2cvJyArIHRoaXMuaWQgKyAnLmZyYWcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzO1xuICAgICAgICAgICAgeGhyLmdldCh1cmwsIChlcnJvciwgcmVzLCBib2R5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRvd25sb2FkaW5nICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpdGVtLnNldENvZGUoYm9keSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWQgKGNvZGUpIHtcbiAgICAgICAgdGhpcy5zZXRDb2RlKGNvZGUpO1xuICAgICAgICB3aW5kb3cuZ2xzbEdhbGxlcnlfY2FudmFzLmxvYWQoY29kZSk7XG4gICAgICAgIHdpbmRvdy5nbHNsR2FsbGVyeV9jYW52YXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IHRoaXMuaW1nLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgIHRoaXMubGluay5hcHBlbmRDaGlsZCh3aW5kb3cuZ2xzbEdhbGxlcnlfY2FudmFzLmNhbnZhcyk7XG4gICAgfVxuXG4gICAgc2V0Q29kZSAoY29kZSkge1xuICAgICAgICB0aGlzLnNvdXJjZSA9IGNvZGU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmF1dGhvciAmJiB0aGlzLm9wdGlvbnMuc2hvd0F1dGhvcikge1xuICAgICAgICAgICAgdGhpcy5hdXRob3IgPSB0aGlzLmdldEF1dGhvcigpO1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMuYXV0aG9yICE9PSAndW5rbm93bicpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXV0aG9yRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgYXV0aG9yRWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdnbHNsR2FsbGVyeV9sYWJlbCBnbHNsR2FsbGVyeV9hdXRob3InKTtcbiAgICAgICAgICAgICAgICBhdXRob3JFbC5pbm5lckhUTUwgPSB0aGlzLmF1dGhvcjtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWRpdHMuYXBwZW5kQ2hpbGQoYXV0aG9yRWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlZGl0cy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnRpdGxlICYmIHRoaXMub3B0aW9ucy5zaG93VGl0bGUpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmdldFRpdGxlKCk7XG4gICAgICAgICAgICAvLyBpZiAodGhpcy50aXRsZSAhPT0gJ3Vua25vd24nKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgdGl0bGVFbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dsc2xHYWxsZXJ5X2xhYmVsIGdsc2xHYWxsZXJ5X3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgdGl0bGVFbC5pbm5lckhUTUwgPSB0aGlzLnRpdGxlO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlZGl0cy5hcHBlbmRDaGlsZCh0aXRsZUVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWRpdHMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENvZGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2U7XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnNvdXJjZS5tYXRjaCgvXFwvXFwvXFxzKltUfHRdaXRsZVxccyo6XFxzKihbXFx3fFxcc3xcXEB8XFwofFxcKXxcXC18XFxfXSopL2kpO1xuICAgICAgICBpZiAocmVzdWx0ICYmICEocmVzdWx0WzFdID09PSAnICcgfHwgcmVzdWx0WzFdID09PSAnJykpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRbMV0ucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICd1bnRpdGxlZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBdXRob3IoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnNvdXJjZS5tYXRjaCgvXFwvXFwvXFxzKltBfGFddXRob3JcXHMqW1xcOl0/XFxzKihbXFx3fFxcc3xcXEB8XFwofFxcKXxcXC18XFxfXSopL2kpO1xuICAgICAgICBpZiAocmVzdWx0ICYmICEocmVzdWx0WzFdID09PSAnICcgfHwgcmVzdWx0WzFdID09PSAnJykpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRbMV0ucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdhbm9ueW1vdXMnO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0Q2FudmFzKCkge1xuICAgIGlmICghd2luZG93Lmdsc2xHYWxsZXJ5X2NhbnZhcykge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dsc2xHYWxsZXJ5X2NhbnZhcycpO1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSAnMjUwcHgnO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzI1MHB4JztcbiAgICAgICAgY2FudmFzLndpZHRoID0gJzI1MHB4JztcbiAgICAgICAgY2FudmFzLmhlaWdodCA9ICcyNTBweCc7XG4gICAgICAgIHdpbmRvdy5nbHNsR2FsbGVyeV9jYW52YXMgPSBuZXcgR2xzbENhbnZhcyhjYW52YXMpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gb25FbnRlciAoaXRlbSkge1xuICAgIGluaXRDYW52YXMoKTtcblxuICAgIGlmIChpdGVtLmdldENvZGUoKSkge1xuICAgICAgICBpdGVtLmxvYWQoaXRlbS5nZXRDb2RlKCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHVybCA9ICcnO1xuICAgICAgICBpZiAoaXRlbS5pZC5tYXRjaCgvXFxkXFxkXFwvLiovKSkge1xuICAgICAgICAgICAgdXJsID0gJ2h0dHBzOi8vdGhlYm9va29mc2hhZGVycy5jb20vJyArIGl0ZW0uaWQgKyAnLmZyYWcnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdXJsID0gJ2h0dHBzOi8vdGhlYm9va29mc2hhZGVycy5jb20vbG9nLycgKyBpdGVtLmlkICsgJy5mcmFnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHhoci5nZXQodXJsLCAoZXJyb3IsIHJlcywgYm9keSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZG93bmxvYWRpbmcgJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW0ubG9hZChib2R5KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBvbkxlYXZlIChpdGVtKSB7XG4gICAgaW5pdENhbnZhcygpO1xuXG4gICAgaWYgKGl0ZW0uZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2xzbEdhbGxlcnlfY2FudmFzJykgPiAwKSB7XG4gICAgICAgIC8vIFJlbW92ZSBnbHNsQ2FudmFzIGluc3RhbmNlIGZyb20gaXRlbVxuICAgICAgICBpdGVtLmVsLnJlbW92ZUNoaWxkKHdpbmRvdy5nbHNsR2FsbGVyeV9jYW52YXMuY2FudmFzKTtcbiAgICB9XG59XG4iLCIvKlxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbkNvcHlyaWdodCAoYykgMjAxNiBQYXRyaWNpbyBHb256YWxleiBWaXZvICggaHR0cDovL3d3dy5wYXRyaWNpb2dvbnphbGV6dml2by5jb20gKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG50aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSAnU29mdHdhcmUnKSwgdG8gZGVhbCBpblxudGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xudXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2ZcbnRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbnN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbmNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCAnQVMgSVMnLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xuRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG5DT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcbklOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG5DT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuaW1wb3J0IEdhbGxlcnlJdGVtIGZyb20gJ2FwcC9jb3JlL0dhbGxlcnlJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xzbEdhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yIChzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnb2JqZWN0JyAmJiBzZWxlY3Rvci5ub2RlVHlwZSAmJiBzZWxlY3Rvci5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBzZWxlY3RvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yLCB0eXBlICcgKyB0eXBlb2Ygc2VsZWN0b3IgKyAnIG9mICcgKyBzZWxlY3RvciArICcgaXMgdW5rbm93bicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5zaG93QXV0aG9yKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2hvd0F1dGhvciA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5zaG93VGl0bGUpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zaG93VGl0bGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuaG92ZXJQcmV2aWV3KSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaG92ZXJQcmV2aWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLm9wZW5GcmFtZUljb24pIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vcGVuRnJhbWVJY29uID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmNsaWNrUnVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2xpY2tSdW4gPSAncGxheWVyJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcblxuICAgICAgICBpZiAoc2VsZWN0b3IuaGFzQXR0cmlidXRlKCdkYXRhLXByb3BlcnRpZXMnKSkge1xuICAgICAgICAgICAgbGV0IHByb3AgPSBzZWxlY3Rvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvcGVydGllcycpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHByb3ApIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gcHJvcFtpXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1t2YWx1ZXNbMF1dID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNbdmFsdWVzWzBdXSA9ICh2YWx1ZXNbMV0gPT09ICd0cnVlJyB8fCB2YWx1ZXNbMV0gPT09ICdmYWxzZScpID8gKHZhbHVlc1sxXSA9PT0gJ3RydWUnKSA6IHZhbHVlc1sxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0b3IuaGFzQXR0cmlidXRlKCdkYXRhJykpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbXMoc2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdkYXRhJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb2dzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW1zKHRoaXMub3B0aW9ucy5sb2dzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZEl0ZW0gKGxvZykge1xuICAgICAgICBpZiAodHlwZW9mIGxvZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGxvZyA9IGxvZy50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChuZXcgR2FsbGVyeUl0ZW0obG9nLCB0aGlzLCB0aGlzLm9wdGlvbnMpKTtcbiAgICB9XG5cbiAgICBhZGRJdGVtcyAobG9ncykge1xuICAgICAgICBpZiAodHlwZW9mIGxvZ3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBsb2dzID0gbG9ncy5zcGxpdCgnLCcpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgaW4gbG9ncykge1xuICAgICAgICAgICAgdGhpcy5hZGRJdGVtKGxvZ3NbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmVyc2lvbigpIHtcbiAgICAgICAgcmV0dXJuICcwLjAuNic7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnbHNsR2FsbGVyeUxvYWRBbGwoKSB7XG4gICAgaWYgKCF3aW5kb3cuR2xzbEdhbGxlcnkpIHtcbiAgICAgICAgd2luZG93Lkdsc2xHYWxsZXJ5ID0gR2xzbEdhbGxlcnk7XG4gICAgfVxuXG4gICAgdmFyIGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnbHNsR2FsbGVyeScpO1xuICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgd2luZG93Lmdsc2xHYWxsZXJpZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZ2FsbGVyeSA9IG5ldyBHbHNsR2FsbGVyeShsaXN0W2ldKTtcbiAgICAgICAgICAgIHdpbmRvdy5nbHNsR2FsbGVyaWVzLnB1c2goZ2FsbGVyeSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIGdsc2xHYWxsZXJ5TG9hZEFsbCgpO1xufSk7XG4iXX0=
