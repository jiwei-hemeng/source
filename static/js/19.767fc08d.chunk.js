(this.webpackJsonpos_react=this.webpackJsonpos_react||[]).push([[19],{102:function(e,t,n){"use strict";n.r(t);var o=n(74),r=n.n(o),a=n(35),i=n.n(a),s=n(32),c=n.n(s),l=n(28),u=n.n(l),f=n(31),d=n.n(f),m=n(29),p=n.n(m),h=n(30),v=n.n(h),y=n(0),g=n.n(y),b=n(26),_=n.n(b),T=n(5),C=n.n(T),x=n(84);var j=n(33),k=n.n(j),N=function(e){function t(){var e,n,o,r;u()(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return n=o=p()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.close=function(){o.clearCloseTimer(),o.props.onClose()},o.startCloseTimer=function(){o.props.duration&&(o.closeTimer=setTimeout((function(){o.close()}),1e3*o.props.duration))},o.clearCloseTimer=function(){o.closeTimer&&(clearTimeout(o.closeTimer),o.closeTimer=null)},r=n,p()(o,r)}return v()(t,e),d()(t,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls+"-notice",o=(e={},i()(e,""+n,1),i()(e,n+"-closable",t.closable),i()(e,t.className,!!t.className),e);return g.a.createElement("div",{className:k()(o),style:t.style},g.a.createElement("div",{className:n+"-content"},t.children),t.closable?g.a.createElement("a",{tabIndex:"0",onClick:this.close,className:n+"-close"},g.a.createElement("span",{className:n+"-close-x"})):null)}}]),t}(y.Component);N.propTypes={duration:_.a.number,onClose:_.a.func,children:_.a.any},N.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}};var O=N,w=0,E=Date.now();var I=function(e){function t(){var e,n,o,r;u()(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return n=o=p()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={notices:[]},o.add=function(e){var t=e.key=e.key||"rcNotification_"+E+"_"+w++;o.setState((function(n){var o=n.notices;if(!o.filter((function(e){return e.key===t})).length)return{notices:o.concat(e)}}))},o.remove=function(e){o.setState((function(t){return{notices:t.notices.filter((function(t){return t.key!==e}))}}))},r=n,p()(o,r)}return v()(t,e),d()(t,[{key:"getTransitionName",value:function(){var e=this.props,t=e.transitionName;return!t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t}},{key:"render",value:function(){var e,t=this,n=this.props,o=this.state.notices.map((function(e){var o=function(){var e=[].slice.call(arguments,0);return 1===e.length?e[0]:function(){for(var t=0;t<e.length;t++)e[t]&&e[t].apply&&e[t].apply(this,arguments)}}(t.remove.bind(t,e.key),e.onClose);return g.a.createElement(O,c()({prefixCls:n.prefixCls},e,{onClose:o}),e.content)})),r=(e={},i()(e,n.prefixCls,1),i()(e,n.className,!!n.className),e);return g.a.createElement("div",{className:k()(r),style:n.style},g.a.createElement(x.a,{transitionName:this.getTransitionName()},o))}}]),t}(y.Component);I.propTypes={prefixCls:_.a.string,transitionName:_.a.string,animation:_.a.oneOfType([_.a.string,_.a.object]),style:_.a.object},I.defaultProps={prefixCls:"rmc-notification",animation:"fade",style:{top:65,left:"50%"}},I.newInstance=function(e,t){var n=e||{},o=n.getContainer,a=r()(n,["getContainer"]),i=void 0;o?i=o():(i=document.createElement("div"),document.body.appendChild(i));var s=!1;C.a.render(g.a.createElement(I,c()({},a,{ref:function(e){s||(s=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){C.a.unmountComponentAtNode(i),o||document.body.removeChild(i)}}))}})),i)};var L=I;t.default=L},137:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var o=n(41);function r(e){return Object(o.a)({url:"/user/login",method:"POST",data:e})}function a(){return Object(o.a)({url:"/loginController/test",method:"GET"})}},223:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/appicon.35313754.png"},39:function(e,t,n){"use strict";n(34),n(48),n(86)},40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=c(n(35)),r=c(n(33)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),i=c(n(102)),s=c(n(49));function c(e){return e&&e.__esModule?e:{default:e}}var l={duration:3,mask:!0},u=void 0,f=void 0,d="am-toast";function m(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l.duration,c=arguments[3],m=arguments.length>4&&void 0!==arguments[4]?arguments[4]:l.mask,p={info:"",success:"success",fail:"fail",offline:"dislike",loading:"loading"}[t];f=!1,function(e,t){var n;i.default.newInstance({prefixCls:d,style:{},transitionName:"am-fade",className:(0,r.default)((n={},(0,o.default)(n,d+"-mask",e),(0,o.default)(n,d+"-nomask",!e),n))},(function(e){return t&&t(e)}))}(m,(function(t){if(t){if(u&&(u.destroy(),u=null),f)return t.destroy(),void(f=!1);u=t,t.notice({duration:n,style:{},content:p?a.createElement("div",{className:d+"-text "+d+"-text-icon",role:"alert","aria-live":"assertive"},a.createElement(s.default,{type:p,size:"lg"}),a.createElement("div",{className:d+"-text-info"},e)):a.createElement("div",{className:d+"-text",role:"alert","aria-live":"assertive"},a.createElement("div",null,e)),closable:!0,onClose:function(){c&&c(),t.destroy(),t=null,u=null}})}}))}t.default={SHORT:3,LONG:8,show:function(e,t,n){return m(e,"info",t,(function(){}),n)},info:function(e,t,n,o){return m(e,"info",t,n,o)},success:function(e,t,n,o){return m(e,"success",t,n,o)},fail:function(e,t,n,o){return m(e,"fail",t,n,o)},offline:function(e,t,n,o){return m(e,"offline",t,n,o)},loading:function(e,t,n,o){return m(e,"loading",t,n,o)},hide:function(){u?(u.destroy(),u=null):f=!0},config:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.duration,n=void 0===t?3:t,o=e.mask;l.duration=n,!1===o&&(l.mask=!1)}},e.exports=t.default},41:function(e,t,n){"use strict";(function(e){n(39);var o=n(40),r=n.n(o),a=n(27);let i=n.n(a).a.create({baseURL:"/",timeout:3e4});i.interceptors.request.use((t=>(console.log("config",t,e),"/loginController/login"!==t.url&&(t.headers.Authorization="Bearer "+sessionStorage.getItem("token")),t))),i.interceptors.response.use((e=>(301!==e.data.code&&302!==e.data.code&&303!==e.data.code||(sessionStorage.clear("token"),window.location.href="/login"),e)),(e=>{console.log(e),r.a.fail("\u7f51\u7edc\u9519\u8bef")})),t.a=i}).call(this,n(50))},447:function(e,t,n){"use strict";n.r(t);n(51);var o=n(52),r=n.n(o),a=(n(43),n(63)),i=n.n(a),s=n(0),c=n.n(s),l=n(448),u=n.n(l),f=n(137),d=n(4),m=n(1);const p=n(223);class h extends c.a.Component{constructor(){super(...arguments),this.state={appIcon:n(223)},this.componentDidMount=async()=>{await Object(f.a)()}}render(){return Object(m.jsxs)("div",{className:u.a.My,children:[Object(m.jsx)("div",{className:u.a.Card,children:Object(m.jsxs)("div",{className:u.a.appIcon,children:[Object(m.jsx)("img",{className:u.a.avatar,src:p.default,alt:"\u8c61\u4e0a\u79d1\u6280"}),Object(m.jsxs)("div",{className:u.a.Info,children:[Object(m.jsx)("p",{children:"Admin"}),Object(m.jsx)("p",{children:"\u7ba1\u7406\u5458"})]})]})}),Object(m.jsxs)(i.a,{children:[Object(m.jsx)(i.a.Item,{className:u.a.ListItem,extra:"More",arrow:"horizontal",onClick:e=>console.log(e),children:"\u4e2a\u4eba\u4e2d\u5fc3"}),Object(m.jsx)(i.a.Item,{className:u.a.ListItem,extra:"More",arrow:"horizontal",onClick:e=>console.log(e),children:"\u7248\u672c\u4fe1\u606f"}),Object(m.jsx)(i.a.Item,{className:u.a.ListItem,extra:"More",arrow:"horizontal",onClick:e=>console.log(e),children:"\u8054\u7cfb\u6211\u4eec"})]}),Object(m.jsx)(r.a,{className:u.a.Logout,type:"primary",onClick:()=>{sessionStorage.removeItem("token"),this.props.setToken(""),this.props.history.push({pathname:"/login"})},children:"\u5b89\u5168\u9000\u51fa"})]})}}t.default=Object(d.b)(((e,t)=>({token:e.token})),((e,t)=>({setToken:t=>{e({type:"setToken",value:t})}})))(h)},448:function(e,t,n){e.exports={My:"my_My__30gaP",Card:"my_Card__DwSxv",appIcon:"my_appIcon__3vwfc",avatar:"my_avatar__35bLG",Info:"my_Info__1DFT2",ListItem:"my_ListItem__2pq04",Logout:"my_Logout__1nWPp"}},50:function(e,t){var n,o,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{o="function"===typeof clearTimeout?clearTimeout:i}catch(e){o=i}}();var c,l=[],u=!1,f=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&m())}function m(){if(!u){var e=s(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===i||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{return o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||s(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},74:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}},86:function(e,t,n){}}]);