(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{126:function(t,e,n){"use strict";n.r(e),n.d(e,"IonVirtualScroll",function(){return f});var i=n(284),r=n(10),o="item",s="header",l="footer",a=0,h=1,c=2,u=2;function p(t,e){var n=function(t,e){switch(e){case o:return t.querySelector("template:not([name])");case s:return t.querySelector("template[name=header]");case l:return t.querySelector("template[name=footer]")}}(t,e);return n&&t.ownerDocument?t.ownerDocument.importNode(n.content,!0).children[0]:null}function d(t,e,n,i,r,a,h,c,p,d){for(var f=[],g=d+p,m=p;m<g;m++){var y,v=t[m];n&&null!=(y=n(v,m,t))&&f.push({i:c++,type:s,value:y,index:m,height:r,reads:u,visible:!1}),f.push({i:c++,type:o,value:v,index:m,height:e?e(v,m):h,reads:e?0:u,visible:!!e}),i&&null!=(y=i(v,m,t))&&f.push({i:c++,type:l,value:y,index:m,height:a,reads:2,visible:!1})}return f}var f=function(){function t(){this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30}return t.prototype.itemsChanged=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.componentDidLoad=function(){return i.a(this,void 0,void 0,function(){var t,e;return i.c(this,function(n){switch(n.label){case 0:return(t=this.el.closest("ion-content"))?[4,t.componentOnReady()]:(console.error("virtual-scroll must be used inside ion-content"),[2]);case 1:return n.sent(),this.contentEl=t,e=this,[4,t.getScrollElement()];case 2:return e.scrollEl=n.sent(),this.calcCells(),this.updateState(),[2]}})})},t.prototype.componentDidUpdate=function(){this.updateState()},t.prototype.componentDidUnload=function(){this.scrollEl=void 0},t.prototype.onScroll=function(){this.updateVirtualScroll()},t.prototype.onResize=function(){this.updateVirtualScroll()},t.prototype.positionForItem=function(t){return Promise.resolve(function(t,e,n){var i=e.find(function(e){return e.type===o&&e.index===t});return i?n[i.i]:-1}(t,this.cells,this.getHeightIndex()))},t.prototype.checkRange=function(t,e){if(void 0===e&&(e=-1),this.items){var n=-1===e?this.items.length-t:e,i=function(t,e){return 0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex(function(t){return t.index===e})}(this.cells,t),r=d(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,i,t,n);this.cells=function(t,e,n){if(0===n&&e.length>=t.length)return e;for(var i=0;i<e.length;i++)t[i+n]=e[i];return t}(this.cells,r,i),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate()}},t.prototype.checkEnd=function(){this.items&&this.checkRange(this.lastItemLen)},t.prototype.updateVirtualScroll=function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),this.queue.read(this.readVS.bind(this)),this.queue.write(this.writeVS.bind(this)))},t.prototype.readVS=function(){for(var t=this.contentEl,e=this.scrollEl,n=0,i=this.el;i&&i!==t;)n+=i.offsetTop,i=i.parentElement;this.viewportOffset=n,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)},t.prototype.writeVS=function(){var t=this.indexDirty,e=function(t,e,n){return{top:Math.max(t-n,0),bottom:t+e+n}}(this.currentScrollTop-this.viewportOffset,this.viewportHeight,100),n=this.getHeightIndex(),i=function(t,e,n){for(var i=e.top,r=e.bottom,o=0;o<t.length&&!(t[o]>i);o++);for(var s=Math.max(o-n-1,0);o<t.length&&!(t[o]>=r);o++);return{offset:s,length:Math.min(o+n,t.length)-s}}(n,e,2);(function(t,e,n){return t<=n.offset+n.length||e.offset!==n.offset||e.length!==n.length})(t,this.range,i)&&(this.range=i,function(t,e,n,i){for(var r=0,o=t;r<o.length;r++){var s=o[r];s.change=a,s.d=!0}for(var l=[],u=i.offset+i.length,p=function(i){var r=n[i],o=t.find(function(t){return t.d&&t.cell===r});if(o){var s=e[i];s!==o.top&&(o.top=s,o.change=h),o.d=!1}else l.push(r)},d=i.offset;d<u;d++)p(d);for(var f=t.filter(function(t){return t.d}),g=function(n){var i=f.find(function(t){return t.d&&t.cell.type===n.type}),r=n.i;i?(i.d=!1,i.change=c,i.cell=n,i.top=e[r]):t.push({d:!1,cell:n,visible:!0,change:c,top:e[r]})},m=0,y=l;m<y.length;m++)g(y[m]);t.filter(function(t){return t.d&&-9999!==t.top}).forEach(function(t){t.change=h,t.top=-9999})}(this.virtualDom,n,this.cells,i),this.nodeRender?function(t,e,n,i){for(var r,o=Array.from(t.children).filter(function(t){return"TEMPLATE"!==t.tagName}),s=o.length,l=0;l<n.length;l++){var h=n[l],u=h.cell;if(h.change===c){if(l<s)e(r=o[l],u,l);else{var d=p(t,u.type);(r=e(d,u,l)||d).classList.add("virtual-item"),t.appendChild(r)}r.$ionCell=u}else r=o[l];h.change!==a&&(r.style.transform="translate3d(0,"+h.top+"px,0)");var f=u.visible;h.visible!==f&&(f?r.classList.remove("virtual-loading"):r.classList.add("virtual-loading"),h.visible=f),u.reads>0&&(i(u,r),u.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&this.el.forceUpdate())},t.prototype.updateCellHeight=function(t,e){var n=this,i=function(){if(e.$ionCell===t){var i=n.win.getComputedStyle(e),r=e.offsetHeight+parseFloat(i.getPropertyValue("margin-bottom"));n.setCellHeight(t,r)}};e&&e.componentOnReady?e.componentOnReady().then(i):i()},t.prototype.setCellHeight=function(t,e){var n=t.i;t===this.cells[n]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,n),this.scheduleUpdate()))},t.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(function(){return t.updateVirtualScroll()},100)},t.prototype.updateState=function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())},t.prototype.calcCells=function(){this.items&&(this.lastItemLen=this.items.length,this.cells=d(this.items,this.itemHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)},t.prototype.getHeightIndex=function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex},t.prototype.calcHeightIndex=function(t){void 0===t&&(t=0),this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var n=new Uint32Array(e);return n.set(t),n}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,n){for(var i=t[n],r=n;r<t.length;r++)t[r]=i,i+=e[r].height;return i}(this.heightIndex,this.cells,t),this.indexDirty=1/0},t.prototype.enableScrollEvents=function(t){this.scrollEl&&(this.isEnabled=t,this.enableListener(this,"scroll",t,this.scrollEl))},t.prototype.renderVirtualNode=function(t){var e=t.cell,n=e.value,i=e.index;switch(e.type){case o:return this.renderItem(n,i);case s:return this.renderHeader(n,i);case l:return this.renderFooter(n,i)}},t.prototype.hostData=function(){return{style:{height:this.totalHeight+"px"}}},t.prototype.render=function(){var t=this;if(this.renderItem)return Object(r.b)(g,{dom:this.virtualDom},this.virtualDom.map(function(e){return t.renderVirtualNode(e)}))},Object.defineProperty(t,"is",{get:function(){return"ion-virtual-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{approxFooterHeight:{type:Number,attr:"approx-footer-height"},approxHeaderHeight:{type:Number,attr:"approx-header-height"},approxItemHeight:{type:Number,attr:"approx-item-height"},checkEnd:{method:!0},checkRange:{method:!0},domRender:{type:"Any",attr:"dom-render"},el:{elementRef:!0},enableListener:{context:"enableListener"},footerFn:{type:"Any",attr:"footer-fn"},headerFn:{type:"Any",attr:"header-fn"},itemHeight:{type:"Any",attr:"item-height",watchCallbacks:["itemsChanged"]},items:{type:"Any",attr:"items",watchCallbacks:["itemsChanged"]},nodeRender:{type:"Any",attr:"node-render"},positionForItem:{method:!0},queue:{context:"queue"},renderFooter:{type:"Any",attr:"render-footer"},renderHeader:{type:"Any",attr:"render-header"},renderItem:{type:"Any",attr:"render-item"},totalHeight:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"scroll",method:"onScroll",disabled:!0},{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.virtual-loading{opacity:0}.virtual-item{left:0;right:0;top:0;position:absolute;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"},enumerable:!0,configurable:!0}),t}(),g=function(t,e,n){var i=t.dom;return n.map(e,function(t,e){var n=i[e],r=t.vattrs||{},o=r.class||"";return o+="virtual-item ",n.visible||(o+="virtual-loading"),Object.assign({},t,{vattrs:Object.assign({},r,{class:o,style:Object.assign({},r.style,{transform:"translate3d(0,"+n.top+"px,0)"})})})})}},284:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"c",function(){return s});
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
var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function r(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function o(t,e,n,i){return new(n||(n=Promise))(function(r,o){function s(t){try{a(i.next(t))}catch(t){o(t)}}function l(t){try{a(i.throw(t))}catch(t){o(t)}}function a(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,l)}a((i=i.apply(t,e||[])).next())})}function s(t,e){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}}}]);