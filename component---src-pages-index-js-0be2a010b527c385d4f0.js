(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{RXBc:function(e,a,t){"use strict";t.r(a);t("f3/d");var n=t("q1tI"),r=t.n(n),l=(t("pxef"),t("YwZP")),c=(t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("+ZDr"));t("lw3w"),t("emEt").default.enqueue,r.a.createContext({});var s=function(){return"undefined"!=typeof window&&window.localStorage.getItem("gatsbyUser")?JSON.parse(window.localStorage.getItem("gatsbyUser")):{}},m=function(e){return window.localStorage.setItem("gatsbyUser",JSON.stringify(e))},i=function(e){return"phil"===e.password&&(m({username:"phil",name:"Phil"}),!0)},o=function(){return!!s().username};var d=function(e){var a,t;function n(){return e.apply(this,arguments)||this}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var l=n.prototype;return l.componentDidMount=function(){var e=this.props.location;o()||"/login"===e.pathname||Object(c.navigate)("/login")},l.render=function(){var e=this.props,a=e.component,t=e.location,n=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["component","location"]);return o()||"/login"===t.pathname?r.a.createElement(a,n):null},n}(r.a.Component);var u=function(e){var a,t;function n(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={password:"",error:!1},a.handleUpdate=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.handleSubmit=function(e){e.preventDefault(),i(a.state)&&Object(c.navigate)("/"),a.setState({error:!0})},a}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e=this.state.error;return o()&&Object(c.navigate)("/"),r.a.createElement("div",{className:"row loginContainer"},r.a.createElement("div",{className:"column login"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"title"},r.a.createElement("div",{className:"part"},"Missy"),r.a.createElement("div",{className:"part"},"&"),r.a.createElement("div",{className:"part"},"Phil's")),r.a.createElement("div",{className:"subtitle"},"Private Wedding Website"),r.a.createElement("form",{method:"post",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter Password",onChange:this.handleUpdate}),r.a.createElement("div",null),e&&r.a.createElement("div",{className:"error"},"Incorrect Password"),r.a.createElement("button",{className:"submit",type:"submit"},r.a.createElement("div",{className:"frame1"}),r.a.createElement("div",{className:"frame2"}),"Enter"))),r.a.createElement("div",null)))},n}(r.a.Component),p="https://www.google.com/maps/place/700+Crescent+Ave,+Saratoga+Springs,+NY+12866/@43.0561266,-73.7299642,14z",v=function(){return r.a.createElement("div",{className:"card column main"},r.a.createElement("div",{className:"intro"},"An internet website to announce"),r.a.createElement("div",{className:"mainTitle"},r.a.createElement("div",{className:"part"},"Missy"),r.a.createElement("div",{className:"part"},"&"),r.a.createElement("div",{className:"part"},"Phil's")),r.a.createElement("div",{className:"subtitle"},"Marital Union"),r.a.createElement("div",{className:"rsvp"},r.a.createElement("div",{className:"frame1"}),r.a.createElement("div",{className:"frame2"}),"RSVP"))},E=function(){return r.a.createElement("div",{className:"card row location"},r.a.createElement("div",{className:"subcard column text",style:{justifyContent:"space-between",alignItems:"flex-start"}},r.a.createElement("div",{className:"address"},r.a.createElement("div",{className:"title"},"Saratoga Springs"),r.a.createElement("div",null,"700 Crescent Ave"),r.a.createElement("div",null,"Saratoga Springs, NY"),r.a.createElement("div",null,"12866")),r.a.createElement("div",{className:"directions"},r.a.createElement("a",{href:p,target:"_blank",rel:"noopener noreferrer"},"Get Directions    →"))),r.a.createElement("a",{href:p,className:"subcard column map",target:"_blank",rel:"noopener noreferrer"}," "))},f=function(){return r.a.createElement("div",{className:"card row schedule"},r.a.createElement("div",{className:"subcard"}),r.a.createElement("div",{className:"subcard"},r.a.createElement("div",{className:"title"},"Begins at Noon"),r.a.createElement("div",{className:"scheduleTable"},[{name:"Ceremony",time:"12 pm"},{name:"Lunch",time:"1 pm"},{name:"Hangout",time:"3 pm"},{name:"Cocktails",time:"5 pm"},{name:"Reception",time:"7 pm"}].map((function(e,a){return r.a.createElement("div",{className:"scheduleRow",key:a},r.a.createElement("div",{className:"time"},e.time),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"eventName"},e.name))})))))},N=function(){return r.a.createElement("div",{className:"card accommodations"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"title"},"Accomodations"),r.a.createElement("div",null,"Blocks reserved at two locations."),r.a.createElement("div",null,"Call to book and be sure to mention our weddings.")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"hotel"},r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3295.76961789303!2d-73.72738656546608!3d43.06094684906703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x67a8679d5bb3f0c3!2sLongfellows%20Restaurant!5e0!3m2!1sen!2sus!4v1579231348270!5m2!1sen!2sus",title:"Longfellows"}),r.a.createElement("div",{className:"description"},r.a.createElement("div",null,"500 Union Ave"),r.a.createElement("div",null,"Saratoga Springs, NY"),r.a.createElement("div",null,"12866"),r.a.createElement("div",null,"0.5 miles"))),r.a.createElement("div",{className:"hotel"},r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.6822429170456!2d-73.79218058365814!3d43.069150179145645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de39ca166c6c61%3A0x4d375a7f14db6c03!2sHilton%20Garden%20Inn%20Saratoga%20Springs!5e0!3m2!1sen!2sus!4v1579231884462!5m2!1sen!2sus",title:"Hilton Garden Inn"}),r.a.createElement("div",{className:"description"},r.a.createElement("div",null,"125 S Broadway"),r.a.createElement("div",null,"Saratoga Springs, NY"),r.a.createElement("div",null,"12866"),r.a.createElement("div",null,"4 miles")))))},g=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement(E,null),r.a.createElement(f,null),r.a.createElement(N,null))};a.default=function(){return r.a.createElement(l.Router,null,r.a.createElement(u,{path:"/login"}),r.a.createElement(d,{path:"/",component:g}))}},lw3w:function(e,a,t){var n;e.exports=(n=t("rzlk"))&&n.default||n},rzlk:function(e,a,t){"use strict";t.r(a);t("91GP");var n=t("q1tI"),r=t.n(n),l=t("IOVJ");a.default=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json)):null}}}]);
//# sourceMappingURL=component---src-pages-index-js-0be2a010b527c385d4f0.js.map