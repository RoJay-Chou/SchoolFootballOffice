<template>
  <div @click="noShowCallMe">
    <el-container class="layout-wapper">
      <el-aside width="200px" class="layout-wapper__left">
        <div class="layout-logo">
          <img :src="logo" class="logo" >
        </div>
        <!-- :default-active="$route.path"
          router -->
        <el-menu
          class="el-menu-vertical-demo"
          active-text-color="#409EFF"
          background-color="#303133"
          text-color="#fff"
          @select="select"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu class="layout-wapper__leftcontent" index="1">
            <template slot="title">
              <i class="el-icon-location"/>
              <span>球队信息</span>
            </template>
            <el-menu-item-group>
              <template slot="title">球队</template>
              <el-menu-item :index="routerList.name">球队列表</el-menu-item>
              <el-menu-item index="1-2">球队战绩</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">球员</template>
              <el-menu-item index="1-3">球员列表</el-menu-item>
              <el-menu-item index="1-4">球员数据</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item class="layout-wapper__leftcontent" index="2">
            <i class="el-icon-menu"/>
            <span>学校信息</span>
          </el-menu-item>
          <el-menu-item class="layout-wapper__leftcontent" index="3">
            <i class="el-icon-setting"/>
            <span>更多</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="layout-wapper__header">
          <el-dropdown>
            <i class="el-icon-setting" style="font-size:30px; margin-top: 20px"/>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-header class="layout-wapper__headertitle">
          <img :src="footballLogo" class="logo" >
          <div class="layout-wapper__title">校园足球管理</div>
        </el-header>
        <el-main>
          <app-main/>
        </el-main>
      </el-container>
      <div class="message" @click.stop="callMe">
        <i class="el-icon-message"/>
        <div class="message-text">联系我们</div>
      </div>
      <div :class="show ? 'callin' : 'callout'" class="callme">
        <div class="callme-left">
          <div class="callme-leftcall">请致电我的手机</div>
          <div class="callme-leftnation">中国</div>
          <div class="callme-leftnum">+086-158-8321-8928</div>
        </div>
        <div class="callme-right">
          <div class="callme-rightitem">
            <div class="icon"><i class="el-icon-star-on iconStyle"/></div>
            <div class="callme-rightitemText">
              微信<br>
              通过微信在线洽谈，并关注公众号
            </div>
          </div>
          <div class="callme-rightitem" style="border-bottom: 1px solid #ddd;border-top: 1px solid #ddd;">
            <div class="icon"><i class="el-icon-mobile-phone iconStyle"/></div>
            <div class="callme-rightitemText">
              离线聊天<br>
              若当前离线，点击右侧联系我们，将有专人尽快与您联系
            </div>
          </div>
          <div class="callme-rightitem">
            <div class="icon"><i class="el-icon-message iconStyle"/></div>
            <div class="callme-rightitemText">
              联系我们<br>
              如有任何意见、问题或反馈，欢迎您给我们发送电子邮件
            </div>
          </div>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
import AppMain from './mainApp'
import logo from '@/assets/JayLogo.png'
import footballLogo from '@/assets/footballLogo.png'
export default {
  components: {
    AppMain
  },
  data() {
    return {
      logo,
      show: false,
      footballLogo,
      routerList: {
        name: '/schoolDetial'
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    select(key, keyPath) {
      console.log(key, keyPath)
    },
    callMe() {
      this.show = true
    },
    noShowCallMe() {
      this.show = false
    }
  }
}
</script>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.el-main {
  height: 100%;
  width: 100%;
  padding: 0;
}
.el-aside {
  color: #333;
}
.layout-wapper {
  height: 100%;
  z-index: 9;
}
body{
  overflow-x: hidden;
}
.layout-wapper__left {
  z-index: 11;
  background-color: #303133;
}
.el-menu {
  border-right: solid 0px #000;
  border-right-width: 0px;
  border-right-style: solid;
  border-right-color: rgba(0, 0, 0, 0);
}
el-menu-vertical-demo {
  margin-right: 0 !important;
  border-right-width: 0px !important;
}
ul {
  margin-block-start: 0 !important;
  margin-block-end: 0 !important;
}
.logo {
  width:auto;
  height:auto;
  max-width:100%;
  max-height:100%;
}
.layout-logo {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.layout-wapper__header {
  z-index: 10;
  box-shadow: 0px 5px 3px rgba(134, 134, 134, 0.349019607843137);
  background-color: #303133;
  height: 50px !important;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 12px;
}
.layout-wapper__headertitle {
  z-index: 9;
  box-shadow: 0px 5px 3px rgba(134, 134, 134, 0.349019607843137);
  background-color: rgba(7, 158, 229, 1);
  height: 80px !important;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.layout-wapper__title {
  margin-left: 20px;
  color: #fff;
  font-size: 25px;
}
.layout-wapper__leftcontent {
  text-align: left;
}
.message {
  width: 107px;
  height: 70px;
  position: absolute;
  z-index: 999;
  right: 0;
  top: 55%;
  background-color: #2fa0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.el-icon-message {
  font-size: 30px;
  font-weight: 200;
  color: #fff;
}
.message-text {
  font-size: 14px;
  line-height: 14px;
  color: #fff;
}
.callme {
  width: 600px;
  height: 380px;
  display: flex;
  position: absolute;
  right: -600px;
  top: 40%;
  z-index: 9999;
}
.callme-left {
  height: 100%;
  width: 60%;
  background-color: #2fa0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.callme-leftcall {
  color: #fff;
  font-size: 23px;
  font-weight: 400;
}
.callme-leftnation {
  color: #fff;
  font-size: 13px;
  font-weight: 100;
  margin-top: 20px;
}
.callme-leftnum {
  color: #fff;
  font-size:29px;
  font-weight:400;
  margin-top:4px;
}
.callme-right {
  background-color: rgb(240, 240, 240);
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.callme-rightitem {
  width: 100%;
  height: 33.33%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon {
  color: #333;
  width: 30%;
  height: 100%;
  padding-top: 10%;
}
.callme-rightitemText {
  width: 70%;
  height: 100%;
  color:rgb(51, 51, 51);
  display:flex;
  align-items: center;
  text-align: left;
  font-size:13px;
  font-weight:100;
}
.iconStyle {
  color: #333;
  font-size: 30px;
}
.callin {
  transition: transform 0.3s ease-out;
  transform: translateX(-600px);
}
.callout {
  transition: transform 0.5s ease-in;
  transform: translateX(600px);
}
</style>
