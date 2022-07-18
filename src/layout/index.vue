<template>
 <div class="layout_box">
  <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
 </div>
</template>

<script setup>
import Aside from './Aside'
import Main from './Main'
import Header from './Header'
</script>
<style scoped lang='scss'>
.layout_box{
  width: 100%;
  height: 100%;
}
.el-header{
  width: 100%;
  height: 65px;
  background-color: #4338ca;
  padding: 0;
}
.el-aside{
  height: calc(100vh - 65px);
  overflow: auto;
}
.el-main{
  background-color: #f3f4f6;
  width: calc(100vw - 200px);
  height: calc(100vh - 65px);
}
</style>
