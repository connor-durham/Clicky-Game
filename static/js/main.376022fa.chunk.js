(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/440px-SpongeBob_SquarePants_character.svg.png","count":0},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","count":0},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","count":0},{"id":4,"name":"Patrick Star","image":"https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png","count":0},{"id":5,"name":"Sandy Cheeks","image":"https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Sandy_Cheeks.svg/1920px-Sandy_Cheeks.svg.png","count":0},{"id":6,"name":"Mrs. Puff","image":"https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Mrs._Puff.svg/1920px-Mrs._Puff.svg.png","count":0},{"id":7,"name":"Pearl","image":"https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Pearl_Krabs.svg/1920px-Pearl_Krabs.svg.png","count":0},{"id":8,"name":"Plankton","image":"https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Plankton_and_Karen.svg/1920px-Plankton_and_Karen.svg.png","count":0}]')},,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),c=a.n(r),s=a(7),o=a(4),u=a(5),m=a(8),g=a(6),l=a(9),d=(a(15),function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.clickCounter(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))}),h=(a(16),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),p=(a(17),function(e){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"title"},e.children),i.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore))}),k=a(1),v=(a(18),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={cards:k,score:0,highscore:0,characters:[]},a.gameOver=function(){a.state.score>a.state.highscore&&a.setState({highscore:a.state.score},(function(){})),a.state.cards.forEach((function(e){e.count=0})),a.setState({score:0,characters:[]}),console.log("You Lose")},a.clickCounter=function(e){var t=a.state.characters;if(!t.includes(e)){var n=[].concat(Object(s.a)(t),[e]);return a.setState({characters:n,score:a.state.score+1}),a.setState({cards:k.sort((function(){return Math.random()-.5}))}),!0}a.gameOver()},a}return Object(l.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return console.log("the cahracterarray",this.state.characters),i.a.createElement(h,null,i.a.createElement(p,{score:this.state.score,highscore:this.state.highscore},"Clicky Game"),this.state.cards.map((function(t){return i.a.createElement(d,{clickCounter:e.clickCounter,id:t.id,key:t.id,image:t.image})})))}}]),t}(n.Component));a(19);c.a.render(i.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.376022fa.chunk.js.map