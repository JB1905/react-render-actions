import{useState as n,useEffect as t}from"react";var r=function(n){n.switchValue;var t=n.children;return console.log([].concat(t)),t},e=function(n){return n.children},i=function(n){return n.children},u=function(n){for(var t=n.children,r=n.iterationsCount,e=0;e<r;e++)return t},o=function(n){for(var t=n.children,r=n.data,e=(n.key,n.value,0),i=r;e<i.length;e++)return t(i[e])},c=function(n){n.children;var t=n.data,r=n.as,e=n.property;for(e in t)return r(e)},l=function(n){var t=n.data,r=n.children;return t.forEach((function(n,t){return r(n,t)}))},a=function(n){for(var t=n.children,r=n.test;r;)return t},f=function(n){var t=n.children,r=n.condition;do{return t}while(r)},d=function(){return null},h=function(){return null},v=function(n){return n.children},p=function(n){return n.children},s=function(n){var t=n.children,r=n.condition;return[].concat(t).find((function(n){return r?n.type===v:n.type===p}))},y=function(n){var t=n.condition,r=n.children;return t?r:null},b=function(n){var t=n.condition,r=n.children;return t?null:r};function w(n,t){var r,e,i,u,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,e&&(i=2&u[0]?e.return:u[0]?e.throw||((i=e.return)&&i.call(e),0):e.next)&&!(i=i.call(e,u[1])).done)return i;switch(e=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,e=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===u[0]||2===u[0])){o=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){o.label=u[1];break}if(6===u[0]&&o.label<i[1]){o.label=i[1],i=u;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(u);break}i[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(n,o)}catch(n){u=[6,n],e=0}finally{r=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}var m=function(n){return n.children},x=function(n){n.children},g=function(n){n.children},k=function(n){n.children},I=function(n){var t,r,e,i,u=n.children;return t=void 0,r=void 0,i=function(){return w(this,(function(n){return[2,[].concat(u).find((function(n){return n.type===x?null:n.type===m?null:n.type===g?null:n.type===k?null:void 0}))]}))},new((e=void 0)||(e=Promise))((function(n,u){function o(n){try{l(i.next(n))}catch(n){u(n)}}function c(n){try{l(i.throw(n))}catch(n){u(n)}}function l(t){t.done?n(t.value):new e((function(n){n(t.value)})).then(o,c)}l((i=i.apply(t,r||[])).next())}))},C=function(n){return n.children},E=function(n){return n.children},S=function(n){var t=n.promise,r=n.children,e=[].concat(r);t.then((function(){return e.findIndex((function(n){return n.type=C}))})).catch((function(){return e.findIndex((function(n){return n.type=E}))}))},T=function(r){var e=r.children,i=r.initialCounter,u=void 0===i?0:i,o=r.enabled,c=void 0===o||o,l=r.timeout,a=n(u),f=a[0],d=a[1];return t((function(){if(c){var n=setInterval((function(){d(f+1)}),l);return function(){return clearInterval(n)}}}),[f,c,l]),c?e(f):null},G=function(t){var r=t.children,e=t.enabled,i=t.timeout,u=n(!1),o=u[0],c=u[1];return e&&setTimeout((function(){c(!0)}),i),o?r:null},P=function(n){var t=n.data,r=n.children;return t.map((function(n){return r(n)}))},V=function(n){var t=n.data,r=n.pattern;return(0,n.children)(t.filter((function(n){return r(n)})))},j=function(n){n.data,n.children};export{I as Async,m as Await,d as Break,e as Case,g as Catch,h as Continue,i as Default,f as DoWhile,p as Else,V as Filter,k as Finally,u as For,l as ForEach,c as ForIn,o as ForOf,s as If,P as Map,S as RPromise,j as Reduce,E as Reject,C as Resolve,T as SetInterval,G as SetTimeout,r as Switch,v as Then,x as Try,b as Unless,y as When,a as While};
//# sourceMappingURL=react-render-actions.esm.js.map