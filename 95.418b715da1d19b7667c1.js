(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{262:function(t,r,e){"use strict";e.r(r),function(t){e.d(r,"deckgo_qrcode",function(){return c});var n,o,i=e(6),a=function(t,r,e,n){return new(e||(e=Promise))(function(o,i){function a(t){try{f(n.next(t))}catch(t){i(t)}}function u(t){try{f(n.throw(t))}catch(t){i(t)}}function f(t){t.done?o(t.value):new e(function(r){r(t.value)}).then(a,u)}f((n=n.apply(t,r||[])).next())})},u=function(t,r){var e,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=r.call(t,a)}catch(t){i=[6,t],n=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},f=function(){var t=function(t,r){var e=t,n=f[r],o=null,i=0,a=null,u=[],c={},l=function(t,r){o=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(i=4*e+17),s(0,0),s(i-7,0),s(0,i-7),h(),g(),v(t,r),e>=7&&d(t),null==a&&(a=y(e,n,u)),p(a,r)},s=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||i<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||i<=r+n||(o[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},g=function(){for(var t=8;t<i-8;t+=1)null==o[t][6]&&(o[t][6]=t%2==0);for(var r=8;r<i-8;r+=1)null==o[6][r]&&(o[6][r]=r%2==0)},h=function(){for(var t=w.getPatternPosition(e),r=0;r<t.length;r+=1)for(var n=0;n<t.length;n+=1){var i=t[r],a=t[n];if(null==o[i][a])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)o[i+u][a+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}},d=function(t){for(var r=w.getBCHTypeNumber(e),n=0;n<18;n+=1){var a=!t&&1==(r>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=a}for(n=0;n<18;n+=1){a=!t&&1==(r>>n&1);o[n%3+i-8-3][Math.floor(n/3)]=a}},v=function(t,r){for(var e=n<<3|r,a=w.getBCHTypeInfo(e),u=0;u<15;u+=1){var f=!t&&1==(a>>u&1);u<6?o[u][8]=f:u<8?o[u+1][8]=f:o[i-15+u][8]=f}for(u=0;u<15;u+=1){f=!t&&1==(a>>u&1);u<8?o[8][i-u-1]=f:u<9?o[8][15-u-1+1]=f:o[8][15-u-1]=f}o[i-8][8]=!t},p=function(t,r){for(var e=-1,n=i-1,a=7,u=0,f=w.getMaskFunction(r),c=i-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var l=0;l<2;l+=1)if(null==o[n][c-l]){var s=!1;u<t.length&&(s=1==(t[u]>>>a&1)),f(n,c-l)&&(s=!s),o[n][c-l]=s,-1==(a-=1)&&(u+=1,a=7)}if((n+=e)<0||i<=n){n-=e,e=-e;break}}},y=function(t,r,e){for(var n=k.getRSBlocks(t,r),o=C(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),w.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),i[u]=new Array(f);for(var l=0;l<i[u].length;l+=1)i[u][l]=255&t.getBuffer()[l+e];e+=f;var s=w.getErrorCorrectPolynomial(c),g=b(i[u],s.getLength()-1).mod(s);for(a[u]=new Array(s.getLength()-1),l=0;l<a[u].length;l+=1){var h=l+g.getLength()-a[u].length;a[u][l]=h>=0?g.getAt(h):0}}var d=0;for(l=0;l<r.length;l+=1)d+=r[l].totalCount;var v=new Array(d),p=0;for(l=0;l<n;l+=1)for(u=0;u<r.length;u+=1)l<i[u].length&&(v[p]=i[u][l],p+=1);for(l=0;l<o;l+=1)for(u=0;u<r.length;u+=1)l<a[u].length&&(v[p]=a[u][l],p+=1);return v}(o,n)};c.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=m(t);break;case"Alphanumeric":e=B(t);break;case"Byte":e=A(t);break;case"Kanji":e=M(t);break;default:throw"mode:"+r}u.push(e),a=null},c.isDark=function(t,r){if(t<0||i<=t||r<0||i<=r)throw t+","+r;return o[t][r]},c.getModuleCount=function(){return i},c.make=function(){if(e<1){for(var t=1;t<40;t++){for(var r=k.getRSBlocks(t,n),o=C(),i=0;i<u.length;i++){var a=u[i];o.put(a.getMode(),4),o.put(a.getLength(),w.getLengthInBits(a.getMode(),t)),a.write(o)}var f=0;for(i=0;i<r.length;i++)f+=r[i].dataCount;if(o.getLengthInBits()<=8*f)break}e=t}l(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){l(!0,e);var n=w.getLostPoint(c);(0==e||t>n)&&(t=n,r=e)}return r}())},c.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<c.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<c.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=c.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},c.createSvgTag=function(t,r){t=t||2,r=void 0===r?4*t:r;var e,n,o,i,a=c.getModuleCount()*t+2*r,u="";for(i="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",u+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',u+=' width="'+a+'px"',u+=' height="'+a+'px"',u+=' viewBox="0 0 '+a+" "+a+'" ',u+=' preserveAspectRatio="xMinYMin meet">',u+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',u+='<path d="',n=0;n<c.getModuleCount();n+=1)for(o=n*t+r,e=0;e<c.getModuleCount();e+=1)c.isDark(n,e)&&(u+="M"+(e*t+r)+","+o+i);return u+='" stroke="transparent" fill="black"/>',u+="</svg>"},c.createDataURL=function(t,r,e,n){t=t||2,r=void 0===r?4*t:r;var o=c.getModuleCount()*t+2*r,i=r,a=o-r;return S(o,o,e,n,function(r,e){if(i<=r&&r<a&&i<=e&&e<a){var n=Math.floor((r-i)/t),o=Math.floor((e-i)/t);return c.isDark(o,n)?0:1}return 1})},c.createImgTag=function(t,r,e,n,o){t=t||2,r=void 0===r?4*t:r;var i=c.getModuleCount()*t+2*r,a="";return a+="<img",a+=' src="',a+=c.createDataURL(t,r,n,o),a+='"',a+=' width="',a+=i,a+='"',a+=' height="',a+=i,a+='"',e&&(a+=' alt="',a+=e,a+='"'),a+="/>"};return c.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*c.getModuleCount()+2*t,u=t,f=a-t,l={"██":"█","█ ":"▀"," █":"▄","  ":" "},s="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<f&&u<=r&&r<f&&c.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<f&&u<=r+1&&r+1<f&&c.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",s+=l[i];s+="\n"}return a%2?s.substring(0,s.length-a-1)+Array(a+1).join("▀"):s.substring(0,s.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=c.getModuleCount()*t+2*r,u=r,f=a-r,l=Array(t+1).join("██"),s=Array(t+1).join("  "),g="",h="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),h="",n=0;n<a;n+=1)i=1,u<=n&&n<f&&u<=e&&e<f&&c.isDark(o,Math.floor((n-u)/t))&&(i=0),h+=i?l:s;for(o=0;o<t;o+=1)g+=h+"\n"}return g.substring(0,g.length-1)},c.renderTo2dContext=function(t,r){r=r||2;for(var e=c.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=c.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},c};t.stringToBytes=(t.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,t.createStringToBytes=function(t,r){var e=function(){for(var e=L(t),n=function(){var t=e.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n()<<8|n();i[String.fromCharCode(a<<8|u)]=f,o+=1}if(o!=r)throw o+" != "+r;return i}(),n="?".charCodeAt(0);return function(t){for(var r=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var a=e[t.charAt(o)];"number"==typeof a?(255&a)==a?r.push(a):(r.push(a>>>8),r.push(255&a)):r.push(n)}}return r}};var r,e,n,o=1,i=2,a=4,u=8,f={L:1,M:0,Q:3,H:2},c=0,l=1,s=2,g=3,h=4,d=5,v=6,p=7,w=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r},(e={}).getBCHTypeInfo=function(t){for(var r=t<<10;n(r)-n(1335)>=0;)r^=1335<<n(r)-n(1335);return 21522^(t<<10|r)},e.getBCHTypeNumber=function(t){for(var r=t<<12;n(r)-n(7973)>=0;)r^=7973<<n(r)-n(7973);return t<<12|r},e.getPatternPosition=function(t){return r[t-1]},e.getMaskFunction=function(t){switch(t){case c:return function(t,r){return(t+r)%2==0};case l:return function(t,r){return t%2==0};case s:return function(t,r){return r%3==0};case g:return function(t,r){return(t+r)%3==0};case h:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case d:return function(t,r){return t*r%2+t*r%3==0};case v:return function(t,r){return(t*r%2+t*r%3)%2==0};case p:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},e.getErrorCorrectPolynomial=function(t){for(var r=b([1],0),e=0;e<t;e+=1)r=r.multiply(b([1,y.gexp(e)],0));return r},e.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case o:return 10;case i:return 9;case a:case u:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case o:return 12;case i:return 11;case a:return 16;case u:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case o:return 14;case i:return 13;case a:return 16;case u:return 12;default:throw"mode:"+t}}},e.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var l=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(l+=1);return e+=Math.abs(100*l/r/r-50)/5*10},e),y=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;var n={glog:function(t){if(t<1)throw"glog("+t+")";return r[t]},gexp:function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]}};return n}();function b(t,r){if(void 0===t.length)throw t.length+"/"+r;var e=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var n=new Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),n={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(n.getLength()+t.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<t.getLength();o+=1)r[e+o]^=y.gexp(y.glog(n.getAt(e))+y.glog(t.getAt(o)));return b(r,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var r=y.glog(n.getAt(0))-y.glog(t.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)e[o]^=y.gexp(y.glog(t.getAt(o))+r);return b(e,0).mod(t)}};return n}var k=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={};return e.getRSBlocks=function(e,n){var o=function(r,e){switch(e){case f.L:return t[4*(r-1)+0];case f.M:return t[4*(r-1)+1];case f.Q:return t[4*(r-1)+2];case f.H:return t[4*(r-1)+3];default:return}}(e,n);if(void 0===o)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var i=o.length/3,a=[],u=0;u<i;u+=1)for(var c=o[3*u+0],l=o[3*u+1],s=o[3*u+2],g=0;g<c;g+=1)a.push(r(l,s));return a},e}(),C=function(){var t=[],r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},m=function(t){var r=o,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+2<r.length;)t.put(i(r.substring(n,n+3)),10),n+=3;n<r.length&&(r.length-n==1?t.put(i(r.substring(n,n+1)),4):r.length-n==2&&t.put(i(r.substring(n,n+2)),7))}},i=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+a(t.charAt(e));return r},a=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return n},B=function(t){var r=i,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+1<r.length;)t.put(45*o(r.charAt(n))+o(r.charAt(n+1)),11),n+=2;n<r.length&&t.put(o(r.charAt(n)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return n},A=function(r){var e=a,n=t.stringToBytes(r),o={getMode:function(){return e},getLength:function(t){return n.length},write:function(t){for(var r=0;r<n.length;r+=1)t.put(n[r],8)}};return o},M=function(r){var e=u,n=t.stringToBytesFuncs.SJIS;if(!n)throw"sjis not supported.";!function(t,r){var e=n("友");if(2!=e.length||38726!=(e[0]<<8|e[1]))throw"sjis not supported."}();var o=n(r),i={getMode:function(){return e},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return i},x=function(){var t=[],r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+="]"}};return r},L=function(t){var r=t,e=0,n=0,o=0,i={read:function(){for(;o<8;){if(e>=r.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},S=function(t,r,e,n,o){for(var i=function(t,r,e,n){var o=t,i=r,a=new Array(t*r),u={setPixel:function(t,r,e){a[r*o+t]=e},write:function(t){t.writeString("GIF87a"),t.writeShort(o),t.writeShort(i),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(e&&e.length>=6?parseInt("0x"+e.substr(0,2)):0),t.writeByte(e&&e.length>=6?parseInt("0x"+e.substr(2,2)):0),t.writeByte(e&&e.length>=6?parseInt("0x"+e.substr(4,2)):0),t.writeByte(n&&n.length>=6?parseInt("0x"+n.substr(0,2)):255),t.writeByte(n&&n.length>=6?parseInt("0x"+n.substr(2,2)):255),t.writeByte(n&&n.length>=6?parseInt("0x"+n.substr(4,2)):255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(o),t.writeShort(i),t.writeByte(0);var r=f(2);t.writeByte(2);for(var a=0;r.length-a>255;)t.writeByte(255),t.writeBytes(r,a,255),a+=255;t.writeByte(r.length-a),t.writeBytes(r,a,r.length-a),t.writeByte(0),t.writeString(";")}},f=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,o=c(),i=0;i<r;i+=1)o.add(String.fromCharCode(i));o.add(String.fromCharCode(r)),o.add(String.fromCharCode(e));var u=x(),f=function(t){var r=t,e=0,n=0,o={write:function(t,o){if(t>>>o!=0)throw"length over";for(;e+o>=8;)r.writeByte(255&(t<<e|n)),o-=8-e,t>>>=8-e,n=0,e=0;n|=t<<e,e+=o},flush:function(){e>0&&r.writeByte(n)}};return o}(u);f.write(r,n);var l=0,s=String.fromCharCode(a[l]);for(l+=1;l<a.length;){var g=String.fromCharCode(a[l]);l+=1,o.contains(s+g)?s+=g:(f.write(o.indexOf(s),n),o.size()<4095&&(o.size()==1<<n&&(n+=1),o.add(s+g)),s=g)}return f.write(o.indexOf(s),n),f.write(e,n),f.flush(),u.toByteArray()},c=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return e};return u}(t,r,e,n),a=0;a<r;a+=1)for(var u=0;u<t;u+=1)i.setPixel(u,a,o(u,a));var f=x();i.write(f);for(var c=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),l=f.toByteArray(),s=0;s<l.length;s+=1)c.writeByte(l[s]);return c.flush(),"data:image/gif;base64,"+c};return t}();f.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||n>=57344?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)},n=function(){return f},"function"==typeof define&&e(313)?define([],n):"object"==typeof exports&&(t.exports=n()),function(t){t.SVG="svg",t.IMG="img"}(o||(o={}));var c=function(){function t(t){Object(i.c)(this,t),this.type=o.SVG}return t.prototype.componentDidLoad=function(){return a(this,void 0,void 0,function(){return u(this,function(t){switch(t.label){case 0:return[4,this.generate()];case 1:return t.sent(),[2]}})})},t.prototype.generate=function(){var t=this;return new Promise(function(r){return a(t,void 0,void 0,function(){var t;return u(this,function(e){switch(e.label){case 0:return[4,this.createQRCode()];case 1:return t=e.sent(),[4,this.parseQRCode(t)];case 2:return e.sent(),r(),[2]}})})})},t.prototype.createQRCode=function(){var t=this;return new Promise(function(r){if(!t.content||t.content.length<=0)r(null);else{f.stringToBytesFuncs["UTF-8"];var e=f(0,"H");e.addData(t.content,"Byte"),e.make(),r(t.isQRCodeTypeImg()?e.createImgTag(t.qrCellSize,t.qrMargin,t.qrAlt,t.qrFillColor,t.qrBackgroundColor):e.createSvgTag(t.qrCellSize,t.qrMargin))}})},t.prototype.parseQRCode=function(t){var r=this;return new Promise(function(e){return a(r,void 0,void 0,function(){var r,n;return u(this,function(o){if(!t)return e(),[2];if(r=this.el.shadowRoot.querySelector("div.deckgo-qrcode-container")){this.removePreviousQRCode(r);try{(n=document.createElement("template")).innerHTML=t,r.appendChild(n.content.firstChild)}catch(t){}}return e(),[2]})})})},t.prototype.removePreviousQRCode=function(t){var r=t.querySelector("svg");r&&r.parentNode.removeChild(r);var e=t.querySelector("img");e&&e.parentNode.removeChild(e)},t.prototype.isQRCodeTypeImg=function(){return this.type===o.IMG},t.prototype.render=function(){return Object(i.d)("div",{class:"deckgo-qrcode-container"},Object(i.d)("slot",{name:"logo"}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{position:relative}:host,div.deckgo-qrcode-container{display:var(--deckgo-qrcode-container-display,inline-block)}div.deckgo-qrcode-container svg{width:var(--deckgo-qrcode-size);height:var(--deckgo-qrcode-size);stroke:var(--deckgo-qrcode-border-stroke)}div.deckgo-qrcode-container svg rect{fill:var(--deckgo-qrcode-background-fill,transparent)}div.deckgo-qrcode-container svg path{fill:var(--deckgo-qrcode-color-fill)}::slotted([slot=logo]){width:calc(var(--deckgo-qrcode-size, 100%) / var(--deckgo-qrcode-logo-ratio-size, 3));height:calc(var(--deckgo-qrcode-size, 100%) / var(--deckgo-qrcode-logo-ratio-size, 3));position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"},enumerable:!0,configurable:!0}),t}()}.call(this,e(312)(t))},312:function(t,r){t.exports=function(t){if(!t.webpackPolyfill){var r=Object.create(t);r.children||(r.children=[]),Object.defineProperty(r,"loaded",{enumerable:!0,get:function(){return r.l}}),Object.defineProperty(r,"id",{enumerable:!0,get:function(){return r.i}}),Object.defineProperty(r,"exports",{enumerable:!0}),r.webpackPolyfill=1}return r}},313:function(t,r){(function(r){t.exports=r}).call(this,{})}}]);