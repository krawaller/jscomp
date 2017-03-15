/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _cyclow = __webpack_require__(1);

	var _phonebooth = __webpack_require__(2);

	var _phonebooth2 = _interopRequireDefault(_phonebooth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _cyclow.run)(_phonebooth2.default, { target: 'app' });

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["cyclow"] = factory();
		else
			root["cyclow"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _run = __webpack_require__(1);
		
		Object.defineProperty(exports, 'run', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_run).default;
		  }
		});
		
		var _SnabbdomRenderer = __webpack_require__(2);
		
		Object.defineProperty(exports, 'SnabbdomRenderer', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_SnabbdomRenderer).default;
		  }
		});
		
		var _State = __webpack_require__(13);
		
		Object.defineProperty(exports, 'State', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_State).default;
		  }
		});
		
		var _Events = __webpack_require__(14);
		
		Object.defineProperty(exports, 'Events', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Events).default;
		  }
		});
		
		var _View = __webpack_require__(15);
		
		Object.defineProperty(exports, 'View', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_View).default;
		  }
		});
		
		var _Block = __webpack_require__(16);
		
		Object.defineProperty(exports, 'Block', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Block).default;
		  }
		});

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _SnabbdomRenderer = __webpack_require__(2);
		
		var _SnabbdomRenderer2 = _interopRequireDefault(_SnabbdomRenderer);
		
		var _graflow = __webpack_require__(3);
		
		var _graflow2 = _interopRequireDefault(_graflow);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var run = function run(MainComponent) {
		  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		
		  document.addEventListener("DOMContentLoaded", function () {
		    var init = opts.init || {};
		    var Renderer = opts.renderer || _SnabbdomRenderer2.default;
		
		    var comp = (0, _graflow2.default)({
		      outputs: [],
		      components: {
		        main: MainComponent(),
		        renderer: Renderer(opts.target)
		      },
		      connections: [['in', 'main.init'], ['main.vdom', 'renderer']]
		    });
		
		    comp.in.default.send(init);
		  });
		};
		
		exports.default = run;

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _graflow = __webpack_require__(3);
		
		var _graflow2 = _interopRequireDefault(_graflow);
		
		var _utils = __webpack_require__(4);
		
		var _snabbdom = __webpack_require__(5);
		
		var _snabbdom2 = _interopRequireDefault(_snabbdom);
		
		var _eventlisteners = __webpack_require__(11);
		
		var _eventlisteners2 = _interopRequireDefault(_eventlisteners);
		
		var _props = __webpack_require__(12);
		
		var _props2 = _interopRequireDefault(_props);
		
		var _h = __webpack_require__(9);
		
		var _h2 = _interopRequireDefault(_h);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var getHandlers = function getHandlers(handlers, component) {
		  return Object.entries(handlers).reduce(function (acc, _ref) {
		    var _ref2 = _slicedToArray(_ref, 2),
		        event = _ref2[0],
		        handler = _ref2[1];
		
		    var next = component ? component.in.default.send : function () {};
		    acc[event] = function (e) {
		      return typeof handler === 'function' ? handler(e, next) : next(handler);
		    };
		    return acc;
		  }, {});
		};
		
		var toSnabbdom = function toSnabbdom(vdom) {
		  if (typeof vdom === 'string') return vdom;
		  if (Array.isArray(vdom)) {
		    return (0, _utils.flatMap)(vdom).map(toSnabbdom);
		  }
		
		  var _vdom$tag = vdom.tag,
		      tag = _vdom$tag === undefined ? 'div' : _vdom$tag,
		      _vdom$attrs = vdom.attrs,
		      attrs = _vdom$attrs === undefined ? {} : _vdom$attrs,
		      _vdom$on = vdom.on,
		      on = _vdom$on === undefined ? {} : _vdom$on,
		      _vdom$content = vdom.content,
		      content = _vdom$content === undefined ? [] : _vdom$content,
		      component = vdom.component;
		
		  var handlers = getHandlers(on, component);
		
		  return (0, _h2.default)(tag, { props: attrs, on: handlers }, toSnabbdom(content));
		};
		
		var SnabbdomRenderer = function SnabbdomRenderer(targetId) {
		  var patch = _snabbdom2.default.init([_eventlisteners2.default, _props2.default]);
		
		  var target = targetId ? document.getElementById(targetId) : document.body;
		  var lastVdom = target;
		
		  return (0, _graflow2.default)(function (vdom) {
		    var snabbdomVdom = toSnabbdom(vdom);
		    patch(lastVdom, snabbdomVdom);
		    lastVdom = snabbdomVdom;
		  });
		};
		
		exports.default = SnabbdomRenderer;

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		(function webpackUniversalModuleDefinition(root, factory) {
			if(true)
				module.exports = factory();
			else if(typeof define === 'function' && define.amd)
				define([], factory);
			else if(typeof exports === 'object')
				exports["graflow"] = factory();
			else
				root["graflow"] = factory();
		})(this, function() {
		return /******/ (function(modules) { // webpackBootstrap
		/******/ 	// The module cache
		/******/ 	var installedModules = {};
		/******/
		/******/ 	// The require function
		/******/ 	function __webpack_require__(moduleId) {
		/******/
		/******/ 		// Check if module is in cache
		/******/ 		if(installedModules[moduleId])
		/******/ 			return installedModules[moduleId].exports;
		/******/
		/******/ 		// Create a new module (and put it into the cache)
		/******/ 		var module = installedModules[moduleId] = {
		/******/ 			exports: {},
		/******/ 			id: moduleId,
		/******/ 			loaded: false
		/******/ 		};
		/******/
		/******/ 		// Execute the module function
		/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ 		// Flag the module as loaded
		/******/ 		module.loaded = true;
		/******/
		/******/ 		// Return the exports of the module
		/******/ 		return module.exports;
		/******/ 	}
		/******/
		/******/
		/******/ 	// expose the modules object (__webpack_modules__)
		/******/ 	__webpack_require__.m = modules;
		/******/
		/******/ 	// expose the module cache
		/******/ 	__webpack_require__.c = installedModules;
		/******/
		/******/ 	// __webpack_public_path__
		/******/ 	__webpack_require__.p = "";
		/******/
		/******/ 	// Load entry module and return exports
		/******/ 	return __webpack_require__(0);
		/******/ })
		/************************************************************************/
		/******/ ([
		/* 0 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _Component = __webpack_require__(1);
			
			Object.defineProperty(exports, 'default', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Component).default;
			  }
			});
			Object.defineProperty(exports, 'Component', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Component).default;
			  }
			});
			
			var _Mapper = __webpack_require__(2);
			
			Object.defineProperty(exports, 'Mapper', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Mapper).default;
			  }
			});
			
			var _Filter = __webpack_require__(3);
			
			Object.defineProperty(exports, 'Filter', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Filter).default;
			  }
			});
			
			var _Counter = __webpack_require__(4);
			
			Object.defineProperty(exports, 'Counter', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Counter).default;
			  }
			});
			
			var _Accumulator = __webpack_require__(5);
			
			Object.defineProperty(exports, 'Accumulator', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Accumulator).default;
			  }
			});
			
			var _Hub = __webpack_require__(6);
			
			Object.defineProperty(exports, 'Hub', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Hub).default;
			  }
			});
			
			var _Muxer = __webpack_require__(7);
			
			Object.defineProperty(exports, 'Muxer', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Muxer).default;
			  }
			});
			
			var _Demuxer = __webpack_require__(9);
			
			Object.defineProperty(exports, 'Demuxer', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Demuxer).default;
			  }
			});
			
			var _Iterator = __webpack_require__(10);
			
			Object.defineProperty(exports, 'Iterator', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Iterator).default;
			  }
			});
			
			var _Serializer = __webpack_require__(11);
			
			Object.defineProperty(exports, 'Serializer', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Serializer).default;
			  }
			});
			
			var _Repeater = __webpack_require__(12);
			
			Object.defineProperty(exports, 'Repeater', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Repeater).default;
			  }
			});
			
			var _UniqueFilter = __webpack_require__(13);
			
			Object.defineProperty(exports, 'UniqueFilter', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_UniqueFilter).default;
			  }
			});
			
			var _Logger = __webpack_require__(14);
			
			Object.defineProperty(exports, 'Logger', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Logger).default;
			  }
			});
			
			var _Chain = __webpack_require__(8);
			
			Object.defineProperty(exports, 'Chain', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Chain).default;
			  }
			});
			
			var _Checker = __webpack_require__(15);
			
			Object.defineProperty(exports, 'Checker', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Checker).default;
			  }
			});
			
			var _Guard = __webpack_require__(16);
			
			Object.defineProperty(exports, 'Guard', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Guard).default;
			  }
			});
			
			var _Identity = __webpack_require__(17);
			
			Object.defineProperty(exports, 'Identity', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Identity).default;
			  }
			});
			
			var _Delayer = __webpack_require__(18);
			
			Object.defineProperty(exports, 'Delayer', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Delayer).default;
			  }
			});
			
			var _Ticker = __webpack_require__(19);
			
			Object.defineProperty(exports, 'Ticker', {
			  enumerable: true,
			  get: function get() {
			    return _interopRequireDefault(_Ticker).default;
			  }
			});
		
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		/***/ },
		/* 1 */
		/***/ function(module, exports) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
			
			var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
			
			var toComponent = function toComponent(arg) {
			  if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') return arg;
			  var node = toNode(arg);
			  return {
			    start: function start() {
			      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			      return node.received(v);
			    },
			    inputs: { default: node },
			    outputs: { default: node },
			    in: { default: node },
			    out: { default: node }
			  };
			};
			
			var toNode = function toNode(arg) {
			  var result = arg;
			  if (typeof arg === 'function') {
			    result = node(arg);
			  }
			  return result;
			};
			
			var node = function node(onNext) {
			  var queue = [];
			  var listeners = [];
			  var next = function next(v) {
			    listeners.forEach(function (l) {
			      return l.addToQueue(v);
			    });
			    listeners.forEach(function (l) {
			      return l.processQueue();
			    });
			  };
			
			  var obj = {
			    addListener: function addListener(listener) {
			      listeners.push(toNode(listener));
			    },
			    on: function on(listener) {
			      obj.addListener(listener);
			    },
			    connect: function connect(listener) {
			      obj.addListener(listener);
			    },
			    addToQueue: function addToQueue(v) {
			      queue.push(v);
			    },
			    received: function received() {
			      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			
			      obj.addToQueue(v);
			      obj.processQueue();
			    },
			    send: function send() {
			      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			      obj.received(v);
			    },
			    processQueue: function processQueue() {
			      var values = queue.length;
			      for (var i = 1; i <= values; i++) {
			        var v = queue.shift();
			        onNext(v, next);
			      }
			    }
			  };
			
			  return obj;
			};
			
			var select = function select(name, components) {
			  var io = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'input';
			
			  var direction = io === 'input' ? 'inputs' : 'outputs';
			
			  var _name$split = name.split('.', 2),
			      _name$split2 = _slicedToArray(_name$split, 2),
			      componentName = _name$split2[0],
			      streamName = _name$split2[1];
			
			  var ioStreams = void 0;
			  var component = components[componentName];
			
			  if (component !== undefined) {
			    ioStreams = component[direction];
			    if (ioStreams !== undefined && streamName === undefined) {
			      var ioNames = Object.keys(ioStreams);
			      if (ioNames.length === 1) streamName = ioNames[0];
			    }
			  }
			
			  if (ioStreams === undefined || ioStreams[streamName] === undefined) {
			    throw new Error(io + ' stream ' + name + ' not found!');
			  }
			
			  return ioStreams[streamName];
			};
			
			var component2 = function component2(_ref) {
			  var components = _ref.components,
			      _ref$connections = _ref.connections,
			      connections = _ref$connections === undefined ? [] : _ref$connections,
			      _ref$inputs = _ref.inputs,
			      inputs = _ref$inputs === undefined ? ['default'] : _ref$inputs,
			      _ref$outputs = _ref.outputs,
			      outputs = _ref$outputs === undefined ? ['default'] : _ref$outputs;
			
			  Object.keys(components).forEach(function (key) {
			    components[key] = toComponent(components[key]);
			  });
			
			  var inNodes = inputs.reduce(function (acc, i) {
			    acc[i] = node(function (v, next) {
			      return next(v);
			    });
			    return acc;
			  }, {});
			
			  var outNodes = outputs.reduce(function (acc, i) {
			    acc[i] = node(function (v, next) {
			      return next(v);
			    });
			    return acc;
			  }, {});
			
			  components.in = { inputs: inNodes, outputs: inNodes };
			  components.out = { inputs: outNodes, outputs: outNodes };
			
			  connections.forEach(function (_ref2) {
			    var _ref3 = _slicedToArray(_ref2, 2),
			        from = _ref3[0],
			        to = _ref3[1];
			
			    var streamOut = select(from, components, 'output');
			    var streamIn = select(to, components, 'input');
			
			    streamOut.addListener(streamIn);
			  });
			
			  var comp = {
			    start: function start() {
			      var initialValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { default: {} };
			
			      if ((typeof initialValues === 'undefined' ? 'undefined' : _typeof(initialValues)) !== 'object') {
			        initialValues = { default: initialValues };
			      }
			      for (var key in initialValues) {
			        comp.inputs[key].received(initialValues[key]);
			      }
			    },
			    inputs: inNodes,
			    outputs: outNodes,
			    in: inNodes,
			    out: outNodes
			  };
			
			  return comp;
			};
			
			var Component = function Component(arg) {
			  if (typeof arg === 'function') {
			    return toComponent(arg);
			  } else {
			    return component2(arg);
			  }
			};
			
			exports.default = Component;
		
		/***/ },
		/* 2 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _Component = __webpack_require__(1);
			
			var _Component2 = _interopRequireDefault(_Component);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			var Mapper = function Mapper(f) {
			  return (0, _Component2.default)(function (v, next) {
			    return next(f(v));
			  });
			};
			
			exports.default = Mapper;
		
		/***/ },
		/* 3 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _Component = __webpack_require__(1);
			
			var _Component2 = _interopRequireDefault(_Component);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			var Filter = function Filter(cond) {
			  return (0, _Component2.default)(function (v, next) {
			    if (cond(v)) next(v);
			  });
			};
			
			exports.default = Filter;
		
		/***/ },
		/* 4 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _Component = __webpack_require__(1);
			
			var _Component2 = _interopRequireDefault(_Component);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			var Counter = function Counter() {
			  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
			
			  var value = initial;
			
			  return (0, _Component2.default)(function (v, next) {
			    value++;
			    next(value);
			  });
			};
			
			exports.default = Counter;
		
		/***/ },
		/* 5 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
			
			var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
			
			var _Component = __webpack_require__(1);
			
			var _Component2 = _interopRequireDefault(_Component);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			var Accumulator = function Accumulator() {
			  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			
			  var obj = initial;
			
			  return (0, _Component2.default)(function (v, next) {
			    if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) !== 'object') return;
			    Object.entries(v).forEach(function (_ref) {
			      var _ref2 = _slicedToArray(_ref, 2),
			          k = _ref2[0],
			          v = _ref2[1];
			
			      obj[k] = v;
			    });
			    next(obj);
			  });
			};
			
			exports.default = Accumulator;
		
		/***/ },
		/* 6 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _Component = __webpack_require__(1);
			
			var _Component2 = _interopRequireDefault(_Component);
			
			var _Mapper = __webpack_require__(2);
			
			var _Mapper2 = _interopRequireDefault(_Mapper);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
			
			var Hub = function Hub() {
			  for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
			    inputs[_key] = arguments[_key];
			  }
			
			  var components = {};
			  var connections = [];
			
			  inputs.forEach(function (i) {
			    components[i] = (0, _Mapper2.default)(function (v) {
			      return _defineProperty({}, i, v);
			    });
			    connections.push(['in.' + i, i], [i, 'out']);
			  });
			
			  return (0, _Component2.default)({ components: components, connections: connections, inputs: inputs });
			};
			
			exports.default = Hub;
		
		/***/ },
		/* 7 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _Chain = __webpack_require__(8);
			
			var _Chain2 = _interopRequireDefault(_Chain);
			
			var _Hub = __webpack_require__(6);
			
			var _Hub2 = _interopRequireDefault(_Hub);
			
			var _Accumulator = __webpack_require__(5);
			
			var _Accumulator2 = _interopRequireDefault(_Accumulator);
			
			var _Filter = __webpack_require__(3);
			
			var _Filter2 = _interopRequireDefault(_Filter);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			var Muxer = function Muxer() {
			  for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
			    inputs[_key] = arguments[_key];
			  }
			
			  return (0, _Chain2.default)(_Hub2.default.apply(undefined, inputs), (0, _Accumulator2.default)(), (0, _Filter2.default)(function (v) {
			    return inputs.every(function (i) {
			      return v[i] !== undefined;
			    });
			  }));
			};
			
			exports.default = Muxer;
		
		/***/ },
		/* 8 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
			
			var _Component = __webpack_require__(1);
			
			var _Component2 = _interopRequireDefault(_Component);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
			
			function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
			
			var Chain = function Chain() {
			  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			    args[_key] = arguments[_key];
			  }
			
			  var lastIndex = args.length - 1;
			  var _ref = [args[0], args[lastIndex]],
			      first = _ref[0],
			      last = _ref[1];
			
			
			  var components = args.reduce(function (obj, v, i) {
			    return _extends({}, obj, _defineProperty({}, 'c' + i, v));
			  }, {});
			
			  var inputs = Object.keys(first.inputs);
			  var outputs = Object.keys(last.outputs);
			
			  var connections = [].concat(_toConsumableArray(Array(lastIndex).keys())).map(function (i) {
			    return ['c' + i, 'c' + (i + 1)];
			  }).concat(inputs.map(function (input) {
			    return ['in.' + input, 'c0.' + input];
			  })).concat(outputs.map(function (output) {
			    return ['c' + lastIndex + '.' + output, 'out.' + output];
			  }));
			
			  return (0, _Component2.default)({ components: components, connections: connections, inputs: inputs, outputs: outputs });
			};
			
			exports.default = Chain;
		
		/***/ },
		/* 9 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _Component = __webpack_require__(1);
			
			var _Component2 = _interopRequireDefault(_Component);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			var flatMap = function flatMap(v) {
			  return [].concat.apply([], v);
			};
			
			var Demuxer = function Demuxer() {
			  for (var _len = arguments.length, outputs = Array(_len), _key = 0; _key < _len; _key++) {
			    outputs[_key] = arguments[_key];
			  }
			
			  return (0, _Component2.default)({
			    components: outputs.reduce(function (acc, output) {
			      acc[output] = (0, _Component2.default)(function (v, next) {
			        if (v[output] !== undefined) next(v[output]);
			      });
			      return acc;
			    }, {}),
			    outputs: outputs,
			    connections: flatMap(outputs.map(function (out) {
			      return [['in.default', out], [out, 'out.' + out]];
			    }))
			  });
			};
			
			exports.default = Demuxer;
		
		/***/ },
		/* 10 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _Component = __webpack_require__(1);
			
			var _Component2 = _interopRequireDefault(_Component);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			var Iterator = function Iterator(iterable) {
			  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
			      _ref$cyclic = _ref.cyclic,
			      cyclic = _ref$cyclic === undefined ? false : _ref$cyclic;
			
			  var iterator = iterable[Symbol.iterator]();
			
			  return (0, _Component2.default)(function (v, next) {
			    var _iterator$next = iterator.next(),
			        value = _iterator$next.value,
			        done = _iterator$next.done;
			
			    if (done && cyclic) {
			      iterator = iterable[Symbol.iterator]();
			      var _iterator$next2 = iterator.next();
			
			      value = _iterator$next2.value;
			      done = _iterator$next2.done;
			    }
			
			    if (!done) next(value);
			  });
			};
			
			exports.default = Iterator;
		
		/***/ },
		/* 11 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _Component = __webpack_require__(1);
			
			var _Component2 = _interopRequireDefault(_Component);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			var Serializer = function Serializer() {
			  return (0, _Component2.default)(function (iterable, next) {
			    if (iterable[Symbol.iterator]) {
			      var _iteratorNormalCompletion = true;
			      var _didIteratorError = false;
			      var _iteratorError = undefined;
			
			      try {
			        for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			          var i = _step.value;
			          next(i);
			        }
			      } catch (err) {
			        _didIteratorError = true;
			        _iteratorError = err;
			      } finally {
			        try {
			          if (!_iteratorNormalCompletion && _iterator.return) {
			            _iterator.return();
			          }
			        } finally {
			          if (_didIteratorError) {
			            throw _iteratorError;
			          }
			        }
			      }
			    }
			  });
			};
			
			exports.default = Serializer;
		
		/***/ },
		/* 12 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _Component = __webpack_require__(1);
			
			var _Component2 = _interopRequireDefault(_Component);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			var Repeater = function Repeater(times) {
			  return (0, _Component2.default)(function (v, next) {
			    for (var i = 1; i <= times; i++) {
			      next(v);
			    }
			  });
			};
			
			exports.default = Repeater;
		
		/***/ },
		/* 13 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _Component = __webpack_require__(1);
			
			var _Component2 = _interopRequireDefault(_Component);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			var UniqueFilter = function UniqueFilter(initialValue) {
			  var lastValue = initialValue;
			
			  return (0, _Component2.default)(function (v, next) {
			    if (v !== lastValue) {
			      lastValue = v;
			      next(v);
			    }
			  });
			};
			
			exports.default = UniqueFilter;
		
		/***/ },
		/* 14 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _Component = __webpack_require__(1);
			
			var _Component2 = _interopRequireDefault(_Component);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			var Logger = function Logger() {
			  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			      prefix = _ref.prefix,
			      _ref$log = _ref.log,
			      log = _ref$log === undefined ? console.log : _ref$log;
			
			  return (0, _Component2.default)(function (v, next) {
			    if (prefix === undefined) {
			      log(v);
			    } else {
			      log(prefix, v);
			    }
			    next(v);
			  });
			};
			
			exports.default = Logger;
		
		/***/ },
		/* 15 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _Chain = __webpack_require__(8);
			
			var _Chain2 = _interopRequireDefault(_Chain);
			
			var _Mapper = __webpack_require__(2);
			
			var _Mapper2 = _interopRequireDefault(_Mapper);
			
			var _Demuxer = __webpack_require__(9);
			
			var _Demuxer2 = _interopRequireDefault(_Demuxer);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			var Checker = function Checker(cond) {
			  return (0, _Chain2.default)((0, _Mapper2.default)(function (v) {
			    return cond(v) ? { true: v } : { false: v };
			  }), (0, _Demuxer2.default)('true', 'false'));
			};
			
			exports.default = Checker;
		
		/***/ },
		/* 16 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
			
			var _Component = __webpack_require__(1);
			
			var _Component2 = _interopRequireDefault(_Component);
			
			var _Chain = __webpack_require__(8);
			
			var _Chain2 = _interopRequireDefault(_Chain);
			
			var _Demuxer = __webpack_require__(9);
			
			var _Demuxer2 = _interopRequireDefault(_Demuxer);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
			
			function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
			
			var Guard = function Guard(conds) {
			  return (0, _Chain2.default)((0, _Component2.default)(function (v, next) {
			    Object.entries(conds).forEach(function (_ref) {
			      var _ref2 = _slicedToArray(_ref, 2),
			          name = _ref2[0],
			          cond = _ref2[1];
			
			      var others = [];
			      var match = false;
			
			      if (cond === 'otherwise') {
			        others.push(name);
			      } else if (typeof cond === 'function' && cond(v)) {
			        next(_defineProperty({}, name, v));
			        match = true;
			      }
			
			      if (!match) others.forEach(function (name) {
			        return next(_defineProperty({}, name, v));
			      });
			    });
			  }), _Demuxer2.default.apply(undefined, _toConsumableArray(Object.keys(conds))));
			};
			
			exports.default = Guard;
		
		/***/ },
		/* 17 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _Mapper = __webpack_require__(2);
			
			var _Mapper2 = _interopRequireDefault(_Mapper);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			var Identity = function Identity() {
			  return (0, _Mapper2.default)(function (v) {
			    return v;
			  });
			};
			
			exports.default = Identity;
		
		/***/ },
		/* 18 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _Component = __webpack_require__(1);
			
			var _Component2 = _interopRequireDefault(_Component);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			var Delayer = function Delayer(ms) {
			  return (0, _Component2.default)(function (v, next) {
			    setTimeout(function () {
			      return next(v);
			    }, ms);
			  });
			};
			
			exports.default = Delayer;
		
		/***/ },
		/* 19 */
		/***/ function(module, exports, __webpack_require__) {
		
			'use strict';
			
			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			
			var _Component = __webpack_require__(1);
			
			var _Component2 = _interopRequireDefault(_Component);
			
			function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
			
			var Ticker = function Ticker(ms) {
			  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
			      _ref$value = _ref.value,
			      value = _ref$value === undefined ? {} : _ref$value,
			      _ref$initialDelay = _ref.initialDelay,
			      initialDelay = _ref$initialDelay === undefined ? false : _ref$initialDelay;
			
			  return (0, _Component2.default)(function (v, next) {
			    if (!initialDelay) next(value);
			    setInterval(function () {
			      return next(value);
			    }, ms);
			  });
			};
			
			exports.default = Ticker;
		
		/***/ }
		/******/ ])
		});
		;
		//# sourceMappingURL=graflow.js.map

	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var flatMap = function flatMap(v) {
		  return [].concat.apply([], v);
		};
		
		exports.flatMap = flatMap;

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var vnode_1 = __webpack_require__(6);
		var is = __webpack_require__(7);
		var htmldomapi_1 = __webpack_require__(8);
		function isUndef(s) { return s === undefined; }
		function isDef(s) { return s !== undefined; }
		var emptyNode = vnode_1.default('', {}, [], undefined, undefined);
		function sameVnode(vnode1, vnode2) {
		    return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
		}
		function isVnode(vnode) {
		    return vnode.sel !== undefined;
		}
		function createKeyToOldIdx(children, beginIdx, endIdx) {
		    var i, map = {}, key, ch;
		    for (i = beginIdx; i <= endIdx; ++i) {
		        ch = children[i];
		        if (ch != null) {
		            key = ch.key;
		            if (key !== undefined)
		                map[key] = i;
		        }
		    }
		    return map;
		}
		var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];
		var h_1 = __webpack_require__(9);
		exports.h = h_1.h;
		var thunk_1 = __webpack_require__(10);
		exports.thunk = thunk_1.thunk;
		function init(modules, domApi) {
		    var i, j, cbs = {};
		    var api = domApi !== undefined ? domApi : htmldomapi_1.default;
		    for (i = 0; i < hooks.length; ++i) {
		        cbs[hooks[i]] = [];
		        for (j = 0; j < modules.length; ++j) {
		            var hook = modules[j][hooks[i]];
		            if (hook !== undefined) {
		                cbs[hooks[i]].push(hook);
		            }
		        }
		    }
		    function emptyNodeAt(elm) {
		        var id = elm.id ? '#' + elm.id : '';
		        var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';
		        return vnode_1.default(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
		    }
		    function createRmCb(childElm, listeners) {
		        return function rmCb() {
		            if (--listeners === 0) {
		                var parent_1 = api.parentNode(childElm);
		                api.removeChild(parent_1, childElm);
		            }
		        };
		    }
		    function createElm(vnode, insertedVnodeQueue) {
		        var i, data = vnode.data;
		        if (data !== undefined) {
		            if (isDef(i = data.hook) && isDef(i = i.init)) {
		                i(vnode);
		                data = vnode.data;
		            }
		        }
		        var children = vnode.children, sel = vnode.sel;
		        if (sel === '!') {
		            if (isUndef(vnode.text)) {
		                vnode.text = '';
		            }
		            vnode.elm = api.createComment(vnode.text);
		        }
		        else if (sel !== undefined) {
		            // Parse selector
		            var hashIdx = sel.indexOf('#');
		            var dotIdx = sel.indexOf('.', hashIdx);
		            var hash = hashIdx > 0 ? hashIdx : sel.length;
		            var dot = dotIdx > 0 ? dotIdx : sel.length;
		            var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
		            var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag)
		                : api.createElement(tag);
		            if (hash < dot)
		                elm.id = sel.slice(hash + 1, dot);
		            if (dotIdx > 0)
		                elm.className = sel.slice(dot + 1).replace(/\./g, ' ');
		            if (is.array(children)) {
		                for (i = 0; i < children.length; ++i) {
		                    var ch = children[i];
		                    if (ch != null) {
		                        api.appendChild(elm, createElm(ch, insertedVnodeQueue));
		                    }
		                }
		            }
		            else if (is.primitive(vnode.text)) {
		                api.appendChild(elm, api.createTextNode(vnode.text));
		            }
		            for (i = 0; i < cbs.create.length; ++i)
		                cbs.create[i](emptyNode, vnode);
		            i = vnode.data.hook; // Reuse variable
		            if (isDef(i)) {
		                if (i.create)
		                    i.create(emptyNode, vnode);
		                if (i.insert)
		                    insertedVnodeQueue.push(vnode);
		            }
		        }
		        else {
		            vnode.elm = api.createTextNode(vnode.text);
		        }
		        return vnode.elm;
		    }
		    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
		        for (; startIdx <= endIdx; ++startIdx) {
		            var ch = vnodes[startIdx];
		            if (ch != null) {
		                api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
		            }
		        }
		    }
		    function invokeDestroyHook(vnode) {
		        var i, j, data = vnode.data;
		        if (data !== undefined) {
		            if (isDef(i = data.hook) && isDef(i = i.destroy))
		                i(vnode);
		            for (i = 0; i < cbs.destroy.length; ++i)
		                cbs.destroy[i](vnode);
		            if (vnode.children !== undefined) {
		                for (j = 0; j < vnode.children.length; ++j) {
		                    i = vnode.children[j];
		                    if (i != null && typeof i !== "string") {
		                        invokeDestroyHook(i);
		                    }
		                }
		            }
		        }
		    }
		    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
		        for (; startIdx <= endIdx; ++startIdx) {
		            var i_1 = void 0, listeners = void 0, rm = void 0, ch = vnodes[startIdx];
		            if (ch != null) {
		                if (isDef(ch.sel)) {
		                    invokeDestroyHook(ch);
		                    listeners = cbs.remove.length + 1;
		                    rm = createRmCb(ch.elm, listeners);
		                    for (i_1 = 0; i_1 < cbs.remove.length; ++i_1)
		                        cbs.remove[i_1](ch, rm);
		                    if (isDef(i_1 = ch.data) && isDef(i_1 = i_1.hook) && isDef(i_1 = i_1.remove)) {
		                        i_1(ch, rm);
		                    }
		                    else {
		                        rm();
		                    }
		                }
		                else {
		                    api.removeChild(parentElm, ch.elm);
		                }
		            }
		        }
		    }
		    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
		        var oldStartIdx = 0, newStartIdx = 0;
		        var oldEndIdx = oldCh.length - 1;
		        var oldStartVnode = oldCh[0];
		        var oldEndVnode = oldCh[oldEndIdx];
		        var newEndIdx = newCh.length - 1;
		        var newStartVnode = newCh[0];
		        var newEndVnode = newCh[newEndIdx];
		        var oldKeyToIdx;
		        var idxInOld;
		        var elmToMove;
		        var before;
		        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
		            if (oldStartVnode == null) {
		                oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
		            }
		            else if (oldEndVnode == null) {
		                oldEndVnode = oldCh[--oldEndIdx];
		            }
		            else if (newStartVnode == null) {
		                newStartVnode = newCh[++newStartIdx];
		            }
		            else if (newEndVnode == null) {
		                newEndVnode = newCh[--newEndIdx];
		            }
		            else if (sameVnode(oldStartVnode, newStartVnode)) {
		                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
		                oldStartVnode = oldCh[++oldStartIdx];
		                newStartVnode = newCh[++newStartIdx];
		            }
		            else if (sameVnode(oldEndVnode, newEndVnode)) {
		                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
		                oldEndVnode = oldCh[--oldEndIdx];
		                newEndVnode = newCh[--newEndIdx];
		            }
		            else if (sameVnode(oldStartVnode, newEndVnode)) {
		                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
		                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
		                oldStartVnode = oldCh[++oldStartIdx];
		                newEndVnode = newCh[--newEndIdx];
		            }
		            else if (sameVnode(oldEndVnode, newStartVnode)) {
		                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
		                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
		                oldEndVnode = oldCh[--oldEndIdx];
		                newStartVnode = newCh[++newStartIdx];
		            }
		            else {
		                if (oldKeyToIdx === undefined) {
		                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
		                }
		                idxInOld = oldKeyToIdx[newStartVnode.key];
		                if (isUndef(idxInOld)) {
		                    api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
		                    newStartVnode = newCh[++newStartIdx];
		                }
		                else {
		                    elmToMove = oldCh[idxInOld];
		                    if (elmToMove.sel !== newStartVnode.sel) {
		                        api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
		                    }
		                    else {
		                        patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
		                        oldCh[idxInOld] = undefined;
		                        api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
		                    }
		                    newStartVnode = newCh[++newStartIdx];
		                }
		            }
		        }
		        if (oldStartIdx > oldEndIdx) {
		            before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
		            addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
		        }
		        else if (newStartIdx > newEndIdx) {
		            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
		        }
		    }
		    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
		        var i, hook;
		        if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
		            i(oldVnode, vnode);
		        }
		        var elm = vnode.elm = oldVnode.elm;
		        var oldCh = oldVnode.children;
		        var ch = vnode.children;
		        if (oldVnode === vnode)
		            return;
		        if (vnode.data !== undefined) {
		            for (i = 0; i < cbs.update.length; ++i)
		                cbs.update[i](oldVnode, vnode);
		            i = vnode.data.hook;
		            if (isDef(i) && isDef(i = i.update))
		                i(oldVnode, vnode);
		        }
		        if (isUndef(vnode.text)) {
		            if (isDef(oldCh) && isDef(ch)) {
		                if (oldCh !== ch)
		                    updateChildren(elm, oldCh, ch, insertedVnodeQueue);
		            }
		            else if (isDef(ch)) {
		                if (isDef(oldVnode.text))
		                    api.setTextContent(elm, '');
		                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
		            }
		            else if (isDef(oldCh)) {
		                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
		            }
		            else if (isDef(oldVnode.text)) {
		                api.setTextContent(elm, '');
		            }
		        }
		        else if (oldVnode.text !== vnode.text) {
		            api.setTextContent(elm, vnode.text);
		        }
		        if (isDef(hook) && isDef(i = hook.postpatch)) {
		            i(oldVnode, vnode);
		        }
		    }
		    return function patch(oldVnode, vnode) {
		        var i, elm, parent;
		        var insertedVnodeQueue = [];
		        for (i = 0; i < cbs.pre.length; ++i)
		            cbs.pre[i]();
		        if (!isVnode(oldVnode)) {
		            oldVnode = emptyNodeAt(oldVnode);
		        }
		        if (sameVnode(oldVnode, vnode)) {
		            patchVnode(oldVnode, vnode, insertedVnodeQueue);
		        }
		        else {
		            elm = oldVnode.elm;
		            parent = api.parentNode(elm);
		            createElm(vnode, insertedVnodeQueue);
		            if (parent !== null) {
		                api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
		                removeVnodes(parent, [oldVnode], 0, 0);
		            }
		        }
		        for (i = 0; i < insertedVnodeQueue.length; ++i) {
		            insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
		        }
		        for (i = 0; i < cbs.post.length; ++i)
		            cbs.post[i]();
		        return vnode;
		    };
		}
		exports.init = init;
		//# sourceMappingURL=snabbdom.js.map

	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		"use strict";
		function vnode(sel, data, children, text, elm) {
		    var key = data === undefined ? undefined : data.key;
		    return { sel: sel, data: data, children: children,
		        text: text, elm: elm, key: key };
		}
		exports.vnode = vnode;
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = vnode;
		//# sourceMappingURL=vnode.js.map

	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		"use strict";
		exports.array = Array.isArray;
		function primitive(s) {
		    return typeof s === 'string' || typeof s === 'number';
		}
		exports.primitive = primitive;
		//# sourceMappingURL=is.js.map

	/***/ },
	/* 8 */
	/***/ function(module, exports) {

		"use strict";
		function createElement(tagName) {
		    return document.createElement(tagName);
		}
		function createElementNS(namespaceURI, qualifiedName) {
		    return document.createElementNS(namespaceURI, qualifiedName);
		}
		function createTextNode(text) {
		    return document.createTextNode(text);
		}
		function createComment(text) {
		    return document.createComment(text);
		}
		function insertBefore(parentNode, newNode, referenceNode) {
		    parentNode.insertBefore(newNode, referenceNode);
		}
		function removeChild(node, child) {
		    node.removeChild(child);
		}
		function appendChild(node, child) {
		    node.appendChild(child);
		}
		function parentNode(node) {
		    return node.parentNode;
		}
		function nextSibling(node) {
		    return node.nextSibling;
		}
		function tagName(elm) {
		    return elm.tagName;
		}
		function setTextContent(node, text) {
		    node.textContent = text;
		}
		function getTextContent(node) {
		    return node.textContent;
		}
		function isElement(node) {
		    return node.nodeType === 1;
		}
		function isText(node) {
		    return node.nodeType === 3;
		}
		function isComment(node) {
		    return node.nodeType === 8;
		}
		exports.htmlDomApi = {
		    createElement: createElement,
		    createElementNS: createElementNS,
		    createTextNode: createTextNode,
		    createComment: createComment,
		    insertBefore: insertBefore,
		    removeChild: removeChild,
		    appendChild: appendChild,
		    parentNode: parentNode,
		    nextSibling: nextSibling,
		    tagName: tagName,
		    setTextContent: setTextContent,
		    getTextContent: getTextContent,
		    isElement: isElement,
		    isText: isText,
		    isComment: isComment,
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = exports.htmlDomApi;
		//# sourceMappingURL=htmldomapi.js.map

	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var vnode_1 = __webpack_require__(6);
		var is = __webpack_require__(7);
		function addNS(data, children, sel) {
		    data.ns = 'http://www.w3.org/2000/svg';
		    if (sel !== 'foreignObject' && children !== undefined) {
		        for (var i = 0; i < children.length; ++i) {
		            var childData = children[i].data;
		            if (childData !== undefined) {
		                addNS(childData, children[i].children, children[i].sel);
		            }
		        }
		    }
		}
		function h(sel, b, c) {
		    var data = {}, children, text, i;
		    if (c !== undefined) {
		        data = b;
		        if (is.array(c)) {
		            children = c;
		        }
		        else if (is.primitive(c)) {
		            text = c;
		        }
		        else if (c && c.sel) {
		            children = [c];
		        }
		    }
		    else if (b !== undefined) {
		        if (is.array(b)) {
		            children = b;
		        }
		        else if (is.primitive(b)) {
		            text = b;
		        }
		        else if (b && b.sel) {
		            children = [b];
		        }
		        else {
		            data = b;
		        }
		    }
		    if (is.array(children)) {
		        for (i = 0; i < children.length; ++i) {
		            if (is.primitive(children[i]))
		                children[i] = vnode_1.vnode(undefined, undefined, undefined, children[i]);
		        }
		    }
		    if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&
		        (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {
		        addNS(data, children, sel);
		    }
		    return vnode_1.vnode(sel, data, children, text, undefined);
		}
		exports.h = h;
		;
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = h;
		//# sourceMappingURL=h.js.map

	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		var h_1 = __webpack_require__(9);
		function copyToThunk(vnode, thunk) {
		    thunk.elm = vnode.elm;
		    vnode.data.fn = thunk.data.fn;
		    vnode.data.args = thunk.data.args;
		    thunk.data = vnode.data;
		    thunk.children = vnode.children;
		    thunk.text = vnode.text;
		    thunk.elm = vnode.elm;
		}
		function init(thunk) {
		    var cur = thunk.data;
		    var vnode = cur.fn.apply(undefined, cur.args);
		    copyToThunk(vnode, thunk);
		}
		function prepatch(oldVnode, thunk) {
		    var i, old = oldVnode.data, cur = thunk.data;
		    var oldArgs = old.args, args = cur.args;
		    if (old.fn !== cur.fn || oldArgs.length !== args.length) {
		        copyToThunk(cur.fn.apply(undefined, args), thunk);
		    }
		    for (i = 0; i < args.length; ++i) {
		        if (oldArgs[i] !== args[i]) {
		            copyToThunk(cur.fn.apply(undefined, args), thunk);
		            return;
		        }
		    }
		    copyToThunk(oldVnode, thunk);
		}
		exports.thunk = function thunk(sel, key, fn, args) {
		    if (args === undefined) {
		        args = fn;
		        fn = key;
		        key = undefined;
		    }
		    return h_1.h(sel, {
		        key: key,
		        hook: { init: init, prepatch: prepatch },
		        fn: fn,
		        args: args
		    });
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = exports.thunk;
		//# sourceMappingURL=thunk.js.map

	/***/ },
	/* 11 */
	/***/ function(module, exports) {

		"use strict";
		function invokeHandler(handler, vnode, event) {
		    if (typeof handler === "function") {
		        // call function handler
		        handler.call(vnode, event, vnode);
		    }
		    else if (typeof handler === "object") {
		        // call handler with arguments
		        if (typeof handler[0] === "function") {
		            // special case for single argument for performance
		            if (handler.length === 2) {
		                handler[0].call(vnode, handler[1], event, vnode);
		            }
		            else {
		                var args = handler.slice(1);
		                args.push(event);
		                args.push(vnode);
		                handler[0].apply(vnode, args);
		            }
		        }
		        else {
		            // call multiple handlers
		            for (var i = 0; i < handler.length; i++) {
		                invokeHandler(handler[i]);
		            }
		        }
		    }
		}
		function handleEvent(event, vnode) {
		    var name = event.type, on = vnode.data.on;
		    // call event handler(s) if exists
		    if (on && on[name]) {
		        invokeHandler(on[name], vnode, event);
		    }
		}
		function createListener() {
		    return function handler(event) {
		        handleEvent(event, handler.vnode);
		    };
		}
		function updateEventListeners(oldVnode, vnode) {
		    var oldOn = oldVnode.data.on, oldListener = oldVnode.listener, oldElm = oldVnode.elm, on = vnode && vnode.data.on, elm = (vnode && vnode.elm), name;
		    // optimization for reused immutable handlers
		    if (oldOn === on) {
		        return;
		    }
		    // remove existing listeners which no longer used
		    if (oldOn && oldListener) {
		        // if element changed or deleted we remove all existing listeners unconditionally
		        if (!on) {
		            for (name in oldOn) {
		                // remove listener if element was changed or existing listeners removed
		                oldElm.removeEventListener(name, oldListener, false);
		            }
		        }
		        else {
		            for (name in oldOn) {
		                // remove listener if existing listener removed
		                if (!on[name]) {
		                    oldElm.removeEventListener(name, oldListener, false);
		                }
		            }
		        }
		    }
		    // add new listeners which has not already attached
		    if (on) {
		        // reuse existing listener or create new
		        var listener = vnode.listener = oldVnode.listener || createListener();
		        // update vnode for listener
		        listener.vnode = vnode;
		        // if element changed or added we add all needed listeners unconditionally
		        if (!oldOn) {
		            for (name in on) {
		                // add listener if element was changed or new listeners added
		                elm.addEventListener(name, listener, false);
		            }
		        }
		        else {
		            for (name in on) {
		                // add listener if new listener added
		                if (!oldOn[name]) {
		                    elm.addEventListener(name, listener, false);
		                }
		            }
		        }
		    }
		}
		exports.eventListenersModule = {
		    create: updateEventListeners,
		    update: updateEventListeners,
		    destroy: updateEventListeners
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = exports.eventListenersModule;
		//# sourceMappingURL=eventlisteners.js.map

	/***/ },
	/* 12 */
	/***/ function(module, exports) {

		"use strict";
		function updateProps(oldVnode, vnode) {
		    var key, cur, old, elm = vnode.elm, oldProps = oldVnode.data.props, props = vnode.data.props;
		    if (!oldProps && !props)
		        return;
		    if (oldProps === props)
		        return;
		    oldProps = oldProps || {};
		    props = props || {};
		    for (key in oldProps) {
		        if (!props[key]) {
		            delete elm[key];
		        }
		    }
		    for (key in props) {
		        cur = props[key];
		        old = oldProps[key];
		        if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
		            elm[key] = cur;
		        }
		    }
		}
		exports.propsModule = { create: updateProps, update: updateProps };
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = exports.propsModule;
		//# sourceMappingURL=props.js.map

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _graflow = __webpack_require__(3);
		
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
		
		var toCanonicalItem = function toCanonicalItem(msg) {
		  var m = typeof msg === 'string' ? [msg] : msg;
		
		  var _m = _slicedToArray(m, 2),
		      name = _m[0],
		      _m$ = _m[1],
		      payload = _m$ === undefined ? {} : _m$;
		
		  var _name$split = name.split('.', 2),
		      _name$split2 = _slicedToArray(_name$split, 2),
		      componentName = _name$split2[0],
		      _name$split2$ = _name$split2[1],
		      signal = _name$split2$ === undefined ? 'default' : _name$split2$;
		
		  if (componentName === 'out') {
		    return { outputs: _defineProperty({}, signal, payload) };
		  } else {
		    return { components: _defineProperty({}, componentName, _defineProperty({}, signal, payload)) };
		  }
		};
		
		var toCanonicalMessage = function toCanonicalMessage(msg) {
		  return [].concat(msg).map(toCanonicalItem);
		};
		
		var State = function State() {
		  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		
		  var post = options.post;
		  var state = options.initial || {};
		
		  return (0, _graflow.Component)({
		    inputs: ['transformation'],
		    outputs: ['state', 'outputs', 'components'],
		    components: {
		      transform: (0, _graflow.Component)(function (v, next) {
		        state = v(state);
		        next(state);
		      }),
		      post: (0, _graflow.Chain)((0, _graflow.Component)(function (state, next) {
		        if (post) next(toCanonicalMessage(post(state)));
		      }), (0, _graflow.Serializer)(), (0, _graflow.Demuxer)('outputs', 'components'))
		    },
		    connections: [['in.transformation', 'transform'], ['transform', 'post'], ['transform', 'out.state'], ['post.outputs', 'out.outputs'], ['post.components', 'out.components']]
		  });
		};
		
		exports.default = State;

	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _graflow = __webpack_require__(3);
		
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
		
		var toCanonicalItem = function toCanonicalItem(msg) {
		  var m = msg;
		  if (typeof msg === 'function') {
		    m = ['state', msg];
		  } else if (typeof msg === 'string') {
		    m = [msg];
		  }
		
		  var _m = m,
		      _m2 = _slicedToArray(_m, 2),
		      name = _m2[0],
		      _m2$ = _m2[1],
		      payload = _m2$ === undefined ? {} : _m2$;
		
		  var _name$split = name.split('.', 2),
		      _name$split2 = _slicedToArray(_name$split, 2),
		      componentName = _name$split2[0],
		      _name$split2$ = _name$split2[1],
		      signal = _name$split2$ === undefined ? 'default' : _name$split2$;
		
		  if (componentName === 'state') {
		    return { state: payload };
		  } else if (componentName === 'out') {
		    return { outputs: _defineProperty({}, signal, payload) };
		  } else {
		    return { components: _defineProperty({}, componentName, _defineProperty({}, signal, payload)) };
		  }
		};
		
		var toCanonicalMessage = function toCanonicalMessage(msg) {
		  return [].concat(msg).map(toCanonicalItem);
		};
		
		var Events = function Events(events) {
		  return (0, _graflow.Chain)((0, _graflow.Component)(function (_ref, next) {
		    var _ref2 = _slicedToArray(_ref, 2),
		        _ref2$ = _slicedToArray(_ref2[0], 2),
		        e = _ref2$[0],
		        payload = _ref2$[1],
		        state = _ref2[1];
		
		    if (events[e]) {
		      var v = events[e](payload, state || {});
		      if (v !== undefined) next(toCanonicalMessage(v));
		    }
		  }), (0, _graflow.Serializer)(), (0, _graflow.Demuxer)('state', 'components', 'outputs'));
		};
		
		exports.default = Events;

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
		
		var _graflow = __webpack_require__(3);
		
		var setComponent = function setComponent(vdom, component) {
		  if (Array.isArray(vdom)) {
		    vdom.map(function (e) {
		      return setComponent(e, component);
		    });
		  } else {
		    if ((typeof vdom === 'undefined' ? 'undefined' : _typeof(vdom)) === 'object' && !vdom.component) vdom.component = component;
		    if (vdom.content) setComponent(vdom.content, component);
		  }
		  return vdom;
		};
		
		var View = function View(view, component) {
		  return (0, _graflow.Component)({
		    inputs: ['vdom', 'state'],
		    components: {
		      vdomAccumulator: (0, _graflow.Accumulator)(),
		      hub: (0, _graflow.Hub)('vdom', 'state'),
		      globalAccumulator: (0, _graflow.Accumulator)(),
		      view: (0, _graflow.Mapper)(function (_ref) {
		        var _ref$state = _ref.state,
		            state = _ref$state === undefined ? {} : _ref$state,
		            _ref$vdom = _ref.vdom,
		            vdom = _ref$vdom === undefined ? {} : _ref$vdom;
		        return view(state, vdom);
		      }),
		      filter: (0, _graflow.Filter)(function (v) {
		        return v !== undefined;
		      }),
		      post: (0, _graflow.Mapper)(function (vdom) {
		        return setComponent(vdom, component);
		      })
		    },
		    connections: [['in.vdom', 'vdomAccumulator'], ['vdomAccumulator', 'hub.vdom'], ['in.state', 'hub.state'], ['hub', 'globalAccumulator'], ['globalAccumulator', 'view'], ['view', 'filter'], ['filter', 'post'], ['post', 'out']]
		  });
		};
		
		exports.default = View;

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _State = __webpack_require__(13);
		
		var _State2 = _interopRequireDefault(_State);
		
		var _Events = __webpack_require__(14);
		
		var _Events2 = _interopRequireDefault(_Events);
		
		var _View = __webpack_require__(15);
		
		var _View2 = _interopRequireDefault(_View);
		
		var _BlockComponents = __webpack_require__(17);
		
		var _BlockComponents2 = _interopRequireDefault(_BlockComponents);
		
		var _graflow = __webpack_require__(3);
		
		var _utils = __webpack_require__(4);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
		
		function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
		
		var Memory = function Memory() {
		  var memory = void 0;
		  return (0, _graflow.Component)({
		    inputs: ['set', 'get'],
		    components: {
		      set: (0, _graflow.Component)(function (v) {
		        return memory = v;
		      }),
		      get: (0, _graflow.Mapper)(function (v) {
		        return [v, memory];
		      })
		    },
		    connections: [['in.set', 'set'], ['in.get', 'get'], ['get', 'out']]
		  });
		};
		
		var toObject = function toObject(kvs) {
		  return kvs.reduce(function (obj, _ref) {
		    var _ref2 = _slicedToArray(_ref, 2),
		        k = _ref2[0],
		        v = _ref2[1];
		
		    obj[k] = v;
		    return obj;
		  }, {});
		};
		
		var Block = function Block(options) {
		  var eventInputs = options.inputs || [];
		  var inputs = eventInputs.concat('init');
		
		  var eventOutputs = options.outputs || [];
		  var outputs = eventOutputs.concat('vdom');
		
		  var _ref3 = options.on || {},
		      postState = _ref3.state,
		      handlers = _objectWithoutProperties(_ref3, ['state']);
		
		  var event = (0, _graflow.Mapper)(function (msg) {
		    return [].concat(msg);
		  });
		
		  var eventState = (0, _graflow.Component)({
		    inputs: ['state', 'event'],
		    components: { state: Memory() },
		    connections: [['in.state', 'state.set'], ['in.event', 'state.get'], ['state', 'out']]
		  });
		
		  var state = (0, _State2.default)({ post: postState });
		  var events = (0, _Events2.default)(handlers);
		  var view = (0, _View2.default)(options.view, event);
		  var mapInputs = inputs.map(function (i) {
		    return ['map' + i, (0, _graflow.Mapper)(function (v) {
		      return [i, v];
		    })];
		  });
		
		  var comps = (0, _BlockComponents2.default)(options.components || {});
		
		  var outputDemuxer = _graflow.Demuxer.apply(undefined, _toConsumableArray(eventOutputs));
		
		  var components = _extends({ state: state, events: events, view: view, comps: comps,
		    outputDemuxer: outputDemuxer, eventState: eventState, event: event }, toObject(mapInputs));
		
		  var inputConnections = (0, _utils.flatMap)(inputs.map(function (input) {
		    return [['in.' + input, 'map' + input], ['map' + input, 'event']];
		  }));
		
		  var outputConnections = eventOutputs.map(function (output) {
		    return ['outputDemuxer.' + output, 'out.' + output];
		  });
		
		  var connections = inputConnections.concat(outputConnections).concat([['events.state', 'state'], ['events.components', 'comps'], ['events.outputs', 'outputDemuxer'], ['event', 'eventState.event'], ['comps.events', 'eventState.event'], ['state.state', 'eventState.state'], ['eventState', 'events'], ['comps.vdom', 'view.vdom'], ['state.state', 'view.state'], ['state.outputs', 'outputDemuxer'], ['state.components', 'comps'], ['view', 'out.vdom']]);
		
		  return (0, _graflow.Component)({ inputs: inputs, outputs: outputs, components: components, connections: connections });
		};
		
		exports.default = Block;

	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _graflow = __webpack_require__(3);
		
		var _utils = __webpack_require__(4);
		
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
		
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
		
		var ComponentWrapper = function ComponentWrapper(comp, name) {
		  var compInputs = Object.keys(comp.inputs);
		  var compOutputs = Object.keys(comp.outputs);
		
		  var components = {
		    main: comp,
		    demuxer: _graflow.Demuxer.apply(undefined, _toConsumableArray(compInputs)),
		    muxer: _graflow.Hub.apply(undefined, _toConsumableArray(compOutputs))
		  };
		
		  var connections = [['in', 'demuxer'], ['muxer', 'out']].concat(compInputs.map(function (input) {
		    return ['demuxer.' + input, 'main.' + input];
		  })).concat(compOutputs.map(function (output) {
		    return ['main.' + output, 'muxer.' + output];
		  }));
		
		  var result = (0, _graflow.Component)({ components: components, connections: connections });
		  if (name) result = (0, _graflow.Chain)(result, (0, _graflow.Mapper)(function (v) {
		    return _defineProperty({}, name, v);
		  }));
		
		  return result;
		};
		
		var Post = function Post() {
		  return (0, _graflow.Chain)((0, _graflow.Component)(function (v, next) {
		    var _Object$entries$ = _slicedToArray(Object.entries(v)[0], 2),
		        compName = _Object$entries$[0],
		        msg = _Object$entries$[1];
		
		    var _Object$entries$2 = _slicedToArray(Object.entries(msg)[0], 2),
		        signal = _Object$entries$2[0],
		        value = _Object$entries$2[1];
		
		    if (signal === 'vdom') {
		      next({ vdom: _defineProperty({}, compName, value) });
		    } else {
		      var name = signal === 'default' ? compName : compName + '.' + signal;
		      next({ events: [name, value] });
		    }
		  }), (0, _graflow.Demuxer)('events', 'vdom'));
		};
		
		var BlockComponents = function BlockComponents(comps) {
		  if (Object.keys(comps).length === 0) return (0, _graflow.Demuxer)('events', 'vdom');
		
		  var compsNames = Object.keys(comps);
		  var wrappedComps = Object.entries(comps).reduce(function (acc, _ref2) {
		    var _ref3 = _slicedToArray(_ref2, 2),
		        name = _ref3[0],
		        c = _ref3[1];
		
		    acc[name] = ComponentWrapper(c, name);
		    return acc;
		  }, {});
		
		  var components = _extends({
		    demuxer: _graflow.Demuxer.apply(undefined, _toConsumableArray(compsNames))
		  }, wrappedComps, {
		    post: Post()
		  });
		
		  var connections = [['in', 'demuxer'], ['post.vdom', 'out.vdom'], ['post.events', 'out.events']].concat((0, _utils.flatMap)(compsNames.map(function (n) {
		    return [['demuxer.' + n, n], [n, 'post']];
		  })));
		
		  var outputs = ['events', 'vdom'];
		
		  return (0, _graflow.Component)({ components: components, connections: connections, outputs: outputs });
		};
		
		exports.default = BlockComponents;

	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=cyclow.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cyclow = __webpack_require__(1);

	var Phonebooth = function Phonebooth() {
	  return (0, _cyclow.Block)({
	    on: {
	      init: function init() {
	        return function (state) {
	          return { name: 'Steve' };
	        };
	      },
	      click: function click() {
	        return function (state) {
	          return { name: 'Batman' };
	        };
	      },
	      text: function text(_text) {
	        return function (state) {
	          return { name: _text };
	        };
	      }
	    },
	    view: function view(_ref) {
	      var name = _ref.name;
	      return {
	        content: [{
	          tag: 'input',
	          attrs: { value: name },
	          on: { keyup: function keyup(e, next) {
	              return next(['text', e.target.value]);
	            } }
	        }, { tag: 'p', content: 'Your name is ' + name + '.' }, { tag: 'button', content: 'Put on costume', on: { click: 'click' } }],
	        attrs: { id: 'app' }
	      };
	    }
	  });
	};

	exports.default = Phonebooth;

/***/ }
/******/ ]);