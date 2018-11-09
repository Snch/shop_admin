<template>
  <div class="login">
    <el-form ref="form" :rules="rules" status-icon :model="form" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密 码" prop="password">
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <img src="../assets/avatar.jpg" alt="">

      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 3,
            max: 12,
            message: '长度在 3 到 12 个字符',
            trigger: 'change'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 12,
            message: '长度在 6 到 12 个字符',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios({
            url: 'http://localhost:8888/api/private/v1/login',
            method: 'post',
            data: this.form
          }).then(res => {
            if (res.data.meta.status === 200) {
              // 登录成功
              this.$message.success('登录成功')
              // 存储token
              localStorage.setItem('token', res.data.data.token)
              // 成功后跳转页面
              this.$router.push('/home')
            } else {
              // 登录失败
              this.$message.error('用户名或密码错误')
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less">
.login {
  height: 100%;
  background-color: #2d434c;
  overflow: hidden;
}
.el-form {
  width: 400px;
  height: 200px;
  margin: 200px auto;
  background-color: #fff;
  padding: 70px 40px 10px;
  border-radius: 10px;
  position: relative;

  img {
    position: absolute;
    left: 50%;
    top: -80px;
    transform: translateX(-50%);
    border-radius: 50%;
    border: 10px solid #fff;
  }
  .el-button:last-child {
    margin-left: 80px;
  }
}
</style>
