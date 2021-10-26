import{p as t}from"./parse-svg-path.4a7f6aa5.js";import{a as r}from"./abs-svg-path.e24d81d5.js";var e=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},a=t,n=e,h=r,o=p;function p(t){if(!(this instanceof p))return new p(t);this._path=n(t)?t:a(t),this._path=h(this._path),this._path=function(t){for(var r,e=[],a=["L",0,0],n=0,h=t.length;n<h;n++){var o=t[n];switch(o[0]){case"M":a=["L",o[1],o[2]],e.push(o);break;case"Z":e.push(a);break;case"H":r=e[e.length-1]||["L",0,0],e.push(["L",o[1],r[r.length-1]]);break;case"V":r=e[e.length-1]||["L",0,0],e.push(["L",r[r.length-2],o[1]]);break;default:e.push(o)}}return e}(this._path),this._path=function(t){for(var r,e=0,a=0,n={S:{to:"C",x:3},T:{to:"Q",x:1}},h=0,o=t.length;h<o;h++){var p=t[h],s=n[p[0]];s&&(p[0]=s.to,r&&(r[0]===s.to?(e=2*r[s.x+2]-r[s.x],a=2*r[s.x+3]-r[s.x+1]):(e=r[r.length-2],a=r[r.length-1])),p.splice(1,0,e,a)),r=p}return t}(this._path)}function s(t,r,e,a){var n=t-e,h=r-a;return Math.sqrt(n*n+h*h)}p.prototype.at=function(t,r){return this._walk(t,r).pos},p.prototype.length=function(){return this._walk(null).length},p.prototype._walk=function(t,r){for(var e,a,n=[0,0],h=[0,0,0],o=[0,0],p=0,i=0;i<this._path.length;i++){var u=this._path[i];if("M"===u[0]){if(n[0]=u[1],n[1]=u[2],0===t)return{length:p,pos:n}}else if("C"===u[0]){h[0]=o[0]=n[0],h[1]=o[1]=n[1],h[2]=p;for(var f=100,l=0;l<=f;l++){var c=(e=u,a=M=l/f,Math.pow(1-a,3)*o[0]+3*Math.pow(1-a,2)*a*e[1]+3*(1-a)*Math.pow(a,2)*e[3]+Math.pow(a,3)*e[5]),g=v(u,M);if(p+=s(n[0],n[1],c,g),n[0]=c,n[1]=g,"number"==typeof t&&p>=t){var w=(p-t)/(p-h[2]);return{length:p,pos:[n[0]*(1-w)+h[0]*w,n[1]*(1-w)+h[1]*w]}}h[0]=n[0],h[1]=n[1],h[2]=p}}else if("Q"===u[0]){h[0]=o[0]=n[0],h[1]=o[1]=n[1],h[2]=p;for(f=100,l=0;l<=f;l++){var M;c=_(u,M=l/f),g=b(u,M);if(p+=s(n[0],n[1],c,g),n[0]=c,n[1]=g,"number"==typeof t&&p>=t){w=(p-t)/(p-h[2]);return{length:p,pos:[n[0]*(1-w)+h[0]*w,n[1]*(1-w)+h[1]*w]}}h[0]=n[0],h[1]=n[1],h[2]=p}}else if("L"===u[0]){if(h[0]=n[0],h[1]=n[1],h[2]=p,p+=s(n[0],n[1],u[1],u[2]),n[0]=u[1],n[1]=u[2],"number"==typeof t&&p>=t){w=(p-t)/(p-h[2]);return{length:p,pos:[n[0]*(1-w)+h[0]*w,n[1]*(1-w)+h[1]*w]}}h[0]=n[0],h[1]=n[1],h[2]=p}}return{length:p,pos:n};function v(t,r){return Math.pow(1-r,3)*o[1]+3*Math.pow(1-r,2)*r*t[2]+3*(1-r)*Math.pow(r,2)*t[4]+Math.pow(r,3)*t[6]}function _(t,r){return Math.pow(1-r,2)*o[0]+2*(1-r)*r*t[1]+Math.pow(r,2)*t[3]}function b(t,r){return Math.pow(1-r,2)*o[1]+2*(1-r)*r*t[2]+Math.pow(r,2)*t[4]}};export{o as p};