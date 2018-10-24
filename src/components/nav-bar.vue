<template>

<div class="nav-wrap">
  <div class="container">
    <div class="nav-bar" v-switchNav="'nav-bar_item'">
      <span class="logo">掘金</span>
      <span class="nav-bar_item active">首页</span>
      <span class="nav-bar_item">沸点</span>
      <span class="nav-bar_item">小册</span>
      <span class="nav-bar_item">开源库</span>
      <span class="nav-bar_item">活动</span>
    </div>
    <input type="text" class="search" @keyup.enter="doSearch" placeholder="搜索掘金">
    <button class="search_btn" @click="doSearch">检索</button>
    <div class="information" style="float:right;line-height:50px;">
      <span>通知icon</span>
      <span>个人图标</span>
    </div>
  </div>
</div>


</template>

<script>
//
export default {
  data(){
    return {

    }
  },
  methods:{
    doSearch(){
      console.log('do search!,');
      //this.$router.push('/search')
    }
  }
}
</script>

<style lang="scss" scoped>
.logo{
  font-size: 20px;
  margin: 0 10px;
}
.nav-wrap{
  border-bottom:1px solid #f2f2f2;
  background-color: #fff;
}
.nav-bar{
  line-height:50px;
  display: inline-block;
  .nav-bar_item{
    color: #6f777b;
    cursor: pointer;
    margin: 0 20px;
  }
  .nav-bar_item.active{
    color: #0081ff;
  }
}
input.search{
  width: 200px;
  padding-left: 10px;
  height: 30px;
}
.search_btn{
  height: 30px;
  background-color: #0081ff;
  border: 1px solid #ccc;
}

</style>
