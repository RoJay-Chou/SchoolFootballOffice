<template>
  <div class="login-container">
    <div class="container-title">SCHOOL FOOTBALL OFFICE</div>
    <div class="container-text">登录</div>
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="login-ruleForm">
      <div class="content_items">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入账号"/>
        </el-form-item>
      </div>
      <div class="content_items">
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码"/>
        </el-form-item>
      </div>
      <div>
        <button type="button" class="login-btn" @click="saveToLogin">登录</button>
      </div>
    </el-form>
    <div class="login-forget"><span @click="forgetBtn">忘记密码？</span></div>
  </div>
</template>

<script>
const validateUserName = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入账号'))
  } else {
    callback()
  }
}

const validatePassword = (rule, value, callback) => {
  if (value === '') {
    callback('请输入密码')
  } else {
    callback()
  }
}
export default {
  name: 'LoginList',
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, validator: validateUserName, trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePassword, trigger: 'blur' }
        ]
      },
      redirect: undefined
    }
  },
  methods: {
    saveToLogin() {
      if (this.ruleForm.username === 'admin' && this.ruleForm.password === 'abcd1234') {
        this.$router.push({ name: 'schoolDetial' })
      } else {
        this.$confirm('账号或密码错误!', '提示', {
          confirmButtonText: '确定',
          showCancelButton: false,
          showClose: false,
          type: 'error'
        }).then(() => {
          this.ruleForm.password = ''
        })
      }
    },
    forgetBtn() {
      this.$router.push({ name: 'LoginForget' })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  z-index: 9;
  .container-title{
    font-weight: 700;
    font-style: normal;
    font-size: 28px;
    color: #666666;
    &:hover {
      color: #666666;
      -webkit-text-stroke: 1px gold;
    }
  }
  .container-text{
    font-size: 18px;
    font-weight: 500;
    color: #666666;
    margin-top: 10px;
    margin-bottom: 40px;
  }
  .login-ruleForm{
    .content_items{
      padding-bottom: 10px;
    }
    /deep/ .el-input{
      border-radius: 0 !important;
      .el-input__inner{
        border-radius: 0 !important;
        &:focus{
          border-color: rgba(4, 127, 181, 1);
        }
      }
    }
  }
  .login-btn{
    width: 100%;
    background-color: rgba(4, 127, 181, 1);
    height: 40px;
    border: none;
    font-weight: 700;
    font-style: normal;
    font-size: 16px;
    color: #FFFFFF;
    margin-top: 30px;
    cursor: pointer;
    user-select: none;
    &:hover{
      background-color: rgba(1, 139, 199, 1);
    }
    &:active{
      opacity: 0.9
    }
  }
  .login-forget{
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #047FB5;
    text-align: right;
    padding: 10px 0;
    cursor: pointer;
    user-select: none;
  }
}
</style>
