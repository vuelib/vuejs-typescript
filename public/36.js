(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/userProfile.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--11!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/user/userProfile.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _common_container_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/container.vue */ "./resources/js/components/common/container.vue");
/* harmony import */ var _common_content_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/content.vue */ "./resources/js/components/common/content.vue");
/* harmony import */ var _order_userDetails_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../order/userDetails.vue */ "./resources/js/components/order/userDetails.vue");
/* harmony import */ var _common_sidebar_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/sidebar.vue */ "./resources/js/components/common/sidebar.vue");
/* harmony import */ var _common_Pagination_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/Pagination.vue */ "./resources/js/components/common/Pagination.vue");
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







var userProfile = /** @class */ (function (_super) {
    __extends(userProfile, _super);
    function userProfile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loading = false;
        _this.setParam = function (order) {
            return {
                name: "showOrder",
                params: { id: order.id },
            };
        };
        return _this;
    }
    Object.defineProperty(userProfile.prototype, "user", {
        get: function () {
            return this.$store.getters.userProfile;
        },
        enumerable: false,
        configurable: true
    });
    userProfile.prototype.addInvoice = function () {
        this.$router.push({
            name: "addInvoice",
            params: { id: this.id },
        });
    };
    userProfile.prototype.changeInvoice = function () {
        this.$router.push({
            name: "changeInvoice",
            params: { id: this.id },
        });
    };
    userProfile.prototype.deleteUser = function () {
        var _this = this;
        if (confirm("Jste si jistý?")) {
            this.axios
                .delete("deleteuser/" + this.id, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("access_token"),
                },
            })
                .then(function (res) {
                _this.$router.push({
                    name: "showUsers",
                });
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    userProfile.prototype.beforeMount = function () {
        var _this = this;
        this.loading = true;
        this.$store
            .dispatch("fetchUserProfile", this.id)
            .then(function (res) { return (_this.loading = false); })
            .catch(function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])()
    ], userProfile.prototype, "successMessage", void 0);
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])()
    ], userProfile.prototype, "id", void 0);
    userProfile = __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            name: "userProfile",
            components: {
                Container: _common_container_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
                Content: _common_content_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                userDetails: _order_userDetails_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
                Sidebar: _common_sidebar_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
                Pagination: _common_Pagination_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
            },
            computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["orders", "order", "ordersFilter"]),
            methods: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])(["fetchUserProfile"]),
        })
    ], userProfile);
    return userProfile;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["default"] = (userProfile);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/userProfile.vue?vue&type=template&id=42d550e5&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/user/userProfile.vue?vue&type=template&id=42d550e5& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c(
        "Sidebar",
        {
          attrs: {
            name: "Objednávky",
            items: _vm.user.orders,
            type: "name",
            param: _vm.setParam
          }
        },
        [
          _c(
            "router-link",
            {
              staticClass: "link text-center",
              attrs: { to: { name: "addOrder" } }
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
                  value: _vm.user.orders.length === 0,
                  expression: "user.orders.length === 0"
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
        "Content",
        { attrs: { title: "Uživatel " + _vm.user.email } },
        [
          _c("div", { staticClass: "pb-3 pl-3" }, [
            !_vm.user.invoice
              ? _c(
                  "button",
                  {
                    staticClass:
                      "bg-transparent hover:bg-green-700 text-black font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded",
                    on: { click: _vm.addInvoice }
                  },
                  [_vm._v("Přidat fakturační údaje")]
                )
              : _c(
                  "button",
                  {
                    staticClass:
                      "bg-transparent hover:bg-green-700 text-black font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded",
                    on: { click: _vm.changeInvoice }
                  },
                  [_vm._v("Změnit fakturační údaje")]
                ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "bg-transparent hover:bg-red-700 text-black font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded",
                on: { click: _vm.deleteUser }
              },
              [_vm._v("Odstranit uživatele")]
            )
          ]),
          _vm._v(" "),
          _c("userDetails", { attrs: { user: _vm.user } }),
          _vm._v(" "),
          _c("router-view")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/user/userProfile.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/admin/user/userProfile.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userProfile_vue_vue_type_template_id_42d550e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userProfile.vue?vue&type=template&id=42d550e5& */ "./resources/js/components/admin/user/userProfile.vue?vue&type=template&id=42d550e5&");
/* harmony import */ var _userProfile_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userProfile.vue?vue&type=script&lang=ts& */ "./resources/js/components/admin/user/userProfile.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _userProfile_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _userProfile_vue_vue_type_template_id_42d550e5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _userProfile_vue_vue_type_template_id_42d550e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/user/userProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/user/userProfile.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/user/userProfile.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_userProfile_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/ts-loader??ref--11!../../../../../node_modules/vue-loader/lib??vue-loader-options!./userProfile.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/userProfile.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_userProfile_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/user/userProfile.vue?vue&type=template&id=42d550e5&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/user/userProfile.vue?vue&type=template&id=42d550e5& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userProfile_vue_vue_type_template_id_42d550e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./userProfile.vue?vue&type=template&id=42d550e5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/userProfile.vue?vue&type=template&id=42d550e5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userProfile_vue_vue_type_template_id_42d550e5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_userProfile_vue_vue_type_template_id_42d550e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);