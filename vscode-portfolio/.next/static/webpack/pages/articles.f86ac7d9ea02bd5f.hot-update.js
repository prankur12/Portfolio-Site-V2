"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles",{

/***/ "./pages/articles.jsx":
/*!****************************!*\
  !*** ./pages/articles.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_prankur_Desktop_personal_Portfolio_Site_V2_vscode_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_prankur_Desktop_personal_Portfolio_Site_V2_vscode_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_prankur_Desktop_personal_Portfolio_Site_V2_vscode_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ArticleCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ArticleCard */ \"./components/ArticleCard.jsx\");\n/* harmony import */ var _styles_ArticlesPage_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/ArticlesPage.module.css */ \"./styles/ArticlesPage.module.css\");\n/* harmony import */ var _styles_ArticlesPage_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ArticlesPage_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ArticlesPage = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), articles = ref[0], setArticles = ref[1];\n    function fetchArticles() {\n        return _fetchArticles.apply(this, arguments);\n    }\n    function _fetchArticles() {\n        _fetchArticles = _asyncToGenerator(_home_prankur_Desktop_personal_Portfolio_Site_V2_vscode_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var Blogs;\n            return _home_prankur_Desktop_personal_Portfolio_Site_V2_vscode_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"https://dev.to/api/articles?username=prankurpandeyy\");\n                    case 3:\n                        Blogs = _ctx.sent;\n                        setArticles(Blogs.data);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return _fetchArticles.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchArticles();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"h3\", {\n                __source: {\n                    fileName: \"/home/prankur/Desktop/personal/Portfolio-Site-V2/vscode-portfolio/pages/articles.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    \"Recent Posts from\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                        href: \"https://dev.to/prankurpandeyy\",\n                        target: \"_blank\",\n                        rel: \"noopener\",\n                        className: (_styles_ArticlesPage_module_css__WEBPACK_IMPORTED_MODULE_5___default().underline),\n                        __source: {\n                            fileName: \"/home/prankur/Desktop/personal/Portfolio-Site-V2/vscode-portfolio/pages/articles.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"dev.to\"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: (_styles_ArticlesPage_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                __source: {\n                    fileName: \"/home/prankur/Desktop/personal/Portfolio-Site-V2/vscode-portfolio/pages/articles.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: articles.map(function(article) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_ArticleCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        article: article,\n                        __source: {\n                            fileName: \"/home/prankur/Desktop/personal/Portfolio-Site-V2/vscode-portfolio/pages/articles.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        },\n                        __self: _this1\n                    }, article.id);\n                })\n            })\n        ]\n    }));\n};\n_s(ArticlesPage, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ArticlesPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticlesPage);\nvar _c;\n$RefreshReg$(_c, \"ArticlesPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDUTtBQUNHO0FBQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixHQUFLLENBQUNLLFlBQVksR0FBRyxRQUNyQixHQUQyQixDQUFDOzs7SUFDMUIsR0FBSyxDQUEyQkosR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFwQ0ssUUFBUSxHQUFpQkwsR0FBWSxLQUEzQk0sV0FBVyxHQUFJTixHQUFZO2FBRTdCTyxhQUFhO2VBQWJBLGNBQWE7O2FBQWJBLGNBQWE7UUFBYkEsY0FBYSwrS0FBNUIsUUFBUSxXQUF1QixDQUFDO2dCQUV0QkMsS0FBSzs7Ozs7OytCQUFTTCxpREFBUyxDQUMzQixDQUFxRDs7d0JBRGpESyxLQUFLO3dCQUlYRixXQUFXLENBQUNFLEtBQUssQ0FBQ0UsSUFBSTs7Ozs7O3dCQUV0QkMsT0FBTyxDQUFDQyxHQUFHOzs7Ozs7Ozs7OztRQUVmLENBQUM7ZUFWY0wsY0FBYTs7SUFZNUJSLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2ZRLGFBQWE7SUFDZixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsTUFBTTs7a0ZBRURNLENBQUU7Ozs7Ozs7O29CQUFDLENBQ2U7b0JBQUMsQ0FBRzt5RkFDcEJDLENBQUM7d0JBQ0FDLElBQUksRUFBQyxDQUErQjt3QkFDcENDLE1BQU0sRUFBQyxDQUFRO3dCQUNmQyxHQUFHLEVBQUMsQ0FBVTt3QkFDZEMsU0FBUyxFQUFFaEIsa0ZBQWdCOzs7Ozs7O2tDQUM1QixDQUVEOzs7O2lGQUVEa0IsQ0FBRztnQkFBQ0YsU0FBUyxFQUFFaEIsa0ZBQWdCOzs7Ozs7OzBCQUM3QkcsUUFBUSxDQUFDaUIsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsT0FBTztrQ0FDcEIsTUFBTSx3REFBTHRCLCtEQUFXO3dCQUFrQnNCLE9BQU8sRUFBRUEsT0FBTzs7Ozs7Ozt1QkFBNUJBLE9BQU8sQ0FBQ0MsRUFBRTs7Ozs7QUFLdEMsQ0FBQztHQXRDS3BCLFlBQVk7S0FBWkEsWUFBWTtBQXdDbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnRpY2xlcy5qc3g/YjBlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXJ0aWNsZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZUNhcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9BcnRpY2xlc1BhZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBBcnRpY2xlc1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoQXJ0aWNsZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IEJsb2dzID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBcImh0dHBzOi8vZGV2LnRvL2FwaS9hcnRpY2xlcz91c2VybmFtZT1wcmFua3VycGFuZGV5eVwiXG4gICAgICApO1xuXG4gICAgICBzZXRBcnRpY2xlcyhCbG9ncy5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hBcnRpY2xlcygpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMz5cbiAgICAgICAgUmVjZW50IFBvc3RzIGZyb217XCIgXCJ9XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZGV2LnRvL3ByYW5rdXJwYW5kZXl5XCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51bmRlcmxpbmV9XG4gICAgICAgID5cbiAgICAgICAgICBkZXYudG9cbiAgICAgICAgPC9hPlxuICAgICAgPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxuICAgICAgICAgIDxBcnRpY2xlQ2FyZCBrZXk9e2FydGljbGUuaWR9IGFydGljbGU9e2FydGljbGV9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlc1BhZ2U7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcnRpY2xlQ2FyZCIsInN0eWxlcyIsImF4aW9zIiwiQXJ0aWNsZXNQYWdlIiwiYXJ0aWNsZXMiLCJzZXRBcnRpY2xlcyIsImZldGNoQXJ0aWNsZXMiLCJCbG9ncyIsImdldCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaDMiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImNsYXNzTmFtZSIsInVuZGVybGluZSIsImRpdiIsImNvbnRhaW5lciIsIm1hcCIsImFydGljbGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/articles.jsx\n");

/***/ })

});