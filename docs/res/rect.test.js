!function(o){var n={};function r(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=o,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=15)}([function(t,e){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,o){var n=t.__flags||(t.__flags=Object.create(null));if(3!==arguments.length)return n[e];n[e]=o}},function(t,e,o){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var n=[];
/*!
 * Chai version
 */e.version="4.2.0",
/*!
 * Assertion Error
 */
e.AssertionError=o(9);
/*!
 * Utils for plugins (not exported)
 */
var r=o(18);e.use=function(t){return~n.indexOf(t)||(t(e,r),n.push(t)),e},
/*!
 * Utility Functions
 */
e.util=r;
/*!
 * Configuration
 */
var i=o(3);e.config=i;
/*!
 * Primary `Assertion` prototype
 */
var a=o(36);e.use(a);
/*!
 * Core Assertions
 */
var s=o(37);e.use(s);
/*!
 * Expect interface
 */
var c=o(38);e.use(c);
/*!
 * Should interface
 */
var u=o(39);e.use(u);
/*!
 * Assert interface
 */
var l=o(40);e.use(l)},function(t,e){
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,o){var n=t.__flags||(t.__flags=Object.create(null));for(var r in e.__flags||(e.__flags=Object.create(null)),o=3!==arguments.length||o,n)(o||"object"!==r&&"ssfi"!==r&&"lockSsfi"!==r&&"message"!=r)&&(e.__flags[r]=n[r])}},function(t,e){t.exports={includeStack:!1,showDiff:!0,truncateThreshold:40,useProxy:!0,proxyExcludedKeys:["then","catch","inspect","toJSON"]}},function(t,e,o){var n=o(3);
/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */t.exports=function(){return n.useProxy&&"undefined"!=typeof Proxy&&"undefined"!=typeof Reflect}},function(t,e){var n=Object.getOwnPropertyDescriptor(function(){},"length");
/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */t.exports=function(t,e,o){return n.configurable&&Object.defineProperty(t,"length",{get:function(){if(o)throw Error("Invalid Chai property: "+e+'.length. Due to a compatibility issue, "length" cannot directly follow "'+e+'". Use "'+e+'.lengthOf" instead.');throw Error("Invalid Chai property: "+e+'.length. See docs for proper usage of "'+e+'".')}}),t}},function(t,e,o){var a=o(3),s=o(0),c=o(13),n=o(4),u=["__flags","__methods","_obj","assert"];t.exports=function(t,i){return n()?new Proxy(t,{get:function t(e,o){if("string"!=typeof o||-1!==a.proxyExcludedKeys.indexOf(o)||Reflect.has(e,o))return-1!==u.indexOf(o)||s(e,"lockSsfi")||s(e,"ssfi",t),Reflect.get(e,o);if(i)throw Error("Invalid Chai property: "+i+"."+o+'. See docs for proper usage of "'+i+'".');var n=null,r=4;throw c(e).forEach(function(t){if(!Object.prototype.hasOwnProperty(t)&&-1===u.indexOf(t)){var e=function(t,e,o){if(Math.abs(t.length-e.length)>=o)return o;for(var n=[],r=0;r<=t.length;r++)n[r]=Array(e.length+1).fill(0),n[r][0]=r;for(var i=0;i<e.length;i++)n[0][i]=i;for(r=1;r<=t.length;r++){var a=t.charCodeAt(r-1);for(i=1;i<=e.length;i++)Math.abs(r-i)>=o?n[r][i]=o:n[r][i]=Math.min(n[r-1][i]+1,n[r][i-1]+1,n[r-1][i-1]+(a===e.charCodeAt(i-1)?0:1))}return n[t.length][e.length]}(o,t,r);e<r&&(n=t,r=e)}}),null!==n?Error("Invalid Chai property: "+o+'. Did you mean "'+n+'"?'):Error("Invalid Chai property: "+o)}}):t}},function(t,e,o){(function(m){t.exports=function(){"use strict";var r="function"==typeof Promise,i="object"==typeof self?self:m,t="undefined"!=typeof Symbol,a="undefined"!=typeof Map,s="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,l="undefined"!=typeof DataView,e=t&&void 0!==Symbol.iterator,h=t&&void 0!==Symbol.toStringTag,o=s&&"function"==typeof Set.prototype.entries,n=a&&"function"==typeof Map.prototype.entries,f=o&&Object.getPrototypeOf((new Set).entries()),p=n&&Object.getPrototypeOf((new Map).entries()),d=e&&"function"==typeof Array.prototype[Symbol.iterator],b=d&&Object.getPrototypeOf([][Symbol.iterator]()),g=e&&"function"==typeof String.prototype[Symbol.iterator],w=g&&Object.getPrototypeOf(""[Symbol.iterator]());return function(t){var e=typeof t;if("object"!=e)return e;if(null===t)return"null";if(t===i)return"global";if(Array.isArray(t)&&(!1==h||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var o=h&&t[Symbol.toStringTag];if("string"==typeof o)return o;var n=Object.getPrototypeOf(t);if(n===RegExp.prototype)return"RegExp";if(n===Date.prototype)return"Date";if(r&&n===Promise.prototype)return"Promise";if(s&&n===Set.prototype)return"Set";if(a&&n===Map.prototype)return"Map";if(u&&n===WeakSet.prototype)return"WeakSet";if(c&&n===WeakMap.prototype)return"WeakMap";if(l&&n===DataView.prototype)return"DataView";if(a&&n===p)return"Map Iterator";if(s&&n===f)return"Set Iterator";if(d&&n===b)return"Array Iterator";if(g&&n===w)return"String Iterator";return null!==n?Object.prototype.toString.call(t).slice(8,-1):"Object"}}()}).call(this,o(21))},function(t,g,e){var w=e(12),m=e(13),y=e(24),v=e(3);t.exports=function(t,e,o,n){return q({showHidden:e,seen:[],stylize:function(t){return t}},t,void 0===o?2:o)};var x=function(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&"nodeType"in t&&1===t.nodeType&&"string"==typeof t.nodeName};function q(e,o,n){if(o&&"function"==typeof o.inspect&&o.inspect!==g.inspect&&(!o.constructor||o.constructor.prototype!==o)){var t=o.inspect(n,e);return"string"!=typeof t&&(t=q(e,t,n)),t}var r=function(t,e){switch(typeof e){case"undefined":return t.stylize("undefined","undefined");case"string":var o="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(o,"string");case"number":return 0===e&&1/e==-1/0?t.stylize("-0","number"):t.stylize(""+e,"number");case"boolean":return t.stylize(""+e,"boolean");case"symbol":return t.stylize(e.toString(),"symbol")}if(null===e)return t.stylize("null","null")}(e,o);if(r)return r;if(x(o)){if("outerHTML"in o)return o.outerHTML;try{if(document.xmlVersion)return(new XMLSerializer).serializeToString(o);var i=document.createElementNS("http://www.w3.org/1999/xhtml","_");i.appendChild(o.cloneNode(!1));var a=i.innerHTML.replace("><",">"+o.innerHTML+"<");return i.innerHTML="",a}catch(t){}}var s,c,u=y(o),l=e.showHidden?m(o):u;if(0===l.length||N(o)&&(1===l.length&&"stack"===l[0]||2===l.length&&"description"===l[0]&&"stack"===l[1])){if("function"==typeof o)return c=(s=w(o))?": "+s:"",e.stylize("[Function"+c+"]","special");if(S(o))return e.stylize(RegExp.prototype.toString.call(o),"regexp");if(M(o))return e.stylize(Date.prototype.toUTCString.call(o),"date");if(N(o))return O(o)}var h,f="",p=!1,d=!1,b=["{","}"];if(function(t){return"object"==typeof t&&/\w+Array]$/.test(P(t))}(o)&&(d=!0,b=["[","]"]),function(t){return Array.isArray(t)||"object"==typeof t&&"[object Array]"===P(t)}(o)&&(p=!0,b=["[","]"]),"function"==typeof o&&(f=" [Function"+(c=(s=w(o))?": "+s:"")+"]"),S(o)&&(f=" "+RegExp.prototype.toString.call(o)),M(o)&&(f=" "+Date.prototype.toUTCString.call(o)),N(o))return O(o);if(0===l.length&&(!p||0==o.length))return b[0]+f+b[1];if(n<0)return S(o)?e.stylize(RegExp.prototype.toString.call(o),"regexp"):e.stylize("[Object]","special");if(e.seen.push(o),p)h=function(e,o,n,r,t){for(var i=[],a=0,s=o.length;a<s;++a)Object.prototype.hasOwnProperty.call(o,String(a))?i.push(j(e,o,n,r,String(a),!0)):i.push("");return t.forEach(function(t){t.match(/^\d+$/)||i.push(j(e,o,n,r,t,!0))}),i}(e,o,n,u,l);else{if(d)return function(t){for(var e="[ ",o=0;o<t.length;++o){if(e.length>=v.truncateThreshold-7){e+="...";break}e+=t[o]+", "}-1!==(e+=" ]").indexOf(",  ]")&&(e=e.replace(",  ]"," ]"));return e}(o);h=l.map(function(t){return j(e,o,n,u,t,p)})}return e.seen.pop(),function(t,e,o){if(60<t.reduce(function(t,e){return t+e.length+1},0))return o[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+o[1];return o[0]+e+" "+t.join(", ")+" "+o[1]}(h,f,b)}function O(t){return"["+Error.prototype.toString.call(t)+"]"}function j(t,e,o,n,r,i){var a,s,c=Object.getOwnPropertyDescriptor(e,r);if(c&&(c.get?s=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(s=t.stylize("[Setter]","special"))),n.indexOf(r)<0&&(a="["+r+"]"),s||(t.seen.indexOf(e[r])<0?-1<(s=q(t,e[r],null===o?null:o-1)).indexOf("\n")&&(s=i?s.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+s.split("\n").map(function(t){return"   "+t}).join("\n")):s=t.stylize("[Circular]","special")),void 0===a){if(i&&r.match(/^\d+$/))return s;a=(a=JSON.stringify(""+r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),t.stylize(a,"string"))}return a+": "+s}function S(t){return"object"==typeof t&&"[object RegExp]"===P(t)}function M(t){return"object"==typeof t&&"[object Date]"===P(t)}function N(t){return"object"==typeof t&&"[object Error]"===P(t)}function P(t){return Object.prototype.toString.call(t)}},function(t,e){
/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
function i(){var n=[].slice.call(arguments);function r(e,o){Object.keys(o).forEach(function(t){~n.indexOf(t)||(e[t]=o[t])})}return function(){for(var t=[].slice.call(arguments),e=0,o={};e<t.length;e++)r(o,t[e]);return o}}function a(t,e,o){var n=i("name","message","stack","constructor","toJSON")(e||{});for(var r in this.message=t||"Unspecified AssertionError",this.showDiff=!1,n)this[r]=n[r];if(o=o||a,Error.captureStackTrace)Error.captureStackTrace(this,o);else try{throw new Error}catch(t){this.stack=t.stack}}
/*!
 * Inherit from Error.prototype
 */
/*!
 * Statically set name
 */
((
/*!
 * Primary Exports
 */
t.exports=a).prototype=Object.create(Error.prototype)).name="AssertionError",(
/*!
 * Ensure correct constructor
 */
a.prototype.constructor=a).prototype.toJSON=function(t){var e=i("constructor","toJSON","stack")({name:this.name},this);return!1!==t&&this.stack&&(e.stack=this.stack),e}},function(t,e){
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){return 4<e.length?e[4]:t._obj}},function(t,e,o){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var r=o(8),i=o(3);t.exports=function(t){var e=r(t),o=Object.prototype.toString.call(t);if(i.truncateThreshold&&e.length>=i.truncateThreshold){if("[object Function]"===o)return t.name&&""!==t.name?"[Function: "+t.name+"]":"[Function]";if("[object Array]"===o)return"[ Array("+t.length+") ]";if("[object Object]"!==o)return e;var n=Object.keys(t);return"{ Object ("+(2<n.length?n.splice(0,2).join(", ")+", ...":n.join(", "))+") }"}return e}},function(t,e,o){"use strict";var n=Function.prototype.toString,r=/\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;t.exports=function(t){if("function"!=typeof t)return null;var e="";if(void 0===Function.prototype.name&&void 0===t.name){var o=n.call(t).match(r);o&&(e=o[1])}else e=t.name;return e}},function(t,e){
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t){var e=Object.getOwnPropertyNames(t);function o(t){-1===e.indexOf(t)&&e.push(t)}for(var n=Object.getPrototypeOf(t);null!==n;)Object.getOwnPropertyNames(n).forEach(o),n=Object.getPrototypeOf(n);return e}},function(t,e){
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(e){return"function"!=typeof Object.getOwnPropertySymbols?[]:Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})}},function(t,e,o){t.exports=o(16)},function(t,e,o){"use strict";var n=o(17).expect,r=o(41).Rect;describe("Rect",function(){describe("constructor",function(){it("Should create a Rect when no arguments",function(){var t=new r;n(t.top).to.equal(0),n(t.left).to.equal(0),n(t.right).to.equal(0),n(t.bottom).to.equal(0),n(t.width).to.equal(0),n(t.height).to.equal(0)}),it("Should create a Rect when top and left are specified",function(){var t=new r({top:10,left:20});n(t.top).to.equal(10),n(t.left).to.equal(20),n(t.right).to.equal(20),n(t.bottom).to.equal(10),n(t.width).to.equal(0),n(t.height).to.equal(0)}),it("Should create a Rect when right and bottom are specified",function(){var t=new r({right:30,bottom:40});n(t.top).to.equal(40),n(t.left).to.equal(30),n(t.right).to.equal(30),n(t.bottom).to.equal(40),n(t.width).to.equal(0),n(t.height).to.equal(0)}),it("Should create a Rect when width and height are specified",function(){var t=new r({width:50,height:60});n(t.top).to.equal(0),n(t.left).to.equal(0),n(t.right).to.equal(50),n(t.bottom).to.equal(60),n(t.width).to.equal(50),n(t.height).to.equal(60)}),it("Should create a Rect when top, left, width and height are specified",function(){var t=new r({top:10,left:20,width:100,height:120});n(t.top).to.equal(10),n(t.left).to.equal(20),n(t.right).to.equal(120),n(t.bottom).to.equal(130),n(t.width).to.equal(100),n(t.height).to.equal(120)}),it("Should create a Rect when right, bottom, width and height are specified",function(){var t=new r({right:130,bottom:140,width:60,height:80});n(t.top).to.equal(60),n(t.left).to.equal(70),n(t.right).to.equal(130),n(t.bottom).to.equal(140),n(t.width).to.equal(60),n(t.height).to.equal(80)}),it("Should create a Rect when top, left, right and bottom are specified",function(){var t=new r({top:5,left:10,right:120,bottom:130});n(t.top).to.equal(5),n(t.left).to.equal(10),n(t.right).to.equal(120),n(t.bottom).to.equal(130),n(t.width).to.equal(110),n(t.height).to.equal(125)}),it("Should create a Rect with top, left, right and bottom \n\twhen all props are specified",function(){var t=new r({top:5,left:10,right:120,bottom:130,width:50,height:20});n(t.top).to.equal(5),n(t.left).to.equal(10),n(t.right).to.equal(120),n(t.bottom).to.equal(130),n(t.width).to.equal(110),n(t.height).to.equal(125)}),it("Should set zero when arguments are illegal",function(){var t=new r({top:NaN,left:{},width:10,height:20});n(t.top).to.equal(0),n(t.left).to.equal(0),n(t.right).to.equal(10),n(t.bottom).to.equal(20),n(t.width).to.equal(10),n(t.height).to.equal(20)}),it("Should set zero when arguments are illegal",function(){var t=new r({top:10,left:20,width:NaN,height:{}});n(t.top).to.equal(10),n(t.left).to.equal(20),n(t.right).to.equal(20),n(t.bottom).to.equal(10),n(t.width).to.equal(0),n(t.height).to.equal(0)}),it("Should set zero when arguments are illegal",function(){var t=new r({right:[],bottom:"12",width:10,height:20});n(t.top).to.equal(-20),n(t.left).to.equal(-10),n(t.right).to.equal(0),n(t.bottom).to.equal(0),n(t.width).to.equal(10),n(t.height).to.equal(20)}),it("Should set zero when arguments are illegal",function(){var t=new r({right:10,bottom:20,width:NaN,height:{}});n(t.top).to.equal(20),n(t.left).to.equal(10),n(t.right).to.equal(10),n(t.bottom).to.equal(20),n(t.width).to.equal(0),n(t.height).to.equal(0)}),it("Should set zero when arguments are illegal",function(){var t=new r({top:10,left:20,right:!0,bottom:""});n(t.top).to.equal(10),n(t.left).to.equal(20),n(t.right).to.equal(0),n(t.bottom).to.equal(0),n(t.width).to.equal(-20),n(t.height).to.equal(-10)}),it("Should set zero when arguments are illegal",function(){var t=new r({width:1/0,height:"ABC"});n(t.top).to.equal(0),n(t.left).to.equal(0),n(t.right).to.equal(0),n(t.bottom).to.equal(0),n(t.width).to.equal(0),n(t.height).to.equal(0)})}),describe("normalize",function(){it("Should swap left and right if left > right",function(){var t=new r({left:30,right:10});t.normalize(),n(t.left).to.equal(10),n(t.right).to.equal(30),n(t.width).to.equal(20)}),it("Should not swap left and right if left <= right",function(){var t=new r({left:10,right:30});t.normalize(),n(t.left).to.equal(10),n(t.right).to.equal(30),n(t.width).to.equal(20),(t=new r({left:30,right:30})).normalize(),n(t.left).to.equal(30),n(t.right).to.equal(30),n(t.width).to.equal(0)}),it("Should swap top and bottom if top > bottom",function(){var t=new r({top:30,bottom:10});t.normalize(),n(t.top).to.equal(10),n(t.bottom).to.equal(30),n(t.height).to.equal(20)}),it("Should not swap top and bottom if top <= bottom",function(){var t=new r({top:10,bottom:30});t.normalize(),n(t.top).to.equal(10),n(t.bottom).to.equal(30),n(t.height).to.equal(20),(t=new r({top:10,bottom:10})).normalize(),n(t.top).to.equal(10),n(t.bottom).to.equal(10),n(t.height).to.equal(0)})}),describe("setter",function(){it("Should set left",function(){var t=new r({left:10,right:20,top:30,bottom:40});t.left=-15,n(t.left).to.equal(-15),n(t.right).to.equal(20),n(t.top).to.equal(30),n(t.bottom).to.equal(40),n(t.width).to.equal(35),n(t.height).to.equal(10)}),it("Should set right",function(){var t=new r({left:10,right:20,top:30,bottom:40});t.right=100,n(t.left).to.equal(10),n(t.right).to.equal(100),n(t.top).to.equal(30),n(t.bottom).to.equal(40),n(t.width).to.equal(90),n(t.height).to.equal(10)}),it("Should set top",function(){var t=new r({left:10,right:20,top:30,bottom:40});t.top=80,n(t.left).to.equal(10),n(t.right).to.equal(20),n(t.top).to.equal(80),n(t.bottom).to.equal(40),n(t.width).to.equal(10),n(t.height).to.equal(-40)}),it("Should set bottom",function(){var t=new r({left:10,right:20,top:30,bottom:40});t.bottom=100,n(t.left).to.equal(10),n(t.right).to.equal(20),n(t.top).to.equal(30),n(t.bottom).to.equal(100),n(t.width).to.equal(10),n(t.height).to.equal(70)}),it("Should set width",function(){var t=new r({left:10,right:20,top:30,bottom:40});t.width=100,n(t.left).to.equal(10),n(t.right).to.equal(110),n(t.top).to.equal(30),n(t.bottom).to.equal(40),n(t.width).to.equal(100),n(t.height).to.equal(10)}),it("Should set height",function(){var t=new r({left:10,right:20,top:30,bottom:40});t.height=100,n(t.left).to.equal(10),n(t.right).to.equal(20),n(t.top).to.equal(30),n(t.bottom).to.equal(130),n(t.width).to.equal(10),n(t.height).to.equal(100)}),it("Should ignore when value is illegal",function(){var t=new r({left:10,right:20,top:30,bottom:40});t.left=NaN,n(t.left).to.equal(10),n(t.right).to.equal(20),n(t.top).to.equal(30),n(t.bottom).to.equal(40),n(t.width).to.equal(10),n(t.height).to.equal(10),t.right={},n(t.left).to.equal(10),n(t.right).to.equal(20),n(t.top).to.equal(30),n(t.bottom).to.equal(40),n(t.width).to.equal(10),n(t.height).to.equal(10),t.top=[],n(t.left).to.equal(10),n(t.right).to.equal(20),n(t.top).to.equal(30),n(t.bottom).to.equal(40),n(t.width).to.equal(10),n(t.height).to.equal(10),t.bottom="abc",n(t.left).to.equal(10),n(t.right).to.equal(20),n(t.top).to.equal(30),n(t.bottom).to.equal(40),n(t.width).to.equal(10),n(t.height).to.equal(10),t.width=!0,n(t.left).to.equal(10),n(t.right).to.equal(20),n(t.top).to.equal(30),n(t.bottom).to.equal(40),n(t.width).to.equal(10),n(t.height).to.equal(10),t.height=!1,n(t.left).to.equal(10),n(t.right).to.equal(20),n(t.top).to.equal(30),n(t.bottom).to.equal(40),n(t.width).to.equal(10),n(t.height).to.equal(10)})}),describe("moveTo",function(){it("Should move a rect by top-left positions",function(){var t=new r({left:10,top:20,right:100,bottom:200});t.moveTo(50,40),n(t.left).to.equal(50),n(t.right).to.equal(140),n(t.top).to.equal(40),n(t.bottom).to.equal(220),n(t.width).to.equal(90),n(t.height).to.equal(180)})}),describe("moveBy",function(){it("Should move a rect by delta",function(){var t=new r({left:10,top:20,right:100,bottom:200});t.moveBy(50,40),n(t.left).to.equal(60),n(t.right).to.equal(150),n(t.top).to.equal(60),n(t.bottom).to.equal(240),n(t.width).to.equal(90),n(t.height).to.equal(180)})}),describe("resizeTo",function(){it("Should resize a rect by size",function(){var t=new r({left:10,top:20,right:100,bottom:200});t.resizeTo(200,300),n(t.left).to.equal(10),n(t.top).to.equal(20),n(t.right).to.equal(210),n(t.bottom).to.equal(320),n(t.width).to.equal(200),n(t.height).to.equal(300)})}),describe("resizeBy",function(){it("Should resize a rect by delta",function(){var t=new r({left:10,top:20,right:100,bottom:200});t.resizeBy(200,300),n(t.left).to.equal(10),n(t.top).to.equal(20),n(t.right).to.equal(300),n(t.bottom).to.equal(500),n(t.width).to.equal(290),n(t.height).to.equal(480)})}),describe("interect",function(){it("Should return true when two rects are intersect",function(){var t=new r({left:10,top:20,right:30,bottom:40}),e=new r({left:20,top:10,right:40,bottom:50});n(t.intersect(e)).to.be.true,n(e.intersect(t)).to.be.true,n(t.intersect(t)).to.be.true,n(e.intersect(e)).to.be.true}),it("Should return false when two rects are not intersect",function(){var t=new r({left:10,top:20,right:30,bottom:40}),e=new r({left:31,top:10,right:40,bottom:50}),o=new r({left:20,top:41,right:40,bottom:50});n(t.intersect(e)).to.be.false,n(e.intersect(t)).to.be.false,n(t.intersect(o)).to.be.false,n(o.intersect(t)).to.be.false}),it("Should return true when two rects are intersect only their corners",function(){var t=new r({left:10,top:20,right:30,bottom:40}),e=new r({left:30,top:40,right:40,bottom:50});n(t.intersect(e)).to.be.true,n(e.intersect(t)).to.be.true}),it("Should return false when illegal argument",function(){var t=new r({left:10,top:20,right:30,bottom:40});n(t.intersect(void 0)).to.be.false,n(t.intersect(null)).to.be.false,n(t.intersect(!0)).to.be.false,n(t.intersect(!1)).to.be.false,n(t.intersect(0)).to.be.false,n(t.intersect(123)).to.be.false,n(t.intersect("")).to.be.false,n(t.intersect("abc")).to.be.false,n(t.intersect([])).to.be.false,n(t.intersect({})).to.be.false;var e=new r;n(e.intersect({})).to.be.false})}),describe("contains",function(){it("Should return true when a rect contains a point",function(){var t=new r({left:10,top:20,right:30,bottom:40});n(t.contains({x:20,y:30})).to.be.true}),it("Should return true when a point is on a cornor of a rect",function(){var t=new r({left:10,top:20,right:30,bottom:40});n(t.contains({x:10,y:20})).to.be.true,n(t.contains({x:10,y:40})).to.be.true,n(t.contains({x:30,y:20})).to.be.true,n(t.contains({x:30,y:40})).to.be.true}),it("Should return false when a rect does not contains a point",function(){var t=new r({left:10,top:20,right:30,bottom:40});n(t.contains({x:9,y:30})).to.be.false,n(t.contains({x:31,y:30})).to.be.false,n(t.contains({x:20,y:19})).to.be.false,n(t.contains({x:20,y:41})).to.be.false}),it("Should return true when a rect contains another rect",function(){var t=new r({left:10,top:20,right:30,bottom:40}),e=new r({left:11,top:21,right:29,bottom:39});n(t.contains(e)).to.be.true,n(t.contains(t)).to.be.true,n(e.contains(e)).to.be.true}),it("Should return false when a rect does not contains another rect",function(){var t=new r({left:10,top:20,right:30,bottom:40}),e=new r({left:11,top:21,right:29,bottom:39});n(e.contains(t)).to.be.false}),it("Should return false when illegal argument",function(){var t=new r({left:10,top:20,right:30,bottom:40});n(t.contains(void 0)).to.be.false,n(t.contains(null)).to.be.false,n(t.contains(!0)).to.be.false,n(t.contains(!1)).to.be.false,n(t.contains(0)).to.be.false,n(t.contains(123)).to.be.false,n(t.contains("")).to.be.false,n(t.contains("abc")).to.be.false,n(t.contains([])).to.be.false,n(t.contains({})).to.be.false;var e=new r;n(e.contains({})).to.be.false})}),describe("inspect",function(){it("Should return property values by `.inspect` function",function(){var t=new r;n(t.inspect()).to.equal("{ left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 }"),t.width=100,n(t.inspect()).to.equal("{ left: 0, top: 0, right: 100, bottom: 0, width: 100, height: 0 }"),t.height=50,n(t.inspect()).to.equal("{ left: 0, top: 0, right: 100, bottom: 50, width: 100, height: 50 }"),t.moveTo(5,8),n(t.inspect()).to.equal("{ left: 5, top: 8, right: 105, bottom: 58, width: 100, height: 50 }")})}),describe("toString",function(){it("Should return property values by `.toString` function",function(){var t=new r;n(t.toString()).to.equal("{ left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 }"),t.width=100,n(t.toString()).to.equal("{ left: 0, top: 0, right: 100, bottom: 0, width: 100, height: 0 }"),t.height=50,n(t.toString()).to.equal("{ left: 0, top: 0, right: 100, bottom: 50, width: 100, height: 50 }"),t.moveTo(5,8),n(t.toString()).to.equal("{ left: 5, top: 8, right: 105, bottom: 58, width: 100, height: 50 }")})})})},function(t,e,o){t.exports=o(1)},function(t,e,o){
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Dependencies that are used for multiple exports are required here only once
 */
var n=o(19);
/*!
 * test utility
 */e.test=o(20),
/*!
 * type utility
 */
e.type=o(7),
/*!
 * expectTypes utility
 */
e.expectTypes=o(22),
/*!
 * message utility
 */
e.getMessage=o(23),
/*!
 * actual utility
 */
e.getActual=o(10),
/*!
 * Inspect util
 */
e.inspect=o(8),
/*!
 * Object Display util
 */
e.objDisplay=o(11),
/*!
 * Flag utility
 */
e.flag=o(0),
/*!
 * Flag transferring utility
 */
e.transferFlags=o(2),
/*!
 * Deep equal utility
 */
e.eql=o(25),
/*!
 * Deep path info
 */
e.getPathInfo=n.getPathInfo,
/*!
 * Check if a property exists
 */
e.hasProperty=n.hasProperty,
/*!
 * Function name
 */
e.getName=o(12),
/*!
 * add Property
 */
e.addProperty=o(26),
/*!
 * add Method
 */
e.addMethod=o(27),
/*!
 * overwrite Property
 */
e.overwriteProperty=o(28),
/*!
 * overwrite Method
 */
e.overwriteMethod=o(29),
/*!
 * Add a chainable method
 */
e.addChainableMethod=o(30),
/*!
 * Overwrite chainable method
 */
e.overwriteChainableMethod=o(31),
/*!
 * Compare by inspect method
 */
e.compareByInspect=o(32),
/*!
 * Get own enumerable property symbols method
 */
e.getOwnEnumerablePropertySymbols=o(14),
/*!
 * Get own enumerable properties method
 */
e.getOwnEnumerableProperties=o(33),
/*!
 * Checks error against a given set of criteria
 */
e.checkError=o(34),
/*!
 * Proxify util
 */
e.proxify=o(6),
/*!
 * addLengthGuard util
 */
e.addLengthGuard=o(5),
/*!
 * isProxyEnabled helper
 */
e.isProxyEnabled=o(4),
/*!
 * isNaN method
 */
e.isNaN=o(35)},function(t,e,o){"use strict";function i(t,e){return null!=t&&e in Object(t)}function a(t){return t.replace(/([^\\])\[/g,"$1.[").match(/(\\\.|[^.]+?)+/g).map(function(t){var e=/^\[(\d+)\]$/.exec(t);return e?{i:parseFloat(e[1])}:{p:t.replace(/\\([.\[\]])/g,"$1")}})}function s(t,e,o){var n=t,r=null;o=void 0===o?e.length:o;for(var i=0;i<o;i++){var a=e[i];n&&(n=void 0===a.p?n[a.i]:n[a.p],i===o-1&&(r=n))}return r}function n(t,e){var o=a(e),n=o[o.length-1],r={parent:1<o.length?s(t,o,o.length-1):t,name:n.p||n.i,value:s(t,o)};return r.exists=i(r.parent,r.name),r}t.exports={hasProperty:i,getPathInfo:n,getPathValue:function(t,e){return n(t,e).value},setPathValue:function(t,e,o){return function(t,e,o){for(var n=t,r=o.length,i=null,a=0;a<r;a++){var s=null,c=null;if(i=o[a],a===r-1)n[s=void 0===i.p?i.i:i.p]=e;else if(void 0!==i.p&&n[i.p])n=n[i.p];else if(void 0!==i.i&&n[i.i])n=n[i.i];else{var u=o[a+1];s=void 0===i.p?i.i:i.p,c=void 0===u.p?[]:{},n[s]=c,n=n[s]}}}(t,o,a(e)),t}}},function(t,e,o){
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var r=o(0);t.exports=function(t,e){var o=r(t,"negate"),n=e[0];return o?!n:n}},function(t,e){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"==typeof window&&(o=window)}t.exports=o},function(t,e,o){
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var a=o(9),s=o(0),c=o(7);t.exports=function(t,n){var e=s(t,"message"),o=s(t,"ssfi");e=e?e+": ":"",t=s(t,"object"),(n=n.map(function(t){return t.toLowerCase()})).sort();var r=n.map(function(t,e){var o=~["a","e","i","o","u"].indexOf(t.charAt(0))?"an":"a";return(1<n.length&&e===n.length-1?"or ":"")+o+" "+t}).join(", "),i=c(t).toLowerCase();if(!n.some(function(t){return i===t}))throw new a(e+"object tested must be "+r+", but "+i+" given",void 0,o)}},function(t,e,o){
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var c=o(0),u=o(10),l=o(11);t.exports=function(t,e){var o=c(t,"negate"),n=c(t,"object"),r=e[3],i=u(t,e),a=o?e[2]:e[1],s=c(t,"message");return"function"==typeof a&&(a=a()),a=(a=a||"").replace(/#\{this\}/g,function(){return l(n)}).replace(/#\{act\}/g,function(){return l(i)}).replace(/#\{exp\}/g,function(){return l(r)}),s?s+": "+a:a}},function(t,e){
/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t){var e=[];for(var o in t)e.push(o);return e}},function(t,e,o){"use strict";
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */var l=o(7);function n(){this._key="chai/deep-eql__"+Math.random()+Date.now()}n.prototype={get:function(t){return t[this._key]},set:function(t,e){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:e,configurable:!0})}};var h="function"==typeof WeakMap?WeakMap:n;
/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function f(t,e,o){if(!o||i(t)||i(e))return null;var n=o.get(t);if(n){var r=n.get(e);if("boolean"==typeof r)return r}return null}
/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function p(t,e,o,n){if(o&&!i(t)&&!i(e)){var r=o.get(t);r?r.set(e,n):((r=new h).set(e,n),o.set(t,r))}}
/*!
 * Primary Export
 */function d(t,e,o){if(o&&o.comparator)return r(t,e,o);var n=b(t,e);return null!==n?n:r(t,e,o)}function b(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e||!i(t)&&!i(e)&&null}
/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function r(t,e,o){(o=o||{}).memoize=!1!==o.memoize&&(o.memoize||new h);var n=o&&o.comparator,r=f(t,e,o.memoize);if(null!==r)return r;var i=f(e,t,o.memoize);if(null!==i)return i;if(n){var a=n(t,e);if(!1===a||!0===a)return p(t,e,o.memoize,a),a;var s=b(t,e);if(null!==s)return s}var c=l(t);if(c!==l(e))return p(t,e,o.memoize,!1),!1;p(t,e,o.memoize,!0);var u=function(t,e,o,n){switch(o){case"String":case"Number":case"Boolean":case"Date":return d(t.valueOf(),e.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":case"Error":return t===e;case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return w(t,e,n);case"RegExp":
/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */
return function(t,e){return t.toString()===e.toString()}
/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */(t,e);case"Generator":
/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
return function(t,e,o){return w(y(t),y(e),o)}
/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */(t,e,n);case"DataView":return w(new Uint8Array(t.buffer),new Uint8Array(e.buffer),n);case"ArrayBuffer":return w(new Uint8Array(t),new Uint8Array(e),n);case"Set":case"Map":return g(t,e,n);default:
/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
return function(t,e,o){var n=v(t),r=v(e);if(n.length&&n.length===r.length)return n.sort(),r.sort(),!1!==w(n,r)&&
/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function(t,e,o,n){var r=o.length;if(0===r)return!0;for(var i=0;i<r;i+=1)if(!1===d(t[o[i]],e[o[i]],n))return!1;return!0}(t,e,n,o);var i=m(t),a=m(e);if(i.length&&i.length===a.length)return i.sort(),a.sort(),w(i,a,o);return 0===n.length&&0===i.length&&0===r.length&&0===a.length}
/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */(t,e,n)}}(t,e,c,o);return p(t,e,o.memoize,u),u}function g(t,e,o){if(t.size!==e.size)return!1;if(0===t.size)return!0;var n=[],r=[];return t.forEach(function(t,e){n.push([t,e])}),e.forEach(function(t,e){r.push([t,e])}),w(n.sort(),r.sort(),o)}
/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function w(t,e,o){var n=t.length;if(n!==e.length)return!1;if(0===n)return!0;for(var r=-1;++r<n;)if(!1===d(t[r],e[r],o))return!1;return!0}
/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function m(t){if(function(t){return"undefined"!=typeof Symbol&&"object"==typeof t&&void 0!==Symbol.iterator&&"function"==typeof t[Symbol.iterator]}(t))try{return y(t[Symbol.iterator]())}catch(t){return[]}return[]}
/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function y(t){for(var e=t.next(),o=[e.value];!1===e.done;)e=t.next(),o.push(e.value);return o}
/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function v(t){var e=[];for(var o in t)e.push(o);return e}function i(t){return null===t||"object"!=typeof t}t.exports=d,t.exports.MemoizeMap=h},function(t,e,o){
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var r=o(1),i=o(0),a=o(4),s=o(2);t.exports=function(t,e,n){n=void 0===n?function(){}:n,Object.defineProperty(t,e,{get:function t(){a()||i(this,"lockSsfi")||i(this,"ssfi",t);var e=n.call(this);if(void 0!==e)return e;var o=new r.Assertion;return s(this,o),o},configurable:!0})}},function(t,e,o){
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var r=o(5),i=o(1),a=o(0),s=o(6),c=o(2);t.exports=function(t,e,o){var n=function(){a(this,"lockSsfi")||a(this,"ssfi",n);var t=o.apply(this,arguments);if(void 0!==t)return t;var e=new i.Assertion;return c(this,e),e};r(n,e,!1),t[e]=s(n,e)}},function(t,e,o){
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var a=o(1),s=o(0),c=o(4),u=o(2);t.exports=function(t,e,r){var o=Object.getOwnPropertyDescriptor(t,e),i=function(){};o&&"function"==typeof o.get&&(i=o.get),Object.defineProperty(t,e,{get:function t(){c()||s(this,"lockSsfi")||s(this,"ssfi",t);var e=s(this,"lockSsfi");s(this,"lockSsfi",!0);var o=r(i).call(this);if(s(this,"lockSsfi",e),void 0!==o)return o;var n=new a.Assertion;return u(this,n),n},configurable:!0})}},function(t,e,o){
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var a=o(5),s=o(1),c=o(0),u=o(6),l=o(2);t.exports=function(t,e,n){var o=t[e],r=function(){throw new Error(e+" is not a function")};o&&"function"==typeof o&&(r=o);var i=function(){c(this,"lockSsfi")||c(this,"ssfi",i);var t=c(this,"lockSsfi");c(this,"lockSsfi",!0);var e=n(r).apply(this,arguments);if(c(this,"lockSsfi",t),void 0!==e)return e;var o=new s.Assertion;return l(this,o),o};a(i,e,!1),t[e]=u(i,e)}},function(t,e,o){function n(){}
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var i=o(5),a=o(1),s=o(0),c=o(6),u=o(2),l="function"==typeof Object.setPrototypeOf,h=Object.getOwnPropertyNames(n).filter(function(t){var e=Object.getOwnPropertyDescriptor(n,t);return"object"!=typeof e||!e.configurable}),f=Function.prototype.call,p=Function.prototype.apply;t.exports=function(n,e,t,o){"function"!=typeof o&&(o=function(){});var r={method:t,chainingBehavior:o};n.__methods||(n.__methods={}),n.__methods[e]=r,Object.defineProperty(n,e,{get:function(){r.chainingBehavior.call(this);var o=function(){s(this,"lockSsfi")||s(this,"ssfi",o);var t=r.method.apply(this,arguments);if(void 0!==t)return t;var e=new a.Assertion;return u(this,e),e};if(i(o,e,!0),l){var t=Object.create(this);t.call=f,t.apply=p,Object.setPrototypeOf(o,t)}else{Object.getOwnPropertyNames(n).forEach(function(t){if(-1===h.indexOf(t)){var e=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(o,t,e)}})}return u(this,o),c(o)},configurable:!0})}},function(t,e,o){
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var s=o(1),c=o(2);t.exports=function(t,e,o,n){var r=t.__methods[e],i=r.chainingBehavior;r.chainingBehavior=function(){var t=n(i).call(this);if(void 0!==t)return t;var e=new s.Assertion;return c(this,e),e};var a=r.method;r.method=function(){var t=o(a).apply(this,arguments);if(void 0!==t)return t;var e=new s.Assertion;return c(this,e),e}}},function(t,e,o){
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var n=o(8);t.exports=function(t,e){return n(t)<n(e)?-1:1}},function(t,e,o){
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var n=o(14);t.exports=function(t){return Object.keys(t).concat(n(t))}},function(t,e,o){"use strict";var n=/\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;function r(t){var e="";if(void 0===t.name){var o=String(t).match(n);o&&(e=o[1])}else e=t.name;return e}t.exports={compatibleInstance:function(t,e){return e instanceof Error&&t===e},compatibleConstructor:function(t,e){return e instanceof Error?t.constructor===e.constructor||t instanceof e.constructor:(e.prototype instanceof Error||e===Error)&&(t.constructor===e||t instanceof e)},compatibleMessage:function(t,e){var o="string"==typeof t?t:t.message;return e instanceof RegExp?e.test(o):"string"==typeof e&&-1!==o.indexOf(e)},getMessage:function(t){var e="";return t&&t.message?e=t.message:"string"==typeof t&&(e=t),e},getConstructorName:function(t){var e=t;return t instanceof Error?e=r(t.constructor):"function"==typeof t&&(e=r(t).trim()||r(new t)),e}}},function(t,e){t.exports=Number.isNaN||
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
function(t){return t!=t}},function(t,e,o){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var h=o(3);t.exports=function(t,c){
/*!
   * Module dependencies.
   */
var u=t.AssertionError,l=c.flag;
/*!
   * Module export.
   */
/*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   */
function r(t,e,o,n){return l(this,"ssfi",o||r),l(this,"lockSsfi",n),l(this,"object",t),l(this,"message",e),c.proxify(this)}t.Assertion=r,Object.defineProperty(r,"includeStack",{get:function(){return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),h.includeStack},set:function(t){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),h.includeStack=t}}),Object.defineProperty(r,"showDiff",{get:function(){return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),h.showDiff},set:function(t){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),h.showDiff=t}}),r.addProperty=function(t,e){c.addProperty(this.prototype,t,e)},r.addMethod=function(t,e){c.addMethod(this.prototype,t,e)},r.addChainableMethod=function(t,e,o){c.addChainableMethod(this.prototype,t,e,o)},r.overwriteProperty=function(t,e){c.overwriteProperty(this.prototype,t,e)},r.overwriteMethod=function(t,e){c.overwriteMethod(this.prototype,t,e)},r.overwriteChainableMethod=function(t,e,o){c.overwriteChainableMethod(this.prototype,t,e,o)},r.prototype.assert=function(t,e,o,n,r,i){var a=c.test(this,arguments);if(!1!==i&&(i=!0),void 0===n&&void 0===r&&(i=!1),!0!==h.showDiff&&(i=!1),!a){e=c.getMessage(this,arguments);var s=c.getActual(this,arguments);throw new u(e,{actual:s,expected:n,showDiff:i},h.includeStack?this.assert:l(this,"ssfi"))}},
/*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
Object.defineProperty(r.prototype,"_obj",{get:function(){return l(this,"object")},set:function(t){l(this,"object",t)}})}},function(t,e){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,w){var g=t.Assertion,m=t.AssertionError,y=w.flag;function e(t,e){e&&y(this,"message",e),t=t.toLowerCase();var o=y(this,"object"),n=~["a","e","i","o","u"].indexOf(t.charAt(0))?"an ":"a ";this.assert(t===w.type(o).toLowerCase(),"expected #{this} to be "+n+t,"expected #{this} not to be "+n+t)}function d(t,e){return w.isNaN(t)&&w.isNaN(e)||t===e}function o(){y(this,"contains",!0)}function n(o,t){t&&y(this,"message",t);var n=y(this,"object"),e=w.type(n).toLowerCase(),r=y(this,"message"),i=y(this,"negate"),a=y(this,"ssfi"),s=y(this,"deep"),c=s?"deep ":"";r=r?r+": ":"";var u=!1;switch(e){case"string":u=-1!==n.indexOf(o);break;case"weakset":if(s)throw new m(r+"unable to use .deep.include with WeakSet",void 0,a);u=n.has(o);break;case"map":var l=s?w.eql:d;n.forEach(function(t){u=u||l(t,o)});break;case"set":s?n.forEach(function(t){u=u||w.eql(t,o)}):u=n.has(o);break;case"array":u=s?n.some(function(t){return w.eql(t,o)}):-1!==n.indexOf(o);break;default:if(o!==Object(o))throw new m(r+"object tested must be an array, a map, an object, a set, a string, or a weakset, but "+e+" given",void 0,a);var h=Object.keys(o),f=null,p=0;if(h.forEach(function(t){var e=new g(n);if(w.transferFlags(this,e,!0),y(e,"lockSsfi",!0),i&&1!==h.length)try{e.property(t,o[t])}catch(t){if(!w.checkError.compatibleConstructor(t,m))throw t;null===f&&(f=t),p++}else e.property(t,o[t])},this),i&&1<h.length&&p===h.length)throw f;return}this.assert(u,"expected #{this} to "+c+"include "+w.inspect(o),"expected #{this} to not "+c+"include "+w.inspect(o))}function r(){var t=y(this,"object"),e=w.type(t);this.assert("Arguments"===e,"expected #{this} to be arguments but got "+e,"expected #{this} to not be arguments")}function i(t,e){e&&y(this,"message",e);var o=y(this,"object");if(y(this,"deep")){var n=y(this,"lockSsfi");y(this,"lockSsfi",!0),this.eql(t),y(this,"lockSsfi",n)}else this.assert(t===o,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",t,this._obj,!0)}function a(t,e){e&&y(this,"message",e),this.assert(w.eql(t,y(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",t,this._obj,!0)}function s(t,e){e&&y(this,"message",e);var o,n=y(this,"object"),r=y(this,"doLength"),i=y(this,"message"),a=i?i+": ":"",s=y(this,"ssfi"),c=w.type(n).toLowerCase(),u=w.type(t).toLowerCase(),l=!0;if(r&&"map"!==c&&"set"!==c&&new g(n,i,s,!0).to.have.property("length"),r||"date"!==c||"date"===u)if("number"===u||!r&&"number"!==c)if(r||"date"===c||"number"===c)l=!1;else{o=a+"expected "+("string"===c?"'"+n+"'":n)+" to be a number or a date"}else o=a+"the argument to above must be a number";else o=a+"the argument to above must be a date";if(l)throw new m(o,void 0,s);if(r){var h,f="length";h="map"===c||"set"===c?(f="size",n.size):n.length,this.assert(t<h,"expected #{this} to have a "+f+" above #{exp} but got #{act}","expected #{this} to not have a "+f+" above #{exp}",t,h)}else this.assert(t<n,"expected #{this} to be above #{exp}","expected #{this} to be at most #{exp}",t)}function c(t,e){e&&y(this,"message",e);var o,n=y(this,"object"),r=y(this,"doLength"),i=y(this,"message"),a=i?i+": ":"",s=y(this,"ssfi"),c=w.type(n).toLowerCase(),u=w.type(t).toLowerCase(),l=!0;if(r&&"map"!==c&&"set"!==c&&new g(n,i,s,!0).to.have.property("length"),r||"date"!==c||"date"===u)if("number"===u||!r&&"number"!==c)if(r||"date"===c||"number"===c)l=!1;else{o=a+"expected "+("string"===c?"'"+n+"'":n)+" to be a number or a date"}else o=a+"the argument to least must be a number";else o=a+"the argument to least must be a date";if(l)throw new m(o,void 0,s);if(r){var h,f="length";h="map"===c||"set"===c?(f="size",n.size):n.length,this.assert(t<=h,"expected #{this} to have a "+f+" at least #{exp} but got #{act}","expected #{this} to have a "+f+" below #{exp}",t,h)}else this.assert(t<=n,"expected #{this} to be at least #{exp}","expected #{this} to be below #{exp}",t)}function u(t,e){e&&y(this,"message",e);var o,n=y(this,"object"),r=y(this,"doLength"),i=y(this,"message"),a=i?i+": ":"",s=y(this,"ssfi"),c=w.type(n).toLowerCase(),u=w.type(t).toLowerCase(),l=!0;if(r&&"map"!==c&&"set"!==c&&new g(n,i,s,!0).to.have.property("length"),r||"date"!==c||"date"===u)if("number"===u||!r&&"number"!==c)if(r||"date"===c||"number"===c)l=!1;else{o=a+"expected "+("string"===c?"'"+n+"'":n)+" to be a number or a date"}else o=a+"the argument to below must be a number";else o=a+"the argument to below must be a date";if(l)throw new m(o,void 0,s);if(r){var h,f="length";h="map"===c||"set"===c?(f="size",n.size):n.length,this.assert(h<t,"expected #{this} to have a "+f+" below #{exp} but got #{act}","expected #{this} to not have a "+f+" below #{exp}",t,h)}else this.assert(n<t,"expected #{this} to be below #{exp}","expected #{this} to be at least #{exp}",t)}function l(t,e){e&&y(this,"message",e);var o,n=y(this,"object"),r=y(this,"doLength"),i=y(this,"message"),a=i?i+": ":"",s=y(this,"ssfi"),c=w.type(n).toLowerCase(),u=w.type(t).toLowerCase(),l=!0;if(r&&"map"!==c&&"set"!==c&&new g(n,i,s,!0).to.have.property("length"),r||"date"!==c||"date"===u)if("number"===u||!r&&"number"!==c)if(r||"date"===c||"number"===c)l=!1;else{o=a+"expected "+("string"===c?"'"+n+"'":n)+" to be a number or a date"}else o=a+"the argument to most must be a number";else o=a+"the argument to most must be a date";if(l)throw new m(o,void 0,s);if(r){var h,f="length";h="map"===c||"set"===c?(f="size",n.size):n.length,this.assert(h<=t,"expected #{this} to have a "+f+" at most #{exp} but got #{act}","expected #{this} to have a "+f+" above #{exp}",t,h)}else this.assert(n<=t,"expected #{this} to be at most #{exp}","expected #{this} to be above #{exp}",t)}function h(e,t){t&&y(this,"message",t);var o=y(this,"object"),n=y(this,"ssfi"),r=y(this,"message");try{var i=o instanceof e}catch(t){if(t instanceof TypeError)throw new m((r=r?r+": ":"")+"The instanceof assertion needs a constructor but "+w.type(e)+" was given.",void 0,n);throw t}var a=w.getName(e);null===a&&(a="an unnamed constructor"),this.assert(i,"expected #{this} to be an instance of "+a,"expected #{this} to not be an instance of "+a)}function f(t,e,o){o&&y(this,"message",o);var n=y(this,"nested"),r=y(this,"own"),i=y(this,"message"),a=y(this,"object"),s=y(this,"ssfi"),c=typeof t;if(i=i?i+": ":"",n){if("string"!=c)throw new m(i+"the argument to property must be a string when using nested syntax",void 0,s)}else if("string"!=c&&"number"!=c&&"symbol"!=c)throw new m(i+"the argument to property must be a string, number, or symbol",void 0,s);if(n&&r)throw new m(i+'The "nested" and "own" flags cannot be combined.',void 0,s);if(null==a)throw new m(i+"Target cannot be null or undefined.",void 0,s);var u,l=y(this,"deep"),h=y(this,"negate"),f=n?w.getPathInfo(a,t):null,p=n?f.value:a[t],d="";l&&(d+="deep "),r&&(d+="own "),n&&(d+="nested "),d+="property ",u=r?Object.prototype.hasOwnProperty.call(a,t):n?f.exists:w.hasProperty(a,t),h&&1!==arguments.length||this.assert(u,"expected #{this} to have "+d+w.inspect(t),"expected #{this} to not have "+d+w.inspect(t)),1<arguments.length&&this.assert(u&&(l?w.eql(e,p):e===p),"expected #{this} to have "+d+w.inspect(t)+" of #{exp}, but got #{act}","expected #{this} to not have "+d+w.inspect(t)+" of #{act}",e,p),y(this,"object",p)}function p(t,e,o){y(this,"own",!0),f.apply(this,arguments)}function b(t,e,o){"string"==typeof e&&(o=e,e=null),o&&y(this,"message",o);var n=y(this,"object"),r=Object.getOwnPropertyDescriptor(Object(n),t);r&&e?this.assert(w.eql(e,r),"expected the own property descriptor for "+w.inspect(t)+" on #{this} to match "+w.inspect(e)+", got "+w.inspect(r),"expected the own property descriptor for "+w.inspect(t)+" on #{this} to not match "+w.inspect(e),e,r,!0):this.assert(r,"expected #{this} to have an own property descriptor for "+w.inspect(t),"expected #{this} to not have an own property descriptor for "+w.inspect(t)),y(this,"object",r)}function v(){y(this,"doLength",!0)}function x(t,e){e&&y(this,"message",e);var o,n=y(this,"object"),r=w.type(n).toLowerCase(),i=y(this,"message"),a=y(this,"ssfi"),s="length";switch(r){case"map":case"set":s="size",o=n.size;break;default:new g(n,i,a,!0).to.have.property("length"),o=n.length}this.assert(o==t,"expected #{this} to have a "+s+" of #{exp} but got #{act}","expected #{this} to not have a "+s+" of #{act}",t,o)}function q(t,e){e&&y(this,"message",e);var o=y(this,"object");this.assert(t.exec(o),"expected #{this} to match "+t,"expected #{this} not to match "+t)}function O(t){var e,o,n=y(this,"object"),r=w.type(n),i=w.type(t),a=y(this,"ssfi"),s=y(this,"deep"),c="",u=!0,l=y(this,"message"),h=(l=l?l+": ":"")+"when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";if("Map"===r||"Set"===r)c=s?"deeply ":"",o=[],n.forEach(function(t,e){o.push(e)}),"Array"!==i&&(t=Array.prototype.slice.call(arguments));else{switch(o=w.getOwnEnumerableProperties(n),i){case"Array":if(1<arguments.length)throw new m(h,void 0,a);break;case"Object":if(1<arguments.length)throw new m(h,void 0,a);t=Object.keys(t);break;default:t=Array.prototype.slice.call(arguments)}t=t.map(function(t){return"symbol"==typeof t?t:String(t)})}if(!t.length)throw new m(l+"keys required",void 0,a);var f=t.length,p=y(this,"any"),d=y(this,"all"),b=t;if(p||d||(d=!0),p&&(u=b.some(function(e){return o.some(function(t){return s?w.eql(e,t):e===t})})),d&&(u=b.every(function(e){return o.some(function(t){return s?w.eql(e,t):e===t})}),y(this,"contains")||(u=u&&t.length==o.length)),1<f){var g=(t=t.map(function(t){return w.inspect(t)})).pop();d&&(e=t.join(", ")+", and "+g),p&&(e=t.join(", ")+", or "+g)}else e=w.inspect(t[0]);e=(1<f?"keys ":"key ")+e,e=(y(this,"contains")?"contain ":"have ")+e,this.assert(u,"expected #{this} to "+c+e,"expected #{this} to not "+c+e,b.slice(0).sort(w.compareByInspect),o.sort(w.compareByInspect),!0)}function j(t,e,o){o&&y(this,"message",o);var n,r=y(this,"object"),i=y(this,"ssfi"),a=y(this,"message"),s=y(this,"negate")||!1;new g(r,a,i,!0).is.a("function"),(t instanceof RegExp||"string"==typeof t)&&(e=t,t=null);try{r()}catch(t){n=t}var c=void 0===t&&void 0===e,u=Boolean(t&&e),l=!1,h=!1;if(c||!c&&!s){var f="an error";t instanceof Error?f="#{exp}":t&&(f=w.checkError.getConstructorName(t)),this.assert(n,"expected #{this} to throw "+f,"expected #{this} to not throw an error but #{act} was thrown",t&&t.toString(),n instanceof Error?n.toString():"string"==typeof n?n:n&&w.checkError.getConstructorName(n))}if(t&&n){if(t instanceof Error)w.checkError.compatibleInstance(n,t)===s&&(u&&s?l=!0:this.assert(s,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(n&&!s?" but #{act} was thrown":""),t.toString(),n.toString()));w.checkError.compatibleConstructor(n,t)===s&&(u&&s?l=!0:this.assert(s,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(n?" but #{act} was thrown":""),t instanceof Error?t.toString():t&&w.checkError.getConstructorName(t),n instanceof Error?n.toString():n&&w.checkError.getConstructorName(n)))}if(n&&null!=e){var p="including";e instanceof RegExp&&(p="matching"),w.checkError.compatibleMessage(n,e)===s&&(u&&s?h=!0:this.assert(s,"expected #{this} to throw error "+p+" #{exp} but got #{act}","expected #{this} to throw error not "+p+" #{exp}",e,w.checkError.getMessage(n)))}l&&h&&this.assert(s,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(n?" but #{act} was thrown":""),t instanceof Error?t.toString():t&&w.checkError.getConstructorName(t),n instanceof Error?n.toString():n&&w.checkError.getConstructorName(n)),y(this,"object",n)}function S(t,e){e&&y(this,"message",e);var o=y(this,"object"),n=y(this,"itself"),r="function"!=typeof o||n?o[t]:o.prototype[t];this.assert("function"==typeof r,"expected #{this} to respond to "+w.inspect(t),"expected #{this} to not respond to "+w.inspect(t))}function M(t,e){e&&y(this,"message",e);var o=t(y(this,"object"));this.assert(o,"expected #{this} to satisfy "+w.objDisplay(t),"expected #{this} to not satisfy"+w.objDisplay(t),!y(this,"negate"),o)}function N(t,e,o){o&&y(this,"message",o);var n=y(this,"object"),r=y(this,"message"),i=y(this,"ssfi");if(new g(n,r,i,!0).is.a("number"),"number"!=typeof t||"number"!=typeof e)throw new m((r=r?r+": ":"")+"the arguments to closeTo or approximately must be numbers",void 0,i);this.assert(Math.abs(n-t)<=e,"expected #{this} to be close to "+t+" +/- "+e,"expected #{this} not to be close to "+t+" +/- "+e)}function P(t,e,o){o&&y(this,"message",o);var n,r=y(this,"object"),i=y(this,"message"),a=y(this,"ssfi");new g(r,i,a,!0).is.a("function"),n=e?(new g(t,i,a,!0).to.have.property(e),t[e]):(new g(t,i,a,!0).is.a("function"),t()),r();var s=null==e?t():t[e],c=null==e?n:"."+e;y(this,"deltaMsgObj",c),y(this,"initialDeltaValue",n),y(this,"finalDeltaValue",s),y(this,"deltaBehavior","change"),y(this,"realDelta",s!==n),this.assert(n!==s,"expected "+c+" to change","expected "+c+" to not change")}function k(t,e,o){o&&y(this,"message",o);var n,r=y(this,"object"),i=y(this,"message"),a=y(this,"ssfi");new g(r,i,a,!0).is.a("function"),n=e?(new g(t,i,a,!0).to.have.property(e),t[e]):(new g(t,i,a,!0).is.a("function"),t()),new g(n,i,a,!0).is.a("number"),r();var s=null==e?t():t[e],c=null==e?n:"."+e;y(this,"deltaMsgObj",c),y(this,"initialDeltaValue",n),y(this,"finalDeltaValue",s),y(this,"deltaBehavior","increase"),y(this,"realDelta",s-n),this.assert(0<s-n,"expected "+c+" to increase","expected "+c+" to not increase")}function E(t,e,o){o&&y(this,"message",o);var n,r=y(this,"object"),i=y(this,"message"),a=y(this,"ssfi");new g(r,i,a,!0).is.a("function"),n=e?(new g(t,i,a,!0).to.have.property(e),t[e]):(new g(t,i,a,!0).is.a("function"),t()),new g(n,i,a,!0).is.a("number"),r();var s=null==e?t():t[e],c=null==e?n:"."+e;y(this,"deltaMsgObj",c),y(this,"initialDeltaValue",n),y(this,"finalDeltaValue",s),y(this,"deltaBehavior","decrease"),y(this,"realDelta",n-s),this.assert(s-n<0,"expected "+c+" to decrease","expected "+c+" to not decrease")}["to","be","been","is","and","has","have","with","that","which","at","of","same","but","does","still"].forEach(function(t){g.addProperty(t)}),g.addProperty("not",function(){y(this,"negate",!0)}),g.addProperty("deep",function(){y(this,"deep",!0)}),g.addProperty("nested",function(){y(this,"nested",!0)}),g.addProperty("own",function(){y(this,"own",!0)}),g.addProperty("ordered",function(){y(this,"ordered",!0)}),g.addProperty("any",function(){y(this,"any",!0),y(this,"all",!1)}),g.addProperty("all",function(){y(this,"all",!0),y(this,"any",!1)}),g.addChainableMethod("an",e),g.addChainableMethod("a",e),g.addChainableMethod("include",n,o),g.addChainableMethod("contain",n,o),g.addChainableMethod("contains",n,o),g.addChainableMethod("includes",n,o),g.addProperty("ok",function(){this.assert(y(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy")}),g.addProperty("true",function(){this.assert(!0===y(this,"object"),"expected #{this} to be true","expected #{this} to be false",!y(this,"negate"))}),g.addProperty("false",function(){this.assert(!1===y(this,"object"),"expected #{this} to be false","expected #{this} to be true",!!y(this,"negate"))}),g.addProperty("null",function(){this.assert(null===y(this,"object"),"expected #{this} to be null","expected #{this} not to be null")}),g.addProperty("undefined",function(){this.assert(void 0===y(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined")}),g.addProperty("NaN",function(){this.assert(w.isNaN(y(this,"object")),"expected #{this} to be NaN","expected #{this} not to be NaN")}),g.addProperty("exist",function(){var t=y(this,"object");this.assert(null!=t,"expected #{this} to exist","expected #{this} to not exist")}),g.addProperty("empty",function(){var t,e=y(this,"object"),o=y(this,"ssfi"),n=y(this,"message");switch(n=n?n+": ":"",w.type(e).toLowerCase()){case"array":case"string":t=e.length;break;case"map":case"set":t=e.size;break;case"weakmap":case"weakset":throw new m(n+".empty was passed a weak collection",void 0,o);case"function":var r=n+".empty was passed a function "+w.getName(e);throw new m(r.trim(),void 0,o);default:if(e!==Object(e))throw new m(n+".empty was passed non-string primitive "+w.inspect(e),void 0,o);t=Object.keys(e).length}this.assert(0===t,"expected #{this} to be empty","expected #{this} not to be empty")}),g.addProperty("arguments",r),g.addProperty("Arguments",r),g.addMethod("equal",i),g.addMethod("equals",i),g.addMethod("eq",i),g.addMethod("eql",a),g.addMethod("eqls",a),g.addMethod("above",s),g.addMethod("gt",s),g.addMethod("greaterThan",s),g.addMethod("least",c),g.addMethod("gte",c),g.addMethod("below",u),g.addMethod("lt",u),g.addMethod("lessThan",u),g.addMethod("most",l),g.addMethod("lte",l),g.addMethod("within",function(t,e,o){o&&y(this,"message",o);var n,r=y(this,"object"),i=y(this,"doLength"),a=y(this,"message"),s=a?a+": ":"",c=y(this,"ssfi"),u=w.type(r).toLowerCase(),l=w.type(t).toLowerCase(),h=w.type(e).toLowerCase(),f=!0,p="date"===l&&"date"===h?t.toUTCString()+".."+e.toUTCString():t+".."+e;if(i&&"map"!==u&&"set"!==u&&new g(r,a,c,!0).to.have.property("length"),i||"date"!==u||"date"===l&&"date"===h)if("number"===l&&"number"===h||!i&&"number"!==u)if(i||"date"===u||"number"===u)f=!1;else{n=s+"expected "+("string"===u?"'"+r+"'":r)+" to be a number or a date"}else n=s+"the arguments to within must be numbers";else n=s+"the arguments to within must be dates";if(f)throw new m(n,void 0,c);if(i){var d,b="length";d="map"===u||"set"===u?(b="size",r.size):r.length,this.assert(t<=d&&d<=e,"expected #{this} to have a "+b+" within "+p,"expected #{this} to not have a "+b+" within "+p)}else this.assert(t<=r&&r<=e,"expected #{this} to be within "+p,"expected #{this} to not be within "+p)}),g.addMethod("instanceof",h),g.addMethod("instanceOf",h),g.addMethod("property",f),g.addMethod("ownProperty",p),g.addMethod("haveOwnProperty",p),g.addMethod("ownPropertyDescriptor",b),g.addMethod("haveOwnPropertyDescriptor",b),g.addChainableMethod("length",x,v),g.addChainableMethod("lengthOf",x,v),g.addMethod("match",q),g.addMethod("matches",q),g.addMethod("string",function(t,e){e&&y(this,"message",e);var o=y(this,"object"),n=y(this,"message"),r=y(this,"ssfi");new g(o,n,r,!0).is.a("string"),this.assert(~o.indexOf(t),"expected #{this} to contain "+w.inspect(t),"expected #{this} to not contain "+w.inspect(t))}),g.addMethod("keys",O),g.addMethod("key",O),g.addMethod("throw",j),g.addMethod("throws",j),g.addMethod("Throw",j),g.addMethod("respondTo",S),g.addMethod("respondsTo",S),g.addProperty("itself",function(){y(this,"itself",!0)}),g.addMethod("satisfy",M),g.addMethod("satisfies",M),g.addMethod("closeTo",N),g.addMethod("approximately",N),g.addMethod("members",function(t,e){e&&y(this,"message",e);var o=y(this,"object"),n=y(this,"message"),r=y(this,"ssfi");new g(o,n,r,!0).to.be.an("array"),new g(t,n,r,!0).to.be.an("array");var i,a,s,c=y(this,"contains"),u=y(this,"ordered");s=c?(a="expected #{this} to be "+(i=u?"an ordered superset":"a superset")+" of #{exp}","expected #{this} to not be "+i+" of #{exp}"):(a="expected #{this} to have the same "+(i=u?"ordered members":"members")+" as #{exp}","expected #{this} to not have the same "+i+" as #{exp}");var l=y(this,"deep")?w.eql:void 0;this.assert(function(t,n,r,i,a){if(!i){if(t.length!==n.length)return!1;n=n.slice()}return t.every(function(o,t){if(a)return r?r(o,n[t]):o===n[t];if(r)return n.some(function(t,e){return!!r(o,t)&&(i||n.splice(e,1),!0)});var e=n.indexOf(o);return-1!==e&&(i||n.splice(e,1),!0)})}(t,o,l,c,u),a,s,t,o,!0)}),g.addMethod("oneOf",function(t,e){e&&y(this,"message",e);var o=y(this,"object"),n=y(this,"message"),r=y(this,"ssfi");new g(t,n,r,!0).to.be.an("array"),this.assert(-1<t.indexOf(o),"expected #{this} to be one of #{exp}","expected #{this} to not be one of #{exp}",t,o)}),g.addMethod("change",P),g.addMethod("changes",P),g.addMethod("increase",k),g.addMethod("increases",k),g.addMethod("decrease",E),g.addMethod("decreases",E),g.addMethod("by",function(t,e){e&&y(this,"message",e);var o,n=y(this,"deltaMsgObj"),r=y(this,"initialDeltaValue"),i=y(this,"finalDeltaValue"),a=y(this,"deltaBehavior"),s=y(this,"realDelta");o="change"===a?Math.abs(i-r)===Math.abs(t):s===Math.abs(t),this.assert(o,"expected "+n+" to "+a+" by "+t,"expected "+n+" to not "+a+" by "+t)}),g.addProperty("extensible",function(){var t=y(this,"object"),e=t===Object(t)&&Object.isExtensible(t);this.assert(e,"expected #{this} to be extensible","expected #{this} to not be extensible")}),g.addProperty("sealed",function(){var t=y(this,"object"),e=t!==Object(t)||Object.isSealed(t);this.assert(e,"expected #{this} to be sealed","expected #{this} to not be sealed")}),g.addProperty("frozen",function(){var t=y(this,"object"),e=t!==Object(t)||Object.isFrozen(t);this.assert(e,"expected #{this} to be frozen","expected #{this} to not be frozen")}),g.addProperty("finite",function(t){var e=y(this,"object");this.assert("number"==typeof e&&isFinite(e),"expected #{this} to be a finite number","expected #{this} to not be a finite number")})}},function(t,e){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(r,t){r.expect=function(t,e){return new r.Assertion(t,e)},r.expect.fail=function(t,e,o,n){throw arguments.length<2&&(o=t,t=void 0),o=o||"expect.fail()",new r.AssertionError(o,{actual:t,expected:e,operator:n},r.expect.fail)}}},function(t,e){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(i,t){var a=i.Assertion;function e(){Object.defineProperty(Object.prototype,"should",{set:function(t){Object.defineProperty(this,"should",{value:t,enumerable:!0,configurable:!0,writable:!0})},get:function t(){return this instanceof String||this instanceof Number||this instanceof Boolean||"function"==typeof Symbol&&this instanceof Symbol?new a(this.valueOf(),null,t):new a(this,null,t)},configurable:!0});var r={fail:function(t,e,o,n){throw arguments.length<2&&(o=t,t=void 0),o=o||"should.fail()",new i.AssertionError(o,{actual:t,expected:e,operator:n},r.fail)},equal:function(t,e,o){new a(t,o).to.equal(e)},Throw:function(t,e,o,n){new a(t,n).to.Throw(e,o)},exist:function(t,e){new a(t,e).to.exist},not:{}};return r.not.equal=function(t,e,o){new a(t,o).to.not.equal(e)},r.not.Throw=function(t,e,o,n){new a(t,n).to.not.Throw(e,o)},r.not.exist=function(t,e){new a(t,e).to.not.exist},r.throw=r.Throw,r.not.throw=r.not.Throw,r}i.should=e,i.Should=e}},function(t,e){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(a,s){
/*!
   * Chai dependencies.
   */
var c=a.Assertion,u=s.flag,l=a.assert=function(t,e){new c(null,null,a.assert,!0).assert(t,e,"[ negation message unavailable ]")};
/*!
   * Module export.
   */l.fail=function(t,e,o,n){throw arguments.length<2&&(o=t,t=void 0),o=o||"assert.fail()",new a.AssertionError(o,{actual:t,expected:e,operator:n},l.fail)},l.isOk=function(t,e){new c(t,e,l.isOk,!0).is.ok},l.isNotOk=function(t,e){new c(t,e,l.isNotOk,!0).is.not.ok},l.equal=function(t,e,o){var n=new c(t,o,l.equal,!0);n.assert(e==u(n,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",e,t,!0)},l.notEqual=function(t,e,o){var n=new c(t,o,l.notEqual,!0);n.assert(e!=u(n,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",e,t,!0)},l.strictEqual=function(t,e,o){new c(t,o,l.strictEqual,!0).to.equal(e)},l.notStrictEqual=function(t,e,o){new c(t,o,l.notStrictEqual,!0).to.not.equal(e)},l.deepEqual=l.deepStrictEqual=function(t,e,o){new c(t,o,l.deepEqual,!0).to.eql(e)},l.notDeepEqual=function(t,e,o){new c(t,o,l.notDeepEqual,!0).to.not.eql(e)},l.isAbove=function(t,e,o){new c(t,o,l.isAbove,!0).to.be.above(e)},l.isAtLeast=function(t,e,o){new c(t,o,l.isAtLeast,!0).to.be.least(e)},l.isBelow=function(t,e,o){new c(t,o,l.isBelow,!0).to.be.below(e)},l.isAtMost=function(t,e,o){new c(t,o,l.isAtMost,!0).to.be.most(e)},l.isTrue=function(t,e){new c(t,e,l.isTrue,!0).is.true},l.isNotTrue=function(t,e){new c(t,e,l.isNotTrue,!0).to.not.equal(!0)},l.isFalse=function(t,e){new c(t,e,l.isFalse,!0).is.false},l.isNotFalse=function(t,e){new c(t,e,l.isNotFalse,!0).to.not.equal(!1)},l.isNull=function(t,e){new c(t,e,l.isNull,!0).to.equal(null)},l.isNotNull=function(t,e){new c(t,e,l.isNotNull,!0).to.not.equal(null)},l.isNaN=function(t,e){new c(t,e,l.isNaN,!0).to.be.NaN},l.isNotNaN=function(t,e){new c(t,e,l.isNotNaN,!0).not.to.be.NaN},l.exists=function(t,e){new c(t,e,l.exists,!0).to.exist},l.notExists=function(t,e){new c(t,e,l.notExists,!0).to.not.exist},l.isUndefined=function(t,e){new c(t,e,l.isUndefined,!0).to.equal(void 0)},l.isDefined=function(t,e){new c(t,e,l.isDefined,!0).to.not.equal(void 0)},l.isFunction=function(t,e){new c(t,e,l.isFunction,!0).to.be.a("function")},l.isNotFunction=function(t,e){new c(t,e,l.isNotFunction,!0).to.not.be.a("function")},l.isObject=function(t,e){new c(t,e,l.isObject,!0).to.be.a("object")},l.isNotObject=function(t,e){new c(t,e,l.isNotObject,!0).to.not.be.a("object")},l.isArray=function(t,e){new c(t,e,l.isArray,!0).to.be.an("array")},l.isNotArray=function(t,e){new c(t,e,l.isNotArray,!0).to.not.be.an("array")},l.isString=function(t,e){new c(t,e,l.isString,!0).to.be.a("string")},l.isNotString=function(t,e){new c(t,e,l.isNotString,!0).to.not.be.a("string")},l.isNumber=function(t,e){new c(t,e,l.isNumber,!0).to.be.a("number")},l.isNotNumber=function(t,e){new c(t,e,l.isNotNumber,!0).to.not.be.a("number")},l.isFinite=function(t,e){new c(t,e,l.isFinite,!0).to.be.finite},l.isBoolean=function(t,e){new c(t,e,l.isBoolean,!0).to.be.a("boolean")},l.isNotBoolean=function(t,e){new c(t,e,l.isNotBoolean,!0).to.not.be.a("boolean")},l.typeOf=function(t,e,o){new c(t,o,l.typeOf,!0).to.be.a(e)},l.notTypeOf=function(t,e,o){new c(t,o,l.notTypeOf,!0).to.not.be.a(e)},l.instanceOf=function(t,e,o){new c(t,o,l.instanceOf,!0).to.be.instanceOf(e)},l.notInstanceOf=function(t,e,o){new c(t,o,l.notInstanceOf,!0).to.not.be.instanceOf(e)},l.include=function(t,e,o){new c(t,o,l.include,!0).include(e)},l.notInclude=function(t,e,o){new c(t,o,l.notInclude,!0).not.include(e)},l.deepInclude=function(t,e,o){new c(t,o,l.deepInclude,!0).deep.include(e)},l.notDeepInclude=function(t,e,o){new c(t,o,l.notDeepInclude,!0).not.deep.include(e)},l.nestedInclude=function(t,e,o){new c(t,o,l.nestedInclude,!0).nested.include(e)},l.notNestedInclude=function(t,e,o){new c(t,o,l.notNestedInclude,!0).not.nested.include(e)},l.deepNestedInclude=function(t,e,o){new c(t,o,l.deepNestedInclude,!0).deep.nested.include(e)},l.notDeepNestedInclude=function(t,e,o){new c(t,o,l.notDeepNestedInclude,!0).not.deep.nested.include(e)},l.ownInclude=function(t,e,o){new c(t,o,l.ownInclude,!0).own.include(e)},l.notOwnInclude=function(t,e,o){new c(t,o,l.notOwnInclude,!0).not.own.include(e)},l.deepOwnInclude=function(t,e,o){new c(t,o,l.deepOwnInclude,!0).deep.own.include(e)},l.notDeepOwnInclude=function(t,e,o){new c(t,o,l.notDeepOwnInclude,!0).not.deep.own.include(e)},l.match=function(t,e,o){new c(t,o,l.match,!0).to.match(e)},l.notMatch=function(t,e,o){new c(t,o,l.notMatch,!0).to.not.match(e)},l.property=function(t,e,o){new c(t,o,l.property,!0).to.have.property(e)},l.notProperty=function(t,e,o){new c(t,o,l.notProperty,!0).to.not.have.property(e)},l.propertyVal=function(t,e,o,n){new c(t,n,l.propertyVal,!0).to.have.property(e,o)},l.notPropertyVal=function(t,e,o,n){new c(t,n,l.notPropertyVal,!0).to.not.have.property(e,o)},l.deepPropertyVal=function(t,e,o,n){new c(t,n,l.deepPropertyVal,!0).to.have.deep.property(e,o)},l.notDeepPropertyVal=function(t,e,o,n){new c(t,n,l.notDeepPropertyVal,!0).to.not.have.deep.property(e,o)},l.ownProperty=function(t,e,o){new c(t,o,l.ownProperty,!0).to.have.own.property(e)},l.notOwnProperty=function(t,e,o){new c(t,o,l.notOwnProperty,!0).to.not.have.own.property(e)},l.ownPropertyVal=function(t,e,o,n){new c(t,n,l.ownPropertyVal,!0).to.have.own.property(e,o)},l.notOwnPropertyVal=function(t,e,o,n){new c(t,n,l.notOwnPropertyVal,!0).to.not.have.own.property(e,o)},l.deepOwnPropertyVal=function(t,e,o,n){new c(t,n,l.deepOwnPropertyVal,!0).to.have.deep.own.property(e,o)},l.notDeepOwnPropertyVal=function(t,e,o,n){new c(t,n,l.notDeepOwnPropertyVal,!0).to.not.have.deep.own.property(e,o)},l.nestedProperty=function(t,e,o){new c(t,o,l.nestedProperty,!0).to.have.nested.property(e)},l.notNestedProperty=function(t,e,o){new c(t,o,l.notNestedProperty,!0).to.not.have.nested.property(e)},l.nestedPropertyVal=function(t,e,o,n){new c(t,n,l.nestedPropertyVal,!0).to.have.nested.property(e,o)},l.notNestedPropertyVal=function(t,e,o,n){new c(t,n,l.notNestedPropertyVal,!0).to.not.have.nested.property(e,o)},l.deepNestedPropertyVal=function(t,e,o,n){new c(t,n,l.deepNestedPropertyVal,!0).to.have.deep.nested.property(e,o)},l.notDeepNestedPropertyVal=function(t,e,o,n){new c(t,n,l.notDeepNestedPropertyVal,!0).to.not.have.deep.nested.property(e,o)},l.lengthOf=function(t,e,o){new c(t,o,l.lengthOf,!0).to.have.lengthOf(e)},l.hasAnyKeys=function(t,e,o){new c(t,o,l.hasAnyKeys,!0).to.have.any.keys(e)},l.hasAllKeys=function(t,e,o){new c(t,o,l.hasAllKeys,!0).to.have.all.keys(e)},l.containsAllKeys=function(t,e,o){new c(t,o,l.containsAllKeys,!0).to.contain.all.keys(e)},l.doesNotHaveAnyKeys=function(t,e,o){new c(t,o,l.doesNotHaveAnyKeys,!0).to.not.have.any.keys(e)},l.doesNotHaveAllKeys=function(t,e,o){new c(t,o,l.doesNotHaveAllKeys,!0).to.not.have.all.keys(e)},l.hasAnyDeepKeys=function(t,e,o){new c(t,o,l.hasAnyDeepKeys,!0).to.have.any.deep.keys(e)},l.hasAllDeepKeys=function(t,e,o){new c(t,o,l.hasAllDeepKeys,!0).to.have.all.deep.keys(e)},l.containsAllDeepKeys=function(t,e,o){new c(t,o,l.containsAllDeepKeys,!0).to.contain.all.deep.keys(e)},l.doesNotHaveAnyDeepKeys=function(t,e,o){new c(t,o,l.doesNotHaveAnyDeepKeys,!0).to.not.have.any.deep.keys(e)},l.doesNotHaveAllDeepKeys=function(t,e,o){new c(t,o,l.doesNotHaveAllDeepKeys,!0).to.not.have.all.deep.keys(e)},l.throws=function(t,e,o,n){("string"==typeof e||e instanceof RegExp)&&(o=e,e=null);var r=new c(t,n,l.throws,!0).to.throw(e,o);return u(r,"object")},l.doesNotThrow=function(t,e,o,n){("string"==typeof e||e instanceof RegExp)&&(o=e,e=null),new c(t,n,l.doesNotThrow,!0).to.not.throw(e,o)},l.operator=function(t,e,o,n){var r;switch(e){case"==":r=t==o;break;case"===":r=t===o;break;case">":r=o<t;break;case">=":r=o<=t;break;case"<":r=t<o;break;case"<=":r=t<=o;break;case"!=":r=t!=o;break;case"!==":r=t!==o;break;default:throw n=n?n+": ":n,new a.AssertionError(n+'Invalid operator "'+e+'"',void 0,l.operator)}var i=new c(r,n,l.operator,!0);i.assert(!0===u(i,"object"),"expected "+s.inspect(t)+" to be "+e+" "+s.inspect(o),"expected "+s.inspect(t)+" to not be "+e+" "+s.inspect(o))},l.closeTo=function(t,e,o,n){new c(t,n,l.closeTo,!0).to.be.closeTo(e,o)},l.approximately=function(t,e,o,n){new c(t,n,l.approximately,!0).to.be.approximately(e,o)},l.sameMembers=function(t,e,o){new c(t,o,l.sameMembers,!0).to.have.same.members(e)},l.notSameMembers=function(t,e,o){new c(t,o,l.notSameMembers,!0).to.not.have.same.members(e)},l.sameDeepMembers=function(t,e,o){new c(t,o,l.sameDeepMembers,!0).to.have.same.deep.members(e)},l.notSameDeepMembers=function(t,e,o){new c(t,o,l.notSameDeepMembers,!0).to.not.have.same.deep.members(e)},l.sameOrderedMembers=function(t,e,o){new c(t,o,l.sameOrderedMembers,!0).to.have.same.ordered.members(e)},l.notSameOrderedMembers=function(t,e,o){new c(t,o,l.notSameOrderedMembers,!0).to.not.have.same.ordered.members(e)},l.sameDeepOrderedMembers=function(t,e,o){new c(t,o,l.sameDeepOrderedMembers,!0).to.have.same.deep.ordered.members(e)},l.notSameDeepOrderedMembers=function(t,e,o){new c(t,o,l.notSameDeepOrderedMembers,!0).to.not.have.same.deep.ordered.members(e)},l.includeMembers=function(t,e,o){new c(t,o,l.includeMembers,!0).to.include.members(e)},l.notIncludeMembers=function(t,e,o){new c(t,o,l.notIncludeMembers,!0).to.not.include.members(e)},l.includeDeepMembers=function(t,e,o){new c(t,o,l.includeDeepMembers,!0).to.include.deep.members(e)},l.notIncludeDeepMembers=function(t,e,o){new c(t,o,l.notIncludeDeepMembers,!0).to.not.include.deep.members(e)},l.includeOrderedMembers=function(t,e,o){new c(t,o,l.includeOrderedMembers,!0).to.include.ordered.members(e)},l.notIncludeOrderedMembers=function(t,e,o){new c(t,o,l.notIncludeOrderedMembers,!0).to.not.include.ordered.members(e)},l.includeDeepOrderedMembers=function(t,e,o){new c(t,o,l.includeDeepOrderedMembers,!0).to.include.deep.ordered.members(e)},l.notIncludeDeepOrderedMembers=function(t,e,o){new c(t,o,l.notIncludeDeepOrderedMembers,!0).to.not.include.deep.ordered.members(e)},l.oneOf=function(t,e,o){new c(t,o,l.oneOf,!0).to.be.oneOf(e)},l.changes=function(t,e,o,n){3===arguments.length&&"function"==typeof e&&(n=o,o=null),new c(t,n,l.changes,!0).to.change(e,o)},l.changesBy=function(t,e,o,n,r){if(4===arguments.length&&"function"==typeof e){var i=n;n=o,r=i}else 3===arguments.length&&(n=o,o=null);new c(t,r,l.changesBy,!0).to.change(e,o).by(n)},l.doesNotChange=function(t,e,o,n){return 3===arguments.length&&"function"==typeof e&&(n=o,o=null),new c(t,n,l.doesNotChange,!0).to.not.change(e,o)},l.changesButNotBy=function(t,e,o,n,r){if(4===arguments.length&&"function"==typeof e){var i=n;n=o,r=i}else 3===arguments.length&&(n=o,o=null);new c(t,r,l.changesButNotBy,!0).to.change(e,o).but.not.by(n)},l.increases=function(t,e,o,n){return 3===arguments.length&&"function"==typeof e&&(n=o,o=null),new c(t,n,l.increases,!0).to.increase(e,o)},l.increasesBy=function(t,e,o,n,r){if(4===arguments.length&&"function"==typeof e){var i=n;n=o,r=i}else 3===arguments.length&&(n=o,o=null);new c(t,r,l.increasesBy,!0).to.increase(e,o).by(n)},l.doesNotIncrease=function(t,e,o,n){return 3===arguments.length&&"function"==typeof e&&(n=o,o=null),new c(t,n,l.doesNotIncrease,!0).to.not.increase(e,o)},l.increasesButNotBy=function(t,e,o,n,r){if(4===arguments.length&&"function"==typeof e){var i=n;n=o,r=i}else 3===arguments.length&&(n=o,o=null);new c(t,r,l.increasesButNotBy,!0).to.increase(e,o).but.not.by(n)},l.decreases=function(t,e,o,n){return 3===arguments.length&&"function"==typeof e&&(n=o,o=null),new c(t,n,l.decreases,!0).to.decrease(e,o)},l.decreasesBy=function(t,e,o,n,r){if(4===arguments.length&&"function"==typeof e){var i=n;n=o,r=i}else 3===arguments.length&&(n=o,o=null);new c(t,r,l.decreasesBy,!0).to.decrease(e,o).by(n)},l.doesNotDecrease=function(t,e,o,n){return 3===arguments.length&&"function"==typeof e&&(n=o,o=null),new c(t,n,l.doesNotDecrease,!0).to.not.decrease(e,o)},l.doesNotDecreaseBy=function(t,e,o,n,r){if(4===arguments.length&&"function"==typeof e){var i=n;n=o,r=i}else 3===arguments.length&&(n=o,o=null);return new c(t,r,l.doesNotDecreaseBy,!0).to.not.decrease(e,o).by(n)},l.decreasesButNotBy=function(t,e,o,n,r){if(4===arguments.length&&"function"==typeof e){var i=n;n=o,r=i}else 3===arguments.length&&(n=o,o=null);new c(t,r,l.decreasesButNotBy,!0).to.decrease(e,o).but.not.by(n)}
/*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */,l.ifError=function(t){if(t)throw t},l.isExtensible=function(t,e){new c(t,e,l.isExtensible,!0).to.be.extensible},l.isNotExtensible=function(t,e){new c(t,e,l.isNotExtensible,!0).to.not.be.extensible},l.isSealed=function(t,e){new c(t,e,l.isSealed,!0).to.be.sealed},l.isNotSealed=function(t,e){new c(t,e,l.isNotSealed,!0).to.not.be.sealed},l.isFrozen=function(t,e){new c(t,e,l.isFrozen,!0).to.be.frozen},l.isNotFrozen=function(t,e){new c(t,e,l.isNotFrozen,!0).to.not.be.frozen},l.isEmpty=function(t,e){new c(t,e,l.isEmpty,!0).to.be.empty},l.isNotEmpty=function(t,e){new c(t,e,l.isNotEmpty,!0).to.not.be.empty},
/*!
   * Aliases.
   */
function t(e,o){return l[o]=l[e],t}("isOk","ok")("isNotOk","notOk")("throws","throw")("throws","Throw")("isExtensible","extensible")("isNotExtensible","notExtensible")("isSealed","sealed")("isNotSealed","notSealed")("isFrozen","frozen")("isNotFrozen","notFrozen")("isEmpty","empty")("isNotEmpty","notEmpty")}},function(t,e,o){"use strict";var n=o(42);t.exports={Rect:n}},function(t,e,o){"use strict";var s=o(43);function n(t){var e,o,n,r,i,a;t?(null!=t.top?(e=s(t.top)?t.top:0,r=null!=t.bottom?s(t.bottom)?t.bottom:0:(i=s(t.height)?t.height:0,e+i)):e=null!=t.bottom?(r=s(t.bottom)?t.bottom:0,i=s(t.height)?t.height:0,r-i):null!=t.height?(r=s(t.height)?t.height:0,0):r=0,null!=t.left?(o=s(t.left)?t.left:0,n=null!=t.right?s(t.right)?t.right:0:(a=s(t.width)?t.width:0,o+a)):o=null!=t.right?(n=s(t.right)?t.right:0,a=s(t.width)?t.width:0,n-a):null!=t.width?(n=s(t.width)?t.width:0,0):n=0):e=o=n=r=0;Object.defineProperties(this,{top:{enumerable:!0,get:function(){return e},set:function(t){s(t)&&(e=t)}},left:{enumerable:!0,get:function(){return o},set:function(t){s(t)&&(o=t)}},right:{enumerable:!0,get:function(){return n},set:function(t){s(t)&&(n=t)}},bottom:{enumerable:!0,get:function(){return r},set:function(t){s(t)&&(r=t)}},width:{enumerable:!0,get:function(){return n-o},set:function(t){s(t)&&(n=o+t)}},height:{enumerable:!0,get:function(){return r-e},set:function(t){s(t)&&(r=e+t)}}})}function r(t){return"{ left: "+t.left+", top: "+t.top+", right: "+t.right+", bottom: "+t.bottom+", width: "+t.width+", height: "+t.height+" }"}Object.defineProperties(n.prototype,{inspect:{enumerable:!0,writable:!0,configurable:!0,value:function(){return r(this)}},toString:{enumerable:!0,writable:!0,configurable:!0,value:function(){return r(this)}},normalize:{enumerable:!0,value:function(){var t;this.left>this.right&&(t=this.left,this.left=this.right,this.right=t),this.top>this.bottom&&(t=this.top,this.top=this.bottom,this.bottom=t)}},moveTo:{enumerable:!0,value:function(t,e){var o=this.right-this.left,n=this.bottom-this.top;this.left=t,this.right=t+o,this.top=e,this.bottom=e+n}},moveBy:{enumerable:!0,value:function(t,e){this.left+=t,this.right+=t,this.top+=e,this.bottom+=e}},resizeTo:{enumerable:!0,value:function(t,e){this.right=this.left+t,this.bottom=this.top+e}},resizeBy:{enumerable:!0,value:function(t,e){this.right+=t,this.bottom+=e}},intersect:{enumerable:!0,value:function(t){if("object"!=typeof t||!t)return!1;var e=Math.min(this.left,this.right),o=Math.max(this.left,this.right),n=Math.min(this.top,this.bottom),r=Math.max(this.top,this.bottom),i=Math.min(t.left,t.right),a=Math.max(t.left,t.right),s=Math.min(t.top,t.bottom),c=Math.max(t.top,t.bottom);return e<=a&&i<=o&&n<=c&&s<=r}},contains:{enumerable:!0,value:function(t){return!("object"!=typeof t||!t)&&(this.left<=t.x&&t.x<=this.right&&this.top<=t.y&&t.y<=this.bottom||this.left<=t.left&&t.right<=this.right&&this.top<=t.top&&t.top<=this.bottom)}}}),t.exports=n},function(t,e,o){"use strict";function n(t){return"number"==typeof t?isFinite(t):"[object Number]"===Object.prototype.toString.call(t)&&isFinite(t)}Object.defineProperty(n,"not",{enumerable:!0,value:function(t){return!n(t)}}),t.exports=n}]);