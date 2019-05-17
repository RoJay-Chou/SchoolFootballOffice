<template>
  <div class="login-container">
    <div class="container-title">SCHOOL FOOTBALL OFFICE</div>
    <div class="container-text">忘记密码</div>
    <el-form v-show="isStep1" ref="ruleFormUsername" :model="ruleFormUsername" :rules="rules" class="login-ruleForm">
      <div class="content_items">
        <el-form-item prop="username">
          <el-input v-model="ruleFormUsername.username" placeholder="请输入账号"/>
        </el-form-item>
      </div>
      <div>
        <button type="button" class="login-btn" @click="checkname('ruleFormUsername')">下一步</button>
      </div>
    </el-form>

    <el-form v-show="!isStep1" ref="ruleFormPhone" :model="ruleFormPhone" :rules="rules" class="login-ruleForm">
      <div class="content_items">
        <div class="content-item__phone">当前手机号{{ phoneMask }}</div>
        <el-form-item prop="phone">
          <el-input v-model="ruleFormPhone.phone" placeholder="请输入完整手机号"/>
        </el-form-item>
      </div>
      <div>
        <button v-if="isOpen" type="button" class="login-btn" @click="sendToPwd('ruleFormPhone')">{{ textMsg }}</button>
        <button v-else :disabled="true" type="button" class="login-btn">{{ countDown }}s</button>
        <div class="content-item__msg">已获取密码，<span class="content-item__login" @click="loginHandle">重新登录 ></span></div>
      </div>
    </el-form>
  </div>
</template>

<script>
// import { checkUserName, checkPhone } from '@/api/login'
const TIME = 60
export default {
  name: 'Forget',
  data() {
    const validatePhone = (rule, value, callback) => {
      const numReg = new RegExp('^[0-9]*$')
      const phoneReg = new RegExp('^((13[0-9])|(14[0-9])|(15[0-9])|(16[0-9])|(17[0-9])|(18[0-9])|(19[0-9]))\\d{8}$')
      if (value === '') {
        callback(new Error('请输入联系人手机号码'))
      } else if (value.length !== 11) {
        callback(new Error('请输入11位数字联系人手机号码'))
      } else if (!numReg.test(value)) {
        callback(new Error('联系人手机号码只能为数字类型'))
      } else if (!phoneReg.test(value)) {
        callback(new Error('请正确输入联系人手机号码'))
      } else {
        callback()
      }
    }
    return {
      ruleFormUsername: {
        username: ''
      },
      ruleFormPhone: {
        phone: ''
      },
      phoneMask: '',
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        phone: [
          { required: true, validator: validatePhone, trigger: 'blur' }
        ]
      },
      textMsg: '获取密码',
      countDown: TIME,
      isStep1: true,
      isOpen: true
    }
  },
  created() {
    console.log('+++++++++++++++')
  },
  methods: {
    checkname(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        //   const username = this.ruleFormUsername.username
        //   checkUserName(username).then((data) => {
        //     if (data) {
        //       this.phoneMask = data
        //       this.isStep1 = false
        //     } else {
        //       this.$message({
        //         message: '请正确输入账号',
        //         customClass: 'ptInfoMessage'
        //       })
        //     }
        //   })
        }
      })
    },
    loginHandle() {
      this.$router.go(-1)
    },
    sendToPwd(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 获取密码倒计时
          this.countDown = TIME
          this.isOpen = false
          const that = this
          const timer = setInterval(() => {
            if (that.countDown < 1) {
              clearInterval(timer)
              that.isOpen = true
              that.countDown = TIME
              that.textMsg = '未收到短信，重新发送'
            }
            that.countDown -= 1
          }, 1000)

          // 调用获取密码
        //   const username = this.ruleFormUsername.username
        //   const mobile = this.ruleFormPhone.phone
        //   checkPhone(username, mobile).then(data => {
        //     if (data) {
        //       this.$message({
        //         message: '短信发送成功！',
        //         customClass: 'ptInfoMessage'
        //       })
        //     } else {
        //       this.$message({
        //         message: '短信发送失败！',
        //         customClass: 'ptInfoMessage'
        //       })
        //       clearInterval(timer)
        //       that.isOpen = true
        //       that.countDown = TIME
        //       that.textMsg = '未收到短信，重新发送'
        //     }
        //   }).catch((error) => {
        //     if (error) {
        //       clearInterval(timer)
        //       that.isOpen = true
        //       that.countDown = TIME
        //       that.textMsg = '未收到短信，重新发送'
        //     }
        //   })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.content-item__phone {
  font-size: 16px;
  color: #666666;
  margin-bottom: 15px;
}
.content-item__msg{
  font-weight: 400;
  color: #999999;
  font-size: 16px;
  text-align: right;
  padding: 20px 0;
}
.content-item__login{
  color: #047FB5;
  cursor: pointer;
  user-select: none;
  &:active{
    opacity: 0.8;
  }
}
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
  }
  .container-text{
    font-size: 18px;
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
