(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[349],{363:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=363,e.exports=t},2664:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var o=r(2951),n=r(1976),a=r(7591),i=r(9616),s=r(1473),l=(r(6991),{markdown:"Markdown_markdown__pdFcg",editor:"Markdown_editor__ktea2",warpper:"Markdown_warpper__j-FaN",example:"Markdown_example__q3W5x",footer:"Markdown_footer__ShQo5"}),c=r(189),d=r(3782),u=r(5587),p=r(4403),h=r(6327),f=r(5142),g=r(9286),x=["inline","node"],v=["data-meta"],m=p.ZP.Preview,b=p.ZP.Code,j=p.ZP.Toolbar;function y(e){return(0,g.jsx)(u.Z,{disableCopy:!0,source:e.source,style:{padding:"20px 26px",minHeight:120},components:{code:function(t){var r,o=t.inline,n=t.node,a=(0,d.Z)(t,x),i=a,s=i["data-meta"],l=(0,d.Z)(i,v);if(o||!(0,f.pN)(s))return(0,g.jsx)("code",(0,c.Z)({},a));var u=null===(r=n.position)||void 0===r?void 0:r.start.line,y=(0,f.Mx)(s)||String(u),Z=e.components["".concat(y)];if(y&&"function"===typeof Z){var w=(0,h.U)(n.children),C=(0,f.aE)(s);return(0,g.jsxs)(p.ZP,{children:[(0,g.jsx)(m,{children:(0,g.jsx)(Z,{})}),(0,g.jsx)(j,{text:w,children:C.title||"Example Display"}),(0,g.jsx)(b,{children:(0,g.jsx)("code",(0,c.Z)({},l))})]})}return(0,g.jsx)("code",(0,c.Z)({},l))}}})}var Z=function(e){var t=e.editorUrl;return t?(0,g.jsx)("a",{className:l.editor,target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(t),children:"Edit this page"}):null},w=function(e){(0,a.Z)(r,e);var t=(0,i.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).editorUrl=void 0,n.getMdStr=void 0,n.example=void 0,n.state={mdStr:""},n}return(0,n.Z)(r,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default.source,mdObj:t.default})}))}},{key:"render",value:function(){var e=this.state.mdObj||{},t=e.source,r=e.components,o=e.data;return(0,g.jsxs)("div",{className:[l.warpper,"wmde-markdown-var"].join(" "),children:[(0,g.jsx)("dark-mode",{permanent:!0,light:"Dark",dark:"Light"}),(0,g.jsxs)("div",{className:l.markdown,children:[(0,g.jsx)(Z,{editorUrl:this.editorUrl}),this.example&&(0,g.jsx)("div",{className:l.example,children:this.example}),(0,g.jsx)(y,{source:t||"",components:r||{},data:o||{}}),(0,g.jsx)(Z,{editorUrl:this.editorUrl})]}),(0,g.jsxs)("div",{className:l.footer,children:[(0,g.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,g.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,g.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,g.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(s.Component)},2532:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var o=r(1976),n=r(2951),a=r(7591),i=r(9616),s=r(189),l=r(1473),c=r(8935),d=r(2664),u=r(7664),p=r(9286);function h(){var e=(0,l.useContext)(u._y),t=e.hsva,r=e.dispatch;return(0,p.jsx)("div",{style:{width:256},children:(0,p.jsx)(c.default,{color:t,onChange:function(e){r({hsva:(0,s.Z)((0,s.Z)({},t),e.hsva)})}})})}var f=function(e){(0,a.Z)(s,e);var t=(0,i.Z)(s);function s(){var e;(0,n.Z)(this,s);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).editorUrl="/packages/color-sketch/README.md",e.getMdStr=function(){return r.e(820).then(r.bind(r,6820))},e.example=(0,p.jsx)(h,{}),e}return(0,o.Z)(s)}(d.Z)},7302:function(e,t,r){"use strict";var o=r(5773),n=r(808),a=r(1473),i=r(353),s=r(6433),l=r(9286),c=["prefixCls","hsva","placement","rProps","gProps","bProps","aProps","className","style","onChange"],d=a.forwardRef((function(e,t){var r=e.prefixCls,a=void 0===r?"w-color-editable-input-rgba":r,d=e.hsva,u=e.placement,p=void 0===u?"bottom":u,h=e.rProps,f=void 0===h?{}:h,g=e.gProps,x=void 0===g?{}:g,v=e.bProps,m=void 0===v?{}:v,b=e.aProps,j=void 0===b?{}:b,y=e.className,Z=e.style,w=e.onChange,C=(0,n.Z)(e,c),k=d?(0,s.hsvaToRgba)(d):{};function N(e){var t=Number(e.target.value);t&&t>255&&(e.target.value="255"),t&&t<0&&(e.target.value="0")}var S=function(e,t,r){"number"===typeof e&&("a"===t&&(e<0&&(e=0),e>100&&(e=100),w&&w((0,s.color)((0,s.rgbaToHsva)((0,o.Z)({},k,{a:e/100}))))),e>255&&(e=255,r.target.value="255"),e<0&&(e=0,r.target.value="0"),"r"===t&&w&&w((0,s.color)((0,s.rgbaToHsva)((0,o.Z)({},k,{r:e})))),"g"===t&&w&&w((0,s.color)((0,s.rgbaToHsva)((0,o.Z)({},k,{g:e})))),"b"===t&&w&&w((0,s.color)((0,s.rgbaToHsva)((0,o.Z)({},k,{b:e})))))};return(0,l.jsxs)("div",(0,o.Z)({ref:t,className:[a,y||""].filter(Boolean).join(" ")},C,{style:(0,o.Z)({fontSize:11,display:"flex"},Z),children:[(0,l.jsx)(i.Z,(0,o.Z)({label:"R",value:k.r||0,onBlur:N,placement:p,onChange:function(e,t){return S(t,"r",e)}},f,{style:(0,o.Z)({},f.style)})),(0,l.jsx)(i.Z,(0,o.Z)({label:"G",value:k.g||0,onBlur:N,placement:p,onChange:function(e,t){return S(t,"g",e)}},x,{style:(0,o.Z)({marginLeft:5},f.style)})),(0,l.jsx)(i.Z,(0,o.Z)({label:"B",value:k.b||0,onBlur:N,placement:p,onChange:function(e,t){return S(t,"b",e)}},m,{style:(0,o.Z)({marginLeft:5},m.style)})),j&&(0,l.jsx)(i.Z,(0,o.Z)({label:"A",value:k.a?parseInt(String(100*k.a),10):0,onBlur:N,placement:p,onChange:function(e,t){return S(t,"a",e)}},j,{style:(0,o.Z)({marginLeft:5},j.style)}))]}))}));d.displayName="EditableInputRGBA",t.Z=d},353:function(e,t,r){"use strict";var o=r(1026),n=r(5773),a=r(808),i=r(1473),s=r(9286),l=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur"],c=i.forwardRef((function(e,t){var r=e.prefixCls,c=void 0===r?"w-color-editable-input":r,d=e.placement,u=void 0===d?"bottom":d,p=e.label,h=e.value,f=e.className,g=e.style,x=e.labelStyle,v=e.inputStyle,m=e.onChange,b=e.onBlur,j=(0,a.Z)(e,l),y=(0,i.useState)(h),Z=(0,o.Z)(y,2),w=Z[0],C=Z[1],k=(0,i.useRef)(!1);(0,i.useEffect)((function(){e.value!==w&&(k.current||C(e.value))}),[e.value]);var N={};return"bottom"===u&&(N.flexDirection="column"),"top"===u&&(N.flexDirection="column-reverse"),"left"===u&&(N.flexDirection="row-reverse"),(0,s.jsxs)("div",{className:[c,f||""].filter(Boolean).join(" "),style:(0,n.Z)({position:"relative",alignItems:"center",display:"flex",fontSize:11},N,g),children:[(0,s.jsx)("input",(0,n.Z)({ref:t,value:w,onChange:function(e,t){var r=t||e.target.value;/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(r)&&m&&m(e,r);var o=function(e){return Number(String(e).replace(/%/g,""))}(r);isNaN(o)||m&&m(e,o),C(r)},onBlur:function(t){k.current=!1,C(e.value),b&&b(t)},autoComplete:"off",onFocus:function(){return k.current=!0}},j,{style:(0,n.Z)({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,boxSizing:"border-box",border:"none",boxShadow:"rgb(204 204 204) 0px 0px 0px 1px inset"},v)})),p&&(0,s.jsx)("span",{style:(0,n.Z)({color:"rgb(153, 153, 153)",textTransform:"capitalize"},x),children:p})]})}));c.displayName="EditableInput",t.Z=c},3989:function(e,t,r){"use strict";var o=r(5773),n=r(808),a=r(1473),i=r(2077),s=r(9286),l=["prefixCls","className","hue","onChange","direction"],c=a.forwardRef((function(e,t){var r=e.prefixCls,a=void 0===r?"w-color-hue":r,c=e.className,d=e.hue,u=void 0===d?0:d,p=e.onChange,h=e.direction,f=void 0===h?"horizontal":h,g=(0,n.Z)(e,l);return(0,s.jsx)(i.default,(0,o.Z)({ref:t,className:a+" "+(c||"")},g,{direction:f,background:"linear-gradient(to "+("horizontal"===f?"right":"bottom")+", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",hsva:{h:u,s:100,v:100,a:u/360},onChange:function(e,t){p&&p({h:"horizontal"===f?360*t.left:360*t.top})}}))}));c.displayName="Hue",t.Z=c},2458:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var o=r(5773),n=r(808),a=r(1473),i=r(6433),s=r(1269),l=r(9286),c=function(e){var t=e.className,r=e.color,o=e.left,n=e.top,i=e.prefixCls,s={position:"absolute",top:n,left:o};return(0,a.useMemo)((function(){return(0,l.jsx)("div",{className:i+"-pointer "+(t||""),style:s,children:(0,l.jsx)("div",{className:i+"-fill",style:{width:6,height:6,transform:"translate(-3px, -3px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:r}})})}),[n,o,r,t,i])},d=["prefixCls","radius","pointer","className","style","hsva","onChange"],u=a.forwardRef((function(e,t){var r=e.prefixCls,u=void 0===r?"w-color-saturation":r,p=e.radius,h=void 0===p?0:p,f=e.pointer,g=e.className,x=e.style,v=e.hsva,m=e.onChange,b=(0,n.Z)(e,d),j=(0,o.Z)({width:200,height:200,borderRadius:h},x,{position:"relative"}),y=function(e,t){m&&m({h:v.h,s:100*e.left,v:100*(1-e.top),a:v.a})},Z={top:100-v.v+"%",left:v.s+"%",color:(0,i.hsvaToHslaString)(v)};return(0,l.jsx)(s.ZP,(0,o.Z)({className:[u,g||""].filter(Boolean).join(" ")},b,{style:(0,o.Z)({position:"absolute",inset:0,cursor:"crosshair",backgroundImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl("+v.h+", 100%, 50%))"},j),ref:t,onMove:y,onDown:y,children:a.createElement(f||c,(0,o.Z)({prefixCls:u},Z))}))}));u.displayName="Saturation";var p=u},8935:function(e,t,r){"use strict";r.r(t);var o=r(1026),n=r(5773),a=r(808),i=r(1473),s=r(2458),l=r(2077),c=r(353),d=r(7302),u=r(3989),p=r(6651),h=r(6433),f=r(6726),g=r(9286),x=["prefixCls","className","onChange","width","presetColors","color","editableDisable","disableAlpha","style"],v=["#D0021B","#F5A623","#f8e61b","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"],m=function(e){return(0,g.jsx)("div",{style:{boxShadow:"rgb(0 0 0 / 60%) 0px 0px 2px",width:4,top:1,bottom:1,left:e.left,borderRadius:1,position:"absolute",backgroundColor:"#fff"}})},b=i.forwardRef((function(e,t){var r=e.prefixCls,b=void 0===r?"w-color-sketch":r,j=e.className,y=e.onChange,Z=e.width,w=void 0===Z?218:Z,C=e.presetColors,k=void 0===C?v:C,N=e.color,S=e.editableDisable,_=void 0===S||S,R=e.disableAlpha,B=void 0!==R&&R,E=e.style,P=(0,a.Z)(e,x),T=(0,i.useState)({h:209,s:36,v:90,a:1}),A=(0,o.Z)(T,2),L=A[0],M=A[1];(0,i.useEffect)((function(){"string"===typeof N&&(0,p.Ff)(N)&&M((0,h.hexToHsva)(N)),"object"===typeof N&&M(N)}),[N]);var D=(0,i.useCallback)((function(e){M(e),y&&y((0,h.color)(e))}),[L]);return(0,g.jsxs)("div",(0,n.Z)({},P,{className:b+" "+(j||""),ref:t,style:(0,n.Z)({background:"rgb(255, 255, 255)",borderRadius:4,boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px",width:w},E),children:[(0,g.jsxs)("div",{style:{padding:"10px 10px 8px"},children:[(0,g.jsx)(s.Z,{hsva:L,style:{width:"auto",height:150},onChange:function(e){return D((0,n.Z)({},L,e,{a:L.a}))}}),(0,g.jsxs)("div",{style:{display:"flex",marginTop:4},children:[(0,g.jsxs)("div",{style:{flex:1},children:[(0,g.jsx)(u.Z,{width:"auto",height:10,hue:L.h,pointer:m,innerProps:{style:{marginLeft:1,marginRight:5}},onChange:function(e){return D((0,n.Z)({},L,e))}}),!B&&(0,g.jsx)(l.default,{width:"auto",height:10,hsva:L,pointer:m,style:{marginTop:4},innerProps:{style:{marginLeft:1,marginRight:5}},onChange:function(e){D((0,n.Z)({},L,{a:e.a}))}})]}),!B&&(0,g.jsx)(l.default,{width:24,height:24,hsva:L,radius:2,style:{marginLeft:4},bgProps:{style:{background:"transparent"}},innerProps:{style:{borderRadius:2,background:(0,h.hsvaToRgbaString)(L),boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset, rgb(0 0 0 / 25%) 0px 0px 4px inset"}},pointer:function(){return(0,g.jsx)(i.Fragment,{})}})]})]}),_&&(0,g.jsxs)("div",{style:{display:"flex",margin:"0 10px 3px 10px"},children:[(0,g.jsx)(c.Z,{label:"Hex",value:(0,h.hsvaToHex)(L).replace(/^#/,"").toLocaleUpperCase(),onChange:function(e,t){var r;"string"===typeof(r=t)&&(0,p.Ff)(r)&&/(3|6)/.test(String(r.length))&&D((0,h.hexToHsva)(r))},style:{minWidth:58}}),(0,g.jsx)(d.Z,{hsva:L,style:{marginLeft:6},onChange:function(e){return D(e.hsva)}})]}),k&&k.length>0&&(0,g.jsx)(f.Z,{style:{borderTop:"1px solid rgb(238, 238, 238)",paddingTop:10,paddingLeft:10},colors:k,color:(0,h.hsvaToHex)(L),onChange:function(e){return D(e)},rectProps:{style:{marginRight:10,marginBottom:10,borderRadius:3,boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset"}}})]}))}));b.displayName="Sketch",t.default=b},6726:function(e,t,r){"use strict";var o=r(5773),n=r(808),a=r(1473),i=r(6433),s=r(9286),l=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],c=a.forwardRef((function(e,t){var r=e.prefixCls,c=void 0===r?"w-color-swatch":r,d=e.className,u=e.color,p=e.colors,h=void 0===p?[]:p,f=e.style,g=e.rectProps,x=void 0===g?{}:g,v=e.onChange,m=e.addonAfter,b=e.addonBefore,j=e.rectRender,y=(0,n.Z)(e,l),Z=(0,o.Z)({background:"rgb(144, 19, 254)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},x.style),w=function(e){v&&v((0,i.hexToHsva)(e))};return(0,s.jsxs)("div",(0,o.Z)({ref:t},y,{className:[c,d||""].filter(Boolean).join(" "),style:(0,o.Z)({display:"flex",flexWrap:"wrap",position:"relative"},f),children:[b&&a.isValidElement(b)&&b,h&&Array.isArray(h)&&h.map((function(e,t){var r="",n="";"string"===typeof e&&(r=e,n=e),"object"===typeof e&&e.color&&(r=e.title||e.color,n=e.color);var i=u&&u.toLocaleLowerCase()===n.toLocaleLowerCase();if(j)return j({key:t,title:r,color:n,checked:!!i,style:(0,o.Z)({},Z,{background:n}),onClick:function(){return w(n)}});var l=x.children&&a.isValidElement(x.children)?a.cloneElement(x.children,{color:n,checked:i}):null;return(0,s.jsx)("div",(0,o.Z)({tabIndex:0,title:r,onClick:function(){return w(n)}},x,{children:l,style:(0,o.Z)({},Z,{background:n})}),t)})),m&&a.isValidElement(m)&&m]}))}));c.displayName="Swatch",t.Z=c}}]);
//# sourceMappingURL=349.79a9ab13.chunk.js.map