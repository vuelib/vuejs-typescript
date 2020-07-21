(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/showCategory.vue?vue&type=script&lang=ts&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--11!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/showCategory.vue?vue&type=script&lang=ts& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _common_content_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/content.vue */ "./resources/js/components/common/content.vue");
/* harmony import */ var _common_table_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/table.vue */ "./resources/js/components/common/table.vue");
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




var ShowCategory = /** @class */ (function (_super) {
    __extends(ShowCategory, _super);
    function ShowCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading = false;
        _this.columns = [
            { path: "id", label: "Číslo produktu" },
            { path: "name", label: "Název" },
            { path: "hmotnost", label: "Balení" }
        ];
        _this.sortColumn = { path: "id", order: "asc" };
        _this.handleSort = function (sortColumn) {
            console.log(sortColumn);
            _this.sortColumn = sortColumn;
        };
        return _this;
    }
    Object.defineProperty(ShowCategory.prototype, "category", {
        get: function () {
            return this.$store.getters.category;
        },
        set: function (order) {
            console.log(order);
        },
        enumerable: false,
        configurable: true
    });
    ShowCategory.prototype.created = function () {
        this.$store.dispatch("fetchCategory", this.id);
    };
    ShowCategory.prototype.onUrlChange = function (newVal) {
        this.$store.dispatch("fetchCategory", this.id);
    };
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])()
    ], ShowCategory.prototype, "id", void 0);
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Watch"])("$route", { immediate: true, deep: true })
    ], ShowCategory.prototype, "onUrlChange", null);
    ShowCategory = __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            name: "ShowCategory",
            components: {
                Content: _common_content_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
                Table: _common_table_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
            },
            computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["category"]),
            methods: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])(["fetchCategory"])
        })
    ], ShowCategory);
    return ShowCategory;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["default"] = (ShowCategory);


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
  return _c("Content", { attrs: { title: _vm.category.name } }, [
    _vm.category.products
      ? _c(
          "div",
          { staticClass: "table" },
          [
            _c("Table", {
              attrs: {
                columns: _vm.columns,
                data: _vm.category.products,
                sortColumn: _vm.sortColumn,
                onSort: _vm.handleSort
              }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
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
/* harmony import */ var _showCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showCategory.vue?vue&type=script&lang=ts& */ "./resources/js/components/category/showCategory.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _showCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
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

/***/ "./resources/js/components/category/showCategory.vue?vue&type=script&lang=ts&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/category/showCategory.vue?vue&type=script&lang=ts& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_showCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader??ref--11!../../../../node_modules/vue-loader/lib??vue-loader-options!./showCategory.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/showCategory.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_showCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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