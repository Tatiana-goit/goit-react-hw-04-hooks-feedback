(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,function(e,t,c){e.exports={list:"Statistics_list__1EKio",item:"Statistics_item__2dTct",text:"Statistics_text__psSzh"}},,,,function(e,t,c){e.exports={section:"Section_section__3brtz",title:"Section_title__1HkiJ"}},,function(e,t,c){e.exports={button:"FeedbackOptions_button__2EED1"}},,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(6),i=c.n(s),r=(c(12),c(3)),o=(c(13),c(5)),l=c.n(o),j=c(0);function b(e){var t=e.title,c=e.children;return Object(j.jsxs)("div",{className:l.a.section,children:[Object(j.jsx)("h1",{className:l.a.title,children:t}),c]})}var u=c(7),d=c.n(u);function x(e){var t=e.options,c=e.onLeaveFeedback;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)("button",{className:d.a.button,type:"button",name:e,onClick:c,children:e},e)}))})})}function O(e){var t=e.message;return Object(j.jsx)("p",{children:t})}var h=c(1),m=c.n(h);function f(e){var t=e.good,c=e.neutral,n=e.bad,a=e.total,s=e.positivePercentage;return Object(j.jsx)(j.Fragment,{children:a?Object(j.jsxs)("ul",{className:m.a.list,children:[Object(j.jsxs)("li",{className:m.a.item,children:[Object(j.jsx)("span",{className:m.a.text,children:"Good: "})," ",t]}),Object(j.jsxs)("li",{className:m.a.item,children:[Object(j.jsx)("span",{className:m.a.text,children:"Neutral: "}),c]}),Object(j.jsxs)("li",{className:m.a.item,children:[Object(j.jsx)("span",{className:m.a.text,children:"Bad: "}),n]}),Object(j.jsxs)("li",{className:m.a.item,children:[Object(j.jsx)("span",{className:m.a.text,children:"Total: "}),a]}),Object(j.jsxs)("li",{className:m.a.item,children:[Object(j.jsx)("span",{className:m.a.text,children:"Positive percentage: "}),s," %"]})]}):Object(j.jsx)(O,{message:"No feedback given"})})}var p=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(r.a)(s,2),o=i[0],l=i[1],u=Object(n.useState)(0),d=Object(r.a)(u,2),O=d[0],h=d[1],m={good:c,neutral:o,bad:O},p=Object.keys(m),v=function(){return c+o+O};return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{title:"Please leave feedback",children:Object(j.jsx)(x,{options:p,onLeaveFeedback:function(e){var t=e.target.name;switch(t){case"good":return a((function(e){return e+1}));case"neutral":return l((function(e){return e+1}));case"bad":return h((function(e){return e+1}));default:return t}}})}),Object(j.jsx)(b,{title:"Statistics",children:Object(j.jsx)(f,{good:c,neutral:o,bad:O,total:v(),positivePercentage:function(){var e=v();return(100*c/e).toFixed(0)}()})})]})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.a607e696.chunk.js.map