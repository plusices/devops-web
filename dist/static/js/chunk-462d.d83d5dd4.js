(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-462d"],{"41Be":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("Q2AE");function r(t){if(t&&t instanceof Array&&t.length>0){var e=t;return!!(i.a.getters&&i.a.getters.roles).some(function(t){return e.includes(t)})}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}},"86NN":function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s}),n.d(e,"e",function(){return o});var i=n("t3Un");function r(){return Object(i.a)({url:"api/inventory/",method:"get"})}function u(t){return Object(i.a)({url:"api/inventory/"+t+"/get_inventory_hosts/",method:"get"})}function a(t){return Object(i.a)({url:"api/inventory/",method:"post",data:t})}function s(t,e){return Object(i.a)({url:"api/inventory/"+t+"/",method:"put",data:e})}function o(t,e){return Object(i.a)({url:"api/inventory/"+t+"/",method:"patch",data:e})}},AgHX:function(t,e,n){"use strict";n.r(e);var i=n("41Be"),r=n("K22w"),u=n("I7qB"),a=n("NM0R"),s=n("twU4"),o=n("86NN"),l=n("P4qI"),c={props:{query:{type:Object,required:!0},wholeUpdate:{type:Boolean,required:!0},wholeRelate:{type:Boolean,required:!1},in_data:{type:Object,required:!0},sup_this:{type:Object,required:!1}},data:function(){return{delLoading:!1,updateLoading:!1,status_list:[{value:"running",label:"在线"},{value:"stopped",label:"下线"}],group_list:[],label_list:[],business_list:[],cloud_accounts:[],device_types:[],selected_host_list:[],os_types:[{value:"Linux",label:"Linux系统"},{value:"Windows",label:"Windows系统"},{value:"Other",label:"其他系统"}]}},created:function(){var t=this;this.$nextTick(function(){t.getAllBusiness(),t.getAllGroup(),t.getAllLable(),t.getAllDeviceType(),t.getALLCloudAccount()})},methods:{checkPermission:i.a,toQuery:function(){if(this.wholeRelate){var t=this.sup_this;t.page=1,t.currentPage=1,t.init().then(function(){t.initSelection()})}else this.$parent.page=1,this.$parent.currentPage=1,this.$parent.init()},to:function(){this.$refs.form.dialog=!0},getPtoggleSelect:function(){console.log(this.$parent.$parent.data)},deleteSelect:function(){var t=this;if(this.$parent.multipleSelection){var e=this.$parent.multipleSelection.length;this.$confirm("此操作将删除"+e+"条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$parent.doSelectionDel(),t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}else this.$message({type:"info",message:"请先选择数据"})},refresh:function(){this.$parent.init()},getAllGroup:function(){var t=this;Array.isArray(this.group_list)&&0===this.group_list.length&&Object(u.d)().then(function(e){t.group_list=e.results})},getAllLable:function(){var t=this;Array.isArray(this.label_list)&&0===this.label_list.length&&Object(a.d)().then(function(e){t.label_list=e.results})},getALLCloudAccount:function(){var t=this;Array.isArray(this.cloud_accounts)&&0===this.cloud_accounts.length&&Object(l.e)().then(function(e){t.cloud_accounts=e.results})},getAllBusiness:function(){var t=this;Array.isArray(this.business_list)&&0===this.business_list.length&&Object(r.d)().then(function(e){t.business_list=e.results})},getAllDeviceType:function(){var t=this;Array.isArray(this.business_list)&&0===this.business_list.length&&Object(s.e)("DEVICE_TYPE").then(function(e){t.device_types=e[0].DEVICE_TYPE})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"Succeed"===t?e[t]?"成功":"失败":e[t]})})},updateHosts:function(){var t=this;Object(l.a)({excu:"pull"}).then(function(e){200===e.code?t.$message({showClose:!0,type:"success",message:e.detail,duration:3e3}):t.$message({showClose:!0,type:"error",message:e.detail,duration:3e3}),t.pullLoading=!1})},relateHosts:function(){var t=this;this.loading=!0,Object(o.e)(this.in_data.id,{hosts:this.sup_this.serverIds}).then(function(e){t.$message({showClose:!0,type:"success",message:"保存成功!",duration:2500}),t.loading=!1,t.$parent.$parent.dialog=!1}).catch(function(e){t.loading=!1,console.log(e)})}}},d=n("KHd+"),p=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"260px"},attrs:{clearable:"",placeholder:"输入IP/主机名/instance_id搜索"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.toQuery(e)}},model:{value:t.query.value,callback:function(e){t.$set(t.query,"value",e)},expression:"query.value"}}),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"primary",icon:"el-icon-search"},on:{click:t.toQuery}},[t._v("搜索")]),t._v(" "),n("div",{staticStyle:{display:"inline-block",margin:"0px 2px"}},[n("el-button-group",[t.checkPermission(["admin","device_all","device_delete"])?n("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"primary"},on:{click:t.getPtoggleSelect}},[t._v("全选")]):t._e(),t._v(" "),t.wholeUpdate&&t.checkPermission(["admin","device_all","device_delete"])?n("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"danger"},on:{click:t.deleteSelect}},[t._v("删除")]):t._e(),t._v(" "),t.wholeUpdate?n("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"primary"},on:{click:t.refresh}},[t._v("刷新")]):t._e()],1)],1),t._v(" "),n("div",{staticStyle:{display:"inline-block",margin:"0px 8px",float:"right"}},[t.wholeUpdate&&t.checkPermission(["admin","device_all"])?n("el-button-group",[n("el-button",{staticClass:"filter-item",attrs:{loading:t.updateLoading,size:"mini",type:"warning",icon:"el-icon-plus"},on:{click:t.updateHosts}},[t._v("全部更新")])],1):t._e(),t._v(" "),t.wholeRelate&&t.checkPermission(["admin","device_all"])?n("el-button-group",[n("el-button",{staticClass:"filter-item",attrs:{loading:t.updateLoading,size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:t.relateHosts}},[t._v("全部关联")])],1):t._e()],1),t._v(" "),n("br"),t._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"192px"},attrs:{clearable:"",placeholder:"云账号"},on:{change:t.toQuery},model:{value:t.query.cloud_id,callback:function(e){t.$set(t.query,"cloud_id",e)},expression:"query.cloud_id"}},t._l(t.cloud_accounts,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1),t._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"192px"},attrs:{clearable:"",placeholder:"设备类型"},on:{change:t.toQuery},model:{value:t.query.device_type,callback:function(e){t.$set(t.query,"device_type",e)},expression:"query.device_type"}},t._l(t.device_types,function(t){return n("el-option",{key:t.key,attrs:{label:t.value,value:t.key}})}),1),t._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"192px"},attrs:{clearable:"",placeholder:"操作系统"},on:{change:t.toQuery},model:{value:t.query.os_type,callback:function(e){t.$set(t.query,"os_type",e)},expression:"query.os_type"}},t._l(t.os_types,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"100px"},attrs:{clearable:"",placeholder:"状态"},on:{change:t.toQuery},model:{value:t.query.status,callback:function(e){t.$set(t.query,"status",e)},expression:"query.status"}},t._l(t.status_list,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)},[],!1,null,null,null);e.default=p.exports},I7qB:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a}),n.d(e,"e",function(){return s}),n.d(e,"c",function(){return o}),n.d(e,"f",function(){return l});var i=n("t3Un");function r(){return Object(i.a)({url:"api/groups/",method:"get"})}function u(t){return Object(i.a)({url:"api/groups/",method:"post",data:t})}function a(t){return Object(i.a)({url:"api/groups/"+t+"/",method:"delete"})}function s(t){return Object(i.a)({url:"api/groups/"+t+"/",method:"get"})}function o(t,e){return Object(i.a)({url:"api/groups/"+t+"/",method:"put",data:e})}function l(t,e){return Object(i.a)({url:"api/groups/"+t+"/",method:"patch",data:e})}},K22w:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a}),n.d(e,"e",function(){return s}),n.d(e,"c",function(){return o}),n.d(e,"f",function(){return l});var i=n("t3Un");function r(){return Object(i.a)({url:"api/businesses/",method:"get"})}function u(t){return Object(i.a)({url:"api/businesses/",method:"post",data:t})}function a(t){return Object(i.a)({url:"api/businesses/"+t+"/",method:"delete"})}function s(t){return Object(i.a)({url:"api/businesses/"+t+"/",method:"get"})}function o(t,e){return Object(i.a)({url:"api/businesses/"+t+"/",method:"put",data:e})}function l(t,e){return Object(i.a)({url:"api/businesses/"+t+"/",method:"patch",data:e})}},NM0R:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a}),n.d(e,"e",function(){return s}),n.d(e,"c",function(){return o}),n.d(e,"f",function(){return l});var i=n("t3Un");function r(){return Object(i.a)({url:"api/labels/",method:"get"})}function u(t){return Object(i.a)({url:"api/labels/",method:"post",data:t})}function a(t){return Object(i.a)({url:"api/labels/"+t+"/",method:"delete"})}function s(t){return Object(i.a)({url:"api/labels/"+t+"/",method:"get"})}function o(t,e){return Object(i.a)({url:"api/labels/"+t+"/",method:"put",data:e})}function l(t,e){return Object(i.a)({url:"api/labels/"+t+"/",method:"patch",data:e})}},P4qI:function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"b",function(){return u}),n.d(e,"f",function(){return a}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return l});var i=n("t3Un");function r(){return Object(i.a)({url:"api/cloudconfig/",method:"get"})}function u(t){return Object(i.a)({url:"api/cloudconfig/",method:"post",data:t})}function a(t){return Object(i.a)({url:"api/cloudconfig/"+t+"/",method:"get"})}function s(t){return Object(i.a)({url:"api/cloudconfig/"+t+"/",method:"delete"})}function o(t,e){return Object(i.a)({url:"api/cloudconfig/"+t+"/",method:"put",data:e})}function l(t){return Object(i.a)({url:"api/pull/excu/",method:"post",data:t})}},twU4:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return s}),n.d(e,"e",function(){return o});var i=n("t3Un");function r(){return Object(i.a)({url:"api/dict/tree/",method:"get"})}function u(t){return Object(i.a)({url:"api/dicts/",method:"post",data:t})}function a(t){return Object(i.a)({url:"api/dicts/"+t+"/",method:"delete"})}function s(t,e){return Object(i.a)({url:"api/dicts/"+t+"/",method:"put",data:e})}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Object(i.a)({url:"api/dicts/?&key="+e,method:"get"})}}}]);