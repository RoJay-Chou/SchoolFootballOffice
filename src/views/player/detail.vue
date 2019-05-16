<template>
  <div class="coach-container">
    <global-header text="球队" icon="icon-staff">
      <div slot="rightContainer" :class="isCreate ? 'is-create' : ''" class="unit-container__add" @click="addUnitHandle">
        <span style="font-size: 7px; border: 1px solid rgba(121, 121, 121, 0.8);">+添加球队</span>
      </div>
    </global-header>
    <div class="coach-content">
      <div class="coach-list">
        <el-row v-if="listData.length > 0" :gutter="10">
          <el-col v-for="(item, index) in listData" :key="index" :sm="24" :md="12" :lg="8" :xl="4" class="coach-list-col">
            <div class="coach-list__item">
              <div class="coach-edit__mask">
                <span class="coach-edit__view" @click="coachView(item)">
                  <i class="icon-info-b"/>
                  <div class="coach-mask__tootips">查看教练信息</div>
                </span>
                <span class="coach-edit__edit" @click="coachEdit(item)">
                  <i class="icon-edit"/>
                  <div class="coach-mask__tootips">编辑教练信息</div>
                </span>
              </div>
              <div class="coach-item__avatar">
                <div class="coach-avatar__wapper">
                  <img v-if="item.avatar" :src="item.avatar.imagePath" >
                  <img v-else src="../../assets/logo.png" >
                </div>
              </div>
              <div class="coach-item__info">
                <div class="coach-info__title">{{ item.name }}</div>
                <div class="coach-info__content">{{ item.num }} 人</div>
              </div>
            </div>
          </el-col>
        </el-row>
        <div v-else class="noContent">
          {{ noContent }}
        </div>
      </div>
    </div>
    <div v-for="(item, index) in listData" :key="index">
      <global-header :text="item.name" icon="icon-staff">
        <div slot="rightContainer" :class="isCreate ? 'is-create' : ''" class="unit-container__add" @click="addUnitHandle">
          <span style="font-size: 10px">添加球员</span>
        </div>
      </global-header>
      <div class="coach-content">
        <div class="coach-list">
          <el-row v-if="listData1[item.id].length > 0" :gutter="10">
            <el-col v-for="(item, index) in listData1[item.id]" :key="index" :sm="24" :md="12" :lg="8" :xl="4" class="coach-list-col">
              <div class="coach-list__item">
                <div class="coach-item__avatar">
                  <div class="coach-avatar__wapper">
                    <img v-if="item.avatar" :src="item.avatar.imagePath" >
                    <img v-else src="../../assets/logo.png" >
                  </div>
                </div>
                <div class="coach-item__info">
                  <div class="coach-info__title">{{ item.name }}</div>
                  <div class="coach-info__content">{{ item.num }} 岁</div>
                </div>
              </div>
            </el-col>
          </el-row>
          <div v-else class="noContent">
            {{ noContent }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import globalHeader from '@/components/header'

const PAGE_SIZE = 12
const PAGE = 1
export default {
  name: 'StfCoachList',
  components: {
    globalHeader
  },
  data() {
    return {
      amount: null,
      size: null,
      listData: [
        {
          id: 0,
          name: '球队1',
          num: '2'
        },
        {
          id: 1,
          name: '测试球队',
          num: '1'
        },
        {
          id: 2,
          name: '球员',
          num: '3'
        }
      ],
      listData1: [
        [
          {
            name: '测试球员2',
            num: '18'
          },
          {
            name: '测试球员4',
            num: '18'
          }
        ], [
          {
            name: '测试球员2',
            num: '18'
          }
        ], [
          {
            name: '测试球员2',
            num: '18'
          },
          {
            name: '测试球员2',
            num: '18'
          },
          {
            name: '测试球员2',
            num: '18'
          }
        ]],
      listData2: [
        {
          name: '测试球员2',
          num: '18'
        }
      ],
      listData3: [
        {
          name: '球员',
          num: '18'
        }
      ],
      noContent: '暂无教练，您可以使用上方的“+添加教练”按钮添加一个',
      isCreate: false
    }
  },
  created() {
    const coachPageObj = {
      size: PAGE_SIZE,
      page: PAGE
    }
    this.fetch(coachPageObj)
    // 监听更新
    // Bus.$on('updateCoachDetail', this.updateData)
  },
  methods: {
    updateData() {
      const coachPageObj = {
        size: PAGE_SIZE,
        page: PAGE
      }
      this.fetch(coachPageObj)
    },
    fetch(coachPageObj, type) {
    },
    addUnitHandle() {
      this.isCreate = true
    },
    cacheCoachHandle() {
      this.isCreate = false
    },
    saveCoachHandle() {
      const coachPageObj = {
        size: PAGE_SIZE,
        page: PAGE
      }
      this.fetch(coachPageObj)
      this.isCreate = false
    },
    coachView(item) {
      console.log(item)
      const { id } = item
      this.$router.push({ name: 'StfCoachDetail', params: { id }})
    },
    coachEdit(item) {
      this.$router.push({ name: 'StfCoachEdit', params: item })
    },
    limitName(name) {
      const temName = null
      // temName = cardLimitName(name)
      return temName
    },
    birthDateToAge(birth) {
      const temNum = null
      // temNum = birthToAge(birth)
      if (temNum >= 0) {
        return temNum
      } else {
        return '未知'
      }
    },
    pageChange(val) {
      const coachPageObj = {
        size: this.size,
        page: val
      }
      this.fetch(coachPageObj)
    },
    selectData(val) {
      const coachPageObj = {
        size: PAGE_SIZE,
        page: PAGE
      }
      if (val.name) {
        coachPageObj.name = val.name
      }
      this.fetch(coachPageObj, 'select')
    },
    selectReset() {
      const coachPageObj = {
        size: PAGE_SIZE,
        page: PAGE
      }
      this.fetch(coachPageObj)
    }
  }
}
</script>
<style lang="scss" scoped>
.coach-container{
  &::after{
    content: '';
    clear: both;
  }
}
.coach-content{
  padding: 0 10%;
}
.is-create{
  color: #A1A1A1;
  background-color: rgba(208, 212, 218, 1);
}
.noContent{
  font-size: 13px;
  color: #AEAEAE;
  text-align: center;
  padding: 10px 0;
}
.coach-list{
  .coach-list-col{
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .coach-list__item{
    width: 315px;
    height: 120px;
    background-color: rgba(246, 247, 248, 1);
    border: none;
    border-radius: 3px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.349019607843137);
    display: flex;
    align-items: center;
    float: left;
    padding: 25px 20px;
    margin: 15px auto;
    position: relative;
    &:hover{
      .coach-edit__mask{
        display: block;
      }
    }
    .coach-edit__mask{
      position: absolute;
      width: 100%;
      height: 20px;
      padding-top: 2px;
      top: 0;
      left: 0;
      border-radius: 3px 3px 0 0;
      background-color: rgba(0, 157, 224, 1);
      text-align: center;
      color: #fff;
      font-size: 14px;
      display: none;
      .coach-edit__view{
        position: relative;
        margin: 0 5px;
        &:hover{
          .icon-view{
            opacity: 0.5;
          }
          .coach-mask__tootips{
            display: block;
          }
        }
      }
      .coach-edit__edit{
        position: relative;
        margin: 0 5px;
        &:hover{
          .icon-edit{
            opacity: 0.5;
          }
          .coach-mask__tootips{
            display: block;
          }
        }
      }
      .coach-mask__tootips{
        position: absolute;
        left: 0px;
        top: 20px;
        width: 87px;
        height: 20px;
        background-color: rgba(241, 241, 242, 1);
        border-radius: 2px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.66);
        font-size: 12px;
        color: #333333;
        display: none;
      }
    }
    .coach-item__avatar{
      width: 70px;
      .coach-avatar__wapper{
        width: 62px;
        height: 62px;
        background-color: #fff;
        margin: 0 auto;
        border-radius: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        & > img{
          width: 100%;
          height: 100%;
        }
        .coach-avatar__icon{
          font-size: 48px;
          color: #AEAEAE;
          text-align: center;
          margin-left: 5px;
        }
      }
    }
    .coach-item__info{
      margin-left: 15px;
    }
    .coach-info__title{
      font-weight: 700;
      font-size: 16px;
      color: #2C2E30;
      margin-bottom: 5px;
      word-break: break-all;
    }
    .coach-info__content{
      font-weight: 700;
      font-size: 14px;
      color: #2C2E30;
    }
  }
}
</style>
