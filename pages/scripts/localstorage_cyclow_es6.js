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

	var _voter = __webpack_require__(2);

	var _voter2 = _interopRequireDefault(_voter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _cyclow.run)(_voter2.default, { target: 'app' });

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
		
		var _SimpleRenderer = __webpack_require__(2);
		
		Object.defineProperty(exports, 'SimpleRenderer', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_SimpleRenderer).default;
		  }
		});
		
		var _Dom = __webpack_require__(5);
		
		Object.defineProperty(exports, 'Dom', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Dom).default;
		  }
		});
		
		var _State = __webpack_require__(6);
		
		Object.defineProperty(exports, 'State', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_State).default;
		  }
		});
		
		var _Events = __webpack_require__(7);
		
		Object.defineProperty(exports, 'Events', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_Events).default;
		  }
		});
		
		var _View = __webpack_require__(8);
		
		Object.defineProperty(exports, 'View', {
		  enumerable: true,
		  get: function get() {
		    return _interopRequireDefault(_View).default;
		  }
		});
		
		var _Block = __webpack_require__(9);
		
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
		
		var _SimpleRenderer = __webpack_require__(2);
		
		var _SimpleRenderer2 = _interopRequireDefault(_SimpleRenderer);
		
		var _graflow = __webpack_require__(4);
		
		var _graflow2 = _interopRequireDefault(_graflow);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var run = function run(MainComponent) {
		  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		
		  document.addEventListener("DOMContentLoaded", function () {
		    var init = opts.init || {};
		    var Renderer = opts.renderer || _SimpleRenderer2.default;
		
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
		
		var _buildDom = __webpack_require__(3);
		
		var _buildDom2 = _interopRequireDefault(_buildDom);
		
		var _graflow = __webpack_require__(4);
		
		var _graflow2 = _interopRequireDefault(_graflow);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
		
		var cacheProps = function cacheProps(e) {
		  return {
		    id: e.id,
		    selectionStart: e.selectionStart,
		    selectionEnd: e.selectionEnd,
		    selectionDirection: e.selectionDirection,
		    scrollTop: e.scrollTop,
		    scrollLeft: e.scrollLeft
		  };
		};
		
		var SimpleRenderer = function SimpleRenderer(targetId) {
		  var target = targetId ? document.getElementById(targetId) : document.body;
		
		  return (0, _graflow2.default)(function (vdom) {
		    var dom = (0, _buildDom2.default)(vdom);
		
		    var focusedId = (document.activeElement || { id: '' }).id;
		    var identifiedElements = [].concat(_toConsumableArray(document.querySelectorAll('[id]'))).map(cacheProps);
		
		    target.innerHTML = '';
		    target.appendChild(dom);
		
		    identifiedElements.forEach(function (element) {
		      var newElement = document.getElementById(element.id);
		      if (newElement) {
		        if (element.id === focusedId) newElement.focus();
		        Object.assign(newElement, element);
		      }
		    });
		  });
		};
		
		exports.default = SimpleRenderer;

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var buildContent = function buildContent(content, parent) {
		  if (typeof content === 'string') {
		    var element = document.createTextNode(content);
		    parent.appendChild(element);
		  } else if (content instanceof Array) {
		    content.forEach(function (i) {
		      return buildContent(i, parent);
		    });
		  } else if (content instanceof Object) {
		    var _element = buildDom(content);
		    parent.appendChild(_element);
		  }
		};
		
		var setAttributes = function setAttributes(attrs, el) {
		  return Object.entries(attrs).forEach(function (_ref) {
		    var _ref2 = _slicedToArray(_ref, 2),
		        name = _ref2[0],
		        value = _ref2[1];
		
		    if (value) el.setAttribute(name, value);
		  });
		};
		
		var setEventHandlers = function setEventHandlers(handlers, component, el) {
		  return Object.entries(handlers).forEach(function (_ref3) {
		    var _ref4 = _slicedToArray(_ref3, 2),
		        event = _ref4[0],
		        handler = _ref4[1];
		
		    el.addEventListener(event, function (e) {
		      var next = component ? component.in.default.send : function () {};
		
		      if (typeof handler === 'function') handler(e, next);else next(handler);
		    });
		  });
		};
		
		var buildDom = function buildDom(data) {
		  var _data$tag = data.tag,
		      tag = _data$tag === undefined ? 'div' : _data$tag,
		      _data$attrs = data.attrs,
		      attrs = _data$attrs === undefined ? {} : _data$attrs,
		      _data$on = data.on,
		      on = _data$on === undefined ? {} : _data$on,
		      _data$content = data.content,
		      content = _data$content === undefined ? [] : _data$content,
		      component = data.component;
		
		  var el = document.createElement(tag);
		
		  setAttributes(attrs, el);
		  setEventHandlers(on, component, el);
		  buildContent(content, el);
		
		  return el;
		};
		
		exports.default = buildDom;

	/***/ },
	/* 4 */
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
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _graflow = __webpack_require__(4);
		
		var _buildDom = __webpack_require__(3);
		
		var _buildDom2 = _interopRequireDefault(_buildDom);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Dom = function Dom() {
		  return (0, _graflow.Component)({
		    components: {
		      build: (0, _graflow.Component)(function (v, next) {
		        var nextEvent = function nextEvent(e) {
		          return next({ event: e });
		        };
		        var el = (0, _buildDom2.default)(v, nextEvent);
		        next({ element: el });
		      }),
		      demux: (0, _graflow.Demuxer)('event', 'element')
		    },
		    connections: [['in.default', 'build'], ['build', 'demux'], ['demux.element', 'out.element'], ['demux.event', 'out.event']],
		    outputs: ['element', 'event']
		  });
		};
		
		exports.default = Dom;

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _graflow = __webpack_require__(4);
		
		var _graflow2 = _interopRequireDefault(_graflow);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var State = function State() {
		  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		
		  var state = initialState;
		
		  return (0, _graflow2.default)({
		    components: {
		      transform: (0, _graflow2.default)(function (v, next) {
		        state = v(state);
		        next(state);
		      })
		    },
		    connections: [['in.transformation', 'transform'], ['transform', 'out.state']],
		    inputs: ['transformation'],
		    outputs: ['state']
		  });
		};
		
		exports.default = State;

	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _graflow = __webpack_require__(4);
		
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
		  return (0, _graflow.Chain)((0, _graflow.Mapper)(function (_ref) {
		    var _ref2 = _slicedToArray(_ref, 2),
		        e = _ref2[0],
		        payload = _ref2[1];
		
		    return toCanonicalMessage(events[e](payload));
		  }), (0, _graflow.Serializer)(), (0, _graflow.Demuxer)('state', 'components', 'outputs'));
		};
		
		exports.default = Events;

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
		
		var _graflow = __webpack_require__(4);
		
		var setComponent = function setComponent(vdom, component) {
		  if ((typeof vdom === 'undefined' ? 'undefined' : _typeof(vdom)) === 'object' && !vdom.component) vdom.component = component;
		  if (Array.isArray(vdom.content)) {
		    vdom.content.map(function (e) {
		      return setComponent(e, component);
		    });
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
		        var state = _ref.state,
		            vdom = _ref.vdom;
		        return view(state, vdom);
		      }),
		      post: (0, _graflow.Mapper)(function (vdom) {
		        return setComponent(vdom, component);
		      })
		    },
		    connections: [['in.vdom', 'vdomAccumulator'], ['vdomAccumulator', 'hub.vdom'], ['in.state', 'hub.state'], ['hub', 'globalAccumulator'], ['globalAccumulator', 'view'], ['view', 'post'], ['post', 'out']]
		  });
		};
		
		exports.default = View;

	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _Dom = __webpack_require__(5);
		
		var _Dom2 = _interopRequireDefault(_Dom);
		
		var _State = __webpack_require__(6);
		
		var _State2 = _interopRequireDefault(_State);
		
		var _Events = __webpack_require__(7);
		
		var _Events2 = _interopRequireDefault(_Events);
		
		var _View = __webpack_require__(8);
		
		var _View2 = _interopRequireDefault(_View);
		
		var _BlockComponents = __webpack_require__(10);
		
		var _BlockComponents2 = _interopRequireDefault(_BlockComponents);
		
		var _graflow = __webpack_require__(4);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
		
		var toObject = function toObject(kvs) {
		  return kvs.reduce(function (obj, _ref) {
		    var _ref2 = _slicedToArray(_ref, 2),
		        k = _ref2[0],
		        v = _ref2[1];
		
		    obj[k] = v;
		    return obj;
		  }, {});
		};
		
		var OutputFilter = function OutputFilter(filters) {
		  return (0, _graflow.Component)({
		    outputs: Object.keys(filters),
		    components: Object.entries(filters).reduce(function (acc, _ref3) {
		      var _ref4 = _slicedToArray(_ref3, 2),
		          name = _ref4[0],
		          filter = _ref4[1];
		
		      acc[name] = (0, _graflow.Mapper)(filter);
		      return acc;
		    }, {}),
		    connections: Object.keys(filters).map(function (v) {
		      return ['in', v];
		    })
		  });
		};
		
		var flatMap = function flatMap(v) {
		  return [].concat.apply([], v);
		};
		
		var Block = function Block(options) {
		  var eventInputs = Object.keys(options.events || {}).map(function (k) {
		    return k.split('.', 2);
		  }).filter(function (_ref5) {
		    var _ref6 = _slicedToArray(_ref5, 2),
		        prefix = _ref6[0],
		        signal = _ref6[1];
		
		    return prefix === 'in';
		  }).map(function (_ref7) {
		    var _ref8 = _slicedToArray(_ref7, 2),
		        prefix = _ref8[0],
		        signal = _ref8[1];
		
		    return signal;
		  });
		  var inputs = eventInputs.concat('init');
		
		  var eventOutputs = Object.keys(options.out || {});
		  var outputs = eventOutputs.concat('vdom');
		
		  var state = (0, _State2.default)();
		  var dom = (0, _Dom2.default)();
		  var events = (0, _Events2.default)(options.events);
		  var view = (0, _View2.default)(options.view, events);
		  var mapInputs = inputs.map(function (i) {
		    return ['map' + i, (0, _graflow.Mapper)(function (v) {
		      return [i, v];
		    })];
		  });
		
		  var comps = (0, _BlockComponents2.default)(options.components || {});
		
		  var outputFilter = (0, _graflow.Chain)((0, _graflow.Mapper)(function (state) {
		    return Object.entries(options.out || {}).reduce(function (acc, _ref9) {
		      var _ref10 = _slicedToArray(_ref9, 2),
		          name = _ref10[0],
		          map = _ref10[1];
		
		      acc[name] = map(state);
		      return acc;
		    }, {});
		  }), _graflow.Demuxer.apply(undefined, _toConsumableArray(eventOutputs)));
		
		  var components = _extends({ state: state, dom: dom, events: events, view: view, comps: comps, outputFilter: outputFilter
		  }, toObject(mapInputs));
		
		  var inputConnections = flatMap(inputs.map(function (input) {
		    return [['in.' + input, 'map' + input], ['map' + input, 'events']];
		  }));
		
		  var outputConnections = eventOutputs.map(function (output) {
		    return ['outputFilter.' + output, 'out.' + output];
		  });
		
		  var connections = inputConnections.concat(outputConnections).concat([['events.state', 'state'], ['events.components', 'comps'], ['comps.events', 'events'], ['comps.vdom', 'view.vdom'], ['state', 'view.state'], ['state', 'outputFilter'], ['view', 'out.vdom']]);
		
		  return (0, _graflow.Component)({ inputs: inputs, outputs: outputs, components: components, connections: connections });
		};
		
		exports.default = Block;

	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
		
		var _graflow = __webpack_require__(4);
		
		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
		
		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
		
		var flatMap = function flatMap(v) {
		  return [].concat.apply([], v);
		};
		
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
		
		var post = (0, _graflow.Chain)((0, _graflow.Component)(function (v, next) {
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
		    post: post
		  });
		
		  var connections = [['in', 'demuxer'], ['post.vdom', 'out.vdom'], ['post.events', 'out.events']].concat(flatMap(compsNames.map(function (n) {
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

	var _window = window,
	    localStorage = _window.localStorage;


	var teams = ['Valor', 'Mystic', 'Instinct'];

	var Voter = function Voter() {
	  return (0, _cyclow.Block)({
	    events: {
	      init: function init() {
	        return function (team) {
	          return +(localStorage.getItem('JSCOMPVOTE') || 1);
	        };
	      },
	      click: function click(i) {
	        return function (team) {
	          localStorage.setItem('JSCOMPVOTE', i);
	          return i;
	        };
	      }
	    },
	    view: function view(team) {
	      return { content: teams.map(function (name, i) {
	          return {
	            tag: 'button',
	            attrs: { class: team === i ? 'active' : '' },
	            on: { click: function click(v, next) {
	                return next(['click', i]);
	              } },
	            content: name
	          };
	        }) };
	    }
	  });
	};

	exports.default = Voter;

/***/ }
/******/ ]);