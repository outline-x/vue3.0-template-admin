import{d as e,r as l,k as a,e as s,c as t,g as o,s as d,q as i,I as n,p,f as c}from"./vendor.b380b2be.js";var r=e({setup:()=>({fileList:l([{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]),handleRemove:(e,l)=>{console.log(e,l)},handlePreview:e=>{console.log(e)}})});const u=e=>(p("data-v-0f0d0c50"),e=e(),c(),e),f={class:"upload-container"},m={class:"copy-container"},v={class:"info"},g=n("文件上传"),b=u((()=>o("span",{style:{"text-align":"left"}},"文件、图片上传场景。",-1))),_={class:"grid-content bg-purple-dark"},h={style:{"text-align":"left"}},j=u((()=>o("span",null,"拖拽上传场景",-1))),y={class:"section"},x=u((()=>o("i",{class:"el-icon-upload"},null,-1))),w=u((()=>o("div",{class:"el-upload__text"},[n("将文件拖到此处，或"),o("em",null,"点击上传")],-1))),k=u((()=>o("div",{class:"el-upload__tip"},"只能上传 jpg/png 文件，且不超过 500kb",-1))),q={style:{"text-align":"left"}},I=u((()=>o("span",null,"图片列表缩略图场景",-1))),L={class:"section"},M=n("点击上传"),P=u((()=>o("div",{class:"el-upload__tip"},"只能上传 jpg/png 文件，且不超过 500kb",-1)));r.render=function(e,l,n,p,c,r){const u=a("el-divider"),R=a("el-upload"),z=a("el-card"),A=a("el-button"),B=a("el-col"),C=a("el-row");return s(),t("div",f,[o("div",m,[o("div",v,[d(u,{"content-position":"left"},{default:i((()=>[g])),_:1}),b]),o("div",null,[d(C,null,{default:i((()=>[d(B,{offset:1,span:22},{default:i((()=>[o("div",_,[d(z,{class:"box-card"},{default:i((()=>[o("div",h,[j,d(u)]),o("div",y,[d(R,{class:"upload-demo",drag:"",action:"https://jsonplaceholder.typicode.com/posts/",multiple:""},{tip:i((()=>[k])),default:i((()=>[x,w])),_:1})])])),_:1}),d(z,{class:"box-card"},{default:i((()=>[o("div",q,[I,d(u)]),o("div",L,[d(R,{class:"upload-demo",action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"list-type":"picture"},{tip:i((()=>[P])),default:i((()=>[d(A,{size:"small",type:"primary"},{default:i((()=>[M])),_:1})])),_:1},8,["on-preview","on-remove","file-list"])])])),_:1})])])),_:1})])),_:1})])])])},r.__scopeId="data-v-0f0d0c50";export{r as default};