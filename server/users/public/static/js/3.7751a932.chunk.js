(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[3],{141:function(e,t,a){"use strict";a.r(t);var r=a(12),n=a(0),s=a.n(n),l=a(83),i=a(134),c=a(80),o=a(65),u=a(6),m=a.n(u),d=a(29),b=a(11),p=a(63),f=function(e){e.status?p.a.success(e.message):p.a.error(e.message)},h=a(42),v=function(e){return Object(h.a)("/task/create","POST",e)},k=function(e){return Object(h.a)("/task","PATCH",e)},E=function(){var e=Object(b.a)(m.a.mark((function e(t,a){var r,n,s,l,i,c=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=c.length>2&&void 0!==c[2]?c[2]:{},n=c.length>3?c[3]:void 0,s=c.length>4?c[4]:void 0,n(!0),l=Object(d.a)(Object(d.a)({},r),t),!a){e.next=11;break}return e.next=8,k(l);case 8:e.t0=e.sent,e.next=14;break;case 11:return e.next=13,v(l);case 13:e.t0=e.sent;case 14:if((i=e.t0)&&n(!1),i&&f(i),!i.status){e.next=19;break}return e.abrupt("return",s({show:!1}));case 19:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();t.default=function(e){var t=e.setShowModal,a=e.data,u=Object(o.a)(),m=u.register,d=u.handleSubmit,b=u.errors,p=Object(n.useState)(!1),f=Object(r.a)(p,2),h=f[0],v=f[1],k=a.editTask,g=void 0!==k&&k,x=a.taskData,O=void 0===x?{}:x;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h5",{className:"text-center mb-3"}," ",g?"Edit Task":"Add Task "),s.a.createElement("form",{onSubmit:d((function(e){return E(e,g,O,v,t)}))},s.a.createElement(l.a,null,s.a.createElement("label",{className:b.title?"error-label":"label",htmlFor:"Title "},"Title"),s.a.createElement("input",{ref:m({required:!0}),className:"form-control",type:"text",name:"title",defaultValue:null===O||void 0===O?void 0:O.title})),s.a.createElement(l.a,null,s.a.createElement("label",{className:b.description?"error-label":"label",htmlFor:"Description"},b.message?"Description is required":"Description"),s.a.createElement("textarea",{ref:m({required:!0}),rows:"10",className:"form-control",name:"description",defaultValue:null===O||void 0===O?void 0:O.description})),s.a.createElement(i.a,{variant:"primary",block:!0,size:"md",type:"submit",disabled:h,className:"mt-4"},!h&&s.a.createElement("span",null,"Add task"),h&&s.a.createElement(c.a,{animation:"border",size:"sm",role:"status","aria-hidden":!0,className:"align-baseline"},s.a.createElement("span",{className:"sr-only"},"Loading...")))))}}}]);
//# sourceMappingURL=3.7751a932.chunk.js.map