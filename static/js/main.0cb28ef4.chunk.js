(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e){e.exports=[{id:"alien",image:"./images/alien.jpg"},{id:"belle",image:"./images/belle.jpg"},{id:"genie",image:"./images/genie.jpg"},{id:"glitch",image:"./images/glitch.jpg"},{id:"jasmine",image:"./images/jasmine.jpg"},{id:"lilo",image:"./images/lilo.jpg"},{id:"mickey",image:"./images/mickey.jpg"},{id:"mulan",image:"./images/mulan.jpg"},{id:"ralph",image:"./images/ralph.jpg"},{id:"snowwhite",image:"./images/snowwhite.jpg"},{id:"stitch",image:"./images/stitch.jpg"},{id:"woody",image:"./images/woody.jpg"}]},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(4),o=a.n(l),s=(a(16),a(5)),c=a(6),r=a(9),m=a(7),g=a(1),u=a(8),d=(a(17),function(e){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark text-white text-center sticky-top d-flex justify-content-around"},i.a.createElement("div",null,i.a.createElement("h1",null,"Clicky Game"),i.a.createElement("p",{className:"px-2 small font-weight-bold font-italic"},"Test your memory \u2013 don't click twice!")),i.a.createElement("div",null,i.a.createElement("h5",null,"Top Score: ",e.topScore),i.a.createElement("h3",null,"Score: ",e.score)))}),h=(a(18),function(e){return i.a.createElement("img",{className:"thumbnail",src:e.image,alt:e.id,key:e.id,id:e.id,onClick:e.handleClick})}),p=(a(19),function(){return i.a.createElement("footer",{className:"pt-3 text-white bg-dark"},i.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},i.a.createElement("h5",null,i.a.createElement("a",{href:"https://dolaku.github.io/",target:"_blank",rel:"noopener noreferrer"},"Donna Kuang")),i.a.createElement("a",{className:"link-email",href:"mailto:dolaku@gmail.com"},"dolaku@gmail.com"),i.a.createElement("a",{className:"display-4 link-email",href:"https://github.com/dolaku",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fab fa-github"})),i.a.createElement("p",{className:"small"},"\xa9 Copyright 2019. All Rights Reserved.")))}),f=a(2),k=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e},b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={funkoPops:f,clickedPops:[],score:0,topScore:0,message:""},a.handleClick=function(e){var t=a.state.clickedPops,n=e.target.id;t.includes(n)?(a.setState({message:i.a.createElement("h3",{className:"text-white incorrect"},"You Lose! Play again!")}),setTimeout(function(){this.setState({message:""})}.bind(Object(g.a)(a)),2500),a.resetGame()):(t.push(n),a.setState({score:a.state.score+1}),a.state.score>=a.state.topScore&&a.setState({topScore:a.state.score+1})),t.length>=12&&(a.setState({message:i.a.createElement("h3",{className:"text-white correct"},"You win! Play again!")}),setTimeout(function(){this.setState({message:""})}.bind(Object(g.a)(a)),2500),a.resetGame()),a.handleShuffle()},a.handleShuffle=function(){var e=k(f);a.setState({funkoPops:e})},a.resetGame=function(){a.setState({clickedPops:[]}),a.setState({score:0})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"wrapper"},i.a.createElement(d,{score:this.state.score,topScore:this.state.topScore}),i.a.createElement("div",{className:"App p-2"},this.state.message,i.a.createElement("div",{className:"App-body mx-auto p-sm-2 p-md-4"},this.state.funkoPops.map(function(t){return i.a.createElement(h,{key:t.id,id:t.id,image:t.image,handleClick:e.handleClick})}))),i.a.createElement(p,null))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.0cb28ef4.chunk.js.map