(this.webpackJsonpos_react=this.webpackJsonpos_react||[]).push([[13],{110:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Object.keys(t).reduce((function(e,r){return"aria-"!==r.substr(0,5)&&"data-"!==r.substr(0,5)&&"role"!==r||(e[r]=t[r]),e}),{})},t.exports=e.default},185:function(t,e,r){var n=r(70),a=r(53),o=r(81);t.exports=function(t,e){var r=(a.Object||{})[t]||Object[t],i={};i[t]=e(r),n(n.S+n.F*o((function(){r(1)})),"Object",i)}},224:function(t,e,r){"use strict";r(34),r(227),r(229),r(230)},227:function(t,e,r){"use strict";r(34),r(228)},228:function(t,e,r){},229:function(t,e,r){},230:function(t,e,r){"use strict";r(34),r(231)},231:function(t,e,r){},232:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Item=void 0;var n=d(r(32)),a=d(r(28)),o=d(r(31)),i=d(r(29)),s=d(r(30)),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(0)),l=d(r(110)),c=d(r(271)),f=d(r(279));function d(t){return t&&t.__esModule?t:{default:t}}var p=e.Item=function(t){function e(){return(0,a.default)(this,e),(0,i.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return(0,s.default)(e,t),(0,o.default)(e,[{key:"render",value:function(){var t=this.props,e=t.prefixCls,r=t.style;return u.createElement("div",{className:e,style:r},this.props.children)}}]),e}(u.Component);p.defaultProps={prefixCls:"am-tab-bar-item",title:""};var h=function(t){function e(){(0,a.default)(this,e);var t=(0,i.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.getTabs=function(){var e=[];return u.Children.forEach(t.props.children,(function(t){t&&e.push((0,n.default)({},t.props))})),e},t.renderTabBar=function(){var e=t.props,r=e.barTintColor,n=e.prefixCls,a=e.tintColor,o=e.unselectedTintColor,i=e.hidden,s=e.tabBarPosition,c=t.getTabs(),d=Array.isArray(c)?c.map((function(e,r){return u.createElement(f.default,{key:r,prefixCls:t.props.prefixCls+"-tab",badge:e.badge,dot:e.dot,selected:e.selected,icon:e.icon,selectedIcon:e.selectedIcon,title:e.title,tintColor:a,unselectedTintColor:o,dataAttrs:(0,l.default)(e),onClick:function(){return e.onPress&&e.onPress()}})})):null,p=n+"-bar";return i&&(p+=" "+n+"-bar-hidden-"+s),u.createElement("div",{className:p,style:{backgroundColor:r}},d)},t}return(0,s.default)(e,t),(0,o.default)(e,[{key:"render",value:function(){var t=this.props,e=t.prefixCls,r=t.children,n=t.animated,a=t.swipeable,o=t.noRenderContent,i=t.prerenderingSiblingsNumber,s=t.tabBarPosition,l=this.getTabs(),f=0;return Array.isArray(l)&&l.forEach((function(t,e){t.selected&&(f=e)})),u.createElement("div",{className:e},u.createElement(c.default,{tabs:l,renderTabBar:this.renderTabBar,tabBarPosition:s,page:f<0?void 0:f,animated:n,swipeable:a,noRenderContent:o,prerenderingSiblingsNumber:i},r))}}]),e}(u.Component);h.defaultProps={prefixCls:"am-tab-bar",barTintColor:"white",tintColor:"#108ee9",hidden:!1,unselectedTintColor:"#888",placeholder:"\u6b63\u5728\u52a0\u8f7d",animated:!1,swipeable:!1,prerenderingSiblingsNumber:1,tabBarPosition:"bottom"},h.Item=p,e.default=h},271:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DefaultTabBar=void 0;var n=c(r(31)),a=c(r(32)),o=c(r(28)),i=c(r(29)),s=c(r(30)),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(0)),l=r(454);function c(t){return t&&t.__esModule?t:{default:t}}var f=e.DefaultTabBar=function(t){function e(){return(0,o.default)(this,e),(0,i.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return(0,s.default)(e,t),e}(l.DefaultTabBar);f.defaultProps=(0,a.default)({},l.DefaultTabBar.defaultProps,{prefixCls:"am-tabs-default-bar"});var d=function(t){function e(){(0,o.default)(this,e);var t=(0,i.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.renderTabBar=function(e){var r=t.props.renderTab;return u.createElement(f,(0,a.default)({},e,{renderTab:r}))},t}return(0,s.default)(e,t),(0,n.default)(e,[{key:"render",value:function(){return u.createElement(l.Tabs,(0,a.default)({renderTabBar:this.renderTabBar},this.props))}}]),e}(u.PureComponent);e.default=d,d.DefaultTabBar=f,d.defaultProps={prefixCls:"am-tabs"}},272:function(t,e,r){"use strict";e.__esModule=!0;var n=o(r(273)),a=o(r(276));function o(t){return t&&t.__esModule?t:{default:t}}e.default=function t(e,r,o){null===e&&(e=Function.prototype);var i=(0,a.default)(e,r);if(void 0===i){var s=(0,n.default)(e);return null===s?void 0:t(s,r,o)}if("value"in i)return i.value;var u=i.get;return void 0!==u?u.call(o):void 0}},273:function(t,e,r){t.exports={default:r(274),__esModule:!0}},274:function(t,e,r){r(275),t.exports=r(53).Object.getPrototypeOf},275:function(t,e,r){var n=r(109),a=r(183);r(185)("getPrototypeOf",(function(){return function(t){return a(n(t))}}))},276:function(t,e,r){t.exports={default:r(277),__esModule:!0}},277:function(t,e,r){r(278);var n=r(53).Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}},278:function(t,e,r){var n=r(73),a=r(136).f;r(185)("getOwnPropertyDescriptor",(function(){return function(t,e){return a(n(t),e)}}))},279:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=c(r(32)),a=c(r(28)),o=c(r(31)),i=c(r(29)),s=c(r(30)),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(0)),l=c(r(280));function c(t){return t&&t.__esModule?t:{default:t}}var f=function(t){function e(){(0,a.default)(this,e);var t=(0,i.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.renderIcon=function(){var e=t.props,r=e.dot,n=e.badge,a=e.selected,o=e.selectedIcon,i=e.icon,s=e.title,c=e.prefixCls,f=a?o:i,d=u.isValidElement(f)?f:u.createElement("img",{className:c+"-image",src:f?f.uri:f,alt:s});return n?u.createElement(l.default,{text:n,className:c+"-badge tab-badge"}," ",d," "):r?u.createElement(l.default,{dot:!0,className:c+"-badge tab-dot"},d):d},t.onClick=function(){var e=t.props.onClick;e&&e()},t}return(0,s.default)(e,t),(0,o.default)(e,[{key:"render",value:function(){var t=this.props,e=t.title,r=t.prefixCls,a=t.selected,o=t.unselectedTintColor,i=t.tintColor,s=a?i:o;return u.createElement("div",(0,n.default)({},this.props.dataAttrs,{onClick:this.onClick,className:""+r}),u.createElement("div",{className:r+"-icon",style:{color:s}},this.renderIcon()),u.createElement("p",{className:r+"-title",style:{color:a?i:o}},e))}}]),e}(u.PureComponent);e.default=f,t.exports=e.default},280:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=f(r(32)),a=f(r(35)),o=f(r(28)),i=f(r(31)),s=f(r(29)),u=f(r(30)),l=f(r(33)),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(0));function f(t){return t&&t.__esModule?t:{default:t}}var d=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&(r[n[a]]=t[n[a]])}return r},p=function(t){function e(){return(0,o.default)(this,e),(0,s.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return(0,u.default)(e,t),(0,i.default)(e,[{key:"render",value:function(){var t,e,r=this.props,o=r.className,i=r.prefixCls,s=r.children,u=r.text,f=r.size,p=r.overflowCount,h=r.dot,v=r.corner,b=r.hot,g=d(r,["className","prefixCls","children","text","size","overflowCount","dot","corner","hot"]);u="number"===typeof u&&u>p?p+"+":u,h&&(u="");var T=(0,l.default)((t={},(0,a.default)(t,i+"-dot",h),(0,a.default)(t,i+"-dot-large",h&&"large"===f),(0,a.default)(t,i+"-text",!h&&!v),(0,a.default)(t,i+"-corner",v),(0,a.default)(t,i+"-corner-large",v&&"large"===f),t)),y=(0,l.default)(i,o,(e={},(0,a.default)(e,i+"-not-a-wrapper",!s),(0,a.default)(e,i+"-corner-wrapper",v),(0,a.default)(e,i+"-hot",!!b),(0,a.default)(e,i+"-corner-wrapper-large",v&&"large"===f),e));return c.createElement("span",{className:y},s,(u||h)&&c.createElement("sup",(0,n.default)({className:T},g),u))}}]),e}(c.Component);e.default=p,p.defaultProps={prefixCls:"am-badge",size:"small",overflowCount:99,dot:!1,corner:!1},t.exports=e.default},454:function(t,e,r){"use strict";r.r(e),r.d(e,"Tabs",(function(){return R})),r.d(e,"DefaultTabBar",(function(){return V}));var n=r(32),a=r.n(n),o=r(31),i=r.n(o),s=r(272),u=r.n(s),l=r(28),c=r.n(l),f=r(29),d=r.n(f),p=r(30),h=r.n(p),v=r(0),b=r.n(v),g=251,T=10,y=.3;function m(t,e){return Math.sqrt(t*t+e*e)}function P(t,e){var r=Math.atan2(e,t);return 180/(Math.PI/r)}function C(){return Date.now()}function x(t){if(!(t.length<2)){var e=t[0],r=e.x,n=e.y,a=t[1],o=a.x-r,i=a.y-n;return{x:o,y:i,z:m(o,i),angle:P(o,i)}}}function _(t,e){return t+e[0].toUpperCase()+e.slice(1)}function S(t){var e=void 0;switch(t){case 1:break;case 2:e="left";break;case 4:e="right";break;case 8:e="up";break;case 16:e="down"}return e}var O={all:30,vertical:24,horizontal:6},E=function(t){function e(t){c()(this,e);var r=d()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.state={},r.triggerEvent=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var o=r.props[t];"function"===typeof o&&o.apply(void 0,[r.getGestureState()].concat(n))},r.triggerCombineEvent=function(t,e){for(var n=arguments.length,a=Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];r.triggerEvent.apply(r,[t].concat(a)),r.triggerSubEvent.apply(r,[t,e].concat(a))},r.triggerSubEvent=function(t,e){for(var n=arguments.length,a=Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];if(e){var i=_(t,e);r.triggerEvent.apply(r,[i].concat(a))}},r.triggerPinchEvent=function(t,e){for(var n=arguments.length,a=Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];var i=r.gesture.scale;"move"===e&&"number"===typeof i&&(i>1&&r.triggerEvent("onPinchOut"),i<1&&r.triggerEvent("onPinchIn")),r.triggerCombineEvent.apply(r,[t,e].concat(a))},r.initPressTimer=function(){r.cleanPressTimer(),r.pressTimer=setTimeout((function(){r.setGestureState({press:!0}),r.triggerEvent("onPress")}),g)},r.cleanPressTimer=function(){r.pressTimer&&clearTimeout(r.pressTimer)},r.setGestureState=function(t){r.gesture||(r.gesture={}),r.gesture.touches&&(r.gesture.preTouches=r.gesture.touches),r.gesture=a()({},r.gesture,t)},r.getGestureState=function(){return r.gesture?a()({},r.gesture):r.gesture},r.cleanGestureState=function(){delete r.gesture},r.getTouches=function(t){return Array.prototype.slice.call(t.touches).map((function(t){return{x:t.screenX,y:t.screenY}}))},r.triggerUserCb=function(t,e){var n=_("onTouch",t);n in r.props&&r.props[n](e)},r._handleTouchStart=function(t){r.triggerUserCb("start",t),r.event=t,t.touches.length>1&&t.preventDefault(),r.initGestureStatus(t),r.initPressTimer(),r.checkIfMultiTouchStart()},r.initGestureStatus=function(t){r.cleanGestureState();var e=r.getTouches(t),n=C(),a=x(e);r.setGestureState({startTime:n,startTouches:e,startMutliFingerStatus:a,time:n,touches:e,mutliFingerStatus:a,srcEvent:r.event})},r.checkIfMultiTouchStart=function(){var t=r.props,e=t.enablePinch,n=t.enableRotate,a=r.gesture.touches;if(a.length>1&&(e||n)){if(e){var o=x(a);r.setGestureState({startMutliFingerStatus:o,pinch:!0,scale:1}),r.triggerCombineEvent("onPinch","start")}n&&(r.setGestureState({rotate:!0,rotation:0}),r.triggerCombineEvent("onRotate","start"))}},r._handleTouchMove=function(t){r.triggerUserCb("move",t),r.event=t,r.gesture&&(r.cleanPressTimer(),r.updateGestureStatus(t),r.checkIfSingleTouchMove(),r.checkIfMultiTouchMove())},r.checkIfMultiTouchMove=function(){var t=r.gesture,e=t.pinch,n=t.rotate,a=t.touches,o=t.startMutliFingerStatus,i=t.mutliFingerStatus;if(e||n){if(a.length<2)return r.setGestureState({pinch:!1,rotate:!1}),e&&r.triggerCombineEvent("onPinch","cancel"),void(n&&r.triggerCombineEvent("onRotate","cancel"));if(e){var s=i.z/o.z;r.setGestureState({scale:s}),r.triggerPinchEvent("onPinch","move")}if(n){var u=function(t,e){var r=t.angle;return e.angle-r}(o,i);r.setGestureState({rotation:u}),r.triggerCombineEvent("onRotate","move")}}},r.allowGesture=function(){return t=r.gesture.direction,!!(r.directionSetting&t);var t},r.checkIfSingleTouchMove=function(){var t=r.gesture,e=t.pan,n=t.touches,a=t.moveStatus,o=t.preTouches,i=t.availablePan,s=void 0===i||i;if(n.length>1)return r.setGestureState({pan:!1}),void(e&&r.triggerCombineEvent("onPan","cancel"));if(a&&s){var u=function(t,e){var r=t.x,n=t.y,a=e.x-r,o=e.y-n;return 0===a&&0===o?1:Math.abs(a)>=Math.abs(o)?a<0?2:4:o<0?8:16}(o[0],n[0]);r.setGestureState({direction:u});var l=S(u);if(!r.allowGesture())return void(e||r.setGestureState({availablePan:!1}));e?(r.triggerCombineEvent("onPan",l),r.triggerSubEvent("onPan","move")):(r.triggerCombineEvent("onPan","start"),r.setGestureState({pan:!0,availablePan:!0}))}},r.checkIfMultiTouchEnd=function(t){var e=r.gesture,n=e.pinch,a=e.rotate;n&&r.triggerCombineEvent("onPinch",t),a&&r.triggerCombineEvent("onRotate",t)},r.updateGestureStatus=function(t){var e=C();if(r.setGestureState({time:e}),t.touches&&t.touches.length){var n=r.gesture,a=n.startTime,o=n.startTouches,i=n.pinch,s=n.rotate,u=r.getTouches(t),l=function(t,e,r){var n=t[0],a=n.x,o=n.y,i=e[0],s=i.x-a,u=i.y-o,l=m(s,u);return{x:s,y:u,z:l,time:r,velocity:l/r,angle:P(s,u)}}(o,u,e-a),c=void 0;(i||s)&&(c=x(u)),r.setGestureState({touches:u,mutliFingerStatus:c,moveStatus:l})}},r._handleTouchEnd=function(t){r.triggerUserCb("end",t),r.event=t,r.gesture&&(r.cleanPressTimer(),r.updateGestureStatus(t),r.doSingleTouchEnd("end"),r.checkIfMultiTouchEnd("end"))},r._handleTouchCancel=function(t){r.triggerUserCb("cancel",t),r.event=t,r.gesture&&(r.cleanPressTimer(),r.updateGestureStatus(t),r.doSingleTouchEnd("cancel"),r.checkIfMultiTouchEnd("cancel"))},r.triggerAllowEvent=function(t,e){r.allowGesture()?r.triggerCombineEvent(t,e):r.triggerSubEvent(t,e)},r.doSingleTouchEnd=function(t){var e=r.gesture,n=e.moveStatus,a=e.pinch,o=e.rotate,i=e.press,s=e.pan,u=e.direction;if(!a&&!o){if(n){var l=function(t,e){return Math.abs(t)>=T&&Math.abs(e)>y}(n.z,n.velocity);if(r.setGestureState({swipe:l}),s&&r.triggerAllowEvent("onPan",t),l){var c=S(u);return void r.triggerAllowEvent("onSwipe",c)}}i?r.triggerEvent("onPressUp"):r.triggerEvent("onTap")}},r.getTouchAction=function(){var t=r.props,e=t.enablePinch,n=t.enableRotate,a=r.directionSetting;return e||n||30===a?"pan-x pan-y":24===a?"pan-x":6===a?"pan-y":"auto"},r.directionSetting=O[t.direction],r}return h()(e,t),i()(e,[{key:"componentWillUnmount",value:function(){this.cleanPressTimer()}},{key:"render",value:function(){var t=this.props.children,e=b.a.Children.only(t),r=this.getTouchAction(),n={onTouchStart:this._handleTouchStart,onTouchMove:this._handleTouchMove,onTouchCancel:this._handleTouchCancel,onTouchEnd:this._handleTouchEnd};return b.a.cloneElement(e,a()({},n,{style:a()({touchAction:r},e.props.style||{})}))}}]),e}(v.Component),k=E;function B(t){return{transform:t,WebkitTransform:t,MozTransform:t}}function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return"translate3d("+(t=arguments.length>2&&void 0!==arguments[2]&&arguments[2]?"0px, "+t+e+", 0px":""+t+e+", 0px, 0px")+")"}function M(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px",n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];arguments.length>4&&void 0!==arguments[4]&&arguments[4]?n?t.style.top=""+e+r:t.style.left=""+e+r:I(t.style,w(e,r,n))}function I(t,e){t.transform=e,t.webkitTransform=e,t.mozTransform=e}E.defaultProps={enableRotate:!1,enablePinch:!1,direction:"all"};var j=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&(r[n[a]]=t[n[a]])}return r},N=function(t){function e(){c()(this,e);var t=d()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.offsetX=0,t.offsetY=0,t.setLayout=function(e){t.layout=e},t}return h()(e,t),i()(e,[{key:"componentWillReceiveProps",value:function(t){this.props.active!==t.active&&(t.active?(this.offsetX=0,this.offsetY=0):(this.offsetX=this.layout.scrollLeft,this.offsetY=this.layout.scrollTop))}},{key:"render",value:function(){var t=this.props,e=(t.active,t.fixX),r=t.fixY,n=j(t,["active","fixX","fixY"]),o=a()({},e&&this.offsetX?B(w(-this.offsetX,"px",!1)):{},r&&this.offsetY?B(w(-this.offsetY,"px",!0)):{});return b.a.createElement("div",a()({},n,{style:o,ref:this.setLayout}),n.children)}}]),e}(b.a.PureComponent);N.defaultProps={fixX:!0,fixY:!0};var G=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&(r[n[a]]=t[n[a]])}return r},A=function t(){c()(this,t),this.transform="",this.isMoving=!1,this.showPrev=!1,this.showNext=!1},V=function(t){function e(t){c()(this,e);var r=d()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.onPan=function(){var t=0,e=0;return{onPanStart:function(){r.setState({isMoving:!0})},onPanMove:function(n){if(n.moveStatus&&r.layout){var a=r.isTabBarVertical(),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.isTabBarVertical(),n=+(""+t).replace("%","");return(""+t).indexOf("%")>=0&&(n/=100,n*=e?r.layout.clientHeight:r.layout.clientWidth),n}()+(a?n.moveStatus.y:n.moveStatus.x),i=a?-r.layout.scrollHeight+r.layout.clientHeight:-r.layout.scrollWidth+r.layout.clientWidth;o=Math.min(o,0),o=Math.max(o,i),M(r.layout,o,"px",a),e=o,r.setState({showPrev:-o>0,showNext:o>i})}},onPanEnd:function(){var n=r.isTabBarVertical();t=e,r.setState({isMoving:!1,transform:w(e,"px",n)})},setCurrentOffset:function(e){return t=e}}}(),r.getTransformByIndex=function(t){var e=t.activeTab,n=t.tabs,a=t.page,o=void 0===a?0:a,i=r.isTabBarVertical(),s=r.getTabSize(o,n.length),u=o/2,l=Math.min(e,n.length-u-.5),c=Math.min(-(l-u+.5)*s,0);return r.onPan.setCurrentOffset(c+"%"),{transform:w(c,"%",i),showPrev:e>u-.5&&n.length>o,showNext:e<n.length-u-.5&&n.length>o}},r.onPress=function(t){var e=r.props,n=e.goToTab,a=e.onTabClick,o=e.tabs;a&&a(o[t],t),n&&n(t)},r.isTabBarVertical=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.props.tabBarPosition;return"left"===t||"right"===t},r.renderTab=function(t,e,n,o){var i=r.props,s=i.prefixCls,u=i.renderTab,l=i.activeTab,c=i.tabBarTextStyle,f=i.tabBarActiveTextColor,d=i.tabBarInactiveTextColor,p=i.instanceId,h=a()({},c),v=s+"-tab",g=!1;return l===e?(v+=" "+v+"-active",g=!0,f&&(h.color=f)):d&&(h.color=d),b.a.createElement("div",{key:"t_"+e,style:a()({},h,o?{height:n+"%"}:{width:n+"%"}),id:"m-tabs-"+p+"-"+e,role:"tab","aria-selected":g,className:v,onClick:function(){return r.onPress(e)}},u?u(t):t.title)},r.setContentLayout=function(t){r.layout=t},r.getTabSize=function(t,e){return 100/Math.min(t,e)},r.state=a()({},new A,r.getTransformByIndex(t)),r}return h()(e,t),i()(e,[{key:"componentWillReceiveProps",value:function(t){this.props.activeTab===t.activeTab&&this.props.tabs===t.tabs&&this.props.tabs.length===t.tabs.length||this.setState(a()({},this.getTransformByIndex(t)))}},{key:"render",value:function(){var t=this,e=this.props,r=e.prefixCls,n=e.animated,o=e.tabs,i=void 0===o?[]:o,s=e.page,u=void 0===s?0:s,l=e.activeTab,c=void 0===l?0:l,f=e.tabBarBackgroundColor,d=e.tabBarUnderlineStyle,p=e.tabBarPosition,h=e.renderUnderline,v=this.state,g=v.isMoving,T=v.transform,y=v.showNext,m=v.showPrev,P=this.isTabBarVertical(),C=i.length>u,x=this.getTabSize(u,i.length),_=i.map((function(e,r){return t.renderTab(e,r,x,P)})),S=r;n&&!g&&(S+=" "+r+"-animated");var O={backgroundColor:f||""},E=C?a()({},B(T)):{},w=this.onPan,M=(w.setCurrentOffset,G(w,["setCurrentOffset"])),I={style:a()({},P?{height:x+"%"}:{width:x+"%"},P?{top:x*c+"%"}:{left:x*c+"%"},d),className:r+"-underline"};return b.a.createElement("div",{className:S+" "+r+"-"+p,style:O},m&&b.a.createElement("div",{className:r+"-prevpage"}),b.a.createElement(k,a()({},M,{direction:P?"vertical":"horizontal"}),b.a.createElement("div",{role:"tablist",className:r+"-content",style:E,ref:this.setContentLayout},_,h?h(I):b.a.createElement("div",I))),y&&b.a.createElement("div",{className:r+"-nextpage"}))}}]),e}(b.a.PureComponent);V.defaultProps={prefixCls:"rmc-tabs-tab-bar",animated:!0,tabs:[],goToTab:function(){},activeTab:0,page:5,tabBarUnderlineStyle:{},tabBarBackgroundColor:"#fff",tabBarActiveTextColor:"",tabBarInactiveTextColor:"",tabBarTextStyle:{}};var z=0,D=function(t){function e(t){c()(this,e);var r=d()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.tabCache={},r.isTabVertical=function(){return"vertical"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.props.tabDirection)},r.shouldRenderTab=function(t){var e=r.props.prerenderingSiblingsNumber,n=void 0===e?0:e,a=r.state.currentTab,o=void 0===a?0:a;return o-n<=t&&t<=o+n},r.getOffsetIndex=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.props.distanceToChangeTab||0,a=Math.abs(t/e),o=a>r.state.currentTab?"<":">",i=Math.floor(a);switch(o){case"<":return a-i>n?i+1:i;case">":return 1-a+i>n?i:i+1;default:return Math.round(a)}},r.getSubElements=function(){var t=r.props.children,e={};return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"$i$-",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$ALL$";return Array.isArray(t)?t.forEach((function(t,n){t.key&&(e[t.key]=t),e[""+r+n]=t})):t&&(e[n]=t),e}},r.state={currentTab:r.getTabIndex(t)},r.nextCurrentTab=r.state.currentTab,r.instanceId=z++,r}return h()(e,t),i()(e,[{key:"getTabIndex",value:function(t){var e=t.page,r=t.initialPage,n=t.tabs,a=(void 0!==e?e:r)||0,o=0;return"string"===typeof a?n.forEach((function(t,e){t.key===a&&(o=e)})):o=a||0,o<0?0:o}},{key:"componentWillReceiveProps",value:function(t){this.props.page!==t.page&&void 0!==t.page&&this.goToTab(this.getTabIndex(t),!0,{},t)}},{key:"componentDidMount",value:function(){this.prevCurrentTab=this.state.currentTab}},{key:"componentDidUpdate",value:function(){this.prevCurrentTab=this.state.currentTab}},{key:"goToTab",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.props;if(!e&&this.nextCurrentTab===t)return!1;this.nextCurrentTab=t;var o=n.tabs,i=n.onChange;if(t>=0&&t<o.length){if(!e&&(i&&i(o[t],t),void 0!==n.page))return!1;this.setState(a()({currentTab:t},r))}return!0}},{key:"tabClickGoToTab",value:function(t){this.goToTab(t)}},{key:"getTabBarBaseProps",value:function(){var t=this.state.currentTab,e=this.props,r=e.animated,n=e.onTabClick,a=e.tabBarActiveTextColor,o=e.tabBarBackgroundColor,i=e.tabBarInactiveTextColor,s=e.tabBarPosition,u=e.tabBarTextStyle,l=e.tabBarUnderlineStyle,c=e.tabs;return{activeTab:t,animated:!!r,goToTab:this.tabClickGoToTab.bind(this),onTabClick:n,tabBarActiveTextColor:a,tabBarBackgroundColor:o,tabBarInactiveTextColor:i,tabBarPosition:s,tabBarTextStyle:u,tabBarUnderlineStyle:l,tabs:c,instanceId:this.instanceId}}},{key:"renderTabBar",value:function(t,e){var r=this.props.renderTabBar;return!1===r?null:r?r(t):b.a.createElement(e,t)}},{key:"getSubElement",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"$i$-",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"$ALL$",o=t.key||""+n+e,i=r(n,a),s=i[o]||i[a];return s instanceof Function&&(s=s(t,e)),s||null}}]),e}(b.a.PureComponent);D.defaultProps={tabBarPosition:"top",initialPage:0,swipeable:!0,animated:!0,prerenderingSiblingsNumber:1,tabs:[],destroyInactiveTab:!1,usePaged:!0,tabDirection:"horizontal",distanceToChangeTab:.3};var L=function(t){function e(){c()(this,e);var t=d()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.contentPos="",t.isMoving=!1,t}return h()(e,t),e}((function t(){c()(this,t)})),R=function(t){function e(t){c()(this,e);var r=d()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.onPan=function(){var t=0,e=0,n=void 0;return{onPanStart:function(t){r.props.swipeable&&r.props.animated&&(n=function(t){switch(t){case 2:case 4:return"horizontal";case 8:case 16:return"vertical";default:return"none"}}(t.direction),r.setState({isMoving:!0}))},onPanMove:function(a){var o=r.props,i=o.swipeable,s=o.animated,u=o.useLeftInsteadTransform;if(a.moveStatus&&r.layout&&i&&s){var l=r.isTabVertical(),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.isTabVertical(),n=+(""+t).replace("%","");return(""+t).indexOf("%")>=0&&(n/=100,n*=e?r.layout.clientHeight:r.layout.clientWidth),n}();c+=l?"horizontal"===n?0:a.moveStatus.y:"vertical"===n?0:a.moveStatus.x;var f=l?-r.layout.scrollHeight+r.layout.clientHeight:-r.layout.scrollWidth+r.layout.clientWidth;c=Math.min(c,0),c=Math.max(c,f),M(r.layout,c,"px",l,u),e=c}},onPanEnd:function(){if(r.props.swipeable&&r.props.animated){t=e;var n=r.isTabVertical(),a=r.getOffsetIndex(e,n?r.layout.clientHeight:r.layout.clientWidth);r.setState({isMoving:!1}),a===r.state.currentTab?r.props.usePaged&&I(r.layout.style,r.getContentPosByIndex(a,r.isTabVertical(),r.props.useLeftInsteadTransform)):r.goToTab(a)}},setCurrentOffset:function(e){return t=e}}}(),r.onSwipe=function(t){var e=r.props,n=e.tabBarPosition,a=e.swipeable,o=e.usePaged;if(a&&o&&!r.isTabVertical())switch(n){case"top":case"bottom":switch(t.direction){case 2:r.isTabVertical()||r.goToTab(r.prevCurrentTab+1);case 8:r.isTabVertical()&&r.goToTab(r.prevCurrentTab+1);break;case 4:r.isTabVertical()||r.goToTab(r.prevCurrentTab-1);case 16:r.isTabVertical()&&r.goToTab(r.prevCurrentTab-1)}}},r.setContentLayout=function(t){r.layout=t},r.state=a()({},r.state,new L,{contentPos:r.getContentPosByIndex(r.getTabIndex(t),r.isTabVertical(t.tabDirection),t.useLeftInsteadTransform)}),r}return h()(e,t),i()(e,[{key:"goToTab",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props.usePaged,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.props,o=a.tabDirection,i=a.useLeftInsteadTransform,s={};return n&&(s={contentPos:this.getContentPosByIndex(t,this.isTabVertical(o),i)}),u()(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"goToTab",this).call(this,t,r,s,a)}},{key:"tabClickGoToTab",value:function(t){this.goToTab(t,!1,!0)}},{key:"getContentPosByIndex",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=100*-t+"%";return this.onPan.setCurrentOffset(n),r?""+n:"translate3d("+(e?"0px, "+n:n+", 0px")+", 1px)"}},{key:"renderContent",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getSubElements(),r=this.props,n=r.prefixCls,o=r.tabs,i=r.animated,s=r.destroyInactiveTab,u=r.useLeftInsteadTransform,l=this.state,c=l.currentTab,f=l.isMoving,d=l.contentPos,p=this.isTabVertical(),h=n+"-content-wrap";i&&!f&&(h+=" "+h+"-animated");var v=i?u?a()({position:"relative"},this.isTabVertical()?{top:d}:{left:d}):B(d):a()({position:"relative"},this.isTabVertical()?{top:100*-c+"%"}:{left:100*-c+"%"}),g=this.getTabBarBaseProps().instanceId;return b.a.createElement("div",{className:h,style:v,ref:this.setContentLayout},o.map((function(r,a){var o=n+"-pane-wrap";t.state.currentTab===a?o+=" "+o+"-active":o+=" "+o+"-inactive";var i=r.key||"tab_"+a;return t.shouldRenderTab(a)?t.tabCache[a]=t.getSubElement(r,a,e):s&&(t.tabCache[a]=void 0),b.a.createElement(N,{key:i,className:o,active:c===a,role:"tabpanel","aria-hidden":c!==a,"aria-labelledby":"m-tabs-"+g+"-"+a,fixX:p,fixY:!p},t.tabCache[a])})))}},{key:"render",value:function(){var t=this.props,e=t.prefixCls,r=t.tabBarPosition,n=t.tabDirection,o=t.useOnPan,i=t.noRenderContent,s=this.isTabVertical(n),u=a()({},this.getTabBarBaseProps()),l=!s&&o?this.onPan:{},c=[b.a.createElement("div",{key:"tabBar",className:e+"-tab-bar-wrap"},this.renderTabBar(u,V)),!i&&b.a.createElement(k,a()({key:"$content",onSwipe:this.onSwipe},l),this.renderContent())];return b.a.createElement("div",{className:e+" "+e+"-"+n+" "+e+"-"+r},"top"===r||"left"===r?c:c.reverse())}}]),e}(D);R.DefaultTabBar=V,R.defaultProps=a()({},D.defaultProps,{prefixCls:"rmc-tabs",useOnPan:!0})}}]);