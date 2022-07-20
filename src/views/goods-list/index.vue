<template>
  <div>
    <el-tabs class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">User</el-tab-pane>
      <el-tab-pane label="审核中" name="second">Config</el-tab-pane>
      <el-tab-pane label="出售中" name="third">Role</el-tab-pane>
      <el-tab-pane label="已下架" name="fourth">Task</el-tab-pane>
      <el-tab-pane label="库存预警" name="five">Task</el-tab-pane>
      <el-tab-pane label="回收站" name="sex">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup></script>
<style scoped lang="scss">
.demo-tabs{
  margin-left: 15px;
}
</style>
