(this.webpackJsonptest_activewizards=this.webpackJsonptest_activewizards||[]).push([[0],{38:function(e,t,a){e.exports=a(64)},48:function(e,t,a){},57:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),c=a.n(s),u=a(13),l=a(7),o=a(15),i=a(33),m=a(10),d=a(24),E=a.n(d),v=a(37),_=a(8),f=Object(o.c)({students:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_STUDENTS_SUCCESS":return t.students;case"DELETE_STUDENT":return e.filter((function(e){return e._id!==t.id}));case"ADD_NEW_STUDENT":return[{name:t.name,email:t.email,isActive:t.isActive,course:t.course,_id:t.id}].concat(Object(m.a)(e));default:return e}},courses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_COURSES_SUCCESS":return t.courses;case"ADD_NEW_COURSE":return[{course:t.course,course_id:t.id}].concat(Object(m.a)(e));case"DELETE_COURSE":return e.filter((function(e){return e.course_id!==t.id}));default:return e}},queryCourse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_QUERY_COURSE"===t.type?t.queryCourse:e},queryStudent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_QUERY_STUDENT"===t.type?t.queryStudent:e},isActiveForm:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"FORM_IS_ACTIVE"===t.type?!e:e},isActiveFormCourses:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"FORM_COURSES_IS_ACTIVE"===t.type?!e:e}}),h=Object(o.d)(f,Object(o.a)(i.a)),p=a(14),g=(a(48),function(){return r.a.createElement("section",{className:"main__text"},r.a.createElement("h2",null,"Welcome!"),r.a.createElement("article",null,r.a.createElement("p",{className:"main__paragraph"},'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." "\u041d\u0435\u0442 \u043d\u0438\u043a\u043e\u0433\u043e, \u043a\u0442\u043e \u043b\u044e\u0431\u0438\u043b \u0431\u044b \u0431\u043e\u043b\u044c \u0441\u0430\u043c\u0443 \u043f\u043e \u0441\u0435\u0431\u0435, \u043a\u0442\u043e \u0438\u0441\u043a\u0430\u043b \u0431\u044b \u0435\u0451 \u0438 \u043a\u0442\u043e \u0445\u043e\u0442\u0435\u043b \u0431\u044b \u0438\u043c\u0435\u0442\u044c \u0435\u0451 \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u044d\u0442\u043e \u0431\u043e\u043b\u044c.." Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et felis suscipit, faucibus ante id, laoreet tortor. Aliquam eu nisi tincidunt lorem eleifend ultricies. Suspendisse interdum maximus sollicitudin. Aenean sit amet lacus magna. Curabitur cursus maximus neque, at dignissim erat luctus a. Morbi cursus sem magna, non pellentesque magna rhoncus eu. Mauris nec felis vel neque auctor pretium ut sit amet augue.'),r.a.createElement("p",{className:"main__paragraph"},"Ut id lorem vitae nunc aliquam lacinia. Ut libero risus, lobortis vel vulputate vulputate, feugiat quis dolor. Pellentesque a mollis libero. Duis non fringilla sapien, quis congue sem. Quisque eget ante ultricies, volutpat est a, placerat lorem. Morbi pulvinar massa quis nisi aliquam egestas. Cras consequat felis ut egestas sodales. Nulla consectetur, eros non porta rhoncus, nisi leo dapibus tellus, at vulputate massa est quis felis.")))}),b=a(16),C=a.n(b),S=a(65),N=a(36),O=function(e){return e.students},w=function(e){return e.courses},y=function(e){return e.queryCourse},A=function(e){return e.queryStudent},L=function(e){return e.students},j=function(e){return e.courses},q=function(e){return e.isActiveForm},U=function(e){return e.isActiveFormCourses},D={handleDeleteCourse:function(e){return{type:"DELETE_COURSE",id:e}}},T=Object(l.b)((function(e){return{courses:j(e)}}),D)((function(e){var t=e.id,a=e.name,n=e.code,s=e.handleDeleteCourse;return r.a.createElement("div",{className:"table__row"},r.a.createElement("div",{className:"table__ceil"},a),r.a.createElement("div",{className:"table__ceil"},n),r.a.createElement("div",{className:"table__ceil"},r.a.createElement("button",{className:"table__button",onClick:function(){return s(t)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#000000",viewBox:"0 0 24 24",width:"24px",height:"24px"},r.a.createElement("path",{d:"M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"})))))})),x=function(e){var t=e.courses;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(T,{name:e.course,code:e.course_id.replace(/_/,""),key:e.course_id,id:e.course_id})})))},R=(a(57),{setQuery:function(e){return{type:"CHANGE_QUERY_COURSE",queryCourse:e}},setIsActiveCoursesForm:function(){return{type:"FORM_COURSES_IS_ACTIVE"}},setNewCourse:function(e,t){return{type:"ADD_NEW_COURSE",course:e,id:t}}}),F=Object(l.b)((function(e){return{queryCourse:y(e),courses:e.courses,isActiveFormCourses:U(e)}}),R)((function(e){var t=e.courses,a=e.setQuery,s=e.queryCourse,c=e.setNewCourse,u=e.setIsActiveCoursesForm,l=e.isActiveFormCourses,o=(e.setHasErrorCourse,e.hasErrorCourse,Object(n.useState)("")),i=Object(_.a)(o,2),d=i[0],E=i[1],v=Object(n.useState)(""),f=Object(_.a)(v,2),h=f[0],g=f[1],b=Object(n.useState)(""),O=Object(_.a)(b,2),w=O[0],y=O[1],A=Object(p.g)(),L=Object(p.f)(),j=C()(a,1e3),q=C()((function(){L.push({search:D.toString()})}),1e3),U=s?t.filter((function(e){return e.course.toLowerCase().includes(s.toLowerCase())})):t,D=new URLSearchParams(A.search),T="",R=D.get("sort");T=R?"number"===typeof t[0][R]||"boolean"===typeof t[0][R]?Object(m.a)(U).sort((function(e,t){return(e[R]-t[R])*("asc"===D.get("orderOfSorting")?1:-1)})):Object(m.a)(U).sort((function(e,t){return e[R].localeCompare(t[R])*("asc"===D.get("orderOfSorting")?1:-1)})):U;return r.a.createElement("section",{className:"courses"},r.a.createElement("div",{className:"table"},r.a.createElement(S.a,{className:"query"},r.a.createElement(S.a.Row,null,r.a.createElement(N.a,null,r.a.createElement(S.a.Control,{className:"query__input",placeholder:"Search...",type:"text",value:d,onChange:function(e){j(e.target.value),E(e.target.value),D.set("query",e.target.value.trim().toLowerCase()),q()}})))),r.a.createElement("div",{className:"courses__add"},l?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"students__activation_form",onClick:u},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24","fill-rule":"evenodd","clip-rule":"evenodd"},r.a.createElement("path",{d:"M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm-6.5 10h13v1h-13v-1z"}))),r.a.createElement(S.a,{className:"students__form",onSubmit:function(e){e.preventDefault(),h&&w&&c(h,w)}},r.a.createElement(S.a.Row,null,r.a.createElement(N.a,null,r.a.createElement(S.a.Control,{type:"text",onChange:function(e){return g(e.target.value)},value:h,placeholder:"Write Name"})),r.a.createElement(N.a,null,r.a.createElement(S.a.Control,{type:"text",onChange:function(e){return y(e.target.value)},value:w,placeholder:"Write Code"})),r.a.createElement(N.a,null,r.a.createElement(S.a.Control,{type:"submit"}))))):r.a.createElement("button",{className:"students__activation_form students__button",onClick:u},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24","fill-rule":"evenodd","clip-rule":"evenodd"},r.a.createElement("path",{d:"M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"})))),r.a.createElement("div",{className:"table__row"},r.a.createElement("div",{className:"table__ceil sort",onClick:function(){return e="course",D.set("sort",e),D.get("sort")===e&&"asc"===D.get("orderOfSorting")?D.set("orderOfSorting","desc"):D.set("orderOfSorting","asc"),void L.push({search:D.toString()});var e}},"COURSE"),r.a.createElement("div",{className:"table__ceil"},"CODE"),r.a.createElement("div",{className:"table__ceil"},"ACTION")),r.a.createElement(x,{courses:T})))})),k={deleteStu:function(e){return{type:"DELETE_STUDENT",id:e}}},I=Object(l.b)((function(e){return{students:L(e)}}),k)((function(e){var t=e.id,a=e.name,n=e.email,s=e.status,c=e.course,u=e.deleteStu;return r.a.createElement("div",{className:"table__row"},r.a.createElement("div",{className:"table__ceil"},a),r.a.createElement("div",{className:"table__ceil"},n),r.a.createElement("div",{className:"table__ceil"},s?"Active":"Inactive"),r.a.createElement("div",{className:"table__ceil"},c),r.a.createElement("div",{className:"table__ceil"},r.a.createElement("button",{className:"table__button",onClick:function(){u(t)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#000000",viewBox:"0 0 24 24",width:"24px",height:"24px"},r.a.createElement("path",{d:"M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"})))))})),z=(a(61),function(e){var t=e.students;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(I,{name:e.name,email:e.email,status:e.isActive,course:e.course,id:e._id,key:e._id})})))}),M=(a(62),{setQuery:function(e){return{type:"CHANGE_QUERY_STUDENT",queryStudent:e}},setNewStudent:function(e,t,a,n){return{type:"ADD_NEW_STUDENT",name:e,email:t,isActive:a,course:n,id:"_"+Math.random().toString(36).substr(2,9)}},setIsActiveForm:function(){return{type:"FORM_IS_ACTIVE"}}}),W=Object(l.b)((function(e){return{queryStudent:A(e),students:e.students,isActiveForm:q(e)}}),M)((function(e){var t=e.students,a=e.queryStudent,s=e.setQuery,c=e.setNewStudent,u=e.isActiveForm,l=e.setIsActiveForm,o=Object(n.useState)(""),i=Object(_.a)(o,2),d=i[0],E=i[1],v=Object(n.useState)(""),f=Object(_.a)(v,2),h=f[0],g=f[1],b=Object(n.useState)(""),O=Object(_.a)(b,2),w=O[0],y=O[1],A=Object(n.useState)(""),L=Object(_.a)(A,2),j=L[0],q=L[1],U=Object(n.useState)(""),D=Object(_.a)(U,2),T=D[0],x=D[1],R=Object(p.g)(),F=Object(p.f)(),k=C()(s,1e3),I=a?t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})):t,M=new URLSearchParams(R.search),W="",Q=M.get("sort");W=Q?"number"===typeof t[0][Q]||"boolean"===typeof t[0][Q]?Object(m.a)(I).sort((function(e,t){return(e[Q]-t[Q])*("asc"===M.get("orderOfSorting")?1:-1)})):Object(m.a)(I).sort((function(e,t){return e[Q].localeCompare(t[Q])*("asc"===M.get("orderOfSorting")?1:-1)})):I;var H=C()((function(){F.push({search:M.toString()})}),1e3),G=function(e){M.set("sort",e),M.get("sort")===e&&"asc"===M.get("orderOfSorting")?M.set("orderOfSorting","desc"):M.set("orderOfSorting","asc"),F.push({search:M.toString()})};return r.a.createElement("section",{className:"students"},r.a.createElement("div",{className:"table"},r.a.createElement(S.a,{className:"students__query query"},r.a.createElement(S.a.Row,null,r.a.createElement(N.a,null,r.a.createElement(S.a.Control,{className:"query__input",placeholder:"Search...",type:"text",value:d,onChange:function(e){k(e.target.value),E(e.target.value),M.set("query",e.target.value.trim().toLowerCase()),H()}})))),r.a.createElement("div",{className:"add"},u?r.a.createElement("div",{className:"students__form_container"},r.a.createElement("button",{className:"students__activation_form",onClick:l},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24","fill-rule":"evenodd","clip-rule":"evenodd"},r.a.createElement("path",{d:"M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm-6.5 10h13v1h-13v-1z"}))),r.a.createElement(S.a,{className:"students__form",onSubmit:function(e){e.preventDefault(),h&&w&&j&&T&&c(h,w,j,T)}},r.a.createElement(S.a.Row,null,r.a.createElement(N.a,null,r.a.createElement(S.a.Control,{type:"text",onChange:function(e){return g(e.target.value)},value:h,placeholder:"Write Name"})),r.a.createElement(N.a,null,r.a.createElement(S.a.Control,{type:"email",onChange:function(e){return y(e.target.value)},placeholder:"Write Email",value:w})),r.a.createElement(N.a,null,r.a.createElement(S.a.Control,{onChange:function(e){return q(e.target.value)},value:j,type:"text",placeholder:"Write Status"})),r.a.createElement(N.a,null,r.a.createElement(S.a.Control,{onChange:function(e){return x(e.target.value)},value:T,type:"text",placeholder:"Write Course"})),r.a.createElement(N.a,null,r.a.createElement(S.a.Control,{type:"submit"}))))):r.a.createElement("button",{className:"students__activation_form students__button",onClick:l},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24","fill-rule":"evenodd","clip-rule":"evenodd"},r.a.createElement("path",{d:"M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"})))),r.a.createElement("div",{className:"table__row table__head"},r.a.createElement("div",{onClick:function(){return G("name")},className:"table__ceil sort"},"NAME"),r.a.createElement("div",{onClick:function(){return G("email")},className:"table__ceil sort"},"EMAIL"),r.a.createElement("div",{onClick:function(){return G("isActive")},className:"table__ceil sort"},"STATUS"),r.a.createElement("div",{onClick:function(){return G("course")},className:"table__ceil sort"},"COURSE"),r.a.createElement("div",{className:"table__ceil"},"ACTION")),r.a.createElement(z,{students:W})))})),Q=a(66);a(63);var H={loadStudentsAndCourses:function(){return function(e){var t,a,n,r;return E.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,E.a.awrap(Promise.all([fetch("https://api.myjson.com/bins/lhxgm").then((function(e){return e.json()})).catch((function(){return"Something wrong"})),fetch("https://api.myjson.com/bins/1gocva").then((function(e){return e.json()})).catch((function(){return"Something wrong"}))]));case 2:t=s.sent,a=Object(_.a)(t,2),n=a[0],r=a[1],e({type:"LOAD_STUDENTS_SUCCESS",students:n.map((function(e){return Object(v.a)({},e,{course:r.find((function(t){return t.course_id===e.course__id})).course,name:"".concat(e.name.first," ").concat(e.name.last," ")})}))}),e({type:"LOAD_COURSES_SUCCESS",courses:r});case 8:case"end":return s.stop()}}))}}},G=Object(l.b)((function(e){return{students:O(e),courses:w(e)}}),H)((function(e){var t=e.loadStudentsAndCourses,a=e.students,s=e.courses;return Object(n.useEffect)((function(){t()}),[]),r.a.createElement("section",{className:"body"},r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:"nav__list"},r.a.createElement("li",{className:"nav__item"},r.a.createElement(u.b,{to:"/",className:"nav__link"},r.a.createElement(Q.a,{variant:"light"},"Home"))),r.a.createElement("li",{className:"nav__item"},r.a.createElement(u.b,{to:"/courses",className:"nav__link",courses:s},r.a.createElement(Q.a,{variant:"light"},"Courses"))),r.a.createElement("li",{className:"nav__item"},r.a.createElement(u.b,{to:"/students",className:"nav__link"},r.a.createElement(Q.a,{variant:"light"},"Students"))))),r.a.createElement("main",{className:"main"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/"},r.a.createElement(g,null)),r.a.createElement(p.a,{path:"/courses"},r.a.createElement(F,{courses:s})),r.a.createElement(p.a,{path:"/students"},r.a.createElement(W,{students:a})))))}));c.a.render(r.a.createElement(l.a,{store:h},r.a.createElement(u.a,{basename:"/path"},r.a.createElement(G,null))),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.76471b35.chunk.js.map