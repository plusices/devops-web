(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-270e"],{JNL0:function(t,e,r){"use strict";r.d(e,"a",function(){return i}),r.d(e,"f",function(){return o}),r.d(e,"c",function(){return u}),r.d(e,"d",function(){return a}),r.d(e,"b",function(){return s}),r.d(e,"e",function(){return c});var n=r("t3Un");function i(t){return Object(n.a)({url:"api/projects/",method:"post",data:t})}function o(t){return Object(n.a)({url:"api/projects/"+t+"/",method:"get"})}function u(t){return Object(n.a)({url:"api/projects/"+t+"/",method:"delete"})}function a(t,e){return Object(n.a)({url:"api/projects/"+t+"/",method:"put",data:e})}function s(t){return Object(n.a)({url:"api/project/copy/",method:"post",data:t})}function c(t,e){return Object(n.a)({url:"api/projects/statistics/?type="+t,method:"post",data:e})}},WFHD:function(t,e,r){"use strict";r.r(e);var n=r("wk8/"),i=r("JNL0"),o={props:{data:{type:Object,required:!0},sup_this:{type:Object,required:!0}},data:function(){return{loading:!1,dialog:!1,form:{user_id:""},userIds:[],user_name:["可选用户","已选用户"],user_data:[]}},methods:{to:function(){this.memberInit(),this.dialog=!0},memberInit:function(){var t=this;Object(n.d)().then(function(e){t.user_data=[];var r=t.user_data;e.forEach(function(t,e){var n={key:t.id.toString(),label:t.name};r.push(n)})}),this.userIds=this.data.user_id.split(",")},userFilterMethod:function(t,e){return e.label.indexOf(t)>-1},doSubmit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.form.user_id=t.userIds.filter(function(t){return t}).toString(),t.loading=!0,Object(i.d)(t.data.id,t.form).then(function(e){t.resetForm(),t.$message({showClose:!0,type:"success",message:"修改成功!",duration:2500}),t.loading=!1,t.sup_this.init()}).catch(function(e){t.loading=!1,console.log(e)})})},cancel:function(){this.resetForm()},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),this.form={user_id:""}}}},u=r("KHd+"),a=Object(u.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{display:"inline-block",margin:"0px 1px"}},[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.to}},[t._v("成员管理")]),t._v(" "),r("el-dialog",{attrs:{"append-to-body":!0,visible:t.dialog,title:"项目成员管理",width:"540px"},on:{"update:visible":function(e){t.dialog=e}}},[r("el-form",{ref:"form",attrs:{model:t.form,"label-position":"top",size:"small"}},[r("el-form-item",[r("el-transfer",{attrs:{"filter-method":t.userFilterMethod,data:t.user_data,titles:t.user_name,filterable:"","filter-placeholder":"请选择用户"},model:{value:t.userIds,callback:function(e){t.userIds=e},expression:"userIds"}})],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),r("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.doSubmit}},[t._v("确认")])],1)],1)],1)},[],!1,null,null,null);e.default=a.exports},"wk8/":function(t,e,r){"use strict";r.d(e,"a",function(){return i}),r.d(e,"b",function(){return o}),r.d(e,"c",function(){return u}),r.d(e,"f",function(){return a}),r.d(e,"d",function(){return s}),r.d(e,"e",function(){return c});var n=r("t3Un");function i(t){return Object(n.a)({url:"api/users/",method:"post",data:t})}function o(t){return Object(n.a)({url:"api/users/"+t+"/",method:"delete"})}function u(t,e){return Object(n.a)({url:"api/users/"+t+"/",method:"put",data:e})}function a(t,e){return Object(n.a)({url:"api/users/"+t+"/change-passwd/",method:"post",data:e})}function s(t){return t?Object(n.a)({url:"api/user/list/?name="+t,method:"get"}):Object(n.a)({url:"api/user/list/",method:"get"})}function c(t,e){return Object(n.a)({url:"api/users/statistics/?type="+t,method:"post",data:e})}}}]);