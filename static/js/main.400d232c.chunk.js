(this.webpackJsonpinvoiceclient=this.webpackJsonpinvoiceclient||[]).push([[0],{120:function(e,t,a){e.exports=a.p+"static/media/buttonloader.ed25a86a.gif"},216:function(e,t,a){e.exports=a.p+"static/media/loader.ee007598.gif"},248:function(e,t,a){e.exports=a(474)},253:function(e,t,a){},254:function(e,t,a){},255:function(e,t,a){},401:function(e,t,a){},402:function(e,t,a){},403:function(e,t,a){},404:function(e,t,a){},465:function(e,t,a){},466:function(e,t,a){},467:function(e,t,a){},468:function(e,t,a){},470:function(e,t,a){},471:function(e,t,a){},472:function(e,t,a){},474:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),i=a.n(r),o=a(18),l=a(17),u=a(160),s=a.n(u),m=a(205),d=a(4),f=(a(253),a(254),a(479)),E=a(477),v=(a(255),function(e){var t=e.size,a=void 0===t?"large":t,r=e.placeholder,i=void 0===r?"":r,o=e.icon,l=e.onBlurHandler,u=e.password,s=e.value,m=void 0===s?"":s,v=e.validation,p=void 0===v?function(){}:v,h=e.clickToSubmit,b=void 0===h?function(){}:h,g=Object(n.useState)(m),O=Object(d.a)(g,2),j=O[0],y=O[1],S=Object(n.useState)(!1),I=Object(d.a)(S,2),N=I[0],T=I[1],k=Object(n.useState)(""),w=Object(d.a)(k,2),C=w[0],x=w[1],Y=u?f.a.Password:f.a;return c.a.createElement(E.a.Item,null,c.a.createElement(Y,{size:a,placeholder:i,prefix:o,onChange:function(e){return y(e.target.value)},onKeyUp:function(e){13===e.keyCode&&b()},value:j,onBlur:function(){if(!0===p(j))return T(!1),l(j);T(!0),x(p(j))}}),N&&c.a.createElement("div",{className:"input-error"},C))}),p=a(32),h=function(e){var t=e.secondary,a=void 0!==t&&t,n=e.label,r=void 0===n?"":n,i=e.children,o=e.onClickHandler,l=e.type,u=void 0===l?"button":l,s=e.width,m=void 0===s?375:s,d=e.disabled,f=void 0!==d&&d,E={color:a?"#0e2659":"#ffffff",backgroundColor:a?"#ffffff":"#0e2659",width:m};return c.a.createElement(p.a,{size:"large",htmlType:u,style:E,onClick:o,disabled:f},i||r)},b=a(117),g=a(118),O=a(161),j=a.n(O),y=j.a.create({baseURL:"https://historic-joshua-tree-28441.herokuapp.com/",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}});y.interceptors.request.use((function(e){var t=localStorage.getItem("TOKEN");return e.headers.Authorization="Bearer ".concat(t),e})),j.a.interceptors.response.use((function(e){var t=localStorage.getItem("TOKEN");return e.headers.Authorization="Bearer ".concat(t),e}));var S=function(){function e(){Object(b.a)(this,e)}return Object(g.a)(e,null,[{key:"SignupService",value:function(e,t,a,n,c){return t(),y.post("/signup",e).then(a).catch(n).finally(c)}},{key:"SigninService",value:function(e,t,a,n,c){return t(),y.post("/signin",e).then(a).catch(n).finally(c)}},{key:"getUserService",value:function(e,t,a,n){return e(),y.get("/user").then(t).catch(a).finally(n)}},{key:"getAllUsersService",value:function(e,t,a,n){return e(),y.get("/users").then(t).catch(a).finally(n)}}]),e}(),I=a(480),N=a(481),T=a(482),k=function(e){if(!e.length)return"*This feild is mandatory";return!!e.match(/^[A-Z a-z]+$/)||"This feild should not contain special characters or numbers"},w=function(e){if(!e.length)return"*This feild is mandatory";return!!e.match(/^[A-Z a-z 0-9]+$/)||"This feild should not contain special characters"},C=function(e){return e.length?!isNaN(e)||"This feild should not contain special characters or letters":"*This feild is mandatory"},x=function(e){if(!e.length)return"*This feild is mandatory.";return!!e.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)||"Please enter a valid email id"},Y=function(e){return e.length?!(e.length<8)||"password must contain more than 7 characters.":"*This feild is mandatory."},D=a(478),A=function(e,t,a){D.a[e]({message:t,description:a})},M=a(120),B=a.n(M),L=function(e){var t=e.updateLogin,a=Object(n.useState)(""),r=Object(d.a)(a,2),i=r[0],o=r[1],l=Object(n.useState)(""),u=Object(d.a)(l,2),s=u[0],m=u[1],f=Object(n.useState)(""),E=Object(d.a)(f,2),p=E[0],b=E[1],g=Object(n.useState)(!1),O=Object(d.a)(g,2),j=O[0],y=O[1],w=Object(n.useState)(""),C=Object(d.a)(w,2),D=C[0],M=C[1],L=function(){if(p!==D)return A("warning","Signup","Password and conform password does not match.");if(!0===k(i)&&!0===x(s)&&!0===Y(p)){var e={username:i,email:s,password:p};S.SignupService(e,(function(){y(!0)}),(function(e){if(e)return A("success","Signup","User created successfully."),y(!0),y(!1),t()}),(function(e){console.log(e),y(!1),A("error","Signup","Issue in creating user")}),(function(){m(""),b(""),M(""),o("")}))}else A("error","Signup","Should Enter a valid data to signup.")};return c.a.createElement("div",{className:"signup-container"},c.a.createElement("h1",{style:{paddingTop:10,paddingBottom:30}},"Sign Up"),c.a.createElement("div",{style:{marginTop:20,marginBottom:20}},c.a.createElement("div",{style:{marginBottom:15,padding:"0px 30px"}},c.a.createElement(v,{placeholder:"Enter Username",icon:c.a.createElement(I.a,null),onBlurHandler:function(e){return o(e)},value:i,validation:k,clickToSubmit:L})),c.a.createElement("div",{style:{marginBottom:15,padding:"0px 30px"}},c.a.createElement(v,{placeholder:"Enter Email",icon:c.a.createElement(N.a,null),onBlurHandler:function(e){return m(e)},value:s,validation:x,clickToSubmit:L})),c.a.createElement("div",{style:{marginBottom:15,padding:"0px 30px"}},c.a.createElement(v,{placeholder:"Enter Password",icon:c.a.createElement(T.a,null),password:!0,onBlurHandler:function(e){return b(e)},value:p,validation:Y,clickToSubmit:L})),c.a.createElement("div",{style:{marginBottom:15,padding:"0px 30px"}},c.a.createElement(v,{placeholder:"Enter Conform Password",icon:c.a.createElement(T.a,null),password:!0,onBlurHandler:function(e){return M(e)},value:D,validation:Y,clickToSubmit:L})),c.a.createElement(h,{type:"submit",onClickHandler:L},"Signup",j&&c.a.createElement("img",{src:B.a,alt:"Loading . . . ",height:25,width:25}))),c.a.createElement("div",null,c.a.createElement("p",null,"Alredy have an account ",c.a.createElement("a",{href:null,onClick:t},"Login"))))},U=a(68),z=function(e,t){switch(t.type){case"SET_IS_AUTHENTICATED":return Object(U.a)(Object(U.a)({},e),{},{isAuthenticated:t.payload});case"SET_USER_DETAILS":return console.log("I am called"),console.log(t.payload),Object(U.a)(Object(U.a)({},e),{},{user:t.payload});default:return e}},H={isAuthenticated:!1,user:{email:"",username:"",admin:!1}},_=Object(n.createContext)(),P=function(e){var t=Object(n.useReducer)(z,H),a=Object(d.a)(t,2),r=a[0],i=a[1];return c.a.createElement(_.Provider,{value:{state:r,dispatch:i}},e.children)},R=a(483),F=Object(l.g)((function(e){var t=e.updateSignup,a=Object(n.useState)("admin@gmail.com"),r=Object(d.a)(a,2),i=r[0],o=r[1],l=Object(n.useState)("abcd@1234"),u=Object(d.a)(l,2),s=u[0],m=u[1],f=Object(n.useState)(!1),E=Object(d.a)(f,2),p=E[0],b=E[1],g=Object(n.useContext)(_).dispatch,O=function(){if(!0===x(i)&&!0===Y(s)){var t={email:i,password:s};S.SigninService(t,(function(){b(!0)}),(function(t){if(t.data.success&&t.data.token)return localStorage.setItem("TOKEN",t.data.token),g({type:"SET_IS_AUTHENTICATED",payload:!0}),g({type:"SET_USER_DETAILS",payload:t.data.user}),A("success","Login","Login successful."),b(!1),e.history.push("/dashboard/home")}),(function(e){console.log(e),A("error","Login","Login failed."),b(!1)}),(function(){o(""),m("")}))}else A("error","Login","Should Enter a valid data to signin.")};return c.a.createElement("div",{className:"signup-container"},c.a.createElement("h1",{style:{paddingTop:10,paddingBottom:30}},"Login"),c.a.createElement("div",{style:{marginTop:20,marginBottom:20}},c.a.createElement("div",{style:{marginBottom:15,padding:"0px 30px"}},c.a.createElement(v,{placeholder:"Enter Email",icon:c.a.createElement(N.a,null),onBlurHandler:function(e){return o(e)},value:i,validation:x,clickToSubmit:O})),c.a.createElement("div",{style:{marginBottom:15,padding:"0px 30px"}},c.a.createElement(v,{placeholder:"Enter Password",icon:c.a.createElement(R.a,null),password:!0,onBlurHandler:function(e){return m(e)},value:s,validation:Y,clickToSubmit:O})),c.a.createElement(h,{onClickHandler:O}," ","Login",p&&c.a.createElement("img",{src:B.a,alt:"Loading. . . ",height:25,width:25}))),c.a.createElement("div",null,c.a.createElement("p",null,"Create an account ",c.a.createElement("a",{onClick:t},"signup"))))})),K=a(215),Z=a.n(K),$=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(50),o=Object(d.a)(i,2),l=o[0],u=o[1],f=Object(n.useState)(50),E=Object(d.a)(f,2),v=E[0],p=E[1],h=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(0);case 1:if(!(l<=102)){e.next=6;break}return e.next=4,new Promise((function(e){setTimeout((function(){u((function(e){return e+1})),e()}),2)}));case 4:e.next=1;break;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"landingpage-container"},c.a.createElement("div",{className:"landingpage-name",style:{width:"".concat(l,"%")}},c.a.createElement(Z.a,null,c.a.createElement("h1",{className:"landingpage-brand"},"Root Quotient"))),c.a.createElement("div",{className:"landingpage-form-container",style:{width:"".concat(v,"%")}},a?c.a.createElement(F,{updateSignup:function(){return r(!1)},onLogin:h}):c.a.createElement(L,{updateLogin:function(){return r(!0)}})))},J=a(484),Q=a(485),W=a(486),q=(a(401),function(){var e=Object(n.useContext)(_).dispatch,t={icon:{fontSize:"20px",color:"white",paddingRight:10}};return c.a.createElement("div",{className:"sidebar-inner-container"},c.a.createElement("div",{style:{paddingLeft:10}},c.a.createElement("h1",{className:"product-name"},"Root Quotient")),c.a.createElement("div",{className:"sidebar-nav"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.b,{to:"/dashboard/home"},c.a.createElement(J.a,{style:t.icon})," ",c.a.createElement("span",{className:"sidebar-text"},"Home"))),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/dashboard/metric"},c.a.createElement(Q.a,{style:t.icon})," ",c.a.createElement("span",{className:"sidebar-text"},"Metric"))),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/dashboard/profile"},c.a.createElement(I.a,{style:t.icon})," ",c.a.createElement("span",{className:"sidebar-text"},"Profile"))),c.a.createElement("li",{className:"logout-button"},c.a.createElement(o.b,{to:"/",onClick:function(){e({action:"SET_IS_AUTHENTICATED",payload:!1}),e({action:"SET_USER_DETAILS",payload:null}),localStorage.clear()}},c.a.createElement(W.a,{style:t.icon})," ",c.a.createElement("span",{className:"sidebar-text"},"Logout"))))))}),V=a(78),G=a.n(V),X=a(13),ee=a.n(X),te=(a(402),function(e){var t=e.amount,a=Object(n.useContext)(_).state.user,r=a.username,i=a.admin;return c.a.createElement("div",{className:"customer-details"},c.a.createElement("div",{className:"customer-name"},!i&&c.a.createElement("p",null,"CUSTOMER"),c.a.createElement("h2",null,r[0].toUpperCase()+r.slice(1))),c.a.createElement("div",{className:"secondary-details"},c.a.createElement("div",{className:"customer-amount",style:{paddingRight:15}},c.a.createElement("p",null,"TOTAL AMOUNT"),c.a.createElement("h2",null,"Rs. ",G.a.format(t))),c.a.createElement("div",{className:"customer-date"},c.a.createElement("p",null,"DATE"),c.a.createElement("h2",null,ee()(new Date).format("DD-MM-YYYY")))))}),ae=function(){function e(){Object(b.a)(this,e)}return Object(g.a)(e,null,[{key:"getInvoices",value:function(e,t,a,n){return e(),y.get("/invoice").then(t).catch(a).finally(n)}},{key:"getOneInvoices",value:function(e,t,a,n,c){return t(),y.get("/invoice/".concat(e)).then(a).catch(n).finally(c)}},{key:"postInvoice",value:function(e,t,a,n,c){return t(),y.post("/invoice",e).then(a).catch(n).finally(c)}},{key:"patchInvoice",value:function(e,t,a,n,c){return t(),y.patch("/invoice",e).then(a).catch(n).finally(c)}},{key:"deleteInvoice",value:function(e,t,a,n,c){return t(),y.delete("/invoice/".concat(e)).then(a).catch(n).finally(c)}},{key:"sortInvoice",value:function(e,t,a,n,c){return t(),y.get("/invoices/sort?desc=".concat(e.desc,"&asec=").concat(e.aesc)).then(a).catch(n).finally(c)}},{key:"filterInvoice",value:function(e,t,a,n,c){return t(),y.get("/invoices/filter?start=".concat(e.start,"&end=").concat(e.end)).then(a).catch(n).finally(c)}},{key:"filterAndSortInvoice",value:function(e,t,a,n,c){return t(),y.get("/invoices?asec=".concat(e.aesc,"&desc=").concat(e.desc,"&start=").concat(e.start,"&end=").concat(e.end)).then(a).catch(n).finally(c)}}]),e}(),ne=a(216),ce=a.n(ne),re=(a(403),function(e){var t=e.show,a=c.a.createElement("div",{className:"loader-container"},c.a.createElement("img",{src:ce.a,alt:"Loading . . .",className:"loader-small"}));return c.a.createElement(n.Fragment,null,t&&a)}),ie=a(475),oe=a(67),le=a(476),ue=a(132),se=a(487),me=a(488),de=a(489),fe=(a(404),ie.a.Column),Ee=Object(l.g)((function(e){var t=e.setAmount,a=Object(n.useState)([]),r=Object(d.a)(a,2),i=r[0],l=r[1],u=Object(n.useState)([]),s=Object(d.a)(u,2),m=s[0],f=s[1],E=Object(n.useState)(!1),v=Object(d.a)(E,2),h=v[0],b=v[1],g=Object(n.useState)("Sort by"),O=Object(d.a)(g,2),j=O[0],y=O[1],I=Object(n.useState)({}),N=Object(d.a)(I,2),T=N[0],k=N[1],w=Object(n.useState)("0"),C=Object(d.a)(w,2),x=C[0],Y=C[1],D=Object(n.useState)("0"),M=Object(d.a)(D,2),B=M[0],L=M[1],z=Object(n.useContext)(_).state,H=function(){ae.getInvoices((function(){b(!0)}),(function(e){l(e.data.data);var a=e.data.data.reduce((function(e,t){return e+t.amount}),0);t(a)}),(function(t){e.history.push("/")}),(function(){b(!1)}))},P=function(e,a){e(a,(function(){b(!0)}),(function(e){l(e.data.data);var a=e.data.data.reduce((function(e,t){return e+t.amount}),0);t(a)}),(function(e){console.error(e)}),(function(){b(!1)}))};Object(n.useEffect)((function(){H(),z.user.admin&&S.getAllUsersService((function(){b(!0)}),(function(e){var t=e.data.users;console.log({users:t}),f(t),b(!1)}),(function(t){b(!1),e.history.push("/")}),(function(){}))}),[]);if(h)return c.a.createElement(re,{show:h});var R=function(e){if(null===e)return H(),Y("0"),L("0"),y("Sort by");e?(k({aesc:1,desc:0}),P(ae.filterAndSortInvoice,{start:x,end:B,desc:0,aesc:1}),y("Older")):(k({aesc:0,desc:1}),P(ae.filterAndSortInvoice,{start:x,end:B,desc:1,aesc:0}),y("Newer"))},F=c.a.createElement(oe.a,null,c.a.createElement(oe.a.Item,null,c.a.createElement("p",{onClick:function(){return R(null)}},"Default")),c.a.createElement(oe.a.Item,null,c.a.createElement("p",{onClick:function(){return R(!0)}},"Older")),c.a.createElement(oe.a.Item,null,c.a.createElement("p",{onClick:function(){return R(!1)}},"Newer"))),K=le.a.RangePicker,Z=function(e){return"0"===e?null:ee()(new Date(e),"DD-MM-YYYY")};return c.a.createElement("div",{className:"invoice-container"},c.a.createElement("div",{className:"invoice-inner-container"},c.a.createElement("div",null,c.a.createElement("h2",null,"Invoices"),c.a.createElement("div",null,c.a.createElement("div",{style:{margin:"10px 20px",position:"absolute",right:200}},c.a.createElement(ue.a,{overlay:F},c.a.createElement(p.a,null,j,c.a.createElement(se.a,null)))," ",c.a.createElement(K,{ranges:{Today:[ee()(),ee()()],"This Month":[ee()().startOf("month"),ee()().endOf("month")]},value:[Z(x),Z(B)],onChange:function(e,t){Y(t[0]),L(t[1]),P(ae.filterAndSortInvoice,Object(U.a)({start:t[0],end:t[1]},T))}})))),c.a.createElement("div",{className:"invoice-table"},c.a.createElement(ie.a,{dataSource:i,pagination:{defaultPageSize:5}},z.user.admin&&m.length?c.a.createElement(fe,{title:"User Name",dataIndex:"userid",key:"userid",render:function(e){return m.filter((function(t){return t._id===e}))[0].username}}):c.a.createElement("p",null),c.a.createElement(fe,{title:"Invoice Name",dataIndex:"name",key:"name"}),c.a.createElement(fe,{title:"Invoice Date",dataIndex:"date",key:"date",render:function(e){return c.a.createElement("p",{key:e},ee()(e).format("DD-MM-YYYY"))}}),c.a.createElement(fe,{title:"Invoice Amount",dataIndex:"amount",key:"amount"}),!z.user.admin&&c.a.createElement(n.Fragment,null,c.a.createElement(fe,{title:"Edit",render:function(e){var t="/dashboard/update/".concat(e._id);return c.a.createElement(o.b,{to:t,key:e._id},c.a.createElement(me.a,{style:{color:"orange",fontSize:18}}))}}," "),c.a.createElement(fe,{title:"Delete",render:function(e){return c.a.createElement(de.a,{style:{color:"tomato",fontSize:18},onClick:function(){return function(e){var t=e._id;ae.deleteInvoice(t,(function(){}),(function(e){e&&(l((function(e){return e.filter((function(e){return e._id!==t}))})),A("success","Invoice","Invoice deleted successfully."))}),(function(e){console.log(e),A("error","Invoice","Issue while deleting the invoice.")}),(function(){}))}(e)}})}}," "))))))})),ve=a(490),pe=(a(465),function(){var e=Object(n.useContext)(_).state,t=Object(n.useState)(""),a=Object(d.a)(t,2),r=a[0],i=a[1];return c.a.createElement("div",{style:{backgroundColor:"red"}},c.a.createElement("div",{className:"customer-detail-container"},c.a.createElement(te,{amount:r}),c.a.createElement(Ee,{setAmount:function(e){return i(e)}})),!e.user.admin&&c.a.createElement("div",{className:"create-invoice"},c.a.createElement(o.b,{to:"/dashboard/create"},c.a.createElement(ve.a,{style:{color:"white",fontSize:26,paddingTop:12}}))))}),he={input:{marginBottom:22,width:"100%"}},be=function(e){var t=e.size,a=void 0===t?"large":t,r=e.placeholder,i=void 0===r?"":r,o=e.type,l=void 0===o?"text":o,u=e.value,s=void 0===u?"":u,m=e.validation,E=void 0===m?function(){}:m,v=e.onChangeHander,p=void 0===v?function(){}:v,h=Object(n.useState)(""),b=Object(d.a)(h,2),g=b[0],O=b[1],j=Object(n.useState)(null),y=Object(d.a)(j,2),S=y[0],I=y[1];Object(n.useEffect)((function(){O(s)}),[s]);return c.a.createElement("div",null,c.a.createElement(f.a,{style:he.input,size:a,placeholder:i,type:l,value:s,onChange:function(e){O(e.target.value),p(e.target.value)},onBlur:function(){setTimeout((function(){!0===E(g)?I(!1):I(E(g))}),500)}}),S&&c.a.createElement("div",{style:{float:"left",color:"tomato"}}," ",c.a.createElement("p",{styles:{marginTop:-1}},S)))},ge=(a(466),{input:{marginBottom:22,width:"100%"}}),Oe=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(d.a)(i,2),l=o[0],u=o[1],s=Object(n.useState)(ee()(new Date,"DD-MM-YYYY")),m=Object(d.a)(s,2),f=m[0],E=m[1],v=function(e,t,a){D.a[e]({message:t,description:a})};return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("div",{className:"create-invoice-conainer"},c.a.createElement("h1",{className:"create-invoice-title"},"Create Invoice"),c.a.createElement("div",{className:"create-invoice-form"},c.a.createElement(be,{placeholder:"Enter Invoice Name",value:a,onChangeHander:function(e){return r(e)},validation:w}),c.a.createElement(be,{placeholder:"Enter Invoice Amount",type:"number",value:l,onChangeHander:function(e){return u(e)},validation:C}),c.a.createElement(le.a,{size:"large",style:ge.input,onChange:function(e,t){return E(ee()(new Date(t),"DD-MM-YYYY"))},defaultValue:ee()(new Date,"DD-MM-YYYY"),value:f}),c.a.createElement(h,{width:"100%",onClickHandler:function(){if(!0===w(a)&&!0===C(l)){var e={name:a,amount:l,date:f};ae.postInvoice(e,(function(){}),(function(e){e.data.success&&v("success","Invoice","Invoice created successfully.")}),(function(e){v("error","Invoice","Failed to create Invoice.")}),(function(){r(""),u(""),E(ee()(new Date,"DD-MM-YYYY"))}))}else v("error","Error Notification","valid data should be entered in Invoice name and amount.")}},"Create Invoice"))))},je=a(491),ye=(a(467),Object(l.g)((function(e){return c.a.createElement("div",{className:"navbar-container"},c.a.createElement(je.a,{className:"back-button",onClick:function(){return e.history.goBack()}}))}))),Se=(a(468),{input:{marginBottom:22,width:"100%"}}),Ie=Object(l.g)((function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),r=a[0],i=a[1],o=Object(n.useState)(""),l=Object(d.a)(o,2),u=l[0],s=l[1],m=Object(n.useState)(ee()(new Date,"DD-MM-YYYY")),f=Object(d.a)(m,2),E=f[0],v=f[1];Object(n.useEffect)((function(){var t=e.match.params.id;ae.getOneInvoices(t,(function(){}),(function(e){var t=e.data.data;i(t[0].name),s(t[0].amount),v(ee()(new Date(t[0].date),"DD-MM-YYYY"))}),(function(t){e.history.push("/"),console.log(t)}),(function(){}))}),[]);var p=function(e,t,a){D.a[e]({message:t,description:a})};return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("div",{className:"create-invoice-conainer"},c.a.createElement("h1",{className:"create-invoice-title"},"Update Invoice"),c.a.createElement("div",{className:"create-invoice-form"},c.a.createElement(be,{placeholder:"Enter Invoice Name",value:r,onChangeHander:function(e){return i(e)},validation:w}),c.a.createElement(be,{placeholder:"Enter Invoice Amount",type:"number",value:u,onChangeHander:function(e){return s(e)},validation:C}),c.a.createElement(le.a,{size:"large",style:Se.input,value:ee()(new Date(E),"YYY-MM-DD")}),c.a.createElement(h,{width:"100%",onClickHandler:function(){if(!0===w(r)&&!0===C(u)){var t={name:r,amount:u,date:E,id:e.match.params.id};ae.patchInvoice(t,(function(){}),(function(e){e.data.success&&p("success","Invoice","Invoice updated successfully.")}),(function(e){p("error","Invoice","Failed to create Invoice.")}),(function(){i(""),s(""),v(ee()(new Date,"DD-MM-YYYY"))}))}else p("error","Error Notification","valid data should be entered in Invoice name and amount.")}},"Update Invoice"))))})),Ne=a(130),Te=a.n(Ne),ke=(a(470),function(e){var t=e.data,a=e.title,n={chart:{height:450,width:"100%",type:"bar",backgroundColor:"white"},xaxis:{categories:Object.keys(t),gridLineWidth:0},fill:{colors:["#0e2659"]},dataLables:{enabled:!1},title:{text:a,align:"center",margin:20,offsetY:20,style:{fontSize:"25px"}}},r=[{name:"Number of Invoices",data:Object.values(t),gridLineWidth:0}];return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(Te.a,{options:n,series:r,type:"bar",width:650,height:500})))}),we=(a(471),function(e){var t=e.data,a=Object(n.useContext)(_).state,r=t.length,i=t.map((function(e){return Math.floor(e%r*100)})),o={series:a.user.admin?i:t,options:{chart:{type:"donut"},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}};return c.a.createElement("div",null,c.a.createElement(Te.a,{options:o.options,series:o.series,type:"donut",width:450,height:450}))}),Ce=Object(l.g)((function(e){var t=e.invoicesProp,a=Object(n.useState)([]),r=Object(d.a)(a,2),i=r[0],o=r[1],l=Object(n.useState)(t),u=Object(d.a)(l,2),s=u[0],m=u[1];Object(n.useEffect)((function(){S.getAllUsersService((function(){}),(function(e){console.log(e.data),o(e.data.users)}),(function(t){console.log(t),e.history.push("/")}),(function(){}))}),[]);return Object(n.useEffect)((function(){m(t)}),[t]),c.a.createElement("div",{className:"card-container",style:{marginBottom:50}},c.a.createElement("div",{className:"invoice-card"},c.a.createElement(ke,{data:function(){var e={};return i.forEach((function(t){var a=s.filter((function(e){return e.userid===t._id}));"admin"!==t.username&&(e[t.username]=a.length)})),e}(),title:"Customer Summary"})))})),xe=Object(l.g)((function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)({}),o=Object(d.a)(i,2),l=o[0],u=o[1],s=Object(n.useState)(""),m=Object(d.a)(s,2),f=m[0],E=m[1],v=Object(n.useState)([]),p=Object(d.a)(v,2),h=p[0],b=p[1],g=Object(n.useState)(0),O=Object(d.a)(g,2),j=O[0],y=O[1],S=Object(n.useContext)(_).state;return Object(n.useEffect)((function(){var e;ae.getInvoices((function(){E(!0)}),(function(e){r(e.data.data)}),(function(t){console.error(t),e.history.push("/")}),(function(){E(!1)}))}),[]),Object(n.useEffect)((function(){!function(){var e={},t=[],n=0;a.forEach((function(a){var c=ee()(a.date).format("MMM DD,YYYY");e[c]>0?e[c]+=1:e[c]=1,t.push(a.amount),n+=a.amount})),u(e),b(t),y(n)}()}),[a]),f?c.a.createElement(re,{show:f}):c.a.createElement("div",{className:"metric-container"},c.a.createElement("div",{className:"pie-chart-container"},c.a.createElement("div",{className:"pie-chart-details"},c.a.createElement("div",{className:"pie-chart-card"},c.a.createElement("h2",null,"Total Invoices"),c.a.createElement("p",null,a.length)),c.a.createElement("div",{className:"pie-chart-card"},c.a.createElement("h2",null,"Total Amount"),c.a.createElement("p",null,"Rs. ",G.a.format(j)))),c.a.createElement("div",{className:"pie-chart-details"},c.a.createElement("div",{className:"pie-chart"},c.a.createElement(we,{data:h})))),c.a.createElement("div",{className:"card-container",style:{marginBottom:50}},c.a.createElement("div",{className:"invoice-card"},c.a.createElement(ke,{data:l,title:"Invoice Summary"}))),S.user.admin&&c.a.createElement(Ce,{invoicesProp:a}))})),Ye=(a(472),function(){var e=Object(n.useContext)(_).state,t=Object(n.useState)(0),a=Object(d.a)(t,2),r=a[0],i=a[1],o=Object(n.useState)(0),l=Object(d.a)(o,2),u=l[0],s=l[1],m=Object(n.useState)(!1),f=Object(d.a)(m,2),E=f[0],v=f[1];return Object(n.useEffect)((function(){ae.getInvoices((function(){v(!0)}),(function(e){console.log(e.data.data);var t=e.data.data;i(t.length),s(t.reduce((function(e,t){return e+t.amount}),0)),v(!1)}),(function(e){console.log(e),v(!1)}),(function(){}))}),[]),console.log({state:e}),E?c.a.createElement(re,{show:E}):c.a.createElement("div",{className:"profile-container"},c.a.createElement("div",{className:"profile-card"},c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h1",null,"Profile"),c.a.createElement("hr",null)),c.a.createElement("div",{style:{marginTop:20,marginLeft:20}},c.a.createElement("p",null,"Username: ",c.a.createElement("h4",null,e.user.username)," "),c.a.createElement("p",null,"Email: ",c.a.createElement("h4",null,e.user.email)," "),c.a.createElement("p",null,"No of invoices:",c.a.createElement("h4",null,r)," "),c.a.createElement("p",null,"Total amount: ",c.a.createElement("h4",null,"Rs.",G.a.format(u))," "))))}),De=function(){return c.a.createElement("div",{className:"dashboard-container"},c.a.createElement("div",{className:"sidebar-container"},c.a.createElement(q,null)),c.a.createElement("div",{className:"content-container"},c.a.createElement(ye,null),c.a.createElement(l.d,null,c.a.createElement(l.b,{path:"/dashboard/home",component:function(e){return c.a.createElement(pe,e)}}),c.a.createElement(l.b,{path:"/dashboard/create",component:function(e){return c.a.createElement(Oe,e)}}),c.a.createElement(l.b,{path:"/dashboard/update/:id",component:function(e){return c.a.createElement(Ie,e)}}),c.a.createElement(l.b,{path:"/dashboard/metric",component:function(e){return c.a.createElement(xe,e)}}),c.a.createElement(l.b,{path:"/dashboard/profile",component:function(e){return c.a.createElement(Ye,e)}}),c.a.createElement(l.b,{path:"/dashboard/*",render:function(){return c.a.createElement(l.a,{to:"/dashboard/home"})}}))))},Ae=a(244),Me=function(e){var t=e.Component,a=e.path,r=Object(Ae.a)(e,["Component","path"]),i=Object(n.useContext)(_).state;return console.log({state:i}),c.a.createElement(n.Fragment,null,i.isAuthenticated?c.a.createElement(l.b,Object.assign({component:function(e){return c.a.createElement(t,e)},path:a},r)):c.a.createElement(l.a,{to:"/"}))},Be=(a(473),function(){return c.a.createElement(o.a,null,c.a.createElement(l.d,null,c.a.createElement(Me,{path:"/dashboard",Component:function(e){return c.a.createElement(De,e)}}),c.a.createElement(l.b,{path:"/",component:function(e){return c.a.createElement($,e)}}),c.a.createElement(l.b,{path:"*",render:function(){return c.a.createElement(l.a,{to:"/signup"})}})))});i.a.render(c.a.createElement(P,null,c.a.createElement(Be,null)),document.getElementById("root"))}},[[248,1,2]]]);
//# sourceMappingURL=main.400d232c.chunk.js.map