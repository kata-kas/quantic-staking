(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-react--react': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-react/dist/render_controller.js */ "./node_modules/@symfony/ux-react/dist/render_controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/admin/App.js":
/*!*****************************!*\
  !*** ./assets/admin/App.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @api-platform/admin */ "./node_modules/@api-platform/admin/lib/hydra/HydraAdmin.js");
/* harmony import */ var _authProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authProvider */ "./assets/admin/authProvider.js");
/* harmony import */ var _config_entrypoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/entrypoint */ "./assets/admin/config/entrypoint.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_3__["default"], {
    authProvider: _authProvider__WEBPACK_IMPORTED_MODULE_1__["default"],
    entrypoint: _config_entrypoint__WEBPACK_IMPORTED_MODULE_2__.ENTRYPOINT
  });
});

/***/ }),

/***/ "./assets/admin/Main.js":
/*!******************************!*\
  !*** ./assets/admin/Main.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./assets/admin/App.js");




if (document.getElementById("admin_app")) {
  var rootElement = document.getElementById("admin_app");
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootElement);
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}

/***/ }),

/***/ "./assets/admin/authProvider.js":
/*!**************************************!*\
  !*** ./assets/admin/authProvider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var _config_entrypoint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/entrypoint */ "./assets/admin/config/entrypoint.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  login: function login(_ref) {
    var username = _ref.username,
      password = _ref.password;
    var request = new Request("".concat(_config_entrypoint__WEBPACK_IMPORTED_MODULE_8__.ENTRYPOINT, "/login"), {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    return fetch(request).then(function (response) {
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).then(function (_ref2) {
      var token = _ref2.token;
      localStorage.setItem('token', token);
    });
  },
  logout: function logout() {
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  checkAuth: function checkAuth() {
    try {
      var _jwtDecode;
      if (!localStorage.getItem('token') || new Date().getTime() / 1000 > ( // @ts-ignore
      (_jwtDecode = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_7__["default"])(localStorage.getItem('token'))) === null || _jwtDecode === void 0 ? void 0 : _jwtDecode.exp)) {
        return Promise.reject();
      }
      return Promise.resolve();
    } catch (e) {
      // override possible jwtDecode error
      return Promise.reject();
    }
  },
  checkError: function checkError(err) {
    var _err$response;
    if ([401, 403].includes((err === null || err === void 0 ? void 0 : err.status) || (err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.status))) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getPermissions: function getPermissions() {
    return Promise.resolve();
  }
});

/***/ }),

/***/ "./assets/admin/config/entrypoint.js":
/*!*******************************************!*\
  !*** ./assets/admin/config/entrypoint.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENTRYPOINT": () => (/* binding */ ENTRYPOINT)
/* harmony export */ });
var ENTRYPOINT = "https://www.definitive.quantic-technologies.net/api";

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_dashboard_variables_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/dashboard/variables.scss */ "./assets/styles/dashboard/variables.scss");
/* harmony import */ var _styles_dashboard_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/dashboard/style.scss */ "./assets/styles/dashboard/style.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application

__webpack_require__(/*! ./dashboard/Main */ "./assets/dashboard/Main.js");
__webpack_require__(/*! ./admin/Main */ "./assets/admin/Main.js");

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/dashboard/Main.js":
/*!**********************************!*\
  !*** ./assets/dashboard/Main.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ "./assets/dashboard/pages/Home.js");
/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/NotFound */ "./assets/dashboard/pages/NotFound.js");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Login */ "./assets/dashboard/pages/Login.js");
/* harmony import */ var _pages_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Register */ "./assets/dashboard/pages/Register.js");
/* harmony import */ var _midllewares_AuthMiddleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./midllewares/AuthMiddleware */ "./assets/dashboard/midllewares/AuthMiddleware.js");
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context/auth/authContext */ "./assets/dashboard/context/auth/authContext.js");
/* harmony import */ var _context_registration_registrationContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context/registration/registrationContext */ "./assets/dashboard/context/registration/registrationContext.js");
/* harmony import */ var _pages_Congratulations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/Congratulations */ "./assets/dashboard/pages/Congratulations.js");
/* harmony import */ var _context_profile_profileContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./context/profile/profileContext */ "./assets/dashboard/context/profile/profileContext.js");
/* harmony import */ var _context_investments_investmentsContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./context/investments/investmentsContext */ "./assets/dashboard/context/investments/investmentsContext.js");














function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_7__.AuthProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_registration_registrationContext__WEBPACK_IMPORTED_MODULE_8__.RegistrationProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_profile_profileContext__WEBPACK_IMPORTED_MODULE_10__.ProfileProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_investments_investmentsContext__WEBPACK_IMPORTED_MODULE_11__.InvestmentsProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    exact: true,
    path: "/dashboard/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Login__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    exact: true,
    path: "/dashboard/register",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Register__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    exact: true,
    path: "/dashboard/congratulations",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Congratulations__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    exact: true,
    path: "/dashboard",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_midllewares_AuthMiddleware__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    path: "/dashboard",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, {
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_NotFound__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  })))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);
if (document.getElementById("dashboard_app")) {
  var rootElement = document.getElementById("dashboard_app");
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootElement);
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Main, null)));
}

/***/ }),

/***/ "./assets/dashboard/components/AuthLayout.js":
/*!***************************************************!*\
  !*** ./assets/dashboard/components/AuthLayout.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function AuthLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-primary"
  }, children);
}

/***/ }),

/***/ "./assets/dashboard/components/Header.js":
/*!***********************************************!*\
  !*** ./assets/dashboard/components/Header.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_profile_profileContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/profile/profileContext */ "./assets/dashboard/context/profile/profileContext.js");
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/auth/authContext */ "./assets/dashboard/context/auth/authContext.js");



function Header() {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_context_profile_profileContext__WEBPACK_IMPORTED_MODULE_1__["default"]),
    profile = _React$useContext.profile;
  var _React$useContext2 = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_2__["default"]),
    logout = _React$useContext2.logout;
  var handleLogout = function handleLogout() {
    return logout();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navbar navbar-expand-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "navbar-brand",
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fa-solid fa-bullseye fa-3x"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarTogglerDemo02",
    "aria-controls": "navbarTogglerDemo02",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarTogglerDemo02"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "navbar-nav mx-auto mb-2 mb-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "nav-link pe-5",
    "aria-current": "page",
    href: "#"
  }, "Dashboard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "nav-link pe-5",
    href: "#"
  }, "My Profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "nav-link",
    href: "#"
  }, "Support"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "log fw-semibold text-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fs-xs text-uppercase"
  }, "Logged in as"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "fs-sm text-uppercase mb-0 text-white"
  }, (profile === null || profile === void 0 ? void 0 : profile.firstName) || "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "",
    onClick: handleLogout,
    className: "btn dash-btn clear-btn ms-3"
  }, "Log out"))));
}

/***/ }),

/***/ "./assets/dashboard/components/Layout.js":
/*!***********************************************!*\
  !*** ./assets/dashboard/components/Layout.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dash-gradient"
  }, children);
}

/***/ }),

/***/ "./assets/dashboard/components/RegisterForm.js":
/*!*****************************************************!*\
  !*** ./assets/dashboard/components/RegisterForm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterForm": () => (/* binding */ RegisterForm)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _context_registration_registrationContext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../context/registration/registrationContext */ "./assets/dashboard/context/registration/registrationContext.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _RenderError__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./RenderError */ "./assets/dashboard/components/RenderError.js");
/* harmony import */ var _context_registration_registrationActions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../context/registration/registrationActions */ "./assets/dashboard/context/registration/registrationActions.js");
/* harmony import */ var _config_countries__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../config/countries */ "./assets/dashboard/config/countries.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }






















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








var RegisterFormSecondStep = function RegisterFormSecondStep() {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_22___default().useContext(_context_registration_registrationContext__WEBPACK_IMPORTED_MODULE_23__["default"]),
    redirectToLogin = _React$useContext.redirectToLogin,
    dispatch = _React$useContext.dispatch,
    activeStepIndex = _React$useContext.activeStepIndex,
    formData = _React$useContext.formData,
    registrate = _React$useContext.registrate;
  var ValidationSchema = yup__WEBPACK_IMPORTED_MODULE_25__.object().shape({
    firstName: yup__WEBPACK_IMPORTED_MODULE_25__.string().required("Required"),
    lastName: yup__WEBPACK_IMPORTED_MODULE_25__.string().required("Required"),
    email: yup__WEBPACK_IMPORTED_MODULE_25__.string().email("Email not valid").required("Required"),
    password: yup__WEBPACK_IMPORTED_MODULE_25__.string().required("Required").min(8, "Password must be 8 characters long").matches(/[0-9]/, "Password requires a number").matches(/[a-z]/, "Password requires a lowercase letter").matches(/[A-Z]/, "Password requires an uppercase letter").matches(/[^\w]/, "Password requires a symbol"),
    confpassword: yup__WEBPACK_IMPORTED_MODULE_25__.string().required("Required").oneOf([yup__WEBPACK_IMPORTED_MODULE_25__.ref("password"), null], 'Must match "password" field value'),
    addressLine: yup__WEBPACK_IMPORTED_MODULE_25__.string().required("Required"),
    addressPostcode: yup__WEBPACK_IMPORTED_MODULE_25__.string().required("Postcode is required"),
    acceptedTerms: yup__WEBPACK_IMPORTED_MODULE_25__.string().oneOf(["on"], "You must accept the terms and conditions."),
    addressCountry: yup__WEBPACK_IMPORTED_MODULE_25__.string().required("Country is required")
  });
  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_24__.useFormik)({
    initialValues: _objectSpread(_objectSpread({}, formData), {}, {
      addressLine: "",
      addressPostcode: "",
      addressCountry: "",
      file: "",
      acceptedTerms: "off"
    }),
    validationSchema: ValidationSchema,
    onSubmit: function onSubmit(values) {
      return registrate(values);
    }
  });
  console.log({
    formik: formik
  });
  var handleUploadFile = function handleUploadFile(e) {
    console.log({
      e: e
    });
    formik.setFieldValue("file", e.currentTarget.files[0]);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row my-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-lg-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-lg-6 col-sm-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("h1", null, "Create Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("p", {
    className: "py-4"
  }, "Before you can access all the investment opportunities, you need to create a Quantic Staking account."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row pb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-lg-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    role: "button",
    onClick: function onClick() {
      return setStep(1);
    },
    className: "step-icon hero-step center d-inline-flex me-3"
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
    className: "text-secondary d-inline"
  }, "Account Info")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-lg-6 col-lg-6 col-md-6 col-sm-6 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "step-icon hero-step center d-inline-flex me-3"
  }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
    className: "text-secondary"
  }, "KYC"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "main-box mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("h2", {
    className: "pb-3"
  }, "Account Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("p", {
    className: "pb-3"
  }, "Basic details to use when logging in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
    type: "text",
    id: "firstName",
    name: "firstName",
    className: "form-control form-box mb-3",
    placeholder: "Name ...",
    onChange: formik.handleChange,
    value: formik.values.firstName
  }), formik.touched.firstName && formik.errors.firstName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_RenderError__WEBPACK_IMPORTED_MODULE_26__["default"], {
    message: formik.errors.firstName
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
    type: "text",
    id: "lastName",
    name: "lastName",
    className: "form-control form-box mb-3",
    placeholder: "lastName ...",
    onChange: formik.handleChange,
    value: formik.values.lastName
  }), formik.touched.lastName && formik.errors.lastName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_RenderError__WEBPACK_IMPORTED_MODULE_26__["default"], {
    message: formik.errors.lastName
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    className: "form-control form-box mb-3",
    placeholder: "E-mail Address ...",
    onChange: formik.handleChange,
    value: formik.values.email
  }), formik.touched.email && formik.errors.email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_RenderError__WEBPACK_IMPORTED_MODULE_26__["default"], {
    message: formik.errors.email
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
    type: "password",
    id: "pass",
    name: "password",
    className: "form-control form-box mb-3",
    placeholder: "Password ...",
    onChange: formik.handleChange,
    value: formik.values.password
  }), formik.touched.password && formik.errors.password ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_RenderError__WEBPACK_IMPORTED_MODULE_26__["default"], {
    message: formik.errors.password
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
    type: "password",
    id: "confpass",
    name: "confpassword",
    className: "form-control form-box mb-5",
    placeholder: "Confirm Password ...",
    onChange: formik.handleChange,
    value: formik.values.confpassword
  }), formik.touched.confpassword && formik.errors.confpassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_RenderError__WEBPACK_IMPORTED_MODULE_26__["default"], {
    message: formik.errors.confpassword
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("h2", {
    className: "pb-3"
  }, "Know Your Customers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("p", {
    className: "pb-3"
  }, "Getting to know you more"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("form", {
    onSubmit: formik.handleSubmit,
    encType: "multipart/form-data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
    type: "address",
    id: "addressLine",
    name: "addressLine",
    className: "form-control form-box mb-3",
    placeholder: "Address ...",
    onChange: formik.handleChange,
    value: formik.values.addressLine
  }), formik.touched.addressLine && formik.errors.addressLine ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_RenderError__WEBPACK_IMPORTED_MODULE_26__["default"], {
    message: formik.errors.addressLine
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "input-group pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
    type: "text",
    id: "addressPostcode",
    name: "addressPostcode",
    className: "form-control form-box mb-3 me-3",
    placeholder: "Postcode ...",
    onChange: formik.handleChange,
    value: formik.values.addressPostcode
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("select", {
    id: "addressCountry",
    name: "addressCountry",
    className: "form-control form-box mb-3",
    value: formik.values.addressCountry,
    onChange: formik.handleChange
  }, _config_countries__WEBPACK_IMPORTED_MODULE_28__["default"] === null || _config_countries__WEBPACK_IMPORTED_MODULE_28__["default"] === void 0 ? void 0 : _config_countries__WEBPACK_IMPORTED_MODULE_28__["default"].map(function (countryName, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("option", {
      value: countryName,
      key: idx
    }, countryName);
  }))), formik.touched.addressPostcode && formik.errors.addressPostcode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_RenderError__WEBPACK_IMPORTED_MODULE_26__["default"], {
    message: formik.errors.addressPostcode
  }) : null, formik.touched.addressCountry && formik.errors.addressCountry ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_RenderError__WEBPACK_IMPORTED_MODULE_26__["default"], {
    message: formik.errors.addressCountry
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("h2", {
    className: "pb-2"
  }, "Passport Photo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("p", {
    className: "fs-xs pb-2"
  }, "Upload a recent photo of yourself, holding the passport in your hand where both your face and the passport is visible."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
    type: "file",
    name: "file",
    id: "file",
    accept: ".jpg,.jpeg,.png",
    className: "upload-btn",
    onChange: handleUploadFile
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("label", {
    htmlFor: "file",
    className: "w-50"
  }, "Browse Files"), formik.touched.file && formik.errors.file ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_RenderError__WEBPACK_IMPORTED_MODULE_26__["default"], {
    message: formik.errors.file
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "form-check pt-4 pb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("label", {
    className: "form-check-label ps-2 pt-1",
    htmlFor: "acceptedTerms"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: "acceptedTerms",
    id: "acceptedTerms",
    onChange: formik.handleChange
  }), "I accept the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("a", {
    href: ""
  }, "terms and conditions"))), formik.touched.acceptedTerms || formik.errors.acceptedTerms ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_RenderError__WEBPACK_IMPORTED_MODULE_26__["default"], {
    message: formik.errors.acceptedTerms
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
    type: "submit",
    id: "next",
    value: "Create Account",
    className: "hero-gradient hero-btn w-100 mt-3 me-2"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-lg-12 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("a", {
    onClick: redirectToLogin,
    href: ""
  }, "Back To Login")))));
};
function RegisterFormFirstStep() {
  var _React$useContext2 = react__WEBPACK_IMPORTED_MODULE_22___default().useContext(_context_registration_registrationContext__WEBPACK_IMPORTED_MODULE_23__["default"]),
    redirectToLogin = _React$useContext2.redirectToLogin,
    dispatch = _React$useContext2.dispatch,
    activeStepIndex = _React$useContext2.activeStepIndex,
    formData = _React$useContext2.formData;
  var ValidationSchema = yup__WEBPACK_IMPORTED_MODULE_25__.object().shape({
    firstName: yup__WEBPACK_IMPORTED_MODULE_25__.string().required("Required"),
    lastName: yup__WEBPACK_IMPORTED_MODULE_25__.string().required("Required"),
    email: yup__WEBPACK_IMPORTED_MODULE_25__.string().email("Email not valid").required("Required"),
    password: yup__WEBPACK_IMPORTED_MODULE_25__.string().required("Required").min(8, "Password must be 8 characters long").matches(/[0-9]/, "Password requires a number").matches(/[a-z]/, "Password requires a lowercase letter").matches(/[A-Z]/, "Password requires an uppercase letter").matches(/[^\w]/, "Password requires a symbol"),
    confpassword: yup__WEBPACK_IMPORTED_MODULE_25__.string().required("Required").oneOf([yup__WEBPACK_IMPORTED_MODULE_25__.ref("password"), null], 'Must match "password" field value')
  });
  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_24__.useFormik)({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confpassword: ""
    },
    validationSchema: ValidationSchema,
    onSubmit: function onSubmit(values) {
      var data = _objectSpread(_objectSpread({}, formData), values);
      dispatch((0,_context_registration_registrationActions__WEBPACK_IMPORTED_MODULE_27__.setFormData)(data));
      dispatch((0,_context_registration_registrationActions__WEBPACK_IMPORTED_MODULE_27__.setActiveStepIndex)(activeStepIndex + 1));
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row my-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-xl-4 col-lg-6 col-md-8 col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-lg-12 col-sm-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("h1", null, "Create Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("p", {
    className: "py-4"
  }, "Before you can access all the investment opportunities, you need to create a Quantic Staking account."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row pb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-lg-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "step-icon hero-step center d-inline-flex me-3"
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
    className: "text-secondary d-inline"
  }, "Account Info")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-lg-6 col-lg-6 col-md-6 col-sm-6 col-xs-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "step-icon next-step center d-inline-flex me-3"
  }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("span", {
    className: "info-purple"
  }, "KYC"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "main-box mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("h2", {
    className: "pb-3"
  }, "Account Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("p", {
    className: "pb-3"
  }, "All fields are mandatory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("form", {
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
    type: "text",
    id: "firstName",
    name: "firstName",
    className: "form-control form-box mb-3",
    placeholder: "Name ...",
    onChange: formik.handleChange,
    value: formik.values.firstName
  }), formik.touched.firstName && formik.errors.firstName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_RenderError__WEBPACK_IMPORTED_MODULE_26__["default"], {
    message: formik.errors.firstName
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
    type: "text",
    id: "lastName",
    name: "lastName",
    className: "form-control form-box mb-3",
    placeholder: "lastName ...",
    onChange: formik.handleChange,
    value: formik.values.lastName
  }), formik.touched.lastName && formik.errors.lastName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_RenderError__WEBPACK_IMPORTED_MODULE_26__["default"], {
    message: formik.errors.lastName
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    className: "form-control form-box mb-3",
    placeholder: "E-mail Address ...",
    onChange: formik.handleChange,
    value: formik.values.email
  }), formik.touched.email && formik.errors.email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_RenderError__WEBPACK_IMPORTED_MODULE_26__["default"], {
    message: formik.errors.email
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
    type: "password",
    id: "pass",
    name: "password",
    className: "form-control form-box mb-3",
    placeholder: "Password ...",
    onChange: formik.handleChange,
    value: formik.values.password
  }), formik.touched.password && formik.errors.password ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_RenderError__WEBPACK_IMPORTED_MODULE_26__["default"], {
    message: formik.errors.password
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
    type: "password",
    id: "confpass",
    name: "confpassword",
    className: "form-control form-box mb-5",
    placeholder: "Confirm Password ...",
    onChange: formik.handleChange,
    value: formik.values.confpassword
  }), formik.touched.confpassword && formik.errors.confpassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(_RenderError__WEBPACK_IMPORTED_MODULE_26__["default"], {
    message: formik.errors.confpassword
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("input", {
    type: "submit",
    id: "next",
    value: "Next",
    className: "hero-gradient hero-btn w-100 mt-3"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("div", {
    className: "col-lg-12 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement("a", {
    onClick: redirectToLogin,
    href: ""
  }, "Back To Login")))));
}
function RegisterForm() {
  var _React$useContext3 = react__WEBPACK_IMPORTED_MODULE_22___default().useContext(_context_registration_registrationContext__WEBPACK_IMPORTED_MODULE_23__["default"]),
    activeStepIndex = _React$useContext3.activeStepIndex;
  switch (activeStepIndex) {
    case 1:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(RegisterFormFirstStep, null);
      break;
    case 2:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22___default().createElement(RegisterFormSecondStep, null);
      break;
    default:
      break;
  }
}

/***/ }),

/***/ "./assets/dashboard/components/RenderError.js":
/*!****************************************************!*\
  !*** ./assets/dashboard/components/RenderError.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var RenderError = function RenderError(_ref) {
  var message = _ref.message;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "alert alert-danger",
    role: "alert"
  }, message);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderError);

/***/ }),

/***/ "./assets/dashboard/config/countries.js":
/*!**********************************************!*\
  !*** ./assets/dashboard/config/countries.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var countryList = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas (the)", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia (Plurinational State of)", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory (the)", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands (the)", "Central African Republic (the)", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands (the)", "Colombia", "Comoros (the)", "Congo (the Democratic Republic of the)", "Congo (the)", "Cook Islands (the)", "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czechia", "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic (the)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands (the) [Malvinas]", "Faroe Islands (the)", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories (the)", "Gabon", "Gambia (the)", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (the)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (the Democratic People's Republic of)", "Korea (the Republic of)", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic (the)", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands (the)", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia (Federated States of)", "Moldova (the Republic of)", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands (the)", "New Caledonia", "New Zealand", "Nicaragua", "Niger (the)", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands (the)", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines (the)", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of North Macedonia", "Romania", "Russian Federation (the)", "Rwanda", "Réunion", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan (the)", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands (the)", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (the)", "United Kingdom of Great Britain and Northern Ireland (the)", "United States Minor Outlying Islands (the)", "United States of America (the)", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic of)", "Viet Nam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe", "Åland Islands"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countryList);

/***/ }),

/***/ "./assets/dashboard/config/endpoints.js":
/*!**********************************************!*\
  !*** ./assets/dashboard/config/endpoints.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_ENTRYPOINT": () => (/* binding */ API_ENTRYPOINT),
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "CUSTOMER_DETAILS_ENTRYPOINT": () => (/* binding */ CUSTOMER_DETAILS_ENTRYPOINT),
/* harmony export */   "LOGIN_ENTRYPOINT": () => (/* binding */ LOGIN_ENTRYPOINT),
/* harmony export */   "REQUEST_ENTRYPOINT": () => (/* binding */ REQUEST_ENTRYPOINT),
/* harmony export */   "STAKING_PLAN_ENTRYPOINT": () => (/* binding */ STAKING_PLAN_ENTRYPOINT),
/* harmony export */   "USER_ENTRYPOINT": () => (/* binding */ USER_ENTRYPOINT)
/* harmony export */ });
var API_URL = "http://localhost:8000";
var API_ENTRYPOINT = "".concat(API_URL, "/api");
var LOGIN_ENTRYPOINT = "".concat(API_ENTRYPOINT, "/login");
var USER_ENTRYPOINT = "".concat(API_ENTRYPOINT, "/users");
var REQUEST_ENTRYPOINT = "".concat(API_ENTRYPOINT, "/requests");
var CUSTOMER_DETAILS_ENTRYPOINT = "".concat(API_ENTRYPOINT, "/customer_details");
var STAKING_PLAN_ENTRYPOINT = "".concat(API_ENTRYPOINT, "/staking_plans");

/***/ }),

/***/ "./assets/dashboard/config/localStorage.js":
/*!*************************************************!*\
  !*** ./assets/dashboard/config/localStorage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTH_TAG": () => (/* binding */ AUTH_TAG),
/* harmony export */   "USER_TAG": () => (/* binding */ USER_TAG)
/* harmony export */ });
var AUTH_TAG = "quantic_staking_auth";
var USER_TAG = "quantic_staking_user";

/***/ }),

/***/ "./assets/dashboard/context/auth/authContext.js":
/*!******************************************************!*\
  !*** ./assets/dashboard/context/auth/authContext.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthProvider": () => (/* binding */ AuthProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./authReducer */ "./assets/dashboard/context/auth/authReducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _config_endpoints__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../config/endpoints */ "./assets/dashboard/config/endpoints.js");
/* harmony import */ var _config_localStorage__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../config/localStorage */ "./assets/dashboard/config/localStorage.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }






























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_30__.createContext)();
var AuthProvider = function AuthProvider(_ref) {
  var children = _ref.children;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_34__.useNavigate)();
  var initialState = {
    user: {},
    loading: true,
    error: '',
    emailSuccess: '',
    emailError: ''
  };
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_30__.useReducer)(_authReducer__WEBPACK_IMPORTED_MODULE_31__["default"], initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var login = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(username, password) {
      var response, _err$response, _err$response$data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_35__["default"].post(_config_endpoints__WEBPACK_IMPORTED_MODULE_32__.LOGIN_ENTRYPOINT, {
              username: username,
              password: password
            }).then(function (data) {
              return data === null || data === void 0 ? void 0 : data.data;
            });
          case 3:
            response = _context.sent;
            localStorage.removeItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_33__.AUTH_TAG);
            localStorage.setItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_33__.AUTH_TAG, response.token);
            localStorage.setItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_33__.USER_TAG, JSON.stringify(response.user));
            dispatch({
              type: 'LOGIN_SUCCESS',
              payload: response.user
            });
            navigate('/dashboard');
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: 'LOGIN_ERROR',
              payload: (_err$response = _context.t0.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.error
            });
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    }));
    return function login(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  var logout = function logout() {
    dispatch({
      type: 'LOGOUT'
    });
    localStorage.removeItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_33__.USER_TAG);
    localStorage.removeItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_33__.AUTH_TAG);
    navigate('/dashboard/login');
  };
  var resetPassword = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(email) {
      var config, body;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            config = {
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(localStorage.getItem('token'))
              }
            };
            body = JSON.stringify({
              email: email
            });
            _context2.prev = 2;
            _context2.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_35__["default"].post('/user/password/reset', body, config);
          case 5:
            dispatch({
              type: 'SEND_EMAIL_SUCCESS',
              payload: 'Check your email to get your new password.'
            });
            setTimeout(function () {
              dispatch({
                type: 'SEND_EMAIL_REMOVE_MESSAGE'
              });
            }, 5000);
            _context2.next = 12;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            dispatch({
              type: 'SEND_EMAIL_FAIL',
              payload: 'There was a problem with sending the email, please try again.'
            });
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[2, 9]]);
    }));
    return function resetPassword(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(AuthContext.Provider, {
    value: {
      user: state.user,
      loading: state.loading,
      error: state.error,
      emailSuccess: state.emailSuccess,
      emailError: state.emailError,
      login: login,
      logout: logout,
      resetPassword: resetPassword
    }
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);

/***/ }),

/***/ "./assets/dashboard/context/auth/authReducer.js":
/*!******************************************************!*\
  !*** ./assets/dashboard/context/auth/authReducer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__);





















function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    user: {},
    loading: true,
    error: '',
    emailSuccess: '',
    emailError: ''
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case 'SEND_EMAIL_SUCCESS':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          emailSuccess: action.payload
        });
      }
    case 'SEND_EMAIL_FAIL':
      return _objectSpread(_objectSpread({}, state), {}, {
        emailError: action.payload
      });
    case 'SEND_EMAIL_REMOVE_MESSAGE':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          emailSuccess: ''
        });
      }
    case 'LOGIN_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        user: action.payload,
        error: ''
      });
    case 'LOGIN_ERROR':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload
      });
    case 'LOGOUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        user: {},
        error: ''
      });
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authReducer);

/***/ }),

/***/ "./assets/dashboard/context/investments/investmentsContext.js":
/*!********************************************************************!*\
  !*** ./assets/dashboard/context/investments/investmentsContext.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvestmentsProvider": () => (/* binding */ InvestmentsProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _investmentsReducer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./investmentsReducer */ "./assets/dashboard/context/investments/investmentsReducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _config_endpoints__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../config/endpoints */ "./assets/dashboard/config/endpoints.js");
/* harmony import */ var _profile_profileContext__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../profile/profileContext */ "./assets/dashboard/context/profile/profileContext.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }





























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var InvestmentsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_29__.createContext)();
var InvestmentsProvider = function InvestmentsProvider(_ref) {
  var children = _ref.children;
  var initialState = {
    userInvestments: [],
    investmentOpportunities: []
  };
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_29__.useReducer)(_investmentsReducer__WEBPACK_IMPORTED_MODULE_30__["default"], initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_29___default().useContext(_profile_profileContext__WEBPACK_IMPORTED_MODULE_32__["default"]),
    profile = _React$useContext.profile;
  var getRequestsByUserId = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var requests;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_config_endpoints__WEBPACK_IMPORTED_MODULE_31__.REQUEST_ENTRYPOINT, "?user=").concat(profile["@id"])).then(function (response) {
              return response.data;
            })["catch"](function (e) {
              return console.log("[GET_REQUESTS] ".concat(e.message));
            });
          case 2:
            requests = _context.sent;
            if (requests["hydra:member"].length) dispatch({
              type: "SET_USER_INVESTMENTS",
              payload: requests["hydra:member"]
            });
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getRequestsByUserId() {
      return _ref2.apply(this, arguments);
    };
  }();
  var getStakingPlans = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var requests;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_33__["default"].get(_config_endpoints__WEBPACK_IMPORTED_MODULE_31__.STAKING_PLAN_ENTRYPOINT).then(function (response) {
              return response.data;
            })["catch"](function (e) {
              return console.log("[GET_STAKING_PLANS] ".concat(e.message));
            });
          case 2:
            requests = _context2.sent;
            if (requests["hydra:member"].length) dispatch({
              type: "SET_INVESTMENT_OPPORTUNITIES",
              payload: requests["hydra:member"]
            });
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getStakingPlans() {
      return _ref3.apply(this, arguments);
    };
  }();
  react__WEBPACK_IMPORTED_MODULE_29___default().useEffect(function () {
    if (!profile) return;
    getRequestsByUserId();
    getStakingPlans();
    console.log({
      state: state
    });
  }, [profile]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(InvestmentsContext.Provider, {
    value: {
      userInvestments: state.userInvestments,
      investmentOpportunities: state.investmentOpportunities
    }
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvestmentsContext);

/***/ }),

/***/ "./assets/dashboard/context/investments/investmentsReducer.js":
/*!********************************************************************!*\
  !*** ./assets/dashboard/context/investments/investmentsReducer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__);





















function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var profileReducer = function profileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    userInvestments: [],
    investmentOpportunities: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case 'SET_USER_INVESTMENTS':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          userInvestments: action.payload
        });
      }
    case 'SET_INVESTMENT_OPPORTUNITIES':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          investmentOpportunities: action.payload
        });
      }
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profileReducer);

/***/ }),

/***/ "./assets/dashboard/context/profile/profileContext.js":
/*!************************************************************!*\
  !*** ./assets/dashboard/context/profile/profileContext.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileProvider": () => (/* binding */ ProfileProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _profileReducer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./profileReducer */ "./assets/dashboard/context/profile/profileReducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _config_localStorage__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../config/localStorage */ "./assets/dashboard/config/localStorage.js");
/* harmony import */ var _config_endpoints__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../config/endpoints */ "./assets/dashboard/config/endpoints.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }





























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ProfileContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_29__.createContext)();
var ProfileProvider = function ProfileProvider(_ref) {
  var children = _ref.children;
  var initialState = {
    profile: null
  };
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_29__.useReducer)(_profileReducer__WEBPACK_IMPORTED_MODULE_30__["default"], initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var getUserByEmail = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var email, users;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            email = JSON.parse(localStorage.getItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_31__.USER_TAG));
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_config_endpoints__WEBPACK_IMPORTED_MODULE_32__.USER_ENTRYPOINT, "?page=1&email=").concat(email)).then(function (response) {
              return response.data;
            })["catch"](function (e) {
              return console.log("[GET_USER] ".concat(e.message));
            });
          case 3:
            users = _context.sent;
            if (users['hydra:member'].length) dispatch({
              type: 'SET_PROFILE',
              payload: users['hydra:member'][0]
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getUserByEmail() {
      return _ref2.apply(this, arguments);
    };
  }();
  react__WEBPACK_IMPORTED_MODULE_29___default().useEffect(function () {
    getUserByEmail();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(ProfileContext.Provider, {
    value: {
      profile: state.profile
    }
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileContext);

/***/ }),

/***/ "./assets/dashboard/context/profile/profileReducer.js":
/*!************************************************************!*\
  !*** ./assets/dashboard/context/profile/profileReducer.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__);





















function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var profileReducer = function profileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    profile: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case 'SET_PROFILE':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          profile: action.payload
        });
      }
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profileReducer);

/***/ }),

/***/ "./assets/dashboard/context/registration/registrationActionTypes.js":
/*!**************************************************************************!*\
  !*** ./assets/dashboard/context/registration/registrationActionTypes.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REGISTRATION_ERROR": () => (/* binding */ REGISTRATION_ERROR),
/* harmony export */   "REGISTRATION_SUCCESS": () => (/* binding */ REGISTRATION_SUCCESS),
/* harmony export */   "SET_ACTIVE_STEP": () => (/* binding */ SET_ACTIVE_STEP),
/* harmony export */   "SET_FORM_DATA": () => (/* binding */ SET_FORM_DATA)
/* harmony export */ });
var SET_ACTIVE_STEP = "SET_ACTIVE_STEP";
var SET_FORM_DATA = "SET_FORM_DATA";
var REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
var REGISTRATION_ERROR = "REGISTRATION_ERROR";

/***/ }),

/***/ "./assets/dashboard/context/registration/registrationActions.js":
/*!**********************************************************************!*\
  !*** ./assets/dashboard/context/registration/registrationActions.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setActiveStepIndex": () => (/* binding */ setActiveStepIndex),
/* harmony export */   "setFormData": () => (/* binding */ setFormData),
/* harmony export */   "setRegistrationError": () => (/* binding */ setRegistrationError),
/* harmony export */   "setRegistrationSuccess": () => (/* binding */ setRegistrationSuccess)
/* harmony export */ });
/* harmony import */ var _registrationActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registrationActionTypes */ "./assets/dashboard/context/registration/registrationActionTypes.js");

var setActiveStepIndex = function setActiveStepIndex(payload) {
  return {
    type: _registrationActionTypes__WEBPACK_IMPORTED_MODULE_0__.SET_ACTIVE_STEP,
    payload: payload
  };
};
var setFormData = function setFormData(payload) {
  return {
    type: _registrationActionTypes__WEBPACK_IMPORTED_MODULE_0__.SET_FORM_DATA,
    payload: payload
  };
};
var setRegistrationSuccess = function setRegistrationSuccess() {
  return {
    type: _registrationActionTypes__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_SUCCESS
  };
};
var setRegistrationError = function setRegistrationError(payload) {
  return {
    type: _registrationActionTypes__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_ERROR,
    payload: payload
  };
};

/***/ }),

/***/ "./assets/dashboard/context/registration/registrationContext.js":
/*!**********************************************************************!*\
  !*** ./assets/dashboard/context/registration/registrationContext.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationProvider": () => (/* binding */ RegistrationProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _registrationReducer__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./registrationReducer */ "./assets/dashboard/context/registration/registrationReducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _config_endpoints__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../config/endpoints */ "./assets/dashboard/config/endpoints.js");
/* harmony import */ var _registrationActions__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./registrationActions */ "./assets/dashboard/context/registration/registrationActions.js");
/* harmony import */ var _config_localStorage__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../config/localStorage */ "./assets/dashboard/config/localStorage.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








































function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var RegistrationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_40__.createContext)();
var RegistrationProvider = function RegistrationProvider(_ref) {
  var children = _ref.children;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_45__.useNavigate)();
  var redirectToLogin = function redirectToLogin() {
    return navigate("/dashboard/login");
  };
  var initialState = {
    activeStepIndex: 1,
    formData: {},
    error: "",
    loading: false
  };
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_40__.useReducer)(_registrationReducer__WEBPACK_IMPORTED_MODULE_41__["default"], initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var registrate = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      var timeElapsed, today, responseUser, loginResponse, _err$response, _err$response$data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            timeElapsed = Date.now();
            today = new Date(timeElapsed);
            _context.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_46__["default"].post(_config_endpoints__WEBPACK_IMPORTED_MODULE_42__.USER_ENTRYPOINT, {
              email: data.email,
              roles: ["ROLE_USER"],
              password: data.password,
              firstName: data.firstName,
              lastName: data.lastName,
              dateCreated: today.toISOString()
            }).then(function (data) {
              return data === null || data === void 0 ? void 0 : data.data;
            });
          case 5:
            responseUser = _context.sent;
            _context.next = 8;
            return axios__WEBPACK_IMPORTED_MODULE_46__["default"].post(_config_endpoints__WEBPACK_IMPORTED_MODULE_42__.CUSTOMER_DETAILS_ENTRYPOINT, _objectSpread(_objectSpread({}, data), {}, {
              status: "Pending",
              user: responseUser["@id"]
            }), {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }).then(function (data) {
              return data === null || data === void 0 ? void 0 : data.data;
            }).then(function (user) {
              return console.log({
                user: user
              });
            });
          case 8:
            _context.next = 10;
            return axios__WEBPACK_IMPORTED_MODULE_46__["default"].post(_config_endpoints__WEBPACK_IMPORTED_MODULE_42__.LOGIN_ENTRYPOINT, {
              username: data.email,
              password: data.password
            }).then(function (data) {
              return data === null || data === void 0 ? void 0 : data.data;
            });
          case 10:
            loginResponse = _context.sent;
            localStorage.removeItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_44__.AUTH_TAG);
            localStorage.setItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_44__.AUTH_TAG, loginResponse.token);
            localStorage.setItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_44__.USER_TAG, JSON.stringify(loginResponse.user));
            dispatch((0,_registrationActions__WEBPACK_IMPORTED_MODULE_43__.setRegistrationSuccess)());
            navigate('/dashboard/congratulations');
            _context.next = 22;
            break;
          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](0);
            console.log({
              err: _context.t0
            });
            dispatch((0,_registrationActions__WEBPACK_IMPORTED_MODULE_43__.setRegistrationError)((_err$response = _context.t0.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.detail));
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 18]]);
    }));
    return function registrate(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(RegistrationContext.Provider, {
    value: {
      activeStepIndex: state.activeStepIndex,
      formData: state.formData,
      redirectToLogin: redirectToLogin,
      dispatch: dispatch,
      registrate: registrate
    }
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistrationContext);

/***/ }),

/***/ "./assets/dashboard/context/registration/registrationReducer.js":
/*!**********************************************************************!*\
  !*** ./assets/dashboard/context/registration/registrationReducer.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _registrationActionTypes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./registrationActionTypes */ "./assets/dashboard/context/registration/registrationActionTypes.js");





















function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var registrationReducer = function registrationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    formData: {},
    activeStepIndex: 1
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _registrationActionTypes__WEBPACK_IMPORTED_MODULE_21__.SET_ACTIVE_STEP:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          activeStepIndex: action.payload
        });
      }
      break;
    case _registrationActionTypes__WEBPACK_IMPORTED_MODULE_21__.SET_FORM_DATA:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          formData: action.payload
        });
      }
      break;
    case _registrationActionTypes__WEBPACK_IMPORTED_MODULE_21__.REGISTRATION_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false
        });
      }
      break;
    case _registrationActionTypes__WEBPACK_IMPORTED_MODULE_21__.REGISTRATION_ERROR:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: action.payload
        });
      }
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registrationReducer);

/***/ }),

/***/ "./assets/dashboard/midllewares/AuthMiddleware.js":
/*!********************************************************!*\
  !*** ./assets/dashboard/midllewares/AuthMiddleware.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _config_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/localStorage */ "./assets/dashboard/config/localStorage.js");



var Authmiddleware = function Authmiddleware() {
  var token = localStorage.getItem(_config_localStorage__WEBPACK_IMPORTED_MODULE_1__.AUTH_TAG);
  return token ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Outlet, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Navigate, {
    to: "/dashboard/login"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Authmiddleware);

/***/ }),

/***/ "./assets/dashboard/pages/Congratulations.js":
/*!***************************************************!*\
  !*** ./assets/dashboard/pages/Congratulations.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Congratulations)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");


function Congratulations() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var navigateToHomePage = function navigateToHomePage() {
    return navigate("/dashboard/");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    "class": "h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "container h-100 d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "col-lg-6 offset-lg-3 p-5 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/img/check-mark.png",
    alt: "",
    "class": "mb-4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    "class": "mb-4"
  }, "Congratulations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "class": "pb-5"
  }, "Your account creation request has been submitted and a member of our compliance team will review your application shortly and make a decision."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    onClick: navigateToHomePage,
    href: "",
    "class": "btn hero-gradient hero-btn w-100 mb-4"
  }, "Back To Homepage")))));
}

/***/ }),

/***/ "./assets/dashboard/pages/Home.js":
/*!****************************************!*\
  !*** ./assets/dashboard/pages/Home.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./assets/dashboard/components/Layout.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./assets/dashboard/components/Header.js");
/* harmony import */ var _context_investments_investmentsContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/investments/investmentsContext */ "./assets/dashboard/context/investments/investmentsContext.js");
/* harmony import */ var _config_endpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/endpoints */ "./assets/dashboard/config/endpoints.js");








function Home() {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_3___default().useContext(_context_investments_investmentsContext__WEBPACK_IMPORTED_MODULE_6__["default"]),
    userInvestments = _React$useContext.userInvestments,
    investmentOpportunities = _React$useContext.investmentOpportunities;
  console.log({
    investmentOpportunities: investmentOpportunities
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "accordion mb-4",
    id: "accordionPanelsStayOpenExample"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", {
    className: "accordion-header text-white",
    id: "panelsStayOpen-headingOne"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    className: "accordion-button p-0 mb-3",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#panelsStayOpen-collapseOne",
    "aria-expanded": "true",
    "aria-controls": "panelsStayOpen-collapseOne"
  }, "My Investments (", userInvestments === null || userInvestments === void 0 ? void 0 : userInvestments.length, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    id: "panelsStayOpen-collapseOne",
    className: "accordion-collapse collapse show",
    "aria-labelledby": "panelsStayOpen-headingOne"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "accordion-body p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("table", {
    className: "table table-borderless pb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("thead", {
    className: "table-row fs-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
    scope: "col"
  }, "Icon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
    scope: "col"
  }, "Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
    scope: "col"
  }, "Coin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
    scope: "col"
  }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
    scope: "col"
  }, "APR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
    scope: "col"
  }, "LOCK TIME"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
    scope: "col"
  }, "INVESTMENT DATE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
    scope: "col"
  }, "VEST DATE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
    scope: "col"
  }, "ROI TO DATE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
    scope: "col"
  }, "STATUS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
    scope: "col"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tbody", {
    className: "table-row"
  }, userInvestments !== null && userInvestments !== void 0 && userInvestments.length ? userInvestments.map(function (userInvestment, idx) {
    var _userInvestment$staki, _userInvestment$staki2, _userInvestment$staki3, _userInvestment$staki4, _userInvestment$staki5, _userInvestment$staki6, _userInvestment$staki7, _userInvestment$staki8;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", {
      key: idx
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      scope: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", {
      src: "".concat(_config_endpoints__WEBPACK_IMPORTED_MODULE_7__.API_URL, "/media/").concat(userInvestment === null || userInvestment === void 0 ? void 0 : (_userInvestment$staki = userInvestment.stakingPlan) === null || _userInvestment$staki === void 0 ? void 0 : (_userInvestment$staki2 = _userInvestment$staki.currency) === null || _userInvestment$staki2 === void 0 ? void 0 : _userInvestment$staki2.imagePath),
      alt: ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", null, userInvestment === null || userInvestment === void 0 ? void 0 : (_userInvestment$staki3 = userInvestment.stakingPlan) === null || _userInvestment$staki3 === void 0 ? void 0 : (_userInvestment$staki4 = _userInvestment$staki3.currency) === null || _userInvestment$staki4 === void 0 ? void 0 : _userInvestment$staki4.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", null, userInvestment === null || userInvestment === void 0 ? void 0 : (_userInvestment$staki5 = userInvestment.stakingPlan) === null || _userInvestment$staki5 === void 0 ? void 0 : (_userInvestment$staki6 = _userInvestment$staki5.currency) === null || _userInvestment$staki6 === void 0 ? void 0 : _userInvestment$staki6.token), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", null, userInvestment === null || userInvestment === void 0 ? void 0 : userInvestment.amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", null, "10%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", null, "30 days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", null, "12/11/2023"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", null, "12/11/2023"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", null, ((userInvestment === null || userInvestment === void 0 ? void 0 : userInvestment.amount) || 0) / 100, " \xA0", " ", userInvestment === null || userInvestment === void 0 ? void 0 : (_userInvestment$staki7 = userInvestment.stakingPlan) === null || _userInvestment$staki7 === void 0 ? void 0 : (_userInvestment$staki8 = _userInvestment$staki7.currency) === null || _userInvestment$staki8 === void 0 ? void 0 : _userInvestment$staki8.token), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      className: "dash-btn-w"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      href: "",
      className: "dash-btn dash-btn-sm btn-sm-yellow center ms-0"
    }, userInvestment === null || userInvestment === void 0 ? void 0 : userInvestment.status)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      className: "dash-btn-w"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: "dropdown show"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
      className: "btn dash-btn clear-btn mx-3 dropdown-toggle",
      href: "#",
      role: "button",
      id: "dropdownMenuLink",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }, "Actions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: "dropdown-menu",
      "aria-labelledby": "dropdownMenuLink"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
      className: "dropdown-item",
      href: "#"
    }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
      className: "dropdown-item",
      href: "#"
    }, "Another action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
      className: "dropdown-item",
      href: "#"
    }, "Something else here")))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "row pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", {
    className: "text-white"
  }, "Investment Opportunities (", investmentOpportunities === null || investmentOpportunities === void 0 ? void 0 : investmentOpportunities.length, ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("table", {
    className: "table table-borderless"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("thead", {
    className: "table-row fs-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
    scope: "col"
  }, "Icon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
    scope: "col"
  }, "Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
    scope: "col"
  }, "Coin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
    scope: "col"
  }, "APR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
    scope: "col"
  }, "LOCK TIME"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
    scope: "col"
  }, "STATUS"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tbody", {
    className: "table-row"
  }, investmentOpportunities !== null && investmentOpportunities !== void 0 && investmentOpportunities.length ? investmentOpportunities.map(function (opportunity, idx) {
    var _opportunity$currency, _opportunity$currency2, _opportunity$currency3;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", {
      key: idx
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("th", {
      scope: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", {
      src: "".concat(_config_endpoints__WEBPACK_IMPORTED_MODULE_7__.API_URL, "/media/").concat(opportunity === null || opportunity === void 0 ? void 0 : (_opportunity$currency = opportunity.currency) === null || _opportunity$currency === void 0 ? void 0 : _opportunity$currency.imagePath),
      alt: ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", null, opportunity === null || opportunity === void 0 ? void 0 : (_opportunity$currency2 = opportunity.currency) === null || _opportunity$currency2 === void 0 ? void 0 : _opportunity$currency2.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", null, opportunity === null || opportunity === void 0 ? void 0 : (_opportunity$currency3 = opportunity.currency) === null || _opportunity$currency3 === void 0 ? void 0 : _opportunity$currency3.token), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", null, opportunity === null || opportunity === void 0 ? void 0 : opportunity.durations[0].apr, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", null, opportunity === null || opportunity === void 0 ? void 0 : opportunity.durations[0].duration, " days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("td", {
      className: "dash-btn-w"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
      href: "",
      className: "btn dash-btn green-gradient center mx-3 ms-0"
    }, "Enter")));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("tr", null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "section pt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    type: "button",
    className: "btn btn-primary",
    "data-bs-toggle": "modal",
    "data-bs-target": "#staticBackdrop"
  }, "Modal 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    type: "button",
    className: "btn btn-primary",
    "data-bs-toggle": "modal",
    "data-bs-target": "#staticBackdrop2"
  }, "Modal 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    type: "button",
    className: "btn btn-primary",
    "data-bs-toggle": "modal",
    "data-bs-target": "#staticBackdrop3"
  }, "Modal 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "modal modalfade",
    id: "staticBackdrop",
    "data-bs-backdrop": "static",
    "data-bs-keyboard": "false",
    tabIndex: "-1",
    "aria-labelledby": "staticBackdropLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "modal-dialog modal-dialog-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    type: "button",
    className: "text-white ms-3 mb-3",
    "data-bs-dismiss": "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("i", {
    className: "fa-solid fa-circle-arrow-left fa-xl"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "main-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "col-lg-12 text-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", {
    className: "pb-4"
  }, "Staking Panel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "pb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", {
    src: "/build/images/multiversx.png",
    alt: "",
    className: "w-40 me-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "fs-md"
  }, "MultiversX (EGLD)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h3", {
    className: "pb-4"
  }, "Select Strategy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    href: "",
    className: "btn form-box modal-btn w-100 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "col-lg-6 text-start fs-md"
  }, "30 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "fs-xs"
  }, "days")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "col-lg-6 text-end fs-md"
  }, "1.5% ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "fs-xs"
  }, "APR")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    href: "",
    className: "btn form-box modal-btn w-100 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "col-lg-6 text-start fs-md"
  }, "60 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "fs-xs"
  }, "days")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "col-lg-6 text-end fs-md"
  }, "4.5% ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "fs-xs"
  }, "APR")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    href: "",
    className: "btn form-box modal-btn w-100 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "col-lg-6 text-start fs-md"
  }, "80 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "fs-xs"
  }, "days")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "col-lg-6 text-end fs-md"
  }, "6.5% ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "fs-xs"
  }, "APR")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    href: "",
    className: "btn form-box modal-btn w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "col-lg-6 text-start fs-md"
  }, "120 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "fs-xs"
  }, "days")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "col-lg-6 text-end fs-md"
  }, "10.5% ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "fs-xs"
  }, "APR")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h3", {
    className: "pt-5 pb-4"
  }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "input-group form-box p-3 w-50 mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("input", {
    type: "text",
    className: "form-control text-white fs-md",
    placeholder: "...",
    "aria-label": "...",
    "aria-describedby": "basic-addon2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "text-end fs-xs center-right",
    id: "basic-addon2"
  }, "EGLD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h3", {
    className: "mb-5"
  }, "In ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "text-tertiary"
  }, "60 days,"), " ", "you will earn", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "text-tertiary"
  }, "0.22 EGLD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    href: "",
    className: "btn hero-gradient hero-btn w-100"
  }, "Finalise Deposit"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "modal modalfade",
    id: "staticBackdrop2",
    "data-bs-backdrop": "static",
    "data-bs-keyboard": "false",
    tabIndex: "-1",
    "aria-labelledby": "staticBackdropLabel2",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "modal-dialog modal-dialog-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    type: "button",
    className: "text-white ms-3 mb-3",
    "data-bs-dismiss": "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("i", {
    className: "fa-solid fa-circle-arrow-left fa-xl"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "main-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "col-lg-12 text-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h2", {
    className: "pb-4"
  }, "Staking Panel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "pb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", {
    src: "/build/images/multiversx.png",
    alt: "",
    className: "w-40 me-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "fs-md"
  }, "MultiversX (EGLD)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h3", {
    className: "mb-3"
  }, "Strategy:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "text-tertiary"
  }, "60 days"), " at", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "text-tertiary"
  }, "4.5% APR")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h3", {
    className: "pb-4"
  }, "Amount:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "text-tertiary"
  }, "30 EGLD")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "model-info-box mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
    className: "fs-sm"
  }, "To start earning rewards, please the 30 EGLD in the wallet provide below. Please pay attention as transfers on the wrong networks or wallets cannot be reimbursed."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "dropdown mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    className: "btn btn-secondary dropdown-toggle w-100 modal-dropdown-btn text-start",
    type: "button",
    id: "dropdownMenuButton2",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
  }, "Choose Network"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("ul", {
    className: "dropdown-menu w-100",
    "aria-labelledby": "dropdownMenuButton2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Elrond Network (Erc20)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Another network")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Another network")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
    className: "fs-sm"
  }, "Send", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "text-tertiary"
  }, "30 EGLD"), " ", "to the following wallet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "link-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
    id: "sample",
    className: "text-white"
  }, "Erd198Tsmsksqe2Esnx74Xchglwxwck8Vaztmlfakr93Jsfhmdw6C22Sx7Ga97"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", {
    className: "d-flex justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    href: "#"
    // onClick="CopyToClipboard('sample');return false;"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("i", {
    className: "fa-regular fa-copy fa-2x"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    href: "",
    className: "btn hero-gradient hero-btn w-100"
  }, "Mark As Paid"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "modal modalfade",
    id: "staticBackdrop3",
    "data-bs-backdrop": "static",
    "data-bs-keyboard": "false",
    tabIndex: "-1",
    "aria-labelledby": "staticBackdropLabel2",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "modal-dialog modal-dialog-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    type: "button",
    className: "text-white ms-3 mb-3",
    "data-bs-dismiss": "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("i", {
    className: "fa-solid fa-circle-arrow-left fa-xl"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "main-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "col-lg-12 text-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", {
    src: "/build/images/check-mark.png",
    alt: "",
    className: "mb-5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h1", {
    className: "mb-5"
  }, "Congratulations!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
    className: "pb-3 fs-md"
  }, "Thank you for contributing to this staking pool. A team member has already been notified of your deposit and once the funds have arrived, we will enable your investment."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
    className: "pb-3 fs-md"
  }, "To speed up the process, please provide the hash tx in the field below (optional)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "link-box mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("textarea", {
    placeholder: "Hash tx here ...",
    name: "hashtx",
    id: "hashtx",
    cols: "40",
    rows: "3",
    className: "form-control text-white fs-md"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    href: "",
    className: "btn hero-gradient hero-btn w-100 mb-4"
  }, "Save Hash"))))))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./assets/dashboard/pages/Login.js":
/*!*****************************************!*\
  !*** ./assets/dashboard/pages/Login.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_AuthLayout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/AuthLayout */ "./assets/dashboard/components/AuthLayout.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _context_auth_authContext__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../context/auth/authContext */ "./assets/dashboard/context/auth/authContext.js");
/* harmony import */ var _components_RenderError__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../components/RenderError */ "./assets/dashboard/components/RenderError.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
























function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







function Login() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_30__.useNavigate)();
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_24__.useContext)(_context_auth_authContext__WEBPACK_IMPORTED_MODULE_28__["default"]),
    login = _useContext.login,
    error = _useContext.error,
    emailSuccess = _useContext.emailSuccess,
    emailError = _useContext.emailError;
  var LoginSchema = yup__WEBPACK_IMPORTED_MODULE_27__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_27__.string().email("Invalid email").required("Required"),
    password: yup__WEBPACK_IMPORTED_MODULE_27__.string().required("Required")
  });
  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_26__.useFormik)({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: LoginSchema,
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return login(values.email, values.password);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      }
      return onSubmit;
    }()
  });
  var redirectToRegister = function redirectToRegister() {
    return navigate("/dashboard/register");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_AuthLayout__WEBPACK_IMPORTED_MODULE_25__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "container auth"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "row pb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "col-xl-4 col-lg-6 col-md-8 col-sm-12 mt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "main-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "col-lg-12 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("h1", {
    className: "pb-3"
  }, "Log In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
    className: "pb-3"
  }, "Welcome to Quantic Staking"), error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_RenderError__WEBPACK_IMPORTED_MODULE_29__["default"], {
    message: error
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null), emailError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_RenderError__WEBPACK_IMPORTED_MODULE_29__["default"], {
    message: emailError
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("form", {
    onSubmit: formik.handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    className: "form-control form-box mb-3",
    placeholder: "E-mail Address ...",
    onChange: formik.handleChange,
    value: formik.values.email
  }), formik.touched.email && formik.errors.email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_RenderError__WEBPACK_IMPORTED_MODULE_29__["default"], {
    message: formik.errors.email
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("input", {
    type: "password",
    id: "pass",
    name: "password",
    className: "form-control form-box mb-2",
    placeholder: "Password ...",
    onChange: formik.handleChange,
    value: formik.values.firstName
  }), formik.touched.password && formik.errors.password ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_RenderError__WEBPACK_IMPORTED_MODULE_29__["default"], {
    message: formik.errors.password
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("a", {
    href: ""
  }, "Forgot Password?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("input", {
    type: "submit",
    id: "login",
    value: "Log In",
    className: "hero-gradient hero-btn w-100 mb-3 mt-5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("p", {
    href: "",
    onClick: redirectToRegister,
    className: "btn second-btn w-100"
  }, "Create Account"))))))))));
}

/***/ }),

/***/ "./assets/dashboard/pages/NotFound.js":
/*!********************************************!*\
  !*** ./assets/dashboard/pages/NotFound.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./assets/dashboard/components/Layout.js");


function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-center mt-5 mb-3"
  }, "404 | Page Not Found")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ }),

/***/ "./assets/dashboard/pages/Register.js":
/*!********************************************!*\
  !*** ./assets/dashboard/pages/Register.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Register)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AuthLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AuthLayout */ "./assets/dashboard/components/AuthLayout.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_RegisterForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RegisterForm */ "./assets/dashboard/components/RegisterForm.js");
/* harmony import */ var _context_registration_registrationContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/registration/registrationContext */ "./assets/dashboard/context/registration/registrationContext.js");





function Register() {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_context_registration_registrationContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
    activeStepIndex = _React$useContext.activeStepIndex;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var redirectToLogin = function redirectToLogin() {
    return navigate("/dashboard/login");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AuthLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_RegisterForm__WEBPACK_IMPORTED_MODULE_2__.RegisterForm, null))));
}

/***/ }),

/***/ "./assets/styles/dashboard/style.scss":
/*!********************************************!*\
  !*** ./assets/styles/dashboard/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/dashboard/variables.scss":
/*!************************************************!*\
  !*** ./assets/styles/dashboard/variables.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?2b19":
/*!*************************************!*\
  !*** rdf-canonize-native (ignored) ***!
  \*************************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-react_dist-adde55"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RnlCO0FBQ2dCO0FBRXpDLFNBQVN0SixRQUFRLEdBQUc7RUFFaEIsb0JBQ0ksMkRBQUMsMERBQU0scUJBQ0g7SUFBSyxTQUFTLEVBQUM7RUFBVyxnQkFDdEI7SUFBSSxTQUFTLEVBQUM7RUFBdUIsR0FBQyxzQkFBb0IsQ0FBSyxDQUM3RCxDQUNEO0FBRWpCO0FBRUEsaUVBQWVBLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RHO0FBQ3dCO0FBQ0g7QUFDVztBQUNvQjtBQUUvRCxTQUFTRSxRQUFRLEdBQUc7RUFDakMsd0JBQTBCNUQsdURBQWdCLENBQUMrRSxpRkFBbUIsQ0FBQztJQUF4RFUsZUFBZSxxQkFBZkEsZUFBZTtFQUN0QixJQUFNd0QsUUFBUSxHQUFHbkUsNkRBQVcsRUFBRTtFQUM5QixJQUFNUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWU7SUFBQSxPQUFTMEQsUUFBUSxDQUFDLGtCQUFrQixDQUFDO0VBQUE7RUFFMUQsb0JBQ0UsMkRBQUMsOERBQVUscUJBQ1QseUZBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBVyxnQkFDeEIsMkRBQUMsa0VBQVksT0FBRyxDQUNaLENBQ0UsQ0FDQztBQUVqQjs7Ozs7Ozs7Ozs7O0FDcEJBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL2F1dGhQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vY29uZmlnL2VudHJ5cG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9kYXNoYm9hcmQvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZGFzaGJvYXJkL2NvbXBvbmVudHMvQXV0aExheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZGFzaGJvYXJkL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9kYXNoYm9hcmQvY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Rhc2hib2FyZC9jb21wb25lbnRzL1JlZ2lzdGVyRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZGFzaGJvYXJkL2NvbXBvbmVudHMvUmVuZGVyRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Rhc2hib2FyZC9jb25maWcvY291bnRyaWVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9kYXNoYm9hcmQvY29uZmlnL2VuZHBvaW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZGFzaGJvYXJkL2NvbmZpZy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Rhc2hib2FyZC9jb250ZXh0L2F1dGgvYXV0aENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Rhc2hib2FyZC9jb250ZXh0L2F1dGgvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Rhc2hib2FyZC9jb250ZXh0L2ludmVzdG1lbnRzL2ludmVzdG1lbnRzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZGFzaGJvYXJkL2NvbnRleHQvaW52ZXN0bWVudHMvaW52ZXN0bWVudHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9kYXNoYm9hcmQvY29udGV4dC9wcm9maWxlL3Byb2ZpbGVDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9kYXNoYm9hcmQvY29udGV4dC9wcm9maWxlL3Byb2ZpbGVSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9kYXNoYm9hcmQvY29udGV4dC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uQWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Rhc2hib2FyZC9jb250ZXh0L3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb25BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9kYXNoYm9hcmQvY29udGV4dC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZGFzaGJvYXJkL2NvbnRleHQvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvblJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Rhc2hib2FyZC9taWRsbGV3YXJlcy9BdXRoTWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZGFzaGJvYXJkL3BhZ2VzL0NvbmdyYXR1bGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZGFzaGJvYXJkL3BhZ2VzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Rhc2hib2FyZC9wYWdlcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZGFzaGJvYXJkL3BhZ2VzL05vdEZvdW5kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9kYXNoYm9hcmQvcGFnZXMvUmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9kYXNoYm9hcmQvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Rhc2hib2FyZC92YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8vaWdub3JlZHwvVXNlcnMvY2FzdW5lYW51Y2F0YWxpbi9jb2RlL2RlZmluaXRpdmUvbm9kZV9tb2R1bGVzL29iamVjdC1pbnNwZWN0fC4vdXRpbC5pbnNwZWN0Iiwid2VicGFjazovLy9pZ25vcmVkfC9Vc2Vycy9jYXN1bmVhbnVjYXRhbGluL2NvZGUvZGVmaW5pdGl2ZS9ub2RlX21vZHVsZXMvcmRmLWNhbm9uaXplL2xpYnxyZGYtY2Fub25pemUtbmF0aXZlIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXJlYWN0LS1yZWFjdCc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1yZWFjdC9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEh5ZHJhQWRtaW4gfSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pblwiO1xuaW1wb3J0IGF1dGhQcm92aWRlciBmcm9tIFwiLi9hdXRoUHJvdmlkZXJcIjtcbmltcG9ydCB7IEVOVFJZUE9JTlQgfSBmcm9tICcuL2NvbmZpZy9lbnRyeXBvaW50JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8SHlkcmFBZG1pbiBhdXRoUHJvdmlkZXI9e2F1dGhQcm92aWRlcn0gZW50cnlwb2ludD17RU5UUllQT0lOVH0gLz5cbik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3RyaWN0TW9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZG1pbl9hcHBcIikpIHtcbiAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkbWluX2FwcFwiKTtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3Qocm9vdEVsZW1lbnQpO1xuXG4gIHJvb3QucmVuZGVyKFxuICAgIDxTdHJpY3RNb2RlPlxuICAgICAgICA8QXBwIC8+XG4gICAgPC9TdHJpY3RNb2RlPlxuICApO1xufVxuIiwiaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcbmltcG9ydCB7IEVOVFJZUE9JTlQgfSBmcm9tICcuL2NvbmZpZy9lbnRyeXBvaW50JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsb2dpbjogKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pID0+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoYCR7RU5UUllQT0lOVH0vbG9naW5gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pLFxuICAgIH0pO1xuICAgIHJldHVybiBmZXRjaChyZXF1ZXN0KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPCAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID49IDMwMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCh7IHRva2VuIH0pID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xuICAgICAgfSk7XG4gIH0sXG4gIGxvZ291dDogKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcbiAgY2hlY2tBdXRoOiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChcbiAgICAgICAgIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIHx8XG4gICAgICAgIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCA+XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIGp3dERlY29kZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSk/LmV4cFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIG92ZXJyaWRlIHBvc3NpYmxlIGp3dERlY29kZSBlcnJvclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgfVxuICB9LFxuICBjaGVja0Vycm9yOiAoZXJyKSA9PiB7XG4gICAgaWYgKFs0MDEsIDQwM10uaW5jbHVkZXMoZXJyPy5zdGF0dXMgfHwgZXJyPy5yZXNwb25zZT8uc3RhdHVzKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxuICBnZXRQZXJtaXNzaW9uczogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCksXG59OyIsImV4cG9ydCBjb25zdCBFTlRSWVBPSU5UID0gXCJodHRwczovL3d3dy5kZWZpbml0aXZlLnF1YW50aWMtdGVjaG5vbG9naWVzLm5ldC9hcGlcIjsiLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9kYXNoYm9hcmQvdmFyaWFibGVzLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9kYXNoYm9hcmQvc3R5bGUuc2Nzcyc7XG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xucmVxdWlyZShcIi4vZGFzaGJvYXJkL01haW5cIik7XG5yZXF1aXJlKFwiLi9hZG1pbi9NYWluXCIpOyIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3RyaWN0TW9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlcy9Ib21lXCI7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSBcIi4vcGFnZXMvTm90Rm91bmRcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9wYWdlcy9Mb2dpblwiO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuL3BhZ2VzL1JlZ2lzdGVyXCI7XG5pbXBvcnQgQXV0aG1pZGRsZXdhcmUgZnJvbSBcIi4vbWlkbGxld2FyZXMvQXV0aE1pZGRsZXdhcmVcIjtcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuL2NvbnRleHQvYXV0aC9hdXRoQ29udGV4dFwiO1xuaW1wb3J0IHsgUmVnaXN0cmF0aW9uUHJvdmlkZXIgfSBmcm9tIFwiLi9jb250ZXh0L3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb25Db250ZXh0XCI7XG5pbXBvcnQgQ29uZ3JhdHVsYXRpb25zIGZyb20gXCIuL3BhZ2VzL0NvbmdyYXR1bGF0aW9uc1wiO1xuaW1wb3J0IHsgUHJvZmlsZVByb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC9wcm9maWxlL3Byb2ZpbGVDb250ZXh0XCI7XG5pbXBvcnQgeyBJbnZlc3RtZW50c1Byb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC9pbnZlc3RtZW50cy9pbnZlc3RtZW50c0NvbnRleHRcIjtcblxuZnVuY3Rpb24gTWFpbigpIHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVyPlxuICAgICAgPEF1dGhQcm92aWRlcj5cbiAgICAgICAgPFJlZ2lzdHJhdGlvblByb3ZpZGVyPlxuICAgICAgICAgIDxQcm9maWxlUHJvdmlkZXI+XG4gICAgICAgICAgICA8SW52ZXN0bWVudHNQcm92aWRlcj5cbiAgICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9kYXNoYm9hcmQvbG9naW5cIiBlbGVtZW50PXs8TG9naW4gLz59IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgcGF0aD1cIi9kYXNoYm9hcmQvcmVnaXN0ZXJcIlxuICAgICAgICAgICAgICAgICAgZWxlbWVudD17PFJlZ2lzdGVyIC8+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgcGF0aD1cIi9kYXNoYm9hcmQvY29uZ3JhdHVsYXRpb25zXCJcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQ9ezxDb25ncmF0dWxhdGlvbnMgLz59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9kYXNoYm9hcmRcIiBlbGVtZW50PXs8QXV0aG1pZGRsZXdhcmUgLz59PlxuICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGFzaGJvYXJkXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICA8Um91dGUgZWxlbWVudD17PE5vdEZvdW5kIC8+fSAvPlxuICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgIDwvSW52ZXN0bWVudHNQcm92aWRlcj5cbiAgICAgICAgICA8L1Byb2ZpbGVQcm92aWRlcj5cbiAgICAgICAgPC9SZWdpc3RyYXRpb25Qcm92aWRlcj5cbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgIDwvUm91dGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXNoYm9hcmRfYXBwXCIpKSB7XG4gIGNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXNoYm9hcmRfYXBwXCIpO1xuICBjb25zdCByb290ID0gY3JlYXRlUm9vdChyb290RWxlbWVudCk7XG5cbiAgcm9vdC5yZW5kZXIoXG4gICAgPFN0cmljdE1vZGU+XG4gICAgICA8TWFpbiAvPlxuICAgIDwvU3RyaWN0TW9kZT5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aExheW91dCh7Y2hpbGRyZW59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JnLXByaW1hcnknPntjaGlsZHJlbn08L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2ZpbGVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L3Byb2ZpbGUvcHJvZmlsZUNvbnRleHRcIjtcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3Qge3Byb2ZpbGV9ID0gUmVhY3QudXNlQ29udGV4dChQcm9maWxlQ29udGV4dCk7XG4gIGNvbnN0IHtsb2dvdXR9ID0gUmVhY3QudXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4gbG9nb3V0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWJ1bGxzZXllIGZhLTN4XCI+PC9pPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjbmF2YmFyVG9nZ2xlckRlbW8wMlwiXG4gICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhclRvZ2dsZXJEZW1vMDJcIlxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyVG9nZ2xlckRlbW8wMlwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG14LWF1dG8gbWItMiBtYi1sZy0wXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgcGUtNVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHBlLTVcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIE15IFByb2ZpbGVcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgU3VwcG9ydFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2cgZnctc2VtaWJvbGQgdGV4dC1lbmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnMteHMgdGV4dC11cHBlcmNhc2VcIj5Mb2dnZWQgaW4gYXM8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZzLXNtIHRleHQtdXBwZXJjYXNlIG1iLTAgdGV4dC13aGl0ZVwiPntwcm9maWxlPy5maXJzdE5hbWUgfHwgXCJcIn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIlwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gY2xhc3NOYW1lPVwiYnRuIGRhc2gtYnRuIGNsZWFyLWJ0biBtcy0zXCI+XG4gICAgICAgICAgICBMb2cgb3V0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe2NoaWxkcmVufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaC1ncmFkaWVudFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbkNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbkNvbnRleHRcIjtcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCAqIGFzIHl1cCBmcm9tIFwieXVwXCI7XG5pbXBvcnQgUmVuZGVyRXJyb3IgZnJvbSBcIi4vUmVuZGVyRXJyb3JcIjtcbmltcG9ydCB7XG4gIHNldEFjdGl2ZVN0ZXBJbmRleCxcbiAgc2V0Rm9ybURhdGEsXG59IGZyb20gXCIuLi9jb250ZXh0L3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb25BY3Rpb25zXCI7XG5pbXBvcnQgY291bnRyeUxpc3QgZnJvbSBcIi4uL2NvbmZpZy9jb3VudHJpZXNcIjtcblxuY29uc3QgUmVnaXN0ZXJGb3JtU2Vjb25kU3RlcCA9ICgpID0+IHtcbiAgY29uc3QgeyByZWRpcmVjdFRvTG9naW4sIGRpc3BhdGNoLCBhY3RpdmVTdGVwSW5kZXgsIGZvcm1EYXRhLCByZWdpc3RyYXRlIH0gPVxuICAgIFJlYWN0LnVzZUNvbnRleHQoUmVnaXN0cmF0aW9uQ29udGV4dCk7XG5cbiAgY29uc3QgVmFsaWRhdGlvblNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgZmlyc3ROYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcbiAgICBsYXN0TmFtZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXG4gICAgZW1haWw6IHl1cC5zdHJpbmcoKS5lbWFpbChcIkVtYWlsIG5vdCB2YWxpZFwiKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxuICAgIHBhc3N3b3JkOiB5dXBcbiAgICAgIC5zdHJpbmcoKVxuICAgICAgLnJlcXVpcmVkKFwiUmVxdWlyZWRcIilcbiAgICAgIC5taW4oOCwgXCJQYXNzd29yZCBtdXN0IGJlIDggY2hhcmFjdGVycyBsb25nXCIpXG4gICAgICAubWF0Y2hlcygvWzAtOV0vLCBcIlBhc3N3b3JkIHJlcXVpcmVzIGEgbnVtYmVyXCIpXG4gICAgICAubWF0Y2hlcygvW2Etel0vLCBcIlBhc3N3b3JkIHJlcXVpcmVzIGEgbG93ZXJjYXNlIGxldHRlclwiKVxuICAgICAgLm1hdGNoZXMoL1tBLVpdLywgXCJQYXNzd29yZCByZXF1aXJlcyBhbiB1cHBlcmNhc2UgbGV0dGVyXCIpXG4gICAgICAubWF0Y2hlcygvW15cXHddLywgXCJQYXNzd29yZCByZXF1aXJlcyBhIHN5bWJvbFwiKSxcbiAgICBjb25mcGFzc3dvcmQ6IHl1cFxuICAgICAgLnN0cmluZygpXG4gICAgICAucmVxdWlyZWQoXCJSZXF1aXJlZFwiKVxuICAgICAgLm9uZU9mKFt5dXAucmVmKFwicGFzc3dvcmRcIiksIG51bGxdLCAnTXVzdCBtYXRjaCBcInBhc3N3b3JkXCIgZmllbGQgdmFsdWUnKSxcbiAgICBhZGRyZXNzTGluZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXG4gICAgYWRkcmVzc1Bvc3Rjb2RlOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJQb3N0Y29kZSBpcyByZXF1aXJlZFwiKSxcbiAgICBhY2NlcHRlZFRlcm1zOiB5dXBcbiAgICAgIC5zdHJpbmcoKVxuICAgICAgLm9uZU9mKFtcIm9uXCJdLCBcIllvdSBtdXN0IGFjY2VwdCB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMuXCIpLFxuICAgIGFkZHJlc3NDb3VudHJ5OiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJDb3VudHJ5IGlzIHJlcXVpcmVkXCIpLFxuICB9KTtcblxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgYWRkcmVzc0xpbmU6IFwiXCIsXG4gICAgICBhZGRyZXNzUG9zdGNvZGU6IFwiXCIsXG4gICAgICBhZGRyZXNzQ291bnRyeTogXCJcIixcbiAgICAgIGZpbGU6IFwiXCIsXG4gICAgICBhY2NlcHRlZFRlcm1zOiBcIm9mZlwiLFxuICAgIH0sXG4gICAgdmFsaWRhdGlvblNjaGVtYTogVmFsaWRhdGlvblNjaGVtYSxcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4gcmVnaXN0cmF0ZSh2YWx1ZXMpLFxuICB9KTtcblxuICBjb25zb2xlLmxvZyh7Zm9ybWlrfSlcblxuICBjb25zdCBoYW5kbGVVcGxvYWRGaWxlID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyh7ZX0pXG4gICAgZm9ybWlrLnNldEZpZWxkVmFsdWUoXCJmaWxlXCIsIGUuY3VycmVudFRhcmdldC5maWxlc1swXSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXktNVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwYi0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tOFwiPlxuICAgICAgICAgICAgPGgxPkNyZWF0ZSBBY2NvdW50PC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB5LTRcIj5cbiAgICAgICAgICAgICAgQmVmb3JlIHlvdSBjYW4gYWNjZXNzIGFsbCB0aGUgaW52ZXN0bWVudCBvcHBvcnR1bml0aWVzLCB5b3UgbmVlZFxuICAgICAgICAgICAgICB0byBjcmVhdGUgYSBRdWFudGljIFN0YWtpbmcgYWNjb3VudC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBiLTVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1sZy02IGNvbC1tZC02IGNvbC1zbS02IGNvbC14cy0xMiBwYi0zXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTdGVwKDEpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdGVwLWljb24gaGVyby1zdGVwIGNlbnRlciBkLWlubGluZS1mbGV4IG1lLTNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IGQtaW5saW5lXCI+QWNjb3VudCBJbmZvPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLWxnLTYgY29sLW1kLTYgY29sLXNtLTYgY29sLXhzLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXAtaWNvbiBoZXJvLXN0ZXAgY2VudGVyIGQtaW5saW5lLWZsZXggbWUtM1wiPlxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5XCI+S1lDPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJveCBtYi0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBiLTNcIj5BY2NvdW50IEluZm88L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYi0zXCI+QmFzaWMgZGV0YWlscyB0byB1c2Ugd2hlbiBsb2dnaW5nIGluPC9wPlxuICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tYm94IG1iLTNcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lIC4uLlwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5maXJzdE5hbWUgJiYgZm9ybWlrLmVycm9ycy5maXJzdE5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICA8UmVuZGVyRXJyb3IgbWVzc2FnZT17Zm9ybWlrLmVycm9ycy5maXJzdE5hbWV9IC8+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1ib3ggbWItM1wiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImxhc3ROYW1lIC4uLlwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLmxhc3ROYW1lICYmIGZvcm1pay5lcnJvcnMubGFzdE5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICA8UmVuZGVyRXJyb3IgbWVzc2FnZT17Zm9ybWlrLmVycm9ycy5sYXN0TmFtZX0gLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1ib3ggbWItM1wiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkUtbWFpbCBBZGRyZXNzIC4uLlwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmVtYWlsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLmVtYWlsICYmIGZvcm1pay5lcnJvcnMuZW1haWwgPyAoXG4gICAgICAgICAgICAgICAgICA8UmVuZGVyRXJyb3IgbWVzc2FnZT17Zm9ybWlrLmVycm9ycy5lbWFpbH0gLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBpZD1cInBhc3NcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWJveCBtYi0zXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQgLi4uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQucGFzc3dvcmQgJiYgZm9ybWlrLmVycm9ycy5wYXNzd29yZCA/IChcbiAgICAgICAgICAgICAgICAgIDxSZW5kZXJFcnJvciBtZXNzYWdlPXtmb3JtaWsuZXJyb3JzLnBhc3N3b3JkfSAvPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiY29uZnBhc3NcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1ib3ggbWItNVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmQgLi4uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuY29uZnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLmNvbmZwYXNzd29yZCAmJiBmb3JtaWsuZXJyb3JzLmNvbmZwYXNzd29yZCA/IChcbiAgICAgICAgICAgICAgICAgIDxSZW5kZXJFcnJvciBtZXNzYWdlPXtmb3JtaWsuZXJyb3JzLmNvbmZwYXNzd29yZH0gLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi0zXCI+S25vdyBZb3VyIEN1c3RvbWVyczwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiLTNcIj5HZXR0aW5nIHRvIGtub3cgeW91IG1vcmU8L3A+XG4gICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICBpZD1cImFkZHJlc3NMaW5lXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzTGluZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1ib3ggbWItM1wiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgLi4uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuYWRkcmVzc0xpbmV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuYWRkcmVzc0xpbmUgJiYgZm9ybWlrLmVycm9ycy5hZGRyZXNzTGluZSA/IChcbiAgICAgICAgICAgICAgICAgIDxSZW5kZXJFcnJvciBtZXNzYWdlPXtmb3JtaWsuZXJyb3JzLmFkZHJlc3NMaW5lfSAvPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgcGItM1wiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJhZGRyZXNzUG9zdGNvZGVcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1Bvc3Rjb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tYm94IG1iLTMgbWUtM1wiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9zdGNvZGUgLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmFkZHJlc3NQb3N0Y29kZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYWRkcmVzc0NvdW50cnlcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzc0NvdW50cnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1ib3ggbWItM1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmFkZHJlc3NDb3VudHJ5fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvdW50cnlMaXN0Py5tYXAoKGNvdW50cnlOYW1lLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtjb3VudHJ5TmFtZX0ga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50cnlOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5hZGRyZXNzUG9zdGNvZGUgJiZcbiAgICAgICAgICAgICAgICAgIGZvcm1pay5lcnJvcnMuYWRkcmVzc1Bvc3Rjb2RlID8gKFxuICAgICAgICAgICAgICAgICAgICA8UmVuZGVyRXJyb3IgbWVzc2FnZT17Zm9ybWlrLmVycm9ycy5hZGRyZXNzUG9zdGNvZGV9IC8+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5hZGRyZXNzQ291bnRyeSAmJlxuICAgICAgICAgICAgICAgICAgZm9ybWlrLmVycm9ycy5hZGRyZXNzQ291bnRyeSA/IChcbiAgICAgICAgICAgICAgICAgICAgPFJlbmRlckVycm9yIG1lc3NhZ2U9e2Zvcm1pay5lcnJvcnMuYWRkcmVzc0NvdW50cnl9IC8+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItMlwiPlBhc3Nwb3J0IFBob3RvPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmcy14cyBwYi0yXCI+XG4gICAgICAgICAgICAgICAgICBVcGxvYWQgYSByZWNlbnQgcGhvdG8gb2YgeW91cnNlbGYsIGhvbGRpbmcgdGhlIHBhc3Nwb3J0IGluXG4gICAgICAgICAgICAgICAgICB5b3VyIGhhbmQgd2hlcmUgYm90aCB5b3VyIGZhY2UgYW5kIHRoZSBwYXNzcG9ydCBpcyB2aXNpYmxlLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIuanBnLC5qcGVnLC5wbmdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXBsb2FkLWJ0blwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVXBsb2FkRmlsZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZVwiIGNsYXNzTmFtZT1cInctNTBcIj5cbiAgICAgICAgICAgICAgICAgIEJyb3dzZSBGaWxlc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLmZpbGUgJiYgZm9ybWlrLmVycm9ycy5maWxlID8gKFxuICAgICAgICAgICAgICAgICAgPFJlbmRlckVycm9yIG1lc3NhZ2U9e2Zvcm1pay5lcnJvcnMuZmlsZX0gLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgcHQtNCBwYi01XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgcHMtMiBwdC0xXCJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImFjY2VwdGVkVGVybXNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWNjZXB0ZWRUZXJtc1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYWNjZXB0ZWRUZXJtc1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgSSBhY2NlcHQgdGhlIDxhIGhyZWY9XCJcIj50ZXJtcyBhbmQgY29uZGl0aW9uczwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLmFjY2VwdGVkVGVybXMgfHwgZm9ybWlrLmVycm9ycy5hY2NlcHRlZFRlcm1zID8gKFxuICAgICAgICAgICAgICAgICAgICA8UmVuZGVyRXJyb3IgbWVzc2FnZT17Zm9ybWlrLmVycm9ycy5hY2NlcHRlZFRlcm1zfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwibmV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIkNyZWF0ZSBBY2NvdW50XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm8tZ3JhZGllbnQgaGVyby1idG4gdy0xMDAgbXQtMyBtZS0yXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3JlZGlyZWN0VG9Mb2dpbn0gaHJlZj1cIlwiPlxuICAgICAgICAgICAgICBCYWNrIFRvIExvZ2luXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBSZWdpc3RlckZvcm1GaXJzdFN0ZXAoKSB7XG4gIGNvbnN0IHsgcmVkaXJlY3RUb0xvZ2luLCBkaXNwYXRjaCwgYWN0aXZlU3RlcEluZGV4LCBmb3JtRGF0YSB9ID1cbiAgICBSZWFjdC51c2VDb250ZXh0KFJlZ2lzdHJhdGlvbkNvbnRleHQpO1xuXG4gIGNvbnN0IFZhbGlkYXRpb25TY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xuICAgIGZpcnN0TmFtZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXG4gICAgbGFzdE5hbWU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxuICAgIGVtYWlsOiB5dXAuc3RyaW5nKCkuZW1haWwoXCJFbWFpbCBub3QgdmFsaWRcIikucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcbiAgICBwYXNzd29yZDogeXVwXG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5yZXF1aXJlZChcIlJlcXVpcmVkXCIpXG4gICAgICAubWluKDgsIFwiUGFzc3dvcmQgbXVzdCBiZSA4IGNoYXJhY3RlcnMgbG9uZ1wiKVxuICAgICAgLm1hdGNoZXMoL1swLTldLywgXCJQYXNzd29yZCByZXF1aXJlcyBhIG51bWJlclwiKVxuICAgICAgLm1hdGNoZXMoL1thLXpdLywgXCJQYXNzd29yZCByZXF1aXJlcyBhIGxvd2VyY2FzZSBsZXR0ZXJcIilcbiAgICAgIC5tYXRjaGVzKC9bQS1aXS8sIFwiUGFzc3dvcmQgcmVxdWlyZXMgYW4gdXBwZXJjYXNlIGxldHRlclwiKVxuICAgICAgLm1hdGNoZXMoL1teXFx3XS8sIFwiUGFzc3dvcmQgcmVxdWlyZXMgYSBzeW1ib2xcIiksXG4gICAgY29uZnBhc3N3b3JkOiB5dXBcbiAgICAgIC5zdHJpbmcoKVxuICAgICAgLnJlcXVpcmVkKFwiUmVxdWlyZWRcIilcbiAgICAgIC5vbmVPZihbeXVwLnJlZihcInBhc3N3b3JkXCIpLCBudWxsXSwgJ011c3QgbWF0Y2ggXCJwYXNzd29yZFwiIGZpZWxkIHZhbHVlJyksXG4gIH0pO1xuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIGZpcnN0TmFtZTogXCJcIixcbiAgICAgIGxhc3ROYW1lOiBcIlwiLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgIGNvbmZwYXNzd29yZDogXCJcIixcbiAgICB9LFxuICAgIHZhbGlkYXRpb25TY2hlbWE6IFZhbGlkYXRpb25TY2hlbWEsXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7IC4uLmZvcm1EYXRhLCAuLi52YWx1ZXMgfTtcbiAgICAgIGRpc3BhdGNoKHNldEZvcm1EYXRhKGRhdGEpKTtcbiAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZVN0ZXBJbmRleChhY3RpdmVTdGVwSW5kZXggKyAxKSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteS01XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC00IGNvbC1sZy02IGNvbC1tZC04IGNvbC1zbS0xMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwYi0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLXNtLThcIj5cbiAgICAgICAgICAgIDxoMT5DcmVhdGUgQWNjb3VudDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweS00XCI+XG4gICAgICAgICAgICAgIEJlZm9yZSB5b3UgY2FuIGFjY2VzcyBhbGwgdGhlIGludmVzdG1lbnQgb3Bwb3J0dW5pdGllcywgeW91IG5lZWRcbiAgICAgICAgICAgICAgdG8gY3JlYXRlIGEgUXVhbnRpYyBTdGFraW5nIGFjY291bnQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwYi01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbGctNiBjb2wtbWQtNiBjb2wtc20tNiBjb2wteHMtMTIgcGItM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWljb24gaGVyby1zdGVwIGNlbnRlciBkLWlubGluZS1mbGV4IG1lLTNcIj5cbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSBkLWlubGluZVwiPkFjY291bnQgSW5mbzwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1sZy02IGNvbC1tZC02IGNvbC1zbS02IGNvbC14cy0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwLWljb24gbmV4dC1zdGVwIGNlbnRlciBkLWlubGluZS1mbGV4IG1lLTNcIj5cbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmZvLXB1cnBsZVwiPktZQzwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3ggbWItM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItM1wiPkFjY291bnQgSW5mbzwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiLTNcIj5BbGwgZmllbGRzIGFyZSBtYW5kYXRvcnk8L3A+XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tYm94IG1iLTNcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lIC4uLlwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtmb3JtaWsudG91Y2hlZC5maXJzdE5hbWUgJiYgZm9ybWlrLmVycm9ycy5maXJzdE5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICA8UmVuZGVyRXJyb3IgbWVzc2FnZT17Zm9ybWlrLmVycm9ycy5maXJzdE5hbWV9IC8+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1ib3ggbWItM1wiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImxhc3ROYW1lIC4uLlwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLmxhc3ROYW1lICYmIGZvcm1pay5lcnJvcnMubGFzdE5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICA8UmVuZGVyRXJyb3IgbWVzc2FnZT17Zm9ybWlrLmVycm9ycy5sYXN0TmFtZX0gLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1ib3ggbWItM1wiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkUtbWFpbCBBZGRyZXNzIC4uLlwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmVtYWlsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLmVtYWlsICYmIGZvcm1pay5lcnJvcnMuZW1haWwgPyAoXG4gICAgICAgICAgICAgICAgICA8UmVuZGVyRXJyb3IgbWVzc2FnZT17Zm9ybWlrLmVycm9ycy5lbWFpbH0gLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBpZD1cInBhc3NcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWJveCBtYi0zXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQgLi4uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQucGFzc3dvcmQgJiYgZm9ybWlrLmVycm9ycy5wYXNzd29yZCA/IChcbiAgICAgICAgICAgICAgICAgIDxSZW5kZXJFcnJvciBtZXNzYWdlPXtmb3JtaWsuZXJyb3JzLnBhc3N3b3JkfSAvPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiY29uZnBhc3NcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1ib3ggbWItNVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmQgLi4uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuY29uZnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2Zvcm1pay50b3VjaGVkLmNvbmZwYXNzd29yZCAmJiBmb3JtaWsuZXJyb3JzLmNvbmZwYXNzd29yZCA/IChcbiAgICAgICAgICAgICAgICAgIDxSZW5kZXJFcnJvciBtZXNzYWdlPXtmb3JtaWsuZXJyb3JzLmNvbmZwYXNzd29yZH0gLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJuZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTmV4dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvLWdyYWRpZW50IGhlcm8tYnRuIHctMTAwIG10LTNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGEgb25DbGljaz17cmVkaXJlY3RUb0xvZ2lufSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgIEJhY2sgVG8gTG9naW5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVyRm9ybSgpIHtcbiAgY29uc3QgeyBhY3RpdmVTdGVwSW5kZXggfSA9IFJlYWN0LnVzZUNvbnRleHQoUmVnaXN0cmF0aW9uQ29udGV4dCk7XG5cbiAgc3dpdGNoIChhY3RpdmVTdGVwSW5kZXgpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gPFJlZ2lzdGVyRm9ybUZpcnN0U3RlcCAvPjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiA8UmVnaXN0ZXJGb3JtU2Vjb25kU3RlcCAvPjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBSZW5kZXJFcnJvciA9ICh7bWVzc2FnZX0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cbiAgICB7bWVzc2FnZX1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJFcnJvcjtcbiIsImNvbnN0IGNvdW50cnlMaXN0ID0gW1xuXHRcIkFmZ2hhbmlzdGFuXCIsXG5cdFwiQWxiYW5pYVwiLFxuXHRcIkFsZ2VyaWFcIixcblx0XCJBbWVyaWNhbiBTYW1vYVwiLFxuXHRcIkFuZG9ycmFcIixcblx0XCJBbmdvbGFcIixcblx0XCJBbmd1aWxsYVwiLFxuXHRcIkFudGFyY3RpY2FcIixcblx0XCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsXG5cdFwiQXJnZW50aW5hXCIsXG5cdFwiQXJtZW5pYVwiLFxuXHRcIkFydWJhXCIsXG5cdFwiQXVzdHJhbGlhXCIsXG5cdFwiQXVzdHJpYVwiLFxuXHRcIkF6ZXJiYWlqYW5cIixcblx0XCJCYWhhbWFzICh0aGUpXCIsXG5cdFwiQmFocmFpblwiLFxuXHRcIkJhbmdsYWRlc2hcIixcblx0XCJCYXJiYWRvc1wiLFxuXHRcIkJlbGFydXNcIixcblx0XCJCZWxnaXVtXCIsXG5cdFwiQmVsaXplXCIsXG5cdFwiQmVuaW5cIixcblx0XCJCZXJtdWRhXCIsXG5cdFwiQmh1dGFuXCIsXG5cdFwiQm9saXZpYSAoUGx1cmluYXRpb25hbCBTdGF0ZSBvZilcIixcblx0XCJCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYVwiLFxuXHRcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIixcblx0XCJCb3Rzd2FuYVwiLFxuXHRcIkJvdXZldCBJc2xhbmRcIixcblx0XCJCcmF6aWxcIixcblx0XCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnkgKHRoZSlcIixcblx0XCJCcnVuZWkgRGFydXNzYWxhbVwiLFxuXHRcIkJ1bGdhcmlhXCIsXG5cdFwiQnVya2luYSBGYXNvXCIsXG5cdFwiQnVydW5kaVwiLFxuXHRcIkNhYm8gVmVyZGVcIixcblx0XCJDYW1ib2RpYVwiLFxuXHRcIkNhbWVyb29uXCIsXG5cdFwiQ2FuYWRhXCIsXG5cdFwiQ2F5bWFuIElzbGFuZHMgKHRoZSlcIixcblx0XCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWMgKHRoZSlcIixcblx0XCJDaGFkXCIsXG5cdFwiQ2hpbGVcIixcblx0XCJDaGluYVwiLFxuXHRcIkNocmlzdG1hcyBJc2xhbmRcIixcblx0XCJDb2NvcyAoS2VlbGluZykgSXNsYW5kcyAodGhlKVwiLFxuXHRcIkNvbG9tYmlhXCIsXG5cdFwiQ29tb3JvcyAodGhlKVwiLFxuXHRcIkNvbmdvICh0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUpXCIsXG5cdFwiQ29uZ28gKHRoZSlcIixcblx0XCJDb29rIElzbGFuZHMgKHRoZSlcIixcblx0XCJDb3N0YSBSaWNhXCIsXG5cdFwiQ3JvYXRpYVwiLFxuXHRcIkN1YmFcIixcblx0XCJDdXJhw6dhb1wiLFxuXHRcIkN5cHJ1c1wiLFxuXHRcIkN6ZWNoaWFcIixcblx0XCJDw7R0ZSBkJ0l2b2lyZVwiLFxuXHRcIkRlbm1hcmtcIixcblx0XCJEamlib3V0aVwiLFxuXHRcIkRvbWluaWNhXCIsXG5cdFwiRG9taW5pY2FuIFJlcHVibGljICh0aGUpXCIsXG5cdFwiRWN1YWRvclwiLFxuXHRcIkVneXB0XCIsXG5cdFwiRWwgU2FsdmFkb3JcIixcblx0XCJFcXVhdG9yaWFsIEd1aW5lYVwiLFxuXHRcIkVyaXRyZWFcIixcblx0XCJFc3RvbmlhXCIsXG5cdFwiRXN3YXRpbmlcIixcblx0XCJFdGhpb3BpYVwiLFxuXHRcIkZhbGtsYW5kIElzbGFuZHMgKHRoZSkgW01hbHZpbmFzXVwiLFxuXHRcIkZhcm9lIElzbGFuZHMgKHRoZSlcIixcblx0XCJGaWppXCIsXG5cdFwiRmlubGFuZFwiLFxuXHRcIkZyYW5jZVwiLFxuXHRcIkZyZW5jaCBHdWlhbmFcIixcblx0XCJGcmVuY2ggUG9seW5lc2lhXCIsXG5cdFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzICh0aGUpXCIsXG5cdFwiR2Fib25cIixcblx0XCJHYW1iaWEgKHRoZSlcIixcblx0XCJHZW9yZ2lhXCIsXG5cdFwiR2VybWFueVwiLFxuXHRcIkdoYW5hXCIsXG5cdFwiR2licmFsdGFyXCIsXG5cdFwiR3JlZWNlXCIsXG5cdFwiR3JlZW5sYW5kXCIsXG5cdFwiR3JlbmFkYVwiLFxuXHRcIkd1YWRlbG91cGVcIixcblx0XCJHdWFtXCIsXG5cdFwiR3VhdGVtYWxhXCIsXG5cdFwiR3Vlcm5zZXlcIixcblx0XCJHdWluZWFcIixcblx0XCJHdWluZWEtQmlzc2F1XCIsXG5cdFwiR3V5YW5hXCIsXG5cdFwiSGFpdGlcIixcblx0XCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIixcblx0XCJIb2x5IFNlZSAodGhlKVwiLFxuXHRcIkhvbmR1cmFzXCIsXG5cdFwiSG9uZyBLb25nXCIsXG5cdFwiSHVuZ2FyeVwiLFxuXHRcIkljZWxhbmRcIixcblx0XCJJbmRpYVwiLFxuXHRcIkluZG9uZXNpYVwiLFxuXHRcIklyYW4gKElzbGFtaWMgUmVwdWJsaWMgb2YpXCIsXG5cdFwiSXJhcVwiLFxuXHRcIklyZWxhbmRcIixcblx0XCJJc2xlIG9mIE1hblwiLFxuXHRcIklzcmFlbFwiLFxuXHRcIkl0YWx5XCIsXG5cdFwiSmFtYWljYVwiLFxuXHRcIkphcGFuXCIsXG5cdFwiSmVyc2V5XCIsXG5cdFwiSm9yZGFuXCIsXG5cdFwiS2F6YWtoc3RhblwiLFxuXHRcIktlbnlhXCIsXG5cdFwiS2lyaWJhdGlcIixcblx0XCJLb3JlYSAodGhlIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2YpXCIsXG5cdFwiS29yZWEgKHRoZSBSZXB1YmxpYyBvZilcIixcblx0XCJLdXdhaXRcIixcblx0XCJLeXJneXpzdGFuXCIsXG5cdFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWMgKHRoZSlcIixcblx0XCJMYXR2aWFcIixcblx0XCJMZWJhbm9uXCIsXG5cdFwiTGVzb3Rob1wiLFxuXHRcIkxpYmVyaWFcIixcblx0XCJMaWJ5YVwiLFxuXHRcIkxpZWNodGVuc3RlaW5cIixcblx0XCJMaXRodWFuaWFcIixcblx0XCJMdXhlbWJvdXJnXCIsXG5cdFwiTWFjYW9cIixcblx0XCJNYWRhZ2FzY2FyXCIsXG5cdFwiTWFsYXdpXCIsXG5cdFwiTWFsYXlzaWFcIixcblx0XCJNYWxkaXZlc1wiLFxuXHRcIk1hbGlcIixcblx0XCJNYWx0YVwiLFxuXHRcIk1hcnNoYWxsIElzbGFuZHMgKHRoZSlcIixcblx0XCJNYXJ0aW5pcXVlXCIsXG5cdFwiTWF1cml0YW5pYVwiLFxuXHRcIk1hdXJpdGl1c1wiLFxuXHRcIk1heW90dGVcIixcblx0XCJNZXhpY29cIixcblx0XCJNaWNyb25lc2lhIChGZWRlcmF0ZWQgU3RhdGVzIG9mKVwiLFxuXHRcIk1vbGRvdmEgKHRoZSBSZXB1YmxpYyBvZilcIixcblx0XCJNb25hY29cIixcblx0XCJNb25nb2xpYVwiLFxuXHRcIk1vbnRlbmVncm9cIixcblx0XCJNb250c2VycmF0XCIsXG5cdFwiTW9yb2Njb1wiLFxuXHRcIk1vemFtYmlxdWVcIixcblx0XCJNeWFubWFyXCIsXG5cdFwiTmFtaWJpYVwiLFxuXHRcIk5hdXJ1XCIsXG5cdFwiTmVwYWxcIixcblx0XCJOZXRoZXJsYW5kcyAodGhlKVwiLFxuXHRcIk5ldyBDYWxlZG9uaWFcIixcblx0XCJOZXcgWmVhbGFuZFwiLFxuXHRcIk5pY2FyYWd1YVwiLFxuXHRcIk5pZ2VyICh0aGUpXCIsXG5cdFwiTmlnZXJpYVwiLFxuXHRcIk5pdWVcIixcblx0XCJOb3Jmb2xrIElzbGFuZFwiLFxuXHRcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcyAodGhlKVwiLFxuXHRcIk5vcndheVwiLFxuXHRcIk9tYW5cIixcblx0XCJQYWtpc3RhblwiLFxuXHRcIlBhbGF1XCIsXG5cdFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwiLFxuXHRcIlBhbmFtYVwiLFxuXHRcIlBhcHVhIE5ldyBHdWluZWFcIixcblx0XCJQYXJhZ3VheVwiLFxuXHRcIlBlcnVcIixcblx0XCJQaGlsaXBwaW5lcyAodGhlKVwiLFxuXHRcIlBpdGNhaXJuXCIsXG5cdFwiUG9sYW5kXCIsXG5cdFwiUG9ydHVnYWxcIixcblx0XCJQdWVydG8gUmljb1wiLFxuXHRcIlFhdGFyXCIsXG5cdFwiUmVwdWJsaWMgb2YgTm9ydGggTWFjZWRvbmlhXCIsXG5cdFwiUm9tYW5pYVwiLFxuXHRcIlJ1c3NpYW4gRmVkZXJhdGlvbiAodGhlKVwiLFxuXHRcIlJ3YW5kYVwiLFxuXHRcIlLDqXVuaW9uXCIsXG5cdFwiU2FpbnQgQmFydGjDqWxlbXlcIixcblx0XCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwiLFxuXHRcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLFxuXHRcIlNhaW50IEx1Y2lhXCIsXG5cdFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIixcblx0XCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCIsXG5cdFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIixcblx0XCJTYW1vYVwiLFxuXHRcIlNhbiBNYXJpbm9cIixcblx0XCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIixcblx0XCJTYXVkaSBBcmFiaWFcIixcblx0XCJTZW5lZ2FsXCIsXG5cdFwiU2VyYmlhXCIsXG5cdFwiU2V5Y2hlbGxlc1wiLFxuXHRcIlNpZXJyYSBMZW9uZVwiLFxuXHRcIlNpbmdhcG9yZVwiLFxuXHRcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIixcblx0XCJTbG92YWtpYVwiLFxuXHRcIlNsb3ZlbmlhXCIsXG5cdFwiU29sb21vbiBJc2xhbmRzXCIsXG5cdFwiU29tYWxpYVwiLFxuXHRcIlNvdXRoIEFmcmljYVwiLFxuXHRcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsXG5cdFwiU291dGggU3VkYW5cIixcblx0XCJTcGFpblwiLFxuXHRcIlNyaSBMYW5rYVwiLFxuXHRcIlN1ZGFuICh0aGUpXCIsXG5cdFwiU3VyaW5hbWVcIixcblx0XCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCIsXG5cdFwiU3dlZGVuXCIsXG5cdFwiU3dpdHplcmxhbmRcIixcblx0XCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLFxuXHRcIlRhaXdhblwiLFxuXHRcIlRhamlraXN0YW5cIixcblx0XCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCIsXG5cdFwiVGhhaWxhbmRcIixcblx0XCJUaW1vci1MZXN0ZVwiLFxuXHRcIlRvZ29cIixcblx0XCJUb2tlbGF1XCIsXG5cdFwiVG9uZ2FcIixcblx0XCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsXG5cdFwiVHVuaXNpYVwiLFxuXHRcIlR1cmtleVwiLFxuXHRcIlR1cmttZW5pc3RhblwiLFxuXHRcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kcyAodGhlKVwiLFxuXHRcIlR1dmFsdVwiLFxuXHRcIlVnYW5kYVwiLFxuXHRcIlVrcmFpbmVcIixcblx0XCJVbml0ZWQgQXJhYiBFbWlyYXRlcyAodGhlKVwiLFxuXHRcIlVuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmQgKHRoZSlcIixcblx0XCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHMgKHRoZSlcIixcblx0XCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2EgKHRoZSlcIixcblx0XCJVcnVndWF5XCIsXG5cdFwiVXpiZWtpc3RhblwiLFxuXHRcIlZhbnVhdHVcIixcblx0XCJWZW5lenVlbGEgKEJvbGl2YXJpYW4gUmVwdWJsaWMgb2YpXCIsXG5cdFwiVmlldCBOYW1cIixcblx0XCJWaXJnaW4gSXNsYW5kcyAoQnJpdGlzaClcIixcblx0XCJWaXJnaW4gSXNsYW5kcyAoVS5TLilcIixcblx0XCJXYWxsaXMgYW5kIEZ1dHVuYVwiLFxuXHRcIldlc3Rlcm4gU2FoYXJhXCIsXG5cdFwiWWVtZW5cIixcblx0XCJaYW1iaWFcIixcblx0XCJaaW1iYWJ3ZVwiLFxuXHRcIsOFbGFuZCBJc2xhbmRzXCJcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50cnlMaXN0OyIsImV4cG9ydCBjb25zdCBBUElfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIjtcbmV4cG9ydCBjb25zdCBBUElfRU5UUllQT0lOVCA9IGAke0FQSV9VUkx9L2FwaWA7XG5leHBvcnQgY29uc3QgTE9HSU5fRU5UUllQT0lOVCA9IGAke0FQSV9FTlRSWVBPSU5UfS9sb2dpbmA7XG5leHBvcnQgY29uc3QgVVNFUl9FTlRSWVBPSU5UID0gYCR7QVBJX0VOVFJZUE9JTlR9L3VzZXJzYDtcbmV4cG9ydCBjb25zdCBSRVFVRVNUX0VOVFJZUE9JTlQgPSBgJHtBUElfRU5UUllQT0lOVH0vcmVxdWVzdHNgO1xuZXhwb3J0IGNvbnN0IENVU1RPTUVSX0RFVEFJTFNfRU5UUllQT0lOVCA9IGAke0FQSV9FTlRSWVBPSU5UfS9jdXN0b21lcl9kZXRhaWxzYDtcbmV4cG9ydCBjb25zdCBTVEFLSU5HX1BMQU5fRU5UUllQT0lOVCA9IGAke0FQSV9FTlRSWVBPSU5UfS9zdGFraW5nX3BsYW5zYDsiLCJleHBvcnQgY29uc3QgQVVUSF9UQUcgPSBcInF1YW50aWNfc3Rha2luZ19hdXRoXCI7XG5leHBvcnQgY29uc3QgVVNFUl9UQUcgPSBcInF1YW50aWNfc3Rha2luZ191c2VyXCI7IiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBhdXRoUmVkdWNlciBmcm9tICcuL2F1dGhSZWR1Y2VyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgTE9HSU5fRU5UUllQT0lOVCB9IGZyb20gJy4uLy4uL2NvbmZpZy9lbmRwb2ludHMnXG5pbXBvcnQgeyBBVVRIX1RBRywgVVNFUl9UQUcgfSBmcm9tICcuLi8uLi9jb25maWcvbG9jYWxTdG9yYWdlJ1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxuXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB1c2VyOiB7fSxcbiAgICBsb2FkaW5nOiB0cnVlLFxuICAgIGVycm9yOiAnJyxcbiAgICBlbWFpbFN1Y2Nlc3M6ICcnLFxuICAgIGVtYWlsRXJyb3I6ICcnLFxuICB9XG5cbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGF1dGhSZWR1Y2VyLCBpbml0aWFsU3RhdGUpXG5cbiAgY29uc3QgbG9naW4gPSBhc3luYyAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NcbiAgICAgICAgLnBvc3QoTE9HSU5fRU5UUllQT0lOVCwge3VzZXJuYW1lLCBwYXNzd29yZH0pXG4gICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YT8uZGF0YSlcblxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQVVUSF9UQUcpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShBVVRIX1RBRywgcmVzcG9uc2UudG9rZW4pXG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFVTRVJfVEFHLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS51c2VyKSlcblxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTE9HSU5fU1VDQ0VTUycsIHBheWxvYWQ6IHJlc3BvbnNlLnVzZXIgfSlcblxuICAgICAgbmF2aWdhdGUoJy9kYXNoYm9hcmQnKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTE9HSU5fRVJST1InLCBwYXlsb2FkOiBlcnIucmVzcG9uc2U/LmRhdGE/LmVycm9yIH0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPR09VVCcgfSlcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShVU0VSX1RBRylcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShBVVRIX1RBRylcbiAgICBuYXZpZ2F0ZSgnL2Rhc2hib2FyZC9sb2dpbicpXG4gIH1cblxuICBjb25zdCByZXNldFBhc3N3b3JkID0gYXN5bmMgKGVtYWlsKSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YFxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCB9KVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy91c2VyL3Bhc3N3b3JkL3Jlc2V0JywgYm9keSwgY29uZmlnKVxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VORF9FTUFJTF9TVUNDRVNTJywgcGF5bG9hZDogJ0NoZWNrIHlvdXIgZW1haWwgdG8gZ2V0IHlvdXIgbmV3IHBhc3N3b3JkLicgfSlcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRU5EX0VNQUlMX1JFTU9WRV9NRVNTQUdFJyB9KVxuICAgICAgfSwgNTAwMClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFTkRfRU1BSUxfRkFJTCcsIHBheWxvYWQ6ICdUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggc2VuZGluZyB0aGUgZW1haWwsIHBsZWFzZSB0cnkgYWdhaW4uJyB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcbiAgICB1c2VyOiBzdGF0ZS51c2VyLFxuICAgIGxvYWRpbmc6IHN0YXRlLmxvYWRpbmcsXG4gICAgZXJyb3I6IHN0YXRlLmVycm9yLFxuICAgIGVtYWlsU3VjY2Vzczogc3RhdGUuZW1haWxTdWNjZXNzLFxuICAgIGVtYWlsRXJyb3I6IHN0YXRlLmVtYWlsRXJyb3IsXG4gICAgbG9naW4sXG4gICAgbG9nb3V0LFxuICAgIHJlc2V0UGFzc3dvcmRcbiAgfX0+XG4gICAge2NoaWxkcmVufVxuICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dCIsImNvbnN0IGF1dGhSZWR1Y2VyID0gKHN0YXRlID0geyB1c2VyOiB7fSwgbG9hZGluZzogdHJ1ZSwgZXJyb3I6ICcnLCBlbWFpbFN1Y2Nlc3M6ICcnLCBlbWFpbEVycm9yOiAnJyB9LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ1NFTkRfRU1BSUxfU1VDQ0VTUyc6IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBlbWFpbFN1Y2Nlc3M6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhc2UgJ1NFTkRfRU1BSUxfRkFJTCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZW1haWxFcnJvcjogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfVxuICAgICAgY2FzZSAnU0VORF9FTUFJTF9SRU1PVkVfTUVTU0FHRSc6IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBlbWFpbFN1Y2Nlc3M6ICcnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhc2UgJ0xPR0lOX1NVQ0NFU1MnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIGVycm9yOiAnJ1xuICAgICAgICB9XG4gICAgICBjYXNlICdMT0dJTl9FUlJPUic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ0xPR09VVCc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgdXNlcjoge30sXG4gICAgICAgICAgZXJyb3I6ICcnXG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgYXV0aFJlZHVjZXIiLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEludmVzdG1lbnRzUmVkdWNlciBmcm9tIFwiLi9pbnZlc3RtZW50c1JlZHVjZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7XG4gIFJFUVVFU1RfRU5UUllQT0lOVCxcbiAgU1RBS0lOR19QTEFOX0VOVFJZUE9JTlQsXG59IGZyb20gXCIuLi8uLi9jb25maWcvZW5kcG9pbnRzXCI7XG5pbXBvcnQgUHJvZmlsZUNvbnRleHQgZnJvbSBcIi4uL3Byb2ZpbGUvcHJvZmlsZUNvbnRleHRcIjtcblxuY29uc3QgSW52ZXN0bWVudHNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgSW52ZXN0bWVudHNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHVzZXJJbnZlc3RtZW50czogW10sXG4gICAgaW52ZXN0bWVudE9wcG9ydHVuaXRpZXM6IFtdLFxuICB9O1xuXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihJbnZlc3RtZW50c1JlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IHsgcHJvZmlsZSB9ID0gUmVhY3QudXNlQ29udGV4dChQcm9maWxlQ29udGV4dCk7XG5cbiAgY29uc3QgZ2V0UmVxdWVzdHNCeVVzZXJJZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0cyA9IGF3YWl0IGF4aW9zXG4gICAgICAuZ2V0KGAke1JFUVVFU1RfRU5UUllQT0lOVH0/dXNlcj0ke3Byb2ZpbGVbXCJAaWRcIl19YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coYFtHRVRfUkVRVUVTVFNdICR7ZS5tZXNzYWdlfWApKTtcblxuICAgIGlmIChyZXF1ZXN0c1tcImh5ZHJhOm1lbWJlclwiXS5sZW5ndGgpXG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwiU0VUX1VTRVJfSU5WRVNUTUVOVFNcIixcbiAgICAgICAgcGF5bG9hZDogcmVxdWVzdHNbXCJoeWRyYTptZW1iZXJcIl0sXG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRTdGFraW5nUGxhbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBheGlvc1xuICAgICAgLmdldChTVEFLSU5HX1BMQU5fRU5UUllQT0lOVClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coYFtHRVRfU1RBS0lOR19QTEFOU10gJHtlLm1lc3NhZ2V9YCkpO1xuXG4gICAgaWYgKHJlcXVlc3RzW1wiaHlkcmE6bWVtYmVyXCJdLmxlbmd0aClcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJTRVRfSU5WRVNUTUVOVF9PUFBPUlRVTklUSUVTXCIsXG4gICAgICAgIHBheWxvYWQ6IHJlcXVlc3RzW1wiaHlkcmE6bWVtYmVyXCJdLFxuICAgICAgfSk7XG4gIH07XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXByb2ZpbGUpIHJldHVybjtcblxuICAgIGdldFJlcXVlc3RzQnlVc2VySWQoKTtcbiAgICBnZXRTdGFraW5nUGxhbnMoKTtcblxuICAgIGNvbnNvbGUubG9nKHsgc3RhdGUgfSk7XG4gIH0sIFtwcm9maWxlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8SW52ZXN0bWVudHNDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICB1c2VySW52ZXN0bWVudHM6IHN0YXRlLnVzZXJJbnZlc3RtZW50cyxcbiAgICAgICAgaW52ZXN0bWVudE9wcG9ydHVuaXRpZXM6IHN0YXRlLmludmVzdG1lbnRPcHBvcnR1bml0aWVzLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9JbnZlc3RtZW50c0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnZlc3RtZW50c0NvbnRleHQ7XG4iLCJjb25zdCBwcm9maWxlUmVkdWNlciA9IChzdGF0ZSA9IHsgdXNlckludmVzdG1lbnRzOiBbXSwgaW52ZXN0bWVudE9wcG9ydHVuaXRpZXM6IFtdIH0sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnU0VUX1VTRVJfSU5WRVNUTUVOVFMnOiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgdXNlckludmVzdG1lbnRzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXNlICdTRVRfSU5WRVNUTUVOVF9PUFBPUlRVTklUSUVTJzoge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGludmVzdG1lbnRPcHBvcnR1bml0aWVzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IHByb2ZpbGVSZWR1Y2VyIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9maWxlUmVkdWNlciBmcm9tICcuL3Byb2ZpbGVSZWR1Y2VyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgVVNFUl9UQUcgfSBmcm9tICcuLi8uLi9jb25maWcvbG9jYWxTdG9yYWdlJ1xuaW1wb3J0IHsgVVNFUl9FTlRSWVBPSU5UIH0gZnJvbSAnLi4vLi4vY29uZmlnL2VuZHBvaW50cydcblxuY29uc3QgUHJvZmlsZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGNvbnN0IFByb2ZpbGVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHByb2ZpbGU6IG51bGxcbiAgfVxuXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihQcm9maWxlUmVkdWNlciwgaW5pdGlhbFN0YXRlKVxuXG4gIGNvbnN0IGdldFVzZXJCeUVtYWlsID0gYXN5bmMoKSA9PiB7XG4gICAgY29uc3QgZW1haWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFVTRVJfVEFHKSk7XG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBheGlvc1xuICAgICAgLmdldChgJHtVU0VSX0VOVFJZUE9JTlR9P3BhZ2U9MSZlbWFpbD0ke2VtYWlsfWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxuICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coYFtHRVRfVVNFUl0gJHtlLm1lc3NhZ2V9YCkpXG5cbiAgICBpZih1c2Vyc1snaHlkcmE6bWVtYmVyJ10ubGVuZ3RoKVxuICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX1BST0ZJTEUnLCBwYXlsb2FkOiB1c2Vyc1snaHlkcmE6bWVtYmVyJ11bMF19KTtcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VXNlckJ5RW1haWwoKTtcbiAgfSwgW10pXG5cbiAgcmV0dXJuIDxQcm9maWxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgIHByb2ZpbGU6IHN0YXRlLnByb2ZpbGVcbiAgfX0+XG4gICAge2NoaWxkcmVufVxuICA8L1Byb2ZpbGVDb250ZXh0LlByb3ZpZGVyPlxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlQ29udGV4dCIsImNvbnN0IHByb2ZpbGVSZWR1Y2VyID0gKHN0YXRlID0geyBwcm9maWxlOiBudWxsIH0sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnU0VUX1BST0ZJTEUnOiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgcHJvZmlsZTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBwcm9maWxlUmVkdWNlciIsImV4cG9ydCBjb25zdCBTRVRfQUNUSVZFX1NURVAgPSBcIlNFVF9BQ1RJVkVfU1RFUFwiO1xuZXhwb3J0IGNvbnN0IFNFVF9GT1JNX0RBVEEgPSBcIlNFVF9GT1JNX0RBVEFcIjtcbmV4cG9ydCBjb25zdCBSRUdJU1RSQVRJT05fU1VDQ0VTUyA9IFwiUkVHSVNUUkFUSU9OX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRUdJU1RSQVRJT05fRVJST1IgPSBcIlJFR0lTVFJBVElPTl9FUlJPUlwiOyIsImltcG9ydCB7IFJFR0lTVFJBVElPTl9FUlJPUiwgUkVHSVNUUkFUSU9OX1NVQ0NFU1MsIFNFVF9BQ1RJVkVfU1RFUCwgU0VUX0ZPUk1fREFUQSwgU1RBUlRfUkVHSVNUUkFUSU9OIH0gZnJvbSBcIi4vcmVnaXN0cmF0aW9uQWN0aW9uVHlwZXNcIlxuXG5leHBvcnQgY29uc3Qgc2V0QWN0aXZlU3RlcEluZGV4ID0gKHBheWxvYWQpID0+IChcbiAgICB7IHR5cGU6IFNFVF9BQ1RJVkVfU1RFUCwgcGF5bG9hZCB9XG4pXG5cbmV4cG9ydCBjb25zdCBzZXRGb3JtRGF0YSA9IChwYXlsb2FkKSA9PiAoXG4gICAgeyB0eXBlOiBTRVRfRk9STV9EQVRBLCBwYXlsb2FkIH1cbilcblxuZXhwb3J0IGNvbnN0IHNldFJlZ2lzdHJhdGlvblN1Y2Nlc3MgPSAoKSA9PiAoe3R5cGU6IFJFR0lTVFJBVElPTl9TVUNDRVNTfSk7XG5leHBvcnQgY29uc3Qgc2V0UmVnaXN0cmF0aW9uRXJyb3IgPSAocGF5bG9hZCkgPT4gKHt0eXBlOiBSRUdJU1RSQVRJT05fRVJST1IsIHBheWxvYWR9KSIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcmVnaXN0cmF0aW9uUmVkdWNlciBmcm9tIFwiLi9yZWdpc3RyYXRpb25SZWR1Y2VyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge1xuICBDVVNUT01FUl9ERVRBSUxTX0VOVFJZUE9JTlQsXG4gIFVTRVJfRU5UUllQT0lOVCxcbiAgTE9HSU5fRU5UUllQT0lOVCxcbn0gZnJvbSBcIi4uLy4uL2NvbmZpZy9lbmRwb2ludHNcIjtcbmltcG9ydCB7XG4gIHNldFJlZ2lzdHJhdGlvbkVycm9yLFxuICBzZXRSZWdpc3RyYXRpb25TdWNjZXNzLFxufSBmcm9tIFwiLi9yZWdpc3RyYXRpb25BY3Rpb25zXCI7XG5pbXBvcnQgeyBBVVRIX1RBRywgVVNFUl9UQUcgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2xvY2FsU3RvcmFnZVwiO1xuXG5jb25zdCBSZWdpc3RyYXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgUmVnaXN0cmF0aW9uUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgcmVkaXJlY3RUb0xvZ2luID0gKCkgPT4gbmF2aWdhdGUoXCIvZGFzaGJvYXJkL2xvZ2luXCIpO1xuXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBhY3RpdmVTdGVwSW5kZXg6IDEsXG4gICAgZm9ybURhdGE6IHt9LFxuICAgIGVycm9yOiBcIlwiLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWdpc3RyYXRpb25SZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIGNvbnN0IHJlZ2lzdHJhdGUgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0aW1lRWxhcHNlZCA9IERhdGUubm93KCk7XG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKHRpbWVFbGFwc2VkKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlVXNlciA9IGF3YWl0IGF4aW9zXG4gICAgICAgIC5wb3N0KFVTRVJfRU5UUllQT0lOVCwge1xuICAgICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxuICAgICAgICAgIHJvbGVzOiBbXCJST0xFX1VTRVJcIl0sXG4gICAgICAgICAgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQsXG4gICAgICAgICAgZmlyc3ROYW1lOiBkYXRhLmZpcnN0TmFtZSxcbiAgICAgICAgICBsYXN0TmFtZTogZGF0YS5sYXN0TmFtZSxcbiAgICAgICAgICBkYXRlQ3JlYXRlZDogdG9kYXkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGE/LmRhdGEpO1xuXG4gICAgICBhd2FpdCBheGlvc1xuICAgICAgICAucG9zdChcbiAgICAgICAgICBDVVNUT01FUl9ERVRBSUxTX0VOVFJZUE9JTlQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgIHN0YXR1czogXCJQZW5kaW5nXCIsXG4gICAgICAgICAgICB1c2VyOiByZXNwb25zZVVzZXJbXCJAaWRcIl0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGE/LmRhdGEpXG4gICAgICAgIC50aGVuKCh1c2VyKSA9PiBjb25zb2xlLmxvZyh7IHVzZXIgfSkpO1xuXG4gICAgICBjb25zdCBsb2dpblJlc3BvbnNlID0gYXdhaXQgYXhpb3NcbiAgICAgICAgLnBvc3QoTE9HSU5fRU5UUllQT0lOVCwge3VzZXJuYW1lOiBkYXRhLmVtYWlsLCBwYXNzd29yZDogZGF0YS5wYXNzd29yZH0pXG4gICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YT8uZGF0YSlcblxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQVVUSF9UQUcpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShBVVRIX1RBRywgbG9naW5SZXNwb25zZS50b2tlbilcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVVNFUl9UQUcsIEpTT04uc3RyaW5naWZ5KGxvZ2luUmVzcG9uc2UudXNlcikpXG5cbiAgICAgIGRpc3BhdGNoKHNldFJlZ2lzdHJhdGlvblN1Y2Nlc3MoKSk7XG4gICAgICBuYXZpZ2F0ZSgnL2Rhc2hib2FyZC9jb25ncmF0dWxhdGlvbnMnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKHsgZXJyIH0pO1xuICAgICAgZGlzcGF0Y2goc2V0UmVnaXN0cmF0aW9uRXJyb3IoZXJyLnJlc3BvbnNlPy5kYXRhPy5kZXRhaWwpKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVnaXN0cmF0aW9uQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgYWN0aXZlU3RlcEluZGV4OiBzdGF0ZS5hY3RpdmVTdGVwSW5kZXgsXG4gICAgICAgIGZvcm1EYXRhOiBzdGF0ZS5mb3JtRGF0YSxcbiAgICAgICAgcmVkaXJlY3RUb0xvZ2luLFxuICAgICAgICBkaXNwYXRjaCxcbiAgICAgICAgcmVnaXN0cmF0ZSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUmVnaXN0cmF0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbkNvbnRleHQ7XG4iLCJpbXBvcnQgeyBSRUdJU1RSQVRJT05fRVJST1IsIFJFR0lTVFJBVElPTl9TVUNDRVNTLCBTRVRfQUNUSVZFX1NURVAsIFNFVF9GT1JNX0RBVEEgfSBmcm9tIFwiLi9yZWdpc3RyYXRpb25BY3Rpb25UeXBlc1wiXG5cbmNvbnN0IHJlZ2lzdHJhdGlvblJlZHVjZXIgPSAoc3RhdGUgPSB7IGZvcm1EYXRhOiB7fSwgYWN0aXZlU3RlcEluZGV4OiAxIH0sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBTRVRfQUNUSVZFX1NURVA6IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBhY3RpdmVTdGVwSW5kZXg6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgICBjYXNlIFNFVF9GT1JNX0RBVEE6IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBmb3JtRGF0YTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICAgIGNhc2UgUkVHSVNUUkFUSU9OX1NVQ0NFU1M6IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICAgIGNhc2UgUkVHSVNUUkFUSU9OX0VSUk9SOiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgcmVnaXN0cmF0aW9uUmVkdWNlciIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgTmF2aWdhdGUsIE91dGxldCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcbmltcG9ydCB7IEFVVEhfVEFHIH0gZnJvbSBcIi4uL2NvbmZpZy9sb2NhbFN0b3JhZ2VcIjtcblxuY29uc3QgQXV0aG1pZGRsZXdhcmUgPSAoKSA9PiB7XG4gIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQVVUSF9UQUcpXG4gIHJldHVybiAoXG4gICAgdG9rZW4gPyA8T3V0bGV0IC8+IDogPE5hdmlnYXRlIHRvPVwiL2Rhc2hib2FyZC9sb2dpblwiIC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhtaWRkbGV3YXJlOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uZ3JhdHVsYXRpb25zKCkge1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgY29uc3QgbmF2aWdhdGVUb0hvbWVQYWdlID0gKCkgPT4gbmF2aWdhdGUoXCIvZGFzaGJvYXJkL1wiKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiaC0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgaC0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTYgb2Zmc2V0LWxnLTMgcC01IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvY2hlY2stbWFyay5wbmdcIiBhbHQ9XCJcIiBjbGFzcz1cIm1iLTRcIiAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwibWItNFwiPkNvbmdyYXR1bGF0aW9uczwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInBiLTVcIj5cbiAgICAgICAgICAgICAgWW91ciBhY2NvdW50IGNyZWF0aW9uIHJlcXVlc3QgaGFzIGJlZW4gc3VibWl0dGVkIGFuZCBhIG1lbWJlciBvZlxuICAgICAgICAgICAgICBvdXIgY29tcGxpYW5jZSB0ZWFtIHdpbGwgcmV2aWV3IHlvdXIgYXBwbGljYXRpb24gc2hvcnRseSBhbmQgbWFrZVxuICAgICAgICAgICAgICBhIGRlY2lzaW9uLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgb25DbGljaz17bmF2aWdhdGVUb0hvbWVQYWdlfVxuICAgICAgICAgICAgICBocmVmPVwiXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4gaGVyby1ncmFkaWVudCBoZXJvLWJ0biB3LTEwMCBtYi00XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQmFjayBUbyBIb21lcGFnZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEludmVzdG1lbnRzQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9pbnZlc3RtZW50cy9pbnZlc3RtZW50c0NvbnRleHRcIjtcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiLi4vY29uZmlnL2VuZHBvaW50c1wiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHVzZXJJbnZlc3RtZW50cywgaW52ZXN0bWVudE9wcG9ydHVuaXRpZXMgfSA9XG4gICAgUmVhY3QudXNlQ29udGV4dChJbnZlc3RtZW50c0NvbnRleHQpO1xuXG4gIGNvbnNvbGUubG9nKHsgaW52ZXN0bWVudE9wcG9ydHVuaXRpZXMgfSk7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24gbWItNFwiIGlkPVwiYWNjb3JkaW9uUGFuZWxzU3RheU9wZW5FeGFtcGxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbi1oZWFkZXIgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwYW5lbHNTdGF5T3Blbi1oZWFkaW5nT25lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbi1idXR0b24gcC0wIG1iLTNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI3BhbmVsc1N0YXlPcGVuLWNvbGxhcHNlT25lXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwYW5lbHNTdGF5T3Blbi1jb2xsYXBzZU9uZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTXkgSW52ZXN0bWVudHMgKHt1c2VySW52ZXN0bWVudHM/Lmxlbmd0aH0pXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBpZD1cInBhbmVsc1N0YXlPcGVuLWNvbGxhcHNlT25lXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2Ugc2hvd1wiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwicGFuZWxzU3RheU9wZW4taGVhZGluZ09uZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1ib2R5IHAtMFwiPlxuICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmxlc3MgcGItNVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGFibGUtcm93IGZzLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+SWNvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Qcm9qZWN0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNvaW48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+QW1vdW50PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFQUjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5MT0NLIFRJTUU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+SU5WRVNUTUVOVCBEQVRFPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlZFU1QgREFURTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5ST0kgVE8gREFURTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TVEFUVVM8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwidGFibGUtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3VzZXJJbnZlc3RtZW50cz8ubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckludmVzdG1lbnRzLm1hcCgodXNlckludmVzdG1lbnQsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSV9VUkx9L21lZGlhLyR7dXNlckludmVzdG1lbnQ/LnN0YWtpbmdQbGFuPy5jdXJyZW5jeT8uaW1hZ2VQYXRofWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJJbnZlc3RtZW50Py5zdGFraW5nUGxhbj8uY3VycmVuY3k/Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlckludmVzdG1lbnQ/LnN0YWtpbmdQbGFuPy5jdXJyZW5jeT8udG9rZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3VzZXJJbnZlc3RtZW50Py5hbW91bnR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTAlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MzAgZGF5czwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjEyLzExLzIwMjM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xMi8xMS8yMDIzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHVzZXJJbnZlc3RtZW50Py5hbW91bnQgfHwgMCkgLyAxMDB9ICZuYnNwO3tcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VySW52ZXN0bWVudD8uc3Rha2luZ1BsYW4/LmN1cnJlbmN5Py50b2tlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkYXNoLWJ0bi13XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFzaC1idG4gZGFzaC1idG4tc20gYnRuLXNtLXllbGxvdyBjZW50ZXIgbXMtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VySW52ZXN0bWVudD8uc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImRhc2gtYnRuLXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gc2hvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBkYXNoLWJ0biBjbGVhci1idG4gbXgtMyBkcm9wZG93bi10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRyb3Bkb3duTWVudUxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bk1lbnVMaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5vdGhlciBhY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21ldGhpbmcgZWxzZSBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+PC90cj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPCEtLSBUQUJMRSAyIC0tPiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwYi0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIEludmVzdG1lbnQgT3Bwb3J0dW5pdGllcyAoe2ludmVzdG1lbnRPcHBvcnR1bml0aWVzPy5sZW5ndGh9KVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmxlc3NcIj5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0YWJsZS1yb3cgZnMtc21cIj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkljb248L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByb2plY3Q8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNvaW48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFQUjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TE9DSyBUSU1FPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TVEFUVVM8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJ0YWJsZS1yb3dcIj5cbiAgICAgICAgICAgICAge2ludmVzdG1lbnRPcHBvcnR1bml0aWVzPy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgaW52ZXN0bWVudE9wcG9ydHVuaXRpZXMubWFwKChvcHBvcnR1bml0eSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSV9VUkx9L21lZGlhLyR7b3Bwb3J0dW5pdHk/LmN1cnJlbmN5Py5pbWFnZVBhdGh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntvcHBvcnR1bml0eT8uY3VycmVuY3k/Lm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntvcHBvcnR1bml0eT8uY3VycmVuY3k/LnRva2VufTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57b3Bwb3J0dW5pdHk/LmR1cmF0aW9uc1swXS5hcHJ9JTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57b3Bwb3J0dW5pdHk/LmR1cmF0aW9uc1swXS5kdXJhdGlvbn0gZGF5czwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJkYXNoLWJ0bi13XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGRhc2gtYnRuIGdyZWVuLWdyYWRpZW50IGNlbnRlciBteC0zIG1zLTBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVudGVyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDx0cj48L3RyPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogPCEtLSBNT0RBTFMgLS0+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gcHQtM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIEJ1dHRvbnMgdHJpZ2dlciBtb2RhbCAtLT4gKi99XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNzdGF0aWNCYWNrZHJvcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTW9kYWwgMVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjc3RhdGljQmFja2Ryb3AyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBNb2RhbCAyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNzdGF0aWNCYWNrZHJvcDNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE1vZGFsIDNcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIE1vZGFsIDEgLS0+ICovfVxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsZmFkZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cInN0YXRpY0JhY2tkcm9wXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYnMtYmFja2Ryb3A9XCJzdGF0aWNcIlxuICAgICAgICAgICAgICAgICAgZGF0YS1icy1rZXlib2FyZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic3RhdGljQmFja2Ryb3BMYWJlbFwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1zLTMgbWItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtY2lyY2xlLWFycm93LWxlZnQgZmEteGxcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIHRleHQtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItNFwiPlN0YWtpbmcgUGFuZWw8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYnVpbGQvaW1hZ2VzL211bHRpdmVyc3gucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00MCBtZS0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmcy1tZFwiPk11bHRpdmVyc1ggKEVHTEQpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYi00XCI+U2VsZWN0IFN0cmF0ZWd5PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gZm9ybS1ib3ggbW9kYWwtYnRuIHctMTAwIG1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgdGV4dC1zdGFydCBmcy1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwIDxzcGFuIGNsYXNzTmFtZT1cImZzLXhzXCI+ZGF5czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgdGV4dC1lbmQgZnMtbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLjUlIDxzcGFuIGNsYXNzTmFtZT1cImZzLXhzXCI+QVBSPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gZm9ybS1ib3ggbW9kYWwtYnRuIHctMTAwIG1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgdGV4dC1zdGFydCBmcy1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDYwIDxzcGFuIGNsYXNzTmFtZT1cImZzLXhzXCI+ZGF5czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgdGV4dC1lbmQgZnMtbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LjUlIDxzcGFuIGNsYXNzTmFtZT1cImZzLXhzXCI+QVBSPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gZm9ybS1ib3ggbW9kYWwtYnRuIHctMTAwIG1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgdGV4dC1zdGFydCBmcy1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDgwIDxzcGFuIGNsYXNzTmFtZT1cImZzLXhzXCI+ZGF5czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgdGV4dC1lbmQgZnMtbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA2LjUlIDxzcGFuIGNsYXNzTmFtZT1cImZzLXhzXCI+QVBSPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiYnRuIGZvcm0tYm94IG1vZGFsLWJ0biB3LTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiB0ZXh0LXN0YXJ0IGZzLW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIwIDxzcGFuIGNsYXNzTmFtZT1cImZzLXhzXCI+ZGF5czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgdGV4dC1lbmQgZnMtbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMC41JSA8c3BhbiBjbGFzc05hbWU9XCJmcy14c1wiPkFQUjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInB0LTUgcGItNFwiPkFtb3VudDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBmb3JtLWJveCBwLTMgdy01MCBtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC13aGl0ZSBmcy1tZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIi4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZW5kIGZzLXhzIGNlbnRlci1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmFzaWMtYWRkb24yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRUdMRFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXRlcnRpYXJ5XCI+NjAgZGF5cyw8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeW91IHdpbGwgZWFybntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdGVydGlhcnlcIj4wLjIyIEVHTEQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gaGVyby1ncmFkaWVudCBoZXJvLWJ0biB3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmluYWxpc2UgRGVwb3NpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIE1vZGFsIDIgLS0+ICovfVxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsZmFkZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cInN0YXRpY0JhY2tkcm9wMlwiXG4gICAgICAgICAgICAgICAgICBkYXRhLWJzLWJhY2tkcm9wPVwic3RhdGljXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYnMta2V5Ym9hcmQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICB0YWJJbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInN0YXRpY0JhY2tkcm9wTGFiZWwyXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbXMtMyBtYi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1jaXJjbGUtYXJyb3ctbGVmdCBmYS14bFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgdGV4dC1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi00XCI+U3Rha2luZyBQYW5lbDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9idWlsZC9pbWFnZXMvbXVsdGl2ZXJzeC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQwIG1lLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZzLW1kXCI+TXVsdGl2ZXJzWCAoRUdMRCk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmF0ZWd5OntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdGVydGlhcnlcIj42MCBkYXlzPC9zcGFuPiBhdHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdGVydGlhcnlcIj40LjUlIEFQUjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbW91bnQ6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC10ZXJ0aWFyeVwiPjMwIEVHTEQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZWwtaW5mby1ib3ggbWItNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnMtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG8gc3RhcnQgZWFybmluZyByZXdhcmRzLCBwbGVhc2UgdGhlIDMwIEVHTEQgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHdhbGxldCBwcm92aWRlIGJlbG93LiBQbGVhc2UgcGF5IGF0dGVudGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcyB0cmFuc2ZlcnMgb24gdGhlIHdyb25nIG5ldHdvcmtzIG9yIHdhbGxldHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fubm90IGJlIHJlaW1idXJzZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGUgdy0xMDAgbW9kYWwtZHJvcGRvd24tYnRuIHRleHQtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZHJvcGRvd25NZW51QnV0dG9uMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENob29zZSBOZXR3b3JrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSB3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51QnV0dG9uMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWxyb25kIE5ldHdvcmsgKEVyYzIwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFub3RoZXIgbmV0d29ya1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFub3RoZXIgbmV0d29ya1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZzLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbmR7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdGVydGlhcnlcIj4zMCBFR0xEPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gdGhlIGZvbGxvd2luZyB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJzYW1wbGVcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXJkMTk4VHNtc2tzcWUyRXNueDc0WGNoZ2x3eHdjazhWYXp0bWxmYWtyOTNKc2ZobWR3NkMyMlN4N0dhOTdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPVwiQ29weVRvQ2xpcGJvYXJkKCdzYW1wbGUnKTtyZXR1cm4gZmFsc2U7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1yZWd1bGFyIGZhLWNvcHkgZmEtMnhcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBoZXJvLWdyYWRpZW50IGhlcm8tYnRuIHctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXJrIEFzIFBhaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gRElTQUJMRUQgQlVUVE9OIC0tPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiYnRuIGhlcm8tYnRuIHctMTAwIG1vZGFsLWJ0bi1kaXNhYmxlZFwiPk1hcmsgQXMgUGFpZDwvYT4gLS0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gTW9kYWwgMyAtLT4gKi99XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWxmYWRlXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwic3RhdGljQmFja2Ryb3AzXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYnMtYmFja2Ryb3A9XCJzdGF0aWNcIlxuICAgICAgICAgICAgICAgICAgZGF0YS1icy1rZXlib2FyZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic3RhdGljQmFja2Ryb3BMYWJlbDJcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtcy0zIG1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWNpcmNsZS1hcnJvdy1sZWZ0IGZhLXhsXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiB0ZXh0LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2J1aWxkL2ltYWdlcy9jaGVjay1tYXJrLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNVwiPkNvbmdyYXR1bGF0aW9ucyE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBiLTMgZnMtbWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoYW5rIHlvdSBmb3IgY29udHJpYnV0aW5nIHRvIHRoaXMgc3Rha2luZyBwb29sLiBBXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtIG1lbWJlciBoYXMgYWxyZWFkeSBiZWVuIG5vdGlmaWVkIG9mIHlvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcG9zaXQgYW5kIG9uY2UgdGhlIGZ1bmRzIGhhdmUgYXJyaXZlZCwgd2Ugd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlIHlvdXIgaW52ZXN0bWVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGItMyBmcy1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG8gc3BlZWQgdXAgdGhlIHByb2Nlc3MsIHBsZWFzZSBwcm92aWRlIHRoZSBoYXNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eCBpbiB0aGUgZmllbGQgYmVsb3cgKG9wdGlvbmFsKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLWJveCBtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIYXNoIHR4IGhlcmUgLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhhc2h0eFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaGFzaHR4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGV4dC13aGl0ZSBmcy1tZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGhlcm8tZ3JhZGllbnQgaGVyby1idG4gdy0xMDAgbWItNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlIEhhc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEF1dGhMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXV0aExheW91dFwiO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9hdXRoL2F1dGhDb250ZXh0XCI7XG5pbXBvcnQgUmVuZGVyRXJyb3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVuZGVyRXJyb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgY29uc3QgeyBsb2dpbiwgZXJyb3IsIGVtYWlsU3VjY2VzcywgZW1haWxFcnJvciB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG5cbiAgY29uc3QgTG9naW5TY2hlbWEgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xuICAgIGVtYWlsOiBZdXAuc3RyaW5nKCkuZW1haWwoXCJJbnZhbGlkIGVtYWlsXCIpLnJlcXVpcmVkKFwiUmVxdWlyZWRcIiksXG4gICAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxuICB9KTtcblxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uU2NoZW1hOiBMb2dpblNjaGVtYSxcbiAgICBvblN1Ym1pdDogYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgICAgYXdhaXQgbG9naW4odmFsdWVzLmVtYWlsLCB2YWx1ZXMucGFzc3dvcmQpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHJlZGlyZWN0VG9SZWdpc3RlciA9ICgpID0+IG5hdmlnYXRlKFwiL2Rhc2hib2FyZC9yZWdpc3RlclwiKTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoTGF5b3V0PlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGF1dGhcIj5cbiAgICAgICAgICB7LyogPCEtLSBMb2cgaW4gYm94IC0tPiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwYi01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC00IGNvbC1sZy02IGNvbC1tZC04IGNvbC1zbS0xMiBtdC01XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1ib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBiLTNcIj5Mb2cgSW48L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYi0zXCI+V2VsY29tZSB0byBRdWFudGljIFN0YWtpbmc8L3A+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvciA/IDxSZW5kZXJFcnJvciBtZXNzYWdlPXtlcnJvcn0gLz4gOiA8PjwvPn1cbiAgICAgICAgICAgICAgICAgICAge2VtYWlsRXJyb3IgPyA8UmVuZGVyRXJyb3IgbWVzc2FnZT17ZW1haWxFcnJvcn0gLz4gOiA8PjwvPn1cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWJveCBtYi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRS1tYWlsIEFkZHJlc3MgLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQuZW1haWwgJiYgZm9ybWlrLmVycm9ycy5lbWFpbCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZW5kZXJFcnJvciBtZXNzYWdlPXtmb3JtaWsuZXJyb3JzLmVtYWlsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tYm94IG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZCAuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5maXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnRvdWNoZWQucGFzc3dvcmQgJiYgZm9ybWlrLmVycm9ycy5wYXNzd29yZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZW5kZXJFcnJvciBtZXNzYWdlPXtmb3JtaWsuZXJyb3JzLnBhc3N3b3JkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5Gb3Jnb3QgUGFzc3dvcmQ/PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxvZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTG9nIEluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm8tZ3JhZGllbnQgaGVyby1idG4gdy0xMDAgbWItMyBtdC01XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlZGlyZWN0VG9SZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBzZWNvbmQtYnRuIHctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgQWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvQXV0aExheW91dD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCJcbiAgIFxuZnVuY3Rpb24gTm90Rm91bmQoKSB7XG4gIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC01IG1iLTNcIj40MDQgfCBQYWdlIE5vdCBGb3VuZDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cbiAgIFxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEF1dGhMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXV0aExheW91dFwiO1xuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgUmVnaXN0ZXJGb3JtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVnaXN0ZXJGb3JtXCI7XG5pbXBvcnQgUmVnaXN0cmF0aW9uQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uQ29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlcigpIHtcbiAgY29uc3Qge2FjdGl2ZVN0ZXBJbmRleH0gPSBSZWFjdC51c2VDb250ZXh0KFJlZ2lzdHJhdGlvbkNvbnRleHQpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IHJlZGlyZWN0VG9Mb2dpbiA9ICgpID0+IG5hdmlnYXRlKFwiL2Rhc2hib2FyZC9sb2dpblwiKTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoTGF5b3V0PlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPFJlZ2lzdGVyRm9ybSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0F1dGhMYXlvdXQ+XG4gICk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIlJlYWN0IiwiSHlkcmFBZG1pbiIsImF1dGhQcm92aWRlciIsIkVOVFJZUE9JTlQiLCJTdHJpY3RNb2RlIiwiY3JlYXRlUm9vdCIsIkFwcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290RWxlbWVudCIsInJvb3QiLCJyZW5kZXIiLCJqd3REZWNvZGUiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyZXF1ZXN0IiwiUmVxdWVzdCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsIkVycm9yIiwic3RhdHVzVGV4dCIsImpzb24iLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjaGVja0F1dGgiLCJnZXRJdGVtIiwiRGF0ZSIsImdldFRpbWUiLCJleHAiLCJyZWplY3QiLCJlIiwiY2hlY2tFcnJvciIsImVyciIsImluY2x1ZGVzIiwiZ2V0UGVybWlzc2lvbnMiLCJyZXF1aXJlIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsImNvbnRleHQiLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJIb21lIiwiTm90Rm91bmQiLCJMb2dpbiIsIlJlZ2lzdGVyIiwiQXV0aG1pZGRsZXdhcmUiLCJBdXRoUHJvdmlkZXIiLCJSZWdpc3RyYXRpb25Qcm92aWRlciIsIkNvbmdyYXR1bGF0aW9ucyIsIlByb2ZpbGVQcm92aWRlciIsIkludmVzdG1lbnRzUHJvdmlkZXIiLCJNYWluIiwiQXV0aExheW91dCIsImNoaWxkcmVuIiwiUHJvZmlsZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsIkhlYWRlciIsInVzZUNvbnRleHQiLCJwcm9maWxlIiwiaGFuZGxlTG9nb3V0IiwiZmlyc3ROYW1lIiwiTGF5b3V0IiwidXNlTmF2aWdhdGUiLCJSZWdpc3RyYXRpb25Db250ZXh0IiwidXNlRm9ybWlrIiwieXVwIiwiUmVuZGVyRXJyb3IiLCJzZXRBY3RpdmVTdGVwSW5kZXgiLCJzZXRGb3JtRGF0YSIsImNvdW50cnlMaXN0IiwiUmVnaXN0ZXJGb3JtU2Vjb25kU3RlcCIsInJlZGlyZWN0VG9Mb2dpbiIsImRpc3BhdGNoIiwiYWN0aXZlU3RlcEluZGV4IiwiZm9ybURhdGEiLCJyZWdpc3RyYXRlIiwiVmFsaWRhdGlvblNjaGVtYSIsIm9iamVjdCIsInNoYXBlIiwic3RyaW5nIiwicmVxdWlyZWQiLCJsYXN0TmFtZSIsImVtYWlsIiwibWluIiwibWF0Y2hlcyIsImNvbmZwYXNzd29yZCIsIm9uZU9mIiwicmVmIiwiYWRkcmVzc0xpbmUiLCJhZGRyZXNzUG9zdGNvZGUiLCJhY2NlcHRlZFRlcm1zIiwiYWRkcmVzc0NvdW50cnkiLCJmb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwiZmlsZSIsInZhbGlkYXRpb25TY2hlbWEiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVVcGxvYWRGaWxlIiwic2V0RmllbGRWYWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJmaWxlcyIsInNldFN0ZXAiLCJoYW5kbGVDaGFuZ2UiLCJ0b3VjaGVkIiwiZXJyb3JzIiwiaGFuZGxlU3VibWl0IiwibWFwIiwiY291bnRyeU5hbWUiLCJpZHgiLCJSZWdpc3RlckZvcm1GaXJzdFN0ZXAiLCJkYXRhIiwiUmVnaXN0ZXJGb3JtIiwibWVzc2FnZSIsIkFQSV9VUkwiLCJBUElfRU5UUllQT0lOVCIsIkxPR0lOX0VOVFJZUE9JTlQiLCJVU0VSX0VOVFJZUE9JTlQiLCJSRVFVRVNUX0VOVFJZUE9JTlQiLCJDVVNUT01FUl9ERVRBSUxTX0VOVFJZUE9JTlQiLCJTVEFLSU5HX1BMQU5fRU5UUllQT0lOVCIsIkFVVEhfVEFHIiwiVVNFUl9UQUciLCJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsImF1dGhSZWR1Y2VyIiwiYXhpb3MiLCJuYXZpZ2F0ZSIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJlbWFpbFN1Y2Nlc3MiLCJlbWFpbEVycm9yIiwic3RhdGUiLCJwb3N0IiwidHlwZSIsInBheWxvYWQiLCJyZXNldFBhc3N3b3JkIiwiY29uZmlnIiwiQXV0aG9yaXphdGlvbiIsInNldFRpbWVvdXQiLCJhY3Rpb24iLCJJbnZlc3RtZW50c1JlZHVjZXIiLCJJbnZlc3RtZW50c0NvbnRleHQiLCJ1c2VySW52ZXN0bWVudHMiLCJpbnZlc3RtZW50T3Bwb3J0dW5pdGllcyIsImdldFJlcXVlc3RzQnlVc2VySWQiLCJnZXQiLCJyZXF1ZXN0cyIsImxlbmd0aCIsImdldFN0YWtpbmdQbGFucyIsInVzZUVmZmVjdCIsInByb2ZpbGVSZWR1Y2VyIiwiUHJvZmlsZVJlZHVjZXIiLCJnZXRVc2VyQnlFbWFpbCIsInBhcnNlIiwidXNlcnMiLCJTRVRfQUNUSVZFX1NURVAiLCJTRVRfRk9STV9EQVRBIiwiUkVHSVNUUkFUSU9OX1NVQ0NFU1MiLCJSRUdJU1RSQVRJT05fRVJST1IiLCJTVEFSVF9SRUdJU1RSQVRJT04iLCJzZXRSZWdpc3RyYXRpb25TdWNjZXNzIiwic2V0UmVnaXN0cmF0aW9uRXJyb3IiLCJyZWdpc3RyYXRpb25SZWR1Y2VyIiwidGltZUVsYXBzZWQiLCJub3ciLCJ0b2RheSIsInJvbGVzIiwiZGF0ZUNyZWF0ZWQiLCJ0b0lTT1N0cmluZyIsInJlc3BvbnNlVXNlciIsImxvZ2luUmVzcG9uc2UiLCJkZXRhaWwiLCJOYXZpZ2F0ZSIsIk91dGxldCIsIm5hdmlnYXRlVG9Ib21lUGFnZSIsInVzZXJJbnZlc3RtZW50Iiwic3Rha2luZ1BsYW4iLCJjdXJyZW5jeSIsImltYWdlUGF0aCIsIm5hbWUiLCJhbW91bnQiLCJvcHBvcnR1bml0eSIsImR1cmF0aW9ucyIsImFwciIsImR1cmF0aW9uIiwiWXVwIiwiTG9naW5TY2hlbWEiLCJyZWRpcmVjdFRvUmVnaXN0ZXIiXSwic291cmNlUm9vdCI6IiJ9