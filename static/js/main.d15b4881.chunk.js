(this["webpackJsonpgeneric-word-game"]=this["webpackJsonpgeneric-word-game"]||[]).push([[0],{59:function(e,t,r){e.exports=r(86)},64:function(e,t,r){},85:function(e,t,r){},86:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(3),o=r.n(s),c=(r(64),r(44)),i=r(45),u=r(58),l=r(57),d=r(29),p=r(89),h=r(90),v=r(47),E=r.n(v),m=function(e){return{type:"SET_WORD",word:e}},f=function(e){return{type:"RIGHT",index:e}},g=function(e){return{type:"ADD_LETTER",letter:e}},w=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).getIndexes=function(e,t){var r=[];return e.forEach((function(e,n){e.letter===t&&r.push(n)})),r},e.startGame=function(){var t=e.props.dispatch;t(m(E()())),t({type:"TOGGLE"})},e.guess=function(t,r){r.target.setAttribute("disabled",!0);var n=e.props.wordToGuess,a=e.props.dispatch;a(g(t));var s=e.getIndexes(n,t);s.length>0?(r.target.setAttribute("class","green"),s.forEach((function(e){a(f(e))})),e.checkWin()):(a({type:"LOSE_LIFE"}),r.target.setAttribute("class","red"))},e.checkWin=function(){var t=!0;(e.props.wordToGuess.forEach((function(e){e.guessed||(t=!1)})),t)&&(0,e.props.dispatch)({type:"SET_WIN"})},e.restart=function(){(0,e.props.dispatch)({type:"RESET"})},e.displayWord=function(){var t="";return e.props.wordToGuess.forEach((function(e){t+=e.letter})),t},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"main"},this.props.game?a.a.createElement("div",{className:"game-screen"},a.a.createElement("h2",{className:"win"},this.props.win?"Congrats you win":""),a.a.createElement("h1",{className:"word"},this.props.wordToGuess.map((function(e,t){return a.a.createElement("span",{key:t},e.guessed?e.letter:"_"," ")}))),a.a.createElement("div",{className:"button-cont"},["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"].map((function(t){return a.a.createElement("button",{key:t,onClick:function(r){return e.guess(t,r)}},t)}))),a.a.createElement("div",{className:"lives"},this.props.lives>0?a.a.createElement(p.a,{disabled:!0,character:a.a.createElement(h.a,null),style:{color:"red"},value:this.props.lives}):a.a.createElement("p",null," You lost :( the word was ",a.a.createElement("strong",null,this.displayWord()))),a.a.createElement("div",{className:"reset"},a.a.createElement("button",{onClick:this.restart},"reset"))):a.a.createElement("button",{className:"start",onClick:this.startGame},"START"))}}]),r}(n.Component),T=w=Object(d.b)((function(e){return{guessedLetters:e.guessedLetters,lives:e.lives,wordToGuess:e.wordToGuess,win:e.win,game:e.game}}))(w);r(84),r(85);var b=function(){return a.a.createElement(T,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=r(18),O=r(27),G=Object(y.b)({guessedLetters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=t.letter;switch(t.type){case"ADD_LETTER":var n=Object(O.a)(e);return n.includes(r)||n.push(r),n;case"RESET":return[];default:return e}},lives:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOSE_LIFE":var r=e;return r>0&&(r-=1),r;case"RESET":return 5;default:return e}},wordToGuess:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=t.word,n=t.index;switch(t.type){case"SET_WORD":var a=[],s=Object(O.a)(r);return s.forEach((function(e){a.push({letter:e,guessed:!1})})),a;case"RIGHT":var o=Object(O.a)(e);return o[n].guessed=!0,o;case"RESET":return[];default:return e}},win:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WIN":return!0;case"RESET":return!1;default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE":return!e;case"RESET":return!1;default:return e}}}),k=Object(y.c)(G);o.a.render(a.a.createElement(d.a,{store:k},a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.d15b4881.chunk.js.map