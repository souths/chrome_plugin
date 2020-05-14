<template>
  <div class="main_app">
    <h1>Hello tab</h1>
          <el-button
        style="float: right; padding: 3px 0"
        type="danger"
        size="mini"
        plain
      >操作按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>

export default {
  name: 'app',
  components:{
    
  }
}
</script>

<style>
.main_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
