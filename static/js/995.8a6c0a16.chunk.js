(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[995],{256:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=256,t.exports=e},3623:(t,e,r)=>{"use strict";r.d(e,{A:()=>f});var s,o,i,a,n,l=r(114),d=r(7804),c=r(6110),h=r(3235),p=r(9424);const g=h.Ay.div(s||(s=(0,l.A)(["\n  background-color: var(--color-theme-bg);\n  box-shadow:\n    0 0 0 1px rgb(0 0 0 / 15%),\n    0 8px 16px rgb(0 0 0 / 15%);\n  border-radius: 16px;\n  max-width: 860px;\n  margin: 0 auto;\n  padding-bottom: 20px;\n  position: relative;\n"]))),u=h.Ay.a(o||(o=(0,l.A)(["\n  position: absolute;\n  right: 20px;\n  padding: 3px 8px 4px 8px;\n  background: #333333;\n  border-radius: 0 0 6px 6px;\n  text-decoration: initial;\n  color: #fff;\n  transition: all 0.3s;\n  font-size: 14px;\n  &:hover {\n    background-color: #3f51b4;\n  }\n"]))),x=h.Ay.div(i||(i=(0,l.A)(["\n  padding-bottom: 120px;\n"]))),b=h.Ay.footer(a||(a=(0,l.A)(["\n  text-align: center;\n  margin-top: 40px;\n  a {\n    margin: 0 5px;\n  }\n  p {\n    font-size: 12px;\n    text-align: center;\n  }\n"]))),m=h.Ay.div(n||(n=(0,l.A)(["\n  border-bottom: 1px solid var(--color-border-default);\n  border-radius: 16px 16px 0 0;\n  padding: 28px;\n  > h3 {\n    margin: 0;\n    padding-bottom: 12px;\n  }\n"])));class f extends d.Component{constructor(t){super(t),this.editorUrl=void 0,this.getMdStr=void 0,this.example=void 0,this.state={mdStr:""}}componentDidMount(){this.getMdStr&&this.getMdStr().then((t=>{this.setState({mdStr:t.default.source,mdObj:t.default})}))}render(){const{source:t,components:e,data:r}=this.state.mdObj||{};return(0,p.jsxs)(x,{className:"wmde-markdown-var",children:[(0,p.jsxs)(g,{children:[this.editorUrl&&(0,p.jsx)(u,{target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(this.editorUrl),children:"Edit this page"}),this.example&&(0,p.jsxs)(m,{children:[(0,p.jsx)("h3",{children:"Example"}),this.example]}),(0,p.jsx)(c.A,{data:{data:r,components:e,source:t},style:{border:0,boxShadow:"0 0 0"}}),this.editorUrl&&(0,p.jsx)(u,{target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(this.editorUrl),children:"Edit this page"})]}),(0,p.jsxs)(b,{children:[(0,p.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,p.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,p.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,p.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,p.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,p.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,p.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,p.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,p.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}},1984:(t,e,r)=>{"use strict";r.r(e),r.d(e,{Component:()=>d});var s=r(7804),o=r(411),i=r(3623),a=r(7980),n=r(9424);function l(){const{hsva:t,dispatch:e}=(0,s.useContext)(a.ob);return(0,n.jsx)("div",{style:{width:300},children:(0,n.jsx)(o.default,{color:t,onChange:r=>{e({hsva:{...t,...r.hsva}})}})})}class d extends i.A{constructor(){super(...arguments),this.editorUrl="/packages/color-block/README.md",this.getMdStr=()=>r.e(158).then(r.bind(r,2158)),this.example=(0,n.jsx)(l,{})}}},411:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>g});var s=r(8102),o=r(9257),i=r(7804),a=r(2945),n=r(5991),l=r(6966),d=r(9424),c=["prefixCls","className","style","color","colors","onChange"],h=["#D9E3F0","#F47373","#697689","#37D67A","#2CCCE4","#555555","#dce775","#ff8a65","#ba68c8"],p=i.forwardRef(((t,e)=>{var{prefixCls:r="w-color-block",className:i,style:p,color:g,colors:u=h,onChange:x}=t,b=(0,o.A)(t,c),m="string"===typeof g&&(0,a.validHex)(g)?(0,a.hexToHsva)(g):g,f=g?(0,a.hsvaToHex)(m):"",j=(t,e)=>{"string"===typeof t&&(0,a.validHex)(t)&&/(3|6)/.test(String(t.replace(/^#/,"").length))&&x&&x((0,a.color)((0,a.hexToHsva)(t)))},v=(0,s.A)({"--block-background-color":"rgb(255, 255, 255)","--block-box-shadow":"rgb(0 0 0 / 10%) 0 1px",width:170,borderRadius:6,background:"var(--block-background-color)",boxShadow:"var(--block-box-shadow)",position:"relative"},p);return(0,d.jsxs)("div",(0,s.A)({ref:e,className:[r,i].filter(Boolean).join(" "),style:v},b,{children:[(0,d.jsx)("div",{style:{width:0,height:0,borderStyle:"solid",borderWidth:"0 10px 10px",borderColor:"transparent transparent "+f,position:"absolute",top:-10,left:"50%",marginLeft:-10}}),(0,d.jsx)("div",{title:f,style:{backgroundColor:""+f,color:(0,a.getContrastingColor)(f),height:110,fontSize:18,borderRadius:"6px 6px 0 0",display:"flex",alignItems:"center",justifyContent:"center"},children:f.toLocaleUpperCase()}),(0,d.jsx)(l.default,{colors:u,color:f,style:{paddingLeft:10,paddingTop:10},rectProps:{style:{marginRight:10,marginBottom:10,borderRadius:4,height:22,width:22}},onChange:t=>{x&&x((0,a.color)(t))}}),(0,d.jsx)(n.default,{value:f.toLocaleUpperCase(),onChange:(t,e)=>j(e),onBlur:t=>{var e=t.target.value;t.target.value=e.slice(0,6),j(e.slice(0,6))},inputStyle:{height:22,outline:0,borderRadius:3,padding:"0 7px"},style:{padding:10,paddingTop:0,borderRadius:"0 0 6px 6px"}})]}))}));p.displayName="Block";const g=p}}]);
//# sourceMappingURL=995.8a6c0a16.chunk.js.map