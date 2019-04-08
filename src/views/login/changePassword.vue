<template>
  <div class="password-container">
    <global-header text="更改密码" icon="icon-password"/>
    <div class="pwd-content">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" hide-required-asterisk class="template-ruleForm">
        <div class="template-content_items">
          <el-form-item label="旧密码" prop="oldPassword">
            <el-input v-model="ruleForm.oldPassword" type="password" placeholder="请输入"/>
          </el-form-item>
        </div>

        <div class="template-content_items">
          <el-form-item label="新密码" prop="newPassword">
            <el-input v-model="ruleForm.newPassword" type="password" placeholder="请输入"/>
          </el-form-item>
          <div class="login-change"><span><i class="icon-info icon-info-b"/></span>支持8-20位密码，至少含字母/数字/符号中的2种组合</div>
        </div>

        <div class="template-content_items">
          <el-form-item label="再次输入新密码" prop="checkNewPassword">
            <el-input v-model="ruleForm.checkNewPassword" type="password" placeholder="请输入"/>
          </el-form-item>
        </div>
      </el-form>
      <div class="btn-container">
        <button type="button" class="login-btn__cancel" @click="checkCancel">取消</button>
        <button type="button" class="login-btn__check" @click="checkChange('ruleForm')">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
import globalHeader from '@/components/globalHeader'
import { changePassword } from '@/api/login'
export default {
  name: 'ChangePassword',
  components: {
    globalHeader
  },
  data() {
    const validatePassword = (rule, value, callback) => {
      const passwordReg = /(?!^\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?!^.*[\u4E00-\u9FA5].*$)^\S{8,20}$/
      if (value === '') {
        callback('请输入密码')
      } else if (!passwordReg.test(value)) {
        callback(new Error('密码格式错误，请重新输入'))
      } else {
        callback()
      }
    }

    const validateCheckPassword = (rule, value, callback) => {
      const passwordReg = /(?!^\d+$)(?!^[A-Za-z]+$)(?!^[^A-Za-z0-9]+$)(?!^.*[\u4E00-\u9FA5].*$)^\S{8,20}$/
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (!passwordReg.test(value)) {
        callback(new Error('密码格式错误，请重新输入'))
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      redirect: undefined,
      rules: {
        oldPassword: [
          { required: true, validator: validatePassword, trigger: 'blur' }
        ],
        newPassword: [
          { required: true, validator: validatePassword, trigger: 'blur' }
        ],
        checkNewPassword: [
          { required: true, validator: validateCheckPassword, trigger: 'blur' }
        ]
      },
      ruleForm: {
        oldPassword: '',
        newPassword: '',
        checkNewPassword: ''
      }
    }
  },
  methods: {
    checkCancel() {
      this.$router.go(-1)
    },
    checkChange(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const loginName = this.$store.state.user.username
          const newPassword = this.ruleForm.newPassword
          const oldPassword = this.ruleForm.oldPassword
          changePassword({ loginName, newPassword, oldPassword }).then((data) => {
            this.$store.dispatch('LogOutUser').then(() => {
              this.$router.replace('/login')
            })
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.password-container{
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.96), rgba(255,255,255,1), rgba(255,255,255,1), rgba(255,255,255,0.95), rgba(255,255,255,0)), url('~@/assets/unitBG.jpg');
  background: -prefix-linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.96), rgba(255,255,255,1), rgba(255,255,255,1), rgba(255,255,255,0.95), rgba(255,255,255,0)), url('~@/assets/unitBG.jpg');
  background-size: 100% auto;
  background-position: left bottom;
  background-repeat: no-repeat;
  position: relative;
}
.pwd-content{
  padding:20px 10%;
  padding-bottom: 40px;
  background-color: rgba(241, 251, 255, 1);
}
.btn-container{
  text-align: right;
}
.login-change{
  font-size: 14px;
  color: #666666;
}
.icon-info{
  color: #079EE5;
  font-size: 16px;
}
.login-btn__cancel{
  font-size: 14px;
  color: #FFFFFF;
  background-color: rgba(125, 130, 133, 1);
  border-radius: 3px;
  border: none;
  padding: 7px 10px;
}
.login-btn__check{
  font-size: 14px;
  color: #FFFFFF;
  background-color: rgba(0, 157, 225, 1);
  border-radius: 3px;
  border: none;
  padding: 7px 10px;
}
.template-content_items{
  /deep/ .el-form-item__label{
    font-size: 13px;
    color: #898C8F;
  }
}
</style>

