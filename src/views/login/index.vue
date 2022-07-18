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
            <el-form status-icon :rules="rules" :model="loginForm">
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
                <el-button>登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const loginForm = reactive({
  username: '',
  password: ''
})
const rules = {
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
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
