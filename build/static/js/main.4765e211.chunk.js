(this["webpackJsonpcase-stone"]=this["webpackJsonpcase-stone"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),o=n.n(s),i=(n(40),n(41),n(12)),r=n(2),l=n(5),u=n.n(l),j=n(10),d=n(3),h=(n(43),n(0)),b=function(e){e.match;var t=Object(r.g)().id,n=(Object(r.f)(),Object(a.useState)()),c=Object(d.a)(n,2),s=c[0],o=c[1],i=Object(a.useState)(),l=Object(d.a)(i,2),b=l[0],p=l[1],m=Object(a.useState)(),O=Object(d.a)(m,2),f=O[0],x=O[1];function v(){return(v=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b!=f){e.next=10;break}return e.next=3,fetch("https://case-marvel.herokuapp.com/cadastro",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:s,password:b,confirmacao:f})});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,window.alert(n),e.next=11;break;case 10:window.alert("senhas nao conferem");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:"telaCadastro",children:[Object(h.jsxs)("h1",{children:["Cadastre -se ",t," "]}),Object(h.jsxs)("div",{className:"entradasCadastro",children:[Object(h.jsx)("input",{onInput:function(e){!function(e){o(e.target.value)}(e)},placeholder:"Usuario"}),Object(h.jsx)("input",{onInput:function(e){!function(e){p(e.target.value)}(e)},placeholder:"Digite uma senha"}),Object(h.jsx)("input",{onInput:function(e){!function(e){x(e.target.value)}(e)},placeholder:"Digite a senha novamente"}),Object(h.jsx)("button",{onClick:function(){!function(){v.apply(this,arguments)}()},children:" Cadastrar "})]})]})},p=(n(53),function(){var e=Object(r.f)(),t=Object(a.useState)(),n=Object(d.a)(t,2),c=(n[0],n[1],Object(a.useState)()),s=Object(d.a)(c,2),o=s[0],l=s[1],b=Object(a.useState)(),p=Object(d.a)(b,2),m=p[0],O=p[1];function f(){return(f=Object(j.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://case-marvel.herokuapp.com/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:o,password:m})});case 2:return n=t.sent,t.next=5,n.json();case 5:null==(a=t.sent)?window.alert("nao possui cadastro"):e.push("/telaDoUsuario/".concat(a.id));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:"telaLogin",children:[Object(h.jsx)("h1",{children:"Fa\xe7a o seu login"}),Object(h.jsxs)("div",{className:"entradasLogin",children:[Object(h.jsx)("input",{onInput:function(e){!function(e){l(e.target.value)}(e)},placeholder:"Usuario"}),Object(h.jsx)("input",{onInput:function(e){!function(e){O(e.target.value)}(e)},placeholder:"Senha"}),Object(h.jsx)("button",{onClick:function(){!function(){f.apply(this,arguments)}()},children:" Entrar "}),Object(h.jsx)(i.b,{className:"botao-cadastro",to:"/cadastro",children:" Cadastrar"})]})]})}),m=(n(54),n(14)),O=n.n(m),f=n.p+"static/media/marvel.d488ed61.jpeg",x=n(15),v=n.n(x),g=n(16),N=n.n(g),C="1ea11679ab11b65382e9487268b363a7",y=Number(new Date),k=N()(y+"1f2e853ae3b37850fddf90a55e205e48ee6a0faa"+C),S=function(e){e.match;var t,n=Object(a.useState)([]),s=Object(d.a)(n,2),o=s[0],i=s[1],l=Object(a.useState)(),b=Object(d.a)(l,2),p=b[0],m=b[1],x=Object(a.useState)(),g=Object(d.a)(x,2),N=g[0],S=g[1],w=Object(a.useState)(),I=Object(d.a)(w,2),D=I[0],T=I[1],A=Object(a.useState)("card-heroi"),E=Object(d.a)(A,2),F=E[0],J=E[1],P=Object(r.g)().id;O.a.setAppElement("#root");var U=c.a.useState(!1),q=Object(d.a)(U,2),M=q[0],L=q[1];function R(){L(!1)}Object(a.useEffect)((function(){v.a.get("".concat("http://gateway.marvel.com/v1/public/characters?","ts=").concat(y,"&apikey=").concat(C,"&hash=").concat(k)).then((function(e){i(e.data.data.results),console.log(o)})).catch((function(e){console.log(e)}))}),[]);var B=function(){var e=Object(j.a)(u.a.mark((function e(t,n,a,c,s){var o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://case-marvel.herokuapp.com/adicionarFavorito",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userId:P,numberId:t,name:n,imagem:a,descricao:c,extensao:s})});case 2:return o=e.sent,e.next=5,o.json();case 5:i=e.sent,console.log(i);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,c,s){return e.apply(this,arguments)}}(),V=function(){var e=[];o.map((function(t){return e.push(Object(h.jsxs)("div",{className:F,children:[Object(h.jsx)("span",{onClick:function(){z()},className:"nome-heroi",children:t.name}),Object(h.jsx)("img",{onClick:function(){G(t.name,t.thumbnail.path,t.thumbnail.extension,t.description)},src:"".concat(t.thumbnail.path,".").concat(t.thumbnail.extension),alt:""}),Object(h.jsx)("button",{onClick:function(){B(t.id,t.name,t.thumbnail.path,t.description,t.thumbnail.extension)},children:" Favoritos "})]}))})),S(e)},z=function(){console.log(F),J("card-ampliado"),V()},G=function(e,t,n,a){L(!0),T(Object(h.jsxs)("div",{className:"modal",children:[Object(h.jsx)("img",{className:"modal-img",src:"".concat(t,".").concat(n),alt:""}),Object(h.jsxs)("div",{className:" nome-descricao",children:[Object(h.jsx)("span",{className:"nome-heroi",children:e}),Object(h.jsx)("span",{children:a}),Object(h.jsx)("button",{onClick:R,children:"close"})]})]}))},H=Object(r.f)();return Object(h.jsxs)("div",{className:"tela-inteira",children:[Object(h.jsxs)("header",{className:"menu",children:[Object(h.jsx)("span",{children:"inicio"}),Object(h.jsx)("img",{src:f,alt:""}),Object(h.jsx)("span",{onClick:function(){!function(e){H.push("/favoritos/".concat(e))}(P)},children:"Meus Favoritos"})]}),Object(h.jsxs)("div",{className:"telaUsuario",children:[Object(h.jsxs)("h1",{children:["Bem Vindo!! ",P]}),Object(h.jsxs)("div",{className:"pesquisa",children:[Object(h.jsx)("h2",{children:"Digite aqui sua Comic"}),Object(h.jsx)("input",{onInput:function(e){!function(e){m(e.target.value),console.log(p)}(e)},type:"text",placeholder:"Digite sua Comic"}),Object(h.jsx)("button",{onClick:function(e){o.map((function(e){if(p==e.name)return S(Object(h.jsxs)("div",{className:"card-heroi",children:[Object(h.jsx)("span",{className:"nome-heroi",children:e.name}),Object(h.jsx)("img",{onClick:function(){G(e.name,e.imagem,e.extensao,e.descricao)},src:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),alt:""}),Object(h.jsx)("button",{onClick:function(){B(e.id,e.name,e.thumbnail.path,e.description,e.thumbnail.extension)},children:" Favoritos "})]}))}))},children:" Pesquisar "}),Object(h.jsx)("button",{onClick:function(e){V()},children:" Mostrar todos os herois "})]}),Object(h.jsx)("div",{className:"tela-cards",children:N}),Object(h.jsx)("div",{children:Object(h.jsxs)(O.a,{isOpen:M,onAfterOpen:function(){t.style.color="#f00"},onRequestClose:R,style:{content:{width:"50%",height:"50%",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},contentLabel:"Example Modal",children:[Object(h.jsx)("h2",{ref:function(e){return t=e},children:"Caracteristicas"}),Object(h.jsx)("div",{children:D})]})})]})]})},w=(n(84),"1ea11679ab11b65382e9487268b363a7"),I=Number(new Date),D=N()(I+"1f2e853ae3b37850fddf90a55e205e48ee6a0faa"+w),T=function(e){e.match;var t,n=Object(a.useState)([]),s=Object(d.a)(n,2),o=(s[0],s[1]),i=Object(a.useState)(),l=Object(d.a)(i,2),b=(l[0],l[1],Object(a.useState)([])),p=Object(d.a)(b,2),m=p[0],f=p[1],x=Object(a.useState)(),g=Object(d.a)(x,2),N=g[0],C=g[1],y=Object(r.g)().id,k=Object(r.f)();O.a.setAppElement("#root");var S=c.a.useState(!1),T=Object(d.a)(S,2),A=T[0],E=T[1];function F(){E(!1)}Object(a.useEffect)((function(){v.a.get("".concat("http://gateway.marvel.com/v1/public/characters?","ts=").concat(I,"&apikey=").concat(w,"&hash=").concat(D)).then((function(e){o(e.data.data.results)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)(Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://case-marvel.herokuapp.com/mostrarFavoritos",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userId:y})});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,f(n);case 7:case"end":return e.stop()}}),e)}))),[]);var J=function(e,t,n,a){E(!0),C(Object(h.jsxs)("div",{className:"modal",children:[Object(h.jsx)("img",{className:"modal-img",src:"".concat(t,".").concat(n),alt:""}),Object(h.jsxs)("div",{className:" nome-descricao",children:[Object(h.jsx)("span",{className:"nome-heroi",children:e}),Object(h.jsx)("span",{children:a}),Object(h.jsx)("button",{onClick:F,children:"close"})]})]}))},P=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/deletarFavorito",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userId:y,numberId:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,f(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"tela-inteira",children:[Object(h.jsxs)("header",{className:"menu",children:[Object(h.jsx)("span",{children:"Meus Dados"}),Object(h.jsx)("span",{onClick:function(){k.push("/telaDoUsuario/".concat(y))},children:"Pesquisar Comic"})]}),Object(h.jsxs)("div",{className:"telaUsuario",children:[Object(h.jsxs)("h1",{children:["Confira suas comics!",y]}),Object(h.jsx)("div",{className:"tela-cards",children:m.map((function(e){return Object(h.jsxs)("div",{className:"card-heroi",children:[Object(h.jsx)("span",{className:"nome-heroi",children:e.name}),Object(h.jsx)("img",{onClick:function(){J(e.name,e.imagem,e.extensao,e.descricao)},src:"".concat(e.imagem,".").concat(e.extensao),alt:""}),Object(h.jsx)("button",{onClick:function(){P(e.numberId)},children:" deletar "})]})}))})]}),Object(h.jsx)("div",{children:Object(h.jsxs)(O.a,{isOpen:A,onAfterOpen:function(){t.style.color="#f00"},onRequestClose:F,style:{content:{width:"50%",height:"50%",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},contentLabel:"Example Modal",children:[Object(h.jsx)("h2",{ref:function(e){return t=e},children:"Caracteristicas"}),Object(h.jsx)("div",{children:N})]})})]})},A=function(){return Object(h.jsx)(i.a,{children:Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{path:"/",exact:!0,component:p}),Object(h.jsx)(r.a,{path:"/cadastro/",component:b}),Object(h.jsx)(r.a,{path:"/telaDoUsuario/:id",component:S}),Object(h.jsx)(r.a,{path:"/favoritos/:id",component:T})]})})};var E=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(A,{})})};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.4765e211.chunk.js.map