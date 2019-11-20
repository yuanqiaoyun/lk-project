<template>
  <div id="dashBoard">
    <!-- 主面板11111 -->
     <!--不写下面的router-view的时候，显示的就是dashboard组件的内容，写的话就是显示主页的内容了 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name:'DashBoard',
}
</script>

<style lang="less" scope>
#dashBoard{
  width:100%;
  height:100%;
}
</style>