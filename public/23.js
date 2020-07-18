(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/allOrders.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order/allOrders.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AllOrders",
  created: function created() {
    this.$store.dispatch("retrieveOrders");
  },
  computed: {
    orders: function orders() {
      return this.$store.getters.orders;
    },
    ordersFilter: function ordersFilter() {
      return this.$store.getters.ordersFilter;
    },
    activeOrder: function activeOrder() {
      return this.$store.getters.order;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/allOrders.vue?vue&type=template&id=2af1d86a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order/allOrders.vue?vue&type=template&id=2af1d86a& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "flex mb-4" },
      [
        _c("aside", { staticClass: "sidebar" }, [
          _c("div", { staticClass: "name" }, [_vm._v("Objednávky")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "menu" },
            [
              !_vm.ordersFilter
                ? _c("div", { staticClass: "link" }, [
                    _vm._v(
                      "\n                    Nemáte žádné objednávky\n                "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.orders, function(order) {
                return _vm.orders
                  ? _c(
                      "router-link",
                      {
                        key: order.id,
                        staticClass: "link",
                        class:
                          order.id == _vm.activeOrder.id
                            ? "font-bold text-junglegreen font-base"
                            : "",
                        attrs: {
                          to: { name: "ShowOrder", params: { id: order.id } }
                        }
                      },
                      [
                        _vm._v(
                          "č. " + _vm._s(order.id) + "\n                    "
                        ),
                        _c("i", {
                          staticClass: "fas",
                          class:
                            order.status == "rozpracovaná"
                              ? "fa-pen"
                              : "fa-check"
                        }),
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm._f("formatDate")(order.created_at)) +
                            "\n                "
                        )
                      ]
                    )
                  : _vm._e()
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c(
          "transition",
          { attrs: { mode: "out-in", name: "component-fade" } },
          [_c("router-view")],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/order/allOrders.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/order/allOrders.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _allOrders_vue_vue_type_template_id_2af1d86a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allOrders.vue?vue&type=template&id=2af1d86a& */ "./resources/js/components/order/allOrders.vue?vue&type=template&id=2af1d86a&");
/* harmony import */ var _allOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allOrders.vue?vue&type=script&lang=js& */ "./resources/js/components/order/allOrders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _allOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _allOrders_vue_vue_type_template_id_2af1d86a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _allOrders_vue_vue_type_template_id_2af1d86a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/order/allOrders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/order/allOrders.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/order/allOrders.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_allOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./allOrders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/allOrders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_allOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/order/allOrders.vue?vue&type=template&id=2af1d86a&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/order/allOrders.vue?vue&type=template&id=2af1d86a& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allOrders_vue_vue_type_template_id_2af1d86a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./allOrders.vue?vue&type=template&id=2af1d86a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/allOrders.vue?vue&type=template&id=2af1d86a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allOrders_vue_vue_type_template_id_2af1d86a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allOrders_vue_vue_type_template_id_2af1d86a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);