(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/kick-electro01.dce87dcc.mp3"},function(e,t,a){e.exports=a.p+"static/media/snare-808.24c0c783.mp3"},function(e,t,a){e.exports=a.p+"static/media/hihat-808.9da5978c.mp3"},function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),s=a.n(r),i=(a(16),a(1)),o=a(2),l=a(4),u=a(3),m=a(5),d=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onClick=function(){console.log("Toggling beat "+a.props.beatId),a.setState({selected:!a.state.selected})},a.state={selected:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.state.selected&&this.props.currentBeat&&new Audio(this.props.soundfile).play(),c.a.createElement("div",{className:"beat inline "+(this.state.selected?"selected-beat":"")+" "+(this.props.currentBeat?"current-beat":""),onClick:this.onClick})}}]),t}(n.Component),p=(a(18),a(8)),b=a.n(p),h=a(9),f=a.n(h),v=a(10),k=a.n(v),B=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).updateBeat=function(){a.state.currentBeat===a.state.beatDivisions&&a.setState({currentBeat:0}),a.setState({currentBeat:a.state.currentBeat+1})},a.startMachine=function(){a.stopMachine(),a.setState({currentBeat:1}),a.myTimer=setInterval(a.updateBeat,a.state.bpmDelay)},a.stopMachine=function(){a.setState({currentBeat:0}),clearInterval(a.myTimer)};var n=Math.floor(6e4/110/4);return a.state={bpm:110,bpmDelay:n,beatDivisions:16,currentBeat:0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=[],t=[],a=[],n=1;n<=this.state.beatDivisions;n++){var r="beat"+n,s=this.state.currentBeat===n;e.push(c.a.createElement(d,{key:r,beatId:n,currentBeat:s,soundfile:b.a})),t.push(c.a.createElement(d,{key:r,beatId:n,currentBeat:s,soundfile:f.a})),a.push(c.a.createElement(d,{key:r,beatId:n,currentBeat:s,soundfile:k.a}))}return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"App-body"},c.a.createElement("div",{className:"beat-grid"},c.a.createElement("span",{className:"row-label"},"Hat"),a),c.a.createElement("div",{className:"beat-grid"},c.a.createElement("span",{className:"row-label"},"Snare"),t),c.a.createElement("div",{className:"beat-grid"},c.a.createElement("span",{className:"row-label"},"Kick"),e),c.a.createElement("div",{className:"controls"},c.a.createElement("button",{onClick:this.startMachine},"Start"),c.a.createElement("button",{onClick:this.stopMachine},"Stop"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.fe47b9ae.chunk.js.map