(this.webpackJsonptest_activewizards=this.webpackJsonptest_activewizards||[]).push([[0],{38:function(e,t,a){e.exports=a(64)},48:function(e,t,a){},57:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),c=a.n(s),l=a(13),u=a(8),o=a(15),i=a(33),m=a(10),d=a(23),v=a.n(d),E=a(37),_=a(6),f=Object(o.c)({students:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_STUDENTS_SUCCESS":return t.students;case"DELETE_STUDENT":return e.filter((function(e){return e._id!==t.id}));case"ADD_NEW_STUDENT":return[{name:t.name,email:t.email,isActive:t.isActive,course:t.course,_id:t.id}].concat(Object(m.a)(e));default:return e}},courses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_COURSES_SUCCESS":return t.courses;case"ADD_NEW_COURSE":return[{course:t.course,course_id:t.id}].concat(Object(m.a)(e));case"DELETE_COURSE":return e.filter((function(e){return e.course_id!==t.id}));default:return e}},queryCourse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_QUERY_COURSE"===t.type?t.queryCourse:e},queryStudent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"CHANGE_QUERY_STUDENT"===t.type?t.queryStudent:e},isActiveForm:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"FORM_IS_ACTIVE"===t.type?!e:e},isActiveFormCourses:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"FORM_COURSES_IS_ACTIVE"===t.type?!e:e}}),g={},h=localStorage.getItem("reduxState");h&&(g=JSON.parse(h));var p=Object(o.d)(f,g,Object(o.a)(i.a));p.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(p.getState()))}));var S=a(14),b=(a(48),function(){return r.a.createElement("section",{className:"main__text"},r.a.createElement("h2",null,"Welcome!"),r.a.createElement("article",null,r.a.createElement("p",{className:"main__paragraph"},'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." "\u041d\u0435\u0442 \u043d\u0438\u043a\u043e\u0433\u043e, \u043a\u0442\u043e \u043b\u044e\u0431\u0438\u043b \u0431\u044b \u0431\u043e\u043b\u044c \u0441\u0430\u043c\u0443 \u043f\u043e \u0441\u0435\u0431\u0435, \u043a\u0442\u043e \u0438\u0441\u043a\u0430\u043b \u0431\u044b \u0435\u0451 \u0438 \u043a\u0442\u043e \u0445\u043e\u0442\u0435\u043b \u0431\u044b \u0438\u043c\u0435\u0442\u044c \u0435\u0451 \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u044d\u0442\u043e \u0431\u043e\u043b\u044c.." Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et felis suscipit, faucibus ante id, laoreet tortor. Aliquam eu nisi tincidunt lorem eleifend ultricies. Suspendisse interdum maximus sollicitudin. Aenean sit amet lacus magna. Curabitur cursus maximus neque, at dignissim erat luctus a. Morbi cursus sem magna, non pellentesque magna rhoncus eu. Mauris nec felis vel neque auctor pretium ut sit amet augue.'),r.a.createElement("p",{className:"main__paragraph"},"Ut id lorem vitae nunc aliquam lacinia. Ut libero risus, lobortis vel vulputate vulputate, feugiat quis dolor. Pellentesque a mollis libero. Duis non fringilla sapien, quis congue sem. Quisque eget ante ultricies, volutpat est a, placerat lorem. Morbi pulvinar massa quis nisi aliquam egestas. Cras consequat felis ut egestas sodales. Nulla consectetur, eros non porta rhoncus, nisi leo dapibus tellus, at vulputate massa est quis felis.")))}),C=a(16),N=a.n(C),y=a(65),O=a(36),w=function(e){return e.students},A=function(e){return e.courses},L=function(e){return e.queryCourse},q=function(e){return e.queryStudent},j=function(e){return e.students},U=function(e){return e.courses},x=function(e){return e.isActiveForm},D=function(e){return e.isActiveFormCourses},R={handleDeleteCourse:function(e){return{type:"DELETE_COURSE",id:e}}},T=Object(u.b)((function(e){return{courses:U(e)}}),R)((function(e){var t=e.id,a=e.name,n=e.code,s=e.handleDeleteCourse;return r.a.createElement("div",{className:"table__row"},r.a.createElement("div",{className:"table__ceil"},a),r.a.createElement("div",{className:"table__ceil"},n),r.a.createElement("div",{className:"table__ceil"},r.a.createElement("button",{className:"table__button",onClick:function(){return s(t)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#000000",viewBox:"0 0 24 24",width:"24px",height:"24px"},r.a.createElement("path",{d:"M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"})))))})),I=function(e){var t=e.courses;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(T,{name:e.course,code:e.course_id.replace(/_/,""),key:e.course_id,id:e.course_id})})))},F=(a(57),function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),r=Object(_.a)(a,2),s=r[0],c=r[1];return[s,function(t){try{var a=t instanceof Function?t(s):t;c(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}),k={setQuery:function(e){return{type:"CHANGE_QUERY_COURSE",queryCourse:e}},setIsActiveCoursesForm:function(){return{type:"FORM_COURSES_IS_ACTIVE"}},setNewCourse:function(e,t){return{type:"ADD_NEW_COURSE",course:e,id:t}}},z=Object(u.b)((function(e){return{queryCourse:L(e),courses:e.courses,isActiveFormCourses:D(e)}}),k)((function(e){var t=e.courses,a=e.setQuery,n=e.queryCourse,s=e.setNewCourse,c=e.setIsActiveCoursesForm,l=e.isActiveFormCourses,u=F("inputQuery",""),o=Object(_.a)(u,2),i=o[0],d=o[1],v=F("nameValue",""),E=Object(_.a)(v,2),f=E[0],g=E[1],h=F("codeValue",""),p=Object(_.a)(h,2),b=p[0],C=p[1],w=Object(S.g)(),A=Object(S.f)(),L=N()(a,1e3),q=N()((function(){A.push({search:U.toString()})}),1e3),j=n?t.filter((function(e){return e.course.toLowerCase().includes(n.toLowerCase())})):t,U=new URLSearchParams(w.search),x="",D=U.get("sort");x=D?"number"===typeof t[0][D]||"boolean"===typeof t[0][D]?Object(m.a)(j).sort((function(e,t){return(e[D]-t[D])*("asc"===U.get("orderOfSorting")?1:-1)})):Object(m.a)(j).sort((function(e,t){return e[D].localeCompare(t[D])*("asc"===U.get("orderOfSorting")?1:-1)})):j;return r.a.createElement("section",{className:"courses"},r.a.createElement("div",{className:"table"},r.a.createElement(y.a,{className:"query courses__query"},r.a.createElement(y.a.Row,null,r.a.createElement(O.a,null,r.a.createElement(y.a.Control,{className:"query__input",placeholder:"Search...",type:"text",value:i,onChange:function(e){L(e.target.value),d(e.target.value),U.set("query",e.target.value.trim().toLowerCase()),q()}})))),r.a.createElement("div",{className:"add courses__add"},l?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"students__activation_form",onClick:c},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fillRule:"evenodd",clipRule:"evenodd"},r.a.createElement("path",{d:"M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm-6.5 10h13v1h-13v-1z"}))),r.a.createElement(y.a,{className:"courses__form",onSubmit:function(e){e.preventDefault(),f&&b&&s(f,b)}},r.a.createElement(y.a.Row,null,r.a.createElement(O.a,null,r.a.createElement(y.a.Control,{type:"text",onChange:function(e){return g(e.target.value)},value:f,placeholder:"Write Name"})),r.a.createElement(O.a,null,r.a.createElement(y.a.Control,{type:"text",onChange:function(e){return C(e.target.value)},value:b,placeholder:"Write Code"})),r.a.createElement(O.a,null,r.a.createElement(y.a.Control,{type:"submit"}))))):r.a.createElement("button",{className:"students__activation_form students__button",onClick:c},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fillRule:"evenodd",clipRule:"evenodd"},r.a.createElement("path",{d:"M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"})))),r.a.createElement("div",{className:"table__row"},r.a.createElement("div",{className:"table__ceil sort",onClick:function(){return e="course",U.set("sort",e),U.get("sort")===e&&"asc"===U.get("orderOfSorting")?U.set("orderOfSorting","desc"):U.set("orderOfSorting","asc"),void A.push({search:U.toString()});var e}},"COURSE"),r.a.createElement("div",{className:"table__ceil"},"CODE"),r.a.createElement("div",{className:"table__ceil"},"ACTION")),r.a.createElement(I,{courses:x})))})),M=function(e){var t=e.id,a=e.name,n=e.email,s=e.status,c=e.course,l=e.deleteStu;return r.a.createElement("div",{className:"table__row"},r.a.createElement("div",{className:"table__ceil"},a),r.a.createElement("div",{className:"table__ceil"},n),r.a.createElement("div",{className:"table__ceil"},s?"Active":"Inactive"),r.a.createElement("div",{className:"table__ceil"},c),r.a.createElement("div",{className:"table__ceil"},r.a.createElement("button",{className:"table__button",onClick:function(){l(t)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#000000",viewBox:"0 0 24 24",width:"24px",height:"24px"},r.a.createElement("path",{d:"M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"})))))},Q={deleteStu:function(e){return{type:"DELETE_STUDENT",id:e}}};M.defaultProps={status:null,course:null,deleteStu:null};var W=Object(u.b)((function(e){return{students:j(e)}}),Q)(M),V=(a(61),function(e){var t=e.students;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(W,{name:e.name,email:e.email,status:e.isActive,course:e.course,id:e._id,key:e._id})})))}),J=(a(62),function(e){var t=e.students,a=e.queryStudent,n=e.setQuery,s=e.setNewStudent,c=e.isActiveForm,l=e.setIsActiveForm,u=F("inputQue",""),o=Object(_.a)(u,2),i=o[0],d=o[1],v=F("nameValueStudent",""),E=Object(_.a)(v,2),f=E[0],g=E[1],h=F("emailValue",""),p=Object(_.a)(h,2),b=p[0],C=p[1],w=F("statusValue",""),A=Object(_.a)(w,2),L=A[0],q=A[1],j=F("courseValue",""),U=Object(_.a)(j,2),x=U[0],D=U[1],R=Object(S.g)(),T=Object(S.f)(),I=N()(n,1e3),k=a?t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})):t,z=new URLSearchParams(R.search),M="",Q=z.get("sort");M=Q?"number"===typeof t[0][Q]||"boolean"===typeof t[0][Q]?Object(m.a)(k).sort((function(e,t){return(e[Q]-t[Q])*("asc"===z.get("orderOfSorting")?1:-1)})):Object(m.a)(k).sort((function(e,t){return e[Q].localeCompare(t[Q])*("asc"===z.get("orderOfSorting")?1:-1)})):k;var W=N()((function(){T.push({search:z.toString()})}),1e3),J=function(e){z.set("sort",e),z.get("sort")===e&&"asc"===z.get("orderOfSorting")?z.set("orderOfSorting","desc"):z.set("orderOfSorting","asc"),T.push({search:z.toString()})};return r.a.createElement("section",{className:"students"},r.a.createElement("div",{className:"table"},r.a.createElement(y.a,{className:"students__query query"},r.a.createElement(y.a.Row,null,r.a.createElement(O.a,null,r.a.createElement(y.a.Control,{className:"query__input",placeholder:"Search...",type:"text",value:i,onChange:function(e){I(e.target.value),d(e.target.value),z.set("query",e.target.value.trim().toLowerCase()),W()}})))),r.a.createElement("div",{className:"add"},c?r.a.createElement("div",{className:"students__form_container"},r.a.createElement("button",{className:"students__activation_form",onClick:l},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24","fill-rule":"evenodd","clip-rule":"evenodd"},r.a.createElement("path",{d:"M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm-6.5 10h13v1h-13v-1z"}))),r.a.createElement(y.a,{className:"students__form",onSubmit:function(e){e.preventDefault(),f&&b&&L&&x&&s(f,b,L,x)}},r.a.createElement(y.a.Row,null,r.a.createElement(O.a,null,r.a.createElement(y.a.Control,{type:"text",onChange:function(e){return g(e.target.value)},value:f,placeholder:"Write Name"})),r.a.createElement(O.a,null,r.a.createElement(y.a.Control,{type:"email",onChange:function(e){return C(e.target.value)},placeholder:"Write Email",value:b})),r.a.createElement(O.a,null,r.a.createElement(y.a.Control,{onChange:function(e){return q(e.target.value)},value:L,type:"text",placeholder:"Write Status"})),r.a.createElement(O.a,null,r.a.createElement(y.a.Control,{onChange:function(e){return D(e.target.value)},value:x,type:"text",placeholder:"Write Course"})),r.a.createElement(O.a,null,r.a.createElement(y.a.Control,{type:"submit"}))))):r.a.createElement("button",{className:"students__activation_form students__button",onClick:l},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24","fill-rule":"evenodd","clip-rule":"evenodd"},r.a.createElement("path",{d:"M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"})))),r.a.createElement("div",{className:"table__row table__head"},r.a.createElement("div",{onClick:function(){return J("name")},className:"table__ceil sort"},"NAME"),r.a.createElement("div",{onClick:function(){return J("email")},className:"table__ceil sort"},"EMAIL"),r.a.createElement("div",{onClick:function(){return J("isActive")},className:"table__ceil sort"},"STATUS"),r.a.createElement("div",{onClick:function(){return J("course")},className:"table__ceil sort"},"COURSE"),r.a.createElement("div",{className:"table__ceil"},"ACTION")),r.a.createElement(V,{students:M})))}),P={setQuery:function(e){return{type:"CHANGE_QUERY_STUDENT",queryStudent:e}},setNewStudent:function(e,t,a,n){return{type:"ADD_NEW_STUDENT",name:e,email:t,isActive:a,course:n,id:"_"+Math.random().toString(36).substr(2,9)}},setIsActiveForm:function(){return{type:"FORM_IS_ACTIVE"}}};J.defaultProps={queryStudent:null,setQuery:null,setNewStudent:null,isActiveForm:null,setIsActiveForm:null};var H=Object(u.b)((function(e){return{queryStudent:q(e),students:e.students,isActiveForm:x(e)}}),P)(J),G=a(66);a(63);var Y={loadStudentsAndCourses:function(){return function(e){var t,a,n,r;return v.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,v.a.awrap(Promise.all([fetch("https://api.myjson.com/bins/lhxgm").then((function(e){return e.json()})).catch((function(){return"Something wrong"})),fetch("https://api.myjson.com/bins/1gocva").then((function(e){return e.json()})).catch((function(){return"Something wrong"}))]));case 2:t=s.sent,a=Object(_.a)(t,2),n=a[0],r=a[1],e({type:"LOAD_STUDENTS_SUCCESS",students:n.map((function(e){return Object(E.a)({},e,{course:r.find((function(t){return t.course_id===e.course__id})).course,name:"".concat(e.name.first," ").concat(e.name.last," ")})}))}),e({type:"LOAD_COURSES_SUCCESS",courses:r});case 8:case"end":return s.stop()}}))}}},B=Object(u.b)((function(e){return{students:w(e),courses:A(e)}}),Y)((function(e){var t=e.loadStudentsAndCourses,a=e.students,s=e.courses;return Object(n.useEffect)((function(){localStorage.getItem("reduxState")?localStorage.getItem("reduxState"):t()}),[]),r.a.createElement("section",{className:"body"},r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",{className:"nav__list"},r.a.createElement("li",{className:"nav__item"},r.a.createElement(l.b,{to:"/",className:"nav__link"},r.a.createElement(G.a,{variant:"light"},"Home"))),r.a.createElement("li",{className:"nav__item"},r.a.createElement(l.b,{to:"/courses",className:"nav__link",courses:s},r.a.createElement(G.a,{variant:"light"},"Courses"))),r.a.createElement("li",{className:"nav__item"},r.a.createElement(l.b,{to:"/students",className:"nav__link"},r.a.createElement(G.a,{variant:"light"},"Students"))))),r.a.createElement("main",{className:"main"},r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/"},r.a.createElement(b,null)),r.a.createElement(S.a,{path:"/courses"},r.a.createElement(z,{courses:s})),r.a.createElement(S.a,{path:"/students"},r.a.createElement(H,{students:a})))))}));c.a.render(r.a.createElement(u.a,{store:p},r.a.createElement(l.a,{basename:"/path"},r.a.createElement(B,null))),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.93edbf5e.chunk.js.map