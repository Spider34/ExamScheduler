(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,t,a){e.exports=a.p+"static/media/done.fcecaf11.gif"},49:function(e,t,a){e.exports=a.p+"static/media/loading.d9933c4e.gif"},57:function(e,t,a){e.exports=a(96)},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},89:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),s=a.n(l),c=a(6),o=a(7),i=a(9),m=a(8),d=a(10),u=a(22),p=a(21),h=a(20),f=a(26),g=a(98),b=a(99),E=a(56),v=a(48),N=a.n(v),y=a(49),j=a.n(y),O=(a(64),function(e){return e.empty?r.a.createElement("div",{className:"Loader container"},r.a.createElement("h3",null,e.filename),r.a.createElement("p",null,"Drag 'n' drop your file here")):e.wrong?r.a.createElement("div",{className:"Loader container"},r.a.createElement("span",{className:" fas fa-times",style:{fontSize:"80px",color:"red"}})):e.verified?r.a.createElement("div",{className:"Loader container"},r.a.createElement("img",{src:N.a,height:"50",alt:"verified"})):e.verfying?r.a.createElement("div",{className:"Loader container"},r.a.createElement("img",{src:j.a,height:"70",alt:"verifying"})):r.a.createElement("h3",null,"Wrong parameter")}),_=(a(65),"https://examschedulerbackend123.herokuapp.com"),x={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"10px",borderWidth:2,borderRadius:2,minHeight:"130px",borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},k={borderColor:"#2196f3"},C={borderColor:"#00e676"},w={borderColor:"#ff1744"},S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).Reset=function(){a.setState(Object(f.a)({},a.initialstate))},a.onDropFile=function(e){a.setState({file:e[0],task:"verfying"});var t=new FormData;t.append("file",e[0]),t.append("user","srb"),t.append("list",a.props.filename);var n="".concat(_,"/validate");fetch(n,{method:"POST",body:t}).then(function(e){return e.json()}).then(function(t){if(t.done)a.setState({file:e[0],task:"verified",message:null}),a.props.onFileChanged(t.file,{});else{var n=t.message;a.props.onFileChanged(!1,{}),a.setState({file:e[0],task:"wrong",message:n}),n=n.replace(/\n/g,"<br />"),n+="<br/><a href='#/Help'>Read the instructions</a><br/>",document.getElementById(a.props.filename+"_text").innerHTML=n}}).catch(function(e){return console.log(e)})},a.initialstate={file:null,task:"empty",message:null},a.state=a.initialstate,a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(e){var t=this;return r.a.createElement(E.a,{onDrop:this.onDropFile},function(e){var a,l=e.getRootProps,s=e.getInputProps,c=e.isDragAccept,o=e.isDragReject,i=e.isDragActive,m=Object(n.useMemo)(function(){return Object(f.a)({},x,i?k:{},c?C:{},o?w:{})},[i,o]);return r.a.createElement("section",{className:"myTooltip"},r.a.createElement("div",l({style:m}),r.a.createElement("input",Object.assign({},s(),{disabled:"_verified"===t.state.task})),r.a.createElement(O,(a={},Object(h.a)(a,t.state.task,!0),Object(h.a)(a,"filename",t.props.filename),a))),t.state.message&&r.a.createElement("span",{className:"myTooltiptext",id:t.props.filename+"_text"}))})}}]),t}(n.Component),R=(a(66),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content-section"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item list-group-item-light srb-pane-title text-center"},"Templates"),r.a.createElement("li",{className:"list-group-item list-group-item-light"},r.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/15bAOhsQVrBLxnEd4DI-PgnyDpE14taAN_ydTV9vniWY/edit?usp=sharing",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("i",{className:"fas fa-user-tie",style:{letterSpacing:"10px"}}),"Teachers List")),r.a.createElement("li",{className:"list-group-item list-group-item-light"},r.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1yyfRZFn-ZVB4889vxZ8bu1Tjj6p-qdMqxtfZfdXa554/edit?usp=sharing",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("i",{className:"fas fa-calendar-alt",style:{letterSpacing:"10px"}}),"Schedule List")),r.a.createElement("li",{className:"list-group-item list-group-item-light"},r.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1caJK62qwDkqrdeZ8rUnaGs5JulMyxCFeaYhk7TrnsYc/edit?usp=sharing",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("i",{className:"fas fa-school",style:{letterSpacing:"10px",fontSize:"12px"}}),"Room List")),r.a.createElement("li",{className:"list-group-item list-group-item-light"},r.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/139LZkE2maa5xi97H0Z4hxtvCVocsYLPAPH38n6RblLQ/edit?usp=sharing",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("i",{className:"fas fa-cogs",style:{letterSpacing:"10px",fontSize:"12px"}}),"Work Ratio")),r.a.createElement("li",{className:"list-group-item list-group-item-light"},r.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1kxMy05dvqbor3EW1vEGFoNjI8n3haLKzu7OVdrbX-Dw/edit?usp=sharing",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("i",{className:"fas fa-poll",style:{letterSpacing:"10px"}}),"Final Output"))))}}]),t}(n.Component)),F=(a(67),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onFileChanged=function(e,t,n){a.setState(Object(f.a)({},Object(h.a)({},e,t),n))},a.handleClose=function(){a.setState({showModel:!1})},a.Reset=function(){a.setState(Object(f.a)({},a.initialstate),function(){console.log("reset"),console.log(a.state)}),a.teacher_list_ref.current.Reset(),a.schedule_list_ref.current.Reset(),a.room_list_ref.current.Reset(),a.work_ratio_ref.current.Reset()},a.handleCloseReset=function(){a.Reset()},a.onClick=function(e){var t=new FormData;t.append("teachers_list",a.state.teachers_list),t.append("schedule_list",a.state.schedule_list),t.append("room_list",a.state.room_list),t.append("work_ratio",a.state.work_ratio),t.append("seed",a.state.seed),t.append("user","srb");var n="".concat(_,"/output");fetch(n,{method:"POST",body:t}).then(function(e){return e.json()}).then(function(e){if(console.log(e),e.done)a.setState({message:null}),setTimeout(function(){window.location.href="".concat(_,"/download/").concat(e.file)},1);else{var t=e.message;a.setState({message:t,showModel:!0}),t=t.replace(/\n/g,"<br />"),t+="<br/><a href='#/Help'>Read the instructions</a><br/>",document.getElementById("modal_desc").innerHTML=t}}).catch(function(e){return console.log(e)})},a.initialstate={teachers_list:!1,room_list:!1,schedule_list:!1,work_ratio:!1,seed:5,message:null,showModel:!1},a.state=a.initialstate,a.teacher_list_ref=Object(n.createRef)(),a.schedule_list_ref=Object(n.createRef)(),a.room_list_ref=Object(n.createRef)(),a.work_ratio_ref=Object(n.createRef)(),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=!(this.state.teachers_list&&this.state.room_list&&this.state.schedule_list&&this.state.work_ratio);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row scheduler-box"},r.a.createElement("div",{className:"col-md-9 scheduler-box"},r.a.createElement("div",{className:"row",style:{minHeight:"150px"}},r.a.createElement("div",{className:"col-md-6 srb-dropbox"},r.a.createElement(S,{filename:"teachers_list",ref:this.teacher_list_ref,onFileChanged:function(t,a){return e.onFileChanged("teachers_list",t,a)}})),r.a.createElement("div",{className:"col-md-6 srb-dropbox"},r.a.createElement(S,{filename:"schedule_list",ref:this.schedule_list_ref,onFileChanged:function(t,a){return e.onFileChanged("schedule_list",t,a)}}))),r.a.createElement("div",{className:"row",style:{minHeight:"150px"}},r.a.createElement("div",{className:"col-md-6 srb-dropbox"},r.a.createElement(S,{filename:"room_list",ref:this.room_list_ref,onFileChanged:function(t,a){return e.onFileChanged("room_list",t,a)}})),r.a.createElement("div",{className:"col-md-6 srb-dropbox"},r.a.createElement(S,{filename:"work_ratio",ref:this.work_ratio_ref,onFileChanged:function(t,a){return e.onFileChanged("work_ratio",t,a)}}))),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{type:"button",disabled:t,className:"btn btn-primary",onClick:this.onClick,style:{marginTop:"30px"}},"Generate Output"))),r.a.createElement("div",{className:"col-md-3 scheduler-box"},r.a.createElement(R,null))," ")," ",r.a.createElement(g.a,{show:this.state.showModel,onHide:this.handleClose},r.a.createElement(g.a.Header,{closeButton:!0},r.a.createElement(g.a.Title,null,"Error! Incomplete Data")),r.a.createElement(g.a.Body,{id:"modal_desc"}),r.a.createElement(g.a.Footer,null,r.a.createElement(b.a,{variant:"secondary",onClick:this.handleCloseReset},"Reset"),r.a.createElement(b.a,{variant:"primary",onClick:this.handleClose},"Continue"))))}}]),t}(n.Component)),T=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("p",null,"Exam Scheduler is a tool to create a automated schedule for teacher duties")),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"content-section"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item list-group-item-light"},"Latest Posts"),r.a.createElement("li",{className:"list-group-item list-group-item-light"},"Announcements"),r.a.createElement("li",{className:"list-group-item list-group-item-light"},"Calendars"),r.a.createElement("li",{className:"list-group-item list-group-item-light"},"etc"))))))}}]),t}(n.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{role:"main",className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("p",null,"Exam Scheduler is a tool to create a automated schedule for teacher duties")),r.a.createElement("div",{className:"col-md-3"},r.a.createElement(R,null))))}}]),t}(n.Component),H=(a(89),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark mb-4"},r.a.createElement("div",{className:"container"},r.a.createElement(u.b,{className:"navbar-brand mr-4",to:"/"},r.a.createElement("span",{style:{textAlign:"left"}},r.a.createElement("span",{style:{color:"red",fontWeight:"700"}},"Exam")," scheduler")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarToggle","aria-controls":"navbarToggle","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarToggle"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(u.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(u.b,{className:"nav-link",to:"/About"},"About")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(u.b,{className:"nav-link",to:"/Help"},"Help"))))))}}]),t}(n.Component)),L=(a(95),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"srb-footer"},r.a.createElement("hr",{style:{marginBottom:"0"}}),r.a.createElement("div",{className:"text-center content"},r.a.createElement("a",{href:"https://www.linkedin.com/in/srbcheema1/",style:{color:"#999",textDecoration:"none"}},"\xa9 2019 Copyright:",r.a.createElement("span",{style:{letterSpacing:"4px"}}," "),"a",r.a.createElement("span",{style:{letterSpacing:"4px"}}," "),r.a.createElement("span",{style:{color:"#8b8b8b",fontWeight:"700"}},"srbcheema1"),r.a.createElement("span",{style:{letterSpacing:"4px"}}," "),"production")))}}]),t}(n.Component)),A=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(H,null),r.a.createElement("div",null,r.a.createElement(p.a,{exact:!0,path:"/",component:F}),r.a.createElement(p.a,{exact:!0,path:"/About",component:T}),r.a.createElement(p.a,{exact:!0,path:"/Help",component:D})),r.a.createElement(L,null))}}]),t}(n.Component);s.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.7e81f972.chunk.js.map