(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[753],{363:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=363,e.exports=t},2664:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(2951),i=r(1976),o=r(7591),s=r(3415),a=r(1473),c=(r(6991),{markdown:"Markdown_markdown__pdFcg",editor:"Markdown_editor__ktea2",warpper:"Markdown_warpper__j-FaN",example:"Markdown_example__q3W5x",footer:"Markdown_footer__ShQo5"}),l=r(189),d=r(3782),u=r(4638),h=r(7963),p=r(2094),f=r(5142),g=r(9286),m=["inline","node"],v=["data-meta"];function x(e){return(0,g.jsx)(u.Z,{disableCopy:!0,source:e.source,style:{padding:"20px 26px",minHeight:120},components:{code:function(t){var r,n=t.inline,i=t.node,o=(0,d.Z)(t,m),s=o,a=s["data-meta"],c=(0,d.Z)(s,v);if(n||!(0,f.pN)(a))return(0,g.jsx)("code",(0,l.Z)({},o));var u=null===(r=i.position)||void 0===r?void 0:r.start.line,x=(0,f.Mx)(a)||String(u),j=e.components["".concat(x)];if(x&&"function"===typeof j){var w=(0,p.U)(i.children),b=(0,f.aE)(a);return(0,g.jsx)(h.Z,{toolbar:b.title||"Example Display",code:(0,g.jsx)("code",(0,l.Z)({},c)),text:w,children:(0,g.jsx)(j,{})})}return(0,g.jsx)("code",(0,l.Z)({},c))}}})}var j=function(e){var t=e.editorUrl;return t?(0,g.jsx)("a",{className:c.editor,target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(t),children:"Edit this page"}):null},w=function(e){(0,o.Z)(r,e);var t=(0,s.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).editorUrl=void 0,i.getMdStr=void 0,i.example=void 0,i.state={mdStr:""},i}return(0,i.Z)(r,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default.source,mdObj:t.default})}))}},{key:"render",value:function(){var e=this.state.mdObj||{},t=e.source,r=e.components,n=e.data;return(0,g.jsxs)("div",{className:[c.warpper,"wmde-markdown-var"].join(" "),children:[(0,g.jsx)("dark-mode",{light:"Dark",dark:"Light"}),(0,g.jsxs)("div",{className:c.markdown,children:[(0,g.jsx)(j,{editorUrl:this.editorUrl}),this.example&&(0,g.jsx)("div",{className:c.example,children:this.example}),(0,g.jsx)(x,{source:t||"",components:r||{},data:n||{}}),(0,g.jsx)(j,{editorUrl:this.editorUrl})]}),(0,g.jsxs)("div",{className:c.footer,children:[(0,g.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,g.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,g.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,g.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(a.Component)},8775:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(1976),i=r(2951),o=r(7591),s=r(3415),a=r(189),c=r(1473),l=r(4571),d=r(6433),u=r(2664),h=r(7664),p=r(9286);function f(){var e=(0,c.useContext)(h._y),t=e.hsva,r=e.dispatch;return(0,p.jsx)("div",{style:{width:256},children:(0,p.jsx)(l.Z,{colors:["#D0021B","#F5A623","#f8e61b","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"],color:(0,d.hsvaToHex)(t),onChange:function(e){r({hsva:(0,a.Z)((0,a.Z)({},e),e)})}})})}var g=function(e){(0,o.Z)(a,e);var t=(0,s.Z)(a);function a(){var e;(0,i.Z)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).editorUrl="/packages/color-swatch/README.md",e.getMdStr=function(){return r.e(854).then(r.bind(r,9854))},e.example=(0,p.jsx)(f,{}),e}return(0,n.Z)(a)}(u.Z)},4571:function(e,t,r){"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return l}});var i=r(1473),o=r(6433),s=r(9286),a=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],c=i.forwardRef((function(e,t){var r=e.prefixCls,c=void 0===r?"w-color-swatch":r,l=e.className,d=e.color,u=e.colors,h=void 0===u?[]:u,p=e.style,f=e.rectProps,g=void 0===f?{}:f,m=e.onChange,v=e.addonAfter,x=e.addonBefore,j=e.rectRender,w=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,a),b=n({background:"rgb(144, 19, 254)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},g.style),k=function(e){m&&m((0,o.hexToHsva)(e))};return(0,s.jsxs)("div",n({ref:t},w,{className:[c,l||""].filter(Boolean).join(" "),style:n({display:"flex",flexWrap:"wrap",position:"relative"},p),children:[x&&i.isValidElement(x)&&x,h&&Array.isArray(h)&&h.map((function(e,t){var r="",o="";"string"===typeof e&&(r=e,o=e),"object"===typeof e&&e.color&&(r=e.title||e.color,o=e.color);var a=d&&d.toLocaleLowerCase()===o.toLocaleLowerCase();if(j)return j({key:t,title:r,color:o,checked:!!a,style:n({},b,{background:o}),onClick:function(){return k(o)}});var c=g.children&&i.isValidElement(g.children)?i.cloneElement(g.children,{color:o,checked:a}):null;return(0,s.jsx)("div",n({tabIndex:0,title:r,onClick:function(){return k(o)}},g,{children:c,style:n({},b,{background:o})}),t)})),v&&i.isValidElement(v)&&v]}))}));c.displayName="Swatch";var l=c}}]);
//# sourceMappingURL=753.d70cfdcc.chunk.js.map