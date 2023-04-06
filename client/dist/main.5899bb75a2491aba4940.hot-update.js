"use strict";
self["webpackHotUpdatetemplate"]("main",{

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");

var routes = [{
  component: Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_axios_lib_axios_js"), __webpack_require__.e("src_pages_todo_Show_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/todo/Show.vue */ "./src/pages/todo/Show.vue")),
  name: 'SHOW',
  path: '/todo/show'
}, {
  component: Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_axios_lib_axios_js"), __webpack_require__.e("src_pages_todo_Add_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/todo/Add.vue */ "./src/pages/todo/Add.vue")),
  name: 'ADD',
  path: '/todo/add'
}, {
  component: Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module './pages/todo/Remove.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }),
  name: 'REMOVE',
  path: '/todo/remove'
}, {
  component: __webpack_require__.e(/*! import() */ "src_pages_todo_Update_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/todo/Update.vue */ "./src/pages/todo/Update.vue")),
  name: 'UPDATE',
  path: '/todo/update'
}];
var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_0__.createRouter)({
  routes: routes,
  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_0__.createWebHashHistory)()
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ !function() {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = function(chunkId) {
/******/ 		// return url for filenames based on template
/******/ 		return "app." + {"vendors-node_modules_axios_lib_axios_js":"0ed9588c96dfef92a61e","src_pages_todo_Show_vue":"c913c07c0ae00b94cf92","src_pages_todo_Add_vue":"ea2de4955fe7ccb589c7","src_pages_todo_Update_vue":"68f685ffd1da61b57e78"}[chunkId] + ".js";
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "21e699440216a7e38b18"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5899bb75a2491aba4940.hot-update.js.map