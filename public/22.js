(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/createProduct.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/createProduct.vue?vue&type=script&lang=js& ***!
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
  name: "createProduct",
  data: function data() {
    return {
      loading: false,
      product: {},
      errors: ""
    };
  },
  created: function created() {
    this.$store.dispatch("fetchCategories");
  },
  computed: {
    categories: function categories() {
      return this.$store.getters.categories;
    }
  },
  methods: {
    addProduct: function addProduct() {
      var _this = this;

      this.errors = [];
      this.axios.post("product", this.product, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token")
        }
      }).then(function (res) {
        _this.$router.push({
          name: "zbozi"
        });
      })["catch"](function (error) {
        if (error.response.status == 422) {
          _this.errors = error.response.data.errors;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/createProduct.vue?vue&type=template&id=5bf78078&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/createProduct.vue?vue&type=template&id=5bf78078& ***!
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
  return _c("div", [
    _vm.loading
      ? _c("div", { staticClass: "loader" }, [
          _c("div", { staticClass: "inner one" }),
          _vm._v(" "),
          _c("div", { staticClass: "inner two" }),
          _vm._v(" "),
          _c("div", { staticClass: "inner three" })
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "flex flex-wrap" }, [
      _c("div", { staticClass: "w-full" }, [
        _c("div", { staticClass: "table" }, [
          _c(
            "form",
            {
              staticClass: "w-full max-w-lg p-5",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addProduct($event)
                }
              }
            },
            [
              _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
                _c("div", { staticClass: "w-full px-3" }, [
                  _c(
                    "label",
                    { staticClass: "ares-label", attrs: { for: "name" } },
                    [_vm._v("Název produktu")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.product.name,
                        expression: "product.name"
                      }
                    ],
                    staticClass: "ares-input",
                    class: { "border-red-500": _vm.errors.name },
                    attrs: { id: "name", type: "text" },
                    domProps: { value: _vm.product.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.product, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c(
                        "p",
                        { staticClass: "text-red-500 text-xs italname" },
                        [_vm._v(_vm._s(_vm.errors.name[0]))]
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
                _c("div", { staticClass: "w-full px-3" }, [
                  _c(
                    "label",
                    {
                      staticClass: "ares-label",
                      attrs: { for: "category_id" }
                    },
                    [_vm._v("Kategorie")]
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.product.category_id,
                          expression: "product.category_id"
                        }
                      ],
                      staticClass: "ares-input",
                      attrs: { id: "category_id" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.product,
                            "category_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c(
                        "option",
                        {
                          attrs: { selected: "" },
                          domProps: { value: _vm.Vyberte }
                        },
                        [_vm._v("Vyberte kategorii")]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.categories, function(category) {
                        return _c(
                          "option",
                          {
                            key: category.id,
                            staticClass:
                              "block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",
                            domProps: { value: category.id }
                          },
                          [
                            _vm._v(
                              _vm._s(category.name) +
                                "\n                                "
                            )
                          ]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "fill-current h-4 w-4",
                          attrs: {
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            }
                          })
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm.errors.category_id
                    ? _c(
                        "p",
                        { staticClass: "text-red-500 text-xs italname" },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.errors.category_id[0])
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
                _c("div", { staticClass: "w-full px-3" }, [
                  _c(
                    "label",
                    { staticClass: "ares-label", attrs: { for: "hmotnost" } },
                    [_vm._v("Gramáž")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.product.hmotnost,
                        expression: "product.hmotnost"
                      }
                    ],
                    staticClass: "ares-input",
                    class: { "border-red-500": _vm.errors.hmotnost },
                    attrs: { id: "hmotnost", type: "text" },
                    domProps: { value: _vm.product.hmotnost },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.product, "hmotnost", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.hmotnost
                    ? _c(
                        "p",
                        { staticClass: "text-red-500 text-xs italhmotnost" },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.errors.hmotnost[0])
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _vm._m(1)
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header" }, [
      _c("h3", [_vm._v("Vytvořit produkt")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "md:flex md:items-center" }, [
      _c("div", { staticClass: "w-full" }, [
        _c("button", { staticClass: "success", attrs: { type: "submit" } }, [
          _vm._v("Vytvořit produkt\n                            ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/product/createProduct.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/product/createProduct.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createProduct_vue_vue_type_template_id_5bf78078___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProduct.vue?vue&type=template&id=5bf78078& */ "./resources/js/components/product/createProduct.vue?vue&type=template&id=5bf78078&");
/* harmony import */ var _createProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/product/createProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _createProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _createProduct_vue_vue_type_template_id_5bf78078___WEBPACK_IMPORTED_MODULE_0__["render"],
  _createProduct_vue_vue_type_template_id_5bf78078___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product/createProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product/createProduct.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/product/createProduct.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./createProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/createProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product/createProduct.vue?vue&type=template&id=5bf78078&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/product/createProduct.vue?vue&type=template&id=5bf78078& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createProduct_vue_vue_type_template_id_5bf78078___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./createProduct.vue?vue&type=template&id=5bf78078& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/createProduct.vue?vue&type=template&id=5bf78078&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createProduct_vue_vue_type_template_id_5bf78078___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createProduct_vue_vue_type_template_id_5bf78078___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);