(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){},103:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){},106:function(e,a,t){},107:function(e,a,t){},126:function(e,a,t){},127:function(e,a,t){},128:function(e,a,t){},129:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(17),s=t.n(o),l=(t(91),t(29)),c=t(10),i=t(66),u=t.n(i),d=t(13),m=t(21),A=Object(d.a)();function p(e){var a=e.children;return r.a.createElement(c.b,{history:A},r.a.createElement(f,null),a)}function g(){var e=Object(c.h)(),a=Object(c.g)(),t=Object(c.f)(),r=Object(c.i)();return Object(n.useMemo)((function(){return{push:t.push,replace:t.replace,pathname:a.pathname,query:Object(l.a)(Object(l.a)({},u.a.parse(a.search)),e),match:r,location:a,history:t}}),[e,r,a,t])}function f(){var e=Object(c.g)();return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e.pathname]),null}var E=t(132),h=t(133),v=t(69),b=t(134);var w=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{padding:"50px",width:"100%",textAlign:"center"}},"The page ",r.a.createElement("code",null,e.location.pathname)," could not be found."),r.a.createElement(E.a,null,r.a.createElement(h.a,null,r.a.createElement(v.a,{className:"m-auto",md:4},r.a.createElement(b.a,{onClick:function(){return e.history.goBack()},className:"btn-block",variant:"primary"},"Go Back")))))},y=(t(98),t(70)),k=t.n(y),q=t(137),P=t(136),C=(t(99),t(71)),N=t.n(C),j=t(72),O=t.n(j),T=function(e){var a=e.logoColor;return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{className:"navigation-bar",fixed:"top",sticky:"top",expand:"md"},r.a.createElement(q.a.Brand,null,r.a.createElement(m.b,{to:"/"},r.a.createElement("img",{className:"navigation-bar-logo",src:"white"===a?N.a:O.a,alt:"Logo"})," ")),r.a.createElement(q.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(q.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(P.a,{className:"ml-auto"},r.a.createElement(m.b,{className:"nav-link",to:"/user/register"},"Register"," "),r.a.createElement(m.b,{className:"nav-link",to:"/user/login"},"Login"," ")))))},x=function(e){var a=e.mediaQuery;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"hero-section"},r.a.createElement(T,{logoColor:"white"}),r.a.createElement(E.a,null,r.a.createElement("div",{className:"hero-section__text"},r.a.createElement("h1",null,"Taskie brings ease to task management."),r.a.createElement(m.a,{to:"/user/register"}," ",r.a.createElement(b.a,{className:"white_btn_outline btn-block  hero-section__cta-btn"},"Try it free"))),"isMobile"!==a&&r.a.createElement("img",{className:"hero-section__image",src:k.a,alt:"Dashboard  Mockup"}))))},Q=t(138),M=t(75),I=t.n(M),D=t(76),B=t.n(D),K=t(77),G=t.n(K),z=t(78),F=t.n(z),R=t(79),U=t.n(R),S=[{name:"Samuel Olamide",image:I.a},{name:"Emily Guondogan",image:B.a},{name:"James Rodriguez",image:G.a},{name:"Mike Thompson",image:F.a},{name:"Julian Correa",image:U.a}],L=(t(101),function(e){var a=e.image,t=e.name;return r.a.createElement("div",{className:"taskie-user"},r.a.createElement("img",{className:"img-fluid",src:a,alt:t}),r.a.createElement("span",null,t," "))}),X=(t(102),function(){return r.a.createElement("section",{className:"taskie-users-section"},r.a.createElement(E.a,null,r.a.createElement(h.a,null,r.a.createElement(v.a,{md:9,xs:11,className:"m-auto"},r.a.createElement(Q.a,{className:"taskie-users-section__card shadow"},r.a.createElement("h4",null," Featured Users "),r.a.createElement("div",null,S.map((function(e){return r.a.createElement(L,{image:e.image,name:e.name,key:e.name})}))))))))}),J=function(e){var a=e.mediaQuery;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{mediaQuery:a}),r.a.createElement(X,{mediaQuery:a}))},Y=t(12),V=function(e){var a=e.logout;return r.a.createElement(P.a,{className:"justify-content-end",activeKey:"/home"},r.a.createElement(P.a.Item,null,r.a.createElement("span",{className:"nav-link is-clickable",onClick:function(){return a()}},"Log out")))},H=function(e){var a=e.children,t=e.mediaQuery,n=e.logout;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:"mt-3 p-2",md:{span:"isDesktop"===t?9:12}},r.a.createElement(V,{logout:n}),a))},Z=(t(103),t(104),function(e){var a=e.task,t=(a.completed,a.description,a.title);return r.a.createElement(v.a,{md:12},r.a.createElement("div",{className:"task"},r.a.createElement("span",null,"img"),r.a.createElement("div",null,r.a.createElement("p",null," ",t))))}),W=[{title:"Clear the trash",id:1,completed:!1,description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},{title:"Write a song.",id:2,completed:!0,description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},{title:"Write a script.",id:3,completed:!1,description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}],_=function(){return r.a.createElement("section",{className:"task-list-section"},r.a.createElement(h.a,null,W.map((function(e){return r.a.createElement(Z,{task:e,key:e.id})}))))},$=(t(105),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dashboard-header-section"},r.a.createElement("h5",{className:"text-muted"}," All Tasks"),r.a.createElement("span",null," add Task")))}),ee=function(){return r.a.createElement("section",{className:"p-5"},r.a.createElement($,null),r.a.createElement(_,null))},ae=t(80);var te=function(e){return r.a.createElement("section",{style:{height:"400px"},className:" py-5 position-relative bg-white d-flex justify-content-center align-items-center"},r.a.createElement("div",null,r.a.createElement(ae.a,{animation:"border",variant:"primary"})))},ne=t(139),re=t(81),oe=t.n(re),se=(t(106),["(min-width: 1024px)","(min-width: 768px)","(min-width: 310px)"]),le=["isDesktop","isTab","isMobile"],ce={register:{title:"Get an account",buttonText:"Register"},login:{title:"Welcome back",buttonText:"Login"},"forgot-password":{title:"Recover your account",buttonText:"Send me a link"},"change-password":{title:"Set a new password",buttonText:"Reset"}},ie=["Total Tasks","Completed Tasks","Pending Tasks"],ue=function(e){var a=e.setShowModal,t=e.userData,n=t.firstName,o=t.lastName,s=t.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"profile-card"},r.a.createElement("div",null,r.a.createElement("img",{className:"profile-card__img",src:oe.a,alt:"User"}),r.a.createElement("div",{className:"text-center profile-card__profile-text"},r.a.createElement("span",null," ",n," ",o),r.a.createElement("span",{className:"text-muted"}," ",s," "),r.a.createElement("span",null," ",r.a.createElement(b.a,{onClick:function(){return a({show:!0,modalId:"EDIT_PROFILE",data:{user:t}})},variant:"link",className:" mt-2 btn-sm text-decoration-none"}," ","Edit profile")," "))),r.a.createElement("div",{className:"progress-section"},r.a.createElement("div",{className:"progress-section__bar"},r.a.createElement("span",null," Tasks Completed"),r.a.createElement(ne.a,{className:"profile-card__progress-bar",now:30})),r.a.createElement("div",{className:"stats-section"},ie.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("span",null," ",Math.ceil(50*Math.random())),r.a.createElement("span",null,e))})))),r.a.createElement("div",{className:"dashboard-cta-section"},r.a.createElement(b.a,{onClick:function(){return a({show:!0,modalId:"ADD_TASK",data:{}})},variant:"primary",className:"btn-block btn-sm"},"Add Task"))))},de=(t(107),function(e){var a=e.setShowModal,t=e.userData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:"sidebar shadow",md:3},r.a.createElement("div",{className:"sidebar-top-logo text-muted text-center"},"TASKIE"),r.a.createElement("div",{className:"sidebar__profile-seection"},r.a.createElement(ue,{userData:t,setShowModal:a}))))}),me=t(6),Ae=t.n(me),pe=t(11),ge=t(42),fe=Object(n.createContext)();function Ee(e){var a=e.children,t=function(){var e=Object(n.useState)(null),a=Object(Y.a)(e,2),t=a[0],r=a[1],o=function(){var e=Object(pe.a)(Ae.a.mark((function e(){var a;return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ge.a)("/auth/user","GET");case 2:if(!(a=e.sent)||!a.status){e.next=5;break}return e.abrupt("return",r(Object(l.a)({},a.data.user)));case 5:return e.abrupt("return",r(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(pe.a)(Ae.a.mark((function e(a){var t;return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ge.a)("/auth/register","POST",a);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),c=function(){var e=Object(pe.a)(Ae.a.mark((function e(a){var t,n;return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ge.a)("/auth/login","POST",a);case 2:if(!(t=e.sent)||!t.status){e.next=8;break}return n=t.data.token,localStorage.setItem("token",n),e.next=8,o();case 8:return e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){console.log("called"),o()}),[]),{user:t,register:s,login:c,logout:function(){return r(!1),localStorage.clear()}}}();return r.a.createElement(fe.Provider,{value:t},a)}var he=function(){return Object(n.useContext)(fe)};var ve,be=t(135),we=(t(126),function(e){var a=e.showModal,t=e.setShowModal,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(be.a,{className:"pb-4 custom-modal",show:a.show,onHide:function(){return t({show:!1})}},r.a.createElement(be.a.Body,null,n)))}),ye=t(8),ke=Object(n.lazy)((function(){return t.e(3).then(t.bind(null,141))})),qe=Object(n.lazy)((function(){return t.e(4).then(t.bind(null,140))})),Pe=(ve={},Object(ye.a)(ve,"ADD_TASK",(function(e,a){return r.a.createElement(ke,{setShowModal:e,data:a})})),Object(ye.a)(ve,"EDIT_PROFILE",(function(e,a){return r.a.createElement(qe,{setShowModal:e,data:a})})),ve);t(63).a.configure({autoClose:3e3,hideProgressBar:!0});var Ce,Ne=(Ce=function(e){var a=e.mediaQuery,t=Object(n.useState)({modalId:" ",show:!1,data:{}}),o=Object(Y.a)(t,2),s=o[0],l=o[1],c=he();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{fluid:!0},r.a.createElement(h.a,null,r.a.createElement(de,{setShowModal:l,userData:c.user}),r.a.createElement(H,{logout:c.logout,mediaQuery:a},s.show&&r.a.createElement(we,{showModal:s,setShowModal:l},r.a.createElement(n.Suspense,{fallback:r.a.createElement(te,null)},Pe[s.modalId](l,null===s||void 0===s?void 0:s.data))),r.a.createElement(ee,null)))))},function(e){var a=he();return Object(n.useEffect)((function(){!1===a.user&&A.replace("/user/login")}),[a]),a.user?r.a.createElement(Ce,e):r.a.createElement(te,null)}),je=t(44),Oe=t(85);var Te=function(e){var a=e.error,t=e.type,n=e.inputRef,o=Object(Oe.a)(e,["error","type","inputRef"]);return r.a.createElement(r.a.Fragment,null,e.label&&r.a.createElement(je.a.Label,null,e.label),r.a.createElement(je.a.Control,Object.assign({as:"textarea"===t?"textarea":"input",type:"textarea"===t?void 0:t,isInvalid:!!a||void 0,ref:n},o)),a&&r.a.createElement(je.a.Control.Feedback,{type:"invalid",className:"text-left"},a.message))},xe=t(65),Qe={register:"/user/login",login:"/dashboard","forgot-password":"#"},Me=function(){var e=Object(pe.a)(Ae.a.mark((function e(a,t,n,r,o,s){var l;return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),s(!1),e.next=4,n[a](t);case 4:if((l=e.sent)&&r(!1),!l.status){e.next=9;break}return s({type:"success",message:l.message}),e.abrupt("return",o.push(Qe[a]));case 9:return e.abrupt("return",s({type:"error",message:l.message}));case 10:case"end":return e.stop()}}),e)})));return function(a,t,n,r,o,s){return e.apply(this,arguments)}}(),Ie=t(84);var De=function(e){return r.a.createElement(Ie.a,{variant:"error"===e.type?"danger":"success"},e.message)},Be=function(e){var a=e.authType,t=e.authFormData,o=he();console.log(o);var s=g(),l=Object(n.useState)(!1),c=Object(Y.a)(l,2),i=c[0],u=c[1],d=Object(n.useState)(!1),m=Object(Y.a)(d,2),A=m[0],p=m[1],f=Object(xe.a)(),E=f.handleSubmit,w=f.register,y=f.errors,k=f.getValues;return r.a.createElement(r.a.Fragment,null,A&&r.a.createElement(De,{type:A.type,message:A.message}),r.a.createElement(je.a,{onSubmit:E((function(e){return Me(a,e,o,u,s,p)}))},["register"].includes(a)&&r.a.createElement(h.a,null,r.a.createElement(v.a,null,r.a.createElement(je.a.Group,{controlId:"First Name"},r.a.createElement(Te,{size:"md",name:"firstName",type:"text",placeholder:"Firstname",error:y.firstName,inputRef:w({required:"Your name is required"})}))),r.a.createElement(v.a,null,r.a.createElement(je.a.Group,{controlId:"Last Name"},r.a.createElement(Te,{size:"md",name:"lastName",type:"text",placeholder:"Lastname",error:y.lastName,inputRef:w({required:"Your name is required"})})))),["register","login","forgot-password"].includes(a)&&r.a.createElement(je.a.Group,{controlId:"Email"},r.a.createElement(Te,{size:"md",name:"email",type:"email",placeholder:"Email",error:y.email,inputRef:w({required:"Your email is required"})})),["register","login","change-password"].includes(a)&&r.a.createElement(je.a.Group,{controlId:"Password"},r.a.createElement(Te,{size:"md",name:"password",type:"password",placeholder:"Password",error:y.password,inputRef:w({required:"Please enter a password"})})),["register","change-password"].includes(a)&&r.a.createElement(je.a.Group,{controlId:"Confirm Password"},r.a.createElement(Te,{size:"md",name:"confirmPassword",type:"password",placeholder:"Confirm Password",error:y.confirmPassword,inputRef:w({required:"Please enter your password again",validate:function(e){return e===k().password||"This doesn't match your password"}})})),r.a.createElement(b.a,{variant:"primary",block:!0,size:"md",type:"submit",disabled:i,className:"mt-4"},!i&&r.a.createElement("span",null,null===t||void 0===t?void 0:t.buttonText),i&&r.a.createElement(ae.a,{animation:"border",size:"sm",role:"status","aria-hidden":!0,className:"align-baseline"},r.a.createElement("span",{className:"sr-only"},"Loading...")))))};t(127);var Ke=function(e){var a=e.authType;return r.a.createElement("div",{className:"AuthFooter text-center mt-4"},"register"===a&&r.a.createElement(r.a.Fragment,null,"Have an account already?",r.a.createElement(m.a,{to:"/user/login"},"Login")),"forgot-password"===a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{to:"/user/register"}," Get an account"),r.a.createElement(m.a,{to:"/user/login"},"Login ")),"login"===a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{to:"/user/register"}," Get an account"),r.a.createElement(m.a,{to:"/user/forgot-password"},"Forgot Password ? ")))},Ge=(t(128),function(e){var a,t=e.authType;return r.a.createElement("section",{className:"auth-section"},r.a.createElement(T,{logoColor:"white"}),r.a.createElement(E.a,null,r.a.createElement(Q.a,{className:" shadow auth-section__card"},r.a.createElement("h3",null," ",null===(a=ce[t])||void 0===a?void 0:a.title," "),r.a.createElement("div",null,r.a.createElement(Be,{authType:t,authFormData:ce[t]}),r.a.createElement(Ke,{authType:t})))))}),ze=function(){var e=g(),a=e.match.params.authType;return r.a.createElement(r.a.Fragment,null,["register","login","forgot-password"].includes(a)?r.a.createElement(Ge,{authType:a}):r.a.createElement(w,e))};var Fe=function(){var e=function(e,a,t){var r=e.map((function(e){return window.matchMedia(e)})),o=function(){var e=r.findIndex((function(e){return e.matches}));return"undefined"!==typeof a[e]?a[e]:t},s=Object(n.useState)(o),l=Object(Y.a)(s,2),c=l[0],i=l[1];return Object(n.useEffect)((function(){var e=function(){return i(o)};return r.forEach((function(a){return a.addListener(e)})),function(){return r.forEach((function(a){return a.removeListener(e)}))}}),[]),c}(se,le,"isDesktop");return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee,null,r.a.createElement(p,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",render:function(){return r.a.createElement(J,{mediaQuery:e})}}),r.a.createElement(c.a,{exact:!0,path:"/user/:authType",component:ze}),r.a.createElement(c.a,{path:"/dashboard",render:function(){return r.a.createElement(Ne,{mediaQuery:e})}}),r.a.createElement(c.a,{component:w}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(6),r=t.n(n),o=t(29),s=t(11),l=t(50),c=t.n(l);function i(e){return u.apply(this,arguments)}function u(){return(u=Object(s.a)(r.a.mark((function e(a){var t,n,s,l,i,u,d,m,A,p,g=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.length>1&&void 0!==g[1]?g[1]:"GET",n=g.length>2?g[2]:void 0,s=g.length>3?g[3]:void 0,l=localStorage.getItem("token"),i=c.a.CancelToken,u=i.source(),e.prev=6,e.next=9,c()({url:"".concat("https://taskkie.herokuapp.com/api").concat(a),method:t,headers:{token:l},params:Object(o.a)({},s),cancelToken:u.token,data:n});case 9:if(d=e.sent,m=d.data,A=m.status,p=m.message,!A){e.next=13;break}return e.abrupt("return",{status:!0,data:d.data.data,message:p});case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(6),e.abrupt("return",{status:!1,message:e.t0.response?e.t0.response.data.message:e.t0.message,err:e.t0});case 18:case"end":return e.stop()}}),e,null,[[6,15]])})))).apply(this,arguments)}},70:function(e,a,t){e.exports=t.p+"static/media/header-img.6180dce4.png"},71:function(e,a){e.exports="data:image/png;base64,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"},72:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACiFBMVEUAAAA3d/83d/83d/87dv84eP83d/83d/83d/84d/83d/9VVf82d/82eP83d/83d/8AAP83d/8zd/83dP83dv83d/83d/82ef83d/81e/8zev84d/83eP83dv84d/85e/83d/82d/83d/84eP82d/83d/8zgP82d/82dv83d/83d/83d/83dv83gP83dv83d/9Jbf80ev84d/82dv82d/83d/83eP83d/83d/83dv82dv83d/83d/83d/83d/83d/83dv83d/83df81eP84dv83d/83d/8rgP86dP9AgP83d/83d/83d/84d/83dv83eP84d/82d/83d/83dv84dv83d/83d/83d/83d/84d/84d/83eP81d/82d/83d/8zZv83d/84d/9AgP83d/82eP84d/83eP83d/84d/8udP82ef84dv84dv83d/82dP81dv84eP82d/83dv83d/83eP81eP83d/83d/83d/83d/85df83d/84d/89ef83eP82dv88eP83eP83dv82d/83d/81df83d/8wcP83d/83ef83d/84eP82d/83eP83dv83d/83d/83eP82dv87dv9AgP83eP83eP83d/83d/83d/82eP81d/84eP84dv82dv83d/84eP8zc/85cf82d/82df86df83d/84df83d/84d/85ef86c/82d/82d/84eP83d/84dv85eP83d/83d/8zd/83dv83d/83dv82eP83d/85eP84d/83d/83d/87dv84dv84dv83d/8AgP84eP83d/83d/82d/81df83eP83dv82dv83d/82eP82dv83d/83dv84d/84eP82eP83dv84eP83d/83d/8AAADurGYOAAAA1nRSTlMAgelYDWC98lyJmANHpPXaAd0eLozm9jnzHRly0aZJG/uW3yCNuQpat/z9v2EOte0HLIWIqfeip2/GUNX57vTwffolItPbsAYWDKuUPOE4YpzF6BwpT+ud2cppgiteugXBbQS2WXyR8aoLE05buCFDQJJUyEY1dP7UeD/vZRVmXxEzefjWGOMQrSrLoEuV4uS+sZsaCMJz0qzedT5EbmO0VxQJ6kwj7DKvpSgfei93mpdI5cwPqLtBhJ8kvOdrJ3tSwwKTg57cMIaZNH5CbMddTbNVxIDYEqyWKAAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkCgYUNBXjAqj5AAAEgUlEQVRYw62X+0MUVRTHDwJLtoDEQ0hhXUTM3ZCwhUUU3HQzWEGRJTGLh4EJS4Ea5RKFhqBFZpKUFVokJmX0JsvKsjCzl6ZW37+nc2d2l11nZp3Fvj/MzLlzz2fu49wz9xKpKmpWdGhBTKwh7jbSrdnA7UGmMT4hEcCcpAj8cUey30pJTWMbc4F0/f4ZTLhTPM+bnyl5Z5kWmJGt239hziIglxbftcTC3ta785ZyeT7uKQjjtuxem6xC4U+UiSJ7nPg4EovlFwbALu7LjaqAEgQk/I1WaGqFKmAlSstYPn/RAmBVmVIOIFYDUMjX+4DVayTbeT+wdp6yXk54AHvhgfIKMeGudUBlxICq2TwWaVi/gZ+rgY0RAzhma8Q4uWup2grHg7oB5ZvqfACK2fxQPrDlYZ6GR0gnoN42i79aOF1QKc+XpUEfoFGuHgRo2go4Hs2AZY0eQHMRzC3b1gYDKOax7fVU1boqWQ+A2pDhCQxisNor9HXhceAJVYCa1ADNbnQEATp37KyNDEC7YK31A56U1n/XUxEBngZ2y4CkbN+K80ZFAqBudAcWk/uZqp6oZ4Hn2OyN3ePX3ueJ+nq0APtEymNAcj8G9osC5wGUvUCUG5QFXqT9qzkrMsCmBCRb5UBiUB+bgy8dfBmoJjoUBLCR55W4TgE4rJKShmTAqxigvvgUNyyeOhzh8lqnX8NsvRYjdQE7lIA8GfA6DBWl8AJH6Q1us8Yg4qCyeGmiBHgTb3kWco0RanKIJF5w7HiInDJglUtJyJIAbwPxnndGeQIagHdFkIfKXC8BOHAVMkmAEw6k1Qsz3YEDYyqAZTKgQwkwnpTigNNY/5GGvAQzrO+xWdAT2oVTUhfGYRlWEnyhfNQif6tfPfFJAJ7c3ZoAev8D/otmnP6QtAGxHLjaAG63c6KcKBzgI+DjMIDwEgAO3NRbAnDgups1AYOffPrZfGd4AAfu5xqA9nVeKaFvdIUDcOCeVgdUzGHvL9x8mXSFAXDgzv1SFdABnOnkbiyRV4yp5Su/8r+mpLOHxnwAkzKtSIBjwDfC+LZiFFb+MXYFhfF3dAow+QDGczCoAXahv52fv7ce/sGL80Q/1kz69ZOJpi4Uu/wpbRG8OSqARpTQzxfPenGu6RckhBkDugTsUwEMYeuEaO74JRrAmXAA3gINqAA2o3XsQr/w7zXjV14Ylb+FaGQqABgBflcCVgB/0IkGnodsaV9ac+MG7c8AYNiC7UqAMRPW87ySFqeKUSe67A7dol1pn/4vNOJkkzIOBnkXVzfawdc0jf9jAPAXcFUllOu75bZ25dBNAJ44tKkAqDm6eMsV+6YkCg8Y29ZiRpFRBXAzCcDUzoutopm5NDPA0HopVio30AwBrNJr129Me5EAJpf3Kl9EALis+uJWNln/F6C0TI80Dxwl0C31I0/g0GWzAwb5KStRcoiz24KlceiaVvk48vk2dv2adOb7e4+LIlQ2zAuO2zPEx1f+MxGpNytdOufyik5NmYG30L/sXdR2tXmG7kTRZYbYGJ11/wNIkA48s6dMcgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMC0wNlQyMDo1MjoyMSswMDowMEr0gEsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTAtMDZUMjA6NTI6MjErMDA6MDA7qTj3AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},75:function(e,a,t){e.exports=t.p+"static/media/goldin.06a9a1fc.png"},76:function(e,a,t){e.exports=t.p+"static/media/emilyz.9fcf69e5.jpg"},77:function(e,a,t){e.exports=t.p+"static/media/james.098fdb4a.jpg"},78:function(e,a,t){e.exports=t.p+"static/media/mike.aab414f7.jpg"},79:function(e,a,t){e.exports=t.p+"static/media/julian.ef14dda0.jpeg"},81:function(e,a){e.exports="data:image/png;base64,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"},86:function(e,a,t){e.exports=t(129)},91:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.21361212.chunk.js.map