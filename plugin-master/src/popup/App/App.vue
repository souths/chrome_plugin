<template>
  <el-card class="box-card">
    <div
      slot="header"
      class="clearfix"
    >
    <el-button type="primary">主要按钮</el-button>
      <span>卡片名称</span>
      <el-button
        style="float: right; padding: 3px 0"
        type="danger"
        size="mini"
        plain
      >操作按钮</el-button>
    </div>
    <div
      v-for="o in 4"
      :key="o"
      class="text item"
    >
      {{'列表内容 ' + o }}
    </div>
  </el-card>
</template>

<script>

export default {
  name: 'app',
  mounted(){
    console.log('popup=>app')
  }
}
</script>

<style>
.box-card {
  width: 300px;
}
</style>
