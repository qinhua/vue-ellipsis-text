!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ellipsisText",[],t):"object"==typeof exports?exports.ellipsisText=t():e.ellipsisText=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,i){"use strict";t.a={name:"ellipsis-text",filters:{trimEnter:function(e){return e?e.replace(/[\r\n]/g,""):""}},props:{content:{type:String},line:{type:Number,default:1},triggerMore:{type:Boolean,default:!0},hasMore:{type:Boolean,default:!1},isHtml:{type:Boolean,default:!1},revealWidth:{type:Number,default:70},revealText:{type:String,default:"【更多】"},foldText:{type:String,default:"收起"},revealTextColor:{type:String,default:""},foldTextColor:{type:String,default:""}},data:function(){return{showAll:!1,fontSize:14,lineHeight:22}},computed:{maxHeight:function(){return this.lineHeight*this.line+"px"}},watch:{content:function(){this.showAll=!1}},mounted:function(){var e=this;this.$nextTick(function(){var t=e.$refs.txtContent;t.currentStyle?(e.fontSize=Number(t.currentStyle.fontSize.replace("px","")),e.lineHeight=Number(t.currentStyle.lineHeight.replace("px",""))):(e.fontSize=Number(getComputedStyle(t).fontSize.replace("px","")),e.lineHeight=Number(getComputedStyle(t).lineHeight.replace("px","")))})},methods:{more:function(){this.$emit("reveal"),this.triggerMore&&(this.showAll=!0,this.lineHeight=9999)},fold:function(){this.$emit("fold"),this.showAll=!1,this.lineHeight=22}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){function n(e){n.installed||(n.installed=!0,e.component("EllipsisText",o.a))}t.install=n,i.d(t,"plugin",function(){return r});var o=i(3),r={install:n},s=null;"undefined"!=typeof window?s=window.Vue:void 0!==e&&(s=e.Vue),s&&s.use(r),t.default=o.a}.call(t,i(2))},function(e,t){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){"use strict";function n(e){i(4)}var o=i(0),r=i(10),s=i(9),l=n,a=s(o.a,r.a,!1,l,"data-v-122ab4fd",null);t.a=a.exports},function(e,t,i){var n=i(5);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(7)("0b9fe2db",n,!0,{})},function(e,t,i){t=e.exports=i(6)(!1),t.push([e.i,'.vx-ellipsis-text[data-v-122ab4fd]{position:relative;width:100%;max-height:66px;line-height:22px;overflow:hidden;color:#333}.vx-ellipsis-text .ellipsis-container[data-v-122ab4fd]{position:relative;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;font-size:70px;color:transparent}.vx-ellipsis-text .ellipsis-container span[data-v-122ab4fd]{display:-webkit-box}.vx-ellipsis-text .ellipsis-content[data-v-122ab4fd]{vertical-align:top;color:#333;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;font-size:14px;white-space:pre-wrap}.vx-ellipsis-text .ellipsis-ghost[data-v-122ab4fd]{position:absolute;z-index:1;top:0;left:50%;width:100%;height:100%;color:#000}.vx-ellipsis-text .ellipsis-ghost[data-v-122ab4fd]:before{content:"";display:block;float:right;width:50%;height:100%}.vx-ellipsis-text .ellipsis-placeholder[data-v-122ab4fd]{content:"";display:block;float:right;width:50%;height:66px}.vx-ellipsis-text .ellipsis-more[data-v-122ab4fd]{cursor:pointer;float:right;text-align:right;font-size:14px;width:70px;height:22px;margin-top:-22px;color:#3a62f4;padding-left:20px;background:-webkit-gradient(linear,left top,right top,color-stop(15%,#fff0),color-stop(46%,#fff));background:linear-gradient(left,#fff0 15%,#fff 46%)}.vx-ellipsis-text .ellipsis-fold-text[data-v-122ab4fd]{position:relative;z-index:5;cursor:pointer;font-size:14px;color:#3a62f4}.vx-ellipsis-text.reveal[data-v-122ab4fd]{max-height:auto!important}.vx-ellipsis-text.reveal .ellipsis-container[data-v-122ab4fd]{display:block!important}@-webkit-keyframes width-change-data-v-122ab4fd{0%,to{width:100%}50%{width:30%}}@keyframes width-change-data-v-122ab4fd{0%,to{width:100%}50%{width:30%}}',""])},function(e,t){function i(e,t){var i=e[1]||"",o=e[3];if(!o)return i;if(t&&"function"==typeof btoa){var r=n(o);return[i].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([r]).join("\n")}return[i].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=i(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),t.push(s))}},t}},function(e,t,i){function n(e){for(var t=0;t<e.length;t++){var i=e[t],n=f[i.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](i.parts[o]);for(;o<i.parts.length;o++)n.parts.push(r(i.parts[o]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var s=[],o=0;o<i.parts.length;o++)s.push(r(i.parts[o]));f[i.id]={id:i.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function r(e){var t,i,n=document.querySelector("style["+g+'~="'+e.id+'"]');if(n){if(h)return v;n.parentNode.removeChild(n)}if(m){var r=u++;n=p||(p=o()),t=s.bind(null,n,r,!1),i=s.bind(null,n,r,!0)}else n=o(),t=l.bind(null,n),i=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else i()}}function s(e,t,i,n){var o=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function l(e,t){var i=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),x.ssrId&&e.setAttribute(g,t.id),o&&(i+="\n/*# sourceURL="+o.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=i(8),f={},c=a&&(document.head||document.getElementsByTagName("head")[0]),p=null,u=0,h=!1,v=function(){},x=null,g="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,i,o){h=i,x=o||{};var r=d(e,t);return n(r),function(t){for(var i=[],o=0;o<r.length;o++){var s=r[o],l=f[s.id];l.refs--,i.push(l)}t?(r=d(e,t),n(r)):r=[];for(var o=0;o<i.length;o++){var l=i[o];if(0===l.refs){for(var a=0;a<l.parts.length;a++)l.parts[a]();delete f[l.id]}}}};var b=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var i=[],n={},o=0;o<t.length;o++){var r=t[o],s=r[0],l=r[1],a=r[2],d=r[3],f={id:e+":"+o,css:l,media:a,sourceMap:d};n[s]?n[s].parts.push(f):i.push(n[s]={id:s,parts:[f]})}return i}},function(e,t){e.exports=function(e,t,i,n,o,r){var s,l=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(s=e,l=e.default);var d="function"==typeof l?l.options:l;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),i&&(d.functional=!0),o&&(d._scopeId=o);var f;if(r?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=f):n&&(f=n),f){var c=d.functional,p=c?d.render:d.beforeCreate;c?(d._injectStyles=f,d.render=function(e,t){return f.call(t),p(e,t)}):d.beforeCreate=p?[].concat(p,f):[f]}return{esModule:s,exports:l,options:d}}},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:["vx-ellipsis-text",e.showAll?"reveal":""],style:{"max-height":e.maxHeight}},[e.hasMore?i("div",{staticClass:"ellipsis-container",style:{"-webkit-line-clamp":e.line,fontSize:e.revealWidth+"px"}},[e.isHtml?i("div",{ref:"txtContent",staticClass:"ellipsis-content html"},[e.$slots.default?[e._t("default")]:[i("div",{domProps:{innerHTML:e._s(e.content)}})]],2):i("div",{ref:"txtContent",staticClass:"ellipsis-content more"},[e.$slots.default?[e._t("default")]:[i("div",[e._v(e._s(e._f("trimEnter")(e.content)))])]],2),e._v(" "),i("div",{staticClass:"ellipsis-ghost"},[i("div",{staticClass:"ellipsis-placeholder",style:{height:e.maxHeight}}),e._v(" "),i("div",{class:["ellipsis-more",e.isHtml?"html":""],style:{width:e.revealWidth+"px",color:e.revealTextColor},on:{click:e.more}},[e._v("\n        "+e._s(e.revealText)+"\n      ")])])]):i("div",[e.isHtml?i("div",{ref:"txtContent",staticClass:"ellipsis-content",style:{"-webkit-line-clamp":e.line}},[e.$slots.default?[e._t("default")]:[i("div",{domProps:{innerHTML:e._s(e.content)}})]],2):i("div",{ref:"txtContent",staticClass:"ellipsis-content",style:{"-webkit-line-clamp":e.line}},[e.$slots.default?[e._t("default")]:[i("div",[e._v(e._s(e._f("trimEnter")(e.content)))])]],2)]),e._v(" "),e.showAll?i("div",{staticClass:"ellipsis-fold-text",style:{color:e.foldTextColor},on:{click:e.fold}},[e._v("\n    "+e._s(e.foldText)+"\n  ")]):e._e()])},o=[],r={render:n,staticRenderFns:o};t.a=r}])});