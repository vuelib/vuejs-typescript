(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/allOrders.vue?vue&type=script&lang=ts&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--11!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/allOrders.vue?vue&type=script&lang=ts& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var _common_container_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/container.vue */ "./resources/js/components/common/container.vue");
/* harmony import */ var _common_content_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/content.vue */ "./resources/js/components/common/content.vue");
/* harmony import */ var _common_Pagination_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Pagination.vue */ "./resources/js/components/common/Pagination.vue");
/* harmony import */ var _common_table_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/table.vue */ "./resources/js/components/common/table.vue");
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





var allOrders = /** @class */ (function (_super) {
    __extends(allOrders, _super);
    function allOrders() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading = false;
        _this.actions = [
            {
                renderHTML: function (order) {
                    return "<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>";
                },
                param: function (order) {
                    return {
                        name: "showOrder",
                        params: { id: order.user_id, idc: order.id },
                    };
                },
            },
        ];
        _this.sortColumn = { path: "id", order: "asc" };
        _this.handleSort = function (sortColumn) {
            console.log(sortColumn);
            _this.sortColumn = sortColumn;
        };
        return _this;
    }
    Object.defineProperty(allOrders.prototype, "allOrders", {
        get: function () {
            return this.$store.getters.allOrders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(allOrders.prototype, "filter", {
        get: function () {
            return this.$store.getters.allOrders;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(allOrders.prototype, "columns", {
        get: function () {
            var columns = [
                { path: "id", label: "Číslo" },
                { path: "user", label: "Zakazník" },
                {
                    content: function (order) {
                        var className = order.status == "rozpracovaná" ? "fa-pen" : "fa-check";
                        var html = " \n             <i class=\"fas " + className + "\"></i>";
                        return html;
                    },
                    label: "Status",
                },
                { path: "created_at", label: "Datum vytvoření" },
            ];
            return columns;
        },
        enumerable: false,
        configurable: true
    });
    allOrders.prototype.created = function () {
        this.fetchOrders();
    };
    allOrders.prototype.fetchOrders = function () {
        var _this = this;
        this.loading = true;
        this.$store.dispatch("fetchOrderss", 1).then(function (response) {
            _this.loading = false;
        });
    };
    allOrders.prototype.changeFilter = function (filter) {
        this.$store.commit("setFilterOrders", filter);
        this.fetchOrders();
    };
    allOrders = __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            name: "allOrders",
            components: {
                Container: _common_container_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
                Content: _common_content_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
                Pagination: _common_Pagination_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                Table: _common_table_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
            },
        })
    ], allOrders);
    return allOrders;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["default"] = (allOrders);


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/container.vue?vue&type=script&lang=ts&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--11!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/container.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************************************************************************/
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

var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Box.prototype.created = function () {
        this.loading;
    };
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])()
    ], Box.prototype, "title", void 0);
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({ default: false, type: Boolean })
    ], Box.prototype, "loading", void 0);
    Box = __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            name: "box"
        })
    ], Box);
    return Box;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["default"] = (Box);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/allOrders.vue?vue&type=template&id=263693ea&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/allOrders.vue?vue&type=template&id=263693ea& ***!
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
  return _c(
    "Container",
    { attrs: { loading: _vm.loading } },
    [
      _c("Content", { attrs: { title: "Přehled všech objednávek" } }, [
        _c("div", { staticClass: "mb-3" }, [
          _c(
            "button",
            {
              staticClass: "btn-edit-trans",
              class: { active: _vm.filter == "%%" },
              on: {
                click: function($event) {
                  return _vm.changeFilter("%%")
                }
              }
            },
            [_vm._v("Všechny")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "bg-transparent hover:bg-green-700 text-black font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded",
              class: { active: _vm.filter == "0" },
              on: {
                click: function($event) {
                  return _vm.changeFilter("0")
                }
              }
            },
            [_vm._v("Rozepsané")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn-edit-trans",
              class: { active: _vm.filter == "1" },
              on: {
                click: function($event) {
                  return _vm.changeFilter("1")
                }
              }
            },
            [_vm._v("Potvrzené")]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "table" },
          [
            _c("Table", {
              attrs: {
                columns: _vm.columns,
                data: _vm.allOrders.data,
                sortColumn: _vm.sortColumn,
                actions: _vm.actions,
                onSort: _vm.handleSort
              }
            }),
            _vm._v(" "),
            _c("Pagination", {
              attrs: { rangeRequired: true, items: _vm.allOrders }
            })
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/container.vue?vue&type=template&id=57b27928&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/container.vue?vue&type=template&id=57b27928& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "main",
    { staticClass: "flex justify-center" },
    [
      _vm.loading
        ? _c("div", { staticClass: "h-full w-full mt-5" }, [
            _c("div", { staticClass: "loading" })
          ])
        : _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/order/allOrders.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/admin/order/allOrders.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _allOrders_vue_vue_type_template_id_263693ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allOrders.vue?vue&type=template&id=263693ea& */ "./resources/js/components/admin/order/allOrders.vue?vue&type=template&id=263693ea&");
/* harmony import */ var _allOrders_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allOrders.vue?vue&type=script&lang=ts& */ "./resources/js/components/admin/order/allOrders.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _allOrders_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _allOrders_vue_vue_type_template_id_263693ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _allOrders_vue_vue_type_template_id_263693ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/order/allOrders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/order/allOrders.vue?vue&type=script&lang=ts&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/order/allOrders.vue?vue&type=script&lang=ts& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_allOrders_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader??ref--11!../../../../../node_modules/vue-loader/lib??vue-loader-options!./allOrders.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/allOrders.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_allOrders_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/order/allOrders.vue?vue&type=template&id=263693ea&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/admin/order/allOrders.vue?vue&type=template&id=263693ea& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allOrders_vue_vue_type_template_id_263693ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./allOrders.vue?vue&type=template&id=263693ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/allOrders.vue?vue&type=template&id=263693ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allOrders_vue_vue_type_template_id_263693ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allOrders_vue_vue_type_template_id_263693ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/common/container.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/common/container.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container_vue_vue_type_template_id_57b27928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container.vue?vue&type=template&id=57b27928& */ "./resources/js/components/common/container.vue?vue&type=template&id=57b27928&");
/* harmony import */ var _container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container.vue?vue&type=script&lang=ts& */ "./resources/js/components/common/container.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _container_vue_vue_type_template_id_57b27928___WEBPACK_IMPORTED_MODULE_0__["render"],
  _container_vue_vue_type_template_id_57b27928___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/container.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common/container.vue?vue&type=script&lang=ts&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/common/container.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader??ref--11!../../../../node_modules/vue-loader/lib??vue-loader-options!./container.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/container.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common/container.vue?vue&type=template&id=57b27928&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/common/container.vue?vue&type=template&id=57b27928& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_template_id_57b27928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./container.vue?vue&type=template&id=57b27928& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/container.vue?vue&type=template&id=57b27928&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_template_id_57b27928___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_template_id_57b27928___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);