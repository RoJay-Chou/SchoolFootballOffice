<template>
  <div class="container">
    <global-header text="学校列表"/>
    <div v-if="true" class="school-wapperFirstIn">
      <div class="school-wapperFirstInTitle">数字化体育成绩和团队管理流程</div>
      <div class="school-wapperFirstInCard">
        <el-carousel :autoplay="false" type="card">
          <el-carousel-item v-for="item in 4" :key="item">
            <div class="el-carousel-item__title">{{ item }}</div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div v-else class="school-wapper">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="school-name">
            <div class="school-nameImg"><img :src="logo" class="sap-logo" ></div>
            <div class="school-nameText">{{ schoolInfo.name || '电子科技大学成都学院' }}</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="school-info">
            <div class="school-info__title">基本信息</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="school-info">
            <div class="school-info__title">联系方式</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import logo from '@/assets/JayLogo.png'
import globalHeader from '@/components/header'
export default {
  name: 'SchoolDetial',
  components: {
    globalHeader
  },
  data() {
    return {
      logo,
      schoolInfo: {
        name: '',
        logo: '',
        category: '',
        location: [],
        contactMail: '',
        contactMobile: '',
        contactName: '',
        detailedAddress: '',
        phoneNum: null,
        postcode: '',
        playerNum: null,
        starTeam: '',
        teamNum: null,
        remark: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.5), rgba(255,255,255,0.7), rgba(255,255,255,0.7), rgba(255,255,255,1), rgba(255,255,255,1)), url('~@/assets/schoolBkg.jpg');
  background: -prefix-linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.5), rgba(255,255,255,0.7), rgba(255,255,255,0.7), rgba(255,255,255,1), rgba(255,255,255,1)), url('~@/assets/schoolBkg.jpg');
  background-size: 100% auto;
  background-position: left top;
  background-repeat: no-repeat;
}
.school-wapperFirstIn {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .school-wapperFirstInTitle {
    color: #000;
    font-size: 35px;
    font-weight: 500;
    position: absolute;
    top: 180px;
    z-index: 9;
  }
  .school-wapperFirstInCard {
    padding-top: 15%;
    height: 100%;
    width: 60%;
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      height: 100%;
      width: 100%;
      line-height: 150px;
      margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    /deep/ .el-carousel.el-carousel--card {
      /deep/.el-carousel__indicators.el-carousel__indicators--outside {
        /deep/ .el-carousel__indicator {
          .el-carousel__button {
            background-color: rgba(7, 158, 229, 1) !important;
          }
        }
      }
    }
  }
}
.el-carousel-item__title {
  color: #000;
  position: relative;
  top: 100px;
}
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
    color: #303133;
    font-size: 20px;
    font-weight: 600;
  }
}
.school-info {
  margin-top: 150px;
  text-align: left;
  .school-info__title {
    color: #303133;
    font-size: 15px;
    font-weight: 600;
  }
}
</style>
