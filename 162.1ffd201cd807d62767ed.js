(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{232:function(o,t,n){"use strict";n.r(t),n.d(t,"IonIcon",function(){return r});var i=n(11),e=n(306),r=function(){function o(){this.isVisible=!1,this.lazy=!1}return o.prototype.componentWillLoad=function(){var o=this;this.waitUntilVisible(this.el,"50px",function(){o.isVisible=!0,o.loadIcon()})},o.prototype.componentDidUnload=function(){this.io&&(this.io.disconnect(),this.io=void 0)},o.prototype.waitUntilVisible=function(o,t,n){var i=this;if(this.lazy&&this.win&&this.win.IntersectionObserver){var e=this.io=new this.win.IntersectionObserver(function(o){o[0].isIntersecting&&(e.disconnect(),i.io=void 0,n())},{rootMargin:t});e.observe(o)}else n()},o.prototype.loadIcon=function(){var o=this;if(!this.isServer&&this.isVisible){var t=this.getUrl();t?function(o,t,n){var i=c.get(t);return i||(i=fetch(t,{cache:"force-cache"}).then(function(o){return function(o){return o<=299}(o.status)?o.text():Promise.resolve(null)}).then(function(t){return function(o,t,n){if(t){var i=o.createDocumentFragment(),r=o.createElement("div");r.innerHTML=t,i.appendChild(r);for(var c=r.childNodes.length-1;c>=0;c--)"svg"!==r.childNodes[c].nodeName.toLowerCase()&&r.removeChild(r.childNodes[c]);var s=r.firstElementChild;if(s&&"svg"===s.nodeName.toLowerCase()&&(n&&s.setAttribute("class",n),Object(e.e)(s)))return r.innerHTML}return""}(o,t,n)}),c.set(t,i)),i}(this.doc,t,"s-ion-icon").then(function(t){return o.svgContent=t}):console.error("icon was not resolved")}if(!this.ariaLabel){var n=Object(e.a)(this.getName(),this.mode,this.ios,this.md);n&&(this.ariaLabel=n.replace("ios-","").replace("md-","").replace(/\-/g," "))}},o.prototype.getName=function(){return void 0!==this.name?this.name:this.icon&&!Object(e.b)(this.icon)?this.icon:void 0},o.prototype.getUrl=function(){var o=Object(e.c)(this.src);return o||((o=Object(e.a)(this.getName(),this.mode,this.ios,this.md))?this.getNamedUrl(o):(o=Object(e.c)(this.icon))||null)},o.prototype.getNamedUrl=function(o){return Object(e.d)().get(o)||this.resourcesUrl+"svg/"+o+".svg"},o.prototype.hostData=function(){var o,t,n=this.mode||"md",i=this.flipRtl||this.ariaLabel&&this.ariaLabel.indexOf("arrow")>-1&&!1!==this.flipRtl;return{role:"img",class:Object.assign((o={},o[""+n]=!0,o),s(this.color),(t={},t["icon-"+this.size]=!!this.size,t["flip-rtl"]=i&&"rtl"===this.doc.dir,t))}},o.prototype.render=function(){return Object(i.b)("div",!this.isServer&&this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner"})},Object.defineProperty(o,"is",{get:function(){return"ion-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"properties",{get:function(){return{ariaLabel:{type:String,attr:"aria-label",reflectToAttr:!0,mutable:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},flipRtl:{type:Boolean,attr:"flip-rtl"},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},lazy:{type:Boolean,attr:"lazy"},md:{type:String,attr:"md"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(o,"style",{get:function(){return".sc-ion-icon-h{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.icon-inner.sc-ion-icon, svg.sc-ion-icon{display:block;height:100%;width:100%}.flip-rtl.sc-ion-icon-h   .icon-inner.sc-ion-icon{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.icon-small.sc-ion-icon-h{font-size:18px!important}.icon-large.sc-ion-icon-h{font-size:32px!important}.ion-color.sc-ion-icon-h{color:var(--ion-color-base)!important}.ion-color-primary.sc-ion-icon-h{--ion-color-base:var(--ion-color-primary,#3880ff)}.ion-color-secondary.sc-ion-icon-h{--ion-color-base:var(--ion-color-secondary,#0cd1e8)}.ion-color-tertiary.sc-ion-icon-h{--ion-color-base:var(--ion-color-tertiary,#f4a942)}.ion-color-success.sc-ion-icon-h{--ion-color-base:var(--ion-color-success,#10dc60)}.ion-color-warning.sc-ion-icon-h{--ion-color-base:var(--ion-color-warning,#ffce00)}.ion-color-danger.sc-ion-icon-h{--ion-color-base:var(--ion-color-danger,#f14141)}.ion-color-light.sc-ion-icon-h{--ion-color-base:var(--ion-color-light,#f4f5f8)}.ion-color-medium.sc-ion-icon-h{--ion-color-base:var(--ion-color-medium,#989aa2)}.ion-color-dark.sc-ion-icon-h{--ion-color-base:var(--ion-color-dark,#222428)}"},enumerable:!0,configurable:!0}),o}(),c=new Map;function s(o){var t;return o?((t={"ion-color":!0})["ion-color-"+o]=!0,t):null}},306:function(o,t,n){"use strict";var i;function e(){if(!i){var o=window;o.Ionicons=o.Ionicons||{},i=o.Ionicons.map=o.Ionicons.map||new Map}return i}function r(o,t,n,i){return t="ios"===(t=(t||"md").toLowerCase())?"ios":"md",n&&"ios"===t?o=n.toLowerCase():i&&"md"===t?o=i.toLowerCase():o&&(o=o.toLowerCase(),/^md-|^ios-|^logo-/.test(o)||(o=t+"-"+o)),"string"!=typeof o||""===o.trim()?null:""!==o.replace(/[a-z]|-|\d/gi,"")?null:o}function c(o){return"string"==typeof o&&s(o=o.trim())?o:null}function s(o){return o.length>0&&/(\/|\.)/.test(o)}function a(o){if(1===o.nodeType){if("script"===o.nodeName.toLowerCase())return!1;for(var t=0;t<o.attributes.length;t++){var n=o.attributes[t].value;if("string"==typeof n&&0===n.toLowerCase().indexOf("on"))return!1}for(t=0;t<o.childNodes.length;t++)if(!a(o.childNodes[t]))return!1}return!0}n.d(t,"a",function(){return r}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return e}),n.d(t,"e",function(){return a})}}]);