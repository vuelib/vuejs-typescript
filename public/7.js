(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/allCategories.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--11!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/allCategories.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _common_container_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/container.vue */ "./resources/js/components/common/container.vue");
/* harmony import */ var _common_sidebar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/sidebar.vue */ "./resources/js/components/common/sidebar.vue");
/* harmony import */ var _utils_urlSlug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/urlSlug */ "./resources/js/utils/urlSlug.ts");
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





var AllCategories = /** @class */ (function (_super) {
    __extends(AllCategories, _super);
    function AllCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AllCategories.prototype.created = function () {
        this.$store.dispatch("fetchCategories");
    };
    AllCategories.prototype.setSlug = function (name) {
        return Object(_utils_urlSlug__WEBPACK_IMPORTED_MODULE_4__["urlSlug"])(name);
    };
    AllCategories.prototype.deleteCategory = function (id) {
        var _this = this;
        this.errors = [];
        this.successMessage = "";
        this.$store
            .dispatch("deleteCategory", id)
            .then(function (response) {
            _this.successMessage = "Úspěšně jste odstranili kategorii";
        })
            .catch(function (error) {
            if (error.response.status == 422) {
                _this.errors = error.response.data.errors;
            }
        });
    };
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])()
    ], AllCategories.prototype, "successMessage", void 0);
    AllCategories = __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            name: "AllCategories",
            components: {
                Container: _common_container_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
                Sidebar: _common_sidebar_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
            },
            computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["categories"]),
            methods: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])(["fetchCategories"])
        })
    ], AllCategories);
    return AllCategories;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["default"] = (AllCategories);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/allCategories.vue?vue&type=template&id=54a4f957&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/allCategories.vue?vue&type=template&id=54a4f957& ***!
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
    [
      !["zbozi"].includes(_vm.$route.name)
        ? _c("Sidebar", {
            attrs: {
              name: "Kategorie",
              items: _vm.categories,
              routeName: "category_show"
            }
          })
        : _c(
            "div",
            { staticClass: "container justify-center flex flex-wrap mt-5" },
            [
              _vm.successMessage
                ? _c(
                    "div",
                    {
                      staticClass:
                        "bg-primary w-full border-t border-b text-center border-junglegreen text-success md:px-4 md:py-3"
                    },
                    [
                      _c("p", { staticClass: "font-bold" }, [
                        _vm._v(_vm._s(_vm.successMessage))
                      ])
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.categories, function(category) {
                return _c(
                  "div",
                  { key: category.id, staticClass: "w-full md:w-1/4 m-2" },
                  [
                    _c(
                      "div",
                      { staticClass: "relative w-30 h-30" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "category_show",
                                params: {
                                  id: category.id,
                                  slug: _vm.setSlug(category.name)
                                }
                              }
                            }
                          },
                          [
                            _c("div", {
                              staticClass:
                                "w-full h-full absolute bg-black opacity-0 hover:opacity-0 cursor-pointer"
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "text-xl text-junglegreen font-bold"
                              },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(category.name) +
                                    "\n                    "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("img", { attrs: { src: category.imagePath } })
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn-edit",
                            attrs: {
                              to: {
                                name: "editCategory",
                                params: { id: category.id }
                              }
                            }
                          },
                          [_vm._v("Upravit")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn-delete",
                            on: {
                              click: function($event) {
                                return _vm.deleteCategory(category.id)
                              }
                            }
                          },
                          [_vm._v("Odstranit")]
                        )
                      ],
                      1
                    )
                  ]
                )
              })
            ],
            2
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

/***/ "./resources/js/components/category/allCategories.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/category/allCategories.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _allCategories_vue_vue_type_template_id_54a4f957___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allCategories.vue?vue&type=template&id=54a4f957& */ "./resources/js/components/category/allCategories.vue?vue&type=template&id=54a4f957&");
/* harmony import */ var _allCategories_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allCategories.vue?vue&type=script&lang=ts& */ "./resources/js/components/category/allCategories.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _allCategories_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _allCategories_vue_vue_type_template_id_54a4f957___WEBPACK_IMPORTED_MODULE_0__["render"],
  _allCategories_vue_vue_type_template_id_54a4f957___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/category/allCategories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/category/allCategories.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/category/allCategories.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_allCategories_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader??ref--11!../../../../node_modules/vue-loader/lib??vue-loader-options!./allCategories.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/allCategories.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_allCategories_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/category/allCategories.vue?vue&type=template&id=54a4f957&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/category/allCategories.vue?vue&type=template&id=54a4f957& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allCategories_vue_vue_type_template_id_54a4f957___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./allCategories.vue?vue&type=template&id=54a4f957& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/allCategories.vue?vue&type=template&id=54a4f957&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allCategories_vue_vue_type_template_id_54a4f957___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allCategories_vue_vue_type_template_id_54a4f957___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/utils/urlSlug.ts":
/*!***************************************!*\
  !*** ./resources/js/utils/urlSlug.ts ***!
  \***************************************/
/*! exports provided: urlSlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlSlug", function() { return urlSlug; });
/* harmony import */ var xregexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xregexp */ "./node_modules/xregexp/lib/index.js");
/* harmony import */ var xregexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xregexp__WEBPACK_IMPORTED_MODULE_0__);

var CHAR_MAP = {
    // Czech
    Č: "C",
    Ď: "D",
    Ě: "E",
    Ň: "N",
    Ř: "R",
    Š: "S",
    Ť: "T",
    Ů: "U",
    Ž: "Z",
    č: "c",
    ď: "d",
    ě: "e",
    ň: "n",
    ř: "r",
    š: "s",
    ť: "t",
    ů: "u",
    ž: "z",
    ý: "y",
    á: "a",
    í: "i",
    ú: "u",
    é: "e"
};
var DEFAULTS = {
    delimiter: "-",
    limit: undefined,
    lowercase: true,
    replacements: {},
    transliterate: typeof xregexp__WEBPACK_IMPORTED_MODULE_0___default.a === "undefined" ? true : false
};
var urlSlug = function (s, opt) {
    s = String(s);
    opt = Object(opt);
    // Merge options
    for (var k in DEFAULTS) {
        if (!opt.hasOwnProperty(k)) {
            opt[k] = DEFAULTS[k];
        }
    }
    // Make custom replacements
    for (var k in opt.replacements) {
        s = s.replace(RegExp(k, "g"), opt.replacements[k]);
    }
    // Transliterate characters to ASCII
    if (opt.transliterate) {
        for (var k in CHAR_MAP) {
            s = s.replace(RegExp(k, "g"), CHAR_MAP[k]);
        }
    }
    // Replace non-alphanumeric characters with our delimiter
    var alnum = typeof xregexp__WEBPACK_IMPORTED_MODULE_0___default.a === "undefined"
        ? RegExp("[^a-z0-9]+", "ig")
        : xregexp__WEBPACK_IMPORTED_MODULE_0___default()("[^\\p{L}\\p{N}]+", "ig");
    s = s.replace(alnum, opt.delimiter);
    // Remove duplicate delimiters
    s = s.replace(RegExp("[" + opt.delimiter + "]{2,}", "g"), opt.delimiter);
    // Truncate slug to max. characters
    s = s.substring(0, opt.limit);
    // Remove delimiter from ends
    s = s.replace(RegExp("(^" + opt.delimiter + "|" + opt.delimiter + "$)", "g"), "");
    return opt.lowercase ? s.toLowerCase() : s;
};


/***/ })

}]);