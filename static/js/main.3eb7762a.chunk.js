(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var s=n(8),a=n.n(s),i=n(9),c=n(2),r=n(3),o=n(5),u=n(4),d=n(1),l=n(6),j=n(0),h=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).onFormSubmit=function(t){t.preventDefault(),s.addTask(s.state.term),s.setState({term:""})},s.onInputChange=function(t){s.setState({term:t.target.value})},s.state={term:""},s.addTask=t.createTask,s}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsx)("form",{className:"item-addition-bar",onSubmit:this.onFormSubmit,children:Object(j.jsx)("input",{style:{width:"200px"},type:"text",placeholder:"Please input your task name.",value:this.state.term,onChange:this.onInputChange})})}}]),n}(d.Component),b=(n(15),function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.id,n=t.name,s=t.isDone,a=this.props,i=a.updateTask,c=a.deleteTask;return Object(j.jsxs)("div",{className:"todo-item ".concat(s?"isDone":""),children:[Object(j.jsx)("input",{type:"checkbox",name:n,defaultChecked:s,onClick:function(){i(e)}}),Object(j.jsx)("label",{children:n}),Object(j.jsx)("button",{className:"todo-item__delete_button",onClick:function(){c(e)},children:" Delete"})]},e)}}]),n}(d.Component)),m=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.updateTask,n=t.deleteTask;return Object(j.jsx)("div",{className:"todo-list",children:this.props.items.map((function(t){return Object(j.jsx)(b,{id:t.id,name:t.name,isDone:t.isDone,updateTask:e,deleteTask:n},t.id)}))})}}]),n}(d.Component),p=(n(16),function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.tasks,n=t.deleteFinishedTasks,s=0;return e.forEach((function(t){t.isDone&&(s+=1)})),Object(j.jsxs)("div",{className:"todo-summary",children:[Object(j.jsx)("span",{children:"Finished(".concat(s,") / All(").concat(e.length,")")}),Object(j.jsx)("button",{onClick:n,children:"Delete Finished"})]})}}]),n}(d.Component)),O=(n(17),function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(t){var s;return Object(c.a)(this,n),(s=e.call(this,t)).createTask=function(t){""!==t?s.setState({items:[].concat(Object(i.a)(s.state.items),[{id:Object(l.a)(),name:t,isDone:!1}])}):alert("cannot create a empty task")},s.deleteTask=function(t){var e=s.state.items.filter((function(e){return e.id!==t}));s.setState({items:e})},s.deleteFinishedTasks=function(){var t=s.state.items.filter((function(t){return!t.isDone}));s.setState({items:t})},s.updateTask=function(t){var e=s.state.items.map((function(e){return e.id===t?(e.isDone=!e.isDone,e):e}));s.setState({items:e})},s.state={items:[{id:Object(l.a)(),name:"work",isDone:!1},{id:Object(l.a)(),name:"watch react videos",isDone:!1}]},s}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("div",{children:"To Do List"}),Object(j.jsx)(h,{createTask:this.createTask}),Object(j.jsx)(m,{items:this.state.items,deleteTask:this.deleteTask,updateTask:this.updateTask}),Object(j.jsx)(p,{tasks:this.state.items,deleteFinishedTasks:this.deleteFinishedTasks})]})}}]),n}(d.Component));a.a.render(Object(j.jsx)(O,{}),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3eb7762a.chunk.js.map