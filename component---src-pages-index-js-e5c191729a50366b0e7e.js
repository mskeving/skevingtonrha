(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{RXBc:function(e,t,a){"use strict";a.r(t);a("f3/d");var n=a("q1tI"),r=a.n(n),l=(a("pxef"),a("YwZP")),c=(a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("+ZDr"));a("lw3w"),a("emEt").default.enqueue,r.a.createContext({});var s=function(){return"undefined"!=typeof window&&window.localStorage.getItem("gatsbyUser")?JSON.parse(window.localStorage.getItem("gatsbyUser")):{}},o=function(e){return window.localStorage.setItem("gatsbyUser",JSON.stringify(e))},i=function(e){return"phil"===e.password&&(o({username:"phil",name:"Phil"}),!0)},m=function(){return!!s().username};var u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){var e=this.props.location;m()||"/login"===e.pathname||Object(c.navigate)("/login")},l.render=function(){var e=this.props,t=e.component,a=e.location,n=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["component","location"]);return m()||"/login"===a.pathname?r.a.createElement(t,n):null},n}(r.a.Component);var d=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={password:"",error:!1},t.handleUpdate=function(e){var a;t.setState(((a={})[e.target.name]=e.target.value,a))},t.handleSubmit=function(e){e.preventDefault(),i(t.state)&&Object(c.navigate)("/"),t.setState({error:!0})},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.state.error;return m()&&Object(c.navigate)("/"),r.a.createElement("div",{className:"row loginContainer"},r.a.createElement("div",{className:"column login"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"title"},r.a.createElement("div",{className:"part"},"Missy"),r.a.createElement("div",{className:"part"},"&"),r.a.createElement("div",{className:"part"},"Phil's")),r.a.createElement("div",{className:"subtitle"},"Private Wedding Website"),r.a.createElement("form",{method:"post",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter Password",onChange:this.handleUpdate}),r.a.createElement("div",null),e&&r.a.createElement("div",{className:"error"},"Incorrect Password"),r.a.createElement("button",{className:"submit",type:"submit"},r.a.createElement("div",{className:"frame1"}),r.a.createElement("div",{className:"frame2"}),"Enter"))),r.a.createElement("div",null)))},n}(r.a.Component),p="https://www.google.com/maps/place/700+Crescent+Ave,+Saratoga+Springs,+NY+12866/@43.0561266,-73.7299642,14z",v=function(){return r.a.createElement("div",{className:"card column main"},r.a.createElement("div",{className:"intro"},"An internet website to announce"),r.a.createElement("div",{className:"mainTitle"},r.a.createElement("div",{className:"part"},"Missy"),r.a.createElement("div",{className:"part"},"&"),r.a.createElement("div",{className:"part"},"Phil's")),r.a.createElement("div",{className:"subtitle"},"Marital Union"))},E=function(){return r.a.createElement("div",{className:"card row location"},r.a.createElement("div",{className:"subcard column text",style:{justifyContent:"space-between",alignItems:"flex-start"}},r.a.createElement("div",{className:"address"},r.a.createElement("div",{className:"title"},"Saratoga Springs"),r.a.createElement("div",null,"700 Crescent Ave"),r.a.createElement("div",null,"Saratoga Springs, NY"),r.a.createElement("div",null,"12866")),r.a.createElement("div",{className:"directions"},r.a.createElement("a",{href:p,target:"_blank",rel:"noopener noreferrer"},"Get Directions    →"))),r.a.createElement("a",{href:p,className:"subcard column map",target:"_blank",rel:"noopener noreferrer"}," "))},f=function(){return r.a.createElement("div",{className:"card row schedule"},r.a.createElement("div",{className:"subcard"},r.a.createElement("div",{className:"title"},"Saturday, Sept. 19th"),r.a.createElement("div",{className:"scheduleTable"},[{name:"Ceremony",time:"12 pm"},{name:"Lunch",time:"1 pm"},{name:"Hangout",time:"3 pm"},{name:"Cocktails",time:"5 pm"},{name:"Reception",time:"7 pm"}].map((function(e,t){return r.a.createElement("div",{className:"scheduleRow",key:t},r.a.createElement("div",{className:"time"},e.time),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"eventName"},e.name))})))),r.a.createElement("div",{className:"subcard"},r.a.createElement("div",{className:"title"},"What to expect"),r.a.createElement("div",null,"The venue is right on Saratoga Lake, and is Missy's childhood home."),r.a.createElement("div",null,"We hope you can join us for the full day Saturday and recommend traveling on Friday (or earlier!) if you can."),r.a.createElement("div",{style:{marginTop:25}},"fill this in more...")))},h=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement(E,null),r.a.createElement(f,null))};t.default=function(){return r.a.createElement(l.Router,null,r.a.createElement(d,{path:"/login"}),r.a.createElement(u,{path:"/",component:h}))}},lw3w:function(e,t,a){var n;e.exports=(n=a("rzlk"))&&n.default||n},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var n=a("q1tI"),r=a.n(n),l=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-index-js-e5c191729a50366b0e7e.js.map