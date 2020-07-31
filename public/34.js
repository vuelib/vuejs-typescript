(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/allOrders.vue?vue&type=script&lang=ts&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--11!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order/allOrders.vue?vue&type=script&lang=ts& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _common_container_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/container.vue */ "./resources/js/components/common/container.vue");
/* harmony import */ var _common_sidebar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/sidebar.vue */ "./resources/js/components/common/sidebar.vue");
/* harmony import */ var _common_Pagination_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Pagination.vue */ "./resources/js/components/common/Pagination.vue");
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
        _this.loadComponent = false;
        _this.renderHTML = function (order) {
            var className = order.status == "rozpracovaná" ? "fa-pen" : "fa-check";
            var html = "\u010D. " + order.id + " \n             <i  class=\"fas " + className + "\"></i> " + order.created_at;
            return html;
        };
        _this.setParam = function (order) {
            return {
                name: "ShowOrder",
                params: { id: order.id },
            };
        };
        return _this;
    }
    Object.defineProperty(allOrders.prototype, "orders", {
        get: function () {
            var order = this.$store.getters.orders;
            return order;
        },
        enumerable: false,
        configurable: true
    });
    allOrders.prototype.beforeMount = function () {
        var _this = this;
        this.loadComponent = true;
        this.$store
            .dispatch("fetchOrders", 1)
            .then(function (res) { return (_this.loadComponent = false); })
            .catch(function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])()
    ], allOrders.prototype, "successMessage", void 0);
    allOrders = __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            name: "allOrders",
            components: {
                Container: _common_container_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
                Sidebar: _common_sidebar_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                Pagination: _common_Pagination_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
            },
            computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["orders"]),
            methods: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])(["fetchOrders"]),
        })
    ], allOrders);
    return allOrders;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["default"] = (allOrders);


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
  return _c(
    "Container",
    { attrs: { loading: _vm.loadComponent } },
    [
      _c(
        "Sidebar",
        {
          attrs: {
            name: "Objednávky",
            items: _vm.orders.data,
            renderHTML: _vm.renderHTML,
            type: "name",
            param: _vm.setParam
          },
          scopedSlots: _vm._u([
            {
              key: "bottom",
              fn: function() {
                return [_c("pagination", { attrs: { items: _vm.orders } })]
              },
              proxy: true
            }
          ])
        },
        [
          _c(
            "router-link",
            {
              staticClass: "link text-center",
              attrs: { to: { name: "objednat" } }
            },
            [_c("i", { staticClass: "fas fa-plus" }), _vm._v(" Přidat\n    ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.orders.data.length === 0,
                  expression: "orders.data.length === 0"
                }
              ]
            },
            [_vm._v("Nemáte žádné objednávky")]
          )
        ],
        1
      ),
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
/* harmony import */ var _allOrders_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allOrders.vue?vue&type=script&lang=ts& */ "./resources/js/components/order/allOrders.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _allOrders_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
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

/***/ "./resources/js/components/order/allOrders.vue?vue&type=script&lang=ts&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/order/allOrders.vue?vue&type=script&lang=ts& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_allOrders_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader??ref--11!../../../../node_modules/vue-loader/lib??vue-loader-options!./allOrders.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/allOrders.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_allOrders_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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