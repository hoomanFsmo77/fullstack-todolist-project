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
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('');
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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/todo/Add.vue?vue&type=template&id=6e421bbc&ts=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/todo/Add.vue?vue&type=template&id=6e421bbc&ts=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

var _hoisted_1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.newTodoData.content = $event;
    }),
    placeholder: "content"
  }, null, 512), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.newTodoData.content]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.newTodoData.status = $event;
    }),
    type: "checkbox"
  }, null, 512), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.newTodoData.status]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.fetchFlag = $event;
    })
  }, "Todo Added!"), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: $setup.addTodo
  }, "add")], 64);
}

/***/ })

});
//# sourceMappingURL=src_pages_todo_Add_vue.0530de72004b67a43e27.hot-update.js.map