(this.webpackJsonpos_react=this.webpackJsonpos_react||[]).push([[23],{455:function(e,t,o){"use strict";o.r(t);o(224);var n=o(232),a=o.n(n),s=o(0),i=o.n(s),c=o(2),l=o(1);const h=i.a.lazy((()=>Promise.all([o.e(0),o.e(2),o.e(4),o.e(15)]).then(o.bind(null,432)))),r=i.a.lazy((()=>Promise.all([o.e(0),o.e(2),o.e(4),o.e(18)]).then(o.bind(null,445)))),p=i.a.lazy((()=>Promise.all([o.e(0),o.e(3),o.e(19)]).then(o.bind(null,447)))),m=i.a.lazy((()=>Promise.all([o.e(0),o.e(2),o.e(4),o.e(16)]).then(o.bind(null,449)))),d=[{title:"\u6b63\u5e38\u8ba2\u5355",icon:"iconfont icon-order",path:"/home/index"},{title:"\u903e\u671f\u8ba2\u5355",icon:"iconfont icon-overdue",path:"/home/overdue"},{title:"\u4eca\u65e5\u5f85\u8fd8",icon:"iconfont icon-today",path:"/home/today"},{title:"\u6211\u7684",icon:"iconfont icon-wode",path:"/home/my"}];class b extends i.a.Component{constructor(){super(...arguments),this.state={selectedTab:"/home/index"},this.renderTabBarItem=()=>d.map((e=>Object(l.jsx)(a.a.Item,{title:e.title,icon:Object(l.jsx)("i",{className:e.icon}),selectedIcon:Object(l.jsx)("i",{className:e.icon}),selected:this.state.selectedTab===e.path,onPress:()=>{this.setState({selectedTab:e.path},(()=>{this.props.history.push({pathname:e.path})}))}},e.path)))}componentDidMount(){const{location:e}=this.props;this.setState({selectedTab:e.pathname})}render(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(c.Route,{exact:!0,path:"/home/index",component:h}),Object(l.jsx)(c.Route,{exact:!0,path:"/home/overdue",component:r}),Object(l.jsx)(c.Route,{exact:!0,path:"/home/my",component:p}),Object(l.jsx)(c.Route,{exact:!0,path:"/home/today",component:m}),Object(l.jsx)(a.a,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white",prerenderingSiblingsNumber:"0",tabBarPosition:"bottom",children:this.renderTabBarItem()})]})}}t.default=b}}]);