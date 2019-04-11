<template>
  <div class="global-container">
    <div class="header-left__container">
      <el-row type="flex" justify="center" align="middle">
        <i class="el-icon-tickets"/>
        <span>{{ text }}</span>
      </el-row>
    </div>
    <div class="header-right__container">
      <slot name="rightContainer"/>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    text: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
.global-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(223, 225, 229, 1);
  height: 50px;
  padding:0 10%;
  color: #333333;
  font-size: 16px;
  font-weight: 700;
}
</style>
