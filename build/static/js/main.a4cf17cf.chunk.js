(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),o=n(15),a=n.n(o),i=n(3),u=n(4),l=function(e){var t=e.filter,n=e.handleFilterChange;return Object(r.jsxs)("div",{children:["filter shown with ",Object(r.jsx)("input",{value:t,onChange:n})]})},d=function(e){return Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:e.name,onChange:e.handleName})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:e.number,onChange:e.handleNumber})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",onClick:e.add,children:"add"})})]})},s=function(e){var t=e.persons,n=e.filter,c=e.remove,o=e.setPersons;return t.map((function(e){return""===n||e.name.toLowerCase().includes(n.toLowerCase())?Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:[e.name," ",e.number]},e.name),Object(r.jsx)("button",{onClick:function(){var n;window.confirm("Delete ".concat(e.name,"?"))&&(n=e.id,c(n),o(t.filter((function(e){return e.id!==n?e:null}))))},children:"Delete"},"".concat(e.name,"button"))]},"".concat(e.name,"row")):null}))},b={color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},j={color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},f=function(e){var t=e.message;return null===t.text?null:t.error?Object(r.jsx)("div",{style:b,children:t.text}):Object(r.jsx)("div",{style:j,children:t.text})},h=n(5),m=n.n(h),O="/api/persons",x=function(){return m.a.get(O).then((function(e){return e.data}))},v=function(e){return m.a.post(O,e).then((function(e){return e.data}))},p=function(e){return m.a.delete("".concat(O,"/").concat(e)).then((function(e){return e}))},g=function(e,t){return m.a.put("".concat(O,"/").concat(e),t).then((function(e){return e.data}))},w=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(""),b=Object(u.a)(a,2),j=b[0],h=b[1],m=Object(c.useState)(""),O=Object(u.a)(m,2),w=O[0],y=O[1],C=Object(c.useState)(""),S=Object(u.a)(C,2),k=S[0],N=S[1],D=Object(c.useState)({text:null,error:!1}),B=Object(u.a)(D,2),P=B[0],R=B[1];Object(c.useEffect)((function(){x().then((function(e){o(e)})).catch((function(e){R({text:e,error:!0})}))}),[]);var T=function(e,t){g(t,e).then((function(e){o(n.map((function(n){return n.id!==t?n:e}))),R({text:"Replaced ".concat(e.name),error:!1}),setTimeout((function(){R(Object(i.a)(Object(i.a)({},P),{},{text:null}))}),1e3)})).catch((function(r){o(n.filter((function(e){return e.id!==t}))),R({text:"Information about ".concat(e.name," has already been removed from server"),error:!0})}))};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(f,{message:P}),Object(r.jsx)(l,{filter:k,handleFilterChange:function(e){N(e.target.value)}}),Object(r.jsx)("h2",{children:"add a new"}),Object(r.jsx)(d,{add:function(e){e.preventDefault();var t={name:j,number:w},r=0;n.some((function(e){return r=e.id,e.name===j}))?window.confirm("".concat(j," is already added to phonebook, replace the old number with a new one?"))&&T(t,r):v(t).then((function(e){o(n.concat(e)),R({text:"Added ".concat(j),error:!1}),setTimeout((function(){R(Object(i.a)(Object(i.a)({},P),{},{text:null}))}),1e3)})).catch((function(e){R({text:e,error:!0})})),h(""),y("")},handleName:function(e){h(e.target.value)},handleNumber:function(e){y(e.target.value)},name:j,number:w}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(s,{persons:n,filter:k,remove:function(e){p(e).then((function(){R({text:"Deleted",error:!1}),setTimeout((function(){R(Object(i.a)(Object(i.a)({},P),{},{text:null}))}),1e3)})).catch((function(e){R({text:e,error:!0})}))},setPersons:o})]})};a.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.a4cf17cf.chunk.js.map