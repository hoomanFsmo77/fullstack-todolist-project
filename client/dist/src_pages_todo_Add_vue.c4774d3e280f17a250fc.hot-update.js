"use strict";
self["webpackHotUpdatetemplate"]("src_pages_todo_Add_vue",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/todo/Add.vue?vue&type=script&setup=true&lang=ts":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/todo/Add.vue?vue&type=script&setup=true&lang=ts ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");



/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'Add',
  setup: function setup(__props, _a) {
    var expose = _a.expose;
    expose();
    var newTodoData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      content: '',
      status: false
    });
    var fetchFlag = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var addTodo = function addTodo() {
      if (newTodoData.content) {
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('http://localhost:9001/api/todo/add', {});
      } else {
        alert('enter a valid content');
      }
    };
    var __returned__ = {
      newTodoData: newTodoData,
      fetchFlag: fetchFlag,
      addTodo: addTodo
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ })

});
//# sourceMappingURL=src_pages_todo_Add_vue.c4774d3e280f17a250fc.hot-update.js.map