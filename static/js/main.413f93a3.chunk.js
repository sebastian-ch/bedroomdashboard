(this.webpackJsonpbedroomdashboard=this.webpackJsonpbedroomdashboard||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(4),r=n.n(a),i=(n(9),n(2)),o=n(0);var u=function(){var e=new Date,t=("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+":"+("0"+e.getSeconds()).slice(-2),n=String(e.getDate()).padStart(2,"0"),c=String(e.getMonth()+1).padStart(2,"0")+"/"+n+"/"+e.getFullYear(),a=Object(s.useState)(t),r=Object(i.a)(a,2),u=r[0],l=r[1],g=Object(s.useState)(c),j=Object(i.a)(g,2);return j[0],j[1],Object(s.useEffect)((function(){setInterval((function(){e=new Date,t=("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+":"+("0"+e.getSeconds()).slice(-2),l(t)}),1e3)}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"date",children:Object(o.jsx)("h1",{children:c})}),Object(o.jsx)("span",{className:"time",children:Object(o.jsx)("h1",{children:u})})]})};n(11);var l=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],a=[34.17,-118.61],r=new Date,u=new Date(r);u.setDate(u.getDate()+1);var l=g(r);function g(e){var t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+n+"-"+t}return r.getHours()>=7&&(l=g(u)),console.log(l),Object(s.useEffect)((function(){fetch("https://api.sunrise-sunset.org/json?lat=".concat(a[0],"&lng=").concat(a[1],"&date=").concat(l,"&formatted=0")).then((function(e){return e.json()})).then((function(e){console.log(e.results.sunrise);var t=e.results.sunrise,n=new Date(t);console.log(n.getHours()+":"+n.getMinutes()),c(n.getHours()+":"+n.getMinutes())}))}),[]),Object(o.jsxs)("div",{className:"sunrise",children:["Sunrise: ",n," AM"]})};var g=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(u,{}),Object(o.jsx)(l,{})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.413f93a3.chunk.js.map