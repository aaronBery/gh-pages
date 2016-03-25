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

	var howtoDispatcher = __webpack_require__(1);
	var howtoConstants = __webpack_require__(2);

	var howtoActions = {
	  addItem: function (item) {
	    howtoDispatcher.handleViewAction({
	      actionType: howtoConstants.ADD_ITEM,
	      item: item
	    });
	  },
	  getItems: function () {
	    //get code here
	  }
	};

	module.exports = howtoActions;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Dispatcher = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"flux\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).Dispatcher;
	var assign = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"object-assign\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var howtoDispatcher = assign(new Dispatcher(), {
	  handleViewAction: function (action) {
	    this.dispatch({
	      source: 'VIEW_ACTION',
	      action: action
	    });
	  }
	});

	module.exports = howtoDispatcher;

/***/ },
/* 2 */
/***/ function(module, exports) {

	

/***/ }
/******/ ]);