(this.webpackJsonpclicker=this.webpackJsonpclicker||[]).push([[0],{12:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/LoginPage.7fa843a6.gif"},28:function(e,t,a){e.exports=a.p+"static/media/monster.dcb928b7.png"},30:function(e,t,a){e.exports=a(44)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(13),s=a.n(c),o=(a(35),a(15)),l=a(16),m=a(19),i=a(18),u=(a(36),a(27)),h=a.n(u),E=(a(37),a(9)),d=function(){return n.a.createElement("div",{className:"loginPageWrapper"},n.a.createElement("img",{src:h.a,className:"loginPageLogo"}),n.a.createElement("div",{className:"startButton"},n.a.createElement(E.b,{to:"/GamePage"},"START ")))},p=a(2),v=(a(42),a(12),function(e){return n.a.createElement("div",{className:"characterHP"},"100/100")}),f=function(e){return n.a.createElement("div",{className:"characterMP"},"100/100")},P=function(e){if(!(e.characterXP>100))return n.a.createElement("div",{className:"characterXP"},e.characterXP,"/100");e.levelUp()},N=function(e){return n.a.createElement("div",{className:"characterBar"},n.a.createElement("div",{className:"heroSideBar"}),n.a.createElement("div",{className:"heroInfo"},n.a.createElement("div",{className:"heroLevel"},e.character.characterLVL),n.a.createElement("div",{className:"heroName"},"Ange1ok")),n.a.createElement("div",{className:"bar"},n.a.createElement("div",{className:"barHP"},n.a.createElement(v,{characterHP:e.character.characterHP})),n.a.createElement("div",{className:"barMP"},n.a.createElement(f,{characterMP:e.character.characterMP})),n.a.createElement("div",{className:"barXP"},n.a.createElement(P,{characterXP:e.character.characterXP,levelUp:e.levelUp}))))},M=a(28),b=a.n(M),g=(a(26),function(e){return n.a.createElement("div",{className:"monsterHP"},n.a.createElement("div",{className:"hpBG",style:{width:"".concat(e.curentMonsterHP,"%")}},e.curentMonsterHP),n.a.createElement("div",null,"|"))}),k=function(e){return n.a.createElement("div",{className:"monsterClickArea"},e.monster.isMonsterDead?n.a.createElement("div",{onClick:function(){e.nextEnemy()},className:"nextEnemy"},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 6*\u0434\u044c!"):n.a.createElement("div",{className:"monsterWrapper"},n.a.createElement("div",{className:"monsterInfo"},n.a.createElement("div",{className:"monsterSideBar"}),n.a.createElement("div",{className:"monsterName"},"Imp"),n.a.createElement("div",{className:"monsterHP-wrapper"},n.a.createElement(g,{monsterHP:e.monster.monsterHP,curentMonsterHP:e.monster.curentMonsterHP}))),n.a.createElement("img",{src:b.a,className:"monsterSkin",onClick:function(){e.monster.curentMonsterHP>=e.characterDMG?e.monsterAtacked(e.characterDMG):(e.xpGain(e.monster.monsterXP),e.monsterKilled())}})))},y=function(e){return n.a.createElement("div",{className:"gamePageWrapper"},n.a.createElement("div",{className:"characterBar-wrapper"},n.a.createElement(N,{character:e.character,monster:e.monster,levelUp:e.levelUp})),n.a.createElement("div",{className:"mainField"},n.a.createElement("div",{className:"monster"},n.a.createElement(k,{monster:e.monster,monsterAtacked:e.monsterAtacked,xpGain:e.xpGain,characterDMG:e.character.characterDMG,monsterKilled:e.monsterKilled,nextEnemy:e.nextEnemy}))),n.a.createElement("div",{className:"skillsBar"},"Skills"))},O=a(7),H={monsterHP:100,curentMonsterHP:100,monsterDMG:10,monsterXP:15,isMonsterDead:!1},L={characterLVL:1,characterHP:100,characterDMG:30,characterMP:100,characterXP:0},G=a(17),x=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement(y,Object.assign({},this.props,{monsterAtacked:this.props.monsterAtacked,monsterKilled:this.props.monsterKilled,xpGain:this.props.xpGain,levelUp:this.props.levelUp,nextEnemy:this.props.nextEnemy}))}}]),a}(r.Component),j=Object(G.b)((function(e){return{character:e.character,monster:e.monster}}),{monsterAtacked:function(e){return{type:"MONSTER_ATACKED",characterDMG:e}},monsterKilled:function(){return{type:"MONSTER_KILLED"}},xpGain:function(e){return{type:"XP_GAIN",xp:e}},levelUp:function(){return{type:"LEVEL_UP"}},nextEnemy:function(){return{type:"NEXT_ENEMY"}}})(x),A=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(p.a,{path:"/LoginPage",render:function(){return n.a.createElement(d,null)}}),n.a.createElement(p.a,{path:"/GamePage",render:function(){return n.a.createElement(j,null)}}))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(11),X=Object(D.b)({character:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"XP_GAIN":var a=Object(O.a)({},e);return a.characterXP+=t.xp,a;case"LEVEL_UP":var r=Object(O.a)({},e);return r.characterXP=0,r.characterLVL=e.characterLVL+1,r;default:return e}},monster:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MONSTER_ATACKED":var a=Object(O.a)({},e);return a.curentMonsterHP=a.curentMonsterHP-t.characterDMG,a;case"MONSTER_KILLED":var r=Object(O.a)({},e);return r.curentMonsterHP=r.monsterHP,r.isMonsterDead=!0,r;case"NEXT_ENEMY":var n=Object(O.a)({},e);return n.isMonsterDead=!1,n;default:return e}}}),w=Object(D.c)(X),S=function(e){s.a.render(n.a.createElement(E.a,{basename:"/lineage-clicker"},n.a.createElement(G.a,{store:w},n.a.createElement(A,null))),document.getElementById("root"))};S(w.getState()),w.subscribe((function(){w.getState();S()})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.c1586ec2.chunk.js.map