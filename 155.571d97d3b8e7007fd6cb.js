(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{240:function(t,e,i){"use strict";i.r(e),i.d(e,"deckgo_slide_chart",function(){return l});var n,r=i(3),a=i(298),o=function(t,e,i,n){return new(i||(i=Promise))(function(r,a){function o(t){try{l(n.next(t))}catch(t){a(t)}}function s(t){try{l(n.throw(t))}catch(t){a(t)}}function l(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(o,s)}l((n=n.apply(t,e||[])).next())})},s=function(t,e){var i,n,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,n&&(r=2&a[0]?n.return:a[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,a[1])).done)return r;switch(n=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],n=0}finally{i=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};!function(t){t.LINE="line",t.PIE="pie",t.BAR="bar"}(n||(n={}));var l=function(){function t(t){var e=this;Object(r.c)(this,t),this.separator=";",this.type=n.PIE,this.innerRadius=0,this.datePattern="yyyy-MM-dd",this.marginTop=32,this.marginBottom=32,this.marginLeft=32,this.marginRight=32,this.yAxisDomain="max",this.smooth=!0,this.area=!0,this.grid=!1,this.customActions=!1,this.customBackground=!1,this.animation=!1,this.animationDuration=1e3,this.onResizeContent=function(){return o(e,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return[4,this.drawChart()];case 1:return t.sent(),[2]}})})},this.slideDidLoad=Object(r.d)(this,"slideDidLoad",7)}return t.prototype.componentDidLoad=function(){return o(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return[4,a.a.hideLazyLoadImages(this.el)];case 1:return t.sent(),this.initWindowResize(),[4,this.drawChart()];case 2:return t.sent(),this.slideDidLoad.emit(),[2]}})})},t.prototype.beforeSwipe=function(t){var e=this;return new Promise(function(i){return o(e,void 0,void 0,function(){var e,r;return s(this,function(a){switch(a.label){case 0:return this.animation&&(e=this.el.shadowRoot.querySelector(this.type===n.LINE?"deckgo-line-chart":this.type===n.BAR?"deckgo-bar-chart":"deckgo-pie-chart"))?t?[4,e.isEnd()]:[3,2]:(i(!0),[2]);case 1:return r=a.sent(),[3,4];case 2:return[4,e.isBeginning()];case 3:r=a.sent(),a.label=4;case 4:return r?(i(!0),[2]):t?[4,e.next()]:[3,6];case 5:return a.sent(),[3,8];case 6:return[4,e.prev()];case 7:a.sent(),a.label=8;case 8:return i(!1),[2]}})})})},t.prototype.afterSwipe=function(){return a.c.afterSwipe()},t.prototype.lazyLoadContent=function(){return a.c.lazyLoadContent(this.el)},t.prototype.initSize=function(){var t=this;return new Promise(function(e){if(t.width>0&&t.height>0)t.chartWidth=t.width-t.marginLeft-t.marginRight,t.chartHeight=t.height-t.marginTop-t.marginBottom;else{var i=t.el.shadowRoot.querySelector("div.deckgo-chart-container");i&&(t.chartWidth=i.clientWidth-t.marginLeft-t.marginRight,t.chartHeight=i.clientHeight-t.marginTop-t.marginBottom)}e()})},t.prototype.initWindowResize=function(){window&&window.addEventListener("resize",a.b.debounce(this.onResizeContent))},t.prototype.drawChart=function(){return o(this,void 0,void 0,function(){var t;return s(this,function(e){switch(e.label){case 0:return[4,this.initSize()];case 1:return e.sent(),(t=this.el.shadowRoot.querySelector(this.type===n.LINE?"deckgo-line-chart":this.type===n.BAR?"deckgo-bar-chart":"deckgo-pie-chart"))?[4,t.draw(this.chartWidth,this.chartHeight)]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2]}})})},t.prototype.render=function(){return Object(r.e)(r.g,{class:{"deckgo-slide-container":!0}},Object(r.e)("div",{class:"deckgo-slide"},Object(r.e)("slot",{name:"title"}),Object(r.e)("div",{class:"deckgo-chart-container"},this.renderChart()),Object(r.e)("slot",{name:"notes"}),Object(r.e)("slot",{name:"actions"}),Object(r.e)("slot",{name:"background"})))},t.prototype.renderChart=function(){return this.type===n.LINE?Object(r.e)("deckgo-line-chart",{width:this.chartWidth,height:this.chartHeight,src:this.src,separator:this.separator,"date-pattern":this.datePattern,"y-axis-domain":this.yAxisDomain,"margin-top":this.marginTop,"margin-bottom":this.marginBottom,"margin-right":this.marginRight,"margin-left":this.marginLeft,smooth:this.smooth,area:this.area,ticks:this.ticks,grid:this.grid,animation:this.animation,"animation-duration":this.animationDuration}):this.type===n.BAR?Object(r.e)("deckgo-bar-chart",{width:this.chartWidth,height:this.chartHeight,src:this.src,separator:this.separator,"margin-top":this.marginTop,"margin-bottom":this.marginBottom,"margin-right":this.marginRight,"margin-left":this.marginLeft,animation:this.animation,"animation-duration":this.animationDuration}):Object(r.e)("deckgo-pie-chart",{width:this.chartWidth,height:this.chartHeight,src:this.src,separator:this.separator,"inner-radius":this.innerRadius,range:this.range,animation:this.animation,"animation-duration":this.animationDuration})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px;--slide-reveal-transform:translateX(-4px);--slide-reveal-duration:200ms}@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:start;justify-content:flex-start}div.deckgo-chart-container{margin:var(--slide-chart-margin-top,0) var(--slide-chart-margin-end,32px) var(--slide-chart-margin-bottom,64px) var(--slide-chart-margin-start,32px);width:calc(var(--slide-width) - var(--slide-chart-margin-end, 64px) - var(--slide-chart-margin-start, 64px));height:calc(var(--slide-height) - var(--slide-chart-margin-top, 64px) - var(--slide-chart-margin-bottom, 64px));display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-item-align:center;align-self:center}@media screen and (max-width:1024px){div.deckgo-chart-container{width:calc(var(--slide-width) - var(--slide-chart-margin-end, 32px) - var(--slide-chart-margin-start, 32px));height:calc(var(--slide-height) - var(--slide-chart-margin-top, 32px) - var(--slide-chart-margin-bottom, 32px))}}"},enumerable:!0,configurable:!0}),t}()},298:function(t,e,i){"use strict";i.d(e,"a",function(){return o}),i.d(e,"b",function(){return a}),i.d(e,"c",function(){return l});var n=function(t,e,i,n){return new(i||(i=Promise))(function(r,a){function o(t){try{l(n.next(t))}catch(t){a(t)}}function s(t){try{l(n.throw(t))}catch(t){a(t)}}function l(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(o,s)}l((n=n.apply(t,e||[])).next())})},r=function(t,e){var i,n,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,n&&(r=2&a[0]?n.return:a[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,a[1])).done)return r;switch(n=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],n=0}finally{i=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},a=function(){function t(){}return t.unifyEvent=function(t){return t.changedTouches?t.changedTouches[0]:t},t.debounce=function(t,e){var i;return function(n){i&&clearTimeout(i),i=setTimeout(t,e>0?e:300,n)}},t.isMobile=function(){if(!window||!navigator)return!1;var t=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))},t.isIOS=function(){if(!window||!navigator)return!1;var t=navigator.userAgent||navigator.vendor||window.opera;return/iPad|iPhone|iPod/i.test(t)},t.isFullscreen=function(){return!(!window||!screen)&&window.innerHeight==screen.height},t}(),o=function(){function t(){}return t.lazyLoadImages=function(t){return n(this,void 0,void 0,function(){var e=this;return r(this,function(i){return[2,new Promise(function(i){return n(e,void 0,void 0,function(){var e;return r(this,function(n){switch(n.label){case 0:return(e=[]).push(this.lazyLoadLazyImgTags(t)),e.push(this.lazyLoadLazyImgComponents(t)),[4,Promise.all(e)];case 1:return n.sent(),i(),[2]}})})})]})})},t.lazyLoadLazyImgTags=function(t){return n(this,void 0,void 0,function(){var e=this;return r(this,function(i){return[2,new Promise(function(i){return n(e,void 0,void 0,function(){var e;return r(this,function(n){switch(n.label){case 0:return e=this.getAllImages(t,"img"),[4,this.lazyLoadSelectedImages(e)];case 1:return n.sent(),i(),[2]}})})})]})})},t.lazyLoadLazyImgComponents=function(t){return n(this,void 0,void 0,function(){var e=this;return r(this,function(i){return[2,new Promise(function(i){return n(e,void 0,void 0,function(){var e;return r(this,function(n){switch(n.label){case 0:return e=this.getAllImages(t,"deckgo-lazy-img"),[4,this.lazyLoadSelectedLazyImagesComponent(e)];case 1:return n.sent(),i(),[2]}})})})]})})},t.lazyLoadSelectedImages=function(t){return n(this,void 0,void 0,function(){return r(this,function(e){return[2,new Promise(function(e){t?(t.forEach(function(t){t.getAttribute("data-src")&&(t.setAttribute("src",t.getAttribute("data-src")),t.removeAttribute("data-src"),t.classList.contains("deckgo-reveal")||t.style.setProperty("visibility","inherit")),t.style.setProperty("pointer-events","none")}),e()):e()})]})})},t.lazyLoadSelectedLazyImagesComponent=function(t){return n(this,void 0,void 0,function(){var e=this;return r(this,function(i){return[2,new Promise(function(i){t?(t.forEach(function(t){return n(e,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return[4,t.lazyLoad()];case 1:return e.sent(),[2]}})})}),i()):i()})]})})},t.hideLazyLoadImages=function(e){return new Promise(function(i){var n=t.getAllImages(e,"img");n?((n=n.filter(function(t){return t.getAttribute("data-src")})).forEach(function(t){t.style.setProperty("visibility","hidden")}),i()):i()})},t.getAllImages=function(t,e){var i=t.querySelectorAll("[slot] "+e),n=t.shadowRoot.querySelectorAll(e);return Array.from(i).concat(Array.from(n))},t}(),s=function(){function t(){}return t.lazyLoadContent=function(t,e){var i=this;return new Promise(function(a){return n(i,void 0,void 0,function(){var i,n;return r(this,function(r){switch(r.label){case 0:return i=[],(n=this.getAllElements(t,e))&&n.length>0?(n.forEach(function(t){i.push(t.lazyLoadContent())}),[4,Promise.all(i)]):[3,2];case 1:r.sent(),a(),r.label=2;case 2:return a(),[2]}})})})},t.getAllElements=function(t,e){var i=t.querySelectorAll(e),n=t.shadowRoot.querySelectorAll(e);return Array.from(i).concat(Array.from(n))},t}(),l=function(){function t(){}return t.hideRevealElements=function(t,e){return new Promise(function(i){if(a.isMobile())i();else{var n=t.querySelectorAll(e?"[slot] li:not(:first-child), [slot] > p:not(:first-child), [slot] > span:not(:first-child), [slot] > img:not(:first-child), [slot] > deckgo-lazy-img:not(:first-child)":"[slot] li, [slot] > p, [slot] > span, [slot] > img, [slot] > deckgo-lazy-img");n?Array.from(n).forEach(function(t){t.style.setProperty("visibility","hidden"),t.style.setProperty("transform","var(--slide-reveal-transform)"),t.style.setProperty("opacity","0"),t.classList.add("deckgo-reveal"),t.style.setProperty("transition","all var(--slide-reveal-duration) cubic-bezier(0.23, 1, 0.320, 1)")}):i()}})},t.showRevealElement=function(t){return new Promise(function(e){var i=t.querySelectorAll("[slot] li, [slot] > p, [slot] > span, [slot] > img, [slot] > deckgo-lazy-img"),n=!0;if(i){var r=Array.from(i).find(function(t){return"hidden"===t.style.getPropertyValue("visibility")});r&&(r.style.setProperty("visibility","initial"),r.style.setProperty("opacity","1"),r.style.setProperty("transform","none"),n=!1)}e(n)})},t.hideRevealElement=function(t){return new Promise(function(e){var i=t.querySelectorAll("[slot] li, [slot] > p, [slot] > span, [slot] > img, [slot] > deckgo-lazy-img"),n=!0;if(i){var r=Array.from(i).reverse().find(function(t){var e=t.style.getPropertyValue("visibility");return!e||"initial"===e});r&&(r.style.setProperty("visibility","hidden"),r.style.setProperty("transform","var(--slide-reveal-transform)"),r.style.setProperty("opacity","0"),n=!1)}e(n)})},t.beforeSwipe=function(t,e,i){var a=this;return new Promise(function(o){return n(a,void 0,void 0,function(){var n;return r(this,function(r){switch(r.label){case 0:return i?e?[4,this.showRevealElement(t)]:[3,2]:[3,5];case 1:return n=r.sent(),[3,4];case 2:return[4,this.hideRevealElement(t)];case 3:n=r.sent(),r.label=4;case 4:return o(n),[3,6];case 5:o(!0),r.label=6;case 6:return[2]}})})})},t.afterSwipe=function(){return new Promise(function(t){t()})},t.lazyLoadContent=function(t){var e=this;return new Promise(function(i){return n(e,void 0,void 0,function(){var e;return r(this,function(n){switch(n.label){case 0:return(e=[]).push(o.lazyLoadImages(t)),e.push(s.lazyLoadContent(t,"deckgo-gif")),e.push(s.lazyLoadContent(t,"deckgo-youtube")),[4,Promise.all(e)];case 1:return n.sent(),i(),[2]}})})})},t}()}}]);