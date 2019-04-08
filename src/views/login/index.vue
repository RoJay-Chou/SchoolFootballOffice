<template>
  <div class="container">
    <router-view/>
    <!-- <login-view/> -->
    <div class="container-footer">
      <span>
        <img :src="logo" class="sap-logo" >
      </span>
      <span style="font-weight: 500;color: #747b81;">Copyright © 2019 Jay. All rights reserved</span>
    </div>
  </div>
</template>
<script>
import loginView from './login'
import logo from '@/assets/JayLogo.png'

export default {
  name: 'Login',
  components: {
    loginView
  },
  data() {
    return {
      logo
    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.5), rgba(255,255,255,1), rgba(255,255,255,1), rgba(255,255,255,0.6), rgba(255,255,255,0)), url('~@/assets/realmadrid.jpg');
  background: -prefix-linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.5), rgba(255,255,255,1), rgba(255,255,255,1), rgba(255,255,255,0.6), rgba(255,255,255,0)), url('~@/assets/realmadrid.jpg');
  background-size: 100% auto;
  background-position: left bottom;
  background-repeat: no-repeat;
  position: relative;
}
.container-footer{
  position: absolute;
  bottom: 20px;
  width: 96%;
  margin-left: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .sap-logo{
    width: 80px;
    height: 40px;
  }
  z-index: 1;
}
</style>
