!function(){window.WebComponents=window.WebComponents||{flags:{}};var e="webcomponents.js",t=document.querySelector('script[src*="'+e+'"]'),n={};if(!n.noOpts){if(location.search.slice(1).split("&").forEach(function(e){var t,r=e.split("=");r[0]&&(t=r[0].match(/wc-(.+)/))&&(n[t[1]]=r[1]||!0)}),t)for(var r,o=0;r=t.attributes[o];o++)"src"!==r.name&&(n[r.name]=r.value||!0);if(n.log&&n.log.split){var i=n.log.split(",");n.log={},i.forEach(function(e){n.log[e]=!0})}else n.log={}}n.shadow=n.shadow||n.shadowdom||n.polyfill,"native"===n.shadow?n.shadow=!1:n.shadow=n.shadow||!HTMLElement.prototype.createShadowRoot,n.register&&(window.CustomElements=window.CustomElements||{flags:{}},window.CustomElements.flags.register=n.register),WebComponents.flags=n}(),WebComponents.flags.shadow&&("undefined"==typeof WeakMap&&!function(){var e=Object.defineProperty,t=Date.now()%1e9,n=function(){this.name="__st"+(1e9*Math.random()>>>0)+(t++ +"__")};n.prototype={set:function(t,n){var r=t[this.name];return r&&r[0]===t?r[1]=n:e(t,this.name,{value:[t,n],writable:!0}),this},get:function(e){var t;return(t=e[this.name])&&t[0]===e?t[1]:void 0},"delete":function(e){var t=e[this.name];return t&&t[0]===e?(t[0]=t[1]=void 0,!0):!1},has:function(e){var t=e[this.name];return t?t[0]===e:!1}},window.WeakMap=n}(),window.ShadowDOMPolyfill={},function(e){"use strict";function t(){if("undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime)return!1;if(navigator.getDeviceStorage)return!1;try{var e=new Function("return true;");return e()}catch(t){return!1}}function n(e){if(!e)throw new Error("Assertion failed")}function r(e,t){for(var n=W(t),r=0;r<n.length;r++){var o=n[r];A(e,o,F(t,o))}return e}function o(e,t){for(var n=W(t),r=0;r<n.length;r++){var o=n[r];switch(o){case"arguments":case"caller":case"length":case"name":case"prototype":case"toString":continue}A(e,o,F(t,o))}return e}function i(e,t){for(var n=0;n<t.length;n++)if(t[n]in e)return t[n]}function a(e,t,n){U.value=n,A(e,t,U)}function s(e,t){var n=e.__proto__||Object.getPrototypeOf(e);if(q)try{W(n)}catch(r){n=n.__proto__}var o=R.get(n);if(o)return o;var i=s(n),a=E(i);return g(n,a,t),a}function c(e,t){w(e,t,!0)}function l(e,t){w(t,e,!1)}function u(e){return/^on[a-z]+$/.test(e)}function d(e){return/^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(e)}function p(e){return k&&d(e)?new Function("return this.__impl4cf1e782hg__."+e):function(){return this.__impl4cf1e782hg__[e]}}function h(e){return k&&d(e)?new Function("v","this.__impl4cf1e782hg__."+e+" = v"):function(t){this.__impl4cf1e782hg__[e]=t}}function f(e){return k&&d(e)?new Function("return this.__impl4cf1e782hg__."+e+".apply(this.__impl4cf1e782hg__, arguments)"):function(){return this.__impl4cf1e782hg__[e].apply(this.__impl4cf1e782hg__,arguments)}}function m(e,t){try{return Object.getOwnPropertyDescriptor(e,t)}catch(n){return B}}function w(t,n,r,o){for(var i=W(t),a=0;a<i.length;a++){var s=i[a];if("polymerBlackList_"!==s&&!(s in n||t.polymerBlackList_&&t.polymerBlackList_[s])){q&&t.__lookupGetter__(s);var c,l,d=m(t,s);if("function"!=typeof d.value){var w=u(s);c=w?e.getEventHandlerGetter(s):p(s),(d.writable||d.set||V)&&(l=w?e.getEventHandlerSetter(s):h(s));var v=V||d.configurable;A(n,s,{get:c,set:l,configurable:v,enumerable:d.enumerable})}else r&&(n[s]=f(s))}}}function v(e,t,n){if(null!=e){var r=e.prototype;g(r,t,n),o(t,e)}}function g(e,t,r){var o=t.prototype;n(void 0===R.get(e)),R.set(e,t),I.set(o,e),c(e,o),r&&l(o,r),a(o,"constructor",t),t.prototype=o}function b(e,t){return R.get(t.prototype)===e}function y(e){var t=Object.getPrototypeOf(e),n=s(t),r=E(n);return g(t,r,e),r}function E(e){function t(t){e.call(this,t)}var n=Object.create(e.prototype);return n.constructor=t,t.prototype=n,t}function _(e){return e&&e.__impl4cf1e782hg__}function S(e){return!_(e)}function T(e){if(null===e)return null;n(S(e));var t=e.__wrapper8e3dd93a60__;return null!=t?t:e.__wrapper8e3dd93a60__=new(s(e,e))(e)}function M(e){return null===e?null:(n(_(e)),e.__impl4cf1e782hg__)}function O(e){return e.__impl4cf1e782hg__}function L(e,t){t.__impl4cf1e782hg__=e,e.__wrapper8e3dd93a60__=t}function N(e){return e&&_(e)?M(e):e}function C(e){return e&&!_(e)?T(e):e}function j(e,t){null!==t&&(n(S(e)),n(void 0===t||_(t)),e.__wrapper8e3dd93a60__=t)}function D(e,t,n){G.get=n,A(e.prototype,t,G)}function H(e,t){D(e,t,function(){return T(this.__impl4cf1e782hg__[t])})}function x(e,t){e.forEach(function(e){t.forEach(function(t){e.prototype[t]=function(){var e=C(this);return e[t].apply(e,arguments)}})})}var R=new WeakMap,I=new WeakMap,P=Object.create(null),k=t(),A=Object.defineProperty,W=Object.getOwnPropertyNames,F=Object.getOwnPropertyDescriptor,U={value:void 0,configurable:!0,enumerable:!1,writable:!0};W(window);var q=/Firefox/.test(navigator.userAgent),B={get:function(){},set:function(e){},configurable:!0,enumerable:!0},V=function(){var e=Object.getOwnPropertyDescriptor(Node.prototype,"nodeType");return e&&!e.get&&!e.set}(),G={get:void 0,configurable:!0,enumerable:!0};e.addForwardingProperties=c,e.assert=n,e.constructorTable=R,e.defineGetter=D,e.defineWrapGetter=H,e.forwardMethodsToWrapper=x,e.isIdentifierName=d,e.isWrapper=_,e.isWrapperFor=b,e.mixin=r,e.nativePrototypeTable=I,e.oneOf=i,e.registerObject=y,e.registerWrapper=v,e.rewrap=j,e.setWrapper=L,e.unsafeUnwrap=O,e.unwrap=M,e.unwrapIfNeeded=N,e.wrap=T,e.wrapIfNeeded=C,e.wrappers=P}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t,n){return{index:e,removed:t,addedCount:n}}function n(){}var r=0,o=1,i=2,a=3;n.prototype={calcEditDistances:function(e,t,n,r,o,i){for(var a=i-o+1,s=n-t+1,c=new Array(a),l=0;a>l;l++)c[l]=new Array(s),c[l][0]=l;for(var u=0;s>u;u++)c[0][u]=u;for(var l=1;a>l;l++)for(var u=1;s>u;u++)if(this.equals(e[t+u-1],r[o+l-1]))c[l][u]=c[l-1][u-1];else{var d=c[l-1][u]+1,p=c[l][u-1]+1;c[l][u]=p>d?d:p}return c},spliceOperationsFromEditDistances:function(e){for(var t=e.length-1,n=e[0].length-1,s=e[t][n],c=[];t>0||n>0;)if(0!=t)if(0!=n){var l,u=e[t-1][n-1],d=e[t-1][n],p=e[t][n-1];l=p>d?u>d?d:u:u>p?p:u,l==u?(u==s?c.push(r):(c.push(o),s=u),t--,n--):l==d?(c.push(a),t--,s=d):(c.push(i),n--,s=p)}else c.push(a),t--;else c.push(i),n--;return c.reverse(),c},calcSplices:function(e,n,s,c,l,u){var d=0,p=0,h=Math.min(s-n,u-l);if(0==n&&0==l&&(d=this.sharedPrefix(e,c,h)),s==e.length&&u==c.length&&(p=this.sharedSuffix(e,c,h-d)),n+=d,l+=d,s-=p,u-=p,s-n==0&&u-l==0)return[];if(n==s){for(var f=t(n,[],0);u>l;)f.removed.push(c[l++]);return[f]}if(l==u)return[t(n,[],s-n)];for(var m=this.spliceOperationsFromEditDistances(this.calcEditDistances(e,n,s,c,l,u)),f=void 0,w=[],v=n,g=l,b=0;b<m.length;b++)switch(m[b]){case r:f&&(w.push(f),f=void 0),v++,g++;break;case o:f||(f=t(v,[],0)),f.addedCount++,v++,f.removed.push(c[g]),g++;break;case i:f||(f=t(v,[],0)),f.addedCount++,v++;break;case a:f||(f=t(v,[],0)),f.removed.push(c[g]),g++}return f&&w.push(f),w},sharedPrefix:function(e,t,n){for(var r=0;n>r;r++)if(!this.equals(e[r],t[r]))return r;return n},sharedSuffix:function(e,t,n){for(var r=e.length,o=t.length,i=0;n>i&&this.equals(e[--r],t[--o]);)i++;return i},calculateSplices:function(e,t){return this.calcSplices(e,0,e.length,t,0,t.length)},equals:function(e,t){return e===t}},e.ArraySplice=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(){a=!1;var e=i.slice(0);i=[];for(var t=0;t<e.length;t++)(0,e[t])()}function n(e){i.push(e),a||(a=!0,r(t,0))}var r,o=window.MutationObserver,i=[],a=!1;if(o){var s=1,c=new o(t),l=document.createTextNode(s);c.observe(l,{characterData:!0}),r=function(){s=(s+1)%2,l.data=s}}else r=window.setTimeout;e.setEndOfMicrotask=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){e.scheduled_||(e.scheduled_=!0,f.push(e),m||(u(n),m=!0))}function n(){for(m=!1;f.length;){var e=f;f=[],e.sort(function(e,t){return e.uid_-t.uid_});for(var t=0;t<e.length;t++){var n=e[t];n.scheduled_=!1;var r=n.takeRecords();i(n),r.length&&n.callback_(r,n)}}}function r(e,t){this.type=e,this.target=t,this.addedNodes=new p.NodeList,this.removedNodes=new p.NodeList,this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function o(e,t){for(;e;e=e.parentNode){var n=h.get(e);if(n)for(var r=0;r<n.length;r++){var o=n[r];o.options.subtree&&o.addTransientObserver(t)}}}function i(e){for(var t=0;t<e.nodes_.length;t++){var n=e.nodes_[t],r=h.get(n);if(!r)return;for(var o=0;o<r.length;o++){var i=r[o];i.observer===e&&i.removeTransientObservers()}}}function a(e,n,o){for(var i=Object.create(null),a=Object.create(null),s=e;s;s=s.parentNode){var c=h.get(s);if(c)for(var l=0;l<c.length;l++){var u=c[l],d=u.options;if((s===e||d.subtree)&&("attributes"!==n||d.attributes)&&("attributes"!==n||!d.attributeFilter||null===o.namespace&&-1!==d.attributeFilter.indexOf(o.name))&&("characterData"!==n||d.characterData)&&("childList"!==n||d.childList)){var p=u.observer;i[p.uid_]=p,("attributes"===n&&d.attributeOldValue||"characterData"===n&&d.characterDataOldValue)&&(a[p.uid_]=o.oldValue)}}}for(var f in i){var p=i[f],m=new r(n,e);"name"in o&&"namespace"in o&&(m.attributeName=o.name,m.attributeNamespace=o.namespace),o.addedNodes&&(m.addedNodes=o.addedNodes),o.removedNodes&&(m.removedNodes=o.removedNodes),o.previousSibling&&(m.previousSibling=o.previousSibling),o.nextSibling&&(m.nextSibling=o.nextSibling),void 0!==a[f]&&(m.oldValue=a[f]),t(p),p.records_.push(m)}}function s(e){if(this.childList=!!e.childList,this.subtree=!!e.subtree,"attributes"in e||!("attributeOldValue"in e||"attributeFilter"in e)?this.attributes=!!e.attributes:this.attributes=!0,"characterDataOldValue"in e&&!("characterData"in e)?this.characterData=!0:this.characterData=!!e.characterData,!this.attributes&&(e.attributeOldValue||"attributeFilter"in e)||!this.characterData&&e.characterDataOldValue)throw new TypeError;if(this.characterData=!!e.characterData,this.attributeOldValue=!!e.attributeOldValue,this.characterDataOldValue=!!e.characterDataOldValue,"attributeFilter"in e){if(null==e.attributeFilter||"object"!=typeof e.attributeFilter)throw new TypeError;this.attributeFilter=w.call(e.attributeFilter)}else this.attributeFilter=null}function c(e){this.callback_=e,this.nodes_=[],this.records_=[],this.uid_=++v,this.scheduled_=!1}function l(e,t,n){this.observer=e,this.target=t,this.options=n,this.transientObservedNodes=[]}var u=e.setEndOfMicrotask,d=e.wrapIfNeeded,p=e.wrappers,h=new WeakMap,f=[],m=!1,w=Array.prototype.slice,v=0;c.prototype={constructor:c,observe:function(e,t){e=d(e);var n,r=new s(t),o=h.get(e);o||h.set(e,o=[]);for(var i=0;i<o.length;i++)o[i].observer===this&&(n=o[i],n.removeTransientObservers(),n.options=r);n||(n=new l(this,e,r),o.push(n),this.nodes_.push(e))},disconnect:function(){this.nodes_.forEach(function(e){for(var t=h.get(e),n=0;n<t.length;n++){var r=t[n];if(r.observer===this){t.splice(n,1);break}}},this),this.records_=[]},takeRecords:function(){var e=this.records_;return this.records_=[],e}},l.prototype={addTransientObserver:function(e){if(e!==this.target){t(this.observer),this.transientObservedNodes.push(e);var n=h.get(e);n||h.set(e,n=[]),n.push(this)}},removeTransientObservers:function(){var e=this.transientObservedNodes;this.transientObservedNodes=[];for(var t=0;t<e.length;t++)for(var n=e[t],r=h.get(n),o=0;o<r.length;o++)if(r[o]===this){r.splice(o,1);break}}},e.enqueueMutation=a,e.registerTransientObservers=o,e.wrappers.MutationObserver=c,e.wrappers.MutationRecord=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t){this.root=e,this.parent=t}function n(e,t){if(e.treeScope_!==t){e.treeScope_=t;for(var r=e.shadowRoot;r;r=r.olderShadowRoot)r.treeScope_.parent=t;for(var o=e.firstChild;o;o=o.nextSibling)n(o,t)}}function r(n){if(n instanceof e.wrappers.Window,n.treeScope_)return n.treeScope_;var o,i=n.parentNode;return o=i?r(i):new t(n,null),n.treeScope_=o}t.prototype={get renderer(){return this.root instanceof e.wrappers.ShadowRoot?e.getRendererForHost(this.root.host):null},contains:function(e){for(;e;e=e.parent)if(e===this)return!0;return!1}},e.TreeScope=t,e.getTreeScope=r,e.setTreeScope=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return e instanceof G.ShadowRoot}function n(e){return A(e).root}function r(e,r){var s=[],c=e;for(s.push(c);c;){var l=a(c);if(l&&l.length>0){for(var u=0;u<l.length;u++){var p=l[u];if(i(p)){var h=n(p),f=h.olderShadowRoot;f&&s.push(f)}s.push(p)}c=l[l.length-1]}else if(t(c)){if(d(e,c)&&o(r))break;c=c.host,s.push(c)}else c=c.parentNode,c&&s.push(c)}return s}function o(e){if(!e)return!1;switch(e.type){case"abort":case"error":case"select":case"change":case"load":case"reset":case"resize":case"scroll":case"selectstart":return!0}return!1}function i(e){return e instanceof HTMLShadowElement}function a(t){return e.getDestinationInsertionPoints(t)}function s(e,t){if(0===e.length)return t;t instanceof G.Window&&(t=t.document);for(var n=A(t),r=e[0],o=A(r),i=l(n,o),a=0;a<e.length;a++){var s=e[a];if(A(s)===i)return s}return e[e.length-1]}function c(e){for(var t=[];e;e=e.parent)t.push(e);return t}function l(e,t){for(var n=c(e),r=c(t),o=null;n.length>0&&r.length>0;){var i=n.pop(),a=r.pop();if(i!==a)break;o=i}return o}function u(e,t,n){t instanceof G.Window&&(t=t.document);var o,i=A(t),a=A(n),s=r(n,e),o=l(i,a);o||(o=a.root);for(var c=o;c;c=c.parent)for(var u=0;u<s.length;u++){var d=s[u];if(A(d)===c)return d}return null}function d(e,t){return A(e)===A(t)}function p(e){if(!K.get(e)&&(K.set(e,!0),f(V(e),V(e.target)),P)){var t=P;throw P=null,t}}function h(e){switch(e.type){case"load":case"beforeunload":case"unload":return!0}return!1}function f(t,n){if($.get(t))throw new Error("InvalidStateError");$.set(t,!0),e.renderAllPending();var o,i,a;if(h(t)&&!t.bubbles){var s=n;s instanceof G.Document&&(a=s.defaultView)&&(i=s,o=[])}if(!o)if(n instanceof G.Window)a=n,o=[];else if(o=r(n,t),!h(t)){var s=o[o.length-1];s instanceof G.Document&&(a=s.defaultView)}return ne.set(t,o),m(t,o,a,i)&&w(t,o,a,i)&&v(t,o,a,i),J.set(t,re),Y["delete"](t,null),$["delete"](t),t.defaultPrevented}function m(e,t,n,r){var o=oe;if(n&&!g(n,e,o,t,r))return!1;for(var i=t.length-1;i>0;i--)if(!g(t[i],e,o,t,r))return!1;return!0}function w(e,t,n,r){var o=ie,i=t[0]||n;return g(i,e,o,t,r)}function v(e,t,n,r){for(var o=ae,i=1;i<t.length;i++)if(!g(t[i],e,o,t,r))return;n&&t.length>0&&g(n,e,o,t,r)}function g(e,t,n,r,o){var i=z.get(e);if(!i)return!0;var a=o||s(r,e);if(a===e){if(n===oe)return!0;n===ae&&(n=ie)}else if(n===ae&&!t.bubbles)return!0;if("relatedTarget"in t){var c=B(t),l=c.relatedTarget;if(l){if(l instanceof Object&&l.addEventListener){var d=V(l),p=u(t,e,d);if(p===a)return!0}else p=null;Z.set(t,p)}}J.set(t,n);var h=t.type,f=!1;X.set(t,a),Y.set(t,e),i.depth++;for(var m=0,w=i.length;w>m;m++){var v=i[m];if(v.removed)f=!0;else if(!(v.type!==h||!v.capture&&n===oe||v.capture&&n===ae))try{if("function"==typeof v.handler?v.handler.call(e,t):v.handler.handleEvent(t),ee.get(t))return!1}catch(g){P||(P=g)}}if(i.depth--,f&&0===i.depth){var b=i.slice();i.length=0;for(var m=0;m<b.length;m++)b[m].removed||i.push(b[m])}return!Q.get(t)}function b(e,t,n){this.type=e,this.handler=t,this.capture=Boolean(n)}function y(e,t){if(!(e instanceof se))return V(T(se,"Event",e,t));var n=e;return be||"beforeunload"!==n.type||this instanceof M?void U(n,this):new M(n)}function E(e){return e&&e.relatedTarget?Object.create(e,{relatedTarget:{value:B(e.relatedTarget)}}):e}function _(e,t,n){var r=window[e],o=function(t,n){return t instanceof r?void U(t,this):V(T(r,e,t,n))};if(o.prototype=Object.create(t.prototype),n&&W(o.prototype,n),r)try{F(r,o,new r("temp"))}catch(i){F(r,o,document.createEvent(e))}return o}function S(e,t){return function(){arguments[t]=B(arguments[t]);var n=B(this);n[e].apply(n,arguments)}}function T(e,t,n,r){if(ve)return new e(n,E(r));var o=B(document.createEvent(t)),i=we[t],a=[n];return Object.keys(i).forEach(function(e){var t=null!=r&&e in r?r[e]:i[e];"relatedTarget"===e&&(t=B(t)),a.push(t)}),o["init"+t].apply(o,a),o}function M(e){y.call(this,e)}function O(e){return"function"==typeof e?!0:e&&e.handleEvent}function L(e){switch(e){case"DOMAttrModified":case"DOMAttributeNameChanged":case"DOMCharacterDataModified":case"DOMElementNameChanged":case"DOMNodeInserted":case"DOMNodeInsertedIntoDocument":case"DOMNodeRemoved":case"DOMNodeRemovedFromDocument":case"DOMSubtreeModified":return!0}return!1}function N(e){U(e,this)}function C(e){return e instanceof G.ShadowRoot&&(e=e.host),B(e)}function j(e,t){var n=z.get(e);if(n)for(var r=0;r<n.length;r++)if(!n[r].removed&&n[r].type===t)return!0;return!1}function D(e,t){for(var n=B(e);n;n=n.parentNode)if(j(V(n),t))return!0;return!1}function H(e){k(e,Ee)}function x(t,n,o,i){e.renderAllPending();var a=V(_e.call(q(n),o,i));if(!a)return null;var c=r(a,null),l=c.lastIndexOf(t);return-1==l?null:(c=c.slice(0,l),s(c,t))}function R(e){return function(){var t=te.get(this);return t&&t[e]&&t[e].value||null}}function I(e){var t=e.slice(2);return function(n){var r=te.get(this);r||(r=Object.create(null),te.set(this,r));var o=r[e];if(o&&this.removeEventListener(t,o.wrapped,!1),"function"==typeof n){var i=function(t){var r=n.call(this,t);r===!1?t.preventDefault():"onbeforeunload"===e&&"string"==typeof r&&(t.returnValue=r)};this.addEventListener(t,i,!1),r[e]={value:n,wrapped:i}}}}var P,k=e.forwardMethodsToWrapper,A=e.getTreeScope,W=e.mixin,F=e.registerWrapper,U=e.setWrapper,q=e.unsafeUnwrap,B=e.unwrap,V=e.wrap,G=e.wrappers,z=(new WeakMap,new WeakMap),K=new WeakMap,$=new WeakMap,X=new WeakMap,Y=new WeakMap,Z=new WeakMap,J=new WeakMap,Q=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakMap,re=0,oe=1,ie=2,ae=3;b.prototype={equals:function(e){return this.handler===e.handler&&this.type===e.type&&this.capture===e.capture},get removed(){return null===this.handler},remove:function(){this.handler=null}};var se=window.Event;se.prototype.polymerBlackList_={returnValue:!0,keyLocation:!0},y.prototype={get target(){return X.get(this)},get currentTarget(){return Y.get(this)},get eventPhase(){return J.get(this)},get path(){var e=ne.get(this);return e?e.slice():[]},stopPropagation:function(){Q.set(this,!0)},stopImmediatePropagation:function(){Q.set(this,!0),ee.set(this,!0)}};var ce=function(){var e=document.createEvent("Event");return e.initEvent("test",!0,!0),e.preventDefault(),e.defaultPrevented}();ce||(y.prototype.preventDefault=function(){this.cancelable&&(q(this).preventDefault(),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}),F(se,y,document.createEvent("Event"));var le=_("UIEvent",y),ue=_("CustomEvent",y),de={get relatedTarget(){var e=Z.get(this);return void 0!==e?e:V(B(this).relatedTarget)}},pe=W({initMouseEvent:S("initMouseEvent",14)},de),he=W({initFocusEvent:S("initFocusEvent",5)},de),fe=_("MouseEvent",le,pe),me=_("FocusEvent",le,he),we=Object.create(null),ve=function(){try{new window.FocusEvent("focus")}catch(e){return!1}return!0}();if(!ve){var ge=function(e,t,n){if(n){var r=we[n];t=W(W({},r),t)}we[e]=t};ge("Event",{bubbles:!1,cancelable:!1}),ge("CustomEvent",{detail:null},"Event"),ge("UIEvent",{view:null,detail:0},"Event"),ge("MouseEvent",{screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null},"UIEvent"),ge("FocusEvent",{relatedTarget:null},"UIEvent")}var be=window.BeforeUnloadEvent;M.prototype=Object.create(y.prototype),W(M.prototype,{get returnValue(){return q(this).returnValue},set returnValue(e){q(this).returnValue=e}}),be&&F(be,M);var ye=window.EventTarget,Ee=["addEventListener","removeEventListener","dispatchEvent"];[Node,Window].forEach(function(e){var t=e.prototype;Ee.forEach(function(e){Object.defineProperty(t,e+"_",{value:t[e]})})}),N.prototype={addEventListener:function(e,t,n){if(O(t)&&!L(e)){var r=new b(e,t,n),o=z.get(this);if(o){for(var i=0;i<o.length;i++)if(r.equals(o[i]))return}else o=[],o.depth=0,z.set(this,o);o.push(r);var a=C(this);a.addEventListener_(e,p,!0)}},removeEventListener:function(e,t,n){n=Boolean(n);var r=z.get(this);if(r){for(var o=0,i=!1,a=0;a<r.length;a++)r[a].type===e&&r[a].capture===n&&(o++,r[a].handler===t&&(i=!0,r[a].remove()));if(i&&1===o){var s=C(this);s.removeEventListener_(e,p,!0)}}},dispatchEvent:function(t){var n=B(t),r=n.type;K.set(n,!1),e.renderAllPending();var o;D(this,r)||(o=function(){},this.addEventListener(r,o,!0));try{return B(this).dispatchEvent_(n)}finally{o&&this.removeEventListener(r,o,!0)}}},ye&&F(ye,N);var _e=document.elementFromPoint;e.elementFromPoint=x,e.getEventHandlerGetter=R,e.getEventHandlerSetter=I,e.wrapEventTargetMethods=H,e.wrappers.BeforeUnloadEvent=M,e.wrappers.CustomEvent=ue,e.wrappers.Event=y,e.wrappers.EventTarget=N,e.wrappers.FocusEvent=me,e.wrappers.MouseEvent=fe,e.wrappers.UIEvent=le}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t){Object.defineProperty(e,t,m)}function n(e){l(e,this)}function r(){this.length=0,t(this,"length")}function o(e){for(var t=new r,o=0;o<e.length;o++)t[o]=new n(e[o]);return t.length=o,t}function i(e){a.call(this,e)}var a=e.wrappers.UIEvent,s=e.mixin,c=e.registerWrapper,l=e.setWrapper,u=e.unsafeUnwrap,d=e.wrap,p=window.TouchEvent;if(p){var h;try{h=document.createEvent("TouchEvent")}catch(f){return}var m={enumerable:!1};n.prototype={get target(){return d(u(this).target)}};var w={configurable:!0,enumerable:!0,get:null};["clientX","clientY","screenX","screenY","pageX","pageY","identifier","webkitRadiusX","webkitRadiusY","webkitRotationAngle","webkitForce"].forEach(function(e){w.get=function(){return u(this)[e]},Object.defineProperty(n.prototype,e,w)}),r.prototype={item:function(e){return this[e]}},i.prototype=Object.create(a.prototype),s(i.prototype,{get touches(){return o(u(this).touches)},get targetTouches(){return o(u(this).targetTouches)},get changedTouches(){return o(u(this).changedTouches)},initTouchEvent:function(){throw new Error("Not implemented")}}),c(p,i,h),e.wrappers.Touch=n,e.wrappers.TouchEvent=i,e.wrappers.TouchList=r}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e,t){Object.defineProperty(e,t,s)}function n(){this.length=0,t(this,"length")}function r(e){if(null==e)return e;for(var t=new n,r=0,o=e.length;o>r;r++)t[r]=a(e[r]);return t.length=o,t}function o(e,t){e.prototype[t]=function(){return r(i(this)[t].apply(i(this),arguments))}}var i=e.unsafeUnwrap,a=e.wrap,s={enumerable:!1};n.prototype={item:function(e){return this[e]}},t(n.prototype,"item"),e.wrappers.NodeList=n,e.addWrapNodeListMethod=o,e.wrapNodeList=r}(window.ShadowDOMPolyfill),function(e){"use strict";e.wrapHTMLCollection=e.wrapNodeList,e.wrappers.HTMLCollection=e.wrappers.NodeList}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){O(e instanceof _)}function n(e){var t=new T;return t[0]=e,t.length=1,t}function r(e,t,n){N(t,"childList",{removedNodes:n,previousSibling:e.previousSibling,nextSibling:e.nextSibling})}function o(e,t){N(e,"childList",{removedNodes:t})}function i(e,t,r,o){if(e instanceof DocumentFragment){var i=s(e);U=!0;for(var a=i.length-1;a>=0;a--)e.removeChild(i[a]),i[a].parentNode_=t;U=!1;for(var a=0;a<i.length;a++)i[a].previousSibling_=i[a-1]||r,i[a].nextSibling_=i[a+1]||o;return r&&(r.nextSibling_=i[0]),o&&(o.previousSibling_=i[i.length-1]),i}var i=n(e),c=e.parentNode;return c&&c.removeChild(e),e.parentNode_=t,e.previousSibling_=r,e.nextSibling_=o,r&&(r.nextSibling_=e),o&&(o.previousSibling_=e),i}function a(e){if(e instanceof DocumentFragment)return s(e);var t=n(e),o=e.parentNode;return o&&r(e,o,t),t}function s(e){for(var t=new T,n=0,r=e.firstChild;r;r=r.nextSibling)t[n++]=r;return t.length=n,o(e,t),t}function c(e){return e}function l(e,t){R(e,t),e.nodeIsInserted_()}function u(e,t){for(var n=C(t),r=0;r<e.length;r++)l(e[r],n)}function d(e){R(e,new M(e,null))}function p(e){for(var t=0;t<e.length;t++)d(e[t])}function h(e,t){var n=e.nodeType===_.DOCUMENT_NODE?e:e.ownerDocument;n!==t.ownerDocument&&n.adoptNode(t)}function f(t,n){if(n.length){var r=t.ownerDocument;if(r!==n[0].ownerDocument)for(var o=0;o<n.length;o++)e.adoptNodeNoRemove(n[o],r)}}function m(e,t){f(e,t);var n=t.length;if(1===n)return P(t[0]);for(var r=P(e.ownerDocument.createDocumentFragment()),o=0;n>o;o++)r.appendChild(P(t[o]));return r}function w(e){if(void 0!==e.firstChild_)for(var t=e.firstChild_;t;){var n=t;t=t.nextSibling_,n.parentNode_=n.previousSibling_=n.nextSibling_=void 0}e.firstChild_=e.lastChild_=void 0}function v(e){if(e.invalidateShadowRenderer()){for(var t=e.firstChild;t;){O(t.parentNode===e);var n=t.nextSibling,r=P(t),o=r.parentNode;o&&X.call(o,r),t.previousSibling_=t.nextSibling_=t.parentNode_=null,t=n}e.firstChild_=e.lastChild_=null}else for(var n,i=P(e),a=i.firstChild;a;)n=a.nextSibling,X.call(i,a),a=n}function g(e){var t=e.parentNode;return t&&t.invalidateShadowRenderer()}function b(e){for(var t,n=0;n<e.length;n++)t=e[n],t.parentNode.removeChild(t)}function y(e,t,n){var r;if(r=A(n?q.call(n,I(e),!1):B.call(I(e),!1)),t){for(var o=e.firstChild;o;o=o.nextSibling)r.appendChild(y(o,!0,n));if(e instanceof F.HTMLTemplateElement)for(var i=r.content,o=e.content.firstChild;o;o=o.nextSibling)i.appendChild(y(o,!0,n))}return r}function E(e,t){if(!t||C(e)!==C(t))return!1;for(var n=t;n;n=n.parentNode)if(n===e)return!0;return!1}function _(e){O(e instanceof V),S.call(this,e),this.parentNode_=void 0,this.firstChild_=void 0,this.lastChild_=void 0,this.nextSibling_=void 0,this.previousSibling_=void 0,this.treeScope_=void 0}var S=e.wrappers.EventTarget,T=e.wrappers.NodeList,M=e.TreeScope,O=e.assert,L=e.defineWrapGetter,N=e.enqueueMutation,C=e.getTreeScope,j=e.isWrapper,D=e.mixin,H=e.registerTransientObservers,x=e.registerWrapper,R=e.setTreeScope,I=e.unsafeUnwrap,P=e.unwrap,k=e.unwrapIfNeeded,A=e.wrap,W=e.wrapIfNeeded,F=e.wrappers,U=!1,q=document.importNode,B=window.Node.prototype.cloneNode,V=window.Node,G=window.DocumentFragment,z=(V.prototype.appendChild,V.prototype.compareDocumentPosition),K=V.prototype.isEqualNode,$=V.prototype.insertBefore,X=V.prototype.removeChild,Y=V.prototype.replaceChild,Z=/Trident|Edge/.test(navigator.userAgent),J=Z?function(e,t){try{X.call(e,t)}catch(n){if(!(e instanceof G))throw n}}:function(e,t){X.call(e,t)};_.prototype=Object.create(S.prototype),D(_.prototype,{appendChild:function(e){return this.insertBefore(e,null)},insertBefore:function(e,n){t(e);var r;n?j(n)?r=P(n):(r=n,n=A(r)):(n=null,r=null),n&&O(n.parentNode===this);var o,s=n?n.previousSibling:this.lastChild,c=!this.invalidateShadowRenderer()&&!g(e);if(o=c?a(e):i(e,this,s,n),c)h(this,e),w(this),$.call(I(this),P(e),r);else{s||(this.firstChild_=o[0]),n||(this.lastChild_=o[o.length-1],void 0===this.firstChild_&&(this.firstChild_=this.firstChild));var l=r?r.parentNode:I(this);l?$.call(l,m(this,o),r):f(this,o)}return N(this,"childList",{addedNodes:o,nextSibling:n,previousSibling:s}),u(o,this),e},removeChild:function(e){if(t(e),e.parentNode!==this){for(var r=!1,o=(this.childNodes,this.firstChild);o;o=o.nextSibling)if(o===e){r=!0;break}if(!r)throw new Error("NotFoundError")}var i=P(e),a=e.nextSibling,s=e.previousSibling;if(this.invalidateShadowRenderer()){var c=this.firstChild,l=this.lastChild,u=i.parentNode;u&&J(u,i),c===e&&(this.firstChild_=a),l===e&&(this.lastChild_=s),s&&(s.nextSibling_=a),a&&(a.previousSibling_=s),e.previousSibling_=e.nextSibling_=e.parentNode_=void 0}else w(this),J(I(this),i);return U||N(this,"childList",{removedNodes:n(e),nextSibling:a,previousSibling:s}),H(this,e),e},replaceChild:function(e,r){t(e);var o;if(j(r)?o=P(r):(o=r,r=A(o)),r.parentNode!==this)throw new Error("NotFoundError");var s,c=r.nextSibling,l=r.previousSibling,p=!this.invalidateShadowRenderer()&&!g(e);return p?s=a(e):(c===e&&(c=e.nextSibling),s=i(e,this,l,c)),p?(h(this,e),w(this),Y.call(I(this),P(e),o)):(this.firstChild===r&&(this.firstChild_=s[0]),this.lastChild===r&&(this.lastChild_=s[s.length-1]),r.previousSibling_=r.nextSibling_=r.parentNode_=void 0,o.parentNode&&Y.call(o.parentNode,m(this,s),o)),N(this,"childList",{addedNodes:s,removedNodes:n(r),nextSibling:c,previousSibling:l}),d(r),u(s,this),r},nodeIsInserted_:function(){for(var e=this.firstChild;e;e=e.nextSibling)e.nodeIsInserted_()},hasChildNodes:function(){return null!==this.firstChild},get parentNode(){return void 0!==this.parentNode_?this.parentNode_:A(I(this).parentNode)},get firstChild(){return void 0!==this.firstChild_?this.firstChild_:A(I(this).firstChild)},get lastChild(){return void 0!==this.lastChild_?this.lastChild_:A(I(this).lastChild)},get nextSibling(){return void 0!==this.nextSibling_?this.nextSibling_:A(I(this).nextSibling)},get previousSibling(){return void 0!==this.previousSibling_?this.previousSibling_:A(I(this).previousSibling)},get parentElement(){for(var e=this.parentNode;e&&e.nodeType!==_.ELEMENT_NODE;)e=e.parentNode;return e},get textContent(){for(var e="",t=this.firstChild;t;t=t.nextSibling)t.nodeType!=_.COMMENT_NODE&&(e+=t.textContent);return e},set textContent(e){null==e&&(e="");var t=c(this.childNodes);if(this.invalidateShadowRenderer()){if(v(this),""!==e){var n=I(this).ownerDocument.createTextNode(e);this.appendChild(n)}}else w(this),I(this).textContent=e;var r=c(this.childNodes);N(this,"childList",{addedNodes:r,removedNodes:t}),p(t),u(r,this)},get childNodes(){for(var e=new T,t=0,n=this.firstChild;n;n=n.nextSibling)e[t++]=n;return e.length=t,e},cloneNode:function(e){return y(this,e)},contains:function(e){return E(this,W(e))},compareDocumentPosition:function(e){return z.call(I(this),k(e))},isEqualNode:function(e){return K.call(I(this),k(e))},normalize:function(){for(var e,t,n=c(this.childNodes),r=[],o="",i=0;i<n.length;i++)t=n[i],t.nodeType===_.TEXT_NODE?e||t.data.length?e?(o+=t.data,r.push(t)):e=t:this.removeChild(t):(e&&r.length&&(e.data+=o,b(r)),r=[],o="",e=null,t.childNodes.length&&t.normalize());e&&r.length&&(e.data+=o,b(r))}}),L(_,"ownerDocument"),x(V,_,document.createDocumentFragment()),delete _.prototype.querySelector,delete _.prototype.querySelectorAll,_.prototype=D(Object.create(S.prototype),_.prototype),e.cloneNode=y,e.nodeWasAdded=l,e.nodeWasRemoved=d,e.nodesWereAdded=u,e.nodesWereRemoved=p,e.originalInsertBefore=$,e.originalRemoveChild=X,e.snapshotNodeList=c,e.wrappers.Node=_}(window.ShadowDOMPolyfill),function(e){"use strict";function t(t,n,r,o){for(var i=null,a=null,s=0,c=t.length;c>s;s++)i=b(t[s]),!o&&(a=v(i).root)&&a instanceof e.wrappers.ShadowRoot||(r[n++]=i);return n}function n(e){return String(e).replace(/\/deep\/|::shadow|>>>/g," ")}function r(e){return String(e).replace(/:host\(([^\s]+)\)/g,"$1").replace(/([^\s]):host/g,"$1").replace(":host","*").replace(/\^|\/shadow\/|\/shadow-deep\/|::shadow|\/deep\/|::content|>>>/g," ")}function o(e,t){for(var n,r=e.firstElementChild;r;){if(r.matches(t))return r;if(n=o(r,t))return n;r=r.nextElementSibling}return null}function i(e,t){return e.matches(t)}function a(e,t,n){var r=e.localName;return r===t||r===n&&e.namespaceURI===j}function s(){return!0}function c(e,t,n){return e.localName===n}function l(e,t){return e.namespaceURI===t}function u(e,t,n){return e.namespaceURI===t&&e.localName===n}function d(e,t,n,r,o,i){for(var a=e.firstElementChild;a;)r(a,o,i)&&(n[t++]=a),t=d(a,t,n,r,o,i),a=a.nextElementSibling;return t}function p(n,r,o,i,a){var s,c=g(this),l=v(this).root;if(l instanceof e.wrappers.ShadowRoot)return d(this,r,o,n,i,null);if(c instanceof N)s=S.call(c,i);else{if(!(c instanceof C))return d(this,r,o,n,i,null);s=_.call(c,i)}return t(s,r,o,a)}function h(n,r,o,i,a){var s,c=g(this),l=v(this).root;if(l instanceof e.wrappers.ShadowRoot)return d(this,r,o,n,i,a);if(c instanceof N)s=M.call(c,i,a);else{if(!(c instanceof C))return d(this,r,o,n,i,a);s=T.call(c,i,a)}return t(s,r,o,!1)}function f(n,r,o,i,a){var s,c=g(this),l=v(this).root;if(l instanceof e.wrappers.ShadowRoot)return d(this,r,o,n,i,a);if(c instanceof N)s=L.call(c,i,a);else{if(!(c instanceof C))return d(this,r,o,n,i,a);s=O.call(c,i,a)}return t(s,r,o,!1)}var m=e.wrappers.HTMLCollection,w=e.wrappers.NodeList,v=e.getTreeScope,g=e.unsafeUnwrap,b=e.wrap,y=document.querySelector,E=document.documentElement.querySelector,_=document.querySelectorAll,S=document.documentElement.querySelectorAll,T=document.getElementsByTagName,M=document.documentElement.getElementsByTagName,O=document.getElementsByTagNameNS,L=document.documentElement.getElementsByTagNameNS,N=window.Element,C=window.HTMLDocument||window.Document,j="http://www.w3.org/1999/xhtml",D={
querySelector:function(t){var r=n(t),i=r!==t;t=r;var a,s=g(this),c=v(this).root;if(c instanceof e.wrappers.ShadowRoot)return o(this,t);if(s instanceof N)a=b(E.call(s,t));else{if(!(s instanceof C))return o(this,t);a=b(y.call(s,t))}return a&&!i&&(c=v(a).root)&&c instanceof e.wrappers.ShadowRoot?o(this,t):a},querySelectorAll:function(e){var t=n(e),r=t!==e;e=t;var o=new w;return o.length=p.call(this,i,0,o,e,r),o}},H={matches:function(t){return t=r(t),e.originalMatches.call(g(this),t)}},x={getElementsByTagName:function(e){var t=new m,n="*"===e?s:a;return t.length=h.call(this,n,0,t,e,e.toLowerCase()),t},getElementsByClassName:function(e){return this.querySelectorAll("."+e)},getElementsByTagNameNS:function(e,t){var n=new m,r=null;return r="*"===e?"*"===t?s:c:"*"===t?l:u,n.length=f.call(this,r,0,n,e||null,t),n}};e.GetElementsByInterface=x,e.SelectorsInterface=D,e.MatchesInterface=H}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.nextSibling;return e}function n(e){for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.previousSibling;return e}var r=e.wrappers.NodeList,o={get firstElementChild(){return t(this.firstChild)},get lastElementChild(){return n(this.lastChild)},get childElementCount(){for(var e=0,t=this.firstElementChild;t;t=t.nextElementSibling)e++;return e},get children(){for(var e=new r,t=0,n=this.firstElementChild;n;n=n.nextElementSibling)e[t++]=n;return e.length=t,e},remove:function(){var e=this.parentNode;e&&e.removeChild(this)}},i={get nextElementSibling(){return t(this.nextSibling)},get previousElementSibling(){return n(this.previousSibling)}},a={getElementById:function(e){return/[ \t\n\r\f]/.test(e)?null:this.querySelector('[id="'+e+'"]')}};e.ChildNodeInterface=i,e.NonElementParentNodeInterface=a,e.ParentNodeInterface=o}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r.call(this,e)}var n=e.ChildNodeInterface,r=e.wrappers.Node,o=e.enqueueMutation,i=e.mixin,a=e.registerWrapper,s=e.unsafeUnwrap,c=window.CharacterData;t.prototype=Object.create(r.prototype),i(t.prototype,{get nodeValue(){return this.data},set nodeValue(e){this.data=e},get textContent(){return this.data},set textContent(e){this.data=e},get data(){return s(this).data},set data(e){var t=s(this).data;o(this,"characterData",{oldValue:t}),s(this).data=e}}),i(t.prototype,n),a(c,t,document.createTextNode("")),e.wrappers.CharacterData=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return e>>>0}function n(e){r.call(this,e)}var r=e.wrappers.CharacterData,o=(e.enqueueMutation,e.mixin),i=e.registerWrapper,a=window.Text;n.prototype=Object.create(r.prototype),o(n.prototype,{splitText:function(e){e=t(e);var n=this.data;if(e>n.length)throw new Error("IndexSizeError");var r=n.slice(0,e),o=n.slice(e);this.data=r;var i=this.ownerDocument.createTextNode(o);return this.parentNode&&this.parentNode.insertBefore(i,this.nextSibling),i}}),i(a,n,document.createTextNode("")),e.wrappers.Text=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return i(e).getAttribute("class")}function n(e,t){a(e,"attributes",{name:"class",namespace:null,oldValue:t})}function r(t){e.invalidateRendererBasedOnAttribute(t,"class")}function o(e,o,i){var a=e.ownerElement_;if(null==a)return o.apply(e,i);var s=t(a),c=o.apply(e,i);return t(a)!==s&&(n(a,s),r(a)),c}if(!window.DOMTokenList)return void console.warn("Missing DOMTokenList prototype, please include a compatible classList polyfill such as http://goo.gl/uTcepH.");var i=e.unsafeUnwrap,a=e.enqueueMutation,s=DOMTokenList.prototype.add;DOMTokenList.prototype.add=function(){o(this,s,arguments)};var c=DOMTokenList.prototype.remove;DOMTokenList.prototype.remove=function(){o(this,c,arguments)};var l=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(){return o(this,l,arguments)}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(t,n){var r=t.parentNode;if(r&&r.shadowRoot){var o=e.getRendererForHost(r);o.dependsOnAttribute(n)&&o.invalidate()}}function n(e,t,n){u(e,"attributes",{name:t,namespace:null,oldValue:n})}function r(e){a.call(this,e)}var o=e.ChildNodeInterface,i=e.GetElementsByInterface,a=e.wrappers.Node,s=e.ParentNodeInterface,c=e.SelectorsInterface,l=e.MatchesInterface,u=(e.addWrapNodeListMethod,e.enqueueMutation),d=e.mixin,p=(e.oneOf,e.registerWrapper),h=e.unsafeUnwrap,f=e.wrappers,m=window.Element,w=["matches","mozMatchesSelector","msMatchesSelector","webkitMatchesSelector"].filter(function(e){return m.prototype[e]}),v=w[0],g=m.prototype[v],b=new WeakMap;r.prototype=Object.create(a.prototype),d(r.prototype,{createShadowRoot:function(){var t=new f.ShadowRoot(this);h(this).polymerShadowRoot_=t;var n=e.getRendererForHost(this);return n.invalidate(),t},get shadowRoot(){return h(this).polymerShadowRoot_||null},setAttribute:function(e,r){var o=h(this).getAttribute(e);h(this).setAttribute(e,r),n(this,e,o),t(this,e)},removeAttribute:function(e){var r=h(this).getAttribute(e);h(this).removeAttribute(e),n(this,e,r),t(this,e)},get classList(){var e=b.get(this);if(!e){if(e=h(this).classList,!e)return;e.ownerElement_=this,b.set(this,e)}return e},get className(){return h(this).className},set className(e){this.setAttribute("class",e)},get id(){return h(this).id},set id(e){this.setAttribute("id",e)}}),w.forEach(function(e){"matches"!==e&&(r.prototype[e]=function(e){return this.matches(e)})}),m.prototype.webkitCreateShadowRoot&&(r.prototype.webkitCreateShadowRoot=r.prototype.createShadowRoot),d(r.prototype,o),d(r.prototype,i),d(r.prototype,s),d(r.prototype,c),d(r.prototype,l),p(m,r,document.createElementNS(null,"x")),e.invalidateRendererBasedOnAttribute=t,e.matchesNames=w,e.originalMatches=g,e.wrappers.Element=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case" ":return"&nbsp;"}}function n(e){return e.replace(L,t)}function r(e){return e.replace(N,t)}function o(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=!0;return t}function i(e){if(e.namespaceURI!==D)return!0;var t=e.ownerDocument.doctype;return t&&t.publicId&&t.systemId}function a(e,t){switch(e.nodeType){case Node.ELEMENT_NODE:for(var o,a=e.tagName.toLowerCase(),c="<"+a,l=e.attributes,u=0;o=l[u];u++)c+=" "+o.name+'="'+n(o.value)+'"';return C[a]?(i(e)&&(c+="/"),c+">"):c+">"+s(e)+"</"+a+">";case Node.TEXT_NODE:var d=e.data;return t&&j[t.localName]?d:r(d);case Node.COMMENT_NODE:return"<!--"+e.data+"-->";default:throw console.error(e),new Error("not implemented")}}function s(e){e instanceof O.HTMLTemplateElement&&(e=e.content);for(var t="",n=e.firstChild;n;n=n.nextSibling)t+=a(n,e);return t}function c(e,t,n){var r=n||"div";e.textContent="";var o=T(e.ownerDocument.createElement(r));o.innerHTML=t;for(var i;i=o.firstChild;)e.appendChild(M(i))}function l(e){m.call(this,e)}function u(e,t){var n=T(e.cloneNode(!1));n.innerHTML=t;for(var r,o=T(document.createDocumentFragment());r=n.firstChild;)o.appendChild(r);return M(o)}function d(t){return function(){return e.renderAllPending(),S(this)[t]}}function p(e){w(l,e,d(e))}function h(t){Object.defineProperty(l.prototype,t,{get:d(t),set:function(n){e.renderAllPending(),S(this)[t]=n},configurable:!0,enumerable:!0})}function f(t){Object.defineProperty(l.prototype,t,{value:function(){return e.renderAllPending(),S(this)[t].apply(S(this),arguments)},configurable:!0,enumerable:!0})}var m=e.wrappers.Element,w=e.defineGetter,v=e.enqueueMutation,g=e.mixin,b=e.nodesWereAdded,y=e.nodesWereRemoved,E=e.registerWrapper,_=e.snapshotNodeList,S=e.unsafeUnwrap,T=e.unwrap,M=e.wrap,O=e.wrappers,L=/[&\u00A0"]/g,N=/[&\u00A0<>]/g,C=o(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),j=o(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"]),D="http://www.w3.org/1999/xhtml",H=/MSIE/.test(navigator.userAgent),x=window.HTMLElement,R=window.HTMLTemplateElement;l.prototype=Object.create(m.prototype),g(l.prototype,{get innerHTML(){return s(this)},set innerHTML(e){if(H&&j[this.localName])return void(this.textContent=e);var t=_(this.childNodes);this.invalidateShadowRenderer()?this instanceof O.HTMLTemplateElement?c(this.content,e):c(this,e,this.tagName):!R&&this instanceof O.HTMLTemplateElement?c(this.content,e):S(this).innerHTML=e;var n=_(this.childNodes);v(this,"childList",{addedNodes:n,removedNodes:t}),y(t),b(n,this)},get outerHTML(){return a(this,this.parentNode)},set outerHTML(e){var t=this.parentNode;if(t){t.invalidateShadowRenderer();var n=u(t,e);t.replaceChild(n,this)}},insertAdjacentHTML:function(e,t){var n,r;switch(String(e).toLowerCase()){case"beforebegin":n=this.parentNode,r=this;break;case"afterend":n=this.parentNode,r=this.nextSibling;break;case"afterbegin":n=this,r=this.firstChild;break;case"beforeend":n=this,r=null;break;default:return}var o=u(n,t);n.insertBefore(o,r)},get hidden(){return this.hasAttribute("hidden")},set hidden(e){e?this.setAttribute("hidden",""):this.removeAttribute("hidden")}}),["clientHeight","clientLeft","clientTop","clientWidth","offsetHeight","offsetLeft","offsetTop","offsetWidth","scrollHeight","scrollWidth"].forEach(p),["scrollLeft","scrollTop"].forEach(h),["focus","getBoundingClientRect","getClientRects","scrollIntoView"].forEach(f),E(x,l,document.createElement("b")),e.wrappers.HTMLElement=l,e.getInnerHTML=s,e.setInnerHTML=c}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.unsafeUnwrap,a=e.wrap,s=window.HTMLCanvasElement;t.prototype=Object.create(n.prototype),r(t.prototype,{getContext:function(){var e=i(this).getContext.apply(i(this),arguments);return e&&a(e)}}),o(s,t,document.createElement("canvas")),e.wrappers.HTMLCanvasElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=window.HTMLContentElement;t.prototype=Object.create(n.prototype),r(t.prototype,{constructor:t,get select(){return this.getAttribute("select")},set select(e){this.setAttribute("select",e)},setAttribute:function(e,t){n.prototype.setAttribute.call(this,e,t),"select"===String(e).toLowerCase()&&this.invalidateShadowRenderer(!0)}}),i&&o(i,t),e.wrappers.HTMLContentElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.wrapHTMLCollection,a=e.unwrap,s=window.HTMLFormElement;t.prototype=Object.create(n.prototype),r(t.prototype,{get elements(){return i(a(this).elements)}}),o(s,t,document.createElement("form")),e.wrappers.HTMLFormElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r.call(this,e)}function n(e,t){if(!(this instanceof n))throw new TypeError("DOM object constructor cannot be called as a function.");var o=i(document.createElement("img"));r.call(this,o),a(o,this),void 0!==e&&(o.width=e),void 0!==t&&(o.height=t)}var r=e.wrappers.HTMLElement,o=e.registerWrapper,i=e.unwrap,a=e.rewrap,s=window.HTMLImageElement;t.prototype=Object.create(r.prototype),o(s,t,document.createElement("img")),n.prototype=t.prototype,e.wrappers.HTMLImageElement=t,e.wrappers.Image=n}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=(e.mixin,e.wrappers.NodeList,e.registerWrapper),o=window.HTMLShadowElement;t.prototype=Object.create(n.prototype),t.prototype.constructor=t,o&&r(o,t),e.wrappers.HTMLShadowElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){if(!e.defaultView)return e;var t=d.get(e);if(!t){for(t=e.implementation.createHTMLDocument("");t.lastChild;)t.removeChild(t.lastChild);d.set(e,t)}return t}function n(e){for(var n,r=t(e.ownerDocument),o=c(r.createDocumentFragment());n=e.firstChild;)o.appendChild(n);return o}function r(e){if(o.call(this,e),!p){var t=n(e);u.set(this,l(t))}}var o=e.wrappers.HTMLElement,i=e.mixin,a=e.registerWrapper,s=e.unsafeUnwrap,c=e.unwrap,l=e.wrap,u=new WeakMap,d=new WeakMap,p=window.HTMLTemplateElement;r.prototype=Object.create(o.prototype),i(r.prototype,{constructor:r,get content(){return p?l(s(this).content):u.get(this)}}),p&&a(p,r),e.wrappers.HTMLTemplateElement=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.registerWrapper,o=window.HTMLMediaElement;o&&(t.prototype=Object.create(n.prototype),r(o,t,document.createElement("audio")),e.wrappers.HTMLMediaElement=t)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r.call(this,e)}function n(e){if(!(this instanceof n))throw new TypeError("DOM object constructor cannot be called as a function.");var t=i(document.createElement("audio"));r.call(this,t),a(t,this),t.setAttribute("preload","auto"),void 0!==e&&t.setAttribute("src",e)}var r=e.wrappers.HTMLMediaElement,o=e.registerWrapper,i=e.unwrap,a=e.rewrap,s=window.HTMLAudioElement;s&&(t.prototype=Object.create(r.prototype),o(s,t,document.createElement("audio")),n.prototype=t.prototype,e.wrappers.HTMLAudioElement=t,e.wrappers.Audio=n)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){return e.replace(/\s+/g," ").trim()}function n(e){o.call(this,e)}function r(e,t,n,i){if(!(this instanceof r))throw new TypeError("DOM object constructor cannot be called as a function.");var a=c(document.createElement("option"));o.call(this,a),s(a,this),void 0!==e&&(a.text=e),void 0!==t&&a.setAttribute("value",t),n===!0&&a.setAttribute("selected",""),a.selected=i===!0}var o=e.wrappers.HTMLElement,i=e.mixin,a=e.registerWrapper,s=e.rewrap,c=e.unwrap,l=e.wrap,u=window.HTMLOptionElement;n.prototype=Object.create(o.prototype),i(n.prototype,{get text(){return t(this.textContent)},set text(e){this.textContent=t(String(e))},get form(){return l(c(this).form)}}),a(u,n,document.createElement("option")),r.prototype=n.prototype,e.wrappers.HTMLOptionElement=n,e.wrappers.Option=r}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.unwrap,a=e.wrap,s=window.HTMLSelectElement;t.prototype=Object.create(n.prototype),r(t.prototype,{add:function(e,t){"object"==typeof t&&(t=i(t)),i(this).add(i(e),t)},remove:function(e){return void 0===e?void n.prototype.remove.call(this):("object"==typeof e&&(e=i(e)),void i(this).remove(e))},get form(){return a(i(this).form)}}),o(s,t,document.createElement("select")),e.wrappers.HTMLSelectElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.unwrap,a=e.wrap,s=e.wrapHTMLCollection,c=window.HTMLTableElement;t.prototype=Object.create(n.prototype),r(t.prototype,{get caption(){return a(i(this).caption)},createCaption:function(){return a(i(this).createCaption())},get tHead(){return a(i(this).tHead)},createTHead:function(){return a(i(this).createTHead())},createTFoot:function(){return a(i(this).createTFoot())},get tFoot(){return a(i(this).tFoot)},get tBodies(){return s(i(this).tBodies)},createTBody:function(){return a(i(this).createTBody())},get rows(){return s(i(this).rows)},insertRow:function(e){return a(i(this).insertRow(e))}}),o(c,t,document.createElement("table")),e.wrappers.HTMLTableElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.wrapHTMLCollection,a=e.unwrap,s=e.wrap,c=window.HTMLTableSectionElement;t.prototype=Object.create(n.prototype),r(t.prototype,{constructor:t,get rows(){return i(a(this).rows)},insertRow:function(e){return s(a(this).insertRow(e))}}),o(c,t,document.createElement("thead")),e.wrappers.HTMLTableSectionElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.HTMLElement,r=e.mixin,o=e.registerWrapper,i=e.wrapHTMLCollection,a=e.unwrap,s=e.wrap,c=window.HTMLTableRowElement;t.prototype=Object.create(n.prototype),r(t.prototype,{get cells(){return i(a(this).cells)},insertCell:function(e){return s(a(this).insertCell(e))}}),o(c,t,document.createElement("tr")),e.wrappers.HTMLTableRowElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){switch(e.localName){case"content":return new n(e);case"shadow":return new o(e);case"template":return new i(e)}r.call(this,e)}var n=e.wrappers.HTMLContentElement,r=e.wrappers.HTMLElement,o=e.wrappers.HTMLShadowElement,i=e.wrappers.HTMLTemplateElement,a=(e.mixin,e.registerWrapper),s=window.HTMLUnknownElement;t.prototype=Object.create(r.prototype),a(s,t),e.wrappers.HTMLUnknownElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.Element,r=e.wrappers.HTMLElement,o=e.registerWrapper,i=(e.defineWrapGetter,e.unsafeUnwrap),a=e.wrap,s=e.mixin,c="http://www.w3.org/2000/svg",l=window.SVGElement,u=document.createElementNS(c,"title");if(!("classList"in u)){var d=Object.getOwnPropertyDescriptor(n.prototype,"classList");Object.defineProperty(r.prototype,"classList",d),delete n.prototype.classList}t.prototype=Object.create(n.prototype),s(t.prototype,{get ownerSVGElement(){return a(i(this).ownerSVGElement)}}),o(l,t,document.createElementNS(c,"title")),e.wrappers.SVGElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){p.call(this,e)}var n=e.mixin,r=e.registerWrapper,o=e.unwrap,i=e.wrap,a=window.SVGUseElement,s="http://www.w3.org/2000/svg",c=i(document.createElementNS(s,"g")),l=document.createElementNS(s,"use"),u=c.constructor,d=Object.getPrototypeOf(u.prototype),p=d.constructor;t.prototype=Object.create(d),"instanceRoot"in l&&n(t.prototype,{get instanceRoot(){return i(o(this).instanceRoot)},get animatedInstanceRoot(){return i(o(this).animatedInstanceRoot)}}),r(a,t,l),e.wrappers.SVGUseElement=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.EventTarget,r=e.mixin,o=e.registerWrapper,i=e.unsafeUnwrap,a=e.wrap,s=window.SVGElementInstance;s&&(t.prototype=Object.create(n.prototype),r(t.prototype,{get correspondingElement(){return a(i(this).correspondingElement)},get correspondingUseElement(){return a(i(this).correspondingUseElement)},get parentNode(){return a(i(this).parentNode)},get childNodes(){throw new Error("Not implemented")},get firstChild(){return a(i(this).firstChild)},get lastChild(){return a(i(this).lastChild)},get previousSibling(){return a(i(this).previousSibling)},get nextSibling(){return a(i(this).nextSibling)}}),o(s,t),e.wrappers.SVGElementInstance=t)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){o(e,this)}var n=e.mixin,r=e.registerWrapper,o=e.setWrapper,i=e.unsafeUnwrap,a=e.unwrap,s=e.unwrapIfNeeded,c=e.wrap,l=window.CanvasRenderingContext2D;n(t.prototype,{get canvas(){return c(i(this).canvas)},drawImage:function(){arguments[0]=s(arguments[0]),i(this).drawImage.apply(i(this),arguments)},createPattern:function(){return arguments[0]=a(arguments[0]),i(this).createPattern.apply(i(this),arguments)}}),r(l,t,document.createElement("canvas").getContext("2d")),e.wrappers.CanvasRenderingContext2D=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){i(e,this)}var n=e.addForwardingProperties,r=e.mixin,o=e.registerWrapper,i=e.setWrapper,a=e.unsafeUnwrap,s=e.unwrapIfNeeded,c=e.wrap,l=window.WebGLRenderingContext;if(l){r(t.prototype,{get canvas(){return c(a(this).canvas)},texImage2D:function(){arguments[5]=s(arguments[5]),a(this).texImage2D.apply(a(this),arguments)},texSubImage2D:function(){arguments[6]=s(arguments[6]),a(this).texSubImage2D.apply(a(this),arguments)}});var u=Object.getPrototypeOf(l.prototype);u!==Object.prototype&&n(u,t.prototype);var d=/WebKit/.test(navigator.userAgent)?{drawingBufferHeight:null,drawingBufferWidth:null}:{};o(l,t,d),e.wrappers.WebGLRenderingContext=t}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.Node,r=e.GetElementsByInterface,o=e.NonElementParentNodeInterface,i=e.ParentNodeInterface,a=e.SelectorsInterface,s=e.mixin,c=e.registerObject,l=e.registerWrapper,u=window.DocumentFragment;t.prototype=Object.create(n.prototype),s(t.prototype,i),s(t.prototype,a),s(t.prototype,r),s(t.prototype,o),l(u,t,document.createDocumentFragment()),e.wrappers.DocumentFragment=t;var d=c(document.createComment(""));e.wrappers.Comment=d}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t=d(u(e).ownerDocument.createDocumentFragment());n.call(this,t),c(t,this);var o=e.shadowRoot;f.set(this,o),this.treeScope_=new r(this,a(o||e)),h.set(this,e)}var n=e.wrappers.DocumentFragment,r=e.TreeScope,o=e.elementFromPoint,i=e.getInnerHTML,a=e.getTreeScope,s=e.mixin,c=e.rewrap,l=e.setInnerHTML,u=e.unsafeUnwrap,d=e.unwrap,p=e.wrap,h=new WeakMap,f=new WeakMap;t.prototype=Object.create(n.prototype),s(t.prototype,{constructor:t,get innerHTML(){return i(this)},set innerHTML(e){l(this,e),this.invalidateShadowRenderer()},get olderShadowRoot(){return f.get(this)||null},get host(){return h.get(this)||null},invalidateShadowRenderer:function(){return h.get(this).invalidateShadowRenderer()},elementFromPoint:function(e,t){return o(this,this.ownerDocument,e,t)},getSelection:function(){return document.getSelection()},get activeElement(){var e=d(this).ownerDocument.activeElement;if(!e||!e.nodeType)return null;for(var t=p(e);!this.contains(t);){for(;t.parentNode;)t=t.parentNode;if(!t.host)return null;t=t.host}return t}}),e.wrappers.ShadowRoot=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t=d(e).root;return t instanceof h?t.host:null}function n(t,n){if(t.shadowRoot){n=Math.min(t.childNodes.length-1,n);var r=t.childNodes[n];if(r){var o=e.getDestinationInsertionPoints(r);if(o.length>0){var i=o[0].parentNode;i.nodeType==Node.ELEMENT_NODE&&(t=i)}}}return t}function r(e){return e=u(e),t(e)||e}function o(e){a(e,this)}var i=e.registerWrapper,a=e.setWrapper,s=e.unsafeUnwrap,c=e.unwrap,l=e.unwrapIfNeeded,u=e.wrap,d=e.getTreeScope,p=window.Range,h=e.wrappers.ShadowRoot;o.prototype={get startContainer(){return r(s(this).startContainer)},get endContainer(){return r(s(this).endContainer)},get commonAncestorContainer(){return r(s(this).commonAncestorContainer)},setStart:function(e,t){e=n(e,t),s(this).setStart(l(e),t)},setEnd:function(e,t){e=n(e,t),s(this).setEnd(l(e),t)},setStartBefore:function(e){s(this).setStartBefore(l(e))},setStartAfter:function(e){s(this).setStartAfter(l(e))},setEndBefore:function(e){s(this).setEndBefore(l(e))},setEndAfter:function(e){s(this).setEndAfter(l(e))},selectNode:function(e){s(this).selectNode(l(e))},selectNodeContents:function(e){s(this).selectNodeContents(l(e))},compareBoundaryPoints:function(e,t){return s(this).compareBoundaryPoints(e,c(t))},extractContents:function(){return u(s(this).extractContents())},cloneContents:function(){return u(s(this).cloneContents())},insertNode:function(e){s(this).insertNode(l(e))},surroundContents:function(e){s(this).surroundContents(l(e))},cloneRange:function(){return u(s(this).cloneRange())},isPointInRange:function(e,t){return s(this).isPointInRange(l(e),t)},comparePoint:function(e,t){return s(this).comparePoint(l(e),t)},intersectsNode:function(e){return s(this).intersectsNode(l(e))},toString:function(){return s(this).toString()}},p.prototype.createContextualFragment&&(o.prototype.createContextualFragment=function(e){return u(s(this).createContextualFragment(e))}),i(window.Range,o,document.createRange()),e.wrappers.Range=o}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){e.previousSibling_=e.previousSibling,e.nextSibling_=e.nextSibling,e.parentNode_=e.parentNode}function n(n,o,i){var a=x(n),s=x(o),c=i?x(i):null;if(r(o),t(o),i)n.firstChild===i&&(n.firstChild_=i),i.previousSibling_=i.previousSibling;else{n.lastChild_=n.lastChild,n.lastChild===n.firstChild&&(n.firstChild_=n.firstChild);var l=R(a.lastChild);l&&(l.nextSibling_=l.nextSibling)}e.originalInsertBefore.call(a,s,c)}function r(n){var r=x(n),o=r.parentNode;if(o){var i=R(o);t(n),n.previousSibling&&(n.previousSibling.nextSibling_=n),n.nextSibling&&(n.nextSibling.previousSibling_=n),i.lastChild===n&&(i.lastChild_=n),i.firstChild===n&&(i.firstChild_=n),e.originalRemoveChild.call(o,r)}}function o(e){P.set(e,[])}function i(e){var t=P.get(e);return t||P.set(e,t=[]),t}function a(e){for(var t=[],n=0,r=e.firstChild;r;r=r.nextSibling)t[n++]=r;return t}function s(){for(var e=0;e<F.length;e++){var t=F[e],n=t.parentRenderer;n&&n.dirty||t.render()}F=[]}function c(){T=null,s()}function l(e){var t=A.get(e);return t||(t=new h(e),A.set(e,t)),t}function u(e){var t=j(e).root;return t instanceof C?t:null}function d(e){return l(e.host)}function p(e){this.skip=!1,this.node=e,this.childNodes=[]}function h(e){this.host=e,this.dirty=!1,this.invalidateAttributes(),this.associateNode(e)}function f(e){for(var t=[],n=e.firstChild;n;n=n.nextSibling)E(n)?t.push.apply(t,i(n)):t.push(n);return t}function m(e){if(e instanceof L)return e;if(e instanceof O)return null;for(var t=e.firstChild;t;t=t.nextSibling){var n=m(t);if(n)return n}return null}function w(e,t){i(t).push(e);var n=k.get(e);n?n.push(t):k.set(e,[t])}function v(e){return k.get(e)}function g(e){k.set(e,void 0)}function b(e,t){var n=t.getAttribute("select");if(!n)return!0;if(n=n.trim(),!n)return!0;if(!(e instanceof M))return!1;if(!q.test(n))return!1;try{return e.matches(n)}catch(r){return!1}}function y(e,t){var n=v(t);return n&&n[n.length-1]===e}function E(e){return e instanceof O||e instanceof L}function _(e){return e.shadowRoot}function S(e){for(var t=[],n=e.shadowRoot;n;n=n.olderShadowRoot)t.push(n);return t}var T,M=e.wrappers.Element,O=e.wrappers.HTMLContentElement,L=e.wrappers.HTMLShadowElement,N=e.wrappers.Node,C=e.wrappers.ShadowRoot,j=(e.assert,e.getTreeScope),D=(e.mixin,e.oneOf),H=e.unsafeUnwrap,x=e.unwrap,R=e.wrap,I=e.ArraySplice,P=new WeakMap,k=new WeakMap,A=new WeakMap,W=D(window,["requestAnimationFrame","mozRequestAnimationFrame","webkitRequestAnimationFrame","setTimeout"]),F=[],U=new I;U.equals=function(e,t){return x(e.node)===t},p.prototype={append:function(e){var t=new p(e);return this.childNodes.push(t),t},sync:function(e){if(!this.skip){for(var t=this.node,o=this.childNodes,i=a(x(t)),s=e||new WeakMap,c=U.calculateSplices(o,i),l=0,u=0,d=0,p=0;p<c.length;p++){for(var h=c[p];d<h.index;d++)u++,o[l++].sync(s);for(var f=h.removed.length,m=0;f>m;m++){var w=R(i[u++]);s.get(w)||r(w)}for(var v=h.addedCount,g=i[u]&&R(i[u]),m=0;v>m;m++){var b=o[l++],y=b.node;n(t,y,g),s.set(y,!0),b.sync(s)}d+=v}for(var p=d;p<o.length;p++)o[p].sync(s)}}},h.prototype={render:function(e){if(this.dirty){this.invalidateAttributes();var t=this.host;this.distribution(t);var n=e||new p(t);this.buildRenderTree(n,t);var r=!e;r&&n.sync(),this.dirty=!1}},get parentRenderer(){return j(this.host).renderer},invalidate:function(){if(!this.dirty){this.dirty=!0;var e=this.parentRenderer;if(e&&e.invalidate(),F.push(this),T)return;T=window[W](c,0)}},distribution:function(e){this.resetAllSubtrees(e),this.distributionResolution(e)},resetAll:function(e){E(e)?o(e):g(e),this.resetAllSubtrees(e)},resetAllSubtrees:function(e){for(var t=e.firstChild;t;t=t.nextSibling)this.resetAll(t);e.shadowRoot&&this.resetAll(e.shadowRoot),e.olderShadowRoot&&this.resetAll(e.olderShadowRoot)},distributionResolution:function(e){if(_(e)){for(var t=e,n=f(t),r=S(t),o=0;o<r.length;o++)this.poolDistribution(r[o],n);for(var o=r.length-1;o>=0;o--){var i=r[o],a=m(i);if(a){var s=i.olderShadowRoot;s&&(n=f(s));for(var c=0;c<n.length;c++)w(n[c],a)}this.distributionResolution(i)}}for(var l=e.firstChild;l;l=l.nextSibling)this.distributionResolution(l)},poolDistribution:function(e,t){if(!(e instanceof L))if(e instanceof O){var n=e;this.updateDependentAttributes(n.getAttribute("select"));for(var r=!1,o=0;o<t.length;o++){var e=t[o];e&&b(e,n)&&(w(e,n),t[o]=void 0,r=!0)}if(!r)for(var i=n.firstChild;i;i=i.nextSibling)w(i,n)}else for(var i=e.firstChild;i;i=i.nextSibling)this.poolDistribution(i,t)},buildRenderTree:function(e,t){for(var n=this.compose(t),r=0;r<n.length;r++){var o=n[r],i=e.append(o);this.buildRenderTree(i,o)}if(_(t)){var a=l(t);a.dirty=!1}},compose:function(e){for(var t=[],n=e.shadowRoot||e,r=n.firstChild;r;r=r.nextSibling)if(E(r)){this.associateNode(n);for(var o=i(r),a=0;a<o.length;a++){var s=o[a];y(r,s)&&t.push(s)}}else t.push(r);return t},invalidateAttributes:function(){this.attributes=Object.create(null)},updateDependentAttributes:function(e){if(e){var t=this.attributes;/\.\w+/.test(e)&&(t["class"]=!0),/#\w+/.test(e)&&(t.id=!0),e.replace(/\[\s*([^\s=\|~\]]+)/g,function(e,n){t[n]=!0})}},dependsOnAttribute:function(e){return this.attributes[e]},associateNode:function(e){H(e).polymerShadowRenderer_=this}};var q=/^(:not\()?[*.#[a-zA-Z_|]/;N.prototype.invalidateShadowRenderer=function(e){var t=H(this).polymerShadowRenderer_;return t?(t.invalidate(),!0):!1},O.prototype.getDistributedNodes=L.prototype.getDistributedNodes=function(){return s(),i(this)},M.prototype.getDestinationInsertionPoints=function(){return s(),v(this)||[]},O.prototype.nodeIsInserted_=L.prototype.nodeIsInserted_=function(){this.invalidateShadowRenderer();var e,t=u(this);t&&(e=d(t)),H(this).polymerShadowRenderer_=e,e&&e.invalidate()},e.getRendererForHost=l,e.getShadowTrees=S,e.renderAllPending=s,e.getDestinationInsertionPoints=v,e.visual={insertBefore:n,remove:r}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(t){if(window[t]){r(!e.wrappers[t]);var c=function(e){n.call(this,e)};c.prototype=Object.create(n.prototype),o(c.prototype,{get form(){return s(a(this).form)}}),i(window[t],c,document.createElement(t.slice(4,-7))),e.wrappers[t]=c}}var n=e.wrappers.HTMLElement,r=e.assert,o=e.mixin,i=e.registerWrapper,a=e.unwrap,s=e.wrap,c=["HTMLButtonElement","HTMLFieldSetElement","HTMLInputElement","HTMLKeygenElement","HTMLLabelElement","HTMLLegendElement","HTMLObjectElement","HTMLOutputElement","HTMLTextAreaElement"];c.forEach(t)}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r(e,this)}var n=e.registerWrapper,r=e.setWrapper,o=e.unsafeUnwrap,i=e.unwrap,a=e.unwrapIfNeeded,s=e.wrap,c=window.Selection;t.prototype={get anchorNode(){return s(o(this).anchorNode)},get focusNode(){return s(o(this).focusNode)},addRange:function(e){o(this).addRange(a(e))},collapse:function(e,t){o(this).collapse(a(e),t)},containsNode:function(e,t){return o(this).containsNode(a(e),t)},getRangeAt:function(e){return s(o(this).getRangeAt(e))},removeRange:function(e){o(this).removeRange(i(e))},selectAllChildren:function(e){o(this).selectAllChildren(e instanceof ShadowRoot?o(e.host):a(e))},toString:function(){return o(this).toString()}},c.prototype.extend&&(t.prototype.extend=function(e,t){o(this).extend(a(e),t)}),n(window.Selection,t,window.getSelection()),e.wrappers.Selection=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){r(e,this)}var n=e.registerWrapper,r=e.setWrapper,o=e.unsafeUnwrap,i=e.unwrapIfNeeded,a=e.wrap,s=window.TreeWalker;t.prototype={get root(){return a(o(this).root)},get currentNode(){return a(o(this).currentNode)},set currentNode(e){o(this).currentNode=i(e)},get filter(){return o(this).filter},parentNode:function(){return a(o(this).parentNode())},firstChild:function(){return a(o(this).firstChild())},lastChild:function(){return a(o(this).lastChild())},previousSibling:function(){return a(o(this).previousSibling())},previousNode:function(){return a(o(this).previousNode())},nextNode:function(){return a(o(this).nextNode())}},n(s,t),e.wrappers.TreeWalker=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){u.call(this,e),this.treeScope_=new w(this,null)}function n(e){var n=document[e];t.prototype[e]=function(){return j(n.apply(N(this),arguments))}}function r(e,t){x.call(N(t),C(e)),o(e,t)}function o(e,t){e.shadowRoot&&t.adoptNode(e.shadowRoot),e instanceof m&&i(e,t);for(var n=e.firstChild;n;n=n.nextSibling)o(n,t)}function i(e,t){var n=e.olderShadowRoot;n&&t.adoptNode(n)}function a(e){L(e,this)}function s(e,t){var n=document.implementation[t];e.prototype[t]=function(){
return j(n.apply(N(this),arguments))}}function c(e,t){var n=document.implementation[t];e.prototype[t]=function(){return n.apply(N(this),arguments)}}var l=e.GetElementsByInterface,u=e.wrappers.Node,d=e.ParentNodeInterface,p=e.NonElementParentNodeInterface,h=e.wrappers.Selection,f=e.SelectorsInterface,m=e.wrappers.ShadowRoot,w=e.TreeScope,v=e.cloneNode,g=e.defineGetter,b=e.defineWrapGetter,y=e.elementFromPoint,E=e.forwardMethodsToWrapper,_=e.matchesNames,S=e.mixin,T=e.registerWrapper,M=e.renderAllPending,O=e.rewrap,L=e.setWrapper,N=e.unsafeUnwrap,C=e.unwrap,j=e.wrap,D=e.wrapEventTargetMethods,H=(e.wrapNodeList,new WeakMap);t.prototype=Object.create(u.prototype),b(t,"documentElement"),b(t,"body"),b(t,"head"),g(t,"activeElement",function(){var e=C(this).activeElement;if(!e||!e.nodeType)return null;for(var t=j(e);!this.contains(t);){for(;t.parentNode;)t=t.parentNode;if(!t.host)return null;t=t.host}return t}),["createComment","createDocumentFragment","createElement","createElementNS","createEvent","createEventNS","createRange","createTextNode"].forEach(n);var x=document.adoptNode,R=document.getSelection;S(t.prototype,{adoptNode:function(e){return e.parentNode&&e.parentNode.removeChild(e),r(e,this),e},elementFromPoint:function(e,t){return y(this,this,e,t)},importNode:function(e,t){return v(e,t,N(this))},getSelection:function(){return M(),new h(R.call(C(this)))},getElementsByName:function(e){return f.querySelectorAll.call(this,"[name="+JSON.stringify(String(e))+"]")}});var I=document.createTreeWalker,P=e.wrappers.TreeWalker;if(t.prototype.createTreeWalker=function(e,t,n,r){var o=null;return n&&(n.acceptNode&&"function"==typeof n.acceptNode?o={acceptNode:function(e){return n.acceptNode(j(e))}}:"function"==typeof n&&(o=function(e){return n(j(e))})),new P(I.call(C(this),C(e),t,o,r))},document.registerElement){var k=document.registerElement;t.prototype.registerElement=function(t,n){function r(e){return e?void L(e,this):i?document.createElement(i,t):document.createElement(t)}var o,i;if(void 0!==n&&(o=n.prototype,i=n["extends"]),o||(o=Object.create(HTMLElement.prototype)),e.nativePrototypeTable.get(o))throw new Error("NotSupportedError");for(var a,s=Object.getPrototypeOf(o),c=[];s&&!(a=e.nativePrototypeTable.get(s));)c.push(s),s=Object.getPrototypeOf(s);if(!a)throw new Error("NotSupportedError");for(var l=Object.create(a),u=c.length-1;u>=0;u--)l=Object.create(l);["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"].forEach(function(e){var t=o[e];t&&(l[e]=function(){j(this)instanceof r||O(this),t.apply(j(this),arguments)})});var d={prototype:l};i&&(d["extends"]=i),r.prototype=o,r.prototype.constructor=r,e.constructorTable.set(l,r),e.nativePrototypeTable.set(o,l);k.call(C(this),t,d);return r},E([window.HTMLDocument||window.Document],["registerElement"])}E([window.HTMLBodyElement,window.HTMLDocument||window.Document,window.HTMLHeadElement,window.HTMLHtmlElement],["appendChild","compareDocumentPosition","contains","getElementsByClassName","getElementsByTagName","getElementsByTagNameNS","insertBefore","querySelector","querySelectorAll","removeChild","replaceChild"]),E([window.HTMLBodyElement,window.HTMLHeadElement,window.HTMLHtmlElement],_),E([window.HTMLDocument||window.Document],["adoptNode","importNode","contains","createComment","createDocumentFragment","createElement","createElementNS","createEvent","createEventNS","createRange","createTextNode","createTreeWalker","elementFromPoint","getElementById","getElementsByName","getSelection"]),S(t.prototype,l),S(t.prototype,d),S(t.prototype,f),S(t.prototype,p),S(t.prototype,{get implementation(){var e=H.get(this);return e?e:(e=new a(C(this).implementation),H.set(this,e),e)},get defaultView(){return j(C(this).defaultView)}}),T(window.Document,t,document.implementation.createHTMLDocument("")),window.HTMLDocument&&T(window.HTMLDocument,t),D([window.HTMLBodyElement,window.HTMLDocument||window.Document,window.HTMLHeadElement]);var A=document.implementation.createDocument;a.prototype.createDocument=function(){return arguments[2]=C(arguments[2]),j(A.apply(N(this),arguments))},s(a,"createDocumentType"),s(a,"createHTMLDocument"),c(a,"hasFeature"),T(window.DOMImplementation,a),E([window.DOMImplementation],["createDocument","createDocumentType","createHTMLDocument","hasFeature"]),e.adoptNodeNoRemove=r,e.wrappers.DOMImplementation=a,e.wrappers.Document=t}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){n.call(this,e)}var n=e.wrappers.EventTarget,r=e.wrappers.Selection,o=e.mixin,i=e.registerWrapper,a=e.renderAllPending,s=e.unwrap,c=e.unwrapIfNeeded,l=e.wrap,u=window.Window,d=window.getComputedStyle,p=window.getDefaultComputedStyle,h=window.getSelection;t.prototype=Object.create(n.prototype),u.prototype.getComputedStyle=function(e,t){return l(this||window).getComputedStyle(c(e),t)},p&&(u.prototype.getDefaultComputedStyle=function(e,t){return l(this||window).getDefaultComputedStyle(c(e),t)}),u.prototype.getSelection=function(){return l(this||window).getSelection()},delete window.getComputedStyle,delete window.getDefaultComputedStyle,delete window.getSelection,["addEventListener","removeEventListener","dispatchEvent"].forEach(function(e){u.prototype[e]=function(){var t=l(this||window);return t[e].apply(t,arguments)},delete window[e]}),o(t.prototype,{getComputedStyle:function(e,t){return a(),d.call(s(this),c(e),t)},getSelection:function(){return a(),new r(h.call(s(this)))},get document(){return l(s(this).document)}}),p&&(t.prototype.getDefaultComputedStyle=function(e,t){return a(),p.call(s(this),c(e),t)}),i(u,t,window),e.wrappers.Window=t}(window.ShadowDOMPolyfill),function(e){"use strict";var t=e.unwrap,n=window.DataTransfer||window.Clipboard,r=n.prototype.setDragImage;r&&(n.prototype.setDragImage=function(e,n,o){r.call(this,t(e),n,o)})}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t;t=e instanceof i?e:new i(e&&o(e)),r(t,this)}var n=e.registerWrapper,r=e.setWrapper,o=e.unwrap,i=window.FormData;i&&(n(i,t,new i),e.wrappers.FormData=t)}(window.ShadowDOMPolyfill),function(e){"use strict";var t=e.unwrapIfNeeded,n=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(e){return n.call(this,t(e))}}(window.ShadowDOMPolyfill),function(e){"use strict";function t(e){var t=n[e],r=window[t];if(r){var o=document.createElement(e),i=o.constructor;window[t]=i}}var n=(e.isWrapperFor,{a:"HTMLAnchorElement",area:"HTMLAreaElement",audio:"HTMLAudioElement",base:"HTMLBaseElement",body:"HTMLBodyElement",br:"HTMLBRElement",button:"HTMLButtonElement",canvas:"HTMLCanvasElement",caption:"HTMLTableCaptionElement",col:"HTMLTableColElement",content:"HTMLContentElement",data:"HTMLDataElement",datalist:"HTMLDataListElement",del:"HTMLModElement",dir:"HTMLDirectoryElement",div:"HTMLDivElement",dl:"HTMLDListElement",embed:"HTMLEmbedElement",fieldset:"HTMLFieldSetElement",font:"HTMLFontElement",form:"HTMLFormElement",frame:"HTMLFrameElement",frameset:"HTMLFrameSetElement",h1:"HTMLHeadingElement",head:"HTMLHeadElement",hr:"HTMLHRElement",html:"HTMLHtmlElement",iframe:"HTMLIFrameElement",img:"HTMLImageElement",input:"HTMLInputElement",keygen:"HTMLKeygenElement",label:"HTMLLabelElement",legend:"HTMLLegendElement",li:"HTMLLIElement",link:"HTMLLinkElement",map:"HTMLMapElement",marquee:"HTMLMarqueeElement",menu:"HTMLMenuElement",menuitem:"HTMLMenuItemElement",meta:"HTMLMetaElement",meter:"HTMLMeterElement",object:"HTMLObjectElement",ol:"HTMLOListElement",optgroup:"HTMLOptGroupElement",option:"HTMLOptionElement",output:"HTMLOutputElement",p:"HTMLParagraphElement",param:"HTMLParamElement",pre:"HTMLPreElement",progress:"HTMLProgressElement",q:"HTMLQuoteElement",script:"HTMLScriptElement",select:"HTMLSelectElement",shadow:"HTMLShadowElement",source:"HTMLSourceElement",span:"HTMLSpanElement",style:"HTMLStyleElement",table:"HTMLTableElement",tbody:"HTMLTableSectionElement",template:"HTMLTemplateElement",textarea:"HTMLTextAreaElement",thead:"HTMLTableSectionElement",time:"HTMLTimeElement",title:"HTMLTitleElement",tr:"HTMLTableRowElement",track:"HTMLTrackElement",ul:"HTMLUListElement",video:"HTMLVideoElement"});Object.keys(n).forEach(t),Object.getOwnPropertyNames(e.wrappers).forEach(function(t){window[t]=e.wrappers[t]})}(window.ShadowDOMPolyfill),function(e){function t(e,t){var n="";return Array.prototype.forEach.call(e,function(e){n+=e.textContent+"\n\n"}),t||(n=n.replace(d,"")),n}function n(e){var t=document.createElement("style");return t.textContent=e,t}function r(e){var t=n(e);document.head.appendChild(t);var r=[];if(t.sheet)try{r=t.sheet.cssRules}catch(o){}else console.warn("sheet not found",t);return t.parentNode.removeChild(t),r}function o(){C.initialized=!0,document.body.appendChild(C);var e=C.contentDocument,t=e.createElement("base");t.href=document.baseURI,e.head.appendChild(t)}function i(e){C.initialized||o(),document.body.appendChild(C),e(C.contentDocument),document.body.removeChild(C)}function a(e,t){if(t){var o;if(e.match("@import")&&D){var a=n(e);i(function(e){e.head.appendChild(a.impl),o=Array.prototype.slice.call(a.sheet.cssRules,0),t(o)})}else o=r(e),t(o)}}function s(e){e&&l().appendChild(document.createTextNode(e))}function c(e,t){var r=n(e);r.setAttribute(t,""),r.setAttribute(x,""),document.head.appendChild(r)}function l(){return j||(j=document.createElement("style"),j.setAttribute(x,""),j[x]=!0),j}var u={strictStyling:!1,registry:{},shimStyling:function(e,n,r){var o=this.prepareRoot(e,n,r),i=this.isTypeExtension(r),a=this.makeScopeSelector(n,i),s=t(o,!0);s=this.scopeCssText(s,a),e&&(e.shimmedStyle=s),this.addCssToDocument(s,n)},shimStyle:function(e,t){return this.shimCssText(e.textContent,t)},shimCssText:function(e,t){return e=this.insertDirectives(e),this.scopeCssText(e,t)},makeScopeSelector:function(e,t){return e?t?"[is="+e+"]":e:""},isTypeExtension:function(e){return e&&e.indexOf("-")<0},prepareRoot:function(e,t,n){var r=this.registerRoot(e,t,n);return this.replaceTextInStyles(r.rootStyles,this.insertDirectives),this.removeStyles(e,r.rootStyles),this.strictStyling&&this.applyScopeToContent(e,t),r.scopeStyles},removeStyles:function(e,t){for(var n,r=0,o=t.length;o>r&&(n=t[r]);r++)n.parentNode.removeChild(n)},registerRoot:function(e,t,n){var r=this.registry[t]={root:e,name:t,extendsName:n},o=this.findStyles(e);r.rootStyles=o,r.scopeStyles=r.rootStyles;var i=this.registry[r.extendsName];return i&&(r.scopeStyles=i.scopeStyles.concat(r.scopeStyles)),r},findStyles:function(e){if(!e)return[];var t=e.querySelectorAll("style");return Array.prototype.filter.call(t,function(e){return!e.hasAttribute(R)})},applyScopeToContent:function(e,t){e&&(Array.prototype.forEach.call(e.querySelectorAll("*"),function(e){e.setAttribute(t,"")}),Array.prototype.forEach.call(e.querySelectorAll("template"),function(e){this.applyScopeToContent(e.content,t)},this))},insertDirectives:function(e){return e=this.insertPolyfillDirectivesInCssText(e),this.insertPolyfillRulesInCssText(e)},insertPolyfillDirectivesInCssText:function(e){return e=e.replace(p,function(e,t){return t.slice(0,-2)+"{"}),e.replace(h,function(e,t){return t+" {"})},insertPolyfillRulesInCssText:function(e){return e=e.replace(f,function(e,t){return t.slice(0,-1)}),e.replace(m,function(e,t,n,r){var o=e.replace(t,"").replace(n,"");return r+o})},scopeCssText:function(e,t){var n=this.extractUnscopedRulesFromCssText(e);if(e=this.insertPolyfillHostInCssText(e),e=this.convertColonHost(e),e=this.convertColonHostContext(e),e=this.convertShadowDOMSelectors(e),t){var e,r=this;a(e,function(n){e=r.scopeRules(n,t)})}return e=e+"\n"+n,e.trim()},extractUnscopedRulesFromCssText:function(e){for(var t,n="";t=w.exec(e);)n+=t[1].slice(0,-1)+"\n\n";for(;t=v.exec(e);)n+=t[0].replace(t[2],"").replace(t[1],t[3])+"\n\n";return n},convertColonHost:function(e){return this.convertColonRule(e,E,this.colonHostPartReplacer)},convertColonHostContext:function(e){return this.convertColonRule(e,_,this.colonHostContextPartReplacer)},convertColonRule:function(e,t,n){return e.replace(t,function(e,t,r,o){if(t=O,r){for(var i,a=r.split(","),s=[],c=0,l=a.length;l>c&&(i=a[c]);c++)i=i.trim(),s.push(n(t,i,o));return s.join(",")}return t+o})},colonHostContextPartReplacer:function(e,t,n){return t.match(g)?this.colonHostPartReplacer(e,t,n):e+t+n+", "+t+" "+e+n},colonHostPartReplacer:function(e,t,n){return e+t.replace(g,"")+n},convertShadowDOMSelectors:function(e){for(var t=0;t<N.length;t++)e=e.replace(N[t]," ");return e},scopeRules:function(e,t){var n="";return e&&Array.prototype.forEach.call(e,function(e){if(e.selectorText&&e.style&&void 0!==e.style.cssText)n+=this.scopeSelector(e.selectorText,t,this.strictStyling)+" {\n	",n+=this.propertiesFromRule(e)+"\n}\n\n";else if(e.type===CSSRule.MEDIA_RULE)n+="@media "+e.media.mediaText+" {\n",n+=this.scopeRules(e.cssRules,t),n+="\n}\n\n";else try{e.cssText&&(n+=e.cssText+"\n\n")}catch(r){e.type===CSSRule.KEYFRAMES_RULE&&e.cssRules&&(n+=this.ieSafeCssTextFromKeyFrameRule(e))}},this),n},ieSafeCssTextFromKeyFrameRule:function(e){var t="@keyframes "+e.name+" {";return Array.prototype.forEach.call(e.cssRules,function(e){t+=" "+e.keyText+" {"+e.style.cssText+"}"}),t+=" }"},scopeSelector:function(e,t,n){var r=[],o=e.split(",");return o.forEach(function(e){e=e.trim(),this.selectorNeedsScoping(e,t)&&(e=n&&!e.match(O)?this.applyStrictSelectorScope(e,t):this.applySelectorScope(e,t)),r.push(e)},this),r.join(", ")},selectorNeedsScoping:function(e,t){if(Array.isArray(t))return!0;var n=this.makeScopeMatcher(t);return!e.match(n)},makeScopeMatcher:function(e){return e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")"+S,"m")},applySelectorScope:function(e,t){return Array.isArray(t)?this.applySelectorScopeList(e,t):this.applySimpleSelectorScope(e,t)},applySelectorScopeList:function(e,t){for(var n,r=[],o=0;n=t[o];o++)r.push(this.applySimpleSelectorScope(e,n));return r.join(", ")},applySimpleSelectorScope:function(e,t){return e.match(L)?(e=e.replace(O,t),e.replace(L,t+" ")):t+" "+e},applyStrictSelectorScope:function(e,t){t=t.replace(/\[is=([^\]]*)\]/g,"$1");var n=[" ",">","+","~"],r=e,o="["+t+"]";return n.forEach(function(e){var t=r.split(e);r=t.map(function(e){var t=e.trim().replace(L,"");return t&&n.indexOf(t)<0&&t.indexOf(o)<0&&(e=t.replace(/([^:]*)(:*)(.*)/,"$1"+o+"$2$3")),e}).join(e)}),r},insertPolyfillHostInCssText:function(e){return e.replace(M,b).replace(T,g)},propertiesFromRule:function(e){var t=e.style.cssText;e.style.content&&!e.style.content.match(/['"]+|attr/)&&(t=t.replace(/content:[^;]*;/g,"content: '"+e.style.content+"';"));var n=e.style;for(var r in n)"initial"===n[r]&&(t+=r+": initial; ");return t},replaceTextInStyles:function(e,t){e&&t&&(e instanceof Array||(e=[e]),Array.prototype.forEach.call(e,function(e){e.textContent=t.call(this,e.textContent)},this))},addCssToDocument:function(e,t){e.match("@import")?c(e,t):s(e)}},d=/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,p=/\/\*\s*@polyfill ([^*]*\*+([^\/*][^*]*\*+)*\/)([^{]*?){/gim,h=/polyfill-next-selector[^}]*content\:[\s]*?['"](.*?)['"][;\s]*}([^{]*?){/gim,f=/\/\*\s@polyfill-rule([^*]*\*+([^\/*][^*]*\*+)*)\//gim,m=/(polyfill-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim,w=/\/\*\s@polyfill-unscoped-rule([^*]*\*+([^\/*][^*]*\*+)*)\//gim,v=/(polyfill-unscoped-rule)[^}]*(content\:[\s]*['"](.*?)['"])[;\s]*[^}]*}/gim,g="-shadowcsshost",b="-shadowcsscontext",y=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",E=new RegExp("("+g+y,"gim"),_=new RegExp("("+b+y,"gim"),S="([>\\s~+[.,{:][\\s\\S]*)?$",T=/\:host/gim,M=/\:host-context/gim,O=g+"-no-combinator",L=new RegExp(g,"gim"),N=(new RegExp(b,"gim"),[/>>>/g,/::shadow/g,/::content/g,/\/deep\//g,/\/shadow\//g,/\/shadow-deep\//g,/\^\^/g,/\^/g]),C=document.createElement("iframe");C.style.display="none";var j,D=navigator.userAgent.match("Chrome"),H="shim-shadowdom",x="shim-shadowdom-css",R="no-shim";if(window.ShadowDOMPolyfill){s("style { display: none !important; }\n");var I=ShadowDOMPolyfill.wrap(document),P=I.querySelector("head");P.insertBefore(l(),P.childNodes[0]),document.addEventListener("DOMContentLoaded",function(){e.urlResolver;if(window.HTMLImports&&!HTMLImports.useNative){var t="link[rel=stylesheet]["+H+"]",n="style["+H+"]";HTMLImports.importer.documentPreloadSelectors+=","+t,HTMLImports.importer.importsPreloadSelectors+=","+t,HTMLImports.parser.documentSelectors=[HTMLImports.parser.documentSelectors,t,n].join(",");var r=HTMLImports.parser.parseGeneric;HTMLImports.parser.parseGeneric=function(e){if(!e[x]){var t=e.__importElement||e;if(!t.hasAttribute(H))return void r.call(this,e);e.__resource&&(t=e.ownerDocument.createElement("style"),t.textContent=e.__resource),HTMLImports.path.resolveUrlsInStyle(t,e.href),t.textContent=u.shimStyle(t),t.removeAttribute(H,""),t.setAttribute(x,""),t[x]=!0,t.parentNode!==P&&(e.parentNode===P?P.replaceChild(t,e):this.addElementToDocument(t)),t.__importParsed=!0,this.markParsingComplete(e),this.parseNext()}};var o=HTMLImports.parser.hasResource;HTMLImports.parser.hasResource=function(e){return"link"===e.localName&&"stylesheet"===e.rel&&e.hasAttribute(H)?e.__resource:o.call(this,e)}}})}e.ShadowCSS=u}(window.WebComponents)),function(e){window.ShadowDOMPolyfill?(window.wrap=ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(e){return e}}(window.WebComponents),function(e){"use strict";function t(e){return void 0!==p[e]}function n(){s.call(this),this._isInvalid=!0}function r(e){return""==e&&n.call(this),e.toLowerCase()}function o(e){var t=e.charCodeAt(0);return t>32&&127>t&&-1==[34,35,60,62,63,96].indexOf(t)?e:encodeURIComponent(e)}function i(e){var t=e.charCodeAt(0);return t>32&&127>t&&-1==[34,35,60,62,96].indexOf(t)?e:encodeURIComponent(e)}function a(e,a,s){function c(e){b.push(e)}var l=a||"scheme start",u=0,d="",v=!1,g=!1,b=[];e:for(;(e[u-1]!=f||0==u)&&!this._isInvalid;){var y=e[u];switch(l){case"scheme start":if(!y||!m.test(y)){if(a){c("Invalid scheme.");break e}d="",l="no scheme";continue}d+=y.toLowerCase(),l="scheme";break;case"scheme":if(y&&w.test(y))d+=y.toLowerCase();else{if(":"!=y){if(a){if(f==y)break e;c("Code point not allowed in scheme: "+y);break e}d="",u=0,l="no scheme";continue}if(this._scheme=d,d="",a)break e;t(this._scheme)&&(this._isRelative=!0),l="file"==this._scheme?"relative":this._isRelative&&s&&s._scheme==this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break;case"scheme data":"?"==y?(this._query="?",l="query"):"#"==y?(this._fragment="#",l="fragment"):f!=y&&"	"!=y&&"\n"!=y&&"\r"!=y&&(this._schemeData+=o(y));break;case"no scheme":if(s&&t(s._scheme)){l="relative";continue}c("Missing scheme."),n.call(this);break;case"relative or authority":if("/"!=y||"/"!=e[u+1]){c("Expected /, got: "+y),l="relative";continue}l="authority ignore slashes";break;case"relative":if(this._isRelative=!0,"file"!=this._scheme&&(this._scheme=s._scheme),f==y){this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query=s._query,this._username=s._username,this._password=s._password;break e}if("/"==y||"\\"==y)"\\"==y&&c("\\ is an invalid code point."),l="relative slash";else if("?"==y)this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query="?",this._username=s._username,this._password=s._password,l="query";else{if("#"!=y){var E=e[u+1],_=e[u+2];("file"!=this._scheme||!m.test(y)||":"!=E&&"|"!=E||f!=_&&"/"!=_&&"\\"!=_&&"?"!=_&&"#"!=_)&&(this._host=s._host,this._port=s._port,this._username=s._username,this._password=s._password,this._path=s._path.slice(),this._path.pop()),l="relative path";continue}this._host=s._host,this._port=s._port,this._path=s._path.slice(),this._query=s._query,this._fragment="#",this._username=s._username,this._password=s._password,l="fragment"}break;case"relative slash":if("/"!=y&&"\\"!=y){"file"!=this._scheme&&(this._host=s._host,this._port=s._port,this._username=s._username,this._password=s._password),l="relative path";continue}"\\"==y&&c("\\ is an invalid code point."),l="file"==this._scheme?"file host":"authority ignore slashes";break;case"authority first slash":if("/"!=y){c("Expected '/', got: "+y),l="authority ignore slashes";continue}l="authority second slash";break;case"authority second slash":if(l="authority ignore slashes","/"!=y){c("Expected '/', got: "+y);continue}break;case"authority ignore slashes":if("/"!=y&&"\\"!=y){l="authority";continue}c("Expected authority, got: "+y);break;case"authority":if("@"==y){v&&(c("@ already seen."),d+="%40"),v=!0;for(var S=0;S<d.length;S++){var T=d[S];if("	"!=T&&"\n"!=T&&"\r"!=T)if(":"!=T||null!==this._password){var M=o(T);null!==this._password?this._password+=M:this._username+=M}else this._password="";else c("Invalid whitespace in authority.")}d=""}else{if(f==y||"/"==y||"\\"==y||"?"==y||"#"==y){u-=d.length,d="",l="host";continue}d+=y}break;case"file host":if(f==y||"/"==y||"\\"==y||"?"==y||"#"==y){2!=d.length||!m.test(d[0])||":"!=d[1]&&"|"!=d[1]?0==d.length?l="relative path start":(this._host=r.call(this,d),d="",l="relative path start"):l="relative path";continue}"	"==y||"\n"==y||"\r"==y?c("Invalid whitespace in file host."):d+=y;break;case"host":case"hostname":if(":"!=y||g){if(f==y||"/"==y||"\\"==y||"?"==y||"#"==y){if(this._host=r.call(this,d),d="",l="relative path start",a)break e;continue}"	"!=y&&"\n"!=y&&"\r"!=y?("["==y?g=!0:"]"==y&&(g=!1),d+=y):c("Invalid code point in host/hostname: "+y)}else if(this._host=r.call(this,d),d="",l="port","hostname"==a)break e;break;case"port":if(/[0-9]/.test(y))d+=y;else{if(f==y||"/"==y||"\\"==y||"?"==y||"#"==y||a){if(""!=d){var O=parseInt(d,10);O!=p[this._scheme]&&(this._port=O+""),d=""}if(a)break e;l="relative path start";continue}"	"==y||"\n"==y||"\r"==y?c("Invalid code point in port: "+y):n.call(this)}break;case"relative path start":if("\\"==y&&c("'\\' not allowed in path."),l="relative path","/"!=y&&"\\"!=y)continue;break;case"relative path":if(f!=y&&"/"!=y&&"\\"!=y&&(a||"?"!=y&&"#"!=y))"	"!=y&&"\n"!=y&&"\r"!=y&&(d+=o(y));else{"\\"==y&&c("\\ not allowed in relative path.");var L;(L=h[d.toLowerCase()])&&(d=L),".."==d?(this._path.pop(),"/"!=y&&"\\"!=y&&this._path.push("")):"."==d&&"/"!=y&&"\\"!=y?this._path.push(""):"."!=d&&("file"==this._scheme&&0==this._path.length&&2==d.length&&m.test(d[0])&&"|"==d[1]&&(d=d[0]+":"),this._path.push(d)),d="","?"==y?(this._query="?",l="query"):"#"==y&&(this._fragment="#",l="fragment")}break;case"query":a||"#"!=y?f!=y&&"	"!=y&&"\n"!=y&&"\r"!=y&&(this._query+=i(y)):(this._fragment="#",l="fragment");break;case"fragment":f!=y&&"	"!=y&&"\n"!=y&&"\r"!=y&&(this._fragment+=y)}u++}}function s(){this._scheme="",this._schemeData="",this._username="",this._password=null,this._host="",this._port="",this._path=[],this._query="",this._fragment="",this._isInvalid=!1,this._isRelative=!1}function c(e,t){void 0===t||t instanceof c||(t=new c(String(t))),this._url=e,s.call(this);var n=e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");a.call(this,n,null,t)}var l=!1;if(!e.forceJURL)try{var u=new URL("b","http://a");u.pathname="c%20d",l="http://a/c%20d"===u.href}catch(d){}if(!l){var p=Object.create(null);p.ftp=21,p.file=0,p.gopher=70,p.http=80,p.https=443,p.ws=80,p.wss=443;var h=Object.create(null);h["%2e"]=".",h[".%2e"]="..",h["%2e."]="..",h["%2e%2e"]="..";var f=void 0,m=/[a-zA-Z]/,w=/[a-zA-Z0-9\+\-\.]/;c.prototype={toString:function(){return this.href},get href(){if(this._isInvalid)return this._url;var e="";return""==this._username&&null==this._password||(e=this._username+(null!=this._password?":"+this._password:"")+"@"),this.protocol+(this._isRelative?"//"+e+this.host:"")+this.pathname+this._query+this._fragment},set href(e){s.call(this),a.call(this,e)},get protocol(){return this._scheme+":"},set protocol(e){this._isInvalid||a.call(this,e+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"host")},get hostname(){return this._host},set hostname(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"hostname")},get port(){return this._port},set port(e){!this._isInvalid&&this._isRelative&&a.call(this,e,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(e){!this._isInvalid&&this._isRelative&&(this._path=[],a.call(this,e,"relative path start"))},get search(){return this._isInvalid||!this._query||"?"==this._query?"":this._query},set search(e){!this._isInvalid&&this._isRelative&&(this._query="?","?"==e[0]&&(e=e.slice(1)),a.call(this,e,"query"))},get hash(){return this._isInvalid||!this._fragment||"#"==this._fragment?"":this._fragment},set hash(e){this._isInvalid||(this._fragment="#","#"==e[0]&&(e=e.slice(1)),a.call(this,e,"fragment"))},get origin(){var e;if(this._isInvalid||!this._scheme)return"";switch(this._scheme){case"data":case"file":case"javascript":case"mailto":return"null"}return e=this.host,e?this._scheme+"://"+e:""}};var v=e.URL;v&&(c.createObjectURL=function(e){return v.createObjectURL.apply(v,arguments)},c.revokeObjectURL=function(e){v.revokeObjectURL(e)}),e.URL=c}}(self),function(e){function t(e){y.push(e),b||(b=!0,m(r))}function n(e){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(e)||e}function r(){b=!1;var e=y;y=[],e.sort(function(e,t){return e.uid_-t.uid_});var t=!1;e.forEach(function(e){var n=e.takeRecords();o(e),n.length&&(e.callback_(n,e),t=!0)}),t&&r()}function o(e){e.nodes_.forEach(function(t){var n=w.get(t);n&&n.forEach(function(t){t.observer===e&&t.removeTransientObservers()})})}function i(e,t){for(var n=e;n;n=n.parentNode){var r=w.get(n);if(r)for(var o=0;o<r.length;o++){var i=r[o],a=i.options;if(n===e||a.subtree){var s=t(a);s&&i.enqueue(s)}}}}function a(e){this.callback_=e,this.nodes_=[],this.records_=[],this.uid_=++E}function s(e,t){this.type=e,this.target=t,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function c(e){var t=new s(e.type,e.target);return t.addedNodes=e.addedNodes.slice(),t.removedNodes=e.removedNodes.slice(),t.previousSibling=e.previousSibling,t.nextSibling=e.nextSibling,t.attributeName=e.attributeName,t.attributeNamespace=e.attributeNamespace,t.oldValue=e.oldValue,t}function l(e,t){return _=new s(e,t)}function u(e){return S?S:(S=c(_),S.oldValue=e,S)}function d(){_=S=void 0}function p(e){return e===S||e===_}function h(e,t){return e===t?e:S&&p(e)?S:null}function f(e,t,n){this.observer=e,this.target=t,this.options=n,this.transientObservedNodes=[]}if(!e.JsMutationObserver){var m,w=new WeakMap;if(/Trident|Edge/.test(navigator.userAgent))m=setTimeout;else if(window.setImmediate)m=window.setImmediate;else{var v=[],g=String(Math.random());window.addEventListener("message",function(e){if(e.data===g){var t=v;v=[],t.forEach(function(e){e()})}}),m=function(e){v.push(e),window.postMessage(g,"*")}}var b=!1,y=[],E=0;a.prototype={observe:function(e,t){if(e=n(e),!t.childList&&!t.attributes&&!t.characterData||t.attributeOldValue&&!t.attributes||t.attributeFilter&&t.attributeFilter.length&&!t.attributes||t.characterDataOldValue&&!t.characterData)throw new SyntaxError;var r=w.get(e);r||w.set(e,r=[]);for(var o,i=0;i<r.length;i++)if(r[i].observer===this){o=r[i],o.removeListeners(),o.options=t;break}o||(o=new f(this,e,t),r.push(o),this.nodes_.push(e)),o.addListeners()},disconnect:function(){this.nodes_.forEach(function(e){for(var t=w.get(e),n=0;n<t.length;n++){var r=t[n];if(r.observer===this){r.removeListeners(),t.splice(n,1);break}}},this),this.records_=[]},takeRecords:function(){var e=this.records_;return this.records_=[],e}};var _,S;f.prototype={enqueue:function(e){var n=this.observer.records_,r=n.length;if(n.length>0){var o=n[r-1],i=h(o,e);if(i)return void(n[r-1]=i)}else t(this.observer);n[r]=e},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(e){var t=this.options;t.attributes&&e.addEventListener("DOMAttrModified",this,!0),t.characterData&&e.addEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.addEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(e){var t=this.options;t.attributes&&e.removeEventListener("DOMAttrModified",this,!0),t.characterData&&e.removeEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.removeEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(e){if(e!==this.target){this.addListeners_(e),this.transientObservedNodes.push(e);var t=w.get(e);t||w.set(e,t=[]),t.push(this)}},removeTransientObservers:function(){var e=this.transientObservedNodes;this.transientObservedNodes=[],e.forEach(function(e){this.removeListeners_(e);for(var t=w.get(e),n=0;n<t.length;n++)if(t[n]===this){t.splice(n,1);break}},this)},handleEvent:function(e){switch(e.stopImmediatePropagation(),e.type){case"DOMAttrModified":var t=e.attrName,n=e.relatedNode.namespaceURI,r=e.target,o=new l("attributes",r);o.attributeName=t,o.attributeNamespace=n;var a=e.attrChange===MutationEvent.ADDITION?null:e.prevValue;i(r,function(e){return!e.attributes||e.attributeFilter&&e.attributeFilter.length&&-1===e.attributeFilter.indexOf(t)&&-1===e.attributeFilter.indexOf(n)?void 0:e.attributeOldValue?u(a):o});break;case"DOMCharacterDataModified":var r=e.target,o=l("characterData",r),a=e.prevValue;i(r,function(e){return e.characterData?e.characterDataOldValue?u(a):o:void 0});break;case"DOMNodeRemoved":this.addTransientObserver(e.target);case"DOMNodeInserted":var s,c,p=e.target;"DOMNodeInserted"===e.type?(s=[p],c=[]):(s=[],c=[p]);var h=p.previousSibling,f=p.nextSibling,o=l("childList",e.target.parentNode);o.addedNodes=s,o.removedNodes=c,o.previousSibling=h,o.nextSibling=f,i(e.relatedNode,function(e){return e.childList?o:void 0})}d()}},e.JsMutationObserver=a,e.MutationObserver||(e.MutationObserver=a,a._isPolyfilled=!0)}}(self),function(e){"use strict";if(!window.performance){var t=Date.now();window.performance={now:function(){return Date.now()-t}}}window.requestAnimationFrame||(window.requestAnimationFrame=function(){var e=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return e?function(t){return e(function(){t(performance.now())})}:function(e){return window.setTimeout(e,1e3/60)}}()),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(){return window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}}());var n=function(){var e=document.createEvent("Event");return e.initEvent("foo",!0,!0),e.preventDefault(),e.defaultPrevented}();if(!n){var r=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(r.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}var o=/Trident/.test(navigator.userAgent);if((!window.CustomEvent||o&&"function"!=typeof window.CustomEvent)&&(window.CustomEvent=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,Boolean(t.bubbles),Boolean(t.cancelable),t.detail),n},window.CustomEvent.prototype=window.Event.prototype),!window.Event||o&&"function"!=typeof window.Event){var i=window.Event;window.Event=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n},window.Event.prototype=i.prototype}}(window.WebComponents),window.HTMLImports=window.HTMLImports||{flags:{}},function(e){function t(e,t){t=t||f,r(function(){i(e,t)},t)}function n(e){return"complete"===e.readyState||e.readyState===v}function r(e,t){if(n(t))e&&e();else{var o=function(){"complete"!==t.readyState&&t.readyState!==v||(t.removeEventListener(g,o),r(e,t))};t.addEventListener(g,o)}}function o(e){e.target.__loaded=!0}function i(e,t){function n(){c==l&&e&&e({allImports:s,loadedImports:u,errorImports:d})}function r(e){o(e),u.push(this),c++,n()}function i(e){d.push(this),c++,n()}var s=t.querySelectorAll("link[rel=import]"),c=0,l=s.length,u=[],d=[];
if(l)for(var p,h=0;l>h&&(p=s[h]);h++)a(p)?(u.push(this),c++,n()):(p.addEventListener("load",r),p.addEventListener("error",i));else n()}function a(e){return d?e.__loaded||e["import"]&&"loading"!==e["import"].readyState:e.__importParsed}function s(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)c(t)&&l(t)}function c(e){return"link"===e.localName&&"import"===e.rel}function l(e){var t=e["import"];t?o({target:e}):(e.addEventListener("load",o),e.addEventListener("error",o))}var u="import",d=Boolean(u in document.createElement("link")),p=Boolean(window.ShadowDOMPolyfill),h=function(e){return p?window.ShadowDOMPolyfill.wrapIfNeeded(e):e},f=h(document),m={get:function(){var e=window.HTMLImports.currentScript||document.currentScript||("complete"!==document.readyState?document.scripts[document.scripts.length-1]:null);return h(e)},configurable:!0};Object.defineProperty(document,"_currentScript",m),Object.defineProperty(f,"_currentScript",m);var w=/Trident/.test(navigator.userAgent),v=w?"complete":"interactive",g="readystatechange";d&&(new MutationObserver(function(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)t.addedNodes&&s(t.addedNodes)}).observe(document.head,{childList:!0}),function(){if("loading"===document.readyState)for(var e,t=document.querySelectorAll("link[rel=import]"),n=0,r=t.length;r>n&&(e=t[n]);n++)l(e)}()),t(function(e){window.HTMLImports.ready=!0,window.HTMLImports.readyTime=(new Date).getTime();var t=f.createEvent("CustomEvent");t.initCustomEvent("HTMLImportsLoaded",!0,!0,e),f.dispatchEvent(t)}),e.IMPORT_LINK_TYPE=u,e.useNative=d,e.rootDocument=f,e.whenReady=t,e.isIE=w}(window.HTMLImports),function(e){var t=[],n=function(e){t.push(e)},r=function(){t.forEach(function(t){t(e)})};e.addModule=n,e.initializeModules=r}(window.HTMLImports),window.HTMLImports.addModule(function(e){var t=/(url\()([^)]*)(\))/g,n=/(@import[\s]+(?!url\())([^;]*)(;)/g,r={resolveUrlsInStyle:function(e,t){var n=e.ownerDocument,r=n.createElement("a");return e.textContent=this.resolveUrlsInCssText(e.textContent,t,r),e},resolveUrlsInCssText:function(e,r,o){var i=this.replaceUrls(e,o,r,t);return i=this.replaceUrls(i,o,r,n)},replaceUrls:function(e,t,n,r){return e.replace(r,function(e,r,o,i){var a=o.replace(/["']/g,"");return n&&(a=new URL(a,n).href),t.href=a,a=t.href,r+"'"+a+"'"+i})}};e.path=r}),window.HTMLImports.addModule(function(e){var t={async:!0,ok:function(e){return e.status>=200&&e.status<300||304===e.status||0===e.status},load:function(n,r,o){var i=new XMLHttpRequest;return(e.flags.debug||e.flags.bust)&&(n+="?"+Math.random()),i.open("GET",n,t.async),i.addEventListener("readystatechange",function(e){if(4===i.readyState){var n=null;try{var a=i.getResponseHeader("Location");a&&(n="/"===a.substr(0,1)?location.origin+a:a)}catch(e){console.error(e.message)}r.call(o,!t.ok(i)&&i,i.response||i.responseText,n)}}),i.send(),i},loadDocument:function(e,t,n){this.load(e,t,n).responseType="document"}};e.xhr=t}),window.HTMLImports.addModule(function(e){var t=e.xhr,n=e.flags,r=function(e,t){this.cache={},this.onload=e,this.oncomplete=t,this.inflight=0,this.pending={}};r.prototype={addNodes:function(e){this.inflight+=e.length;for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)this.require(t);this.checkDone()},addNode:function(e){this.inflight++,this.require(e),this.checkDone()},require:function(e){var t=e.src||e.href;e.__nodeUrl=t,this.dedupe(t,e)||this.fetch(t,e)},dedupe:function(e,t){if(this.pending[e])return this.pending[e].push(t),!0;return this.cache[e]?(this.onload(e,t,this.cache[e]),this.tail(),!0):(this.pending[e]=[t],!1)},fetch:function(e,r){if(n.load&&console.log("fetch",e,r),e)if(e.match(/^data:/)){var o=e.split(","),i=o[0],a=o[1];a=i.indexOf(";base64")>-1?atob(a):decodeURIComponent(a),setTimeout(function(){this.receive(e,r,null,a)}.bind(this),0)}else{var s=function(t,n,o){this.receive(e,r,t,n,o)}.bind(this);t.load(e,s)}else setTimeout(function(){this.receive(e,r,{error:"href must be specified"},null)}.bind(this),0)},receive:function(e,t,n,r,o){this.cache[e]=r;for(var i,a=this.pending[e],s=0,c=a.length;c>s&&(i=a[s]);s++)this.onload(e,i,r,n,o),this.tail();this.pending[e]=null},tail:function(){--this.inflight,this.checkDone()},checkDone:function(){this.inflight||this.oncomplete()}},e.Loader=r}),window.HTMLImports.addModule(function(e){var t=function(e){this.addCallback=e,this.mo=new MutationObserver(this.handler.bind(this))};t.prototype={handler:function(e){for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)"childList"===t.type&&t.addedNodes.length&&this.addedNodes(t.addedNodes)},addedNodes:function(e){this.addCallback&&this.addCallback(e);for(var t,n=0,r=e.length;r>n&&(t=e[n]);n++)t.children&&t.children.length&&this.addedNodes(t.children)},observe:function(e){this.mo.observe(e,{childList:!0,subtree:!0})}},e.Observer=t}),window.HTMLImports.addModule(function(e){function t(e){return"link"===e.localName&&e.rel===u}function n(e){var t=r(e);return"data:text/javascript;charset=utf-8,"+encodeURIComponent(t)}function r(e){return e.textContent+o(e)}function o(e){var t=e.ownerDocument;t.__importedScripts=t.__importedScripts||0;var n=e.ownerDocument.baseURI,r=t.__importedScripts?"-"+t.__importedScripts:"";return t.__importedScripts++,"\n//# sourceURL="+n+r+".js\n"}function i(e){var t=e.ownerDocument.createElement("style");return t.textContent=e.textContent,a.resolveUrlsInStyle(t),t}var a=e.path,s=e.rootDocument,c=e.flags,l=e.isIE,u=e.IMPORT_LINK_TYPE,d="link[rel="+u+"]",p={documentSelectors:d,importsSelectors:[d,"link[rel=stylesheet]:not([type])","style:not([type])","script:not([type])",'script[type="application/javascript"]','script[type="text/javascript"]'].join(","),map:{link:"parseLink",script:"parseScript",style:"parseStyle"},dynamicElements:[],parseNext:function(){var e=this.nextToParse();e&&this.parse(e)},parse:function(e){if(this.isParsed(e))return void(c.parse&&console.log("[%s] is already parsed",e.localName));var t=this[this.map[e.localName]];t&&(this.markParsing(e),t.call(this,e))},parseDynamic:function(e,t){this.dynamicElements.push(e),t||this.parseNext()},markParsing:function(e){c.parse&&console.log("parsing",e),this.parsingElement=e},markParsingComplete:function(e){e.__importParsed=!0,this.markDynamicParsingComplete(e),e.__importElement&&(e.__importElement.__importParsed=!0,this.markDynamicParsingComplete(e.__importElement)),this.parsingElement=null,c.parse&&console.log("completed",e)},markDynamicParsingComplete:function(e){var t=this.dynamicElements.indexOf(e);t>=0&&this.dynamicElements.splice(t,1)},parseImport:function(e){if(e["import"]=e.__doc,window.HTMLImports.__importsParsingHook&&window.HTMLImports.__importsParsingHook(e),e["import"]&&(e["import"].__importParsed=!0),this.markParsingComplete(e),e.__resource&&!e.__error?e.dispatchEvent(new CustomEvent("load",{bubbles:!1})):e.dispatchEvent(new CustomEvent("error",{bubbles:!1})),e.__pending)for(var t;e.__pending.length;)t=e.__pending.shift(),t&&t({target:e});this.parseNext()},parseLink:function(e){t(e)?this.parseImport(e):(e.href=e.href,this.parseGeneric(e))},parseStyle:function(e){var t=e;e=i(e),t.__appliedElement=e,e.__importElement=t,this.parseGeneric(e)},parseGeneric:function(e){this.trackElement(e),this.addElementToDocument(e)},rootImportForElement:function(e){for(var t=e;t.ownerDocument.__importLink;)t=t.ownerDocument.__importLink;return t},addElementToDocument:function(e){var t=this.rootImportForElement(e.__importElement||e);t.parentNode.insertBefore(e,t)},trackElement:function(e,t){var n=this,r=function(o){e.removeEventListener("load",r),e.removeEventListener("error",r),t&&t(o),n.markParsingComplete(e),n.parseNext()};if(e.addEventListener("load",r),e.addEventListener("error",r),l&&"style"===e.localName){var o=!1;if(-1==e.textContent.indexOf("@import"))o=!0;else if(e.sheet){o=!0;for(var i,a=e.sheet.cssRules,s=a?a.length:0,c=0;s>c&&(i=a[c]);c++)i.type===CSSRule.IMPORT_RULE&&(o=o&&Boolean(i.styleSheet))}o&&setTimeout(function(){e.dispatchEvent(new CustomEvent("load",{bubbles:!1}))})}},parseScript:function(t){var r=document.createElement("script");r.__importElement=t,r.src=t.src?t.src:n(t),e.currentScript=t,this.trackElement(r,function(t){r.parentNode&&r.parentNode.removeChild(r),e.currentScript=null}),this.addElementToDocument(r)},nextToParse:function(){return this._mayParse=[],!this.parsingElement&&(this.nextToParseInDoc(s)||this.nextToParseDynamic())},nextToParseInDoc:function(e,n){if(e&&this._mayParse.indexOf(e)<0){this._mayParse.push(e);for(var r,o=e.querySelectorAll(this.parseSelectorsForNode(e)),i=0,a=o.length;a>i&&(r=o[i]);i++)if(!this.isParsed(r))return this.hasResource(r)?t(r)?this.nextToParseInDoc(r.__doc,r):r:void 0}return n},nextToParseDynamic:function(){return this.dynamicElements[0]},parseSelectorsForNode:function(e){var t=e.ownerDocument||e;return t===s?this.documentSelectors:this.importsSelectors},isParsed:function(e){return e.__importParsed},needsDynamicParsing:function(e){return this.dynamicElements.indexOf(e)>=0},hasResource:function(e){return!t(e)||void 0!==e.__doc}};e.parser=p,e.IMPORT_SELECTOR=d}),window.HTMLImports.addModule(function(e){function t(e){return n(e,a)}function n(e,t){return"link"===e.localName&&e.getAttribute("rel")===t}function r(e){return!!Object.getOwnPropertyDescriptor(e,"baseURI")}function o(e,t){var n=document.implementation.createHTMLDocument(a);n._URL=t;var o=n.createElement("base");o.setAttribute("href",t),n.baseURI||r(n)||Object.defineProperty(n,"baseURI",{value:t});var i=n.createElement("meta");return i.setAttribute("charset","utf-8"),n.head.appendChild(i),n.head.appendChild(o),n.body.innerHTML=e,window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(n),n}var i=e.flags,a=e.IMPORT_LINK_TYPE,s=e.IMPORT_SELECTOR,c=e.rootDocument,l=e.Loader,u=e.Observer,d=e.parser,p={documents:{},documentPreloadSelectors:s,importsPreloadSelectors:[s].join(","),loadNode:function(e){h.addNode(e)},loadSubtree:function(e){var t=this.marshalNodes(e);h.addNodes(t)},marshalNodes:function(e){return e.querySelectorAll(this.loadSelectorsForNode(e))},loadSelectorsForNode:function(e){var t=e.ownerDocument||e;return t===c?this.documentPreloadSelectors:this.importsPreloadSelectors},loaded:function(e,n,r,a,s){if(i.load&&console.log("loaded",e,n),n.__resource=r,n.__error=a,t(n)){var c=this.documents[e];void 0===c&&(c=a?null:o(r,s||e),c&&(c.__importLink=n,this.bootDocument(c)),this.documents[e]=c),n.__doc=c}d.parseNext()},bootDocument:function(e){this.loadSubtree(e),this.observer.observe(e),d.parseNext()},loadedAll:function(){d.parseNext()}},h=new l(p.loaded.bind(p),p.loadedAll.bind(p));if(p.observer=new u,!document.baseURI){var f={get:function(){var e=document.querySelector("base");return e?e.href:window.location.href},configurable:!0};Object.defineProperty(document,"baseURI",f),Object.defineProperty(c,"baseURI",f)}e.importer=p,e.importLoader=h}),window.HTMLImports.addModule(function(e){var t=e.parser,n=e.importer,r={added:function(e){for(var r,o,i,a,s=0,c=e.length;c>s&&(a=e[s]);s++)r||(r=a.ownerDocument,o=t.isParsed(r)),i=this.shouldLoadNode(a),i&&n.loadNode(a),this.shouldParseNode(a)&&o&&t.parseDynamic(a,i)},shouldLoadNode:function(e){return 1===e.nodeType&&o.call(e,n.loadSelectorsForNode(e))},shouldParseNode:function(e){return 1===e.nodeType&&o.call(e,t.parseSelectorsForNode(e))}};n.observer.addCallback=r.added.bind(r);var o=HTMLElement.prototype.matches||HTMLElement.prototype.matchesSelector||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector}),function(e){function t(){window.HTMLImports.importer.bootDocument(r)}var n=e.initializeModules;e.isIE;if(!e.useNative){n();var r=e.rootDocument;"complete"===document.readyState||"interactive"===document.readyState&&!window.attachEvent?t():document.addEventListener("DOMContentLoaded",t)}}(window.HTMLImports),window.CustomElements=window.CustomElements||{flags:{}},function(e){var t=e.flags,n=[],r=function(e){n.push(e)},o=function(){n.forEach(function(t){t(e)})};e.addModule=r,e.initializeModules=o,e.hasNative=Boolean(document.registerElement),e.isIE=/Trident/.test(navigator.userAgent),e.useNative=!t.register&&e.hasNative&&!window.ShadowDOMPolyfill&&(!window.HTMLImports||window.HTMLImports.useNative)}(window.CustomElements),window.CustomElements.addModule(function(e){function t(e,t){n(e,function(e){return t(e)?!0:void r(e,t)}),r(e,t)}function n(e,t,r){var o=e.firstElementChild;if(!o)for(o=e.firstChild;o&&o.nodeType!==Node.ELEMENT_NODE;)o=o.nextSibling;for(;o;)t(o,r)!==!0&&n(o,t,r),o=o.nextElementSibling;return null}function r(e,n){for(var r=e.shadowRoot;r;)t(r,n),r=r.olderShadowRoot}function o(e,t){i(e,t,[])}function i(e,t,n){if(e=window.wrap(e),!(n.indexOf(e)>=0)){n.push(e);for(var r,o=e.querySelectorAll("link[rel="+a+"]"),s=0,c=o.length;c>s&&(r=o[s]);s++)r["import"]&&i(r["import"],t,n);t(e)}}var a=window.HTMLImports?window.HTMLImports.IMPORT_LINK_TYPE:"none";e.forDocumentTree=o,e.forSubtree=t}),window.CustomElements.addModule(function(e){function t(e,t){return n(e,t)||r(e,t)}function n(t,n){return e.upgrade(t,n)?!0:void(n&&a(t))}function r(e,t){b(e,function(e){return n(e,t)?!0:void 0})}function o(e){S.push(e),_||(_=!0,setTimeout(i))}function i(){_=!1;for(var e,t=S,n=0,r=t.length;r>n&&(e=t[n]);n++)e();S=[]}function a(e){E?o(function(){s(e)}):s(e)}function s(e){e.__upgraded__&&!e.__attached&&(e.__attached=!0,e.attachedCallback&&e.attachedCallback())}function c(e){l(e),b(e,function(e){l(e)})}function l(e){E?o(function(){u(e)}):u(e)}function u(e){e.__upgraded__&&e.__attached&&(e.__attached=!1,e.detachedCallback&&e.detachedCallback())}function d(e){for(var t=e,n=window.wrap(document);t;){if(t==n)return!0;t=t.parentNode||t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host}}function p(e){if(e.shadowRoot&&!e.shadowRoot.__watched){g.dom&&console.log("watching shadow-root for: ",e.localName);for(var t=e.shadowRoot;t;)m(t),t=t.olderShadowRoot}}function h(e,n){if(g.dom){var r=n[0];if(r&&"childList"===r.type&&r.addedNodes&&r.addedNodes){for(var o=r.addedNodes[0];o&&o!==document&&!o.host;)o=o.parentNode;var i=o&&(o.URL||o._URL||o.host&&o.host.localName)||"";i=i.split("/?").shift().split("/").pop()}console.group("mutations (%d) [%s]",n.length,i||"")}var a=d(e);n.forEach(function(e){"childList"===e.type&&(T(e.addedNodes,function(e){e.localName&&t(e,a)}),T(e.removedNodes,function(e){e.localName&&c(e)}))}),g.dom&&console.groupEnd()}function f(e){for(e=window.wrap(e),e||(e=window.wrap(document));e.parentNode;)e=e.parentNode;var t=e.__observer;t&&(h(e,t.takeRecords()),i())}function m(e){if(!e.__observer){var t=new MutationObserver(h.bind(this,e));t.observe(e,{childList:!0,subtree:!0}),e.__observer=t}}function w(e){e=window.wrap(e),g.dom&&console.group("upgradeDocument: ",e.baseURI.split("/").pop());var n=e===window.wrap(document);t(e,n),m(e),g.dom&&console.groupEnd()}function v(e){y(e,w)}var g=e.flags,b=e.forSubtree,y=e.forDocumentTree,E=window.MutationObserver._isPolyfilled&&g["throttle-attached"];e.hasPolyfillMutations=E,e.hasThrottledAttached=E;var _=!1,S=[],T=Array.prototype.forEach.call.bind(Array.prototype.forEach),M=Element.prototype.createShadowRoot;M&&(Element.prototype.createShadowRoot=function(){var e=M.call(this);return window.CustomElements.watchShadow(this),e}),e.watchShadow=p,e.upgradeDocumentTree=v,e.upgradeDocument=w,e.upgradeSubtree=r,e.upgradeAll=t,e.attached=a,e.takeRecords=f}),window.CustomElements.addModule(function(e){function t(t,r){if("template"===t.localName&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t),!t.__upgraded__&&t.nodeType===Node.ELEMENT_NODE){var o=t.getAttribute("is"),i=e.getRegisteredDefinition(t.localName)||e.getRegisteredDefinition(o);if(i&&(o&&i.tag==t.localName||!o&&!i["extends"]))return n(t,i,r)}}function n(t,n,o){return a.upgrade&&console.group("upgrade:",t.localName),n.is&&t.setAttribute("is",n.is),r(t,n),t.__upgraded__=!0,i(t),o&&e.attached(t),e.upgradeSubtree(t,o),a.upgrade&&console.groupEnd(),t}function r(e,t){Object.__proto__?e.__proto__=t.prototype:(o(e,t.prototype,t["native"]),e.__proto__=t.prototype)}function o(e,t,n){for(var r={},o=t;o!==n&&o!==HTMLElement.prototype;){for(var i,a=Object.getOwnPropertyNames(o),s=0;i=a[s];s++)r[i]||(Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i)),r[i]=1);o=Object.getPrototypeOf(o)}}function i(e){e.createdCallback&&e.createdCallback()}var a=e.flags;e.upgrade=t,e.upgradeWithDefinition=n,e.implementPrototype=r}),window.CustomElements.addModule(function(e){function t(t,r){var c=r||{};if(!t)throw new Error("document.registerElement: first argument `name` must not be empty");if(t.indexOf("-")<0)throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '"+String(t)+"'.");if(o(t))throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '"+String(t)+"'. The type name is invalid.");if(l(t))throw new Error("DuplicateDefinitionError: a type with name '"+String(t)+"' is already registered");return c.prototype||(c.prototype=Object.create(HTMLElement.prototype)),c.__name=t.toLowerCase(),c["extends"]&&(c["extends"]=c["extends"].toLowerCase()),c.lifecycle=c.lifecycle||{},c.ancestry=i(c["extends"]),a(c),s(c),n(c.prototype),u(c.__name,c),c.ctor=d(c),c.ctor.prototype=c.prototype,c.prototype.constructor=c.ctor,e.ready&&w(document),c.ctor}function n(e){if(!e.setAttribute._polyfilled){var t=e.setAttribute;e.setAttribute=function(e,n){r.call(this,e,n,t)};var n=e.removeAttribute;e.removeAttribute=function(e){r.call(this,e,null,n)},e.setAttribute._polyfilled=!0}}function r(e,t,n){e=e.toLowerCase();var r=this.getAttribute(e);n.apply(this,arguments);var o=this.getAttribute(e);this.attributeChangedCallback&&o!==r&&this.attributeChangedCallback(e,r,o)}function o(e){for(var t=0;t<E.length;t++)if(e===E[t])return!0}function i(e){var t=l(e);return t?i(t["extends"]).concat([t]):[]}function a(e){for(var t,n=e["extends"],r=0;t=e.ancestry[r];r++)n=t.is&&t.tag;e.tag=n||e.__name,n&&(e.is=e.__name)}function s(e){if(!Object.__proto__){var t=HTMLElement.prototype;if(e.is){var n=document.createElement(e.tag);t=Object.getPrototypeOf(n)}for(var r,o=e.prototype,i=!1;o;)o==t&&(i=!0),r=Object.getPrototypeOf(o),r&&(o.__proto__=r),o=r;i||console.warn(e.tag+" prototype not found in prototype chain for "+e.is),e["native"]=t}}function c(e){return g(T(e.tag),e)}function l(e){return e?_[e.toLowerCase()]:void 0}function u(e,t){_[e]=t}function d(e){return function(){return c(e)}}function p(e,t,n){return e===S?h(t,n):M(e,t)}function h(e,t){e&&(e=e.toLowerCase()),t&&(t=t.toLowerCase());var n=l(t||e);if(n){if(e==n.tag&&t==n.is)return new n.ctor;if(!t&&!n.is)return new n.ctor}var r;return t?(r=h(e),r.setAttribute("is",t),r):(r=T(e),e.indexOf("-")>=0&&b(r,HTMLElement),r)}function f(e,t){var n=e[t];e[t]=function(){var e=n.apply(this,arguments);return v(e),e}}var m,w=(e.isIE,e.upgradeDocumentTree),v=e.upgradeAll,g=e.upgradeWithDefinition,b=e.implementPrototype,y=e.useNative,E=["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"],_={},S="http://www.w3.org/1999/xhtml",T=document.createElement.bind(document),M=document.createElementNS.bind(document);m=Object.__proto__||y?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;for(var n=e;n;){if(n===t.prototype)return!0;n=n.__proto__}return!1},f(Node.prototype,"cloneNode"),f(document,"importNode"),document.registerElement=t,document.createElement=h,document.createElementNS=p,e.registry=_,e["instanceof"]=m,e.reservedTagList=E,e.getRegisteredDefinition=l,document.register=document.registerElement}),function(e){function t(){i(window.wrap(document)),window.CustomElements.ready=!0;var e=window.requestAnimationFrame||function(e){setTimeout(e,16)};e(function(){setTimeout(function(){window.CustomElements.readyTime=Date.now(),window.HTMLImports&&(window.CustomElements.elapsed=window.CustomElements.readyTime-window.HTMLImports.readyTime),document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})})}var n=e.useNative,r=e.initializeModules;e.isIE;if(n){var o=function(){};e.watchShadow=o,e.upgrade=o,e.upgradeAll=o,e.upgradeDocumentTree=o,e.upgradeSubtree=o,e.takeRecords=o,e["instanceof"]=function(e,t){return e instanceof t}}else r();var i=e.upgradeDocumentTree,a=e.upgradeDocument;if(window.wrap||(window.ShadowDOMPolyfill?(window.wrap=window.ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=window.ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(e){return e}),window.HTMLImports&&(window.HTMLImports.__importsParsingHook=function(e){e["import"]&&a(wrap(e["import"]))}),"complete"===document.readyState||e.flags.eager)t();else if("interactive"!==document.readyState||window.attachEvent||window.HTMLImports&&!window.HTMLImports.ready){var s=window.HTMLImports&&!window.HTMLImports.ready?"HTMLImportsLoaded":"DOMContentLoaded";window.addEventListener(s,t)}else t()}(window.CustomElements),function(e){Function.prototype.bind||(Function.prototype.bind=function(e){var t=this,n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(e,r)}})}(window.WebComponents),function(e){var t=document.createElement("style");t.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var n=document.querySelector("head");n.insertBefore(t,n.firstChild)}(window.WebComponents),function(e){window.Platform=e}(window.WebComponents);
var polymer;
(function (polymer) {
    function createEs6PolymerBase() {
        var pb = function () { };
        window["polymer"]["Base"] = pb;
        pb["create"] = function () {
            throw "element not yet registered in Polymer";
        };
        pb["register"] = function (dontRegister) {
            if (dontRegister === true)
                polymer.createClass(this);
            else
                polymer.createElement(this);
        };
    }
    polymer.createEs6PolymerBase = createEs6PolymerBase;
    function prepareForRegistration(elementClass) {
        function copyMembers(dest, source) {
            if (source === undefined || source === null)
                return;
            Object.keys(source).map(function (member) {
                if (!dest.hasOwnProperty(member))
                    dest[member] = source[member];
            });
            copyMembers(dest, source.__proto__);
        }
        if (elementClass.prototype.is === undefined) {
            var proto = elementClass.prototype;
            var instance = new elementClass();
            if (!instance.is) {
                throw new Error("no name for " + elementClass);
            }
            proto.is = instance.is;
            if (instance.extends) {
                proto.extends = instance.extends;
            }
            if (instance.properties) {
                proto.properties = instance.properties;
            }
            if (instance.listeners) {
                proto.listeners = instance.listeners;
            }
            if (instance.observers) {
                proto.observers = instance.observers;
            }
            if (instance.behaviors) {
                proto.behaviors = instance.behaviors;
            }
            if (instance.hostAttributes) {
                proto.hostAttributes = instance.hostAttributes;
            }
            if (instance.style) {
                proto.style = instance.style;
            }
            if (instance.template) {
                proto.template = instance.template;
            }
        }
        var preparedElement = elementClass.prototype;
        preparedElement["$custom_cons"] = function () {
            var args = this.$custom_cons_args;
            elementClass.apply(this, args);
        };
        preparedElement["$custom_cons_args"] = [];
        if (preparedElement["factoryImpl"] !== undefined) {
            throw "do not use factoryImpl() use constructor() instead";
        }
        else {
            preparedElement["factoryImpl"] = function () {
                this.$custom_cons_args = arguments;
            };
        }
        var attachToFunction = "attached";
        var oldFunction = preparedElement[attachToFunction];
        preparedElement[attachToFunction] = function () {
            this.$custom_cons();
            if (oldFunction !== undefined)
                oldFunction.apply(this);
        };
        copyMembers(preparedElement, elementClass.prototype.__proto__);
        return preparedElement;
    }
    polymer.prepareForRegistration = prepareForRegistration;
    function createDomModule(definition) {
        var domModule = document.createElement('dom-module');
        var proto = definition.prototype;
        domModule.id = proto.is;
        var html = "";
        if (proto.style !== undefined)
            html += "<style>" + proto.style + "</style>";
        if (proto.template !== undefined)
            html += "<template>" + proto.template + "</template>";
        domModule.innerHTML = html;
        domModule.createdCallback();
    }
    polymer.createDomModule = createDomModule;
    function createElement(element) {
        if (polymer.isRegistered(element)) {
            throw "element already registered in Polymer";
        }
        if ((element.prototype).template !== undefined || (element.prototype).style !== undefined) {
            polymer.createDomModule(element);
        }
        var maker = Polymer(polymer.prepareForRegistration(element));
        element["create"] = function () {
            var newOb = Object.create(maker.prototype);
            return maker.apply(newOb, arguments);
        };
        return maker;
    }
    polymer.createElement = createElement;
    function createClass(element) {
        if (polymer.isRegistered(element)) {
            throw "element already registered in Polymer";
        }
        if ((element.prototype).template !== undefined || (element.prototype).style !== undefined) {
            polymer.createDomModule(element);
        }
        var maker = Polymer.Class(polymer.prepareForRegistration(element));
        element["create"] = function () {
            var newOb = Object.create(maker.prototype);
            return maker.apply(newOb, arguments);
        };
        return maker;
    }
    polymer.createClass = createClass;
    function isRegistered(element) {
        return (element.prototype).$custom_cons !== undefined;
    }
    polymer.isRegistered = isRegistered;
})(polymer || (polymer = {})); 
polymer.createEs6PolymerBase();
function component(tagname, extendsTag) {
    return function (target) {
        target.prototype["is"] = tagname;
        if (extendsTag !== undefined) {
            target.prototype["extends"] = extendsTag;
        }
    };
}
function extend(tagname) {
    return function (target) {
        target.prototype["extends"] = tagname;
    };
}
function template(templateString) {
    return function (target) {
        target.prototype["template"] = templateString;
    };
}
function style(styleString) {
    return function (target) {
        target.prototype["style"] = styleString;
    };
}
function hostAttributes(attributes) {
    return function (target) {
        target.prototype["hostAttributes"] = attributes;
    };
}
function property(ob) {
    return function (target, propertyKey) {
        target.properties = target.properties || {};
        if (typeof (target[propertyKey]) === "function") {
            var params = ob["computed"];
            var getterName = "get_computed_" + propertyKey;
            ob["computed"] = getterName + "(" + params + ")";
            target.properties[propertyKey] = ob;
            target[getterName] = target[propertyKey];
        }
        else {
            target.properties[propertyKey] = ob || {};
        }
    };
}
function computed(ob) {
    return function (target, computedFuncName) {
        target.properties = target.properties || {};
        var propOb = ob || {};
        var getterName = "get_computed_" + computedFuncName;
        var funcText = target[computedFuncName].toString();
        var start = funcText.indexOf("(");
        var end = funcText.indexOf(")");
        var propertiesList = funcText.substring(start + 1, end);
        propOb["computed"] = getterName + "(" + propertiesList + ")";
        target.properties[computedFuncName] = propOb;
        target[getterName] = target[computedFuncName];
    };
}
function listen(eventName) {
    return function (target, propertyKey) {
        target.listeners = target.listeners || {};
        target.listeners[eventName] = propertyKey;
    };
}
function behavior(behaviorObject) {
    return function (target) {
        if (typeof (target) === "function") {
            target.prototype["behaviors"] = target.prototype["behaviors"] || [];
            var beObject = behaviorObject.prototype === undefined ? behaviorObject : behaviorObject.prototype;
            target.prototype["behaviors"].push(beObject);
        }
        else {
            target.behaviors = target.behaviors || [];
            var beObject = behaviorObject.prototype === undefined ? behaviorObject : behaviorObject.prototype;
            target.behaviors.push(beObject);
        }
    };
}
function observe(observedProps) {
    if (observedProps.indexOf(",") > 0 || observedProps.indexOf(".") > 0) {
        return function (target, observerFuncName) {
            target.observers = target.observers || [];
            target.observers.push(observerFuncName + "(" + observedProps + ")");
        };
    }
    else {
        return function (target, observerName) {
            target.properties = target.properties || {};
            target.properties[observedProps] = target.properties[observedProps] || {};
            target.properties[observedProps].observer = observerName;
        };
    }
}

(function () {
function resolve() {
document.body.removeAttribute('unresolved');
}
if (window.WebComponents) {
addEventListener('WebComponentsReady', resolve);
} else {
if (document.readyState === 'interactive' || document.readyState === 'complete') {
resolve();
} else {
addEventListener('DOMContentLoaded', resolve);
}
}
}());
window.Polymer = {
Settings: function () {
var settings = window.Polymer || {};
var parts = location.search.slice(1).split('&');
for (var i = 0, o; i < parts.length && (o = parts[i]); i++) {
o = o.split('=');
o[0] && (settings[o[0]] = o[1] || true);
}
settings.wantShadow = settings.dom === 'shadow';
settings.hasShadow = Boolean(Element.prototype.createShadowRoot);
settings.nativeShadow = settings.hasShadow && !window.ShadowDOMPolyfill;
settings.useShadow = settings.wantShadow && settings.hasShadow;
settings.hasNativeImports = Boolean('import' in document.createElement('link'));
settings.useNativeImports = settings.hasNativeImports;
settings.useNativeCustomElements = !window.CustomElements || window.CustomElements.useNative;
settings.useNativeShadow = settings.useShadow && settings.nativeShadow;
settings.usePolyfillProto = !settings.useNativeCustomElements && !Object.__proto__;
return settings;
}()
};
(function () {
var userPolymer = window.Polymer;
window.Polymer = function (prototype) {
if (typeof prototype === 'function') {
prototype = prototype.prototype;
}
if (!prototype) {
prototype = {};
}
var factory = desugar(prototype);
prototype = factory.prototype;
var options = { prototype: prototype };
if (prototype.extends) {
options.extends = prototype.extends;
}
Polymer.telemetry._registrate(prototype);
document.registerElement(prototype.is, options);
return factory;
};
var desugar = function (prototype) {
var base = Polymer.Base;
if (prototype.extends) {
base = Polymer.Base._getExtendedPrototype(prototype.extends);
}
prototype = Polymer.Base.chainObject(prototype, base);
prototype.registerCallback();
return prototype.constructor;
};
if (userPolymer) {
for (var i in userPolymer) {
Polymer[i] = userPolymer[i];
}
}
Polymer.Class = desugar;
}());
Polymer.telemetry = {
registrations: [],
_regLog: function (prototype) {
console.log('[' + prototype.is + ']: registered');
},
_registrate: function (prototype) {
this.registrations.push(prototype);
Polymer.log && this._regLog(prototype);
},
dumpRegistrations: function () {
this.registrations.forEach(this._regLog);
}
};
Object.defineProperty(window, 'currentImport', {
enumerable: true,
configurable: true,
get: function () {
return (document._currentScript || document.currentScript).ownerDocument;
}
});
Polymer.RenderStatus = {
_ready: false,
_callbacks: [],
whenReady: function (cb) {
if (this._ready) {
cb();
} else {
this._callbacks.push(cb);
}
},
_makeReady: function () {
this._ready = true;
for (var i = 0; i < this._callbacks.length; i++) {
this._callbacks[i]();
}
this._callbacks = [];
},
_catchFirstRender: function () {
requestAnimationFrame(function () {
Polymer.RenderStatus._makeReady();
});
},
_afterNextRenderQueue: [],
_waitingNextRender: false,
afterNextRender: function (element, fn, args) {
this._watchNextRender();
this._afterNextRenderQueue.push([
element,
fn,
args
]);
},
_watchNextRender: function () {
if (!this._waitingNextRender) {
this._waitingNextRender = true;
var fn = function () {
Polymer.RenderStatus._flushNextRender();
};
if (!this._ready) {
this.whenReady(fn);
} else {
requestAnimationFrame(fn);
}
}
},
_flushNextRender: function () {
var self = this;
setTimeout(function () {
self._flushRenderCallbacks(self._afterNextRenderQueue);
self._afterNextRenderQueue = [];
self._waitingNextRender = false;
});
},
_flushRenderCallbacks: function (callbacks) {
for (var i = 0, h; i < callbacks.length; i++) {
h = callbacks[i];
h[1].apply(h[0], h[2] || Polymer.nar);
}
}
};
if (window.HTMLImports) {
HTMLImports.whenReady(function () {
Polymer.RenderStatus._catchFirstRender();
});
} else {
Polymer.RenderStatus._catchFirstRender();
}
Polymer.ImportStatus = Polymer.RenderStatus;
Polymer.ImportStatus.whenLoaded = Polymer.ImportStatus.whenReady;
(function () {
'use strict';
var settings = Polymer.Settings;
Polymer.Base = {
__isPolymerInstance__: true,
_addFeature: function (feature) {
this.extend(this, feature);
},
registerCallback: function () {
this._desugarBehaviors();
this._doBehavior('beforeRegister');
this._registerFeatures();
if (!settings.lazyRegister) {
this.ensureRegisterFinished();
}
},
createdCallback: function () {
if (!this.__hasRegisterFinished) {
this._ensureRegisterFinished(this.__proto__);
}
Polymer.telemetry.instanceCount++;
this.root = this;
this._doBehavior('created');
this._initFeatures();
},
ensureRegisterFinished: function () {
this._ensureRegisterFinished(this);
},
_ensureRegisterFinished: function (proto) {
if (proto.__hasRegisterFinished !== proto.is) {
proto.__hasRegisterFinished = proto.is;
if (proto._finishRegisterFeatures) {
proto._finishRegisterFeatures();
}
proto._doBehavior('registered');
}
},
attachedCallback: function () {
var self = this;
Polymer.RenderStatus.whenReady(function () {
self.isAttached = true;
self._doBehavior('attached');
});
},
detachedCallback: function () {
this.isAttached = false;
this._doBehavior('detached');
},
attributeChangedCallback: function (name, oldValue, newValue) {
this._attributeChangedImpl(name);
this._doBehavior('attributeChanged', [
name,
oldValue,
newValue
]);
},
_attributeChangedImpl: function (name) {
this._setAttributeToProperty(this, name);
},
extend: function (prototype, api) {
if (prototype && api) {
var n$ = Object.getOwnPropertyNames(api);
for (var i = 0, n; i < n$.length && (n = n$[i]); i++) {
this.copyOwnProperty(n, api, prototype);
}
}
return prototype || api;
},
mixin: function (target, source) {
for (var i in source) {
target[i] = source[i];
}
return target;
},
copyOwnProperty: function (name, source, target) {
var pd = Object.getOwnPropertyDescriptor(source, name);
if (pd) {
Object.defineProperty(target, name, pd);
}
},
_log: console.log.apply.bind(console.log, console),
_warn: console.warn.apply.bind(console.warn, console),
_error: console.error.apply.bind(console.error, console),
_logf: function () {
return this._logPrefix.concat([this.is]).concat(Array.prototype.slice.call(arguments, 0));
}
};
Polymer.Base._logPrefix = function () {
var color = window.chrome || /firefox/i.test(navigator.userAgent);
return color ? [
'%c[%s::%s]:',
'font-weight: bold; background-color:#EEEE00;'
] : ['[%s::%s]:'];
}();
Polymer.Base.chainObject = function (object, inherited) {
if (object && inherited && object !== inherited) {
if (!Object.__proto__) {
object = Polymer.Base.extend(Object.create(inherited), object);
}
object.__proto__ = inherited;
}
return object;
};
Polymer.Base = Polymer.Base.chainObject(Polymer.Base, HTMLElement.prototype);
if (window.CustomElements) {
Polymer.instanceof = CustomElements.instanceof;
} else {
Polymer.instanceof = function (obj, ctor) {
return obj instanceof ctor;
};
}
Polymer.isInstance = function (obj) {
return Boolean(obj && obj.__isPolymerInstance__);
};
Polymer.telemetry.instanceCount = 0;
}());
(function () {
var modules = {};
var lcModules = {};
var findModule = function (id) {
return modules[id] || lcModules[id.toLowerCase()];
};
var DomModule = function () {
return document.createElement('dom-module');
};
DomModule.prototype = Object.create(HTMLElement.prototype);
Polymer.Base.extend(DomModule.prototype, {
constructor: DomModule,
createdCallback: function () {
this.register();
},
register: function (id) {
id = id || this.id || this.getAttribute('name') || this.getAttribute('is');
if (id) {
this.id = id;
modules[id] = this;
lcModules[id.toLowerCase()] = this;
}
},
import: function (id, selector) {
if (id) {
var m = findModule(id);
if (!m) {
forceDomModulesUpgrade();
m = findModule(id);
}
if (m && selector) {
m = m.querySelector(selector);
}
return m;
}
}
});
var cePolyfill = window.CustomElements && !CustomElements.useNative;
document.registerElement('dom-module', DomModule);
function forceDomModulesUpgrade() {
if (cePolyfill) {
var script = document._currentScript || document.currentScript;
var doc = script && script.ownerDocument || document;
var modules = doc.querySelectorAll('dom-module');
for (var i = modules.length - 1, m; i >= 0 && (m = modules[i]); i--) {
if (m.__upgraded__) {
return;
} else {
CustomElements.upgrade(m);
}
}
}
}
}());
Polymer.Base._addFeature({
_prepIs: function () {
if (!this.is) {
var module = (document._currentScript || document.currentScript).parentNode;
if (module.localName === 'dom-module') {
var id = module.id || module.getAttribute('name') || module.getAttribute('is');
this.is = id;
}
}
if (this.is) {
this.is = this.is.toLowerCase();
}
}
});
Polymer.Base._addFeature({
behaviors: [],
_desugarBehaviors: function () {
if (this.behaviors.length) {
this.behaviors = this._desugarSomeBehaviors(this.behaviors);
}
},
_desugarSomeBehaviors: function (behaviors) {
var behaviorSet = [];
behaviors = this._flattenBehaviorsList(behaviors);
for (var i = behaviors.length - 1; i >= 0; i--) {
var b = behaviors[i];
if (behaviorSet.indexOf(b) === -1) {
this._mixinBehavior(b);
behaviorSet.unshift(b);
}
}
return behaviorSet;
},
_flattenBehaviorsList: function (behaviors) {
var flat = [];
for (var i = 0; i < behaviors.length; i++) {
var b = behaviors[i];
if (b instanceof Array) {
flat = flat.concat(this._flattenBehaviorsList(b));
} else if (b) {
flat.push(b);
} else {
this._warn(this._logf('_flattenBehaviorsList', 'behavior is null, check for missing or 404 import'));
}
}
return flat;
},
_mixinBehavior: function (b) {
var n$ = Object.getOwnPropertyNames(b);
for (var i = 0, n; i < n$.length && (n = n$[i]); i++) {
if (!Polymer.Base._behaviorProperties[n] && !this.hasOwnProperty(n)) {
this.copyOwnProperty(n, b, this);
}
}
},
_prepBehaviors: function () {
this._prepFlattenedBehaviors(this.behaviors);
},
_prepFlattenedBehaviors: function (behaviors) {
for (var i = 0, l = behaviors.length; i < l; i++) {
this._prepBehavior(behaviors[i]);
}
this._prepBehavior(this);
},
_doBehavior: function (name, args) {
for (var i = 0; i < this.behaviors.length; i++) {
this._invokeBehavior(this.behaviors[i], name, args);
}
this._invokeBehavior(this, name, args);
},
_invokeBehavior: function (b, name, args) {
var fn = b[name];
if (fn) {
fn.apply(this, args || Polymer.nar);
}
},
_marshalBehaviors: function () {
for (var i = 0; i < this.behaviors.length; i++) {
this._marshalBehavior(this.behaviors[i]);
}
this._marshalBehavior(this);
}
});
Polymer.Base._behaviorProperties = {
hostAttributes: true,
beforeRegister: true,
registered: true,
properties: true,
observers: true,
listeners: true,
created: true,
attached: true,
detached: true,
attributeChanged: true,
ready: true
};
Polymer.Base._addFeature({
_getExtendedPrototype: function (tag) {
return this._getExtendedNativePrototype(tag);
},
_nativePrototypes: {},
_getExtendedNativePrototype: function (tag) {
var p = this._nativePrototypes[tag];
if (!p) {
var np = this.getNativePrototype(tag);
p = this.extend(Object.create(np), Polymer.Base);
this._nativePrototypes[tag] = p;
}
return p;
},
getNativePrototype: function (tag) {
return Object.getPrototypeOf(document.createElement(tag));
}
});
Polymer.Base._addFeature({
_prepConstructor: function () {
this._factoryArgs = this.extends ? [
this.extends,
this.is
] : [this.is];
var ctor = function () {
return this._factory(arguments);
};
if (this.hasOwnProperty('extends')) {
ctor.extends = this.extends;
}
Object.defineProperty(this, 'constructor', {
value: ctor,
writable: true,
configurable: true
});
ctor.prototype = this;
},
_factory: function (args) {
var elt = document.createElement.apply(document, this._factoryArgs);
if (this.factoryImpl) {
this.factoryImpl.apply(elt, args);
}
return elt;
}
});
Polymer.nob = Object.create(null);
Polymer.Base._addFeature({
properties: {},
getPropertyInfo: function (property) {
var info = this._getPropertyInfo(property, this.properties);
if (!info) {
for (var i = 0; i < this.behaviors.length; i++) {
info = this._getPropertyInfo(property, this.behaviors[i].properties);
if (info) {
return info;
}
}
}
return info || Polymer.nob;
},
_getPropertyInfo: function (property, properties) {
var p = properties && properties[property];
if (typeof p === 'function') {
p = properties[property] = { type: p };
}
if (p) {
p.defined = true;
}
return p;
},
_prepPropertyInfo: function () {
this._propertyInfo = {};
for (var i = 0; i < this.behaviors.length; i++) {
this._addPropertyInfo(this._propertyInfo, this.behaviors[i].properties);
}
this._addPropertyInfo(this._propertyInfo, this.properties);
this._addPropertyInfo(this._propertyInfo, this._propertyEffects);
},
_addPropertyInfo: function (target, source) {
if (source) {
var t, s;
for (var i in source) {
t = target[i];
s = source[i];
if (i[0] === '_' && !s.readOnly) {
continue;
}
if (!target[i]) {
target[i] = {
type: typeof s === 'function' ? s : s.type,
readOnly: s.readOnly,
attribute: Polymer.CaseMap.camelToDashCase(i)
};
} else {
if (!t.type) {
t.type = s.type;
}
if (!t.readOnly) {
t.readOnly = s.readOnly;
}
}
}
}
}
});
Polymer.CaseMap = {
_caseMap: {},
_rx: {
dashToCamel: /-[a-z]/g,
camelToDash: /([A-Z])/g
},
dashToCamelCase: function (dash) {
return this._caseMap[dash] || (this._caseMap[dash] = dash.indexOf('-') < 0 ? dash : dash.replace(this._rx.dashToCamel, function (m) {
return m[1].toUpperCase();
}));
},
camelToDashCase: function (camel) {
return this._caseMap[camel] || (this._caseMap[camel] = camel.replace(this._rx.camelToDash, '-$1').toLowerCase());
}
};
Polymer.Base._addFeature({
_addHostAttributes: function (attributes) {
if (!this._aggregatedAttributes) {
this._aggregatedAttributes = {};
}
if (attributes) {
this.mixin(this._aggregatedAttributes, attributes);
}
},
_marshalHostAttributes: function () {
if (this._aggregatedAttributes) {
this._applyAttributes(this, this._aggregatedAttributes);
}
},
_applyAttributes: function (node, attr$) {
for (var n in attr$) {
if (!this.hasAttribute(n) && n !== 'class') {
var v = attr$[n];
this.serializeValueToAttribute(v, n, this);
}
}
},
_marshalAttributes: function () {
this._takeAttributesToModel(this);
},
_takeAttributesToModel: function (model) {
if (this.hasAttributes()) {
for (var i in this._propertyInfo) {
var info = this._propertyInfo[i];
if (this.hasAttribute(info.attribute)) {
this._setAttributeToProperty(model, info.attribute, i, info);
}
}
}
},
_setAttributeToProperty: function (model, attribute, property, info) {
if (!this._serializing) {
property = property || Polymer.CaseMap.dashToCamelCase(attribute);
info = info || this._propertyInfo && this._propertyInfo[property];
if (info && !info.readOnly) {
var v = this.getAttribute(attribute);
model[property] = this.deserialize(v, info.type);
}
}
},
_serializing: false,
reflectPropertyToAttribute: function (property, attribute, value) {
this._serializing = true;
value = value === undefined ? this[property] : value;
this.serializeValueToAttribute(value, attribute || Polymer.CaseMap.camelToDashCase(property));
this._serializing = false;
},
serializeValueToAttribute: function (value, attribute, node) {
var str = this.serialize(value);
node = node || this;
if (str === undefined) {
node.removeAttribute(attribute);
} else {
node.setAttribute(attribute, str);
}
},
deserialize: function (value, type) {
switch (type) {
case Number:
value = Number(value);
break;
case Boolean:
value = value != null;
break;
case Object:
try {
value = JSON.parse(value);
} catch (x) {
}
break;
case Array:
try {
value = JSON.parse(value);
} catch (x) {
value = null;
console.warn('Polymer::Attributes: couldn`t decode Array as JSON');
}
break;
case Date:
value = new Date(value);
break;
case String:
default:
break;
}
return value;
},
serialize: function (value) {
switch (typeof value) {
case 'boolean':
return value ? '' : undefined;
case 'object':
if (value instanceof Date) {
return value.toString();
} else if (value) {
try {
return JSON.stringify(value);
} catch (x) {
return '';
}
}
default:
return value != null ? value : undefined;
}
}
});
Polymer.version = '1.4.0';
Polymer.Base._addFeature({
_registerFeatures: function () {
this._prepIs();
this._prepBehaviors();
this._prepConstructor();
this._prepPropertyInfo();
},
_prepBehavior: function (b) {
this._addHostAttributes(b.hostAttributes);
},
_marshalBehavior: function (b) {
},
_initFeatures: function () {
this._marshalHostAttributes();
this._marshalBehaviors();
}
});
Polymer.Base._addFeature({
_prepTemplate: function () {
if (this._template === undefined) {
this._template = Polymer.DomModule.import(this.is, 'template');
}
if (this._template && this._template.hasAttribute('is')) {
this._warn(this._logf('_prepTemplate', 'top-level Polymer template ' + 'must not be a type-extension, found', this._template, 'Move inside simple <template>.'));
}
if (this._template && !this._template.content && window.HTMLTemplateElement && HTMLTemplateElement.decorate) {
HTMLTemplateElement.decorate(this._template);
}
},
_stampTemplate: function () {
if (this._template) {
this.root = this.instanceTemplate(this._template);
}
},
instanceTemplate: function (template) {
var dom = document.importNode(template._content || template.content, true);
return dom;
}
});
(function () {
var baseAttachedCallback = Polymer.Base.attachedCallback;
Polymer.Base._addFeature({
_hostStack: [],
ready: function () {
},
_registerHost: function (host) {
this.dataHost = host = host || Polymer.Base._hostStack[Polymer.Base._hostStack.length - 1];
if (host && host._clients) {
host._clients.push(this);
}
this._clients = null;
this._clientsReadied = false;
},
_beginHosting: function () {
Polymer.Base._hostStack.push(this);
if (!this._clients) {
this._clients = [];
}
},
_endHosting: function () {
Polymer.Base._hostStack.pop();
},
_tryReady: function () {
this._readied = false;
if (this._canReady()) {
this._ready();
}
},
_canReady: function () {
return !this.dataHost || this.dataHost._clientsReadied;
},
_ready: function () {
this._beforeClientsReady();
if (this._template) {
this._setupRoot();
this._readyClients();
}
this._clientsReadied = true;
this._clients = null;
this._afterClientsReady();
this._readySelf();
},
_readyClients: function () {
this._beginDistribute();
var c$ = this._clients;
if (c$) {
for (var i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
c._ready();
}
}
this._finishDistribute();
},
_readySelf: function () {
this._doBehavior('ready');
this._readied = true;
if (this._attachedPending) {
this._attachedPending = false;
this.attachedCallback();
}
},
_beforeClientsReady: function () {
},
_afterClientsReady: function () {
},
_beforeAttached: function () {
},
attachedCallback: function () {
if (this._readied) {
this._beforeAttached();
baseAttachedCallback.call(this);
} else {
this._attachedPending = true;
}
}
});
}());
Polymer.ArraySplice = function () {
function newSplice(index, removed, addedCount) {
return {
index: index,
removed: removed,
addedCount: addedCount
};
}
var EDIT_LEAVE = 0;
var EDIT_UPDATE = 1;
var EDIT_ADD = 2;
var EDIT_DELETE = 3;
function ArraySplice() {
}
ArraySplice.prototype = {
calcEditDistances: function (current, currentStart, currentEnd, old, oldStart, oldEnd) {
var rowCount = oldEnd - oldStart + 1;
var columnCount = currentEnd - currentStart + 1;
var distances = new Array(rowCount);
for (var i = 0; i < rowCount; i++) {
distances[i] = new Array(columnCount);
distances[i][0] = i;
}
for (var j = 0; j < columnCount; j++)
distances[0][j] = j;
for (i = 1; i < rowCount; i++) {
for (j = 1; j < columnCount; j++) {
if (this.equals(current[currentStart + j - 1], old[oldStart + i - 1]))
distances[i][j] = distances[i - 1][j - 1];
else {
var north = distances[i - 1][j] + 1;
var west = distances[i][j - 1] + 1;
distances[i][j] = north < west ? north : west;
}
}
}
return distances;
},
spliceOperationsFromEditDistances: function (distances) {
var i = distances.length - 1;
var j = distances[0].length - 1;
var current = distances[i][j];
var edits = [];
while (i > 0 || j > 0) {
if (i == 0) {
edits.push(EDIT_ADD);
j--;
continue;
}
if (j == 0) {
edits.push(EDIT_DELETE);
i--;
continue;
}
var northWest = distances[i - 1][j - 1];
var west = distances[i - 1][j];
var north = distances[i][j - 1];
var min;
if (west < north)
min = west < northWest ? west : northWest;
else
min = north < northWest ? north : northWest;
if (min == northWest) {
if (northWest == current) {
edits.push(EDIT_LEAVE);
} else {
edits.push(EDIT_UPDATE);
current = northWest;
}
i--;
j--;
} else if (min == west) {
edits.push(EDIT_DELETE);
i--;
current = west;
} else {
edits.push(EDIT_ADD);
j--;
current = north;
}
}
edits.reverse();
return edits;
},
calcSplices: function (current, currentStart, currentEnd, old, oldStart, oldEnd) {
var prefixCount = 0;
var suffixCount = 0;
var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
if (currentStart == 0 && oldStart == 0)
prefixCount = this.sharedPrefix(current, old, minLength);
if (currentEnd == current.length && oldEnd == old.length)
suffixCount = this.sharedSuffix(current, old, minLength - prefixCount);
currentStart += prefixCount;
oldStart += prefixCount;
currentEnd -= suffixCount;
oldEnd -= suffixCount;
if (currentEnd - currentStart == 0 && oldEnd - oldStart == 0)
return [];
if (currentStart == currentEnd) {
var splice = newSplice(currentStart, [], 0);
while (oldStart < oldEnd)
splice.removed.push(old[oldStart++]);
return [splice];
} else if (oldStart == oldEnd)
return [newSplice(currentStart, [], currentEnd - currentStart)];
var ops = this.spliceOperationsFromEditDistances(this.calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
splice = undefined;
var splices = [];
var index = currentStart;
var oldIndex = oldStart;
for (var i = 0; i < ops.length; i++) {
switch (ops[i]) {
case EDIT_LEAVE:
if (splice) {
splices.push(splice);
splice = undefined;
}
index++;
oldIndex++;
break;
case EDIT_UPDATE:
if (!splice)
splice = newSplice(index, [], 0);
splice.addedCount++;
index++;
splice.removed.push(old[oldIndex]);
oldIndex++;
break;
case EDIT_ADD:
if (!splice)
splice = newSplice(index, [], 0);
splice.addedCount++;
index++;
break;
case EDIT_DELETE:
if (!splice)
splice = newSplice(index, [], 0);
splice.removed.push(old[oldIndex]);
oldIndex++;
break;
}
}
if (splice) {
splices.push(splice);
}
return splices;
},
sharedPrefix: function (current, old, searchLength) {
for (var i = 0; i < searchLength; i++)
if (!this.equals(current[i], old[i]))
return i;
return searchLength;
},
sharedSuffix: function (current, old, searchLength) {
var index1 = current.length;
var index2 = old.length;
var count = 0;
while (count < searchLength && this.equals(current[--index1], old[--index2]))
count++;
return count;
},
calculateSplices: function (current, previous) {
return this.calcSplices(current, 0, current.length, previous, 0, previous.length);
},
equals: function (currentValue, previousValue) {
return currentValue === previousValue;
}
};
return new ArraySplice();
}();
Polymer.domInnerHTML = function () {
var escapeAttrRegExp = /[&\u00A0"]/g;
var escapeDataRegExp = /[&\u00A0<>]/g;
function escapeReplace(c) {
switch (c) {
case '&':
return '&amp;';
case '<':
return '&lt;';
case '>':
return '&gt;';
case '"':
return '&quot;';
case '\xA0':
return '&nbsp;';
}
}
function escapeAttr(s) {
return s.replace(escapeAttrRegExp, escapeReplace);
}
function escapeData(s) {
return s.replace(escapeDataRegExp, escapeReplace);
}
function makeSet(arr) {
var set = {};
for (var i = 0; i < arr.length; i++) {
set[arr[i]] = true;
}
return set;
}
var voidElements = makeSet([
'area',
'base',
'br',
'col',
'command',
'embed',
'hr',
'img',
'input',
'keygen',
'link',
'meta',
'param',
'source',
'track',
'wbr'
]);
var plaintextParents = makeSet([
'style',
'script',
'xmp',
'iframe',
'noembed',
'noframes',
'plaintext',
'noscript'
]);
function getOuterHTML(node, parentNode, composed) {
switch (node.nodeType) {
case Node.ELEMENT_NODE:
var tagName = node.localName;
var s = '<' + tagName;
var attrs = node.attributes;
for (var i = 0, attr; attr = attrs[i]; i++) {
s += ' ' + attr.name + '="' + escapeAttr(attr.value) + '"';
}
s += '>';
if (voidElements[tagName]) {
return s;
}
return s + getInnerHTML(node, composed) + '</' + tagName + '>';
case Node.TEXT_NODE:
var data = node.data;
if (parentNode && plaintextParents[parentNode.localName]) {
return data;
}
return escapeData(data);
case Node.COMMENT_NODE:
return '<!--' + node.data + '-->';
default:
console.error(node);
throw new Error('not implemented');
}
}
function getInnerHTML(node, composed) {
if (node instanceof HTMLTemplateElement)
node = node.content;
var s = '';
var c$ = Polymer.dom(node).childNodes;
for (var i = 0, l = c$.length, child; i < l && (child = c$[i]); i++) {
s += getOuterHTML(child, node, composed);
}
return s;
}
return { getInnerHTML: getInnerHTML };
}();
(function () {
'use strict';
var nativeInsertBefore = Element.prototype.insertBefore;
var nativeAppendChild = Element.prototype.appendChild;
var nativeRemoveChild = Element.prototype.removeChild;
Polymer.TreeApi = {
arrayCopyChildNodes: function (parent) {
var copy = [], i = 0;
for (var n = parent.firstChild; n; n = n.nextSibling) {
copy[i++] = n;
}
return copy;
},
arrayCopyChildren: function (parent) {
var copy = [], i = 0;
for (var n = parent.firstElementChild; n; n = n.nextElementSibling) {
copy[i++] = n;
}
return copy;
},
arrayCopy: function (a$) {
var l = a$.length;
var copy = new Array(l);
for (var i = 0; i < l; i++) {
copy[i] = a$[i];
}
return copy;
}
};
Polymer.TreeApi.Logical = {
hasParentNode: function (node) {
return Boolean(node.__dom && node.__dom.parentNode);
},
hasChildNodes: function (node) {
return Boolean(node.__dom && node.__dom.childNodes !== undefined);
},
getChildNodes: function (node) {
return this.hasChildNodes(node) ? this._getChildNodes(node) : node.childNodes;
},
_getChildNodes: function (node) {
if (!node.__dom.childNodes) {
node.__dom.childNodes = [];
for (var n = node.__dom.firstChild; n; n = n.__dom.nextSibling) {
node.__dom.childNodes.push(n);
}
}
return node.__dom.childNodes;
},
getParentNode: function (node) {
return node.__dom && node.__dom.parentNode !== undefined ? node.__dom.parentNode : node.parentNode;
},
getFirstChild: function (node) {
return node.__dom && node.__dom.firstChild !== undefined ? node.__dom.firstChild : node.firstChild;
},
getLastChild: function (node) {
return node.__dom && node.__dom.lastChild !== undefined ? node.__dom.lastChild : node.lastChild;
},
getNextSibling: function (node) {
return node.__dom && node.__dom.nextSibling !== undefined ? node.__dom.nextSibling : node.nextSibling;
},
getPreviousSibling: function (node) {
return node.__dom && node.__dom.previousSibling !== undefined ? node.__dom.previousSibling : node.previousSibling;
},
getFirstElementChild: function (node) {
return node.__dom && node.__dom.firstChild !== undefined ? this._getFirstElementChild(node) : node.firstElementChild;
},
_getFirstElementChild: function (node) {
var n = node.__dom.firstChild;
while (n && n.nodeType !== Node.ELEMENT_NODE) {
n = n.__dom.nextSibling;
}
return n;
},
getLastElementChild: function (node) {
return node.__dom && node.__dom.lastChild !== undefined ? this._getLastElementChild(node) : node.lastElementChild;
},
_getLastElementChild: function (node) {
var n = node.__dom.lastChild;
while (n && n.nodeType !== Node.ELEMENT_NODE) {
n = n.__dom.previousSibling;
}
return n;
},
getNextElementSibling: function (node) {
return node.__dom && node.__dom.nextSibling !== undefined ? this._getNextElementSibling(node) : node.nextElementSibling;
},
_getNextElementSibling: function (node) {
var n = node.__dom.nextSibling;
while (n && n.nodeType !== Node.ELEMENT_NODE) {
n = n.__dom.nextSibling;
}
return n;
},
getPreviousElementSibling: function (node) {
return node.__dom && node.__dom.previousSibling !== undefined ? this._getPreviousElementSibling(node) : node.previousElementSibling;
},
_getPreviousElementSibling: function (node) {
var n = node.__dom.previousSibling;
while (n && n.nodeType !== Node.ELEMENT_NODE) {
n = n.__dom.previousSibling;
}
return n;
},
saveChildNodes: function (node) {
if (!this.hasChildNodes(node)) {
node.__dom = node.__dom || {};
node.__dom.firstChild = node.firstChild;
node.__dom.lastChild = node.lastChild;
node.__dom.childNodes = [];
for (var n = node.firstChild; n; n = n.nextSibling) {
n.__dom = n.__dom || {};
n.__dom.parentNode = node;
node.__dom.childNodes.push(n);
n.__dom.nextSibling = n.nextSibling;
n.__dom.previousSibling = n.previousSibling;
}
}
},
recordInsertBefore: function (node, container, ref_node) {
container.__dom.childNodes = null;
if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
for (var n = node.firstChild; n; n = n.nextSibling) {
this._linkNode(n, container, ref_node);
}
} else {
this._linkNode(node, container, ref_node);
}
},
_linkNode: function (node, container, ref_node) {
node.__dom = node.__dom || {};
container.__dom = container.__dom || {};
if (ref_node) {
ref_node.__dom = ref_node.__dom || {};
}
node.__dom.previousSibling = ref_node ? ref_node.__dom.previousSibling : container.__dom.lastChild;
if (node.__dom.previousSibling) {
node.__dom.previousSibling.__dom.nextSibling = node;
}
node.__dom.nextSibling = ref_node;
if (node.__dom.nextSibling) {
node.__dom.nextSibling.__dom.previousSibling = node;
}
node.__dom.parentNode = container;
if (ref_node) {
if (ref_node === container.__dom.firstChild) {
container.__dom.firstChild = node;
}
} else {
container.__dom.lastChild = node;
if (!container.__dom.firstChild) {
container.__dom.firstChild = node;
}
}
container.__dom.childNodes = null;
},
recordRemoveChild: function (node, container) {
node.__dom = node.__dom || {};
container.__dom = container.__dom || {};
if (node === container.__dom.firstChild) {
container.__dom.firstChild = node.__dom.nextSibling;
}
if (node === container.__dom.lastChild) {
container.__dom.lastChild = node.__dom.previousSibling;
}
var p = node.__dom.previousSibling;
var n = node.__dom.nextSibling;
if (p) {
p.__dom.nextSibling = n;
}
if (n) {
n.__dom.previousSibling = p;
}
node.__dom.parentNode = node.__dom.previousSibling = node.__dom.nextSibling = undefined;
container.__dom.childNodes = null;
}
};
Polymer.TreeApi.Composed = {
getChildNodes: function (node) {
return Polymer.TreeApi.arrayCopyChildNodes(node);
},
getParentNode: function (node) {
return node.parentNode;
},
clearChildNodes: function (node) {
node.textContent = '';
},
insertBefore: function (parentNode, newChild, refChild) {
return nativeInsertBefore.call(parentNode, newChild, refChild || null);
},
appendChild: function (parentNode, newChild) {
return nativeAppendChild.call(parentNode, newChild);
},
removeChild: function (parentNode, node) {
return nativeRemoveChild.call(parentNode, node);
}
};
}());
Polymer.DomApi = function () {
'use strict';
var Settings = Polymer.Settings;
var TreeApi = Polymer.TreeApi;
var DomApi = function (node) {
this.node = needsToWrap ? DomApi.wrap(node) : node;
};
var needsToWrap = Settings.hasShadow && !Settings.nativeShadow;
DomApi.wrap = window.wrap ? window.wrap : function (node) {
return node;
};
DomApi.prototype = {
flush: function () {
Polymer.dom.flush();
},
deepContains: function (node) {
if (this.node.contains(node)) {
return true;
}
var n = node;
var doc = node.ownerDocument;
while (n && n !== doc && n !== this.node) {
n = Polymer.dom(n).parentNode || n.host;
}
return n === this.node;
},
queryDistributedElements: function (selector) {
var c$ = this.getEffectiveChildNodes();
var list = [];
for (var i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
if (c.nodeType === Node.ELEMENT_NODE && DomApi.matchesSelector.call(c, selector)) {
list.push(c);
}
}
return list;
},
getEffectiveChildNodes: function () {
var list = [];
var c$ = this.childNodes;
for (var i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
if (c.localName === CONTENT) {
var d$ = dom(c).getDistributedNodes();
for (var j = 0; j < d$.length; j++) {
list.push(d$[j]);
}
} else {
list.push(c);
}
}
return list;
},
observeNodes: function (callback) {
if (callback) {
if (!this.observer) {
this.observer = this.node.localName === CONTENT ? new DomApi.DistributedNodesObserver(this) : new DomApi.EffectiveNodesObserver(this);
}
return this.observer.addListener(callback);
}
},
unobserveNodes: function (handle) {
if (this.observer) {
this.observer.removeListener(handle);
}
},
notifyObserver: function () {
if (this.observer) {
this.observer.notify();
}
},
_query: function (matcher, node, halter) {
node = node || this.node;
var list = [];
this._queryElements(TreeApi.Logical.getChildNodes(node), matcher, halter, list);
return list;
},
_queryElements: function (elements, matcher, halter, list) {
for (var i = 0, l = elements.length, c; i < l && (c = elements[i]); i++) {
if (c.nodeType === Node.ELEMENT_NODE) {
if (this._queryElement(c, matcher, halter, list)) {
return true;
}
}
}
},
_queryElement: function (node, matcher, halter, list) {
var result = matcher(node);
if (result) {
list.push(node);
}
if (halter && halter(result)) {
return result;
}
this._queryElements(TreeApi.Logical.getChildNodes(node), matcher, halter, list);
}
};
var CONTENT = DomApi.CONTENT = 'content';
var dom = DomApi.factory = function (node) {
node = node || document;
if (!node.__domApi) {
node.__domApi = new DomApi.ctor(node);
}
return node.__domApi;
};
DomApi.hasApi = function (node) {
return Boolean(node.__domApi);
};
DomApi.ctor = DomApi;
Polymer.dom = function (obj, patch) {
if (obj instanceof Event) {
return Polymer.EventApi.factory(obj);
} else {
return DomApi.factory(obj, patch);
}
};
var p = Element.prototype;
DomApi.matchesSelector = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;
return DomApi;
}();
(function () {
'use strict';
var Settings = Polymer.Settings;
var DomApi = Polymer.DomApi;
var dom = DomApi.factory;
var TreeApi = Polymer.TreeApi;
var getInnerHTML = Polymer.domInnerHTML.getInnerHTML;
var CONTENT = DomApi.CONTENT;
if (Settings.useShadow) {
return;
}
var nativeCloneNode = Element.prototype.cloneNode;
var nativeImportNode = Document.prototype.importNode;
Polymer.Base.extend(DomApi.prototype, {
_lazyDistribute: function (host) {
if (host.shadyRoot && host.shadyRoot._distributionClean) {
host.shadyRoot._distributionClean = false;
Polymer.dom.addDebouncer(host.debounce('_distribute', host._distributeContent));
}
},
appendChild: function (node) {
return this.insertBefore(node);
},
insertBefore: function (node, ref_node) {
if (ref_node && TreeApi.Logical.getParentNode(ref_node) !== this.node) {
throw Error('The ref_node to be inserted before is not a child ' + 'of this node');
}
if (node.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
var parent = TreeApi.Logical.getParentNode(node);
if (parent) {
if (DomApi.hasApi(parent)) {
dom(parent).notifyObserver();
}
this._removeNode(node);
} else {
this._removeOwnerShadyRoot(node);
}
}
if (!this._addNode(node, ref_node)) {
if (ref_node) {
ref_node = ref_node.localName === CONTENT ? this._firstComposedNode(ref_node) : ref_node;
}
var container = this.node._isShadyRoot ? this.node.host : this.node;
if (ref_node) {
TreeApi.Composed.insertBefore(container, node, ref_node);
} else {
TreeApi.Composed.appendChild(container, node);
}
}
this.notifyObserver();
return node;
},
_addNode: function (node, ref_node) {
var root = this.getOwnerRoot();
if (root) {
var ipAdded = this._maybeAddInsertionPoint(node, this.node);
if (!root._invalidInsertionPoints) {
root._invalidInsertionPoints = ipAdded;
}
this._addNodeToHost(root.host, node);
}
if (TreeApi.Logical.hasChildNodes(this.node)) {
TreeApi.Logical.recordInsertBefore(node, this.node, ref_node);
}
var handled = this._maybeDistribute(node) || this.node.shadyRoot;
if (handled) {
if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
while (node.firstChild) {
TreeApi.Composed.removeChild(node, node.firstChild);
}
} else {
var parent = TreeApi.Composed.getParentNode(node);
if (parent) {
TreeApi.Composed.removeChild(parent, node);
}
}
}
return handled;
},
removeChild: function (node) {
if (TreeApi.Logical.getParentNode(node) !== this.node) {
throw Error('The node to be removed is not a child of this node: ' + node);
}
if (!this._removeNode(node)) {
var container = this.node._isShadyRoot ? this.node.host : this.node;
var parent = TreeApi.Composed.getParentNode(node);
if (container === parent) {
TreeApi.Composed.removeChild(container, node);
}
}
this.notifyObserver();
return node;
},
_removeNode: function (node) {
var logicalParent = TreeApi.Logical.hasParentNode(node) && TreeApi.Logical.getParentNode(node);
var distributed;
var root = this._ownerShadyRootForNode(node);
if (logicalParent) {
distributed = dom(node)._maybeDistributeParent();
TreeApi.Logical.recordRemoveChild(node, logicalParent);
if (root && this._removeDistributedChildren(root, node)) {
root._invalidInsertionPoints = true;
this._lazyDistribute(root.host);
}
}
this._removeOwnerShadyRoot(node);
if (root) {
this._removeNodeFromHost(root.host, node);
}
return distributed;
},
replaceChild: function (node, ref_node) {
this.insertBefore(node, ref_node);
this.removeChild(ref_node);
return node;
},
_hasCachedOwnerRoot: function (node) {
return Boolean(node._ownerShadyRoot !== undefined);
},
getOwnerRoot: function () {
return this._ownerShadyRootForNode(this.node);
},
_ownerShadyRootForNode: function (node) {
if (!node) {
return;
}
var root = node._ownerShadyRoot;
if (root === undefined) {
if (node._isShadyRoot) {
root = node;
} else {
var parent = TreeApi.Logical.getParentNode(node);
if (parent) {
root = parent._isShadyRoot ? parent : this._ownerShadyRootForNode(parent);
} else {
root = null;
}
}
if (root || document.documentElement.contains(node)) {
node._ownerShadyRoot = root;
}
}
return root;
},
_maybeDistribute: function (node) {
var fragContent = node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && !node.__noContent && dom(node).querySelector(CONTENT);
var wrappedContent = fragContent && TreeApi.Logical.getParentNode(fragContent).nodeType !== Node.DOCUMENT_FRAGMENT_NODE;
var hasContent = fragContent || node.localName === CONTENT;
if (hasContent) {
var root = this.getOwnerRoot();
if (root) {
this._lazyDistribute(root.host);
}
}
var needsDist = this._nodeNeedsDistribution(this.node);
if (needsDist) {
this._lazyDistribute(this.node);
}
return needsDist || hasContent && !wrappedContent;
},
_maybeAddInsertionPoint: function (node, parent) {
var added;
if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && !node.__noContent) {
var c$ = dom(node).querySelectorAll(CONTENT);
for (var i = 0, n, np, na; i < c$.length && (n = c$[i]); i++) {
np = TreeApi.Logical.getParentNode(n);
if (np === node) {
np = parent;
}
na = this._maybeAddInsertionPoint(n, np);
added = added || na;
}
} else if (node.localName === CONTENT) {
TreeApi.Logical.saveChildNodes(parent);
TreeApi.Logical.saveChildNodes(node);
added = true;
}
return added;
},
_updateInsertionPoints: function (host) {
var i$ = host.shadyRoot._insertionPoints = dom(host.shadyRoot).querySelectorAll(CONTENT);
for (var i = 0, c; i < i$.length; i++) {
c = i$[i];
TreeApi.Logical.saveChildNodes(c);
TreeApi.Logical.saveChildNodes(TreeApi.Logical.getParentNode(c));
}
},
_nodeNeedsDistribution: function (node) {
return node && node.shadyRoot && DomApi.hasInsertionPoint(node.shadyRoot);
},
_addNodeToHost: function (host, node) {
if (host._elementAdd) {
host._elementAdd(node);
}
},
_removeNodeFromHost: function (host, node) {
if (host._elementRemove) {
host._elementRemove(node);
}
},
_removeDistributedChildren: function (root, container) {
var hostNeedsDist;
var ip$ = root._insertionPoints;
for (var i = 0; i < ip$.length; i++) {
var content = ip$[i];
if (this._contains(container, content)) {
var dc$ = dom(content).getDistributedNodes();
for (var j = 0; j < dc$.length; j++) {
hostNeedsDist = true;
var node = dc$[j];
var parent = TreeApi.Composed.getParentNode(node);
if (parent) {
TreeApi.Composed.removeChild(parent, node);
}
}
}
}
return hostNeedsDist;
},
_contains: function (container, node) {
while (node) {
if (node == container) {
return true;
}
node = TreeApi.Logical.getParentNode(node);
}
},
_removeOwnerShadyRoot: function (node) {
if (this._hasCachedOwnerRoot(node)) {
var c$ = TreeApi.Logical.getChildNodes(node);
for (var i = 0, l = c$.length, n; i < l && (n = c$[i]); i++) {
this._removeOwnerShadyRoot(n);
}
}
node._ownerShadyRoot = undefined;
},
_firstComposedNode: function (content) {
var n$ = dom(content).getDistributedNodes();
for (var i = 0, l = n$.length, n, p$; i < l && (n = n$[i]); i++) {
p$ = dom(n).getDestinationInsertionPoints();
if (p$[p$.length - 1] === content) {
return n;
}
}
},
querySelector: function (selector) {
var result = this._query(function (n) {
return DomApi.matchesSelector.call(n, selector);
}, this.node, function (n) {
return Boolean(n);
})[0];
return result || null;
},
querySelectorAll: function (selector) {
return this._query(function (n) {
return DomApi.matchesSelector.call(n, selector);
}, this.node);
},
getDestinationInsertionPoints: function () {
return this.node._destinationInsertionPoints || [];
},
getDistributedNodes: function () {
return this.node._distributedNodes || [];
},
_clear: function () {
while (this.childNodes.length) {
this.removeChild(this.childNodes[0]);
}
},
setAttribute: function (name, value) {
this.node.setAttribute(name, value);
this._maybeDistributeParent();
},
removeAttribute: function (name) {
this.node.removeAttribute(name);
this._maybeDistributeParent();
},
_maybeDistributeParent: function () {
if (this._nodeNeedsDistribution(this.parentNode)) {
this._lazyDistribute(this.parentNode);
return true;
}
},
cloneNode: function (deep) {
var n = nativeCloneNode.call(this.node, false);
if (deep) {
var c$ = this.childNodes;
var d = dom(n);
for (var i = 0, nc; i < c$.length; i++) {
nc = dom(c$[i]).cloneNode(true);
d.appendChild(nc);
}
}
return n;
},
importNode: function (externalNode, deep) {
var doc = this.node instanceof Document ? this.node : this.node.ownerDocument;
var n = nativeImportNode.call(doc, externalNode, false);
if (deep) {
var c$ = TreeApi.Logical.getChildNodes(externalNode);
var d = dom(n);
for (var i = 0, nc; i < c$.length; i++) {
nc = dom(doc).importNode(c$[i], true);
d.appendChild(nc);
}
}
return n;
},
_getComposedInnerHTML: function () {
return getInnerHTML(this.node, true);
}
});
Object.defineProperties(DomApi.prototype, {
activeElement: {
get: function () {
var active = document.activeElement;
if (!active) {
return null;
}
var isShadyRoot = !!this.node._isShadyRoot;
if (this.node !== document) {
if (!isShadyRoot) {
return null;
}
if (this.node.host === active || !this.node.host.contains(active)) {
return null;
}
}
var activeRoot = dom(active).getOwnerRoot();
while (activeRoot && activeRoot !== this.node) {
active = activeRoot.host;
activeRoot = dom(active).getOwnerRoot();
}
if (this.node === document) {
return activeRoot ? null : active;
} else {
return activeRoot === this.node ? active : null;
}
},
configurable: true
},
childNodes: {
get: function () {
var c$ = TreeApi.Logical.getChildNodes(this.node);
return Array.isArray(c$) ? c$ : TreeApi.arrayCopyChildNodes(this.node);
},
configurable: true
},
children: {
get: function () {
if (TreeApi.Logical.hasChildNodes(this.node)) {
return Array.prototype.filter.call(this.childNodes, function (n) {
return n.nodeType === Node.ELEMENT_NODE;
});
} else {
return TreeApi.arrayCopyChildren(this.node);
}
},
configurable: true
},
parentNode: {
get: function () {
return TreeApi.Logical.getParentNode(this.node);
},
configurable: true
},
firstChild: {
get: function () {
return TreeApi.Logical.getFirstChild(this.node);
},
configurable: true
},
lastChild: {
get: function () {
return TreeApi.Logical.getLastChild(this.node);
},
configurable: true
},
nextSibling: {
get: function () {
return TreeApi.Logical.getNextSibling(this.node);
},
configurable: true
},
previousSibling: {
get: function () {
return TreeApi.Logical.getPreviousSibling(this.node);
},
configurable: true
},
firstElementChild: {
get: function () {
return TreeApi.Logical.getFirstElementChild(this.node);
},
configurable: true
},
lastElementChild: {
get: function () {
return TreeApi.Logical.getLastElementChild(this.node);
},
configurable: true
},
nextElementSibling: {
get: function () {
return TreeApi.Logical.getNextElementSibling(this.node);
},
configurable: true
},
previousElementSibling: {
get: function () {
return TreeApi.Logical.getPreviousElementSibling(this.node);
},
configurable: true
},
textContent: {
get: function () {
var nt = this.node.nodeType;
if (nt === Node.TEXT_NODE || nt === Node.COMMENT_NODE) {
return this.node.textContent;
} else {
var tc = [];
for (var i = 0, cn = this.childNodes, c; c = cn[i]; i++) {
if (c.nodeType !== Node.COMMENT_NODE) {
tc.push(c.textContent);
}
}
return tc.join('');
}
},
set: function (text) {
var nt = this.node.nodeType;
if (nt === Node.TEXT_NODE || nt === Node.COMMENT_NODE) {
this.node.textContent = text;
} else {
this._clear();
if (text) {
this.appendChild(document.createTextNode(text));
}
}
},
configurable: true
},
innerHTML: {
get: function () {
var nt = this.node.nodeType;
if (nt === Node.TEXT_NODE || nt === Node.COMMENT_NODE) {
return null;
} else {
return getInnerHTML(this.node);
}
},
set: function (text) {
var nt = this.node.nodeType;
if (nt !== Node.TEXT_NODE || nt !== Node.COMMENT_NODE) {
this._clear();
var d = document.createElement('div');
d.innerHTML = text;
var c$ = TreeApi.arrayCopyChildNodes(d);
for (var i = 0; i < c$.length; i++) {
this.appendChild(c$[i]);
}
}
},
configurable: true
}
});
DomApi.hasInsertionPoint = function (root) {
return Boolean(root && root._insertionPoints.length);
};
}());
(function () {
'use strict';
var Settings = Polymer.Settings;
var TreeApi = Polymer.TreeApi;
var DomApi = Polymer.DomApi;
if (!Settings.useShadow) {
return;
}
Polymer.Base.extend(DomApi.prototype, {
querySelectorAll: function (selector) {
return TreeApi.arrayCopy(this.node.querySelectorAll(selector));
},
getOwnerRoot: function () {
var n = this.node;
while (n) {
if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE && n.host) {
return n;
}
n = n.parentNode;
}
},
importNode: function (externalNode, deep) {
var doc = this.node instanceof Document ? this.node : this.node.ownerDocument;
return doc.importNode(externalNode, deep);
},
getDestinationInsertionPoints: function () {
var n$ = this.node.getDestinationInsertionPoints && this.node.getDestinationInsertionPoints();
return n$ ? TreeApi.arrayCopy(n$) : [];
},
getDistributedNodes: function () {
var n$ = this.node.getDistributedNodes && this.node.getDistributedNodes();
return n$ ? TreeApi.arrayCopy(n$) : [];
}
});
Object.defineProperties(DomApi.prototype, {
activeElement: {
get: function () {
var node = DomApi.wrap(this.node);
var activeElement = node.activeElement;
return node.contains(activeElement) ? activeElement : null;
},
configurable: true
},
childNodes: {
get: function () {
return TreeApi.arrayCopyChildNodes(this.node);
},
configurable: true
},
children: {
get: function () {
return TreeApi.arrayCopyChildren(this.node);
},
configurable: true
},
textContent: {
get: function () {
return this.node.textContent;
},
set: function (value) {
return this.node.textContent = value;
},
configurable: true
},
innerHTML: {
get: function () {
return this.node.innerHTML;
},
set: function (value) {
return this.node.innerHTML = value;
},
configurable: true
}
});
var forwardMethods = function (m$) {
for (var i = 0; i < m$.length; i++) {
forwardMethod(m$[i]);
}
};
var forwardMethod = function (method) {
DomApi.prototype[method] = function () {
return this.node[method].apply(this.node, arguments);
};
};
forwardMethods([
'cloneNode',
'appendChild',
'insertBefore',
'removeChild',
'replaceChild',
'setAttribute',
'removeAttribute',
'querySelector'
]);
var forwardProperties = function (f$) {
for (var i = 0; i < f$.length; i++) {
forwardProperty(f$[i]);
}
};
var forwardProperty = function (name) {
Object.defineProperty(DomApi.prototype, name, {
get: function () {
return this.node[name];
},
configurable: true
});
};
forwardProperties([
'parentNode',
'firstChild',
'lastChild',
'nextSibling',
'previousSibling',
'firstElementChild',
'lastElementChild',
'nextElementSibling',
'previousElementSibling'
]);
}());
Polymer.Base.extend(Polymer.dom, {
_flushGuard: 0,
_FLUSH_MAX: 100,
_needsTakeRecords: !Polymer.Settings.useNativeCustomElements,
_debouncers: [],
_staticFlushList: [],
_finishDebouncer: null,
flush: function () {
this._flushGuard = 0;
this._prepareFlush();
while (this._debouncers.length && this._flushGuard < this._FLUSH_MAX) {
while (this._debouncers.length) {
this._debouncers.shift().complete();
}
if (this._finishDebouncer) {
this._finishDebouncer.complete();
}
this._prepareFlush();
this._flushGuard++;
}
if (this._flushGuard >= this._FLUSH_MAX) {
console.warn('Polymer.dom.flush aborted. Flush may not be complete.');
}
},
_prepareFlush: function () {
if (this._needsTakeRecords) {
CustomElements.takeRecords();
}
for (var i = 0; i < this._staticFlushList.length; i++) {
this._staticFlushList[i]();
}
},
addStaticFlush: function (fn) {
this._staticFlushList.push(fn);
},
removeStaticFlush: function (fn) {
var i = this._staticFlushList.indexOf(fn);
if (i >= 0) {
this._staticFlushList.splice(i, 1);
}
},
addDebouncer: function (debouncer) {
this._debouncers.push(debouncer);
this._finishDebouncer = Polymer.Debounce(this._finishDebouncer, this._finishFlush);
},
_finishFlush: function () {
Polymer.dom._debouncers = [];
}
});
Polymer.EventApi = function () {
'use strict';
var DomApi = Polymer.DomApi.ctor;
var Settings = Polymer.Settings;
DomApi.Event = function (event) {
this.event = event;
};
if (Settings.useShadow) {
DomApi.Event.prototype = {
get rootTarget() {
return this.event.path[0];
},
get localTarget() {
return this.event.target;
},
get path() {
var path = this.event.path;
if (!Array.isArray(path)) {
path = Array.prototype.slice.call(path);
}
return path;
}
};
} else {
DomApi.Event.prototype = {
get rootTarget() {
return this.event.target;
},
get localTarget() {
var current = this.event.currentTarget;
var currentRoot = current && Polymer.dom(current).getOwnerRoot();
var p$ = this.path;
for (var i = 0; i < p$.length; i++) {
if (Polymer.dom(p$[i]).getOwnerRoot() === currentRoot) {
return p$[i];
}
}
},
get path() {
if (!this.event._path) {
var path = [];
var current = this.rootTarget;
while (current) {
path.push(current);
var insertionPoints = Polymer.dom(current).getDestinationInsertionPoints();
if (insertionPoints.length) {
for (var i = 0; i < insertionPoints.length - 1; i++) {
path.push(insertionPoints[i]);
}
current = insertionPoints[insertionPoints.length - 1];
} else {
current = Polymer.dom(current).parentNode || current.host;
}
}
path.push(window);
this.event._path = path;
}
return this.event._path;
}
};
}
var factory = function (event) {
if (!event.__eventApi) {
event.__eventApi = new DomApi.Event(event);
}
return event.__eventApi;
};
return { factory: factory };
}();
(function () {
'use strict';
var DomApi = Polymer.DomApi.ctor;
var useShadow = Polymer.Settings.useShadow;
Object.defineProperty(DomApi.prototype, 'classList', {
get: function () {
if (!this._classList) {
this._classList = new DomApi.ClassList(this);
}
return this._classList;
},
configurable: true
});
DomApi.ClassList = function (host) {
this.domApi = host;
this.node = host.node;
};
DomApi.ClassList.prototype = {
add: function () {
this.node.classList.add.apply(this.node.classList, arguments);
this._distributeParent();
},
remove: function () {
this.node.classList.remove.apply(this.node.classList, arguments);
this._distributeParent();
},
toggle: function () {
this.node.classList.toggle.apply(this.node.classList, arguments);
this._distributeParent();
},
_distributeParent: function () {
if (!useShadow) {
this.domApi._maybeDistributeParent();
}
},
contains: function () {
return this.node.classList.contains.apply(this.node.classList, arguments);
}
};
}());
(function () {
'use strict';
var DomApi = Polymer.DomApi.ctor;
var Settings = Polymer.Settings;
DomApi.EffectiveNodesObserver = function (domApi) {
this.domApi = domApi;
this.node = this.domApi.node;
this._listeners = [];
};
DomApi.EffectiveNodesObserver.prototype = {
addListener: function (callback) {
if (!this._isSetup) {
this._setup();
this._isSetup = true;
}
var listener = {
fn: callback,
_nodes: []
};
this._listeners.push(listener);
this._scheduleNotify();
return listener;
},
removeListener: function (handle) {
var i = this._listeners.indexOf(handle);
if (i >= 0) {
this._listeners.splice(i, 1);
handle._nodes = [];
}
if (!this._hasListeners()) {
this._cleanup();
this._isSetup = false;
}
},
_setup: function () {
this._observeContentElements(this.domApi.childNodes);
},
_cleanup: function () {
this._unobserveContentElements(this.domApi.childNodes);
},
_hasListeners: function () {
return Boolean(this._listeners.length);
},
_scheduleNotify: function () {
if (this._debouncer) {
this._debouncer.stop();
}
this._debouncer = Polymer.Debounce(this._debouncer, this._notify);
this._debouncer.context = this;
Polymer.dom.addDebouncer(this._debouncer);
},
notify: function () {
if (this._hasListeners()) {
this._scheduleNotify();
}
},
_notify: function () {
this._beforeCallListeners();
this._callListeners();
},
_beforeCallListeners: function () {
this._updateContentElements();
},
_updateContentElements: function () {
this._observeContentElements(this.domApi.childNodes);
},
_observeContentElements: function (elements) {
for (var i = 0, n; i < elements.length && (n = elements[i]); i++) {
if (this._isContent(n)) {
n.__observeNodesMap = n.__observeNodesMap || new WeakMap();
if (!n.__observeNodesMap.has(this)) {
n.__observeNodesMap.set(this, this._observeContent(n));
}
}
}
},
_observeContent: function (content) {
var self = this;
var h = Polymer.dom(content).observeNodes(function () {
self._scheduleNotify();
});
h._avoidChangeCalculation = true;
return h;
},
_unobserveContentElements: function (elements) {
for (var i = 0, n, h; i < elements.length && (n = elements[i]); i++) {
if (this._isContent(n)) {
h = n.__observeNodesMap.get(this);
if (h) {
Polymer.dom(n).unobserveNodes(h);
n.__observeNodesMap.delete(this);
}
}
}
},
_isContent: function (node) {
return node.localName === 'content';
},
_callListeners: function () {
var o$ = this._listeners;
var nodes = this._getEffectiveNodes();
for (var i = 0, o; i < o$.length && (o = o$[i]); i++) {
var info = this._generateListenerInfo(o, nodes);
if (info || o._alwaysNotify) {
this._callListener(o, info);
}
}
},
_getEffectiveNodes: function () {
return this.domApi.getEffectiveChildNodes();
},
_generateListenerInfo: function (listener, newNodes) {
if (listener._avoidChangeCalculation) {
return true;
}
var oldNodes = listener._nodes;
var info = {
target: this.node,
addedNodes: [],
removedNodes: []
};
var splices = Polymer.ArraySplice.calculateSplices(newNodes, oldNodes);
for (var i = 0, s; i < splices.length && (s = splices[i]); i++) {
for (var j = 0, n; j < s.removed.length && (n = s.removed[j]); j++) {
info.removedNodes.push(n);
}
}
for (i = 0, s; i < splices.length && (s = splices[i]); i++) {
for (j = s.index; j < s.index + s.addedCount; j++) {
info.addedNodes.push(newNodes[j]);
}
}
listener._nodes = newNodes;
if (info.addedNodes.length || info.removedNodes.length) {
return info;
}
},
_callListener: function (listener, info) {
return listener.fn.call(this.node, info);
},
enableShadowAttributeTracking: function () {
}
};
if (Settings.useShadow) {
var baseSetup = DomApi.EffectiveNodesObserver.prototype._setup;
var baseCleanup = DomApi.EffectiveNodesObserver.prototype._cleanup;
Polymer.Base.extend(DomApi.EffectiveNodesObserver.prototype, {
_setup: function () {
if (!this._observer) {
var self = this;
this._mutationHandler = function (mxns) {
if (mxns && mxns.length) {
self._scheduleNotify();
}
};
this._observer = new MutationObserver(this._mutationHandler);
this._boundFlush = function () {
self._flush();
};
Polymer.dom.addStaticFlush(this._boundFlush);
this._observer.observe(this.node, { childList: true });
}
baseSetup.call(this);
},
_cleanup: function () {
this._observer.disconnect();
this._observer = null;
this._mutationHandler = null;
Polymer.dom.removeStaticFlush(this._boundFlush);
baseCleanup.call(this);
},
_flush: function () {
if (this._observer) {
this._mutationHandler(this._observer.takeRecords());
}
},
enableShadowAttributeTracking: function () {
if (this._observer) {
this._makeContentListenersAlwaysNotify();
this._observer.disconnect();
this._observer.observe(this.node, {
childList: true,
attributes: true,
subtree: true
});
var root = this.domApi.getOwnerRoot();
var host = root && root.host;
if (host && Polymer.dom(host).observer) {
Polymer.dom(host).observer.enableShadowAttributeTracking();
}
}
},
_makeContentListenersAlwaysNotify: function () {
for (var i = 0, h; i < this._listeners.length; i++) {
h = this._listeners[i];
h._alwaysNotify = h._isContentListener;
}
}
});
}
}());
(function () {
'use strict';
var DomApi = Polymer.DomApi.ctor;
var Settings = Polymer.Settings;
DomApi.DistributedNodesObserver = function (domApi) {
DomApi.EffectiveNodesObserver.call(this, domApi);
};
DomApi.DistributedNodesObserver.prototype = Object.create(DomApi.EffectiveNodesObserver.prototype);
Polymer.Base.extend(DomApi.DistributedNodesObserver.prototype, {
_setup: function () {
},
_cleanup: function () {
},
_beforeCallListeners: function () {
},
_getEffectiveNodes: function () {
return this.domApi.getDistributedNodes();
}
});
if (Settings.useShadow) {
Polymer.Base.extend(DomApi.DistributedNodesObserver.prototype, {
_setup: function () {
if (!this._observer) {
var root = this.domApi.getOwnerRoot();
var host = root && root.host;
if (host) {
var self = this;
this._observer = Polymer.dom(host).observeNodes(function () {
self._scheduleNotify();
});
this._observer._isContentListener = true;
if (this._hasAttrSelect()) {
Polymer.dom(host).observer.enableShadowAttributeTracking();
}
}
}
},
_hasAttrSelect: function () {
var select = this.node.getAttribute('select');
return select && select.match(/[[.]+/);
},
_cleanup: function () {
var root = this.domApi.getOwnerRoot();
var host = root && root.host;
if (host) {
Polymer.dom(host).unobserveNodes(this._observer);
}
this._observer = null;
}
});
}
}());
(function () {
var DomApi = Polymer.DomApi;
var TreeApi = Polymer.TreeApi;
Polymer.Base._addFeature({
_prepShady: function () {
this._useContent = this._useContent || Boolean(this._template);
},
_setupShady: function () {
this.shadyRoot = null;
if (!this.__domApi) {
this.__domApi = null;
}
if (!this.__dom) {
this.__dom = null;
}
if (!this._ownerShadyRoot) {
this._ownerShadyRoot = undefined;
}
},
_poolContent: function () {
if (this._useContent) {
TreeApi.Logical.saveChildNodes(this);
}
},
_setupRoot: function () {
if (this._useContent) {
this._createLocalRoot();
if (!this.dataHost) {
upgradeLogicalChildren(TreeApi.Logical.getChildNodes(this));
}
}
},
_createLocalRoot: function () {
this.shadyRoot = this.root;
this.shadyRoot._distributionClean = false;
this.shadyRoot._hasDistributed = false;
this.shadyRoot._isShadyRoot = true;
this.shadyRoot._dirtyRoots = [];
var i$ = this.shadyRoot._insertionPoints = !this._notes || this._notes._hasContent ? this.shadyRoot.querySelectorAll('content') : [];
TreeApi.Logical.saveChildNodes(this.shadyRoot);
for (var i = 0, c; i < i$.length; i++) {
c = i$[i];
TreeApi.Logical.saveChildNodes(c);
TreeApi.Logical.saveChildNodes(c.parentNode);
}
this.shadyRoot.host = this;
},
get domHost() {
var root = Polymer.dom(this).getOwnerRoot();
return root && root.host;
},
distributeContent: function (updateInsertionPoints) {
if (this.shadyRoot) {
this.shadyRoot._invalidInsertionPoints = this.shadyRoot._invalidInsertionPoints || updateInsertionPoints;
var host = getTopDistributingHost(this);
Polymer.dom(this)._lazyDistribute(host);
}
},
_distributeContent: function () {
if (this._useContent && !this.shadyRoot._distributionClean) {
if (this.shadyRoot._invalidInsertionPoints) {
Polymer.dom(this)._updateInsertionPoints(this);
this.shadyRoot._invalidInsertionPoints = false;
}
this._beginDistribute();
this._distributeDirtyRoots();
this._finishDistribute();
}
},
_beginDistribute: function () {
if (this._useContent && DomApi.hasInsertionPoint(this.shadyRoot)) {
this._resetDistribution();
this._distributePool(this.shadyRoot, this._collectPool());
}
},
_distributeDirtyRoots: function () {
var c$ = this.shadyRoot._dirtyRoots;
for (var i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
c._distributeContent();
}
this.shadyRoot._dirtyRoots = [];
},
_finishDistribute: function () {
if (this._useContent) {
this.shadyRoot._distributionClean = true;
if (DomApi.hasInsertionPoint(this.shadyRoot)) {
this._composeTree();
notifyContentObservers(this.shadyRoot);
} else {
if (!this.shadyRoot._hasDistributed) {
TreeApi.Composed.clearChildNodes(this);
this.appendChild(this.shadyRoot);
} else {
var children = this._composeNode(this);
this._updateChildNodes(this, children);
}
}
if (!this.shadyRoot._hasDistributed) {
notifyInitialDistribution(this);
}
this.shadyRoot._hasDistributed = true;
}
},
elementMatches: function (selector, node) {
node = node || this;
return DomApi.matchesSelector.call(node, selector);
},
_resetDistribution: function () {
var children = TreeApi.Logical.getChildNodes(this);
for (var i = 0; i < children.length; i++) {
var child = children[i];
if (child._destinationInsertionPoints) {
child._destinationInsertionPoints = undefined;
}
if (isInsertionPoint(child)) {
clearDistributedDestinationInsertionPoints(child);
}
}
var root = this.shadyRoot;
var p$ = root._insertionPoints;
for (var j = 0; j < p$.length; j++) {
p$[j]._distributedNodes = [];
}
},
_collectPool: function () {
var pool = [];
var children = TreeApi.Logical.getChildNodes(this);
for (var i = 0; i < children.length; i++) {
var child = children[i];
if (isInsertionPoint(child)) {
pool.push.apply(pool, child._distributedNodes);
} else {
pool.push(child);
}
}
return pool;
},
_distributePool: function (node, pool) {
var p$ = node._insertionPoints;
for (var i = 0, l = p$.length, p; i < l && (p = p$[i]); i++) {
this._distributeInsertionPoint(p, pool);
maybeRedistributeParent(p, this);
}
},
_distributeInsertionPoint: function (content, pool) {
var anyDistributed = false;
for (var i = 0, l = pool.length, node; i < l; i++) {
node = pool[i];
if (!node) {
continue;
}
if (this._matchesContentSelect(node, content)) {
distributeNodeInto(node, content);
pool[i] = undefined;
anyDistributed = true;
}
}
if (!anyDistributed) {
var children = TreeApi.Logical.getChildNodes(content);
for (var j = 0; j < children.length; j++) {
distributeNodeInto(children[j], content);
}
}
},
_composeTree: function () {
this._updateChildNodes(this, this._composeNode(this));
var p$ = this.shadyRoot._insertionPoints;
for (var i = 0, l = p$.length, p, parent; i < l && (p = p$[i]); i++) {
parent = TreeApi.Logical.getParentNode(p);
if (!parent._useContent && parent !== this && parent !== this.shadyRoot) {
this._updateChildNodes(parent, this._composeNode(parent));
}
}
},
_composeNode: function (node) {
var children = [];
var c$ = TreeApi.Logical.getChildNodes(node.shadyRoot || node);
for (var i = 0; i < c$.length; i++) {
var child = c$[i];
if (isInsertionPoint(child)) {
var distributedNodes = child._distributedNodes;
for (var j = 0; j < distributedNodes.length; j++) {
var distributedNode = distributedNodes[j];
if (isFinalDestination(child, distributedNode)) {
children.push(distributedNode);
}
}
} else {
children.push(child);
}
}
return children;
},
_updateChildNodes: function (container, children) {
var composed = TreeApi.Composed.getChildNodes(container);
var splices = Polymer.ArraySplice.calculateSplices(children, composed);
for (var i = 0, d = 0, s; i < splices.length && (s = splices[i]); i++) {
for (var j = 0, n; j < s.removed.length && (n = s.removed[j]); j++) {
if (TreeApi.Composed.getParentNode(n) === container) {
TreeApi.Composed.removeChild(container, n);
}
composed.splice(s.index + d, 1);
}
d -= s.addedCount;
}
for (var i = 0, s, next; i < splices.length && (s = splices[i]); i++) {
next = composed[s.index];
for (j = s.index, n; j < s.index + s.addedCount; j++) {
n = children[j];
TreeApi.Composed.insertBefore(container, n, next);
composed.splice(j, 0, n);
}
}
},
_matchesContentSelect: function (node, contentElement) {
var select = contentElement.getAttribute('select');
if (!select) {
return true;
}
select = select.trim();
if (!select) {
return true;
}
if (!(node instanceof Element)) {
return false;
}
var validSelectors = /^(:not\()?[*.#[a-zA-Z_|]/;
if (!validSelectors.test(select)) {
return false;
}
return this.elementMatches(select, node);
},
_elementAdd: function () {
},
_elementRemove: function () {
}
});
function distributeNodeInto(child, insertionPoint) {
insertionPoint._distributedNodes.push(child);
var points = child._destinationInsertionPoints;
if (!points) {
child._destinationInsertionPoints = [insertionPoint];
} else {
points.push(insertionPoint);
}
}
function clearDistributedDestinationInsertionPoints(content) {
var e$ = content._distributedNodes;
if (e$) {
for (var i = 0; i < e$.length; i++) {
var d = e$[i]._destinationInsertionPoints;
if (d) {
d.splice(d.indexOf(content) + 1, d.length);
}
}
}
}
function maybeRedistributeParent(content, host) {
var parent = TreeApi.Logical.getParentNode(content);
if (parent && parent.shadyRoot && DomApi.hasInsertionPoint(parent.shadyRoot) && parent.shadyRoot._distributionClean) {
parent.shadyRoot._distributionClean = false;
host.shadyRoot._dirtyRoots.push(parent);
}
}
function isFinalDestination(insertionPoint, node) {
var points = node._destinationInsertionPoints;
return points && points[points.length - 1] === insertionPoint;
}
function isInsertionPoint(node) {
return node.localName == 'content';
}
function getTopDistributingHost(host) {
while (host && hostNeedsRedistribution(host)) {
host = host.domHost;
}
return host;
}
function hostNeedsRedistribution(host) {
var c$ = TreeApi.Logical.getChildNodes(host);
for (var i = 0, c; i < c$.length; i++) {
c = c$[i];
if (c.localName && c.localName === 'content') {
return host.domHost;
}
}
}
function notifyContentObservers(root) {
for (var i = 0, c; i < root._insertionPoints.length; i++) {
c = root._insertionPoints[i];
if (DomApi.hasApi(c)) {
Polymer.dom(c).notifyObserver();
}
}
}
function notifyInitialDistribution(host) {
if (DomApi.hasApi(host)) {
Polymer.dom(host).notifyObserver();
}
}
var needsUpgrade = window.CustomElements && !CustomElements.useNative;
function upgradeLogicalChildren(children) {
if (needsUpgrade && children) {
for (var i = 0; i < children.length; i++) {
CustomElements.upgrade(children[i]);
}
}
}
}());
if (Polymer.Settings.useShadow) {
Polymer.Base._addFeature({
_poolContent: function () {
},
_beginDistribute: function () {
},
distributeContent: function () {
},
_distributeContent: function () {
},
_finishDistribute: function () {
},
_createLocalRoot: function () {
this.createShadowRoot();
this.shadowRoot.appendChild(this.root);
this.root = this.shadowRoot;
}
});
}
Polymer.Async = {
_currVal: 0,
_lastVal: 0,
_callbacks: [],
_twiddleContent: 0,
_twiddle: document.createTextNode(''),
run: function (callback, waitTime) {
if (waitTime > 0) {
return ~setTimeout(callback, waitTime);
} else {
this._twiddle.textContent = this._twiddleContent++;
this._callbacks.push(callback);
return this._currVal++;
}
},
cancel: function (handle) {
if (handle < 0) {
clearTimeout(~handle);
} else {
var idx = handle - this._lastVal;
if (idx >= 0) {
if (!this._callbacks[idx]) {
throw 'invalid async handle: ' + handle;
}
this._callbacks[idx] = null;
}
}
},
_atEndOfMicrotask: function () {
var len = this._callbacks.length;
for (var i = 0; i < len; i++) {
var cb = this._callbacks[i];
if (cb) {
try {
cb();
} catch (e) {
i++;
this._callbacks.splice(0, i);
this._lastVal += i;
this._twiddle.textContent = this._twiddleContent++;
throw e;
}
}
}
this._callbacks.splice(0, len);
this._lastVal += len;
}
};
new window.MutationObserver(function () {
Polymer.Async._atEndOfMicrotask();
}).observe(Polymer.Async._twiddle, { characterData: true });
Polymer.Debounce = function () {
var Async = Polymer.Async;
var Debouncer = function (context) {
this.context = context;
var self = this;
this.boundComplete = function () {
self.complete();
};
};
Debouncer.prototype = {
go: function (callback, wait) {
var h;
this.finish = function () {
Async.cancel(h);
};
h = Async.run(this.boundComplete, wait);
this.callback = callback;
},
stop: function () {
if (this.finish) {
this.finish();
this.finish = null;
}
},
complete: function () {
if (this.finish) {
this.stop();
this.callback.call(this.context);
}
}
};
function debounce(debouncer, callback, wait) {
if (debouncer) {
debouncer.stop();
} else {
debouncer = new Debouncer(this);
}
debouncer.go(callback, wait);
return debouncer;
}
return debounce;
}();
Polymer.Base._addFeature({
_setupDebouncers: function () {
this._debouncers = {};
},
debounce: function (jobName, callback, wait) {
return this._debouncers[jobName] = Polymer.Debounce.call(this, this._debouncers[jobName], callback, wait);
},
isDebouncerActive: function (jobName) {
var debouncer = this._debouncers[jobName];
return !!(debouncer && debouncer.finish);
},
flushDebouncer: function (jobName) {
var debouncer = this._debouncers[jobName];
if (debouncer) {
debouncer.complete();
}
},
cancelDebouncer: function (jobName) {
var debouncer = this._debouncers[jobName];
if (debouncer) {
debouncer.stop();
}
}
});
Polymer.DomModule = document.createElement('dom-module');
Polymer.Base._addFeature({
_registerFeatures: function () {
this._prepIs();
this._prepBehaviors();
this._prepConstructor();
this._prepTemplate();
this._prepShady();
this._prepPropertyInfo();
},
_prepBehavior: function (b) {
this._addHostAttributes(b.hostAttributes);
},
_initFeatures: function () {
this._registerHost();
if (this._template) {
this._poolContent();
this._beginHosting();
this._stampTemplate();
this._endHosting();
}
this._marshalHostAttributes();
this._setupDebouncers();
this._marshalBehaviors();
this._tryReady();
},
_marshalBehavior: function (b) {
}
});
Polymer.nar = [];
Polymer.Annotations = {
parseAnnotations: function (template) {
var list = [];
var content = template._content || template.content;
this._parseNodeAnnotations(content, list, template.hasAttribute('strip-whitespace'));
return list;
},
_parseNodeAnnotations: function (node, list, stripWhiteSpace) {
return node.nodeType === Node.TEXT_NODE ? this._parseTextNodeAnnotation(node, list) : this._parseElementAnnotations(node, list, stripWhiteSpace);
},
_bindingRegex: function () {
var IDENT = '(?:' + '[a-zA-Z_$][\\w.:$\\-*]*' + ')';
var NUMBER = '(?:' + '[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?' + ')';
var SQUOTE_STRING = '(?:' + '\'(?:[^\'\\\\]|\\\\.)*\'' + ')';
var DQUOTE_STRING = '(?:' + '"(?:[^"\\\\]|\\\\.)*"' + ')';
var STRING = '(?:' + SQUOTE_STRING + '|' + DQUOTE_STRING + ')';
var ARGUMENT = '(?:' + IDENT + '|' + NUMBER + '|' + STRING + '\\s*' + ')';
var ARGUMENTS = '(?:' + ARGUMENT + '(?:,\\s*' + ARGUMENT + ')*' + ')';
var ARGUMENT_LIST = '(?:' + '\\(\\s*' + '(?:' + ARGUMENTS + '?' + ')' + '\\)\\s*' + ')';
var BINDING = '(' + IDENT + '\\s*' + ARGUMENT_LIST + '?' + ')';
var OPEN_BRACKET = '(\\[\\[|{{)' + '\\s*';
var CLOSE_BRACKET = '(?:]]|}})';
var NEGATE = '(?:(!)\\s*)?';
var EXPRESSION = OPEN_BRACKET + NEGATE + BINDING + CLOSE_BRACKET;
return new RegExp(EXPRESSION, 'g');
}(),
_parseBindings: function (text) {
var re = this._bindingRegex;
var parts = [];
var lastIndex = 0;
var m;
while ((m = re.exec(text)) !== null) {
if (m.index > lastIndex) {
parts.push({ literal: text.slice(lastIndex, m.index) });
}
var mode = m[1][0];
var negate = Boolean(m[2]);
var value = m[3].trim();
var customEvent, notifyEvent, colon;
if (mode == '{' && (colon = value.indexOf('::')) > 0) {
notifyEvent = value.substring(colon + 2);
value = value.substring(0, colon);
customEvent = true;
}
parts.push({
compoundIndex: parts.length,
value: value,
mode: mode,
negate: negate,
event: notifyEvent,
customEvent: customEvent
});
lastIndex = re.lastIndex;
}
if (lastIndex && lastIndex < text.length) {
var literal = text.substring(lastIndex);
if (literal) {
parts.push({ literal: literal });
}
}
if (parts.length) {
return parts;
}
},
_literalFromParts: function (parts) {
var s = '';
for (var i = 0; i < parts.length; i++) {
var literal = parts[i].literal;
s += literal || '';
}
return s;
},
_parseTextNodeAnnotation: function (node, list) {
var parts = this._parseBindings(node.textContent);
if (parts) {
node.textContent = this._literalFromParts(parts) || ' ';
var annote = {
bindings: [{
kind: 'text',
name: 'textContent',
parts: parts,
isCompound: parts.length !== 1
}]
};
list.push(annote);
return annote;
}
},
_parseElementAnnotations: function (element, list, stripWhiteSpace) {
var annote = {
bindings: [],
events: []
};
if (element.localName === 'content') {
list._hasContent = true;
}
this._parseChildNodesAnnotations(element, annote, list, stripWhiteSpace);
if (element.attributes) {
this._parseNodeAttributeAnnotations(element, annote, list);
if (this.prepElement) {
this.prepElement(element);
}
}
if (annote.bindings.length || annote.events.length || annote.id) {
list.push(annote);
}
return annote;
},
_parseChildNodesAnnotations: function (root, annote, list, stripWhiteSpace) {
if (root.firstChild) {
var node = root.firstChild;
var i = 0;
while (node) {
var next = node.nextSibling;
if (node.localName === 'template' && !node.hasAttribute('preserve-content')) {
this._parseTemplate(node, i, list, annote);
}
if (node.nodeType === Node.TEXT_NODE) {
var n = next;
while (n && n.nodeType === Node.TEXT_NODE) {
node.textContent += n.textContent;
next = n.nextSibling;
root.removeChild(n);
n = next;
}
if (stripWhiteSpace && !node.textContent.trim()) {
root.removeChild(node);
i--;
}
}
if (node.parentNode) {
var childAnnotation = this._parseNodeAnnotations(node, list, stripWhiteSpace);
if (childAnnotation) {
childAnnotation.parent = annote;
childAnnotation.index = i;
}
}
node = next;
i++;
}
}
},
_parseTemplate: function (node, index, list, parent) {
var content = document.createDocumentFragment();
content._notes = this.parseAnnotations(node);
content.appendChild(node.content);
list.push({
bindings: Polymer.nar,
events: Polymer.nar,
templateContent: content,
parent: parent,
index: index
});
},
_parseNodeAttributeAnnotations: function (node, annotation) {
var attrs = Array.prototype.slice.call(node.attributes);
for (var i = attrs.length - 1, a; a = attrs[i]; i--) {
var n = a.name;
var v = a.value;
var b;
if (n.slice(0, 3) === 'on-') {
node.removeAttribute(n);
annotation.events.push({
name: n.slice(3),
value: v
});
} else if (b = this._parseNodeAttributeAnnotation(node, n, v)) {
annotation.bindings.push(b);
} else if (n === 'id') {
annotation.id = v;
}
}
},
_parseNodeAttributeAnnotation: function (node, name, value) {
var parts = this._parseBindings(value);
if (parts) {
var origName = name;
var kind = 'property';
if (name[name.length - 1] == '$') {
name = name.slice(0, -1);
kind = 'attribute';
}
var literal = this._literalFromParts(parts);
if (literal && kind == 'attribute') {
node.setAttribute(name, literal);
}
if (node.localName === 'input' && origName === 'value') {
node.setAttribute(origName, '');
}
node.removeAttribute(origName);
var propertyName = Polymer.CaseMap.dashToCamelCase(name);
if (kind === 'property') {
name = propertyName;
}
return {
kind: kind,
name: name,
propertyName: propertyName,
parts: parts,
literal: literal,
isCompound: parts.length !== 1
};
}
},
findAnnotatedNode: function (root, annote) {
var parent = annote.parent && Polymer.Annotations.findAnnotatedNode(root, annote.parent);
if (parent) {
for (var n = parent.firstChild, i = 0; n; n = n.nextSibling) {
if (annote.index === i++) {
return n;
}
}
} else {
return root;
}
}
};
(function () {
function resolveCss(cssText, ownerDocument) {
return cssText.replace(CSS_URL_RX, function (m, pre, url, post) {
return pre + '\'' + resolve(url.replace(/["']/g, ''), ownerDocument) + '\'' + post;
});
}
function resolveAttrs(element, ownerDocument) {
for (var name in URL_ATTRS) {
var a$ = URL_ATTRS[name];
for (var i = 0, l = a$.length, a, at, v; i < l && (a = a$[i]); i++) {
if (name === '*' || element.localName === name) {
at = element.attributes[a];
v = at && at.value;
if (v && v.search(BINDING_RX) < 0) {
at.value = a === 'style' ? resolveCss(v, ownerDocument) : resolve(v, ownerDocument);
}
}
}
}
}
function resolve(url, ownerDocument) {
if (url && url[0] === '#') {
return url;
}
var resolver = getUrlResolver(ownerDocument);
resolver.href = url;
return resolver.href || url;
}
var tempDoc;
var tempDocBase;
function resolveUrl(url, baseUri) {
if (!tempDoc) {
tempDoc = document.implementation.createHTMLDocument('temp');
tempDocBase = tempDoc.createElement('base');
tempDoc.head.appendChild(tempDocBase);
}
tempDocBase.href = baseUri;
return resolve(url, tempDoc);
}
function getUrlResolver(ownerDocument) {
return ownerDocument.__urlResolver || (ownerDocument.__urlResolver = ownerDocument.createElement('a'));
}
var CSS_URL_RX = /(url\()([^)]*)(\))/g;
var URL_ATTRS = {
'*': [
'href',
'src',
'style',
'url'
],
form: ['action']
};
var BINDING_RX = /\{\{|\[\[/;
Polymer.ResolveUrl = {
resolveCss: resolveCss,
resolveAttrs: resolveAttrs,
resolveUrl: resolveUrl
};
}());
Polymer.Base._addFeature({
_prepAnnotations: function () {
if (!this._template) {
this._notes = [];
} else {
var self = this;
Polymer.Annotations.prepElement = function (element) {
self._prepElement(element);
};
if (this._template._content && this._template._content._notes) {
this._notes = this._template._content._notes;
} else {
this._notes = Polymer.Annotations.parseAnnotations(this._template);
this._processAnnotations(this._notes);
}
Polymer.Annotations.prepElement = null;
}
},
_processAnnotations: function (notes) {
for (var i = 0; i < notes.length; i++) {
var note = notes[i];
for (var j = 0; j < note.bindings.length; j++) {
var b = note.bindings[j];
for (var k = 0; k < b.parts.length; k++) {
var p = b.parts[k];
if (!p.literal) {
var signature = this._parseMethod(p.value);
if (signature) {
p.signature = signature;
} else {
p.model = this._modelForPath(p.value);
}
}
}
}
if (note.templateContent) {
this._processAnnotations(note.templateContent._notes);
var pp = note.templateContent._parentProps = this._discoverTemplateParentProps(note.templateContent._notes);
var bindings = [];
for (var prop in pp) {
bindings.push({
index: note.index,
kind: 'property',
name: '_parent_' + prop,
parts: [{
mode: '{',
model: prop,
value: prop
}]
});
}
note.bindings = note.bindings.concat(bindings);
}
}
},
_discoverTemplateParentProps: function (notes) {
var pp = {};
for (var i = 0, n; i < notes.length && (n = notes[i]); i++) {
for (var j = 0, b$ = n.bindings, b; j < b$.length && (b = b$[j]); j++) {
for (var k = 0, p$ = b.parts, p; k < p$.length && (p = p$[k]); k++) {
if (p.signature) {
var args = p.signature.args;
for (var kk = 0; kk < args.length; kk++) {
var model = args[kk].model;
if (model) {
pp[model] = true;
}
}
} else {
if (p.model) {
pp[p.model] = true;
}
}
}
}
if (n.templateContent) {
var tpp = n.templateContent._parentProps;
Polymer.Base.mixin(pp, tpp);
}
}
return pp;
},
_prepElement: function (element) {
Polymer.ResolveUrl.resolveAttrs(element, this._template.ownerDocument);
},
_findAnnotatedNode: Polymer.Annotations.findAnnotatedNode,
_marshalAnnotationReferences: function () {
if (this._template) {
this._marshalIdNodes();
this._marshalAnnotatedNodes();
this._marshalAnnotatedListeners();
}
},
_configureAnnotationReferences: function () {
var notes = this._notes;
var nodes = this._nodes;
for (var i = 0; i < notes.length; i++) {
var note = notes[i];
var node = nodes[i];
this._configureTemplateContent(note, node);
this._configureCompoundBindings(note, node);
}
},
_configureTemplateContent: function (note, node) {
if (note.templateContent) {
node._content = note.templateContent;
}
},
_configureCompoundBindings: function (note, node) {
var bindings = note.bindings;
for (var i = 0; i < bindings.length; i++) {
var binding = bindings[i];
if (binding.isCompound) {
var storage = node.__compoundStorage__ || (node.__compoundStorage__ = {});
var parts = binding.parts;
var literals = new Array(parts.length);
for (var j = 0; j < parts.length; j++) {
literals[j] = parts[j].literal;
}
var name = binding.name;
storage[name] = literals;
if (binding.literal && binding.kind == 'property') {
if (node._configValue) {
node._configValue(name, binding.literal);
} else {
node[name] = binding.literal;
}
}
}
}
},
_marshalIdNodes: function () {
this.$ = {};
for (var i = 0, l = this._notes.length, a; i < l && (a = this._notes[i]); i++) {
if (a.id) {
this.$[a.id] = this._findAnnotatedNode(this.root, a);
}
}
},
_marshalAnnotatedNodes: function () {
if (this._notes && this._notes.length) {
var r = new Array(this._notes.length);
for (var i = 0; i < this._notes.length; i++) {
r[i] = this._findAnnotatedNode(this.root, this._notes[i]);
}
this._nodes = r;
}
},
_marshalAnnotatedListeners: function () {
for (var i = 0, l = this._notes.length, a; i < l && (a = this._notes[i]); i++) {
if (a.events && a.events.length) {
var node = this._findAnnotatedNode(this.root, a);
for (var j = 0, e$ = a.events, e; j < e$.length && (e = e$[j]); j++) {
this.listen(node, e.name, e.value);
}
}
}
}
});
Polymer.Base._addFeature({
listeners: {},
_listenListeners: function (listeners) {
var node, name, eventName;
for (eventName in listeners) {
if (eventName.indexOf('.') < 0) {
node = this;
name = eventName;
} else {
name = eventName.split('.');
node = this.$[name[0]];
name = name[1];
}
this.listen(node, name, listeners[eventName]);
}
},
listen: function (node, eventName, methodName) {
var handler = this._recallEventHandler(this, eventName, node, methodName);
if (!handler) {
handler = this._createEventHandler(node, eventName, methodName);
}
if (handler._listening) {
return;
}
this._listen(node, eventName, handler);
handler._listening = true;
},
_boundListenerKey: function (eventName, methodName) {
return eventName + ':' + methodName;
},
_recordEventHandler: function (host, eventName, target, methodName, handler) {
var hbl = host.__boundListeners;
if (!hbl) {
hbl = host.__boundListeners = new WeakMap();
}
var bl = hbl.get(target);
if (!bl) {
bl = {};
hbl.set(target, bl);
}
var key = this._boundListenerKey(eventName, methodName);
bl[key] = handler;
},
_recallEventHandler: function (host, eventName, target, methodName) {
var hbl = host.__boundListeners;
if (!hbl) {
return;
}
var bl = hbl.get(target);
if (!bl) {
return;
}
var key = this._boundListenerKey(eventName, methodName);
return bl[key];
},
_createEventHandler: function (node, eventName, methodName) {
var host = this;
var handler = function (e) {
if (host[methodName]) {
host[methodName](e, e.detail);
} else {
host._warn(host._logf('_createEventHandler', 'listener method `' + methodName + '` not defined'));
}
};
handler._listening = false;
this._recordEventHandler(host, eventName, node, methodName, handler);
return handler;
},
unlisten: function (node, eventName, methodName) {
var handler = this._recallEventHandler(this, eventName, node, methodName);
if (handler) {
this._unlisten(node, eventName, handler);
handler._listening = false;
}
},
_listen: function (node, eventName, handler) {
node.addEventListener(eventName, handler);
},
_unlisten: function (node, eventName, handler) {
node.removeEventListener(eventName, handler);
}
});
(function () {
'use strict';
var wrap = Polymer.DomApi.wrap;
var HAS_NATIVE_TA = typeof document.head.style.touchAction === 'string';
var GESTURE_KEY = '__polymerGestures';
var HANDLED_OBJ = '__polymerGesturesHandled';
var TOUCH_ACTION = '__polymerGesturesTouchAction';
var TAP_DISTANCE = 25;
var TRACK_DISTANCE = 5;
var TRACK_LENGTH = 2;
var MOUSE_TIMEOUT = 2500;
var MOUSE_EVENTS = [
'mousedown',
'mousemove',
'mouseup',
'click'
];
var MOUSE_WHICH_TO_BUTTONS = [
0,
1,
4,
2
];
var MOUSE_HAS_BUTTONS = function () {
try {
return new MouseEvent('test', { buttons: 1 }).buttons === 1;
} catch (e) {
return false;
}
}();
var IS_TOUCH_ONLY = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);
var mouseCanceller = function (mouseEvent) {
mouseEvent[HANDLED_OBJ] = { skip: true };
if (mouseEvent.type === 'click') {
var path = Polymer.dom(mouseEvent).path;
for (var i = 0; i < path.length; i++) {
if (path[i] === POINTERSTATE.mouse.target) {
return;
}
}
mouseEvent.preventDefault();
mouseEvent.stopPropagation();
}
};
function setupTeardownMouseCanceller(setup) {
for (var i = 0, en; i < MOUSE_EVENTS.length; i++) {
en = MOUSE_EVENTS[i];
if (setup) {
document.addEventListener(en, mouseCanceller, true);
} else {
document.removeEventListener(en, mouseCanceller, true);
}
}
}
function ignoreMouse() {
if (IS_TOUCH_ONLY) {
return;
}
if (!POINTERSTATE.mouse.mouseIgnoreJob) {
setupTeardownMouseCanceller(true);
}
var unset = function () {
setupTeardownMouseCanceller();
POINTERSTATE.mouse.target = null;
POINTERSTATE.mouse.mouseIgnoreJob = null;
};
POINTERSTATE.mouse.mouseIgnoreJob = Polymer.Debounce(POINTERSTATE.mouse.mouseIgnoreJob, unset, MOUSE_TIMEOUT);
}
function hasLeftMouseButton(ev) {
var type = ev.type;
if (MOUSE_EVENTS.indexOf(type) === -1) {
return false;
}
if (type === 'mousemove') {
var buttons = ev.buttons === undefined ? 1 : ev.buttons;
if (ev instanceof window.MouseEvent && !MOUSE_HAS_BUTTONS) {
buttons = MOUSE_WHICH_TO_BUTTONS[ev.which] || 0;
}
return Boolean(buttons & 1);
} else {
var button = ev.button === undefined ? 0 : ev.button;
return button === 0;
}
}
function isSyntheticClick(ev) {
if (ev.type === 'click') {
if (ev.detail === 0) {
return true;
}
var t = Gestures.findOriginalTarget(ev);
var bcr = t.getBoundingClientRect();
var x = ev.pageX, y = ev.pageY;
return !(x >= bcr.left && x <= bcr.right && (y >= bcr.top && y <= bcr.bottom));
}
return false;
}
var POINTERSTATE = {
mouse: {
target: null,
mouseIgnoreJob: null
},
touch: {
x: 0,
y: 0,
id: -1,
scrollDecided: false
}
};
function firstTouchAction(ev) {
var path = Polymer.dom(ev).path;
var ta = 'auto';
for (var i = 0, n; i < path.length; i++) {
n = path[i];
if (n[TOUCH_ACTION]) {
ta = n[TOUCH_ACTION];
break;
}
}
return ta;
}
function trackDocument(stateObj, movefn, upfn) {
stateObj.movefn = movefn;
stateObj.upfn = upfn;
document.addEventListener('mousemove', movefn);
document.addEventListener('mouseup', upfn);
}
function untrackDocument(stateObj) {
document.removeEventListener('mousemove', stateObj.movefn);
document.removeEventListener('mouseup', stateObj.upfn);
stateObj.movefn = null;
stateObj.upfn = null;
}
var Gestures = {
gestures: {},
recognizers: [],
deepTargetFind: function (x, y) {
var node = document.elementFromPoint(x, y);
var next = node;
while (next && next.shadowRoot) {
next = next.shadowRoot.elementFromPoint(x, y);
if (next) {
node = next;
}
}
return node;
},
findOriginalTarget: function (ev) {
if (ev.path) {
return ev.path[0];
}
return ev.target;
},
handleNative: function (ev) {
var handled;
var type = ev.type;
var node = wrap(ev.currentTarget);
var gobj = node[GESTURE_KEY];
if (!gobj) {
return;
}
var gs = gobj[type];
if (!gs) {
return;
}
if (!ev[HANDLED_OBJ]) {
ev[HANDLED_OBJ] = {};
if (type.slice(0, 5) === 'touch') {
var t = ev.changedTouches[0];
if (type === 'touchstart') {
if (ev.touches.length === 1) {
POINTERSTATE.touch.id = t.identifier;
}
}
if (POINTERSTATE.touch.id !== t.identifier) {
return;
}
if (!HAS_NATIVE_TA) {
if (type === 'touchstart' || type === 'touchmove') {
Gestures.handleTouchAction(ev);
}
}
if (type === 'touchend' && !ev.__polymerSimulatedTouch) {
POINTERSTATE.mouse.target = Polymer.dom(ev).rootTarget;
ignoreMouse(true);
}
}
}
handled = ev[HANDLED_OBJ];
if (handled.skip) {
return;
}
var recognizers = Gestures.recognizers;
for (var i = 0, r; i < recognizers.length; i++) {
r = recognizers[i];
if (gs[r.name] && !handled[r.name]) {
if (r.flow && r.flow.start.indexOf(ev.type) > -1 && r.reset) {
r.reset();
}
}
}
for (i = 0, r; i < recognizers.length; i++) {
r = recognizers[i];
if (gs[r.name] && !handled[r.name]) {
handled[r.name] = true;
r[type](ev);
}
}
},
handleTouchAction: function (ev) {
var t = ev.changedTouches[0];
var type = ev.type;
if (type === 'touchstart') {
POINTERSTATE.touch.x = t.clientX;
POINTERSTATE.touch.y = t.clientY;
POINTERSTATE.touch.scrollDecided = false;
} else if (type === 'touchmove') {
if (POINTERSTATE.touch.scrollDecided) {
return;
}
POINTERSTATE.touch.scrollDecided = true;
var ta = firstTouchAction(ev);
var prevent = false;
var dx = Math.abs(POINTERSTATE.touch.x - t.clientX);
var dy = Math.abs(POINTERSTATE.touch.y - t.clientY);
if (!ev.cancelable) {
} else if (ta === 'none') {
prevent = true;
} else if (ta === 'pan-x') {
prevent = dy > dx;
} else if (ta === 'pan-y') {
prevent = dx > dy;
}
if (prevent) {
ev.preventDefault();
} else {
Gestures.prevent('track');
}
}
},
add: function (node, evType, handler) {
node = wrap(node);
var recognizer = this.gestures[evType];
var deps = recognizer.deps;
var name = recognizer.name;
var gobj = node[GESTURE_KEY];
if (!gobj) {
node[GESTURE_KEY] = gobj = {};
}
for (var i = 0, dep, gd; i < deps.length; i++) {
dep = deps[i];
if (IS_TOUCH_ONLY && MOUSE_EVENTS.indexOf(dep) > -1) {
continue;
}
gd = gobj[dep];
if (!gd) {
gobj[dep] = gd = { _count: 0 };
}
if (gd._count === 0) {
node.addEventListener(dep, this.handleNative);
}
gd[name] = (gd[name] || 0) + 1;
gd._count = (gd._count || 0) + 1;
}
node.addEventListener(evType, handler);
if (recognizer.touchAction) {
this.setTouchAction(node, recognizer.touchAction);
}
},
remove: function (node, evType, handler) {
node = wrap(node);
var recognizer = this.gestures[evType];
var deps = recognizer.deps;
var name = recognizer.name;
var gobj = node[GESTURE_KEY];
if (gobj) {
for (var i = 0, dep, gd; i < deps.length; i++) {
dep = deps[i];
gd = gobj[dep];
if (gd && gd[name]) {
gd[name] = (gd[name] || 1) - 1;
gd._count = (gd._count || 1) - 1;
if (gd._count === 0) {
node.removeEventListener(dep, this.handleNative);
}
}
}
}
node.removeEventListener(evType, handler);
},
register: function (recog) {
this.recognizers.push(recog);
for (var i = 0; i < recog.emits.length; i++) {
this.gestures[recog.emits[i]] = recog;
}
},
findRecognizerByEvent: function (evName) {
for (var i = 0, r; i < this.recognizers.length; i++) {
r = this.recognizers[i];
for (var j = 0, n; j < r.emits.length; j++) {
n = r.emits[j];
if (n === evName) {
return r;
}
}
}
return null;
},
setTouchAction: function (node, value) {
if (HAS_NATIVE_TA) {
node.style.touchAction = value;
}
node[TOUCH_ACTION] = value;
},
fire: function (target, type, detail) {
var ev = Polymer.Base.fire(type, detail, {
node: target,
bubbles: true,
cancelable: true
});
if (ev.defaultPrevented) {
var se = detail.sourceEvent;
if (se && se.preventDefault) {
se.preventDefault();
}
}
},
prevent: function (evName) {
var recognizer = this.findRecognizerByEvent(evName);
if (recognizer.info) {
recognizer.info.prevent = true;
}
}
};
Gestures.register({
name: 'downup',
deps: [
'mousedown',
'touchstart',
'touchend'
],
flow: {
start: [
'mousedown',
'touchstart'
],
end: [
'mouseup',
'touchend'
]
},
emits: [
'down',
'up'
],
info: {
movefn: null,
upfn: null
},
reset: function () {
untrackDocument(this.info);
},
mousedown: function (e) {
if (!hasLeftMouseButton(e)) {
return;
}
var t = Gestures.findOriginalTarget(e);
var self = this;
var movefn = function movefn(e) {
if (!hasLeftMouseButton(e)) {
self.fire('up', t, e);
untrackDocument(self.info);
}
};
var upfn = function upfn(e) {
if (hasLeftMouseButton(e)) {
self.fire('up', t, e);
}
untrackDocument(self.info);
};
trackDocument(this.info, movefn, upfn);
this.fire('down', t, e);
},
touchstart: function (e) {
this.fire('down', Gestures.findOriginalTarget(e), e.changedTouches[0]);
},
touchend: function (e) {
this.fire('up', Gestures.findOriginalTarget(e), e.changedTouches[0]);
},
fire: function (type, target, event) {
Gestures.fire(target, type, {
x: event.clientX,
y: event.clientY,
sourceEvent: event,
prevent: function (e) {
return Gestures.prevent(e);
}
});
}
});
Gestures.register({
name: 'track',
touchAction: 'none',
deps: [
'mousedown',
'touchstart',
'touchmove',
'touchend'
],
flow: {
start: [
'mousedown',
'touchstart'
],
end: [
'mouseup',
'touchend'
]
},
emits: ['track'],
info: {
x: 0,
y: 0,
state: 'start',
started: false,
moves: [],
addMove: function (move) {
if (this.moves.length > TRACK_LENGTH) {
this.moves.shift();
}
this.moves.push(move);
},
movefn: null,
upfn: null,
prevent: false
},
reset: function () {
this.info.state = 'start';
this.info.started = false;
this.info.moves = [];
this.info.x = 0;
this.info.y = 0;
this.info.prevent = false;
untrackDocument(this.info);
},
hasMovedEnough: function (x, y) {
if (this.info.prevent) {
return false;
}
if (this.info.started) {
return true;
}
var dx = Math.abs(this.info.x - x);
var dy = Math.abs(this.info.y - y);
return dx >= TRACK_DISTANCE || dy >= TRACK_DISTANCE;
},
mousedown: function (e) {
if (!hasLeftMouseButton(e)) {
return;
}
var t = Gestures.findOriginalTarget(e);
var self = this;
var movefn = function movefn(e) {
var x = e.clientX, y = e.clientY;
if (self.hasMovedEnough(x, y)) {
self.info.state = self.info.started ? e.type === 'mouseup' ? 'end' : 'track' : 'start';
if (self.info.state === 'start') {
Gestures.prevent('tap');
}
self.info.addMove({
x: x,
y: y
});
if (!hasLeftMouseButton(e)) {
self.info.state = 'end';
untrackDocument(self.info);
}
self.fire(t, e);
self.info.started = true;
}
};
var upfn = function upfn(e) {
if (self.info.started) {
movefn(e);
}
untrackDocument(self.info);
};
trackDocument(this.info, movefn, upfn);
this.info.x = e.clientX;
this.info.y = e.clientY;
},
touchstart: function (e) {
var ct = e.changedTouches[0];
this.info.x = ct.clientX;
this.info.y = ct.clientY;
},
touchmove: function (e) {
var t = Gestures.findOriginalTarget(e);
var ct = e.changedTouches[0];
var x = ct.clientX, y = ct.clientY;
if (this.hasMovedEnough(x, y)) {
if (this.info.state === 'start') {
Gestures.prevent('tap');
}
this.info.addMove({
x: x,
y: y
});
this.fire(t, ct);
this.info.state = 'track';
this.info.started = true;
}
},
touchend: function (e) {
var t = Gestures.findOriginalTarget(e);
var ct = e.changedTouches[0];
if (this.info.started) {
this.info.state = 'end';
this.info.addMove({
x: ct.clientX,
y: ct.clientY
});
this.fire(t, ct);
}
},
fire: function (target, touch) {
var secondlast = this.info.moves[this.info.moves.length - 2];
var lastmove = this.info.moves[this.info.moves.length - 1];
var dx = lastmove.x - this.info.x;
var dy = lastmove.y - this.info.y;
var ddx, ddy = 0;
if (secondlast) {
ddx = lastmove.x - secondlast.x;
ddy = lastmove.y - secondlast.y;
}
return Gestures.fire(target, 'track', {
state: this.info.state,
x: touch.clientX,
y: touch.clientY,
dx: dx,
dy: dy,
ddx: ddx,
ddy: ddy,
sourceEvent: touch,
hover: function () {
return Gestures.deepTargetFind(touch.clientX, touch.clientY);
}
});
}
});
Gestures.register({
name: 'tap',
deps: [
'mousedown',
'click',
'touchstart',
'touchend'
],
flow: {
start: [
'mousedown',
'touchstart'
],
end: [
'click',
'touchend'
]
},
emits: ['tap'],
info: {
x: NaN,
y: NaN,
prevent: false
},
reset: function () {
this.info.x = NaN;
this.info.y = NaN;
this.info.prevent = false;
},
save: function (e) {
this.info.x = e.clientX;
this.info.y = e.clientY;
},
mousedown: function (e) {
if (hasLeftMouseButton(e)) {
this.save(e);
}
},
click: function (e) {
if (hasLeftMouseButton(e)) {
this.forward(e);
}
},
touchstart: function (e) {
this.save(e.changedTouches[0]);
},
touchend: function (e) {
this.forward(e.changedTouches[0]);
},
forward: function (e) {
var dx = Math.abs(e.clientX - this.info.x);
var dy = Math.abs(e.clientY - this.info.y);
var t = Gestures.findOriginalTarget(e);
if (isNaN(dx) || isNaN(dy) || dx <= TAP_DISTANCE && dy <= TAP_DISTANCE || isSyntheticClick(e)) {
if (!this.info.prevent) {
Gestures.fire(t, 'tap', {
x: e.clientX,
y: e.clientY,
sourceEvent: e
});
}
}
}
});
var DIRECTION_MAP = {
x: 'pan-x',
y: 'pan-y',
none: 'none',
all: 'auto'
};
Polymer.Base._addFeature({
_setupGestures: function () {
this.__polymerGestures = null;
},
_listen: function (node, eventName, handler) {
if (Gestures.gestures[eventName]) {
Gestures.add(node, eventName, handler);
} else {
node.addEventListener(eventName, handler);
}
},
_unlisten: function (node, eventName, handler) {
if (Gestures.gestures[eventName]) {
Gestures.remove(node, eventName, handler);
} else {
node.removeEventListener(eventName, handler);
}
},
setScrollDirection: function (direction, node) {
node = node || this;
Gestures.setTouchAction(node, DIRECTION_MAP[direction] || 'auto');
}
});
Polymer.Gestures = Gestures;
}());
Polymer.Base._addFeature({
$$: function (slctr) {
return Polymer.dom(this.root).querySelector(slctr);
},
toggleClass: function (name, bool, node) {
node = node || this;
if (arguments.length == 1) {
bool = !node.classList.contains(name);
}
if (bool) {
Polymer.dom(node).classList.add(name);
} else {
Polymer.dom(node).classList.remove(name);
}
},
toggleAttribute: function (name, bool, node) {
node = node || this;
if (arguments.length == 1) {
bool = !node.hasAttribute(name);
}
if (bool) {
Polymer.dom(node).setAttribute(name, '');
} else {
Polymer.dom(node).removeAttribute(name);
}
},
classFollows: function (name, toElement, fromElement) {
if (fromElement) {
Polymer.dom(fromElement).classList.remove(name);
}
if (toElement) {
Polymer.dom(toElement).classList.add(name);
}
},
attributeFollows: function (name, toElement, fromElement) {
if (fromElement) {
Polymer.dom(fromElement).removeAttribute(name);
}
if (toElement) {
Polymer.dom(toElement).setAttribute(name, '');
}
},
getEffectiveChildNodes: function () {
return Polymer.dom(this).getEffectiveChildNodes();
},
getEffectiveChildren: function () {
var list = Polymer.dom(this).getEffectiveChildNodes();
return list.filter(function (n) {
return n.nodeType === Node.ELEMENT_NODE;
});
},
getEffectiveTextContent: function () {
var cn = this.getEffectiveChildNodes();
var tc = [];
for (var i = 0, c; c = cn[i]; i++) {
if (c.nodeType !== Node.COMMENT_NODE) {
tc.push(Polymer.dom(c).textContent);
}
}
return tc.join('');
},
queryEffectiveChildren: function (slctr) {
var e$ = Polymer.dom(this).queryDistributedElements(slctr);
return e$ && e$[0];
},
queryAllEffectiveChildren: function (slctr) {
return Polymer.dom(this).queryDistributedElements(slctr);
},
getContentChildNodes: function (slctr) {
var content = Polymer.dom(this.root).querySelector(slctr || 'content');
return content ? Polymer.dom(content).getDistributedNodes() : [];
},
getContentChildren: function (slctr) {
return this.getContentChildNodes(slctr).filter(function (n) {
return n.nodeType === Node.ELEMENT_NODE;
});
},
fire: function (type, detail, options) {
options = options || Polymer.nob;
var node = options.node || this;
detail = detail === null || detail === undefined ? {} : detail;
var bubbles = options.bubbles === undefined ? true : options.bubbles;
var cancelable = Boolean(options.cancelable);
var useCache = options._useCache;
var event = this._getEvent(type, bubbles, cancelable, useCache);
event.detail = detail;
if (useCache) {
this.__eventCache[type] = null;
}
node.dispatchEvent(event);
if (useCache) {
this.__eventCache[type] = event;
}
return event;
},
__eventCache: {},
_getEvent: function (type, bubbles, cancelable, useCache) {
var event = useCache && this.__eventCache[type];
if (!event || (event.bubbles != bubbles || event.cancelable != cancelable)) {
event = new Event(type, {
bubbles: Boolean(bubbles),
cancelable: cancelable
});
}
return event;
},
async: function (callback, waitTime) {
var self = this;
return Polymer.Async.run(function () {
callback.call(self);
}, waitTime);
},
cancelAsync: function (handle) {
Polymer.Async.cancel(handle);
},
arrayDelete: function (path, item) {
var index;
if (Array.isArray(path)) {
index = path.indexOf(item);
if (index >= 0) {
return path.splice(index, 1);
}
} else {
var arr = this._get(path);
index = arr.indexOf(item);
if (index >= 0) {
return this.splice(path, index, 1);
}
}
},
transform: function (transform, node) {
node = node || this;
node.style.webkitTransform = transform;
node.style.transform = transform;
},
translate3d: function (x, y, z, node) {
node = node || this;
this.transform('translate3d(' + x + ',' + y + ',' + z + ')', node);
},
importHref: function (href, onload, onerror, optAsync) {
var l = document.createElement('link');
l.rel = 'import';
l.href = href;
optAsync = Boolean(optAsync);
if (optAsync) {
l.setAttribute('async', '');
}
var self = this;
if (onload) {
l.onload = function (e) {
return onload.call(self, e);
};
}
if (onerror) {
l.onerror = function (e) {
return onerror.call(self, e);
};
}
document.head.appendChild(l);
return l;
},
create: function (tag, props) {
var elt = document.createElement(tag);
if (props) {
for (var n in props) {
elt[n] = props[n];
}
}
return elt;
},
isLightDescendant: function (node) {
return this !== node && this.contains(node) && Polymer.dom(this).getOwnerRoot() === Polymer.dom(node).getOwnerRoot();
},
isLocalDescendant: function (node) {
return this.root === Polymer.dom(node).getOwnerRoot();
}
});
Polymer.Bind = {
_dataEventCache: {},
prepareModel: function (model) {
Polymer.Base.mixin(model, this._modelApi);
},
_modelApi: {
_notifyChange: function (source, event, value) {
value = value === undefined ? this[source] : value;
event = event || Polymer.CaseMap.camelToDashCase(source) + '-changed';
this.fire(event, { value: value }, {
bubbles: false,
cancelable: false,
_useCache: true
});
},
_propertySetter: function (property, value, effects, fromAbove) {
var old = this.__data__[property];
if (old !== value && (old === old || value === value)) {
this.__data__[property] = value;
if (typeof value == 'object') {
this._clearPath(property);
}
if (this._propertyChanged) {
this._propertyChanged(property, value, old);
}
if (effects) {
this._effectEffects(property, value, effects, old, fromAbove);
}
}
return old;
},
__setProperty: function (property, value, quiet, node) {
node = node || this;
var effects = node._propertyEffects && node._propertyEffects[property];
if (effects) {
node._propertySetter(property, value, effects, quiet);
} else {
node[property] = value;
}
},
_effectEffects: function (property, value, effects, old, fromAbove) {
for (var i = 0, l = effects.length, fx; i < l && (fx = effects[i]); i++) {
fx.fn.call(this, property, value, fx.effect, old, fromAbove);
}
},
_clearPath: function (path) {
for (var prop in this.__data__) {
if (prop.indexOf(path + '.') === 0) {
this.__data__[prop] = undefined;
}
}
}
},
ensurePropertyEffects: function (model, property) {
if (!model._propertyEffects) {
model._propertyEffects = {};
}
var fx = model._propertyEffects[property];
if (!fx) {
fx = model._propertyEffects[property] = [];
}
return fx;
},
addPropertyEffect: function (model, property, kind, effect) {
var fx = this.ensurePropertyEffects(model, property);
var propEffect = {
kind: kind,
effect: effect,
fn: Polymer.Bind['_' + kind + 'Effect']
};
fx.push(propEffect);
return propEffect;
},
createBindings: function (model) {
var fx$ = model._propertyEffects;
if (fx$) {
for (var n in fx$) {
var fx = fx$[n];
fx.sort(this._sortPropertyEffects);
this._createAccessors(model, n, fx);
}
}
},
_sortPropertyEffects: function () {
var EFFECT_ORDER = {
'compute': 0,
'annotation': 1,
'annotatedComputation': 2,
'reflect': 3,
'notify': 4,
'observer': 5,
'complexObserver': 6,
'function': 7
};
return function (a, b) {
return EFFECT_ORDER[a.kind] - EFFECT_ORDER[b.kind];
};
}(),
_createAccessors: function (model, property, effects) {
var defun = {
get: function () {
return this.__data__[property];
}
};
var setter = function (value) {
this._propertySetter(property, value, effects);
};
var info = model.getPropertyInfo && model.getPropertyInfo(property);
if (info && info.readOnly) {
if (!info.computed) {
model['_set' + this.upper(property)] = setter;
}
} else {
defun.set = setter;
}
Object.defineProperty(model, property, defun);
},
upper: function (name) {
return name[0].toUpperCase() + name.substring(1);
},
_addAnnotatedListener: function (model, index, property, path, event, negated) {
if (!model._bindListeners) {
model._bindListeners = [];
}
var fn = this._notedListenerFactory(property, path, this._isStructured(path), negated);
var eventName = event || Polymer.CaseMap.camelToDashCase(property) + '-changed';
model._bindListeners.push({
index: index,
property: property,
path: path,
changedFn: fn,
event: eventName
});
},
_isStructured: function (path) {
return path.indexOf('.') > 0;
},
_isEventBogus: function (e, target) {
return e.path && e.path[0] !== target;
},
_notedListenerFactory: function (property, path, isStructured, negated) {
return function (target, value, targetPath) {
if (targetPath) {
this._notifyPath(this._fixPath(path, property, targetPath), value);
} else {
value = target[property];
if (negated) {
value = !value;
}
if (!isStructured) {
this[path] = value;
} else {
if (this.__data__[path] != value) {
this.set(path, value);
}
}
}
};
},
prepareInstance: function (inst) {
inst.__data__ = Object.create(null);
},
setupBindListeners: function (inst) {
var b$ = inst._bindListeners;
for (var i = 0, l = b$.length, info; i < l && (info = b$[i]); i++) {
var node = inst._nodes[info.index];
this._addNotifyListener(node, inst, info.event, info.changedFn);
}
},
_addNotifyListener: function (element, context, event, changedFn) {
element.addEventListener(event, function (e) {
return context._notifyListener(changedFn, e);
});
}
};
Polymer.Base.extend(Polymer.Bind, {
_shouldAddListener: function (effect) {
return effect.name && effect.kind != 'attribute' && effect.kind != 'text' && !effect.isCompound && effect.parts[0].mode === '{';
},
_annotationEffect: function (source, value, effect) {
if (source != effect.value) {
value = this._get(effect.value);
this.__data__[effect.value] = value;
}
var calc = effect.negate ? !value : value;
if (!effect.customEvent || this._nodes[effect.index][effect.name] !== calc) {
return this._applyEffectValue(effect, calc);
}
},
_reflectEffect: function (source, value, effect) {
this.reflectPropertyToAttribute(source, effect.attribute, value);
},
_notifyEffect: function (source, value, effect, old, fromAbove) {
if (!fromAbove) {
this._notifyChange(source, effect.event, value);
}
},
_functionEffect: function (source, value, fn, old, fromAbove) {
fn.call(this, source, value, old, fromAbove);
},
_observerEffect: function (source, value, effect, old) {
var fn = this[effect.method];
if (fn) {
fn.call(this, value, old);
} else {
this._warn(this._logf('_observerEffect', 'observer method `' + effect.method + '` not defined'));
}
},
_complexObserverEffect: function (source, value, effect) {
var fn = this[effect.method];
if (fn) {
var args = Polymer.Bind._marshalArgs(this.__data__, effect, source, value);
if (args) {
fn.apply(this, args);
}
} else if (effect.dynamicFn) {
} else {
this._warn(this._logf('_complexObserverEffect', 'observer method `' + effect.method + '` not defined'));
}
},
_computeEffect: function (source, value, effect) {
var fn = this[effect.method];
if (fn) {
var args = Polymer.Bind._marshalArgs(this.__data__, effect, source, value);
if (args) {
var computedvalue = fn.apply(this, args);
this.__setProperty(effect.name, computedvalue);
}
} else if (effect.dynamicFn) {
} else {
this._warn(this._logf('_computeEffect', 'compute method `' + effect.method + '` not defined'));
}
},
_annotatedComputationEffect: function (source, value, effect) {
var computedHost = this._rootDataHost || this;
var fn = computedHost[effect.method];
if (fn) {
var args = Polymer.Bind._marshalArgs(this.__data__, effect, source, value);
if (args) {
var computedvalue = fn.apply(computedHost, args);
if (effect.negate) {
computedvalue = !computedvalue;
}
this._applyEffectValue(effect, computedvalue);
}
} else if (effect.dynamicFn) {
} else {
computedHost._warn(computedHost._logf('_annotatedComputationEffect', 'compute method `' + effect.method + '` not defined'));
}
},
_marshalArgs: function (model, effect, path, value) {
var values = [];
var args = effect.args;
var bailoutEarly = args.length > 1 || effect.dynamicFn;
for (var i = 0, l = args.length; i < l; i++) {
var arg = args[i];
var name = arg.name;
var v;
if (arg.literal) {
v = arg.value;
} else if (arg.structured) {
v = Polymer.Base._get(name, model);
} else {
v = model[name];
}
if (bailoutEarly && v === undefined) {
return;
}
if (arg.wildcard) {
var baseChanged = name.indexOf(path + '.') === 0;
var matches = effect.trigger.name.indexOf(name) === 0 && !baseChanged;
values[i] = {
path: matches ? path : name,
value: matches ? value : v,
base: v
};
} else {
values[i] = v;
}
}
return values;
}
});
Polymer.Base._addFeature({
_addPropertyEffect: function (property, kind, effect) {
var prop = Polymer.Bind.addPropertyEffect(this, property, kind, effect);
prop.pathFn = this['_' + prop.kind + 'PathEffect'];
},
_prepEffects: function () {
Polymer.Bind.prepareModel(this);
this._addAnnotationEffects(this._notes);
},
_prepBindings: function () {
Polymer.Bind.createBindings(this);
},
_addPropertyEffects: function (properties) {
if (properties) {
for (var p in properties) {
var prop = properties[p];
if (prop.observer) {
this._addObserverEffect(p, prop.observer);
}
if (prop.computed) {
prop.readOnly = true;
this._addComputedEffect(p, prop.computed);
}
if (prop.notify) {
this._addPropertyEffect(p, 'notify', { event: Polymer.CaseMap.camelToDashCase(p) + '-changed' });
}
if (prop.reflectToAttribute) {
var attr = Polymer.CaseMap.camelToDashCase(p);
if (attr[0] === '-') {
this._warn(this._logf('_addPropertyEffects', 'Property ' + p + ' cannot be reflected to attribute ' + attr + ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'));
} else {
this._addPropertyEffect(p, 'reflect', { attribute: attr });
}
}
if (prop.readOnly) {
Polymer.Bind.ensurePropertyEffects(this, p);
}
}
}
},
_addComputedEffect: function (name, expression) {
var sig = this._parseMethod(expression);
var dynamicFn = sig.dynamicFn;
for (var i = 0, arg; i < sig.args.length && (arg = sig.args[i]); i++) {
this._addPropertyEffect(arg.model, 'compute', {
method: sig.method,
args: sig.args,
trigger: arg,
name: name,
dynamicFn: dynamicFn
});
}
if (dynamicFn) {
this._addPropertyEffect(sig.method, 'compute', {
method: sig.method,
args: sig.args,
trigger: null,
name: name,
dynamicFn: dynamicFn
});
}
},
_addObserverEffect: function (property, observer) {
this._addPropertyEffect(property, 'observer', {
method: observer,
property: property
});
},
_addComplexObserverEffects: function (observers) {
if (observers) {
for (var i = 0, o; i < observers.length && (o = observers[i]); i++) {
this._addComplexObserverEffect(o);
}
}
},
_addComplexObserverEffect: function (observer) {
var sig = this._parseMethod(observer);
if (!sig) {
throw new Error('Malformed observer expression \'' + observer + '\'');
}
var dynamicFn = sig.dynamicFn;
for (var i = 0, arg; i < sig.args.length && (arg = sig.args[i]); i++) {
this._addPropertyEffect(arg.model, 'complexObserver', {
method: sig.method,
args: sig.args,
trigger: arg,
dynamicFn: dynamicFn
});
}
if (dynamicFn) {
this._addPropertyEffect(sig.method, 'complexObserver', {
method: sig.method,
args: sig.args,
trigger: null,
dynamicFn: dynamicFn
});
}
},
_addAnnotationEffects: function (notes) {
for (var i = 0, note; i < notes.length && (note = notes[i]); i++) {
var b$ = note.bindings;
for (var j = 0, binding; j < b$.length && (binding = b$[j]); j++) {
this._addAnnotationEffect(binding, i);
}
}
},
_addAnnotationEffect: function (note, index) {
if (Polymer.Bind._shouldAddListener(note)) {
Polymer.Bind._addAnnotatedListener(this, index, note.name, note.parts[0].value, note.parts[0].event, note.parts[0].negate);
}
for (var i = 0; i < note.parts.length; i++) {
var part = note.parts[i];
if (part.signature) {
this._addAnnotatedComputationEffect(note, part, index);
} else if (!part.literal) {
if (note.kind === 'attribute' && note.name[0] === '-') {
this._warn(this._logf('_addAnnotationEffect', 'Cannot set attribute ' + note.name + ' because "-" is not a valid attribute starting character'));
} else {
this._addPropertyEffect(part.model, 'annotation', {
kind: note.kind,
index: index,
name: note.name,
propertyName: note.propertyName,
value: part.value,
isCompound: note.isCompound,
compoundIndex: part.compoundIndex,
event: part.event,
customEvent: part.customEvent,
negate: part.negate
});
}
}
}
},
_addAnnotatedComputationEffect: function (note, part, index) {
var sig = part.signature;
if (sig.static) {
this.__addAnnotatedComputationEffect('__static__', index, note, part, null);
} else {
for (var i = 0, arg; i < sig.args.length && (arg = sig.args[i]); i++) {
if (!arg.literal) {
this.__addAnnotatedComputationEffect(arg.model, index, note, part, arg);
}
}
if (sig.dynamicFn) {
this.__addAnnotatedComputationEffect(sig.method, index, note, part, null);
}
}
},
__addAnnotatedComputationEffect: function (property, index, note, part, trigger) {
this._addPropertyEffect(property, 'annotatedComputation', {
index: index,
isCompound: note.isCompound,
compoundIndex: part.compoundIndex,
kind: note.kind,
name: note.name,
negate: part.negate,
method: part.signature.method,
args: part.signature.args,
trigger: trigger,
dynamicFn: part.signature.dynamicFn
});
},
_parseMethod: function (expression) {
var m = expression.match(/([^\s]+?)\(([\s\S]*)\)/);
if (m) {
var sig = {
method: m[1],
static: true
};
if (this.getPropertyInfo(sig.method) !== Polymer.nob) {
sig.static = false;
sig.dynamicFn = true;
}
if (m[2].trim()) {
var args = m[2].replace(/\\,/g, '&comma;').split(',');
return this._parseArgs(args, sig);
} else {
sig.args = Polymer.nar;
return sig;
}
}
},
_parseArgs: function (argList, sig) {
sig.args = argList.map(function (rawArg) {
var arg = this._parseArg(rawArg);
if (!arg.literal) {
sig.static = false;
}
return arg;
}, this);
return sig;
},
_parseArg: function (rawArg) {
var arg = rawArg.trim().replace(/&comma;/g, ',').replace(/\\(.)/g, '$1');
var a = { name: arg };
var fc = arg[0];
if (fc === '-') {
fc = arg[1];
}
if (fc >= '0' && fc <= '9') {
fc = '#';
}
switch (fc) {
case '\'':
case '"':
a.value = arg.slice(1, -1);
a.literal = true;
break;
case '#':
a.value = Number(arg);
a.literal = true;
break;
}
if (!a.literal) {
a.model = this._modelForPath(arg);
a.structured = arg.indexOf('.') > 0;
if (a.structured) {
a.wildcard = arg.slice(-2) == '.*';
if (a.wildcard) {
a.name = arg.slice(0, -2);
}
}
}
return a;
},
_marshalInstanceEffects: function () {
Polymer.Bind.prepareInstance(this);
if (this._bindListeners) {
Polymer.Bind.setupBindListeners(this);
}
},
_applyEffectValue: function (info, value) {
var node = this._nodes[info.index];
var property = info.name;
if (info.isCompound) {
var storage = node.__compoundStorage__[property];
storage[info.compoundIndex] = value;
value = storage.join('');
}
if (info.kind == 'attribute') {
this.serializeValueToAttribute(value, property, node);
} else {
if (property === 'className') {
value = this._scopeElementClass(node, value);
}
if (property === 'textContent' || node.localName == 'input' && property == 'value') {
value = value == undefined ? '' : value;
}
var pinfo;
if (!node._propertyInfo || !(pinfo = node._propertyInfo[property]) || !pinfo.readOnly) {
this.__setProperty(property, value, false, node);
}
}
},
_executeStaticEffects: function () {
if (this._propertyEffects && this._propertyEffects.__static__) {
this._effectEffects('__static__', null, this._propertyEffects.__static__);
}
}
});
(function () {
var usePolyfillProto = Polymer.Settings.usePolyfillProto;
Polymer.Base._addFeature({
_setupConfigure: function (initialConfig) {
this._config = {};
this._handlers = [];
this._aboveConfig = null;
if (initialConfig) {
for (var i in initialConfig) {
if (initialConfig[i] !== undefined) {
this._config[i] = initialConfig[i];
}
}
}
},
_marshalAttributes: function () {
this._takeAttributesToModel(this._config);
},
_attributeChangedImpl: function (name) {
var model = this._clientsReadied ? this : this._config;
this._setAttributeToProperty(model, name);
},
_configValue: function (name, value) {
var info = this._propertyInfo[name];
if (!info || !info.readOnly) {
this._config[name] = value;
}
},
_beforeClientsReady: function () {
this._configure();
},
_configure: function () {
this._configureAnnotationReferences();
this._aboveConfig = this.mixin({}, this._config);
var config = {};
for (var i = 0; i < this.behaviors.length; i++) {
this._configureProperties(this.behaviors[i].properties, config);
}
this._configureProperties(this.properties, config);
this.mixin(config, this._aboveConfig);
this._config = config;
if (this._clients && this._clients.length) {
this._distributeConfig(this._config);
}
},
_configureProperties: function (properties, config) {
for (var i in properties) {
var c = properties[i];
if (!usePolyfillProto && this.hasOwnProperty(i) && this._propertyEffects && this._propertyEffects[i]) {
config[i] = this[i];
delete this[i];
} else if (c.value !== undefined) {
var value = c.value;
if (typeof value == 'function') {
value = value.call(this, this._config);
}
config[i] = value;
}
}
},
_distributeConfig: function (config) {
var fx$ = this._propertyEffects;
if (fx$) {
for (var p in config) {
var fx = fx$[p];
if (fx) {
for (var i = 0, l = fx.length, x; i < l && (x = fx[i]); i++) {
if (x.kind === 'annotation' && !x.isCompound) {
var node = this._nodes[x.effect.index];
var name = x.effect.propertyName;
var isAttr = x.effect.kind == 'attribute';
var hasEffect = node._propertyEffects && node._propertyEffects[name];
if (node._configValue && (hasEffect || !isAttr)) {
var value = p === x.effect.value ? config[p] : this._get(x.effect.value, config);
if (isAttr) {
value = node.deserialize(this.serialize(value), node._propertyInfo[name].type);
}
node._configValue(name, value);
}
}
}
}
}
}
},
_afterClientsReady: function () {
this._executeStaticEffects();
this._applyConfig(this._config, this._aboveConfig);
this._flushHandlers();
},
_applyConfig: function (config, aboveConfig) {
for (var n in config) {
if (this[n] === undefined) {
this.__setProperty(n, config[n], n in aboveConfig);
}
}
},
_notifyListener: function (fn, e) {
if (!Polymer.Bind._isEventBogus(e, e.target)) {
var value, path;
if (e.detail) {
value = e.detail.value;
path = e.detail.path;
}
if (!this._clientsReadied) {
this._queueHandler([
fn,
e.target,
value,
path
]);
} else {
return fn.call(this, e.target, value, path);
}
}
},
_queueHandler: function (args) {
this._handlers.push(args);
},
_flushHandlers: function () {
var h$ = this._handlers;
for (var i = 0, l = h$.length, h; i < l && (h = h$[i]); i++) {
h[0].call(this, h[1], h[2], h[3]);
}
this._handlers = [];
}
});
}());
(function () {
'use strict';
Polymer.Base._addFeature({
notifyPath: function (path, value, fromAbove) {
var info = {};
this._get(path, this, info);
if (info.path) {
this._notifyPath(info.path, value, fromAbove);
}
},
_notifyPath: function (path, value, fromAbove) {
var old = this._propertySetter(path, value);
if (old !== value && (old === old || value === value)) {
this._pathEffector(path, value);
if (!fromAbove) {
this._notifyPathUp(path, value);
}
return true;
}
},
_getPathParts: function (path) {
if (Array.isArray(path)) {
var parts = [];
for (var i = 0; i < path.length; i++) {
var args = path[i].toString().split('.');
for (var j = 0; j < args.length; j++) {
parts.push(args[j]);
}
}
return parts;
} else {
return path.toString().split('.');
}
},
set: function (path, value, root) {
var prop = root || this;
var parts = this._getPathParts(path);
var array;
var last = parts[parts.length - 1];
if (parts.length > 1) {
for (var i = 0; i < parts.length - 1; i++) {
var part = parts[i];
if (array && part[0] == '#') {
prop = Polymer.Collection.get(array).getItem(part);
} else {
prop = prop[part];
if (array && parseInt(part, 10) == part) {
parts[i] = Polymer.Collection.get(array).getKey(prop);
}
}
if (!prop) {
return;
}
array = Array.isArray(prop) ? prop : null;
}
if (array) {
var coll = Polymer.Collection.get(array);
var old, key;
if (last[0] == '#') {
key = last;
old = coll.getItem(key);
last = array.indexOf(old);
coll.setItem(key, value);
} else if (parseInt(last, 10) == last) {
old = prop[last];
key = coll.getKey(old);
parts[i] = key;
coll.setItem(key, value);
}
}
prop[last] = value;
if (!root) {
this._notifyPath(parts.join('.'), value);
}
} else {
prop[path] = value;
}
},
get: function (path, root) {
return this._get(path, root);
},
_get: function (path, root, info) {
var prop = root || this;
var parts = this._getPathParts(path);
var array;
for (var i = 0; i < parts.length; i++) {
if (!prop) {
return;
}
var part = parts[i];
if (array && part[0] == '#') {
prop = Polymer.Collection.get(array).getItem(part);
} else {
prop = prop[part];
if (info && array && parseInt(part, 10) == part) {
parts[i] = Polymer.Collection.get(array).getKey(prop);
}
}
array = Array.isArray(prop) ? prop : null;
}
if (info) {
info.path = parts.join('.');
}
return prop;
},
_pathEffector: function (path, value) {
var model = this._modelForPath(path);
var fx$ = this._propertyEffects && this._propertyEffects[model];
if (fx$) {
for (var i = 0, fx; i < fx$.length && (fx = fx$[i]); i++) {
var fxFn = fx.pathFn;
if (fxFn) {
fxFn.call(this, path, value, fx.effect);
}
}
}
if (this._boundPaths) {
this._notifyBoundPaths(path, value);
}
},
_annotationPathEffect: function (path, value, effect) {
if (effect.value === path || effect.value.indexOf(path + '.') === 0) {
Polymer.Bind._annotationEffect.call(this, path, value, effect);
} else if (path.indexOf(effect.value + '.') === 0 && !effect.negate) {
var node = this._nodes[effect.index];
if (node && node._notifyPath) {
var p = this._fixPath(effect.name, effect.value, path);
node._notifyPath(p, value, true);
}
}
},
_complexObserverPathEffect: function (path, value, effect) {
if (this._pathMatchesEffect(path, effect)) {
Polymer.Bind._complexObserverEffect.call(this, path, value, effect);
}
},
_computePathEffect: function (path, value, effect) {
if (this._pathMatchesEffect(path, effect)) {
Polymer.Bind._computeEffect.call(this, path, value, effect);
}
},
_annotatedComputationPathEffect: function (path, value, effect) {
if (this._pathMatchesEffect(path, effect)) {
Polymer.Bind._annotatedComputationEffect.call(this, path, value, effect);
}
},
_pathMatchesEffect: function (path, effect) {
var effectArg = effect.trigger.name;
return effectArg == path || effectArg.indexOf(path + '.') === 0 || effect.trigger.wildcard && path.indexOf(effectArg) === 0;
},
linkPaths: function (to, from) {
this._boundPaths = this._boundPaths || {};
if (from) {
this._boundPaths[to] = from;
} else {
this.unlinkPaths(to);
}
},
unlinkPaths: function (path) {
if (this._boundPaths) {
delete this._boundPaths[path];
}
},
_notifyBoundPaths: function (path, value) {
for (var a in this._boundPaths) {
var b = this._boundPaths[a];
if (path.indexOf(a + '.') == 0) {
this._notifyPath(this._fixPath(b, a, path), value);
} else if (path.indexOf(b + '.') == 0) {
this._notifyPath(this._fixPath(a, b, path), value);
}
}
},
_fixPath: function (property, root, path) {
return property + path.slice(root.length);
},
_notifyPathUp: function (path, value) {
var rootName = this._modelForPath(path);
var dashCaseName = Polymer.CaseMap.camelToDashCase(rootName);
var eventName = dashCaseName + this._EVENT_CHANGED;
this.fire(eventName, {
path: path,
value: value
}, {
bubbles: false,
_useCache: true
});
},
_modelForPath: function (path) {
var dot = path.indexOf('.');
return dot < 0 ? path : path.slice(0, dot);
},
_EVENT_CHANGED: '-changed',
notifySplices: function (path, splices) {
var info = {};
var array = this._get(path, this, info);
this._notifySplices(array, info.path, splices);
},
_notifySplices: function (array, path, splices) {
var change = {
keySplices: Polymer.Collection.applySplices(array, splices),
indexSplices: splices
};
if (!array.hasOwnProperty('splices')) {
Object.defineProperty(array, 'splices', {
configurable: true,
writable: true
});
}
array.splices = change;
this._notifyPath(path + '.splices', change);
this._notifyPath(path + '.length', array.length);
change.keySplices = null;
change.indexSplices = null;
},
_notifySplice: function (array, path, index, added, removed) {
this._notifySplices(array, path, [{
index: index,
addedCount: added,
removed: removed,
object: array,
type: 'splice'
}]);
},
push: function (path) {
var info = {};
var array = this._get(path, this, info);
var args = Array.prototype.slice.call(arguments, 1);
var len = array.length;
var ret = array.push.apply(array, args);
if (args.length) {
this._notifySplice(array, info.path, len, args.length, []);
}
return ret;
},
pop: function (path) {
var info = {};
var array = this._get(path, this, info);
var hadLength = Boolean(array.length);
var args = Array.prototype.slice.call(arguments, 1);
var ret = array.pop.apply(array, args);
if (hadLength) {
this._notifySplice(array, info.path, array.length, 0, [ret]);
}
return ret;
},
splice: function (path, start) {
var info = {};
var array = this._get(path, this, info);
if (start < 0) {
start = array.length - Math.floor(-start);
} else {
start = Math.floor(start);
}
if (!start) {
start = 0;
}
var args = Array.prototype.slice.call(arguments, 1);
var ret = array.splice.apply(array, args);
var addedCount = Math.max(args.length - 2, 0);
if (addedCount || ret.length) {
this._notifySplice(array, info.path, start, addedCount, ret);
}
return ret;
},
shift: function (path) {
var info = {};
var array = this._get(path, this, info);
var hadLength = Boolean(array.length);
var args = Array.prototype.slice.call(arguments, 1);
var ret = array.shift.apply(array, args);
if (hadLength) {
this._notifySplice(array, info.path, 0, 0, [ret]);
}
return ret;
},
unshift: function (path) {
var info = {};
var array = this._get(path, this, info);
var args = Array.prototype.slice.call(arguments, 1);
var ret = array.unshift.apply(array, args);
if (args.length) {
this._notifySplice(array, info.path, 0, args.length, []);
}
return ret;
},
prepareModelNotifyPath: function (model) {
this.mixin(model, {
fire: Polymer.Base.fire,
_getEvent: Polymer.Base._getEvent,
__eventCache: Polymer.Base.__eventCache,
notifyPath: Polymer.Base.notifyPath,
_get: Polymer.Base._get,
_EVENT_CHANGED: Polymer.Base._EVENT_CHANGED,
_notifyPath: Polymer.Base._notifyPath,
_notifyPathUp: Polymer.Base._notifyPathUp,
_pathEffector: Polymer.Base._pathEffector,
_annotationPathEffect: Polymer.Base._annotationPathEffect,
_complexObserverPathEffect: Polymer.Base._complexObserverPathEffect,
_annotatedComputationPathEffect: Polymer.Base._annotatedComputationPathEffect,
_computePathEffect: Polymer.Base._computePathEffect,
_modelForPath: Polymer.Base._modelForPath,
_pathMatchesEffect: Polymer.Base._pathMatchesEffect,
_notifyBoundPaths: Polymer.Base._notifyBoundPaths,
_getPathParts: Polymer.Base._getPathParts
});
}
});
}());
Polymer.Base._addFeature({
resolveUrl: function (url) {
var module = Polymer.DomModule.import(this.is);
var root = '';
if (module) {
var assetPath = module.getAttribute('assetpath') || '';
root = Polymer.ResolveUrl.resolveUrl(assetPath, module.ownerDocument.baseURI);
}
return Polymer.ResolveUrl.resolveUrl(url, root);
}
});
Polymer.CssParse = function () {
return {
parse: function (text) {
text = this._clean(text);
return this._parseCss(this._lex(text), text);
},
_clean: function (cssText) {
return cssText.replace(this._rx.comments, '').replace(this._rx.port, '');
},
_lex: function (text) {
var root = {
start: 0,
end: text.length
};
var n = root;
for (var i = 0, l = text.length; i < l; i++) {
switch (text[i]) {
case this.OPEN_BRACE:
if (!n.rules) {
n.rules = [];
}
var p = n;
var previous = p.rules[p.rules.length - 1];
n = {
start: i + 1,
parent: p,
previous: previous
};
p.rules.push(n);
break;
case this.CLOSE_BRACE:
n.end = i + 1;
n = n.parent || root;
break;
}
}
return root;
},
_parseCss: function (node, text) {
var t = text.substring(node.start, node.end - 1);
node.parsedCssText = node.cssText = t.trim();
if (node.parent) {
var ss = node.previous ? node.previous.end : node.parent.start;
t = text.substring(ss, node.start - 1);
t = this._expandUnicodeEscapes(t);
t = t.replace(this._rx.multipleSpaces, ' ');
t = t.substring(t.lastIndexOf(';') + 1);
var s = node.parsedSelector = node.selector = t.trim();
node.atRule = s.indexOf(this.AT_START) === 0;
if (node.atRule) {
if (s.indexOf(this.MEDIA_START) === 0) {
node.type = this.types.MEDIA_RULE;
} else if (s.match(this._rx.keyframesRule)) {
node.type = this.types.KEYFRAMES_RULE;
node.keyframesName = node.selector.split(this._rx.multipleSpaces).pop();
}
} else {
if (s.indexOf(this.VAR_START) === 0) {
node.type = this.types.MIXIN_RULE;
} else {
node.type = this.types.STYLE_RULE;
}
}
}
var r$ = node.rules;
if (r$) {
for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
this._parseCss(r, text);
}
}
return node;
},
_expandUnicodeEscapes: function (s) {
return s.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
var code = arguments[1], repeat = 6 - code.length;
while (repeat--) {
code = '0' + code;
}
return '\\' + code;
});
},
stringify: function (node, preserveProperties, text) {
text = text || '';
var cssText = '';
if (node.cssText || node.rules) {
var r$ = node.rules;
if (r$ && (preserveProperties || !this._hasMixinRules(r$))) {
for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
cssText = this.stringify(r, preserveProperties, cssText);
}
} else {
cssText = preserveProperties ? node.cssText : this.removeCustomProps(node.cssText);
cssText = cssText.trim();
if (cssText) {
cssText = '  ' + cssText + '\n';
}
}
}
if (cssText) {
if (node.selector) {
text += node.selector + ' ' + this.OPEN_BRACE + '\n';
}
text += cssText;
if (node.selector) {
text += this.CLOSE_BRACE + '\n\n';
}
}
return text;
},
_hasMixinRules: function (rules) {
return rules[0].selector.indexOf(this.VAR_START) === 0;
},
removeCustomProps: function (cssText) {
cssText = this.removeCustomPropAssignment(cssText);
return this.removeCustomPropApply(cssText);
},
removeCustomPropAssignment: function (cssText) {
return cssText.replace(this._rx.customProp, '').replace(this._rx.mixinProp, '');
},
removeCustomPropApply: function (cssText) {
return cssText.replace(this._rx.mixinApply, '').replace(this._rx.varApply, '');
},
types: {
STYLE_RULE: 1,
KEYFRAMES_RULE: 7,
MEDIA_RULE: 4,
MIXIN_RULE: 1000
},
OPEN_BRACE: '{',
CLOSE_BRACE: '}',
_rx: {
comments: /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,
port: /@import[^;]*;/gim,
customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
mixinApply: /@apply[\s]*\([^)]*?\)[\s]*(?:[;\n]|$)?/gim,
varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
keyframesRule: /^@[^\s]*keyframes/,
multipleSpaces: /\s+/g
},
VAR_START: '--',
MEDIA_START: '@media',
AT_START: '@'
};
}();
Polymer.StyleUtil = function () {
return {
MODULE_STYLES_SELECTOR: 'style, link[rel=import][type~=css], template',
INCLUDE_ATTR: 'include',
toCssText: function (rules, callback, preserveProperties) {
if (typeof rules === 'string') {
rules = this.parser.parse(rules);
}
if (callback) {
this.forEachRule(rules, callback);
}
return this.parser.stringify(rules, preserveProperties);
},
forRulesInStyles: function (styles, styleRuleCallback, keyframesRuleCallback) {
if (styles) {
for (var i = 0, l = styles.length, s; i < l && (s = styles[i]); i++) {
this.forEachRule(this.rulesForStyle(s), styleRuleCallback, keyframesRuleCallback);
}
}
},
rulesForStyle: function (style) {
if (!style.__cssRules && style.textContent) {
style.__cssRules = this.parser.parse(style.textContent);
}
return style.__cssRules;
},
isKeyframesSelector: function (rule) {
return rule.parent && rule.parent.type === this.ruleTypes.KEYFRAMES_RULE;
},
forEachRule: function (node, styleRuleCallback, keyframesRuleCallback) {
if (!node) {
return;
}
var skipRules = false;
if (node.type === this.ruleTypes.STYLE_RULE) {
styleRuleCallback(node);
} else if (keyframesRuleCallback && node.type === this.ruleTypes.KEYFRAMES_RULE) {
keyframesRuleCallback(node);
} else if (node.type === this.ruleTypes.MIXIN_RULE) {
skipRules = true;
}
var r$ = node.rules;
if (r$ && !skipRules) {
for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
this.forEachRule(r, styleRuleCallback, keyframesRuleCallback);
}
}
},
applyCss: function (cssText, moniker, target, contextNode) {
var style = this.createScopeStyle(cssText, moniker);
target = target || document.head;
var after = contextNode && contextNode.nextSibling || target.firstChild;
this.__lastHeadApplyNode = style;
return target.insertBefore(style, after);
},
createScopeStyle: function (cssText, moniker) {
var style = document.createElement('style');
if (moniker) {
style.setAttribute('scope', moniker);
}
style.textContent = cssText;
return style;
},
__lastHeadApplyNode: null,
applyStylePlaceHolder: function (moniker) {
var placeHolder = document.createComment(' Shady DOM styles for ' + moniker + ' ');
var after = this.__lastHeadApplyNode ? this.__lastHeadApplyNode.nextSibling : null;
var scope = document.head;
scope.insertBefore(placeHolder, after || scope.firstChild);
this.__lastHeadApplyNode = placeHolder;
return placeHolder;
},
cssFromModules: function (moduleIds, warnIfNotFound) {
var modules = moduleIds.trim().split(' ');
var cssText = '';
for (var i = 0; i < modules.length; i++) {
cssText += this.cssFromModule(modules[i], warnIfNotFound);
}
return cssText;
},
cssFromModule: function (moduleId, warnIfNotFound) {
var m = Polymer.DomModule.import(moduleId);
if (m && !m._cssText) {
m._cssText = this.cssFromElement(m);
}
if (!m && warnIfNotFound) {
console.warn('Could not find style data in module named', moduleId);
}
return m && m._cssText || '';
},
cssFromElement: function (element) {
var cssText = '';
var content = element.content || element;
var e$ = Polymer.TreeApi.arrayCopy(content.querySelectorAll(this.MODULE_STYLES_SELECTOR));
for (var i = 0, e; i < e$.length; i++) {
e = e$[i];
if (e.localName === 'template') {
cssText += this.cssFromElement(e);
} else {
if (e.localName === 'style') {
var include = e.getAttribute(this.INCLUDE_ATTR);
if (include) {
cssText += this.cssFromModules(include, true);
}
e = e.__appliedElement || e;
e.parentNode.removeChild(e);
cssText += this.resolveCss(e.textContent, element.ownerDocument);
} else if (e.import && e.import.body) {
cssText += this.resolveCss(e.import.body.textContent, e.import);
}
}
}
return cssText;
},
resolveCss: Polymer.ResolveUrl.resolveCss,
parser: Polymer.CssParse,
ruleTypes: Polymer.CssParse.types
};
}();
Polymer.StyleTransformer = function () {
var nativeShadow = Polymer.Settings.useNativeShadow;
var styleUtil = Polymer.StyleUtil;
var api = {
dom: function (node, scope, useAttr, shouldRemoveScope) {
this._transformDom(node, scope || '', useAttr, shouldRemoveScope);
},
_transformDom: function (node, selector, useAttr, shouldRemoveScope) {
if (node.setAttribute) {
this.element(node, selector, useAttr, shouldRemoveScope);
}
var c$ = Polymer.dom(node).childNodes;
for (var i = 0; i < c$.length; i++) {
this._transformDom(c$[i], selector, useAttr, shouldRemoveScope);
}
},
element: function (element, scope, useAttr, shouldRemoveScope) {
if (useAttr) {
if (shouldRemoveScope) {
element.removeAttribute(SCOPE_NAME);
} else {
element.setAttribute(SCOPE_NAME, scope);
}
} else {
if (scope) {
if (element.classList) {
if (shouldRemoveScope) {
element.classList.remove(SCOPE_NAME);
element.classList.remove(scope);
} else {
element.classList.add(SCOPE_NAME);
element.classList.add(scope);
}
} else if (element.getAttribute) {
var c = element.getAttribute(CLASS);
if (shouldRemoveScope) {
if (c) {
element.setAttribute(CLASS, c.replace(SCOPE_NAME, '').replace(scope, ''));
}
} else {
element.setAttribute(CLASS, (c ? c + ' ' : '') + SCOPE_NAME + ' ' + scope);
}
}
}
}
},
elementStyles: function (element, callback) {
var styles = element._styles;
var cssText = '';
for (var i = 0, l = styles.length, s; i < l && (s = styles[i]); i++) {
var rules = styleUtil.rulesForStyle(s);
cssText += nativeShadow ? styleUtil.toCssText(rules, callback) : this.css(rules, element.is, element.extends, callback, element._scopeCssViaAttr) + '\n\n';
}
return cssText.trim();
},
css: function (rules, scope, ext, callback, useAttr) {
var hostScope = this._calcHostScope(scope, ext);
scope = this._calcElementScope(scope, useAttr);
var self = this;
return styleUtil.toCssText(rules, function (rule) {
if (!rule.isScoped) {
self.rule(rule, scope, hostScope);
rule.isScoped = true;
}
if (callback) {
callback(rule, scope, hostScope);
}
});
},
_calcElementScope: function (scope, useAttr) {
if (scope) {
return useAttr ? CSS_ATTR_PREFIX + scope + CSS_ATTR_SUFFIX : CSS_CLASS_PREFIX + scope;
} else {
return '';
}
},
_calcHostScope: function (scope, ext) {
return ext ? '[is=' + scope + ']' : scope;
},
rule: function (rule, scope, hostScope) {
this._transformRule(rule, this._transformComplexSelector, scope, hostScope);
},
_transformRule: function (rule, transformer, scope, hostScope) {
var p$ = rule.selector.split(COMPLEX_SELECTOR_SEP);
if (!styleUtil.isKeyframesSelector(rule)) {
for (var i = 0, l = p$.length, p; i < l && (p = p$[i]); i++) {
p$[i] = transformer.call(this, p, scope, hostScope);
}
}
rule.selector = rule.transformedSelector = p$.join(COMPLEX_SELECTOR_SEP);
},
_transformComplexSelector: function (selector, scope, hostScope) {
var stop = false;
var hostContext = false;
var self = this;
selector = selector.replace(CONTENT_START, HOST + ' $1');
selector = selector.replace(SIMPLE_SELECTOR_SEP, function (m, c, s) {
if (!stop) {
var info = self._transformCompoundSelector(s, c, scope, hostScope);
stop = stop || info.stop;
hostContext = hostContext || info.hostContext;
c = info.combinator;
s = info.value;
} else {
s = s.replace(SCOPE_JUMP, ' ');
}
return c + s;
});
if (hostContext) {
selector = selector.replace(HOST_CONTEXT_PAREN, function (m, pre, paren, post) {
return pre + paren + ' ' + hostScope + post + COMPLEX_SELECTOR_SEP + ' ' + pre + hostScope + paren + post;
});
}
return selector;
},
_transformCompoundSelector: function (selector, combinator, scope, hostScope) {
var jumpIndex = selector.search(SCOPE_JUMP);
var hostContext = false;
if (selector.indexOf(HOST_CONTEXT) >= 0) {
hostContext = true;
} else if (selector.indexOf(HOST) >= 0) {
selector = selector.replace(HOST_PAREN, function (m, host, paren) {
return hostScope + paren;
});
selector = selector.replace(HOST, hostScope);
} else if (jumpIndex !== 0) {
selector = scope ? this._transformSimpleSelector(selector, scope) : selector;
}
if (selector.indexOf(CONTENT) >= 0) {
combinator = '';
}
var stop;
if (jumpIndex >= 0) {
selector = selector.replace(SCOPE_JUMP, ' ');
stop = true;
}
return {
value: selector,
combinator: combinator,
stop: stop,
hostContext: hostContext
};
},
_transformSimpleSelector: function (selector, scope) {
var p$ = selector.split(PSEUDO_PREFIX);
p$[0] += scope;
return p$.join(PSEUDO_PREFIX);
},
documentRule: function (rule) {
rule.selector = rule.parsedSelector;
this.normalizeRootSelector(rule);
if (!nativeShadow) {
this._transformRule(rule, this._transformDocumentSelector);
}
},
normalizeRootSelector: function (rule) {
if (rule.selector === ROOT) {
rule.selector = 'body';
}
},
_transformDocumentSelector: function (selector) {
return selector.match(SCOPE_JUMP) ? this._transformComplexSelector(selector, SCOPE_DOC_SELECTOR) : this._transformSimpleSelector(selector.trim(), SCOPE_DOC_SELECTOR);
},
SCOPE_NAME: 'style-scope'
};
var SCOPE_NAME = api.SCOPE_NAME;
var SCOPE_DOC_SELECTOR = ':not([' + SCOPE_NAME + '])' + ':not(.' + SCOPE_NAME + ')';
var COMPLEX_SELECTOR_SEP = ',';
var SIMPLE_SELECTOR_SEP = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=\[])+)/g;
var HOST = ':host';
var ROOT = ':root';
var HOST_PAREN = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/g;
var HOST_CONTEXT = ':host-context';
var HOST_CONTEXT_PAREN = /(.*)(?::host-context)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))(.*)/;
var CONTENT = '::content';
var SCOPE_JUMP = /::content|::shadow|\/deep\//;
var CSS_CLASS_PREFIX = '.';
var CSS_ATTR_PREFIX = '[' + SCOPE_NAME + '~=';
var CSS_ATTR_SUFFIX = ']';
var PSEUDO_PREFIX = ':';
var CLASS = 'class';
var CONTENT_START = new RegExp('^(' + CONTENT + ')');
return api;
}();
Polymer.StyleExtends = function () {
var styleUtil = Polymer.StyleUtil;
return {
hasExtends: function (cssText) {
return Boolean(cssText.match(this.rx.EXTEND));
},
transform: function (style) {
var rules = styleUtil.rulesForStyle(style);
var self = this;
styleUtil.forEachRule(rules, function (rule) {
self._mapRuleOntoParent(rule);
if (rule.parent) {
var m;
while (m = self.rx.EXTEND.exec(rule.cssText)) {
var extend = m[1];
var extendor = self._findExtendor(extend, rule);
if (extendor) {
self._extendRule(rule, extendor);
}
}
}
rule.cssText = rule.cssText.replace(self.rx.EXTEND, '');
});
return styleUtil.toCssText(rules, function (rule) {
if (rule.selector.match(self.rx.STRIP)) {
rule.cssText = '';
}
}, true);
},
_mapRuleOntoParent: function (rule) {
if (rule.parent) {
var map = rule.parent.map || (rule.parent.map = {});
var parts = rule.selector.split(',');
for (var i = 0, p; i < parts.length; i++) {
p = parts[i];
map[p.trim()] = rule;
}
return map;
}
},
_findExtendor: function (extend, rule) {
return rule.parent && rule.parent.map && rule.parent.map[extend] || this._findExtendor(extend, rule.parent);
},
_extendRule: function (target, source) {
if (target.parent !== source.parent) {
this._cloneAndAddRuleToParent(source, target.parent);
}
target.extends = target.extends || [];
target.extends.push(source);
source.selector = source.selector.replace(this.rx.STRIP, '');
source.selector = (source.selector && source.selector + ',\n') + target.selector;
if (source.extends) {
source.extends.forEach(function (e) {
this._extendRule(target, e);
}, this);
}
},
_cloneAndAddRuleToParent: function (rule, parent) {
rule = Object.create(rule);
rule.parent = parent;
if (rule.extends) {
rule.extends = rule.extends.slice();
}
parent.rules.push(rule);
},
rx: {
EXTEND: /@extends\(([^)]*)\)\s*?;/gim,
STRIP: /%[^,]*$/
}
};
}();
(function () {
var prepElement = Polymer.Base._prepElement;
var nativeShadow = Polymer.Settings.useNativeShadow;
var styleUtil = Polymer.StyleUtil;
var styleTransformer = Polymer.StyleTransformer;
var styleExtends = Polymer.StyleExtends;
Polymer.Base._addFeature({
_prepElement: function (element) {
if (this._encapsulateStyle) {
styleTransformer.element(element, this.is, this._scopeCssViaAttr);
}
prepElement.call(this, element);
},
_prepStyles: function () {
if (!nativeShadow) {
this._scopeStyle = styleUtil.applyStylePlaceHolder(this.is);
}
},
_prepShimStyles: function () {
if (this._template) {
if (this._encapsulateStyle === undefined) {
this._encapsulateStyle = !nativeShadow;
}
this._styles = this._collectStyles();
var cssText = styleTransformer.elementStyles(this);
this._prepStyleProperties();
if (!this._needsStyleProperties() && this._styles.length) {
styleUtil.applyCss(cssText, this.is, nativeShadow ? this._template.content : null, this._scopeStyle);
}
} else {
this._styles = [];
}
},
_collectStyles: function () {
var styles = [];
var cssText = '', m$ = this.styleModules;
if (m$) {
for (var i = 0, l = m$.length, m; i < l && (m = m$[i]); i++) {
cssText += styleUtil.cssFromModule(m);
}
}
cssText += styleUtil.cssFromModule(this.is);
var p = this._template && this._template.parentNode;
if (this._template && (!p || p.id.toLowerCase() !== this.is)) {
cssText += styleUtil.cssFromElement(this._template);
}
if (cssText) {
var style = document.createElement('style');
style.textContent = cssText;
if (styleExtends.hasExtends(style.textContent)) {
cssText = styleExtends.transform(style);
}
styles.push(style);
}
return styles;
},
_elementAdd: function (node) {
if (this._encapsulateStyle) {
if (node.__styleScoped) {
node.__styleScoped = false;
} else {
styleTransformer.dom(node, this.is, this._scopeCssViaAttr);
}
}
},
_elementRemove: function (node) {
if (this._encapsulateStyle) {
styleTransformer.dom(node, this.is, this._scopeCssViaAttr, true);
}
},
scopeSubtree: function (container, shouldObserve) {
if (nativeShadow) {
return;
}
var self = this;
var scopify = function (node) {
if (node.nodeType === Node.ELEMENT_NODE) {
var className = node.getAttribute('class');
node.setAttribute('class', self._scopeElementClass(node, className));
var n$ = node.querySelectorAll('*');
for (var i = 0, n; i < n$.length && (n = n$[i]); i++) {
className = n.getAttribute('class');
n.setAttribute('class', self._scopeElementClass(n, className));
}
}
};
scopify(container);
if (shouldObserve) {
var mo = new MutationObserver(function (mxns) {
for (var i = 0, m; i < mxns.length && (m = mxns[i]); i++) {
if (m.addedNodes) {
for (var j = 0; j < m.addedNodes.length; j++) {
scopify(m.addedNodes[j]);
}
}
}
});
mo.observe(container, {
childList: true,
subtree: true
});
return mo;
}
}
});
}());
Polymer.StyleProperties = function () {
'use strict';
var nativeShadow = Polymer.Settings.useNativeShadow;
var matchesSelector = Polymer.DomApi.matchesSelector;
var styleUtil = Polymer.StyleUtil;
var styleTransformer = Polymer.StyleTransformer;
return {
decorateStyles: function (styles) {
var self = this, props = {}, keyframes = [];
styleUtil.forRulesInStyles(styles, function (rule) {
self.decorateRule(rule);
self.collectPropertiesInCssText(rule.propertyInfo.cssText, props);
}, function onKeyframesRule(rule) {
keyframes.push(rule);
});
styles._keyframes = keyframes;
var names = [];
for (var i in props) {
names.push(i);
}
return names;
},
decorateRule: function (rule) {
if (rule.propertyInfo) {
return rule.propertyInfo;
}
var info = {}, properties = {};
var hasProperties = this.collectProperties(rule, properties);
if (hasProperties) {
info.properties = properties;
rule.rules = null;
}
info.cssText = this.collectCssText(rule);
rule.propertyInfo = info;
return info;
},
collectProperties: function (rule, properties) {
var info = rule.propertyInfo;
if (info) {
if (info.properties) {
Polymer.Base.mixin(properties, info.properties);
return true;
}
} else {
var m, rx = this.rx.VAR_ASSIGN;
var cssText = rule.parsedCssText;
var any;
while (m = rx.exec(cssText)) {
properties[m[1]] = (m[2] || m[3]).trim();
any = true;
}
return any;
}
},
collectCssText: function (rule) {
return this.collectConsumingCssText(rule.parsedCssText);
},
collectConsumingCssText: function (cssText) {
return cssText.replace(this.rx.BRACKETED, '').replace(this.rx.VAR_ASSIGN, '');
},
collectPropertiesInCssText: function (cssText, props) {
var m;
while (m = this.rx.VAR_CAPTURE.exec(cssText)) {
props[m[1]] = true;
var def = m[2];
if (def && def.match(this.rx.IS_VAR)) {
props[def] = true;
}
}
},
reify: function (props) {
var names = Object.getOwnPropertyNames(props);
for (var i = 0, n; i < names.length; i++) {
n = names[i];
props[n] = this.valueForProperty(props[n], props);
}
},
valueForProperty: function (property, props) {
if (property) {
if (property.indexOf(';') >= 0) {
property = this.valueForProperties(property, props);
} else {
var self = this;
var fn = function (all, prefix, value, fallback) {
var propertyValue = self.valueForProperty(props[value], props) || (props[fallback] ? self.valueForProperty(props[fallback], props) : fallback);
return prefix + (propertyValue || '');
};
property = property.replace(this.rx.VAR_MATCH, fn);
}
}
return property && property.trim() || '';
},
valueForProperties: function (property, props) {
var parts = property.split(';');
for (var i = 0, p, m; i < parts.length; i++) {
if (p = parts[i]) {
m = p.match(this.rx.MIXIN_MATCH);
if (m) {
p = this.valueForProperty(props[m[1]], props);
} else {
var colon = p.indexOf(':');
if (colon !== -1) {
var pp = p.substring(colon);
pp = pp.trim();
pp = this.valueForProperty(pp, props) || pp;
p = p.substring(0, colon) + pp;
}
}
parts[i] = p && p.lastIndexOf(';') === p.length - 1 ? p.slice(0, -1) : p || '';
}
}
return parts.join(';');
},
applyProperties: function (rule, props) {
var output = '';
if (!rule.propertyInfo) {
this.decorateRule(rule);
}
if (rule.propertyInfo.cssText) {
output = this.valueForProperties(rule.propertyInfo.cssText, props);
}
rule.cssText = output;
},
applyKeyframeTransforms: function (rule, keyframeTransforms) {
var input = rule.cssText;
var output = rule.cssText;
if (rule.hasAnimations == null) {
rule.hasAnimations = this.rx.ANIMATION_MATCH.test(input);
}
if (rule.hasAnimations) {
var transform;
if (rule.keyframeNamesToTransform == null) {
rule.keyframeNamesToTransform = [];
for (var keyframe in keyframeTransforms) {
transform = keyframeTransforms[keyframe];
output = transform(input);
if (input !== output) {
input = output;
rule.keyframeNamesToTransform.push(keyframe);
}
}
} else {
for (var i = 0; i < rule.keyframeNamesToTransform.length; ++i) {
transform = keyframeTransforms[rule.keyframeNamesToTransform[i]];
input = transform(input);
}
output = input;
}
}
rule.cssText = output;
},
propertyDataFromStyles: function (styles, element) {
var props = {}, self = this;
var o = [], i = 0;
styleUtil.forRulesInStyles(styles, function (rule) {
if (!rule.propertyInfo) {
self.decorateRule(rule);
}
if (element && rule.propertyInfo.properties && matchesSelector.call(element, rule.transformedSelector || rule.parsedSelector)) {
self.collectProperties(rule, props);
addToBitMask(i, o);
}
i++;
});
return {
properties: props,
key: o
};
},
scopePropertiesFromStyles: function (styles) {
if (!styles._scopeStyleProperties) {
styles._scopeStyleProperties = this.selectedPropertiesFromStyles(styles, this.SCOPE_SELECTORS);
}
return styles._scopeStyleProperties;
},
hostPropertiesFromStyles: function (styles) {
if (!styles._hostStyleProperties) {
styles._hostStyleProperties = this.selectedPropertiesFromStyles(styles, this.HOST_SELECTORS);
}
return styles._hostStyleProperties;
},
selectedPropertiesFromStyles: function (styles, selectors) {
var props = {}, self = this;
styleUtil.forRulesInStyles(styles, function (rule) {
if (!rule.propertyInfo) {
self.decorateRule(rule);
}
for (var i = 0; i < selectors.length; i++) {
if (rule.parsedSelector === selectors[i]) {
self.collectProperties(rule, props);
return;
}
}
});
return props;
},
transformStyles: function (element, properties, scopeSelector) {
var self = this;
var hostSelector = styleTransformer._calcHostScope(element.is, element.extends);
var rxHostSelector = element.extends ? '\\' + hostSelector.slice(0, -1) + '\\]' : hostSelector;
var hostRx = new RegExp(this.rx.HOST_PREFIX + rxHostSelector + this.rx.HOST_SUFFIX);
var keyframeTransforms = this._elementKeyframeTransforms(element, scopeSelector);
return styleTransformer.elementStyles(element, function (rule) {
self.applyProperties(rule, properties);
if (!nativeShadow && !Polymer.StyleUtil.isKeyframesSelector(rule) && rule.cssText) {
self.applyKeyframeTransforms(rule, keyframeTransforms);
self._scopeSelector(rule, hostRx, hostSelector, element._scopeCssViaAttr, scopeSelector);
}
});
},
_elementKeyframeTransforms: function (element, scopeSelector) {
var keyframesRules = element._styles._keyframes;
var keyframeTransforms = {};
if (!nativeShadow && keyframesRules) {
for (var i = 0, keyframesRule = keyframesRules[i]; i < keyframesRules.length; keyframesRule = keyframesRules[++i]) {
this._scopeKeyframes(keyframesRule, scopeSelector);
keyframeTransforms[keyframesRule.keyframesName] = this._keyframesRuleTransformer(keyframesRule);
}
}
return keyframeTransforms;
},
_keyframesRuleTransformer: function (keyframesRule) {
return function (cssText) {
return cssText.replace(keyframesRule.keyframesNameRx, keyframesRule.transformedKeyframesName);
};
},
_scopeKeyframes: function (rule, scopeId) {
rule.keyframesNameRx = new RegExp(rule.keyframesName, 'g');
rule.transformedKeyframesName = rule.keyframesName + '-' + scopeId;
rule.transformedSelector = rule.transformedSelector || rule.selector;
rule.selector = rule.transformedSelector.replace(rule.keyframesName, rule.transformedKeyframesName);
},
_scopeSelector: function (rule, hostRx, hostSelector, viaAttr, scopeId) {
rule.transformedSelector = rule.transformedSelector || rule.selector;
var selector = rule.transformedSelector;
var scope = viaAttr ? '[' + styleTransformer.SCOPE_NAME + '~=' + scopeId + ']' : '.' + scopeId;
var parts = selector.split(',');
for (var i = 0, l = parts.length, p; i < l && (p = parts[i]); i++) {
parts[i] = p.match(hostRx) ? p.replace(hostSelector, scope) : scope + ' ' + p;
}
rule.selector = parts.join(',');
},
applyElementScopeSelector: function (element, selector, old, viaAttr) {
var c = viaAttr ? element.getAttribute(styleTransformer.SCOPE_NAME) : element.getAttribute('class') || '';
var v = old ? c.replace(old, selector) : (c ? c + ' ' : '') + this.XSCOPE_NAME + ' ' + selector;
if (c !== v) {
if (viaAttr) {
element.setAttribute(styleTransformer.SCOPE_NAME, v);
} else {
element.setAttribute('class', v);
}
}
},
applyElementStyle: function (element, properties, selector, style) {
var cssText = style ? style.textContent || '' : this.transformStyles(element, properties, selector);
var s = element._customStyle;
if (s && !nativeShadow && s !== style) {
s._useCount--;
if (s._useCount <= 0 && s.parentNode) {
s.parentNode.removeChild(s);
}
}
if (nativeShadow || (!style || !style.parentNode)) {
if (nativeShadow && element._customStyle) {
element._customStyle.textContent = cssText;
style = element._customStyle;
} else if (cssText) {
style = styleUtil.applyCss(cssText, selector, nativeShadow ? element.root : null, element._scopeStyle);
}
}
if (style) {
style._useCount = style._useCount || 0;
if (element._customStyle != style) {
style._useCount++;
}
element._customStyle = style;
}
return style;
},
mixinCustomStyle: function (props, customStyle) {
var v;
for (var i in customStyle) {
v = customStyle[i];
if (v || v === 0) {
props[i] = v;
}
}
},
rx: {
VAR_ASSIGN: /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:([^;{]*)|{([^}]*)})(?:(?=[;\s}])|$)/gi,
MIXIN_MATCH: /(?:^|\W+)@apply[\s]*\(([^)]*)\)/i,
VAR_MATCH: /(^|\W+)var\([\s]*([^,)]*)[\s]*,?[\s]*((?:[^,()]*)|(?:[^;()]*\([^;)]*\)))[\s]*?\)/gi,
VAR_CAPTURE: /\([\s]*(--[^,\s)]*)(?:,[\s]*(--[^,\s)]*))?(?:\)|,)/gi,
ANIMATION_MATCH: /(animation\s*:)|(animation-name\s*:)/,
IS_VAR: /^--/,
BRACKETED: /\{[^}]*\}/g,
HOST_PREFIX: '(?:^|[^.#[:])',
HOST_SUFFIX: '($|[.:[\\s>+~])'
},
HOST_SELECTORS: [':host'],
SCOPE_SELECTORS: [':root'],
XSCOPE_NAME: 'x-scope'
};
function addToBitMask(n, bits) {
var o = parseInt(n / 32);
var v = 1 << n % 32;
bits[o] = (bits[o] || 0) | v;
}
}();
(function () {
Polymer.StyleCache = function () {
this.cache = {};
};
Polymer.StyleCache.prototype = {
MAX: 100,
store: function (is, data, keyValues, keyStyles) {
data.keyValues = keyValues;
data.styles = keyStyles;
var s$ = this.cache[is] = this.cache[is] || [];
s$.push(data);
if (s$.length > this.MAX) {
s$.shift();
}
},
retrieve: function (is, keyValues, keyStyles) {
var cache = this.cache[is];
if (cache) {
for (var i = cache.length - 1, data; i >= 0; i--) {
data = cache[i];
if (keyStyles === data.styles && this._objectsEqual(keyValues, data.keyValues)) {
return data;
}
}
}
},
clear: function () {
this.cache = {};
},
_objectsEqual: function (target, source) {
var t, s;
for (var i in target) {
t = target[i], s = source[i];
if (!(typeof t === 'object' && t ? this._objectsStrictlyEqual(t, s) : t === s)) {
return false;
}
}
if (Array.isArray(target)) {
return target.length === source.length;
}
return true;
},
_objectsStrictlyEqual: function (target, source) {
return this._objectsEqual(target, source) && this._objectsEqual(source, target);
}
};
}());
Polymer.StyleDefaults = function () {
var styleProperties = Polymer.StyleProperties;
var StyleCache = Polymer.StyleCache;
var api = {
_styles: [],
_properties: null,
customStyle: {},
_styleCache: new StyleCache(),
addStyle: function (style) {
this._styles.push(style);
this._properties = null;
},
get _styleProperties() {
if (!this._properties) {
styleProperties.decorateStyles(this._styles);
this._styles._scopeStyleProperties = null;
this._properties = styleProperties.scopePropertiesFromStyles(this._styles);
styleProperties.mixinCustomStyle(this._properties, this.customStyle);
styleProperties.reify(this._properties);
}
return this._properties;
},
_needsStyleProperties: function () {
},
_computeStyleProperties: function () {
return this._styleProperties;
},
updateStyles: function (properties) {
this._properties = null;
if (properties) {
Polymer.Base.mixin(this.customStyle, properties);
}
this._styleCache.clear();
for (var i = 0, s; i < this._styles.length; i++) {
s = this._styles[i];
s = s.__importElement || s;
s._apply();
}
}
};
return api;
}();
(function () {
'use strict';
var serializeValueToAttribute = Polymer.Base.serializeValueToAttribute;
var propertyUtils = Polymer.StyleProperties;
var styleTransformer = Polymer.StyleTransformer;
var styleDefaults = Polymer.StyleDefaults;
var nativeShadow = Polymer.Settings.useNativeShadow;
Polymer.Base._addFeature({
_prepStyleProperties: function () {
this._ownStylePropertyNames = this._styles && this._styles.length ? propertyUtils.decorateStyles(this._styles) : null;
},
customStyle: null,
getComputedStyleValue: function (property) {
return this._styleProperties && this._styleProperties[property] || getComputedStyle(this).getPropertyValue(property);
},
_setupStyleProperties: function () {
this.customStyle = {};
this._styleCache = null;
this._styleProperties = null;
this._scopeSelector = null;
this._ownStyleProperties = null;
this._customStyle = null;
},
_needsStyleProperties: function () {
return Boolean(this._ownStylePropertyNames && this._ownStylePropertyNames.length);
},
_beforeAttached: function () {
if (!this._scopeSelector && this._needsStyleProperties()) {
this._updateStyleProperties();
}
},
_findStyleHost: function () {
var e = this, root;
while (root = Polymer.dom(e).getOwnerRoot()) {
if (Polymer.isInstance(root.host)) {
return root.host;
}
e = root.host;
}
return styleDefaults;
},
_updateStyleProperties: function () {
var info, scope = this._findStyleHost();
if (!scope._styleCache) {
scope._styleCache = new Polymer.StyleCache();
}
var scopeData = propertyUtils.propertyDataFromStyles(scope._styles, this);
scopeData.key.customStyle = this.customStyle;
info = scope._styleCache.retrieve(this.is, scopeData.key, this._styles);
var scopeCached = Boolean(info);
if (scopeCached) {
this._styleProperties = info._styleProperties;
} else {
this._computeStyleProperties(scopeData.properties);
}
this._computeOwnStyleProperties();
if (!scopeCached) {
info = styleCache.retrieve(this.is, this._ownStyleProperties, this._styles);
}
var globalCached = Boolean(info) && !scopeCached;
var style = this._applyStyleProperties(info);
if (!scopeCached) {
style = style && nativeShadow ? style.cloneNode(true) : style;
info = {
style: style,
_scopeSelector: this._scopeSelector,
_styleProperties: this._styleProperties
};
scopeData.key.customStyle = {};
this.mixin(scopeData.key.customStyle, this.customStyle);
scope._styleCache.store(this.is, info, scopeData.key, this._styles);
if (!globalCached) {
styleCache.store(this.is, Object.create(info), this._ownStyleProperties, this._styles);
}
}
},
_computeStyleProperties: function (scopeProps) {
var scope = this._findStyleHost();
if (!scope._styleProperties) {
scope._computeStyleProperties();
}
var props = Object.create(scope._styleProperties);
this.mixin(props, propertyUtils.hostPropertiesFromStyles(this._styles));
scopeProps = scopeProps || propertyUtils.propertyDataFromStyles(scope._styles, this).properties;
this.mixin(props, scopeProps);
this.mixin(props, propertyUtils.scopePropertiesFromStyles(this._styles));
propertyUtils.mixinCustomStyle(props, this.customStyle);
propertyUtils.reify(props);
this._styleProperties = props;
},
_computeOwnStyleProperties: function () {
var props = {};
for (var i = 0, n; i < this._ownStylePropertyNames.length; i++) {
n = this._ownStylePropertyNames[i];
props[n] = this._styleProperties[n];
}
this._ownStyleProperties = props;
},
_scopeCount: 0,
_applyStyleProperties: function (info) {
var oldScopeSelector = this._scopeSelector;
this._scopeSelector = info ? info._scopeSelector : this.is + '-' + this.__proto__._scopeCount++;
var style = propertyUtils.applyElementStyle(this, this._styleProperties, this._scopeSelector, info && info.style);
if (!nativeShadow) {
propertyUtils.applyElementScopeSelector(this, this._scopeSelector, oldScopeSelector, this._scopeCssViaAttr);
}
return style;
},
serializeValueToAttribute: function (value, attribute, node) {
node = node || this;
if (attribute === 'class' && !nativeShadow) {
var host = node === this ? this.domHost || this.dataHost : this;
if (host) {
value = host._scopeElementClass(node, value);
}
}
node = this.shadyRoot && this.shadyRoot._hasDistributed ? Polymer.dom(node) : node;
serializeValueToAttribute.call(this, value, attribute, node);
},
_scopeElementClass: function (element, selector) {
if (!nativeShadow && !this._scopeCssViaAttr) {
selector = (selector ? selector + ' ' : '') + SCOPE_NAME + ' ' + this.is + (element._scopeSelector ? ' ' + XSCOPE_NAME + ' ' + element._scopeSelector : '');
}
return selector;
},
updateStyles: function (properties) {
if (this.isAttached) {
if (properties) {
this.mixin(this.customStyle, properties);
}
if (this._needsStyleProperties()) {
this._updateStyleProperties();
} else {
this._styleProperties = null;
}
if (this._styleCache) {
this._styleCache.clear();
}
this._updateRootStyles();
}
},
_updateRootStyles: function (root) {
root = root || this.root;
var c$ = Polymer.dom(root)._query(function (e) {
return e.shadyRoot || e.shadowRoot;
});
for (var i = 0, l = c$.length, c; i < l && (c = c$[i]); i++) {
if (c.updateStyles) {
c.updateStyles();
}
}
}
});
Polymer.updateStyles = function (properties) {
styleDefaults.updateStyles(properties);
Polymer.Base._updateRootStyles(document);
};
var styleCache = new Polymer.StyleCache();
Polymer.customStyleCache = styleCache;
var SCOPE_NAME = styleTransformer.SCOPE_NAME;
var XSCOPE_NAME = propertyUtils.XSCOPE_NAME;
}());
Polymer.Base._addFeature({
_registerFeatures: function () {
this._prepIs();
this._prepConstructor();
this._prepStyles();
},
_finishRegisterFeatures: function () {
this._prepTemplate();
this._prepShimStyles();
this._prepAnnotations();
this._prepEffects();
this._prepBehaviors();
this._prepPropertyInfo();
this._prepBindings();
this._prepShady();
},
_prepBehavior: function (b) {
this._addPropertyEffects(b.properties);
this._addComplexObserverEffects(b.observers);
this._addHostAttributes(b.hostAttributes);
},
_initFeatures: function () {
this._setupGestures();
this._setupConfigure();
this._setupStyleProperties();
this._setupDebouncers();
this._setupShady();
this._registerHost();
if (this._template) {
this._poolContent();
this._beginHosting();
this._stampTemplate();
this._endHosting();
this._marshalAnnotationReferences();
}
this._marshalInstanceEffects();
this._marshalBehaviors();
this._marshalHostAttributes();
this._marshalAttributes();
this._tryReady();
},
_marshalBehavior: function (b) {
if (b.listeners) {
this._listenListeners(b.listeners);
}
}
});
(function () {
var propertyUtils = Polymer.StyleProperties;
var styleUtil = Polymer.StyleUtil;
var cssParse = Polymer.CssParse;
var styleDefaults = Polymer.StyleDefaults;
var styleTransformer = Polymer.StyleTransformer;
Polymer({
is: 'custom-style',
extends: 'style',
_template: null,
properties: { include: String },
ready: function () {
this._tryApply();
},
attached: function () {
this._tryApply();
},
_tryApply: function () {
if (!this._appliesToDocument) {
if (this.parentNode && this.parentNode.localName !== 'dom-module') {
this._appliesToDocument = true;
var e = this.__appliedElement || this;
styleDefaults.addStyle(e);
if (e.textContent || this.include) {
this._apply(true);
} else {
var self = this;
var observer = new MutationObserver(function () {
observer.disconnect();
self._apply(true);
});
observer.observe(e, { childList: true });
}
}
}
},
_apply: function (deferProperties) {
var e = this.__appliedElement || this;
if (this.include) {
e.textContent = styleUtil.cssFromModules(this.include, true) + e.textContent;
}
if (e.textContent) {
styleUtil.forEachRule(styleUtil.rulesForStyle(e), function (rule) {
styleTransformer.documentRule(rule);
});
var self = this;
var fn = function fn() {
self._applyCustomProperties(e);
};
if (this._pendingApplyProperties) {
cancelAnimationFrame(this._pendingApplyProperties);
this._pendingApplyProperties = null;
}
if (deferProperties) {
this._pendingApplyProperties = requestAnimationFrame(fn);
} else {
fn();
}
}
},
_applyCustomProperties: function (element) {
this._computeStyleProperties();
var props = this._styleProperties;
var rules = styleUtil.rulesForStyle(element);
element.textContent = styleUtil.toCssText(rules, function (rule) {
var css = rule.cssText = rule.parsedCssText;
if (rule.propertyInfo && rule.propertyInfo.cssText) {
css = cssParse.removeCustomPropAssignment(css);
rule.cssText = propertyUtils.valueForProperties(css, props);
}
});
}
});
}());
Polymer.Templatizer = {
properties: { __hideTemplateChildren__: { observer: '_showHideChildren' } },
_instanceProps: Polymer.nob,
_parentPropPrefix: '_parent_',
templatize: function (template) {
this._templatized = template;
if (!template._content) {
template._content = template.content;
}
if (template._content._ctor) {
this.ctor = template._content._ctor;
this._prepParentProperties(this.ctor.prototype, template);
return;
}
var archetype = Object.create(Polymer.Base);
this._customPrepAnnotations(archetype, template);
this._prepParentProperties(archetype, template);
archetype._prepEffects();
this._customPrepEffects(archetype);
archetype._prepBehaviors();
archetype._prepPropertyInfo();
archetype._prepBindings();
archetype._notifyPathUp = this._notifyPathUpImpl;
archetype._scopeElementClass = this._scopeElementClassImpl;
archetype.listen = this._listenImpl;
archetype._showHideChildren = this._showHideChildrenImpl;
archetype.__setPropertyOrig = this.__setProperty;
archetype.__setProperty = this.__setPropertyImpl;
var _constructor = this._constructorImpl;
var ctor = function TemplateInstance(model, host) {
_constructor.call(this, model, host);
};
ctor.prototype = archetype;
archetype.constructor = ctor;
template._content._ctor = ctor;
this.ctor = ctor;
},
_getRootDataHost: function () {
return this.dataHost && this.dataHost._rootDataHost || this.dataHost;
},
_showHideChildrenImpl: function (hide) {
var c = this._children;
for (var i = 0; i < c.length; i++) {
var n = c[i];
if (Boolean(hide) != Boolean(n.__hideTemplateChildren__)) {
if (n.nodeType === Node.TEXT_NODE) {
if (hide) {
n.__polymerTextContent__ = n.textContent;
n.textContent = '';
} else {
n.textContent = n.__polymerTextContent__;
}
} else if (n.style) {
if (hide) {
n.__polymerDisplay__ = n.style.display;
n.style.display = 'none';
} else {
n.style.display = n.__polymerDisplay__;
}
}
}
n.__hideTemplateChildren__ = hide;
}
},
__setPropertyImpl: function (property, value, fromAbove, node) {
if (node && node.__hideTemplateChildren__ && property == 'textContent') {
property = '__polymerTextContent__';
}
this.__setPropertyOrig(property, value, fromAbove, node);
},
_debounceTemplate: function (fn) {
Polymer.dom.addDebouncer(this.debounce('_debounceTemplate', fn));
},
_flushTemplates: function () {
Polymer.dom.flush();
},
_customPrepEffects: function (archetype) {
var parentProps = archetype._parentProps;
for (var prop in parentProps) {
archetype._addPropertyEffect(prop, 'function', this._createHostPropEffector(prop));
}
for (prop in this._instanceProps) {
archetype._addPropertyEffect(prop, 'function', this._createInstancePropEffector(prop));
}
},
_customPrepAnnotations: function (archetype, template) {
archetype._template = template;
var c = template._content;
if (!c._notes) {
var rootDataHost = archetype._rootDataHost;
if (rootDataHost) {
Polymer.Annotations.prepElement = function () {
rootDataHost._prepElement();
};
}
c._notes = Polymer.Annotations.parseAnnotations(template);
Polymer.Annotations.prepElement = null;
this._processAnnotations(c._notes);
}
archetype._notes = c._notes;
archetype._parentProps = c._parentProps;
},
_prepParentProperties: function (archetype, template) {
var parentProps = this._parentProps = archetype._parentProps;
if (this._forwardParentProp && parentProps) {
var proto = archetype._parentPropProto;
var prop;
if (!proto) {
for (prop in this._instanceProps) {
delete parentProps[prop];
}
proto = archetype._parentPropProto = Object.create(null);
if (template != this) {
Polymer.Bind.prepareModel(proto);
Polymer.Base.prepareModelNotifyPath(proto);
}
for (prop in parentProps) {
var parentProp = this._parentPropPrefix + prop;
var effects = [
{
kind: 'function',
effect: this._createForwardPropEffector(prop),
fn: Polymer.Bind._functionEffect
},
{
kind: 'notify',
fn: Polymer.Bind._notifyEffect,
effect: { event: Polymer.CaseMap.camelToDashCase(parentProp) + '-changed' }
}
];
Polymer.Bind._createAccessors(proto, parentProp, effects);
}
}
var self = this;
if (template != this) {
Polymer.Bind.prepareInstance(template);
template._forwardParentProp = function (source, value) {
self._forwardParentProp(source, value);
};
}
this._extendTemplate(template, proto);
template._pathEffector = function (path, value, fromAbove) {
return self._pathEffectorImpl(path, value, fromAbove);
};
}
},
_createForwardPropEffector: function (prop) {
return function (source, value) {
this._forwardParentProp(prop, value);
};
},
_createHostPropEffector: function (prop) {
var prefix = this._parentPropPrefix;
return function (source, value) {
this.dataHost._templatized[prefix + prop] = value;
};
},
_createInstancePropEffector: function (prop) {
return function (source, value, old, fromAbove) {
if (!fromAbove) {
this.dataHost._forwardInstanceProp(this, prop, value);
}
};
},
_extendTemplate: function (template, proto) {
var n$ = Object.getOwnPropertyNames(proto);
if (proto._propertySetter) {
template._propertySetter = proto._propertySetter;
}
for (var i = 0, n; i < n$.length && (n = n$[i]); i++) {
var val = template[n];
var pd = Object.getOwnPropertyDescriptor(proto, n);
Object.defineProperty(template, n, pd);
if (val !== undefined) {
template._propertySetter(n, val);
}
}
},
_showHideChildren: function (hidden) {
},
_forwardInstancePath: function (inst, path, value) {
},
_forwardInstanceProp: function (inst, prop, value) {
},
_notifyPathUpImpl: function (path, value) {
var dataHost = this.dataHost;
var dot = path.indexOf('.');
var root = dot < 0 ? path : path.slice(0, dot);
dataHost._forwardInstancePath.call(dataHost, this, path, value);
if (root in dataHost._parentProps) {
dataHost._templatized.notifyPath(dataHost._parentPropPrefix + path, value);
}
},
_pathEffectorImpl: function (path, value, fromAbove) {
if (this._forwardParentPath) {
if (path.indexOf(this._parentPropPrefix) === 0) {
var subPath = path.substring(this._parentPropPrefix.length);
var model = this._modelForPath(subPath);
if (model in this._parentProps) {
this._forwardParentPath(subPath, value);
}
}
}
Polymer.Base._pathEffector.call(this._templatized, path, value, fromAbove);
},
_constructorImpl: function (model, host) {
this._rootDataHost = host._getRootDataHost();
this._setupConfigure(model);
this._registerHost(host);
this._beginHosting();
this.root = this.instanceTemplate(this._template);
this.root.__noContent = !this._notes._hasContent;
this.root.__styleScoped = true;
this._endHosting();
this._marshalAnnotatedNodes();
this._marshalInstanceEffects();
this._marshalAnnotatedListeners();
var children = [];
for (var n = this.root.firstChild; n; n = n.nextSibling) {
children.push(n);
n._templateInstance = this;
}
this._children = children;
if (host.__hideTemplateChildren__) {
this._showHideChildren(true);
}
this._tryReady();
},
_listenImpl: function (node, eventName, methodName) {
var model = this;
var host = this._rootDataHost;
var handler = host._createEventHandler(node, eventName, methodName);
var decorated = function (e) {
e.model = model;
handler(e);
};
host._listen(node, eventName, decorated);
},
_scopeElementClassImpl: function (node, value) {
var host = this._rootDataHost;
if (host) {
return host._scopeElementClass(node, value);
}
},
stamp: function (model) {
model = model || {};
if (this._parentProps) {
var templatized = this._templatized;
for (var prop in this._parentProps) {
if (model[prop] === undefined) {
model[prop] = templatized[this._parentPropPrefix + prop];
}
}
}
return new this.ctor(model, this);
},
modelForElement: function (el) {
var model;
while (el) {
if (model = el._templateInstance) {
if (model.dataHost != this) {
el = model.dataHost;
} else {
return model;
}
} else {
el = el.parentNode;
}
}
}
};
Polymer({
is: 'dom-template',
extends: 'template',
_template: null,
behaviors: [Polymer.Templatizer],
ready: function () {
this.templatize(this);
}
});
Polymer._collections = new WeakMap();
Polymer.Collection = function (userArray) {
Polymer._collections.set(userArray, this);
this.userArray = userArray;
this.store = userArray.slice();
this.initMap();
};
Polymer.Collection.prototype = {
constructor: Polymer.Collection,
initMap: function () {
var omap = this.omap = new WeakMap();
var pmap = this.pmap = {};
var s = this.store;
for (var i = 0; i < s.length; i++) {
var item = s[i];
if (item && typeof item == 'object') {
omap.set(item, i);
} else {
pmap[item] = i;
}
}
},
add: function (item) {
var key = this.store.push(item) - 1;
if (item && typeof item == 'object') {
this.omap.set(item, key);
} else {
this.pmap[item] = key;
}
return '#' + key;
},
removeKey: function (key) {
if (key = this._parseKey(key)) {
this._removeFromMap(this.store[key]);
delete this.store[key];
}
},
_removeFromMap: function (item) {
if (item && typeof item == 'object') {
this.omap.delete(item);
} else {
delete this.pmap[item];
}
},
remove: function (item) {
var key = this.getKey(item);
this.removeKey(key);
return key;
},
getKey: function (item) {
var key;
if (item && typeof item == 'object') {
key = this.omap.get(item);
} else {
key = this.pmap[item];
}
if (key != undefined) {
return '#' + key;
}
},
getKeys: function () {
return Object.keys(this.store).map(function (key) {
return '#' + key;
});
},
_parseKey: function (key) {
if (key && key[0] == '#') {
return key.slice(1);
}
},
setItem: function (key, item) {
if (key = this._parseKey(key)) {
var old = this.store[key];
if (old) {
this._removeFromMap(old);
}
if (item && typeof item == 'object') {
this.omap.set(item, key);
} else {
this.pmap[item] = key;
}
this.store[key] = item;
}
},
getItem: function (key) {
if (key = this._parseKey(key)) {
return this.store[key];
}
},
getItems: function () {
var items = [], store = this.store;
for (var key in store) {
items.push(store[key]);
}
return items;
},
_applySplices: function (splices) {
var keyMap = {}, key;
for (var i = 0, s; i < splices.length && (s = splices[i]); i++) {
s.addedKeys = [];
for (var j = 0; j < s.removed.length; j++) {
key = this.getKey(s.removed[j]);
keyMap[key] = keyMap[key] ? null : -1;
}
for (j = 0; j < s.addedCount; j++) {
var item = this.userArray[s.index + j];
key = this.getKey(item);
key = key === undefined ? this.add(item) : key;
keyMap[key] = keyMap[key] ? null : 1;
s.addedKeys.push(key);
}
}
var removed = [];
var added = [];
for (key in keyMap) {
if (keyMap[key] < 0) {
this.removeKey(key);
removed.push(key);
}
if (keyMap[key] > 0) {
added.push(key);
}
}
return [{
removed: removed,
added: added
}];
}
};
Polymer.Collection.get = function (userArray) {
return Polymer._collections.get(userArray) || new Polymer.Collection(userArray);
};
Polymer.Collection.applySplices = function (userArray, splices) {
var coll = Polymer._collections.get(userArray);
return coll ? coll._applySplices(splices) : null;
};
Polymer({
is: 'dom-repeat',
extends: 'template',
_template: null,
properties: {
items: { type: Array },
as: {
type: String,
value: 'item'
},
indexAs: {
type: String,
value: 'index'
},
sort: {
type: Function,
observer: '_sortChanged'
},
filter: {
type: Function,
observer: '_filterChanged'
},
observe: {
type: String,
observer: '_observeChanged'
},
delay: Number,
renderedItemCount: {
type: Number,
notify: true,
readOnly: true
},
initialCount: {
type: Number,
observer: '_initializeChunking'
},
targetFramerate: {
type: Number,
value: 20
},
_targetFrameTime: {
type: Number,
computed: '_computeFrameTime(targetFramerate)'
}
},
behaviors: [Polymer.Templatizer],
observers: ['_itemsChanged(items.*)'],
created: function () {
this._instances = [];
this._pool = [];
this._limit = Infinity;
var self = this;
this._boundRenderChunk = function () {
self._renderChunk();
};
},
detached: function () {
this.__isDetached = true;
for (var i = 0; i < this._instances.length; i++) {
this._detachInstance(i);
}
},
attached: function () {
if (this.__isDetached) {
this.__isDetached = false;
var parent = Polymer.dom(Polymer.dom(this).parentNode);
for (var i = 0; i < this._instances.length; i++) {
this._attachInstance(i, parent);
}
}
},
ready: function () {
this._instanceProps = { __key__: true };
this._instanceProps[this.as] = true;
this._instanceProps[this.indexAs] = true;
if (!this.ctor) {
this.templatize(this);
}
},
_sortChanged: function (sort) {
var dataHost = this._getRootDataHost();
this._sortFn = sort && (typeof sort == 'function' ? sort : function () {
return dataHost[sort].apply(dataHost, arguments);
});
this._needFullRefresh = true;
if (this.items) {
this._debounceTemplate(this._render);
}
},
_filterChanged: function (filter) {
var dataHost = this._getRootDataHost();
this._filterFn = filter && (typeof filter == 'function' ? filter : function () {
return dataHost[filter].apply(dataHost, arguments);
});
this._needFullRefresh = true;
if (this.items) {
this._debounceTemplate(this._render);
}
},
_computeFrameTime: function (rate) {
return Math.ceil(1000 / rate);
},
_initializeChunking: function () {
if (this.initialCount) {
this._limit = this.initialCount;
this._chunkCount = this.initialCount;
this._lastChunkTime = performance.now();
}
},
_tryRenderChunk: function () {
if (this.items && this._limit < this.items.length) {
this.debounce('renderChunk', this._requestRenderChunk);
}
},
_requestRenderChunk: function () {
requestAnimationFrame(this._boundRenderChunk);
},
_renderChunk: function () {
var currChunkTime = performance.now();
var ratio = this._targetFrameTime / (currChunkTime - this._lastChunkTime);
this._chunkCount = Math.round(this._chunkCount * ratio) || 1;
this._limit += this._chunkCount;
this._lastChunkTime = currChunkTime;
this._debounceTemplate(this._render);
},
_observeChanged: function () {
this._observePaths = this.observe && this.observe.replace('.*', '.').split(' ');
},
_itemsChanged: function (change) {
if (change.path == 'items') {
if (Array.isArray(this.items)) {
this.collection = Polymer.Collection.get(this.items);
} else if (!this.items) {
this.collection = null;
} else {
this._error(this._logf('dom-repeat', 'expected array for `items`,' + ' found', this.items));
}
this._keySplices = [];
this._indexSplices = [];
this._needFullRefresh = true;
this._initializeChunking();
this._debounceTemplate(this._render);
} else if (change.path == 'items.splices') {
this._keySplices = this._keySplices.concat(change.value.keySplices);
this._indexSplices = this._indexSplices.concat(change.value.indexSplices);
this._debounceTemplate(this._render);
} else {
var subpath = change.path.slice(6);
this._forwardItemPath(subpath, change.value);
this._checkObservedPaths(subpath);
}
},
_checkObservedPaths: function (path) {
if (this._observePaths) {
path = path.substring(path.indexOf('.') + 1);
var paths = this._observePaths;
for (var i = 0; i < paths.length; i++) {
if (path.indexOf(paths[i]) === 0) {
this._needFullRefresh = true;
if (this.delay) {
this.debounce('render', this._render, this.delay);
} else {
this._debounceTemplate(this._render);
}
return;
}
}
}
},
render: function () {
this._needFullRefresh = true;
this._debounceTemplate(this._render);
this._flushTemplates();
},
_render: function () {
if (this._needFullRefresh) {
this._applyFullRefresh();
this._needFullRefresh = false;
} else if (this._keySplices.length) {
if (this._sortFn) {
this._applySplicesUserSort(this._keySplices);
} else {
if (this._filterFn) {
this._applyFullRefresh();
} else {
this._applySplicesArrayOrder(this._indexSplices);
}
}
} else {
}
this._keySplices = [];
this._indexSplices = [];
var keyToIdx = this._keyToInstIdx = {};
for (var i = this._instances.length - 1; i >= 0; i--) {
var inst = this._instances[i];
if (inst.isPlaceholder && i < this._limit) {
inst = this._insertInstance(i, inst.__key__);
} else if (!inst.isPlaceholder && i >= this._limit) {
inst = this._downgradeInstance(i, inst.__key__);
}
keyToIdx[inst.__key__] = i;
if (!inst.isPlaceholder) {
inst.__setProperty(this.indexAs, i, true);
}
}
this._pool.length = 0;
this._setRenderedItemCount(this._instances.length);
this.fire('dom-change');
this._tryRenderChunk();
},
_applyFullRefresh: function () {
var c = this.collection;
var keys;
if (this._sortFn) {
keys = c ? c.getKeys() : [];
} else {
keys = [];
var items = this.items;
if (items) {
for (var i = 0; i < items.length; i++) {
keys.push(c.getKey(items[i]));
}
}
}
var self = this;
if (this._filterFn) {
keys = keys.filter(function (a) {
return self._filterFn(c.getItem(a));
});
}
if (this._sortFn) {
keys.sort(function (a, b) {
return self._sortFn(c.getItem(a), c.getItem(b));
});
}
for (i = 0; i < keys.length; i++) {
var key = keys[i];
var inst = this._instances[i];
if (inst) {
inst.__key__ = key;
if (!inst.isPlaceholder && i < this._limit) {
inst.__setProperty(this.as, c.getItem(key), true);
}
} else if (i < this._limit) {
this._insertInstance(i, key);
} else {
this._insertPlaceholder(i, key);
}
}
for (var j = this._instances.length - 1; j >= i; j--) {
this._detachAndRemoveInstance(j);
}
},
_numericSort: function (a, b) {
return a - b;
},
_applySplicesUserSort: function (splices) {
var c = this.collection;
var keyMap = {};
var key;
for (var i = 0, s; i < splices.length && (s = splices[i]); i++) {
for (var j = 0; j < s.removed.length; j++) {
key = s.removed[j];
keyMap[key] = keyMap[key] ? null : -1;
}
for (j = 0; j < s.added.length; j++) {
key = s.added[j];
keyMap[key] = keyMap[key] ? null : 1;
}
}
var removedIdxs = [];
var addedKeys = [];
for (key in keyMap) {
if (keyMap[key] === -1) {
removedIdxs.push(this._keyToInstIdx[key]);
}
if (keyMap[key] === 1) {
addedKeys.push(key);
}
}
if (removedIdxs.length) {
removedIdxs.sort(this._numericSort);
for (i = removedIdxs.length - 1; i >= 0; i--) {
var idx = removedIdxs[i];
if (idx !== undefined) {
this._detachAndRemoveInstance(idx);
}
}
}
var self = this;
if (addedKeys.length) {
if (this._filterFn) {
addedKeys = addedKeys.filter(function (a) {
return self._filterFn(c.getItem(a));
});
}
addedKeys.sort(function (a, b) {
return self._sortFn(c.getItem(a), c.getItem(b));
});
var start = 0;
for (i = 0; i < addedKeys.length; i++) {
start = this._insertRowUserSort(start, addedKeys[i]);
}
}
},
_insertRowUserSort: function (start, key) {
var c = this.collection;
var item = c.getItem(key);
var end = this._instances.length - 1;
var idx = -1;
while (start <= end) {
var mid = start + end >> 1;
var midKey = this._instances[mid].__key__;
var cmp = this._sortFn(c.getItem(midKey), item);
if (cmp < 0) {
start = mid + 1;
} else if (cmp > 0) {
end = mid - 1;
} else {
idx = mid;
break;
}
}
if (idx < 0) {
idx = end + 1;
}
this._insertPlaceholder(idx, key);
return idx;
},
_applySplicesArrayOrder: function (splices) {
for (var i = 0, s; i < splices.length && (s = splices[i]); i++) {
for (var j = 0; j < s.removed.length; j++) {
this._detachAndRemoveInstance(s.index);
}
for (j = 0; j < s.addedKeys.length; j++) {
this._insertPlaceholder(s.index + j, s.addedKeys[j]);
}
}
},
_detachInstance: function (idx) {
var inst = this._instances[idx];
if (!inst.isPlaceholder) {
for (var i = 0; i < inst._children.length; i++) {
var el = inst._children[i];
Polymer.dom(inst.root).appendChild(el);
}
return inst;
}
},
_attachInstance: function (idx, parent) {
var inst = this._instances[idx];
if (!inst.isPlaceholder) {
parent.insertBefore(inst.root, this);
}
},
_detachAndRemoveInstance: function (idx) {
var inst = this._detachInstance(idx);
if (inst) {
this._pool.push(inst);
}
this._instances.splice(idx, 1);
},
_insertPlaceholder: function (idx, key) {
this._instances.splice(idx, 0, {
isPlaceholder: true,
__key__: key
});
},
_stampInstance: function (idx, key) {
var model = { __key__: key };
model[this.as] = this.collection.getItem(key);
model[this.indexAs] = idx;
return this.stamp(model);
},
_insertInstance: function (idx, key) {
var inst = this._pool.pop();
if (inst) {
inst.__setProperty(this.as, this.collection.getItem(key), true);
inst.__setProperty('__key__', key, true);
} else {
inst = this._stampInstance(idx, key);
}
var beforeRow = this._instances[idx + 1];
var beforeNode = beforeRow && !beforeRow.isPlaceholder ? beforeRow._children[0] : this;
var parentNode = Polymer.dom(this).parentNode;
Polymer.dom(parentNode).insertBefore(inst.root, beforeNode);
this._instances[idx] = inst;
return inst;
},
_downgradeInstance: function (idx, key) {
var inst = this._detachInstance(idx);
if (inst) {
this._pool.push(inst);
}
inst = {
isPlaceholder: true,
__key__: key
};
this._instances[idx] = inst;
return inst;
},
_showHideChildren: function (hidden) {
for (var i = 0; i < this._instances.length; i++) {
this._instances[i]._showHideChildren(hidden);
}
},
_forwardInstanceProp: function (inst, prop, value) {
if (prop == this.as) {
var idx;
if (this._sortFn || this._filterFn) {
idx = this.items.indexOf(this.collection.getItem(inst.__key__));
} else {
idx = inst[this.indexAs];
}
this.set('items.' + idx, value);
}
},
_forwardInstancePath: function (inst, path, value) {
if (path.indexOf(this.as + '.') === 0) {
this._notifyPath('items.' + inst.__key__ + '.' + path.slice(this.as.length + 1), value);
}
},
_forwardParentProp: function (prop, value) {
var i$ = this._instances;
for (var i = 0, inst; i < i$.length && (inst = i$[i]); i++) {
if (!inst.isPlaceholder) {
inst.__setProperty(prop, value, true);
}
}
},
_forwardParentPath: function (path, value) {
var i$ = this._instances;
for (var i = 0, inst; i < i$.length && (inst = i$[i]); i++) {
if (!inst.isPlaceholder) {
inst._notifyPath(path, value, true);
}
}
},
_forwardItemPath: function (path, value) {
if (this._keyToInstIdx) {
var dot = path.indexOf('.');
var key = path.substring(0, dot < 0 ? path.length : dot);
var idx = this._keyToInstIdx[key];
var inst = this._instances[idx];
if (inst && !inst.isPlaceholder) {
if (dot >= 0) {
path = this.as + '.' + path.substring(dot + 1);
inst._notifyPath(path, value, true);
} else {
inst.__setProperty(this.as, value, true);
}
}
}
},
itemForElement: function (el) {
var instance = this.modelForElement(el);
return instance && instance[this.as];
},
keyForElement: function (el) {
var instance = this.modelForElement(el);
return instance && instance.__key__;
},
indexForElement: function (el) {
var instance = this.modelForElement(el);
return instance && instance[this.indexAs];
}
});
Polymer({
is: 'array-selector',
_template: null,
properties: {
items: {
type: Array,
observer: 'clearSelection'
},
multi: {
type: Boolean,
value: false,
observer: 'clearSelection'
},
selected: {
type: Object,
notify: true
},
selectedItem: {
type: Object,
notify: true
},
toggle: {
type: Boolean,
value: false
}
},
clearSelection: function () {
if (Array.isArray(this.selected)) {
for (var i = 0; i < this.selected.length; i++) {
this.unlinkPaths('selected.' + i);
}
} else {
this.unlinkPaths('selected');
this.unlinkPaths('selectedItem');
}
if (this.multi) {
if (!this.selected || this.selected.length) {
this.selected = [];
this._selectedColl = Polymer.Collection.get(this.selected);
}
} else {
this.selected = null;
this._selectedColl = null;
}
this.selectedItem = null;
},
isSelected: function (item) {
if (this.multi) {
return this._selectedColl.getKey(item) !== undefined;
} else {
return this.selected == item;
}
},
deselect: function (item) {
if (this.multi) {
if (this.isSelected(item)) {
var skey = this._selectedColl.getKey(item);
this.arrayDelete('selected', item);
this.unlinkPaths('selected.' + skey);
}
} else {
this.selected = null;
this.selectedItem = null;
this.unlinkPaths('selected');
this.unlinkPaths('selectedItem');
}
},
select: function (item) {
var icol = Polymer.Collection.get(this.items);
var key = icol.getKey(item);
if (this.multi) {
if (this.isSelected(item)) {
if (this.toggle) {
this.deselect(item);
}
} else {
this.push('selected', item);
var skey = this._selectedColl.getKey(item);
this.linkPaths('selected.' + skey, 'items.' + key);
}
} else {
if (this.toggle && item == this.selected) {
this.deselect();
} else {
this.selected = item;
this.selectedItem = item;
this.linkPaths('selected', 'items.' + key);
this.linkPaths('selectedItem', 'items.' + key);
}
}
}
});
Polymer({
is: 'dom-if',
extends: 'template',
_template: null,
properties: {
'if': {
type: Boolean,
value: false,
observer: '_queueRender'
},
restamp: {
type: Boolean,
value: false,
observer: '_queueRender'
}
},
behaviors: [Polymer.Templatizer],
_queueRender: function () {
this._debounceTemplate(this._render);
},
detached: function () {
if (!this.parentNode || this.parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE && (!Polymer.Settings.hasShadow || !(this.parentNode instanceof ShadowRoot))) {
this._teardownInstance();
}
},
attached: function () {
if (this.if && this.ctor) {
this.async(this._ensureInstance);
}
},
render: function () {
this._flushTemplates();
},
_render: function () {
if (this.if) {
if (!this.ctor) {
this.templatize(this);
}
this._ensureInstance();
this._showHideChildren();
} else if (this.restamp) {
this._teardownInstance();
}
if (!this.restamp && this._instance) {
this._showHideChildren();
}
if (this.if != this._lastIf) {
this.fire('dom-change');
this._lastIf = this.if;
}
},
_ensureInstance: function () {
var parentNode = Polymer.dom(this).parentNode;
if (parentNode) {
var parent = Polymer.dom(parentNode);
if (!this._instance) {
this._instance = this.stamp();
var root = this._instance.root;
parent.insertBefore(root, this);
} else {
var c$ = this._instance._children;
if (c$ && c$.length) {
var lastChild = Polymer.dom(this).previousSibling;
if (lastChild !== c$[c$.length - 1]) {
for (var i = 0, n; i < c$.length && (n = c$[i]); i++) {
parent.insertBefore(n, this);
}
}
}
}
}
},
_teardownInstance: function () {
if (this._instance) {
var c$ = this._instance._children;
if (c$ && c$.length) {
var parent = Polymer.dom(Polymer.dom(c$[0]).parentNode);
for (var i = 0, n; i < c$.length && (n = c$[i]); i++) {
parent.removeChild(n);
}
}
this._instance = null;
}
},
_showHideChildren: function () {
var hidden = this.__hideTemplateChildren__ || !this.if;
if (this._instance) {
this._instance._showHideChildren(hidden);
}
},
_forwardParentProp: function (prop, value) {
if (this._instance) {
this._instance[prop] = value;
}
},
_forwardParentPath: function (path, value) {
if (this._instance) {
this._instance._notifyPath(path, value, true);
}
}
});
Polymer({
is: 'dom-bind',
extends: 'template',
_template: null,
created: function () {
var self = this;
Polymer.RenderStatus.whenReady(function () {
if (document.readyState == 'loading') {
document.addEventListener('DOMContentLoaded', function () {
self._markImportsReady();
});
} else {
self._markImportsReady();
}
});
},
_ensureReady: function () {
if (!this._readied) {
this._readySelf();
}
},
_markImportsReady: function () {
this._importsReady = true;
this._ensureReady();
},
_registerFeatures: function () {
this._prepConstructor();
},
_insertChildren: function () {
var parentDom = Polymer.dom(Polymer.dom(this).parentNode);
parentDom.insertBefore(this.root, this);
},
_removeChildren: function () {
if (this._children) {
for (var i = 0; i < this._children.length; i++) {
this.root.appendChild(this._children[i]);
}
}
},
_initFeatures: function () {
},
_scopeElementClass: function (element, selector) {
if (this.dataHost) {
return this.dataHost._scopeElementClass(element, selector);
} else {
return selector;
}
},
_prepConfigure: function () {
var config = {};
for (var prop in this._propertyEffects) {
config[prop] = this[prop];
}
var setupConfigure = this._setupConfigure;
this._setupConfigure = function () {
setupConfigure.call(this, config);
};
},
attached: function () {
if (this._importsReady) {
this.render();
}
},
detached: function () {
this._removeChildren();
},
render: function () {
this._ensureReady();
if (!this._children) {
this._template = this;
this._prepAnnotations();
this._prepEffects();
this._prepBehaviors();
this._prepConfigure();
this._prepBindings();
this._prepPropertyInfo();
Polymer.Base._initFeatures.call(this);
this._children = Polymer.TreeApi.arrayCopyChildNodes(this.root);
}
this._insertChildren();
this.fire('dom-change');
}
});
(function ($) {
    $.namespace = function (namespaceName, closures) {

        if ($.fn[namespaceName] === undefined) {
            $.fn[namespaceName] = function executor(context) {
                if (this instanceof executor) {
                    this.__context__ = context;
                }
                else {
                    return new executor(this);
                }
            };
        }

        $.each(closures, function (closureName, closure) {
            $.fn[namespaceName].prototype[closureName] = function () {
                return closure.apply(this.__context__, arguments);
            };
        });

    };
})(jQuery);
var autoComplete=function(){function e(e){function t(e,t){return e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className)}function o(e,t,o){e.attachEvent?e.attachEvent("on"+t,o):e.addEventListener(t,o)}function s(e,t,o){e.detachEvent?e.detachEvent("on"+t,o):e.removeEventListener(t,o)}function n(e,s,n,l){o(l||document,s,function(o){for(var s,l=o.target||o.srcElement;l&&!(s=t(l,e));)l=l.parentElement;s&&n.call(l,o)})}if(document.querySelector){var l={selector:0,source:0,minChars:3,delay:150,offsetLeft:0,offsetTop:1,cache:1,menuClass:"",renderItem:function(e,t){t=t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");var o=new RegExp("("+t.split(" ").join("|")+")","gi");return'<div class="autocomplete-suggestion" data-val="'+e+'">'+e.replace(o,"<b>$1</b>")+"</div>"},onSelect:function(){}};for(var c in e)e.hasOwnProperty(c)&&(l[c]=e[c]);for(var a="object"==typeof l.selector?[l.selector]:document.querySelectorAll(l.selector),u=0;u<a.length;u++){var i=a[u];i.sc=document.createElement("div"),i.sc.className="autocomplete-suggestions "+l.menuClass,i.autocompleteAttr=i.getAttribute("autocomplete"),i.setAttribute("autocomplete","off"),i.cache={},i.last_val="",i.updateSC=function(e,t){var o=i.getBoundingClientRect();if(i.sc.style.left=Math.round(o.left+(window.pageXOffset||document.documentElement.scrollLeft)+l.offsetLeft)+"px",i.sc.style.top=Math.round(o.bottom+(window.pageYOffset||document.documentElement.scrollTop)+l.offsetTop)+"px",i.sc.style.width=Math.round(o.right-o.left)+"px",!e&&(i.sc.style.display="block",i.sc.maxHeight||(i.sc.maxHeight=parseInt((window.getComputedStyle?getComputedStyle(i.sc,null):i.sc.currentStyle).maxHeight)),i.sc.suggestionHeight||(i.sc.suggestionHeight=i.sc.querySelector(".autocomplete-suggestion").offsetHeight),i.sc.suggestionHeight))if(t){var s=i.sc.scrollTop,n=t.getBoundingClientRect().top-i.sc.getBoundingClientRect().top;n+i.sc.suggestionHeight-i.sc.maxHeight>0?i.sc.scrollTop=n+i.sc.suggestionHeight+s-i.sc.maxHeight:0>n&&(i.sc.scrollTop=n+s)}else i.sc.scrollTop=0},o(window,"resize",i.updateSC),document.body.appendChild(i.sc),n("autocomplete-suggestion","mouseleave",function(){var e=i.sc.querySelector(".autocomplete-suggestion.selected");e&&setTimeout(function(){e.className=e.className.replace("selected","")},20)},i.sc),n("autocomplete-suggestion","mouseover",function(){var e=i.sc.querySelector(".autocomplete-suggestion.selected");e&&(e.className=e.className.replace("selected","")),this.className+=" selected"},i.sc),n("autocomplete-suggestion","mousedown",function(e){if(t(this,"autocomplete-suggestion")){var o=this.getAttribute("data-val");i.value=o,l.onSelect(e,o,this),i.sc.style.display="none"}},i.sc),i.blurHandler=function(){try{var e=document.querySelector(".autocomplete-suggestions:hover")}catch(t){var e=0}e?i!==document.activeElement&&setTimeout(function(){i.focus()},20):(i.last_val=i.value,i.sc.style.display="none",setTimeout(function(){i.sc.style.display="none"},350))},o(i,"blur",i.blurHandler);var r=function(e){var t=i.value;if(i.cache[t]=e,e.length&&t.length>=l.minChars){for(var o="",s=0;s<e.length;s++)o+=l.renderItem(e[s],t);i.sc.innerHTML=o,i.updateSC(0)}else i.sc.style.display="none"};i.keydownHandler=function(e){var t=window.event?e.keyCode:e.which;if((40==t||38==t)&&i.sc.innerHTML){var o,s=i.sc.querySelector(".autocomplete-suggestion.selected");return s?(o=40==t?s.nextSibling:s.previousSibling,o?(s.className=s.className.replace("selected",""),o.className+=" selected",i.value=o.getAttribute("data-val")):(s.className=s.className.replace("selected",""),i.value=i.last_val,o=0)):(o=40==t?i.sc.querySelector(".autocomplete-suggestion"):i.sc.childNodes[i.sc.childNodes.length-1],o.className+=" selected",i.value=o.getAttribute("data-val")),i.updateSC(0,o),!1}if(27==t)i.value=i.last_val,i.sc.style.display="none";else if(13==t||9==t){var s=i.sc.querySelector(".autocomplete-suggestion.selected");s&&"none"!=i.sc.style.display&&(l.onSelect(e,s.getAttribute("data-val"),s),setTimeout(function(){i.sc.style.display="none"},20))}},o(i,"keydown",i.keydownHandler),i.keyupHandler=function(e){var t=window.event?e.keyCode:e.which;if(!t||(35>t||t>40)&&13!=t&&27!=t){var o=i.value;if(o.length>=l.minChars){if(o!=i.last_val){if(i.last_val=o,clearTimeout(i.timer),l.cache){if(o in i.cache)return void r(i.cache[o]);for(var s=1;s<o.length-l.minChars;s++){var n=o.slice(0,o.length-s);if(n in i.cache&&!i.cache[n].length)return void r([])}}i.timer=setTimeout(function(){l.source(o,r)},l.delay)}}else i.last_val=o,i.sc.style.display="none"}},o(i,"keyup",i.keyupHandler),i.focusHandler=function(e){i.last_val="\n",i.keyupHandler(e)},l.minChars||o(i,"focus",i.focusHandler)}this.destroy=function(){for(var e=0;e<a.length;e++){var t=a[e];s(window,"resize",t.updateSC),s(t,"blur",t.blurHandler),s(t,"focus",t.focusHandler),s(t,"keydown",t.keydownHandler),s(t,"keyup",t.keyupHandler),t.autocompleteAttr?t.setAttribute("autocomplete",t.autocompleteAttr):t.removeAttribute("autocomplete"),document.body.removeChild(t.sc),t=null}}}}return e}();!function(){"function"==typeof define&&define.amd?define("autoComplete",function(){return autoComplete}):"undefined"!=typeof module&&module.exports?module.exports=autoComplete:window.autoComplete=autoComplete}();
$(function () {addEventListener('WebComponentsReady', function () {
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        Threeds._config = {
            form: {
                id: '32f91ef071fe9e8974f3e6468c36312d',
                adapter: 'Com.Threeds.Service.Adapter.Neolane',
                url: 'http://dassault-dev.neolane.net/dsx/lp_api.jssp'
            }
        };
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        Threeds._locale = {
            'en': {
                'error': {
                    'field_invalid': "The field \"{0}\" is invalid",
                    'field_require': 'This field is required',
                    'email_invalid': 'A valid email address is required',
                    'checkbox_require': 'Please select the check box'
                }
            },
            'fr': {}
        };
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        Threeds._parameters = {
            'translator': {
                'lang': 'en',
                'adapter': 'Com.Threeds._locale'
            }
        };
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
String.format = function () {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Element;
        (function (Element) {
            var AbstractPolymerElement = function (_super) {
                __extends(AbstractPolymerElement, _super);
                function AbstractPolymerElement(data) {
                    _super.call(this);
                }
                return AbstractPolymerElement;
            }(polymer.Base);
            Element.AbstractPolymerElement = AbstractPolymerElement;
        })(Element = Threeds.Element || (Threeds.Element = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var I18n;
        (function (I18n) {
            var Translator = function () {
                function Translator(options) {
                    this.lang = options.lang;
                    this.adapter = options.adapter;
                }
                Object.defineProperty(Translator, "instance", {
                    get: function () {
                        if (Translator._instance == undefined) {
                            Translator._instance = new Com.Threeds.I18n.Translator(Object.find(Com.Threeds._parameters, 'translator'));
                        }
                        return Translator._instance;
                    },
                    enumerable: true,
                    configurable: true
                });
                Translator.prototype.t = function (key) {
                    return Object.find(eval(this.adapter), this.lang + "." + key);
                };
                return Translator;
            }();
            I18n.Translator = Translator;
            $.i18n = function () {
                return Com.Threeds.I18n.Translator.instance;
            };
        })(I18n = Threeds.I18n || (Threeds.I18n = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Object.find = function (o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1');
    s = s.replace(/^\./, '');
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Plugin;
        (function (Plugin) {
            var AbstractPlugin = function () {
                function AbstractPlugin(elem, options) {
                    this.settings = {};
                    this.elem = elem;
                    this.settings = $.extend({}, this.settings, options);
                }
                AbstractPlugin.prototype.render = function (type, data) {
                    return eval("new " + this.settings.render.adapter + "()")[type](this, data);
                };
                AbstractPlugin.prototype.service = function (name) {
                    return eval('new ' + Object.find(this.settings, name).adapter);
                };
                return AbstractPlugin;
            }();
            Plugin.AbstractPlugin = AbstractPlugin;
        })(Plugin = Threeds.Plugin || (Threeds.Plugin = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Object.find = function (o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1');
    s = s.replace(/^\./, '');
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Service;
        (function (Service) {
            var ServiceManager = function () {
                function ServiceManager() {
                    if (typeof ServiceManager.prototype.instance === 'undefined') {}
                }
                ServiceManager.prototype.get = function (name) {
                    return eval('new Service.' + name.charAt(0).toUpperCase() + name.slice(1));
                };
                return ServiceManager;
            }();
            Service.ServiceManager = ServiceManager;
            $.fn.service = function (name) {
                return new ServiceManager().get(name);
            };
        })(Service = Threeds.Service || (Threeds.Service = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Validator;
        (function (Validator) {
            var AbstractValidator = function () {
                function AbstractValidator() {}
                return AbstractValidator;
            }();
            Validator.AbstractValidator = AbstractValidator;
        })(Validator = Threeds.Validator || (Threeds.Validator = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Validator;
        (function (Validator) {
            var AbstractValidator = Com.Threeds.Validator.AbstractValidator;
            var Email = function (_super) {
                __extends(Email, _super);
                function Email() {
                    _super.apply(this, arguments);
                }
                Email.isValid = function (value) {
                    if (!/^(.+@.+\..{2,4})$/.test(value)) {
                        return $.i18n().t('error.email_invalid');
                    }
                    return true;
                };
                return Email;
            }(AbstractValidator);
            Validator.Email = Email;
        })(Validator = Threeds.Validator || (Threeds.Validator = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Validator;
        (function (Validator) {
            var AbstractValidator = Com.Threeds.Validator.AbstractValidator;
            var Require = function (_super) {
                __extends(Require, _super);
                function Require() {
                    _super.apply(this, arguments);
                }
                Require.isValid = function (value) {
                    if (value == '' || value == undefined) {
                        return $.i18n().t('error.field_require');
                    }
                    return true;
                };
                return Require;
            }(AbstractValidator);
            Validator.Require = Require;
        })(Validator = Threeds.Validator || (Threeds.Validator = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Service;
        (function (Service) {
            var Adapter;
            (function (Adapter) {
                var AbstractAdapter = function () {
                    function AbstractAdapter() {}
                    return AbstractAdapter;
                }();
                Adapter.AbstractAdapter = AbstractAdapter;
            })(Adapter = Service.Adapter || (Service.Adapter = {}));
        })(Service = Threeds.Service || (Threeds.Service = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Service;
        (function (Service) {
            var Adapter;
            (function (Adapter) {
                var AbstractAdapter = Com.Threeds.Service.Adapter.AbstractAdapter;
                var Exalead = function (_super) {
                    __extends(Exalead, _super);
                    function Exalead() {
                        _super.apply(this, arguments);
                    }
                    Exalead.prototype.cards = function (context, options) {
                        var query = encodeURIComponent(options.query);
                        var offset = options.limit * options.offset;
                        var limit = options.limit;
                        $.ajax({
                            type: "GET",
                            dataType: "json", url: 'data/customer-story.json',
                            success: function (data) {
                                context.render('cards', data);
                            },
                            error: function (resultat, statut, erreur) {
                                context.render('cards', false);
                            }
                        });
                    };
                    Exalead.prototype.groups = function (context, options) {
                        $.ajax({
                            type: "GET",
                            dataType: "json", url: 'data/groups.json',
                            success: function (data) {
                                context.render('groups', data);
                            },
                            error: function (resultat, statut, erreur) {
                                context.render('groups', false);
                            }
                        });
                    };
                    Exalead.prototype.customGroups = function (context, options) {
                        $.ajax({
                            type: "GET",
                            dataType: "json", url: 'data/custom-groups.json',
                            success: function (data) {
                                context.render('customGroups', data);
                            },
                            error: function (resultat, statut, erreur) {
                                context.render('customGroups', false);
                            }
                        });
                    };
                    return Exalead;
                }(AbstractAdapter);
                Adapter.Exalead = Exalead;
            })(Adapter = Service.Adapter || (Service.Adapter = {}));
        })(Service = Threeds.Service || (Threeds.Service = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Input = function (_super) {
                        __extends(Input, _super);
                        function Input(context, data) {
                            _super.call(this, data);
                            this.type = 'text';
                            this.required = false;
                            this._validators = [];
                            this._errorMessage = '';
                            if (data.type != undefined && data.type != 'hidden') this.classList.add('ds-form-input-text');
                            if (context.settings.display.placeholder) this.placeholder = data.label;
                            if (data.name != undefined) this.id = data.name, this.name = data.name;
                            if (data.required != undefined) this.required = data.required;
                            if (data.type != undefined) this.type = data.type;
                            if (data.value != undefined) this.value = data.value;
                            if (data.validators != undefined) this._validators = data.validators;
                        }
                        Object.defineProperty(Input.prototype, "errorMessage", {
                            get: function () {
                                return this._errorMessage == undefined ? '' : this._errorMessage;
                            },
                            set: function (value) {
                                this._errorMessage = value == undefined ? '' : value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Input.prototype._onChange = function (e) {
                            this.fire('field-value-changed', this);
                            this.setAttribute('value', this.value);
                            this.isValid();
                        };
                        Input.prototype.isValid = function () {
                            var message;
                            for (var i = 0; i < this._validators.length; i++) {
                                message = eval(this._validators[i] + ".isValid(this.value)");
                                if (typeof message == 'string') {
                                    return this.displayError(message);
                                }
                            }
                            return this.displayError();
                        };
                        Input.prototype.displayError = function (detail) {
                            this.errorMessage = detail;
                            this.fire('error', this.errorMessage);
                            if (!this.errorMessage) {
                                this.classList.remove('_error');
                                return false;
                            }
                            this.classList.add('_error');
                            return true;
                        };
                        __decorate([property({ type: String, reflectToAttribute: true })], Input.prototype, "type", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Input.prototype, "id", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Input.prototype, "name", void 0);
                        __decorate([property({ type: String })], Input.prototype, "value", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Input.prototype, "placeholder", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Input.prototype, "required", void 0);
                        __decorate([listen('input')], Input.prototype, "_onChange", null);
                        Input = __decorate([component('input-element'), extend("input")], Input);
                        return Input;
                    }(AbstractPolymerElement);
                    Element.Input = Input;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Input.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Textarea = function (_super) {
                        __extends(Textarea, _super);
                        function Textarea(context, data) {
                            _super.call(this, data);
                            this.required = false;
                            this._validators = [];
                            this._errorMessage = '';
                            this.classList.add('ds-form-input-text');
                            if (context.settings.display.placeholder) this.placeholder = data.label;
                            if (data.name != undefined) this.id = data.name, this.name = data.name;
                            if (data.required != undefined) this.required = data.required;
                            if (data.value != undefined) this.value = data.value;
                            if (data.validators != undefined) this._validators = data.validators;
                        }
                        Object.defineProperty(Textarea.prototype, "errorMessage", {
                            get: function () {
                                return this._errorMessage == undefined ? '' : this._errorMessage;
                            },
                            set: function (value) {
                                this._errorMessage = value == undefined ? '' : value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Textarea.prototype._onChange = function (e) {
                            this.fire('field-value-changed', this);
                            this.setAttribute('value', this.value);
                            this.isValid();
                        };
                        Textarea.prototype.isValid = function () {
                            var message;
                            for (var i = 0; i < this._validators.length; i++) {
                                message = eval(this._validators[i] + ".isValid(this.value)");
                                if (typeof message == 'string') {
                                    return this.displayError(message);
                                }
                            }
                            return this.displayError();
                        };
                        Textarea.prototype.displayError = function (detail) {
                            this.errorMessage = detail;
                            this.fire('error', this.errorMessage);
                            if (!this.errorMessage) {
                                this.classList.remove('_error');
                                return false;
                            }
                            this.classList.add('_error');
                            return true;
                        };
                        __decorate([property({ type: String, reflectToAttribute: true })], Textarea.prototype, "id", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Textarea.prototype, "name", void 0);
                        __decorate([property({ type: String })], Textarea.prototype, "value", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Textarea.prototype, "placeholder", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Textarea.prototype, "required", void 0);
                        __decorate([listen('input')], Textarea.prototype, "_onChange", null);
                        Textarea = __decorate([component('textarea-element'), extend("textarea")], Textarea);
                        return Textarea;
                    }(AbstractPolymerElement);
                    Element.Textarea = Textarea;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Textarea.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Checkbox = function (_super) {
                        __extends(Checkbox, _super);
                        function Checkbox(context, data) {
                            _super.call(this, data);
                            this.type = 'checkbox';
                            this.checked = false;
                            this.required = false;
                            this._errorMessage = '';
                            if (data.name != undefined) this.id = data.name, this.name = data.name;
                            if (data.fieldname != undefined) this.id = data.fieldname, this.name = data.fieldname;
                            if (data.required != undefined) this.required = data.required;
                            if (data.value != undefined) this.checked = data.value;
                        }
                        Object.defineProperty(Checkbox.prototype, "errorMessage", {
                            get: function () {
                                return this._errorMessage == undefined ? '' : this._errorMessage;
                            },
                            set: function (value) {
                                this._errorMessage = value == undefined ? '' : value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Checkbox.prototype._onChange = function (e) {
                            if (this.checked) {
                                this.setAttribute("checked", this.checked.toString());
                            } else {
                                this.removeAttribute("checked");
                            }
                            this.isValid();
                        };
                        Checkbox.prototype.isValid = function () {
                            if (this.required && this.checked == false) {
                                return this.displayError('This field is required !');
                            }
                            return this.displayError();
                        };
                        Checkbox.prototype.displayError = function (detail) {
                            this.errorMessage = detail;
                            this.fire('error', this.errorMessage);
                            if (!this.errorMessage) {
                                this.classList.remove('_error');
                                return false;
                            }
                            this.classList.add('_error');
                            return true;
                        };
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Checkbox.prototype, "type", void 0);
                        __decorate([property({ type: Boolean })], Checkbox.prototype, "checked", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Checkbox.prototype, "id", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Checkbox.prototype, "name", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Checkbox.prototype, "required", void 0);
                        __decorate([listen('change')], Checkbox.prototype, "_onChange", null);
                        Checkbox = __decorate([component('checkbox-element'), extend("input")], Checkbox);
                        return Checkbox;
                    }(AbstractPolymerElement);
                    Element.Checkbox = Checkbox;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Checkbox.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Radio = function (_super) {
                        __extends(Radio, _super);
                        function Radio(context, data) {
                            _super.call(this, data);
                            this.type = 'radio';
                            this.checked = false;
                            this.required = false;
                            this._errorMessage = '';
                            if (data.name != undefined) this.id = data.name, this.name = data.name;
                            if (data.fieldname != undefined) this.id = data.fieldname, this.name = data.fieldname;
                            if (data.required != undefined) this.required = data.required;
                            if (data.value != undefined) this.checked = data.value;
                        }
                        Object.defineProperty(Radio.prototype, "errorMessage", {
                            get: function () {
                                return this._errorMessage == undefined ? '' : this._errorMessage;
                            },
                            set: function (value) {
                                this._errorMessage = value == undefined ? '' : value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Radio.prototype._onChange = function (e) {
                            if (this.checked) {
                                this.setAttribute("checked", this.checked.toString());
                            } else {
                                this.removeAttribute("checked");
                            }
                            this.isValid();
                        };
                        Radio.prototype.isValid = function () {
                            if (this.required && this.checked == false) {
                                return this.displayError('This field is required !');
                            }
                            return this.displayError();
                        };
                        Radio.prototype.displayError = function (detail) {
                            this.errorMessage = detail;
                            this.fire('error', this.errorMessage);
                            if (!this.errorMessage) {
                                this.classList.remove('_error');
                                return false;
                            }
                            this.classList.add('_error');
                            return true;
                        };
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Radio.prototype, "type", void 0);
                        __decorate([property({ type: Boolean })], Radio.prototype, "checked", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Radio.prototype, "name", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Radio.prototype, "required", void 0);
                        __decorate([listen('change')], Radio.prototype, "_onChange", null);
                        Radio = __decorate([component('radio-element'), extend("input")], Radio);
                        return Radio;
                    }(AbstractPolymerElement);
                    Element.Radio = Radio;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Radio.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Select = function (_super) {
                        __extends(Select, _super);
                        function Select(context, data) {
                            this.required = false;
                            this.data = [];
                            this._errorMessage = '';
                            this.data = data;
                            _super.call(this, data);
                            this.classList.add('form-control');
                            if (this.data.name != undefined) this.id = this.data.name, this.name = this.data.name;
                            if (this.data.parentField != undefined) this.parentField = this.data.parentField;
                            this.update();
                        }
                        Select.prototype.clear = function () {
                            while (Polymer.dom(this).firstChild) Polymer.dom(this).removeChild(Polymer.dom(this).firstChild);
                            this.innerHTML = '';
                        };
                        Select.prototype.update = function () {
                            this.clear();
                            for (var k in this.data.options) {
                                if (this.data.value != undefined && this.data.options[k].value == this.data.value) {
                                    this.data.options[k].selected = true;
                                }
                                if (this.data.options[k].selected && this.data.options[k].parentValue != '') {
                                    this.parentFieldValue = this.data.options[k].parentValue;
                                }
                            }
                            for (var k in this.data.options) {
                                if (this.parentFieldValue == undefined && this.parentField == undefined) {
                                    this.appendChild(Element.Option.create(this, this.data.options[k]));
                                } else if (this.parentFieldValue == this.data.options[k].parentValue) {
                                    this.appendChild(Element.Option.create(this, this.data.options[k]));
                                }
                            }
                            this.fire('field-hide', this.options.length ? false : true);
                        };
                        Object.defineProperty(Select.prototype, "errorMessage", {
                            get: function () {
                                return this._errorMessage == undefined ? '' : this._errorMessage;
                            },
                            set: function (value) {
                                this._errorMessage = value == undefined ? '' : value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Select.prototype._onChange = function (e) {
                            this.selectOption(this.value);
                        };
                        Select.prototype.selectOption = function (value) {
                            this.fire('field-value-changed', this);
                            for (var i = 0; i < Polymer.dom(this).childNodes.length; i++) {
                                Polymer.dom(this).childNodes[i].selected = Polymer.dom(this).childNodes[i].value === value ? true : false;
                            }
                            this.fire('field-select-value', { 'value': value, 'name': this.name });
                        };
                        Select.prototype.isValid = function () {
                            if (!this.required) return this.displayError();
                            var detail;
                            if (!this.value) detail = 'This field is required !';
                            return this.displayError(detail);
                        };
                        Select.prototype.displayError = function (detail) {
                            this.errorMessage = detail;
                            this.fire('error', this.errorMessage);
                            if (!this.errorMessage) {
                                this.classList.remove('_error');
                                return false;
                            }
                            this.classList.add('_error');
                            return true;
                        };
                        __decorate([property({ type: String, reflectToAttribute: true })], Select.prototype, "name", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Select.prototype, "required", void 0);
                        __decorate([listen('change')], Select.prototype, "_onChange", null);
                        Select = __decorate([component('select-element'), extend("select")], Select);
                        return Select;
                    }(AbstractPolymerElement);
                    Element.Select = Select;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Select.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var FieldGroup = function (_super) {
                        __extends(FieldGroup, _super);
                        function FieldGroup(context, data) {
                            _super.call(this, data);
                            this.classList.add('ds-form-group-element');
                            var label = document.createElement('label');
                            label.className = 'col-sm-2 form-control-label';
                            label.innerHTML = data.label;
                            this.appendChild(label);
                            var container = document.createElement('div');
                            container.classList.add('col-sm-10');
                            for (var i in data.items) {
                                container.appendChild(Element.Field.create(context, data.items[i]));
                            }
                            this.appendChild(container);
                        }
                        FieldGroup = __decorate([component('field-group-element'), extend("div")], FieldGroup);
                        return FieldGroup;
                    }(AbstractPolymerElement);
                    Element.FieldGroup = FieldGroup;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.FieldGroup.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Field = function (_super) {
                        __extends(Field, _super);
                        function Field(context, data) {
                            this.hydrateValidators(data);
                            _super.call(this, data);
                            this.data = data;
                            this.classList.add('ds-form-group-element');
                            if (typeof data.required != 'undefined' && typeof data.required) {
                                this.classList.add('ds-field-required');
                            }
                            if (typeof data.fieldname == 'string') data.name = data.fieldname;
                            this.classList.add("field-" + data.name);
                            this.append(context, data);
                        }
                        Field.prototype.label = function (context, data) {
                            if (!context.settings.display.label && data.type.toLowerCase() != 'checkbox' && data.type.toLowerCase() != 'radio') return;
                            var label = document.createElement('label');
                            label.htmlFor = data.name;
                            if (data.type != 'checkbox' && data.type != 'radio') {
                                label.className = 'col-sm-2 form-control-label';
                            } else {
                                label.className = 'form-control-label';
                            }
                            label.appendChild(document.createTextNode(this.data.label));
                            label.appendChild(document.createTextNode(context.settings.styling.label.suffixe));
                            if (typeof data.required != 'undefined' && data.required && context.settings.styling.label.mandatory != '') {
                                var mandatory = document.createElement('span');
                                mandatory.setAttribute('class', 'mandatory');
                                mandatory.innerHTML = context.settings.styling.label.mandatory;
                                label.appendChild(mandatory);
                            }
                            return label;
                        };
                        Field.prototype.container = function (context, data) {
                            var type = data.type.toLowerCase();
                            var container = document.createElement('div');
                            return container;
                        };
                        Field.prototype.append = function (context, data) {
                            var type = data.type.toLowerCase();
                            var container = this.container(context, data);
                            var label = this.label(context, data);
                            if (type != 'checkbox' && type != 'radio' && context.settings.display.label) {
                                this.appendChild(label);
                            }
                            switch (type) {
                                case 'fieldgroup':
                                    this.appendChild(FieldGroupElement.create(context, data));
                                    break;
                                case 'select':
                                    container.appendChild(Element.Select.create(context, data));
                                    this.appendChild(container);
                                    break;
                                case 'checkbox':
                                    label.insertBefore(Element.Checkbox.create(context, data), label.firstChild);
                                    container.appendChild(label);
                                    container.classList.add('checkbox');
                                    this.appendChild(container);
                                    break;
                                case 'radio':
                                    label.insertBefore(Element.Radio.create(context, data), label.firstChild);
                                    container.appendChild(label);
                                    container.classList.add('radio');
                                    this.appendChild(container);
                                    break;
                                case 'text':
                                    container.appendChild(Element.Input.create(context, data));
                                    this.appendChild(container);
                                    this.fire('field-create', this);
                                    break;
                                case 'textarea':
                                    container.appendChild(Element.Textarea.create(context, data));
                                    this.appendChild(container);
                                    break;
                                default:
                                    console.log('<!> field no defined');
                                    console.log(data);
                                    break;
                            }
                        };
                        Field.prototype.hydrateValidators = function (data) {
                            var validators = data.validators == undefined ? [] : data.validators;
                            if (data.name == 'email' && data.type != 'hidden') validators.push('Com.Threeds.Validator.Email');
                            if (data.required) validators.push('Com.Threeds.Validator.Require');
                            if (validators.length) data.validators = validators;
                        };
                        Field.prototype.handleError = function (e, detail) {
                            this.displayError(detail);
                        };
                        Field.prototype.displayError = function (detail) {
                            this.error = detail;
                            if (this.error == undefined || this.error == '') {
                                this.classList.remove('has-error');
                            } else {
                                this.classList.add('has-error');
                            }
                        };
                        Field.prototype.handleHide = function (e, status) {
                            if (status) {
                                this.classList.add('hide');
                            } else {
                                this.classList.remove('hide');
                            }
                        };
                        __decorate([property({ type: String })], Field.prototype, "error", void 0);
                        __decorate([listen("error")], Field.prototype, "handleError", null);
                        __decorate([listen('field-hide')], Field.prototype, "handleHide", null);
                        Field = __decorate([component('field-element'), extend("div"), template("<template is=\"dom-if\" if=\"{{error}}\"><span class=\"ds-form-error\">{{error}}</span></template>")], Field);
                        return Field;
                    }(AbstractPolymerElement);
                    Element.Field = Field;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Field.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Submit = function (_super) {
                        __extends(Submit, _super);
                        function Submit(context, data) {
                            _super.call(this, data);
                            this.type = 'submit';
                            this.class = 'ds-btn ds-btn-circle';
                            if (typeof data.value != undefined) this.value = data.value;
                        }
                        __decorate([property({ type: String, reflectToAttribute: true })], Submit.prototype, "type", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Submit.prototype, "name", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Submit.prototype, "value", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Submit.prototype, "class", void 0);
                        Submit = __decorate([component('submit-element'), extend("input")], Submit);
                        return Submit;
                    }(AbstractPolymerElement);
                    Element.Submit = Submit;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Submit.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var SubmitElement = Com.Threeds.Component.Form.Element.Submit;
                    var Step = function (_super) {
                        __extends(Step, _super);
                        function Step(context, data) {
                            if (data.success == undefined && !data.success && data.result.config !== undefined) return;
                            _super.call(this, data);
                            this.classList.add('ds-form-fieldset');
                            this.appendChild(Element.Input.create(context, {
                                name: "op",
                                type: "hidden",
                                value: data.result.nextAction
                            }));
                            for (var k in data.result.config) {
                                if (data.result.config[k].type.toLowerCase() == 'hidden') {
                                    this.appendChild(Element.Input.create(context, data.result.config[k]));
                                } else if (data.result.config[k].type.toLowerCase() == 'fieldgroup') {
                                    this.appendChild(Element.FieldGroup.create(context, data.result.config[k]));
                                } else {
                                    this.appendChild(Element.Field.create(context, data.result.config[k]));
                                }
                            }
                            var container = document.createElement('div');
                            container.classList.add('ds-form-group-element');
                            container.classList.add('ds-border');
                            var options = { value: context.settings.nextLabel };
                            if (context._currentPosition == Object.keys(context.settings.steps).length - 1) {
                                options.value = context.settings.action.label;
                            }
                            this.appendChild(SubmitElement.create(context, options));
                        }
                        Object.defineProperty(Step.prototype, "settings", {
                            get: function () {
                                return this.context.settings;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Step = __decorate([component('step-element'), extend("fieldset")], Step);
                        return Step;
                    }(AbstractPolymerElement);
                    Element.Step = Step;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Step.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Core;
        (function (Core) {
            var Ajax;
            (function (Ajax) {
                var AbstractPlugin = Com.Threeds.Plugin.AbstractPlugin;
                var AutoComplete = function (_super) {
                    __extends(AutoComplete, _super);
                    function AutoComplete(context, elem, options) {
                        _super.call(this, elem, options);
                        this.settings = {
                            api: {
                                adapter: 'Com.Threeds.Service.Adapter.Neolane',
                                serviceName: 'customerAutocomplete'
                            },
                            select: function (data) {}
                        };
                        this.context = context;
                        this.elem = elem;
                        this.settings = $.extend({}, this.settings, options);
                        this.service('api')[this.settings.api.serviceName](this, this.settings);
                    }
                    AutoComplete.prototype.render = function (context, data) {
                        console.log('AutoComplete->render->>>>>');
                        console.log(data);
                    };
                    return AutoComplete;
                }(AbstractPlugin);
                Ajax.AutoComplete = AutoComplete;
            })(Ajax = Core.Ajax || (Core.Ajax = {}));
        })(Core = Threeds.Core || (Threeds.Core = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var Behavior;
                    (function (Behavior) {
                        var Neolane;
                        (function (Neolane) {
                            var FormBehavior = function (_super) {
                                __extends(FormBehavior, _super);
                                function FormBehavior() {
                                    _super.apply(this, arguments);
                                }
                                FormBehavior.prototype.action = function (form, data) {
                                    if (Object.isDefined(data, 'result.config')) {
                                        form.update(data);
                                    } else if (Object.isDefined(data, 'result.thankYouPage')) {
                                        if (data.result.properties.displayThankYou) {
                                            form.success(data.result.thankYouPage);
                                            if (data.result.properties.openUrl) {}
                                        } else if (data.result.properties.openUrl) {
                                            form.redirect(data.result.asset.url);
                                        }
                                    } else if (Object.isDefined(data, 'result.properties.content') && Object.isDefined(data, 'result.properties.redirect') && data.result.properties.redirect) {
                                        form.redirect(data.result.properties.content);
                                    } else if (Object.isDefined(data, 'result.properties.content') && Object.isDefined(data, 'result.properties.redirect') && !data.result.properties.redirect) {
                                        form.warning(data.result.properties.content);
                                    } else if (Object.isDefined(data, 'errors.0.error.message')) {
                                        form.warning(data.errors[0].error.message);
                                    } else if (Object.isDefined(data, 'errors')) {
                                        form.errors = data.errors.fields;
                                    }
                                };
                                FormBehavior.prototype._onCreate = function (e, elem) {};
                                FormBehavior.prototype._onChange = function (e, elem) {
                                    var context = this;
                                    this.updateAllChildrenField(elem, Polymer.dom(this));
                                    console.log(elem.name);
                                    console.log('field-value-changed');
                                    if (elem.name == 'company') {
                                        console.log('field-create');
                                        console.log(elem.name);
                                        console.log($('#company').val());
                                        console.log($('#country').val());
                                        var companyAutoComplete = new autoComplete({
                                            selector: "#" + elem.name,
                                            minChars: 3,
                                            source: function (term, suggest) {
                                                term = term.toLowerCase();
                                                $.ajax({
                                                    url: 'http://dassault-test.neolane.net/dsx/dnbWebservice.jssp',
                                                    dataType: 'jsonp',
                                                    data: {
                                                        query: 'aaa',
                                                        iso: 'FR'
                                                    },
                                                    success: function (data) {
                                                        suggest($.map(data.dnbReponse.responseDetail.candidate, function (objet) {
                                                            return {
                                                                companyName: objet.companyName,
                                                                duns: objet.duns,
                                                                postalCode: objet.postalCode,
                                                                city: objet.city,
                                                                address1: objet.address1,
                                                                address2: objet.address2,
                                                                stateCode: objet.stateCode
                                                            };
                                                        }));
                                                    }
                                                });
                                            },
                                            renderItem: function (item, search) {
                                                search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&amp;');
                                                var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                                                var label = item.companyName.replace(re, "<b>$1</b>");
                                                return '<div class="autocomplete-suggestion" data-companyName="' + item.companyName + '" data-duns="' + item.duns + '" data-postalCode="' + item.postalCode + '" data-city="' + item.city + '" data-address1="' + item.address1 + '" data-address2="' + item.address2 + '" data-stateCode="' + item.stateCode + '" data-val="' + search + '">' + label + '</div>';
                                            },
                                            onSelect: function (e, term, item) {
                                                console.log(term);
                                                context.append({
                                                    name: "duns",
                                                    type: "hidden",
                                                    value: item.getAttribute('data-duns')
                                                }).append({
                                                    name: "zipCode",
                                                    type: "hidden",
                                                    value: item.getAttribute('data-postalCode')
                                                }).append({
                                                    name: "city",
                                                    type: "hidden",
                                                    value: item.getAttribute('data-city')
                                                }).append({
                                                    name: "address1",
                                                    type: "hidden",
                                                    value: item.getAttribute('data-address1')
                                                }).append({
                                                    name: "address2",
                                                    type: "hidden",
                                                    value: item.getAttribute('data-address2')
                                                }).append({
                                                    name: "state",
                                                    type: "hidden",
                                                    value: item.getAttribute('data-stateCode')
                                                });
                                                elem.value = item.getAttribute('data-companyName');
                                                console.log('Item "' + item.getAttribute('data-companyName'));
                                            }
                                        });
                                    }
                                };
                                FormBehavior.prototype.updateAllChildrenField = function (elem, node) {
                                    var child;
                                    for (var i = 0; i < node.childNodes.length; i++) {
                                        child = node.childNodes[i];
                                        if (typeof child.update == 'function' && child.parentField == elem.name && child.parentField != 'undefined') {
                                            child.parentFieldValue = elem.value;
                                            child.update();
                                        }
                                        this.updateAllChildrenField(elem, child);
                                    }
                                };
                                FormBehavior.prototype._onSubmit = function (e) {
                                    if (e) e.preventDefault();
                                    this.submit();
                                    return false;
                                };
                                FormBehavior.prototype.submit = function () {
                                    this.valid();
                                    if (!Object.keys(this.errors).length) this.post();
                                };
                                FormBehavior.prototype.post = function () {
                                    var data = Com.Threeds.Component.Form.Element.Form.serialize(this);
                                    this.context.service('api').post(this, data);
                                };
                                FormBehavior.prototype.render = function (type, data) {
                                    if (type == 'form') this.dispatch(data);
                                };
                                __decorate([listen('field-create')], FormBehavior.prototype, "_onCreate", null);
                                __decorate([listen('field-value-changed')], FormBehavior.prototype, "_onChange", null);
                                __decorate([listen('submit')], FormBehavior.prototype, "_onSubmit", null);
                                return FormBehavior;
                            }(polymer.Base);
                            Neolane.FormBehavior = FormBehavior;
                        })(Neolane = Behavior.Neolane || (Behavior.Neolane = {}));
                    })(Behavior = Element.Behavior || (Element.Behavior = {}));
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Object.isDefined = function (obj, prop) {
    var parts = prop.split('.');
    for (var i = 0, l = parts.length; i < l; i++) {
        var part = parts[i];
        if (obj !== null && typeof obj === "object" && part in obj) {
            obj = obj[part];
        } else {
            return false;
        }
    }
    return true;
};
Object.isEmpty = function (obj, prop) {
    var parts = prop.split('.');
    for (var i = 0, l = parts.length; i < l; i++) {
        var part = parts[i];
        if (obj !== null && typeof obj === "object" && part in obj) {
            obj = obj[part];
        } else {
            return false;
        }
    }
    return obj == '' ? true : false;
};
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form_1) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Step = Com.Threeds.Component.Form.Element.Step;
                    var Form = function (_super) {
                        __extends(Form, _super);
                        function Form(context, data) {
                            _super.call(this, data);
                            this._currentPosition = 0;
                            this._steps = [];
                            this._errors = [];
                            this.context = context;
                            this.classList.add('ds-form');
                            this.classList.add('ds-ldp-form-container');
                            this.dispatch(data);
                        }
                        Object.defineProperty(Form.prototype, "currentPosition", {
                            get: function () {
                                return this._currentPosition;
                            },
                            set: function (value) {
                                if (typeof this.context.settings.hook.setCurrentPosition == 'function') {
                                    this.settings.hook.setCurrentPosition(this, value);
                                }
                                this._currentPosition = value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Form.prototype._selectVChange = function (e, detail) {
                            console.log(this);
                            console.log(detail);
                        };
                        Object.defineProperty(Form.prototype, "settings", {
                            get: function () {
                                return this.context.settings;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(Form.prototype, "errors", {
                            get: function () {
                                return this._errors;
                            },
                            set: function (value) {
                                this._errors = value;
                                for (var i = 0; i < Polymer.dom(this).node.length; i++) {
                                    if (typeof Polymer.dom(this).node[i].displayError === 'function') {
                                        for (var k in this._errors) {
                                            if (Polymer.dom(this).node[i].name == k) {
                                                Polymer.dom(this).node[i].displayError(this._errors[k]);
                                            }
                                        }
                                    }
                                }
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Form.prototype.valid = function () {
                            this._errors = [];
                            this.validateAllElement(Polymer.dom(this), this._errors);
                        };
                        Form.prototype.validateAllElement = function (node, errors) {
                            var child;
                            for (var i = 0; i < node.childNodes.length; i++) {
                                child = node.childNodes[i];
                                if (typeof child.isValid == 'function') {
                                    if (child.isValid() == true) this._errors[child.name] = child.errorMessage;
                                }
                                this.validateAllElement(child, errors);
                            }
                        };
                        Form.prototype.dispatch = function (data) {
                            if (typeof this.behaviors[0] != undefined && typeof this.behaviors[0].action == 'function') {
                                this.behaviors[0].action(this, data);
                            } else {
                                console.log('Uncaught TypeError: this.behaviors[0].action is not a function');
                            }
                        };
                        Form.prototype.clear = function () {
                            while (Polymer.dom(this).firstChild) Polymer.dom(this).removeChild(Polymer.dom(this).firstChild);
                            this.innerHTML = '';
                        };
                        Form.prototype.add = function (data) {
                            if (!Polymer.dom(this).childNodes.length) {
                                this._steps.push(data);
                                this.currentPosition = 0;
                                return true;
                            }
                            return this.isNewStep(this, Polymer.dom(this), data);
                        };
                        Form.prototype.isNewStep = function (context, node, data) {
                            var child;
                            for (var i = 0; i < node.childNodes.length; i++) {
                                child = node.childNodes[i];
                                if (child.name != undefined) {
                                    for (var k in data.result.config) {
                                        if (data.result.config[k].name = child.name && data.result.config[k].type != 'hidden') {
                                            context._steps.push(data);
                                            context.currentPosition++;
                                            return true;
                                        }
                                    }
                                }
                                return this.isNewStep(context, child, data);
                            }
                            return false;
                        };
                        Form.prototype.update = function (data) {
                            this.add(data);
                            this.clear();
                            this.appendChild(Step.create(this, data));
                        };
                        Form.prototype.goTo = function (id) {
                            if (typeof this._steps[id] != "undefined") {
                                this.clear();
                                this.appendChild(Step.create(this.context, this._steps[id]));
                                this.currentPosition = id;
                            }
                        };
                        Form.prototype.prev = function () {
                            var id = this.currentPosition - 1;
                            this.goTo(id);
                        };
                        Form.prototype.next = function () {
                            var id = this.currentPosition + 1;
                            this.goTo(id);
                        };
                        Form.prototype.append = function (data) {
                            if (!this.updateChildren(Polymer.dom(this), data)) {
                                this.insertBefore(Element.Input.create(this, data), this.firstChild);
                            }
                            return this;
                        };
                        Form.prototype.updateChildren = function (node, data) {
                            for (var i = 0; i < node.childNodes.length; i++) {
                                if (typeof node.childNodes[i].name != 'undefined' && node.childNodes[i].name == data.name) {
                                    node.childNodes[i].value = data.value;
                                    return true;
                                }
                                if (this.updateChildren(node.childNodes[i], data)) {
                                    return true;
                                }
                            }
                            return false;
                        };
                        Form.prototype.success = function (data) {
                            if (typeof this.context.settings.hook.success == 'function') {
                                this.context.settings.hook.success(this, data);
                            } else {
                                this.clear();
                                this.innerHTML = "<h1>" + data.title + "</h1>" + data.content;
                            }
                        };
                        Form.prototype.warning = function (message) {
                            if (typeof this.context.settings.hook.warning == 'function') {
                                this.context.settings.hook.warning(this, message);
                            } else {
                                this.clear();
                                this.innerHTML = message;
                            }
                        };
                        Form.prototype.redirect = function (url) {
                            if (typeof this.context.settings.hook.redirect == 'function') {
                                this.context.settings.hook.redirect(this, url);
                            } else {
                                window.location = url;
                            }
                        };
                        Form.serialize = function (form) {
                            if (!form || form.nodeName !== "FORM") {
                                return;
                            }
                            var i,
                                j,
                                dict = {};
                            for (i = form.elements.length - 1; i >= 0; i = i - 1) {
                                if (form.elements[i].name === "" || typeof form.elements[i].name == 'undefined') {
                                    continue;
                                }
                                switch (form.elements[i].nodeName) {
                                    case 'INPUT':
                                        switch (form.elements[i].type) {
                                            case 'text':
                                            case 'hidden':
                                            case 'password':
                                            case 'button':
                                            case 'reset':
                                            case 'submit':
                                                dict[form.elements[i].name] = form.elements[i].value;
                                                break;
                                            case 'checkbox':
                                            case 'radio':
                                                if (form.elements[i].checked) {
                                                    dict[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                                                }
                                                break;
                                            case 'file':
                                                break;
                                        }
                                        break;
                                    case 'TEXTAREA':
                                        dict[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                                        break;
                                    case 'SELECT':
                                        switch (form.elements[i].type) {
                                            case 'select-one':
                                                dict[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                                                break;
                                            case 'select-multiple':
                                                for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                                                    if (form.elements[i].options[j].selected) {
                                                        dict[form.elements[i].name] = encodeURIComponent(form.elements[i].options[j].value);
                                                    }
                                                }
                                                break;
                                        }
                                        break;
                                    case 'BUTTON':
                                        switch (form.elements[i].type) {
                                            case 'reset':
                                            case 'submit':
                                            case 'button':
                                                dict[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                                                break;
                                        }
                                        break;
                                }
                            }
                            return dict;
                        };
                        __decorate([property({ type: String, reflectToAttribute: true })], Form.prototype, "id", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Form.prototype, "name", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Form.prototype, "method", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Form.prototype, "action", void 0);
                        __decorate([listen('field-select-value')], Form.prototype, "_selectVChange", null);
                        Form = __decorate([component('form-element'), extend("form"), behavior(Com.Threeds.Component.Form.Element.Behavior.Neolane.FormBehavior)], Form);
                        return Form;
                    }(AbstractPolymerElement);
                    Element.Form = Form;
                })(Element = Form_1.Element || (Form_1.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Form.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form_1) {
                var AbstractPlugin = Com.Threeds.Plugin.AbstractPlugin;
                var Form = Com.Threeds.Component.Form.Element.Form;
                var Plugin = function (_super) {
                    __extends(Plugin, _super);
                    function Plugin(elem, options) {
                        _super.call(this, elem, options);
                        this.settings = {
                            id: 'LDP6312',
                            display: {
                                label: true,
                                placeholder: true
                            },
                            styling: {
                                label: {
                                    suffixe: ' : ',
                                    mandatory: ' * '
                                }
                            },
                            api: {
                                adapter: 'Com.Threeds.Service.Adapter.Neolane',
                                url: 'http://dassault-test.neolane.net/dsx/lp_api.jssp'
                            },
                            hook: {
                                render: undefined,
                                success: undefined,
                                redirect: undefined,
                                warning: undefined,
                                setCurrentPosition: undefined
                            }
                        };
                        this.settings = $.extend({}, this.settings, options);
                        this.service('api').form(this, {});
                    }
                    Plugin.prototype.clear = function () {
                        while (Polymer.dom(this).firstChild) Polymer.dom(this).removeChild(Polymer.dom(this).firstChild);
                        this.innerHTML = '';
                    };
                    Plugin.prototype.render = function (type, data) {
                        this.clear();
                        if (typeof this.settings.hook.render == 'function') {
                            this.settings.hook.render(this, type, data);
                        } else {
                            this.elem.append(Form.create(this, data));
                        }
                    };
                    return Plugin;
                }(AbstractPlugin);
                Form_1.Plugin = Plugin;
                $.namespace('threeds', {
                    form: function (options) {
                        return new Plugin(this, options);
                    }
                });
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Tabs;
            (function (Tabs) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Tab = function (_super) {
                        __extends(Tab, _super);
                        function Tab(context, data) {
                            _super.call(this, data);
                            this.classList.add('ds-tab');
                            this.innerHTML = data.title;
                        }
                        Tab = __decorate([component('tab-element'), extend("div")], Tab);
                        return Tab;
                    }(AbstractPolymerElement);
                    Element.Tab = Tab;
                })(Element = Tabs.Element || (Tabs.Element = {}));
            })(Tabs = Component.Tabs || (Component.Tabs = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Tabs.Element.Tab.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Tabs;
            (function (Tabs) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Header = function (_super) {
                        __extends(Header, _super);
                        function Header(context, options) {
                            _super.call(this);
                            this.settings = {};
                            this.settings = $.extend({}, this.settings, options);
                            var items = document.createElement('ul');
                            items.classList.add('ds-tabs-header');
                            var item;
                            var link;
                            for (var k in this.settings.data) {
                                link = document.createElement('a');
                                link.innerHTML = this.settings.data[k].name;
                                link.setAttribute("data-index", k);
                                link.href = "#step-" + k;
                                link.onclick = function (e) {
                                    e.preventDefault();
                                };
                                item = document.createElement('li');
                                item.appendChild(link);
                                items.appendChild(item);
                            }
                            this.appendChild(items);
                        }
                        Header = __decorate([component('tabs-header-element'), extend("div")], Header);
                        return Header;
                    }(AbstractPolymerElement);
                    Element.Header = Header;
                })(Element = Tabs.Element || (Tabs.Element = {}));
            })(Tabs = Component.Tabs || (Component.Tabs = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Tabs.Element.Header.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Tabs;
            (function (Tabs_1) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Header = Com.Threeds.Component.Tabs.Element.Header;
                    var Tabs = function (_super) {
                        __extends(Tabs, _super);
                        function Tabs(context, options, data) {
                            this._currentPosition = 0;
                            this.settings = {};
                            this.context = context;
                            this.settings = $.extend({}, this.settings, options);
                            this.classList.add('ds-tabs');
                            this.appendChild(Header.create(this, this.settings));
                            var container = document.createElement('div');
                            container.classList.add('ds-tabs-container');
                            for (var k in this.settings.data) {
                                container.appendChild(Element.Tab.create(this, this.settings.data[k]));
                            }
                            this.appendChild(container);
                        }
                        Object.defineProperty(Tabs.prototype, "currentPosition", {
                            get: function () {
                                return this._currentPosition;
                            },
                            set: function (value) {
                                $('ul.ds-tabs-header').addClass("step-" + value + "-active");
                                $(".ds-tabs-header li").each(function (index) {
                                    if (index == value) {
                                        $(this).addClass('active');
                                    } else {
                                        $(this).removeClass('active');
                                    }
                                });
                                $(".ds-tabs-container .ds-tab").each(function (index) {
                                    if (index == value) {
                                        $(this).addClass('active');
                                    } else {
                                        $(this).removeClass('active');
                                    }
                                });
                                this._currentPosition = value;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Tabs = __decorate([component('tabs-element'), extend("div")], Tabs);
                        return Tabs;
                    }(AbstractPolymerElement);
                    Element.Tabs = Tabs;
                })(Element = Tabs_1.Element || (Tabs_1.Element = {}));
            })(Tabs = Component.Tabs || (Component.Tabs = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Tabs.Element.Tabs.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var LandingPage;
            (function (LandingPage) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Success = function (_super) {
                        __extends(Success, _super);
                        function Success(context, data) {
                            _super.call(this, data);
                            this.context = context;
                            var tpl = "<div class=\"ds-ldp-global-step-3\">\n                            <div class=\"ds-ldp-global-container\">\n                                <div id=\"ldp\" class=\"ds-lpd-info-form\">\n                                    <div class=\"ds-landingpage\" is=\"landingpage-element\">\n                                        <h3 class=\"ds-title-ty\">" + data.title + "</h3>\n                                        <div class=\"ds-lpd-info-no-blur\" style=\"background-image: url('" + context.settings.backgroundImage + "');\"></div>\n                                    </div>\n                                </div>\n                                <form class=\"ds-form ds-ldp-form-container ds-dl-info\">\n                                    <p>" + data.content + "</p>\n                                    <a href=\"" + context.settings.action.url + "\" class=\"ds-link ds-link-arrow-left\">\n                                        " + context.settings.action.label + "<br />\n                                        <span>" + context.settings.action.content + "</span>\n                                    </a>\n                                </form>\n                            </div>\n\n                            <div class=\"ds-ldp-form-contact\">\n                                <p>" + context.settings.accelerate.content + "</p>\n                                <a href=\"" + context.settings.accelerate.url + "\" class=\"ds-btn ds-btn-shout\">" + context.settings.accelerate.label + "</a>\n                            </div>\n                        </div>";
                            context.elem.html(tpl);
                        }
                        Success = __decorate([component('landingpage-success-element'), extend("div")], Success);
                        return Success;
                    }(AbstractPolymerElement);
                    Element.Success = Success;
                })(Element = LandingPage.Element || (LandingPage.Element = {}));
            })(LandingPage = Component.LandingPage || (Component.LandingPage = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.LandingPage.Element.Success.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var LandingPage;
            (function (LandingPage) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Error = function (_super) {
                        __extends(Error, _super);
                        function Error(context, data) {
                            _super.call(this, data);
                            this.context = context;
                            var tpl = "<div class=\"ds-ldp-global-container ds-ldp-global-step-error\">\n                            <div id=\"ldp\" class=\"ds-lpd-info-form\">\n                                <div class=\"ds-landingpage\">\n                                    <div class=\"ds-tabs\">\n                                        <p class=\"ds-ldp-form-error\">" + data.content + "</p>\n                                    </div>\n                                    <div class=\"ds-lpd-info-blur\" style=\"background-image: url('" + context.settings.backgroundImage + "');\"></div>\n                                </div>\n                            </div>\n                        </div>";
                            context.elem.html(tpl);
                        }
                        Error = __decorate([component('landingpage-error-element'), extend("div")], Error);
                        return Error;
                    }(AbstractPolymerElement);
                    Element.Error = Error;
                })(Element = LandingPage.Element || (LandingPage.Element = {}));
            })(LandingPage = Component.LandingPage || (Component.LandingPage = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.LandingPage.Element.Error.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var LandingPage;
            (function (LandingPage_1) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Tabs = Com.Threeds.Component.Tabs.Element.Tabs;
                    var Form = Com.Threeds.Component.Form.Element.Form;
                    var Success = Com.Threeds.Component.LandingPage.Element.Success;
                    var Error = Com.Threeds.Component.LandingPage.Element.Error;
                    var LandingPage = function (_super) {
                        __extends(LandingPage, _super);
                        function LandingPage(context, data) {
                            _super.call(this, data);
                            if (typeof context == 'undefined') return;
                            this.context = context;
                            var tabsContainer = document.createElement('div');
                            tabsContainer.classList.add('ds-lpd-info-form');
                            var tabsContainer2 = document.createElement('div');
                            tabsContainer2.classList.add('ds-landingpage');
                            var blur = document.createElement('div');
                            blur.style.backgroundImage = "url('" + this.context.settings.backgroundImage + "')";
                            blur.classList.add('ds-lpd-info-blur');
                            tabsContainer2.appendChild(this.tabs());
                            tabsContainer2.appendChild(blur);
                            tabsContainer.appendChild(tabsContainer2);
                            this.appendChild(tabsContainer);
                            this.appendChild(this.form(data));
                        }
                        LandingPage.prototype.clear = function () {
                            while (Polymer.dom(this).firstChild) Polymer.dom(this).removeChild(Polymer.dom(this).firstChild);
                            this.innerHTML = '';
                        };
                        LandingPage.prototype.tabs = function () {
                            var options = {
                                data: this.context.settings.steps
                            };
                            return Tabs.create(this, options);
                        };
                        LandingPage.prototype.form = function (data) {
                            var self = this;
                            if (typeof this.context.settings.hook.setCurrentPosition == 'undefined') {
                                this.context.settings.hook.setCurrentPosition = function (context, index) {
                                    self.setCurrentPosition(index);
                                };
                            }
                            if (typeof this.context.settings.hook.success == 'undefined') {
                                this.context.settings.hook.success = function (context, data) {
                                    self.context.elem.html('');
                                    self.context.elem.attr('class', '');
                                    self.context.elem.addClass('ds-ldp-global-step-3');
                                    self.context.elem.append(Success.create(self.context, self.context.settings.success));
                                };
                            }
                            if (typeof this.context.settings.hook.warning == 'undefined') {
                                this.context.settings.hook.warning = function (context, message) {
                                    self.context.elem.html('');
                                    self.context.elem.attr('class', '');
                                    self.context.elem.addClass('ds-ldp-global-step-3');
                                    self.context.elem.append(Error.create(self.context, self.context.settings.error));
                                };
                            }
                            return Form.create(this.context, data);
                        };
                        LandingPage.prototype.setCurrentPosition = function (index) {
                            this.context.elem.attr('class', '');
                            this.context.elem.addClass('ds-ldp-global-container');
                            this.context.elem.addClass("ds-ldp-global-step-" + index);
                            document.querySelector('.ds-tabs').currentPosition = index;
                        };
                        LandingPage = __decorate([component('landingpage-element'), extend("div")], LandingPage);
                        return LandingPage;
                    }(AbstractPolymerElement);
                    Element.LandingPage = LandingPage;
                })(Element = LandingPage_1.Element || (LandingPage_1.Element = {}));
            })(LandingPage = Component.LandingPage || (Component.LandingPage = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.LandingPage.Element.LandingPage.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var LandingPage;
            (function (LandingPage_1) {
                var AbstractPlugin = Com.Threeds.Plugin.AbstractPlugin;
                var LandingPage = Com.Threeds.Component.LandingPage.Element.LandingPage;
                var Plugin = function (_super) {
                    __extends(Plugin, _super);
                    function Plugin(elem, options) {
                        _super.call(this, elem, options);
                        this.settings = {
                            id: 'LDP6312',
                            type: 'download',
                            backgroundImage: 'http://lorempixel.com/500/680',
                            steps: {
                                0: {
                                    name: '1',
                                    title: 'To download the Case Study, please provide your email'
                                },
                                1: {
                                    name: '2',
                                    title: 'Please provide more informations to complete your Case Study download'
                                }
                            },
                            success: {
                                title: 'Thanks for your download',
                                content: 'Your download should start automatically, if not use the direct link'
                            },
                            action: {
                                url: 'http://www.3ds.com/en/file.pdf',
                                label: 'Download',
                                content: 'PDF - 3,84Mo'
                            },
                            accelerate: {
                                url: 'http://www.3ds.com/en/contact-us',
                                label: 'contact me',
                                content: 'You want to be contacted for a commercial purpose?'
                            },
                            error: {
                                title: 'Sorry !',
                                content: '<p>This service is temporarily unavailable. please try again later or contact the <a href="#" class="btn btn-primary">support</a></p> '
                            },
                            nextLabel: 'Next',
                            prevLabel: 'Back',
                            display: {
                                label: false,
                                placeholder: true
                            },
                            styling: {
                                label: {
                                    suffixe: ' : ',
                                    mandatory: ' * '
                                }
                            },
                            api: {
                                adapter: 'Com.Threeds.Service.Adapter.Neolane',
                                url: 'http://dassault-test.neolane.net/dsx/lp_api.jssp'
                            },
                            hook: {
                                render: undefined,
                                success: undefined,
                                redirect: undefined,
                                warning: undefined,
                                setCurrentPosition: undefined
                            },
                            callback: {
                                success: undefined
                            }
                        };
                        this.elem = elem;
                        this.elem.addClass('ds-ldp-global-container');
                        this.settings = $.extend({}, this.settings, options);
                        this.service('api').form(this, {});
                    }
                    Plugin.prototype.render = function (type, data) {
                        this.elem.append(LandingPage.create(this, data));
                    };
                    return Plugin;
                }(AbstractPlugin);
                LandingPage_1.Plugin = Plugin;
                $.namespace('threeds', {
                    landingPage: function (options) {
                        return new Plugin(this, options);
                    },
                    dynamicForm3ds: function (options) {
                        return new Plugin(this, options);
                    }
                });
            })(LandingPage = Component.LandingPage || (Component.LandingPage = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Tabs;
            (function (Tabs_1) {
                var AbstractPlugin = Com.Threeds.Plugin.AbstractPlugin;
                var Plugin = function (_super) {
                    __extends(Plugin, _super);
                    function Plugin(elem, options) {
                        _super.call(this, elem, options);
                        this.settings = {
                            data: {
                                0: {
                                    title: 'tab 1',
                                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                },
                                1: {
                                    title: 'tab 2',
                                    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
                                }
                            }
                        };
                        this.elem = elem;
                        this.settings = $.extend({}, this.settings, options);
                        this.render();
                    }
                    Plugin.prototype.render = function () {
                        console.log('-_>>_>_>_>_>_>_>_>');
                        console.log(this.settings.data);
                    };
                    return Plugin;
                }(AbstractPlugin);
                Tabs_1.Plugin = Plugin;
                $.namespace('threeds', {
                    tabs: function (options) {
                        return new Plugin(this, options);
                    }
                });
            })(Tabs = Component.Tabs || (Component.Tabs = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Service;
        (function (Service) {
            var Adapter;
            (function (Adapter) {
                var AbstractAdapter = Com.Threeds.Service.Adapter.AbstractAdapter;
                var Neolane = function (_super) {
                    __extends(Neolane, _super);
                    function Neolane() {
                        _super.apply(this, arguments);
                    }
                    Neolane.prototype.form = function (context, options) {
                        var self = this;
                        $.ajax({
                            type: "GET", dataType: "json", url: 'data/form/LandingPageAPI-GetFormJson-available-step2-v22.json',
                            success: function (response) {
                                context.render('form', self.data(response));
                            },
                            error: function (resultat, statut, erreur) {
                                context.render('form', false);
                            }
                        });
                    };
                    Neolane.prototype.post = function (context, data) {
                        var self = this;
                        data['lpid'] = context.settings.id;
                        data['op'] = 'GetFormJson';
                        $.ajax({
                            type: "GET", dataType: "json", url: 'data/form/LandingPageAPI-GetFormJson-available-step2-v22.json',
                            data: data,
                            success: function (response) {
                                context.render('form', self.data(response));
                            },
                            error: function (resultat, statut, erreur) {
                                context.render('form', false);
                            }
                        });
                    };
                    Neolane.prototype.customerAutocomplete = function (context, data) {
                        $.ajax({
                            url: 'http://dassault-test.neolane.net/dsx/dnbWebservice.jssp',
                            dataType: 'jsonp',
                            data: {
                                query: 'lorem',
                                iso: 'fr'
                            },
                            success: function (data) {
                                context.render(context, data);
                            }
                        });
                    };
                    Neolane.prototype.data = function (reponse) {
                        if (typeof reponse.result != 'undefined' && typeof reponse.result.config != 'undefined') {
                            this.clean(reponse.result.config);
                        }
                        if (typeof reponse.result != 'undefined' && typeof reponse.result.config != 'undefined' && typeof reponse.result.data != 'undefined') {
                            this.hydrate(reponse.result.config, reponse.result.data);
                            for (var i = 0; i < reponse.result.config.length; i++) {
                                if (typeof reponse.result.config[i].parentField != 'undefined') {
                                    reponse.result.config[i].parentFieldData = this.findParentData(reponse.result.config[i].parentField, reponse.result.config);
                                }
                            }
                        }
                        return reponse;
                    };
                    Neolane.prototype.clean = function (data) {
                        for (var i = 0; i < data.length; i++) {
                            if (typeof data[i].type != 'undefined' && data[i].type == 'picklist') {
                                data[i].type = 'select';
                            } else if (typeof data[i].type != 'undefined' && data[i].type == 'string') {
                                data[i].type = 'text';
                            } else if (typeof data[i].type != 'undefined' && data[i].type == 'fieldgroup') {
                                this.clean(data[i].items);
                            }
                        }
                    };
                    Neolane.prototype.findParentData = function (parentField, data) {
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].fieldname == parentField) {
                                return data[i];
                            }
                        }
                        return;
                    };
                    Neolane.prototype.hydrate = function (data, values) {
                        for (var i = 0; i < data.length; i++) {
                            if (typeof data[i].fieldname == 'string') {
                                data[i]['name'] = data[i].fieldname;
                            }
                            if (typeof data[i].name != 'undefined' && values[data[i].name] != 'undefined') {
                                data[i].value = values[data[i].name];
                            } else if (typeof data[i].type != 'undefined' && data[i].type == 'fieldgroup') {
                                this.hydrate(data[i].items, values);
                            }
                        }
                    };
                    return Neolane;
                }(AbstractAdapter);
                Adapter.Neolane = Neolane;
            })(Adapter = Service.Adapter || (Service.Adapter = {}));
        })(Service = Threeds.Service || (Threeds.Service = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Object.find = function (o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1');
    s = s.replace(/^\./, '');
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
};
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var Form;
            (function (Form) {
                var Element;
                (function (Element) {
                    var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                    var Option = function (_super) {
                        __extends(Option, _super);
                        function Option(context, data) {
                            _super.call(this, data);
                            if (data.label != undefined) this.label = data.label;
                            if (data.value != undefined) this.value = data.value;
                            if (data.selected != undefined) this.selected = data.selected;
                        }
                        Option.prototype.labelChanged = function (newValue, oldValue) {
                            this.innerHTML = newValue;
                        };
                        Option.prototype.ready = function () {};
                        __decorate([property({ type: String, reflectToAttribute: true })], Option.prototype, "label", void 0);
                        __decorate([property({ type: String, reflectToAttribute: true })], Option.prototype, "value", void 0);
                        __decorate([property({ type: Boolean, reflectToAttribute: true })], Option.prototype, "selected", void 0);
                        __decorate([observe("label")], Option.prototype, "labelChanged", null);
                        Option = __decorate([component('option-element'), extend("option")], Option);
                        return Option;
                    }(AbstractPolymerElement);
                    Element.Option = Option;
                })(Element = Form.Element || (Form.Element = {}));
            })(Form = Component.Form || (Component.Form = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.Form.Element.Option.register();
var __extends = this && this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Com;
(function (Com) {
    var Threeds;
    (function (Threeds) {
        var Component;
        (function (Component) {
            var LandingPage;
            (function (LandingPage) {
                var Element;
                (function (Element) {
                    var Success;
                    (function (Success) {
                        var AbstractPolymerElement = Com.Threeds.Element.AbstractPolymerElement;
                        var Download = function (_super) {
                            __extends(Download, _super);
                            function Download(context, data) {
                                _super.call(this, data);
                                this.context = context;
                                console.log('kqsodkqsokd)))°°°°');
                            }
                            Download = __decorate([component('landingpage-success-download-element'), extend("div")], Download);
                            return Download;
                        }(AbstractPolymerElement);
                        Success.Download = Download;
                    })(Success = Element.Success || (Element.Success = {}));
                })(Element = LandingPage.Element || (LandingPage.Element = {}));
            })(LandingPage = Component.LandingPage || (Component.LandingPage = {}));
        })(Component = Threeds.Component || (Threeds.Component = {}));
    })(Threeds = Com.Threeds || (Com.Threeds = {}));
})(Com || (Com = {}));
Com.Threeds.Component.LandingPage.Element.Success.Download.register();});});
