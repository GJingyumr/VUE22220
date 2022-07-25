<template>
  <div class="skusBox">
    <div class="skusTop">
      <el-button size="small" type="primary">新增</el-button>
      <el-button size="small" type="danger">批量删除</el-button>
    </div>
    <div>
      <el-table :data="getInfo" style="width: 100%">
        <el-table-column type="selection" width="100" />
        <el-table-column label="规格名称" prop="name"></el-table-column>
        <el-table-column label="规格值" prop="default"></el-table-column>
        <el-table-column label="排序" prop="order"></el-table-column>
        <el-table-column label="状态">
        </el-table-column>
        <el-table-column label="操作">
          <el-button size="small" link type="primary">修改</el-button>
          <el-button size="small" link type="primary">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination background layout="prev, pager, next" :total="10" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UserApi from '../../api/user'
const getInfo = ref(null)
const page = ref(1)
const getInfoList = async () => {
  const response = await UserApi.getGetinfo(page.value)
  console.log(response)
  getInfo.value = response.list
  // console.log(getInfo.value)
}
getInfoList()
</script>
<style scoped lang="scss">
.skusBox {
  width: calc(100vw - 240px);
  height: calc(100vh - 120px);
  overflow: auto;
  background-color: white;
  margin-left: 15px;
}
.skusTop {
  margin-top: 15px;
  margin-left: 15px;
}
.el-table {
  margin-top: 20px;
  margin-left: 15px;
}
</style>
