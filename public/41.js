(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/showUsers.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/user/showUsers.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "allUsers",
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
    this.$store.dispatch("allUsers").then(function (response) {
      _this.loading = false;
    });
  },
  computed: {
    allUsers: function allUsers() {
      return this.$store.getters.allUsersFiltered;
    },
    filter: function filter() {
      return this.$store.state.filter;
    }
  },
  methods: {
    changeFilter: function changeFilter(filter) {
      this.$store.commit('updateFilter', filter);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/showUsers.vue?vue&type=template&id=af53e05c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/user/showUsers.vue?vue&type=template&id=af53e05c& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
          _c("h3", [_vm._v("Přehled všech uživatelů")])
        ])
      : _vm._e(),
    _vm._v(" "),
    !_vm.loading
      ? _c("div", { staticClass: "ml-4 mb-4" }, [
          _c("div", [
            _c(
              "button",
              {
                staticClass:
                  "bg-transparent hover:bg-green-700 text-black font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded",
                class: { active: _vm.filter == "all" },
                on: {
                  click: function($event) {
                    return _vm.changeFilter("all")
                  }
                }
              },
              [_vm._v("Všichni zakazníci\n            ")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "bg-transparent hover:bg-green-700 text-black font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded",
                class: { active: _vm.filter == "active" },
                on: {
                  click: function($event) {
                    return _vm.changeFilter("withinvoice")
                  }
                }
              },
              [_vm._v("S fakturačními údajy\n            ")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "bg-transparent hover:bg-green-700 text-black font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded",
                class: { active: _vm.filter == "completed" },
                on: {
                  click: function($event) {
                    return _vm.changeFilter("withoutinvoice")
                  }
                }
              },
              [_vm._v("Bez fakturačních\n                údajů\n            ")]
            )
          ])
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
                  _vm._l(_vm.allUsers, function(user) {
                    return _c("tr", { key: user.id }, [
                      _c(
                        "td",
                        { staticClass: "border text-center py-2" },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: { name: "user", params: { id: user.id } }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    user.invoice ? user.invoice.nazev : "NaN"
                                  ) +
                                  "\n                            "
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
                                to: { name: "user", params: { id: user.id } }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    user.invoice ? user.invoice.ic : "NaN"
                                  ) +
                                  "\n                            "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "border px-4 py-2" },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: { name: "user", params: { id: user.id } }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    user.invoice ? user.invoice.dic : "NaN"
                                  ) +
                                  "\n                            "
                              )
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
                                to: { name: "user", params: { id: user.id } }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(user.email) +
                                  "\n                            "
                              )
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
                                to: { name: "user", params: { id: user.id } }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(user.phone) +
                                  "\n                            "
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
        _c("th", [_vm._v("Název firmy")]),
        _vm._v(" "),
        _c("th", [_vm._v("IC")]),
        _vm._v(" "),
        _c("th", [_vm._v("DIC")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Telefon")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/user/showUsers.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/user/showUsers.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showUsers_vue_vue_type_template_id_af53e05c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showUsers.vue?vue&type=template&id=af53e05c& */ "./resources/js/components/admin/user/showUsers.vue?vue&type=template&id=af53e05c&");
/* harmony import */ var _showUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showUsers.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/user/showUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _showUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _showUsers_vue_vue_type_template_id_af53e05c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _showUsers_vue_vue_type_template_id_af53e05c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/user/showUsers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/user/showUsers.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/user/showUsers.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/showUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_showUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/user/showUsers.vue?vue&type=template&id=af53e05c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/user/showUsers.vue?vue&type=template&id=af53e05c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showUsers_vue_vue_type_template_id_af53e05c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./showUsers.vue?vue&type=template&id=af53e05c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/user/showUsers.vue?vue&type=template&id=af53e05c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showUsers_vue_vue_type_template_id_af53e05c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_showUsers_vue_vue_type_template_id_af53e05c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);