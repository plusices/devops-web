(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0303"],{"41Be":function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=r("Q2AE");function a(t){if(t&&t instanceof Array&&t.length>0){var e=t;return!!(n.a.getters&&n.a.getters.roles).some(function(t){return e.includes(t)})}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}},JNL0:function(t,e,r){"use strict";r.d(e,"a",function(){return a}),r.d(e,"f",function(){return i}),r.d(e,"c",function(){return o}),r.d(e,"d",function(){return c}),r.d(e,"b",function(){return s}),r.d(e,"e",function(){return l});var n=r("t3Un");function a(t){return Object(n.a)({url:"api/projects/",method:"post",data:t})}function i(t){return Object(n.a)({url:"api/projects/"+t+"/",method:"get"})}function o(t){return Object(n.a)({url:"api/projects/"+t+"/",method:"delete"})}function c(t,e){return Object(n.a)({url:"api/projects/"+t+"/",method:"put",data:e})}function s(t){return Object(n.a)({url:"api/project/copy/",method:"post",data:t})}function l(t,e){return Object(n.a)({url:"api/projects/statistics/?type="+t,method:"post",data:e})}},Qdvm:function(t,e,r){"use strict";r.d(e,"c",function(){return a}),r.d(e,"d",function(){return i}),r.d(e,"b",function(){return o}),r.d(e,"a",function(){return c});var n=r("t3Un");function a(t){return Object(n.a)({url:"api/deploy/excu/",method:"post",data:t})}function i(t){return Object(n.a)({url:"api/deploy/ver/?id="+t,method:"get"})}function o(t){return Object(n.a)({url:"api/deploy/applog/",method:"post",data:t})}function c(t){return Object(n.a)({url:"api/deploy/applog/",method:"post",data:t,responseType:"blob"})}},qpgI:function(t,e,r){"use strict";r.d(e,"c",function(){return a}),r.d(e,"e",function(){return i}),r.d(e,"a",function(){return o}),r.d(e,"b",function(){return c}),r.d(e,"d",function(){return s});var n=r("t3Un");function a(t){return t?Object(n.a)({url:"api/device/list/?os_type="+t,method:"get"}):Object(n.a)({url:"api/device/list/",method:"get"})}function i(t){return Object(n.a)({url:"api/devices/"+t+"/",method:"get"})}function o(t){return Object(n.a)({url:"api/devices/"+t+"/",method:"delete"})}function c(t,e){return Object(n.a)({url:"api/devices/"+t+"/",method:"put",data:e})}function s(t,e){return Object(n.a)({url:"api/devices/statistics/?type="+t,method:"post",data:e})}},tRew:function(t,e,r){"use strict";r.r(e);var n=r("7Qib"),a=r("qpgI"),i=r("Qdvm"),o=r("41Be"),c=r("JNL0"),s={data:function(){return{search:"",listloading:!1,servers:"",project_data:{server_ids:""},list_data:[],hosts:[],rules:{server_ids:[{required:!0,message:"请选择服务器",trigger:"blur"}]}}},computed:{tables:function(){var t=this.search;return t?this.list_data.filter(function(e){return e.includes(t)}):this.list_data}},created:function(){var t=this;this.init(),setTimeout(function(){Object(a.c)("Linux").then(function(e){var r=t.servers.split(","),n=t.hosts,a=t.project_data;e.forEach(function(t,e){var a=!0,i=!1,o=void 0;try{for(var c,s=r[Symbol.iterator]();!(a=(c=s.next()).done);a=!0){c.value===t.key&&n.push(t)}}catch(t){i=!0,o=t}finally{try{a||null==s.return||s.return()}finally{if(i)throw o}}}),a.server_ids=r[0]})},500)},methods:{parseTime:n.b,checkPermission:o.a,init:function(){var t=this;Object(c.f)(this.$route.query.id).then(function(e){t.project_data.name=e.name,t.project_data.server_ids=e.server_ids,t.project_data.app_log_path=e.app_log_path,t.servers=e.server_ids})},doLoglist:function(){var t=this;this.$refs.project.validate(function(e){if(!e)return!1;t.listloading=!0;var r={excu:"list",host:t.project_data.server_ids,app_log_path:t.project_data.app_log_path};Object(i.b)(r).then(function(e){t.listloading=!1,t.list_data=e.detail}).catch(function(e){t.listloading=!1,console.log(e)})})},doDown:function(t){var e={excu:"filedown",host:this.project_data.server_ids,file_path:t};Object(i.a)(e).then(function(e){var r=new Blob([e]),n=t.replace(/\.[^\.]+/,".tar.gz");if("download"in document.createElement("a")){var a=document.createElement("a");a.download=n,a.style.display="none",a.href=URL.createObjectURL(r),document.body.appendChild(a),a.click(),URL.revokeObjectURL(a.href),document.body.removeChild(a)}else navigator.msSaveBlob(r,n)}).catch(function(t){console.log(t)})}}},l=r("KHd+"),u=Object(l.a)(s,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("el-card",{staticClass:"box-card"},[r("el-row",[r("el-col",{attrs:{span:12}},[r("div",{staticClass:"clearfix"},[r("span",[t._v("项目名称："+t._s(t.project_data.name))])])]),t._v(" "),r("el-col",{attrs:{span:9}},[r("el-form",{ref:"project",attrs:{model:t.project_data,rules:t.rules,size:"small","label-width":"80px"}},[r("el-form-item",{attrs:{label:"服务器",prop:"server_ids"}},[r("el-select",{staticStyle:{width:"230px"},attrs:{placeholder:"请选择服务器"},model:{value:t.project_data.server_ids,callback:function(e){t.$set(t.project_data,"server_ids",e)},expression:"project_data.server_ids"}},t._l(t.hosts,function(t){return r("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})}),1)],1)],1)],1),t._v(" "),r("el-col",{attrs:{span:3}},[r("el-button",{attrs:{loading:t.listloading,size:"mini",type:"primary",icon:"el-icon-share"},on:{click:t.doLoglist}},[t._v("获取列表")])],1)],1)],1),t._v(" "),r("el-card",[r("div",{staticClass:"head-container",staticStyle:{float:"right"}},[r("div",{staticClass:"filter-item",staticStyle:{"font-size":"15px"}},[t._v("日志搜索：")]),t._v(" "),r("el-input",{staticClass:"filter-item",staticStyle:{display:"inline-block",width:"200px"},attrs:{placeholder:"请输入搜索内容"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tables,size:"small",border:""}},[r("el-table-column",{attrs:{label:"序号",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",[t._v(t._s(e.$index+1))])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"日志列表"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return t.doDown(e.row)}}},[t._v(t._s(e.row))])]}}])}),t._v(" "),t.checkPermission(["admin","deploy_all","applog_list"])?r("el-table-column",{attrs:{label:"操作",width:"250px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(r){return t.doDown(e.row)}}},[t._v("下载")])]}}],null,!1,597816287)}):t._e()],1)],1)],1)},[],!1,null,null,null);e.default=u.exports}}]);