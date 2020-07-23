(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/addOrder.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/addOrder.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddOrderTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddOrderTable */ "./resources/js/components/admin/order/AddOrderTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "addOrderToUser",
  components: {
    AddOrderTable: _AddOrderTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    id: ""
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
      categoryName: "",
      loading: false
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
      this.axios.post("order/".concat(this.id), this.orders, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token")
        }
      }).then(function (res) {
        _this4.$router.push({
          name: "showOrder",
          params: {
            idc: res.data.data.id
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/addOrder.vue?vue&type=template&id=2306f959&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/order/addOrder.vue?vue&type=template&id=2306f959& ***!
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
  return _c(
    "div",
    { staticClass: "md:flex" },
    [
      _c("aside", { staticClass: "sidebar" }, [
        _c("div", { staticClass: "name" }, [_vm._v("Objednávkový systém")]),
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
            _c("div", { staticClass: "link", on: { click: _vm.allProduct } }, [
              _vm._v("Všechny produkty")
            ]),
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
      ]),
      _vm._v(" "),
      _c("AddOrderTable", {
        attrs: {
          "add-order": _vm.addOrder,
          all: _vm.all,
          "category-name": _vm.categoryName,
          collapsed: _vm.collapsed,
          "filtered-list": _vm.filteredList,
          orders: _vm.orders,
          products: _vm.products,
          val: _vm.val
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/order/addOrder.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/admin/order/addOrder.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addOrder_vue_vue_type_template_id_2306f959___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addOrder.vue?vue&type=template&id=2306f959& */ "./resources/js/components/admin/order/addOrder.vue?vue&type=template&id=2306f959&");
/* harmony import */ var _addOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addOrder.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/order/addOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addOrder_vue_vue_type_template_id_2306f959___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addOrder_vue_vue_type_template_id_2306f959___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/order/addOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/order/addOrder.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/admin/order/addOrder.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/addOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/order/addOrder.vue?vue&type=template&id=2306f959&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/order/addOrder.vue?vue&type=template&id=2306f959& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addOrder_vue_vue_type_template_id_2306f959___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./addOrder.vue?vue&type=template&id=2306f959& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/order/addOrder.vue?vue&type=template&id=2306f959&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addOrder_vue_vue_type_template_id_2306f959___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addOrder_vue_vue_type_template_id_2306f959___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);