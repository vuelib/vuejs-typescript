(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/AddOrderTable.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/AddOrderTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableMenu */ "./resources/js/components/admin/order/TableMenu.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AddOrderTable',
  components: {
    TableMenu: _TableMenu__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    addOrder: {},
    all: {},
    categoryName: {},
    collapsed: {},
    filteredList: {},
    orders: {},
    products: {},
    val: {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/TableMenu.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/TableMenu.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TableMenu',
  props: {
    all: {},
    filteredList: {},
    orders: {},
    val: {}
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/AddOrderTable.vue?vue&type=template&id=497cfdf6&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/AddOrderTable.vue?vue&type=template&id=497cfdf6& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "mt-3 p-3" }, [
      _c("h3", [
        _vm._v(
          "\n            " +
            _vm._s(_vm.all ? "Všechny produkty" : _vm.categoryName) +
            "\n        "
        )
      ])
    ]),
    _vm._v(" "),
    _vm.orders
      ? _c(
          "div",
          {
            staticClass:
              "bg-ivory border-t-2 border-b-4 border-ivory rounded-lg shadow-lg  ml-3"
          },
          [
            _c(
              "div",
              { staticClass: "flex flex-col p-2" },
              [
                _c(
                  "h4",
                  {
                    staticClass:
                      "text-xl font-semibold cursor-pointer text-junglegreen",
                    on: {
                      click: function($event) {
                        _vm.collapsed = !_vm.collapsed
                      }
                    }
                  },
                  [_vm._v("Zvolené produkty")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.collapsed,
                        expression: "!collapsed"
                      }
                    ],
                    staticClass: "flex  font-bold text-center"
                  },
                  [
                    _c("div", { staticClass: "w-3/6 h-6 text-left pl-2" }, [
                      _vm._v("Název produktu")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-2/6 h-6 " }, [
                      _vm._v("Balení")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "w-2/6 h-6 " }, [
                      _vm._v("Množství")
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._l(_vm.products, function(product) {
                  return _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.collapsed,
                          expression: "!collapsed"
                        }
                      ],
                      key: product.id
                    },
                    _vm._l(_vm.orders.order, function(value, index) {
                      return _c("div", { key: index }, [
                        index == product.id
                          ? _c("div", { staticClass: "flex text-center" }, [
                              _c(
                                "div",
                                { staticClass: "w-3/6  text-left pl-2" },
                                [_vm._v(_vm._s(product.name))]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "w-2/6 h-6" }, [
                                _vm._v(_vm._s(product.hmotnost))
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "w-2/6 h-6 " }, [
                                _vm._v(_vm._s(value))
                              ])
                            ])
                          : _vm._e()
                      ])
                    }),
                    0
                  )
                })
              ],
              2
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.addOrder($event)
          }
        }
      },
      [
        _c("button", { staticClass: "success", attrs: { type: "submit" } }, [
          _vm._v("\n            Potvrdit\n        ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table mt-3" }, [
          _c(
            "div",
            { staticClass: "flex flex-wrap" },
            [
              _c("TableMenu", {
                attrs: {
                  all: _vm.all,
                  "filtered-list": _vm.filteredList,
                  orders: _vm.orders,
                  val: _vm.val
                }
              })
            ],
            1
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/TableMenu.vue?vue&type=template&id=a637ca9e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/TableMenu.vue?vue&type=template&id=a637ca9e& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("table", { staticClass: "table-fixed" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "tbody",
      _vm._l(_vm.filteredList, function(product, index) {
        return product.category_id == _vm.val && !_vm.all
          ? _c("tr", { key: product.id }, [
              _c("td", { staticClass: "border px-4 py-2" }, [
                _vm._v("\n            " + _vm._s(product.name) + "\n        ")
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "border px-4 py-2" }, [
                _vm._v(
                  "\n            " + _vm._s(product.hmotnost) + "\n        "
                )
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "border excel px-4 py-2" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.orders.order[product.id],
                      expression: "orders.order[product.id]"
                    }
                  ],
                  staticClass:
                    "w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                  attrs: { id: index, placeholder: "Množství", type: "text" },
                  domProps: { value: _vm.orders.order[product.id] },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.orders.order,
                        product.id,
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ])
          : _vm.all
          ? _c("tr", [
              _c("td", { staticClass: "border px-4 py-2" }, [
                _vm._v("\n            " + _vm._s(product.name) + "\n        ")
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "border px-4 py-2" }, [
                _vm._v(
                  "\n            " + _vm._s(product.hmotnost) + "\n        "
                )
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "border px-4 py-2" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.orders.order[product.id],
                      expression: "orders.order[product.id]"
                    }
                  ],
                  staticClass:
                    "w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                  attrs: { id: index, placeholder: "Množství", type: "text" },
                  domProps: { value: _vm.orders.order[product.id] },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.orders.order,
                        product.id,
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ])
          : _vm._e()
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "w-1/2 px-4 py-2" }, [
          _vm._v("\n            Název produktu\n        ")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/4 px-4 py-2" }, [_vm._v("Balení")]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/4 px-4 py-2" }, [_vm._v("Množství")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/order/AddOrderTable.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/admin/order/AddOrderTable.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddOrderTable_vue_vue_type_template_id_497cfdf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddOrderTable.vue?vue&type=template&id=497cfdf6& */ "./resources/js/components/admin/order/AddOrderTable.vue?vue&type=template&id=497cfdf6&");
/* harmony import */ var _AddOrderTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddOrderTable.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/order/AddOrderTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddOrderTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddOrderTable_vue_vue_type_template_id_497cfdf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddOrderTable_vue_vue_type_template_id_497cfdf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/order/AddOrderTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/order/AddOrderTable.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/order/AddOrderTable.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddOrderTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddOrderTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/AddOrderTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddOrderTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/order/AddOrderTable.vue?vue&type=template&id=497cfdf6&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/admin/order/AddOrderTable.vue?vue&type=template&id=497cfdf6& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddOrderTable_vue_vue_type_template_id_497cfdf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddOrderTable.vue?vue&type=template&id=497cfdf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/AddOrderTable.vue?vue&type=template&id=497cfdf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddOrderTable_vue_vue_type_template_id_497cfdf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddOrderTable_vue_vue_type_template_id_497cfdf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/order/TableMenu.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/admin/order/TableMenu.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableMenu_vue_vue_type_template_id_a637ca9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableMenu.vue?vue&type=template&id=a637ca9e& */ "./resources/js/components/admin/order/TableMenu.vue?vue&type=template&id=a637ca9e&");
/* harmony import */ var _TableMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/order/TableMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableMenu_vue_vue_type_template_id_a637ca9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableMenu_vue_vue_type_template_id_a637ca9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/order/TableMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/order/TableMenu.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/order/TableMenu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/TableMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/order/TableMenu.vue?vue&type=template&id=a637ca9e&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/admin/order/TableMenu.vue?vue&type=template&id=a637ca9e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableMenu_vue_vue_type_template_id_a637ca9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableMenu.vue?vue&type=template&id=a637ca9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/TableMenu.vue?vue&type=template&id=a637ca9e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableMenu_vue_vue_type_template_id_a637ca9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableMenu_vue_vue_type_template_id_a637ca9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);