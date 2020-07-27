(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/content.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--11!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/content.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Content = /** @class */ (function (_super) {
    __extends(Content, _super);
    function Content() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])()
    ], Content.prototype, "title", void 0);
    Content = __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            name: "Content"
        })
    ], Content);
    return Content;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["default"] = (Content);


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/createProduct.vue?vue&type=script&lang=ts&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--11!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product/createProduct.vue?vue&type=script&lang=ts& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _common_content_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/content.vue */ "./resources/js/components/common/content.vue");
/* harmony import */ var _common_form_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/form.vue */ "./resources/js/components/common/form.vue");
/* harmony import */ var _common_formInput_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/formInput.vue */ "./resources/js/components/common/formInput.vue");
/* harmony import */ var _common_formButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/formButton.vue */ "./resources/js/components/common/formButton.vue");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var createProduct = /** @class */ (function (_super) {
    __extends(createProduct, _super);
    function createProduct() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.product = {
            name: "",
            category_id: "",
            hmotnost: "",
        };
        _this.errors = {};
        _this.loading = false;
        return _this;
    }
    createProduct.prototype.created = function () {
        this.$store.dispatch("fetchCategories");
    };
    createProduct.prototype.createProduct = function () {
        var _this = this;
        this.errors = [];
        this.loading = true;
        this.axios
            .post("/product", this.product, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
        })
            .then(function (res) {
            _this.loading = false;
            _this.successMessage = res.data[0];
        })
            .catch(function (error) {
            if (error.response.status == 422) {
                _this.errors = error.response.data.errors;
            }
            else if (error.response.status == 404) {
                _this.errors = error.response.data.errors;
            }
            _this.loading = false;
        });
    };
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])()
    ], createProduct.prototype, "successMessage", void 0);
    createProduct = __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            name: "createProduct",
            components: {
                Content: _common_content_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
                Form: _common_form_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                customInput: _common_formInput_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
                customFormButton: _common_formButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
            },
            computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["categories"]),
            methods: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])(["fetchCategories"]),
        })
    ], createProduct);
    return createProduct;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["default"] = (createProduct);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/content.vue?vue&type=template&id=7b4e0640&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/content.vue?vue&type=template&id=7b4e0640& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "lg:w-130" }, [
    _c("div", { staticClass: "header" }, [
      _c("h3", [_vm._v(_vm._s(_vm.title))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "flex flex-wrap" }, [
      _c("div", { staticClass: "w-full" }, [_vm._t("default")], 2)
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



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
  return _c("Content", { attrs: { title: "Vytvořit produkt" } }, [
    _c(
      "div",
      { staticClass: "table" },
      [
        _c(
          "Form",
          { attrs: { succesMessage: _vm.successMessage } },
          [
            _c("customInput", {
              attrs: {
                error: _vm.errors.name,
                label: "Název produktu",
                name: "name",
                autofocus: "true"
              },
              model: {
                value: _vm.product.name,
                callback: function($$v) {
                  _vm.$set(_vm.product, "name", $$v)
                },
                expression: "product.name"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "input-group" }, [
              _c("div", { staticClass: "input-group-prepend" }, [
                _c(
                  "label",
                  { staticClass: "label", attrs: { for: "category_id" } },
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
                  _vm._l(_vm.categories, function(category) {
                    return _c(
                      "option",
                      {
                        key: category.id,
                        staticClass:
                          "block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",
                        domProps: { value: category.id }
                      },
                      [_vm._v(_vm._s(category.name))]
                    )
                  }),
                  0
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
                  ? _c("p", { staticClass: "text-red-500 text-xs italname" }, [
                      _vm._v(_vm._s(_vm.errors.category_id[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("customInput", {
              attrs: {
                error: _vm.errors.hmotnost,
                label: "Gramáž",
                name: "hnotnost"
              },
              model: {
                value: _vm.product.hmotnost,
                callback: function($$v) {
                  _vm.$set(_vm.product, "hmotnost", $$v)
                },
                expression: "product.hmotnost"
              }
            }),
            _vm._v(" "),
            _c("customFormButton", {
              attrs: {
                onClick: _vm.createProduct,
                name: "Vytvořit produkt",
                loading: _vm.loading
              }
            })
          ],
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

/***/ "./resources/js/components/common/content.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/common/content.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_vue_vue_type_template_id_7b4e0640___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.vue?vue&type=template&id=7b4e0640& */ "./resources/js/components/common/content.vue?vue&type=template&id=7b4e0640&");
/* harmony import */ var _content_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.vue?vue&type=script&lang=ts& */ "./resources/js/components/common/content.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _content_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _content_vue_vue_type_template_id_7b4e0640___WEBPACK_IMPORTED_MODULE_0__["render"],
  _content_vue_vue_type_template_id_7b4e0640___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/content.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common/content.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/common/content.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader??ref--11!../../../../node_modules/vue-loader/lib??vue-loader-options!./content.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/content.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common/content.vue?vue&type=template&id=7b4e0640&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/common/content.vue?vue&type=template&id=7b4e0640& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_template_id_7b4e0640___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./content.vue?vue&type=template&id=7b4e0640& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/content.vue?vue&type=template&id=7b4e0640&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_template_id_7b4e0640___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_template_id_7b4e0640___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _createProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProduct.vue?vue&type=script&lang=ts& */ "./resources/js/components/product/createProduct.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _createProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
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

/***/ "./resources/js/components/product/createProduct.vue?vue&type=script&lang=ts&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/product/createProduct.vue?vue&type=script&lang=ts& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_createProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader??ref--11!../../../../node_modules/vue-loader/lib??vue-loader-options!./createProduct.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product/createProduct.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_createProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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