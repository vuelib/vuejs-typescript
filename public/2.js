(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/AddInvoice.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/invoice/AddInvoice.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
  name: "AddInvoice",
  data: function data() {
    return {
      user: {
        ic: ""
      },
      aresData: null,
      edit: false,
      errors: ""
    };
  },
  methods: {
    addInvoice: function addInvoice() {
      this.errors = [];

      if (!this.edit) {
        this.sendData("/ares", this.user, true);
      } else {
        this.sendData("/invoice", this.aresData, false);
      }
    },
    createInvoice: function createInvoice() {
      this.edit = true;
      this.addInvoice();
    },
    sendData: function sendData(url, data, then) {
      var _this = this;

      this.axios.post(url, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token")
        }
      }).then(function (res) {
        if (then) {
          _this.aresData = res.data.data;
        } else {
          _this.$store.commit('addInvoice', _this.aresData);

          _this.$router.push({
            name: "objednat"
          });
        }
      })["catch"](function (error) {
        if (error.response.status == 422) {
          _this.errors = error.response.data.errors;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/AddInvoice.vue?vue&type=template&id=25b203ce&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/invoice/AddInvoice.vue?vue&type=template&id=25b203ce& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "full" }, [
    _vm._m(0),
    _vm._v(" "),
    !_vm.aresData
      ? _c("div", { staticClass: "flex flex-wrap" }, [
          _c("div", { staticClass: "w-full" }, [
            _c("div", { staticClass: "table" }, [
              _c(
                "form",
                {
                  staticClass: "w-full max-w-lg p-5",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.addInvoice($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
                    _c("div", { staticClass: "w-full px-3" }, [
                      _c(
                        "label",
                        { staticClass: "ares-label", attrs: { for: "ic" } },
                        [_vm._v("IČ")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.ic,
                            expression: "user.ic"
                          }
                        ],
                        staticClass: "ares-input",
                        class: {
                          "border-red-500": _vm.errors.ic
                        },
                        attrs: { id: "ic", type: "value" },
                        domProps: { value: _vm.user.ic },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "ic", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.ic
                        ? _c(
                            "p",
                            { staticClass: "text-red-500 text-xs italic" },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.errors.ic[0]) +
                                  "\n                            "
                              )
                            ]
                          )
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(1)
                ]
              )
            ])
          ])
        ])
      : _c("div", { staticClass: "flex flex-wrap" }, [
          _c("div", { staticClass: "w-full" }, [
            _c("div", { staticClass: "table" }, [
              _c(
                "form",
                {
                  staticClass: "w-full max-w-lg p-5",
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.createInvoice($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: " flex flex-wrap -mx-3 mb-6" }, [
                    _c("div", { staticClass: "w-full px-3" }, [
                      _c(
                        "label",
                        { staticClass: "ares-label", attrs: { for: "ic" } },
                        [_vm._v("IČ")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.aresData.ic,
                            expression: "aresData.ic"
                          }
                        ],
                        staticClass: "ares-input",
                        class: {
                          "border-red-500": _vm.errors.ic
                        },
                        attrs: { id: "ic", type: "text" },
                        domProps: { value: _vm.aresData.ic },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.aresData, "ic", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.ic
                        ? _c(
                            "p",
                            { staticClass: "text-red-500 text-xs italic" },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.errors.ic[0]) +
                                  "\n                            "
                              )
                            ]
                          )
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.aresData.dic
                    ? _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
                        _c("div", { staticClass: "w-full px-3" }, [
                          _c(
                            "label",
                            {
                              staticClass: "ares-label",
                              attrs: { for: "dic" }
                            },
                            [_vm._v("DIČ")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.aresData.dic,
                                expression: "aresData.dic"
                              }
                            ],
                            staticClass: "ares-input",
                            class: {
                              "border-red-500": _vm.errors.dic
                            },
                            attrs: { id: "dic", type: "text" },
                            domProps: { value: _vm.aresData.dic },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.aresData,
                                  "dic",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.errors.dic
                            ? _c(
                                "p",
                                { staticClass: "text-red-500 text-xs italic" },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(_vm.errors.dic[0]) +
                                      "\n                            "
                                  )
                                ]
                              )
                            : _vm._e()
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
                    _c("div", { staticClass: "w-full px-3" }, [
                      _c(
                        "label",
                        { staticClass: "ares-label", attrs: { for: "nazev" } },
                        [_vm._v("Název")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.aresData.nazev,
                            expression: "aresData.nazev"
                          }
                        ],
                        staticClass: "ares-input",
                        class: {
                          "border-red-500": _vm.errors.nazev
                        },
                        attrs: { id: "nazev", type: "text" },
                        domProps: { value: _vm.aresData.nazev },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.aresData, "nazev", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors.nazev
                        ? _c(
                            "p",
                            { staticClass: "text-red-500 text-xs italic" },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.errors.nazev[0]) +
                                  "\n                            "
                              )
                            ]
                          )
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
                    _c(
                      "div",
                      { staticClass: "w-full md:w-2/4 px-3 mb-6 md:mb-0" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "ares-label",
                            attrs: { for: "Ulice" }
                          },
                          [_vm._v("Ulice")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.aresData.ulice,
                              expression: "aresData.ulice"
                            }
                          ],
                          staticClass: "ares-input",
                          class: {
                            "border-red-500": _vm.errors.ulice
                          },
                          attrs: { id: "Ulice", type: "text" },
                          domProps: { value: _vm.aresData.ulice },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.aresData,
                                "ulice",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.ulice
                          ? _c(
                              "p",
                              { staticClass: "text-red-500 text-xs italic" },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.errors.ulice[0]) +
                                    "\n                            "
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "w-full md:w-1/4 px-3 mb-6 md:mb-0" },
                      [
                        _c(
                          "label",
                          {
                            staticClass: "ares-label",
                            attrs: { for: "mesto" }
                          },
                          [_vm._v("Město")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.aresData.mesto,
                              expression: "aresData.mesto"
                            }
                          ],
                          staticClass: "ares-input",
                          class: {
                            "border-red-500": _vm.errors.mesto
                          },
                          attrs: { id: "mesto", type: "text" },
                          domProps: { value: _vm.aresData.mesto },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.aresData,
                                "mesto",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.mesto
                          ? _c(
                              "p",
                              { staticClass: "text-red-500 text-xs italic" },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.errors.mesto[0]) +
                                    "\n                            "
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "w-full md:w-1/4 px-3 mb-6 md:mb-0" },
                      [
                        _c(
                          "label",
                          { staticClass: "ares-label", attrs: { for: "psc" } },
                          [_vm._v("PSČ")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.aresData.psc,
                              expression: "aresData.psc"
                            }
                          ],
                          staticClass: "ares-input",
                          class: {
                            "border-red-500": _vm.errors.dic
                          },
                          attrs: { id: "psc", type: "text" },
                          domProps: { value: _vm.aresData.psc },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.aresData, "psc", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.dic
                          ? _c(
                              "p",
                              { staticClass: "text-red-500 text-xs italic" },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.errors.psc[0]) +
                                    "\n                            "
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
                    _c(
                      "div",
                      { staticClass: "w-full md:w-2/4 px-3 mb-6 md:mb-0" },
                      [
                        _c(
                          "label",
                          { staticClass: "ares-label", attrs: { for: "stat" } },
                          [_vm._v("Stát")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.aresData.zeme,
                              expression: "aresData.zeme"
                            }
                          ],
                          staticClass: "ares-input",
                          class: {
                            "border-red-500": _vm.errors.stat
                          },
                          attrs: { id: "stat", type: "text" },
                          domProps: { value: _vm.aresData.zeme },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.aresData,
                                "zeme",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.zeme
                          ? _c(
                              "p",
                              { staticClass: "text-red-500 text-xs italic" },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.errors.zeme[0]) +
                                    "\n                            "
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "md:flex md:items-center" }, [
                    _c("div", {}, [
                      _c(
                        "button",
                        { staticClass: "success", attrs: { type: "submit" } },
                        [
                          _vm._v(
                            "\n                                Potvrdit údaje\n                            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "ml-2 shadow bg-red-800 hover:bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",
                          on: {
                            click: function($event) {
                              _vm.aresData = null
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                Zrušit\n                            "
                          )
                        ]
                      )
                    ])
                  ])
                ]
              )
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
    return _c("div", { staticClass: "header" }, [
      _c("h3", [_vm._v("Přidat fakturačních údaje")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "md:flex md:items-center" }, [
      _c("div", { staticClass: "w-full" }, [
        _c("button", { staticClass: "success", attrs: { type: "submit" } }, [
          _vm._v(
            "\n                                Zadejte IČ\n                            "
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/invoice/AddInvoice.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/invoice/AddInvoice.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddInvoice_vue_vue_type_template_id_25b203ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddInvoice.vue?vue&type=template&id=25b203ce& */ "./resources/js/components/invoice/AddInvoice.vue?vue&type=template&id=25b203ce&");
/* harmony import */ var _AddInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddInvoice.vue?vue&type=script&lang=js& */ "./resources/js/components/invoice/AddInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddInvoice_vue_vue_type_template_id_25b203ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddInvoice_vue_vue_type_template_id_25b203ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/invoice/AddInvoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/invoice/AddInvoice.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/invoice/AddInvoice.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddInvoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/AddInvoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/invoice/AddInvoice.vue?vue&type=template&id=25b203ce&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/invoice/AddInvoice.vue?vue&type=template&id=25b203ce& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoice_vue_vue_type_template_id_25b203ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddInvoice.vue?vue&type=template&id=25b203ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/invoice/AddInvoice.vue?vue&type=template&id=25b203ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoice_vue_vue_type_template_id_25b203ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddInvoice_vue_vue_type_template_id_25b203ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);