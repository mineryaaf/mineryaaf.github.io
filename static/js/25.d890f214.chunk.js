(this["webpackJsonp@scaffold-eth/react-app"]=this["webpackJsonp@scaffold-eth/react-app"]||[]).push([[25],{1594:function(t,e,n){"use strict";n.r(e),n.d(e,"l",(function(){return f}));var o,r=n(2),i=n(1588),a=Object.defineProperty,s=function(t,e){return a(t,"name",{value:e,configurable:!0})};function l(t,e){return e.forEach((function(e){e&&"string"!==typeof e&&!Array.isArray(e)&&Object.keys(e).forEach((function(n){if("default"!==n&&!(n in t)){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}}))})),Object.freeze(t)}s(l,"_mergeNamespaces");var u={exports:{}};!function(t){var e="CodeMirror-lint-markers",n="CodeMirror-lint-line-";function o(e,n,o){var r=document.createElement("div");function i(e){if(!r.parentNode)return t.off(document,"mousemove",i);r.style.top=Math.max(0,e.clientY-r.offsetHeight-5)+"px",r.style.left=e.clientX+5+"px"}return r.className="CodeMirror-lint-tooltip cm-s-"+e.options.theme,r.appendChild(o.cloneNode(!0)),e.state.lint.options.selfContain?e.getWrapperElement().appendChild(r):document.body.appendChild(r),s(i,"position"),t.on(document,"mousemove",i),i(n),null!=r.style.opacity&&(r.style.opacity=1),r}function r(t){t.parentNode&&t.parentNode.removeChild(t)}function i(t){t.parentNode&&(null==t.style.opacity&&r(t),t.style.opacity=0,setTimeout((function(){r(t)}),600))}function a(e,n,r,a){var l=o(e,n,r);function u(){t.off(a,"mouseout",u),l&&(i(l),l=null)}s(u,"hide");var c=setInterval((function(){if(l)for(var t=a;;t=t.parentNode){if(t&&11==t.nodeType&&(t=t.host),t==document.body)return;if(!t){u();break}}if(!l)return clearInterval(c)}),400);t.on(a,"mouseout",u)}function l(t,e,n){for(var o in this.marked=[],e instanceof Function&&(e={getAnnotations:e}),e&&!0!==e||(e={}),this.options={},this.linterOptions=e.options||{},u)this.options[o]=u[o];for(var o in e)u.hasOwnProperty(o)?null!=e[o]&&(this.options[o]=e[o]):e.options||(this.linterOptions[o]=e[o]);this.timeout=null,this.hasGutter=n,this.onMouseOver=function(e){O(t,e)},this.waitingFor=0}s(o,"showTooltip"),s(r,"rm"),s(i,"hideTooltip"),s(a,"showTooltipFor"),s(l,"LintState");var u={highlightLines:!1,tooltips:!0,delay:500,lintOnChange:!0,getAnnotations:null,async:!1,selfContain:null,formatAnnotation:null,onUpdateLinting:null};function c(t){var n=t.state.lint;n.hasGutter&&t.clearGutter(e),n.options.highlightLines&&f(t);for(var o=0;o<n.marked.length;++o)n.marked[o].clear();n.marked.length=0}function f(t){t.eachLine((function(e){var n=e.wrapClass&&/\bCodeMirror-lint-line-\w+\b/.exec(e.wrapClass);n&&t.removeLineClass(e,"wrap",n[0])}))}function p(e,n,o,r,i){var s=document.createElement("div"),l=s;return s.className="CodeMirror-lint-marker CodeMirror-lint-marker-"+o,r&&((l=s.appendChild(document.createElement("div"))).className="CodeMirror-lint-marker CodeMirror-lint-marker-multiple"),0!=i&&t.on(l,"mouseover",(function(t){a(e,t,n,l)})),s}function m(t,e){return"error"==t?t:e}function d(t){for(var e=[],n=0;n<t.length;++n){var o=t[n],r=o.from.line;(e[r]||(e[r]=[])).push(o)}return e}function h(t){var e=t.severity;e||(e="error");var n=document.createElement("div");return n.className="CodeMirror-lint-message CodeMirror-lint-message-"+e,"undefined"!=typeof t.messageHTML?n.innerHTML=t.messageHTML:n.appendChild(document.createTextNode(t.message)),n}function g(e,n){var o=e.state.lint,r=++o.waitingFor;function i(){r=-1,e.off("change",i)}s(i,"abort"),e.on("change",i),n(e.getValue(),(function(n,a){e.off("change",i),o.waitingFor==r&&(a&&n instanceof t&&(n=a),e.operation((function(){y(e,n)})))}),o.linterOptions,e)}function v(e){var n=e.state.lint;if(n){var o=n.options,r=o.getAnnotations||e.getHelper(t.Pos(0,0),"lint");if(r)if(o.async||r.async)g(e,r);else{var i=r(e.getValue(),n.linterOptions,e);if(!i)return;i.then?i.then((function(t){e.operation((function(){y(e,t)}))})):e.operation((function(){y(e,i)}))}}}function y(t,o){var r=t.state.lint;if(r){var i=r.options;c(t);for(var a=d(o),s=0;s<a.length;++s){var l=a[s];if(l){var u=[];l=l.filter((function(t){return!(u.indexOf(t.message)>-1)&&u.push(t.message)}));for(var f=null,g=r.hasGutter&&document.createDocumentFragment(),v=0;v<l.length;++v){var y=l[v],C=y.severity;C||(C="error"),f=m(f,C),i.formatAnnotation&&(y=i.formatAnnotation(y)),r.hasGutter&&g.appendChild(h(y)),y.to&&r.marked.push(t.markText(y.from,y.to,{className:"CodeMirror-lint-mark CodeMirror-lint-mark-"+C,__annotation:y}))}r.hasGutter&&t.setGutterMarker(s,e,p(t,g,f,a[s].length>1,i.tooltips)),i.highlightLines&&t.addLineClass(s,"wrap",n+f)}}i.onUpdateLinting&&i.onUpdateLinting(o,a,t)}}function C(t){var e=t.state.lint;e&&(clearTimeout(e.timeout),e.timeout=setTimeout((function(){v(t)}),e.options.delay))}function M(t,e,n){for(var o=n.target||n.srcElement,r=document.createDocumentFragment(),i=0;i<e.length;i++){var s=e[i];r.appendChild(h(s))}a(t,n,r,o)}function O(t,e){var n=e.target||e.srcElement;if(/\bCodeMirror-lint-mark-/.test(n.className)){for(var o=n.getBoundingClientRect(),r=(o.left+o.right)/2,i=(o.top+o.bottom)/2,a=t.findMarksAt(t.coordsChar({left:r,top:i},"client")),s=[],l=0;l<a.length;++l){var u=a[l].__annotation;u&&s.push(u)}s.length&&M(t,s,e)}}s(c,"clearMarks"),s(f,"clearErrorLines"),s(p,"makeMarker"),s(m,"getMaxSeverity"),s(d,"groupByLine"),s(h,"annotationTooltip"),s(g,"lintAsync"),s(v,"startLinting"),s(y,"updateLinting"),s(C,"onChange"),s(M,"popupTooltips"),s(O,"onMouseOver"),t.defineOption("lint",!1,(function(n,o,r){if(r&&r!=t.Init&&(c(n),!1!==n.state.lint.options.lintOnChange&&n.off("change",C),t.off(n.getWrapperElement(),"mouseover",n.state.lint.onMouseOver),clearTimeout(n.state.lint.timeout),delete n.state.lint),o){for(var i=n.getOption("gutters"),a=!1,s=0;s<i.length;++s)i[s]==e&&(a=!0);var u=n.state.lint=new l(n,o,a);u.options.lintOnChange&&n.on("change",C),0!=u.options.tooltips&&"gutter"!=u.options.tooltips&&t.on(n.getWrapperElement(),"mouseover",u.onMouseOver),v(n)}})),t.defineExtension("performLint",(function(){v(this)}))}(i.a.exports);var c=u.exports,f=Object.freeze(l((o={__proto__:null},Object(r.a)(o,Symbol.toStringTag,"Module"),Object(r.a)(o,"default",c),o),[u.exports]))}}]);
//# sourceMappingURL=25.d890f214.chunk.js.map