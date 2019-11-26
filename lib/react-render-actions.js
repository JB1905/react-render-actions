import n,{useState as t}from"react";var r=n.createContext({switch:null}),e=function(t){var e=t.switchValue,i=t.children;return n.createElement(r.Provider,{value:e},i)},i=function(n){return n.children},o=function(n){return n.children},c=function(n){for(var t=n.children,r=n.iterationsCount,e=0;e<r;e++)return t},u=function(n){for(var t,r=n.children,e=n.iteration,i=(n.key,n.value,0),o=e;i<o.length;i++)return(t=o[i])[0],t[1],r},l=function(n){for(var t,r=n.children,e=n.iteration,i=(n.key,n.value,0),o=e;i<o.length;i++)return(t=o[i])[0],t[1],r},f=function(n){for(var t=n.children,r=n.iteration;r;)return t},a=function(n){var t=n.children,r=n.iteration;do{return t}while(r)},d=function(n){var t=n.children;return n.condition?t:null},h=function(n){return n.children},v=function(n){return n.children};var p=function(n){!
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function(n,t){var r={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(r[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(e=Object.getOwnPropertySymbols(n);i<e.length;i++)t.indexOf(e[i])<0&&Object.prototype.propertyIsEnumerable.call(n,e[i])&&(r[e[i]]=n[e[i]])}}(n,[])},y=function(n){},b=function(n){},s=function(n){},O=function(n){},m=function(n){},w=function(n){},g=function(n){n.children},j=function(n){},x=function(n){},P=function(n){var t=n.callback,r=n.enabled,e=n.interval;return r&&setInterval((function(){t()}),e),null},k=function(n){var r=n.children,e=(n.enabled,n.timeout),i=t(!1),o=i[0],c=i[1];return setTimeout((function(){c(!0)}),e),o?r:null};export{b as Async,s as Await,i as Case,m as Catch,o as Default,a as DoWhile,h as Else,w as Finally,c as For,l as ForIn,u as ForOf,d as If,g as Promise,x as Reject,j as Resolve,P as SetInterval,k as SetTimeout,e as Switch,v as Then,O as Try,y as Unless,p as When,f as While};
//# sourceMappingURL=react-render-actions.js.map
