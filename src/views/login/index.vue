<template>
  <div class="handleScss">
    <div class="handlebox_one">
      <div class="handlebox_one_title">
        <p class="title">欢迎光临</p>
      </div>
    </div>
    <div class="handleFrom">
      <div class="handleFrom_from">
        <div class="handleFrom_title">
          <h1>欢迎回来</h1>
          <p>---------- 账号密码登录 ----------</p>
          <div>
            <el-form
              status-icon
              ref="LoginForm"
              :rules="rules"
              :model="loginForm"
            >
              <el-form-item prop="username">
                <el-input
                  v-model.trim="loginForm.username"
                  placeholder="请输入账号"
                >
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model.trim="loginForm.password"
                  type="password"
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="handleLoginSubmit">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
const router = useRouter()
const store = useStore()
const LoginForm = ref(null)
const loginForm = reactive({
  username: 'admin',
  password: 'admin'
})
const rules = {
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}
const handleLoginSubmit = async () => {
  LoginForm.value.validate(async (valid) => {
    if (!valid) return
    await store.dispatch('user/login', loginForm)
    await store.dispatch('user/userInfo')
    router.push('/')
    ElNotification({
      title: '提示',
      message: '登录成功!!!',
      type: 'success'
    })
  })
}
</script>
<style scoped lang="scss">
.handleScss {
  width: 100%;
  height: 100%;
  display: flex;
  .handlebox_one {
    width: 70%;
    height: 100%;
    background: #6366f1;
  }
  .handlebox_one_title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .title {
      font-size: 50px;
      font-weight: bold;
      color: white;
    }
  }
  .handleFrom {
    width: 30%;
    height: 100%;
    .handleFrom_from {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      .handleFrom_title {
        text-align: center;
        h1 {
          margin-bottom: 10px;
        }
        p {
          color: #d1d5db;
        }
      }
    }
  }
}
.el-button {
  width: 210px;
  background-color: #626aef;
  border-radius: 20px;
  color: white;
}
.el-form {
  margin-top: 20px;
}
</style>
