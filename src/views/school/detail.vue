<template>
  <div class="container">
    <global-header text="学校信息" @click.native="getUser()"/>
    <transition name="el-zoom-in-top">
      <div v-show="show" class="school-wapperFirstIn">
        <div class="school-wapperFirstInTitle">数字化体育成绩和团队管理流程</div>
        <div class="school-wapperFirstInCard">
          <el-carousel :autoplay="false" type="card">
            <el-carousel-item v-for="item in [1,2,0]" :key="item">
              <div class="el-carousel-item__title" @click="choose(item)">
                <img :src="bkg[item]" class="el-carousel-item__img">
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </transition>
    <transition name="el-zoom-in-bottom">
      <div v-show="!show" class="school-wapper">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="school-name">
              <div class="school-nameImg" @click="show = true"><img :src="logo" class="sap-logo" ></div>
              <div class="school-nameText">{{ schoolInfo.name || '电子科技大学成都学院' }}</div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="school-info">
              <div class="school-info__title">基本信息</div>
              <div class="unit-center__container">
                <div class="unit-center__items">
                  <div class="unit-items__title">学校类型</div>
                  <div class="unit-items__content">{{ schoolInfo.category || '高等学校' }}</div>
                </div>
                <div class="unit-center__items">
                  <div class="unit-items__title">所在地区</div>
                  <div class="unit-items__content">{{ schoolInfo.locationStr || '四川省/成都市' }}</div>
                </div>

                <div class="unit-center__items">
                  <div class="unit-items__title">详细地址</div>
                  <div class="unit-items__content">{{ schoolInfo.detailedAddress || '四川省成都市高新西区百叶路1号' }}</div>
                </div>

                <div class="unit-center__items">
                  <div class="unit-items__title">主力球队</div>
                  <div class="unit-items__content">{{ schoolInfo.starTeam || '主力球队' }}</div>
                </div>

                <div class="unit-center__items">
                  <div class="unit-items__title">球队数</div>
                  <div class="unit-items__content">{{ schoolInfo.teamNum || '1' }}</div>
                </div>

                <div class="unit-center__items">
                  <div class="unit-items__title">球员数</div>
                  <div class="unit-items__content">{{ schoolInfo.playerNum || '1' }}</div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="school-info">
              <div class="school-info__title">联系方式</div>
              <div class="unit-center__container" style="margin-bottom: 0">
                <div class="unit-center__items">
                  <div class="unit-items__title">学校电话</div>
                  <div class="unit-items__content">{{ schoolInfo.phoneNum || '02800000000' }}</div>
                </div>

                <div class="unit-center__items">
                  <div class="unit-items__title">学校邮编</div>
                  <div class="unit-items__content">{{ schoolInfo.postcode || '611731 ' }}</div>
                </div>

                <div class="unit-center__items">
                  <div class="unit-items__title">联系人姓名</div>
                  <div class="unit-items__content">{{ schoolInfo.contactName || '周瑞杰' }}</div>
                </div>

                <div class="unit-center__items">
                  <div class="unit-items__title">联系人手机号</div>
                  <div class="unit-items__content">{{ schoolInfo.contactMobile || '15883218928' }}</div>
                </div>

                <div class="unit-center__items">
                  <div class="unit-items__title">联系人邮箱</div>
                  <div class="unit-items__content">{{ schoolInfo.contactMail || 'rojay_chou@163.com' }}</div>
                </div>

                <div class="unit-center__items">
                  <div class="unit-items__title">备注</div>
                  <div class="unit-items__content">{{ schoolInfo.remark || '备注备注备注' }}</div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </transition>
  </div>
</template>
<script>
import logo from '@/assets/JayLogo.png'
import bkg1 from '@/assets/unitBG.jpg'
import bkg2 from '@/assets/schoolBkg.jpg'
import bkg3 from '@/assets/unitBG.jpg'
import globalHeader from '@/components/header'
import { getUserInfo } from '@/api'
export default {
  name: 'SchoolDetial',
  components: {
    globalHeader
  },
  data() {
    return {
      bkg: [
        bkg1,
        bkg2,
        bkg3
      ],
      logo,
      show: true,
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
  },
  created() {
    this.$message({
      message: '登录成功！',
      customClass: 'ptInfoMessage'
    })
  },
  methods: {
    choose(item) {
      console.log('+++', item)
      if (item === 1) {
        this.show = false
      }
    },
    getUser() {
      console.log('+++-----------+++')
      getUserInfo().then(response => {
        console.log('+++-----------', response)
      })
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
.school-wapper {
  height: 100%;
  width: 100%;
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
  .el-carousel-item__img {
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
  }
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
    margin-bottom: 20px;
  }
}
.unit-center__container{
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 30px;
  .unit-center__items{
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
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
