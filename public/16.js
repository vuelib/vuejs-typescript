(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/showAllOrders.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/showAllOrders.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "createProduct",
  props: {
    id: ""
  },
  data: function data() {
    return {
      loading: false
    };
  },
  created: function created() {
    var _this = this;

    this.loading = true;
    this.$store.dispatch("allOrders").then(function (response) {
      _this.loading = false;
    });
    Echo.channel('orders').listen('OrderAdded', function (e) {
      console.log(e.order);

      _this.$store.state.allOrders.unshift(e.order); // this.$store.commit("allOrders", e.orders);

    });
  },
  computed: {
    allOrders: function allOrders() {
      return this.$store.getters.allOrders;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/showAllOrders.vue?vue&type=template&id=644f5426&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/showAllOrders.vue?vue&type=template&id=644f5426& ***!
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
    _vm.loading ? _c("div", { staticClass: "loading" }) : _vm._e(),
    _vm._v(" "),
    !_vm.loading
      ? _c("div", { staticClass: "header" }, [
          _c("h3", [_vm._v("Přehled všech objednávek")])
        ])
      : _vm._e(),
    _vm._v(" "),
    !_vm.loading
      ? _c("div", { staticClass: "flex flex-wrap" }, [
          _c("div", { staticClass: "w-full" }, [
            _c("div", { staticClass: "table" }, [
              _c("table", { staticClass: "table-fixed" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.allOrders, function(order) {
                    return _c("tr", { key: order.id }, [
                      _c(
                        "td",
                        { staticClass: "border text-center py-2" },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "showOrder",
                                  params: { id: order.user_id, idc: order.id }
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(order.id) +
                                  "\n                                "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "border text-center p-2" },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "showOrder",
                                  params: { id: order.user_id, idc: order.id }
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(order.user.invoice.nazev) +
                                  "\n                                "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "border px-4 text-center py-2" },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "showOrder",
                                  params: { id: order.user_id, idc: order.id }
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fas",
                                class:
                                  order.status == "rozpracovaná"
                                    ? "fa-pen"
                                    : "fa-check"
                              })
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "border text-center" },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "showOrder",
                                  params: { id: order.user_id, idc: order.id }
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(
                                    _vm._f("fullFormatDate")(order.created_at)
                                  ) +
                                  "\n                                "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  }),
                  0
                )
              ])
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Číslo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Zakazník")]),
        _vm._v(" "),
        _c("th", { staticClass: " px-4 py-2" }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Datum vytvoření")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/order/showAllOrders.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/admin/order/showAllOrders.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showAllOrders_vue_vue_type_template_id_644f5426___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showAllOrders.vue?vue&type=template&id=644f5426& */ "./resources/js/components/admin/order/showAllOrders.vue?vue&type=template&id=644f5426&");
/* harmony import */ var _showAllOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showAllOrders.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/order/showAllOrders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _showAllOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _showAllOrders_vue_vue_type_template_id_644f5426___WEBPACK_IMPORTED_MODULE_0__["render"],
  _showAllOrders_vue_vue_type_template_id_644f5426___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/order/showAllOrders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/order/showAllOrders.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/order/showAllOrders.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showAllOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showAllOrders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/showAllOrders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showAllOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/order/showAllOrders.vue?vue&type=template&id=644f5426&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/admin/order/showAllOrders.vue?vue&type=template&id=644f5426& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showAllOrders_vue_vue_type_template_id_644f5426___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showAllOrders.vue?vue&type=template&id=644f5426& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/showAllOrders.vue?vue&type=template&id=644f5426&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showAllOrders_vue_vue_type_template_id_644f5426___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showAllOrders_vue_vue_type_template_id_644f5426___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);