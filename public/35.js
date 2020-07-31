(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/editOrder.vue?vue&type=script&lang=ts&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--11!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order/editOrder.vue?vue&type=script&lang=ts& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _common_container_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/container.vue */ "./resources/js/components/common/container.vue");
/* harmony import */ var _common_content_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/content.vue */ "./resources/js/components/common/content.vue");
/* harmony import */ var _common_sidebar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/sidebar.vue */ "./resources/js/components/common/sidebar.vue");
/* harmony import */ var _common_orderTable_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/orderTable.vue */ "./resources/js/components/common/orderTable.vue");
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};






// import orders from "../../state/modules/orders";
var editOrder = /** @class */ (function (_super) {
    __extends(editOrder, _super);
    function editOrder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getSearch = "";
        _this.loadComponent = false;
        _this.loading = false;
        _this.errors = [];
        _this.handleSelectCategory = function (category) {
            _this.$store.commit("setCategory", category);
            _this.$store.commit("filterProducts", category);
        };
        return _this;
    }
    Object.defineProperty(editOrder.prototype, "categories", {
        get: function () {
            return __spreadArrays([
                { name: "Všechny produkty", _key: "" }
            ], this.$store.getters.categories);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(editOrder.prototype, "products", {
        get: function () {
            var products = __spreadArrays(this.$store.getters.products);
            var order = this.$store.getters.order;
            products.map(function (p) {
                {
                    order.amounts.map(function (a) {
                        if (p.id === a.product.id) {
                            p.value = a.value;
                            p.amount_id = a.id;
                        }
                    });
                }
            });
            return products;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(editOrder.prototype, "filterProducts", {
        get: function () {
            return this.$store.getters.filteredProducts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(editOrder.prototype, "filteredProducts", {
        get: function () {
            var _this = this;
            return this.filterProducts.filter(function (p) {
                return (p.name.toLowerCase().includes(_this.search.toLowerCase()) ||
                    p.baleni.toLowerCase().includes(_this.search.toLowerCase()) ||
                    ("" + p.id).includes(_this.search.toLowerCase()));
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(editOrder.prototype, "amounts", {
        get: function () {
            return this.products.filter(function (p) { return p.value !== ""; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(editOrder.prototype, "order", {
        get: function () {
            return this.$store.getters.order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(editOrder.prototype, "filteredOrder", {
        get: function () {
            var _this = this;
            var obj = this.order.amounts;
            var result = [];
            obj.some(function (object, indx) {
                _this.products.some(function (p, index) {
                    if (p.id === object.product.id)
                        if (p.value === "")
                            result.push(p);
                });
            });
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(editOrder.prototype, "search", {
        get: function () {
            return this.getSearch;
        },
        set: function (search) {
            this.getSearch = search;
            console.log(this.search);
        },
        enumerable: false,
        configurable: true
    });
    editOrder.prototype.beforeMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadComponent = true;
                        return [4 /*yield*/, this.$store.dispatch("fetchOrder", this.id)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.$store.dispatch("fetchCategories")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.$store.dispatch("fetchProducts")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.$store.commit("setCategory", {
                                name: "Všechny produkty",
                                _key: "",
                            })];
                    case 4:
                        _a.sent();
                        this.loadComponent = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    editOrder.prototype.editOrder = function () {
        var _this = this;
        this.loading = true;
        this.errors = [];
        if (this.amounts.length === 0) {
            this.errors["amounts"] = "Nemáte vybrané žádné produkty.";
            return;
        }
        this.axios
            .put("/order/" + this.id, { amounts: this.amounts, delete: this.filteredOrder }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
        })
            .then(function (res) {
            _this.loading = false;
            _this.$router.push({
                name: "ShowOrder",
                params: { id: res.data.id },
            });
        })
            .catch(function (error) {
            if (error.response.status == 422) {
                var newErrors = [];
                var errors = error.response.data.errors;
                for (error in errors) {
                    var index = ("" + error).split("amounts.")[1].split(".value")[0];
                    var e = __assign(__assign({}, _this.amounts[index]), { error: errors[error][0] });
                    newErrors[e.id] = e;
                }
                newErrors["amounts"] = "Množství musí obsahovat pouze číslice.";
                _this.errors = newErrors;
            }
            _this.loading = false;
        });
    };
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])()
    ], editOrder.prototype, "id", void 0);
    editOrder = __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            name: "editOrder",
            components: {
                container: _common_container_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
                Content: _common_content_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                sidebar: _common_sidebar_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
                orderTable: _common_orderTable_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
            },
            computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["category"]),
            methods: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])(["fetchCategories", "fetchProducts"]),
        })
    ], editOrder);
    return editOrder;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["default"] = (editOrder);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/editOrder.vue?vue&type=template&id=5531fce8&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/order/editOrder.vue?vue&type=template&id=5531fce8& ***!
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
    "container",
    { attrs: { loading: _vm.loadComponent } },
    [
      _c(
        "sidebar",
        {
          attrs: {
            name: "Objednávkový systém",
            items: _vm.categories,
            routerLink: false,
            onSelect: _vm.handleSelectCategory
          }
        },
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
            staticClass: "btn-search",
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
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "Content",
        { attrs: { title: _vm.category.name } },
        [
          _c("order-table", {
            attrs: {
              products: _vm.filteredProducts,
              orders: _vm.amounts,
              onClick: _vm.editOrder,
              errors: _vm.errors,
              buttonName: "Upravit objednávku"
            }
          })
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

/***/ "./resources/js/components/order/editOrder.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/order/editOrder.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editOrder_vue_vue_type_template_id_5531fce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editOrder.vue?vue&type=template&id=5531fce8& */ "./resources/js/components/order/editOrder.vue?vue&type=template&id=5531fce8&");
/* harmony import */ var _editOrder_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editOrder.vue?vue&type=script&lang=ts& */ "./resources/js/components/order/editOrder.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editOrder_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editOrder_vue_vue_type_template_id_5531fce8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editOrder_vue_vue_type_template_id_5531fce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/order/editOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/order/editOrder.vue?vue&type=script&lang=ts&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/order/editOrder.vue?vue&type=script&lang=ts& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_editOrder_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader??ref--11!../../../../node_modules/vue-loader/lib??vue-loader-options!./editOrder.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/editOrder.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_editOrder_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/order/editOrder.vue?vue&type=template&id=5531fce8&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/order/editOrder.vue?vue&type=template&id=5531fce8& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editOrder_vue_vue_type_template_id_5531fce8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./editOrder.vue?vue&type=template&id=5531fce8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/order/editOrder.vue?vue&type=template&id=5531fce8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editOrder_vue_vue_type_template_id_5531fce8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editOrder_vue_vue_type_template_id_5531fce8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);