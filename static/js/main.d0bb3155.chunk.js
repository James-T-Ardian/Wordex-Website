(this.webpackJsonpreact_test=this.webpackJsonpreact_test||[]).push([[0],{33:function(e,t,n){},54:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(26),i=n.n(c),a=n(16),r=(n(33),n(1)),o=function(e){var t=Object(s.useState)(""),c=Object(a.a)(t,2),i=c[0],o=c[1],d=Object(s.useState)([]),l=Object(a.a)(d,2),j=l[0],b=l[1],h=n(35).default,x={method:"GET",url:"https://wordsapiv1.p.rapidapi.com/words/".concat(i,"/").concat(e.find),headers:{"x-rapidapi-host":"wordsapiv1.p.rapidapi.com","x-rapidapi-key":"431e73a192mshbff3f86d258d896p1f264fjsn24fb037e3c5a"}};return Object(s.useEffect)((function(){b([])}),[e.find]),Object(r.jsxs)("div",{className:"interface-container",children:[Object(r.jsx)("div",{className:"find-description",children:e.find[0].toUpperCase()+e.find.slice(1)}),Object(r.jsxs)("div",{className:"bar-button-container",children:[Object(r.jsx)("input",{className:"input-bar",type:"text",value:i,onChange:function(e){o(e.target.value)}}),Object(r.jsx)("button",{className:"input-button",onClick:function(){var t=["Error: no ".concat(e.find).toUpperCase()];h.request(x).then((function(n){"rhymes"===e.find?b(void 0==n.data[e.find].all||n.data[e.find].all.length<=0?t:n.data[e.find].all):b(void 0==n.data[e.find]||n.data[e.find].length<=0?t:n.data[e.find])})).catch((function(){b(t)}))},disabled:0==i.length,children:"Enter"})]}),Object(r.jsx)("ul",{children:j.map((function(e){return Object(r.jsxs)("li",{children:[" ",e," "]},e)}))})]})},d=(n(54),n(8)),l=function(){return Object(r.jsx)("div",{className:"navbar",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{className:"logo",children:Object(r.jsx)(d.b,{style:{color:"inherit",textDecoration:"inherit"},to:"/Wordex-Website",children:"W"})}),Object(r.jsx)("li",{className:"links",children:Object(r.jsx)(d.b,{style:{color:"inherit",textDecoration:"inherit"},to:"/Wordex-Website/synonyms",children:"Synonyms"})}),Object(r.jsx)("li",{className:"links",children:Object(r.jsx)(d.b,{style:{color:"inherit",textDecoration:"inherit"},to:"/Wordex-Website/antonyms",children:"Antonyms"})}),Object(r.jsx)("li",{className:"links",children:Object(r.jsx)(d.b,{style:{color:"inherit",textDecoration:"inherit"},to:"/Wordex-Website/rhymes",children:"Rhymes"})}),Object(r.jsx)("li",{className:"links",children:Object(r.jsx)(d.b,{style:{color:"inherit",textDecoration:"inherit"},to:"/Wordex-Website/examples",children:"Examples"})})]})})},j=(n(60),function(){return Object(r.jsxs)("div",{className:"web-title",children:[Object(r.jsx)("span",{className:"bottom-w",children:"W"}),"ord",Object(r.jsx)("span",{className:"ex",children:"ex"})]})}),b=(n(61),function(){return Object(r.jsx)("div",{className:"home",children:"A place to deeper your knowledge of words"})}),h=n(2),x=(n(62),function(){return Object(r.jsxs)(d.a,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(j,{}),Object(r.jsxs)(h.c,{children:[Object(r.jsx)(h.a,{exact:!0,path:"/Wordex-Website",children:Object(r.jsx)(b,{})}),Object(r.jsx)(h.a,{path:"/Wordex-Website/synonyms",children:Object(r.jsx)(o,{find:"synonyms"})}),Object(r.jsx)(h.a,{path:"/Wordex-Website/antonyms",children:Object(r.jsx)(o,{find:"antonyms"})}),Object(r.jsx)(h.a,{path:"/Wordex-Website/rhymes",children:Object(r.jsx)(o,{find:"rhymes"})}),Object(r.jsx)(h.a,{path:"/Wordex-Website/examples",children:Object(r.jsx)(o,{find:"examples"})})]})]})});i.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.d0bb3155.chunk.js.map