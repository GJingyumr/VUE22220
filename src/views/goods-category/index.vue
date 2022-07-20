<template>
  <div class="categoryList">
    <div>
      <div class="categoryList_button">
        <el-button size="small" type="primary">新增</el-button>
      </div>
      <div>  02
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="700" />
          <el-table-column prop="name" label="Name"/>
          <el-table-column prop="name" label="Name"/>
          <el-table-column prop="name" label="Name"/>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style scoped lang="scss">
.categoryList {
  width: calc(100vw - 240px);
  height: calc(100vh - 120px);
  overflow: auto;
  background-color: white;
  margin-left: 15px;
}
.categoryList_button {
  margin: 15px 0 0 15px;
}
</style>
