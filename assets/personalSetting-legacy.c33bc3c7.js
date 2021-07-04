!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function t(t){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?e(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n,a,r,l,i){try{var o=e[l](i),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(a,r)}var r=document.createElement("style");r.innerHTML=".PersonalSetting[data-v-19978ef5]{margin-top:20px}.PersonalSetting .demo-ruleForm[data-v-19978ef5]{text-align:left}.PersonalSetting .set-title[data-v-19978ef5]{text-align:left}.PersonalSetting .secure-item[data-v-19978ef5]{width:100%;padding:20px;border-bottom:1px solid #f0f0f0;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.PersonalSetting .secure-item .secure-info[data-v-19978ef5]{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.PersonalSetting .secure-item .secure-info .secure-key[data-v-19978ef5]{margin-bottom:4px;color:rgba(0,0,0,.85);font-size:14px;line-height:1.6}.PersonalSetting .secure-item .secure-info .secure-value[data-v-19978ef5]{color:rgba(0,0,0,.45);font-size:14px;line-height:1.6}.PersonalSetting .secure-item .opera-btn[data-v-19978ef5]{color:#1890ff;cursor:pointer}.PersonalSetting .set-info[data-v-19978ef5]{display:flex;flex-direction:row;justify-content:space-around;align-items:flex-start}.PersonalSetting .set-info .avatar[data-v-19978ef5]{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-end}.PersonalSetting .set-info .avatar .preview[data-v-19978ef5]{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;margin-right:20px}.PersonalSetting .set-info .avatar .preview img[data-v-19978ef5]{width:174px;height:174px;border-radius:50%}.PersonalSetting .set-info .avatar .avatar-uploader .el-upload[data-v-19978ef5]:hover{border-color:#409eff}.PersonalSetting .set-info .avatar .avatar-uploader-icon[data-v-19978ef5]{font-size:28px;color:#8c939d;width:178px;height:178px;line-height:178px;text-align:center}.PersonalSetting .set-info .avatar .avatar[data-v-19978ef5]{width:178px;height:178px;display:block}.PersonalSetting .info[data-v-19978ef5]{text-align:left;padding-left:20px;margin-bottom:20px;font-size:12px}.PersonalSetting .card-header[data-v-19978ef5]{display:flex;justify-content:space-between;align-items:center}.PersonalSetting .text[data-v-19978ef5]{font-size:14px}.PersonalSetting .item[data-v-19978ef5]{margin-bottom:18px}.PersonalSetting .box-card[data-v-19978ef5]{width:100%}",document.head.appendChild(r),System.register(["./vendor-legacy.dc16fb0f.js","./request-legacy.5d9998d8.js","./index-legacy.9ddd908d.js"],(function(e){"use strict";var n,r,l,i,o,s,c,u,d,f,p,m,v,g,b,h,x;return{setters:[function(e){n=e.d,r=e.g,l=e.r,i=e.m,o=e.e,s=e.q,c=e.x,u=e.p,d=e.a,f=e.i,p=e.o,m=e.c,v=e.b,g=e.w,b=e.A},function(e){h=e.a},function(e){x=e._}],execute:function(){var y=e("default",n({name:"PersonalSetting",setup:function(){var e=r(),n=l("left"),u=l(),d=i({userSwitch:!1,sysSwitch:!0,taskSwitch:!0}),f=i({email:"",nickname:"",desc:"",mobile:""}),p=l(),m=l(!1),v={email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],nickname:{required:!0,message:"请输入昵称",trigger:["blur","change"]},desc:{required:!0,message:"请输入个人简介",trigger:["blur","change"]},mobile:{required:!0,validator:function(e,t,n){if(""===t)n(new Error("手机号码不可为空哦"));else{/^1[3-9]\d{9}$/.test(t)?n(void 0):n(new Error("请输入正确的手机号码"))}},trigger:["blur","change"]}};o((function(){}));return t(t({handleBack:function(){e.go(-1)},tabPosition:n,settingFormRef:u,settingForm:f,submitForm:function(){u.value.validate(function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=6;break}return m.value=!0,a=t({},f),e.next=5,h.post("/api/setting/basicInfo",a).then((function(e){0===e.data.code?(m.value=!1,c({type:"success",message:e.data.message})):c({type:"warning",message:e.data.message})})).catch((function(e){console.error(e)}));case 5:return e.abrupt("return",!0);case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,l){var i=e.apply(t,n);function o(e){a(i,r,l,o,s,"next",e)}function s(e){a(i,r,l,o,s,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}())},resetForm:function(){u.value.resetFields()},handleAvatarSuccess:function(e,t){p.value=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){if(!/(gif|png|jpg|jpeg)$/i.test(e.type))return c({message:"上传头像图片只能是gif|png|jpg|jpeg 格式!",type:"warning"}),!1;var t=e.size/1024/1024<2;return t||c.error("上传头像图片大小不能超过 2MB!"),t},rules:v,imageUrl:p},s(d)),{},{updateLoading:m})}})),w=g();u("data-v-19978ef5");var S={class:"PersonalSetting"},P={class:"grid-content bg-purple-dark"},k={class:"card-header"},j=v("i",{class:"el-icon-arrow-left"},null,-1),_=b("返回"),V=v("span",null,"个人设置",-1),F=v("div",null,null,-1),O=v("div",{class:"set-title"},[v("span",null,"基本设置")],-1),U={class:"set-info"},z={class:"form-info"},q=b("更新基本信息"),R=b("重置"),A={class:"avatar"},C=v("div",{class:"preview"},[v("span",null,"头像"),v("img",{src:x})],-1),E=v("i",{class:"el-icon-upload"},null,-1),L=b("更换头像"),D=v("div",{class:"set-title"},[v("span",null,"安全设置")],-1),B=v("div",{class:"secure-item"},[v("div",{class:"secure-info"},[v("span",{class:"secure-key"},"账户密码"),v("span",{class:"secure-value"},"当前密码强度：强")]),v("div",{class:"opera-btn"},[v("span",null,"修改")])],-1),I=v("div",{class:"secure-item"},[v("div",{class:"secure-info"},[v("span",{class:"secure-key"},"密保手机"),v("span",{class:"secure-value"},"已绑定手机：138****2234")]),v("div",{class:"opera-btn"},[v("span",null,"修改")])],-1),M=v("div",{class:"secure-item"},[v("div",{class:"secure-info"},[v("span",{class:"secure-key"},"绑定邮箱"),v("span",{class:"secure-value"},"已绑定邮箱：geek****@outlook.com")]),v("div",{class:"opera-btn"},[v("span",null,"修改")])],-1),$=v("div",{class:"set-title"},[v("span",null,"新消息通知")],-1),H={class:"secure-item"},T=v("div",{class:"secure-info"},[v("span",{class:"secure-key"},"账户密码"),v("span",{class:"secure-value"},"用户信息将以系统内部渠道通知")],-1),G={class:"secure-item"},J=v("div",{class:"secure-info"},[v("span",{class:"secure-key"},"系统消息"),v("span",{class:"secure-value"},"系统消息将以系统内部渠道通知")],-1),K={class:"secure-item"},N=v("div",{class:"secure-info"},[v("span",{class:"secure-key"},"代办任务"),v("span",{class:"secure-value"},"代办任务将以系统内部渠道通知")],-1);d();var Q=w((function(e,t,n,a,r,l){var i=f("el-button"),o=f("el-input"),s=f("el-form-item"),c=f("el-form"),u=f("el-upload"),d=f("el-tab-pane"),g=f("el-switch"),b=f("el-tooltip"),h=f("el-tabs"),x=f("el-card"),y=f("el-col"),Q=f("el-row");return p(),m("div",S,[v(Q,null,{default:w((function(){return[v(y,{offset:1,span:22},{default:w((function(){return[v("div",P,[v(x,{class:"box-card"},{header:w((function(){return[v("div",k,[v(i,{class:"button",type:"text",onClick:e.handleBack},{default:w((function(){return[j,_]})),_:1},8,["onClick"]),V,F])]})),default:w((function(){return[v(h,{"tab-position":e.tabPosition},{default:w((function(){return[v(d,{label:"基本设置"},{default:w((function(){return[O,v("div",U,[v("div",z,[v(c,{ref:"settingFormRef",model:e.settingForm,rules:e.rules,"label-width":"100px",class:"demo-ruleForm"},{default:w((function(){return[v(s,{label:"邮箱",prop:"email"},{default:w((function(){return[v(o,{modelValue:e.settingForm.email,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.settingForm.email=t}),placeholder:"请输入邮箱"},null,8,["modelValue"])]})),_:1}),v(s,{label:"昵称",prop:"nickname"},{default:w((function(){return[v(o,{modelValue:e.settingForm.nickname,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.settingForm.nickname=t}),placeholder:"请输入昵称",maxlength:"10"},null,8,["modelValue"])]})),_:1}),v(s,{label:"个人简介",prop:"desc"},{default:w((function(){return[v(o,{modelValue:e.settingForm.desc,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.settingForm.desc=t}),type:"textarea",placeholder:"个人简介",maxlength:"120"},null,8,["modelValue"])]})),_:1}),v(s,{label:"联系电话",prop:"mobile"},{default:w((function(){return[v(o,{modelValue:e.settingForm.mobile,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.settingForm.mobile=t}),placeholder:"请输入11位大陆手机号码"},null,8,["modelValue"])]})),_:1}),v(s,null,{default:w((function(){return[v(i,{type:"primary",loading:e.updateLoading,onClick:t[5]||(t[5]=function(t){return e.submitForm()})},{default:w((function(){return[q]})),_:1},8,["loading"]),v(i,{onClick:t[6]||(t[6]=function(t){return e.resetForm()})},{default:w((function(){return[R]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])]),v("div",A,[C,v(u,{class:"avatar-uploader",action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload},{default:w((function(){return[v(i,{style:{"margin-left":"10px"},size:"small",type:"success"},{default:w((function(){return[E,L]})),_:1})]})),_:1},8,["on-success","before-upload"])])])]})),_:1}),v(d,{label:"安全设置"},{default:w((function(){return[D,B,I,M]})),_:1}),v(d,{label:"新消息通知"},{default:w((function(){return[$,v("div",H,[T,v(b,{content:"是否开启用户信息: ",placement:"top"},{default:w((function(){return[v(g,{modelValue:e.userSwitch,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.userSwitch=t}),"active-color":"#13ce66","inactive-color":"#ff4949","active-value":!0,"inactive-value":!1},null,8,["modelValue"])]})),_:1})]),v("div",G,[J,v(b,{content:"是否开启系统消息: ",placement:"top"},{default:w((function(){return[v(g,{modelValue:e.sysSwitch,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.sysSwitch=t}),"active-color":"#13ce66","inactive-color":"#ff4949","active-value":!0,"inactive-value":!1},null,8,["modelValue"])]})),_:1})]),v("div",K,[N,v(b,{content:"是否开启代办任务消息: ",placement:"top"},{default:w((function(){return[v(g,{modelValue:e.taskSwitch,"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.taskSwitch=t}),"active-color":"#13ce66","inactive-color":"#ff4949","active-value":!0,"inactive-value":!1},null,8,["modelValue"])]})),_:1})])]})),_:1})]})),_:1},8,["tab-position"])]})),_:1})])]})),_:1})]})),_:1})])}));y.render=Q,y.__scopeId="data-v-19978ef5"}}}))}();
