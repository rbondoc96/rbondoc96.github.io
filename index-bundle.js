/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 78:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(935);
;// CONCATENATED MODULE: ./src/context/UIContext.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var UIContext = /*#__PURE__*/(0,react.createContext)();
function UIProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react.useState)("light"),
      _useState2 = _slicedToArray(_useState, 2),
      uiTheme = _useState2[0],
      setUITheme = _useState2[1];

  var _useState3 = (0,react.useState)(window.innerWidth < 960),
      _useState4 = _slicedToArray(_useState3, 2),
      isUIMobile = _useState4[0],
      setIsUIMobile = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isSidebarActive = _useState6[0],
      setIsSidebarActive = _useState6[1];

  var _useState7 = (0,react.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      isNavBarShown = _useState8[0],
      setIsNavBarShown = _useState8[1];

  return /*#__PURE__*/react.createElement(UIContext.Provider, {
    value: {
      theme: [uiTheme, setUITheme],
      mobile: [isUIMobile, setIsUIMobile],
      sidebar: [isSidebarActive, setIsSidebarActive],
      navbar: [isNavBarShown, setIsNavBarShown]
    }
  }, children);
}
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(666);
// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(493);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
// EXTERNAL MODULE: ./node_modules/gsap/index.js + 2 modules
var gsap = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/components/Logo.js

function Logo() {
  return /*#__PURE__*/react.createElement("div", {
    className: "Logo"
  }, /*#__PURE__*/react.createElement("span", {
    className: "Logo-initials"
  }, "rb"), /*#__PURE__*/react.createElement("span", {
    className: "Logo-remaining"
  }, "ondoc"));
}
;// CONCATENATED MODULE: ./src/components/nav/NavLink.js


function NavLink(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return /*#__PURE__*/react.createElement("div", {
    className: "NavLink"
  }, /*#__PURE__*/react.createElement("a", {
    href: href
  }, children));
}
;// CONCATENATED MODULE: ./src/components/inputs/Button.js

function Button(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "medium" : _ref$size,
      onClick = _ref.onClick,
      children = _ref.children;
  var className = "button";
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: className
  }, children);
}
;// CONCATENATED MODULE: ./src/components/inputs/LinkButton.js

function LinkButton(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "medium" : _ref$size,
      onClick = _ref.onClick,
      children = _ref.children,
      href = _ref.href,
      classes = _ref.classes;
  var cssClass;
  if (classes) cssClass = "button ".concat(classes);else cssClass = "button";
  return /*#__PURE__*/react.createElement("a", {
    href: href,
    target: "_blank",
    className: "LinkButton"
  }, /*#__PURE__*/react.createElement("button", {
    className: cssClass
  }, children));
}
;// CONCATENATED MODULE: ./src/svg/Hamburger.js

function Hamburger(_ref) {
  var theme = _ref.theme,
      onClick = _ref.onClick,
      className = _ref.className;
  return /*#__PURE__*/react.createElement("svg", {
    className: className,
    onClick: onClick,
    fill: theme.toLowerCase() == "dark" ? "#FFF" : "#000",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 477.867 477.867"
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M256,0h-34.133C99.392,0.141,0.141,99.392,0,221.867c0,9.426,7.641,17.067,17.067,17.067H460.8 c9.426,0,17.067-7.641,17.067-17.067C477.726,99.392,378.475,0.141,256,0z M34.901,204.8 c8.941-96.613,89.939-170.551,186.965-170.667H256c97.026,0.116,178.025,74.053,186.965,170.667H34.901z"
  }))), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M460.8,341.333h-68.267c-3.693,0-7.286,1.198-10.24,3.413l-58.027,43.52l-58.027-43.52 c-2.954-2.216-6.547-3.413-10.24-3.413H17.067C7.641,341.333,0,348.974,0,358.4v34.133c0.056,47.105,38.228,85.277,85.333,85.333 h307.2c47.105-0.056,85.277-38.228,85.333-85.333V358.4C477.867,348.974,470.226,341.333,460.8,341.333z M443.733,392.533 c0,28.277-22.923,51.2-51.2,51.2h-307.2c-28.277,0-51.2-22.923-51.2-51.2v-17.067h216.183l63.71,47.787 c6.068,4.551,14.412,4.551,20.48,0l63.71-47.787h45.517V392.533z"
  }))), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M460.8,273.067H17.067C7.641,273.067,0,280.708,0,290.133S7.641,307.2,17.067,307.2H460.8 c9.426,0,17.067-7.641,17.067-17.067S470.226,273.067,460.8,273.067z"
  }))), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M153.6,102.4c-9.426,0-17.067,7.641-17.067,17.067v17.067c0,9.426,7.641,17.067,17.067,17.067s17.067-7.641,17.067-17.067 v-17.067C170.667,110.041,163.026,102.4,153.6,102.4z"
  }))), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M238.933,102.4c-9.426,0-17.067,7.641-17.067,17.067v17.067c0,9.426,7.641,17.067,17.067,17.067S256,145.959,256,136.533 v-17.067C256,110.041,248.359,102.4,238.933,102.4z"
  }))), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M324.267,102.4c-9.426,0-17.067,7.641-17.067,17.067v17.067c0,9.426,7.641,17.067,17.067,17.067 c9.426,0,17.067-7.641,17.067-17.067v-17.067C341.333,110.041,333.692,102.4,324.267,102.4z"
  }))), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null));
}
;// CONCATENATED MODULE: ./public/pdfs/Rodrigo Bondoc Resume.pdf
/* harmony default export */ const Rodrigo_Bondoc_Resume = (__webpack_require__.p + "assets/Rodrigo Bondoc Resume.pdf");
;// CONCATENATED MODULE: ./src/components/nav/NavBar.js
function NavBar_slicedToArray(arr, i) { return NavBar_arrayWithHoles(arr) || NavBar_iterableToArrayLimit(arr, i) || NavBar_unsupportedIterableToArray(arr, i) || NavBar_nonIterableRest(); }

function NavBar_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function NavBar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return NavBar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return NavBar_arrayLikeToArray(o, minLen); }

function NavBar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function NavBar_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function NavBar_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function NavBar() {
  var _useContext = (0,react.useContext)(UIContext),
      theme = _useContext.theme,
      mobile = _useContext.mobile,
      sidebar = _useContext.sidebar,
      navbar = _useContext.navbar;

  var _theme = NavBar_slicedToArray(theme, 2),
      uiTheme = _theme[0],
      setUITheme = _theme[1];

  var _mobile = NavBar_slicedToArray(mobile, 2),
      isMobile = _mobile[0],
      setIsMobile = _mobile[1];

  var _sidebar = NavBar_slicedToArray(sidebar, 2),
      isSidebarActive = _sidebar[0],
      setIsSidebarActive = _sidebar[1];

  var _navbar = NavBar_slicedToArray(navbar, 2),
      isNavBarShown = _navbar[0],
      setIsNavBarShown = _navbar[1];

  var toggleSidebar = function toggleSidebar(event) {
    if (isMobile) {
      setIsSidebarActive(!isSidebarActive);
    }
  };

  react.useEffect(function () {
    var timeline = gsap/* default.timeline */.ZP.timeline();
    timeline.from(".NavBar-logo", {
      opacity: 0,
      duration: 0.5,
      x: "-10%"
    });
    if (isMobile) timeline.from(".NavBar-toggle", {
      opacity: 0,
      duration: 0.5,
      x: "-10%"
    });
    timeline.from(".NavLink, .NavBar-links .LinkButton", {
      opacity: 0,
      duration: 0.5,
      x: "-10%"
    });
  }, []);
  return /*#__PURE__*/react.createElement("nav", {
    className: "".concat(isMobile ? "NavBar--mobile" : "NavBar", " ").concat(isNavBarShown ? "" : "NavBar--hidden")
  }, /*#__PURE__*/react.createElement("div", {
    className: "NavBar-inner"
  }, /*#__PURE__*/react.createElement("a", {
    className: "NavBar-logo",
    href: window.location.href.split("#")[0],
    target: "_self"
  }, /*#__PURE__*/react.createElement(Logo, null)), /*#__PURE__*/react.createElement("div", {
    className: isMobile && !isSidebarActive ? "NavBar-links--hidden" : "NavBar-links"
  }, isMobile && /*#__PURE__*/react.createElement("div", {
    className: "NavBar-links--sidebar-toggle",
    onClick: toggleSidebar
  }, "X"), /*#__PURE__*/react.createElement(NavLink, {
    href: "#about",
    children: "About"
  }), /*#__PURE__*/react.createElement(NavLink, {
    href: "#work",
    children: "Work"
  }), /*#__PURE__*/react.createElement(NavLink, {
    href: "#contact",
    children: "Contact"
  }), /*#__PURE__*/react.createElement(LinkButton, {
    children: "Resume",
    href: Rodrigo_Bondoc_Resume
  })), isMobile && /*#__PURE__*/react.createElement(Hamburger, {
    className: "NavBar-toggle",
    theme: uiTheme,
    onClick: toggleSidebar
  })));
}
;// CONCATENATED MODULE: ./src/views/Home.js



function Home() {
  return /*#__PURE__*/react.createElement("div", {
    className: "Home"
  }, /*#__PURE__*/react.createElement("div", {
    className: "Home-left"
  }, /*#__PURE__*/react.createElement("h1", {
    className: "Home-header"
  }, /*#__PURE__*/react.createElement("span", null, "Hi there!"), /*#__PURE__*/react.createElement("span", null, "I'm Rodrigo.")), /*#__PURE__*/react.createElement("p", {
    className: "Home-text"
  }, "I'm a software developer based in San Diego, CA, U.S.A. who specializes in building web applications."), /*#__PURE__*/react.createElement("div", {
    className: "Home-button"
  }, /*#__PURE__*/react.createElement(LinkButton, {
    children: "Say Hello",
    href: "mailto:rbondoc96@gmail.com"
  }))));
}
;// CONCATENATED MODULE: ./src/components/content/Header.js

function Header(_ref) {
  var children = _ref.children,
      classes = _ref.classes;
  var cssClass;
  if (classes) cssClass = "Header ".concat(classes);else cssClass = "Header";
  return /*#__PURE__*/react.createElement("div", {
    className: cssClass
  }, /*#__PURE__*/react.createElement("h2", {
    className: "Header-text"
  }, children), /*#__PURE__*/react.createElement("div", {
    className: "Header-underline"
  }));
}
;// CONCATENATED MODULE: ./src/components/content/InlineLink.js

function InlineLink(_ref) {
  var href = _ref.href,
      children = _ref.children,
      _ref$underline = _ref.underline,
      underline = _ref$underline === void 0 ? true : _ref$underline;
  return /*#__PURE__*/react.createElement("span", {
    className: "InlineLink"
  }, /*#__PURE__*/react.createElement("a", {
    href: href,
    target: "_blank"
  }, children), underline && /*#__PURE__*/react.createElement("span", {
    className: "InlineLink-underline"
  }));
}
;// CONCATENATED MODULE: ./src/svg/Hardware.js

function Hardware(_ref) {
  var theme = _ref.theme,
      onClick = _ref.onClick,
      className = _ref.className;
  return /*#__PURE__*/react.createElement("svg", {
    fill: theme.toLowerCase() == "dark" ? "#FFF" : "#000",
    onClick: onClick,
    className: className,
    height: "512",
    viewBox: "0 0 74 74",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("path", {
    d: "m60 64h-46a4 4 0 0 1 -4-4v-46a4 4 0 0 1 4-4h46a4 4 0 0 1 4 4v46a4 4 0 0 1 -4 4zm-46-52a2 2 0 0 0 -2 2v46a2 2 0 0 0 2 2h46a2 2 0 0 0 2-2v-46a2 2 0 0 0 -2-2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m17 47.062a1 1 0 0 1 -1-1v-1.874a1 1 0 0 1 2 0v1.874a1 1 0 0 1 -1 1z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m56 58h-38a2 2 0 0 1 -2-2v-4.938a1 1 0 0 1 2 0v4.938h38v-38h-38v21.188a1 1 0 0 1 -2 0v-21.188a2 2 0 0 1 2-2h38a2 2 0 0 1 2 2v38a2 2 0 0 1 -2 2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m55 12a1 1 0 0 1 -1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1 -1 1z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m47.8 12a1 1 0 0 1 -1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1 -1 1z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m40.6 12a1 1 0 0 1 -1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1 -1 1z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m33.4 12a1 1 0 0 1 -1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1 -1 1z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m26.2 12a1 1 0 0 1 -1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1 -1 1z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m19 12a1 1 0 0 1 -1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1 -1 1z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m55 72a1 1 0 0 1 -1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1 -1 1z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m47.8 72a1 1 0 0 1 -1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1 -1 1z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m40.6 72a1 1 0 0 1 -1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1 -1 1z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m33.4 72a1 1 0 0 1 -1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1 -1 1z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m26.2 72a1 1 0 0 1 -1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1 -1 1z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m19 72a1 1 0 0 1 -1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1 -1 1z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m71 56h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m71 48.8h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m71 41.6h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m71 34.4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m71 27.2h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m71 20h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m11 56h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m11 48.8h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m11 41.6h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m11 34.4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m11 27.2h-8a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m11 20h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m30 26h-13a1 1 0 0 1 0-2h13a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m32.781 28.781a3.781 3.781 0 1 1 3.781-3.781 3.785 3.785 0 0 1 -3.781 3.781zm0-5.562a1.781 1.781 0 1 0 1.781 1.781 1.783 1.783 0 0 0 -1.781-1.781z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m57 47h-9.44a1 1 0 0 1 0-2h9.44a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m44.781 49.781a3.781 3.781 0 1 1 3.781-3.781 3.785 3.785 0 0 1 -3.781 3.781zm0-5.562a1.781 1.781 0 1 0 1.781 1.781 1.783 1.783 0 0 0 -1.781-1.781z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m27.781 37.789a3.781 3.781 0 1 1 3.781-3.781 3.785 3.785 0 0 1 -3.781 3.781zm0-5.562a1.781 1.781 0 1 0 1.781 1.781 1.782 1.782 0 0 0 -1.781-1.781z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m25 35h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m25.5 50.562a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1 -3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m29.78 58a1 1 0 0 1 -1-1v-5.786l-1.98-1.977a1 1 0 1 1 1.414-1.414l2.27 2.27a1 1 0 0 1 .293.707v6.2a1 1 0 0 1 -.997 1z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m45.062 30.828a3.5 3.5 0 1 1 3.5-3.5 3.505 3.505 0 0 1 -3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m46.53 26.317a1 1 0 0 1 -.707-1.707l2.27-2.27a1 1 0 0 1 .707-.293h8.2a1 1 0 0 1 0 2h-7.786l-1.977 1.977a.993.993 0 0 1 -.707.293z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m45.281 40.413a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1 -3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m46.75 35.9a1 1 0 0 1 -.707-1.707l2.27-2.27a1 1 0 0 1 .707-.293h7.98a1 1 0 0 1 0 2h-7.566l-1.977 1.977a1 1 0 0 1 -.707.293z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m34.808 44.781a3.781 3.781 0 1 1 3.781-3.781 3.785 3.785 0 0 1 -3.781 3.781zm0-5.562a1.781 1.781 0 1 0 1.781 1.781 1.783 1.783 0 0 0 -1.781-1.781z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m38 58a1 1 0 0 1 -1-1v-5.006l-2.9-2.9a1 1 0 0 1 -.293-.707v-4.607a1 1 0 0 1 2 0v4.2l2.9 2.9a1 1 0 0 1 .293.7v5.42a1 1 0 0 1 -1 1z"
  }));
}
;// CONCATENATED MODULE: ./src/svg/Programming.js

function Programming(_ref) {
  var theme = _ref.theme,
      onClick = _ref.onClick,
      className = _ref.className;
  return /*#__PURE__*/react.createElement("svg", {
    className: className,
    onClick: onClick,
    fill: theme.toLowerCase() == "dark" ? "#FFF" : "#000",
    height: "512",
    viewBox: "0 0 512 512",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "m474.5 71.5h-26.261c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h26.261c12.406 0 22.5 10.094 22.5 22.5v34.5h-482v-34.5c0-12.406 10.093-22.5 22.5-22.5h377.809c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-377.809c-20.678 0-37.5 16.822-37.5 37.5v82.681c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-33.181h482v193.366c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-242.866c0-20.678-16.822-37.5-37.5-37.5z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m504.5 375.994c-4.143 0-7.5 3.357-7.5 7.5v19.506c0 12.406-10.094 22.5-22.5 22.5h-437c-12.407 0-22.5-10.094-22.5-22.5v-179.133c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v179.133c0 20.678 16.822 37.5 37.5 37.5h437c20.678 0 37.5-16.822 37.5-37.5v-19.506c0-4.142-3.357-7.5-7.5-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m108.482 234.457c-2.929-2.928-7.678-2.928-10.606 0l-45.07 45.07c-1.407 1.407-2.197 3.314-2.197 5.304s.79 3.896 2.197 5.304l44.474 44.474c1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.196c2.929-2.93 2.929-7.678 0-10.607l-39.171-39.17 39.767-39.767c2.93-2.93 2.93-7.678 0-10.608z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m209.344 334.608c1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.196l44.475-44.474c1.406-1.407 2.196-3.314 2.196-5.304s-.79-3.896-2.196-5.304l-45.071-45.07c-2.929-2.928-7.678-2.928-10.606 0-2.929 2.93-2.929 7.678 0 10.607l39.768 39.767-39.171 39.17c-2.93 2.931-2.93 7.679-.001 10.608z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m131.99 362.234c3.025 0 5.876-1.844 7.013-4.841l53.294-140.398c1.47-3.873-.478-8.204-4.35-9.674-3.872-1.471-8.204.478-9.673 4.35l-53.294 140.4c-1.47 3.872.478 8.203 4.35 9.673.876.333 1.775.49 2.66.49z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m33.006 115.371c0 12.406 10.093 22.5 22.5 22.5s22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5-22.5 10.094-22.5 22.5zm30 0c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5 3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m91.166 115.371c0 12.406 10.093 22.5 22.5 22.5s22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5-22.5 10.094-22.5 22.5zm30 0c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5 3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m149.325 115.371c0 12.406 10.093 22.5 22.5 22.5s22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5-22.5 10.094-22.5 22.5zm30 0c0 4.136-3.364 7.5-7.5 7.5s-7.5-3.364-7.5-7.5 3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m335.5 242.368h47c12.406 0 22.5-10.094 22.5-22.5s-10.094-22.5-22.5-22.5h-47c-12.406 0-22.5 10.094-22.5 22.5s10.094 22.5 22.5 22.5zm0-30h47c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5h-47c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m335.5 302.368h124c12.406 0 22.5-10.094 22.5-22.5s-10.094-22.5-22.5-22.5h-124c-12.406 0-22.5 10.094-22.5 22.5s10.094 22.5 22.5 22.5zm0-30h124c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5h-124c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m335.5 362.368h87.165c12.406 0 22.5-10.094 22.5-22.5s-10.094-22.5-22.5-22.5h-87.165c-12.406 0-22.5 10.094-22.5 22.5s10.094 22.5 22.5 22.5zm0-30h87.165c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5h-87.165c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5z"
  }))));
}
;// CONCATENATED MODULE: ./src/svg/Frameworks.js

function Frameworks(_ref) {
  var theme = _ref.theme,
      onClick = _ref.onClick,
      className = _ref.className;
  return /*#__PURE__*/react.createElement("svg", {
    className: className,
    onClick: onClick,
    fill: theme.toLowerCase() == "dark" ? "#FFF" : "#000",
    height: "512",
    viewBox: "0 0 64 64",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "m35 8c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3zm-4 0c0-.552.449-1 1-1s1 .448 1 1-.449 1-1 1-1-.448-1-1z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m6.5 41.4c-1.433.828-1.925 2.666-1.099 4.099.555.961 1.565 1.499 2.604 1.499.508 0 1.023-.129 1.495-.4 1.432-.828 1.924-2.666 1.098-4.099-.828-1.432-2.667-1.925-4.098-1.099zm2 3.465c-.479.277-1.091.111-1.366-.366-.276-.478-.111-1.091.366-1.366.477-.276 1.09-.11 1.365.366.276.478.111 1.091-.365 1.366z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m57.5 41.4c-1.432-.825-3.271-.332-4.098 1.099-.827 1.433-.334 3.271 1.098 4.099h.001c.471.271.986.4 1.494.4 1.038 0 2.049-.538 2.604-1.499.827-1.433.334-3.27-1.099-4.099zm-.633 3.099c-.275.478-.889.643-1.365.366-.478-.275-.642-.889-.366-1.366.275-.478.888-.644 1.365-.366.477.275.642.888.366 1.366z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m59.501 37.937c-1.619-.935-3.504-1.186-5.312-.699-1.617.433-2.992 1.41-3.935 2.771l-7.254-3.628v-8.763l11.082-5.542c.664.848 1.565 1.469 2.624 1.753.431.116.868.173 1.302.173.866 0 1.721-.228 2.492-.672 1.157-.668 1.984-1.746 2.33-3.036s.168-2.638-.5-3.794-1.746-1.983-3.036-2.329c-1.289-.349-2.637-.168-3.794.499-1.157.668-1.984 1.746-2.33 3.036-.231.861-.208 1.743.018 2.581l-10.188 5.095v-6.382h-10v-4.08c3.387-.488 6-3.401 6-6.92 0-3.859-3.14-7-7-7s-7 3.141-7 7c0 3.519 2.613 6.432 6 6.92v4.08h-10v6.381l-10.188-5.094c.226-.838.249-1.72.018-2.581-.346-1.29-1.173-2.368-2.33-3.036-1.157-.667-2.505-.848-3.794-.499-1.29.346-2.368 1.173-3.036 2.329s-.846 2.504-.5 3.794 1.173 2.368 2.33 3.036c.771.444 1.625.672 2.492.672.435 0 .872-.057 1.302-.173 1.059-.284 1.96-.905 2.623-1.753l11.083 5.541v8.763l-7.255 3.627c-.942-1.361-2.318-2.338-3.935-2.771-1.806-.485-3.692-.236-5.312.699-3.342 1.931-4.492 6.22-2.563 9.563 1.295 2.243 3.652 3.499 6.074 3.499 1.187 0 2.389-.302 3.488-.937 2.923-1.688 4.169-5.181 3.145-8.266l6.358-3.177v6.383h10v8.101c-2.279.465-4 2.484-4 4.899 0 2.757 2.243 5 5 5s5-2.243 5-5c0-2.414-1.721-4.434-4-4.899v-8.101h10v-6.383l6.356 3.178c-1.024 3.086.222 6.578 3.145 8.266 1.1.635 2.302.937 3.488.937 2.421 0 4.779-1.256 6.074-3.499 1.93-3.343.78-7.632-2.562-9.562zm-4.399-19.713c.208-.773.704-1.421 1.398-1.821.471-.272.986-.401 1.495-.401 1.038 0 2.048.538 2.603 1.499.4.694.507 1.502.3 2.276-.208.773-.704 1.421-1.398 1.821-1.432.828-3.271.335-4.098-1.098-.401-.694-.507-1.502-.3-2.276zm-28.102-10.224c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5zm-18.402 12.5c-.827 1.433-2.666 1.926-4.098 1.098-.694-.4-1.19-1.048-1.398-1.821-.207-.774-.101-1.582.3-2.276.555-.961 1.565-1.499 2.603-1.499.509 0 1.024.129 1.495.401.694.4 1.19 1.048 1.398 1.821.207.774.101 1.582-.3 2.276zm1.901 27.829c-2.389 1.378-5.452.558-6.83-1.83s-.557-5.451 1.83-6.83c.771-.445 1.625-.673 2.492-.673.435 0 .872.058 1.302.173 1.29.346 2.368 1.173 3.036 2.33 1.379 2.388.557 5.451-1.83 6.83zm24.501 9.671c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm6-15h-18v-22h18zm19.331 3.499c-1.377 2.389-4.443 3.209-6.83 1.83s-3.208-4.442-1.83-6.83c.668-1.157 1.746-1.984 3.036-2.33 1.289-.345 2.637-.169 3.794.5 2.387 1.379 3.208 4.442 1.83 6.83z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m39 31h-6v2h-4v2h-4v6h14zm-12 6h2v2h-2zm4 2v-4h2v4zm6 0h-2v-6h2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m25 23h2v2h-2z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m29 23h10v2h-10z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m25 27h14v2h-14z"
  })));
}
;// CONCATENATED MODULE: ./src/svg/Software.js

function Software(_ref) {
  var theme = _ref.theme,
      onClick = _ref.onClick,
      className = _ref.className;
  return /*#__PURE__*/react.createElement("svg", {
    className: className,
    onClick: onClick,
    fill: theme.toLowerCase() == "dark" ? "#FFF" : "#000",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M477.858,8.533H34.142C15.317,8.533,0,23.851,0,42.675v281.591c0,4.71,3.823,8.533,8.533,8.533h494.933 c4.71,0,8.533-3.823,8.533-8.533V42.675C512,23.851,496.683,8.533,477.858,8.533z M494.933,315.733H17.067V42.675 c0-9.421,7.663-17.075,17.075-17.075h443.716c9.412,0,17.075,7.654,17.075,17.075V315.733z"
  }))), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M503.467,315.733H8.533c-4.71,0-8.533,3.823-8.533,8.533v42.658c0,18.825,15.317,34.142,34.142,34.142h443.716 c18.825,0,34.142-15.317,34.142-34.142v-42.658C512,319.556,508.177,315.733,503.467,315.733z M494.933,366.925 c0,9.421-7.663,17.075-17.075,17.075H34.142c-9.412,0-17.075-7.654-17.075-17.075V332.8h477.867V366.925z"
  }))), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M281.6,349.867h-51.2c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h51.2c4.71,0,8.533-3.823,8.533-8.533 S286.31,349.867,281.6,349.867z"
  }))), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M469.333,42.667H42.667c-4.71,0-8.533,3.823-8.533,8.533v273.067c0,4.71,3.823,8.533,8.533,8.533h426.667 c4.71,0,8.533-3.823,8.533-8.533V51.2C477.867,46.49,474.044,42.667,469.333,42.667z M460.8,315.733H51.2v-256h409.6V315.733z"
  }))), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M366.933,452.267H145.067c-14.114,0-25.6,11.486-25.6,25.6s11.486,25.6,25.6,25.6h221.867c14.114,0,25.6-11.486,25.6-25.6 S381.047,452.267,366.933,452.267z M366.933,486.4H145.067c-4.71,0-8.533-3.831-8.533-8.533s3.823-8.533,8.533-8.533h221.867 c4.71,0,8.533,3.831,8.533,8.533S371.644,486.4,366.933,486.4z"
  }))), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M349.867,452.267c-28.314,0-42.667-20.096-42.667-59.733c0-4.71-3.823-8.533-8.533-8.533h-85.333 c-4.71,0-8.533,3.823-8.533,8.533c0,39.637-14.353,59.733-42.667,59.733c-4.71,0-8.533,3.823-8.533,8.533 c0,4.71,3.823,8.533,8.533,8.533h187.733c4.71,0,8.533-3.823,8.533-8.533C358.4,456.09,354.577,452.267,349.867,452.267z M203.699,452.267c10.505-11.639,16.691-28.971,17.937-51.2h68.736c1.237,22.229,7.424,39.561,17.937,51.2H203.699z"
  }))), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M407.757,259.959l-20.599-20.599l11.46-11.46c2.125-2.125,2.978-5.214,2.244-8.124c-0.734-2.91-2.944-5.214-5.82-6.084 l-85.333-25.6c-3.012-0.905-6.263-0.077-8.482,2.142c-2.227,2.219-3.046,5.478-2.142,8.482l25.6,85.333 c0.862,2.884,3.174,5.094,6.084,5.828c2.901,0.717,5.999-0.12,8.124-2.244l12.066-12.075l20.599,20.608 c1.596,1.604,3.772,2.5,6.033,2.5s4.437-0.896,6.033-2.5l24.132-24.141C411.093,268.689,411.093,263.296,407.757,259.959z M377.591,278.067l-18.756-18.765c-2.176-2.176-5.026-3.26-7.876-3.26c-2.859,0-5.709,1.092-7.876,3.251l-6.161,6.161 l-16.939-56.465l56.465,16.939l-6.605,6.605c-1.818,1.826-2.816,4.25-2.816,6.827c0,2.586,1.007,5.026,2.833,6.835l19.797,19.797 L377.591,278.067z"
  }))), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M358.4,76.8H119.467c-4.71,0-8.533,3.823-8.533,8.533V128c0,4.71,3.823,8.533,8.533,8.533H358.4 c4.71,0,8.533-3.823,8.533-8.533V85.333C366.933,80.623,363.11,76.8,358.4,76.8z M349.867,119.467H128v-25.6h221.867V119.467z"
  }))), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M221.867,170.667H153.6c-4.71,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.823,8.533,8.533,8.533h68.267 c4.71,0,8.533-3.823,8.533-8.533V179.2C230.4,174.49,226.577,170.667,221.867,170.667z M213.333,204.8h-51.2v-17.067h51.2V204.8z"
  }))), /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M358.4,76.8H119.467c-4.71,0-8.533,3.823-8.533,8.533v162.133c0,4.71,3.823,8.533,8.533,8.533h203.145 c2.705,0,5.239-1.271,6.844-3.439c1.613-2.167,2.108-4.966,1.331-7.552l-10.803-36.019l35.968,10.795 c2.586,0.777,5.385,0.282,7.543-1.331c2.167-1.604,3.439-4.147,3.439-6.844V85.333C366.933,80.623,363.11,76.8,358.4,76.8z M349.867,200.141L309.7,188.092c-3.012-0.905-6.263-0.077-8.482,2.142c-2.227,2.227-3.046,5.478-2.142,8.491l12.066,40.209H128 V93.867h221.867V200.141z"
  }))), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null));
}
;// CONCATENATED MODULE: ./src/components/content/SkillList.js
function SkillList_slicedToArray(arr, i) { return SkillList_arrayWithHoles(arr) || SkillList_iterableToArrayLimit(arr, i) || SkillList_unsupportedIterableToArray(arr, i) || SkillList_nonIterableRest(); }

function SkillList_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SkillList_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SkillList_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SkillList_arrayLikeToArray(o, minLen); }

function SkillList_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SkillList_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SkillList_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }









function animateList() {
  var animProps = {
    duration: 0.3,
    opacity: 0,
    y: "10%"
  };
  gsap/* default.from */.ZP.from(".SkillList-content", animProps);
}

function SkillList(_ref) {
  _objectDestructuringEmpty(_ref);

  var _useContext = (0,react.useContext)(UIContext),
      theme = _useContext.theme,
      mobile = _useContext.mobile,
      sidebar = _useContext.sidebar,
      navbar = _useContext.navbar;

  var _theme = SkillList_slicedToArray(theme, 2),
      uiTheme = _theme[0],
      setUITheme = _theme[1];

  var _mobile = SkillList_slicedToArray(mobile, 2),
      isMobile = _mobile[0],
      setIsMobile = _mobile[1];

  var _sidebar = SkillList_slicedToArray(sidebar, 2),
      isSidebarActive = _sidebar[0],
      setIsSidebarActive = _sidebar[1];

  var _navbar = SkillList_slicedToArray(navbar, 2),
      isNavBarShown = _navbar[0],
      setIsNavBarShown = _navbar[1];

  var _useState = (0,react.useState)("hardware"),
      _useState2 = SkillList_slicedToArray(_useState, 2),
      selectedList = _useState2[0],
      setSelectedList = _useState2[1];

  return /*#__PURE__*/react.createElement("div", {
    className: "SkillList"
  }, /*#__PURE__*/react.createElement("div", {
    className: "SkillList-icons"
  }, /*#__PURE__*/react.createElement("div", {
    className: "SkillList-icon ".concat(selectedList == "hardware" && "SkillList-icon--selected"),
    onClick: function onClick() {
      setSelectedList("hardware");
      animateList();
    }
  }, /*#__PURE__*/react.createElement(Hardware, {
    theme: uiTheme
  })), /*#__PURE__*/react.createElement("div", {
    className: "SkillList-icon ".concat(selectedList == "programming" && "SkillList-icon--selected"),
    onClick: function onClick() {
      setSelectedList("programming");
      animateList();
    }
  }, /*#__PURE__*/react.createElement(Programming, {
    theme: uiTheme
  })), /*#__PURE__*/react.createElement("div", {
    className: "SkillList-icon ".concat(selectedList == "frameworks" && "SkillList-icon--selected"),
    onClick: function onClick() {
      setSelectedList("frameworks");
      animateList();
    }
  }, /*#__PURE__*/react.createElement(Frameworks, {
    theme: uiTheme
  })), /*#__PURE__*/react.createElement("div", {
    className: "SkillList-icon ".concat(selectedList == "software" && "SkillList-icon--selected"),
    onClick: function onClick() {
      setSelectedList("software");
      animateList();
    }
  }, /*#__PURE__*/react.createElement(Software, {
    theme: uiTheme
  }))), /*#__PURE__*/react.createElement("div", {
    className: "SkillList-content"
  }, selectedList == "hardware" && /*#__PURE__*/react.createElement("div", {
    className: "SkillList-content-item SkillList-content-software"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "SkillList-content-item-header"
  }, "Hardware"), /*#__PURE__*/react.createElement("ul", {
    className: "SkillList-content-item-list"
  }, /*#__PURE__*/react.createElement("li", null, "Microcontrollers"), /*#__PURE__*/react.createElement("li", null, "Serial Communications (I", /*#__PURE__*/react.createElement("sup", null, "2"), "C, CAN, UART)"), /*#__PURE__*/react.createElement("li", null, "Lab Equipment (O-scopes, signal generators, DMMs)"))), selectedList == "programming" && /*#__PURE__*/react.createElement("div", {
    className: "SkillList-content-item SkillList-content-software"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "SkillList-content-item-header"
  }, "Programming Languages"), /*#__PURE__*/react.createElement("ul", {
    className: "SkillList-content-item-list"
  }, /*#__PURE__*/react.createElement("li", null, "C/C++"), /*#__PURE__*/react.createElement("li", null, "Python"), /*#__PURE__*/react.createElement("li", null, "ES6 JavaScript"), /*#__PURE__*/react.createElement("li", null, "Node.js"), /*#__PURE__*/react.createElement("li", null, "HTML & (S)CSS"))), selectedList == "frameworks" && /*#__PURE__*/react.createElement("div", {
    className: "SkillList-content-item SkillList-content-software"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "SkillList-content-item-header"
  }, "Libraries & Frameworks"), /*#__PURE__*/react.createElement("ul", {
    className: "SkillList-content-item-list"
  }, /*#__PURE__*/react.createElement("li", null, "React"), /*#__PURE__*/react.createElement("li", null, "Django"), /*#__PURE__*/react.createElement("li", null, "Cypress"), /*#__PURE__*/react.createElement("li", null, "Express.js"))), selectedList == "software" && /*#__PURE__*/react.createElement("div", {
    className: "SkillList-content-item SkillList-content-software"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "SkillList-content-item-header"
  }, "Tools & Other Software"), /*#__PURE__*/react.createElement("ul", {
    className: "SkillList-content-item-list"
  }, /*#__PURE__*/react.createElement("li", null, "Webpack"), /*#__PURE__*/react.createElement("li", null, "VS Code"), /*#__PURE__*/react.createElement("li", null, "PostgreSQL"), /*#__PURE__*/react.createElement("li", null, "Chrome DevTools"), /*#__PURE__*/react.createElement("li", null, "Altium CircuitMaker")))));
}
;// CONCATENATED MODULE: ./public/imgs/me_london.png
/* harmony default export */ const me_london = (__webpack_require__.p + "assets/me_london.png");
;// CONCATENATED MODULE: ./src/views/About.js
function About_slicedToArray(arr, i) { return About_arrayWithHoles(arr) || About_iterableToArrayLimit(arr, i) || About_unsupportedIterableToArray(arr, i) || About_nonIterableRest(); }

function About_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function About_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return About_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return About_arrayLikeToArray(o, minLen); }

function About_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function About_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function About_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function About() {
  var _useContext = (0,react.useContext)(UIContext),
      mobile = _useContext.mobile;

  var _mobile = About_slicedToArray(mobile, 2),
      isMobile = _mobile[0],
      setIsMobile = _mobile[1];

  var className = isMobile ? "About--mobile" : "About";
  return /*#__PURE__*/react.createElement("div", {
    className: className,
    id: "about"
  }, /*#__PURE__*/react.createElement(Header, {
    classes: "js-About-Header",
    children: "About Me"
  }), /*#__PURE__*/react.createElement("div", {
    className: "About-left"
  }, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("span", null, "Welcome! My name's Rodrigo and my pronouns are ", /*#__PURE__*/react.createElement("span", {
    className: "fw-bold"
  }, "he"), ", ", /*#__PURE__*/react.createElement("span", {
    className: "fw-bold"
  }, "him"), ", and ", /*#__PURE__*/react.createElement("span", {
    className: "fw-bold"
  }, "his"), ". I'm a self-taught web developer based in sunny San Diego, CA, U.S.A."), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "I started programming while I was pursuing my degree in Electrical Engineering at ", /*#__PURE__*/react.createElement(InlineLink, {
    children: "San Diego State University",
    href: "https://electrical.sdsu.edu"
  }), ". I tinkered around with HTML & CSS, but focused on C, Java, and Python. It wasn't until I graudated that I started to dive deeper into web development and began teaching myself.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "Since then, I've gotten the opportunity to work in a variety of positions where I've had the chance to work ", /*#__PURE__*/react.createElement(InlineLink, {
    href: "https://www.raveon.com/",
    children: "with radio devices"
  }), ", ", /*#__PURE__*/react.createElement(InlineLink, {
    href: "https://www.ayahealthcare.com/",
    children: "travel nursing compliance"
  }), ", and now with web and mobile ", /*#__PURE__*/react.createElement(InlineLink, {
    href: "https://www.covance.com/",
    children: "applications used in clinical trials"
  }), ".", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "My favorite hobby is playing video games. I grew up with Playstation consoles, but now I also play on my PC. But when I'm not at my desk, I like to visit the beach, play ", /*#__PURE__*/react.createElement(InlineLink, {
    href: "https://www.varsitygayleague.com/",
    children: "kickball"
  }), " on weekends, and spend time with loved ones.", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "Here are some technologies I have experience with:"), /*#__PURE__*/react.createElement(SkillList, null)), /*#__PURE__*/react.createElement("div", {
    className: "About-right"
  }, /*#__PURE__*/react.createElement("img", {
    src: me_london
  })));
}
;// CONCATENATED MODULE: ./src/svg/Github.js

function Github(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      theme = _ref.theme;
  return /*#__PURE__*/react.createElement("svg", {
    className: className,
    onClick: onClick,
    fill: theme.toLowerCase() == "dark" ? "#FFF" : "#000",
    x: "0px",
    y: "0px",
    width: "438.549px",
    height: "438.549px",
    viewBox: "0 0 438.549 438.549"
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"
  })), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null));
}
;// CONCATENATED MODULE: ./src/components/content/ProjectCard.js
function ProjectCard_slicedToArray(arr, i) { return ProjectCard_arrayWithHoles(arr) || ProjectCard_iterableToArrayLimit(arr, i) || ProjectCard_unsupportedIterableToArray(arr, i) || ProjectCard_nonIterableRest(); }

function ProjectCard_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function ProjectCard_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ProjectCard_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ProjectCard_arrayLikeToArray(o, minLen); }

function ProjectCard_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ProjectCard_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ProjectCard_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function ProjectCard(_ref) {
  var name = _ref.name,
      status = _ref.status,
      github = _ref.github,
      description = _ref.description,
      tags = _ref.tags;

  var _useContext = (0,react.useContext)(UIContext),
      theme = _useContext.theme,
      mobile = _useContext.mobile,
      sidebar = _useContext.sidebar,
      navbar = _useContext.navbar;

  var _theme = ProjectCard_slicedToArray(theme, 2),
      uiTheme = _theme[0],
      setUITheme = _theme[1];

  var _mobile = ProjectCard_slicedToArray(mobile, 2),
      isMobile = _mobile[0],
      setIsMobile = _mobile[1];

  var _sidebar = ProjectCard_slicedToArray(sidebar, 2),
      isSidebarActive = _sidebar[0],
      setIsSidebarActive = _sidebar[1];

  var _navbar = ProjectCard_slicedToArray(navbar, 2),
      isNavBarShown = _navbar[0],
      setIsNavBarShown = _navbar[1];

  var status__formatted = status.charAt(0) + status.substring(1);
  return /*#__PURE__*/react.createElement("div", {
    className: "ProjectCard"
  }, /*#__PURE__*/react.createElement("h3", {
    className: "ProjectCard-header"
  }, name), /*#__PURE__*/react.createElement("a", {
    className: "ProjectCard-github",
    href: github,
    target: "_blank"
  }, /*#__PURE__*/react.createElement(Github, {
    theme: uiTheme
  })), /*#__PURE__*/react.createElement("p", {
    className: "ProjectCard-status"
  }, /*#__PURE__*/react.createElement("span", {
    className: "ProjectCard-status-label"
  }, "Status:"), /*#__PURE__*/react.createElement("span", null, status__formatted)), /*#__PURE__*/react.createElement("p", {
    className: "ProjectCard-description"
  }, description), /*#__PURE__*/react.createElement("ul", {
    className: "ProjectCard-tags"
  }, tags && tags.map(function (elem, idx) {
    return /*#__PURE__*/react.createElement("li", {
      key: idx,
      className: "ProjectCard-tag"
    }, elem);
  })));
}
;// CONCATENATED MODULE: ./src/components/content/Timeline.js





function TimelineBullet(_ref) {
  var type = _ref.type,
      date = _ref.date,
      lightText = _ref.lightText,
      boldText = _ref.boldText,
      boldHref = _ref.boldHref;
  // Types: Personal, Work, Education
  var colorClass;

  switch (type) {
    case "Work":
      colorClass = "TimelineBullet--work";
      break;

    case "Education":
      colorClass = "TimelineBullet--education";
      break;

    case "Personal":
      colorClass = "TimelineBullet--personal";
  }

  return /*#__PURE__*/react.createElement("li", {
    className: "TimelineBullet ".concat(colorClass)
  }, /*#__PURE__*/react.createElement("div", {
    className: "TimelineBullet-inner"
  }, /*#__PURE__*/react.createElement("div", {
    className: "TimelineBullet-bullet"
  }), /*#__PURE__*/react.createElement("div", {
    className: "TimelineBullet-date"
  }, date), /*#__PURE__*/react.createElement("div", {
    className: "TimelineBullet-text"
  }, lightText, " ", /*#__PURE__*/react.createElement("span", {
    className: "TimelineBullet-text-bold"
  }, boldHref ? /*#__PURE__*/react.createElement(InlineLink, {
    href: boldHref,
    children: boldText,
    underline: false
  }) : boldText))));
}

function Timeline() {
  return /*#__PURE__*/react.createElement("ul", {
    className: "Timeline"
  }, /*#__PURE__*/react.createElement(TimelineBullet, {
    type: "Work",
    date: "Jan 2021",
    lightText: "Started as a Software QA Analyst at",
    boldText: "Covance Inc.",
    boldHref: "https://www.covance.com/"
  }), /*#__PURE__*/react.createElement(TimelineBullet, {
    type: "Work",
    date: "Dec 2019",
    lightText: "Started as a Compliance Specialist at",
    boldText: "Aya Healthcare Inc.",
    boldHref: "https://www.ayahealthcare.com/"
  }), /*#__PURE__*/react.createElement(TimelineBullet, {
    type: "Personal",
    date: "Sep 2019",
    lightText: "Went backpacking solo through",
    boldText: "Europe"
  }), /*#__PURE__*/react.createElement(TimelineBullet, {
    type: "Work",
    date: "Jul 2019",
    lightText: "Started as a Design Engineer at",
    boldText: "Raveon Technologies Corp.",
    boldHref: "https://www.raveon.com/"
  }), /*#__PURE__*/react.createElement(TimelineBullet, {
    type: "Education",
    date: "May 2019",
    lightText: "Graduated from",
    boldText: "San Diego State University",
    boldHref: "https://electrical.sdsu.edu/"
  }));
}
;// CONCATENATED MODULE: ./src/svg/Email.js

function Email(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      theme = _ref.theme;
  return /*#__PURE__*/react.createElement("svg", {
    className: className,
    onClick: onClick,
    fill: theme.toLowerCase() == "dark" ? "#FFF" : "#000",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M467,76H45C20.137,76,0,96.262,0,121v270c0,24.885,20.285,45,45,45h422c24.655,0,45-20.03,45-45V121 C512,96.306,491.943,76,467,76z M460.698,106c-9.194,9.145-167.415,166.533-172.878,171.967c-8.5,8.5-19.8,13.18-31.82,13.18 s-23.32-4.681-31.848-13.208C220.478,274.284,64.003,118.634,51.302,106H460.698z M30,384.894V127.125L159.638,256.08L30,384.894z M51.321,406l129.587-128.763l22.059,21.943c14.166,14.166,33,21.967,53.033,21.967c20.033,0,38.867-7.801,53.005-21.939 l22.087-21.971L460.679,406H51.321z M482,384.894L352.362,256.08L482,127.125V384.894z"
  }))), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null), /*#__PURE__*/react.createElement("g", null));
}
;// CONCATENATED MODULE: ./src/svg/LinkedIn.js

function LinkedIn(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      theme = _ref.theme;
  return /*#__PURE__*/react.createElement("svg", {
    className: className,
    onClick: onClick,
    fill: theme.toLowerCase() == "dark" ? "#FFF" : "#000",
    height: "512pt",
    viewBox: "0 0 512 512",
    width: "512pt",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("path", {
    d: "m160.007812 423h-70v-226h70zm6.984376-298.003906c0-22.628906-18.359376-40.996094-40.976563-40.996094-22.703125 0-41.015625 18.367188-41.015625 40.996094 0 22.636718 18.3125 41.003906 41.015625 41.003906 22.617187 0 40.976563-18.367188 40.976563-41.003906zm255.007812 173.667968c0-60.667968-12.816406-105.664062-83.6875-105.664062-34.054688 0-56.914062 17.03125-66.246094 34.742188h-.066406v-30.742188h-68v226h68v-112.210938c0-29.386718 7.480469-57.855468 43.90625-57.855468 35.929688 0 37.09375 33.605468 37.09375 59.722656v110.34375h69zm90 153.335938v-392c0-33.085938-26.914062-60-60-60h-392c-33.085938 0-60 26.914062-60 60v392c0 33.085938 26.914062 60 60 60h392c33.085938 0 60-26.914062 60-60zm-60-412c11.027344 0 20 8.972656 20 20v392c0 11.027344-8.972656 20-20 20h-392c-11.027344 0-20-8.972656-20-20v-392c0-11.027344 8.972656-20 20-20zm0 0"
  }));
}
;// CONCATENATED MODULE: ./src/views/Work.js
function Work_slicedToArray(arr, i) { return Work_arrayWithHoles(arr) || Work_iterableToArrayLimit(arr, i) || Work_unsupportedIterableToArray(arr, i) || Work_nonIterableRest(); }

function Work_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Work_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Work_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Work_arrayLikeToArray(o, minLen); }

function Work_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Work_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Work_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














function Work() {
  var _useContext = (0,react.useContext)(UIContext),
      theme = _useContext.theme,
      mobile = _useContext.mobile;

  var _theme = Work_slicedToArray(theme, 2),
      uiTheme = _theme[0],
      setUITheme = _theme[1];

  var _mobile = Work_slicedToArray(mobile, 2),
      isMobile = _mobile[0],
      setIsMobile = _mobile[1];

  var className = isMobile ? "Work--mobile" : "Work";
  return /*#__PURE__*/react.createElement("div", {
    className: className,
    id: "work"
  }, /*#__PURE__*/react.createElement(Header, {
    classes: "js-Work-Header",
    children: "Things I've Done"
  }), /*#__PURE__*/react.createElement("div", {
    className: "Work-timeline"
  }, /*#__PURE__*/react.createElement(Timeline, null), /*#__PURE__*/react.createElement("div", {
    className: "Work-links"
  }, /*#__PURE__*/react.createElement("div", {
    className: "Work-links-button"
  }, /*#__PURE__*/react.createElement(LinkButton, {
    children: "Resume",
    href: Rodrigo_Bondoc_Resume
  })), /*#__PURE__*/react.createElement("div", {
    className: "Work-links-icons"
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://github.com/rbondoc96",
    className: "Work-links-icon",
    target: "_blank"
  }, /*#__PURE__*/react.createElement(Github, {
    theme: uiTheme
  })), /*#__PURE__*/react.createElement("a", {
    href: "https://www.linkedin.com/in/rbondoc96/",
    className: "Work-links-icon",
    target: "_blank"
  }, /*#__PURE__*/react.createElement(LinkedIn, {
    theme: uiTheme
  })), /*#__PURE__*/react.createElement("a", {
    href: "mailto:rbondoc96@gmail.com",
    className: "Work-links-icon",
    target: "_blank"
  }, /*#__PURE__*/react.createElement(Email, {
    theme: uiTheme
  }))))), /*#__PURE__*/react.createElement("div", {
    className: "Work-ProjectCards"
  }, /*#__PURE__*/react.createElement(ProjectCard, {
    name: "Personal Website",
    status: "Updating",
    github: "https://github.com/rbondoc96/rbondoc96.github.io",
    description: "My portfoilio website I designed and built. This current iteration was built using React.",
    tags: ["React", "SCSS", "Webpack"]
  }), /*#__PURE__*/react.createElement(ProjectCard, {
    name: "Game Randomizer",
    status: "Work in Progress",
    github: "https://github.com/rbondoc96/DBD-Game-Randomizer",
    description: "A web application for randomizing and analyzing player builds in Dead by Daylight, an asymmetrical action-horror game by Behavior Interactive. Choose a random build and analyze the effects of each player’s assets and resources.",
    tags: ["React", "Django", "SCSS", "Webpack", "WebSockets", "PostgreSQL"]
  }), /*#__PURE__*/react.createElement(ProjectCard, {
    name: "Parking Buddy",
    status: "Complete",
    github: "https://github.com/rbondoc96/EE-Senior-Design",
    description: "My senior capstone group project for my Electrical Engineering major at San Diego State University. Track parking availability in campus parking structures and know ahead of time where you can park",
    tags: ["Python", "LoRa", "Android", "Raspberry Pi"]
  })));
}
;// CONCATENATED MODULE: ./src/views/Contact.js




function Contact() {
  return /*#__PURE__*/react.createElement("div", {
    className: "Contact",
    id: "contact"
  }, /*#__PURE__*/react.createElement(Header, {
    classes: "js-Contact-Header",
    children: "Contact Me"
  }), /*#__PURE__*/react.createElement("p", {
    className: "Contact-content"
  }, "My inbox is always open, whether you have a question or you just feel like having a chat. I\u2019ll get back to you as soon as I can!"), /*#__PURE__*/react.createElement("div", {
    className: "Contact-button"
  }, /*#__PURE__*/react.createElement(LinkButton, {
    children: "Get In Touch",
    href: "mailto:rbondoc96@gmail.com"
  })), /*#__PURE__*/react.createElement("footer", {
    className: "Contact-footer"
  }, /*#__PURE__*/react.createElement("div", {
    className: "Contact-footer-note"
  }, "Made with </> and \uD83D\uDC99 by Rodrigo Bondoc"), /*#__PURE__*/react.createElement("div", {
    className: "Contact-footer-attributions"
  }, "Icons made by ", /*#__PURE__*/react.createElement(InlineLink, {
    href: "https://www.flaticon.com/authors/ultimatearm",
    children: "ultimatearm"
  }), ", ", /*#__PURE__*/react.createElement(InlineLink, {
    href: "https://www.flaticon.com/authors/dinosoftlabs",
    children: "DinosoftLabs"
  }), ", ", /*#__PURE__*/react.createElement(InlineLink, {
    href: "https://www.flaticon.com/authors/dave-gandy",
    children: "Dave Gandy"
  }), ", ", /*#__PURE__*/react.createElement(InlineLink, {
    href: "https://www.freepik.com",
    children: "Freepik"
  }), " and ", /*#__PURE__*/react.createElement(InlineLink, {
    href: "https://www.flaticon.com/authors/prettycons",
    children: "prettycons"
  }), " from ", /*#__PURE__*/react.createElement(InlineLink, {
    href: "https://www.flaticon.com/",
    children: "www.flaticon.com"
  }))));
}
;// CONCATENATED MODULE: ./public/imgs/sun.svg
/* harmony default export */ const sun = (__webpack_require__.p + "assets/sun.svg");
;// CONCATENATED MODULE: ./public/imgs/moon.svg
/* harmony default export */ const moon = (__webpack_require__.p + "assets/moon.svg");
// EXTERNAL MODULE: ./node_modules/gsap/ScrollTrigger.js
var ScrollTrigger = __webpack_require__(82);
;// CONCATENATED MODULE: ./src/anims/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var animProps = {
  duration: 0.5,
  opacity: 0,
  y: "-10%"
};
function animationInit(isMobile) {
  gsap/* default.registerPlugin */.ZP.registerPlugin(ScrollTrigger/* default */.Z);
  var homeTimeline = gsap/* default.timeline */.ZP.timeline();
  if (!isMobile) homeTimeline.delay(1.5);else homeTimeline.delay(1);
  homeTimeline.from(".Home-header", animProps).from(".Home-text", animProps).from(".Home-button", animProps);
  var aboutTimeline = gsap/* default.timeline */.ZP.timeline({
    scrollTrigger: {
      trigger: ".js-About-Header",
      start: "top 30%"
    }
  });
  var aboutAnimProps = {
    duration: 0.4,
    opacity: 0,
    y: "-10%"
  };
  aboutTimeline.from(".js-About-Header", aboutAnimProps);
  aboutTimeline.from(".About-left", aboutAnimProps);
  if (!isMobile) aboutTimeline.from(".About-right", aboutAnimProps);else {
    var tempTimeline = gsap/* default.timeline */.ZP.timeline({
      scrollTrigger: {
        trigger: ".About-right",
        start: "top 30%"
      }
    });
    tempTimeline.from(".About-right", {
      duration: 0.25,
      opacity: 0,
      x: "10%"
    });
  }
  var workTimeline = gsap/* default.timeline */.ZP.timeline({
    scrollTrigger: {
      trigger: ".js-Work-Header",
      start: "top 30%"
    }
  });
  workTimeline.from(".js-Work-Header", animProps);
  workTimeline.from(".TimelineBullet, .Work-links", _objectSpread(_objectSpread({}, animProps), {}, {
    delay: 0.25
  })); // workTimeline.from(".Work-links", animProps)

  if (!isMobile) workTimeline.from(".Work-ProjectCards", {
    duration: 0.5,
    opacity: 0,
    x: "100%"
  });else {
    var _tempTimeline = gsap/* default.timeline */.ZP.timeline({
      scrollTrigger: {
        trigger: ".Work-ProjectCards",
        start: "top 30%"
      }
    });

    _tempTimeline.from(".Work-ProjectCards", animProps);
  }
  var contactTimeline = gsap/* default.timeline */.ZP.timeline({
    scrollTrigger: {
      trigger: ".js-Contact-Header",
      start: "top 30%"
    }
  });
  var contactAnimProps = {
    duration: 0.25,
    opacity: 0,
    y: "-10%"
  };
  contactTimeline.from(".js-Contact-Header", contactAnimProps);
  contactTimeline.from(".Contact-content", contactAnimProps);
  contactTimeline.from(".Contact-button", contactAnimProps);
  contactTimeline.from(".Contact-footer", contactAnimProps);
}
;// CONCATENATED MODULE: ./src/app.js
function app_slicedToArray(arr, i) { return app_arrayWithHoles(arr) || app_iterableToArrayLimit(arr, i) || app_unsupportedIterableToArray(arr, i) || app_nonIterableRest(); }

function app_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function app_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return app_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return app_arrayLikeToArray(o, minLen); }

function app_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function app_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function app_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















function App(_ref) {
  var _ref$DEBUG_WINDOW = _ref.DEBUG_WINDOW,
      DEBUG_WINDOW = _ref$DEBUG_WINDOW === void 0 ? true : _ref$DEBUG_WINDOW;

  var _useContext = (0,react.useContext)(UIContext),
      theme = _useContext.theme,
      mobile = _useContext.mobile,
      sidebar = _useContext.sidebar,
      navbar = _useContext.navbar;

  var _theme = app_slicedToArray(theme, 2),
      uiTheme = _theme[0],
      setUITheme = _theme[1];

  var _mobile = app_slicedToArray(mobile, 2),
      isMobile = _mobile[0],
      setIsMobile = _mobile[1];

  var _sidebar = app_slicedToArray(sidebar, 2),
      isSidebarActive = _sidebar[0],
      setIsSidebarActive = _sidebar[1];

  var _navbar = app_slicedToArray(navbar, 2),
      isNavBarShown = _navbar[0],
      setIsNavBarShown = _navbar[1];

  var prevScrollPos = window.pageYOffset;

  var onScroll = function onScroll(event) {
    var currScrollPos = window.pageYOffset;

    if (prevScrollPos > currScrollPos) {
      setIsNavBarShown(true);
    } else {
      setIsNavBarShown(false);
    }

    prevScrollPos = currScrollPos;
  };

  var onResize = function onResize(event) {
    if (window.innerWidth < 960) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsSidebarActive(false);
    }
  };

  var toggleTheme = function toggleTheme(event) {
    if (uiTheme.toLowerCase() == "dark") {
      setUITheme("light");
    } else {
      setUITheme("dark");
    }
  };

  (0,react.useEffect)(function () {
    var throttledScroll = throttle_default()(onScroll, 100);
    animationInit(isMobile);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", throttledScroll);
    return function () {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: uiTheme.toLowerCase() == "light" ? "app" : "app--dark"
  }, /*#__PURE__*/react.createElement(NavBar, null), /*#__PURE__*/react.createElement("div", {
    className: "app-inner"
  }, /*#__PURE__*/react.createElement(Home, null), /*#__PURE__*/react.createElement(About, null), /*#__PURE__*/react.createElement(Work, null), /*#__PURE__*/react.createElement(Contact, null)), /*#__PURE__*/react.createElement("div", {
    className: "app-theme-toggle ".concat(!isNavBarShown ? "app-theme-toggle--hidden" : ""),
    onClick: toggleTheme
  }, uiTheme.toLowerCase() == "dark" ? /*#__PURE__*/react.createElement("img", {
    src: moon
  }) : /*#__PURE__*/react.createElement("img", {
    src: sun
  })));
}
;// CONCATENATED MODULE: ./src/index.js




react_dom.render( /*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(UIProvider, null, /*#__PURE__*/react.createElement(App, null))), document.getElementById("root"));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			[78,722]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;