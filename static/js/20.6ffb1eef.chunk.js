(this.webpackJsonpos_react=this.webpackJsonpos_react||[]).push([[20],{156:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var o=n(50);function a(e){return Object(o.a)({url:"/user/login",method:"POST",data:e})}function r(){return Object(o.a)({url:"/loginController/test",method:"GET"})}},242:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/appicon.35313754.png"},463:function(e,t,n){"use strict";n.r(t);n(61);var o=n(62),a=n.n(o),r=(n(54),n(81)),c=n.n(r),s=n(71),i=n(72),u=n(6),l=n(7),p=n(8),d=n(9),m=n(0),f=n.n(m),j=n(464),h=n.n(j),b=n(156),O=n(11),g=n(1),_=n(242),v=function(e){Object(p.a)(o,e);var t=Object(d.a)(o);function o(){var e;Object(u.a)(this,o);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={appIcon:n(242)},e.componentDidMount=Object(i.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)();case 2:case"end":return e.stop()}}),e)}))),e}return Object(l.a)(o,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:h.a.My,children:[Object(g.jsx)("div",{className:h.a.Card,children:Object(g.jsxs)("div",{className:h.a.appIcon,children:[Object(g.jsx)("img",{className:h.a.avatar,src:_.default,alt:"\u8c61\u4e0a\u79d1\u6280"}),Object(g.jsxs)("div",{className:h.a.Info,children:[Object(g.jsx)("p",{children:"Admin"}),Object(g.jsx)("p",{children:"\u7ba1\u7406\u5458"})]})]})}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(c.a.Item,{className:h.a.ListItem,extra:"More",arrow:"horizontal",onClick:function(e){return console.log(e)},children:"\u4e2a\u4eba\u4e2d\u5fc3"}),Object(g.jsx)(c.a.Item,{className:h.a.ListItem,extra:"More",arrow:"horizontal",onClick:function(e){return console.log(e)},children:"\u7248\u672c\u4fe1\u606f"}),Object(g.jsx)(c.a.Item,{className:h.a.ListItem,extra:"More",arrow:"horizontal",onClick:function(e){return console.log(e)},children:"\u8054\u7cfb\u6211\u4eec"})]}),Object(g.jsx)(a.a,{className:h.a.Logout,type:"primary",onClick:function(){sessionStorage.removeItem("token"),e.props.setToken(""),e.props.history.push({pathname:"/login"})},children:"\u5b89\u5168\u9000\u51fa"})]})}}]),o}(f.a.Component);t.default=Object(O.b)((function(e,t){return{token:e.token}}),(function(e,t){return{setToken:function(t){e({type:"setToken",value:t})}}}))(v)},464:function(e,t,n){e.exports={My:"my_My__30gaP",Card:"my_Card__DwSxv",appIcon:"my_appIcon__3vwfc",avatar:"my_avatar__35bLG",Info:"my_Info__1DFT2",ListItem:"my_ListItem__2pq04",Logout:"my_Logout__1nWPp"}},50:function(e,t,n){"use strict";(function(e){n(51);var o=n(52),a=n.n(o),r=n(38),c=n.n(r).a.create({baseURL:"/",timeout:3e4});c.interceptors.request.use((function(t){return console.log("config",t,e),"/loginController/login"!==t.url&&(t.headers.Authorization="Bearer "+sessionStorage.getItem("token")),t})),c.interceptors.response.use((function(e){return 301!==e.data.code&&302!==e.data.code&&303!==e.data.code||(sessionStorage.clear("token"),window.location.href="/login"),e}),(function(e){console.log(e),a.a.fail("\u7f51\u7edc\u9519\u8bef")})),t.a=c}).call(this,n(66))}}]);