(this["webpackJsonprick-morty"]=this["webpackJsonprick-morty"]||[]).push([[0],{61:function(e,c,t){},62:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t.n(s),n=t(15),i=t.n(n),r=t(9),o=t(14),l=t(4),j=t(21),d=t(11),u=t(10),m=t.n(u),h=t(1);function Q(e){var c=e.char;return Object(h.jsxs)(r.b,{to:"/chars/".concat(c.id),className:"SmallCard",children:[Object(h.jsx)("img",{src:c.image,alt:"Avatar"}),Object(h.jsxs)("div",{className:"textField",children:[Object(h.jsxs)("h3",{children:[c.name,Object(h.jsxs)("span",{className:"id",children:["(",c.id,")"]})]}),Object(h.jsx)("p",{className:"characteristics",children:"\u0421\u0442\u0430\u0442\u0443\u0441:"}),Object(h.jsxs)("div",{className:"statusField",children:[Object(h.jsx)("span",{className:c.status}),Object(h.jsx)("p",{children:c.status})]})]}),Object(h.jsx)("div",{className:"card"+c.status})]},c.id)}function b(){var e=Object(s.useState)([]),c=Object(d.a)(e,2),t=c[0],n=c[1],i=a.a.useState(1),r=Object(d.a)(i,2),o=r[0],l=r[1],u=Object(s.useState)(!1),b=Object(d.a)(u,2),O=b[0],N=b[1];function x(){var e=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,c=document.documentElement&&document.documentElement.scrollHeight||document.body.scrollHeight;e+window.innerHeight+150>=c&&N(!0)}function A(){m.a.get("https://rickandmortyapi.com/api/character/?page="+o).then((function(e){n([].concat(Object(j.a)(t),Object(j.a)(e.data.results)))})).catch((function(e){alert(e.message)})).then((function(){l((function(e){return e+1}))}))}return Object(s.useEffect)((function(){m.a.get("https://rickandmortyapi.com/api/character/").then((function(e){n(e.data.results),l((function(e){return e+1}))})).catch((function(e){alert(e.message)}))}),[]),Object(s.useEffect)((function(){return O?new Promise((function(e){var c=0;setTimeout((function(){var t;for(t=0;t<10;t++)c++;A(),N(!1),e(c)}),1e3)})):(window.addEventListener("scroll",x),function(){return window.removeEventListener("scroll",x)})}),[O,A]),console.log("Loaded Characters:",t.length),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"Nav",children:[Object(h.jsx)("img",{className:"Logo",alt:"logo"}),Object(h.jsxs)("h1",{children:["\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0435\u0439 \u0441\u0435\u0440\u0438\u0430\u043b\u0430 ",Object(h.jsx)("br",{}),"Rick and Morty"]}),Object(h.jsxs)("h2",{children:["\u041a\u043e\u0434 \u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430:",Object(h.jsx)("a",{href:"https://github.com/cat-in-a-box/rick-morty",target:"_blank",children:" GitHub"})]})]}),Object(h.jsx)("div",{className:"CharacterListContainer",children:t.map((function(e){return Object(h.jsx)(Q,{char:e},e.id)}))}),Object(h.jsx)("div",{className:"loader"}),Object(h.jsx)("h3",{className:"loaderText",children:"\u041f\u043e\u0434\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0435\u0439..."})]})}var O=t(22);function N(e){var c=Object(s.useState)([]),t=Object(d.a)(c,2),a=t[0],n=t[1],i=function(e,c){return[-(c-window.innerHeight/2)/20,(e-window.innerWidth/2)/15,1.04]},o=Object(O.b)({xys:[0,0,1],config:{mass:5,tension:400,friction:20}}),l=Object(d.a)(o,2),j=l[0],u=l[1];function Q(){document.getElementById("Card").style.visibility="hidden"}function b(){document.getElementById("Card").style.visibility="visible"}return Object(s.useEffect)((function(){m.a.get("https://rickandmortyapi.com/api/character/".concat(e.match.params.id)).then((function(e){n(e.data),console.log("Response:",e)})).catch((function(e){console.log(e.message)})),setTimeout(b,400)}),[e.match.params.id]),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"Nav",children:Object(h.jsx)(r.b,{to:"/",children:"\u041d\u0430\u0437\u0430\u0434 \u043a \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430\u043c"})}),Object(h.jsxs)("div",{className:"CardControlsContainer",children:[Object(h.jsx)("input",{className:"PreviousPage",onClick:function(){Q(),m.a.get("https://rickandmortyapi.com/api/character/"+(a.id-1)).then((function(e){n(e.data),console.log("Response:",e)})).catch((function(e){console.log(e.message)})),setTimeout(b,400)},type:"image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAllBMVEUAAABCQkJDQ0NDQ0NBQUFDQ0NCQkJDQ0NDQ0JCQkJDQ0JDQ0NDQ0NCQkJDQ0NDQ0NCQkJDQ0NDQ0NDQ0NDQ0NCQkJCQkJDQ0NDQ0NCQkJDQ0NDQ0NDQ0JDQ0JDQ0JDQ0JCQkJDQ0NCQkJDQ0NDQ0JDQ0NDQ0NDQ0NDQ0NCQkJCQkJDQ0NDQ0JCQkJDQ0JDQ0NDQ0NDQ0P3MPCkAAAAMXRSTlMABdn0PccP+agJGMu1V+zVFOjQrsIwJt6TcL1PSCEcm2CgQuR674V1azkrmDWLf2XhmT1LVwAABPRJREFUaN6tmud6okAUhgdQAekgiIIUG3Yz939zu/vsMwVhmuT9FY34MacfEiCNtqhmXnfO63t+7rzZLtTA77JIL0kQGZDCjAK3eyx+S+HWuAfI4LDdpNMVKm9rQj7OZTdJIn2eoARGe/1aYm+ZUBbX++4ULVTC3avH09mAqtwVfVPocAwz0p3Vah4cxu8guqgc4z70rW5diutu8T8D7d2jfN/joZQrfZhrAPucEm83kt9aVVrR52EkA6D5uMG4WQImYfmZR0cZjXP/ENYDCMie/eNYwlqjtT1HW1I2rnIfUqxCgYbV+7R0Iu+SXqEJuRr0Z/23UtAHtEoleQ43A0qEtdxZckg4A2UuVFgmrJa2oXKvAF/woOpEzbCqSXrRDHzFziEq3WgckjBcZ1/36RVRGQvNLTnHbcI0MCe3uuA4JHqACSxJKLeD2mDgLN+DSexIkSmZxtqAiexNbDAb0HikvYHJbMYrsr1Gb+uL6SKaiysTXV/fWFs5QfjZkFMH0XtvTueCK8dtaMSfSmyLQhOL2KuBi7UYvfUWX+4GUhGGvYJuu0TvBEKvVys4BzJg36MpCTeCRjjHrCGcqyWLY/9PUYMUGz6eAWVFSHb/LyANevkEfI4Qyos0/e6XoOkn47u8hSoiWoDS+5+9whNq6vzquoVKIqSX3/45U6oypjpUFJmZVF4cUXJWPJf7UFVEW1MWQskZAzYvE6qKEF/7IXFJy3Z53RsrZUUa4pQb+tHjupwQzAY8lqMt0sQNskQu2bGyXIdC/LriOOUFNqRVjlKcoAzrkQEIDS4WuPP9voGSRMOzWNiLLi8VtVphxdYGMYnv30HBJXC5mAcrvHSwZk/xaQxlYNVXHFMHEDGLSinhcm4CzZC72CIbqEjMEvHZIoU/VeSKRQ5Mc2WBmsiWbS6SlgNCS0mkYzs+5q1fTxWRjBXCa7Dl9sWLKa2RM2YCCAM8DzmM0eYgqTEfjjot+mocqTpj+szmUhrJSLVfISNh75zQp0TuN/QBceuNFT4dl4IU716Sz43m2gBGszNQOyQ/5tzJUb3Hk+0tBZqD3cNmtlYWIX43lsQYfsid5tVFAuqCvdRMb99VRVKUYh3tH0swbiuKvOhmhnM+WgoceVISQfkVLXpb5BHweQQKImV/a7wh48WilXPpyovgFC7Q0IpfC7BrWZH0c33zcJfWJDb0WOUgxAcLnczDQrxEU4lf8rTgJd6xCbZQhPZAQhwa9Q43nYJ+eDY4ipFNV6Dtn9A9w5fzvepOavRG1w7+osEK1sPhGFuxmKqRYbP4H4XqauLfTHSLTcb0C9OOMF5O0nDZIyVYBIzpRhEL8iI1NcgS8PVZbKTBKh9viHF2XyYIpZEL/3yip4CLeONf2cznuRijUdfYrylbMC0eOvQKaCtqdCbE/HDyoKJVnJmKxC2BhMOVa1VaxaxD6ag601usL/Bo2Bvif45y9bIJelelUlFICLql8IrGgTTOwB/iHe5Up7zjZOePNcmSCxjvc7sKjuVy9AyzzjFhD6OTLtZb+ImfbMo0pL7/Vr7bH/iJrhKRLwOO4Mdumz/Pee0646vkXa203iyozGoPVPHmahI/Fw2oo71jBYlX+G13KLZyEnETggk8npH4P4n2NphIuL8HJkvAXFtFBX4FLWusIPpU8nV3c7PBb6ItsqLLayv5i9XmRy8NpaPpD217X/kOXOIkAAAAAElFTkSuQmCC",alt:"Previous"}),Object(h.jsx)("div",{className:"CardLoader",id:"CardLoader"}),Object(h.jsxs)(O.a.div,{className:"Card",id:"Card",onMouseMove:function(e){var c=e.clientX,t=e.clientY;return u({xys:i(c,t)})},onMouseLeave:function(){return u({xys:[0,0,1]})},style:{transform:j.xys.interpolate((function(e,c,t){return"perspective(3000px) rotateX(".concat(e,"deg) rotateY(").concat(c,"deg) scale(").concat(t,")")}))},children:[Object(h.jsx)("h3",{children:a.name}),Object(h.jsx)("img",{src:a.image,alt:"profile pic"}),Object(h.jsx)("p",{className:"characteristics",children:"\u0421\u0442\u0430\u0442\u0443\u0441:"}),Object(h.jsxs)("div",{className:"statusField",children:[Object(h.jsx)("span",{className:a.status}),Object(h.jsx)("p",{children:a.status})]}),Object(h.jsxs)("div",{className:"textField",children:[Object(h.jsx)("p",{className:"characteristics",children:"\u0412\u0438\u0434:"}),Object(h.jsx)("p",{children:a.species})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"characteristics",children:"\u041f\u043e\u043b:"}),Object(h.jsx)("p",{children:a.gender})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"characteristics",children:"\u041f\u0440\u043e\u0438\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435:"}),Object(h.jsx)("p",{children:a.origin&&a.origin.name})]})]}),Object(h.jsx)("input",{className:"NextPage",onClick:function(){Q(),m.a.get("https://rickandmortyapi.com/api/character/"+(a.id+1)).then((function(e){n(e.data),console.log("Response:",e)})).catch((function(e){console.log(e.message)})),setTimeout(b,400)},type:"image",src:"data:image/png;base64,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",alt:"Next"})]})]})}function x(){return Object(s.useEffect)((function(){var e=document.getElementById("DarkModeCheckbox");e.addEventListener("change",(function(){document.querySelector("#theme-link").getAttribute("href")==="".concat("","/css/light-theme.css")?document.querySelector("#theme-link").href="".concat("","/css/dark-theme.css"):document.querySelector("#theme-link").href="".concat("","/css/light-theme.css")}))}),[]),Object(h.jsxs)("div",{className:"dark-mode-switch",children:[Object(h.jsx)("input",{type:"checkbox",id:"DarkModeCheckbox"}),Object(h.jsxs)("div",{className:"button",children:[Object(h.jsxs)("svg",{className:"power-off",children:[Object(h.jsx)("use",{xlinkHref:"#line",className:"line"}),Object(h.jsx)("use",{xlinkHref:"#circle",className:"circle"})]}),Object(h.jsxs)("svg",{className:"power-on",children:[Object(h.jsx)("use",{xlinkHref:"#line",className:"line"}),Object(h.jsx)("use",{xlinkHref:"#circle",className:"circle"})]})]}),Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("symbol",{xmlns:"http://www.w3.org/2000/svg",id:"line",children:Object(h.jsx)("line",{x1:"75",y1:"34",x2:"75",y2:"58"})}),Object(h.jsx)("symbol",{xmlns:"http://www.w3.org/2000/svg",id:"circle",children:Object(h.jsx)("circle",{cx:"75",cy:"80",r:"35"})})]})]})}function A(e){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(x,{}),Object(h.jsx)(l.a,Object(o.a)(Object(o.a)({path:"/",exact:!0},e),{},{component:b})),Object(h.jsx)(l.a,Object(o.a)(Object(o.a)({path:"/chars/:id"},e),{},{component:N}))]})}t(61);i.a.render(Object(h.jsx)(r.a,{children:Object(h.jsx)(A,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.d4370504.chunk.js.map