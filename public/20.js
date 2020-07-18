(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/showCategory.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/showCategory.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ShowCategory",
  props: {
    id: ""
  },
  data: function data() {
    return {
      loading: false
    };
  },
  created: function created() {
    this.$store.dispatch("fetchCategory", this.id);
  },
  computed: {
    category: function category() {
      return this.$store.getters.category;
    }
  },
  watch: {
    $route: function $route(to, from) {
      if (from.params.id !== to.params.id) {
        this.$store.dispatch("fetchCategory", this.id);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/showCategory.vue?vue&type=template&id=06dee951&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/showCategory.vue?vue&type=template&id=06dee951& ***!
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
  return _c("div", {}, [
    _c("div", { staticClass: "header" }, [
      _c("h3", [_vm._v(_vm._s(_vm.category.name))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "flex flex-wrap" }, [
      _c("div", { staticClass: "w-full" }, [
        _c("div", { staticClass: "table" }, [
          _vm.category
            ? _c("div", [
                _c("table", { staticClass: "table-fixed" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.category.products, function(product) {
                      return _c("tr", { key: product.id }, [
                        _c("td", { staticClass: "border px-4 py-2" }, [
                          _vm._v(_vm._s(product.id))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "border px-4 py-2" }, [
                          _vm._v(_vm._s(product.name))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "border px-4 py-2" }, [
                          _vm._v(_vm._s(product.hmotnost))
                        ])
                      ])
                    }),
                    0
                  )
                ])
              ])
            : _vm._e()
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
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "w-1/4 px-4 py-2" }, [
          _vm._v("Číslo produktu")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/2 px-4 py-2" }, [_vm._v("Název")]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/4 px-4 py-2" }, [_vm._v("Balení")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/category/showCategory.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/category/showCategory.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showCategory_vue_vue_type_template_id_06dee951___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showCategory.vue?vue&type=template&id=06dee951& */ "./resources/js/components/category/showCategory.vue?vue&type=template&id=06dee951&");
/* harmony import */ var _showCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showCategory.vue?vue&type=script&lang=js& */ "./resources/js/components/category/showCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _showCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _showCategory_vue_vue_type_template_id_06dee951___WEBPACK_IMPORTED_MODULE_0__["render"],
  _showCategory_vue_vue_type_template_id_06dee951___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/category/showCategory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/category/showCategory.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/category/showCategory.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./showCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/showCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/category/showCategory.vue?vue&type=template&id=06dee951&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/category/showCategory.vue?vue&type=template&id=06dee951& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showCategory_vue_vue_type_template_id_06dee951___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./showCategory.vue?vue&type=template&id=06dee951& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/showCategory.vue?vue&type=template&id=06dee951&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showCategory_vue_vue_type_template_id_06dee951___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showCategory_vue_vue_type_template_id_06dee951___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);