(this["webpackJsonp@scaffold-eth/react-app"]=this["webpackJsonp@scaffold-eth/react-app"]||[]).push([[18],{1603:function(e,t,r){"use strict";r.r(t);var n=r(1587),a=r(80),l=r(1649),u=(r(0),r(85),Object.defineProperty);function i(e,t){var r,n,a=e.levels;return((a&&0!==a.length?a[a.length-1]-((null===(r=this.electricInput)||void 0===r?void 0:r.test(t))?1:0):e.indentLevel)||0)*((null===(n=this.config)||void 0===n?void 0:n.indentUnit)||0)}n.C.defineMode("graphql-results",(function(e){var t=Object(l.a)({eatWhitespace:function(e){return e.eatSpace()},lexRules:s,parseRules:o,editorConfig:{tabSize:e.tabSize}});return{config:e,startState:t.startState,token:t.token,indent:i,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}})),u(i,"name",{value:"indent",configurable:!0});var s={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},o={Document:[Object(a.z)("{"),Object(a.v)("Entry",Object(a.z)(",")),Object(a.z)("}")],Entry:[Object(a.C)("String","def"),Object(a.z)(":"),"Value"],Value:function(e){switch(e.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(e.value){case"[":return"ListValue";case"{":return"ObjectValue"}return null;case"Keyword":switch(e.value){case"true":case"false":return"BooleanValue";case"null":return"NullValue"}return null}},NumberValue:[Object(a.C)("Number","number")],StringValue:[Object(a.C)("String","string")],BooleanValue:[Object(a.C)("Keyword","builtin")],NullValue:[Object(a.C)("Keyword","keyword")],ListValue:[Object(a.z)("["),Object(a.v)("Value",Object(a.z)(",")),Object(a.z)("]")],ObjectValue:[Object(a.z)("{"),Object(a.v)("ObjectField",Object(a.z)(",")),Object(a.z)("}")],ObjectField:[Object(a.C)("String","property"),Object(a.z)(":"),"Value"]}},1649:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(80),a=r(21),l=Object.defineProperty,u=function(e,t){return l(e,"name",{value:t,configurable:!0})};function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{eatWhitespace:function(e){return e.eatWhile(n.s)},lexRules:n.i,parseRules:n.j,editorConfig:{}};return{startState:function(){var t={level:0,step:0,name:null,kind:null,type:null,rule:null,needsSeparator:!1,prevState:null};return p(e.parseRules,t,a.a.DOCUMENT),t},token:function(t,r){return s(t,r,e)}}}function s(e,t,r){var n;if(t.inBlockstring)return e.match(/.*"""/)?(t.inBlockstring=!1,"string"):(e.skipToEnd(),"string");var a=r.lexRules,l=r.parseRules,u=r.eatWhitespace,i=r.editorConfig;if(t.rule&&0===t.rule.length?d(t):t.needsAdvance&&(t.needsAdvance=!1,v(t,!0)),e.sol()){var s=(null===i||void 0===i?void 0:i.tabSize)||2;t.indentLevel=Math.floor(e.indentation()/s)}if(u(e))return"ws";var f=S(a,e);if(!f)return e.match(/\S+/)||e.match(/\s/),p(c,t,"Invalid"),"invalidchar";if("Comment"===f.kind)return p(c,t,"Comment"),"comment";var g=o({},t);if("Punctuation"===f.kind)if(/^[{([]/.test(f.value))void 0!==t.indentLevel&&(t.levels=(t.levels||[]).concat(t.indentLevel+1));else if(/^[})\]]/.test(f.value)){var h=t.levels=(t.levels||[]).slice(0,-1);t.indentLevel&&h.length>0&&h[h.length-1]<t.indentLevel&&(t.indentLevel=h[h.length-1])}for(;t.rule;){var j="function"===typeof t.rule?0===t.step?t.rule(f,e):null:t.rule[t.step];if(t.needsSeparator&&(j=null===j||void 0===j?void 0:j.separator),j){if(j.ofRule&&(j=j.ofRule),"string"===typeof j){p(l,t,j);continue}if(null===(n=j.match)||void 0===n?void 0:n.call(j,f))return j.update&&j.update(t,f),"Punctuation"===f.kind?v(t,!0):t.needsAdvance=!0,j.style}b(t)}return o(t,g),p(c,t,"Invalid"),"invalidchar"}function o(e,t){for(var r=Object.keys(t),n=0;n<r.length;n++)e[r[n]]=t[r[n]];return e}u(i,"onlineParser"),u(s,"getToken"),u(o,"assign");var c={Invalid:[],Comment:[]};function p(e,t,r){if(!e[r])throw new TypeError("Unknown rule: "+r);t.prevState=Object.assign({},t),t.kind=r,t.name=null,t.type=null,t.rule=e[r],t.step=0,t.needsSeparator=!1}function d(e){e.prevState&&(e.kind=e.prevState.kind,e.name=e.prevState.name,e.type=e.prevState.type,e.rule=e.prevState.rule,e.step=e.prevState.step,e.needsSeparator=e.prevState.needsSeparator,e.prevState=e.prevState.prevState)}function v(e,t){var r;if(f(e)&&e.rule){var n=e.rule[e.step];if(n.separator){var a=n.separator;if(e.needsSeparator=!e.needsSeparator,!e.needsSeparator&&a.ofRule)return}if(t)return}for(e.needsSeparator=!1,e.step++;e.rule&&!(Array.isArray(e.rule)&&e.step<e.rule.length);)d(e),e.rule&&(f(e)?(null===(r=e.rule)||void 0===r?void 0:r[e.step].separator)&&(e.needsSeparator=!e.needsSeparator):(e.needsSeparator=!1,e.step++))}function f(e){var t=Array.isArray(e.rule)&&"string"!==typeof e.rule[e.step]&&e.rule[e.step];return t&&t.isList}function b(e){for(;e.rule&&(!Array.isArray(e.rule)||!e.rule[e.step].ofRule);)d(e);e.rule&&v(e,!1)}function S(e,t){for(var r=Object.keys(e),n=0;n<r.length;n++){var a=t.match(e[r[n]]);if(a&&a instanceof Array)return{kind:r[n],value:a[0]}}}u(p,"pushRule"),u(d,"popRule"),u(v,"advanceRule"),u(f,"isList"),u(b,"unsuccessful"),u(S,"lex")}}]);
//# sourceMappingURL=18.c8212f83.chunk.js.map