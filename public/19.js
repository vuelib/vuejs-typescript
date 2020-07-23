(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/userProfile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/user/userProfile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "userProfile",
  props: {
    id: ""
  },
  data: function data() {
    return {
      loading: false
    };
  },
  computed: {
    orders: function orders() {
      return this.$store.getters.orders;
    },
    user: function user() {
      return this.$store.getters.userProfile;
    },
    ordersFilter: function ordersFilter() {
      return this.$store.getters.ordersFilter;
    },
    activeOrder: function activeOrder() {
      return this.$store.getters.order;
    }
  },
  created: function created() {
    var _this = this;

    this.loading = true;
    this.$store.dispatch("fetchUserProfile", this.id).then(function (response) {
      _this.loading = false;
    });
  },
  methods: {
    addInvoice: function addInvoice() {
      this.$router.push({
        name: "addInvoice",
        params: {
          id: this.id
        }
      });
    },
    changeInvoice: function changeInvoice() {
      this.$router.push({
        name: "changeInvoice",
        params: {
          id: this.id
        }
      });
    },
    deleteUser: function deleteUser() {
      var _this2 = this;

      if (confirm('Jste si jistý?')) {
        this.axios["delete"]("deleteuser/".concat(this.id), {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        }).then(function (res) {
          _this2.$router.push({
            name: "showUsers"
          });
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }
});

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
  return _c("div", { staticClass: "flex" }, [
    _vm.user.invoice
      ? _c("aside", { staticClass: "sidebar" }, [
          _c("div", { staticClass: "name" }, [_vm._v("Objednávky")]),
          _vm._v(" "),
          _vm.user
            ? _c(
                "div",
                { staticClass: "menu" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "link text-center",
                      attrs: { to: { name: "addOrder" } }
                    },
                    [
                      _c("i", { staticClass: "fas  fa-plus" }),
                      _vm._v(" Přidat\n            ")
                    ]
                  ),
                  _vm._v(" "),
                  !_vm.ordersFilter
                    ? _c("div", { staticClass: "link" }, [
                        _vm._v(
                          "\n                Nemá objednávky\n            "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.orders, function(order) {
                    return _c(
                      "router-link",
                      {
                        key: order.id,
                        staticClass: "link",
                        attrs: {
                          to: { name: "showOrder", params: { idc: order.id } }
                        }
                      },
                      [
                        _vm._v("č. " + _vm._s(order.id) + "\n                "),
                        _c("i", {
                          staticClass: "fas",
                          class:
                            order.status == "rozpracovaná"
                              ? "fa-pen"
                              : "fa-check"
                        }),
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm._f("formatDate")(order.created_at)) +
                            "\n            "
                        )
                      ]
                    )
                  })
                ],
                2
              )
            : _vm._e()
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      [
        _vm.loading ? _c("div", { staticClass: "loading" }) : _vm._e(),
        _vm._v(" "),
        !_vm.loading
          ? _c("div", { staticClass: "header" }, [
              _c("h3", [
                _vm._v("Uživatel "),
                _vm.user
                  ? _c("span", { staticClass: "text-junglegreen" }, [
                      _vm._v(_vm._s(_vm.user.email))
                    ])
                  : _vm._e()
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.loading
          ? _c("div", { staticClass: "pb-3 pl-3" }, [
              !_vm.user.invoice
                ? _c(
                    "button",
                    {
                      staticClass:
                        "bg-transparent hover:bg-green-700 text-black font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded",
                      on: { click: _vm.addInvoice }
                    },
                    [
                      _vm._v(
                        "\n                Přidat fakturační údaje\n            "
                      )
                    ]
                  )
                : _c(
                    "button",
                    {
                      staticClass:
                        "bg-transparent hover:bg-green-700 text-black font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded",
                      on: { click: _vm.changeInvoice }
                    },
                    [
                      _vm._v(
                        "\n                Změnit fakturační údaje\n            "
                      )
                    ]
                  ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "bg-transparent hover:bg-red-700 text-black font-semibold hover:text-white py-2 px-4 border border-red-700 hover:border-transparent rounded",
                  on: { click: _vm.deleteUser }
                },
                [_vm._v("\n                Odstranit uživatele\n            ")]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.user.invoice
          ? _c("div", { staticClass: "flex flex-wrap" }, [
              _c("div", { staticClass: "w-full" }, [
                _c("div", { staticClass: "table" }, [
                  _vm.user
                    ? _c("div", { staticClass: "flex p-2" }, [
                        _c("div", [
                          _vm.user.invoice.nazev
                            ? _c("div", [
                                _c("span", { staticClass: "font-bold" }, [
                                  _vm._v("Název:")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "text-junglegreen font-semibold"
                                  },
                                  [_vm._v(_vm._s(_vm.user.invoice.nazev))]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", [
                            _c("span", { staticClass: "font-bold" }, [
                              _vm._v("Email:")
                            ]),
                            _vm._v(_vm._s(_vm.user.email))
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c("span", { staticClass: "font-bold" }, [
                              _vm._v("Telefon:")
                            ]),
                            _vm._v(_vm._s(_vm.user.phone))
                          ]),
                          _vm._v(" "),
                          _vm.user.invoice.ic
                            ? _c("div", [
                                _c("span", { staticClass: "font-bold" }, [
                                  _vm._v("IC:")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "text-junglegreen font-semibold"
                                  },
                                  [_vm._v(_vm._s(_vm.user.invoice.ic))]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.user.invoice.dic
                            ? _c("div", [
                                _c("span", { staticClass: "font-bold" }, [
                                  _vm._v("DIC:")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "text-junglegreen font-semibold"
                                  },
                                  [_vm._v(_vm._s(_vm.user.invoice.dic))]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _vm.user.invoice
                          ? _c("div", { staticClass: "pl-2" }, [
                              _c("div", [
                                _c("span", { staticClass: "font-bold" }, [
                                  _vm._v("Ulice:")
                                ]),
                                _vm._v(" " + _vm._s(_vm.user.invoice.ulice))
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c("span", { staticClass: "font-bold" }, [
                                  _vm._v("Město:")
                                ]),
                                _vm._v(" " + _vm._s(_vm.user.invoice.mesto))
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c("span", { staticClass: "font-bold" }, [
                                  _vm._v("PSČ:")
                                ]),
                                _vm._v(" " + _vm._s(_vm.user.invoice.psc))
                              ]),
                              _vm._v(" "),
                              _c("div", [
                                _c("span", { staticClass: "font-bold" }, [
                                  _vm._v("Země:")
                                ]),
                                _vm._v(" " + _vm._s(_vm.user.invoice.zeme))
                              ])
                            ])
                          : _vm._e()
                      ])
                    : _vm._e()
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("router-view")
      ],
      1
    )
  ])
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
/* harmony import */ var _userProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userProfile.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/user/userProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _userProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
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

/***/ "./resources/js/components/admin/user/userProfile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/admin/user/userProfile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./userProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/userProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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