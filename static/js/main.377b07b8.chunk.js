(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{71:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t(18),a=t.n(o),c=t(9),i=t(4),s=t(3),u=t.n(s),p=t(10),l=t(14),d=t(5),b=t(15),x=t.n(b),h={getPokemonsList:function(n){return j.apply(this,arguments)},getPokemon:function(n){return f.apply(this,arguments)},filter:function(n){return g.apply(this,arguments)}};function j(){return(j=Object(p.a)(u.a.mark((function n(e){var t,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.a.get("https://pokeapi.co/api/v2/pokemon?offset=".concat(e,"&limit=50"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(){return(f=Object(p.a)(u.a.mark((function n(e){var t,r,o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.a.get(e);case 2:return t=n.sent,r=t.data,o={name:r.name,height:r.height,weight:r.weight,id:r.id,img:r.sprites.front_shiny},n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(){return(g=Object(p.a)(u.a.mark((function n(e){var t,r,o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m();case 2:return t=n.sent,r=new RegExp(e,"i"),o=t.filter((function(n){return r.test(n.name)})),n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){return k.apply(this,arguments)}function k(){return(k=Object(p.a)(u.a.mark((function n(){var e,t,r,o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!w("allPokemons")){n.next=2;break}return n.abrupt("return",w("allPokemons"));case 2:return n.next=4,x.a.get("https://pokeapi.co/api/v2/pokemon");case 4:return e=n.sent,t=e.data,r=t.count,n.next=9,x.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(r));case 9:return O("allPokemons",(o=n.sent).data.results),n.abrupt("return",o.data.results);case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function O(n,e){var t=JSON.stringify(e);localStorage.setItem(n,t)}function w(n){var e=localStorage.getItem(n);return JSON.parse(e)}var v,y,P,S,C,T,F,L,E,I=t(24),J=Object(I.b)({name:"counter",initialState:{currPokemon:null,pokemonsToShow:[]},reducers:{setPokemon:function(n,e){n.currPokemon=e.payload},setPokemonsToShow:function(n,e){n.pokemonsToShow=e.payload}}}),N=J.actions,B=N.setPokemon,z=N.setPokemonsToShow,D=Object(I.a)({reducer:{pokemon:J.reducer}}),G=t(19),R=t.p+"static/media/PokeBall.a3a90d82.png",_=t(1),q=d.b.section(v||(v=Object(i.a)(["\nbackground-color: #b6b3b355;\nborder: 1px solid white;\nwidth: 200px;\nheight: 200px;\ncursor: pointer;\ntext-align: center;\nborder-radius: 5px;\n\na{\n    all: unset;\n\n    &:hover{\n    font-size: 20px;\n    }\n\n    p{\n        background-color: unset;\n        margin-top: 5px;\n        text-transform: uppercase;\n        letter-spacing: 1px;\n    }\n\n    img{\n        width: 100%;\n        max-height: 75%;\n    }\n}\n\n@media (max-width: 768px) {\n    width: 90%;\n    height: 25%;\n    margin: 0 auto 15px auto;\n\n    p{\n        margin: 10px 0;\n    }\n  }\n"]))),A=function(n){var e=n.pokemon,t=Object(c.b)();return Object(_.jsx)(q,{children:Object(_.jsxs)(G.b,{onClick:function(){return function(n){t(B(n))}(e)},to:"/details",children:[Object(_.jsx)("img",{src:R,alt:"#"}),Object(_.jsx)("p",{children:e.name})]})})},H=d.b.section(y||(y=Object(i.a)(["\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: center;\ngap: 10px;\nmargin-top: 2%;\n\n@media (max-width: 768px) {\n    display: block;\n    width: 100%;\n}"]))),K=function(){var n=Object(c.c)((function(n){return n.pokemon.pokemonsToShow}));return Object(_.jsx)(H,{children:n&&n.map((function(n,e){return Object(_.jsx)("article",{children:Object(_.jsx)(A,{pokemon:n})},e)}))})},M=d.b.input(P||(P=Object(i.a)(["\n    width: 50%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n\n    display: flex;\n    margin: 2% auto;\n"]))),Q=d.b.article(S||(S=Object(i.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    button{\n    padding: 8px 16px;\n    text-decoration: none;\n    transition: background-color .3s;\n    border: 1px solid #ddd;\n    cursor: pointer;\n    margin: 0 10px;\n    text-transform: uppercase;\n\n    &:hover{\n        background-color: #949393bc;\n     }\n     \n    }\n"]))),U=function(){var n=Object(r.useState)(1),e=Object(l.a)(n,2),t=e[0],o=e[1],a=Object(c.b)();Object(r.useEffect)((function(){Object(p.a)(u.a.mark((function n(){var e,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=50*t,n.next=3,h.getPokemonsList(e);case 3:if((r=n.sent).length){n.next=6;break}return n.abrupt("return",o(1));case 6:a(z(r));case 7:case"end":return n.stop()}}),n)})))()}),[t]);var i=function(n){"next"===n?o(t+1):t>1&&o(t-1)},s=function(){var n=Object(p.a)(u.a.mark((function n(e){var t,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.target.value,n.next=3,h.filter(t);case 3:r=n.sent,a(z(r));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(M,{onChange:s,placeholder:"Search",type:"text"}),Object(_.jsxs)(Q,{children:[Object(_.jsx)("button",{onClick:function(){return i("prev")},children:"\xab Prev page "}),Object(_.jsx)("h3",{children:t}),Object(_.jsx)("button",{onClick:function(){return i("next")},children:"Next page \xbb"})]}),Object(_.jsx)(K,{})]})},V=t(2),W=d.b.section(C||(C=Object(i.a)(["\n    width: 500px;\n    text-align: center;\n    background-color: red;\n    border: 1px solid white;\n    border-radius: 20px;\n    border: 1px solid black;\n\n    position: absolute;\n    top: 50%; right: 50%;\n    transform: translate(50%,-50%);\n\n    aside{\n        display: flex;\n        max-width: 70%;\n        margin: 20px auto;\n        border-radius: 15px;\n        gap: 10px;\n        background-color: unset;\n        span{\n            background-color: white;\n            border-radius: 15px;\n            flex: 1;\n            color: black;\n            padding: 10px;\n            border: 2px solid black;\n        }\n\n        button{\n            all: unset;\n            border: 2px solid black;\n            background-color: white;\n            color: black;\n            padding: 5px;\n            border-radius: 15px;\n            cursor: pointer;\n\n            transition: 0.3s;\n            &:hover{\n                transition: 0.3s;\n                color: red;\n            }\n        }\n    }\n\n        h1{\n            background-color: unset;\n            margin-bottom: 25px;\n        }\n\n"]))),X=d.b.article(T||(T=Object(i.a)(["\n    /* margin-top: 35px; */\n    width: 70%;\n    height: 250px;\n    border: 1px solid white;\n    margin: 25px auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 15px;\n    background-color: white;\n    border: 2px solid black;\n    img{\n        width: 70%;\n        background-color: unset;\n    }\n \n"]))),Y=d.b.article(F||(F=Object(i.a)(["\n    background-color: unset;\n    margin: 25px 0;\n    display: flex;\n    justify-content: space-around;\n    button{\n        all: unset;\n        border: 2px solid black;\n        cursor: pointer;\n        padding: 15px 35px;\n        border-radius: 15px;\n        background-color: white;\n        color: black;\n\n        transition: 0.3s;\n        &:hover{\n            transition: 0.3s;\n            color: red;\n        }\n    }\n"]))),Z=d.b.article(L||(L=Object(i.a)(["\n    padding: 20px;\n    max-width: 80%;\n    margin: 10px auto 0 auto;\n    background-color: #f44336d1;\n    color: white;\n    text-align: center;\n"]))),$=function(){var n=Object(V.f)(),e=Object(r.useState)(!1),t=Object(l.a)(e,2),o=t[0],a=t[1],i=Object(r.useState)(null),s=Object(l.a)(i,2),d=s[0],b=s[1],x=Object(c.c)((function(n){return n.pokemon.currPokemon}));Object(r.useEffect)((function(){Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x){e.next=2;break}return e.abrupt("return",n.push("/"));case 2:return e.next=4,h.getPokemon(x.url);case 4:t=e.sent,b(t);case 6:case"end":return e.stop()}}),e)})))()}),[]);var j=function(n){a(!0),setTimeout((function(){return a(!1)}),3e3)};return d?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(W,{children:[Object(_.jsxs)("aside",{children:[Object(_.jsx)("button",{onClick:function(){return n.push("/")},children:"Go back"}),Object(_.jsx)("span",{children:d.name})]}),Object(_.jsx)(X,{children:Object(_.jsx)("img",{src:d.img,alt:d.name})}),Object(_.jsxs)(Y,{children:[Object(_.jsx)("button",{onClick:function(){return j()},children:"Prev"}),Object(_.jsx)("button",{onClick:function(){return j()},children:"Next"})]}),Object(_.jsx)("h1",{children:"Pokedex"})]}),o&&Object(_.jsx)(Z,{children:"Coming soon..."})]}):Object(_.jsx)("div",{children:"Loading..."})},nn=Object(d.a)(E||(E=Object(i.a)(["\n*{\n  background-color: #383838;\n  transition: 0.3s; \n  color: white;\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n"])));var en=function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(G.a,{children:[Object(_.jsx)(nn,{}),Object(_.jsxs)(V.c,{children:[Object(_.jsx)(V.a,{path:"/details",component:$}),Object(_.jsx)(V.a,{path:"/",component:U})]})]})})},tn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,72)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),r(n),o(n),a(n),c(n)}))};a.a.render(Object(_.jsx)(c.a,{store:D,children:Object(_.jsx)(en,{})}),document.getElementById("root")),tn()}},[[71,1,2]]]);
//# sourceMappingURL=main.377b07b8.chunk.js.map