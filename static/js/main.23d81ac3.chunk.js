(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(t,e,a){t.exports=a.p+"static/media/kick-electro01.dce87dcc.mp3"},function(t,e,a){t.exports=a.p+"static/media/snare-808.24c0c783.mp3"},function(t,e,a){t.exports=a.p+"static/media/hihat-808.9da5978c.mp3"},,,function(t,e,a){t.exports=a(20)},,,,,function(t,e,a){},,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),s=(a(16),a(1)),c=a(2),l=a(4),u=a(3),d=a(5),h=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).onClick=function(){console.log("Toggling beat "+a.props.beatId),a.setState({selected:!a.state.selected})},a.state={selected:!1},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){if(this.state.selected&&this.props.currentBeat){var t=new Audio(this.props.soundfile);this.props.keyBeat?t.volume=1:t.volume=.7,t.play()}return r.a.createElement("div",{className:"beat inline "+(this.state.selected?"selected-beat":"")+" "+(this.props.currentBeat?"current-beat":""),onClick:this.onClick})}}]),e}(n.Component),p=(a(18),a(6)),b=a.n(p),f=a(7),m=a.n(f),v=a(8),y=a.n(v),B=function(t){function e(t){var a;Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).preloadAudio=function(t){var e=!0,a=!1,n=void 0;try{for(var r,i=t[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var o=r.value,s=new Audio;s.addEventListener("canplaythrough",console.log("audio loaded"),!1),s.src=o}}catch(c){a=!0,n=c}finally{try{e||null==i.return||i.return()}finally{if(a)throw n}}},a.updateBeat=function(){a.state.currentBeat===a.state.beatDivisions&&a.setState({currentBeat:0}),a.setState({currentBeat:a.state.currentBeat+1})},a.startMachine=function(){a.stopMachine(),a.setState({currentBeat:1}),a.myTimer=setInterval(a.updateBeat,a.state.bpmDelay)},a.stopMachine=function(){a.setState({currentBeat:0}),clearInterval(a.myTimer)},a.returnLabel=function(t){return a.state.config[t].label};var n=Math.floor(6e4/110/4);return a.preloadAudio([b.a,m.a,y.a]),a.state={bpm:110,bpmDelay:n,beatDivisions:16,currentBeat:0,config:[{soundfile:y.a,soundtype:"rhythm",label:"Hi Hat"},{soundfile:m.a,soundtype:"rhythm",label:"Snare"},{soundfile:b.a,soundtype:"rhythm",label:"Kick"}]},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){for(var t=this,e=[[],[],[]],a=1;a<=this.state.beatDivisions;a++)for(var n="beat"+a,i=this.state.currentBeat===a,o=(a-1)%4===0,s=0;s<this.state.config.length;s++){var c=this.state.config[s].soundfile,l=n+"_"+s;e[s].push(r.a.createElement(h,{key:l,beatId:a,currentBeat:i,soundfile:c,keyBeat:o}))}return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-body"},r.a.createElement(k,{sounds:this.state.config,beatDivisions:this.state.beatDivisions,currentBeat:this.state.currentBeat}),e.map(function(e,a){return r.a.createElement("div",{key:t.index,className:"beat-grid"},r.a.createElement("span",{className:"row-label"},t.returnLabel(a)),e)}),r.a.createElement("div",{className:"controls"},r.a.createElement("button",{onClick:this.startMachine},"Play"),r.a.createElement("button",{onClick:this.stopMachine},"Stop"))))}}]),e}(n.Component),k=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={beatsHolder:{}},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=!0,e=!1,a=void 0;try{for(var n,i=this.props.sounds[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){n.value;for(var o=1;o<=this.props.beatDivisions;o++)this.props.currentBeat}}catch(s){e=!0,a=s}finally{try{t||null==i.return||i.return()}finally{if(e)throw a}}return r.a.createElement("div",null,this.beatsHolder)}}]),e}(n.Component),g=B;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.23d81ac3.chunk.js.map