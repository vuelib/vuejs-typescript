(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/container.vue?vue&type=script&lang=ts&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--11!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/container.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
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

var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Box.prototype.created = function () {
        this.loading;
    };
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])()
    ], Box.prototype, "title", void 0);
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])({ default: false, type: Boolean })
    ], Box.prototype, "loading", void 0);
    Box = __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            name: "box"
        })
    ], Box);
    return Box;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["default"] = (Box);


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lib/Domu.vue?vue&type=script&lang=ts&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--11!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lib/Domu.vue?vue&type=script&lang=ts& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js");
/* harmony import */ var _common_container_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/container.vue */ "./resources/js/components/common/container.vue");
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


var home = /** @class */ (function (_super) {
    __extends(home, _super);
    function home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Prop"])()
    ], home.prototype, "dataSuccessMessage", void 0);
    home = __decorate([
        Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            name: "home",
            components: {
                Container: _common_container_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
            },
        })
    ], home);
    return home;
}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__["Vue"]));
/* harmony default export */ __webpack_exports__["default"] = (home);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/container.vue?vue&type=template&id=57b27928&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/container.vue?vue&type=template&id=57b27928& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    "main",
    { staticClass: "flex justify-center" },
    [
      _vm.loading
        ? _c("div", { staticClass: "h-full w-full mt-5" }, [
            _c("div", { staticClass: "loading" })
          ])
        : _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lib/Domu.vue?vue&type=template&id=660d1ba8&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lib/Domu.vue?vue&type=template&id=660d1ba8& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("main", { staticClass: "bg-darkergreen" }, [
      _c(
        "div",
        {
          staticClass: "w-full bg-darkergreen flex justify-center items-center",
          staticStyle: { height: "83vh" }
        },
        [
          _c(
            "div",
            { staticClass: "font-bold text-button leading-none text-7xl" },
            [
              _c("span", [
                _vm._v("\n        Miroslav\n        "),
                _c("br"),
                _vm._v("Šotola\n      ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-2xl text-secondary mt-10" }, [
                _vm._v("tel. 607 061 065")
              ])
            ]
          ),
          _vm._v(" "),
          _c("img", {
            staticClass: "w-1/3 ml-6",
            attrs: {
              src:
                "https://barbertrend.com/wp-content/uploads/2017/01/man-with-grey-beard.jpg",
              alt: ""
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "bg-button w-full" }, [
        _c(
          "div",
          { staticClass: "p-6 text-primary font-bold text-center text-4xl" },
          [_vm._v("Ulehčují kuchařům práci.")]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "w-full mt-10 bg-darkergreen flex flex-auto justify-center pb-6"
        },
        [
          _c("img", {
            staticClass: "w-1/3 h-128",
            attrs: {
              src:
                "https://barbertrend.com/wp-content/uploads/2017/01/man-with-grey-beard.jpg",
              alt: ""
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "ml-6 text-button w-1/4 text-3xl" }, [
            _c("span", { staticClass: "font-bold" }, [_vm._v("O mně")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-2xl text-secondary" }, [
              _c("p", { staticClass: "mt-2" }, [
                _vm._v(
                  "\n          Již několik let se zabývám distribucí konvenientnich potravin pro gastrozarizeni. Dodávám širokou škálu výrobku od několika mezinárodních výrobců.\n          Jedna se o koncentrované sypké směsi a pasty vhodné pro přípravu polévek, zeleninových základů a omáček. Dále také různé druhy příloh jako jsou těstoviny, rýže či luštěniny.\n        "
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2" }, [
                _vm._v(
                  "Výrobky obsahují čerstvě zpracované přírodní suroviny jako je zelenina, bylinky, koření či mořská jodidovaná sůl."
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "mt-2" }, [
                _vm._v(
                  "\n          Při výrobě je kladen důraz na šetrné zpracování základních potravin při použití nejmodernějších technologií, tak aby bylo dosaženo nejvyšší kvality.\n          Mezi hlavní odběratele se řadí školní jídelny, kuchyně a vývařovny zdravotních zařízení např, nemocnice, domy s pečovatelskou službou a mnoho dalších.\n        "
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "p-6 text-button font-bold text-center text-3xl" },
        [_vm._v("Dodávám potraviny vysoké kvality.")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/common/container.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/common/container.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container_vue_vue_type_template_id_57b27928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container.vue?vue&type=template&id=57b27928& */ "./resources/js/components/common/container.vue?vue&type=template&id=57b27928&");
/* harmony import */ var _container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container.vue?vue&type=script&lang=ts& */ "./resources/js/components/common/container.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _container_vue_vue_type_template_id_57b27928___WEBPACK_IMPORTED_MODULE_0__["render"],
  _container_vue_vue_type_template_id_57b27928___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/container.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common/container.vue?vue&type=script&lang=ts&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/common/container.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader??ref--11!../../../../node_modules/vue-loader/lib??vue-loader-options!./container.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/container.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common/container.vue?vue&type=template&id=57b27928&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/common/container.vue?vue&type=template&id=57b27928& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_template_id_57b27928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./container.vue?vue&type=template&id=57b27928& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/container.vue?vue&type=template&id=57b27928&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_template_id_57b27928___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_template_id_57b27928___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/lib/Domu.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/lib/Domu.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Domu_vue_vue_type_template_id_660d1ba8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Domu.vue?vue&type=template&id=660d1ba8& */ "./resources/js/components/lib/Domu.vue?vue&type=template&id=660d1ba8&");
/* harmony import */ var _Domu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Domu.vue?vue&type=script&lang=ts& */ "./resources/js/components/lib/Domu.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Domu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Domu_vue_vue_type_template_id_660d1ba8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Domu_vue_vue_type_template_id_660d1ba8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/lib/Domu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/lib/Domu.vue?vue&type=script&lang=ts&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/lib/Domu.vue?vue&type=script&lang=ts& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_Domu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/ts-loader??ref--11!../../../../node_modules/vue-loader/lib??vue-loader-options!./Domu.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lib/Domu.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_11_node_modules_vue_loader_lib_index_js_vue_loader_options_Domu_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/lib/Domu.vue?vue&type=template&id=660d1ba8&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/lib/Domu.vue?vue&type=template&id=660d1ba8& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Domu_vue_vue_type_template_id_660d1ba8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Domu.vue?vue&type=template&id=660d1ba8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lib/Domu.vue?vue&type=template&id=660d1ba8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Domu_vue_vue_type_template_id_660d1ba8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Domu_vue_vue_type_template_id_660d1ba8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);