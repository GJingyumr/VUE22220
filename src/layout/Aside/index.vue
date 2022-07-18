<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Help /></el-icon>
          <span>后台面板</span>
        </template>
        <el-menu-item ><el-icon><HomeFilled /></el-icon>主控台</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><ShoppingBag /></el-icon>
          <span>商品管理</span>
        </template>
        <el-menu-item><el-icon><ShoppingCartFull /></el-icon>商品管理</el-menu-item>
        <el-menu-item><el-icon><Menu /></el-icon>分类管理</el-menu-item>
        <el-menu-item><el-icon><Aim /></el-icon>规格管理</el-menu-item>
        <el-menu-item><el-icon><Postcard /></el-icon>优惠券管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <span><el-icon><User /></el-icon>用户管理</span>
        </template>
        <el-menu-item ><el-icon><UserFilled /></el-icon>用户管理</el-menu-item>
        <el-menu-item><el-icon><DataAnalysis /></el-icon>会员等级</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>
          <el-icon><Files /></el-icon>
          <span>订单管理</span>
        </template>
        <el-menu-item >订单管理</el-menu-item>
        <el-menu-item><el-icon><Comment /></el-icon>评论管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>
          <el-icon><Management /></el-icon>
          <span>管理员管理</span>
        </template>
        <el-menu-item >管理员管理</el-menu-item>
        <el-menu-item>权限管理</el-menu-item>
        <el-menu-item>角色管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="7">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item >基础设置</el-menu-item>
        <el-menu-item>交易设置</el-menu-item>
        <el-menu-item>物流设置</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="8">
        <template #title>
         <el-icon><ShoppingCart /></el-icon>
          <span>分销模块</span>
        </template>
        <el-menu-item >分销员管理</el-menu-item>
        <el-menu-item>分销设置</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="9">
        <template #title>
          <el-icon><MostlyCloudy /></el-icon>
          <span>其他模块</span>
        </template>
        <el-menu-item >图库管理</el-menu-item>
        <el-menu-item>公告管理</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup></script>
<style scoped lang="scss"></style>
