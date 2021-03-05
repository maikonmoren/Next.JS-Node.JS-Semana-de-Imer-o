webpackHotUpdate_N_E("pages/orcamento",{

/***/ "./pages/orcamento.js":
/*!****************************!*\
  !*** ./pages/orcamento.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_maiko_cursos_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_maiko_cursos_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_maiko_cursos_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_maiko_cursos_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_maiko_cursos_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var _components_Rodape__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Rodape */ "./components/Rodape.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





var _jsxFileName = "C:\\Users\\maiko\\cursos\\site\\pages\\orcamento.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_maiko_cursos_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function Orcamento() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    projeto: ''
  }),
      orcamento = _useState[0],
      setOrcamento = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    fromSave: false,
    type: '',
    message: ''
  }),
      respose = _useState2[0],
      setRespose = _useState2[1];

  var onChangeInput = function onChangeInput(e) {
    return setOrcamento(_objectSpread(_objectSpread({}, orcamento), {}, Object(C_Users_maiko_cursos_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, e.target.name, e.target.value)));
  };

  var sendOrcamento = /*#__PURE__*/function () {
    var _ref = Object(C_Users_maiko_cursos_site_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_maiko_cursos_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var res, responseEnv;
      return C_Users_maiko_cursos_site_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log(orcamento);
              setRespose({
                formS: formS
              });
              _context.prev = 3;
              _context.next = 6;
              return fetch('http://localhost:8080/orcamento', {
                method: 'POST',
                body: JSON.stringify(orcamento),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 6:
              res = _context.sent;
              _context.next = 9;
              return res.json();

            case 9:
              responseEnv = _context.sent;

              if (responseEnv.error) {
                setRespose({
                  type: 'error',
                  message: responseEnv.message
                });
              } else {
                setRespose({
                  type: 'success',
                  message: responseEnv.message
                });
              }

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](3);
              setRespose({
                type: 'error',
                message: 'Sem conexão com a API'
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 13]]);
    }));

    return function sendOrcamento(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Orcamento - Celke"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Solicitar orcamento para ..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Jumbotron"], {
      fluid: true,
      className: "descr-top",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: ".descr-top{\n              background-color: #050c3d;\n              color: #00a1fc;\n              padding-top: 40px;\n              padding-bottom: 40px;\n              margin-bottom: 0rem !important;\n          }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        className: "text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "display-4",
          children: "Or\xE7amento"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Jumbotron"], {
      fluid: true,
      className: "form-orcamento",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: ".form-orcamento{\n              padding-top: 80px;\n              padding-bottom: 80px;\n              background-color: #fff;\n              margin-bottom: 0rem !important;\n            }"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        children: [respose.type === 'error' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Alert"], {
          color: "danger",
          children: respose.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 38
        }, this) : '', respose.type === 'success' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Alert"], {
          color: "success",
          children: respose.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 41
        }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
          onSubmit: sendOrcamento,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
              "for": "name",
              children: "Nome"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
              type: "text",
              name: "name",
              id: "name",
              placeholder: "Prencha com o nome completo",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
              "for": "email",
              children: "E-mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
              type: "email",
              name: "email",
              id: "email",
              placeholder: "Prencha com o seu melhor e-mail",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
              "for": "phone",
              children: "Telefone"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
              type: "text",
              name: "phone",
              id: "phone",
              placeholder: "(XX) XXXX-XXXX",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
              "for": "whatsApp",
              children: "WhatsApp"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
              type: "text",
              name: "whatsApp",
              id: "whatsApp",
              placeholder: "(XX) XXXX-XXXX",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Label"], {
              "for": "projeto",
              children: "Projeto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Input"], {
              type: "textarea",
              name: "projeto",
              id: "projeto",
              placeholder: "Fale um pouco do seu projeto",
              onChange: onChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            type: "submit",
            outline: true,
            color: "primary",
            children: "Solicitar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Rodape__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, this);
}

_s(Orcamento, "8H+/aW59kVgsortmxw7+vNe4g7Y=");

_c = Orcamento;
/* harmony default export */ __webpack_exports__["default"] = (Orcamento);

var _c;

$RefreshReg$(_c, "Orcamento");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JjYW1lbnRvLmpzIl0sIm5hbWVzIjpbIk9yY2FtZW50byIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJ3aGF0c2FwcCIsInByb2pldG8iLCJvcmNhbWVudG8iLCJzZXRPcmNhbWVudG8iLCJmcm9tU2F2ZSIsInR5cGUiLCJtZXNzYWdlIiwicmVzcG9zZSIsInNldFJlc3Bvc2UiLCJvbkNoYW5nZUlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VuZE9yY2FtZW50byIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZvcm1TIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXMiLCJqc29uIiwicmVzcG9uc2VFbnYiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFJQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUM7QUFDeENDLFFBQUksRUFBRSxFQURrQztBQUV4Q0MsU0FBSyxFQUFFLEVBRmlDO0FBR3hDQyxTQUFLLEVBQUMsRUFIa0M7QUFJeENDLFlBQVEsRUFBQyxFQUorQjtBQUt4Q0MsV0FBTyxFQUFDO0FBTGdDLEdBQUQsQ0FEdkI7QUFBQSxNQUNaQyxTQURZO0FBQUEsTUFDREMsWUFEQzs7QUFBQSxtQkFRV1Asc0RBQVEsQ0FBQztBQUNyQ1EsWUFBUSxFQUFDLEtBRDRCO0FBRXJDQyxRQUFJLEVBQUMsRUFGZ0M7QUFHckNDLFdBQU8sRUFBRTtBQUg0QixHQUFELENBUm5CO0FBQUEsTUFRWkMsT0FSWTtBQUFBLE1BUUhDLFVBUkc7O0FBZW5CLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsQ0FBQztBQUFBLFdBQUlQLFlBQVksaUNBQUtELFNBQUwsMklBQWdC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c3RhdGljL3dlYnBhY2svcGFnZXMvb3JjYW1lbnRvLmUwOWQwMzcyNDIzMDE0NDNkNDEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcclxuaW1wb3J0IFJvZGFwZSBmcm9tICcuLi9jb21wb25lbnRzL1JvZGFwZSc7XHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIsIEp1bWJvdHJvbiwgQnV0dG9uLCBGb3JtLCBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCwgQWxlcnQgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gT3JjYW1lbnRvKCkge1xyXG4gIGNvbnN0IFtvcmNhbWVudG8sIHNldE9yY2FtZW50b10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgbmFtZTogJycsXHJcbiAgICAgZW1haWw6ICcnLFxyXG4gICAgIHBob25lOicnLFxyXG4gICAgIHdoYXRzYXBwOicnLFxyXG4gICAgIHByb2pldG86JydcclxuICB9KTtcclxuICBjb25zdCBbcmVzcG9zZSwgc2V0UmVzcG9zZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBmcm9tU2F2ZTpmYWxzZSxcclxuICAgIHR5cGU6JycsXHJcbiAgICBtZXNzYWdlOiAnJ1xyXG5cclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJbnB1dCA9IGUgPT4gc2V0T3JjYW1lbnRvKHsuLi5vcmNhbWVudG8sW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZX0pO1xyXG5cclxuICBjb25zdCBzZW5kT3JjYW1lbnRvID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhvcmNhbWVudG8pO1xyXG4gICAgc2V0UmVzcG9zZSh7Zm9ybVN9KVxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL29yY2FtZW50bycse1xyXG4gICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShvcmNhbWVudG8pLFxyXG4gICAgICAgIGhlYWRlcnM6eydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ31cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZUVudiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICBpZihyZXNwb25zZUVudi5lcnJvcil7XHJcbiAgICAgICAgc2V0UmVzcG9zZSh7XHJcbiAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2VFbnYubWVzc2FnZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHNldFJlc3Bvc2Uoe1xyXG4gICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2VFbnYubWVzc2FnZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICBzZXRSZXNwb3NlKHtcclxuICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdTZW0gY29uZXjDo28gY29tIGEgQVBJJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIFxyXG4gICAgICBcclxuICAgIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5PcmNhbWVudG8gLSBDZWxrZTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlNvbGljaXRhciBvcmNhbWVudG8gcGFyYSAuLi5cIiAvPlxyXG4gICAgPC9IZWFkPlxyXG5cclxuICBcclxuICAgICAgPE1lbnUgLz5cclxuXHJcbiAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwiZGVzY3ItdG9wXCI+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge2AuZGVzY3ItdG9we1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTBjM2Q7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwMGExZmM7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00XCI+T3LDp2FtZW50bzwvaDE+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvSnVtYm90cm9uPlxyXG5cclxuICAgICAgPEp1bWJvdHJvbiBmbHVpZCBjbGFzc05hbWU9XCJmb3JtLW9yY2FtZW50b1wiPlxyXG4gICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgIHtgLmZvcm0tb3JjYW1lbnRve1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgIHtyZXNwb3NlLnR5cGUgPT09ICdlcnJvcicgPyA8QWxlcnQgY29sb3I9J2Rhbmdlcic+e3Jlc3Bvc2UubWVzc2FnZX08L0FsZXJ0PjogJyd9XHJcbiAgICAgICAgICB7cmVzcG9zZS50eXBlID09PSAnc3VjY2VzcycgPyA8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPntyZXNwb3NlLm1lc3NhZ2V9PC9BbGVydD46ICcnfVxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtzZW5kT3JjYW1lbnRvfT5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwibmFtZVwiPk5vbWU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJQcmVuY2hhIGNvbSBvIG5vbWUgY29tcGxldG9cIiAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJlbWFpbFwiPkUtbWFpbDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlByZW5jaGEgY29tIG8gc2V1IG1lbGhvciBlLW1haWxcIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0vPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPExhYmVsIGZvcj1cInBob25lXCI+VGVsZWZvbmU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwaG9uZVwiIGlkPVwicGhvbmVcIiBwbGFjZWhvbGRlcj1cIihYWCkgWFhYWC1YWFhYXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9Lz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJ3aGF0c0FwcFwiPldoYXRzQXBwPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwid2hhdHNBcHBcIiBpZD1cIndoYXRzQXBwXCIgcGxhY2Vob2xkZXI9XCIoWFgpIFhYWFgtWFhYWFwiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwicHJvamV0b1wiPlByb2pldG88L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBuYW1lPVwicHJvamV0b1wiIGlkPVwicHJvamV0b1wiIHBsYWNlaG9sZGVyPVwiRmFsZSB1bSBwb3VjbyBkbyBzZXUgcHJvamV0b1wiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fS8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb3V0bGluZSBjb2xvcj1cInByaW1hcnlcIj5Tb2xpY2l0YXI8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9KdW1ib3Ryb24+XHJcblxyXG4gICAgICA8Um9kYXBlIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmNhbWVudG87Il0sInNvdXJjZVJvb3QiOiIifQ==