(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{248:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(16),o=n.n(r),a=n(17),l=n.n(a),i=n(20),u=n.n(i),s=n(21),c=n.n(s),d=n(47),h=n.n(d),m=n(22),p=n.n(m),f=n(1),g=n.n(f),C=n(32),b=function(e){function t(e){var n;return o()(this,t),(n=u()(this,c()(t).call(this,e))).state={result:0,input:0,valuePerChange:1,reset:0},n.increment=n.increment.bind(h()(n)),n.decrement=n.decrement.bind(h()(n)),n.reset=n.reset.bind(h()(n)),n.handleChange=n.handleChange.bind(h()(n)),n}return p()(t,e),l()(t,[{key:"increment",value:function(){this.setState((function(e){return{result:e.result+e.valuePerChange}}))}},{key:"decrement",value:function(){this.setState((function(e){return{result:e.result-e.valuePerChange}}))}},{key:"reset",value:function(){this.setState({result:0,input:0})}},{key:"handleChange",value:function(e){this.setState({valuePerChange:parseInt(e.target.value)})}},{key:"render",value:function(){return g.a.createElement(C.Container,{style:y.root},g.a.createElement(C.Header,{style:y.header},g.a.createElement(C.Text,{style:y.headerText},"Simple Counter")),g.a.createElement(C.Content,null,g.a.createElement(C.View,{style:y.displayResult},g.a.createElement(C.Text,{style:y.resultText},this.state.result)),g.a.createElement(C.View,{style:y.flexRowCenter},g.a.createElement(C.Button,{onPress:this.decrement,style:y.operationButton},g.a.createElement(C.Text,{style:y.buttonText},"-")),g.a.createElement(C.Button,{onPress:this.increment,style:y.operationButton},g.a.createElement(C.Text,{style:y.buttonText},"+"))),g.a.createElement(C.View,null,g.a.createElement(C.Button,{onPress:this.reset,style:y.resetButton},g.a.createElement(C.Text,{style:y.buttonText},"Reset"))),g.a.createElement(C.View,{style:y.inputContainer},g.a.createElement(C.Text,{style:{padding:5}},"Set unit per change:"),g.a.createElement(C.Input,{placeholder:"1",onChange:this.handleChange,style:y.counterInput}))),g.a.createElement(C.Footer,{padder:!0,style:y.footer},g.a.createElement(C.Text,{style:y.footerText},"Dev: ",g.a.createElement("br",null),"Mamun Abdullah ",g.a.createElement("br",null),"THE TRADE CODER")))}}]),t}(g.a.Component),y={root:{backgroundColor:"#EBF5FB",height:538,width:425,margin:"auto"},header:{backgroundColor:"teal"},headerText:{fontSize:26,color:"white",margin:"auto"},footer:{backgroundColor:"teal",display:"flex",flexDirection:"column",alignItems:"center"},footerText:{color:"#EBF5FB",textAlign:"center"},buttonRed:{backgroundColor:"red"},buttonBlue:{backgroundColor:"blue"},displayResult:{height:150},resultText:{fontSize:50,margin:"auto"},flexRowCenter:{display:"flex",flexDirection:"row",justifyContent:"center"},operationButton:{justifyContent:"center",flexGrow:1,borderColor:"white",borderWidth:1},resetButton:{backgroundColor:"teal",justifyContent:"center",borderWidth:1,borderColor:"white"},buttonText:{fontSize:20},autoCenter:{margin:"auto"},inputContainer:{height:80,backgroundColor:"white",marginTop:10},counterInput:{borderWidth:1,borderColor:"red",padding:10}}},283:function(e,t,n){n(284),e.exports=n(467)},284:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/simple-counter-app/expo-service-worker.js",{scope:"/simple-counter-app/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[283,1,2]]]);
//# sourceMappingURL=app.175e4e1f.chunk.js.map