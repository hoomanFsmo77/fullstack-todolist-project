"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["src_pages_todo_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/todo/Show.vue?vue&type=script&setup=true&lang=ts":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/todo/Show.vue?vue&type=script&setup=true&lang=ts ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");



/* harmony default export */ __webpack_exports__["default"] = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'Show',
  setup: function setup(__props, _a) {
    var expose = _a.expose;
    expose();
    var todoHelper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      flag: false,
      data: []
    });
    var getTodoList = function getTodoList() {
      todoHelper.flag = false;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('http://localhost:9001/api/todo/all').then(function (response) {
        todoHelper.data = response.data.body;
        todoHelper.flag = true;
      });
    };
    var updateTodo = function updateTodo(id) {
      var newContent = prompt('Enter new content:');
      if (newContent) {
        var newStatus = confirm('Is todo done?');
        axios__WEBPACK_IMPORTED_MODULE_1__["default"].put("http://localhost:9001/api/todo/update/".concat(id), {
          content: newContent,
          status: newStatus
        }).then(function (res) {
          getTodoList();
        });
      } else {
        updateTodo(id);
      }
      console.log(id);
    };
    var deleteTodo = function deleteTodo(id) {
      axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"]("http://localhost:9001/api/todo/remove/".concat(id)).then(function (res) {
        getTodoList();
      });
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      return getTodoList();
    });
    var __returned__ = {
      todoHelper: todoHelper,
      getTodoList: getTodoList,
      updateTodo: updateTodo,
      deleteTodo: deleteTodo
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/todo/Show.vue?vue&type=template&id=dbce831c&ts=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/todo/Show.vue?vue&type=template&id=dbce831c&ts=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

var _hoisted_1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1);
var _hoisted_2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1);
var _hoisted_3 = ["onClick"];
var _hoisted_4 = ["onClick"];
var _hoisted_5 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: $setup.getTodoList
  }, " update "), _hoisted_1, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.todoHelper.data, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: item.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Content: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.content), 1), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Status:" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.status), 1), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: function onClick($event) {
        return $setup.deleteTodo(item.id);
      }
    }, "delete", 8, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: function onClick($event) {
        return $setup.updateTodo(item.id);
      }
    }, "update", 8, _hoisted_4), _hoisted_5]);
  }), 128))], 64);
}

/***/ }),

/***/ "./src/pages/todo/Show.vue":
/*!*********************************!*\
  !*** ./src/pages/todo/Show.vue ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_dbce831c_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=dbce831c&ts=true */ "./src/pages/todo/Show.vue?vue&type=template&id=dbce831c&ts=true");
/* harmony import */ var _Show_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&setup=true&lang=ts */ "./src/pages/todo/Show.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var D_WEB_Projects_Fullstack_apps_todolist_T_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_WEB_Projects_Fullstack_apps_todolist_T_client_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Show_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Show_vue_vue_type_template_id_dbce831c_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/pages/todo/Show.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "dbce831c"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('dbce831c', __exports__)) {
    api.reload('dbce831c', __exports__)
  }
  
  module.hot.accept(/*! ./Show.vue?vue&type=template&id=dbce831c&ts=true */ "./src/pages/todo/Show.vue?vue&type=template&id=dbce831c&ts=true", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Show_vue_vue_type_template_id_dbce831c_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=dbce831c&ts=true */ "./src/pages/todo/Show.vue?vue&type=template&id=dbce831c&ts=true");
(() => {
    api.rerender('dbce831c', _Show_vue_vue_type_template_id_dbce831c_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))

}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/pages/todo/Show.vue?vue&type=script&setup=true&lang=ts":
/*!********************************************************************!*\
  !*** ./src/pages/todo/Show.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Show_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Show_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./Show.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/todo/Show.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/pages/todo/Show.vue?vue&type=template&id=dbce831c&ts=true":
/*!***********************************************************************!*\
  !*** ./src/pages/todo/Show.vue?vue&type=template&id=dbce831c&ts=true ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Show_vue_vue_type_template_id_dbce831c_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Show_vue_vue_type_template_id_dbce831c_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./Show.vue?vue&type=template&id=dbce831c&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/pages/todo/Show.vue?vue&type=template&id=dbce831c&ts=true");


/***/ })

}]);
//# sourceMappingURL=app.a27e0c6d668aba948129.js.map