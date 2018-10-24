<template>
<div class="nav-wrap">
  <div class="container">
    <div class="nav-tab">
      <div style="float:left;" v-switchNav="'nav-tab_item'">
        <span class="nav-tab_item active">我关注的</span>
        <span class="nav-tab_item">Android</span>
        <span class="nav-tab_item">前端</span>
        <span class="nav-tab_item">iOS</span>
        <span class="nav-tab_item">后端</span>
        <span class="nav-tab_item">设计</span>
        <span class="nav-tab_item">产品</span>
        <span class="nav-tab_item">工具资源</span>
        <span class="nav-tab_item">人工智能</span>
        <span class="nav-tab_item">运维</span>
      </div>
      <div style="float:right;">
        标签管理
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav-wrap{
  box-shadow: 0px 0.4px 0.4px #f3f4f4;
  background-color: #fff;
}
.nav-tab{
  display: inline-block;

  width: 100%;
  line-height: 40px;
  font-size: 14px;
  .nav-tab_item{
    color: #6f777b;
    cursor: pointer;
    margin: 0 10px;
  }
  .nav-tab_item.active{
    color: #0081ff;
  }
}
</style>
