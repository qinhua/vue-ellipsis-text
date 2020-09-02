define("ellipsisText",[],function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=0)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){function n(t){n.installed||(n.installed=!0,t.component("EllipsisText",r.a))}e.install=n,i.d(e,"plugin",function(){return o});var r=i(2),o={install:n},s=null;"undefined"!=typeof window?s=window.Vue:void 0!==t&&(s=t.Vue),s&&s.use(o),e.default=r.a}.call(e,i(1))},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){"use strict";function n(t){i(3)}var r=i(9),o=i(10),s=i(8),l=n,a=s(r.a,o.a,l,"data-v-015a80d9",null);e.a=a.exports},function(t,e,i){var n=i(4);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(6)("f7674fbe",n,!0,{})},function(t,e,i){e=t.exports=i(5)(void 0),e.push([t.i,'.vx-ellipsis-text[data-v-015a80d9]{position:relative;width:100%;max-height:66px;line-height:22px;overflow:hidden;color:#333}@-webkit-keyframes width-change-data-v-015a80d9{0%,to{width:100%}50%{width:30%}}@keyframes width-change-data-v-015a80d9{0%,to{width:100%}50%{width:30%}}.vx-ellipsis-text .ellipsis-container[data-v-015a80d9]{position:relative;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;font-size:70px;color:transparent}.vx-ellipsis-text .ellipsis-container span[data-v-015a80d9]{display:-webkit-box}.vx-ellipsis-text .ellipsis-content[data-v-015a80d9]{vertical-align:top;color:#333;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;font-size:14px;white-space:pre-wrap}.vx-ellipsis-text .ellipsis-ghost[data-v-015a80d9]{position:absolute;z-index:1;top:0;left:50%;width:100%;height:100%;color:#000}.vx-ellipsis-text .ellipsis-ghost[data-v-015a80d9]:before{content:"";display:block;float:right;width:50%;height:100%}.vx-ellipsis-text .ellipsis-placeholder[data-v-015a80d9]{content:"";display:block;float:right;width:50%;height:66px}.vx-ellipsis-text .ellipsis-more[data-v-015a80d9]{float:right;text-align:right;font-size:14px;width:70px;height:22px;margin-top:-22px;cursor:pointer;color:#3a62f4;padding-left:20px;background:-webkit-gradient(linear,left top,right top,color-stop(15%,#fff0),color-stop(46%,#fff));background:linear-gradient(left,#fff0 15%,#fff 46%)}.vx-ellipsis-text .ellipsis-fold-text[data-v-015a80d9]{position:relative;z-index:5;cursor:pointer;font-size:14px;color:#3a62f4}.vx-ellipsis-text.reveal[data-v-015a80d9]{max-height:auto!important}.vx-ellipsis-text.reveal .ellipsis-container[data-v-015a80d9]{display:block!important}',""])},function(t,e){function i(t,e){var i=t[1]||"",r=t[3];if(!r)return i;if(e&&"function"==typeof btoa){var o=n(r);return[i].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([o]).join("\n")}return[i].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=i(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(n[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=c[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(o(i.parts[r]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(o(i.parts[r]));c[i.id]={id:i.id,refs:1,parts:s}}}}function r(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function o(t){var e,i,n=document.querySelector("style["+g+'~="'+t.id+'"]');if(n){if(h)return v;n.parentNode.removeChild(n)}if(m){var o=u++;n=f||(f=r()),e=s.bind(null,n,o,!1),i=s.bind(null,n,o,!0)}else n=r(),e=l.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function s(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function l(t,e){var i=e.css,n=e.media,r=e.sourceMap;if(n&&t.setAttribute("media",n),x.ssrId&&t.setAttribute(g,e.id),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=i(7),c={},p=a&&(document.head||document.getElementsByTagName("head")[0]),f=null,u=0,h=!1,v=function(){},x=null,g="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i,r){h=i,x=r||{};var o=d(t,e);return n(o),function(e){for(var i=[],r=0;r<o.length;r++){var s=o[r],l=c[s.id];l.refs--,i.push(l)}e?(o=d(t,e),n(o)):o=[];for(var r=0;r<i.length;r++){var l=i[r];if(0===l.refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete c[l.id]}}}};var y=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],n={},r=0;r<e.length;r++){var o=e[r],s=o[0],l=o[1],a=o[2],d=o[3],c={id:t+":"+r,css:l,media:a,sourceMap:d};n[s]?n[s].parts.push(c):i.push(n[s]={id:s,parts:[c]})}return i}},function(t,e){t.exports=function(t,e,i,n,r){var o,s=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,s=t.default);var a="function"==typeof s?s.options:s;e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n);var d;if(r?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},a._ssrRegister=d):i&&(d=i),d){var c=a.functional,p=c?a.render:a.beforeCreate;c?a.render=function(t,e){return d.call(e),p(t,e)}:a.beforeCreate=p?[].concat(p,d):[d]}return{esModule:o,exports:s,options:a}}},function(t,e,i){"use strict";e.a={filters:{trimEnter:function(t){return t?t.replace(/[\r\n]/g,""):""}},props:{content:{type:String},line:{type:Number,default:1},triggerMore:{type:Boolean,default:!0},hasMore:{type:Boolean,default:!1},isHtml:{type:Boolean,default:!1},revealWidth:{type:Number,default:70},revealText:{type:String,default:"【更多】"},foldText:{type:String,default:"收起"},revealTextColor:{type:String,default:""},foldTextColor:{type:String,default:""}},data:function(){return{showAll:!1,fontSize:14,lineHeight:22}},computed:{maxHeight:function(){return this.lineHeight*this.line+"px"}},watch:{content:function(){this.showAll=!1}},mounted:function(){var t=this;this.$nextTick(function(){var e=t.$refs.txtContent;e.currentStyle?(t.fontSize=Number(e.currentStyle.fontSize.replace("px","")),t.lineHeight=Number(e.currentStyle.lineHeight.replace("px",""))):(t.fontSize=Number(getComputedStyle(e).fontSize.replace("px","")),t.lineHeight=Number(getComputedStyle(e).lineHeight.replace("px","")))})},methods:{more:function(){this.$emit("reveal"),this.triggerMore&&(this.showAll=!0,this.lineHeight=9999)},fold:function(){this.$emit("fold"),this.showAll=!1,this.lineHeight=22}}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["vx-ellipsis-text",t.showAll?"reveal":""],style:{"max-height":t.maxHeight}},[t.hasMore?i("div",{staticClass:"ellipsis-container",style:{"-webkit-line-clamp":t.line,fontSize:t.revealWidth+"px"}},[t.isHtml?i("div",{ref:"txtContent",staticClass:"ellipsis-content html"},[t.$slots.default?[t._t("default")]:[i("div",{domProps:{innerHTML:t._s(t.content)}})]],2):i("div",{ref:"txtContent",staticClass:"ellipsis-content more"},[t.$slots.default?[t._t("default")]:[i("div",[t._v(t._s(t._f("trimEnter")(t.content)))])]],2),t._v(" "),i("div",{staticClass:"ellipsis-ghost"},[i("div",{staticClass:"ellipsis-placeholder",style:{height:t.maxHeight}}),t._v(" "),i("div",{class:["ellipsis-more",t.isHtml?"html":""],style:{width:t.revealWidth+"px",color:t.revealTextColor},on:{click:t.more}},[t._v(t._s(t.revealText))])])]):i("div",[t.isHtml?i("div",{ref:"txtContent",staticClass:"ellipsis-content",style:{"-webkit-line-clamp":t.line},domProps:{innerHTML:t._s(t.content)}},[t.$slots.default?[t._t("default")]:[i("div",{domProps:{innerHTML:t._s(t.content)}})]],2):i("div",{ref:"txtContent",staticClass:"ellipsis-content",style:{"-webkit-line-clamp":t.line}},[t.$slots.default?[t._t("default")]:[i("div",[t._v(t._s(t._f("trimEnter")(t.content)))])]],2)]),t._v(" "),t.showAll?i("div",{staticClass:"ellipsis-fold-text",style:{color:t.foldTextColor},on:{click:t.fold}},[t._v(t._s(t.foldText))]):t._e()])},r=[],o={render:n,staticRenderFns:r};e.a=o}])});