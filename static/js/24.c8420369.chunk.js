(this["webpackJsonp@scaffold-eth/react-app"]=this["webpackJsonp@scaffold-eth/react-app"]||[]).push([[24],{1602:function(e,n,r){"use strict";r.r(n);var a,t,i,c,o,u,s,l=r(6),f=r(10),d=r(9),p=r(13),v=r(14),b=r(559),h=r(1588),m=r(19),k=(r(80),r(0),r(85),Object.defineProperty),y=function(e,n){return k(e,"name",{value:n,configurable:!0})};function g(e){a=e,t=e.length,i=c=o=-1,B(),V();var n=O();return x("EOF"),n}function O(){var e=i,n=[];if(x("{"),!T("}")){do{n.push(w())}while(T(","));x("}")}return{kind:"Object",start:e,end:o,members:n}}function w(){var e=i,n="String"===s?E():null;x("String"),x(":");var r=N();return{kind:"Member",start:e,end:o,key:n,value:r}}function j(){var e=i,n=[];if(x("["),!T("]")){do{n.push(N())}while(T(","));x("]")}return{kind:"Array",start:e,end:o,values:n}}function N(){switch(s){case"[":return j();case"{":return O();case"String":case"Number":case"Boolean":case"Null":var e=E();return V(),e}x("Value")}function E(){return{kind:s,start:i,end:c,value:JSON.parse(a.slice(i,c))}}function x(e){if(s!==e){var n;if("EOF"===s)n="[end of file]";else if(c-i>1)n="`"+a.slice(i,c)+"`";else{var r=a.slice(i).match(/^.+?\b/);n="`"+(r?r[0]:a[i])+"`"}throw F("Expected ".concat(e," but found ").concat(n,"."))}V()}y(g,"jsonParse"),y(O,"parseObj"),y(w,"parseMember"),y(j,"parseArr"),y(N,"parseVal"),y(E,"curToken"),y(x,"expect");var S=function(e){Object(p.a)(r,e);var n=Object(v.a)(r);function r(e,a){var t;return Object(d.a)(this,r),(t=n.call(this,e)).position=a,t}return Object(f.a)(r)}(Object(b.a)(Error));function F(e){return new S(e,{start:i,end:c})}function T(e){if(s===e)return V(),!0}function B(){return c<t&&(c++,u=c===t?0:a.charCodeAt(c)),u}function V(){for(o=c;9===u||10===u||13===u||32===u;)B();if(0!==u){switch(i=c,u){case 34:return s="String",A();case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return s="Number",I();case 102:if("false"!==a.slice(i,i+5))break;return c+=4,B(),void(s="Boolean");case 110:if("null"!==a.slice(i,i+4))break;return c+=3,B(),void(s="Null");case 116:if("true"!==a.slice(i,i+4))break;return c+=3,B(),void(s="Boolean")}s=a[i],B()}else s="EOF"}function A(){for(B();34!==u&&u>31;)if(92===u)switch(u=B()){case 34:case 47:case 92:case 98:case 102:case 110:case 114:case 116:B();break;case 117:B(),q(),q(),q(),q();break;default:throw F("Bad character escape sequence.")}else{if(c===t)throw F("Unterminated string.");B()}if(34!==u)throw F("Unterminated string.");B()}function q(){if(u>=48&&u<=57||u>=65&&u<=70||u>=97&&u<=102)return B();throw F("Expected hexadecimal digit.")}function I(){45===u&&B(),48===u?B():J(),46===u&&(B(),J()),69!==u&&101!==u||(43!==(u=B())&&45!==u||B(),J())}function J(){if(u<48||u>57)throw F("Expected decimal digit.");do{B()}while(u>=48&&u<=57)}function C(e,n,r){var a=[];return r.members.forEach((function(r){var t;if(r){var i=null===(t=r.key)||void 0===t?void 0:t.value,c=n[i];c?D(c,r.value).forEach((function(n){var r=Object(l.a)(n,2),t=r[0],i=r[1];a.push(H(e,t,i))})):a.push(H(e,r.key,'Variable "$'.concat(i,'" does not appear in any GraphQL query.')))}})),a}function D(e,n){if(!e||!n)return[];if(e instanceof m.e)return"Null"===n.kind?[[n,'Type "'.concat(e,'" is non-nullable and cannot be null.')]]:D(e.ofType,n);if("Null"===n.kind)return[];if(e instanceof m.d){var r=e.ofType;return"Array"===n.kind?P(n.values||[],(function(e){return D(r,e)})):D(r,n)}if(e instanceof m.b){if("Object"!==n.kind)return[[n,'Type "'.concat(e,'" must be an Object.')]];var a=Object.create(null),t=P(n.members,(function(n){var r,t=null===(r=null===n||void 0===n?void 0:n.key)||void 0===r?void 0:r.value;a[t]=!0;var i=e.getFields()[t];return i?D(i?i.type:void 0,n.value):[[n.key,'Type "'.concat(e,'" does not have a field "').concat(t,'".')]]}));return Object.keys(e.getFields()).forEach((function(r){a[r]||e.getFields()[r].type instanceof m.e&&t.push([n,'Object of type "'.concat(e,'" is missing required field "').concat(r,'".')])})),t}return"Boolean"===e.name&&"Boolean"!==n.kind||"String"===e.name&&"String"!==n.kind||"ID"===e.name&&"Number"!==n.kind&&"String"!==n.kind||"Float"===e.name&&"Number"!==n.kind||"Int"===e.name&&("Number"!==n.kind||(0|n.value)!==n.value)||(e instanceof m.a||e instanceof m.g)&&("String"!==n.kind&&"Number"!==n.kind&&"Boolean"!==n.kind&&"Null"!==n.kind||M(e.parseValue(n.value)))?[[n,'Expected value of type "'.concat(e,'".')]]:[]}function H(e,n,r){return{message:r,severity:"error",type:"validation",from:e.posFromIndex(n.start),to:e.posFromIndex(n.end)}}function M(e){return null===e||void 0===e||e!==e}function P(e,n){return Array.prototype.concat.apply([],e.map(n))}y(S,"JSONSyntaxError"),y(F,"syntaxError"),y(T,"skip"),y(B,"ch"),y(V,"lex"),y(A,"readString"),y(q,"readHex"),y(I,"readNumber"),y(J,"readDigits"),h.C.registerHelper("lint","graphql-variables",(function(e,n,r){if(!e)return[];var a;try{a=g(e)}catch(i){if(i instanceof S)return[H(r,i.position,i.message)];throw i}var t=n.variableToType;return t?C(r,t,a):[]})),y(C,"validateVariables"),y(D,"validateValue"),y(H,"lintError"),y(M,"isNullish"),y(P,"mapCat")}}]);
//# sourceMappingURL=24.c8420369.chunk.js.map