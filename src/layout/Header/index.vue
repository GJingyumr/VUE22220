<template>
  <div class="layout_Header">
    <div class="title">
      <el-icon><ElemeFilled /></el-icon>
      <span>积云编程</span>
    </div>
    <div class="title_right">
      <div classs="isboicon">
        <el-icon @click="handleCollapseMenu" class="icon"><Fold /></el-icon>
        <el-icon class="icon" @click="loctionrel"><Refresh /></el-icon>
      </div>
      <div class="bc">
        <el-icon class="icons" @click="toggleFullscreen"
          ><FullScreen
        /></el-icon>
        <el-avatar
          class="avatar"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <el-dropdown @command="handlelogOut">
          <span class="el-dropdown-link">
            admin
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="profile">修改密码</el-dropdown-item>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import screenfull from 'screenfull'
const router = useRouter()
const store = useStore()
const handlelogOut = (command) => {
  switch (command) {
    case 'profile':
      handleToProfile()
      break
    case 'logout':
      handleTologout()
      break
  }
}
const handleCollapseMenu = () => {
  store.dispatch('menu/setCollapse')
}
const handleToProfile = () => {
  console.log('profile')
}

const handleTologout = async () => {
  await store.dispatch('user/logout')
  router.push('/login')
  ElNotification({
    title: '提示',
    message: '退出成功!!!',
    type: 'success'
  })
}
const toggleFullscreen = () => {
  if (!screenfull.isEnabled) {
    return false
  }
  screenfull.request()
}
const loctionrel = () => {
  location.reload()
}
</script>
<style scoped lang="scss">
.layout_Header {
  width: 100%;
  height: 65px;
  display: flex;
  padding: 0;
  .title {
    width: 200px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
  }
  .title_right {
    width: calc(100vw - 200px);
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }
}
.avatar {
  margin: 0 20px;
}
.icon {
  margin: 0 20px;
}
.icons {
  margin: 0 20px;
  line-height: 65px;
}
.bc {
  display: flex;
  align-items: center;
  height: 65px;
}
.el-dropdown {
  margin-right: 20px;
  color: white;
}
</style>
