(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/addOrder.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order/addOrder.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebarMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebarMenu */ "./resources/js/components/order/sidebarMenu.vue");
/* harmony import */ var vue_burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-burger-menu */ "./node_modules/vue-burger-menu/dist/vue-burger-menu.common.js");
/* harmony import */ var vue_burger_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_burger_menu__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AddOrder",
  components: {
    SidebarMenu: _sidebarMenu__WEBPACK_IMPORTED_MODULE_0__["default"],
    Slide: vue_burger_menu__WEBPACK_IMPORTED_MODULE_1__["Slide"]
  },
  data: function data() {
    return {
      collapsed: false,
      orders: {
        order: null
      },
      search: "",
      val: "",
      all: true,
      data: {},
      categoryName: ""
    };
  },
  computed: {
    grnItemsArr: function grnItemsArr() {
      var _this = this;

      return Object.keys(this.orders.order).reduce(function (acc, itemKey) {
        var row = [itemKey, _this.order[itemKey]];
        acc.push(row);
        return acc;
      }, []);
    },
    filteredList: function filteredList() {
      var _this2 = this;

      return this.products.filter(function (product) {
        return product.name.toLowerCase().includes(_this2.search.toLowerCase());
      });
    },
    filterOrders: function filterOrders() {
      var _this3 = this;

      return this.products.filter(function (product) {
        return product.name.toLowerCase().includes(_this3.search.toLowerCase());
      });
    },
    categories: function categories() {
      return this.$store.getters.categories;
    },
    products: function products() {
      return this.$store.getters.products;
    }
  },
  created: function created() {
    this.$store.dispatch("fetchCategories");
    this.$store.dispatch("fetchProducts");
    var order = {};
    this.products.forEach(function (item) {
      order[item[1]] = null;
    });
    this.orders.order = order;
  },
  methods: {
    allProduct: function allProduct() {
      this.all = true;
    },
    value: function value(id, name) {
      this.val = id;
      this.categoryName = name;
      this.search = "";
      this.all = false;
    },
    addOrder: function addOrder() {
      var _this4 = this;

      delete this.orders.order[undefined];
      this.axios.post("order", this.orders, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token")
        }
      }).then(function (res) {
        _this4.$router.push({
          name: "ShowOrder",
          params: {
            id: res.data.data.id
          }
        });

        _this4.$store.commit("addOrder", res.data.data);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/addOrder.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order/addOrder.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bm-burger-button {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  left: 36px;\n  top: 36px;\n  cursor: pointer;\n}\n.bm-burger-bars {\n  background-color: #000;\n}\n.line-style {\n  position: absolute;\n  height: 10%;\n  left: 0;\n  right: 0;\n}\n.cross-style {\n  position: absolute;\n  top: 12px;\n  right: 2px;\n  cursor: pointer;\n}\n.bm-cross {\n  background: #bdc3c7;\n}\n.bm-cross-button {\n  height: 24px;\n  width: 24px;\n}\n.bm-menu {\n  height: 100%; /* 100% Full-height */\n  width: 0; /* 0 width - change this with JavaScript */\n  position: fixed; /* Stay in place */\n  z-index: 1000; /* Stay on top */\n  top: 0;\n  left: 0;\n  background-color: rgb(63, 63, 65); /* Black*/\n  overflow-x: hidden; /* Disable horizontal scroll */\n  padding-top: 60px; /* Place content 60px from the top */\n  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/\n}\n.bm-overlay {\n  background: #fff;\n}\n.bm-item-list {\n  color: #b8b7ad;\n  margin-left: 10%;\n  font-size: 20px;\n}\n.bm-item-list > * {\n  display: flex;\n  text-decoration: none;\n  padding: 0.7em;\n}\n.bm-item-list > * > span {\n  margin-left: 10px;\n  font-weight: 700;\n  color: white;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/addOrder.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order/addOrder.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./addOrder.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/addOrder.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/addOrder.vue?vue&type=template&id=a0ddb64e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order/addOrder.vue?vue&type=template&id=a0ddb64e& ***!
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
  return _c("div", { staticClass: "md:flex" }, [
    _c("aside", { staticClass: "sidebar" }, [
      _c("div", { staticClass: "flex" }, [
        _c(
          "div",
          { staticClass: "w-1/6 text-black block cursor-pointer md:hidden" },
          [
            _c(
              "Slide",
              { attrs: { Push: "", closeOnNavigation: true } },
              [
                _c(
                  "div",
                  { staticClass: "link", on: { click: _vm.allProduct } },
                  [_vm._v("Všechny produkty")]
                ),
                _vm._v(" "),
                _vm._l(_vm.categories, function(category) {
                  return _c("div", { key: category.id }, [
                    _c(
                      "div",
                      {
                        staticClass: "link",
                        on: {
                          click: function($event) {
                            return _vm.value(category.id, category.name)
                          }
                        }
                      },
                      [_vm._v(_vm._s(category.name))]
                    )
                  ])
                })
              ],
              2
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "name w-4/6 md:w-full pt-2 md:pt-0" }, [
          _vm._v("Objednávkový systém")
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "menu" },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.search,
                expression: "search"
              }
            ],
            staticClass:
              "pt-2 appearance-none text-black block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey",
            attrs: { placeholder: "Vyhledejte zboží", type: "text" },
            domProps: { value: _vm.search },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.search = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "link hidden md:block",
              on: { click: _vm.allProduct }
            },
            [_vm._v("Všechny produkty")]
          ),
          _vm._v(" "),
          _vm._l(_vm.categories, function(category) {
            return _c("div", { key: category.id }, [
              _c(
                "div",
                {
                  staticClass: "link hidden md:block",
                  on: {
                    click: function($event) {
                      return _vm.value(category.id, category.name)
                    }
                  }
                },
                [_vm._v(_vm._s(category.name))]
              )
            ])
          })
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c("div", [
      _c("div", { staticClass: "mt-3 p-3" }, [
        _c("h3", [
          _vm._v(_vm._s(_vm.all ? "Všechny produkty" : _vm.categoryName))
        ])
      ]),
      _vm._v(" "),
      _vm.orders
        ? _c(
            "div",
            {
              staticClass:
                "bg-ivory border-t-2 border-b-4 border-ivory rounded-lg shadow-lg ml-3"
            },
            [
              _c(
                "div",
                { staticClass: "flex flex-col p-2" },
                [
                  _c(
                    "h4",
                    {
                      staticClass:
                        "text-xl font-semibold cursor-pointer text-junglegreen",
                      on: {
                        click: function($event) {
                          _vm.collapsed = !_vm.collapsed
                        }
                      }
                    },
                    [_vm._v("Zvolené produkty")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.collapsed,
                          expression: "!collapsed"
                        }
                      ],
                      staticClass: "flex font-bold text-center"
                    },
                    [
                      _c("div", { staticClass: "w-3/6 h-6 text-left pl-2" }, [
                        _vm._v("Název produktu")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-2/6 h-6" }, [
                        _vm._v("Balení")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-2/6 h-6" }, [
                        _vm._v("Množství")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.products, function(product) {
                    return _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.collapsed,
                            expression: "!collapsed"
                          }
                        ],
                        key: product.id
                      },
                      _vm._l(_vm.orders.order, function(value, index) {
                        return _c("div", { key: index }, [
                          index == product.id
                            ? _c("div", { staticClass: "flex text-center" }, [
                                _c(
                                  "div",
                                  { staticClass: "w-3/6 text-left pl-2" },
                                  [_vm._v(_vm._s(product.name))]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "w-2/6 h-6" }, [
                                  _vm._v(_vm._s(product.hmotnost))
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "w-2/6 h-6" }, [
                                  _vm._v(_vm._s(value))
                                ])
                              ])
                            : _vm._e()
                        ])
                      }),
                      0
                    )
                  })
                ],
                2
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.addOrder($event)
            }
          }
        },
        [
          _c("button", { staticClass: "success", attrs: { type: "submit" } }, [
            _vm._v("Potvrdit")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "table mt-3" }, [
            _c("div", { staticClass: "flex flex-wrap" }, [
              _c("table", { staticClass: "table-fixed" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.filteredList, function(product, index) {
                    return product.category_id == _vm.val && !_vm.all
                      ? _c("tr", { key: product.id }, [
                          _c("td", { staticClass: "border px-4 py-2" }, [
                            _vm._v(_vm._s(product.name))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "border px-4 py-2" }, [
                            _vm._v(_vm._s(product.hmotnost))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "border excel px-4 py-2" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.orders.order[product.id],
                                  expression: "orders.order[product.id]"
                                }
                              ],
                              staticClass:
                                "w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                              attrs: {
                                id: index,
                                placeholder: "Množství",
                                type: "text"
                              },
                              domProps: { value: _vm.orders.order[product.id] },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.orders.order,
                                    product.id,
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      : _vm.all
                      ? _c("tr", [
                          _c("td", { staticClass: "border px-4 py-2" }, [
                            _vm._v(_vm._s(product.name))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "border px-4 py-2" }, [
                            _vm._v(_vm._s(product.hmotnost))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "border px-4 py-2" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.orders.order[product.id],
                                  expression: "orders.order[product.id]"
                                }
                              ],
                              staticClass:
                                "w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                              attrs: {
                                id: index,
                                placeholder: "Množství",
                                type: "text"
                              },
                              domProps: { value: _vm.orders.order[product.id] },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.orders.order,
                                    product.id,
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      : _vm._e()
                  }),
                  0
                )
              ])
            ])
          ])
        ]
      )
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
        _c("th", { staticClass: "w-1/2 px-4 py-2" }, [
          _vm._v("Název produktu")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/4 px-4 py-2" }, [_vm._v("Balení")]),
        _vm._v(" "),
        _c("th", { staticClass: "w-1/4 px-4 py-2" }, [_vm._v("Množství")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/order/addOrder.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/order/addOrder.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addOrder_vue_vue_type_template_id_a0ddb64e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addOrder.vue?vue&type=template&id=a0ddb64e& */ "./resources/js/components/order/addOrder.vue?vue&type=template&id=a0ddb64e&");
/* harmony import */ var _addOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addOrder.vue?vue&type=script&lang=js& */ "./resources/js/components/order/addOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _addOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addOrder.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/order/addOrder.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _addOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addOrder_vue_vue_type_template_id_a0ddb64e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addOrder_vue_vue_type_template_id_a0ddb64e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/order/addOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/order/addOrder.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/order/addOrder.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./addOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/addOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/order/addOrder.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/order/addOrder.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./addOrder.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/addOrder.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addOrder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/order/addOrder.vue?vue&type=template&id=a0ddb64e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/order/addOrder.vue?vue&type=template&id=a0ddb64e& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addOrder_vue_vue_type_template_id_a0ddb64e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./addOrder.vue?vue&type=template&id=a0ddb64e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/addOrder.vue?vue&type=template&id=a0ddb64e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addOrder_vue_vue_type_template_id_a0ddb64e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addOrder_vue_vue_type_template_id_a0ddb64e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/order/sidebarMenu.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/order/sidebarMenu.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "resources/js/components/order/sidebarMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

}]);