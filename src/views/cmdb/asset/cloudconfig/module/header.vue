<template>
  <div class="head-container">
    <!-- 搜索 -->
    <el-input v-model="query.value" clearable placeholder="输入名称搜索" style="width: 200px;" class="filter-item" @keyup.enter.native="toQuery"/>
    <el-button class="filter-item" size="mini" type="primary" icon="el-icon-search" @click="toQuery">搜索</el-button>
    <!-- 新增 -->
    <div style="display: inline-block;margin-left:2px;">
      <el-button
        v-if="checkPermission(['admin','label_all','label_create'])"
        class="filter-item"
        size="mini"
        type="primary"
        icon="el-icon-plus"
        @click="$refs.form.dialog = true">新增</el-button>

      <el-button type="success" :loading="pullLoading" class="filter-item" size="mini" icon="el-icon-download" @click="pullAsset">拉取资产</el-button>
      <!-- 导出 -->
      <el-button v-if="checkPermission(['admin'])" :loading="downloadLoading" size="mini" class="filter-item" type="primary" icon="el-icon-download" @click="download">导出</el-button>
      <eForm ref="form" :is-add="true" :dicts="dicts"/>
    </div>


  </div>
</template>

<script>
import checkPermission from '@/utils/permission' // 权限判断函数
import { parseTime } from '@/utils/index'
import eForm from './form'
import {  PullExcu } from '@/api/cloudconfig'
// 查询条件
export default {
  components: { eForm },
  props: {
    query: {
      type: Object,
      required: true
    },
    dicts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      downloadLoading: false,
      pullLoading: false,
    }
  },
  methods: {
    checkPermission,
    toQuery() {
      this.$parent.page = 1
      this.$parent.init()
    },
    download() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['ID', '名称', '描述']
        const filterVal = ['id', 'name', 'desc']
        const data = this.formatJson(filterVal, this.$parent.data)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'createTime') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    pullAsset() {
      this.pullLoading = true
      this.$nextTick(() => {
        let __this=this
        this.$parent.multipleSelection.forEach(function (data, index) {
          PullExcu({ 'excu': 'pull','id':data.id }).then(res => {
            if (res.code === 200) {
              __this.$message({
                showClose: true,
                type: 'success',
                message: res.detail,
                duration: 3000
              })
            } else {
              __this.$message({
                showClose: true,
                type: 'error',
                message: res.detail,
                duration: 3000
              })
            }
            __this.pullLoading = false
          })
        })

      })
    },
  }
}
</script>
