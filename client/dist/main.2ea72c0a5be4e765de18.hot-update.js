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
  component: __webpack_require__.e(/*! import() */ "src_pages_todo_Add_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/todo/Add.vue */ "./src/pages/todo/Add.vue")),
  name: 'ADD',
  path: '/todo/add'
}, {
  component: __webpack_require__.e(/*! import() */ "src_pages_todo_Remove_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/todo/Remove.vue */ "./src/pages/todo/Remove.vue")),
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
/******/ 		return "app." + {"vendors-node_modules_axios_lib_axios_js":"0ed9588c96dfef92a61e","src_pages_todo_Show_vue":"2e92538d3431e3c7baae","src_pages_todo_Add_vue":"552dc2117852ff05e11d","src_pages_todo_Remove_vue":"219e7a50fffef4bbd5c6","src_pages_todo_Update_vue":"68f685ffd1da61b57e78"}[chunkId] + ".js";
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "35811794bf3c7e02f3a9"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.2ea72c0a5be4e765de18.hot-update.js.map