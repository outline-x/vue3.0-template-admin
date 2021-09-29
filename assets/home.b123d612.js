var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,r=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&s(e,a,t[a]);if(n)for(var a of n(t))i.call(t,a)&&s(e,a,t[a]);return e},l=(e,n)=>t(e,a(n));import{r as c,u as p,l as d,v as u}from"./index.17007523.js";import{r as m,U as f,l as g,C as v}from"./index.daf65c17.js";import{d as h,s as b,i as w,b as y,x as k,p as j,c as x,m as S,g as P,e as _,f as C,t as O,F as I,n as z,w as L,D as M,Y as T}from"./vendor.cf6ce22a.js";const V="/api/data/world-population";var F=h({name:"Home",components:{},setup(){const e=b({swiperItems:[{name:"vue-next",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c588b8ab65a74d59aa379801136df4e0~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/vuejs/docs-next-zh-cn"},{name:"vitejs",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7351d2dcd7846158604ac8bd57222b5~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/vitejs"},{name:"element-plus",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48a7fd198df44cca9c0dc10a8047bbef~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/element-plus/element-plus"},{name:"tslang",itemSrc:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/610fc57450884ceaae9578689663fe2f~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/Microsoft/TypeScript"}]}),t=p(),a=w((()=>t.getters["settingsModule/getLangState"]));m("point","cloud",{draw(e,t){const a=(e=>{var t;return l(r(r({},e.defaultStyle),e.style),{fontSize:e.data.size,text:e.data.text,textAlign:"center",fontFamily:e.data.font,fill:e.color||(null==(t=null==e?void 0:e.defaultStyle)?void 0:t.stroke),textBaseline:"alphabetic"})})(e),n=t.addShape("text",{attrs:l(r({},a),{x:null==e?void 0:e.x,y:null==e?void 0:e.y})}),o=e.data;return o.rotate&&f.rotate(n,o.rotate*Math.PI/180),n}});const n=async()=>{try{const e=await class{static getWorldPopulation(){return c({url:V,method:"get",json:!0}).then((e=>0===e.status?Promise.resolve(e):Promise.reject(e)))}}.getWorldPopulation(),{dataSets:t}=e.data,a=(new g.View).source(t),n=a.range("value"),o=n[0],i=n[1];a.transform({type:"tag-cloud",fields:["x","value"],size:[800,600],font:"Verdana",padding:0,timeInterval:5e3,rotate(){let e=~~(4*Math.random())%4;return 2===e&&(e=0),90*e},fontSize:e=>e.value?(e.value-o)/(i-o)*56+24:0});const s=new v({container:"container",autoFit:!1,width:800,height:600,padding:0});s.data(a.rows),s.scale({x:{nice:!1},y:{nice:!1}}),s.legend(!1),s.axis(!1),s.tooltip({showTitle:!1,showMarkers:!1}),s.coordinate().reflect("x"),s.point().position("x*y").color("CornflowerBlue").shape("cloud").tooltip("value*category"),s.interaction("element-active"),s.render()}catch(e){console.error(e)}};return y((()=>{n()})),l(r({lang:a,langConfig:d,handleClickImg:e=>{window.open(e,"_blank")}},k(e)),{logo:u})}});const B=L();j("data-v-01ce3aac");const D={class:"home-container page-container"},E={class:"top-container"},W=C("div",{class:"title"},"搜索词云",-1),A={class:"page-title"},H=M("信息链接:"),N=M("Vite2.x +"),U=M("Vue3.x +"),Y=M("TypeScript +"),q=M("Element Plus"),G=T('<div class="word-cloud-wrapper" data-v-01ce3aac><div class="right-bottom" data-v-01ce3aac></div><div class="word-sets" data-v-01ce3aac><div class="sets-module" data-v-01ce3aac><div id="container" data-v-01ce3aac></div></div></div></div>',1);x();const J=B(((e,t,a,n,o,i)=>{const s=S("el-table"),r=S("el-carousel-item"),l=S("el-carousel"),c=S("el-link");return P(),_("div",D,[C("div",null,[C("h2",null,O(e.langConfig.home.internationTip[e.lang]),1),C(s)]),C(l,{interval:4e3,"indicator-position":"outside"},{default:B((()=>[(P(!0),_(I,null,z(e.swiperItems,(t=>(P(),_(r,{key:t},{default:B((()=>[C("img",{class:"vue-element-plus-logo",alt:t.name,src:t.itemSrc,onClick:a=>e.handleClickImg(t.targetLink)},null,8,["alt","src","onClick"])])),_:2},1024)))),128))])),_:1}),C("div",E,[W,C("div",A,[C(c,{type:"info"},{default:B((()=>[H])),_:1}),C(c,{type:"primary",href:"https://www.vitejs.net/guide/"},{default:B((()=>[N])),_:1}),C(c,{type:"success",href:"https://v3.cn.vuejs.org/"},{default:B((()=>[U])),_:1}),C(c,{type:"warning",href:"https://www.tslang.cn/"},{default:B((()=>[Y])),_:1}),C(c,{type:"danger",href:"https://element-plus.gitee.io/#/zh-CN/component/link"},{default:B((()=>[q])),_:1})])]),G])}));F.render=J,F.__scopeId="data-v-01ce3aac";export{F as default};