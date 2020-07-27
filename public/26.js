(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/editCategory.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/editCategory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "editCategory",
  props: {
    id: ""
  },
  data: function data() {
    return {
      loading: false,
      image: "",
      errors: "",
      successMessage: ""
    };
  },
  created: function created() {
    this.$store.dispatch("fetchCategories");
    this.$store.dispatch("fetchCategory", this.id);
  },
  computed: {
    categories: function categories() {
      return this.$store.getters.categories;
    },
    category: function category() {
      return this.$store.getters.category;
    }
  },
  methods: {
    editCategory: function editCategory() {
      var _this = this;

      this.loading = true;
      this.axios.put("/category/" + this.id, {
        name: this.category.name,
        image: this.image,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        _this.loading = false;
        _this.successMessage = "Úspěšně jste upravili kategorii";

        _this.$router.push({
          name: "zbozi",
          params: {
            successMessage: _this.successMessage
          }
        });
      })["catch"](function (error) {
        if (error.response.status == 422) {
          _this.errors = error.response.data.errors;
        }
      });
    },
    onImageChange: function onImageChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage: function createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.image = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/editCategory.vue?vue&type=template&id=32bb50de&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/category/editCategory.vue?vue&type=template&id=32bb50de& ***!
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "flex flex-wrap" }, [
      _c("div", { staticClass: "w-full" }, [
        _c("div", { staticClass: "table" }, [
          _c(
            "form",
            {
              staticClass: "w-full max-w-lg p-5",
              attrs: { enctype: "multipart/form-data" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.editCategory($event)
                }
              }
            },
            [
              _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
                _c("div", { staticClass: "w-full px-3" }, [
                  _c(
                    "label",
                    { staticClass: "ares-label", attrs: { for: "name" } },
                    [_vm._v("Název kategorie")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.category.name,
                        expression: "category.name"
                      }
                    ],
                    staticClass: "ares-input",
                    class: {
                      "border-red-500": _vm.errors.name
                    },
                    attrs: { autocomplete: "name", id: "name", type: "text" },
                    domProps: { value: _vm.category.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.category, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("p", { staticClass: "text-red-500 text-xs italic" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex flex-wrap -mx-3 mb-6" }, [
                _c("div", { staticClass: "w-full px-3" }, [
                  _c(
                    "label",
                    { staticClass: "ares-label", attrs: { for: "name" } },
                    [_vm._v("Obrázek kategorie")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "file" },
                    on: { change: _vm.onImageChange }
                  }),
                  _vm._v(" "),
                  _vm.errors.image
                    ? _c(
                        "p",
                        { staticClass: "text-red-500 text-xs italname" },
                        [_vm._v(_vm._s(_vm.errors.image[0]))]
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _vm.image
                ? _c("div", { staticClass: "col-md-3" }, [
                    _c("img", {
                      staticClass: "img-responsive",
                      attrs: { src: _vm.image, height: "70", width: "90" }
                    })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "md:flex md:items-center" }, [
                _c("div", { staticClass: "md:w-2/3" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "shadow bg-blue-800 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded flex",
                      attrs: { disabled: _vm.loading, type: "submit" }
                    },
                    [
                      _vm.loading
                        ? _c("div", { staticClass: "loader" }, [
                            _c("div", { staticClass: "inner one" }),
                            _vm._v(" "),
                            _c("div", { staticClass: "inner two" }),
                            _vm._v(" "),
                            _c("div", { staticClass: "inner three" })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", [_vm._v("Upravit")])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "md:w-2/3" })
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
      _c("h3", [_vm._v("Upravit kategorii")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/category/editCategory.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/category/editCategory.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editCategory_vue_vue_type_template_id_32bb50de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editCategory.vue?vue&type=template&id=32bb50de& */ "./resources/js/components/category/editCategory.vue?vue&type=template&id=32bb50de&");
/* harmony import */ var _editCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editCategory.vue?vue&type=script&lang=js& */ "./resources/js/components/category/editCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editCategory_vue_vue_type_template_id_32bb50de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editCategory_vue_vue_type_template_id_32bb50de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/category/editCategory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/category/editCategory.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/category/editCategory.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./editCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/editCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/category/editCategory.vue?vue&type=template&id=32bb50de&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/category/editCategory.vue?vue&type=template&id=32bb50de& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editCategory_vue_vue_type_template_id_32bb50de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./editCategory.vue?vue&type=template&id=32bb50de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/category/editCategory.vue?vue&type=template&id=32bb50de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editCategory_vue_vue_type_template_id_32bb50de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editCategory_vue_vue_type_template_id_32bb50de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);