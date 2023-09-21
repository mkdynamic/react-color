"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[221],{2221:function(e,r,t){t.r(r),r.default={components:{20:function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}var r,n=function(r,t){if(!t&&r&&r.__esModule)return r;if(null===r||"object"!==e(r)&&"function"!==typeof r)return{default:r};var n=a(t);if(n&&n.has(r))return n.get(r);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in r)if("default"!==c&&Object.prototype.hasOwnProperty.call(r,c)){var u=i?Object.getOwnPropertyDescriptor(r,c):null;u&&(u.get||u.set)?Object.defineProperty(o,c,u):o[c]=r[c]}o.default=r,n&&n.set(r,o);return o}(t(8573)),o=(r=t(4479))&&r.__esModule?r:{default:r},i=t(6493);function a(e){if("function"!==typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:r})(e)}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(r,t,n){return(t=function(r){var t=function(r,t){if("object"!==e(r)||null===r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,t||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"===e(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;u=!1}else for(;!(u=(n=i.call(t)).done)&&(c.push(n.value),c.length!==r);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return f(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}return function(){var e=s((0,n.useState)({h:214,s:43,v:90,a:1}),2),r=e[0],t=e[1];return n.default.createElement(n.Fragment,null,n.default.createElement(o.default,{color:r,onChange:function(e){return t(u(u({},r),e.hsva))}}),n.default.createElement("div",{style:{width:"100%",height:34,background:(0,i.hsvaToHex)(r)}}))}}()},data:{20:{name:20,meta:{},code:'"use strict";\n\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactColorWheel = _interopRequireDefault(require("@uiw/react-color-wheel"));\nvar _colorConvert = require("@uiw/color-convert");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction Demo() {\n  var _useState = (0, _react.useState)({\n      h: 214,\n      s: 43,\n      v: 90,\n      a: 1\n    }),\n    _useState2 = _slicedToArray(_useState, 2),\n    hsva = _useState2[0],\n    setHsva = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactColorWheel["default"], {\n    color: hsva,\n    onChange: function onChange(color) {\n      return setHsva(_objectSpread(_objectSpread({}, hsva), color.hsva));\n    }\n  }), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      width: \'100%\',\n      height: 34,\n      background: (0, _colorConvert.hsvaToHex)(hsva)\n    }\n  }));\n}\nreturn Demo;',language:"tsx",value:"import React, { useState, Fragment } from 'react';\nimport Wheel from '@uiw/react-color-wheel';\nimport { hsvaToHex } from '@uiw/color-convert';\n\nfunction Demo() {\n  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });\n  return (\n    <Fragment>\n      <Wheel color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />\n      <div style={{ width: '100%', height: 34, background: hsvaToHex(hsva) }}></div>\n    </Fragment>\n  );\n}\n\nexport default Demo;"}},source:"React Color Wheel\n===\n\n[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-wheel)](https://bundlephobia.com/package/@uiw/react-color-wheel) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-wheel.svg)](https://www.npmjs.com/package/@uiw/react-color-wheel) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-wheel/file/README.md)\n\nWheel Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).\n\n\x3c!--rehype:ignore:start--\x3e\n[![react-color-wheel](https://user-images.githubusercontent.com/1680273/125949147-ab96c3d8-1490-4418-b2cf-3f347993bdcb.png)](https://uiwjs.github.io/react-color/#/wheel)\n\x3c!--rehype:ignore:end--\x3e\n\n## Install\n\n```bash\nnpm i @uiw/react-color-wheel\n```\n\n## Usage\n\n```tsx mdx:preview\nimport React, { useState, Fragment } from 'react';\nimport Wheel from '@uiw/react-color-wheel';\nimport { hsvaToHex } from '@uiw/color-convert';\n\nfunction Demo() {\n  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });\n  return (\n    <Fragment>\n      <Wheel color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />\n      <div style={{ width: '100%', height: 34, background: hsvaToHex(hsva) }}></div>\n    </Fragment>\n  );\n}\n\nexport default Demo;\n```\n\n## Props\n\n```ts\nimport React from 'react';\nimport { HsvaColor, ColorResult } from '@uiw/color-convert';\nimport { PointerProps } from './Pointer';\nexport interface WheelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {\n  prefixCls?: string;\n  color?: string | HsvaColor;\n  width?: number;\n  height?: number;\n  radius?: React.CSSProperties['borderRadius'];\n  /** Direction of the oval: 'x' or 'y'. */ \n  oval?: string;\n  /** Starting angle of the color wheel's hue gradient, measured in degrees. */\n  angle?: number;\n  /** Direction of the color wheel's hue gradient; either clockwise or anticlockwise. Default: `anticlockwise` */\n  direction?: 'clockwise' | 'anticlockwise';\n  pointer?: ({ prefixCls, left, top, color }: PointerProps) => JSX.Element;\n  onChange?: (color: ColorResult) => void;\n}\ndeclare const Wheel: React.ForwardRefExoticComponent<WheelProps & React.RefAttributes<HTMLDivElement>>;\nexport default Wheel;\n```\n\n\x3c!--footer-dividing--\x3e\n\n## Contributors\n\nAs always, thanks to our amazing contributors!\n\n<a href=\"https://uiwjs.github.io/react-color/graphs/contributors\">\n  <img src=\"https://uiwjs.github.io/react-color/coverage/CONTRIBUTORS.svg\" />\n</a>\n\nMade with [contributors](https://github.com/jaywcjlove/github-action-contributors).\n\n## License\n\nLicensed under the MIT License.\n",headings:[]}}}]);
//# sourceMappingURL=221.0504457b.chunk.js.map