<template>
  <div>
    <el-menu
      :style="{ width: $store.getters.collapse ? '60px' : '200px' }"
      class="el-menu-vertical-demo"
      :collapse="$store.getters.collapse"
      :collapse-transition="false"
      unique-opened
      router
    >
      <el-sub-menu index="/">
        <template #title>
          <el-icon><Help /></el-icon>
          <span>后台面板</span>
        </template>
        <el-menu-item index="/"
          ><el-icon><HomeFilled /></el-icon>主控台</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="/goods">
        <template #title>
          <el-icon><ShoppingBag /></el-icon>
          <span>商品管理</span>
        </template>
        <el-menu-item index="/goods/list"
          ><el-icon><ShoppingCartFull /></el-icon>商品管理</el-menu-item
        >
        <el-menu-item index="/category/list"
          ><el-icon><Menu /></el-icon>分类管理</el-menu-item
        >
        <el-menu-item index="/skus/list"
          ><el-icon><Aim /></el-icon>规格管理</el-menu-item
        >
        <el-menu-item index="/coupon/list"
          ><el-icon><Postcard /></el-icon>优惠券管理</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="/user">
        <template #title>
          <el-icon><User /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/user/list"
          ><el-icon><UserFilled /></el-icon>用户管理</el-menu-item
        >
        <el-menu-item index="/level/list"
          ><el-icon><DataAnalysis /></el-icon>会员等级</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="/order">
        <template #title>
          <el-icon><Files /></el-icon>
          <span>订单管理</span>
        </template>
        <el-menu-item index="/order/list">
        <el-icon><Reading /></el-icon>
        订单管理</el-menu-item>
        <el-menu-item index="/comment/list"
          ><el-icon><Comment /></el-icon>评论管理</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="/manager">
        <template #title>
          <el-icon><Management /></el-icon>
          <span>管理员管理</span>
        </template>
        <el-menu-item index="/manager/list"><el-icon><Coordinate /></el-icon>管理员管理</el-menu-item>
        <el-menu-item index="/access/list"><el-icon><Connection /></el-icon>权限管理</el-menu-item>
        <el-menu-item index="/role/list"><el-icon><Histogram /></el-icon>角色管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/settings">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/setting/base"><el-icon><Baseball /></el-icon>基础设置</el-menu-item>
        <el-menu-item><el-icon><CreditCard /></el-icon>交易设置</el-menu-item>
        <el-menu-item><el-icon><Bicycle /></el-icon>物流设置</el-menu-item>
      </el-sub-menu>
      <el-sub-menu  index="/">
        <template #title>
          <el-icon><ShoppingCart /></el-icon>
          <span>分销模块</span>
        </template>
        <el-menu-item><el-icon><UserFilled /></el-icon>分销员管理</el-menu-item>
        <el-menu-item><el-icon><SetUp /></el-icon>分销设置</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/">
        <template #title>
          <el-icon><MostlyCloudy /></el-icon>
          <span>其他模块</span>
        </template>
        <el-menu-item><el-icon><PictureFilled /></el-icon>图库管理</el-menu-item>
        <el-menu-item><el-icon><Notification /></el-icon>公告管理</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
</script>
<style scoped lang="scss">
.el-menu{
  border-right: 0;
}
</style>
