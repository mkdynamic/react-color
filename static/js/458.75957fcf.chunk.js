"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[458],{9458:function(e,r,t){t.r(r),r.default={components:{20:function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}var r,n=function(r,t){if(!t&&r&&r.__esModule)return r;if(null===r||"object"!=e(r)&&"function"!=typeof r)return{default:r};var n=i(t);if(n&&n.has(r))return n.get(r);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in r)if("default"!==u&&Object.prototype.hasOwnProperty.call(r,u)){var l=a?Object.getOwnPropertyDescriptor(r,u):null;l&&(l.get||l.set)?Object.defineProperty(o,u,l):o[u]=r[u]}return o.default=r,n&&n.set(r,o),o}(t(8573)),o=(r=t(4262))&&r.__esModule?r:{default:r};function i(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(i=function(e){return e?t:r})(e)}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(r,t,n){return(t=function(r){var t=function(r,t){if("object"!==e(r)||null===r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,t||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"===e(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function c(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=i.call(t)).done)&&(u.push(n.value),u.length!==r);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}return function(){var e=c((0,n.useState)({h:0,s:0,v:68,a:1}),2),r=e[0],t=e[1];return n.default.createElement(o.default,{hsva:r,onChange:function(e){t(u(u({},r),e))}})}}()},data:{20:{name:20,meta:{},code:'"use strict";\n\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactColorShadeSlider = _interopRequireDefault(require("@uiw/react-color-shade-slider"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nreturn function Demo() {\n  var _useState = (0, _react.useState)({\n      h: 0,\n      s: 0,\n      v: 68,\n      a: 1\n    }),\n    _useState2 = _slicedToArray(_useState, 2),\n    hsva = _useState2[0],\n    setHsva = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_reactColorShadeSlider["default"], {\n    hsva: hsva,\n    onChange: function onChange(newShade) {\n      setHsva(_objectSpread(_objectSpread({}, hsva), newShade));\n    }\n  });\n};',language:"jsx",value:"import React, { useState } from 'react';\nimport ShadeSlider from '@uiw/react-color-shade-slider';\n\nexport default function Demo() {\n  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });\n  return (\n    <ShadeSlider\n      hsva={hsva}\n      onChange={(newShade) => {\n        setHsva({ ...hsva, ...newShade });\n      }}\n    />\n  );\n}"}},source:"React Color Shade Slider\n===\n\n[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-shade-slider)](https://bundlephobia.com/package/@uiw/react-color-shade-slider) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-shade-slider.svg)](https://www.npmjs.com/package/@uiw/react-color-shade-slider) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-shade-slider/file/README.md)\n\nShadeSlider Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).\n\n\x3c!--rehype:ignore:start--\x3e\n[![react-color-shade-slider](https://user-images.githubusercontent.com/1680273/125951397-89e90c05-1de2-4da7-81ed-4b77980482a0.png)](https://uiwjs.github.io/react-color/#/shade-slider)\n\x3c!--rehype:ignore:end--\x3e\n\n## Install\n\n```bash\nnpm i @uiw/react-color-shade-slider\n```\n\n## Usage\n\n```jsx mdx:preview\nimport React, { useState } from 'react';\nimport ShadeSlider from '@uiw/react-color-shade-slider';\n\nexport default function Demo() {\n  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });\n  return (\n    <ShadeSlider\n      hsva={hsva}\n      onChange={(newShade) => {\n        setHsva({ ...hsva, ...newShade });\n      }}\n    />\n  );\n}\n```\n\n## Props\n\n```ts\nimport React from 'react';\nimport { AlphaProps } from '@uiw/react-color-alpha';\nexport interface ShadeSliderProps extends Omit<AlphaProps, 'onChange'> {\n  onChange?: (newShade: {\n    v: number;\n  }) => void;\n}\ndeclare const ShadeSlider: React.ForwardRefExoticComponent<ShadeSliderProps & React.RefAttributes<HTMLDivElement>>;\nexport default ShadeSlider;\n\n```\n\n\x3c!--footer-dividing--\x3e\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://uiwjs.github.io/react-color/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-color/coverage/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n",headings:[],headingsList:[]}}}]);
//# sourceMappingURL=458.75957fcf.chunk.js.map