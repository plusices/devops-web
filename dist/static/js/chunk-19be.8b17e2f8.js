(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-19be"],{"41Be":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n("Q2AE");function s(e){if(e&&e instanceof Array&&e.length>0){var t=e;return!!(i.a.getters&&i.a.getters.roles).some(function(e){return t.includes(e)})}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}},"5/Tm":function(e,t,n){"use strict";n.r(t);var i=n("41Be"),s=n("7Qib"),o={props:{sup_this:{type:Object,required:!0}},data:function(){return{delLoading:!1}},methods:{parseTime:s.b,checkPermission:i.a,toPublish:function(e){this.$router.push({path:"tasks/publish",query:{id:e}})},toTools:function(e){this.$router.push({path:"tasks/tools",query:{id:e}})}}},r=n("KHd+"),a=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.sup_this.loading,expression:"sup_this.loading"}],staticStyle:{width:"100%"},attrs:{data:e.sup_this.data,size:"small",border:""}},[n("el-table-column",{attrs:{prop:"name",label:"名称"}}),e._v(" "),n("el-table-column",{attrs:{label:"环境",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s("dev"==t.row.environment?"开发环境":"test"==t.row.environment?"测试环境":"prod"==t.row.environment?"生产环境":t.row.environment))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"最近状态",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return["Succeed"==t.row.last_task_status?n("span",{staticStyle:{color:"#00CC00"}},[e._v("成功")]):n("span",{staticStyle:{color:"red"}},[e._v("失败")])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"350px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",{staticStyle:{display:"inline-block",margin:"0px 1px"}},[e.checkPermission(["admin","deploy_all","deploy_excu"])?n("el-button",{attrs:{size:"mini",type:"success",icon:"el-icon-caret-right"},on:{click:function(n){return e.toPublish(t.row.id)}}},[e._v("发布")]):e._e()],1),e._v(" "),n("div",{staticStyle:{display:"inline-block",margin:"0px 1px"}},[e.checkPermission(["admin","deploy_all","deploy_excu"])?n("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:function(n){return e.toTools(t.row.id)}}},[e._v("工具")]):e._e()],1)]}}])})],1),e._v(" "),n("el-pagination",{staticStyle:{"margin-top":"8px"},attrs:{total:e.sup_this.total,layout:"total, prev, pager, next, sizes"},on:{"size-change":e.sup_this.sizeChange,"current-change":e.sup_this.pageChange}})],1)},[],!1,null,"4fe2e4fa",null);t.default=a.exports}}]);