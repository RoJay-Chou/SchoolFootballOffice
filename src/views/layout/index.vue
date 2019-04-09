<template>
  <el-container class="layout-wapper">
    <el-aside width="200px" class="layout-wapper__left">
      <div class="layout-logo">
        <img :src="logo" class="logo" >
      </div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        active-text-color="#409EFF"
        background-color="#303133"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"/>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"/>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"/>
          <span slot="title">导航三</span>
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
  </el-container>
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
      footballLogo
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
.el-aside {
  color: #333;
}
.layout-wapper {
  height: 100%;
}
.layout-wapper__left {
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
  background-color: #303133;
  height: 50px !important;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 12px;
}
.layout-wapper__headertitle {
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
</style>
