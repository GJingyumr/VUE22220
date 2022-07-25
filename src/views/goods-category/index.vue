<template>
  <div class="categoryList">
    <div>
      <div class="categoryList_button">
        <el-button size="small" type="primary" @click="table = true"
          >新增</el-button
        >
      </div>
      <div>
        <el-table :data="categorys" width="100%">
          <el-table-column prop="name" width="800px"></el-table-column>
          <el-table-column>
            <el-button link type="primary" size="small" width="70px"
              >推荐商品</el-button
            >
          </el-table-column>
          <el-table-column prop="" label="" width="70px">
            <el-switch v-model="value1" class="mb-2" />
          </el-table-column>
          <el-table-column width="70px">
            <template v-slot="scope">
               <el-button link type="primary" size="small"  @click="ModifyMay(scope.row.id)">修改</el-button>
            </template>
          </el-table-column>
          <el-table-column width="70px">
            <el-button link type="primary" size="small">删除</el-button>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 新增的右侧弹出窗 -->
    <el-drawer v-model="table" title="新增" direction="rtl" size="50%">
      <el-form :model="form" status-icon>
        <el-form-item label="分类名称" prop="name">
          <el-input v-model="form.name" placeholder="分类名称" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm(ruleFormRef)">取消</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
    <!-- 修改的弹出窗 -->
    <el-drawer v-model="Modify" title="修改" direction="rtl" size="50%">
      <el-form :model="Modlist" status-icon>
        <el-form-item label="分类名称" prop="name">
          <el-input v-model="Modlist.name" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="ModifyAdd">提交</el-button>
          <el-button @click="resetForm(ruleFormRef)">取消</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import UserApi from '../../api/user'
const categorys = ref(null)
const value1 = ref(true)
const table = ref(false)
const Modify = ref(false)
const handleCli = async () => {
  const response = await UserApi.getcategory()
  console.log(response)
  categorys.value = response
}
handleCli()
const form = reactive({
  name: ''
})
const Modlist = reactive({
  name: ''
})
const submitForm = async () => {
  await UserApi.createcategory(form)
  console.log(form.name)
}
const ModifyMay = async (id) => {
  await UserApi.updateCategory(Modlist.id)
}
</script>
<style scoped lang="scss">
.categoryList {
  width: calc(100vw - 240px);
  height: calc(100vh - 120px);
  overflow: auto;
  background-color: white;
}
.categoryList_button {
  margin: 15px 0 0 15px;
}
.el-table {
  margin-left: 10px;
  margin-top: 10px;
}
</style>
