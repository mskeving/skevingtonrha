(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2rMq":function(e,t,n){var o;!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(o=function(){return i}.call(t,n,t,e))||(e.exports=o)}()},JsUE:function(e,t,n){"use strict";n.r(t);n("KKXr");var o=n("q1tI"),r=n.n(o);n("91GP");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return(c="function"==typeof Symbol&&"symbol"===u(Symbol.iterator)?function(e){return u(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":u(e)})(e)}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=n("17x9"),w=n.n(m),g=n("dAtF"),y=n.n(g),b=n("2rMq"),v=n.n(b),C="https://platform.twitter.com/widgets.js";h(function(e){function t(e){var n;return i(this,t),(n=l(this,d(t).call(this,e))).state={isLoading:!0},n}return f(t,e),s(t,[{key:"buildChromeOptions",value:function(e){return e.chrome="",this.props.noHeader&&(e.chrome=e.chrome+" noheader"),this.props.noFooter&&(e.chrome=e.chrome+" nofooter"),this.props.noBorders&&(e.chrome=e.chrome+" noborders"),this.props.noScrollbar&&(e.chrome=e.chrome+" noscrollbar"),this.props.transparent&&(e.chrome=e.chrome+" transparent"),e}},{key:"buildOptions",value:function(){var e=Object.assign({},this.props.options);return this.props.autoHeight&&(e.height=this.refs.embedContainer.parentNode.offsetHeight),e=Object.assign({},e,{theme:this.props.theme,linkColor:this.props.linkColor,borderColor:this.props.borderColor,lang:this.props.lang})}},{key:"renderWidget",value:function(e){var t=this,n=this.props.onLoad;this.isMountCanceled||window.twttr.widgets.createTimeline({sourceType:this.props.sourceType,screenName:this.props.screenName,userId:this.props.userId,ownerScreenName:this.props.ownerScreenName,slug:this.props.slug,id:this.props.id||this.props.widgetId,url:this.props.url},this.refs.embedContainer,e).then((function(e){t.setState({isLoading:!1}),n&&n(e)}))}},{key:"componentDidMount",value:function(){var e=this;v.a.canUseDOM&&n("ojxP")(C,"twitter-embed",(function(){if(window.twttr){var t=e.buildOptions();t=e.buildChromeOptions(t),e.renderWidget(t)}else console.error("Failure to load window.twttr in TwitterTimelineEmbed, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{sourceType:w.a.oneOf(["profile","likes","list","collection","url","widget"]).isRequired,screenName:y()(w.a.string,(function(e){return!e.hasOwnProperty("userId")&&("profile"===e.sourceType||"likes"===e.sourceType)})),userId:y()(w.a.number,(function(e){return!e.hasOwnProperty("screenName")&&("profile"===e.sourceType||"likes"===e.sourceType)})),ownerScreenName:y()(w.a.string,(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")})),slug:y()(w.a.string,(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")})),id:y()(w.a.oneOfType([w.a.number,w.a.string]),(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("ownerScreenName")&&!e.hasOwnProperty("slug")||"collection"===e.sourceType})),url:y()(w.a.string,(function(e){return"url"===e.sourceType})),widgetId:y()(w.a.string,(function(e){return"widget"===e.sourceType})),options:w.a.object,autoHeight:w.a.bool,theme:w.a.oneOf(["dark","light"]),linkColor:w.a.string,borderColor:w.a.string,noHeader:w.a.bool,noFooter:w.a.bool,noBorders:w.a.bool,noScrollbar:w.a.bool,transparent:w.a.bool,lang:w.a.string,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func}),h(function(e){function t(e){var n;return i(this,t),(n=l(this,d(t).call(this,e))).state={isLoading:!0},n}return f(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n("ojxP")(C,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createShareButton(e.props.url,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterShareButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{url:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func}),h(function(e){function t(e){var n;return i(this,t),(n=l(this,d(t).call(this,e))).state={isLoading:!0},n}return f(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n("ojxP")(C,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createFollowButton(e.props.screenName,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterFollowButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{screenName:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func}),h(function(e){function t(e){var n;return i(this,t),(n=l(this,d(t).call(this,e))).state={isLoading:!0},n}return f(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n("ojxP")(C,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createHashtagButton(e.props.tag,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterHashtagButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{tag:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func}),h(function(e){function t(e){var n;return i(this,t),(n=l(this,d(t).call(this,e))).state={isLoading:!0},n}return f(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n("ojxP")(C,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMentionButton(e.props.screenName,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterMentionButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{screenName:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func});var T=function(e){function t(e){var n;return i(this,t),(n=l(this,d(t).call(this,e))).state={isLoading:!0},n}return f(t,e),s(t,[{key:"renderWidget",value:function(){var e=this,t=this.props.onLoad;window.twttr?this.isMountCanceled||window.twttr.widgets.createTweet(this.props.tweetId,this.refs.embedContainer,this.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterTweetEmbed, aborting load.")}},{key:"componentDidMount",value:function(){var e=this;v.a.canUseDOM&&n("ojxP")(C,"twitter-embed",(function(){e.renderWidget()}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component);h(T,"propTypes",{tweetId:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func}),h(function(e){function t(e){var n;return i(this,t),(n=l(this,d(t).call(this,e))).state={isLoading:!0},n}return f(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n("ojxP")(C,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMoment(e.props.momentId,e.refs.shareMoment,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterMomentShare, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"shareMoment"}))}}]),t}(o.Component),"propTypes",{momentId:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func}),h(function(e){function t(e){var n;return i(this,t),(n=l(this,d(t).call(this,e))).state={isLoading:!0},n}return f(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n("ojxP")(C,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createDMButton(e.props.id,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterDMButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{id:w.a.number.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func}),h(function(e){function t(e){var n;return i(this,t),(n=l(this,d(t).call(this,e))).state={isLoading:!0},n}return f(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n("ojxP")(C,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createVideo(e.props.id,e.refs.embedContainer).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterVideoEmbed, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{id:w.a.string.isRequired,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func}),h(function(e){function t(e){var n;return i(this,t),(n=l(this,d(t).call(this,e))).state={isLoading:!0},n}return f(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;v.a.canUseDOM&&n("ojxP")(C,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createPeriscopeOnAirButton(e.props.username,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterOnAirButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.a.createElement(r.a.Fragment,null,e&&t,r.a.createElement("div",{ref:"embedContainer"}))}}]),t}(o.Component),"propTypes",{username:w.a.string.isRequired,options:w.a.object,placeholder:w.a.oneOfType([w.a.string,w.a.element]),onLoad:w.a.func}),n.d(t,"query",(function(){return O}));t.default=function(e){var t=e.data;return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",null,t.allLinksJson.edges.map((function(e){var t=e.node.url.split("/"),n=t[t.length-1].split("?")[0];return r.a.createElement("div",{key:n,className:"centerContent"},r.a.createElement("div",{className:"selfCenter"},r.a.createElement(T,{tweetId:n})))})))))};var O="475174872"},dAtF:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,n,o){return"boolean"==typeof e?e:"function"==typeof e?e(t,n,o):!(!0!=!!e||!e)},r=function(e,t){return Object.hasOwnProperty.call(e,t)},i=function(e,t,n,o){return o?new Error(o):new Error("Required "+e[t]+" `"+t+"` was not specified in `"+n+"`.")};t.default=function(e,t,n){return function(e,t){if("function"!=typeof e)throw new TypeError("The typeValidator argument must be a function with the signature function(props, propName, componentName).");if(t&&"string"!=typeof t)throw new TypeError("The error message is optional, but must be a string if provided.")}(e,n),function(a,s,u){for(var c=arguments.length,l=Array(3<c?c-3:0),d=3;d<c;d++)l[d-3]=arguments[d];return o(t,a,s,u)?r(a,s)?e.apply(void 0,[a,s,u].concat(l)):i(a,s,u,n):e.apply(void 0,[a,s,u].concat(l))}}},ojxP:function(e,t,n){var o,r,i;n("V+eJ"),n("KKXr"),i=function(){var e,t,n=document,o=n.getElementsByTagName("head")[0],r=!1,i="push",a="readyState",s="onreadystatechange",u={},c={},l={},d={};function p(e,t){for(var n=0,o=e.length;n<o;++n)if(!t(e[n]))return r;return 1}function f(e,t){p(e,(function(e){return t(e),1}))}function h(t,n,o){t=t[i]?t:[t];var r=n&&n.call,a=r?n:o,s=r?t.join(""):n,w=t.length;function g(e){return e.call?e():u[e]}function y(){if(!--w)for(var e in u[s]=1,a&&a(),l)p(e.split("|"),g)&&!f(l[e],g)&&(l[e]=[])}return setTimeout((function(){f(t,(function t(n,o){return null===n?y():(o||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),d[n]?(s&&(c[s]=1),2==d[n]?y():setTimeout((function(){t(n,!0)}),0)):(d[n]=1,s&&(c[s]=1),void m(n,y)))}))}),0),h}function m(e,r){var i,u=n.createElement("script");u.onload=u.onerror=u[s]=function(){u[a]&&!/^c|loade/.test(u[a])||i||(u.onload=u[s]=null,i=1,d[e]=2,r())},u.async=1,u.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,o.insertBefore(u,o.lastChild)}return h.get=m,h.order=function(e,t,n){!function o(r){r=e.shift(),e.length?h(r,o):h(r,t,n)}()},h.path=function(t){e=t},h.urlArgs=function(e){t=e},h.ready=function(e,t,n){e=e[i]?e:[e];var o,r=[];return!f(e,(function(e){u[e]||r[i](e)}))&&p(e,(function(e){return u[e]}))?t():(o=e.join("|"),l[o]=l[o]||[],l[o][i](t),n&&n(r)),h},h.done=function(e){h([null],e)},h},e.exports?e.exports=i():void 0===(r="function"==typeof(o=i)?o.call(t,n,t,e):o)||(e.exports=r)}}]);
//# sourceMappingURL=component---src-pages-tweets-js-50d34ff2409d26cac39a.js.map