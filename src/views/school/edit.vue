<template>
  <div class="unit-container">
    <global-header :icon="'icon-info-b'" text="学校信息"/>
    <div class="unit-content">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" hide-required-asterisk class="unit-ruleForm">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="school-name">
              <div class="school-nameImg" @click="show = true"><img :src="logo" class="sap-logo" ></div>
              <div class="school-nameText">{{ ruleForm.name || '电子科技大学成都学院' }}</div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="school-info">
              <div class="school-info__title">基本信息</div>
              <div class="unit-center__container">
                <div class="unit-center__items">
                  <el-form-item label="学校类型" prop="category">
                    <el-input v-model="ruleForm.category" placeholder="请输入"/>
                  </el-form-item>
                </div>
                <div class="unit-center__items">
                  <el-form-item label="所在地区" prop="locationStr">
                    <el-input v-model="ruleForm.locationStr" placeholder="请输入"/>
                  </el-form-item>
                </div>

                <div class="unit-center__items">
                  <el-form-item label="详细地址" prop="detailedAddress">
                    <el-input v-model="ruleForm.detailedAddress" placeholder="请输入"/>
                  </el-form-item>
                </div>

                <div class="unit-center__items">
                  <el-form-item label="主力球队" prop="starTeam">
                    <el-input v-model="ruleForm.starTeam" placeholder="请输入"/>
                  </el-form-item>
                </div>

              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="school-info">
              <div class="school-info__title">联系方式</div>
              <div class="unit-center__container" style="margin-bottom: 0">
                <div class="unit-center__items">
                  <el-form-item label="学校电话" prop="phoneNum">
                    <el-input v-model="ruleForm.phoneNum" placeholder="请输入"/>
                  </el-form-item>
                </div>

                <div class="unit-center__items">
                  <el-form-item label="学校邮编" prop="postcode">
                    <el-input v-model="ruleForm.postcode" placeholder="请输入"/>
                  </el-form-item>
                </div>

                <div class="unit-center__items">
                  <el-form-item label="联系人姓名" prop="contactName">
                    <el-input v-model="ruleForm.contactName" placeholder="请输入"/>
                  </el-form-item>
                </div>

                <div class="unit-center__items">
                  <el-form-item label="联系人手机号" prop="contactMobile">
                    <el-input v-model="ruleForm.contactMobile" placeholder="请输入"/>
                  </el-form-item>
                </div>

                <div class="unit-center__items">
                  <el-form-item label="联系人邮箱" prop="contactMail">
                    <el-input v-model="ruleForm.contactMail" placeholder="请输入"/>
                  </el-form-item>
                </div>

                <div class="unit-center__items">
                  <el-form-item label="备注" prop="remark">
                    <el-input v-model="ruleForm.remark" placeholder="请输入"/>
                  </el-form-item>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>

        <div class="footer-btn">
          <div class="footer-btn__container">
            <button class="footer-btn__item btn-cancel" type="button" @click="resetForm('ruleForm')">取消</button>
            <button class="footer-btn__item btn-save" type="button" @click="saveToForm('ruleForm')">保存</button>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import logo from '@/assets/JayLogo.png'
import globalHeader from '@/components/header'
// import { editUnit } from '@/api/unit'
// import { loaclToPCD, PCDTolocal } from '@/utils'
import validataMsg from '@/utils/validator'
// import uploadAvatar from '@/components/uploadAvatar'
// import options from '@/mixin/selectOptions'

export default {
  name: 'SchoolEdit',
  components: {
    globalHeader
    // uploadAvatar
  },
  // mixins: [options],
  data() {
    return {
      logo,
      imgDataUrl: null,
      ruleForm: {
        location: [],
        contactMail: '',
        contactMobile: '',
        contactName: '',
        detailedAddress: '',
        logo: null,
        orgCategory: '',
        organizationFullName: '',
        phoneNum: '',
        postcode: '',
        status: ''
      },
      rules: validataMsg
    }
  },
  created() {
    if (this.$route.params) {
      const unitListData = this.$route.params
      // 组合省市县
      // unitListData = PCDTolocal(unitListData)
      // 组合完成
      if (unitListData.logo && typeof unitListData.logo === 'object') {
        this.imgDataUrl = unitListData.logo.imagePath
      }
      this.ruleForm = Object.assign({}, this.ruleForm, unitListData)
    }
  },
  methods: {
    saveToForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 动态分割省市区
        //   this.ruleForm = loaclToPCD(this.ruleForm)
          if (typeof this.ruleForm.logo === 'object') {
            this.ruleForm.logo = this.ruleForm.logo.imageName
          }
        //   editUnit(this.ruleForm).then((data) => {
        //     this.$message({
        //       message: '更新成功',
        //       customClass: 'ptInfoMessage'
        //     })
        //     this.$router.go(-1)
        //   })
        } else {
          this.$message({
            message: '请检查数据填写！',
            customClass: 'ptInfoMessage'
          })
          return false
        }
      })
    },
    resetForm(formName) {
      this.$confirm('是否退出当前页面?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.go(-1)
      })
    },
    uploadBtn() {
      this.$refs.uploadAvatar.showUpload()
    },
    imgLocalPath(data) {
      this.imgDataUrl = data
    },
    progress(num) {
      console.log('----图片上传进度----', num)
    },
    uploadPath(imagePath) {
      this.ruleForm.logo = imagePath.imageName
    }
  }
}
</script>
<style lang="scss" scoped>
.school-name {
  display: flex;
  align-items: center;
  flex-direction: column;
  .school-nameImg {
    margin-top: 20px;
    height: 250px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    .sap-logo {
      height: auto;
      width: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .school-nameText {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }
}
.school-info {
  margin-top: 100px;
  text-align: left;
  .school-info__title {
    color: #FFF;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 20px;
  }
}
.unit-container{
  min-height: 100%;
  background-image: url('~@/assets/unitBG.jpg');
  background-size: 100% auto;
  background-position: left bottom;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  &:after{
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background-color: rgba(0, 0, 0, 0.69);;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  .global-container{
    position: relative;
    z-index: 9;
  }
}
.unit-content__title{
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
}
.unit-title__second{
  margin-top: 40px;
}
.unit-container__add{
  color: #A1A1A1;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(208, 212, 218, 1);
  padding: 4px 10px;
  cursor: pointer;
}
.unit-content{
  position: relative;
  z-index: 9;
  color: #fff;
}

.footer-btn{
  text-align: right;
  margin-top: 20px;
	margin-right: 125px;
  .footer-btn__container{
    .footer-btn__item{
      background-color: rgba(0, 157, 225, 1);
      border: none;
      border-radius: 3px;
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
      color: #FFFFFF;
      width: 57px;
      height: 32px;
      padding: 3px 0;
      outline:none;
      &:active{
        opacity: 0.5;
        border: none;
        box-shadow: none;
      }
    }
    .btn-cancel{
      background-color: rgba(125, 130, 133, 1);
      margin-right: 5px;
    }
  }
}
.left-content{
  .left-content__avatar{
    display: flex;
    align-items: flex-start;
    margin-bottom: 13px;
    .left-avatar__container{
      width: 160px;
      height: 160px;
      border: 1px solid rgba(121, 121, 121, 1);
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      & > img{
        width: 100%;
        height: 100%;
      }
      .left-avatar__iconCircle{
        width: 124px;
        height: 124px;
        border: 3px solid rgba(192,192,192,1);
        border-radius: 180px;
        display: flex;
        align-items: center;
        color: rgba(192,192,192,1);
        justify-content: center;
        .left-avatar__icon{
          font-size: 80px;
        }
      }
    }
    .left-avatar__uploadIcon{
      width: 26px;
      height: 26px;
      background-color: rgba(238, 239, 244, 1);
      color: #000;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
      cursor: pointer;
      &:active{
        opacity: 0.5;
      }
    }
  }
}

.el-select{
  width: 100%;
}

.unit-content_items{
  margin: 5px 0;
}
.search-container__select{
  font-weight: 400;
  font-size: 13px;
  margin: 5px 0;
  color: #D7D7D7;
  .search-title{
    height: 32px;
    display: flex;
    align-items: center;
  }
}
.search-select__content {
  /deep/ .el-cascader .el-cascader__label{
    top: 0;
  }
}
.unit-center__container{
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 30px;
  .unit-center__items{
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    // padding: 0 10px;
		width: 80%;
  }
  .unit-items__title{
    flex: 1;
    color: #000;
  }
  .unit-items__content{
    flex: 1.7;
    color: #000;
  }
}
</style>
