<template>
  <div class="couponBox">
    <div class="couponTop">
      <el-button type="primary" size="small">新增</el-button>
    </div>
    <div>
      <el-table :data="couponList" style="width: 100%">
        <el-table-column prop="scope" label="优惠券名称">
          <template v-slot="scope">
            <div>
              <h5>{{ scope.row.name }}</h5>
              <span>{{ scope.row.start_time }} ~ {{ scope.row.update_time }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="" label="状态"></el-table-column>
        <el-table-column prop="scope" label="优惠">
          <template v-slot="scope">
            折扣{{ scope.row.value }}折
          </template>
        </el-table-column>
        <el-table-column prop="total" label="发放数量"></el-table-column>
        <el-table-column prop="used" label="已使用"></el-table-column>
        <el-table-column prop="" label="操作"></el-table-column>
      </el-table>
    </div>
    <el-pagination background layout="prev, pager, next" :total="10" />
  </div>
</template>

<script setup>
import UserApi from '../../api/user'
import { ref } from 'vue'
const couponList = ref(null)
const page = ref(1)
const getcoupon = async () => {
  const respon = await UserApi.getcouponList(page.value)
  console.log(respon)
  couponList.value = respon.list
}
getcoupon()
</script>
<style scoped lang="scss">
.couponBox {
  width: calc(100vw - 240px);
  height: calc(100vh - 120px);
  overflow: auto;
  background-color: white;
}
.couponTop {
  margin: 15px 0 0 15px;
}
</style>
