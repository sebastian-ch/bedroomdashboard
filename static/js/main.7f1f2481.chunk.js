(this.webpackJsonpbedroomdashboard=this.webpackJsonpbedroomdashboard||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(4),a=n.n(i),r=(n(9),n(2)),o=n(0);var u=function(){var e=new Date,t=("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2),n=String(e.getDate()).padStart(2,"0"),c=String(e.getMonth()+1).padStart(2,"0")+"/"+n+"/"+e.getFullYear(),i=Object(s.useState)(t),a=Object(r.a)(i,2),u=a[0],j=a[1],l=Object(s.useState)(c),d=Object(r.a)(l,2);return d[0],d[1],Object(s.useEffect)((function(){setInterval((function(){e=new Date,t=("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2),j(t)}),6e4)}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"date",children:c}),Object(o.jsx)("span",{className:"time",children:Object(o.jsx)("h1",{children:u})})]})};n(11);var j=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],i=[34.17,-118.61],a=new Date,u=new Date(a);u.setDate(u.getDate()+1);var j=d(a),l=a.getHours();function d(e){var t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+n+"-"+t}function b(){return console.log(l),l<12?Object(o.jsx)("div",{className:"greet",children:"Good Morning, Sebastian"}):13<=l&&l<=18?Object(o.jsx)("div",{className:"greet",children:"Good Day, Sebastian"}):18<l?Object(o.jsx)("div",{className:"greet",children:"Good Evening, Sebastian"}):void 0}return l>=7&&(j=d(u)),console.log(j),Object(s.useEffect)((function(){fetch("https://api.sunrise-sunset.org/json?lat=".concat(i[0],"&lng=").concat(i[1],"&date=").concat(j,"&formatted=0")).then((function(e){return e.json()})).then((function(e){console.log(e.results.sunrise);var t=e.results.sunrise,n=new Date(t);console.log(n.getHours()+":"+n.getMinutes()),c(n.getHours()+":"+n.getMinutes())})),setInterval((function(){b()}),36e5)}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{}),Object(o.jsxs)("div",{className:"sunrise",children:["Sunrise: ",n," AM"]})]})};var l=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];function i(){fetch("https://en.wikipedia.org/api/rest_v1/page/random/summary").then((function(e){return e.json()})).then((function(e){console.log(e),c(e)}))}return Object(s.useEffect)((function(){i(),setInterval((function(){i()}),36e5)}),[]),Object(o.jsx)("div",{className:"wiki",children:n.thumbnail?Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:n.thumbnail.source,width:n.thumbnail.width,height:n.thumbnail.height}),Object(o.jsx)("div",{className:"wiki-title",children:Object(o.jsx)("b",{children:n.title})}),Object(o.jsx)("div",{children:n.description}),Object(o.jsx)("div",{children:n.extract})]}):Object(o.jsx)("div",{children:"hi"})})};var d=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(u,{}),Object(o.jsx)(j,{}),Object(o.jsx)(l,{})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),b()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.7f1f2481.chunk.js.map