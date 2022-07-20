<template>
 <div class="main">
  <div class="tagsview">
    tagsview
  </div>
  <router-view></router-view>
 </div>
</template>

<script setup>
</script>
<style scoped lang='scss'>
.main{
  width: calc(100vw - 240px);
  height: calc(100vh - 130px);
}
.tagsview{
  width: 100%;
  height: 50px;
}
</style>
